# config to select component, the format is CONFIG_USE_${component}
# Please refer to cmake files below to get available components:
#  ${SdkRootDirPath}/devices/MCIMX7U5/all_lib_device.cmake

set(CONFIG_COMPILER gcc)
set(CONFIG_TOOLCHAIN armgcc)
set(CONFIG_USE_COMPONENT_CONFIGURATION false)
set(CONFIG_USE_driver_lpi2c true)
set(CONFIG_USE_driver_wm8960 true)
set(CONFIG_USE_component_wm8960_adapter true)
set(CONFIG_USE_driver_codec true)
set(CONFIG_USE_component_lpi2c_adapter true)
set(CONFIG_USE_component_codec_i2c true)
set(CONFIG_USE_utility_debug_console_lite true)
set(CONFIG_USE_utility_assert_lite true)
set(CONFIG_USE_driver_port true)
set(CONFIG_USE_driver_gpio true)
set(CONFIG_USE_driver_clock true)
set(CONFIG_USE_driver_sai true)
set(CONFIG_USE_driver_iomuxc true)
set(CONFIG_USE_driver_common true)
set(CONFIG_USE_device_MCIMX7U5_CMSIS true)
set(CONFIG_USE_component_lpuart_adapter true)
set(CONFIG_USE_driver_lpuart true)
set(CONFIG_USE_component_lists true)
set(CONFIG_USE_device_MCIMX7U5_startup true)
set(CONFIG_USE_driver_msmc true)
set(CONFIG_USE_utilities_misc_utilities true)
set(CONFIG_USE_CMSIS_Include_core_cm true)
set(CONFIG_CORE cm4f)
set(CONFIG_DEVICE MCIMX7U5)
set(CONFIG_BOARD evkmcimx7ulp)
set(CONFIG_KIT evkmcimx7ulp)
set(CONFIG_DEVICE_ID MCIMX7U5xxxxx)
set(CONFIG_FPU SP_FPU)
set(CONFIG_DSP NO_DSP)
