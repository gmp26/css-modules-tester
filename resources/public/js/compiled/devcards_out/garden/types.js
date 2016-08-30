// Compiled by ClojureScript 1.8.51 {}
goog.provide('garden.types');
goog.require('cljs.core');

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
*/
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20546__auto__,k__20547__auto__){
var self__ = this;
var this__20546__auto____$1 = this;
return cljs.core._lookup.call(null,this__20546__auto____$1,k__20547__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20548__auto__,k23854,else__20549__auto__){
var self__ = this;
var this__20548__auto____$1 = this;
var G__23856 = (((k23854 instanceof cljs.core.Keyword))?k23854.fqn:null);
switch (G__23856) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23854,else__20549__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20560__auto__,writer__20561__auto__,opts__20562__auto__){
var self__ = this;
var this__20560__auto____$1 = this;
var pr_pair__20563__auto__ = ((function (this__20560__auto____$1){
return (function (keyval__20564__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20561__auto__,cljs.core.pr_writer,""," ","",opts__20562__auto__,keyval__20564__auto__);
});})(this__20560__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20561__auto__,pr_pair__20563__auto__,"#garden.types.CSSUnit{",", ","}",opts__20562__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IIterable$ = true;

garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23853){
var self__ = this;
var G__23853__$1 = this;
return (new cljs.core.RecordIter((0),G__23853__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20544__auto__){
var self__ = this;
var this__20544__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20540__auto__){
var self__ = this;
var this__20540__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20550__auto__){
var self__ = this;
var this__20550__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20541__auto__){
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

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20542__auto__,other__20543__auto__){
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

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20555__auto__,k__20556__auto__){
var self__ = this;
var this__20555__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__20556__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20555__auto____$1),self__.__meta),k__20556__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20556__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20553__auto__,k__20554__auto__,G__23853){
var self__ = this;
var this__20553__auto____$1 = this;
var pred__23857 = cljs.core.keyword_identical_QMARK_;
var expr__23858 = k__20554__auto__;
if(cljs.core.truth_(pred__23857.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__23858))){
return (new garden.types.CSSUnit(G__23853,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23857.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__23858))){
return (new garden.types.CSSUnit(self__.unit,G__23853,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20554__auto__,G__23853),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20558__auto__){
var self__ = this;
var this__20558__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20545__auto__,G__23853){
var self__ = this;
var this__20545__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__23853,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20551__auto__,entry__20552__auto__){
var self__ = this;
var this__20551__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20552__auto__)){
return cljs.core._assoc.call(null,this__20551__auto____$1,cljs.core._nth.call(null,entry__20552__auto__,(0)),cljs.core._nth.call(null,entry__20552__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20551__auto____$1,entry__20552__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__20580__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__20580__auto__,writer__20581__auto__){
return cljs.core._write.call(null,writer__20581__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__23855){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__23855),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__23855),null,cljs.core.dissoc.call(null,G__23855,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)),null));
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
*/
garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20546__auto__,k__20547__auto__){
var self__ = this;
var this__20546__auto____$1 = this;
return cljs.core._lookup.call(null,this__20546__auto____$1,k__20547__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20548__auto__,k23862,else__20549__auto__){
var self__ = this;
var this__20548__auto____$1 = this;
var G__23864 = (((k23862 instanceof cljs.core.Keyword))?k23862.fqn:null);
switch (G__23864) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23862,else__20549__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20560__auto__,writer__20561__auto__,opts__20562__auto__){
var self__ = this;
var this__20560__auto____$1 = this;
var pr_pair__20563__auto__ = ((function (this__20560__auto____$1){
return (function (keyval__20564__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20561__auto__,cljs.core.pr_writer,""," ","",opts__20562__auto__,keyval__20564__auto__);
});})(this__20560__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20561__auto__,pr_pair__20563__auto__,"#garden.types.CSSFunction{",", ","}",opts__20562__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IIterable$ = true;

garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23861){
var self__ = this;
var G__23861__$1 = this;
return (new cljs.core.RecordIter((0),G__23861__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20544__auto__){
var self__ = this;
var this__20544__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20540__auto__){
var self__ = this;
var this__20540__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20550__auto__){
var self__ = this;
var this__20550__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20541__auto__){
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

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20542__auto__,other__20543__auto__){
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

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20555__auto__,k__20556__auto__){
var self__ = this;
var this__20555__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__20556__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20555__auto____$1),self__.__meta),k__20556__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20556__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20553__auto__,k__20554__auto__,G__23861){
var self__ = this;
var this__20553__auto____$1 = this;
var pred__23865 = cljs.core.keyword_identical_QMARK_;
var expr__23866 = k__20554__auto__;
if(cljs.core.truth_(pred__23865.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__23866))){
return (new garden.types.CSSFunction(G__23861,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23865.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__23866))){
return (new garden.types.CSSFunction(self__.function$,G__23861,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20554__auto__,G__23861),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20558__auto__){
var self__ = this;
var this__20558__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20545__auto__,G__23861){
var self__ = this;
var this__20545__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__23861,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20551__auto__,entry__20552__auto__){
var self__ = this;
var this__20551__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20552__auto__)){
return cljs.core._assoc.call(null,this__20551__auto____$1,cljs.core._nth.call(null,entry__20552__auto__,(0)),cljs.core._nth.call(null,entry__20552__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20551__auto____$1,entry__20552__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__20580__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__20580__auto__,writer__20581__auto__){
return cljs.core._write.call(null,writer__20581__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__23863){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__23863),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__23863),null,cljs.core.dissoc.call(null,G__23863,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
*/
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20546__auto__,k__20547__auto__){
var self__ = this;
var this__20546__auto____$1 = this;
return cljs.core._lookup.call(null,this__20546__auto____$1,k__20547__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20548__auto__,k23870,else__20549__auto__){
var self__ = this;
var this__20548__auto____$1 = this;
var G__23872 = (((k23870 instanceof cljs.core.Keyword))?k23870.fqn:null);
switch (G__23872) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23870,else__20549__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20560__auto__,writer__20561__auto__,opts__20562__auto__){
var self__ = this;
var this__20560__auto____$1 = this;
var pr_pair__20563__auto__ = ((function (this__20560__auto____$1){
return (function (keyval__20564__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20561__auto__,cljs.core.pr_writer,""," ","",opts__20562__auto__,keyval__20564__auto__);
});})(this__20560__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20561__auto__,pr_pair__20563__auto__,"#garden.types.CSSAtRule{",", ","}",opts__20562__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IIterable$ = true;

garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23869){
var self__ = this;
var G__23869__$1 = this;
return (new cljs.core.RecordIter((0),G__23869__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20544__auto__){
var self__ = this;
var this__20544__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20540__auto__){
var self__ = this;
var this__20540__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20550__auto__){
var self__ = this;
var this__20550__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20541__auto__){
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

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20542__auto__,other__20543__auto__){
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

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20555__auto__,k__20556__auto__){
var self__ = this;
var this__20555__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__20556__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20555__auto____$1),self__.__meta),k__20556__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20556__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20553__auto__,k__20554__auto__,G__23869){
var self__ = this;
var this__20553__auto____$1 = this;
var pred__23873 = cljs.core.keyword_identical_QMARK_;
var expr__23874 = k__20554__auto__;
if(cljs.core.truth_(pred__23873.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__23874))){
return (new garden.types.CSSAtRule(G__23869,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23873.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__23874))){
return (new garden.types.CSSAtRule(self__.identifier,G__23869,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20554__auto__,G__23869),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20558__auto__){
var self__ = this;
var this__20558__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20545__auto__,G__23869){
var self__ = this;
var this__20545__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__23869,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20551__auto__,entry__20552__auto__){
var self__ = this;
var this__20551__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20552__auto__)){
return cljs.core._assoc.call(null,this__20551__auto____$1,cljs.core._nth.call(null,entry__20552__auto__,(0)),cljs.core._nth.call(null,entry__20552__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20551__auto____$1,entry__20552__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__20580__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__20580__auto__,writer__20581__auto__){
return cljs.core._write.call(null,writer__20581__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__23871){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__23871),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__23871),null,cljs.core.dissoc.call(null,G__23871,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


//# sourceMappingURL=types.js.map?rel=1472594476262