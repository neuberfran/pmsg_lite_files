# CROSS COMPILER SETTING
SET(CMAKE_SYSTEM_NAME Generic)
CMAKE_MINIMUM_REQUIRED (VERSION 3.10.0)

# THE VERSION NUMBER
SET (MCUXPRESSO_CMAKE_FORMAT_MAJOR_VERSION 2)
SET (MCUXPRESSO_CMAKE_FORMAT_MINOR_VERSION 0)

include(ide_overrides.cmake OPTIONAL)

if(CMAKE_SCRIPT_MODE_FILE)
  message("${MCUXPRESSO_CMAKE_FORMAT_MAJOR_VERSION}")
  return()
endif()


# ENABLE ASM
ENABLE_LANGUAGE(ASM)

SET(CMAKE_STATIC_LIBRARY_PREFIX)
SET(CMAKE_STATIC_LIBRARY_SUFFIX)

SET(CMAKE_EXECUTABLE_LIBRARY_PREFIX)
SET(CMAKE_EXECUTABLE_LIBRARY_SUFFIX)

# CURRENT DIRECTORY
SET(ProjDirPath ${CMAKE_CURRENT_SOURCE_DIR})

SET(EXECUTABLE_OUTPUT_PATH ${ProjDirPath}/${CMAKE_BUILD_TYPE})
SET(LIBRARY_OUTPUT_PATH ${ProjDirPath}/${CMAKE_BUILD_TYPE})


project(erpc_matrix_multiply_rpmsg_rtos_imxcm4)

set(MCUX_BUILD_TYPES release flash_debug flash_release)

set(MCUX_SDK_PROJECT_NAME erpc_matrix_multiply_rpmsg_rtos_imxcm4.elf)

if (NOT DEFINED SdkRootDirPath)
    SET(SdkRootDirPath ${ProjDirPath}/../../../../..)
endif()

include(${ProjDirPath}/flags.cmake)

include(${ProjDirPath}/config.cmake)

add_executable(${MCUX_SDK_PROJECT_NAME} 
"${ProjDirPath}/../main_core1.c"
"${ProjDirPath}/../pin_mux.c"
"${ProjDirPath}/../pin_mux.h"
"${ProjDirPath}/../rpmsg_config.h"
"${ProjDirPath}/../erpc_config.h"
"${SdkRootDirPath}/boards/evkmcimx7ulp/multicore_examples/erpc_common/erpc_error_handler.h"
"${SdkRootDirPath}/boards/evkmcimx7ulp/multicore_examples/erpc_common/erpc_error_handler.cpp"
"${SdkRootDirPath}/boards/evkmcimx7ulp/multicore_examples/erpc_common/erpc_matrix_multiply/service/erpc_matrix_multiply.erpc"
"${SdkRootDirPath}/boards/evkmcimx7ulp/multicore_examples/erpc_common/erpc_matrix_multiply/service/erpc_matrix_multiply.h"
"${SdkRootDirPath}/boards/evkmcimx7ulp/multicore_examples/erpc_common/erpc_matrix_multiply/service/erpc_matrix_multiply_server.h"
"${SdkRootDirPath}/boards/evkmcimx7ulp/multicore_examples/erpc_common/erpc_matrix_multiply/service/erpc_matrix_multiply_server.cpp"
"${ProjDirPath}/../FreeRTOSConfig.h"
"${ProjDirPath}/../rsc_table.c"
"${ProjDirPath}/../rsc_table.h"
"${ProjDirPath}/../remoteproc.h"
"${ProjDirPath}/../board.c"
"${ProjDirPath}/../board.h"
"${ProjDirPath}/../clock_config.c"
"${ProjDirPath}/../clock_config.h"
"${ProjDirPath}/../srtm_config.h"
"${ProjDirPath}/../app_srtm.c"
"${ProjDirPath}/../app_srtm.h"
"${ProjDirPath}/../srtm/channels/srtm_rpmsg_endpoint.h"
"${ProjDirPath}/../srtm/channels/srtm_rpmsg_endpoint.c"
"${ProjDirPath}/../srtm/services/srtm_lfcl_service.h"
"${ProjDirPath}/../srtm/services/srtm_lfcl_service.c"
"${ProjDirPath}/../srtm/services/srtm_pmic_service.h"
"${ProjDirPath}/../srtm/services/srtm_pmic_service.c"
"${ProjDirPath}/../srtm/services/srtm_pf1550_adapter.h"
"${ProjDirPath}/../srtm/services/srtm_pf1550_adapter.c"
"${ProjDirPath}/../srtm/services/srtm_audio_service.h"
"${ProjDirPath}/../srtm/services/srtm_audio_service.c"
"${ProjDirPath}/../srtm/services/srtm_sai_edma_adapter.h"
"${ProjDirPath}/../srtm/services/srtm_sai_edma_adapter.c"
"${ProjDirPath}/../srtm/services/srtm_i2c_codec_adapter.h"
"${ProjDirPath}/../srtm/services/srtm_i2c_codec_adapter.c"
"${ProjDirPath}/../srtm/services/srtm_io_service.h"
"${ProjDirPath}/../srtm/services/srtm_io_service.c"
"${ProjDirPath}/../srtm/services/srtm_keypad_service.h"
"${ProjDirPath}/../srtm/services/srtm_keypad_service.c"
"${ProjDirPath}/../srtm/services/srtm_rtc_service.h"
"${ProjDirPath}/../srtm/services/srtm_rtc_service.c"
"${ProjDirPath}/../srtm/services/srtm_snvs_lp_rtc_adapter.h"
"${ProjDirPath}/../srtm/services/srtm_snvs_lp_rtc_adapter.c"
"${ProjDirPath}/../srtm/services/srtm_sensor_service.h"
"${ProjDirPath}/../srtm/services/srtm_sensor_service.c"
)

target_include_directories(${MCUX_SDK_PROJECT_NAME} PRIVATE
    ${ProjDirPath}/..
    ${SdkRootDirPath}/boards/evkmcimx7ulp/multicore_examples/erpc_common
    ${SdkRootDirPath}/boards/evkmcimx7ulp/multicore_examples/erpc_common/erpc_matrix_multiply/service
    ${ProjDirPath}/../srtm/channels
    ${ProjDirPath}/../srtm/services
)

set_source_files_properties("${ProjDirPath}/../FreeRTOSConfig.h" PROPERTIES COMPONENT_CONFIG_FILE "middleware_freertos-kernel_template")

include(${SdkRootDirPath}/devices/MCIMX7U5/all_lib_device.cmake)

IF(NOT DEFINED TARGET_LINK_SYSTEM_LIBRARIES)  
    SET(TARGET_LINK_SYSTEM_LIBRARIES "-lstdc++ -lm -lc -lgcc -lnosys")  
ENDIF()  

TARGET_LINK_LIBRARIES(${MCUX_SDK_PROJECT_NAME} PRIVATE -Wl,--start-group)

target_link_libraries(${MCUX_SDK_PROJECT_NAME} PRIVATE g)

target_link_libraries(${MCUX_SDK_PROJECT_NAME} PRIVATE ${TARGET_LINK_SYSTEM_LIBRARIES})

TARGET_LINK_LIBRARIES(${MCUX_SDK_PROJECT_NAME} PRIVATE -Wl,--end-group)

ADD_CUSTOM_COMMAND(TARGET ${MCUX_SDK_PROJECT_NAME} POST_BUILD COMMAND ${CMAKE_OBJCOPY}
-Obinary ${EXECUTABLE_OUTPUT_PATH}/${MCUX_SDK_PROJECT_NAME} ${EXECUTABLE_OUTPUT_PATH}/erpc_matrix_multiply_rpmsg_rtos_imxcm4.bin)

set_target_properties(${MCUX_SDK_PROJECT_NAME} PROPERTIES ADDITIONAL_CLEAN_FILES "output.map;${EXECUTABLE_OUTPUT_PATH}/erpc_matrix_multiply_rpmsg_rtos_imxcm4.bin")

