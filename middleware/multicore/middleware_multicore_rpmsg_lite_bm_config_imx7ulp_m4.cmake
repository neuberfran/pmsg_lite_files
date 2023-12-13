# Add set(CONFIG_USE_middleware_multicore_rpmsg_lite_bm_config_imx7ulp_m4 true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

if(CONFIG_USE_middleware_multicore_rpmsg_lite AND CONFIG_USE_middleware_multicore_rpmsg_lite_bm AND (CONFIG_BOARD STREQUAL evkmcimx7ulp) AND CONFIG_USE_middleware_multicore_rpmsg_lite_imx7ulp_m4_bm)

target_include_directories(${MCUX_SDK_PROJECT_NAME} PUBLIC
  ${CMAKE_CURRENT_LIST_DIR}/rpmsg_lite/template_application
)

else()

message(SEND_ERROR "middleware_multicore_rpmsg_lite_bm_config_imx7ulp_m4 dependency does not meet, please check ${CMAKE_CURRENT_LIST_FILE}.")

endif()
