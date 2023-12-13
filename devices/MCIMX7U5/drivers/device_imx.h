
#ifndef __DEVICE_IMX_H__
#define __DEVICE_IMX_H__

/*
 * Include the cpu specific register header files.
 *
 * The CPU macro should be declared in the project or makefile.
 */
#if defined(CPU_MCIMX6X_M4)

    /* CMSIS-style register definitions */
    #include "MCIMX6X/include/MCIMX6X_M4.h"
    #define RDC_SEMAPHORE_MASTER_SELF   (5)
    #define SEMA4_PROCESSOR_SELF        (1)

#elif defined(CPU_MCIMX7D_M4)

    /* CMSIS-style register definitions */
    #include "MCIMX7D/include/MCIMX7D_M4.h"

    #define RDC_SEMAPHORE_MASTER_SELF   (6)
    #define SEMA4_PROCESSOR_SELF        (1)

#else
    #error "No valid CPU defined!"
#endif

#endif /* __DEVICE_IMX_H__ */