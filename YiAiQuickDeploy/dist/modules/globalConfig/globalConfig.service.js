'use strict';const _0x4d48bb=_0x17a7;(function(_0x3599b8,_0x3726e5){const _0x56383d=_0x17a7,_0x4312fc=_0x3599b8();while(!![]){try{const _0x4e5c6b=-parseInt(_0x56383d(0x17d))/0x1*(parseInt(_0x56383d(0x149))/0x2)+parseInt(_0x56383d(0x11b))/0x3*(-parseInt(_0x56383d(0x1ae))/0x4)+-parseInt(_0x56383d(0x168))/0x5*(parseInt(_0x56383d(0x181))/0x6)+-parseInt(_0x56383d(0x150))/0x7+-parseInt(_0x56383d(0x134))/0x8+parseInt(_0x56383d(0x19f))/0x9*(-parseInt(_0x56383d(0x173))/0xa)+parseInt(_0x56383d(0x119))/0xb*(parseInt(_0x56383d(0x13b))/0xc);if(_0x4e5c6b===_0x3726e5)break;else _0x4312fc['push'](_0x4312fc['shift']());}catch(_0x145880){_0x4312fc['push'](_0x4312fc['shift']());}}}(_0x56e7,0x3ff22));var __decorate=this&&this[_0x4d48bb(0x146)]||function(_0x2f67bf,_0x3a346b,_0xd54232,_0x5abc31){const _0x2e9601=_0x4d48bb;var _0x42e1e1=arguments[_0x2e9601(0x19b)],_0x44bcad=_0x42e1e1<0x3?_0x3a346b:_0x5abc31===null?_0x5abc31=Object[_0x2e9601(0x18e)](_0x3a346b,_0xd54232):_0x5abc31,_0x24a84e;if(typeof Reflect===_0x2e9601(0x15f)&&typeof Reflect[_0x2e9601(0x128)]===_0x2e9601(0x17f))_0x44bcad=Reflect[_0x2e9601(0x128)](_0x2f67bf,_0x3a346b,_0xd54232,_0x5abc31);else{for(var _0x2a01d0=_0x2f67bf[_0x2e9601(0x19b)]-0x1;_0x2a01d0>=0x0;_0x2a01d0--)if(_0x24a84e=_0x2f67bf[_0x2a01d0])_0x44bcad=(_0x42e1e1<0x3?_0x24a84e(_0x44bcad):_0x42e1e1>0x3?_0x24a84e(_0x3a346b,_0xd54232,_0x44bcad):_0x24a84e(_0x3a346b,_0xd54232))||_0x44bcad;}return _0x42e1e1>0x3&&_0x44bcad&&Object[_0x2e9601(0x13e)](_0x3a346b,_0xd54232,_0x44bcad),_0x44bcad;},__metadata=this&&this['__metadata']||function(_0x59be86,_0xdba483){const _0x4a3ef6=_0x4d48bb;if(typeof Reflect===_0x4a3ef6(0x15f)&&typeof Reflect[_0x4a3ef6(0x1c9)]===_0x4a3ef6(0x17f))return Reflect[_0x4a3ef6(0x1c9)](_0x59be86,_0xdba483);},__param=this&&this[_0x4d48bb(0x19a)]||function(_0x40b4d7,_0x128989){return function(_0x4e9111,_0x3cfccf){_0x128989(_0x4e9111,_0x3cfccf,_0x40b4d7);};};Object[_0x4d48bb(0x13e)](exports,_0x4d48bb(0x171),{'value':!![]}),exports[_0x4d48bb(0x1c6)]=void 0x0;const models_service_1=require(_0x4d48bb(0x172)),chatLog_entity_1=require(_0x4d48bb(0x182)),common_1=require(_0x4d48bb(0x1b7)),config_entity_1=require('./config.entity'),typeorm_1=require(_0x4d48bb(0x13f)),typeorm_2=require(_0x4d48bb(0x1ba)),utils_1=require(_0x4d48bb(0x192)),axios_1=require(_0x4d48bb(0x10a)),fs=require('fs'),packageJsonContent=fs[_0x4d48bb(0x12a)](_0x4d48bb(0x1b4),_0x4d48bb(0x179)),packageJson=JSON[_0x4d48bb(0x157)](packageJsonContent),version=packageJson['version'];console[_0x4d48bb(0x136)](_0x4d48bb(0x18f),version);let GlobalConfigService=class GlobalConfigService{constructor(_0x3a09ea,_0xd60951,_0x4dce77){const _0x25a26d=_0x4d48bb;this[_0x25a26d(0x133)]=_0x3a09ea,this['chatLogEntity']=_0xd60951,this['modelsService']=_0x4dce77,this['globalConfigs']={},this['nineAiToken']=!![];}async[_0x4d48bb(0x138)](){const _0x45d196=_0x4d48bb;await this[_0x45d196(0x1bb)]();}async[_0x4d48bb(0x1ad)](_0xa869ef){const _0x3c56d0=_0x4d48bb;if(_0xa869ef[_0x3c56d0(0x19b)]===0x0)return;if(_0xa869ef['includes'](_0x3c56d0(0x126))&&_0xa869ef[_0x3c56d0(0x19b)]===0x1)return this[_0x3c56d0(0x126)];if(_0xa869ef['includes']('wechatJsapiTicket')&&_0xa869ef['length']===0x1)return this[_0x3c56d0(0x170)];if(_0xa869ef['length']===0x1)return this[_0x3c56d0(0x132)][_0xa869ef[0x0]];else{const _0x3c9b7a={};return _0xa869ef[_0x3c56d0(0x1b1)](_0x1b90b3=>_0x3c9b7a[_0x1b90b3]=this[_0x3c56d0(0x132)][_0x1b90b3]),_0x3c9b7a;}}async[_0x4d48bb(0x1bb)](){const _0x39dcb0=_0x4d48bb,_0x3c59e0=await this['configEntity'][_0x39dcb0(0x141)]();this['globalConfigs']=_0x3c59e0['reduce']((_0x2d649e,_0x282916)=>{const _0x4c9418=_0x39dcb0;return _0x2d649e[_0x282916[_0x4c9418(0x1ca)]]=_0x282916['configVal'],_0x2d649e;},{}),this[_0x39dcb0(0x158)]();}async['initBaiduSensitive'](_0x319c1a=!![]){const _0x2babc9=_0x4d48bb,{baiduTextApiKey:_0x2306c3,baiduTextSecretKey:_0x1f96e7}=await this[_0x2babc9(0x1ad)](['baiduTextApiKey','baiduTextSecretKey']);if(!_0x2306c3||!_0x1f96e7){common_1[_0x2babc9(0x121)]['error']('百度敏感词初始化失败，如果需要敏感检测、请前往后台系统配置!',_0x2babc9(0x1c6));return;}const _0x25f32a={'Content-Type':_0x2babc9(0x1cb),'Accept':_0x2babc9(0x1cb)},_0x103f93='https://aip.baidubce.com/oauth/2.0/token?client_id='+_0x2306c3+_0x2babc9(0x195)+_0x1f96e7+_0x2babc9(0x16d);try{const _0xc6772b=await axios_1[_0x2babc9(0x159)][_0x2babc9(0x16b)](_0x103f93,{'headers':_0x25f32a});this[_0x2babc9(0x132)][_0x2babc9(0x1a8)]=_0xc6772b[_0x2babc9(0x1a7)][_0x2babc9(0x16c)];}catch(_0x241d50){if(_0x319c1a)common_1[_0x2babc9(0x121)][_0x2babc9(0x10e)](_0x2babc9(0x18d),_0x2babc9(0x1c6));else throw new common_1['HttpException'](_0x241d50[_0x2babc9(0x145)][_0x2babc9(0x1a7)][_0x2babc9(0x18b)],common_1['HttpStatus'][_0x2babc9(0x161)]);}}async['getWechatAccessToken'](_0x22ffa7=![]){const _0x251867=_0x4d48bb,{wechatOfficialAppId:_0x57db77,wechatOfficialAppSecret:_0xe1ddde}=await this['getConfigs'](['wechatOfficialAppId',_0x251867(0x193)]);if(!_0x57db77||!_0xe1ddde)return common_1[_0x251867(0x121)][_0x251867(0x10e)](_0x251867(0x1b2),_0x251867(0x178));this[_0x251867(0x126)]=await this[_0x251867(0x10c)](_0x57db77,_0xe1ddde,_0x22ffa7),this[_0x251867(0x170)]=await this[_0x251867(0x139)](this[_0x251867(0x126)]),common_1[_0x251867(0x121)][_0x251867(0x136)]('wechat\x20refresh\x20access_token\x20\x20==>\x20'+this[_0x251867(0x126)],_0x251867(0x178));}async[_0x4d48bb(0x10c)](_0x5c7949,_0x575ec1,_0x111397=![]){const _0x467483=_0x4d48bb;if(process[_0x467483(0x129)][_0x467483(0x1a2)]===_0x467483(0x11c)){this[_0x467483(0x126)]='';return;}const {data:{errmsg:_0x1d9663,access_token:_0x551302}}=await axios_1[_0x467483(0x159)]['get'](_0x467483(0x144)+_0x5c7949+_0x467483(0x16a)+_0x575ec1);if(_0x1d9663){if(_0x111397)common_1['Logger'][_0x467483(0x10e)](_0x467483(0x175)+_0x1d9663,'OfficialService');else throw new common_1[(_0x467483(0x163))]('请配置正确的秘钥、当前秘钥检测不通过！',common_1['HttpStatus']['BAD_REQUEST']);return'';}return _0x551302;}async[_0x4d48bb(0x139)](_0x504604){const _0x483592=_0x4d48bb;var _0x375c13;if(process[_0x483592(0x129)][_0x483592(0x1a2)]===_0x483592(0x11c)){this['wechatJsapiTicket']='';return;}const _0x36253d=await axios_1['default']['get'](_0x483592(0x180)+_0x504604+'&type=jsapi');return(_0x375c13=_0x36253d===null||_0x36253d===void 0x0?void 0x0:_0x36253d[_0x483592(0x1a7)])===null||_0x375c13===void 0x0?void 0x0:_0x375c13[_0x483592(0x1be)];}async[_0x4d48bb(0x1c2)](_0x2efefd){const _0x394a1c=_0x4d48bb,{role:_0x29aec0}=_0x2efefd['user'];return this[_0x394a1c(0x132)];}async[_0x4d48bb(0x14b)](_0x14b7b1,_0x47ef48){const _0x2480b6=_0x4d48bb,_0x2e3ece=[_0x2480b6(0x1c0),_0x2480b6(0x127),'registerSendModel3Count',_0x2480b6(0x19e),_0x2480b6(0x189),'firstRegisterSendStatus',_0x2480b6(0x1af),_0x2480b6(0x13a),_0x2480b6(0x12c),_0x2480b6(0x130),_0x2480b6(0x12d),_0x2480b6(0x14f),'inviteGiveSendModel4Count',_0x2480b6(0x151),_0x2480b6(0x1aa),'invitedGuestSendModel4Count',_0x2480b6(0x1bf),_0x2480b6(0x160),_0x2480b6(0x17b),'clientFavoIconPath',_0x2480b6(0x117),_0x2480b6(0x1cd),'robotAvatar',_0x2480b6(0x123),_0x2480b6(0x13c),_0x2480b6(0x125),_0x2480b6(0x197),_0x2480b6(0x15d),_0x2480b6(0x169),_0x2480b6(0x122),_0x2480b6(0x118),_0x2480b6(0x1c3),_0x2480b6(0x131),_0x2480b6(0x1c4),_0x2480b6(0x190),_0x2480b6(0x1a0),_0x2480b6(0x1a5),'salesSeniorRatio',_0x2480b6(0x1a3),_0x2480b6(0x17c),_0x2480b6(0x11d),_0x2480b6(0x1b8),_0x2480b6(0x112),_0x2480b6(0x137),_0x2480b6(0x143),_0x2480b6(0x15b),_0x2480b6(0x154),'signInStatus',_0x2480b6(0x14c),_0x2480b6(0x153),'signInMjDrawToken',_0x2480b6(0x1ac),'appMenuHeaderBgUrl',_0x2480b6(0x124),'mjHideNotBlock',_0x2480b6(0x12f),_0x2480b6(0x152)],_0xa51e02=await this[_0x2480b6(0x133)][_0x2480b6(0x141)]({'where':{'configKey':(0x0,typeorm_2['In'])(_0x2e3ece)}}),{domain:_0x1e98ad}=_0x14b7b1,_0x319dc7=this['globalConfigs'][_0x2480b6(0x1c8)];_0x319dc7!==_0x1e98ad&&(this['createOrUpdate']({'configKey':_0x2480b6(0x1c8),'configVal':_0x1e98ad,'status':0x1}),await this[_0x2480b6(0x1bb)]());const _0x2569aa=_0xa51e02[_0x2480b6(0x14a)]((_0x192a2d,_0x1f3aac)=>{const _0x2dab38=_0x2480b6;return _0x192a2d[_0x1f3aac['configKey']]=_0x1f3aac[_0x2dab38(0x191)],_0x192a2d;},{}),{wechatOfficialAppId:_0xb63ee,wechatOfficialAppSecret:_0x2d8021}=await this[_0x2480b6(0x1ad)](['wechatOfficialAppId',_0x2480b6(0x193)]),_0x1160fe=!!(_0xb63ee&&_0x2d8021);return Object[_0x2480b6(0x174)](Object[_0x2480b6(0x174)]({},_0x2569aa),{'isUseWxLogin':_0x1160fe});}async['queryGptKeys'](_0xd97a00){const _0x902f5e=_0x4d48bb,{role:_0x2c74cb}=_0xd97a00[_0x902f5e(0x12b)],_0x22e2fe=await this['configEntity'][_0x902f5e(0x141)]({'where':{'configKey':(0x0,typeorm_2[_0x902f5e(0x1b3)])('%'+'chatGptKey'+'%')}});if(_0x2c74cb===_0x902f5e(0x11f))return _0x22e2fe;return _0x22e2fe[_0x902f5e(0x110)](_0x398acd=>{const _0x1f50ba=_0x902f5e;return _0x398acd[_0x1f50ba(0x191)]=(0x0,utils_1[_0x1f50ba(0x15a)])(_0x398acd[_0x1f50ba(0x191)]),_0x398acd;});}async[_0x4d48bb(0x1a1)](_0x591d45){const _0x3e8fd5=_0x4d48bb,_0x4060ec=_0x591d45[_0x3e8fd5(0x1ab)][_0x3e8fd5(0x15c)](_0x279008=>_0x279008[_0x3e8fd5(0x191)]),_0x56a5b0=_0x4060ec[_0x3e8fd5(0x110)](_0xd9496f=>_0xd9496f[_0x3e8fd5(0x1ca)]);for(const [_0x58c15e,_0xe94e32]of _0x4060ec['entries']()){const {configKey:_0x12ec63,configVal:_0x54a201,status:_0xd8b1f1}=_0xe94e32;await this[_0x3e8fd5(0x13d)]({'configKey':_0x3e8fd5(0x1b6)+(_0x58c15e+0x1),'configVal':_0x54a201,'status':_0xd8b1f1});}const _0x1309d2=await this[_0x3e8fd5(0x133)][_0x3e8fd5(0x141)]({'where':{'configKey':(0x0,typeorm_2['Like'])('%'+_0x3e8fd5(0x1a6)+'%')}}),_0x36783f=_0x1309d2[_0x3e8fd5(0x110)](_0x3b16fe=>_0x3b16fe[_0x3e8fd5(0x1ca)]);if(_0x36783f[_0x3e8fd5(0x19b)]>_0x56a5b0[_0x3e8fd5(0x19b)]){const _0xed079=(0x0,utils_1[_0x3e8fd5(0x14d)])(_0x36783f[_0x3e8fd5(0x19b)],_0x56a5b0[_0x3e8fd5(0x19b)],_0x3e8fd5(0x1b6));for(const _0x42bf9f of _0xed079){await this[_0x3e8fd5(0x133)][_0x3e8fd5(0x114)]({'configKey':_0x42bf9f});}}return await this[_0x3e8fd5(0x1bb)](),_0x3e8fd5(0x17a);}async['queryConfig'](_0x4f128b,_0x40de1b){const _0xec493d=_0x4d48bb,{role:_0x548436}=_0x40de1b['user'],{keys:_0x5a6d37}=_0x4f128b,_0x3d1249=await this[_0xec493d(0x133)]['find']({'where':{'configKey':(0x0,typeorm_2['In'])(_0x5a6d37)}});return _0x548436!==_0xec493d(0x11f)&&_0x3d1249[_0xec493d(0x1b1)](_0x52e9db=>{const _0x220dfa=_0xec493d;if(_0x52e9db[_0x220dfa(0x1ca)]['includes']('mj')||_0x52e9db[_0x220dfa(0x1ca)][_0x220dfa(0x187)]('Key')||_0x52e9db['configKey'][_0x220dfa(0x187)](_0x220dfa(0x16f))||_0x52e9db[_0x220dfa(0x1ca)][_0x220dfa(0x187)](_0x220dfa(0x184))||_0x52e9db[_0x220dfa(0x1ca)]['includes'](_0x220dfa(0x18c))||_0x52e9db[_0x220dfa(0x1ca)][_0x220dfa(0x187)]('ali')||_0x52e9db['configKey'][_0x220dfa(0x187)](_0x220dfa(0x19c))||_0x52e9db[_0x220dfa(0x1ca)][_0x220dfa(0x187)](_0x220dfa(0x10b))||_0x52e9db['configKey']['includes'](_0x220dfa(0x167))||_0x52e9db[_0x220dfa(0x1ca)][_0x220dfa(0x187)]('mjProxyImgUrl')||_0x52e9db[_0x220dfa(0x1ca)]===_0x220dfa(0x19d)){const _0x137af3=[_0x220dfa(0x17e),_0x220dfa(0x140)];if(_0x137af3[_0x220dfa(0x187)](_0x52e9db[_0x220dfa(0x1ca)]))return _0x52e9db[_0x220dfa(0x191)]=(0x0,utils_1[_0x220dfa(0x15a)])(_0x52e9db[_0x220dfa(0x191)],'隐私内容、非超级管理员无权查看');const _0x3a7088=[_0x220dfa(0x118),_0x220dfa(0x1c3),'mjProxy'];!_0x3a7088[_0x220dfa(0x187)](_0x52e9db['configKey'])&&!_0x52e9db['configKey'][_0x220dfa(0x187)](_0x220dfa(0x135))&&(_0x52e9db[_0x220dfa(0x191)]=(0x0,utils_1[_0x220dfa(0x15a)])(_0x52e9db[_0x220dfa(0x191)]));}}),_0x3d1249[_0xec493d(0x14a)]((_0x43c383,_0x339b68)=>{const _0x5b46bc=_0xec493d;return _0x43c383[_0x339b68[_0x5b46bc(0x1ca)]]=_0x339b68[_0x5b46bc(0x191)],_0x43c383;},{});}[_0x4d48bb(0x1a4)](){const _0x27b237=_0x4d48bb,_0x34d316=this[_0x27b237(0x132)][_0x27b237(0x1bd)],_0x5ab935=this[_0x27b237(0x11e)];return!_0x5ab935||Number(_0x34d316)===0x1;}async['setConfig'](_0x34d4a5){const _0x42530d=_0x4d48bb;try{const {settings:_0x26bd92}=_0x34d4a5;for(const _0x32cf6e of _0x26bd92){await this['createOrUpdate'](_0x32cf6e);}await this[_0x42530d(0x1bb)]();const _0x4306ab=_0x26bd92[_0x42530d(0x110)](_0x324ad1=>_0x324ad1[_0x42530d(0x1ca)]);return(_0x4306ab[_0x42530d(0x187)](_0x42530d(0x165))||_0x4306ab[_0x42530d(0x187)](_0x42530d(0x164)))&&await this[_0x42530d(0x158)](![]),(_0x4306ab[_0x42530d(0x187)]('wechatOfficialAppId')||_0x4306ab[_0x42530d(0x187)](_0x42530d(0x193)))&&await this[_0x42530d(0x109)](),'设置完成！';}catch(_0x1d4b58){console[_0x42530d(0x136)]('error:\x20',_0x1d4b58);}}async[_0x4d48bb(0x13d)](_0x4ff3b6){const _0x5a87ee=_0x4d48bb;try{const {configKey:_0x503f9f,configVal:_0x523978,status:status=0x1}=_0x4ff3b6,_0x2bf1c8=await this[_0x5a87ee(0x133)]['findOne']({'where':{'configKey':_0x503f9f}});if(_0x2bf1c8){const _0x2bdac7=await this[_0x5a87ee(0x133)]['update']({'configKey':_0x503f9f},{'configVal':_0x523978,'status':status});}else{const _0x5569b1=await this[_0x5a87ee(0x133)][_0x5a87ee(0x14e)]({'configKey':_0x503f9f,'configVal':_0x523978,'status':status});}}catch(_0x247da8){console[_0x5a87ee(0x136)](_0x5a87ee(0x115),_0x247da8);throw new common_1[(_0x5a87ee(0x163))](_0x5a87ee(0x1bc),common_1['HttpStatus'][_0x5a87ee(0x161)]);}}async[_0x4d48bb(0x1b0)](){const _0x2dd910=_0x4d48bb;return await this[_0x2dd910(0x1ad)](['noticeInfo',_0x2dd910(0x183)]);}async[_0x4d48bb(0x198)](){const _0x4ddca1=_0x4d48bb;return await this['getConfigs']([_0x4ddca1(0x111),_0x4ddca1(0x116)]);}async[_0x4d48bb(0x10d)](){const _0x435cba=_0x4d48bb,{payHupiStatus:payHupiStatus=0x0,payEpayStatus:payEpayStatus=0x0,payWechatStatus:payWechatStatus=0x0,payMpayStatus:payMpayStatus=0x0}=await this[_0x435cba(0x1ad)](['payHupiStatus','payEpayStatus',_0x435cba(0x1c4),_0x435cba(0x131)]);if([payHupiStatus,payEpayStatus,payWechatStatus,payMpayStatus][_0x435cba(0x1c1)](_0x51e7bd=>_0x51e7bd===0x0))throw new common_1[(_0x435cba(0x163))](_0x435cba(0x176),common_1[_0x435cba(0x113)][_0x435cba(0x161)]);if(Number(payWechatStatus)===0x1)return _0x435cba(0x167);if(Number(payEpayStatus)===0x1)return'epay';if(Number(payMpayStatus)===0x1)return'mpay';if(Number(payHupiStatus)===0x1)return _0x435cba(0x16e);}async['getAuthInfo'](){const _0xd0f343=_0x4d48bb,{siteName:_0xe5c4b6,qqNumber:_0x3f26f8,vxNumber:_0x1022cc,registerBaseUrl:_0x542592,domain:_0x2419a7}=await this[_0xd0f343(0x1ad)]([_0xd0f343(0x1cd),_0xd0f343(0x186),_0xd0f343(0x1c0),'registerBaseUrl',_0xd0f343(0x1c8)]);return{'siteName':_0xe5c4b6,'qqNumber':_0x3f26f8,'vxNumber':_0x1022cc,'registerBaseUrl':_0x542592,'domain':_0x2419a7};}async['getPhoneVerifyConfig'](){const _0x19240e=_0x4d48bb,{phoneRegisterStatus:_0x3a43cd,aliPhoneAccessKeyId:_0xf55510,aliPhoneAccessKeySecret:_0x17ff4d,aliPhoneSignName:_0x1b3d74,aliPhoneTemplateCode:_0x44920f}=await this[_0x19240e(0x1ad)]([_0x19240e(0x1b8),'aliPhoneAccessKeyId',_0x19240e(0x1b5),_0x19240e(0x12e),_0x19240e(0x142)]);if(Number(_0x3a43cd)!==0x1)throw new common_1[(_0x19240e(0x163))](_0x19240e(0x1c7),common_1[_0x19240e(0x113)][_0x19240e(0x161)]);return{'accessKeyId':_0xf55510,'accessKeySecret':_0x17ff4d,'SignName':_0x1b3d74,'TemplateCode':_0x44920f};}[_0x4d48bb(0x177)](){const _0x2750cf=_0x4d48bb;return process[_0x2750cf(0x129)]['NAMESPACE']||_0x2750cf(0x1cc);}async[_0x4d48bb(0x199)](){const _0x323f0d=_0x4d48bb,{signInStatus:signInStatus=0x0,signInModel3Count:signInModel3Count=0x0,signInModel4Count:signInModel4Count=0x0,signInMjDrawToken:signInMjDrawToken=0x0}=await this[_0x323f0d(0x1ad)]([_0x323f0d(0x11a),_0x323f0d(0x14c),_0x323f0d(0x153),'signInMjDrawToken']);if(Number(signInStatus)!==0x1)throw new common_1['HttpException'](_0x323f0d(0x147),common_1['HttpStatus'][_0x323f0d(0x161)]);return{'model3Count':Number(signInModel3Count),'model4Count':Number(signInModel4Count),'drawMjCount':Number(signInMjDrawToken)};}async[_0x4d48bb(0x166)](){const _0x3592f4=_0x4d48bb,_0x39910b='https://api.jiangly.com/api/permission/auth',_0x55de26=await fetch(_0x39910b,{}),_0x2e8c45=await _0x55de26['json'](),{success:success=!![],message:_0x2f4db7}=_0x2e8c45;common_1[_0x3592f4(0x121)][_0x3592f4(0x10e)](_0x3592f4(0x1a9)),common_1['Logger'][_0x3592f4(0x10e)](_0x3592f4(0x15e)),common_1[_0x3592f4(0x121)]['error']('缺失ip信息'),common_1[_0x3592f4(0x121)][_0x3592f4(0x10e)](_0x3592f4(0x155)),common_1[_0x3592f4(0x121)][_0x3592f4(0x10f)](_0x3592f4(0x148));}async[_0x4d48bb(0x1c5)](){const _0x95494d=_0x4d48bb,{baiduTextStatus:baiduTextStatus=0x0,baiduTextAccessToken:_0x4260b5,nineaiBuiltInSensitiveStatus:nineaiBuiltInSensitiveStatus=0x0,nineaiBuiltInSensitiveApiBase:_0x737d23,nineaiBuiltInSensitiveAuthKey:_0x2f58e8}=await this['getConfigs']([_0x95494d(0x162),'baiduTextAccessToken','nineaiBuiltInSensitiveStatus',_0x95494d(0x196),'nineaiBuiltInSensitiveAuthKey']);if(Number(baiduTextStatus)===0x1)return{'useType':_0x95494d(0x18c),'baiduTextAccessToken':_0x4260b5};if(Number(nineaiBuiltInSensitiveStatus)===0x1)return{'useType':'nineai','nineaiBuiltInSensitiveApiBase':_0x737d23,'nineaiBuiltInSensitiveAuthKey':_0x2f58e8};return null;}};function _0x17a7(_0x30ea56,_0x48df7f){const _0x56e737=_0x56e7();return _0x17a7=function(_0x17a795,_0x5a1fb0){_0x17a795=_0x17a795-0x109;let _0x2b5a07=_0x56e737[_0x17a795];return _0x2b5a07;},_0x17a7(_0x30ea56,_0x48df7f);}GlobalConfigService=__decorate([(0x0,common_1[_0x4d48bb(0x194)])(),__param(0x0,(0x0,typeorm_1[_0x4d48bb(0x188)])(config_entity_1[_0x4d48bb(0x1b9)])),__param(0x1,(0x0,typeorm_1[_0x4d48bb(0x188)])(chatLog_entity_1[_0x4d48bb(0x185)])),__metadata(_0x4d48bb(0x120),[typeorm_2['Repository'],typeorm_2[_0x4d48bb(0x18a)],models_service_1[_0x4d48bb(0x156)]])],GlobalConfigService),exports['GlobalConfigService']=GlobalConfigService;function _0x56e7(){const _0x333b5f=['buyCramiAddress','createOrUpdate','defineProperty','@nestjs/typeorm','payWeChatPrivateKey','find','aliPhoneTemplateCode','phoneLoginStatus','https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=','response','__decorate','签到功能暂未开放!','感谢您使用NineAi、祝您使用愉快~','1714obZKHW','reduce','queryFrontConfig','signInModel3Count','getDiffArray','save','inviteGiveSendModel3Count','1452731cnXvEX','inviteGiveSendDrawMjCount','isVerifyEmail','signInModel4Count','wechatSilentLoginStatus','缺失ip信息','ModelsService','parse','initBaiduSensitive','default','hideString','wechatRegisterStatus','filter','payEpayChannel','请填写您的授权码','object','clientHomePath','BAD_REQUEST','baiduTextStatus','HttpException','baiduTextSecretKey','baiduTextApiKey','auth','wechat','588790WJhytF','payMpayChannel','&secret=','post','access_token','&grant_type=client_credentials','hupi','gpt','wechatJsapiTicket','__esModule','../models/models.service','10nkxBaJ','assign','获取微信access_token失败、错误信息：','支付功能暂未开放!','getNamespace','OfficialService','utf-8','操作完成！','clientLogoPath','companyName','251mtojPl','payWeChatPublicKey','function','https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=','24Ylymyh','../chatLog/chatLog.entity','noticeTitle','cos','ChatLogEntity','qqNumber','includes','InjectRepository','registerSendDrawMjCount','Repository','error_description','baidu','百度敏感词配置检测失败，您的参数可能配置的不正确!','getOwnPropertyDescriptor','\x20current\x20use\x20version\x20in\x20------>:\x20','isAutoOpenNotice','configVal','../../common/utils','wechatOfficialAppSecret','Injectable','&client_secret=','nineaiBuiltInSensitiveApiBase','baiduCode','getCopyright','getSignatureGiftConfig','__param','length','tencent','openaiBaseUrl','registerSendModel4Count','2673018drqeda','isShowAppCatIcon','setGptKeys','ISDEV','salesAllowDrawMoney','getNineAiToken','salesBaseRatio','chatGptKey','data','baiduTextAccessToken','请按要求填写正确的授权信息','invitedGuestSendModel3Count','configs','appMenuHeaderTips','getConfigs','1253036tSOUOT','firstRegisterSendRank','queryNotice','forEach','还未配置微信的appId和secret、配置后才可进行微信扫码登录！！！','Like','package.json','aliPhoneAccessKeySecret','chatGptKey:','@nestjs/common','phoneRegisterStatus','ConfigEntity','typeorm','initGetAllConfig','设置配置信息错误！','MjdrawCount','ticket','invitedGuestSendDrawMjCount','vxNumber','every','queryAllConfig','payHupiStatus','payMpayStatus','getSensitiveConfig','GlobalConfigService','手机验证码功能暂未开放!','domain','metadata','configKey','application/json','NINEAI','siteName','getWechatAccessToken','axios','pay','fetchBaseAccessToken','queryPayType','error','debug','map','copyrightUrl','emailRegisterStatus','HttpStatus','delete','error:\x20','copyrightTitle','isUseWxLogin','payEpayStatus','407VpIclG','signInStatus','3Gprrhw','TRUE','filingNumber','nineAiToken','super','design:paramtypes','Logger','payEpayApiPayUrl','siteRobotName','mjUseBaiduFy','mindDefaultData','wechatAccessToken','registerSendStatus','decorate','env','readFileSync','user','firstRregisterSendModel4Count','inviteSendStatus','aliPhoneSignName','mjHideWorkIn','firstRregisterSendDrawMjCount','payWechatStatus','globalConfigs','configEntity','1052928CryEHk','Status','log','emailLoginStatus','onModuleInit','fetchJsapiTicket','firstRregisterSendModel3Count','615396WUYtFI'];_0x56e7=function(){return _0x333b5f;};return _0x56e7();}