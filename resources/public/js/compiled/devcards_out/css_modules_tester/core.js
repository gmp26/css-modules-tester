// Compiled by ClojureScript 1.8.51 {}
goog.provide('css_modules_tester.core');
goog.require('cljs.core');
goog.require('cljs_css_modules.macro');
goog.require('rum.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
css_modules_tester.core.style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),"container--G__24393",new cljs.core.Keyword(null,"text","text",-1790561697),"text--G__24393",new cljs.core.Keyword(null,"title","title",636505583),"title--G__24393",new cljs.core.Keyword(null,"title2","title2",1875732837),"title2--G__24393"], null);

cljs_css_modules.runtime.inject_style_BANG_.call(null,cljs.core.apply.call(null,garden.core.css,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".container--G__24393",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(55)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".text--G__24393",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14),new cljs.core.Keyword(null,"color","color",1011675173),"brown"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".title--G__24393",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(80)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".title2--G__24393",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)], null)),"css-modules-tester.core","style");
css_modules_tester.core.test_component = rum.core.build_defc.call(null,(function (){
return React.createElement("div",{"className": new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css_modules_tester.core.style)},React.createElement("h1",{"className": new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(css_modules_tester.core.style)},"I am a big title"),React.createElement("h1",{"className": new cljs.core.Keyword(null,"title2","title2",1875732837).cljs$core$IFn$_invoke$arity$1(css_modules_tester.core.style)},"I am smaller title"),React.createElement("p",{"className": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(css_modules_tester.core.style)},"Here goes some random text"));
}),null,"test-component");
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css_modules_tester.core","css_modules_tester.core",619421267),new cljs.core.Keyword(null,"first-card","first-card",884452895)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"first-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,React.createElement("h1",null,"This is your first devcard!")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css_modules_tester.core","css_modules_tester.core",619421267),new cljs.core.Keyword(null,"css-modules","css-modules",1440345633)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"css-modules",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),css_modules_tester.core.test_component.call(null),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
css_modules_tester.core.main = (function css_modules_tester$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return React.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
css_modules_tester.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1472594680930