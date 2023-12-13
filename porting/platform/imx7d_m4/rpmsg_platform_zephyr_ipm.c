
// #include <ipm.h>

#include <stdio.h>
#include <string.h>

#include "rpmsg_platform.h"
#include "rpmsg_env.h"
#include <zephyr/drivers/ipm.h>

static int isr_counter = 0;
static int disable_counter = 0;
static void *lock;
static struct device *ipm_handle = NULL;

void platform_ipm_callback(void *context, uint32_t id, volatile void *data)
{
    if (id != RPMSG_MU_CHANNEL)
    {
	return;
    }

    /* Data to be transmitted from Master */
    if (*(uint32_t*)data == 0)
    {
        env_isr(0);
    }

    /* Data to be received from Master */
    if (*(uint32_t*)data == 0x10000)
    {
        env_isr(1);
    }
}

int platform_init_interrupt(int vq_id, void *isr_data)
{
    /* Register ISR to environment layer */
    env_register_isr(vq_id, isr_data);

    env_lock_mutex(lock);

    RL_ASSERT(0 <= isr_counter);

    isr_counter++;

    env_unlock_mutex(lock);

    return 0;
}

int platform_deinit_interrupt(int vq_id)
{
    /* Prepare the MU Hardware */
    env_lock_mutex(lock);

    RL_ASSERT(0 < isr_counter);
    isr_counter--;
    if ((!isr_counter) && (ipm_handle != NULL))
    {
        ipm_set_enabled(ipm_handle, 0);
    }

    /* Unregister ISR from environment layer */
    env_unregister_isr(vq_id);

    env_unlock_mutex(lock);

    return 0;
}

void platform_notify(int vq_id)
{
    switch (RL_GET_LINK_ID(vq_id))
    {
        case RL_PLATFORM_IMX7D_M4_LINK_ID:
            env_lock_mutex(lock);
            uint32_t data = (RL_GET_Q_ID(vq_id) << 16);
            RL_ASSERT(ipm_handle);
            ipm_send(ipm_handle, 0, RPMSG_MU_CHANNEL, &data, sizeof(uint32_t));
            env_unlock_mutex(lock);
            return;

        default:
            return;
    }
}

/**
 * platform_in_isr
 *
 * Return whether CPU is processing IRQ
 *
 * @return True for IRQ, false otherwise.
 *
 */
int platform_in_isr(void)
{
    return (0 != k_is_in_isr());
}

/**
 * platform_interrupt_enable
 *
 * Enable peripheral-related interrupt with passed priority and type.
 *
 * @param vq_id Vector ID that need to be converted to IRQ number
 * @param trigger_type IRQ active level
 * @param trigger_type IRQ priority
 *
 * @return vq_id. Return value is never checked..
 *
 */
int platform_interrupt_enable(unsigned int vq_id)
{
    RL_ASSERT(0 < disable_counter);

//    __asm volatile("cpsid i");
    disable_counter--;

    if ((!disable_counter) && (ipm_handle != NULL))
    {
        ipm_set_enabled(ipm_handle, 1);
    }
//    __asm volatile("cpsie i");
    return (vq_id);
}

/**
 * platform_interrupt_disable
 *
 * Disable peripheral-related interrupt.
 *
 * @param vq_id Vector ID that need to be converted to IRQ number
 *
 * @return vq_id. Return value is never checked.
 *
 */
int platform_interrupt_disable(unsigned int vq_id)
{
    RL_ASSERT(0 <= disable_counter);

//    __asm volatile("cpsid i");
    // virtqueues use the same NVIC vector
    // if counter is set - the interrupts are disabled
    if ((!disable_counter) && (ipm_handle != NULL))
    {
        ipm_set_enabled(ipm_handle, 0);
    }

    disable_counter++;
//    __asm volatile("cpsie i");
    return (vq_id);
}

/**
 * platform_map_mem_region
 *
 * Dummy implementation
 *
 */
void platform_map_mem_region(unsigned int vrt_addr, unsigned int phy_addr, unsigned int size, unsigned int flags)
{
}

/**
 * platform_cache_all_flush_invalidate
 *
 * Dummy implementation
 *
 */
void platform_cache_all_flush_invalidate()
{
}

/**
 * platform_cache_disable
 *
 * Dummy implementation
 *
 */
void platform_cache_disable()
{
}

/**
 * platform_vatopa
 *
 * Dummy implementation
 *
 */
unsigned long platform_vatopa(void *addr)
{
    return ((unsigned long)addr);
}

/**
 * platform_patova
 *
 * Dummy implementation
 *
 */
void *platform_patova(unsigned long addr)
{
    return ((void *)addr);
}

/**
 * platform_init
 *
 * platform/environment init
 */
int platform_init(void)
{
    /* Get IPM device handle */
    ipm_handle = device_get_binding("MU_B");
    if(!ipm_handle)
    {
        return -1;
    }

    /* Register application callback with no context */
    ipm_register_callback(ipm_handle, platform_ipm_callback, NULL);

    /* Create lock used in multi-instanced RPMsg */
    env_create_mutex(&lock, 1);

    return 0;
}

/**
 * platform_deinit
 *
 * platform/environment deinit process
 */
int platform_deinit(void)
{
    /* Delete lock used in multi-instanced RPMsg */
    env_delete_mutex(lock);
    lock = NULL;
    return 0;
}

