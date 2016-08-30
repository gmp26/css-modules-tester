// Compiled by ClojureScript 1.8.51 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__21001__auto__ = [];
var len__20994__auto___21095 = arguments.length;
var i__20995__auto___21096 = (0);
while(true){
if((i__20995__auto___21096 < len__20994__auto___21095)){
args__21001__auto__.push((arguments[i__20995__auto___21096]));

var G__21097 = (i__20995__auto___21096 + (1));
i__20995__auto___21096 = G__21097;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((2) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21002__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq21092){
var G__21093 = cljs.core.first.call(null,seq21092);
var seq21092__$1 = cljs.core.next.call(null,seq21092);
var G__21094 = cljs.core.first.call(null,seq21092__$1);
var seq21092__$2 = cljs.core.next.call(null,seq21092__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__21093,G__21094,seq21092__$2);
});
rum.util.filter_vals = (function rum$util$filter_vals(pred,m){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.assoc.call(null,m__$1,k,v);
} else {
return m__$1;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

//# sourceMappingURL=util.js.map?rel=1472594361996