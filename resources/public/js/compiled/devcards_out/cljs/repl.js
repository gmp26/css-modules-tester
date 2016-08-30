// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29352_29366 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29353_29367 = null;
var count__29354_29368 = (0);
var i__29355_29369 = (0);
while(true){
if((i__29355_29369 < count__29354_29368)){
var f_29370 = cljs.core._nth.call(null,chunk__29353_29367,i__29355_29369);
cljs.core.println.call(null,"  ",f_29370);

var G__29371 = seq__29352_29366;
var G__29372 = chunk__29353_29367;
var G__29373 = count__29354_29368;
var G__29374 = (i__29355_29369 + (1));
seq__29352_29366 = G__29371;
chunk__29353_29367 = G__29372;
count__29354_29368 = G__29373;
i__29355_29369 = G__29374;
continue;
} else {
var temp__4657__auto___29375 = cljs.core.seq.call(null,seq__29352_29366);
if(temp__4657__auto___29375){
var seq__29352_29376__$1 = temp__4657__auto___29375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29352_29376__$1)){
var c__20735__auto___29377 = cljs.core.chunk_first.call(null,seq__29352_29376__$1);
var G__29378 = cljs.core.chunk_rest.call(null,seq__29352_29376__$1);
var G__29379 = c__20735__auto___29377;
var G__29380 = cljs.core.count.call(null,c__20735__auto___29377);
var G__29381 = (0);
seq__29352_29366 = G__29378;
chunk__29353_29367 = G__29379;
count__29354_29368 = G__29380;
i__29355_29369 = G__29381;
continue;
} else {
var f_29382 = cljs.core.first.call(null,seq__29352_29376__$1);
cljs.core.println.call(null,"  ",f_29382);

var G__29383 = cljs.core.next.call(null,seq__29352_29376__$1);
var G__29384 = null;
var G__29385 = (0);
var G__29386 = (0);
seq__29352_29366 = G__29383;
chunk__29353_29367 = G__29384;
count__29354_29368 = G__29385;
i__29355_29369 = G__29386;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29387 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19924__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29387);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29387)))?cljs.core.second.call(null,arglists_29387):arglists_29387));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29356 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29357 = null;
var count__29358 = (0);
var i__29359 = (0);
while(true){
if((i__29359 < count__29358)){
var vec__29360 = cljs.core._nth.call(null,chunk__29357,i__29359);
var name = cljs.core.nth.call(null,vec__29360,(0),null);
var map__29361 = cljs.core.nth.call(null,vec__29360,(1),null);
var map__29361__$1 = ((((!((map__29361 == null)))?((((map__29361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29361):map__29361);
var doc = cljs.core.get.call(null,map__29361__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29361__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29388 = seq__29356;
var G__29389 = chunk__29357;
var G__29390 = count__29358;
var G__29391 = (i__29359 + (1));
seq__29356 = G__29388;
chunk__29357 = G__29389;
count__29358 = G__29390;
i__29359 = G__29391;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29356);
if(temp__4657__auto__){
var seq__29356__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29356__$1)){
var c__20735__auto__ = cljs.core.chunk_first.call(null,seq__29356__$1);
var G__29392 = cljs.core.chunk_rest.call(null,seq__29356__$1);
var G__29393 = c__20735__auto__;
var G__29394 = cljs.core.count.call(null,c__20735__auto__);
var G__29395 = (0);
seq__29356 = G__29392;
chunk__29357 = G__29393;
count__29358 = G__29394;
i__29359 = G__29395;
continue;
} else {
var vec__29363 = cljs.core.first.call(null,seq__29356__$1);
var name = cljs.core.nth.call(null,vec__29363,(0),null);
var map__29364 = cljs.core.nth.call(null,vec__29363,(1),null);
var map__29364__$1 = ((((!((map__29364 == null)))?((((map__29364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29364):map__29364);
var doc = cljs.core.get.call(null,map__29364__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29364__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29396 = cljs.core.next.call(null,seq__29356__$1);
var G__29397 = null;
var G__29398 = (0);
var G__29399 = (0);
seq__29356 = G__29396;
chunk__29357 = G__29397;
count__29358 = G__29398;
i__29359 = G__29399;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1472593627583