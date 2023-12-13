
#ifndef __CLOCK_FREQ_H__
#define __CLOCK_FREQ_H__

#include "device_imx.h"

/*!
 * @addtogroup clock_freq_helper
 * @{
 */

/*******************************************************************************
 * API
 ******************************************************************************/

#if defined(__cplusplus)
extern "C" {
#endif

/*!
 * @brief Get clock frequency applys to the GPT module
 *
 * @param base GPT base pointer.
 * @return clock frequency (in HZ) applys to the GPT module
 */
uint32_t get_gpt_clock_freq(GPT_Type* base);

/*!
 * @brief Get clock frequency applys to the ECSPI module
 *
 * @param base ECSPI base pointer.
 * @return clock frequency (in HZ) applys to the ECSPI module
 */
uint32_t get_ecspi_clock_freq(ECSPI_Type* base);

/*!
 * @brief Get clock frequency applys to the FLEXCAN module
 *
 * @param base CAN base pointer.
 * @return clock frequency (in HZ) applys to the FLEXCAN module
 */
uint32_t get_flexcan_clock_freq(CAN_Type* base);

/*!
 * @brief Get clock frequency applys to the I2C module
 *
 * @param base I2C base pointer.
 * @return clock frequency (in HZ) applys to the I2C module
 */
uint32_t get_i2c_clock_freq(I2C_Type* base);

/*!
 * @brief Get clock frequency applys to the UART module
 *
 * @param base UART base pointer.
 * @return clock frequency (in HZ) applys to the UART module
 */
uint32_t get_uart_clock_freq(UART_Type* base);

#if defined(__cplusplus)
}
#endif

/*! @}*/

#endif 