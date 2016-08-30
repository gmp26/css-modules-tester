// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs_css_modules.runtime');
goog.require('cljs.core');
goog.require('garden.core');
cljs_css_modules.runtime.injected_styles = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs_css_modules.runtime.update_style_BANG_ = (function cljs_css_modules$runtime$update_style_BANG_(element,style){
return element.innerHTML = style;
});
cljs_css_modules.runtime.create_style_element_BANG_ = (function cljs_css_modules$runtime$create_style_element_BANG_(style,id){
var head = document.head;
var element = document.createElement("style");
if(cljs.core.some_QMARK_.call(null,head)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("An head element is required in the dom to inject the style."),cljs.core.str("\n"),cljs.core.str("(some? head)")].join('')));
}

head.appendChild(element);

cljs_css_modules.runtime.update_style_BANG_.call(null,element,style);

return cljs.core.swap_BANG_.call(null,cljs_css_modules.runtime.injected_styles,cljs.core.assoc,id,element);
});
cljs_css_modules.runtime.inject_style_BANG_ = (function cljs_css_modules$runtime$inject_style_BANG_(style,ns,name){
var id = cljs.core.symbol.call(null,[cljs.core.str(ns),cljs.core.str("-"),cljs.core.str(name)].join(''));
var injected_style = id.call(null,cljs.core.deref.call(null,cljs_css_modules.runtime.injected_styles));
if(cljs.core.truth_(injected_style)){
return cljs_css_modules.runtime.update_style_BANG_.call(null,injected_style,style);
} else {
return cljs_css_modules.runtime.create_style_element_BANG_.call(null,style,id);
}
});

//# sourceMappingURL=runtime.js.map?rel=1472594477617