# Add set(CONFIG_USE_driver_pmc0 true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

if((CONFIG_DEVICE_ID STREQUAL MCIMX7U5xxxxx) AND CONFIG_USE_driver_common)

target_include_directories(${MCUX_SDK_PROJECT_NAME} PUBLIC
  ${CMAKE_CURRENT_LIST_DIR}/.
)

else()

message(SEND_ERROR "driver_pmc0.MCIMX7U5 dependency does not meet, please check ${CMAKE_CURRENT_LIST_FILE}.")

endif()
