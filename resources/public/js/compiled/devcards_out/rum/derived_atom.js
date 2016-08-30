// Compiled by ClojureScript 1.8.51 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args21050 = [];
var len__20994__auto___21064 = arguments.length;
var i__20995__auto___21065 = (0);
while(true){
if((i__20995__auto___21065 < len__20994__auto___21064)){
args21050.push((arguments[i__20995__auto___21065]));

var G__21066 = (i__20995__auto___21065 + (1));
i__20995__auto___21065 = G__21066;
continue;
} else {
}
break;
}

var G__21052 = args21050.length;
switch (G__21052) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21050.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__21053 = opts;
var map__21053__$1 = ((((!((map__21053 == null)))?((((map__21053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21053):map__21053);
var ref = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__21055 = cljs.core.count.call(null,refs);
switch (G__21055) {
case (1):
var vec__21056 = refs;
var a = cljs.core.nth.call(null,vec__21056,(0),null);
return ((function (vec__21056,a,G__21055,map__21053,map__21053__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__21056,a,G__21055,map__21053,map__21053__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__21057 = refs;
var a = cljs.core.nth.call(null,vec__21057,(0),null);
var b = cljs.core.nth.call(null,vec__21057,(1),null);
return ((function (vec__21057,a,b,G__21055,map__21053,map__21053__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__21057,a,b,G__21055,map__21053,map__21053__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__21058 = refs;
var a = cljs.core.nth.call(null,vec__21058,(0),null);
var b = cljs.core.nth.call(null,vec__21058,(1),null);
var c = cljs.core.nth.call(null,vec__21058,(2),null);
return ((function (vec__21058,a,b,c,G__21055,map__21053,map__21053__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__21058,a,b,c,G__21055,map__21053,map__21053__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__21055,map__21053,map__21053__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__21055,map__21053,map__21053__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__21059 = ref;
cljs.core.reset_BANG_.call(null,G__21059,recalc.call(null));

return G__21059;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__21053,map__21053__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__21053,map__21053__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__21053,map__21053__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__21053,map__21053__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__21060_21069 = cljs.core.seq.call(null,refs);
var chunk__21061_21070 = null;
var count__21062_21071 = (0);
var i__21063_21072 = (0);
while(true){
if((i__21063_21072 < count__21062_21071)){
var ref_21073__$1 = cljs.core._nth.call(null,chunk__21061_21070,i__21063_21072);
cljs.core.add_watch.call(null,ref_21073__$1,key,watch);

var G__21074 = seq__21060_21069;
var G__21075 = chunk__21061_21070;
var G__21076 = count__21062_21071;
var G__21077 = (i__21063_21072 + (1));
seq__21060_21069 = G__21074;
chunk__21061_21070 = G__21075;
count__21062_21071 = G__21076;
i__21063_21072 = G__21077;
continue;
} else {
var temp__4657__auto___21078 = cljs.core.seq.call(null,seq__21060_21069);
if(temp__4657__auto___21078){
var seq__21060_21079__$1 = temp__4657__auto___21078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21060_21079__$1)){
var c__20735__auto___21080 = cljs.core.chunk_first.call(null,seq__21060_21079__$1);
var G__21081 = cljs.core.chunk_rest.call(null,seq__21060_21079__$1);
var G__21082 = c__20735__auto___21080;
var G__21083 = cljs.core.count.call(null,c__20735__auto___21080);
var G__21084 = (0);
seq__21060_21069 = G__21081;
chunk__21061_21070 = G__21082;
count__21062_21071 = G__21083;
i__21063_21072 = G__21084;
continue;
} else {
var ref_21085__$1 = cljs.core.first.call(null,seq__21060_21079__$1);
cljs.core.add_watch.call(null,ref_21085__$1,key,watch);

var G__21086 = cljs.core.next.call(null,seq__21060_21079__$1);
var G__21087 = null;
var G__21088 = (0);
var G__21089 = (0);
seq__21060_21069 = G__21086;
chunk__21061_21070 = G__21087;
count__21062_21071 = G__21088;
i__21063_21072 = G__21089;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=derived_atom.js.map?rel=1472594361965