var a00031 =
[
    [ "lpi2c_slave_config_t", "a00031.html#a00301", [
      [ "enableSlave", "a00031.html#ad220cfa81b4117fd1d952b43ff0d5511", null ],
      [ "address0", "a00031.html#a16f171990f815872142d3fe73eb74ff4", null ],
      [ "address1", "a00031.html#afb3035cd87a9746bdbe5c6618a492034", null ],
      [ "addressMatchMode", "a00031.html#a1dc82ff6416b69128c0d6d78d533b093", null ],
      [ "filterDozeEnable", "a00031.html#a4cbbafe55351cb52d25b3de1a71e2231", null ],
      [ "filterEnable", "a00031.html#a6fcca02d50a48b5a3a2923ea449316ce", null ],
      [ "enableGeneralCall", "a00031.html#a061ed35a72d6e8ffe9a02be00f633f87", null ],
      [ "enableAck", "a00031.html#ab2cd4a19f68523031122851dd0ab1386", null ],
      [ "enableTx", "a00031.html#ad0fea92e29e7afff3d7072ab3c722bc8", null ],
      [ "enableRx", "a00031.html#aff856d2084ff0ede49f0ff25e6cf5529", null ],
      [ "enableAddress", "a00031.html#a6ec794389bd9fb5e51c802bb0b9ee26b", null ],
      [ "ignoreAck", "a00031.html#ae68493537f90f7bff4a421ff534fb7a1", null ],
      [ "enableReceivedAddressRead", "a00031.html#ac273a825233fe937aa16d98e38664812", null ],
      [ "sdaGlitchFilterWidth_ns", "a00031.html#a7c28ef56af23d2e059942e8d80e5cd15", null ],
      [ "sclGlitchFilterWidth_ns", "a00031.html#a793ea7dd26bfb1f68daae2523e70d5a5", null ],
      [ "dataValidDelay_ns", "a00031.html#a920288e7667b3b363f019384ebc58606", null ],
      [ "clockHoldTime_ns", "a00031.html#a2e672f5446e7d86eb9d74bdc785df0fb", null ]
    ] ],
    [ "lpi2c_slave_transfer_t", "a00031.html#a00302", [
      [ "event", "a00031.html#a19df3bc5c35ed8ae03a927dcc89daa48", null ],
      [ "receivedAddress", "a00031.html#a336e15a483043ed7ace990517fff6686", null ],
      [ "data", "a00031.html#a54436075594000b4d56471b29dd6734f", null ],
      [ "dataSize", "a00031.html#afcd4de20f8efd725bd93d72180b32f2d", null ],
      [ "completionStatus", "a00031.html#aafd14bc835c1c23de6bf06834d1a0b3c", null ],
      [ "transferredCount", "a00031.html#a67e03ab90367cb1d48d42b718e6438f5", null ]
    ] ],
    [ "lpi2c_slave_handle_t", "a00031.html#a00241", [
      [ "transfer", "a00031.html#aed2dec763e40c6caa129c082603852d5", null ],
      [ "isBusy", "a00031.html#a8f0662c2c78df7b8e8b5ed4c1119823d", null ],
      [ "wasTransmit", "a00031.html#af0a187d43f251bc67fb9c34dedbf9253", null ],
      [ "eventMask", "a00031.html#a5bceee16dd6f07c8cb6918580e45e540", null ],
      [ "transferredCount", "a00031.html#ac9f4d0665e8ec4c56eb89e816c4b5324", null ],
      [ "callback", "a00031.html#a0e16ba71a57adfe84058af632a604e40", null ],
      [ "userData", "a00031.html#aa394f46d8677c977aa39b64fb0c353ce", null ]
    ] ],
    [ "lpi2c_slave_transfer_callback_t", "a00031.html#ga2640285a708842a5e0e7c4c0090a2f58", null ],
    [ "_lpi2c_slave_flags", "a00031.html#gabd50effc706692c03b42faa72c34269b", [
      [ "kLPI2C_SlaveTxReadyFlag", "a00031.html#ggabd50effc706692c03b42faa72c34269ba80486f66e12276c945b8813269b90c0e", null ],
      [ "kLPI2C_SlaveRxReadyFlag", "a00031.html#ggabd50effc706692c03b42faa72c34269ba01265ce6645e4a978b823b1f130a419f", null ],
      [ "kLPI2C_SlaveAddressValidFlag", "a00031.html#ggabd50effc706692c03b42faa72c34269baf34a60fee419e0b3d387b353a38b4772", null ],
      [ "kLPI2C_SlaveTransmitAckFlag", "a00031.html#ggabd50effc706692c03b42faa72c34269ba37386d33a28e37352a8e3151f027fdff", null ],
      [ "kLPI2C_SlaveRepeatedStartDetectFlag", "a00031.html#ggabd50effc706692c03b42faa72c34269ba5c5dcad526309c44aa390c13ae53ca3e", null ],
      [ "kLPI2C_SlaveStopDetectFlag", "a00031.html#ggabd50effc706692c03b42faa72c34269baaaa1d719607915d0b1251727900018a7", null ],
      [ "kLPI2C_SlaveBitErrFlag", "a00031.html#ggabd50effc706692c03b42faa72c34269ba41375eeb82c399aff15daba1e8bbff03", null ],
      [ "kLPI2C_SlaveFifoErrFlag", "a00031.html#ggabd50effc706692c03b42faa72c34269ba6eb9dd96bad287dcb7e2f23f73d961a8", null ],
      [ "kLPI2C_SlaveAddressMatch0Flag", "a00031.html#ggabd50effc706692c03b42faa72c34269ba9fb3f57d810e280effee1dae37d062bb", null ],
      [ "kLPI2C_SlaveAddressMatch1Flag", "a00031.html#ggabd50effc706692c03b42faa72c34269ba62cc9694d6891b21af074122eeedca85", null ],
      [ "kLPI2C_SlaveGeneralCallFlag", "a00031.html#ggabd50effc706692c03b42faa72c34269ba6a0fa821b530336ea8d1f19aadcbe1dc", null ],
      [ "kLPI2C_SlaveBusyFlag", "a00031.html#ggabd50effc706692c03b42faa72c34269baffa3195deae58fc6ea15d062b465ac5d", null ],
      [ "kLPI2C_SlaveBusBusyFlag", "a00031.html#ggabd50effc706692c03b42faa72c34269ba2531ffa96faa3086714e8a069508867b", null ],
      [ "kLPI2C_SlaveClearFlags", "a00031.html#ggabd50effc706692c03b42faa72c34269ba67a26ff8ddd90c39e772518636f4e832", null ],
      [ "kLPI2C_SlaveIrqFlags", "a00031.html#ggabd50effc706692c03b42faa72c34269baaf5e40570c34c37fd532dad21b1dca1f", null ],
      [ "kLPI2C_SlaveErrorFlags", "a00031.html#ggabd50effc706692c03b42faa72c34269bacb3e0258d950773e55c13829e787de36", null ]
    ] ],
    [ "lpi2c_slave_address_match_t", "a00031.html#gac3564395ccab19eb1ce6ab46b36bb5bb", [
      [ "kLPI2C_MatchAddress0", "a00031.html#ggac3564395ccab19eb1ce6ab46b36bb5bbaaa16a731881882d10f48ebde416f54c5", null ],
      [ "kLPI2C_MatchAddress0OrAddress1", "a00031.html#ggac3564395ccab19eb1ce6ab46b36bb5bba2941f8a06a17205294e7d0fa5f305675", null ],
      [ "kLPI2C_MatchAddress0ThroughAddress1", "a00031.html#ggac3564395ccab19eb1ce6ab46b36bb5bba59e460fdd7075191f69e047ef35557eb", null ]
    ] ],
    [ "lpi2c_slave_transfer_event_t", "a00031.html#ga0d99b4dba3841a4e02f7c431a59006c8", [
      [ "kLPI2C_SlaveAddressMatchEvent", "a00031.html#gga0d99b4dba3841a4e02f7c431a59006c8a10fb8d9bb6ba9cd44fde85466e6eabef", null ],
      [ "kLPI2C_SlaveTransmitEvent", "a00031.html#gga0d99b4dba3841a4e02f7c431a59006c8a976c8c9aa85026224a46cf5ec742eb49", null ],
      [ "kLPI2C_SlaveReceiveEvent", "a00031.html#gga0d99b4dba3841a4e02f7c431a59006c8ac737ba9e4e62880a6e2d8aac98ae8f18", null ],
      [ "kLPI2C_SlaveTransmitAckEvent", "a00031.html#gga0d99b4dba3841a4e02f7c431a59006c8a112af4cf8f8a374407d7c784f024b8e0", null ],
      [ "kLPI2C_SlaveRepeatedStartEvent", "a00031.html#gga0d99b4dba3841a4e02f7c431a59006c8ae0995aac6808b3726b7577c2d283e4c4", null ],
      [ "kLPI2C_SlaveCompletionEvent", "a00031.html#gga0d99b4dba3841a4e02f7c431a59006c8a06ef7422d9edf9b914864a2d689f042c", null ],
      [ "kLPI2C_SlaveAllEvents", "a00031.html#gga0d99b4dba3841a4e02f7c431a59006c8aeed0927f4e909cb161b44434b6f01aec", null ]
    ] ],
    [ "LPI2C_SlaveGetDefaultConfig", "a00031.html#gadf34085d4557ceb3081fff9fe0e3189a", null ],
    [ "LPI2C_SlaveInit", "a00031.html#gae5cc8a03c784a99bb58b69852dfda5a5", null ],
    [ "LPI2C_SlaveDeinit", "a00031.html#gaa1a5cfe78acec0e1f8dd4af63a0f87f8", null ],
    [ "LPI2C_SlaveReset", "a00031.html#gaf58f9ebf437d62936c45c201a68fb5d7", null ],
    [ "LPI2C_SlaveEnable", "a00031.html#gae83a936eb8303218278cd704d8238a08", null ],
    [ "LPI2C_SlaveGetStatusFlags", "a00031.html#ga18055724e510f601f35cc00940e9155c", null ],
    [ "LPI2C_SlaveClearStatusFlags", "a00031.html#ga3b5306231d96d7fa38ef26d9ca6526b1", null ],
    [ "LPI2C_SlaveEnableInterrupts", "a00031.html#gaf5b7a33a341fd95ca77dcb6fe7f1bf3c", null ],
    [ "LPI2C_SlaveDisableInterrupts", "a00031.html#ga9422103623a9866f350dd03aea984741", null ],
    [ "LPI2C_SlaveGetEnabledInterrupts", "a00031.html#ga3d1fb84d337b8eb5cc19cbeced06c2a1", null ],
    [ "LPI2C_SlaveEnableDMA", "a00031.html#gaa13d0c04083818cf91af19a6add0e08f", null ],
    [ "LPI2C_SlaveGetBusIdleState", "a00031.html#ga155ee1b5bc8c621b60b349b191c078fc", null ],
    [ "LPI2C_SlaveTransmitAck", "a00031.html#ga417e07e45369a955f7fecaa26e13b335", null ],
    [ "LPI2C_SlaveEnableAckStall", "a00031.html#ga417e42a46e81c8e95225df9424099243", null ],
    [ "LPI2C_SlaveGetReceivedAddress", "a00031.html#ga8219a79b748dc59c982c7c3a8470c3a6", null ],
    [ "LPI2C_SlaveSend", "a00031.html#gacb2d085904e83ee63ee84f7c8402024c", null ],
    [ "LPI2C_SlaveReceive", "a00031.html#ga36dd1b211a7fe488bfc062a1d8e74fc8", null ],
    [ "LPI2C_SlaveTransferCreateHandle", "a00031.html#ga6afdc286db9c700bc057038518a19285", null ],
    [ "LPI2C_SlaveTransferNonBlocking", "a00031.html#ga1ba7c9d0c254de8fe8c04091c007edff", null ],
    [ "LPI2C_SlaveTransferGetCount", "a00031.html#ga755b38638cbade1b05587146e9f7267d", null ],
    [ "LPI2C_SlaveTransferAbort", "a00031.html#ga7d46d488aa043ab93bfa1574277a3985", null ],
    [ "LPI2C_SlaveTransferHandleIRQ", "a00031.html#ga712654857bc4490644b46220c0c460bf", null ]
];