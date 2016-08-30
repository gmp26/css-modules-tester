// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19924__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19924__auto__){
return or__19924__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19924__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28328_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28328_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28333 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28334 = null;
var count__28335 = (0);
var i__28336 = (0);
while(true){
if((i__28336 < count__28335)){
var n = cljs.core._nth.call(null,chunk__28334,i__28336);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28337 = seq__28333;
var G__28338 = chunk__28334;
var G__28339 = count__28335;
var G__28340 = (i__28336 + (1));
seq__28333 = G__28337;
chunk__28334 = G__28338;
count__28335 = G__28339;
i__28336 = G__28340;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28333);
if(temp__4657__auto__){
var seq__28333__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28333__$1)){
var c__20735__auto__ = cljs.core.chunk_first.call(null,seq__28333__$1);
var G__28341 = cljs.core.chunk_rest.call(null,seq__28333__$1);
var G__28342 = c__20735__auto__;
var G__28343 = cljs.core.count.call(null,c__20735__auto__);
var G__28344 = (0);
seq__28333 = G__28341;
chunk__28334 = G__28342;
count__28335 = G__28343;
i__28336 = G__28344;
continue;
} else {
var n = cljs.core.first.call(null,seq__28333__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28345 = cljs.core.next.call(null,seq__28333__$1);
var G__28346 = null;
var G__28347 = (0);
var G__28348 = (0);
seq__28333 = G__28345;
chunk__28334 = G__28346;
count__28335 = G__28347;
i__28336 = G__28348;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28387_28394 = cljs.core.seq.call(null,deps);
var chunk__28388_28395 = null;
var count__28389_28396 = (0);
var i__28390_28397 = (0);
while(true){
if((i__28390_28397 < count__28389_28396)){
var dep_28398 = cljs.core._nth.call(null,chunk__28388_28395,i__28390_28397);
topo_sort_helper_STAR_.call(null,dep_28398,(depth + (1)),state);

var G__28399 = seq__28387_28394;
var G__28400 = chunk__28388_28395;
var G__28401 = count__28389_28396;
var G__28402 = (i__28390_28397 + (1));
seq__28387_28394 = G__28399;
chunk__28388_28395 = G__28400;
count__28389_28396 = G__28401;
i__28390_28397 = G__28402;
continue;
} else {
var temp__4657__auto___28403 = cljs.core.seq.call(null,seq__28387_28394);
if(temp__4657__auto___28403){
var seq__28387_28404__$1 = temp__4657__auto___28403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28387_28404__$1)){
var c__20735__auto___28405 = cljs.core.chunk_first.call(null,seq__28387_28404__$1);
var G__28406 = cljs.core.chunk_rest.call(null,seq__28387_28404__$1);
var G__28407 = c__20735__auto___28405;
var G__28408 = cljs.core.count.call(null,c__20735__auto___28405);
var G__28409 = (0);
seq__28387_28394 = G__28406;
chunk__28388_28395 = G__28407;
count__28389_28396 = G__28408;
i__28390_28397 = G__28409;
continue;
} else {
var dep_28410 = cljs.core.first.call(null,seq__28387_28404__$1);
topo_sort_helper_STAR_.call(null,dep_28410,(depth + (1)),state);

var G__28411 = cljs.core.next.call(null,seq__28387_28404__$1);
var G__28412 = null;
var G__28413 = (0);
var G__28414 = (0);
seq__28387_28394 = G__28411;
chunk__28388_28395 = G__28412;
count__28389_28396 = G__28413;
i__28390_28397 = G__28414;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28391){
var vec__28393 = p__28391;
var x = cljs.core.nth.call(null,vec__28393,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28393,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28393,x,xs,get_deps__$1){
return (function (p1__28349_SHARP_){
return clojure.set.difference.call(null,p1__28349_SHARP_,x);
});})(vec__28393,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28427 = cljs.core.seq.call(null,provides);
var chunk__28428 = null;
var count__28429 = (0);
var i__28430 = (0);
while(true){
if((i__28430 < count__28429)){
var prov = cljs.core._nth.call(null,chunk__28428,i__28430);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28431_28439 = cljs.core.seq.call(null,requires);
var chunk__28432_28440 = null;
var count__28433_28441 = (0);
var i__28434_28442 = (0);
while(true){
if((i__28434_28442 < count__28433_28441)){
var req_28443 = cljs.core._nth.call(null,chunk__28432_28440,i__28434_28442);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28443,prov);

var G__28444 = seq__28431_28439;
var G__28445 = chunk__28432_28440;
var G__28446 = count__28433_28441;
var G__28447 = (i__28434_28442 + (1));
seq__28431_28439 = G__28444;
chunk__28432_28440 = G__28445;
count__28433_28441 = G__28446;
i__28434_28442 = G__28447;
continue;
} else {
var temp__4657__auto___28448 = cljs.core.seq.call(null,seq__28431_28439);
if(temp__4657__auto___28448){
var seq__28431_28449__$1 = temp__4657__auto___28448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28431_28449__$1)){
var c__20735__auto___28450 = cljs.core.chunk_first.call(null,seq__28431_28449__$1);
var G__28451 = cljs.core.chunk_rest.call(null,seq__28431_28449__$1);
var G__28452 = c__20735__auto___28450;
var G__28453 = cljs.core.count.call(null,c__20735__auto___28450);
var G__28454 = (0);
seq__28431_28439 = G__28451;
chunk__28432_28440 = G__28452;
count__28433_28441 = G__28453;
i__28434_28442 = G__28454;
continue;
} else {
var req_28455 = cljs.core.first.call(null,seq__28431_28449__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28455,prov);

var G__28456 = cljs.core.next.call(null,seq__28431_28449__$1);
var G__28457 = null;
var G__28458 = (0);
var G__28459 = (0);
seq__28431_28439 = G__28456;
chunk__28432_28440 = G__28457;
count__28433_28441 = G__28458;
i__28434_28442 = G__28459;
continue;
}
} else {
}
}
break;
}

var G__28460 = seq__28427;
var G__28461 = chunk__28428;
var G__28462 = count__28429;
var G__28463 = (i__28430 + (1));
seq__28427 = G__28460;
chunk__28428 = G__28461;
count__28429 = G__28462;
i__28430 = G__28463;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28427);
if(temp__4657__auto__){
var seq__28427__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28427__$1)){
var c__20735__auto__ = cljs.core.chunk_first.call(null,seq__28427__$1);
var G__28464 = cljs.core.chunk_rest.call(null,seq__28427__$1);
var G__28465 = c__20735__auto__;
var G__28466 = cljs.core.count.call(null,c__20735__auto__);
var G__28467 = (0);
seq__28427 = G__28464;
chunk__28428 = G__28465;
count__28429 = G__28466;
i__28430 = G__28467;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28427__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28435_28468 = cljs.core.seq.call(null,requires);
var chunk__28436_28469 = null;
var count__28437_28470 = (0);
var i__28438_28471 = (0);
while(true){
if((i__28438_28471 < count__28437_28470)){
var req_28472 = cljs.core._nth.call(null,chunk__28436_28469,i__28438_28471);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28472,prov);

var G__28473 = seq__28435_28468;
var G__28474 = chunk__28436_28469;
var G__28475 = count__28437_28470;
var G__28476 = (i__28438_28471 + (1));
seq__28435_28468 = G__28473;
chunk__28436_28469 = G__28474;
count__28437_28470 = G__28475;
i__28438_28471 = G__28476;
continue;
} else {
var temp__4657__auto___28477__$1 = cljs.core.seq.call(null,seq__28435_28468);
if(temp__4657__auto___28477__$1){
var seq__28435_28478__$1 = temp__4657__auto___28477__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28435_28478__$1)){
var c__20735__auto___28479 = cljs.core.chunk_first.call(null,seq__28435_28478__$1);
var G__28480 = cljs.core.chunk_rest.call(null,seq__28435_28478__$1);
var G__28481 = c__20735__auto___28479;
var G__28482 = cljs.core.count.call(null,c__20735__auto___28479);
var G__28483 = (0);
seq__28435_28468 = G__28480;
chunk__28436_28469 = G__28481;
count__28437_28470 = G__28482;
i__28438_28471 = G__28483;
continue;
} else {
var req_28484 = cljs.core.first.call(null,seq__28435_28478__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28484,prov);

var G__28485 = cljs.core.next.call(null,seq__28435_28478__$1);
var G__28486 = null;
var G__28487 = (0);
var G__28488 = (0);
seq__28435_28468 = G__28485;
chunk__28436_28469 = G__28486;
count__28437_28470 = G__28487;
i__28438_28471 = G__28488;
continue;
}
} else {
}
}
break;
}

var G__28489 = cljs.core.next.call(null,seq__28427__$1);
var G__28490 = null;
var G__28491 = (0);
var G__28492 = (0);
seq__28427 = G__28489;
chunk__28428 = G__28490;
count__28429 = G__28491;
i__28430 = G__28492;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28497_28501 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28498_28502 = null;
var count__28499_28503 = (0);
var i__28500_28504 = (0);
while(true){
if((i__28500_28504 < count__28499_28503)){
var ns_28505 = cljs.core._nth.call(null,chunk__28498_28502,i__28500_28504);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28505);

var G__28506 = seq__28497_28501;
var G__28507 = chunk__28498_28502;
var G__28508 = count__28499_28503;
var G__28509 = (i__28500_28504 + (1));
seq__28497_28501 = G__28506;
chunk__28498_28502 = G__28507;
count__28499_28503 = G__28508;
i__28500_28504 = G__28509;
continue;
} else {
var temp__4657__auto___28510 = cljs.core.seq.call(null,seq__28497_28501);
if(temp__4657__auto___28510){
var seq__28497_28511__$1 = temp__4657__auto___28510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28497_28511__$1)){
var c__20735__auto___28512 = cljs.core.chunk_first.call(null,seq__28497_28511__$1);
var G__28513 = cljs.core.chunk_rest.call(null,seq__28497_28511__$1);
var G__28514 = c__20735__auto___28512;
var G__28515 = cljs.core.count.call(null,c__20735__auto___28512);
var G__28516 = (0);
seq__28497_28501 = G__28513;
chunk__28498_28502 = G__28514;
count__28499_28503 = G__28515;
i__28500_28504 = G__28516;
continue;
} else {
var ns_28517 = cljs.core.first.call(null,seq__28497_28511__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28517);

var G__28518 = cljs.core.next.call(null,seq__28497_28511__$1);
var G__28519 = null;
var G__28520 = (0);
var G__28521 = (0);
seq__28497_28501 = G__28518;
chunk__28498_28502 = G__28519;
count__28499_28503 = G__28520;
i__28500_28504 = G__28521;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19924__auto__ = goog.require__;
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28522__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28523__i = 0, G__28523__a = new Array(arguments.length -  0);
while (G__28523__i < G__28523__a.length) {G__28523__a[G__28523__i] = arguments[G__28523__i + 0]; ++G__28523__i;}
  args = new cljs.core.IndexedSeq(G__28523__a,0);
} 
return G__28522__delegate.call(this,args);};
G__28522.cljs$lang$maxFixedArity = 0;
G__28522.cljs$lang$applyTo = (function (arglist__28524){
var args = cljs.core.seq(arglist__28524);
return G__28522__delegate(args);
});
G__28522.cljs$core$IFn$_invoke$arity$variadic = G__28522__delegate;
return G__28522;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28526 = cljs.core._EQ_;
var expr__28527 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28526.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28527))){
var path_parts = ((function (pred__28526,expr__28527){
return (function (p1__28525_SHARP_){
return clojure.string.split.call(null,p1__28525_SHARP_,/[\/\\]/);
});})(pred__28526,expr__28527))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28526,expr__28527){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28529){if((e28529 instanceof Error)){
var e = e28529;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28529;

}
}})());
});
;})(path_parts,sep,root,pred__28526,expr__28527))
} else {
if(cljs.core.truth_(pred__28526.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28527))){
return ((function (pred__28526,expr__28527){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28526,expr__28527){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28526,expr__28527))
);

return deferred.addErrback(((function (deferred,pred__28526,expr__28527){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28526,expr__28527))
);
});
;})(pred__28526,expr__28527))
} else {
return ((function (pred__28526,expr__28527){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28526,expr__28527))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28530,callback){
var map__28533 = p__28530;
var map__28533__$1 = ((((!((map__28533 == null)))?((((map__28533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28533):map__28533);
var file_msg = map__28533__$1;
var request_url = cljs.core.get.call(null,map__28533__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28533,map__28533__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28533,map__28533__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto__){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto__){
return (function (state_28557){
var state_val_28558 = (state_28557[(1)]);
if((state_val_28558 === (7))){
var inst_28553 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
var statearr_28559_28579 = state_28557__$1;
(statearr_28559_28579[(2)] = inst_28553);

(statearr_28559_28579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (1))){
var state_28557__$1 = state_28557;
var statearr_28560_28580 = state_28557__$1;
(statearr_28560_28580[(2)] = null);

(statearr_28560_28580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (4))){
var inst_28537 = (state_28557[(7)]);
var inst_28537__$1 = (state_28557[(2)]);
var state_28557__$1 = (function (){var statearr_28561 = state_28557;
(statearr_28561[(7)] = inst_28537__$1);

return statearr_28561;
})();
if(cljs.core.truth_(inst_28537__$1)){
var statearr_28562_28581 = state_28557__$1;
(statearr_28562_28581[(1)] = (5));

} else {
var statearr_28563_28582 = state_28557__$1;
(statearr_28563_28582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (6))){
var state_28557__$1 = state_28557;
var statearr_28564_28583 = state_28557__$1;
(statearr_28564_28583[(2)] = null);

(statearr_28564_28583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (3))){
var inst_28555 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28557__$1,inst_28555);
} else {
if((state_val_28558 === (2))){
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28557__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28558 === (11))){
var inst_28549 = (state_28557[(2)]);
var state_28557__$1 = (function (){var statearr_28565 = state_28557;
(statearr_28565[(8)] = inst_28549);

return statearr_28565;
})();
var statearr_28566_28584 = state_28557__$1;
(statearr_28566_28584[(2)] = null);

(statearr_28566_28584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (9))){
var inst_28543 = (state_28557[(9)]);
var inst_28541 = (state_28557[(10)]);
var inst_28545 = inst_28543.call(null,inst_28541);
var state_28557__$1 = state_28557;
var statearr_28567_28585 = state_28557__$1;
(statearr_28567_28585[(2)] = inst_28545);

(statearr_28567_28585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (5))){
var inst_28537 = (state_28557[(7)]);
var inst_28539 = figwheel.client.file_reloading.blocking_load.call(null,inst_28537);
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28557__$1,(8),inst_28539);
} else {
if((state_val_28558 === (10))){
var inst_28541 = (state_28557[(10)]);
var inst_28547 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28541);
var state_28557__$1 = state_28557;
var statearr_28568_28586 = state_28557__$1;
(statearr_28568_28586[(2)] = inst_28547);

(statearr_28568_28586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (8))){
var inst_28537 = (state_28557[(7)]);
var inst_28543 = (state_28557[(9)]);
var inst_28541 = (state_28557[(2)]);
var inst_28542 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28543__$1 = cljs.core.get.call(null,inst_28542,inst_28537);
var state_28557__$1 = (function (){var statearr_28569 = state_28557;
(statearr_28569[(9)] = inst_28543__$1);

(statearr_28569[(10)] = inst_28541);

return statearr_28569;
})();
if(cljs.core.truth_(inst_28543__$1)){
var statearr_28570_28587 = state_28557__$1;
(statearr_28570_28587[(1)] = (9));

} else {
var statearr_28571_28588 = state_28557__$1;
(statearr_28571_28588[(1)] = (10));

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
});})(c__23388__auto__))
;
return ((function (switch__23276__auto__,c__23388__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23277__auto__ = null;
var figwheel$client$file_reloading$state_machine__23277__auto____0 = (function (){
var statearr_28575 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28575[(0)] = figwheel$client$file_reloading$state_machine__23277__auto__);

(statearr_28575[(1)] = (1));

return statearr_28575;
});
var figwheel$client$file_reloading$state_machine__23277__auto____1 = (function (state_28557){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_28557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e28576){if((e28576 instanceof Object)){
var ex__23280__auto__ = e28576;
var statearr_28577_28589 = state_28557;
(statearr_28577_28589[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28590 = state_28557;
state_28557 = G__28590;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23277__auto__ = function(state_28557){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23277__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23277__auto____1.call(this,state_28557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23277__auto____0;
figwheel$client$file_reloading$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23277__auto____1;
return figwheel$client$file_reloading$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto__))
})();
var state__23390__auto__ = (function (){var statearr_28578 = f__23389__auto__.call(null);
(statearr_28578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto__);

return statearr_28578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto__))
);

return c__23388__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28591,callback){
var map__28594 = p__28591;
var map__28594__$1 = ((((!((map__28594 == null)))?((((map__28594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28594):map__28594);
var file_msg = map__28594__$1;
var namespace = cljs.core.get.call(null,map__28594__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28594,map__28594__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28594,map__28594__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28596){
var map__28599 = p__28596;
var map__28599__$1 = ((((!((map__28599 == null)))?((((map__28599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28599):map__28599);
var file_msg = map__28599__$1;
var namespace = cljs.core.get.call(null,map__28599__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19912__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19912__auto__){
var or__19924__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
var or__19924__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19924__auto____$1)){
return or__19924__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19912__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28601,callback){
var map__28604 = p__28601;
var map__28604__$1 = ((((!((map__28604 == null)))?((((map__28604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28604):map__28604);
var file_msg = map__28604__$1;
var request_url = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23388__auto___28692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___28692,out){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___28692,out){
return (function (state_28674){
var state_val_28675 = (state_28674[(1)]);
if((state_val_28675 === (1))){
var inst_28652 = cljs.core.nth.call(null,files,(0),null);
var inst_28653 = cljs.core.nthnext.call(null,files,(1));
var inst_28654 = files;
var state_28674__$1 = (function (){var statearr_28676 = state_28674;
(statearr_28676[(7)] = inst_28653);

(statearr_28676[(8)] = inst_28654);

(statearr_28676[(9)] = inst_28652);

return statearr_28676;
})();
var statearr_28677_28693 = state_28674__$1;
(statearr_28677_28693[(2)] = null);

(statearr_28677_28693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (2))){
var inst_28654 = (state_28674[(8)]);
var inst_28657 = (state_28674[(10)]);
var inst_28657__$1 = cljs.core.nth.call(null,inst_28654,(0),null);
var inst_28658 = cljs.core.nthnext.call(null,inst_28654,(1));
var inst_28659 = (inst_28657__$1 == null);
var inst_28660 = cljs.core.not.call(null,inst_28659);
var state_28674__$1 = (function (){var statearr_28678 = state_28674;
(statearr_28678[(11)] = inst_28658);

(statearr_28678[(10)] = inst_28657__$1);

return statearr_28678;
})();
if(inst_28660){
var statearr_28679_28694 = state_28674__$1;
(statearr_28679_28694[(1)] = (4));

} else {
var statearr_28680_28695 = state_28674__$1;
(statearr_28680_28695[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (3))){
var inst_28672 = (state_28674[(2)]);
var state_28674__$1 = state_28674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28674__$1,inst_28672);
} else {
if((state_val_28675 === (4))){
var inst_28657 = (state_28674[(10)]);
var inst_28662 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28657);
var state_28674__$1 = state_28674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28674__$1,(7),inst_28662);
} else {
if((state_val_28675 === (5))){
var inst_28668 = cljs.core.async.close_BANG_.call(null,out);
var state_28674__$1 = state_28674;
var statearr_28681_28696 = state_28674__$1;
(statearr_28681_28696[(2)] = inst_28668);

(statearr_28681_28696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (6))){
var inst_28670 = (state_28674[(2)]);
var state_28674__$1 = state_28674;
var statearr_28682_28697 = state_28674__$1;
(statearr_28682_28697[(2)] = inst_28670);

(statearr_28682_28697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (7))){
var inst_28658 = (state_28674[(11)]);
var inst_28664 = (state_28674[(2)]);
var inst_28665 = cljs.core.async.put_BANG_.call(null,out,inst_28664);
var inst_28654 = inst_28658;
var state_28674__$1 = (function (){var statearr_28683 = state_28674;
(statearr_28683[(12)] = inst_28665);

(statearr_28683[(8)] = inst_28654);

return statearr_28683;
})();
var statearr_28684_28698 = state_28674__$1;
(statearr_28684_28698[(2)] = null);

(statearr_28684_28698[(1)] = (2));


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
});})(c__23388__auto___28692,out))
;
return ((function (switch__23276__auto__,c__23388__auto___28692,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23277__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23277__auto____0 = (function (){
var statearr_28688 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28688[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23277__auto__);

(statearr_28688[(1)] = (1));

return statearr_28688;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23277__auto____1 = (function (state_28674){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_28674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e28689){if((e28689 instanceof Object)){
var ex__23280__auto__ = e28689;
var statearr_28690_28699 = state_28674;
(statearr_28690_28699[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28700 = state_28674;
state_28674 = G__28700;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23277__auto__ = function(state_28674){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23277__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23277__auto____1.call(this,state_28674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23277__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23277__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___28692,out))
})();
var state__23390__auto__ = (function (){var statearr_28691 = f__23389__auto__.call(null);
(statearr_28691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___28692);

return statearr_28691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___28692,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28701,opts){
var map__28705 = p__28701;
var map__28705__$1 = ((((!((map__28705 == null)))?((((map__28705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28705):map__28705);
var eval_body__$1 = cljs.core.get.call(null,map__28705__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28705__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19912__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19912__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19912__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28707){var e = e28707;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28708_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28708_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28713){
var vec__28714 = p__28713;
var k = cljs.core.nth.call(null,vec__28714,(0),null);
var v = cljs.core.nth.call(null,vec__28714,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28715){
var vec__28716 = p__28715;
var k = cljs.core.nth.call(null,vec__28716,(0),null);
var v = cljs.core.nth.call(null,vec__28716,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28720,p__28721){
var map__28968 = p__28720;
var map__28968__$1 = ((((!((map__28968 == null)))?((((map__28968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28968):map__28968);
var opts = map__28968__$1;
var before_jsload = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28969 = p__28721;
var map__28969__$1 = ((((!((map__28969 == null)))?((((map__28969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28969):map__28969);
var msg = map__28969__$1;
var files = cljs.core.get.call(null,map__28969__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28969__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28969__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29122){
var state_val_29123 = (state_29122[(1)]);
if((state_val_29123 === (7))){
var inst_28983 = (state_29122[(7)]);
var inst_28986 = (state_29122[(8)]);
var inst_28984 = (state_29122[(9)]);
var inst_28985 = (state_29122[(10)]);
var inst_28991 = cljs.core._nth.call(null,inst_28984,inst_28986);
var inst_28992 = figwheel.client.file_reloading.eval_body.call(null,inst_28991,opts);
var inst_28993 = (inst_28986 + (1));
var tmp29124 = inst_28983;
var tmp29125 = inst_28984;
var tmp29126 = inst_28985;
var inst_28983__$1 = tmp29124;
var inst_28984__$1 = tmp29125;
var inst_28985__$1 = tmp29126;
var inst_28986__$1 = inst_28993;
var state_29122__$1 = (function (){var statearr_29127 = state_29122;
(statearr_29127[(7)] = inst_28983__$1);

(statearr_29127[(8)] = inst_28986__$1);

(statearr_29127[(11)] = inst_28992);

(statearr_29127[(9)] = inst_28984__$1);

(statearr_29127[(10)] = inst_28985__$1);

return statearr_29127;
})();
var statearr_29128_29214 = state_29122__$1;
(statearr_29128_29214[(2)] = null);

(statearr_29128_29214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (20))){
var inst_29026 = (state_29122[(12)]);
var inst_29034 = figwheel.client.file_reloading.sort_files.call(null,inst_29026);
var state_29122__$1 = state_29122;
var statearr_29129_29215 = state_29122__$1;
(statearr_29129_29215[(2)] = inst_29034);

(statearr_29129_29215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (27))){
var state_29122__$1 = state_29122;
var statearr_29130_29216 = state_29122__$1;
(statearr_29130_29216[(2)] = null);

(statearr_29130_29216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (1))){
var inst_28975 = (state_29122[(13)]);
var inst_28972 = before_jsload.call(null,files);
var inst_28973 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28974 = (function (){return ((function (inst_28975,inst_28972,inst_28973,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28717_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28717_SHARP_);
});
;})(inst_28975,inst_28972,inst_28973,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28975__$1 = cljs.core.filter.call(null,inst_28974,files);
var inst_28976 = cljs.core.not_empty.call(null,inst_28975__$1);
var state_29122__$1 = (function (){var statearr_29131 = state_29122;
(statearr_29131[(14)] = inst_28973);

(statearr_29131[(13)] = inst_28975__$1);

(statearr_29131[(15)] = inst_28972);

return statearr_29131;
})();
if(cljs.core.truth_(inst_28976)){
var statearr_29132_29217 = state_29122__$1;
(statearr_29132_29217[(1)] = (2));

} else {
var statearr_29133_29218 = state_29122__$1;
(statearr_29133_29218[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (24))){
var state_29122__$1 = state_29122;
var statearr_29134_29219 = state_29122__$1;
(statearr_29134_29219[(2)] = null);

(statearr_29134_29219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (39))){
var inst_29076 = (state_29122[(16)]);
var state_29122__$1 = state_29122;
var statearr_29135_29220 = state_29122__$1;
(statearr_29135_29220[(2)] = inst_29076);

(statearr_29135_29220[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (46))){
var inst_29117 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29136_29221 = state_29122__$1;
(statearr_29136_29221[(2)] = inst_29117);

(statearr_29136_29221[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (4))){
var inst_29020 = (state_29122[(2)]);
var inst_29021 = cljs.core.List.EMPTY;
var inst_29022 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29021);
var inst_29023 = (function (){return ((function (inst_29020,inst_29021,inst_29022,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28718_SHARP_){
var and__19912__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28718_SHARP_);
if(cljs.core.truth_(and__19912__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28718_SHARP_));
} else {
return and__19912__auto__;
}
});
;})(inst_29020,inst_29021,inst_29022,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29024 = cljs.core.filter.call(null,inst_29023,files);
var inst_29025 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29026 = cljs.core.concat.call(null,inst_29024,inst_29025);
var state_29122__$1 = (function (){var statearr_29137 = state_29122;
(statearr_29137[(17)] = inst_29022);

(statearr_29137[(12)] = inst_29026);

(statearr_29137[(18)] = inst_29020);

return statearr_29137;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29138_29222 = state_29122__$1;
(statearr_29138_29222[(1)] = (16));

} else {
var statearr_29139_29223 = state_29122__$1;
(statearr_29139_29223[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (15))){
var inst_29010 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29140_29224 = state_29122__$1;
(statearr_29140_29224[(2)] = inst_29010);

(statearr_29140_29224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (21))){
var inst_29036 = (state_29122[(19)]);
var inst_29036__$1 = (state_29122[(2)]);
var inst_29037 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29036__$1);
var state_29122__$1 = (function (){var statearr_29141 = state_29122;
(statearr_29141[(19)] = inst_29036__$1);

return statearr_29141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29122__$1,(22),inst_29037);
} else {
if((state_val_29123 === (31))){
var inst_29120 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29122__$1,inst_29120);
} else {
if((state_val_29123 === (32))){
var inst_29076 = (state_29122[(16)]);
var inst_29081 = inst_29076.cljs$lang$protocol_mask$partition0$;
var inst_29082 = (inst_29081 & (64));
var inst_29083 = inst_29076.cljs$core$ISeq$;
var inst_29084 = (inst_29082) || (inst_29083);
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_29084)){
var statearr_29142_29225 = state_29122__$1;
(statearr_29142_29225[(1)] = (35));

} else {
var statearr_29143_29226 = state_29122__$1;
(statearr_29143_29226[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (40))){
var inst_29097 = (state_29122[(20)]);
var inst_29096 = (state_29122[(2)]);
var inst_29097__$1 = cljs.core.get.call(null,inst_29096,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29098 = cljs.core.get.call(null,inst_29096,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29099 = cljs.core.not_empty.call(null,inst_29097__$1);
var state_29122__$1 = (function (){var statearr_29144 = state_29122;
(statearr_29144[(21)] = inst_29098);

(statearr_29144[(20)] = inst_29097__$1);

return statearr_29144;
})();
if(cljs.core.truth_(inst_29099)){
var statearr_29145_29227 = state_29122__$1;
(statearr_29145_29227[(1)] = (41));

} else {
var statearr_29146_29228 = state_29122__$1;
(statearr_29146_29228[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (33))){
var state_29122__$1 = state_29122;
var statearr_29147_29229 = state_29122__$1;
(statearr_29147_29229[(2)] = false);

(statearr_29147_29229[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (13))){
var inst_28996 = (state_29122[(22)]);
var inst_29000 = cljs.core.chunk_first.call(null,inst_28996);
var inst_29001 = cljs.core.chunk_rest.call(null,inst_28996);
var inst_29002 = cljs.core.count.call(null,inst_29000);
var inst_28983 = inst_29001;
var inst_28984 = inst_29000;
var inst_28985 = inst_29002;
var inst_28986 = (0);
var state_29122__$1 = (function (){var statearr_29148 = state_29122;
(statearr_29148[(7)] = inst_28983);

(statearr_29148[(8)] = inst_28986);

(statearr_29148[(9)] = inst_28984);

(statearr_29148[(10)] = inst_28985);

return statearr_29148;
})();
var statearr_29149_29230 = state_29122__$1;
(statearr_29149_29230[(2)] = null);

(statearr_29149_29230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (22))){
var inst_29039 = (state_29122[(23)]);
var inst_29040 = (state_29122[(24)]);
var inst_29044 = (state_29122[(25)]);
var inst_29036 = (state_29122[(19)]);
var inst_29039__$1 = (state_29122[(2)]);
var inst_29040__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29039__$1);
var inst_29041 = (function (){var all_files = inst_29036;
var res_SINGLEQUOTE_ = inst_29039__$1;
var res = inst_29040__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29039,inst_29040,inst_29044,inst_29036,inst_29039__$1,inst_29040__$1,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28719_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28719_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29039,inst_29040,inst_29044,inst_29036,inst_29039__$1,inst_29040__$1,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29042 = cljs.core.filter.call(null,inst_29041,inst_29039__$1);
var inst_29043 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29044__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29043);
var inst_29045 = cljs.core.not_empty.call(null,inst_29044__$1);
var state_29122__$1 = (function (){var statearr_29150 = state_29122;
(statearr_29150[(23)] = inst_29039__$1);

(statearr_29150[(24)] = inst_29040__$1);

(statearr_29150[(25)] = inst_29044__$1);

(statearr_29150[(26)] = inst_29042);

return statearr_29150;
})();
if(cljs.core.truth_(inst_29045)){
var statearr_29151_29231 = state_29122__$1;
(statearr_29151_29231[(1)] = (23));

} else {
var statearr_29152_29232 = state_29122__$1;
(statearr_29152_29232[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (36))){
var state_29122__$1 = state_29122;
var statearr_29153_29233 = state_29122__$1;
(statearr_29153_29233[(2)] = false);

(statearr_29153_29233[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (41))){
var inst_29097 = (state_29122[(20)]);
var inst_29101 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29102 = cljs.core.map.call(null,inst_29101,inst_29097);
var inst_29103 = cljs.core.pr_str.call(null,inst_29102);
var inst_29104 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29103)].join('');
var inst_29105 = figwheel.client.utils.log.call(null,inst_29104);
var state_29122__$1 = state_29122;
var statearr_29154_29234 = state_29122__$1;
(statearr_29154_29234[(2)] = inst_29105);

(statearr_29154_29234[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (43))){
var inst_29098 = (state_29122[(21)]);
var inst_29108 = (state_29122[(2)]);
var inst_29109 = cljs.core.not_empty.call(null,inst_29098);
var state_29122__$1 = (function (){var statearr_29155 = state_29122;
(statearr_29155[(27)] = inst_29108);

return statearr_29155;
})();
if(cljs.core.truth_(inst_29109)){
var statearr_29156_29235 = state_29122__$1;
(statearr_29156_29235[(1)] = (44));

} else {
var statearr_29157_29236 = state_29122__$1;
(statearr_29157_29236[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (29))){
var inst_29039 = (state_29122[(23)]);
var inst_29076 = (state_29122[(16)]);
var inst_29040 = (state_29122[(24)]);
var inst_29044 = (state_29122[(25)]);
var inst_29036 = (state_29122[(19)]);
var inst_29042 = (state_29122[(26)]);
var inst_29072 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29075 = (function (){var all_files = inst_29036;
var res_SINGLEQUOTE_ = inst_29039;
var res = inst_29040;
var files_not_loaded = inst_29042;
var dependencies_that_loaded = inst_29044;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29039,inst_29076,inst_29040,inst_29044,inst_29036,inst_29042,inst_29072,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29074){
var map__29158 = p__29074;
var map__29158__$1 = ((((!((map__29158 == null)))?((((map__29158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29158):map__29158);
var namespace = cljs.core.get.call(null,map__29158__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29039,inst_29076,inst_29040,inst_29044,inst_29036,inst_29042,inst_29072,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29076__$1 = cljs.core.group_by.call(null,inst_29075,inst_29042);
var inst_29078 = (inst_29076__$1 == null);
var inst_29079 = cljs.core.not.call(null,inst_29078);
var state_29122__$1 = (function (){var statearr_29160 = state_29122;
(statearr_29160[(16)] = inst_29076__$1);

(statearr_29160[(28)] = inst_29072);

return statearr_29160;
})();
if(inst_29079){
var statearr_29161_29237 = state_29122__$1;
(statearr_29161_29237[(1)] = (32));

} else {
var statearr_29162_29238 = state_29122__$1;
(statearr_29162_29238[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (44))){
var inst_29098 = (state_29122[(21)]);
var inst_29111 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29098);
var inst_29112 = cljs.core.pr_str.call(null,inst_29111);
var inst_29113 = [cljs.core.str("not required: "),cljs.core.str(inst_29112)].join('');
var inst_29114 = figwheel.client.utils.log.call(null,inst_29113);
var state_29122__$1 = state_29122;
var statearr_29163_29239 = state_29122__$1;
(statearr_29163_29239[(2)] = inst_29114);

(statearr_29163_29239[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (6))){
var inst_29017 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29164_29240 = state_29122__$1;
(statearr_29164_29240[(2)] = inst_29017);

(statearr_29164_29240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (28))){
var inst_29042 = (state_29122[(26)]);
var inst_29069 = (state_29122[(2)]);
var inst_29070 = cljs.core.not_empty.call(null,inst_29042);
var state_29122__$1 = (function (){var statearr_29165 = state_29122;
(statearr_29165[(29)] = inst_29069);

return statearr_29165;
})();
if(cljs.core.truth_(inst_29070)){
var statearr_29166_29241 = state_29122__$1;
(statearr_29166_29241[(1)] = (29));

} else {
var statearr_29167_29242 = state_29122__$1;
(statearr_29167_29242[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (25))){
var inst_29040 = (state_29122[(24)]);
var inst_29056 = (state_29122[(2)]);
var inst_29057 = cljs.core.not_empty.call(null,inst_29040);
var state_29122__$1 = (function (){var statearr_29168 = state_29122;
(statearr_29168[(30)] = inst_29056);

return statearr_29168;
})();
if(cljs.core.truth_(inst_29057)){
var statearr_29169_29243 = state_29122__$1;
(statearr_29169_29243[(1)] = (26));

} else {
var statearr_29170_29244 = state_29122__$1;
(statearr_29170_29244[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (34))){
var inst_29091 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_29091)){
var statearr_29171_29245 = state_29122__$1;
(statearr_29171_29245[(1)] = (38));

} else {
var statearr_29172_29246 = state_29122__$1;
(statearr_29172_29246[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (17))){
var state_29122__$1 = state_29122;
var statearr_29173_29247 = state_29122__$1;
(statearr_29173_29247[(2)] = recompile_dependents);

(statearr_29173_29247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (3))){
var state_29122__$1 = state_29122;
var statearr_29174_29248 = state_29122__$1;
(statearr_29174_29248[(2)] = null);

(statearr_29174_29248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (12))){
var inst_29013 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29175_29249 = state_29122__$1;
(statearr_29175_29249[(2)] = inst_29013);

(statearr_29175_29249[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (2))){
var inst_28975 = (state_29122[(13)]);
var inst_28982 = cljs.core.seq.call(null,inst_28975);
var inst_28983 = inst_28982;
var inst_28984 = null;
var inst_28985 = (0);
var inst_28986 = (0);
var state_29122__$1 = (function (){var statearr_29176 = state_29122;
(statearr_29176[(7)] = inst_28983);

(statearr_29176[(8)] = inst_28986);

(statearr_29176[(9)] = inst_28984);

(statearr_29176[(10)] = inst_28985);

return statearr_29176;
})();
var statearr_29177_29250 = state_29122__$1;
(statearr_29177_29250[(2)] = null);

(statearr_29177_29250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (23))){
var inst_29039 = (state_29122[(23)]);
var inst_29040 = (state_29122[(24)]);
var inst_29044 = (state_29122[(25)]);
var inst_29036 = (state_29122[(19)]);
var inst_29042 = (state_29122[(26)]);
var inst_29047 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29049 = (function (){var all_files = inst_29036;
var res_SINGLEQUOTE_ = inst_29039;
var res = inst_29040;
var files_not_loaded = inst_29042;
var dependencies_that_loaded = inst_29044;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29039,inst_29040,inst_29044,inst_29036,inst_29042,inst_29047,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29048){
var map__29178 = p__29048;
var map__29178__$1 = ((((!((map__29178 == null)))?((((map__29178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29178):map__29178);
var request_url = cljs.core.get.call(null,map__29178__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29039,inst_29040,inst_29044,inst_29036,inst_29042,inst_29047,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29050 = cljs.core.reverse.call(null,inst_29044);
var inst_29051 = cljs.core.map.call(null,inst_29049,inst_29050);
var inst_29052 = cljs.core.pr_str.call(null,inst_29051);
var inst_29053 = figwheel.client.utils.log.call(null,inst_29052);
var state_29122__$1 = (function (){var statearr_29180 = state_29122;
(statearr_29180[(31)] = inst_29047);

return statearr_29180;
})();
var statearr_29181_29251 = state_29122__$1;
(statearr_29181_29251[(2)] = inst_29053);

(statearr_29181_29251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (35))){
var state_29122__$1 = state_29122;
var statearr_29182_29252 = state_29122__$1;
(statearr_29182_29252[(2)] = true);

(statearr_29182_29252[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (19))){
var inst_29026 = (state_29122[(12)]);
var inst_29032 = figwheel.client.file_reloading.expand_files.call(null,inst_29026);
var state_29122__$1 = state_29122;
var statearr_29183_29253 = state_29122__$1;
(statearr_29183_29253[(2)] = inst_29032);

(statearr_29183_29253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (11))){
var state_29122__$1 = state_29122;
var statearr_29184_29254 = state_29122__$1;
(statearr_29184_29254[(2)] = null);

(statearr_29184_29254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (9))){
var inst_29015 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29185_29255 = state_29122__$1;
(statearr_29185_29255[(2)] = inst_29015);

(statearr_29185_29255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (5))){
var inst_28986 = (state_29122[(8)]);
var inst_28985 = (state_29122[(10)]);
var inst_28988 = (inst_28986 < inst_28985);
var inst_28989 = inst_28988;
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_28989)){
var statearr_29186_29256 = state_29122__$1;
(statearr_29186_29256[(1)] = (7));

} else {
var statearr_29187_29257 = state_29122__$1;
(statearr_29187_29257[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (14))){
var inst_28996 = (state_29122[(22)]);
var inst_29005 = cljs.core.first.call(null,inst_28996);
var inst_29006 = figwheel.client.file_reloading.eval_body.call(null,inst_29005,opts);
var inst_29007 = cljs.core.next.call(null,inst_28996);
var inst_28983 = inst_29007;
var inst_28984 = null;
var inst_28985 = (0);
var inst_28986 = (0);
var state_29122__$1 = (function (){var statearr_29188 = state_29122;
(statearr_29188[(7)] = inst_28983);

(statearr_29188[(8)] = inst_28986);

(statearr_29188[(9)] = inst_28984);

(statearr_29188[(10)] = inst_28985);

(statearr_29188[(32)] = inst_29006);

return statearr_29188;
})();
var statearr_29189_29258 = state_29122__$1;
(statearr_29189_29258[(2)] = null);

(statearr_29189_29258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (45))){
var state_29122__$1 = state_29122;
var statearr_29190_29259 = state_29122__$1;
(statearr_29190_29259[(2)] = null);

(statearr_29190_29259[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (26))){
var inst_29039 = (state_29122[(23)]);
var inst_29040 = (state_29122[(24)]);
var inst_29044 = (state_29122[(25)]);
var inst_29036 = (state_29122[(19)]);
var inst_29042 = (state_29122[(26)]);
var inst_29059 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29061 = (function (){var all_files = inst_29036;
var res_SINGLEQUOTE_ = inst_29039;
var res = inst_29040;
var files_not_loaded = inst_29042;
var dependencies_that_loaded = inst_29044;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29039,inst_29040,inst_29044,inst_29036,inst_29042,inst_29059,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29060){
var map__29191 = p__29060;
var map__29191__$1 = ((((!((map__29191 == null)))?((((map__29191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29191):map__29191);
var namespace = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29039,inst_29040,inst_29044,inst_29036,inst_29042,inst_29059,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29062 = cljs.core.map.call(null,inst_29061,inst_29040);
var inst_29063 = cljs.core.pr_str.call(null,inst_29062);
var inst_29064 = figwheel.client.utils.log.call(null,inst_29063);
var inst_29065 = (function (){var all_files = inst_29036;
var res_SINGLEQUOTE_ = inst_29039;
var res = inst_29040;
var files_not_loaded = inst_29042;
var dependencies_that_loaded = inst_29044;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29039,inst_29040,inst_29044,inst_29036,inst_29042,inst_29059,inst_29061,inst_29062,inst_29063,inst_29064,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29039,inst_29040,inst_29044,inst_29036,inst_29042,inst_29059,inst_29061,inst_29062,inst_29063,inst_29064,state_val_29123,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29066 = setTimeout(inst_29065,(10));
var state_29122__$1 = (function (){var statearr_29193 = state_29122;
(statearr_29193[(33)] = inst_29064);

(statearr_29193[(34)] = inst_29059);

return statearr_29193;
})();
var statearr_29194_29260 = state_29122__$1;
(statearr_29194_29260[(2)] = inst_29066);

(statearr_29194_29260[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (16))){
var state_29122__$1 = state_29122;
var statearr_29195_29261 = state_29122__$1;
(statearr_29195_29261[(2)] = reload_dependents);

(statearr_29195_29261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (38))){
var inst_29076 = (state_29122[(16)]);
var inst_29093 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29076);
var state_29122__$1 = state_29122;
var statearr_29196_29262 = state_29122__$1;
(statearr_29196_29262[(2)] = inst_29093);

(statearr_29196_29262[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (30))){
var state_29122__$1 = state_29122;
var statearr_29197_29263 = state_29122__$1;
(statearr_29197_29263[(2)] = null);

(statearr_29197_29263[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (10))){
var inst_28996 = (state_29122[(22)]);
var inst_28998 = cljs.core.chunked_seq_QMARK_.call(null,inst_28996);
var state_29122__$1 = state_29122;
if(inst_28998){
var statearr_29198_29264 = state_29122__$1;
(statearr_29198_29264[(1)] = (13));

} else {
var statearr_29199_29265 = state_29122__$1;
(statearr_29199_29265[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (18))){
var inst_29030 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_29030)){
var statearr_29200_29266 = state_29122__$1;
(statearr_29200_29266[(1)] = (19));

} else {
var statearr_29201_29267 = state_29122__$1;
(statearr_29201_29267[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (42))){
var state_29122__$1 = state_29122;
var statearr_29202_29268 = state_29122__$1;
(statearr_29202_29268[(2)] = null);

(statearr_29202_29268[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (37))){
var inst_29088 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29203_29269 = state_29122__$1;
(statearr_29203_29269[(2)] = inst_29088);

(statearr_29203_29269[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (8))){
var inst_28983 = (state_29122[(7)]);
var inst_28996 = (state_29122[(22)]);
var inst_28996__$1 = cljs.core.seq.call(null,inst_28983);
var state_29122__$1 = (function (){var statearr_29204 = state_29122;
(statearr_29204[(22)] = inst_28996__$1);

return statearr_29204;
})();
if(inst_28996__$1){
var statearr_29205_29270 = state_29122__$1;
(statearr_29205_29270[(1)] = (10));

} else {
var statearr_29206_29271 = state_29122__$1;
(statearr_29206_29271[(1)] = (11));

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
});})(c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23276__auto__,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23277__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23277__auto____0 = (function (){
var statearr_29210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29210[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23277__auto__);

(statearr_29210[(1)] = (1));

return statearr_29210;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23277__auto____1 = (function (state_29122){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_29122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e29211){if((e29211 instanceof Object)){
var ex__23280__auto__ = e29211;
var statearr_29212_29272 = state_29122;
(statearr_29212_29272[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29273 = state_29122;
state_29122 = G__29273;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23277__auto__ = function(state_29122){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23277__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23277__auto____1.call(this,state_29122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23277__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23277__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23390__auto__ = (function (){var statearr_29213 = f__23389__auto__.call(null);
(statearr_29213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto__);

return statearr_29213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto__,map__28968,map__28968__$1,opts,before_jsload,on_jsload,reload_dependents,map__28969,map__28969__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23388__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29276,link){
var map__29279 = p__29276;
var map__29279__$1 = ((((!((map__29279 == null)))?((((map__29279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29279):map__29279);
var file = cljs.core.get.call(null,map__29279__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29279,map__29279__$1,file){
return (function (p1__29274_SHARP_,p2__29275_SHARP_){
if(cljs.core._EQ_.call(null,p1__29274_SHARP_,p2__29275_SHARP_)){
return p1__29274_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29279,map__29279__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29285){
var map__29286 = p__29285;
var map__29286__$1 = ((((!((map__29286 == null)))?((((map__29286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29286):map__29286);
var match_length = cljs.core.get.call(null,map__29286__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29286__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29281_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29281_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args29288 = [];
var len__20994__auto___29291 = arguments.length;
var i__20995__auto___29292 = (0);
while(true){
if((i__20995__auto___29292 < len__20994__auto___29291)){
args29288.push((arguments[i__20995__auto___29292]));

var G__29293 = (i__20995__auto___29292 + (1));
i__20995__auto___29292 = G__29293;
continue;
} else {
}
break;
}

var G__29290 = args29288.length;
switch (G__29290) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29288.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29295_SHARP_,p2__29296_SHARP_){
return cljs.core.assoc.call(null,p1__29295_SHARP_,cljs.core.get.call(null,p2__29296_SHARP_,key),p2__29296_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29297){
var map__29300 = p__29297;
var map__29300__$1 = ((((!((map__29300 == null)))?((((map__29300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29300):map__29300);
var f_data = map__29300__$1;
var file = cljs.core.get.call(null,map__29300__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29302,files_msg){
var map__29309 = p__29302;
var map__29309__$1 = ((((!((map__29309 == null)))?((((map__29309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29309):map__29309);
var opts = map__29309__$1;
var on_cssload = cljs.core.get.call(null,map__29309__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29311_29315 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29312_29316 = null;
var count__29313_29317 = (0);
var i__29314_29318 = (0);
while(true){
if((i__29314_29318 < count__29313_29317)){
var f_29319 = cljs.core._nth.call(null,chunk__29312_29316,i__29314_29318);
figwheel.client.file_reloading.reload_css_file.call(null,f_29319);

var G__29320 = seq__29311_29315;
var G__29321 = chunk__29312_29316;
var G__29322 = count__29313_29317;
var G__29323 = (i__29314_29318 + (1));
seq__29311_29315 = G__29320;
chunk__29312_29316 = G__29321;
count__29313_29317 = G__29322;
i__29314_29318 = G__29323;
continue;
} else {
var temp__4657__auto___29324 = cljs.core.seq.call(null,seq__29311_29315);
if(temp__4657__auto___29324){
var seq__29311_29325__$1 = temp__4657__auto___29324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29311_29325__$1)){
var c__20735__auto___29326 = cljs.core.chunk_first.call(null,seq__29311_29325__$1);
var G__29327 = cljs.core.chunk_rest.call(null,seq__29311_29325__$1);
var G__29328 = c__20735__auto___29326;
var G__29329 = cljs.core.count.call(null,c__20735__auto___29326);
var G__29330 = (0);
seq__29311_29315 = G__29327;
chunk__29312_29316 = G__29328;
count__29313_29317 = G__29329;
i__29314_29318 = G__29330;
continue;
} else {
var f_29331 = cljs.core.first.call(null,seq__29311_29325__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29331);

var G__29332 = cljs.core.next.call(null,seq__29311_29325__$1);
var G__29333 = null;
var G__29334 = (0);
var G__29335 = (0);
seq__29311_29315 = G__29332;
chunk__29312_29316 = G__29333;
count__29313_29317 = G__29334;
i__29314_29318 = G__29335;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29309,map__29309__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29309,map__29309__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1472593627456