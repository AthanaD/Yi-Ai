'use strict';const _0x4a6b9e=_0x597f;(function(_0x5c3aef,_0x966ffe){const _0x37f5f8=_0x597f,_0x53651c=_0x5c3aef();while(!![]){try{const _0xfc6b04=parseInt(_0x37f5f8(0x93))/0x1+parseInt(_0x37f5f8(0x82))/0x2+parseInt(_0x37f5f8(0x90))/0x3*(parseInt(_0x37f5f8(0xa0))/0x4)+parseInt(_0x37f5f8(0x94))/0x5*(-parseInt(_0x37f5f8(0x83))/0x6)+-parseInt(_0x37f5f8(0x84))/0x7+-parseInt(_0x37f5f8(0x95))/0x8*(parseInt(_0x37f5f8(0x85))/0x9)+parseInt(_0x37f5f8(0x9f))/0xa*(-parseInt(_0x37f5f8(0xa7))/0xb);if(_0xfc6b04===_0x966ffe)break;else _0x53651c['push'](_0x53651c['shift']());}catch(_0x2f0471){_0x53651c['push'](_0x53651c['shift']());}}}(_0x3e49,0xc3bbc));Object['defineProperty'](exports,_0x4a6b9e(0xa1),{'value':!![]}),exports[_0x4a6b9e(0x7d)]=exports[_0x4a6b9e(0x7f)]=exports[_0x4a6b9e(0x80)]=exports[_0x4a6b9e(0x8c)]=void 0x0;const axios=require(_0x4a6b9e(0x99)),jwt=require(_0x4a6b9e(0x9d));function generateToken(_0x2e19aa,_0x20e3c5=0x3e8*0x3c*0x3c*0x18*0x168){const _0x1941fc=_0x4a6b9e,[_0x47434d,_0x5ce0fb]=_0x2e19aa[_0x1941fc(0x97)]('.'),_0xc0eae7={'api_key':_0x47434d,'exp':Math[_0x1941fc(0x91)](Date[_0x1941fc(0x96)]())+_0x20e3c5*0x3e8,'timestamp':Math[_0x1941fc(0x91)](Date[_0x1941fc(0x96)]())};return jwt[_0x1941fc(0x88)](_0xc0eae7,_0x5ce0fb,{'algorithm':_0x1941fc(0x8e),'header':{'alg':_0x1941fc(0x8e),'sign_type':_0x1941fc(0x9e)}});}function _0x597f(_0x30da97,_0x33db3b){const _0x3e4905=_0x3e49();return _0x597f=function(_0x597f25,_0x2fee80){_0x597f25=_0x597f25-0x7c;let _0x45816b=_0x3e4905[_0x597f25];return _0x45816b;},_0x597f(_0x30da97,_0x33db3b);}function _0x3e49(){const _0x2004f0=['compilerStream','compilerMetaJsonStr','usage','1414392LZORvX','1662GZtDEN','3821685cCcWxI','171mklHFh','error','meta:','sign','data:','trim','log','generateToken','id:','HS256','length','3804009vkZoKL','round','https://open.bigmodel.cn/api/paas/v3/model-api/','1530081ohfaoH','25855UYBkWA','169408OahnpT','now','split','end','axios','data','parse','/sse-invoke','jsonwebtoken','SIGN','100RsekXd','4XdrPGe','__esModule','error:\x20','replace','stream','event:','toString','355179PBjRWY','catch','sendMessageFromZhipu','filter'];_0x3e49=function(){return _0x2004f0;};return _0x3e49();}exports[_0x4a6b9e(0x8c)]=generateToken;function compilerMetaJsonStr(_0x524675){const _0x545917=_0x4a6b9e;let _0x3478fb={};try{_0x3478fb=JSON[_0x545917(0x9b)](_0x524675);}catch(_0x21cc5c){_0x3478fb={'usage':{'completion_tokens':0x31,'prompt_tokens':0x14d,'total_tokens':0x18f}},console[_0x545917(0x86)]('json\x20parse\x20error\x20from\x20zhipu!',_0x524675);}return _0x3478fb;}exports[_0x4a6b9e(0x80)]=compilerMetaJsonStr;function compilerStream(_0x15610d){const _0x5e9608=_0x4a6b9e;var _0x7c6d38;if(_0x15610d[_0x5e9608(0x8f)]===0x3)return{'event':_0x15610d[0x0][_0x5e9608(0xa3)](_0x5e9608(0xa5),''),'id':_0x15610d[0x1][_0x5e9608(0xa3)](_0x5e9608(0x8d),''),'is_end':![],'result':_0x15610d[0x2][_0x5e9608(0xa3)](_0x5e9608(0x89),'')[_0x5e9608(0x8a)]()};if(_0x15610d[_0x5e9608(0x8f)]===0x4)return{'event':_0x15610d[0x0]['replace'](_0x5e9608(0xa5),''),'id':_0x15610d[0x1]['replace'](_0x5e9608(0x8d),''),'result':_0x15610d[0x2][_0x5e9608(0xa3)](_0x5e9608(0x89),'')[_0x5e9608(0x8a)](),'is_end':!![],'usage':(_0x7c6d38=compilerMetaJsonStr(_0x15610d[0x3]['replace'](_0x5e9608(0x87),'')))===null||_0x7c6d38===void 0x0?void 0x0:_0x7c6d38[_0x5e9608(0x81)]};}exports[_0x4a6b9e(0x7f)]=compilerStream;async function sendMessageFromZhipu(_0xe4f02b,{onProgress:_0x2f820b,key:_0x177e5e,model:_0x5c2f1f,temperature:temperature=0.95}){const _0x2d2bbe=await generateToken(_0x177e5e);return new Promise((_0x382891,_0x448470)=>{const _0x1558b2=_0x597f,_0x295c7a=_0x1558b2(0x92)+_0x5c2f1f+_0x1558b2(0x9c),_0x1a3624={'method':'POST','url':_0x295c7a,'responseType':_0x1558b2(0xa4),'headers':{'Content-Type':'application/json','Authorization':_0x2d2bbe},'data':{'prompt':_0xe4f02b,'temperature':temperature}};axios(_0x1a3624)['then'](_0x5959b4=>{const _0x45ba59=_0x1558b2,_0x43cd70=_0x5959b4[_0x45ba59(0x9a)];let _0x631447,_0x4f56a2='';_0x43cd70['on'](_0x45ba59(0x9a),_0x32b988=>{const _0x3ea0fd=_0x45ba59,_0x52b8c5=_0x32b988[_0x3ea0fd(0xa6)]()[_0x3ea0fd(0x97)]('\x0a')[_0x3ea0fd(0x7e)](_0x2739a4=>_0x2739a4[_0x3ea0fd(0x8a)]()!==''),_0x40f0d7=compilerStream(_0x52b8c5);if(!_0x40f0d7)return;const {id:_0x43d0bd,result:_0x1a356e,is_end:_0x5a6c4f}=_0x40f0d7;_0x1a356e&&(_0x4f56a2+=_0x1a356e[_0x3ea0fd(0x8a)]()),_0x5a6c4f&&(_0x40f0d7['is_end']=![],_0x631447=_0x40f0d7,_0x631447['text']=_0x4f56a2),_0x2f820b(_0x40f0d7);}),_0x43cd70['on'](_0x45ba59(0x98),()=>{_0x382891(_0x631447),_0x4f56a2='';});})[_0x1558b2(0x7c)](_0x54e9e3=>{const _0x45f530=_0x1558b2;console[_0x45f530(0x8b)](_0x45f530(0xa2),_0x54e9e3);});});}exports[_0x4a6b9e(0x7d)]=sendMessageFromZhipu;