// Compiled by ClojureScript 1.8.51 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__21001__auto__ = [];
var len__20994__auto___25090 = arguments.length;
var i__20995__auto___25091 = (0);
while(true){
if((i__20995__auto___25091 < len__20994__auto___25090)){
args__21001__auto__.push((arguments[i__20995__auto___25091]));

var G__25092 = (i__20995__auto___25091 + (1));
i__20995__auto___25091 = G__25092;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((0) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__21002__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq25089){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25089));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__21001__auto__ = [];
var len__20994__auto___25094 = arguments.length;
var i__20995__auto___25095 = (0);
while(true){
if((i__20995__auto___25095 < len__20994__auto___25094)){
args__21001__auto__.push((arguments[i__20995__auto___25095]));

var G__25096 = (i__20995__auto___25095 + (1));
i__20995__auto___25095 = G__25096;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((0) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__21002__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq25093){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25093));
});

//# sourceMappingURL=core.js.map?rel=1472594477606