# Add set(CONFIG_USE_device_MCIMX7U5_CMSIS true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

if(CONFIG_USE_CMSIS_Include_core_cm AND (CONFIG_DEVICE_ID STREQUAL MCIMX7U5xxxxx))

if(CONFIG_CORE STREQUAL cm4f)
  target_sources(${MCUX_SDK_PROJECT_NAME} PRIVATE
      ${CMAKE_CURRENT_LIST_DIR}/system_MCIMX7U5_cm4.c
  )
endif()

target_include_directories(${MCUX_SDK_PROJECT_NAME} PUBLIC
  ${CMAKE_CURRENT_LIST_DIR}/.
)

if(CONFIG_CORE STREQUAL cm4f)
target_include_directories(${MCUX_SDK_PROJECT_NAME} PUBLIC
  ${CMAKE_CURRENT_LIST_DIR}/.
)
endif()

else()

message(SEND_ERROR "device_MCIMX7U5_CMSIS.MCIMX7U5 dependency does not meet, please check ${CMAKE_CURRENT_LIST_FILE}.")

endif()
