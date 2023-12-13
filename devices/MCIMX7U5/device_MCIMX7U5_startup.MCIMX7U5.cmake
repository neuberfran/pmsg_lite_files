# Add set(CONFIG_USE_device_MCIMX7U5_startup true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

if(CONFIG_TOOLCHAIN STREQUAL armgcc AND CONFIG_CORE STREQUAL cm4f)
  target_sources(${MCUX_SDK_PROJECT_NAME} PRIVATE
      ${CMAKE_CURRENT_LIST_DIR}/gcc/startup_MCIMX7U5_cm4.S
  )
endif()

if(CONFIG_TOOLCHAIN STREQUAL iar AND CONFIG_CORE STREQUAL cm4f)
  add_config_file(${CMAKE_CURRENT_LIST_DIR}/iar/startup_MCIMX7U5_cm4.s "" device_MCIMX7U5_startup.MCIMX7U5)
endif()

