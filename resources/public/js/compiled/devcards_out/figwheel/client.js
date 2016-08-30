// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-6";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args29822 = [];
var len__20994__auto___29825 = arguments.length;
var i__20995__auto___29826 = (0);
while(true){
if((i__20995__auto___29826 < len__20994__auto___29825)){
args29822.push((arguments[i__20995__auto___29826]));

var G__29827 = (i__20995__auto___29826 + (1));
i__20995__auto___29826 = G__29827;
continue;
} else {
}
break;
}

var G__29824 = args29822.length;
switch (G__29824) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29822.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;
figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21001__auto__ = [];
var len__20994__auto___29830 = arguments.length;
var i__20995__auto___29831 = (0);
while(true){
if((i__20995__auto___29831 < len__20994__auto___29830)){
args__21001__auto__.push((arguments[i__20995__auto___29831]));

var G__29832 = (i__20995__auto___29831 + (1));
i__20995__auto___29831 = G__29832;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((0) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21002__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29829){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29829));
});
figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21001__auto__ = [];
var len__20994__auto___29834 = arguments.length;
var i__20995__auto___29835 = (0);
while(true){
if((i__20995__auto___29835 < len__20994__auto___29834)){
args__21001__auto__.push((arguments[i__20995__auto___29835]));

var G__29836 = (i__20995__auto___29835 + (1));
i__20995__auto___29835 = G__29836;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((0) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21002__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29833){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29833));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__29837 = cljs.core._EQ_;
var expr__29838 = (function (){var or__19924__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e29841){if((e29841 instanceof Error)){
var e = e29841;
return false;
} else {
throw e29841;

}
}})();
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29837.call(null,"true",expr__29838))){
return true;
} else {
if(cljs.core.truth_(pred__29837.call(null,"false",expr__29838))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29838)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e29843){if((e29843 instanceof Error)){
var e = e29843;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e29843;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29844){
var map__29847 = p__29844;
var map__29847__$1 = ((((!((map__29847 == null)))?((((map__29847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29847):map__29847);
var message = cljs.core.get.call(null,map__29847__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29847__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19924__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19912__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19912__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19912__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23388__auto___30009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___30009,ch){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___30009,ch){
return (function (state_29978){
var state_val_29979 = (state_29978[(1)]);
if((state_val_29979 === (7))){
var inst_29974 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_29980_30010 = state_29978__$1;
(statearr_29980_30010[(2)] = inst_29974);

(statearr_29980_30010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (1))){
var state_29978__$1 = state_29978;
var statearr_29981_30011 = state_29978__$1;
(statearr_29981_30011[(2)] = null);

(statearr_29981_30011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (4))){
var inst_29931 = (state_29978[(7)]);
var inst_29931__$1 = (state_29978[(2)]);
var state_29978__$1 = (function (){var statearr_29982 = state_29978;
(statearr_29982[(7)] = inst_29931__$1);

return statearr_29982;
})();
if(cljs.core.truth_(inst_29931__$1)){
var statearr_29983_30012 = state_29978__$1;
(statearr_29983_30012[(1)] = (5));

} else {
var statearr_29984_30013 = state_29978__$1;
(statearr_29984_30013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (15))){
var inst_29938 = (state_29978[(8)]);
var inst_29953 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29938);
var inst_29954 = cljs.core.first.call(null,inst_29953);
var inst_29955 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29954);
var inst_29956 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29955)].join('');
var inst_29957 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29956);
var state_29978__$1 = state_29978;
var statearr_29985_30014 = state_29978__$1;
(statearr_29985_30014[(2)] = inst_29957);

(statearr_29985_30014[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (13))){
var inst_29962 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_29986_30015 = state_29978__$1;
(statearr_29986_30015[(2)] = inst_29962);

(statearr_29986_30015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (6))){
var state_29978__$1 = state_29978;
var statearr_29987_30016 = state_29978__$1;
(statearr_29987_30016[(2)] = null);

(statearr_29987_30016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (17))){
var inst_29960 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_29988_30017 = state_29978__$1;
(statearr_29988_30017[(2)] = inst_29960);

(statearr_29988_30017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (3))){
var inst_29976 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29978__$1,inst_29976);
} else {
if((state_val_29979 === (12))){
var inst_29937 = (state_29978[(9)]);
var inst_29951 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29937,opts);
var state_29978__$1 = state_29978;
if(cljs.core.truth_(inst_29951)){
var statearr_29989_30018 = state_29978__$1;
(statearr_29989_30018[(1)] = (15));

} else {
var statearr_29990_30019 = state_29978__$1;
(statearr_29990_30019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (2))){
var state_29978__$1 = state_29978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29978__$1,(4),ch);
} else {
if((state_val_29979 === (11))){
var inst_29938 = (state_29978[(8)]);
var inst_29943 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29944 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29938);
var inst_29945 = cljs.core.async.timeout.call(null,(1000));
var inst_29946 = [inst_29944,inst_29945];
var inst_29947 = (new cljs.core.PersistentVector(null,2,(5),inst_29943,inst_29946,null));
var state_29978__$1 = state_29978;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29978__$1,(14),inst_29947);
} else {
if((state_val_29979 === (9))){
var inst_29938 = (state_29978[(8)]);
var inst_29964 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29965 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29938);
var inst_29966 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29965);
var inst_29967 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29966)].join('');
var inst_29968 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29967);
var state_29978__$1 = (function (){var statearr_29991 = state_29978;
(statearr_29991[(10)] = inst_29964);

return statearr_29991;
})();
var statearr_29992_30020 = state_29978__$1;
(statearr_29992_30020[(2)] = inst_29968);

(statearr_29992_30020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (5))){
var inst_29931 = (state_29978[(7)]);
var inst_29933 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29934 = (new cljs.core.PersistentArrayMap(null,2,inst_29933,null));
var inst_29935 = (new cljs.core.PersistentHashSet(null,inst_29934,null));
var inst_29936 = figwheel.client.focus_msgs.call(null,inst_29935,inst_29931);
var inst_29937 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29936);
var inst_29938 = cljs.core.first.call(null,inst_29936);
var inst_29939 = figwheel.client.autoload_QMARK_.call(null);
var state_29978__$1 = (function (){var statearr_29993 = state_29978;
(statearr_29993[(8)] = inst_29938);

(statearr_29993[(9)] = inst_29937);

return statearr_29993;
})();
if(cljs.core.truth_(inst_29939)){
var statearr_29994_30021 = state_29978__$1;
(statearr_29994_30021[(1)] = (8));

} else {
var statearr_29995_30022 = state_29978__$1;
(statearr_29995_30022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (14))){
var inst_29949 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_29996_30023 = state_29978__$1;
(statearr_29996_30023[(2)] = inst_29949);

(statearr_29996_30023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (16))){
var state_29978__$1 = state_29978;
var statearr_29997_30024 = state_29978__$1;
(statearr_29997_30024[(2)] = null);

(statearr_29997_30024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (10))){
var inst_29970 = (state_29978[(2)]);
var state_29978__$1 = (function (){var statearr_29998 = state_29978;
(statearr_29998[(11)] = inst_29970);

return statearr_29998;
})();
var statearr_29999_30025 = state_29978__$1;
(statearr_29999_30025[(2)] = null);

(statearr_29999_30025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (8))){
var inst_29937 = (state_29978[(9)]);
var inst_29941 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29937,opts);
var state_29978__$1 = state_29978;
if(cljs.core.truth_(inst_29941)){
var statearr_30000_30026 = state_29978__$1;
(statearr_30000_30026[(1)] = (11));

} else {
var statearr_30001_30027 = state_29978__$1;
(statearr_30001_30027[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23388__auto___30009,ch))
;
return ((function (switch__23276__auto__,c__23388__auto___30009,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23277__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23277__auto____0 = (function (){
var statearr_30005 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30005[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23277__auto__);

(statearr_30005[(1)] = (1));

return statearr_30005;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23277__auto____1 = (function (state_29978){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_29978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e30006){if((e30006 instanceof Object)){
var ex__23280__auto__ = e30006;
var statearr_30007_30028 = state_29978;
(statearr_30007_30028[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30029 = state_29978;
state_29978 = G__30029;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23277__auto__ = function(state_29978){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23277__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23277__auto____1.call(this,state_29978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23277__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23277__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___30009,ch))
})();
var state__23390__auto__ = (function (){var statearr_30008 = f__23389__auto__.call(null);
(statearr_30008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___30009);

return statearr_30008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___30009,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30030_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30030_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30033 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30033){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30032){if((e30032 instanceof Error)){
var e = e30032;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30033], null));
} else {
var e = e30032;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30033))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30034){
var map__30041 = p__30034;
var map__30041__$1 = ((((!((map__30041 == null)))?((((map__30041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30041):map__30041);
var opts = map__30041__$1;
var build_id = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30041,map__30041__$1,opts,build_id){
return (function (p__30043){
var vec__30044 = p__30043;
var map__30045 = cljs.core.nth.call(null,vec__30044,(0),null);
var map__30045__$1 = ((((!((map__30045 == null)))?((((map__30045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30045):map__30045);
var msg = map__30045__$1;
var msg_name = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30044,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30044,map__30045,map__30045__$1,msg,msg_name,_,map__30041,map__30041__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30044,map__30045,map__30045__$1,msg,msg_name,_,map__30041,map__30041__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30041,map__30041__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30051){
var vec__30052 = p__30051;
var map__30053 = cljs.core.nth.call(null,vec__30052,(0),null);
var map__30053__$1 = ((((!((map__30053 == null)))?((((map__30053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30053):map__30053);
var msg = map__30053__$1;
var msg_name = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30052,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30055){
var map__30065 = p__30055;
var map__30065__$1 = ((((!((map__30065 == null)))?((((map__30065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30065):map__30065);
var on_compile_warning = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30065,map__30065__$1,on_compile_warning,on_compile_fail){
return (function (p__30067){
var vec__30068 = p__30067;
var map__30069 = cljs.core.nth.call(null,vec__30068,(0),null);
var map__30069__$1 = ((((!((map__30069 == null)))?((((map__30069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30069):map__30069);
var msg = map__30069__$1;
var msg_name = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30068,(1));
var pred__30071 = cljs.core._EQ_;
var expr__30072 = msg_name;
if(cljs.core.truth_(pred__30071.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30072))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30071.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30072))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30065,map__30065__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto__,msg_hist,msg_names,msg){
return (function (state_30280){
var state_val_30281 = (state_30280[(1)]);
if((state_val_30281 === (7))){
var inst_30208 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
if(cljs.core.truth_(inst_30208)){
var statearr_30282_30328 = state_30280__$1;
(statearr_30282_30328[(1)] = (8));

} else {
var statearr_30283_30329 = state_30280__$1;
(statearr_30283_30329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (20))){
var inst_30274 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30284_30330 = state_30280__$1;
(statearr_30284_30330[(2)] = inst_30274);

(statearr_30284_30330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (27))){
var inst_30270 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30285_30331 = state_30280__$1;
(statearr_30285_30331[(2)] = inst_30270);

(statearr_30285_30331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (1))){
var inst_30201 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30280__$1 = state_30280;
if(cljs.core.truth_(inst_30201)){
var statearr_30286_30332 = state_30280__$1;
(statearr_30286_30332[(1)] = (2));

} else {
var statearr_30287_30333 = state_30280__$1;
(statearr_30287_30333[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (24))){
var inst_30272 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30288_30334 = state_30280__$1;
(statearr_30288_30334[(2)] = inst_30272);

(statearr_30288_30334[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (4))){
var inst_30278 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30280__$1,inst_30278);
} else {
if((state_val_30281 === (15))){
var inst_30276 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30289_30335 = state_30280__$1;
(statearr_30289_30335[(2)] = inst_30276);

(statearr_30289_30335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (21))){
var inst_30235 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30290_30336 = state_30280__$1;
(statearr_30290_30336[(2)] = inst_30235);

(statearr_30290_30336[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (31))){
var inst_30259 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30280__$1 = state_30280;
if(cljs.core.truth_(inst_30259)){
var statearr_30291_30337 = state_30280__$1;
(statearr_30291_30337[(1)] = (34));

} else {
var statearr_30292_30338 = state_30280__$1;
(statearr_30292_30338[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (32))){
var inst_30268 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30293_30339 = state_30280__$1;
(statearr_30293_30339[(2)] = inst_30268);

(statearr_30293_30339[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (33))){
var inst_30257 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30294_30340 = state_30280__$1;
(statearr_30294_30340[(2)] = inst_30257);

(statearr_30294_30340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (13))){
var inst_30222 = figwheel.client.heads_up.clear.call(null);
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(16),inst_30222);
} else {
if((state_val_30281 === (22))){
var inst_30239 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30240 = figwheel.client.heads_up.append_warning_message.call(null,inst_30239);
var state_30280__$1 = state_30280;
var statearr_30295_30341 = state_30280__$1;
(statearr_30295_30341[(2)] = inst_30240);

(statearr_30295_30341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (36))){
var inst_30266 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30296_30342 = state_30280__$1;
(statearr_30296_30342[(2)] = inst_30266);

(statearr_30296_30342[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (29))){
var inst_30250 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30297_30343 = state_30280__$1;
(statearr_30297_30343[(2)] = inst_30250);

(statearr_30297_30343[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (6))){
var inst_30203 = (state_30280[(7)]);
var state_30280__$1 = state_30280;
var statearr_30298_30344 = state_30280__$1;
(statearr_30298_30344[(2)] = inst_30203);

(statearr_30298_30344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (28))){
var inst_30246 = (state_30280[(2)]);
var inst_30247 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30248 = figwheel.client.heads_up.display_warning.call(null,inst_30247);
var state_30280__$1 = (function (){var statearr_30299 = state_30280;
(statearr_30299[(8)] = inst_30246);

return statearr_30299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(29),inst_30248);
} else {
if((state_val_30281 === (25))){
var inst_30244 = figwheel.client.heads_up.clear.call(null);
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(28),inst_30244);
} else {
if((state_val_30281 === (34))){
var inst_30261 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(37),inst_30261);
} else {
if((state_val_30281 === (17))){
var inst_30228 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30300_30345 = state_30280__$1;
(statearr_30300_30345[(2)] = inst_30228);

(statearr_30300_30345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (3))){
var inst_30220 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30280__$1 = state_30280;
if(cljs.core.truth_(inst_30220)){
var statearr_30301_30346 = state_30280__$1;
(statearr_30301_30346[(1)] = (13));

} else {
var statearr_30302_30347 = state_30280__$1;
(statearr_30302_30347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (12))){
var inst_30216 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30303_30348 = state_30280__$1;
(statearr_30303_30348[(2)] = inst_30216);

(statearr_30303_30348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (2))){
var inst_30203 = (state_30280[(7)]);
var inst_30203__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30280__$1 = (function (){var statearr_30304 = state_30280;
(statearr_30304[(7)] = inst_30203__$1);

return statearr_30304;
})();
if(cljs.core.truth_(inst_30203__$1)){
var statearr_30305_30349 = state_30280__$1;
(statearr_30305_30349[(1)] = (5));

} else {
var statearr_30306_30350 = state_30280__$1;
(statearr_30306_30350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (23))){
var inst_30242 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30280__$1 = state_30280;
if(cljs.core.truth_(inst_30242)){
var statearr_30307_30351 = state_30280__$1;
(statearr_30307_30351[(1)] = (25));

} else {
var statearr_30308_30352 = state_30280__$1;
(statearr_30308_30352[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (35))){
var state_30280__$1 = state_30280;
var statearr_30309_30353 = state_30280__$1;
(statearr_30309_30353[(2)] = null);

(statearr_30309_30353[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (19))){
var inst_30237 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30280__$1 = state_30280;
if(cljs.core.truth_(inst_30237)){
var statearr_30310_30354 = state_30280__$1;
(statearr_30310_30354[(1)] = (22));

} else {
var statearr_30311_30355 = state_30280__$1;
(statearr_30311_30355[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (11))){
var inst_30212 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30312_30356 = state_30280__$1;
(statearr_30312_30356[(2)] = inst_30212);

(statearr_30312_30356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (9))){
var inst_30214 = figwheel.client.heads_up.clear.call(null);
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(12),inst_30214);
} else {
if((state_val_30281 === (5))){
var inst_30205 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30280__$1 = state_30280;
var statearr_30313_30357 = state_30280__$1;
(statearr_30313_30357[(2)] = inst_30205);

(statearr_30313_30357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (14))){
var inst_30230 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30280__$1 = state_30280;
if(cljs.core.truth_(inst_30230)){
var statearr_30314_30358 = state_30280__$1;
(statearr_30314_30358[(1)] = (18));

} else {
var statearr_30315_30359 = state_30280__$1;
(statearr_30315_30359[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (26))){
var inst_30252 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30280__$1 = state_30280;
if(cljs.core.truth_(inst_30252)){
var statearr_30316_30360 = state_30280__$1;
(statearr_30316_30360[(1)] = (30));

} else {
var statearr_30317_30361 = state_30280__$1;
(statearr_30317_30361[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (16))){
var inst_30224 = (state_30280[(2)]);
var inst_30225 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30226 = figwheel.client.heads_up.display_exception.call(null,inst_30225);
var state_30280__$1 = (function (){var statearr_30318 = state_30280;
(statearr_30318[(9)] = inst_30224);

return statearr_30318;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(17),inst_30226);
} else {
if((state_val_30281 === (30))){
var inst_30254 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30255 = figwheel.client.heads_up.display_warning.call(null,inst_30254);
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(33),inst_30255);
} else {
if((state_val_30281 === (10))){
var inst_30218 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30319_30362 = state_30280__$1;
(statearr_30319_30362[(2)] = inst_30218);

(statearr_30319_30362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (18))){
var inst_30232 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30233 = figwheel.client.heads_up.display_exception.call(null,inst_30232);
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(21),inst_30233);
} else {
if((state_val_30281 === (37))){
var inst_30263 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30320_30363 = state_30280__$1;
(statearr_30320_30363[(2)] = inst_30263);

(statearr_30320_30363[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (8))){
var inst_30210 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(11),inst_30210);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23388__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23276__auto__,c__23388__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23277__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23277__auto____0 = (function (){
var statearr_30324 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30324[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23277__auto__);

(statearr_30324[(1)] = (1));

return statearr_30324;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23277__auto____1 = (function (state_30280){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_30280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e30325){if((e30325 instanceof Object)){
var ex__23280__auto__ = e30325;
var statearr_30326_30364 = state_30280;
(statearr_30326_30364[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30365 = state_30280;
state_30280 = G__30365;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23277__auto__ = function(state_30280){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23277__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23277__auto____1.call(this,state_30280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23277__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23277__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto__,msg_hist,msg_names,msg))
})();
var state__23390__auto__ = (function (){var statearr_30327 = f__23389__auto__.call(null);
(statearr_30327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto__);

return statearr_30327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto__,msg_hist,msg_names,msg))
);

return c__23388__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23388__auto___30428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___30428,ch){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___30428,ch){
return (function (state_30411){
var state_val_30412 = (state_30411[(1)]);
if((state_val_30412 === (1))){
var state_30411__$1 = state_30411;
var statearr_30413_30429 = state_30411__$1;
(statearr_30413_30429[(2)] = null);

(statearr_30413_30429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (2))){
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30411__$1,(4),ch);
} else {
if((state_val_30412 === (3))){
var inst_30409 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30411__$1,inst_30409);
} else {
if((state_val_30412 === (4))){
var inst_30399 = (state_30411[(7)]);
var inst_30399__$1 = (state_30411[(2)]);
var state_30411__$1 = (function (){var statearr_30414 = state_30411;
(statearr_30414[(7)] = inst_30399__$1);

return statearr_30414;
})();
if(cljs.core.truth_(inst_30399__$1)){
var statearr_30415_30430 = state_30411__$1;
(statearr_30415_30430[(1)] = (5));

} else {
var statearr_30416_30431 = state_30411__$1;
(statearr_30416_30431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (5))){
var inst_30399 = (state_30411[(7)]);
var inst_30401 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30399);
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30411__$1,(8),inst_30401);
} else {
if((state_val_30412 === (6))){
var state_30411__$1 = state_30411;
var statearr_30417_30432 = state_30411__$1;
(statearr_30417_30432[(2)] = null);

(statearr_30417_30432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (7))){
var inst_30407 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
var statearr_30418_30433 = state_30411__$1;
(statearr_30418_30433[(2)] = inst_30407);

(statearr_30418_30433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (8))){
var inst_30403 = (state_30411[(2)]);
var state_30411__$1 = (function (){var statearr_30419 = state_30411;
(statearr_30419[(8)] = inst_30403);

return statearr_30419;
})();
var statearr_30420_30434 = state_30411__$1;
(statearr_30420_30434[(2)] = null);

(statearr_30420_30434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__23388__auto___30428,ch))
;
return ((function (switch__23276__auto__,c__23388__auto___30428,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23277__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23277__auto____0 = (function (){
var statearr_30424 = [null,null,null,null,null,null,null,null,null];
(statearr_30424[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23277__auto__);

(statearr_30424[(1)] = (1));

return statearr_30424;
});
var figwheel$client$heads_up_plugin_$_state_machine__23277__auto____1 = (function (state_30411){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_30411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e30425){if((e30425 instanceof Object)){
var ex__23280__auto__ = e30425;
var statearr_30426_30435 = state_30411;
(statearr_30426_30435[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30436 = state_30411;
state_30411 = G__30436;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23277__auto__ = function(state_30411){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23277__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23277__auto____1.call(this,state_30411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23277__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23277__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___30428,ch))
})();
var state__23390__auto__ = (function (){var statearr_30427 = f__23389__auto__.call(null);
(statearr_30427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___30428);

return statearr_30427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___30428,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto__){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto__){
return (function (state_30457){
var state_val_30458 = (state_30457[(1)]);
if((state_val_30458 === (1))){
var inst_30452 = cljs.core.async.timeout.call(null,(3000));
var state_30457__$1 = state_30457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30457__$1,(2),inst_30452);
} else {
if((state_val_30458 === (2))){
var inst_30454 = (state_30457[(2)]);
var inst_30455 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30457__$1 = (function (){var statearr_30459 = state_30457;
(statearr_30459[(7)] = inst_30454);

return statearr_30459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30457__$1,inst_30455);
} else {
return null;
}
}
});})(c__23388__auto__))
;
return ((function (switch__23276__auto__,c__23388__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23277__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23277__auto____0 = (function (){
var statearr_30463 = [null,null,null,null,null,null,null,null];
(statearr_30463[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23277__auto__);

(statearr_30463[(1)] = (1));

return statearr_30463;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23277__auto____1 = (function (state_30457){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_30457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e30464){if((e30464 instanceof Object)){
var ex__23280__auto__ = e30464;
var statearr_30465_30467 = state_30457;
(statearr_30465_30467[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30468 = state_30457;
state_30457 = G__30468;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23277__auto__ = function(state_30457){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23277__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23277__auto____1.call(this,state_30457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23277__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23277__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto__))
})();
var state__23390__auto__ = (function (){var statearr_30466 = f__23389__auto__.call(null);
(statearr_30466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto__);

return statearr_30466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto__))
);

return c__23388__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto__,figwheel_version,temp__4657__auto__){
return (function (state_30491){
var state_val_30492 = (state_30491[(1)]);
if((state_val_30492 === (1))){
var inst_30485 = cljs.core.async.timeout.call(null,(2000));
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(2),inst_30485);
} else {
if((state_val_30492 === (2))){
var inst_30487 = (state_30491[(2)]);
var inst_30488 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_30489 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30488);
var state_30491__$1 = (function (){var statearr_30493 = state_30491;
(statearr_30493[(7)] = inst_30487);

return statearr_30493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30491__$1,inst_30489);
} else {
return null;
}
}
});})(c__23388__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__23276__auto__,c__23388__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23277__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23277__auto____0 = (function (){
var statearr_30497 = [null,null,null,null,null,null,null,null];
(statearr_30497[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23277__auto__);

(statearr_30497[(1)] = (1));

return statearr_30497;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23277__auto____1 = (function (state_30491){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_30491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e30498){if((e30498 instanceof Object)){
var ex__23280__auto__ = e30498;
var statearr_30499_30501 = state_30491;
(statearr_30499_30501[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30502 = state_30491;
state_30491 = G__30502;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23277__auto__ = function(state_30491){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23277__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23277__auto____1.call(this,state_30491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23277__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23277__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto__,figwheel_version,temp__4657__auto__))
})();
var state__23390__auto__ = (function (){var statearr_30500 = f__23389__auto__.call(null);
(statearr_30500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto__);

return statearr_30500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto__,figwheel_version,temp__4657__auto__))
);

return c__23388__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30503){
var map__30507 = p__30503;
var map__30507__$1 = ((((!((map__30507 == null)))?((((map__30507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30507):map__30507);
var file = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30509 = "";
var G__30509__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__30509),cljs.core.str("file "),cljs.core.str(file)].join(''):G__30509);
var G__30509__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__30509__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__30509__$1);
if(cljs.core.truth_((function (){var and__19912__auto__ = line;
if(cljs.core.truth_(and__19912__auto__)){
return column;
} else {
return and__19912__auto__;
}
})())){
return [cljs.core.str(G__30509__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__30509__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30510){
var map__30517 = p__30510;
var map__30517__$1 = ((((!((map__30517 == null)))?((((map__30517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30517):map__30517);
var ed = map__30517__$1;
var formatted_exception = cljs.core.get.call(null,map__30517__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30517__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30517__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30519_30523 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30520_30524 = null;
var count__30521_30525 = (0);
var i__30522_30526 = (0);
while(true){
if((i__30522_30526 < count__30521_30525)){
var msg_30527 = cljs.core._nth.call(null,chunk__30520_30524,i__30522_30526);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30527);

var G__30528 = seq__30519_30523;
var G__30529 = chunk__30520_30524;
var G__30530 = count__30521_30525;
var G__30531 = (i__30522_30526 + (1));
seq__30519_30523 = G__30528;
chunk__30520_30524 = G__30529;
count__30521_30525 = G__30530;
i__30522_30526 = G__30531;
continue;
} else {
var temp__4657__auto___30532 = cljs.core.seq.call(null,seq__30519_30523);
if(temp__4657__auto___30532){
var seq__30519_30533__$1 = temp__4657__auto___30532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30519_30533__$1)){
var c__20735__auto___30534 = cljs.core.chunk_first.call(null,seq__30519_30533__$1);
var G__30535 = cljs.core.chunk_rest.call(null,seq__30519_30533__$1);
var G__30536 = c__20735__auto___30534;
var G__30537 = cljs.core.count.call(null,c__20735__auto___30534);
var G__30538 = (0);
seq__30519_30523 = G__30535;
chunk__30520_30524 = G__30536;
count__30521_30525 = G__30537;
i__30522_30526 = G__30538;
continue;
} else {
var msg_30539 = cljs.core.first.call(null,seq__30519_30533__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30539);

var G__30540 = cljs.core.next.call(null,seq__30519_30533__$1);
var G__30541 = null;
var G__30542 = (0);
var G__30543 = (0);
seq__30519_30523 = G__30540;
chunk__30520_30524 = G__30541;
count__30521_30525 = G__30542;
i__30522_30526 = G__30543;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30544){
var map__30547 = p__30544;
var map__30547__$1 = ((((!((map__30547 == null)))?((((map__30547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30547):map__30547);
var w = map__30547__$1;
var message = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19912__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19912__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19912__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30555 = cljs.core.seq.call(null,plugins);
var chunk__30556 = null;
var count__30557 = (0);
var i__30558 = (0);
while(true){
if((i__30558 < count__30557)){
var vec__30559 = cljs.core._nth.call(null,chunk__30556,i__30558);
var k = cljs.core.nth.call(null,vec__30559,(0),null);
var plugin = cljs.core.nth.call(null,vec__30559,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30561 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30555,chunk__30556,count__30557,i__30558,pl_30561,vec__30559,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30561.call(null,msg_hist);
});})(seq__30555,chunk__30556,count__30557,i__30558,pl_30561,vec__30559,k,plugin))
);
} else {
}

var G__30562 = seq__30555;
var G__30563 = chunk__30556;
var G__30564 = count__30557;
var G__30565 = (i__30558 + (1));
seq__30555 = G__30562;
chunk__30556 = G__30563;
count__30557 = G__30564;
i__30558 = G__30565;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30555);
if(temp__4657__auto__){
var seq__30555__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30555__$1)){
var c__20735__auto__ = cljs.core.chunk_first.call(null,seq__30555__$1);
var G__30566 = cljs.core.chunk_rest.call(null,seq__30555__$1);
var G__30567 = c__20735__auto__;
var G__30568 = cljs.core.count.call(null,c__20735__auto__);
var G__30569 = (0);
seq__30555 = G__30566;
chunk__30556 = G__30567;
count__30557 = G__30568;
i__30558 = G__30569;
continue;
} else {
var vec__30560 = cljs.core.first.call(null,seq__30555__$1);
var k = cljs.core.nth.call(null,vec__30560,(0),null);
var plugin = cljs.core.nth.call(null,vec__30560,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30570 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30555,chunk__30556,count__30557,i__30558,pl_30570,vec__30560,k,plugin,seq__30555__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30570.call(null,msg_hist);
});})(seq__30555,chunk__30556,count__30557,i__30558,pl_30570,vec__30560,k,plugin,seq__30555__$1,temp__4657__auto__))
);
} else {
}

var G__30571 = cljs.core.next.call(null,seq__30555__$1);
var G__30572 = null;
var G__30573 = (0);
var G__30574 = (0);
seq__30555 = G__30571;
chunk__30556 = G__30572;
count__30557 = G__30573;
i__30558 = G__30574;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30575 = [];
var len__20994__auto___30582 = arguments.length;
var i__20995__auto___30583 = (0);
while(true){
if((i__20995__auto___30583 < len__20994__auto___30582)){
args30575.push((arguments[i__20995__auto___30583]));

var G__30584 = (i__20995__auto___30583 + (1));
i__20995__auto___30583 = G__30584;
continue;
} else {
}
break;
}

var G__30577 = args30575.length;
switch (G__30577) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30575.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30578_30586 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30579_30587 = null;
var count__30580_30588 = (0);
var i__30581_30589 = (0);
while(true){
if((i__30581_30589 < count__30580_30588)){
var msg_30590 = cljs.core._nth.call(null,chunk__30579_30587,i__30581_30589);
figwheel.client.socket.handle_incoming_message.call(null,msg_30590);

var G__30591 = seq__30578_30586;
var G__30592 = chunk__30579_30587;
var G__30593 = count__30580_30588;
var G__30594 = (i__30581_30589 + (1));
seq__30578_30586 = G__30591;
chunk__30579_30587 = G__30592;
count__30580_30588 = G__30593;
i__30581_30589 = G__30594;
continue;
} else {
var temp__4657__auto___30595 = cljs.core.seq.call(null,seq__30578_30586);
if(temp__4657__auto___30595){
var seq__30578_30596__$1 = temp__4657__auto___30595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30578_30596__$1)){
var c__20735__auto___30597 = cljs.core.chunk_first.call(null,seq__30578_30596__$1);
var G__30598 = cljs.core.chunk_rest.call(null,seq__30578_30596__$1);
var G__30599 = c__20735__auto___30597;
var G__30600 = cljs.core.count.call(null,c__20735__auto___30597);
var G__30601 = (0);
seq__30578_30586 = G__30598;
chunk__30579_30587 = G__30599;
count__30580_30588 = G__30600;
i__30581_30589 = G__30601;
continue;
} else {
var msg_30602 = cljs.core.first.call(null,seq__30578_30596__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30602);

var G__30603 = cljs.core.next.call(null,seq__30578_30596__$1);
var G__30604 = null;
var G__30605 = (0);
var G__30606 = (0);
seq__30578_30586 = G__30603;
chunk__30579_30587 = G__30604;
count__30580_30588 = G__30605;
i__30581_30589 = G__30606;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21001__auto__ = [];
var len__20994__auto___30611 = arguments.length;
var i__20995__auto___30612 = (0);
while(true){
if((i__20995__auto___30612 < len__20994__auto___30611)){
args__21001__auto__.push((arguments[i__20995__auto___30612]));

var G__30613 = (i__20995__auto___30612 + (1));
i__20995__auto___30612 = G__30613;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((0) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21002__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30608){
var map__30609 = p__30608;
var map__30609__$1 = ((((!((map__30609 == null)))?((((map__30609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30609):map__30609);
var opts = map__30609__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30607){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30607));
});
figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30615){if((e30615 instanceof Error)){
var e = e30615;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30615;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30619){
var map__30620 = p__30619;
var map__30620__$1 = ((((!((map__30620 == null)))?((((map__30620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30620):map__30620);
var msg_name = cljs.core.get.call(null,map__30620__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1472593628654