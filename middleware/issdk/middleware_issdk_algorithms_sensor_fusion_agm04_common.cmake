# Add set(CONFIG_USE_middleware_issdk_algorithms_sensor_fusion_agm04_common true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

if(CONFIG_USE_CMSIS_Driver_Include_I2C AND CONFIG_USE_CMSIS_Driver_Include_SPI)

target_sources(${MCUX_SDK_PROJECT_NAME} PRIVATE
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/approximations.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/calibration_storage.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/control.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/debug.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/DecodeCommandBytes.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/driver_FXAS21002.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/driver_MMA8652.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/driver_MAG3110.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/driver_KSDK_NVM.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/driver_pit.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/driver_systick.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/fusion.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/hal_frdm_fxs_mult2_b.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/magnetic.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/matrix.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/orientation.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/output_stream.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/precisionAccelerometer.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/sensor_fusion.c
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources/status.c
)

target_include_directories(${MCUX_SDK_PROJECT_NAME} PUBLIC
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/sensorfusion/sources
)

else()

message(SEND_ERROR "middleware_issdk_algorithms_sensor_fusion_agm04_common dependency does not meet, please check ${CMAKE_CURRENT_LIST_FILE}.")

endif()
