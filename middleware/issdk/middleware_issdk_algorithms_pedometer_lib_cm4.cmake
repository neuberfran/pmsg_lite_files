# Add set(CONFIG_USE_middleware_issdk_algorithms_pedometer_lib_cm4 true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

if((CONFIG_CORE STREQUAL cm4f))

target_link_libraries(${MCUX_SDK_PROJECT_NAME} PRIVATE
  -Wl,--start-group
  ${CMAKE_CURRENT_LIST_DIR}/algorithms/pedometer/lib/libpedometerm4.a
  -Wl,--end-group
)

else()

message(SEND_ERROR "middleware_issdk_algorithms_pedometer_lib_cm4 dependency does not meet, please check ${CMAKE_CURRENT_LIST_FILE}.")

endif()
