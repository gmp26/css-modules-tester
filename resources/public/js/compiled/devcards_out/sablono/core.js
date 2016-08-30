// Compiled by ClojureScript 1.8.51 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__26642__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26641 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__26641,(0),null);
var body = cljs.core.nthnext.call(null,vec__26641,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26643__i = 0, G__26643__a = new Array(arguments.length -  0);
while (G__26643__i < G__26643__a.length) {G__26643__a[G__26643__i] = arguments[G__26643__i + 0]; ++G__26643__i;}
  args = new cljs.core.IndexedSeq(G__26643__a,0);
} 
return G__26642__delegate.call(this,args);};
G__26642.cljs$lang$maxFixedArity = 0;
G__26642.cljs$lang$applyTo = (function (arglist__26644){
var args = cljs.core.seq(arglist__26644);
return G__26642__delegate(args);
});
G__26642.cljs$core$IFn$_invoke$arity$variadic = G__26642__delegate;
return G__26642;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__20704__auto__ = (function sablono$core$update_arglists_$_iter__26649(s__26650){
return (new cljs.core.LazySeq(null,(function (){
var s__26650__$1 = s__26650;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26650__$1);
if(temp__4657__auto__){
var s__26650__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26650__$2)){
var c__20702__auto__ = cljs.core.chunk_first.call(null,s__26650__$2);
var size__20703__auto__ = cljs.core.count.call(null,c__20702__auto__);
var b__26652 = cljs.core.chunk_buffer.call(null,size__20703__auto__);
if((function (){var i__26651 = (0);
while(true){
if((i__26651 < size__20703__auto__)){
var args = cljs.core._nth.call(null,c__20702__auto__,i__26651);
cljs.core.chunk_append.call(null,b__26652,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26653 = (i__26651 + (1));
i__26651 = G__26653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26652),sablono$core$update_arglists_$_iter__26649.call(null,cljs.core.chunk_rest.call(null,s__26650__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26652),null);
}
} else {
var args = cljs.core.first.call(null,s__26650__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__26649.call(null,cljs.core.rest.call(null,s__26650__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20704__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__21001__auto__ = [];
var len__20994__auto___26659 = arguments.length;
var i__20995__auto___26660 = (0);
while(true){
if((i__20995__auto___26660 < len__20994__auto___26659)){
args__21001__auto__.push((arguments[i__20995__auto___26660]));

var G__26661 = (i__20995__auto___26660 + (1));
i__20995__auto___26660 = G__26661;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((0) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__21002__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__20704__auto__ = (function sablono$core$iter__26655(s__26656){
return (new cljs.core.LazySeq(null,(function (){
var s__26656__$1 = s__26656;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26656__$1);
if(temp__4657__auto__){
var s__26656__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26656__$2)){
var c__20702__auto__ = cljs.core.chunk_first.call(null,s__26656__$2);
var size__20703__auto__ = cljs.core.count.call(null,c__20702__auto__);
var b__26658 = cljs.core.chunk_buffer.call(null,size__20703__auto__);
if((function (){var i__26657 = (0);
while(true){
if((i__26657 < size__20703__auto__)){
var style = cljs.core._nth.call(null,c__20702__auto__,i__26657);
cljs.core.chunk_append.call(null,b__26658,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26662 = (i__26657 + (1));
i__26657 = G__26662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26658),sablono$core$iter__26655.call(null,cljs.core.chunk_rest.call(null,s__26656__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26658),null);
}
} else {
var style = cljs.core.first.call(null,s__26656__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__26655.call(null,cljs.core.rest.call(null,s__26656__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20704__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq26654){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26654));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to26663 = (function sablono$core$link_to26663(var_args){
var args__21001__auto__ = [];
var len__20994__auto___26666 = arguments.length;
var i__20995__auto___26667 = (0);
while(true){
if((i__20995__auto___26667 < len__20994__auto___26666)){
args__21001__auto__.push((arguments[i__20995__auto___26667]));

var G__26668 = (i__20995__auto___26667 + (1));
i__20995__auto___26667 = G__26668;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((1) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to26663.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21002__auto__);
});

sablono.core.link_to26663.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to26663.cljs$lang$maxFixedArity = (1);

sablono.core.link_to26663.cljs$lang$applyTo = (function (seq26664){
var G__26665 = cljs.core.first.call(null,seq26664);
var seq26664__$1 = cljs.core.next.call(null,seq26664);
return sablono.core.link_to26663.cljs$core$IFn$_invoke$arity$variadic(G__26665,seq26664__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26663);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26669 = (function sablono$core$mail_to26669(var_args){
var args__21001__auto__ = [];
var len__20994__auto___26674 = arguments.length;
var i__20995__auto___26675 = (0);
while(true){
if((i__20995__auto___26675 < len__20994__auto___26674)){
args__21001__auto__.push((arguments[i__20995__auto___26675]));

var G__26676 = (i__20995__auto___26675 + (1));
i__20995__auto___26675 = G__26676;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((1) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to26669.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21002__auto__);
});

sablono.core.mail_to26669.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26672){
var vec__26673 = p__26672;
var content = cljs.core.nth.call(null,vec__26673,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__19924__auto__ = content;
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to26669.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to26669.cljs$lang$applyTo = (function (seq26670){
var G__26671 = cljs.core.first.call(null,seq26670);
var seq26670__$1 = cljs.core.next.call(null,seq26670);
return sablono.core.mail_to26669.cljs$core$IFn$_invoke$arity$variadic(G__26671,seq26670__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26669);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26677 = (function sablono$core$unordered_list26677(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20704__auto__ = (function sablono$core$unordered_list26677_$_iter__26682(s__26683){
return (new cljs.core.LazySeq(null,(function (){
var s__26683__$1 = s__26683;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26683__$1);
if(temp__4657__auto__){
var s__26683__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26683__$2)){
var c__20702__auto__ = cljs.core.chunk_first.call(null,s__26683__$2);
var size__20703__auto__ = cljs.core.count.call(null,c__20702__auto__);
var b__26685 = cljs.core.chunk_buffer.call(null,size__20703__auto__);
if((function (){var i__26684 = (0);
while(true){
if((i__26684 < size__20703__auto__)){
var x = cljs.core._nth.call(null,c__20702__auto__,i__26684);
cljs.core.chunk_append.call(null,b__26685,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26686 = (i__26684 + (1));
i__26684 = G__26686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26685),sablono$core$unordered_list26677_$_iter__26682.call(null,cljs.core.chunk_rest.call(null,s__26683__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26685),null);
}
} else {
var x = cljs.core.first.call(null,s__26683__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26677_$_iter__26682.call(null,cljs.core.rest.call(null,s__26683__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20704__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26677);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26687 = (function sablono$core$ordered_list26687(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20704__auto__ = (function sablono$core$ordered_list26687_$_iter__26692(s__26693){
return (new cljs.core.LazySeq(null,(function (){
var s__26693__$1 = s__26693;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26693__$1);
if(temp__4657__auto__){
var s__26693__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26693__$2)){
var c__20702__auto__ = cljs.core.chunk_first.call(null,s__26693__$2);
var size__20703__auto__ = cljs.core.count.call(null,c__20702__auto__);
var b__26695 = cljs.core.chunk_buffer.call(null,size__20703__auto__);
if((function (){var i__26694 = (0);
while(true){
if((i__26694 < size__20703__auto__)){
var x = cljs.core._nth.call(null,c__20702__auto__,i__26694);
cljs.core.chunk_append.call(null,b__26695,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26696 = (i__26694 + (1));
i__26694 = G__26696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26695),sablono$core$ordered_list26687_$_iter__26692.call(null,cljs.core.chunk_rest.call(null,s__26693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26695),null);
}
} else {
var x = cljs.core.first.call(null,s__26693__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26687_$_iter__26692.call(null,cljs.core.rest.call(null,s__26693__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20704__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26687);
/**
 * Create an image element.
 */
sablono.core.image26697 = (function sablono$core$image26697(var_args){
var args26698 = [];
var len__20994__auto___26701 = arguments.length;
var i__20995__auto___26702 = (0);
while(true){
if((i__20995__auto___26702 < len__20994__auto___26701)){
args26698.push((arguments[i__20995__auto___26702]));

var G__26703 = (i__20995__auto___26702 + (1));
i__20995__auto___26702 = G__26703;
continue;
} else {
}
break;
}

var G__26700 = args26698.length;
switch (G__26700) {
case 1:
return sablono.core.image26697.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26697.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26698.length)].join('')));

}
});

sablono.core.image26697.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image26697.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image26697.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26697);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26705_SHARP_,p2__26706_SHARP_){
return [cljs.core.str(p1__26705_SHARP_),cljs.core.str("["),cljs.core.str(p2__26706_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26707_SHARP_,p2__26708_SHARP_){
return [cljs.core.str(p1__26707_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26708_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__19924__auto__ = value;
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field26709 = (function sablono$core$color_field26709(var_args){
var args26710 = [];
var len__20994__auto___26777 = arguments.length;
var i__20995__auto___26778 = (0);
while(true){
if((i__20995__auto___26778 < len__20994__auto___26777)){
args26710.push((arguments[i__20995__auto___26778]));

var G__26779 = (i__20995__auto___26778 + (1));
i__20995__auto___26778 = G__26779;
continue;
} else {
}
break;
}

var G__26712 = args26710.length;
switch (G__26712) {
case 1:
return sablono.core.color_field26709.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26709.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26710.length)].join('')));

}
});

sablono.core.color_field26709.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.color_field26709.call(null,name__26630__auto__,null);
});

sablono.core.color_field26709.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.color_field26709.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26709);

/**
 * Creates a date input field.
 */
sablono.core.date_field26713 = (function sablono$core$date_field26713(var_args){
var args26714 = [];
var len__20994__auto___26781 = arguments.length;
var i__20995__auto___26782 = (0);
while(true){
if((i__20995__auto___26782 < len__20994__auto___26781)){
args26714.push((arguments[i__20995__auto___26782]));

var G__26783 = (i__20995__auto___26782 + (1));
i__20995__auto___26782 = G__26783;
continue;
} else {
}
break;
}

var G__26716 = args26714.length;
switch (G__26716) {
case 1:
return sablono.core.date_field26713.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26713.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26714.length)].join('')));

}
});

sablono.core.date_field26713.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.date_field26713.call(null,name__26630__auto__,null);
});

sablono.core.date_field26713.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.date_field26713.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26713);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26717 = (function sablono$core$datetime_field26717(var_args){
var args26718 = [];
var len__20994__auto___26785 = arguments.length;
var i__20995__auto___26786 = (0);
while(true){
if((i__20995__auto___26786 < len__20994__auto___26785)){
args26718.push((arguments[i__20995__auto___26786]));

var G__26787 = (i__20995__auto___26786 + (1));
i__20995__auto___26786 = G__26787;
continue;
} else {
}
break;
}

var G__26720 = args26718.length;
switch (G__26720) {
case 1:
return sablono.core.datetime_field26717.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26717.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26718.length)].join('')));

}
});

sablono.core.datetime_field26717.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.datetime_field26717.call(null,name__26630__auto__,null);
});

sablono.core.datetime_field26717.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.datetime_field26717.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26717);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26721 = (function sablono$core$datetime_local_field26721(var_args){
var args26722 = [];
var len__20994__auto___26789 = arguments.length;
var i__20995__auto___26790 = (0);
while(true){
if((i__20995__auto___26790 < len__20994__auto___26789)){
args26722.push((arguments[i__20995__auto___26790]));

var G__26791 = (i__20995__auto___26790 + (1));
i__20995__auto___26790 = G__26791;
continue;
} else {
}
break;
}

var G__26724 = args26722.length;
switch (G__26724) {
case 1:
return sablono.core.datetime_local_field26721.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26721.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26722.length)].join('')));

}
});

sablono.core.datetime_local_field26721.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.datetime_local_field26721.call(null,name__26630__auto__,null);
});

sablono.core.datetime_local_field26721.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.datetime_local_field26721.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26721);

/**
 * Creates a email input field.
 */
sablono.core.email_field26725 = (function sablono$core$email_field26725(var_args){
var args26726 = [];
var len__20994__auto___26793 = arguments.length;
var i__20995__auto___26794 = (0);
while(true){
if((i__20995__auto___26794 < len__20994__auto___26793)){
args26726.push((arguments[i__20995__auto___26794]));

var G__26795 = (i__20995__auto___26794 + (1));
i__20995__auto___26794 = G__26795;
continue;
} else {
}
break;
}

var G__26728 = args26726.length;
switch (G__26728) {
case 1:
return sablono.core.email_field26725.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26725.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26726.length)].join('')));

}
});

sablono.core.email_field26725.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.email_field26725.call(null,name__26630__auto__,null);
});

sablono.core.email_field26725.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.email_field26725.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26725);

/**
 * Creates a file input field.
 */
sablono.core.file_field26729 = (function sablono$core$file_field26729(var_args){
var args26730 = [];
var len__20994__auto___26797 = arguments.length;
var i__20995__auto___26798 = (0);
while(true){
if((i__20995__auto___26798 < len__20994__auto___26797)){
args26730.push((arguments[i__20995__auto___26798]));

var G__26799 = (i__20995__auto___26798 + (1));
i__20995__auto___26798 = G__26799;
continue;
} else {
}
break;
}

var G__26732 = args26730.length;
switch (G__26732) {
case 1:
return sablono.core.file_field26729.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26729.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26730.length)].join('')));

}
});

sablono.core.file_field26729.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.file_field26729.call(null,name__26630__auto__,null);
});

sablono.core.file_field26729.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.file_field26729.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26729);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26733 = (function sablono$core$hidden_field26733(var_args){
var args26734 = [];
var len__20994__auto___26801 = arguments.length;
var i__20995__auto___26802 = (0);
while(true){
if((i__20995__auto___26802 < len__20994__auto___26801)){
args26734.push((arguments[i__20995__auto___26802]));

var G__26803 = (i__20995__auto___26802 + (1));
i__20995__auto___26802 = G__26803;
continue;
} else {
}
break;
}

var G__26736 = args26734.length;
switch (G__26736) {
case 1:
return sablono.core.hidden_field26733.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26733.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26734.length)].join('')));

}
});

sablono.core.hidden_field26733.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.hidden_field26733.call(null,name__26630__auto__,null);
});

sablono.core.hidden_field26733.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.hidden_field26733.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26733);

/**
 * Creates a month input field.
 */
sablono.core.month_field26737 = (function sablono$core$month_field26737(var_args){
var args26738 = [];
var len__20994__auto___26805 = arguments.length;
var i__20995__auto___26806 = (0);
while(true){
if((i__20995__auto___26806 < len__20994__auto___26805)){
args26738.push((arguments[i__20995__auto___26806]));

var G__26807 = (i__20995__auto___26806 + (1));
i__20995__auto___26806 = G__26807;
continue;
} else {
}
break;
}

var G__26740 = args26738.length;
switch (G__26740) {
case 1:
return sablono.core.month_field26737.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26737.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26738.length)].join('')));

}
});

sablono.core.month_field26737.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.month_field26737.call(null,name__26630__auto__,null);
});

sablono.core.month_field26737.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.month_field26737.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26737);

/**
 * Creates a number input field.
 */
sablono.core.number_field26741 = (function sablono$core$number_field26741(var_args){
var args26742 = [];
var len__20994__auto___26809 = arguments.length;
var i__20995__auto___26810 = (0);
while(true){
if((i__20995__auto___26810 < len__20994__auto___26809)){
args26742.push((arguments[i__20995__auto___26810]));

var G__26811 = (i__20995__auto___26810 + (1));
i__20995__auto___26810 = G__26811;
continue;
} else {
}
break;
}

var G__26744 = args26742.length;
switch (G__26744) {
case 1:
return sablono.core.number_field26741.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26741.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26742.length)].join('')));

}
});

sablono.core.number_field26741.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.number_field26741.call(null,name__26630__auto__,null);
});

sablono.core.number_field26741.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.number_field26741.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26741);

/**
 * Creates a password input field.
 */
sablono.core.password_field26745 = (function sablono$core$password_field26745(var_args){
var args26746 = [];
var len__20994__auto___26813 = arguments.length;
var i__20995__auto___26814 = (0);
while(true){
if((i__20995__auto___26814 < len__20994__auto___26813)){
args26746.push((arguments[i__20995__auto___26814]));

var G__26815 = (i__20995__auto___26814 + (1));
i__20995__auto___26814 = G__26815;
continue;
} else {
}
break;
}

var G__26748 = args26746.length;
switch (G__26748) {
case 1:
return sablono.core.password_field26745.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26745.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26746.length)].join('')));

}
});

sablono.core.password_field26745.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.password_field26745.call(null,name__26630__auto__,null);
});

sablono.core.password_field26745.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.password_field26745.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26745);

/**
 * Creates a range input field.
 */
sablono.core.range_field26749 = (function sablono$core$range_field26749(var_args){
var args26750 = [];
var len__20994__auto___26817 = arguments.length;
var i__20995__auto___26818 = (0);
while(true){
if((i__20995__auto___26818 < len__20994__auto___26817)){
args26750.push((arguments[i__20995__auto___26818]));

var G__26819 = (i__20995__auto___26818 + (1));
i__20995__auto___26818 = G__26819;
continue;
} else {
}
break;
}

var G__26752 = args26750.length;
switch (G__26752) {
case 1:
return sablono.core.range_field26749.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26749.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26750.length)].join('')));

}
});

sablono.core.range_field26749.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.range_field26749.call(null,name__26630__auto__,null);
});

sablono.core.range_field26749.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.range_field26749.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26749);

/**
 * Creates a search input field.
 */
sablono.core.search_field26753 = (function sablono$core$search_field26753(var_args){
var args26754 = [];
var len__20994__auto___26821 = arguments.length;
var i__20995__auto___26822 = (0);
while(true){
if((i__20995__auto___26822 < len__20994__auto___26821)){
args26754.push((arguments[i__20995__auto___26822]));

var G__26823 = (i__20995__auto___26822 + (1));
i__20995__auto___26822 = G__26823;
continue;
} else {
}
break;
}

var G__26756 = args26754.length;
switch (G__26756) {
case 1:
return sablono.core.search_field26753.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26753.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26754.length)].join('')));

}
});

sablono.core.search_field26753.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.search_field26753.call(null,name__26630__auto__,null);
});

sablono.core.search_field26753.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.search_field26753.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26753);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26757 = (function sablono$core$tel_field26757(var_args){
var args26758 = [];
var len__20994__auto___26825 = arguments.length;
var i__20995__auto___26826 = (0);
while(true){
if((i__20995__auto___26826 < len__20994__auto___26825)){
args26758.push((arguments[i__20995__auto___26826]));

var G__26827 = (i__20995__auto___26826 + (1));
i__20995__auto___26826 = G__26827;
continue;
} else {
}
break;
}

var G__26760 = args26758.length;
switch (G__26760) {
case 1:
return sablono.core.tel_field26757.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26757.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26758.length)].join('')));

}
});

sablono.core.tel_field26757.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.tel_field26757.call(null,name__26630__auto__,null);
});

sablono.core.tel_field26757.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.tel_field26757.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26757);

/**
 * Creates a text input field.
 */
sablono.core.text_field26761 = (function sablono$core$text_field26761(var_args){
var args26762 = [];
var len__20994__auto___26829 = arguments.length;
var i__20995__auto___26830 = (0);
while(true){
if((i__20995__auto___26830 < len__20994__auto___26829)){
args26762.push((arguments[i__20995__auto___26830]));

var G__26831 = (i__20995__auto___26830 + (1));
i__20995__auto___26830 = G__26831;
continue;
} else {
}
break;
}

var G__26764 = args26762.length;
switch (G__26764) {
case 1:
return sablono.core.text_field26761.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26761.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26762.length)].join('')));

}
});

sablono.core.text_field26761.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.text_field26761.call(null,name__26630__auto__,null);
});

sablono.core.text_field26761.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.text_field26761.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26761);

/**
 * Creates a time input field.
 */
sablono.core.time_field26765 = (function sablono$core$time_field26765(var_args){
var args26766 = [];
var len__20994__auto___26833 = arguments.length;
var i__20995__auto___26834 = (0);
while(true){
if((i__20995__auto___26834 < len__20994__auto___26833)){
args26766.push((arguments[i__20995__auto___26834]));

var G__26835 = (i__20995__auto___26834 + (1));
i__20995__auto___26834 = G__26835;
continue;
} else {
}
break;
}

var G__26768 = args26766.length;
switch (G__26768) {
case 1:
return sablono.core.time_field26765.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26765.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26766.length)].join('')));

}
});

sablono.core.time_field26765.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.time_field26765.call(null,name__26630__auto__,null);
});

sablono.core.time_field26765.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.time_field26765.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26765);

/**
 * Creates a url input field.
 */
sablono.core.url_field26769 = (function sablono$core$url_field26769(var_args){
var args26770 = [];
var len__20994__auto___26837 = arguments.length;
var i__20995__auto___26838 = (0);
while(true){
if((i__20995__auto___26838 < len__20994__auto___26837)){
args26770.push((arguments[i__20995__auto___26838]));

var G__26839 = (i__20995__auto___26838 + (1));
i__20995__auto___26838 = G__26839;
continue;
} else {
}
break;
}

var G__26772 = args26770.length;
switch (G__26772) {
case 1:
return sablono.core.url_field26769.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26769.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26770.length)].join('')));

}
});

sablono.core.url_field26769.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.url_field26769.call(null,name__26630__auto__,null);
});

sablono.core.url_field26769.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.url_field26769.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26769);

/**
 * Creates a week input field.
 */
sablono.core.week_field26773 = (function sablono$core$week_field26773(var_args){
var args26774 = [];
var len__20994__auto___26841 = arguments.length;
var i__20995__auto___26842 = (0);
while(true){
if((i__20995__auto___26842 < len__20994__auto___26841)){
args26774.push((arguments[i__20995__auto___26842]));

var G__26843 = (i__20995__auto___26842 + (1));
i__20995__auto___26842 = G__26843;
continue;
} else {
}
break;
}

var G__26776 = args26774.length;
switch (G__26776) {
case 1:
return sablono.core.week_field26773.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26773.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26774.length)].join('')));

}
});

sablono.core.week_field26773.cljs$core$IFn$_invoke$arity$1 = (function (name__26630__auto__){
return sablono.core.week_field26773.call(null,name__26630__auto__,null);
});

sablono.core.week_field26773.cljs$core$IFn$_invoke$arity$2 = (function (name__26630__auto__,value__26631__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__26630__auto__,value__26631__auto__);
});

sablono.core.week_field26773.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26773);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26845 = (function sablono$core$check_box26845(var_args){
var args26846 = [];
var len__20994__auto___26849 = arguments.length;
var i__20995__auto___26850 = (0);
while(true){
if((i__20995__auto___26850 < len__20994__auto___26849)){
args26846.push((arguments[i__20995__auto___26850]));

var G__26851 = (i__20995__auto___26850 + (1));
i__20995__auto___26850 = G__26851;
continue;
} else {
}
break;
}

var G__26848 = args26846.length;
switch (G__26848) {
case 1:
return sablono.core.check_box26845.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26845.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26845.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26846.length)].join('')));

}
});

sablono.core.check_box26845.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26845.call(null,name,null);
});

sablono.core.check_box26845.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26845.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26845.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__19924__auto__ = value;
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26845.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26845);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26853 = (function sablono$core$radio_button26853(var_args){
var args26854 = [];
var len__20994__auto___26857 = arguments.length;
var i__20995__auto___26858 = (0);
while(true){
if((i__20995__auto___26858 < len__20994__auto___26857)){
args26854.push((arguments[i__20995__auto___26858]));

var G__26859 = (i__20995__auto___26858 + (1));
i__20995__auto___26858 = G__26859;
continue;
} else {
}
break;
}

var G__26856 = args26854.length;
switch (G__26856) {
case 1:
return sablono.core.radio_button26853.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26853.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26853.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26854.length)].join('')));

}
});

sablono.core.radio_button26853.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26853.call(null,group,null);
});

sablono.core.radio_button26853.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26853.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26853.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__19924__auto__ = value;
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26853.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26853);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26861 = (function sablono$core$select_options26861(coll){
var iter__20704__auto__ = (function sablono$core$select_options26861_$_iter__26870(s__26871){
return (new cljs.core.LazySeq(null,(function (){
var s__26871__$1 = s__26871;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26871__$1);
if(temp__4657__auto__){
var s__26871__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26871__$2)){
var c__20702__auto__ = cljs.core.chunk_first.call(null,s__26871__$2);
var size__20703__auto__ = cljs.core.count.call(null,c__20702__auto__);
var b__26873 = cljs.core.chunk_buffer.call(null,size__20703__auto__);
if((function (){var i__26872 = (0);
while(true){
if((i__26872 < size__20703__auto__)){
var x = cljs.core._nth.call(null,c__20702__auto__,i__26872);
cljs.core.chunk_append.call(null,b__26873,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26876 = x;
var text = cljs.core.nth.call(null,vec__26876,(0),null);
var val = cljs.core.nth.call(null,vec__26876,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26876,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26861.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26878 = (i__26872 + (1));
i__26872 = G__26878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26873),sablono$core$select_options26861_$_iter__26870.call(null,cljs.core.chunk_rest.call(null,s__26871__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26873),null);
}
} else {
var x = cljs.core.first.call(null,s__26871__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26877 = x;
var text = cljs.core.nth.call(null,vec__26877,(0),null);
var val = cljs.core.nth.call(null,vec__26877,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26877,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26861.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26861_$_iter__26870.call(null,cljs.core.rest.call(null,s__26871__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20704__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26861);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26879 = (function sablono$core$drop_down26879(var_args){
var args26880 = [];
var len__20994__auto___26883 = arguments.length;
var i__20995__auto___26884 = (0);
while(true){
if((i__20995__auto___26884 < len__20994__auto___26883)){
args26880.push((arguments[i__20995__auto___26884]));

var G__26885 = (i__20995__auto___26884 + (1));
i__20995__auto___26884 = G__26885;
continue;
} else {
}
break;
}

var G__26882 = args26880.length;
switch (G__26882) {
case 2:
return sablono.core.drop_down26879.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26879.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26880.length)].join('')));

}
});

sablono.core.drop_down26879.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26879.call(null,name,options,null);
});

sablono.core.drop_down26879.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26879.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26879);
/**
 * Creates a text area element.
 */
sablono.core.text_area26887 = (function sablono$core$text_area26887(var_args){
var args26888 = [];
var len__20994__auto___26891 = arguments.length;
var i__20995__auto___26892 = (0);
while(true){
if((i__20995__auto___26892 < len__20994__auto___26891)){
args26888.push((arguments[i__20995__auto___26892]));

var G__26893 = (i__20995__auto___26892 + (1));
i__20995__auto___26892 = G__26893;
continue;
} else {
}
break;
}

var G__26890 = args26888.length;
switch (G__26890) {
case 1:
return sablono.core.text_area26887.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26887.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26888.length)].join('')));

}
});

sablono.core.text_area26887.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26887.call(null,name,null);
});

sablono.core.text_area26887.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__19924__auto__ = value;
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area26887.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26887);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26895 = (function sablono$core$label26895(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26895);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26896 = (function sablono$core$submit_button26896(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26896);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26897 = (function sablono$core$reset_button26897(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26897);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26898 = (function sablono$core$form_to26898(var_args){
var args__21001__auto__ = [];
var len__20994__auto___26903 = arguments.length;
var i__20995__auto___26904 = (0);
while(true){
if((i__20995__auto___26904 < len__20994__auto___26903)){
args__21001__auto__.push((arguments[i__20995__auto___26904]));

var G__26905 = (i__20995__auto___26904 + (1));
i__20995__auto___26904 = G__26905;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((1) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26898.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21002__auto__);
});

sablono.core.form_to26898.cljs$core$IFn$_invoke$arity$variadic = (function (p__26901,body){
var vec__26902 = p__26901;
var method = cljs.core.nth.call(null,vec__26902,(0),null);
var action = cljs.core.nth.call(null,vec__26902,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26898.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26898.cljs$lang$applyTo = (function (seq26899){
var G__26900 = cljs.core.first.call(null,seq26899);
var seq26899__$1 = cljs.core.next.call(null,seq26899);
return sablono.core.form_to26898.cljs$core$IFn$_invoke$arity$variadic(G__26900,seq26899__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26898);

//# sourceMappingURL=core.js.map?rel=1472593625880