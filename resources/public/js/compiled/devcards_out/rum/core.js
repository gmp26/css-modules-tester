// Compiled by ClojureScript 1.8.51 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__21941_SHARP_,p2__21940_SHARP_){
return p2__21940_SHARP_.call(null,p1__21941_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__21943_SHARP_,p2__21942_SHARP_){
return p2__21942_SHARP_.call(null,old_state,p1__21943_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__19924__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__21944_SHARP_){
return p1__21944_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__21947 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__21947,(0),null);
var next_state = cljs.core.nth.call(null,vec__21947,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__21945_SHARP_){
return p1__21945_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((cljs.core.some_QMARK_.call(null,key_fn))?((function (class$,key_fn){
return (function() { 
var G__21948__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)};
return React.createElement(class$,props);
};
var G__21948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21949__i = 0, G__21949__a = new Array(arguments.length -  0);
while (G__21949__i < G__21949__a.length) {G__21949__a[G__21949__i] = arguments[G__21949__i + 0]; ++G__21949__i;}
  args = new cljs.core.IndexedSeq(G__21949__a,0);
} 
return G__21948__delegate.call(this,args);};
G__21948.cljs$lang$maxFixedArity = 0;
G__21948.cljs$lang$applyTo = (function (arglist__21950){
var args = cljs.core.seq(arglist__21950);
return G__21948__delegate(args);
});
G__21948.cljs$core$IFn$_invoke$arity$variadic = G__21948__delegate;
return G__21948;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__21951__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)};
return React.createElement(class$,props);
};
var G__21951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21952__i = 0, G__21952__a = new Array(arguments.length -  0);
while (G__21952__i < G__21952__a.length) {G__21952__a[G__21952__i] = arguments[G__21952__i + 0]; ++G__21952__i;}
  args = new cljs.core.IndexedSeq(G__21952__a,0);
} 
return G__21951__delegate.call(this,args);};
G__21951.cljs$lang$maxFixedArity = 0;
G__21951.cljs$lang$applyTo = (function (arglist__21953){
var args = cljs.core.seq(arglist__21953);
return G__21951__delegate(args);
});
G__21951.cljs$core$IFn$_invoke$arity$variadic = G__21951__delegate;
return G__21951;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__21954__delegate = function (args){
return React.createElement(class$,{":rum/args": args});
};
var G__21954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21955__i = 0, G__21955__a = new Array(arguments.length -  0);
while (G__21955__i < G__21955__a.length) {G__21955__a[G__21955__i] = arguments[G__21955__i + 0]; ++G__21955__i;}
  args = new cljs.core.IndexedSeq(G__21955__a,0);
} 
return G__21954__delegate.call(this,args);};
G__21954.cljs$lang$maxFixedArity = 0;
G__21954.cljs$lang$applyTo = (function (arglist__21956){
var args = cljs.core.seq(arglist__21956);
return G__21954__delegate(args);
});
G__21954.cljs$core$IFn$_invoke$arity$variadic = G__21954__delegate;
return G__21954;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__19924__auto__ = (function (){var and__19912__auto__ = typeof window !== 'undefined';
if(and__19912__auto__){
var or__19924__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
var or__19924__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__19924__auto____$1)){
return or__19924__auto____$1;
} else {
var or__19924__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__19924__auto____$2)){
return or__19924__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__19912__auto__;
}
})();
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return ((function (or__19924__auto__){
return (function (p1__21957_SHARP_){
return setTimeout(p1__21957_SHARP_,(16));
});
;})(or__19924__auto__))
}
})();
rum.core.batch = (function (){var or__19924__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
var or__19924__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__19924__auto____$1)){
return or__19924__auto____$1;
} else {
return ((function (or__19924__auto____$1,or__19924__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__19924__auto____$1,or__19924__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__21964 = cljs.core.seq.call(null,queue);
var chunk__21966 = null;
var count__21967 = (0);
var i__21968 = (0);
while(true){
if((i__21968 < count__21967)){
var comp = cljs.core._nth.call(null,chunk__21966,i__21968);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__21970 = seq__21964;
var G__21971 = chunk__21966;
var G__21972 = count__21967;
var G__21973 = (i__21968 + (1));
seq__21964 = G__21970;
chunk__21966 = G__21971;
count__21967 = G__21972;
i__21968 = G__21973;
continue;
} else {
var G__21974 = seq__21964;
var G__21975 = chunk__21966;
var G__21976 = count__21967;
var G__21977 = (i__21968 + (1));
seq__21964 = G__21974;
chunk__21966 = G__21975;
count__21967 = G__21976;
i__21968 = G__21977;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21964);
if(temp__4657__auto__){
var seq__21964__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21964__$1)){
var c__20735__auto__ = cljs.core.chunk_first.call(null,seq__21964__$1);
var G__21978 = cljs.core.chunk_rest.call(null,seq__21964__$1);
var G__21979 = c__20735__auto__;
var G__21980 = cljs.core.count.call(null,c__20735__auto__);
var G__21981 = (0);
seq__21964 = G__21978;
chunk__21966 = G__21979;
count__21967 = G__21980;
i__21968 = G__21981;
continue;
} else {
var comp = cljs.core.first.call(null,seq__21964__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__21982 = cljs.core.next.call(null,seq__21964__$1);
var G__21983 = null;
var G__21984 = (0);
var G__21985 = (0);
seq__21964 = G__21982;
chunk__21966 = G__21983;
count__21967 = G__21984;
i__21968 = G__21985;
continue;
} else {
var G__21986 = cljs.core.next.call(null,seq__21964__$1);
var G__21987 = null;
var G__21988 = (0);
var G__21989 = (0);
seq__21964 = G__21986;
chunk__21966 = G__21987;
count__21967 = G__21988;
i__21968 = G__21989;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,{"key": key},null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,{"ref": ref},null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args21990 = [];
var len__20994__auto___21993 = arguments.length;
var i__20995__auto___21994 = (0);
while(true){
if((i__20995__auto___21994 < len__20994__auto___21993)){
args21990.push((arguments[i__20995__auto___21994]));

var G__21995 = (i__20995__auto___21994 + (1));
i__20995__auto___21994 = G__21995;
continue;
} else {
}
break;
}

var G__21992 = args21990.length;
switch (G__21992) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21990.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;
/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_21997 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__21998 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__21998,(0),null);
var next_state = cljs.core.nth.call(null,vec__21998,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__21999_22011 = cljs.core.seq.call(null,old_reactions);
var chunk__22000_22012 = null;
var count__22001_22013 = (0);
var i__22002_22014 = (0);
while(true){
if((i__22002_22014 < count__22001_22013)){
var ref_22015 = cljs.core._nth.call(null,chunk__22000_22012,i__22002_22014);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_22015)){
} else {
cljs.core.remove_watch.call(null,ref_22015,key);
}

var G__22016 = seq__21999_22011;
var G__22017 = chunk__22000_22012;
var G__22018 = count__22001_22013;
var G__22019 = (i__22002_22014 + (1));
seq__21999_22011 = G__22016;
chunk__22000_22012 = G__22017;
count__22001_22013 = G__22018;
i__22002_22014 = G__22019;
continue;
} else {
var temp__4657__auto___22020 = cljs.core.seq.call(null,seq__21999_22011);
if(temp__4657__auto___22020){
var seq__21999_22021__$1 = temp__4657__auto___22020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21999_22021__$1)){
var c__20735__auto___22022 = cljs.core.chunk_first.call(null,seq__21999_22021__$1);
var G__22023 = cljs.core.chunk_rest.call(null,seq__21999_22021__$1);
var G__22024 = c__20735__auto___22022;
var G__22025 = cljs.core.count.call(null,c__20735__auto___22022);
var G__22026 = (0);
seq__21999_22011 = G__22023;
chunk__22000_22012 = G__22024;
count__22001_22013 = G__22025;
i__22002_22014 = G__22026;
continue;
} else {
var ref_22027 = cljs.core.first.call(null,seq__21999_22021__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_22027)){
} else {
cljs.core.remove_watch.call(null,ref_22027,key);
}

var G__22028 = cljs.core.next.call(null,seq__21999_22021__$1);
var G__22029 = null;
var G__22030 = (0);
var G__22031 = (0);
seq__21999_22011 = G__22028;
chunk__22000_22012 = G__22029;
count__22001_22013 = G__22030;
i__22002_22014 = G__22031;
continue;
}
} else {
}
}
break;
}

var seq__22003_22032 = cljs.core.seq.call(null,new_reactions);
var chunk__22004_22033 = null;
var count__22005_22034 = (0);
var i__22006_22035 = (0);
while(true){
if((i__22006_22035 < count__22005_22034)){
var ref_22036 = cljs.core._nth.call(null,chunk__22004_22033,i__22006_22035);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_22036)){
} else {
cljs.core.add_watch.call(null,ref_22036,key,((function (seq__22003_22032,chunk__22004_22033,count__22005_22034,i__22006_22035,ref_22036,comp,old_reactions,vec__21998,dom,next_state,new_reactions,key,_STAR_reactions_STAR_21997){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__22003_22032,chunk__22004_22033,count__22005_22034,i__22006_22035,ref_22036,comp,old_reactions,vec__21998,dom,next_state,new_reactions,key,_STAR_reactions_STAR_21997))
);
}

var G__22037 = seq__22003_22032;
var G__22038 = chunk__22004_22033;
var G__22039 = count__22005_22034;
var G__22040 = (i__22006_22035 + (1));
seq__22003_22032 = G__22037;
chunk__22004_22033 = G__22038;
count__22005_22034 = G__22039;
i__22006_22035 = G__22040;
continue;
} else {
var temp__4657__auto___22041 = cljs.core.seq.call(null,seq__22003_22032);
if(temp__4657__auto___22041){
var seq__22003_22042__$1 = temp__4657__auto___22041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22003_22042__$1)){
var c__20735__auto___22043 = cljs.core.chunk_first.call(null,seq__22003_22042__$1);
var G__22044 = cljs.core.chunk_rest.call(null,seq__22003_22042__$1);
var G__22045 = c__20735__auto___22043;
var G__22046 = cljs.core.count.call(null,c__20735__auto___22043);
var G__22047 = (0);
seq__22003_22032 = G__22044;
chunk__22004_22033 = G__22045;
count__22005_22034 = G__22046;
i__22006_22035 = G__22047;
continue;
} else {
var ref_22048 = cljs.core.first.call(null,seq__22003_22042__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_22048)){
} else {
cljs.core.add_watch.call(null,ref_22048,key,((function (seq__22003_22032,chunk__22004_22033,count__22005_22034,i__22006_22035,ref_22048,seq__22003_22042__$1,temp__4657__auto___22041,comp,old_reactions,vec__21998,dom,next_state,new_reactions,key,_STAR_reactions_STAR_21997){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__22003_22032,chunk__22004_22033,count__22005_22034,i__22006_22035,ref_22048,seq__22003_22042__$1,temp__4657__auto___22041,comp,old_reactions,vec__21998,dom,next_state,new_reactions,key,_STAR_reactions_STAR_21997))
);
}

var G__22049 = cljs.core.next.call(null,seq__22003_22042__$1);
var G__22050 = null;
var G__22051 = (0);
var G__22052 = (0);
seq__22003_22032 = G__22049;
chunk__22004_22033 = G__22050;
count__22005_22034 = G__22051;
i__22006_22035 = G__22052;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_21997;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_22053 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__22007_22054 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__22008_22055 = null;
var count__22009_22056 = (0);
var i__22010_22057 = (0);
while(true){
if((i__22010_22057 < count__22009_22056)){
var ref_22058 = cljs.core._nth.call(null,chunk__22008_22055,i__22010_22057);
cljs.core.remove_watch.call(null,ref_22058,key_22053);

var G__22059 = seq__22007_22054;
var G__22060 = chunk__22008_22055;
var G__22061 = count__22009_22056;
var G__22062 = (i__22010_22057 + (1));
seq__22007_22054 = G__22059;
chunk__22008_22055 = G__22060;
count__22009_22056 = G__22061;
i__22010_22057 = G__22062;
continue;
} else {
var temp__4657__auto___22063 = cljs.core.seq.call(null,seq__22007_22054);
if(temp__4657__auto___22063){
var seq__22007_22064__$1 = temp__4657__auto___22063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22007_22064__$1)){
var c__20735__auto___22065 = cljs.core.chunk_first.call(null,seq__22007_22064__$1);
var G__22066 = cljs.core.chunk_rest.call(null,seq__22007_22064__$1);
var G__22067 = c__20735__auto___22065;
var G__22068 = cljs.core.count.call(null,c__20735__auto___22065);
var G__22069 = (0);
seq__22007_22054 = G__22066;
chunk__22008_22055 = G__22067;
count__22009_22056 = G__22068;
i__22010_22057 = G__22069;
continue;
} else {
var ref_22070 = cljs.core.first.call(null,seq__22007_22064__$1);
cljs.core.remove_watch.call(null,ref_22070,key_22053);

var G__22071 = cljs.core.next.call(null,seq__22007_22064__$1);
var G__22072 = null;
var G__22073 = (0);
var G__22074 = (0);
seq__22007_22054 = G__22071;
chunk__22008_22055 = G__22072;
count__22009_22056 = G__22073;
i__22010_22057 = G__22074;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str("\n"),cljs.core.str("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__21001__auto__ = [];
var len__20994__auto___22081 = arguments.length;
var i__20995__auto___22082 = (0);
while(true){
if((i__20995__auto___22082 < len__20994__auto___22081)){
args__21001__auto__.push((arguments[i__20995__auto___22082]));

var G__22083 = (i__20995__auto___22082 + (1));
i__20995__auto___22082 = G__22083;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((2) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21002__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__22078){
var map__22079 = p__22078;
var map__22079__$1 = ((((!((map__22079 == null)))?((((map__22079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22079):map__22079);
var options = map__22079__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq22075){
var G__22076 = cljs.core.first.call(null,seq22075);
var seq22075__$1 = cljs.core.next.call(null,seq22075);
var G__22077 = cljs.core.first.call(null,seq22075__$1);
var seq22075__$2 = cljs.core.next.call(null,seq22075__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__22076,G__22077,seq22075__$2);
});
/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__21001__auto__ = [];
var len__20994__auto___22087 = arguments.length;
var i__20995__auto___22088 = (0);
while(true){
if((i__20995__auto___22088 < len__20994__auto___22087)){
args__21001__auto__.push((arguments[i__20995__auto___22088]));

var G__22089 = (i__20995__auto___22088 + (1));
i__20995__auto___22088 = G__22089;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((2) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21002__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq22084){
var G__22085 = cljs.core.first.call(null,seq22084);
var seq22084__$1 = cljs.core.next.call(null,seq22084);
var G__22086 = cljs.core.first.call(null,seq22084__$1);
var seq22084__$2 = cljs.core.next.call(null,seq22084__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__22085,G__22086,seq22084__$2);
});

//# sourceMappingURL=core.js.map?rel=1472594362481