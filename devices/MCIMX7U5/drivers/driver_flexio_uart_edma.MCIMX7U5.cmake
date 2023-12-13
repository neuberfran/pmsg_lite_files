# Add set(CONFIG_USE_driver_flexio_uart_edma true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

if(CONFIG_USE_driver_edma AND CONFIG_USE_driver_flexio_uart AND (CONFIG_DEVICE_ID STREQUAL MCIMX7U5xxxxx))

target_sources(${MCUX_SDK_PROJECT_NAME} PRIVATE
  ${CMAKE_CURRENT_LIST_DIR}/fsl_flexio_uart_edma.c
)

target_include_directories(${MCUX_SDK_PROJECT_NAME} PUBLIC
  ${CMAKE_CURRENT_LIST_DIR}/.
)

else()

message(SEND_ERROR "driver_flexio_uart_edma.MCIMX7U5 dependency does not meet, please check ${CMAKE_CURRENT_LIST_FILE}.")

endif()
