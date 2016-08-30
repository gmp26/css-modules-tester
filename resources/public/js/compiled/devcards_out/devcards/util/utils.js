// Compiled by ClojureScript 1.8.51 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__20910__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22388_22390 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22389_22391 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_22388_22390,_STAR_print_fn_STAR_22389_22391,sb__20910__auto__){
return (function (x__20911__auto__){
return sb__20910__auto__.append(x__20911__auto__);
});})(_STAR_print_newline_STAR_22388_22390,_STAR_print_fn_STAR_22389_22391,sb__20910__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22389_22391;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22388_22390;
}
return [cljs.core.str(sb__20910__auto__)].join('');
}catch (e22386){if((e22386 instanceof Error)){
var e1 = e22386;
try{return obj.toString();
}catch (e22387){if((e22387 instanceof Error)){
var e2 = e22387;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e22387;

}
}} else {
throw e22386;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_22393 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_22393;
}});

//# sourceMappingURL=utils.js.map?rel=1472593623839