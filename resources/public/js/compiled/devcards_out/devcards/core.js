// Compiled by ClojureScript 1.8.51 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__19924__auto__ = (function (){var and__19912__auto__ = typeof Symbol !== 'undefined';
if(and__19912__auto__){
var and__19912__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__19912__auto____$1){
var and__19912__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__19912__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__19912__auto____$2;
}
} else {
return and__19912__auto____$1;
}
} else {
return and__19912__auto__;
}
})();
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__27702_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__27702_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args27703 = [];
var len__20994__auto___27706 = arguments.length;
var i__20995__auto___27707 = (0);
while(true){
if((i__20995__auto___27707 < len__20994__auto___27706)){
args27703.push((arguments[i__20995__auto___27707]));

var G__27708 = (i__20995__auto___27707 + (1));
i__20995__auto___27707 = G__27708;
continue;
} else {
}
break;
}

var G__27705 = args27703.length;
switch (G__27705) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27703.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__19912__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__19912__auto__){
var map__27716 = c;
var map__27716__$1 = ((((!((map__27716 == null)))?((((map__27716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27716):map__27716);
var path = cljs.core.get.call(null,map__27716__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__27716__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__19912__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
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
var base__26948__auto___27722 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__19924__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__26948__auto___27722);
}

var seq__27718_27723 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27719_27724 = null;
var count__27720_27725 = (0);
var i__27721_27726 = (0);
while(true){
if((i__27721_27726 < count__27720_27725)){
var property__26949__auto___27727 = cljs.core._nth.call(null,chunk__27719_27724,i__27721_27726);
if(cljs.core.truth_((base__26948__auto___27722[property__26949__auto___27727]))){
(devcards.core.CodeHighlight.prototype[property__26949__auto___27727] = (base__26948__auto___27722[property__26949__auto___27727]));
} else {
}

var G__27728 = seq__27718_27723;
var G__27729 = chunk__27719_27724;
var G__27730 = count__27720_27725;
var G__27731 = (i__27721_27726 + (1));
seq__27718_27723 = G__27728;
chunk__27719_27724 = G__27729;
count__27720_27725 = G__27730;
i__27721_27726 = G__27731;
continue;
} else {
var temp__4657__auto___27732 = cljs.core.seq.call(null,seq__27718_27723);
if(temp__4657__auto___27732){
var seq__27718_27733__$1 = temp__4657__auto___27732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27718_27733__$1)){
var c__20735__auto___27734 = cljs.core.chunk_first.call(null,seq__27718_27733__$1);
var G__27735 = cljs.core.chunk_rest.call(null,seq__27718_27733__$1);
var G__27736 = c__20735__auto___27734;
var G__27737 = cljs.core.count.call(null,c__20735__auto___27734);
var G__27738 = (0);
seq__27718_27723 = G__27735;
chunk__27719_27724 = G__27736;
count__27720_27725 = G__27737;
i__27721_27726 = G__27738;
continue;
} else {
var property__26949__auto___27739 = cljs.core.first.call(null,seq__27718_27733__$1);
if(cljs.core.truth_((base__26948__auto___27722[property__26949__auto___27739]))){
(devcards.core.CodeHighlight.prototype[property__26949__auto___27739] = (base__26948__auto___27722[property__26949__auto___27739]));
} else {
}

var G__27740 = cljs.core.next.call(null,seq__27718_27733__$1);
var G__27741 = null;
var G__27742 = (0);
var G__27743 = (0);
seq__27718_27723 = G__27740;
chunk__27719_27724 = G__27741;
count__27720_27725 = G__27742;
i__27721_27726 = G__27743;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__20849__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20850__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20853__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20853__auto__,method_table__20849__auto__,prefer_table__20850__auto__,method_cache__20851__auto__,cached_hierarchy__20852__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27744){
var map__27745 = p__27744;
var map__27745__$1 = ((((!((map__27745 == null)))?((((map__27745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27745):map__27745);
var content = cljs.core.get.call(null,map__27745__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__27747){
var map__27748 = p__27747;
var map__27748__$1 = ((((!((map__27748 == null)))?((((map__27748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27748):map__27748);
var block = map__27748__$1;
var content = cljs.core.get.call(null,map__27748__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__21001__auto__ = [];
var len__20994__auto___27751 = arguments.length;
var i__20995__auto___27752 = (0);
while(true){
if((i__20995__auto___27752 < len__20994__auto___27751)){
args__21001__auto__.push((arguments[i__20995__auto___27752]));

var G__27753 = (i__20995__auto___27752 + (1));
i__20995__auto___27752 = G__27753;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((0) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__21002__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",{"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",{"key": i},sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}, "key": "devcards-markdown-error"},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq27750){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27750));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": "devcards_naked-card", "className": (function (){var G__27755 = devcards.system.devcards_rendered_card_class;
var G__27755__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__27755),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__27755);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__27755__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__27755__$1;
}
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args27756 = [];
var len__20994__auto___27764 = arguments.length;
var i__20995__auto___27765 = (0);
while(true){
if((i__20995__auto___27765 < len__20994__auto___27764)){
args27756.push((arguments[i__20995__auto___27765]));

var G__27766 = (i__20995__auto___27765 + (1));
i__20995__auto___27765 = G__27766;
continue;
} else {
}
break;
}

var G__27758 = args27756.length;
switch (G__27758) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27756.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__27759 = card;
var map__27759__$1 = ((((!((map__27759 == null)))?((((map__27759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27759):map__27759);
var path = cljs.core.get.call(null,map__27759__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__27759__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__27759,map__27759__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__27759,map__27759__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs27761 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs27761))?sablono.interpreter.attributes.call(null,attrs27761):null),((cljs.core.map_QMARK_.call(null,attrs27761))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27761)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__20587__auto__ = (((this$ == null))?null:this$);
var m__20588__auto__ = (devcards.core._devcard_options[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,this$,devcard_opts);
} else {
var m__20588__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__20587__auto__ = (((this$ == null))?null:this$);
var m__20588__auto__ = (devcards.core._devcard[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,this$,devcard_opts);
} else {
var m__20588__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__26948__auto___27773 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs27768 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27768))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs27768)):{"className": "com-rigsomelight-dont-update"}),((cljs.core.map_QMARK_.call(null,attrs27768))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27768)], null)));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__26948__auto___27773);
}

var seq__27769_27774 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27770_27775 = null;
var count__27771_27776 = (0);
var i__27772_27777 = (0);
while(true){
if((i__27772_27777 < count__27771_27776)){
var property__26949__auto___27778 = cljs.core._nth.call(null,chunk__27770_27775,i__27772_27777);
if(cljs.core.truth_((base__26948__auto___27773[property__26949__auto___27778]))){
(devcards.core.DontUpdate.prototype[property__26949__auto___27778] = (base__26948__auto___27773[property__26949__auto___27778]));
} else {
}

var G__27779 = seq__27769_27774;
var G__27780 = chunk__27770_27775;
var G__27781 = count__27771_27776;
var G__27782 = (i__27772_27777 + (1));
seq__27769_27774 = G__27779;
chunk__27770_27775 = G__27780;
count__27771_27776 = G__27781;
i__27772_27777 = G__27782;
continue;
} else {
var temp__4657__auto___27783 = cljs.core.seq.call(null,seq__27769_27774);
if(temp__4657__auto___27783){
var seq__27769_27784__$1 = temp__4657__auto___27783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27769_27784__$1)){
var c__20735__auto___27785 = cljs.core.chunk_first.call(null,seq__27769_27784__$1);
var G__27786 = cljs.core.chunk_rest.call(null,seq__27769_27784__$1);
var G__27787 = c__20735__auto___27785;
var G__27788 = cljs.core.count.call(null,c__20735__auto___27785);
var G__27789 = (0);
seq__27769_27774 = G__27786;
chunk__27770_27775 = G__27787;
count__27771_27776 = G__27788;
i__27772_27777 = G__27789;
continue;
} else {
var property__26949__auto___27790 = cljs.core.first.call(null,seq__27769_27784__$1);
if(cljs.core.truth_((base__26948__auto___27773[property__26949__auto___27790]))){
(devcards.core.DontUpdate.prototype[property__26949__auto___27790] = (base__26948__auto___27773[property__26949__auto___27790]));
} else {
}

var G__27791 = cljs.core.next.call(null,seq__27769_27784__$1);
var G__27792 = null;
var G__27793 = (0);
var G__27794 = (0);
seq__27769_27774 = G__27791;
chunk__27770_27775 = G__27792;
count__27771_27776 = G__27793;
i__27772_27777 = G__27794;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,{"change_count": change_count, "children_thunk": children_thunk});
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__19924__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",{"key": "devcards-main-section"},sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__20758__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__20758__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__20758__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__20758__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto____$3);
})(),x__20758__auto____$2);
})(),x__20758__auto____$1);
})(),x__20758__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
});
var base__26948__auto___27801 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__19924__auto__ = (function (){var and__19912__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__19912__auto__)){
return this$.state;
} else {
return and__19912__auto__;
}
})();
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__19912__auto__ = data_atom;
if(cljs.core.truth_(and__19912__auto__)){
return id;
} else {
return and__19912__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))});
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__26948__auto___27801);
}

var seq__27797_27802 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27798_27803 = null;
var count__27799_27804 = (0);
var i__27800_27805 = (0);
while(true){
if((i__27800_27805 < count__27799_27804)){
var property__26949__auto___27806 = cljs.core._nth.call(null,chunk__27798_27803,i__27800_27805);
if(cljs.core.truth_((base__26948__auto___27801[property__26949__auto___27806]))){
(devcards.core.DevcardBase.prototype[property__26949__auto___27806] = (base__26948__auto___27801[property__26949__auto___27806]));
} else {
}

var G__27807 = seq__27797_27802;
var G__27808 = chunk__27798_27803;
var G__27809 = count__27799_27804;
var G__27810 = (i__27800_27805 + (1));
seq__27797_27802 = G__27807;
chunk__27798_27803 = G__27808;
count__27799_27804 = G__27809;
i__27800_27805 = G__27810;
continue;
} else {
var temp__4657__auto___27811 = cljs.core.seq.call(null,seq__27797_27802);
if(temp__4657__auto___27811){
var seq__27797_27812__$1 = temp__4657__auto___27811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27797_27812__$1)){
var c__20735__auto___27813 = cljs.core.chunk_first.call(null,seq__27797_27812__$1);
var G__27814 = cljs.core.chunk_rest.call(null,seq__27797_27812__$1);
var G__27815 = c__20735__auto___27813;
var G__27816 = cljs.core.count.call(null,c__20735__auto___27813);
var G__27817 = (0);
seq__27797_27802 = G__27814;
chunk__27798_27803 = G__27815;
count__27799_27804 = G__27816;
i__27800_27805 = G__27817;
continue;
} else {
var property__26949__auto___27818 = cljs.core.first.call(null,seq__27797_27812__$1);
if(cljs.core.truth_((base__26948__auto___27801[property__26949__auto___27818]))){
(devcards.core.DevcardBase.prototype[property__26949__auto___27818] = (base__26948__auto___27801[property__26949__auto___27818]));
} else {
}

var G__27819 = cljs.core.next.call(null,seq__27797_27812__$1);
var G__27820 = null;
var G__27821 = (0);
var G__27822 = (0);
seq__27797_27802 = G__27819;
chunk__27798_27803 = G__27820;
count__27799_27804 = G__27821;
i__27800_27805 = G__27822;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__26948__auto___27827 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__19912__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__19912__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__19912__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__26948__auto___27827);
}

var seq__27823_27828 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27824_27829 = null;
var count__27825_27830 = (0);
var i__27826_27831 = (0);
while(true){
if((i__27826_27831 < count__27825_27830)){
var property__26949__auto___27832 = cljs.core._nth.call(null,chunk__27824_27829,i__27826_27831);
if(cljs.core.truth_((base__26948__auto___27827[property__26949__auto___27832]))){
(devcards.core.DomComponent.prototype[property__26949__auto___27832] = (base__26948__auto___27827[property__26949__auto___27832]));
} else {
}

var G__27833 = seq__27823_27828;
var G__27834 = chunk__27824_27829;
var G__27835 = count__27825_27830;
var G__27836 = (i__27826_27831 + (1));
seq__27823_27828 = G__27833;
chunk__27824_27829 = G__27834;
count__27825_27830 = G__27835;
i__27826_27831 = G__27836;
continue;
} else {
var temp__4657__auto___27837 = cljs.core.seq.call(null,seq__27823_27828);
if(temp__4657__auto___27837){
var seq__27823_27838__$1 = temp__4657__auto___27837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27823_27838__$1)){
var c__20735__auto___27839 = cljs.core.chunk_first.call(null,seq__27823_27838__$1);
var G__27840 = cljs.core.chunk_rest.call(null,seq__27823_27838__$1);
var G__27841 = c__20735__auto___27839;
var G__27842 = cljs.core.count.call(null,c__20735__auto___27839);
var G__27843 = (0);
seq__27823_27828 = G__27840;
chunk__27824_27829 = G__27841;
count__27825_27830 = G__27842;
i__27826_27831 = G__27843;
continue;
} else {
var property__26949__auto___27844 = cljs.core.first.call(null,seq__27823_27838__$1);
if(cljs.core.truth_((base__26948__auto___27827[property__26949__auto___27844]))){
(devcards.core.DomComponent.prototype[property__26949__auto___27844] = (base__26948__auto___27827[property__26949__auto___27844]));
} else {
}

var G__27845 = cljs.core.next.call(null,seq__27823_27838__$1);
var G__27846 = null;
var G__27847 = (0);
var G__27848 = (0);
seq__27823_27828 = G__27845;
chunk__27824_27829 = G__27846;
count__27825_27830 = G__27847;
i__27826_27831 = G__27848;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__19924__auto__ = x === true;
if(or__19924__auto__){
return or__19924__auto__;
} else {
var or__19924__auto____$1 = x === false;
if(or__19924__auto____$1){
return or__19924__auto____$1;
} else {
var or__19924__auto____$2 = (x == null);
if(or__19924__auto____$2){
return or__19924__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__19924__auto__ = typeof x === 'string';
if(or__19924__auto__){
return or__19924__auto__;
} else {
var or__19924__auto____$1 = (x == null);
if(or__19924__auto____$1){
return or__19924__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__19924__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__27849_SHARP_){
return !(p1__27849_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__27858 = opts;
var map__27858__$1 = ((((!((map__27858 == null)))?((((map__27858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27858):map__27858);
var name = cljs.core.get.call(null,map__27858__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__27858__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__27858__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__27858__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__19924__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__19924__auto__){
return or__19924__auto__;
} else {
var or__19924__auto____$1 = (options == null);
if(or__19924__auto____$1){
return or__19924__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__19924__auto__ = (initial_data == null);
if(or__19924__auto__){
return or__19924__auto__;
} else {
var or__19924__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__19924__auto____$1){
return or__19924__auto____$1;
} else {
var or__19924__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__19924__auto____$2){
return or__19924__auto____$2;
} else {
var or__19924__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__19924__auto____$3){
return or__19924__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__27858,map__27858__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__27850_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__27850_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__27858,map__27858__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs27866 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs27866))?sablono.interpreter.attributes.call(null,attrs27866):null),((cljs.core.map_QMARK_.call(null,attrs27866))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27866)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs27870 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27870))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs27870)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),((cljs.core.map_QMARK_.call(null,attrs27870))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27870)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs27871 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27871))?sablono.interpreter.attributes.call(null,attrs27871):null),((cljs.core.map_QMARK_.call(null,attrs27871))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27871)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs27872 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27872))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs27872)):{"className": "com-rigsomelight-devcards-padding-top-border"}),((cljs.core.map_QMARK_.call(null,attrs27872))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27872)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__27873_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__27873_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20546__auto__,k__20547__auto__){
var self__ = this;
var this__20546__auto____$1 = this;
return cljs.core._lookup.call(null,this__20546__auto____$1,k__20547__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20548__auto__,k27875,else__20549__auto__){
var self__ = this;
var this__20548__auto____$1 = this;
var G__27877 = (((k27875 instanceof cljs.core.Keyword))?k27875.fqn:null);
switch (G__27877) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27875,else__20549__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20560__auto__,writer__20561__auto__,opts__20562__auto__){
var self__ = this;
var this__20560__auto____$1 = this;
var pr_pair__20563__auto__ = ((function (this__20560__auto____$1){
return (function (keyval__20564__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20561__auto__,cljs.core.pr_writer,""," ","",opts__20562__auto__,keyval__20564__auto__);
});})(this__20560__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20561__auto__,pr_pair__20563__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__20562__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27874){
var self__ = this;
var G__27874__$1 = this;
return (new cljs.core.RecordIter((0),G__27874__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20544__auto__){
var self__ = this;
var this__20544__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20540__auto__){
var self__ = this;
var this__20540__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20550__auto__){
var self__ = this;
var this__20550__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20541__auto__){
var self__ = this;
var this__20541__auto____$1 = this;
var h__20359__auto__ = self__.__hash;
if(!((h__20359__auto__ == null))){
return h__20359__auto__;
} else {
var h__20359__auto____$1 = cljs.core.hash_imap.call(null,this__20541__auto____$1);
self__.__hash = h__20359__auto____$1;

return h__20359__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20542__auto__,other__20543__auto__){
var self__ = this;
var this__20542__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19912__auto__ = other__20543__auto__;
if(cljs.core.truth_(and__19912__auto__)){
var and__19912__auto____$1 = (this__20542__auto____$1.constructor === other__20543__auto__.constructor);
if(and__19912__auto____$1){
return cljs.core.equiv_map.call(null,this__20542__auto____$1,other__20543__auto__);
} else {
return and__19912__auto____$1;
}
} else {
return and__19912__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20555__auto__,k__20556__auto__){
var self__ = this;
var this__20555__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__20556__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20555__auto____$1),self__.__meta),k__20556__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20556__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20553__auto__,k__20554__auto__,G__27874){
var self__ = this;
var this__20553__auto____$1 = this;
var pred__27878 = cljs.core.keyword_identical_QMARK_;
var expr__27879 = k__20554__auto__;
if(cljs.core.truth_(pred__27878.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27879))){
return (new devcards.core.IdentiyOptions(G__27874,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20554__auto__,G__27874),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20558__auto__){
var self__ = this;
var this__20558__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20545__auto__,G__27874){
var self__ = this;
var this__20545__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__27874,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20551__auto__,entry__20552__auto__){
var self__ = this;
var this__20551__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20552__auto__)){
return cljs.core._assoc.call(null,this__20551__auto____$1,cljs.core._nth.call(null,entry__20552__auto__,(0)),cljs.core._nth.call(null,entry__20552__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20551__auto____$1,entry__20552__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__20580__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__20580__auto__,writer__20581__auto__){
return cljs.core._write.call(null,writer__20581__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__27876){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27876),null,cljs.core.dissoc.call(null,G__27876,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__27882){
var map__27885 = p__27882;
var map__27885__$1 = ((((!((map__27885 == null)))?((((map__27885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27885):map__27885);
var devcard_opts = map__27885__$1;
var options = cljs.core.get.call(null,map__27885__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__27885,map__27885__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__27885,map__27885__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20546__auto__,k__20547__auto__){
var self__ = this;
var this__20546__auto____$1 = this;
return cljs.core._lookup.call(null,this__20546__auto____$1,k__20547__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20548__auto__,k27888,else__20549__auto__){
var self__ = this;
var this__20548__auto____$1 = this;
var G__27890 = (((k27888 instanceof cljs.core.Keyword))?k27888.fqn:null);
switch (G__27890) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27888,else__20549__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20560__auto__,writer__20561__auto__,opts__20562__auto__){
var self__ = this;
var this__20560__auto____$1 = this;
var pr_pair__20563__auto__ = ((function (this__20560__auto____$1){
return (function (keyval__20564__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20561__auto__,cljs.core.pr_writer,""," ","",opts__20562__auto__,keyval__20564__auto__);
});})(this__20560__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20561__auto__,pr_pair__20563__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__20562__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27887){
var self__ = this;
var G__27887__$1 = this;
return (new cljs.core.RecordIter((0),G__27887__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20544__auto__){
var self__ = this;
var this__20544__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20540__auto__){
var self__ = this;
var this__20540__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20550__auto__){
var self__ = this;
var this__20550__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20541__auto__){
var self__ = this;
var this__20541__auto____$1 = this;
var h__20359__auto__ = self__.__hash;
if(!((h__20359__auto__ == null))){
return h__20359__auto__;
} else {
var h__20359__auto____$1 = cljs.core.hash_imap.call(null,this__20541__auto____$1);
self__.__hash = h__20359__auto____$1;

return h__20359__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20542__auto__,other__20543__auto__){
var self__ = this;
var this__20542__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19912__auto__ = other__20543__auto__;
if(cljs.core.truth_(and__19912__auto__)){
var and__19912__auto____$1 = (this__20542__auto____$1.constructor === other__20543__auto__.constructor);
if(and__19912__auto____$1){
return cljs.core.equiv_map.call(null,this__20542__auto____$1,other__20543__auto__);
} else {
return and__19912__auto____$1;
}
} else {
return and__19912__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20555__auto__,k__20556__auto__){
var self__ = this;
var this__20555__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__20556__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20555__auto____$1),self__.__meta),k__20556__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20556__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20553__auto__,k__20554__auto__,G__27887){
var self__ = this;
var this__20553__auto____$1 = this;
var pred__27891 = cljs.core.keyword_identical_QMARK_;
var expr__27892 = k__20554__auto__;
if(cljs.core.truth_(pred__27891.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27892))){
return (new devcards.core.AtomLikeOptions(G__27887,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20554__auto__,G__27887),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20558__auto__){
var self__ = this;
var this__20558__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20545__auto__,G__27887){
var self__ = this;
var this__20545__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__27887,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20551__auto__,entry__20552__auto__){
var self__ = this;
var this__20551__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20552__auto__)){
return cljs.core._assoc.call(null,this__20551__auto____$1,cljs.core._nth.call(null,entry__20552__auto__,(0)),cljs.core._nth.call(null,entry__20552__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20551__auto____$1,entry__20552__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__20580__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__20580__auto__,writer__20581__auto__){
return cljs.core._write.call(null,writer__20581__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__27889){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27889),null,cljs.core.dissoc.call(null,G__27889,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20546__auto__,k__20547__auto__){
var self__ = this;
var this__20546__auto____$1 = this;
return cljs.core._lookup.call(null,this__20546__auto____$1,k__20547__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20548__auto__,k27898,else__20549__auto__){
var self__ = this;
var this__20548__auto____$1 = this;
var G__27900 = (((k27898 instanceof cljs.core.Keyword))?k27898.fqn:null);
switch (G__27900) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27898,else__20549__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20560__auto__,writer__20561__auto__,opts__20562__auto__){
var self__ = this;
var this__20560__auto____$1 = this;
var pr_pair__20563__auto__ = ((function (this__20560__auto____$1){
return (function (keyval__20564__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20561__auto__,cljs.core.pr_writer,""," ","",opts__20562__auto__,keyval__20564__auto__);
});})(this__20560__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20561__auto__,pr_pair__20563__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__20562__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27897){
var self__ = this;
var G__27897__$1 = this;
return (new cljs.core.RecordIter((0),G__27897__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20544__auto__){
var self__ = this;
var this__20544__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20540__auto__){
var self__ = this;
var this__20540__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20550__auto__){
var self__ = this;
var this__20550__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20541__auto__){
var self__ = this;
var this__20541__auto____$1 = this;
var h__20359__auto__ = self__.__hash;
if(!((h__20359__auto__ == null))){
return h__20359__auto__;
} else {
var h__20359__auto____$1 = cljs.core.hash_imap.call(null,this__20541__auto____$1);
self__.__hash = h__20359__auto____$1;

return h__20359__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20542__auto__,other__20543__auto__){
var self__ = this;
var this__20542__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19912__auto__ = other__20543__auto__;
if(cljs.core.truth_(and__19912__auto__)){
var and__19912__auto____$1 = (this__20542__auto____$1.constructor === other__20543__auto__.constructor);
if(and__19912__auto____$1){
return cljs.core.equiv_map.call(null,this__20542__auto____$1,other__20543__auto__);
} else {
return and__19912__auto____$1;
}
} else {
return and__19912__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20555__auto__,k__20556__auto__){
var self__ = this;
var this__20555__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__20556__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20555__auto____$1),self__.__meta),k__20556__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20556__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20553__auto__,k__20554__auto__,G__27897){
var self__ = this;
var this__20553__auto____$1 = this;
var pred__27901 = cljs.core.keyword_identical_QMARK_;
var expr__27902 = k__20554__auto__;
if(cljs.core.truth_(pred__27901.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27902))){
return (new devcards.core.EdnLikeOptions(G__27897,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20554__auto__,G__27897),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20558__auto__){
var self__ = this;
var this__20558__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20545__auto__,G__27897){
var self__ = this;
var this__20545__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__27897,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20551__auto__,entry__20552__auto__){
var self__ = this;
var this__20551__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20552__auto__)){
return cljs.core._assoc.call(null,this__20551__auto____$1,cljs.core._nth.call(null,entry__20552__auto__,(0)),cljs.core._nth.call(null,entry__20552__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20551__auto____$1,entry__20552__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__20580__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__20580__auto__,writer__20581__auto__){
return cljs.core._write.call(null,writer__20581__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__27899){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27899),null,cljs.core.dissoc.call(null,G__27899,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__19912__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__19912__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__19912__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__27916 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__27916 == null))){
if((false) || (G__27916.devcards$core$IDevcard$)){
return true;
} else {
if((!G__27916.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__27916);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__27916);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__27919 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__27919__$1 = ((((!((map__27919 == null)))?((((map__27919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27919):map__27919);
var history = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27923 = cljs.core.deref.call(null,history_atom);
var map__27923__$1 = ((((!((map__27923 == null)))?((((map__27923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27923):map__27923);
var history = cljs.core.get.call(null,map__27923__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27923__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27927 = cljs.core.deref.call(null,history_atom);
var map__27927__$1 = ((((!((map__27927 == null)))?((((map__27927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27927):map__27927);
var history = cljs.core.get.call(null,map__27927__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27927__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27931 = cljs.core.deref.call(null,history_atom);
var map__27931__$1 = ((((!((map__27931 == null)))?((((map__27931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27931):map__27931);
var history = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__20758__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__19912__auto__ = data_atom;
if(cljs.core.truth_(and__19912__auto__)){
return id;
} else {
return and__19912__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__27933){
var map__27934 = p__27933;
var map__27934__$1 = ((((!((map__27934 == null)))?((((map__27934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27934):map__27934);
var ha = map__27934__$1;
var pointer = cljs.core.get.call(null,map__27934__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__27934__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__27934__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__19924__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__19924__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"})));
})());
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom, "key": "devcards-history-control-bar"});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_27949 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_27949;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__20849__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20850__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20853__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20853__auto__,method_table__20849__auto__,prefer_table__20850__auto__,method_cache__20851__auto__,cached_hierarchy__20852__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs27950 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27950))?sablono.interpreter.attributes.call(null,attrs27950):null),((cljs.core.map_QMARK_.call(null,attrs27950))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27950)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__27951,body){
var map__27955 = p__27951;
var map__27955__$1 = ((((!((map__27955 == null)))?((((map__27955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27955):map__27955);
var message = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs27957 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs27957))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs27957)):{"className": "com-rigsomelight-devcards-test-message"}),((cljs.core.map_QMARK_.call(null,attrs27957))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27957)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__27958){
var map__27966 = p__27958;
var map__27966__$1 = ((((!((map__27966 == null)))?((((map__27966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27966):map__27966);
var m = map__27966__$1;
var expected = cljs.core.get.call(null,map__27966__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__27966__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__27966__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs27968 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27968))?sablono.interpreter.attributes.call(null,attrs27968):null),((cljs.core.map_QMARK_.call(null,attrs27968))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27968),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs27975 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs27975))?sablono.interpreter.attributes.call(null,attrs27975):null),((cljs.core.map_QMARK_.call(null,attrs27975))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27975)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs27976 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27976))?sablono.interpreter.attributes.call(null,attrs27976):null),((cljs.core.map_QMARK_.call(null,attrs27976))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27976)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__27977){
var map__27978 = p__27977;
var map__27978__$1 = ((((!((map__27978 == null)))?((((map__27978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27978):map__27978);
var testing_contexts = cljs.core.get.call(null,map__27978__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs27980 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__27978,map__27978__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__27978,map__27978__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__20758__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27980))?sablono.interpreter.attributes.call(null,attrs27980):null),((cljs.core.map_QMARK_.call(null,attrs27980))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27980)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs27987 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__27988,p__27989){
var map__27990 = p__27988;
var map__27990__$1 = ((((!((map__27990 == null)))?((((map__27990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27990):map__27990);
var last_context = cljs.core.get.call(null,map__27990__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__27990__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__27991 = p__27989;
var i = cljs.core.nth.call(null,vec__27991,(0),null);
var t = cljs.core.nth.call(null,vec__27991,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__20758__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27987))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs27987)):{"className": "com-rigsomelight-devcards-test-card"}),((cljs.core.map_QMARK_.call(null,attrs27987))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27987)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__28005){
var map__28006 = p__28005;
var map__28006__$1 = ((((!((map__28006 == null)))?((((map__28006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28006):map__28006);
var type = cljs.core.get.call(null,map__28006__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__28004 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__28004__$1 = ((((!((map__28004 == null)))?((((map__28004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28004):map__28004);
var fail = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__28004,map__28004__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__28004,map__28004__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__28004,map__28004__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__28004,map__28004__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__28004,map__28004__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__28004,map__28004__$1,fail,pass,error,error__$1){
return (function (p__28009){
var map__28010 = p__28009;
var map__28010__$1 = ((((!((map__28010 == null)))?((((map__28010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28010):map__28010);
var type = cljs.core.get.call(null,map__28010__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__28004,map__28004__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__28004,map__28004__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__28004,map__28004__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__28004,map__28004__$1,fail,pass,error,error__$1){
return (function (p__28012){
var map__28013 = p__28012;
var map__28013__$1 = ((((!((map__28013 == null)))?((((map__28013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28013):map__28013);
var type = cljs.core.get.call(null,map__28013__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__28004,map__28004__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__28004,map__28004__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__19924__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__23388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto__){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto__){
return (function (state_28101){
var state_val_28102 = (state_28101[(1)]);
if((state_val_28102 === (7))){
var state_28101__$1 = state_28101;
var statearr_28103_28152 = state_28101__$1;
(statearr_28103_28152[(2)] = false);

(statearr_28103_28152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (20))){
var inst_28042 = (state_28101[(7)]);
var inst_28061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28042);
var state_28101__$1 = state_28101;
var statearr_28104_28153 = state_28101__$1;
(statearr_28104_28153[(2)] = inst_28061);

(statearr_28104_28153[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (27))){
var inst_28076 = (state_28101[(8)]);
var inst_28066 = (state_28101[(9)]);
var inst_28080 = inst_28066.call(null,inst_28076);
var state_28101__$1 = state_28101;
var statearr_28105_28154 = state_28101__$1;
(statearr_28105_28154[(2)] = inst_28080);

(statearr_28105_28154[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (1))){
var state_28101__$1 = state_28101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28101__$1,(2),devcards.core.test_channel);
} else {
if((state_val_28102 === (24))){
var state_28101__$1 = state_28101;
var statearr_28106_28155 = state_28101__$1;
(statearr_28106_28155[(2)] = null);

(statearr_28106_28155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (4))){
var state_28101__$1 = state_28101;
var statearr_28107_28156 = state_28101__$1;
(statearr_28107_28156[(2)] = false);

(statearr_28107_28156[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (15))){
var state_28101__$1 = state_28101;
var statearr_28108_28157 = state_28101__$1;
(statearr_28108_28157[(2)] = false);

(statearr_28108_28157[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (21))){
var inst_28042 = (state_28101[(7)]);
var state_28101__$1 = state_28101;
var statearr_28109_28158 = state_28101__$1;
(statearr_28109_28158[(2)] = inst_28042);

(statearr_28109_28158[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (13))){
var inst_28099 = (state_28101[(2)]);
var state_28101__$1 = state_28101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28101__$1,inst_28099);
} else {
if((state_val_28102 === (22))){
var inst_28065 = (state_28101[(10)]);
var inst_28064 = (state_28101[(2)]);
var inst_28065__$1 = cljs.core.get.call(null,inst_28064,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_28066 = cljs.core.get.call(null,inst_28064,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_28101__$1 = (function (){var statearr_28110 = state_28101;
(statearr_28110[(10)] = inst_28065__$1);

(statearr_28110[(9)] = inst_28066);

return statearr_28110;
})();
if(cljs.core.truth_(inst_28065__$1)){
var statearr_28111_28159 = state_28101__$1;
(statearr_28111_28159[(1)] = (23));

} else {
var statearr_28112_28160 = state_28101__$1;
(statearr_28112_28160[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (29))){
var inst_28090 = (state_28101[(2)]);
var inst_28091 = cljs.test.clear_env_BANG_.call(null);
var state_28101__$1 = (function (){var statearr_28113 = state_28101;
(statearr_28113[(11)] = inst_28090);

(statearr_28113[(12)] = inst_28091);

return statearr_28113;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28101__$1,(30),devcards.core.test_channel);
} else {
if((state_val_28102 === (6))){
var state_28101__$1 = state_28101;
var statearr_28114_28161 = state_28101__$1;
(statearr_28114_28161[(2)] = true);

(statearr_28114_28161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (28))){
var inst_28066 = (state_28101[(9)]);
var inst_28082 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_28083 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_28084 = cljs.core.PersistentHashMap.fromArrays(inst_28082,inst_28083);
var inst_28085 = devcards.core.collect_test.call(null,inst_28084);
var inst_28086 = cljs.test.get_current_env.call(null);
var inst_28087 = cljs.core.assoc.call(null,inst_28086,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_28088 = inst_28066.call(null,inst_28087);
var state_28101__$1 = (function (){var statearr_28115 = state_28101;
(statearr_28115[(13)] = inst_28085);

return statearr_28115;
})();
var statearr_28116_28162 = state_28101__$1;
(statearr_28116_28162[(2)] = inst_28088);

(statearr_28116_28162[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (25))){
var inst_28097 = (state_28101[(2)]);
var state_28101__$1 = state_28101;
var statearr_28117_28163 = state_28101__$1;
(statearr_28117_28163[(2)] = inst_28097);

(statearr_28117_28163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (17))){
var state_28101__$1 = state_28101;
var statearr_28118_28164 = state_28101__$1;
(statearr_28118_28164[(2)] = true);

(statearr_28118_28164[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (3))){
var inst_28019 = (state_28101[(14)]);
var inst_28024 = inst_28019.cljs$lang$protocol_mask$partition0$;
var inst_28025 = (inst_28024 & (64));
var inst_28026 = inst_28019.cljs$core$ISeq$;
var inst_28027 = (inst_28025) || (inst_28026);
var state_28101__$1 = state_28101;
if(cljs.core.truth_(inst_28027)){
var statearr_28119_28165 = state_28101__$1;
(statearr_28119_28165[(1)] = (6));

} else {
var statearr_28120_28166 = state_28101__$1;
(statearr_28120_28166[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (12))){
var inst_28042 = (state_28101[(7)]);
var inst_28046 = (inst_28042 == null);
var inst_28047 = cljs.core.not.call(null,inst_28046);
var state_28101__$1 = state_28101;
if(inst_28047){
var statearr_28121_28167 = state_28101__$1;
(statearr_28121_28167[(1)] = (14));

} else {
var statearr_28122_28168 = state_28101__$1;
(statearr_28122_28168[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (2))){
var inst_28019 = (state_28101[(14)]);
var inst_28019__$1 = (state_28101[(2)]);
var inst_28021 = (inst_28019__$1 == null);
var inst_28022 = cljs.core.not.call(null,inst_28021);
var state_28101__$1 = (function (){var statearr_28123 = state_28101;
(statearr_28123[(14)] = inst_28019__$1);

return statearr_28123;
})();
if(inst_28022){
var statearr_28124_28169 = state_28101__$1;
(statearr_28124_28169[(1)] = (3));

} else {
var statearr_28125_28170 = state_28101__$1;
(statearr_28125_28170[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (23))){
var inst_28065 = (state_28101[(10)]);
var inst_28069 = (state_28101[(15)]);
var inst_28069__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_28070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28071 = devcards.core.run_card_tests.call(null,inst_28065);
var inst_28072 = [inst_28071,inst_28069__$1];
var inst_28073 = (new cljs.core.PersistentVector(null,2,(5),inst_28070,inst_28072,null));
var state_28101__$1 = (function (){var statearr_28126 = state_28101;
(statearr_28126[(15)] = inst_28069__$1);

return statearr_28126;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28101__$1,(26),inst_28073);
} else {
if((state_val_28102 === (19))){
var inst_28056 = (state_28101[(2)]);
var state_28101__$1 = state_28101;
var statearr_28127_28171 = state_28101__$1;
(statearr_28127_28171[(2)] = inst_28056);

(statearr_28127_28171[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (11))){
var inst_28019 = (state_28101[(14)]);
var inst_28039 = (state_28101[(2)]);
var inst_28040 = cljs.core.get.call(null,inst_28039,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_28041 = cljs.core.get.call(null,inst_28039,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_28042 = inst_28019;
var state_28101__$1 = (function (){var statearr_28128 = state_28101;
(statearr_28128[(16)] = inst_28041);

(statearr_28128[(7)] = inst_28042);

(statearr_28128[(17)] = inst_28040);

return statearr_28128;
})();
var statearr_28129_28172 = state_28101__$1;
(statearr_28129_28172[(2)] = null);

(statearr_28129_28172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (9))){
var inst_28019 = (state_28101[(14)]);
var inst_28036 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28019);
var state_28101__$1 = state_28101;
var statearr_28130_28173 = state_28101__$1;
(statearr_28130_28173[(2)] = inst_28036);

(statearr_28130_28173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (5))){
var inst_28034 = (state_28101[(2)]);
var state_28101__$1 = state_28101;
if(cljs.core.truth_(inst_28034)){
var statearr_28131_28174 = state_28101__$1;
(statearr_28131_28174[(1)] = (9));

} else {
var statearr_28132_28175 = state_28101__$1;
(statearr_28132_28175[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (14))){
var inst_28042 = (state_28101[(7)]);
var inst_28049 = inst_28042.cljs$lang$protocol_mask$partition0$;
var inst_28050 = (inst_28049 & (64));
var inst_28051 = inst_28042.cljs$core$ISeq$;
var inst_28052 = (inst_28050) || (inst_28051);
var state_28101__$1 = state_28101;
if(cljs.core.truth_(inst_28052)){
var statearr_28133_28176 = state_28101__$1;
(statearr_28133_28176[(1)] = (17));

} else {
var statearr_28134_28177 = state_28101__$1;
(statearr_28134_28177[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (26))){
var inst_28069 = (state_28101[(15)]);
var inst_28075 = (state_28101[(2)]);
var inst_28076 = cljs.core.nth.call(null,inst_28075,(0),null);
var inst_28077 = cljs.core.nth.call(null,inst_28075,(1),null);
var inst_28078 = cljs.core.not_EQ_.call(null,inst_28077,inst_28069);
var state_28101__$1 = (function (){var statearr_28135 = state_28101;
(statearr_28135[(8)] = inst_28076);

return statearr_28135;
})();
if(inst_28078){
var statearr_28136_28178 = state_28101__$1;
(statearr_28136_28178[(1)] = (27));

} else {
var statearr_28137_28179 = state_28101__$1;
(statearr_28137_28179[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (16))){
var inst_28059 = (state_28101[(2)]);
var state_28101__$1 = state_28101;
if(cljs.core.truth_(inst_28059)){
var statearr_28138_28180 = state_28101__$1;
(statearr_28138_28180[(1)] = (20));

} else {
var statearr_28139_28181 = state_28101__$1;
(statearr_28139_28181[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (30))){
var inst_28093 = (state_28101[(2)]);
var inst_28042 = inst_28093;
var state_28101__$1 = (function (){var statearr_28140 = state_28101;
(statearr_28140[(7)] = inst_28042);

return statearr_28140;
})();
var statearr_28141_28182 = state_28101__$1;
(statearr_28141_28182[(2)] = null);

(statearr_28141_28182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (10))){
var inst_28019 = (state_28101[(14)]);
var state_28101__$1 = state_28101;
var statearr_28142_28183 = state_28101__$1;
(statearr_28142_28183[(2)] = inst_28019);

(statearr_28142_28183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (18))){
var state_28101__$1 = state_28101;
var statearr_28143_28184 = state_28101__$1;
(statearr_28143_28184[(2)] = false);

(statearr_28143_28184[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28102 === (8))){
var inst_28031 = (state_28101[(2)]);
var state_28101__$1 = state_28101;
var statearr_28144_28185 = state_28101__$1;
(statearr_28144_28185[(2)] = inst_28031);

(statearr_28144_28185[(1)] = (5));


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
});})(c__23388__auto__))
;
return ((function (switch__23276__auto__,c__23388__auto__){
return (function() {
var devcards$core$state_machine__23277__auto__ = null;
var devcards$core$state_machine__23277__auto____0 = (function (){
var statearr_28148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28148[(0)] = devcards$core$state_machine__23277__auto__);

(statearr_28148[(1)] = (1));

return statearr_28148;
});
var devcards$core$state_machine__23277__auto____1 = (function (state_28101){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_28101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e28149){if((e28149 instanceof Object)){
var ex__23280__auto__ = e28149;
var statearr_28150_28186 = state_28101;
(statearr_28150_28186[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28187 = state_28101;
state_28101 = G__28187;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
devcards$core$state_machine__23277__auto__ = function(state_28101){
switch(arguments.length){
case 0:
return devcards$core$state_machine__23277__auto____0.call(this);
case 1:
return devcards$core$state_machine__23277__auto____1.call(this,state_28101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__23277__auto____0;
devcards$core$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__23277__auto____1;
return devcards$core$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto__))
})();
var state__23390__auto__ = (function (){var statearr_28151 = f__23389__auto__.call(null);
(statearr_28151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto__);

return statearr_28151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto__))
);

return c__23388__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__26948__auto___28192 = {"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__26948__auto___28192);
}

var seq__28188_28193 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__28189_28194 = null;
var count__28190_28195 = (0);
var i__28191_28196 = (0);
while(true){
if((i__28191_28196 < count__28190_28195)){
var property__26949__auto___28197 = cljs.core._nth.call(null,chunk__28189_28194,i__28191_28196);
if(cljs.core.truth_((base__26948__auto___28192[property__26949__auto___28197]))){
(devcards.core.TestDevcard.prototype[property__26949__auto___28197] = (base__26948__auto___28192[property__26949__auto___28197]));
} else {
}

var G__28198 = seq__28188_28193;
var G__28199 = chunk__28189_28194;
var G__28200 = count__28190_28195;
var G__28201 = (i__28191_28196 + (1));
seq__28188_28193 = G__28198;
chunk__28189_28194 = G__28199;
count__28190_28195 = G__28200;
i__28191_28196 = G__28201;
continue;
} else {
var temp__4657__auto___28202 = cljs.core.seq.call(null,seq__28188_28193);
if(temp__4657__auto___28202){
var seq__28188_28203__$1 = temp__4657__auto___28202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28188_28203__$1)){
var c__20735__auto___28204 = cljs.core.chunk_first.call(null,seq__28188_28203__$1);
var G__28205 = cljs.core.chunk_rest.call(null,seq__28188_28203__$1);
var G__28206 = c__20735__auto___28204;
var G__28207 = cljs.core.count.call(null,c__20735__auto___28204);
var G__28208 = (0);
seq__28188_28193 = G__28205;
chunk__28189_28194 = G__28206;
count__28190_28195 = G__28207;
i__28191_28196 = G__28208;
continue;
} else {
var property__26949__auto___28209 = cljs.core.first.call(null,seq__28188_28203__$1);
if(cljs.core.truth_((base__26948__auto___28192[property__26949__auto___28209]))){
(devcards.core.TestDevcard.prototype[property__26949__auto___28209] = (base__26948__auto___28192[property__26949__auto___28209]));
} else {
}

var G__28210 = cljs.core.next.call(null,seq__28188_28203__$1);
var G__28211 = null;
var G__28212 = (0);
var G__28213 = (0);
seq__28188_28193 = G__28210;
chunk__28189_28194 = G__28211;
count__28190_28195 = G__28212;
i__28191_28196 = G__28213;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__21001__auto__ = [];
var len__20994__auto___28218 = arguments.length;
var i__20995__auto___28219 = (0);
while(true){
if((i__20995__auto___28219 < len__20994__auto___28218)){
args__21001__auto__.push((arguments[i__20995__auto___28219]));

var G__28220 = (i__20995__auto___28219 + (1));
i__20995__auto___28219 = G__28220;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((0) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__21002__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core28215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core28215 = (function (test_thunks,meta28216){
this.test_thunks = test_thunks;
this.meta28216 = meta28216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core28215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28217,meta28216__$1){
var self__ = this;
var _28217__$1 = this;
return (new devcards.core.t_devcards$core28215(self__.test_thunks,meta28216__$1));
});

devcards.core.t_devcards$core28215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28217){
var self__ = this;
var _28217__$1 = this;
return self__.meta28216;
});

devcards.core.t_devcards$core28215.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core28215.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core28215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta28216","meta28216",677085565,null)], null);
});

devcards.core.t_devcards$core28215.cljs$lang$type = true;

devcards.core.t_devcards$core28215.cljs$lang$ctorStr = "devcards.core/t_devcards$core28215";

devcards.core.t_devcards$core28215.cljs$lang$ctorPrWriter = (function (this__20530__auto__,writer__20531__auto__,opt__20532__auto__){
return cljs.core._write.call(null,writer__20531__auto__,"devcards.core/t_devcards$core28215");
});

devcards.core.__GT_t_devcards$core28215 = (function devcards$core$__GT_t_devcards$core28215(test_thunks__$1,meta28216){
return (new devcards.core.t_devcards$core28215(test_thunks__$1,meta28216));
});

}

return (new devcards.core.t_devcards$core28215(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq28214){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28214));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs28222 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28222))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs28222)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs28222))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28222)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs28224 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28224))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs28224)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs28224))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28224)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__23388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto__){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto__){
return (function (state_28254){
var state_val_28255 = (state_28254[(1)]);
if((state_val_28255 === (1))){
var inst_28245 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_28254__$1 = state_28254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28254__$1,(2),inst_28245);
} else {
if((state_val_28255 === (2))){
var inst_28247 = (state_28254[(2)]);
var inst_28248 = cljs.core.async.timeout.call(null,(100));
var state_28254__$1 = (function (){var statearr_28256 = state_28254;
(statearr_28256[(7)] = inst_28247);

return statearr_28256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28254__$1,(3),inst_28248);
} else {
if((state_val_28255 === (3))){
var inst_28250 = (state_28254[(2)]);
var inst_28251 = (function (){return ((function (inst_28250,state_val_28255,c__23388__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_28250,state_val_28255,c__23388__auto__))
})();
var inst_28252 = setTimeout(inst_28251,(0));
var state_28254__$1 = (function (){var statearr_28257 = state_28254;
(statearr_28257[(8)] = inst_28250);

return statearr_28257;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28254__$1,inst_28252);
} else {
return null;
}
}
}
});})(c__23388__auto__))
;
return ((function (switch__23276__auto__,c__23388__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__23277__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__23277__auto____0 = (function (){
var statearr_28261 = [null,null,null,null,null,null,null,null,null];
(statearr_28261[(0)] = devcards$core$mount_namespace_$_state_machine__23277__auto__);

(statearr_28261[(1)] = (1));

return statearr_28261;
});
var devcards$core$mount_namespace_$_state_machine__23277__auto____1 = (function (state_28254){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_28254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e28262){if((e28262 instanceof Object)){
var ex__23280__auto__ = e28262;
var statearr_28263_28265 = state_28254;
(statearr_28263_28265[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28266 = state_28254;
state_28254 = G__28266;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__23277__auto__ = function(state_28254){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__23277__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__23277__auto____1.call(this,state_28254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__23277__auto____0;
devcards$core$mount_namespace_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__23277__auto____1;
return devcards$core$mount_namespace_$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto__))
})();
var state__23390__auto__ = (function (){var statearr_28264 = f__23389__auto__.call(null);
(statearr_28264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto__);

return statearr_28264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto__))
);

return c__23388__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1472593626960