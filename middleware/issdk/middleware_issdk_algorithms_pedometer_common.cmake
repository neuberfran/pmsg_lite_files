# Add set(CONFIG_USE_middleware_issdk_algorithms_pedometer_common true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

if(CONFIG_USE_CMSIS_Driver_Include_I2C AND CONFIG_USE_CMSIS_Driver_Include_SPI)

target_sources(${MCUX_SDK_PROJECT_NAME} PRIVATE
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/pedometer/source/pedometer.c
)

target_include_directories(${MCUX_SDK_PROJECT_NAME} PUBLIC
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/pedometer/include
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/pedometer/include/libinclude
)

else()

message(SEND_ERROR "middleware_issdk_algorithms_pedometer_common dependency does not meet, please check ${CMAKE_CURRENT_LIST_FILE}.")

endif()
