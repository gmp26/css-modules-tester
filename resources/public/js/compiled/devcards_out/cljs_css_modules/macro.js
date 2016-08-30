// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs_css_modules.macro');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('cljs_css_modules.runtime');
cljs_css_modules.macro.selectors_to_localise = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"class",new cljs.core.Keyword(null,"regexp","regexp",-541372782),/\.([^#.:\[\s]+)(.*)/,new cljs.core.Keyword(null,"localise-fn","localise-fn",-375044382),(function (p1__25101_SHARP_){
return [cljs.core.str(".$1"),cljs.core.str("--"),cljs.core.str(p1__25101_SHARP_),cljs.core.str("$2")].join('');
}),new cljs.core.Keyword(null,"name-template","name-template",1677383261),"$1",new cljs.core.Keyword(null,"value-template","value-template",10903298),"$1"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"keyframe",new cljs.core.Keyword(null,"regexp","regexp",-541372782),/@keyframes (.+)/,new cljs.core.Keyword(null,"localise-fn","localise-fn",-375044382),(function (p1__25102_SHARP_){
return [cljs.core.str("@keyframes $1--"),cljs.core.str(p1__25102_SHARP_)].join('');
}),new cljs.core.Keyword(null,"name-template","name-template",1677383261),"$1",new cljs.core.Keyword(null,"value-template","value-template",10903298),"$1"], null)], null);
cljs_css_modules.macro.should_be_localised = (function cljs_css_modules$macro$should_be_localised(selector){
return cljs.core.some.call(null,(function (selector_object){
if(cljs.core.truth_(cljs.core.re_matches.call(null,new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(selector_object),selector))){
return selector_object;
} else {
return false;
}
}),cljs_css_modules.macro.selectors_to_localise);
});
cljs_css_modules.macro.localise_selector = (function cljs_css_modules$macro$localise_selector(id,selector,p__25103){
var map__25106 = p__25103;
var map__25106__$1 = ((((!((map__25106 == null)))?((((map__25106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25106):map__25106);
var regexp = cljs.core.get.call(null,map__25106__$1,new cljs.core.Keyword(null,"regexp","regexp",-541372782));
var localise_fn = cljs.core.get.call(null,map__25106__$1,new cljs.core.Keyword(null,"localise-fn","localise-fn",-375044382));
return clojure.string.replace.call(null,selector,regexp,localise_fn.call(null,id));
});
/**
 * Return the key to use to retrieve the actual selector value
 */
cljs_css_modules.macro.get_selector_key = (function cljs_css_modules$macro$get_selector_key(selector,p__25108){
var map__25111 = p__25108;
var map__25111__$1 = ((((!((map__25111 == null)))?((((map__25111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25111):map__25111);
var regexp = cljs.core.get.call(null,map__25111__$1,new cljs.core.Keyword(null,"regexp","regexp",-541372782));
var name_template = cljs.core.get.call(null,map__25111__$1,new cljs.core.Keyword(null,"name-template","name-template",1677383261));
return cljs.core.keyword.call(null,clojure.string.replace.call(null,selector,regexp,name_template));
});
/**
 * Return the actual selector value
 */
cljs_css_modules.macro.get_selector_value = (function cljs_css_modules$macro$get_selector_value(selector,p__25113){
var map__25116 = p__25113;
var map__25116__$1 = ((((!((map__25116 == null)))?((((map__25116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25116):map__25116);
var regexp = cljs.core.get.call(null,map__25116__$1,new cljs.core.Keyword(null,"regexp","regexp",-541372782));
var value_template = cljs.core.get.call(null,map__25116__$1,new cljs.core.Keyword(null,"value-template","value-template",10903298));
return cljs.core.name.call(null,clojure.string.replace.call(null,selector,regexp,value_template));
});
cljs_css_modules.macro.process_style = (function cljs_css_modules$macro$process_style(id,style){
var rules = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.rest.call(null,style));
var s = cljs.core.name.call(null,cljs.core.first.call(null,style));
var should_be_localised = cljs_css_modules.macro.should_be_localised.call(null,s);
if(cljs.core.truth_(should_be_localised)){
var selector_object = should_be_localised;
var localised_selector = cljs_css_modules.macro.localise_selector.call(null,id,s,selector_object);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"localised","localised",-1733242051),true,new cljs.core.Keyword(null,"original-selector","original-selector",824398684),s,new cljs.core.Keyword(null,"localised-selector","localised-selector",359532455),localised_selector,new cljs.core.Keyword(null,"style-object-key","style-object-key",114232113),cljs_css_modules.macro.get_selector_key.call(null,s,selector_object),new cljs.core.Keyword(null,"style-object-value","style-object-value",1882769999),cljs_css_modules.macro.get_selector_value.call(null,localised_selector,selector_object),new cljs.core.Keyword(null,"garden-style","garden-style",334433186),style], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"localised","localised",-1733242051),false,new cljs.core.Keyword(null,"garden-style","garden-style",334433186),style], null);
}
});
cljs_css_modules.macro.create_garden_style = (function cljs_css_modules$macro$create_garden_style(item){
if(cljs.core.truth_(new cljs.core.Keyword(null,"localised","localised",-1733242051).cljs$core$IFn$_invoke$arity$1(item))){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"localised-selector","localised-selector",359532455).cljs$core$IFn$_invoke$arity$1(item),cljs.core.rest.call(null,new cljs.core.Keyword(null,"garden-style","garden-style",334433186).cljs$core$IFn$_invoke$arity$1(item))));
} else {
return new cljs.core.Keyword(null,"garden-style","garden-style",334433186).cljs$core$IFn$_invoke$arity$1(item);
}
});
cljs_css_modules.macro.create_map = (function cljs_css_modules$macro$create_map(item){
if(cljs.core.truth_(new cljs.core.Keyword(null,"localised","localised",-1733242051).cljs$core$IFn$_invoke$arity$1(item))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style-object-key","style-object-key",114232113).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"style-object-value","style-object-value",1882769999).cljs$core$IFn$_invoke$arity$1(item)], null);
} else {
return null;
}
});
cljs_css_modules.macro.defstyle = (function cljs_css_modules$macro$defstyle(_AMPERSAND_form,_AMPERSAND_env,style_id,style){
var inject_style_fn = cljs.core.symbol.call(null,"cljs-css-modules.runtime","inject-style!");
var id = cljs.core.gensym.call(null);
var processed_style = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs_css_modules.macro.process_style,id),style));
var style__$1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs_css_modules.macro.create_garden_style,processed_style));
var map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs_css_modules.macro.create_map,processed_style));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20758__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__20758__auto__ = style_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto__);
})(),(function (){var x__20758__auto__ = map;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto__);
})(),(function (){var x__20758__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20758__auto__ = inject_style_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto__);
})(),(function (){var x__20758__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("garden.core","css","garden.core/css",1972885418,null)),(function (){var x__20758__auto__ = style__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto__);
})(),(function (){var x__20758__auto__ = [cljs.core.str(cljs.core._STAR_ns_STAR_)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto__);
})(),(function (){var x__20758__auto__ = cljs.core.name.call(null,style_id);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20758__auto__);
})())));
});

cljs_css_modules.macro.defstyle.cljs$lang$macro = true;

//# sourceMappingURL=macro.js.map?rel=1472594477703