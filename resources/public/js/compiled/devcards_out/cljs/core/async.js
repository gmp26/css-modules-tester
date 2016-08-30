// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23433 = [];
var len__20994__auto___23439 = arguments.length;
var i__20995__auto___23440 = (0);
while(true){
if((i__20995__auto___23440 < len__20994__auto___23439)){
args23433.push((arguments[i__20995__auto___23440]));

var G__23441 = (i__20995__auto___23440 + (1));
i__20995__auto___23440 = G__23441;
continue;
} else {
}
break;
}

var G__23435 = args23433.length;
switch (G__23435) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23433.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23436 = (function (f,blockable,meta23437){
this.f = f;
this.blockable = blockable;
this.meta23437 = meta23437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23438,meta23437__$1){
var self__ = this;
var _23438__$1 = this;
return (new cljs.core.async.t_cljs$core$async23436(self__.f,self__.blockable,meta23437__$1));
});

cljs.core.async.t_cljs$core$async23436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23438){
var self__ = this;
var _23438__$1 = this;
return self__.meta23437;
});

cljs.core.async.t_cljs$core$async23436.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23436.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23437","meta23437",-825634882,null)], null);
});

cljs.core.async.t_cljs$core$async23436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23436";

cljs.core.async.t_cljs$core$async23436.cljs$lang$ctorPrWriter = (function (this__20530__auto__,writer__20531__auto__,opt__20532__auto__){
return cljs.core._write.call(null,writer__20531__auto__,"cljs.core.async/t_cljs$core$async23436");
});

cljs.core.async.__GT_t_cljs$core$async23436 = (function cljs$core$async$__GT_t_cljs$core$async23436(f__$1,blockable__$1,meta23437){
return (new cljs.core.async.t_cljs$core$async23436(f__$1,blockable__$1,meta23437));
});

}

return (new cljs.core.async.t_cljs$core$async23436(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23445 = [];
var len__20994__auto___23448 = arguments.length;
var i__20995__auto___23449 = (0);
while(true){
if((i__20995__auto___23449 < len__20994__auto___23448)){
args23445.push((arguments[i__20995__auto___23449]));

var G__23450 = (i__20995__auto___23449 + (1));
i__20995__auto___23449 = G__23450;
continue;
} else {
}
break;
}

var G__23447 = args23445.length;
switch (G__23447) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23445.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23452 = [];
var len__20994__auto___23455 = arguments.length;
var i__20995__auto___23456 = (0);
while(true){
if((i__20995__auto___23456 < len__20994__auto___23455)){
args23452.push((arguments[i__20995__auto___23456]));

var G__23457 = (i__20995__auto___23456 + (1));
i__20995__auto___23456 = G__23457;
continue;
} else {
}
break;
}

var G__23454 = args23452.length;
switch (G__23454) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23452.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23459 = [];
var len__20994__auto___23462 = arguments.length;
var i__20995__auto___23463 = (0);
while(true){
if((i__20995__auto___23463 < len__20994__auto___23462)){
args23459.push((arguments[i__20995__auto___23463]));

var G__23464 = (i__20995__auto___23463 + (1));
i__20995__auto___23463 = G__23464;
continue;
} else {
}
break;
}

var G__23461 = args23459.length;
switch (G__23461) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23459.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23466 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23466);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23466,ret){
return (function (){
return fn1.call(null,val_23466);
});})(val_23466,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23467 = [];
var len__20994__auto___23470 = arguments.length;
var i__20995__auto___23471 = (0);
while(true){
if((i__20995__auto___23471 < len__20994__auto___23470)){
args23467.push((arguments[i__20995__auto___23471]));

var G__23472 = (i__20995__auto___23471 + (1));
i__20995__auto___23471 = G__23472;
continue;
} else {
}
break;
}

var G__23469 = args23467.length;
switch (G__23469) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23467.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20839__auto___23474 = n;
var x_23475 = (0);
while(true){
if((x_23475 < n__20839__auto___23474)){
(a[x_23475] = (0));

var G__23476 = (x_23475 + (1));
x_23475 = G__23476;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23477 = (i + (1));
i = G__23477;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23481 = (function (alt_flag,flag,meta23482){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23482 = meta23482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23483,meta23482__$1){
var self__ = this;
var _23483__$1 = this;
return (new cljs.core.async.t_cljs$core$async23481(self__.alt_flag,self__.flag,meta23482__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23483){
var self__ = this;
var _23483__$1 = this;
return self__.meta23482;
});})(flag))
;

cljs.core.async.t_cljs$core$async23481.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23481.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23482","meta23482",-377958166,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23481";

cljs.core.async.t_cljs$core$async23481.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20530__auto__,writer__20531__auto__,opt__20532__auto__){
return cljs.core._write.call(null,writer__20531__auto__,"cljs.core.async/t_cljs$core$async23481");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23481 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23481(alt_flag__$1,flag__$1,meta23482){
return (new cljs.core.async.t_cljs$core$async23481(alt_flag__$1,flag__$1,meta23482));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23481(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23487 = (function (alt_handler,flag,cb,meta23488){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23488 = meta23488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23489,meta23488__$1){
var self__ = this;
var _23489__$1 = this;
return (new cljs.core.async.t_cljs$core$async23487(self__.alt_handler,self__.flag,self__.cb,meta23488__$1));
});

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23489){
var self__ = this;
var _23489__$1 = this;
return self__.meta23488;
});

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23487.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23488","meta23488",-1571518593,null)], null);
});

cljs.core.async.t_cljs$core$async23487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23487";

cljs.core.async.t_cljs$core$async23487.cljs$lang$ctorPrWriter = (function (this__20530__auto__,writer__20531__auto__,opt__20532__auto__){
return cljs.core._write.call(null,writer__20531__auto__,"cljs.core.async/t_cljs$core$async23487");
});

cljs.core.async.__GT_t_cljs$core$async23487 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23487(alt_handler__$1,flag__$1,cb__$1,meta23488){
return (new cljs.core.async.t_cljs$core$async23487(alt_handler__$1,flag__$1,cb__$1,meta23488));
});

}

return (new cljs.core.async.t_cljs$core$async23487(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23490_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23490_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23491_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23491_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19924__auto__ = wport;
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23492 = (i + (1));
i = G__23492;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19924__auto__ = ret;
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__19912__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19912__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19912__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21001__auto__ = [];
var len__20994__auto___23498 = arguments.length;
var i__20995__auto___23499 = (0);
while(true){
if((i__20995__auto___23499 < len__20994__auto___23498)){
args__21001__auto__.push((arguments[i__20995__auto___23499]));

var G__23500 = (i__20995__auto___23499 + (1));
i__20995__auto___23499 = G__23500;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((1) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21002__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23495){
var map__23496 = p__23495;
var map__23496__$1 = ((((!((map__23496 == null)))?((((map__23496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23496):map__23496);
var opts = map__23496__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23493){
var G__23494 = cljs.core.first.call(null,seq23493);
var seq23493__$1 = cljs.core.next.call(null,seq23493);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23494,seq23493__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23501 = [];
var len__20994__auto___23551 = arguments.length;
var i__20995__auto___23552 = (0);
while(true){
if((i__20995__auto___23552 < len__20994__auto___23551)){
args23501.push((arguments[i__20995__auto___23552]));

var G__23553 = (i__20995__auto___23552 + (1));
i__20995__auto___23552 = G__23553;
continue;
} else {
}
break;
}

var G__23503 = args23501.length;
switch (G__23503) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23501.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23388__auto___23555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___23555){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___23555){
return (function (state_23527){
var state_val_23528 = (state_23527[(1)]);
if((state_val_23528 === (7))){
var inst_23523 = (state_23527[(2)]);
var state_23527__$1 = state_23527;
var statearr_23529_23556 = state_23527__$1;
(statearr_23529_23556[(2)] = inst_23523);

(statearr_23529_23556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (1))){
var state_23527__$1 = state_23527;
var statearr_23530_23557 = state_23527__$1;
(statearr_23530_23557[(2)] = null);

(statearr_23530_23557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (4))){
var inst_23506 = (state_23527[(7)]);
var inst_23506__$1 = (state_23527[(2)]);
var inst_23507 = (inst_23506__$1 == null);
var state_23527__$1 = (function (){var statearr_23531 = state_23527;
(statearr_23531[(7)] = inst_23506__$1);

return statearr_23531;
})();
if(cljs.core.truth_(inst_23507)){
var statearr_23532_23558 = state_23527__$1;
(statearr_23532_23558[(1)] = (5));

} else {
var statearr_23533_23559 = state_23527__$1;
(statearr_23533_23559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (13))){
var state_23527__$1 = state_23527;
var statearr_23534_23560 = state_23527__$1;
(statearr_23534_23560[(2)] = null);

(statearr_23534_23560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (6))){
var inst_23506 = (state_23527[(7)]);
var state_23527__$1 = state_23527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23527__$1,(11),to,inst_23506);
} else {
if((state_val_23528 === (3))){
var inst_23525 = (state_23527[(2)]);
var state_23527__$1 = state_23527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23527__$1,inst_23525);
} else {
if((state_val_23528 === (12))){
var state_23527__$1 = state_23527;
var statearr_23535_23561 = state_23527__$1;
(statearr_23535_23561[(2)] = null);

(statearr_23535_23561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (2))){
var state_23527__$1 = state_23527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23527__$1,(4),from);
} else {
if((state_val_23528 === (11))){
var inst_23516 = (state_23527[(2)]);
var state_23527__$1 = state_23527;
if(cljs.core.truth_(inst_23516)){
var statearr_23536_23562 = state_23527__$1;
(statearr_23536_23562[(1)] = (12));

} else {
var statearr_23537_23563 = state_23527__$1;
(statearr_23537_23563[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (9))){
var state_23527__$1 = state_23527;
var statearr_23538_23564 = state_23527__$1;
(statearr_23538_23564[(2)] = null);

(statearr_23538_23564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (5))){
var state_23527__$1 = state_23527;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23539_23565 = state_23527__$1;
(statearr_23539_23565[(1)] = (8));

} else {
var statearr_23540_23566 = state_23527__$1;
(statearr_23540_23566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (14))){
var inst_23521 = (state_23527[(2)]);
var state_23527__$1 = state_23527;
var statearr_23541_23567 = state_23527__$1;
(statearr_23541_23567[(2)] = inst_23521);

(statearr_23541_23567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (10))){
var inst_23513 = (state_23527[(2)]);
var state_23527__$1 = state_23527;
var statearr_23542_23568 = state_23527__$1;
(statearr_23542_23568[(2)] = inst_23513);

(statearr_23542_23568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (8))){
var inst_23510 = cljs.core.async.close_BANG_.call(null,to);
var state_23527__$1 = state_23527;
var statearr_23543_23569 = state_23527__$1;
(statearr_23543_23569[(2)] = inst_23510);

(statearr_23543_23569[(1)] = (10));


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
});})(c__23388__auto___23555))
;
return ((function (switch__23276__auto__,c__23388__auto___23555){
return (function() {
var cljs$core$async$state_machine__23277__auto__ = null;
var cljs$core$async$state_machine__23277__auto____0 = (function (){
var statearr_23547 = [null,null,null,null,null,null,null,null];
(statearr_23547[(0)] = cljs$core$async$state_machine__23277__auto__);

(statearr_23547[(1)] = (1));

return statearr_23547;
});
var cljs$core$async$state_machine__23277__auto____1 = (function (state_23527){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_23527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e23548){if((e23548 instanceof Object)){
var ex__23280__auto__ = e23548;
var statearr_23549_23570 = state_23527;
(statearr_23549_23570[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23571 = state_23527;
state_23527 = G__23571;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$state_machine__23277__auto__ = function(state_23527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23277__auto____1.call(this,state_23527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23277__auto____0;
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23277__auto____1;
return cljs$core$async$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___23555))
})();
var state__23390__auto__ = (function (){var statearr_23550 = f__23389__auto__.call(null);
(statearr_23550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___23555);

return statearr_23550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___23555))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23755){
var vec__23756 = p__23755;
var v = cljs.core.nth.call(null,vec__23756,(0),null);
var p = cljs.core.nth.call(null,vec__23756,(1),null);
var job = vec__23756;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23388__auto___23938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___23938,res,vec__23756,v,p,job,jobs,results){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___23938,res,vec__23756,v,p,job,jobs,results){
return (function (state_23761){
var state_val_23762 = (state_23761[(1)]);
if((state_val_23762 === (1))){
var state_23761__$1 = state_23761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23761__$1,(2),res,v);
} else {
if((state_val_23762 === (2))){
var inst_23758 = (state_23761[(2)]);
var inst_23759 = cljs.core.async.close_BANG_.call(null,res);
var state_23761__$1 = (function (){var statearr_23763 = state_23761;
(statearr_23763[(7)] = inst_23758);

return statearr_23763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23761__$1,inst_23759);
} else {
return null;
}
}
});})(c__23388__auto___23938,res,vec__23756,v,p,job,jobs,results))
;
return ((function (switch__23276__auto__,c__23388__auto___23938,res,vec__23756,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0 = (function (){
var statearr_23767 = [null,null,null,null,null,null,null,null];
(statearr_23767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__);

(statearr_23767[(1)] = (1));

return statearr_23767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1 = (function (state_23761){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_23761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e23768){if((e23768 instanceof Object)){
var ex__23280__auto__ = e23768;
var statearr_23769_23939 = state_23761;
(statearr_23769_23939[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23940 = state_23761;
state_23761 = G__23940;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__ = function(state_23761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1.call(this,state_23761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___23938,res,vec__23756,v,p,job,jobs,results))
})();
var state__23390__auto__ = (function (){var statearr_23770 = f__23389__auto__.call(null);
(statearr_23770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___23938);

return statearr_23770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___23938,res,vec__23756,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23771){
var vec__23772 = p__23771;
var v = cljs.core.nth.call(null,vec__23772,(0),null);
var p = cljs.core.nth.call(null,vec__23772,(1),null);
var job = vec__23772;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__20839__auto___23941 = n;
var __23942 = (0);
while(true){
if((__23942 < n__20839__auto___23941)){
var G__23773_23943 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23773_23943) {
case "compute":
var c__23388__auto___23945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23942,c__23388__auto___23945,G__23773_23943,n__20839__auto___23941,jobs,results,process,async){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (__23942,c__23388__auto___23945,G__23773_23943,n__20839__auto___23941,jobs,results,process,async){
return (function (state_23786){
var state_val_23787 = (state_23786[(1)]);
if((state_val_23787 === (1))){
var state_23786__$1 = state_23786;
var statearr_23788_23946 = state_23786__$1;
(statearr_23788_23946[(2)] = null);

(statearr_23788_23946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (2))){
var state_23786__$1 = state_23786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23786__$1,(4),jobs);
} else {
if((state_val_23787 === (3))){
var inst_23784 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23786__$1,inst_23784);
} else {
if((state_val_23787 === (4))){
var inst_23776 = (state_23786[(2)]);
var inst_23777 = process.call(null,inst_23776);
var state_23786__$1 = state_23786;
if(cljs.core.truth_(inst_23777)){
var statearr_23789_23947 = state_23786__$1;
(statearr_23789_23947[(1)] = (5));

} else {
var statearr_23790_23948 = state_23786__$1;
(statearr_23790_23948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (5))){
var state_23786__$1 = state_23786;
var statearr_23791_23949 = state_23786__$1;
(statearr_23791_23949[(2)] = null);

(statearr_23791_23949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (6))){
var state_23786__$1 = state_23786;
var statearr_23792_23950 = state_23786__$1;
(statearr_23792_23950[(2)] = null);

(statearr_23792_23950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (7))){
var inst_23782 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23793_23951 = state_23786__$1;
(statearr_23793_23951[(2)] = inst_23782);

(statearr_23793_23951[(1)] = (3));


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
});})(__23942,c__23388__auto___23945,G__23773_23943,n__20839__auto___23941,jobs,results,process,async))
;
return ((function (__23942,switch__23276__auto__,c__23388__auto___23945,G__23773_23943,n__20839__auto___23941,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0 = (function (){
var statearr_23797 = [null,null,null,null,null,null,null];
(statearr_23797[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__);

(statearr_23797[(1)] = (1));

return statearr_23797;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1 = (function (state_23786){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_23786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e23798){if((e23798 instanceof Object)){
var ex__23280__auto__ = e23798;
var statearr_23799_23952 = state_23786;
(statearr_23799_23952[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23953 = state_23786;
state_23786 = G__23953;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__ = function(state_23786){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1.call(this,state_23786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__;
})()
;})(__23942,switch__23276__auto__,c__23388__auto___23945,G__23773_23943,n__20839__auto___23941,jobs,results,process,async))
})();
var state__23390__auto__ = (function (){var statearr_23800 = f__23389__auto__.call(null);
(statearr_23800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___23945);

return statearr_23800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(__23942,c__23388__auto___23945,G__23773_23943,n__20839__auto___23941,jobs,results,process,async))
);


break;
case "async":
var c__23388__auto___23954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23942,c__23388__auto___23954,G__23773_23943,n__20839__auto___23941,jobs,results,process,async){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (__23942,c__23388__auto___23954,G__23773_23943,n__20839__auto___23941,jobs,results,process,async){
return (function (state_23813){
var state_val_23814 = (state_23813[(1)]);
if((state_val_23814 === (1))){
var state_23813__$1 = state_23813;
var statearr_23815_23955 = state_23813__$1;
(statearr_23815_23955[(2)] = null);

(statearr_23815_23955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23814 === (2))){
var state_23813__$1 = state_23813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23813__$1,(4),jobs);
} else {
if((state_val_23814 === (3))){
var inst_23811 = (state_23813[(2)]);
var state_23813__$1 = state_23813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23813__$1,inst_23811);
} else {
if((state_val_23814 === (4))){
var inst_23803 = (state_23813[(2)]);
var inst_23804 = async.call(null,inst_23803);
var state_23813__$1 = state_23813;
if(cljs.core.truth_(inst_23804)){
var statearr_23816_23956 = state_23813__$1;
(statearr_23816_23956[(1)] = (5));

} else {
var statearr_23817_23957 = state_23813__$1;
(statearr_23817_23957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23814 === (5))){
var state_23813__$1 = state_23813;
var statearr_23818_23958 = state_23813__$1;
(statearr_23818_23958[(2)] = null);

(statearr_23818_23958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23814 === (6))){
var state_23813__$1 = state_23813;
var statearr_23819_23959 = state_23813__$1;
(statearr_23819_23959[(2)] = null);

(statearr_23819_23959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23814 === (7))){
var inst_23809 = (state_23813[(2)]);
var state_23813__$1 = state_23813;
var statearr_23820_23960 = state_23813__$1;
(statearr_23820_23960[(2)] = inst_23809);

(statearr_23820_23960[(1)] = (3));


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
});})(__23942,c__23388__auto___23954,G__23773_23943,n__20839__auto___23941,jobs,results,process,async))
;
return ((function (__23942,switch__23276__auto__,c__23388__auto___23954,G__23773_23943,n__20839__auto___23941,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0 = (function (){
var statearr_23824 = [null,null,null,null,null,null,null];
(statearr_23824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__);

(statearr_23824[(1)] = (1));

return statearr_23824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1 = (function (state_23813){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_23813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e23825){if((e23825 instanceof Object)){
var ex__23280__auto__ = e23825;
var statearr_23826_23961 = state_23813;
(statearr_23826_23961[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23962 = state_23813;
state_23813 = G__23962;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__ = function(state_23813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1.call(this,state_23813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__;
})()
;})(__23942,switch__23276__auto__,c__23388__auto___23954,G__23773_23943,n__20839__auto___23941,jobs,results,process,async))
})();
var state__23390__auto__ = (function (){var statearr_23827 = f__23389__auto__.call(null);
(statearr_23827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___23954);

return statearr_23827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(__23942,c__23388__auto___23954,G__23773_23943,n__20839__auto___23941,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23963 = (__23942 + (1));
__23942 = G__23963;
continue;
} else {
}
break;
}

var c__23388__auto___23964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___23964,jobs,results,process,async){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___23964,jobs,results,process,async){
return (function (state_23849){
var state_val_23850 = (state_23849[(1)]);
if((state_val_23850 === (1))){
var state_23849__$1 = state_23849;
var statearr_23851_23965 = state_23849__$1;
(statearr_23851_23965[(2)] = null);

(statearr_23851_23965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (2))){
var state_23849__$1 = state_23849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23849__$1,(4),from);
} else {
if((state_val_23850 === (3))){
var inst_23847 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23849__$1,inst_23847);
} else {
if((state_val_23850 === (4))){
var inst_23830 = (state_23849[(7)]);
var inst_23830__$1 = (state_23849[(2)]);
var inst_23831 = (inst_23830__$1 == null);
var state_23849__$1 = (function (){var statearr_23852 = state_23849;
(statearr_23852[(7)] = inst_23830__$1);

return statearr_23852;
})();
if(cljs.core.truth_(inst_23831)){
var statearr_23853_23966 = state_23849__$1;
(statearr_23853_23966[(1)] = (5));

} else {
var statearr_23854_23967 = state_23849__$1;
(statearr_23854_23967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (5))){
var inst_23833 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23849__$1 = state_23849;
var statearr_23855_23968 = state_23849__$1;
(statearr_23855_23968[(2)] = inst_23833);

(statearr_23855_23968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (6))){
var inst_23830 = (state_23849[(7)]);
var inst_23835 = (state_23849[(8)]);
var inst_23835__$1 = cljs.core.async.chan.call(null,(1));
var inst_23836 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23837 = [inst_23830,inst_23835__$1];
var inst_23838 = (new cljs.core.PersistentVector(null,2,(5),inst_23836,inst_23837,null));
var state_23849__$1 = (function (){var statearr_23856 = state_23849;
(statearr_23856[(8)] = inst_23835__$1);

return statearr_23856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23849__$1,(8),jobs,inst_23838);
} else {
if((state_val_23850 === (7))){
var inst_23845 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
var statearr_23857_23969 = state_23849__$1;
(statearr_23857_23969[(2)] = inst_23845);

(statearr_23857_23969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (8))){
var inst_23835 = (state_23849[(8)]);
var inst_23840 = (state_23849[(2)]);
var state_23849__$1 = (function (){var statearr_23858 = state_23849;
(statearr_23858[(9)] = inst_23840);

return statearr_23858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23849__$1,(9),results,inst_23835);
} else {
if((state_val_23850 === (9))){
var inst_23842 = (state_23849[(2)]);
var state_23849__$1 = (function (){var statearr_23859 = state_23849;
(statearr_23859[(10)] = inst_23842);

return statearr_23859;
})();
var statearr_23860_23970 = state_23849__$1;
(statearr_23860_23970[(2)] = null);

(statearr_23860_23970[(1)] = (2));


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
});})(c__23388__auto___23964,jobs,results,process,async))
;
return ((function (switch__23276__auto__,c__23388__auto___23964,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0 = (function (){
var statearr_23864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__);

(statearr_23864[(1)] = (1));

return statearr_23864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1 = (function (state_23849){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_23849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e23865){if((e23865 instanceof Object)){
var ex__23280__auto__ = e23865;
var statearr_23866_23971 = state_23849;
(statearr_23866_23971[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23972 = state_23849;
state_23849 = G__23972;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__ = function(state_23849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1.call(this,state_23849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___23964,jobs,results,process,async))
})();
var state__23390__auto__ = (function (){var statearr_23867 = f__23389__auto__.call(null);
(statearr_23867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___23964);

return statearr_23867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___23964,jobs,results,process,async))
);


var c__23388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto__,jobs,results,process,async){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto__,jobs,results,process,async){
return (function (state_23905){
var state_val_23906 = (state_23905[(1)]);
if((state_val_23906 === (7))){
var inst_23901 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23907_23973 = state_23905__$1;
(statearr_23907_23973[(2)] = inst_23901);

(statearr_23907_23973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (20))){
var state_23905__$1 = state_23905;
var statearr_23908_23974 = state_23905__$1;
(statearr_23908_23974[(2)] = null);

(statearr_23908_23974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (1))){
var state_23905__$1 = state_23905;
var statearr_23909_23975 = state_23905__$1;
(statearr_23909_23975[(2)] = null);

(statearr_23909_23975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (4))){
var inst_23870 = (state_23905[(7)]);
var inst_23870__$1 = (state_23905[(2)]);
var inst_23871 = (inst_23870__$1 == null);
var state_23905__$1 = (function (){var statearr_23910 = state_23905;
(statearr_23910[(7)] = inst_23870__$1);

return statearr_23910;
})();
if(cljs.core.truth_(inst_23871)){
var statearr_23911_23976 = state_23905__$1;
(statearr_23911_23976[(1)] = (5));

} else {
var statearr_23912_23977 = state_23905__$1;
(statearr_23912_23977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (15))){
var inst_23883 = (state_23905[(8)]);
var state_23905__$1 = state_23905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23905__$1,(18),to,inst_23883);
} else {
if((state_val_23906 === (21))){
var inst_23896 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23913_23978 = state_23905__$1;
(statearr_23913_23978[(2)] = inst_23896);

(statearr_23913_23978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (13))){
var inst_23898 = (state_23905[(2)]);
var state_23905__$1 = (function (){var statearr_23914 = state_23905;
(statearr_23914[(9)] = inst_23898);

return statearr_23914;
})();
var statearr_23915_23979 = state_23905__$1;
(statearr_23915_23979[(2)] = null);

(statearr_23915_23979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (6))){
var inst_23870 = (state_23905[(7)]);
var state_23905__$1 = state_23905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23905__$1,(11),inst_23870);
} else {
if((state_val_23906 === (17))){
var inst_23891 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
if(cljs.core.truth_(inst_23891)){
var statearr_23916_23980 = state_23905__$1;
(statearr_23916_23980[(1)] = (19));

} else {
var statearr_23917_23981 = state_23905__$1;
(statearr_23917_23981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (3))){
var inst_23903 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23905__$1,inst_23903);
} else {
if((state_val_23906 === (12))){
var inst_23880 = (state_23905[(10)]);
var state_23905__$1 = state_23905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23905__$1,(14),inst_23880);
} else {
if((state_val_23906 === (2))){
var state_23905__$1 = state_23905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23905__$1,(4),results);
} else {
if((state_val_23906 === (19))){
var state_23905__$1 = state_23905;
var statearr_23918_23982 = state_23905__$1;
(statearr_23918_23982[(2)] = null);

(statearr_23918_23982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (11))){
var inst_23880 = (state_23905[(2)]);
var state_23905__$1 = (function (){var statearr_23919 = state_23905;
(statearr_23919[(10)] = inst_23880);

return statearr_23919;
})();
var statearr_23920_23983 = state_23905__$1;
(statearr_23920_23983[(2)] = null);

(statearr_23920_23983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (9))){
var state_23905__$1 = state_23905;
var statearr_23921_23984 = state_23905__$1;
(statearr_23921_23984[(2)] = null);

(statearr_23921_23984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (5))){
var state_23905__$1 = state_23905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23922_23985 = state_23905__$1;
(statearr_23922_23985[(1)] = (8));

} else {
var statearr_23923_23986 = state_23905__$1;
(statearr_23923_23986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (14))){
var inst_23885 = (state_23905[(11)]);
var inst_23883 = (state_23905[(8)]);
var inst_23883__$1 = (state_23905[(2)]);
var inst_23884 = (inst_23883__$1 == null);
var inst_23885__$1 = cljs.core.not.call(null,inst_23884);
var state_23905__$1 = (function (){var statearr_23924 = state_23905;
(statearr_23924[(11)] = inst_23885__$1);

(statearr_23924[(8)] = inst_23883__$1);

return statearr_23924;
})();
if(inst_23885__$1){
var statearr_23925_23987 = state_23905__$1;
(statearr_23925_23987[(1)] = (15));

} else {
var statearr_23926_23988 = state_23905__$1;
(statearr_23926_23988[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (16))){
var inst_23885 = (state_23905[(11)]);
var state_23905__$1 = state_23905;
var statearr_23927_23989 = state_23905__$1;
(statearr_23927_23989[(2)] = inst_23885);

(statearr_23927_23989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (10))){
var inst_23877 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23928_23990 = state_23905__$1;
(statearr_23928_23990[(2)] = inst_23877);

(statearr_23928_23990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (18))){
var inst_23888 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23929_23991 = state_23905__$1;
(statearr_23929_23991[(2)] = inst_23888);

(statearr_23929_23991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (8))){
var inst_23874 = cljs.core.async.close_BANG_.call(null,to);
var state_23905__$1 = state_23905;
var statearr_23930_23992 = state_23905__$1;
(statearr_23930_23992[(2)] = inst_23874);

(statearr_23930_23992[(1)] = (10));


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
});})(c__23388__auto__,jobs,results,process,async))
;
return ((function (switch__23276__auto__,c__23388__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0 = (function (){
var statearr_23934 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__);

(statearr_23934[(1)] = (1));

return statearr_23934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1 = (function (state_23905){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_23905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e23935){if((e23935 instanceof Object)){
var ex__23280__auto__ = e23935;
var statearr_23936_23993 = state_23905;
(statearr_23936_23993[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23994 = state_23905;
state_23905 = G__23994;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__ = function(state_23905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1.call(this,state_23905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto__,jobs,results,process,async))
})();
var state__23390__auto__ = (function (){var statearr_23937 = f__23389__auto__.call(null);
(statearr_23937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto__);

return statearr_23937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto__,jobs,results,process,async))
);

return c__23388__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23995 = [];
var len__20994__auto___23998 = arguments.length;
var i__20995__auto___23999 = (0);
while(true){
if((i__20995__auto___23999 < len__20994__auto___23998)){
args23995.push((arguments[i__20995__auto___23999]));

var G__24000 = (i__20995__auto___23999 + (1));
i__20995__auto___23999 = G__24000;
continue;
} else {
}
break;
}

var G__23997 = args23995.length;
switch (G__23997) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23995.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24002 = [];
var len__20994__auto___24005 = arguments.length;
var i__20995__auto___24006 = (0);
while(true){
if((i__20995__auto___24006 < len__20994__auto___24005)){
args24002.push((arguments[i__20995__auto___24006]));

var G__24007 = (i__20995__auto___24006 + (1));
i__20995__auto___24006 = G__24007;
continue;
} else {
}
break;
}

var G__24004 = args24002.length;
switch (G__24004) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24002.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24009 = [];
var len__20994__auto___24062 = arguments.length;
var i__20995__auto___24063 = (0);
while(true){
if((i__20995__auto___24063 < len__20994__auto___24062)){
args24009.push((arguments[i__20995__auto___24063]));

var G__24064 = (i__20995__auto___24063 + (1));
i__20995__auto___24063 = G__24064;
continue;
} else {
}
break;
}

var G__24011 = args24009.length;
switch (G__24011) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24009.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23388__auto___24066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___24066,tc,fc){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___24066,tc,fc){
return (function (state_24037){
var state_val_24038 = (state_24037[(1)]);
if((state_val_24038 === (7))){
var inst_24033 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
var statearr_24039_24067 = state_24037__$1;
(statearr_24039_24067[(2)] = inst_24033);

(statearr_24039_24067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (1))){
var state_24037__$1 = state_24037;
var statearr_24040_24068 = state_24037__$1;
(statearr_24040_24068[(2)] = null);

(statearr_24040_24068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (4))){
var inst_24014 = (state_24037[(7)]);
var inst_24014__$1 = (state_24037[(2)]);
var inst_24015 = (inst_24014__$1 == null);
var state_24037__$1 = (function (){var statearr_24041 = state_24037;
(statearr_24041[(7)] = inst_24014__$1);

return statearr_24041;
})();
if(cljs.core.truth_(inst_24015)){
var statearr_24042_24069 = state_24037__$1;
(statearr_24042_24069[(1)] = (5));

} else {
var statearr_24043_24070 = state_24037__$1;
(statearr_24043_24070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (13))){
var state_24037__$1 = state_24037;
var statearr_24044_24071 = state_24037__$1;
(statearr_24044_24071[(2)] = null);

(statearr_24044_24071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (6))){
var inst_24014 = (state_24037[(7)]);
var inst_24020 = p.call(null,inst_24014);
var state_24037__$1 = state_24037;
if(cljs.core.truth_(inst_24020)){
var statearr_24045_24072 = state_24037__$1;
(statearr_24045_24072[(1)] = (9));

} else {
var statearr_24046_24073 = state_24037__$1;
(statearr_24046_24073[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (3))){
var inst_24035 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24037__$1,inst_24035);
} else {
if((state_val_24038 === (12))){
var state_24037__$1 = state_24037;
var statearr_24047_24074 = state_24037__$1;
(statearr_24047_24074[(2)] = null);

(statearr_24047_24074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (2))){
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24037__$1,(4),ch);
} else {
if((state_val_24038 === (11))){
var inst_24014 = (state_24037[(7)]);
var inst_24024 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24037__$1,(8),inst_24024,inst_24014);
} else {
if((state_val_24038 === (9))){
var state_24037__$1 = state_24037;
var statearr_24048_24075 = state_24037__$1;
(statearr_24048_24075[(2)] = tc);

(statearr_24048_24075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (5))){
var inst_24017 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24018 = cljs.core.async.close_BANG_.call(null,fc);
var state_24037__$1 = (function (){var statearr_24049 = state_24037;
(statearr_24049[(8)] = inst_24017);

return statearr_24049;
})();
var statearr_24050_24076 = state_24037__$1;
(statearr_24050_24076[(2)] = inst_24018);

(statearr_24050_24076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (14))){
var inst_24031 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
var statearr_24051_24077 = state_24037__$1;
(statearr_24051_24077[(2)] = inst_24031);

(statearr_24051_24077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (10))){
var state_24037__$1 = state_24037;
var statearr_24052_24078 = state_24037__$1;
(statearr_24052_24078[(2)] = fc);

(statearr_24052_24078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (8))){
var inst_24026 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
if(cljs.core.truth_(inst_24026)){
var statearr_24053_24079 = state_24037__$1;
(statearr_24053_24079[(1)] = (12));

} else {
var statearr_24054_24080 = state_24037__$1;
(statearr_24054_24080[(1)] = (13));

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
});})(c__23388__auto___24066,tc,fc))
;
return ((function (switch__23276__auto__,c__23388__auto___24066,tc,fc){
return (function() {
var cljs$core$async$state_machine__23277__auto__ = null;
var cljs$core$async$state_machine__23277__auto____0 = (function (){
var statearr_24058 = [null,null,null,null,null,null,null,null,null];
(statearr_24058[(0)] = cljs$core$async$state_machine__23277__auto__);

(statearr_24058[(1)] = (1));

return statearr_24058;
});
var cljs$core$async$state_machine__23277__auto____1 = (function (state_24037){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_24037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e24059){if((e24059 instanceof Object)){
var ex__23280__auto__ = e24059;
var statearr_24060_24081 = state_24037;
(statearr_24060_24081[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24082 = state_24037;
state_24037 = G__24082;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$state_machine__23277__auto__ = function(state_24037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23277__auto____1.call(this,state_24037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23277__auto____0;
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23277__auto____1;
return cljs$core$async$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___24066,tc,fc))
})();
var state__23390__auto__ = (function (){var statearr_24061 = f__23389__auto__.call(null);
(statearr_24061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___24066);

return statearr_24061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___24066,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto__){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto__){
return (function (state_24146){
var state_val_24147 = (state_24146[(1)]);
if((state_val_24147 === (7))){
var inst_24142 = (state_24146[(2)]);
var state_24146__$1 = state_24146;
var statearr_24148_24169 = state_24146__$1;
(statearr_24148_24169[(2)] = inst_24142);

(statearr_24148_24169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (1))){
var inst_24126 = init;
var state_24146__$1 = (function (){var statearr_24149 = state_24146;
(statearr_24149[(7)] = inst_24126);

return statearr_24149;
})();
var statearr_24150_24170 = state_24146__$1;
(statearr_24150_24170[(2)] = null);

(statearr_24150_24170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (4))){
var inst_24129 = (state_24146[(8)]);
var inst_24129__$1 = (state_24146[(2)]);
var inst_24130 = (inst_24129__$1 == null);
var state_24146__$1 = (function (){var statearr_24151 = state_24146;
(statearr_24151[(8)] = inst_24129__$1);

return statearr_24151;
})();
if(cljs.core.truth_(inst_24130)){
var statearr_24152_24171 = state_24146__$1;
(statearr_24152_24171[(1)] = (5));

} else {
var statearr_24153_24172 = state_24146__$1;
(statearr_24153_24172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (6))){
var inst_24133 = (state_24146[(9)]);
var inst_24129 = (state_24146[(8)]);
var inst_24126 = (state_24146[(7)]);
var inst_24133__$1 = f.call(null,inst_24126,inst_24129);
var inst_24134 = cljs.core.reduced_QMARK_.call(null,inst_24133__$1);
var state_24146__$1 = (function (){var statearr_24154 = state_24146;
(statearr_24154[(9)] = inst_24133__$1);

return statearr_24154;
})();
if(inst_24134){
var statearr_24155_24173 = state_24146__$1;
(statearr_24155_24173[(1)] = (8));

} else {
var statearr_24156_24174 = state_24146__$1;
(statearr_24156_24174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (3))){
var inst_24144 = (state_24146[(2)]);
var state_24146__$1 = state_24146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24146__$1,inst_24144);
} else {
if((state_val_24147 === (2))){
var state_24146__$1 = state_24146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24146__$1,(4),ch);
} else {
if((state_val_24147 === (9))){
var inst_24133 = (state_24146[(9)]);
var inst_24126 = inst_24133;
var state_24146__$1 = (function (){var statearr_24157 = state_24146;
(statearr_24157[(7)] = inst_24126);

return statearr_24157;
})();
var statearr_24158_24175 = state_24146__$1;
(statearr_24158_24175[(2)] = null);

(statearr_24158_24175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (5))){
var inst_24126 = (state_24146[(7)]);
var state_24146__$1 = state_24146;
var statearr_24159_24176 = state_24146__$1;
(statearr_24159_24176[(2)] = inst_24126);

(statearr_24159_24176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (10))){
var inst_24140 = (state_24146[(2)]);
var state_24146__$1 = state_24146;
var statearr_24160_24177 = state_24146__$1;
(statearr_24160_24177[(2)] = inst_24140);

(statearr_24160_24177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (8))){
var inst_24133 = (state_24146[(9)]);
var inst_24136 = cljs.core.deref.call(null,inst_24133);
var state_24146__$1 = state_24146;
var statearr_24161_24178 = state_24146__$1;
(statearr_24161_24178[(2)] = inst_24136);

(statearr_24161_24178[(1)] = (10));


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
});})(c__23388__auto__))
;
return ((function (switch__23276__auto__,c__23388__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23277__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23277__auto____0 = (function (){
var statearr_24165 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24165[(0)] = cljs$core$async$reduce_$_state_machine__23277__auto__);

(statearr_24165[(1)] = (1));

return statearr_24165;
});
var cljs$core$async$reduce_$_state_machine__23277__auto____1 = (function (state_24146){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_24146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e24166){if((e24166 instanceof Object)){
var ex__23280__auto__ = e24166;
var statearr_24167_24179 = state_24146;
(statearr_24167_24179[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24180 = state_24146;
state_24146 = G__24180;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23277__auto__ = function(state_24146){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23277__auto____1.call(this,state_24146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23277__auto____0;
cljs$core$async$reduce_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23277__auto____1;
return cljs$core$async$reduce_$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto__))
})();
var state__23390__auto__ = (function (){var statearr_24168 = f__23389__auto__.call(null);
(statearr_24168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto__);

return statearr_24168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto__))
);

return c__23388__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24181 = [];
var len__20994__auto___24233 = arguments.length;
var i__20995__auto___24234 = (0);
while(true){
if((i__20995__auto___24234 < len__20994__auto___24233)){
args24181.push((arguments[i__20995__auto___24234]));

var G__24235 = (i__20995__auto___24234 + (1));
i__20995__auto___24234 = G__24235;
continue;
} else {
}
break;
}

var G__24183 = args24181.length;
switch (G__24183) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24181.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto__){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto__){
return (function (state_24208){
var state_val_24209 = (state_24208[(1)]);
if((state_val_24209 === (7))){
var inst_24190 = (state_24208[(2)]);
var state_24208__$1 = state_24208;
var statearr_24210_24237 = state_24208__$1;
(statearr_24210_24237[(2)] = inst_24190);

(statearr_24210_24237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (1))){
var inst_24184 = cljs.core.seq.call(null,coll);
var inst_24185 = inst_24184;
var state_24208__$1 = (function (){var statearr_24211 = state_24208;
(statearr_24211[(7)] = inst_24185);

return statearr_24211;
})();
var statearr_24212_24238 = state_24208__$1;
(statearr_24212_24238[(2)] = null);

(statearr_24212_24238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (4))){
var inst_24185 = (state_24208[(7)]);
var inst_24188 = cljs.core.first.call(null,inst_24185);
var state_24208__$1 = state_24208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24208__$1,(7),ch,inst_24188);
} else {
if((state_val_24209 === (13))){
var inst_24202 = (state_24208[(2)]);
var state_24208__$1 = state_24208;
var statearr_24213_24239 = state_24208__$1;
(statearr_24213_24239[(2)] = inst_24202);

(statearr_24213_24239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (6))){
var inst_24193 = (state_24208[(2)]);
var state_24208__$1 = state_24208;
if(cljs.core.truth_(inst_24193)){
var statearr_24214_24240 = state_24208__$1;
(statearr_24214_24240[(1)] = (8));

} else {
var statearr_24215_24241 = state_24208__$1;
(statearr_24215_24241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (3))){
var inst_24206 = (state_24208[(2)]);
var state_24208__$1 = state_24208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24208__$1,inst_24206);
} else {
if((state_val_24209 === (12))){
var state_24208__$1 = state_24208;
var statearr_24216_24242 = state_24208__$1;
(statearr_24216_24242[(2)] = null);

(statearr_24216_24242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (2))){
var inst_24185 = (state_24208[(7)]);
var state_24208__$1 = state_24208;
if(cljs.core.truth_(inst_24185)){
var statearr_24217_24243 = state_24208__$1;
(statearr_24217_24243[(1)] = (4));

} else {
var statearr_24218_24244 = state_24208__$1;
(statearr_24218_24244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (11))){
var inst_24199 = cljs.core.async.close_BANG_.call(null,ch);
var state_24208__$1 = state_24208;
var statearr_24219_24245 = state_24208__$1;
(statearr_24219_24245[(2)] = inst_24199);

(statearr_24219_24245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (9))){
var state_24208__$1 = state_24208;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24220_24246 = state_24208__$1;
(statearr_24220_24246[(1)] = (11));

} else {
var statearr_24221_24247 = state_24208__$1;
(statearr_24221_24247[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (5))){
var inst_24185 = (state_24208[(7)]);
var state_24208__$1 = state_24208;
var statearr_24222_24248 = state_24208__$1;
(statearr_24222_24248[(2)] = inst_24185);

(statearr_24222_24248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (10))){
var inst_24204 = (state_24208[(2)]);
var state_24208__$1 = state_24208;
var statearr_24223_24249 = state_24208__$1;
(statearr_24223_24249[(2)] = inst_24204);

(statearr_24223_24249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (8))){
var inst_24185 = (state_24208[(7)]);
var inst_24195 = cljs.core.next.call(null,inst_24185);
var inst_24185__$1 = inst_24195;
var state_24208__$1 = (function (){var statearr_24224 = state_24208;
(statearr_24224[(7)] = inst_24185__$1);

return statearr_24224;
})();
var statearr_24225_24250 = state_24208__$1;
(statearr_24225_24250[(2)] = null);

(statearr_24225_24250[(1)] = (2));


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
});})(c__23388__auto__))
;
return ((function (switch__23276__auto__,c__23388__auto__){
return (function() {
var cljs$core$async$state_machine__23277__auto__ = null;
var cljs$core$async$state_machine__23277__auto____0 = (function (){
var statearr_24229 = [null,null,null,null,null,null,null,null];
(statearr_24229[(0)] = cljs$core$async$state_machine__23277__auto__);

(statearr_24229[(1)] = (1));

return statearr_24229;
});
var cljs$core$async$state_machine__23277__auto____1 = (function (state_24208){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_24208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e24230){if((e24230 instanceof Object)){
var ex__23280__auto__ = e24230;
var statearr_24231_24251 = state_24208;
(statearr_24231_24251[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24252 = state_24208;
state_24208 = G__24252;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$state_machine__23277__auto__ = function(state_24208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23277__auto____1.call(this,state_24208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23277__auto____0;
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23277__auto____1;
return cljs$core$async$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto__))
})();
var state__23390__auto__ = (function (){var statearr_24232 = f__23389__auto__.call(null);
(statearr_24232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto__);

return statearr_24232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto__))
);

return c__23388__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20587__auto__ = (((_ == null))?null:_);
var m__20588__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,_);
} else {
var m__20588__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20587__auto__ = (((m == null))?null:m);
var m__20588__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20588__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20587__auto__ = (((m == null))?null:m);
var m__20588__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,m,ch);
} else {
var m__20588__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20587__auto__ = (((m == null))?null:m);
var m__20588__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,m);
} else {
var m__20588__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24474 = (function (mult,ch,cs,meta24475){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24475 = meta24475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24476,meta24475__$1){
var self__ = this;
var _24476__$1 = this;
return (new cljs.core.async.t_cljs$core$async24474(self__.mult,self__.ch,self__.cs,meta24475__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24476){
var self__ = this;
var _24476__$1 = this;
return self__.meta24475;
});})(cs))
;

cljs.core.async.t_cljs$core$async24474.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24474.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24474.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24474.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24474.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24474.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24474.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24475","meta24475",1850033568,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24474";

cljs.core.async.t_cljs$core$async24474.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20530__auto__,writer__20531__auto__,opt__20532__auto__){
return cljs.core._write.call(null,writer__20531__auto__,"cljs.core.async/t_cljs$core$async24474");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24474 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24474(mult__$1,ch__$1,cs__$1,meta24475){
return (new cljs.core.async.t_cljs$core$async24474(mult__$1,ch__$1,cs__$1,meta24475));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24474(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23388__auto___24695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___24695,cs,m,dchan,dctr,done){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___24695,cs,m,dchan,dctr,done){
return (function (state_24607){
var state_val_24608 = (state_24607[(1)]);
if((state_val_24608 === (7))){
var inst_24603 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24609_24696 = state_24607__$1;
(statearr_24609_24696[(2)] = inst_24603);

(statearr_24609_24696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (20))){
var inst_24508 = (state_24607[(7)]);
var inst_24518 = cljs.core.first.call(null,inst_24508);
var inst_24519 = cljs.core.nth.call(null,inst_24518,(0),null);
var inst_24520 = cljs.core.nth.call(null,inst_24518,(1),null);
var state_24607__$1 = (function (){var statearr_24610 = state_24607;
(statearr_24610[(8)] = inst_24519);

return statearr_24610;
})();
if(cljs.core.truth_(inst_24520)){
var statearr_24611_24697 = state_24607__$1;
(statearr_24611_24697[(1)] = (22));

} else {
var statearr_24612_24698 = state_24607__$1;
(statearr_24612_24698[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (27))){
var inst_24550 = (state_24607[(9)]);
var inst_24479 = (state_24607[(10)]);
var inst_24548 = (state_24607[(11)]);
var inst_24555 = (state_24607[(12)]);
var inst_24555__$1 = cljs.core._nth.call(null,inst_24548,inst_24550);
var inst_24556 = cljs.core.async.put_BANG_.call(null,inst_24555__$1,inst_24479,done);
var state_24607__$1 = (function (){var statearr_24613 = state_24607;
(statearr_24613[(12)] = inst_24555__$1);

return statearr_24613;
})();
if(cljs.core.truth_(inst_24556)){
var statearr_24614_24699 = state_24607__$1;
(statearr_24614_24699[(1)] = (30));

} else {
var statearr_24615_24700 = state_24607__$1;
(statearr_24615_24700[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (1))){
var state_24607__$1 = state_24607;
var statearr_24616_24701 = state_24607__$1;
(statearr_24616_24701[(2)] = null);

(statearr_24616_24701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (24))){
var inst_24508 = (state_24607[(7)]);
var inst_24525 = (state_24607[(2)]);
var inst_24526 = cljs.core.next.call(null,inst_24508);
var inst_24488 = inst_24526;
var inst_24489 = null;
var inst_24490 = (0);
var inst_24491 = (0);
var state_24607__$1 = (function (){var statearr_24617 = state_24607;
(statearr_24617[(13)] = inst_24491);

(statearr_24617[(14)] = inst_24525);

(statearr_24617[(15)] = inst_24490);

(statearr_24617[(16)] = inst_24489);

(statearr_24617[(17)] = inst_24488);

return statearr_24617;
})();
var statearr_24618_24702 = state_24607__$1;
(statearr_24618_24702[(2)] = null);

(statearr_24618_24702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (39))){
var state_24607__$1 = state_24607;
var statearr_24622_24703 = state_24607__$1;
(statearr_24622_24703[(2)] = null);

(statearr_24622_24703[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (4))){
var inst_24479 = (state_24607[(10)]);
var inst_24479__$1 = (state_24607[(2)]);
var inst_24480 = (inst_24479__$1 == null);
var state_24607__$1 = (function (){var statearr_24623 = state_24607;
(statearr_24623[(10)] = inst_24479__$1);

return statearr_24623;
})();
if(cljs.core.truth_(inst_24480)){
var statearr_24624_24704 = state_24607__$1;
(statearr_24624_24704[(1)] = (5));

} else {
var statearr_24625_24705 = state_24607__$1;
(statearr_24625_24705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (15))){
var inst_24491 = (state_24607[(13)]);
var inst_24490 = (state_24607[(15)]);
var inst_24489 = (state_24607[(16)]);
var inst_24488 = (state_24607[(17)]);
var inst_24504 = (state_24607[(2)]);
var inst_24505 = (inst_24491 + (1));
var tmp24619 = inst_24490;
var tmp24620 = inst_24489;
var tmp24621 = inst_24488;
var inst_24488__$1 = tmp24621;
var inst_24489__$1 = tmp24620;
var inst_24490__$1 = tmp24619;
var inst_24491__$1 = inst_24505;
var state_24607__$1 = (function (){var statearr_24626 = state_24607;
(statearr_24626[(13)] = inst_24491__$1);

(statearr_24626[(18)] = inst_24504);

(statearr_24626[(15)] = inst_24490__$1);

(statearr_24626[(16)] = inst_24489__$1);

(statearr_24626[(17)] = inst_24488__$1);

return statearr_24626;
})();
var statearr_24627_24706 = state_24607__$1;
(statearr_24627_24706[(2)] = null);

(statearr_24627_24706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (21))){
var inst_24529 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24631_24707 = state_24607__$1;
(statearr_24631_24707[(2)] = inst_24529);

(statearr_24631_24707[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (31))){
var inst_24555 = (state_24607[(12)]);
var inst_24559 = done.call(null,null);
var inst_24560 = cljs.core.async.untap_STAR_.call(null,m,inst_24555);
var state_24607__$1 = (function (){var statearr_24632 = state_24607;
(statearr_24632[(19)] = inst_24559);

return statearr_24632;
})();
var statearr_24633_24708 = state_24607__$1;
(statearr_24633_24708[(2)] = inst_24560);

(statearr_24633_24708[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (32))){
var inst_24549 = (state_24607[(20)]);
var inst_24547 = (state_24607[(21)]);
var inst_24550 = (state_24607[(9)]);
var inst_24548 = (state_24607[(11)]);
var inst_24562 = (state_24607[(2)]);
var inst_24563 = (inst_24550 + (1));
var tmp24628 = inst_24549;
var tmp24629 = inst_24547;
var tmp24630 = inst_24548;
var inst_24547__$1 = tmp24629;
var inst_24548__$1 = tmp24630;
var inst_24549__$1 = tmp24628;
var inst_24550__$1 = inst_24563;
var state_24607__$1 = (function (){var statearr_24634 = state_24607;
(statearr_24634[(20)] = inst_24549__$1);

(statearr_24634[(22)] = inst_24562);

(statearr_24634[(21)] = inst_24547__$1);

(statearr_24634[(9)] = inst_24550__$1);

(statearr_24634[(11)] = inst_24548__$1);

return statearr_24634;
})();
var statearr_24635_24709 = state_24607__$1;
(statearr_24635_24709[(2)] = null);

(statearr_24635_24709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (40))){
var inst_24575 = (state_24607[(23)]);
var inst_24579 = done.call(null,null);
var inst_24580 = cljs.core.async.untap_STAR_.call(null,m,inst_24575);
var state_24607__$1 = (function (){var statearr_24636 = state_24607;
(statearr_24636[(24)] = inst_24579);

return statearr_24636;
})();
var statearr_24637_24710 = state_24607__$1;
(statearr_24637_24710[(2)] = inst_24580);

(statearr_24637_24710[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (33))){
var inst_24566 = (state_24607[(25)]);
var inst_24568 = cljs.core.chunked_seq_QMARK_.call(null,inst_24566);
var state_24607__$1 = state_24607;
if(inst_24568){
var statearr_24638_24711 = state_24607__$1;
(statearr_24638_24711[(1)] = (36));

} else {
var statearr_24639_24712 = state_24607__$1;
(statearr_24639_24712[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (13))){
var inst_24498 = (state_24607[(26)]);
var inst_24501 = cljs.core.async.close_BANG_.call(null,inst_24498);
var state_24607__$1 = state_24607;
var statearr_24640_24713 = state_24607__$1;
(statearr_24640_24713[(2)] = inst_24501);

(statearr_24640_24713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (22))){
var inst_24519 = (state_24607[(8)]);
var inst_24522 = cljs.core.async.close_BANG_.call(null,inst_24519);
var state_24607__$1 = state_24607;
var statearr_24641_24714 = state_24607__$1;
(statearr_24641_24714[(2)] = inst_24522);

(statearr_24641_24714[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (36))){
var inst_24566 = (state_24607[(25)]);
var inst_24570 = cljs.core.chunk_first.call(null,inst_24566);
var inst_24571 = cljs.core.chunk_rest.call(null,inst_24566);
var inst_24572 = cljs.core.count.call(null,inst_24570);
var inst_24547 = inst_24571;
var inst_24548 = inst_24570;
var inst_24549 = inst_24572;
var inst_24550 = (0);
var state_24607__$1 = (function (){var statearr_24642 = state_24607;
(statearr_24642[(20)] = inst_24549);

(statearr_24642[(21)] = inst_24547);

(statearr_24642[(9)] = inst_24550);

(statearr_24642[(11)] = inst_24548);

return statearr_24642;
})();
var statearr_24643_24715 = state_24607__$1;
(statearr_24643_24715[(2)] = null);

(statearr_24643_24715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (41))){
var inst_24566 = (state_24607[(25)]);
var inst_24582 = (state_24607[(2)]);
var inst_24583 = cljs.core.next.call(null,inst_24566);
var inst_24547 = inst_24583;
var inst_24548 = null;
var inst_24549 = (0);
var inst_24550 = (0);
var state_24607__$1 = (function (){var statearr_24644 = state_24607;
(statearr_24644[(20)] = inst_24549);

(statearr_24644[(21)] = inst_24547);

(statearr_24644[(9)] = inst_24550);

(statearr_24644[(27)] = inst_24582);

(statearr_24644[(11)] = inst_24548);

return statearr_24644;
})();
var statearr_24645_24716 = state_24607__$1;
(statearr_24645_24716[(2)] = null);

(statearr_24645_24716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (43))){
var state_24607__$1 = state_24607;
var statearr_24646_24717 = state_24607__$1;
(statearr_24646_24717[(2)] = null);

(statearr_24646_24717[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (29))){
var inst_24591 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24647_24718 = state_24607__$1;
(statearr_24647_24718[(2)] = inst_24591);

(statearr_24647_24718[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (44))){
var inst_24600 = (state_24607[(2)]);
var state_24607__$1 = (function (){var statearr_24648 = state_24607;
(statearr_24648[(28)] = inst_24600);

return statearr_24648;
})();
var statearr_24649_24719 = state_24607__$1;
(statearr_24649_24719[(2)] = null);

(statearr_24649_24719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (6))){
var inst_24539 = (state_24607[(29)]);
var inst_24538 = cljs.core.deref.call(null,cs);
var inst_24539__$1 = cljs.core.keys.call(null,inst_24538);
var inst_24540 = cljs.core.count.call(null,inst_24539__$1);
var inst_24541 = cljs.core.reset_BANG_.call(null,dctr,inst_24540);
var inst_24546 = cljs.core.seq.call(null,inst_24539__$1);
var inst_24547 = inst_24546;
var inst_24548 = null;
var inst_24549 = (0);
var inst_24550 = (0);
var state_24607__$1 = (function (){var statearr_24650 = state_24607;
(statearr_24650[(20)] = inst_24549);

(statearr_24650[(21)] = inst_24547);

(statearr_24650[(30)] = inst_24541);

(statearr_24650[(29)] = inst_24539__$1);

(statearr_24650[(9)] = inst_24550);

(statearr_24650[(11)] = inst_24548);

return statearr_24650;
})();
var statearr_24651_24720 = state_24607__$1;
(statearr_24651_24720[(2)] = null);

(statearr_24651_24720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (28))){
var inst_24547 = (state_24607[(21)]);
var inst_24566 = (state_24607[(25)]);
var inst_24566__$1 = cljs.core.seq.call(null,inst_24547);
var state_24607__$1 = (function (){var statearr_24652 = state_24607;
(statearr_24652[(25)] = inst_24566__$1);

return statearr_24652;
})();
if(inst_24566__$1){
var statearr_24653_24721 = state_24607__$1;
(statearr_24653_24721[(1)] = (33));

} else {
var statearr_24654_24722 = state_24607__$1;
(statearr_24654_24722[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (25))){
var inst_24549 = (state_24607[(20)]);
var inst_24550 = (state_24607[(9)]);
var inst_24552 = (inst_24550 < inst_24549);
var inst_24553 = inst_24552;
var state_24607__$1 = state_24607;
if(cljs.core.truth_(inst_24553)){
var statearr_24655_24723 = state_24607__$1;
(statearr_24655_24723[(1)] = (27));

} else {
var statearr_24656_24724 = state_24607__$1;
(statearr_24656_24724[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (34))){
var state_24607__$1 = state_24607;
var statearr_24657_24725 = state_24607__$1;
(statearr_24657_24725[(2)] = null);

(statearr_24657_24725[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (17))){
var state_24607__$1 = state_24607;
var statearr_24658_24726 = state_24607__$1;
(statearr_24658_24726[(2)] = null);

(statearr_24658_24726[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (3))){
var inst_24605 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24607__$1,inst_24605);
} else {
if((state_val_24608 === (12))){
var inst_24534 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24659_24727 = state_24607__$1;
(statearr_24659_24727[(2)] = inst_24534);

(statearr_24659_24727[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (2))){
var state_24607__$1 = state_24607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24607__$1,(4),ch);
} else {
if((state_val_24608 === (23))){
var state_24607__$1 = state_24607;
var statearr_24660_24728 = state_24607__$1;
(statearr_24660_24728[(2)] = null);

(statearr_24660_24728[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (35))){
var inst_24589 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24661_24729 = state_24607__$1;
(statearr_24661_24729[(2)] = inst_24589);

(statearr_24661_24729[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (19))){
var inst_24508 = (state_24607[(7)]);
var inst_24512 = cljs.core.chunk_first.call(null,inst_24508);
var inst_24513 = cljs.core.chunk_rest.call(null,inst_24508);
var inst_24514 = cljs.core.count.call(null,inst_24512);
var inst_24488 = inst_24513;
var inst_24489 = inst_24512;
var inst_24490 = inst_24514;
var inst_24491 = (0);
var state_24607__$1 = (function (){var statearr_24662 = state_24607;
(statearr_24662[(13)] = inst_24491);

(statearr_24662[(15)] = inst_24490);

(statearr_24662[(16)] = inst_24489);

(statearr_24662[(17)] = inst_24488);

return statearr_24662;
})();
var statearr_24663_24730 = state_24607__$1;
(statearr_24663_24730[(2)] = null);

(statearr_24663_24730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (11))){
var inst_24508 = (state_24607[(7)]);
var inst_24488 = (state_24607[(17)]);
var inst_24508__$1 = cljs.core.seq.call(null,inst_24488);
var state_24607__$1 = (function (){var statearr_24664 = state_24607;
(statearr_24664[(7)] = inst_24508__$1);

return statearr_24664;
})();
if(inst_24508__$1){
var statearr_24665_24731 = state_24607__$1;
(statearr_24665_24731[(1)] = (16));

} else {
var statearr_24666_24732 = state_24607__$1;
(statearr_24666_24732[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (9))){
var inst_24536 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24667_24733 = state_24607__$1;
(statearr_24667_24733[(2)] = inst_24536);

(statearr_24667_24733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (5))){
var inst_24486 = cljs.core.deref.call(null,cs);
var inst_24487 = cljs.core.seq.call(null,inst_24486);
var inst_24488 = inst_24487;
var inst_24489 = null;
var inst_24490 = (0);
var inst_24491 = (0);
var state_24607__$1 = (function (){var statearr_24668 = state_24607;
(statearr_24668[(13)] = inst_24491);

(statearr_24668[(15)] = inst_24490);

(statearr_24668[(16)] = inst_24489);

(statearr_24668[(17)] = inst_24488);

return statearr_24668;
})();
var statearr_24669_24734 = state_24607__$1;
(statearr_24669_24734[(2)] = null);

(statearr_24669_24734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (14))){
var state_24607__$1 = state_24607;
var statearr_24670_24735 = state_24607__$1;
(statearr_24670_24735[(2)] = null);

(statearr_24670_24735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (45))){
var inst_24597 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24671_24736 = state_24607__$1;
(statearr_24671_24736[(2)] = inst_24597);

(statearr_24671_24736[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (26))){
var inst_24539 = (state_24607[(29)]);
var inst_24593 = (state_24607[(2)]);
var inst_24594 = cljs.core.seq.call(null,inst_24539);
var state_24607__$1 = (function (){var statearr_24672 = state_24607;
(statearr_24672[(31)] = inst_24593);

return statearr_24672;
})();
if(inst_24594){
var statearr_24673_24737 = state_24607__$1;
(statearr_24673_24737[(1)] = (42));

} else {
var statearr_24674_24738 = state_24607__$1;
(statearr_24674_24738[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (16))){
var inst_24508 = (state_24607[(7)]);
var inst_24510 = cljs.core.chunked_seq_QMARK_.call(null,inst_24508);
var state_24607__$1 = state_24607;
if(inst_24510){
var statearr_24675_24739 = state_24607__$1;
(statearr_24675_24739[(1)] = (19));

} else {
var statearr_24676_24740 = state_24607__$1;
(statearr_24676_24740[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (38))){
var inst_24586 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24677_24741 = state_24607__$1;
(statearr_24677_24741[(2)] = inst_24586);

(statearr_24677_24741[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (30))){
var state_24607__$1 = state_24607;
var statearr_24678_24742 = state_24607__$1;
(statearr_24678_24742[(2)] = null);

(statearr_24678_24742[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (10))){
var inst_24491 = (state_24607[(13)]);
var inst_24489 = (state_24607[(16)]);
var inst_24497 = cljs.core._nth.call(null,inst_24489,inst_24491);
var inst_24498 = cljs.core.nth.call(null,inst_24497,(0),null);
var inst_24499 = cljs.core.nth.call(null,inst_24497,(1),null);
var state_24607__$1 = (function (){var statearr_24679 = state_24607;
(statearr_24679[(26)] = inst_24498);

return statearr_24679;
})();
if(cljs.core.truth_(inst_24499)){
var statearr_24680_24743 = state_24607__$1;
(statearr_24680_24743[(1)] = (13));

} else {
var statearr_24681_24744 = state_24607__$1;
(statearr_24681_24744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (18))){
var inst_24532 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24682_24745 = state_24607__$1;
(statearr_24682_24745[(2)] = inst_24532);

(statearr_24682_24745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (42))){
var state_24607__$1 = state_24607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24607__$1,(45),dchan);
} else {
if((state_val_24608 === (37))){
var inst_24575 = (state_24607[(23)]);
var inst_24566 = (state_24607[(25)]);
var inst_24479 = (state_24607[(10)]);
var inst_24575__$1 = cljs.core.first.call(null,inst_24566);
var inst_24576 = cljs.core.async.put_BANG_.call(null,inst_24575__$1,inst_24479,done);
var state_24607__$1 = (function (){var statearr_24683 = state_24607;
(statearr_24683[(23)] = inst_24575__$1);

return statearr_24683;
})();
if(cljs.core.truth_(inst_24576)){
var statearr_24684_24746 = state_24607__$1;
(statearr_24684_24746[(1)] = (39));

} else {
var statearr_24685_24747 = state_24607__$1;
(statearr_24685_24747[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (8))){
var inst_24491 = (state_24607[(13)]);
var inst_24490 = (state_24607[(15)]);
var inst_24493 = (inst_24491 < inst_24490);
var inst_24494 = inst_24493;
var state_24607__$1 = state_24607;
if(cljs.core.truth_(inst_24494)){
var statearr_24686_24748 = state_24607__$1;
(statearr_24686_24748[(1)] = (10));

} else {
var statearr_24687_24749 = state_24607__$1;
(statearr_24687_24749[(1)] = (11));

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
});})(c__23388__auto___24695,cs,m,dchan,dctr,done))
;
return ((function (switch__23276__auto__,c__23388__auto___24695,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23277__auto__ = null;
var cljs$core$async$mult_$_state_machine__23277__auto____0 = (function (){
var statearr_24691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24691[(0)] = cljs$core$async$mult_$_state_machine__23277__auto__);

(statearr_24691[(1)] = (1));

return statearr_24691;
});
var cljs$core$async$mult_$_state_machine__23277__auto____1 = (function (state_24607){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_24607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e24692){if((e24692 instanceof Object)){
var ex__23280__auto__ = e24692;
var statearr_24693_24750 = state_24607;
(statearr_24693_24750[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24751 = state_24607;
state_24607 = G__24751;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23277__auto__ = function(state_24607){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23277__auto____1.call(this,state_24607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23277__auto____0;
cljs$core$async$mult_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23277__auto____1;
return cljs$core$async$mult_$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___24695,cs,m,dchan,dctr,done))
})();
var state__23390__auto__ = (function (){var statearr_24694 = f__23389__auto__.call(null);
(statearr_24694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___24695);

return statearr_24694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___24695,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24752 = [];
var len__20994__auto___24755 = arguments.length;
var i__20995__auto___24756 = (0);
while(true){
if((i__20995__auto___24756 < len__20994__auto___24755)){
args24752.push((arguments[i__20995__auto___24756]));

var G__24757 = (i__20995__auto___24756 + (1));
i__20995__auto___24756 = G__24757;
continue;
} else {
}
break;
}

var G__24754 = args24752.length;
switch (G__24754) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24752.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20587__auto__ = (((m == null))?null:m);
var m__20588__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,m,ch);
} else {
var m__20588__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20587__auto__ = (((m == null))?null:m);
var m__20588__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,m,ch);
} else {
var m__20588__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20587__auto__ = (((m == null))?null:m);
var m__20588__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,m);
} else {
var m__20588__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20587__auto__ = (((m == null))?null:m);
var m__20588__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,m,state_map);
} else {
var m__20588__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20587__auto__ = (((m == null))?null:m);
var m__20588__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,m,mode);
} else {
var m__20588__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21001__auto__ = [];
var len__20994__auto___24769 = arguments.length;
var i__20995__auto___24770 = (0);
while(true){
if((i__20995__auto___24770 < len__20994__auto___24769)){
args__21001__auto__.push((arguments[i__20995__auto___24770]));

var G__24771 = (i__20995__auto___24770 + (1));
i__20995__auto___24770 = G__24771;
continue;
} else {
}
break;
}

var argseq__21002__auto__ = ((((3) < args__21001__auto__.length))?(new cljs.core.IndexedSeq(args__21001__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21002__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24763){
var map__24764 = p__24763;
var map__24764__$1 = ((((!((map__24764 == null)))?((((map__24764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24764):map__24764);
var opts = map__24764__$1;
var statearr_24766_24772 = state;
(statearr_24766_24772[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24764,map__24764__$1,opts){
return (function (val){
var statearr_24767_24773 = state;
(statearr_24767_24773[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24764,map__24764__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24768_24774 = state;
(statearr_24768_24774[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24759){
var G__24760 = cljs.core.first.call(null,seq24759);
var seq24759__$1 = cljs.core.next.call(null,seq24759);
var G__24761 = cljs.core.first.call(null,seq24759__$1);
var seq24759__$2 = cljs.core.next.call(null,seq24759__$1);
var G__24762 = cljs.core.first.call(null,seq24759__$2);
var seq24759__$3 = cljs.core.next.call(null,seq24759__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24760,G__24761,G__24762,seq24759__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24938 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24939){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24939 = meta24939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24940,meta24939__$1){
var self__ = this;
var _24940__$1 = this;
return (new cljs.core.async.t_cljs$core$async24938(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24939__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24940){
var self__ = this;
var _24940__$1 = this;
return self__.meta24939;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24938.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24938.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24938.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24938.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24938.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24938.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24938.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24938.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24938.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24939","meta24939",443274111,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24938";

cljs.core.async.t_cljs$core$async24938.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20530__auto__,writer__20531__auto__,opt__20532__auto__){
return cljs.core._write.call(null,writer__20531__auto__,"cljs.core.async/t_cljs$core$async24938");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24938 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24938(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24939){
return (new cljs.core.async.t_cljs$core$async24938(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24939));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24938(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23388__auto___25101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___25101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___25101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25038){
var state_val_25039 = (state_25038[(1)]);
if((state_val_25039 === (7))){
var inst_24956 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25040_25102 = state_25038__$1;
(statearr_25040_25102[(2)] = inst_24956);

(statearr_25040_25102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (20))){
var inst_24968 = (state_25038[(7)]);
var state_25038__$1 = state_25038;
var statearr_25041_25103 = state_25038__$1;
(statearr_25041_25103[(2)] = inst_24968);

(statearr_25041_25103[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (27))){
var state_25038__$1 = state_25038;
var statearr_25042_25104 = state_25038__$1;
(statearr_25042_25104[(2)] = null);

(statearr_25042_25104[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (1))){
var inst_24944 = (state_25038[(8)]);
var inst_24944__$1 = calc_state.call(null);
var inst_24946 = (inst_24944__$1 == null);
var inst_24947 = cljs.core.not.call(null,inst_24946);
var state_25038__$1 = (function (){var statearr_25043 = state_25038;
(statearr_25043[(8)] = inst_24944__$1);

return statearr_25043;
})();
if(inst_24947){
var statearr_25044_25105 = state_25038__$1;
(statearr_25044_25105[(1)] = (2));

} else {
var statearr_25045_25106 = state_25038__$1;
(statearr_25045_25106[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (24))){
var inst_24991 = (state_25038[(9)]);
var inst_24998 = (state_25038[(10)]);
var inst_25012 = (state_25038[(11)]);
var inst_25012__$1 = inst_24991.call(null,inst_24998);
var state_25038__$1 = (function (){var statearr_25046 = state_25038;
(statearr_25046[(11)] = inst_25012__$1);

return statearr_25046;
})();
if(cljs.core.truth_(inst_25012__$1)){
var statearr_25047_25107 = state_25038__$1;
(statearr_25047_25107[(1)] = (29));

} else {
var statearr_25048_25108 = state_25038__$1;
(statearr_25048_25108[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (4))){
var inst_24959 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_24959)){
var statearr_25049_25109 = state_25038__$1;
(statearr_25049_25109[(1)] = (8));

} else {
var statearr_25050_25110 = state_25038__$1;
(statearr_25050_25110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (15))){
var inst_24985 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_24985)){
var statearr_25051_25111 = state_25038__$1;
(statearr_25051_25111[(1)] = (19));

} else {
var statearr_25052_25112 = state_25038__$1;
(statearr_25052_25112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (21))){
var inst_24990 = (state_25038[(12)]);
var inst_24990__$1 = (state_25038[(2)]);
var inst_24991 = cljs.core.get.call(null,inst_24990__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24992 = cljs.core.get.call(null,inst_24990__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24993 = cljs.core.get.call(null,inst_24990__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25038__$1 = (function (){var statearr_25053 = state_25038;
(statearr_25053[(12)] = inst_24990__$1);

(statearr_25053[(13)] = inst_24992);

(statearr_25053[(9)] = inst_24991);

return statearr_25053;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25038__$1,(22),inst_24993);
} else {
if((state_val_25039 === (31))){
var inst_25020 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_25020)){
var statearr_25054_25113 = state_25038__$1;
(statearr_25054_25113[(1)] = (32));

} else {
var statearr_25055_25114 = state_25038__$1;
(statearr_25055_25114[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (32))){
var inst_24997 = (state_25038[(14)]);
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25038__$1,(35),out,inst_24997);
} else {
if((state_val_25039 === (33))){
var inst_24990 = (state_25038[(12)]);
var inst_24968 = inst_24990;
var state_25038__$1 = (function (){var statearr_25056 = state_25038;
(statearr_25056[(7)] = inst_24968);

return statearr_25056;
})();
var statearr_25057_25115 = state_25038__$1;
(statearr_25057_25115[(2)] = null);

(statearr_25057_25115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (13))){
var inst_24968 = (state_25038[(7)]);
var inst_24975 = inst_24968.cljs$lang$protocol_mask$partition0$;
var inst_24976 = (inst_24975 & (64));
var inst_24977 = inst_24968.cljs$core$ISeq$;
var inst_24978 = (inst_24976) || (inst_24977);
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_24978)){
var statearr_25058_25116 = state_25038__$1;
(statearr_25058_25116[(1)] = (16));

} else {
var statearr_25059_25117 = state_25038__$1;
(statearr_25059_25117[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (22))){
var inst_24997 = (state_25038[(14)]);
var inst_24998 = (state_25038[(10)]);
var inst_24996 = (state_25038[(2)]);
var inst_24997__$1 = cljs.core.nth.call(null,inst_24996,(0),null);
var inst_24998__$1 = cljs.core.nth.call(null,inst_24996,(1),null);
var inst_24999 = (inst_24997__$1 == null);
var inst_25000 = cljs.core._EQ_.call(null,inst_24998__$1,change);
var inst_25001 = (inst_24999) || (inst_25000);
var state_25038__$1 = (function (){var statearr_25060 = state_25038;
(statearr_25060[(14)] = inst_24997__$1);

(statearr_25060[(10)] = inst_24998__$1);

return statearr_25060;
})();
if(cljs.core.truth_(inst_25001)){
var statearr_25061_25118 = state_25038__$1;
(statearr_25061_25118[(1)] = (23));

} else {
var statearr_25062_25119 = state_25038__$1;
(statearr_25062_25119[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (36))){
var inst_24990 = (state_25038[(12)]);
var inst_24968 = inst_24990;
var state_25038__$1 = (function (){var statearr_25063 = state_25038;
(statearr_25063[(7)] = inst_24968);

return statearr_25063;
})();
var statearr_25064_25120 = state_25038__$1;
(statearr_25064_25120[(2)] = null);

(statearr_25064_25120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (29))){
var inst_25012 = (state_25038[(11)]);
var state_25038__$1 = state_25038;
var statearr_25065_25121 = state_25038__$1;
(statearr_25065_25121[(2)] = inst_25012);

(statearr_25065_25121[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (6))){
var state_25038__$1 = state_25038;
var statearr_25066_25122 = state_25038__$1;
(statearr_25066_25122[(2)] = false);

(statearr_25066_25122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (28))){
var inst_25008 = (state_25038[(2)]);
var inst_25009 = calc_state.call(null);
var inst_24968 = inst_25009;
var state_25038__$1 = (function (){var statearr_25067 = state_25038;
(statearr_25067[(15)] = inst_25008);

(statearr_25067[(7)] = inst_24968);

return statearr_25067;
})();
var statearr_25068_25123 = state_25038__$1;
(statearr_25068_25123[(2)] = null);

(statearr_25068_25123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (25))){
var inst_25034 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25069_25124 = state_25038__$1;
(statearr_25069_25124[(2)] = inst_25034);

(statearr_25069_25124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (34))){
var inst_25032 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25070_25125 = state_25038__$1;
(statearr_25070_25125[(2)] = inst_25032);

(statearr_25070_25125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (17))){
var state_25038__$1 = state_25038;
var statearr_25071_25126 = state_25038__$1;
(statearr_25071_25126[(2)] = false);

(statearr_25071_25126[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (3))){
var state_25038__$1 = state_25038;
var statearr_25072_25127 = state_25038__$1;
(statearr_25072_25127[(2)] = false);

(statearr_25072_25127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (12))){
var inst_25036 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25038__$1,inst_25036);
} else {
if((state_val_25039 === (2))){
var inst_24944 = (state_25038[(8)]);
var inst_24949 = inst_24944.cljs$lang$protocol_mask$partition0$;
var inst_24950 = (inst_24949 & (64));
var inst_24951 = inst_24944.cljs$core$ISeq$;
var inst_24952 = (inst_24950) || (inst_24951);
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_24952)){
var statearr_25073_25128 = state_25038__$1;
(statearr_25073_25128[(1)] = (5));

} else {
var statearr_25074_25129 = state_25038__$1;
(statearr_25074_25129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (23))){
var inst_24997 = (state_25038[(14)]);
var inst_25003 = (inst_24997 == null);
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_25003)){
var statearr_25075_25130 = state_25038__$1;
(statearr_25075_25130[(1)] = (26));

} else {
var statearr_25076_25131 = state_25038__$1;
(statearr_25076_25131[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (35))){
var inst_25023 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_25023)){
var statearr_25077_25132 = state_25038__$1;
(statearr_25077_25132[(1)] = (36));

} else {
var statearr_25078_25133 = state_25038__$1;
(statearr_25078_25133[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (19))){
var inst_24968 = (state_25038[(7)]);
var inst_24987 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24968);
var state_25038__$1 = state_25038;
var statearr_25079_25134 = state_25038__$1;
(statearr_25079_25134[(2)] = inst_24987);

(statearr_25079_25134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (11))){
var inst_24968 = (state_25038[(7)]);
var inst_24972 = (inst_24968 == null);
var inst_24973 = cljs.core.not.call(null,inst_24972);
var state_25038__$1 = state_25038;
if(inst_24973){
var statearr_25080_25135 = state_25038__$1;
(statearr_25080_25135[(1)] = (13));

} else {
var statearr_25081_25136 = state_25038__$1;
(statearr_25081_25136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (9))){
var inst_24944 = (state_25038[(8)]);
var state_25038__$1 = state_25038;
var statearr_25082_25137 = state_25038__$1;
(statearr_25082_25137[(2)] = inst_24944);

(statearr_25082_25137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (5))){
var state_25038__$1 = state_25038;
var statearr_25083_25138 = state_25038__$1;
(statearr_25083_25138[(2)] = true);

(statearr_25083_25138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (14))){
var state_25038__$1 = state_25038;
var statearr_25084_25139 = state_25038__$1;
(statearr_25084_25139[(2)] = false);

(statearr_25084_25139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (26))){
var inst_24998 = (state_25038[(10)]);
var inst_25005 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24998);
var state_25038__$1 = state_25038;
var statearr_25085_25140 = state_25038__$1;
(statearr_25085_25140[(2)] = inst_25005);

(statearr_25085_25140[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (16))){
var state_25038__$1 = state_25038;
var statearr_25086_25141 = state_25038__$1;
(statearr_25086_25141[(2)] = true);

(statearr_25086_25141[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (38))){
var inst_25028 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25087_25142 = state_25038__$1;
(statearr_25087_25142[(2)] = inst_25028);

(statearr_25087_25142[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (30))){
var inst_24992 = (state_25038[(13)]);
var inst_24991 = (state_25038[(9)]);
var inst_24998 = (state_25038[(10)]);
var inst_25015 = cljs.core.empty_QMARK_.call(null,inst_24991);
var inst_25016 = inst_24992.call(null,inst_24998);
var inst_25017 = cljs.core.not.call(null,inst_25016);
var inst_25018 = (inst_25015) && (inst_25017);
var state_25038__$1 = state_25038;
var statearr_25088_25143 = state_25038__$1;
(statearr_25088_25143[(2)] = inst_25018);

(statearr_25088_25143[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (10))){
var inst_24944 = (state_25038[(8)]);
var inst_24964 = (state_25038[(2)]);
var inst_24965 = cljs.core.get.call(null,inst_24964,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24966 = cljs.core.get.call(null,inst_24964,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24967 = cljs.core.get.call(null,inst_24964,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24968 = inst_24944;
var state_25038__$1 = (function (){var statearr_25089 = state_25038;
(statearr_25089[(16)] = inst_24967);

(statearr_25089[(17)] = inst_24966);

(statearr_25089[(18)] = inst_24965);

(statearr_25089[(7)] = inst_24968);

return statearr_25089;
})();
var statearr_25090_25144 = state_25038__$1;
(statearr_25090_25144[(2)] = null);

(statearr_25090_25144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (18))){
var inst_24982 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25091_25145 = state_25038__$1;
(statearr_25091_25145[(2)] = inst_24982);

(statearr_25091_25145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (37))){
var state_25038__$1 = state_25038;
var statearr_25092_25146 = state_25038__$1;
(statearr_25092_25146[(2)] = null);

(statearr_25092_25146[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (8))){
var inst_24944 = (state_25038[(8)]);
var inst_24961 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24944);
var state_25038__$1 = state_25038;
var statearr_25093_25147 = state_25038__$1;
(statearr_25093_25147[(2)] = inst_24961);

(statearr_25093_25147[(1)] = (10));


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
});})(c__23388__auto___25101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23276__auto__,c__23388__auto___25101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23277__auto__ = null;
var cljs$core$async$mix_$_state_machine__23277__auto____0 = (function (){
var statearr_25097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25097[(0)] = cljs$core$async$mix_$_state_machine__23277__auto__);

(statearr_25097[(1)] = (1));

return statearr_25097;
});
var cljs$core$async$mix_$_state_machine__23277__auto____1 = (function (state_25038){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_25038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e25098){if((e25098 instanceof Object)){
var ex__23280__auto__ = e25098;
var statearr_25099_25148 = state_25038;
(statearr_25099_25148[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25149 = state_25038;
state_25038 = G__25149;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23277__auto__ = function(state_25038){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23277__auto____1.call(this,state_25038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23277__auto____0;
cljs$core$async$mix_$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23277__auto____1;
return cljs$core$async$mix_$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___25101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23390__auto__ = (function (){var statearr_25100 = f__23389__auto__.call(null);
(statearr_25100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___25101);

return statearr_25100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___25101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20587__auto__ = (((p == null))?null:p);
var m__20588__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20588__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20587__auto__ = (((p == null))?null:p);
var m__20588__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,p,v,ch);
} else {
var m__20588__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25150 = [];
var len__20994__auto___25153 = arguments.length;
var i__20995__auto___25154 = (0);
while(true){
if((i__20995__auto___25154 < len__20994__auto___25153)){
args25150.push((arguments[i__20995__auto___25154]));

var G__25155 = (i__20995__auto___25154 + (1));
i__20995__auto___25154 = G__25155;
continue;
} else {
}
break;
}

var G__25152 = args25150.length;
switch (G__25152) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25150.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20587__auto__ = (((p == null))?null:p);
var m__20588__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,p);
} else {
var m__20588__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20587__auto__ = (((p == null))?null:p);
var m__20588__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20587__auto__)]);
if(!((m__20588__auto__ == null))){
return m__20588__auto__.call(null,p,v);
} else {
var m__20588__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20588__auto____$1 == null))){
return m__20588__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25158 = [];
var len__20994__auto___25283 = arguments.length;
var i__20995__auto___25284 = (0);
while(true){
if((i__20995__auto___25284 < len__20994__auto___25283)){
args25158.push((arguments[i__20995__auto___25284]));

var G__25285 = (i__20995__auto___25284 + (1));
i__20995__auto___25284 = G__25285;
continue;
} else {
}
break;
}

var G__25160 = args25158.length;
switch (G__25160) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25158.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19924__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19924__auto__)){
return or__19924__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19924__auto__,mults){
return (function (p1__25157_SHARP_){
if(cljs.core.truth_(p1__25157_SHARP_.call(null,topic))){
return p1__25157_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25157_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19924__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25161 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25162){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25162 = meta25162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25163,meta25162__$1){
var self__ = this;
var _25163__$1 = this;
return (new cljs.core.async.t_cljs$core$async25161(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25162__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25163){
var self__ = this;
var _25163__$1 = this;
return self__.meta25162;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25161.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25162","meta25162",-1671101281,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25161";

cljs.core.async.t_cljs$core$async25161.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20530__auto__,writer__20531__auto__,opt__20532__auto__){
return cljs.core._write.call(null,writer__20531__auto__,"cljs.core.async/t_cljs$core$async25161");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25161 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25161(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25162){
return (new cljs.core.async.t_cljs$core$async25161(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25162));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25161(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23388__auto___25287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___25287,mults,ensure_mult,p){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___25287,mults,ensure_mult,p){
return (function (state_25235){
var state_val_25236 = (state_25235[(1)]);
if((state_val_25236 === (7))){
var inst_25231 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25237_25288 = state_25235__$1;
(statearr_25237_25288[(2)] = inst_25231);

(statearr_25237_25288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (20))){
var state_25235__$1 = state_25235;
var statearr_25238_25289 = state_25235__$1;
(statearr_25238_25289[(2)] = null);

(statearr_25238_25289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (1))){
var state_25235__$1 = state_25235;
var statearr_25239_25290 = state_25235__$1;
(statearr_25239_25290[(2)] = null);

(statearr_25239_25290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (24))){
var inst_25214 = (state_25235[(7)]);
var inst_25223 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25214);
var state_25235__$1 = state_25235;
var statearr_25240_25291 = state_25235__$1;
(statearr_25240_25291[(2)] = inst_25223);

(statearr_25240_25291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (4))){
var inst_25166 = (state_25235[(8)]);
var inst_25166__$1 = (state_25235[(2)]);
var inst_25167 = (inst_25166__$1 == null);
var state_25235__$1 = (function (){var statearr_25241 = state_25235;
(statearr_25241[(8)] = inst_25166__$1);

return statearr_25241;
})();
if(cljs.core.truth_(inst_25167)){
var statearr_25242_25292 = state_25235__$1;
(statearr_25242_25292[(1)] = (5));

} else {
var statearr_25243_25293 = state_25235__$1;
(statearr_25243_25293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (15))){
var inst_25208 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25244_25294 = state_25235__$1;
(statearr_25244_25294[(2)] = inst_25208);

(statearr_25244_25294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (21))){
var inst_25228 = (state_25235[(2)]);
var state_25235__$1 = (function (){var statearr_25245 = state_25235;
(statearr_25245[(9)] = inst_25228);

return statearr_25245;
})();
var statearr_25246_25295 = state_25235__$1;
(statearr_25246_25295[(2)] = null);

(statearr_25246_25295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (13))){
var inst_25190 = (state_25235[(10)]);
var inst_25192 = cljs.core.chunked_seq_QMARK_.call(null,inst_25190);
var state_25235__$1 = state_25235;
if(inst_25192){
var statearr_25247_25296 = state_25235__$1;
(statearr_25247_25296[(1)] = (16));

} else {
var statearr_25248_25297 = state_25235__$1;
(statearr_25248_25297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (22))){
var inst_25220 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
if(cljs.core.truth_(inst_25220)){
var statearr_25249_25298 = state_25235__$1;
(statearr_25249_25298[(1)] = (23));

} else {
var statearr_25250_25299 = state_25235__$1;
(statearr_25250_25299[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (6))){
var inst_25216 = (state_25235[(11)]);
var inst_25214 = (state_25235[(7)]);
var inst_25166 = (state_25235[(8)]);
var inst_25214__$1 = topic_fn.call(null,inst_25166);
var inst_25215 = cljs.core.deref.call(null,mults);
var inst_25216__$1 = cljs.core.get.call(null,inst_25215,inst_25214__$1);
var state_25235__$1 = (function (){var statearr_25251 = state_25235;
(statearr_25251[(11)] = inst_25216__$1);

(statearr_25251[(7)] = inst_25214__$1);

return statearr_25251;
})();
if(cljs.core.truth_(inst_25216__$1)){
var statearr_25252_25300 = state_25235__$1;
(statearr_25252_25300[(1)] = (19));

} else {
var statearr_25253_25301 = state_25235__$1;
(statearr_25253_25301[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (25))){
var inst_25225 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25254_25302 = state_25235__$1;
(statearr_25254_25302[(2)] = inst_25225);

(statearr_25254_25302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (17))){
var inst_25190 = (state_25235[(10)]);
var inst_25199 = cljs.core.first.call(null,inst_25190);
var inst_25200 = cljs.core.async.muxch_STAR_.call(null,inst_25199);
var inst_25201 = cljs.core.async.close_BANG_.call(null,inst_25200);
var inst_25202 = cljs.core.next.call(null,inst_25190);
var inst_25176 = inst_25202;
var inst_25177 = null;
var inst_25178 = (0);
var inst_25179 = (0);
var state_25235__$1 = (function (){var statearr_25255 = state_25235;
(statearr_25255[(12)] = inst_25201);

(statearr_25255[(13)] = inst_25178);

(statearr_25255[(14)] = inst_25177);

(statearr_25255[(15)] = inst_25179);

(statearr_25255[(16)] = inst_25176);

return statearr_25255;
})();
var statearr_25256_25303 = state_25235__$1;
(statearr_25256_25303[(2)] = null);

(statearr_25256_25303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (3))){
var inst_25233 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25235__$1,inst_25233);
} else {
if((state_val_25236 === (12))){
var inst_25210 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25257_25304 = state_25235__$1;
(statearr_25257_25304[(2)] = inst_25210);

(statearr_25257_25304[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (2))){
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25235__$1,(4),ch);
} else {
if((state_val_25236 === (23))){
var state_25235__$1 = state_25235;
var statearr_25258_25305 = state_25235__$1;
(statearr_25258_25305[(2)] = null);

(statearr_25258_25305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (19))){
var inst_25216 = (state_25235[(11)]);
var inst_25166 = (state_25235[(8)]);
var inst_25218 = cljs.core.async.muxch_STAR_.call(null,inst_25216);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25235__$1,(22),inst_25218,inst_25166);
} else {
if((state_val_25236 === (11))){
var inst_25190 = (state_25235[(10)]);
var inst_25176 = (state_25235[(16)]);
var inst_25190__$1 = cljs.core.seq.call(null,inst_25176);
var state_25235__$1 = (function (){var statearr_25259 = state_25235;
(statearr_25259[(10)] = inst_25190__$1);

return statearr_25259;
})();
if(inst_25190__$1){
var statearr_25260_25306 = state_25235__$1;
(statearr_25260_25306[(1)] = (13));

} else {
var statearr_25261_25307 = state_25235__$1;
(statearr_25261_25307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (9))){
var inst_25212 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25262_25308 = state_25235__$1;
(statearr_25262_25308[(2)] = inst_25212);

(statearr_25262_25308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (5))){
var inst_25173 = cljs.core.deref.call(null,mults);
var inst_25174 = cljs.core.vals.call(null,inst_25173);
var inst_25175 = cljs.core.seq.call(null,inst_25174);
var inst_25176 = inst_25175;
var inst_25177 = null;
var inst_25178 = (0);
var inst_25179 = (0);
var state_25235__$1 = (function (){var statearr_25263 = state_25235;
(statearr_25263[(13)] = inst_25178);

(statearr_25263[(14)] = inst_25177);

(statearr_25263[(15)] = inst_25179);

(statearr_25263[(16)] = inst_25176);

return statearr_25263;
})();
var statearr_25264_25309 = state_25235__$1;
(statearr_25264_25309[(2)] = null);

(statearr_25264_25309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (14))){
var state_25235__$1 = state_25235;
var statearr_25268_25310 = state_25235__$1;
(statearr_25268_25310[(2)] = null);

(statearr_25268_25310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (16))){
var inst_25190 = (state_25235[(10)]);
var inst_25194 = cljs.core.chunk_first.call(null,inst_25190);
var inst_25195 = cljs.core.chunk_rest.call(null,inst_25190);
var inst_25196 = cljs.core.count.call(null,inst_25194);
var inst_25176 = inst_25195;
var inst_25177 = inst_25194;
var inst_25178 = inst_25196;
var inst_25179 = (0);
var state_25235__$1 = (function (){var statearr_25269 = state_25235;
(statearr_25269[(13)] = inst_25178);

(statearr_25269[(14)] = inst_25177);

(statearr_25269[(15)] = inst_25179);

(statearr_25269[(16)] = inst_25176);

return statearr_25269;
})();
var statearr_25270_25311 = state_25235__$1;
(statearr_25270_25311[(2)] = null);

(statearr_25270_25311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (10))){
var inst_25178 = (state_25235[(13)]);
var inst_25177 = (state_25235[(14)]);
var inst_25179 = (state_25235[(15)]);
var inst_25176 = (state_25235[(16)]);
var inst_25184 = cljs.core._nth.call(null,inst_25177,inst_25179);
var inst_25185 = cljs.core.async.muxch_STAR_.call(null,inst_25184);
var inst_25186 = cljs.core.async.close_BANG_.call(null,inst_25185);
var inst_25187 = (inst_25179 + (1));
var tmp25265 = inst_25178;
var tmp25266 = inst_25177;
var tmp25267 = inst_25176;
var inst_25176__$1 = tmp25267;
var inst_25177__$1 = tmp25266;
var inst_25178__$1 = tmp25265;
var inst_25179__$1 = inst_25187;
var state_25235__$1 = (function (){var statearr_25271 = state_25235;
(statearr_25271[(17)] = inst_25186);

(statearr_25271[(13)] = inst_25178__$1);

(statearr_25271[(14)] = inst_25177__$1);

(statearr_25271[(15)] = inst_25179__$1);

(statearr_25271[(16)] = inst_25176__$1);

return statearr_25271;
})();
var statearr_25272_25312 = state_25235__$1;
(statearr_25272_25312[(2)] = null);

(statearr_25272_25312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (18))){
var inst_25205 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25273_25313 = state_25235__$1;
(statearr_25273_25313[(2)] = inst_25205);

(statearr_25273_25313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (8))){
var inst_25178 = (state_25235[(13)]);
var inst_25179 = (state_25235[(15)]);
var inst_25181 = (inst_25179 < inst_25178);
var inst_25182 = inst_25181;
var state_25235__$1 = state_25235;
if(cljs.core.truth_(inst_25182)){
var statearr_25274_25314 = state_25235__$1;
(statearr_25274_25314[(1)] = (10));

} else {
var statearr_25275_25315 = state_25235__$1;
(statearr_25275_25315[(1)] = (11));

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
});})(c__23388__auto___25287,mults,ensure_mult,p))
;
return ((function (switch__23276__auto__,c__23388__auto___25287,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23277__auto__ = null;
var cljs$core$async$state_machine__23277__auto____0 = (function (){
var statearr_25279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25279[(0)] = cljs$core$async$state_machine__23277__auto__);

(statearr_25279[(1)] = (1));

return statearr_25279;
});
var cljs$core$async$state_machine__23277__auto____1 = (function (state_25235){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_25235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e25280){if((e25280 instanceof Object)){
var ex__23280__auto__ = e25280;
var statearr_25281_25316 = state_25235;
(statearr_25281_25316[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25317 = state_25235;
state_25235 = G__25317;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$state_machine__23277__auto__ = function(state_25235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23277__auto____1.call(this,state_25235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23277__auto____0;
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23277__auto____1;
return cljs$core$async$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___25287,mults,ensure_mult,p))
})();
var state__23390__auto__ = (function (){var statearr_25282 = f__23389__auto__.call(null);
(statearr_25282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___25287);

return statearr_25282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___25287,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25318 = [];
var len__20994__auto___25321 = arguments.length;
var i__20995__auto___25322 = (0);
while(true){
if((i__20995__auto___25322 < len__20994__auto___25321)){
args25318.push((arguments[i__20995__auto___25322]));

var G__25323 = (i__20995__auto___25322 + (1));
i__20995__auto___25322 = G__25323;
continue;
} else {
}
break;
}

var G__25320 = args25318.length;
switch (G__25320) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25318.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25325 = [];
var len__20994__auto___25328 = arguments.length;
var i__20995__auto___25329 = (0);
while(true){
if((i__20995__auto___25329 < len__20994__auto___25328)){
args25325.push((arguments[i__20995__auto___25329]));

var G__25330 = (i__20995__auto___25329 + (1));
i__20995__auto___25329 = G__25330;
continue;
} else {
}
break;
}

var G__25327 = args25325.length;
switch (G__25327) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25325.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25332 = [];
var len__20994__auto___25403 = arguments.length;
var i__20995__auto___25404 = (0);
while(true){
if((i__20995__auto___25404 < len__20994__auto___25403)){
args25332.push((arguments[i__20995__auto___25404]));

var G__25405 = (i__20995__auto___25404 + (1));
i__20995__auto___25404 = G__25405;
continue;
} else {
}
break;
}

var G__25334 = args25332.length;
switch (G__25334) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25332.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23388__auto___25407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___25407,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___25407,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25373){
var state_val_25374 = (state_25373[(1)]);
if((state_val_25374 === (7))){
var state_25373__$1 = state_25373;
var statearr_25375_25408 = state_25373__$1;
(statearr_25375_25408[(2)] = null);

(statearr_25375_25408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (1))){
var state_25373__$1 = state_25373;
var statearr_25376_25409 = state_25373__$1;
(statearr_25376_25409[(2)] = null);

(statearr_25376_25409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (4))){
var inst_25337 = (state_25373[(7)]);
var inst_25339 = (inst_25337 < cnt);
var state_25373__$1 = state_25373;
if(cljs.core.truth_(inst_25339)){
var statearr_25377_25410 = state_25373__$1;
(statearr_25377_25410[(1)] = (6));

} else {
var statearr_25378_25411 = state_25373__$1;
(statearr_25378_25411[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (15))){
var inst_25369 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25379_25412 = state_25373__$1;
(statearr_25379_25412[(2)] = inst_25369);

(statearr_25379_25412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (13))){
var inst_25362 = cljs.core.async.close_BANG_.call(null,out);
var state_25373__$1 = state_25373;
var statearr_25380_25413 = state_25373__$1;
(statearr_25380_25413[(2)] = inst_25362);

(statearr_25380_25413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (6))){
var state_25373__$1 = state_25373;
var statearr_25381_25414 = state_25373__$1;
(statearr_25381_25414[(2)] = null);

(statearr_25381_25414[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (3))){
var inst_25371 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25373__$1,inst_25371);
} else {
if((state_val_25374 === (12))){
var inst_25359 = (state_25373[(8)]);
var inst_25359__$1 = (state_25373[(2)]);
var inst_25360 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25359__$1);
var state_25373__$1 = (function (){var statearr_25382 = state_25373;
(statearr_25382[(8)] = inst_25359__$1);

return statearr_25382;
})();
if(cljs.core.truth_(inst_25360)){
var statearr_25383_25415 = state_25373__$1;
(statearr_25383_25415[(1)] = (13));

} else {
var statearr_25384_25416 = state_25373__$1;
(statearr_25384_25416[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (2))){
var inst_25336 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25337 = (0);
var state_25373__$1 = (function (){var statearr_25385 = state_25373;
(statearr_25385[(9)] = inst_25336);

(statearr_25385[(7)] = inst_25337);

return statearr_25385;
})();
var statearr_25386_25417 = state_25373__$1;
(statearr_25386_25417[(2)] = null);

(statearr_25386_25417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (11))){
var inst_25337 = (state_25373[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25373,(10),Object,null,(9));
var inst_25346 = chs__$1.call(null,inst_25337);
var inst_25347 = done.call(null,inst_25337);
var inst_25348 = cljs.core.async.take_BANG_.call(null,inst_25346,inst_25347);
var state_25373__$1 = state_25373;
var statearr_25387_25418 = state_25373__$1;
(statearr_25387_25418[(2)] = inst_25348);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25373__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (9))){
var inst_25337 = (state_25373[(7)]);
var inst_25350 = (state_25373[(2)]);
var inst_25351 = (inst_25337 + (1));
var inst_25337__$1 = inst_25351;
var state_25373__$1 = (function (){var statearr_25388 = state_25373;
(statearr_25388[(7)] = inst_25337__$1);

(statearr_25388[(10)] = inst_25350);

return statearr_25388;
})();
var statearr_25389_25419 = state_25373__$1;
(statearr_25389_25419[(2)] = null);

(statearr_25389_25419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (5))){
var inst_25357 = (state_25373[(2)]);
var state_25373__$1 = (function (){var statearr_25390 = state_25373;
(statearr_25390[(11)] = inst_25357);

return statearr_25390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25373__$1,(12),dchan);
} else {
if((state_val_25374 === (14))){
var inst_25359 = (state_25373[(8)]);
var inst_25364 = cljs.core.apply.call(null,f,inst_25359);
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25373__$1,(16),out,inst_25364);
} else {
if((state_val_25374 === (16))){
var inst_25366 = (state_25373[(2)]);
var state_25373__$1 = (function (){var statearr_25391 = state_25373;
(statearr_25391[(12)] = inst_25366);

return statearr_25391;
})();
var statearr_25392_25420 = state_25373__$1;
(statearr_25392_25420[(2)] = null);

(statearr_25392_25420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (10))){
var inst_25341 = (state_25373[(2)]);
var inst_25342 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25373__$1 = (function (){var statearr_25393 = state_25373;
(statearr_25393[(13)] = inst_25341);

return statearr_25393;
})();
var statearr_25394_25421 = state_25373__$1;
(statearr_25394_25421[(2)] = inst_25342);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25373__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (8))){
var inst_25355 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25395_25422 = state_25373__$1;
(statearr_25395_25422[(2)] = inst_25355);

(statearr_25395_25422[(1)] = (5));


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
});})(c__23388__auto___25407,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23276__auto__,c__23388__auto___25407,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23277__auto__ = null;
var cljs$core$async$state_machine__23277__auto____0 = (function (){
var statearr_25399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25399[(0)] = cljs$core$async$state_machine__23277__auto__);

(statearr_25399[(1)] = (1));

return statearr_25399;
});
var cljs$core$async$state_machine__23277__auto____1 = (function (state_25373){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_25373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e25400){if((e25400 instanceof Object)){
var ex__23280__auto__ = e25400;
var statearr_25401_25423 = state_25373;
(statearr_25401_25423[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25424 = state_25373;
state_25373 = G__25424;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$state_machine__23277__auto__ = function(state_25373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23277__auto____1.call(this,state_25373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23277__auto____0;
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23277__auto____1;
return cljs$core$async$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___25407,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23390__auto__ = (function (){var statearr_25402 = f__23389__auto__.call(null);
(statearr_25402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___25407);

return statearr_25402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___25407,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25426 = [];
var len__20994__auto___25482 = arguments.length;
var i__20995__auto___25483 = (0);
while(true){
if((i__20995__auto___25483 < len__20994__auto___25482)){
args25426.push((arguments[i__20995__auto___25483]));

var G__25484 = (i__20995__auto___25483 + (1));
i__20995__auto___25483 = G__25484;
continue;
} else {
}
break;
}

var G__25428 = args25426.length;
switch (G__25428) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25426.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23388__auto___25486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___25486,out){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___25486,out){
return (function (state_25458){
var state_val_25459 = (state_25458[(1)]);
if((state_val_25459 === (7))){
var inst_25437 = (state_25458[(7)]);
var inst_25438 = (state_25458[(8)]);
var inst_25437__$1 = (state_25458[(2)]);
var inst_25438__$1 = cljs.core.nth.call(null,inst_25437__$1,(0),null);
var inst_25439 = cljs.core.nth.call(null,inst_25437__$1,(1),null);
var inst_25440 = (inst_25438__$1 == null);
var state_25458__$1 = (function (){var statearr_25460 = state_25458;
(statearr_25460[(7)] = inst_25437__$1);

(statearr_25460[(8)] = inst_25438__$1);

(statearr_25460[(9)] = inst_25439);

return statearr_25460;
})();
if(cljs.core.truth_(inst_25440)){
var statearr_25461_25487 = state_25458__$1;
(statearr_25461_25487[(1)] = (8));

} else {
var statearr_25462_25488 = state_25458__$1;
(statearr_25462_25488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (1))){
var inst_25429 = cljs.core.vec.call(null,chs);
var inst_25430 = inst_25429;
var state_25458__$1 = (function (){var statearr_25463 = state_25458;
(statearr_25463[(10)] = inst_25430);

return statearr_25463;
})();
var statearr_25464_25489 = state_25458__$1;
(statearr_25464_25489[(2)] = null);

(statearr_25464_25489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (4))){
var inst_25430 = (state_25458[(10)]);
var state_25458__$1 = state_25458;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25458__$1,(7),inst_25430);
} else {
if((state_val_25459 === (6))){
var inst_25454 = (state_25458[(2)]);
var state_25458__$1 = state_25458;
var statearr_25465_25490 = state_25458__$1;
(statearr_25465_25490[(2)] = inst_25454);

(statearr_25465_25490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (3))){
var inst_25456 = (state_25458[(2)]);
var state_25458__$1 = state_25458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25458__$1,inst_25456);
} else {
if((state_val_25459 === (2))){
var inst_25430 = (state_25458[(10)]);
var inst_25432 = cljs.core.count.call(null,inst_25430);
var inst_25433 = (inst_25432 > (0));
var state_25458__$1 = state_25458;
if(cljs.core.truth_(inst_25433)){
var statearr_25467_25491 = state_25458__$1;
(statearr_25467_25491[(1)] = (4));

} else {
var statearr_25468_25492 = state_25458__$1;
(statearr_25468_25492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (11))){
var inst_25430 = (state_25458[(10)]);
var inst_25447 = (state_25458[(2)]);
var tmp25466 = inst_25430;
var inst_25430__$1 = tmp25466;
var state_25458__$1 = (function (){var statearr_25469 = state_25458;
(statearr_25469[(11)] = inst_25447);

(statearr_25469[(10)] = inst_25430__$1);

return statearr_25469;
})();
var statearr_25470_25493 = state_25458__$1;
(statearr_25470_25493[(2)] = null);

(statearr_25470_25493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (9))){
var inst_25438 = (state_25458[(8)]);
var state_25458__$1 = state_25458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25458__$1,(11),out,inst_25438);
} else {
if((state_val_25459 === (5))){
var inst_25452 = cljs.core.async.close_BANG_.call(null,out);
var state_25458__$1 = state_25458;
var statearr_25471_25494 = state_25458__$1;
(statearr_25471_25494[(2)] = inst_25452);

(statearr_25471_25494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (10))){
var inst_25450 = (state_25458[(2)]);
var state_25458__$1 = state_25458;
var statearr_25472_25495 = state_25458__$1;
(statearr_25472_25495[(2)] = inst_25450);

(statearr_25472_25495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (8))){
var inst_25437 = (state_25458[(7)]);
var inst_25430 = (state_25458[(10)]);
var inst_25438 = (state_25458[(8)]);
var inst_25439 = (state_25458[(9)]);
var inst_25442 = (function (){var cs = inst_25430;
var vec__25435 = inst_25437;
var v = inst_25438;
var c = inst_25439;
return ((function (cs,vec__25435,v,c,inst_25437,inst_25430,inst_25438,inst_25439,state_val_25459,c__23388__auto___25486,out){
return (function (p1__25425_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25425_SHARP_);
});
;})(cs,vec__25435,v,c,inst_25437,inst_25430,inst_25438,inst_25439,state_val_25459,c__23388__auto___25486,out))
})();
var inst_25443 = cljs.core.filterv.call(null,inst_25442,inst_25430);
var inst_25430__$1 = inst_25443;
var state_25458__$1 = (function (){var statearr_25473 = state_25458;
(statearr_25473[(10)] = inst_25430__$1);

return statearr_25473;
})();
var statearr_25474_25496 = state_25458__$1;
(statearr_25474_25496[(2)] = null);

(statearr_25474_25496[(1)] = (2));


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
});})(c__23388__auto___25486,out))
;
return ((function (switch__23276__auto__,c__23388__auto___25486,out){
return (function() {
var cljs$core$async$state_machine__23277__auto__ = null;
var cljs$core$async$state_machine__23277__auto____0 = (function (){
var statearr_25478 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25478[(0)] = cljs$core$async$state_machine__23277__auto__);

(statearr_25478[(1)] = (1));

return statearr_25478;
});
var cljs$core$async$state_machine__23277__auto____1 = (function (state_25458){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_25458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e25479){if((e25479 instanceof Object)){
var ex__23280__auto__ = e25479;
var statearr_25480_25497 = state_25458;
(statearr_25480_25497[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25498 = state_25458;
state_25458 = G__25498;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$state_machine__23277__auto__ = function(state_25458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23277__auto____1.call(this,state_25458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23277__auto____0;
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23277__auto____1;
return cljs$core$async$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___25486,out))
})();
var state__23390__auto__ = (function (){var statearr_25481 = f__23389__auto__.call(null);
(statearr_25481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___25486);

return statearr_25481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___25486,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25499 = [];
var len__20994__auto___25548 = arguments.length;
var i__20995__auto___25549 = (0);
while(true){
if((i__20995__auto___25549 < len__20994__auto___25548)){
args25499.push((arguments[i__20995__auto___25549]));

var G__25550 = (i__20995__auto___25549 + (1));
i__20995__auto___25549 = G__25550;
continue;
} else {
}
break;
}

var G__25501 = args25499.length;
switch (G__25501) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25499.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23388__auto___25552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___25552,out){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___25552,out){
return (function (state_25525){
var state_val_25526 = (state_25525[(1)]);
if((state_val_25526 === (7))){
var inst_25507 = (state_25525[(7)]);
var inst_25507__$1 = (state_25525[(2)]);
var inst_25508 = (inst_25507__$1 == null);
var inst_25509 = cljs.core.not.call(null,inst_25508);
var state_25525__$1 = (function (){var statearr_25527 = state_25525;
(statearr_25527[(7)] = inst_25507__$1);

return statearr_25527;
})();
if(inst_25509){
var statearr_25528_25553 = state_25525__$1;
(statearr_25528_25553[(1)] = (8));

} else {
var statearr_25529_25554 = state_25525__$1;
(statearr_25529_25554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (1))){
var inst_25502 = (0);
var state_25525__$1 = (function (){var statearr_25530 = state_25525;
(statearr_25530[(8)] = inst_25502);

return statearr_25530;
})();
var statearr_25531_25555 = state_25525__$1;
(statearr_25531_25555[(2)] = null);

(statearr_25531_25555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (4))){
var state_25525__$1 = state_25525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25525__$1,(7),ch);
} else {
if((state_val_25526 === (6))){
var inst_25520 = (state_25525[(2)]);
var state_25525__$1 = state_25525;
var statearr_25532_25556 = state_25525__$1;
(statearr_25532_25556[(2)] = inst_25520);

(statearr_25532_25556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (3))){
var inst_25522 = (state_25525[(2)]);
var inst_25523 = cljs.core.async.close_BANG_.call(null,out);
var state_25525__$1 = (function (){var statearr_25533 = state_25525;
(statearr_25533[(9)] = inst_25522);

return statearr_25533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25525__$1,inst_25523);
} else {
if((state_val_25526 === (2))){
var inst_25502 = (state_25525[(8)]);
var inst_25504 = (inst_25502 < n);
var state_25525__$1 = state_25525;
if(cljs.core.truth_(inst_25504)){
var statearr_25534_25557 = state_25525__$1;
(statearr_25534_25557[(1)] = (4));

} else {
var statearr_25535_25558 = state_25525__$1;
(statearr_25535_25558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (11))){
var inst_25502 = (state_25525[(8)]);
var inst_25512 = (state_25525[(2)]);
var inst_25513 = (inst_25502 + (1));
var inst_25502__$1 = inst_25513;
var state_25525__$1 = (function (){var statearr_25536 = state_25525;
(statearr_25536[(8)] = inst_25502__$1);

(statearr_25536[(10)] = inst_25512);

return statearr_25536;
})();
var statearr_25537_25559 = state_25525__$1;
(statearr_25537_25559[(2)] = null);

(statearr_25537_25559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (9))){
var state_25525__$1 = state_25525;
var statearr_25538_25560 = state_25525__$1;
(statearr_25538_25560[(2)] = null);

(statearr_25538_25560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (5))){
var state_25525__$1 = state_25525;
var statearr_25539_25561 = state_25525__$1;
(statearr_25539_25561[(2)] = null);

(statearr_25539_25561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (10))){
var inst_25517 = (state_25525[(2)]);
var state_25525__$1 = state_25525;
var statearr_25540_25562 = state_25525__$1;
(statearr_25540_25562[(2)] = inst_25517);

(statearr_25540_25562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (8))){
var inst_25507 = (state_25525[(7)]);
var state_25525__$1 = state_25525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25525__$1,(11),out,inst_25507);
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
});})(c__23388__auto___25552,out))
;
return ((function (switch__23276__auto__,c__23388__auto___25552,out){
return (function() {
var cljs$core$async$state_machine__23277__auto__ = null;
var cljs$core$async$state_machine__23277__auto____0 = (function (){
var statearr_25544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25544[(0)] = cljs$core$async$state_machine__23277__auto__);

(statearr_25544[(1)] = (1));

return statearr_25544;
});
var cljs$core$async$state_machine__23277__auto____1 = (function (state_25525){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_25525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e25545){if((e25545 instanceof Object)){
var ex__23280__auto__ = e25545;
var statearr_25546_25563 = state_25525;
(statearr_25546_25563[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25564 = state_25525;
state_25525 = G__25564;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$state_machine__23277__auto__ = function(state_25525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23277__auto____1.call(this,state_25525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23277__auto____0;
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23277__auto____1;
return cljs$core$async$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___25552,out))
})();
var state__23390__auto__ = (function (){var statearr_25547 = f__23389__auto__.call(null);
(statearr_25547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___25552);

return statearr_25547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___25552,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25572 = (function (map_LT_,f,ch,meta25573){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25573 = meta25573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25574,meta25573__$1){
var self__ = this;
var _25574__$1 = this;
return (new cljs.core.async.t_cljs$core$async25572(self__.map_LT_,self__.f,self__.ch,meta25573__$1));
});

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25574){
var self__ = this;
var _25574__$1 = this;
return self__.meta25573;
});

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25575 = (function (map_LT_,f,ch,meta25573,_,fn1,meta25576){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25573 = meta25573;
this._ = _;
this.fn1 = fn1;
this.meta25576 = meta25576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25577,meta25576__$1){
var self__ = this;
var _25577__$1 = this;
return (new cljs.core.async.t_cljs$core$async25575(self__.map_LT_,self__.f,self__.ch,self__.meta25573,self__._,self__.fn1,meta25576__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25577){
var self__ = this;
var _25577__$1 = this;
return self__.meta25576;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25575.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25565_SHARP_){
return f1.call(null,(((p1__25565_SHARP_ == null))?null:self__.f.call(null,p1__25565_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25575.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25573","meta25573",-479512866,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25572","cljs.core.async/t_cljs$core$async25572",246228483,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25576","meta25576",2054085582,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25575";

cljs.core.async.t_cljs$core$async25575.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20530__auto__,writer__20531__auto__,opt__20532__auto__){
return cljs.core._write.call(null,writer__20531__auto__,"cljs.core.async/t_cljs$core$async25575");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25575 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25575(map_LT___$1,f__$1,ch__$1,meta25573__$1,___$2,fn1__$1,meta25576){
return (new cljs.core.async.t_cljs$core$async25575(map_LT___$1,f__$1,ch__$1,meta25573__$1,___$2,fn1__$1,meta25576));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25575(self__.map_LT_,self__.f,self__.ch,self__.meta25573,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19912__auto__ = ret;
if(cljs.core.truth_(and__19912__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19912__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25573","meta25573",-479512866,null)], null);
});

cljs.core.async.t_cljs$core$async25572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25572";

cljs.core.async.t_cljs$core$async25572.cljs$lang$ctorPrWriter = (function (this__20530__auto__,writer__20531__auto__,opt__20532__auto__){
return cljs.core._write.call(null,writer__20531__auto__,"cljs.core.async/t_cljs$core$async25572");
});

cljs.core.async.__GT_t_cljs$core$async25572 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25572(map_LT___$1,f__$1,ch__$1,meta25573){
return (new cljs.core.async.t_cljs$core$async25572(map_LT___$1,f__$1,ch__$1,meta25573));
});

}

return (new cljs.core.async.t_cljs$core$async25572(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25581 = (function (map_GT_,f,ch,meta25582){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25582 = meta25582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25583,meta25582__$1){
var self__ = this;
var _25583__$1 = this;
return (new cljs.core.async.t_cljs$core$async25581(self__.map_GT_,self__.f,self__.ch,meta25582__$1));
});

cljs.core.async.t_cljs$core$async25581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25583){
var self__ = this;
var _25583__$1 = this;
return self__.meta25582;
});

cljs.core.async.t_cljs$core$async25581.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25581.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25581.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25582","meta25582",37584100,null)], null);
});

cljs.core.async.t_cljs$core$async25581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25581";

cljs.core.async.t_cljs$core$async25581.cljs$lang$ctorPrWriter = (function (this__20530__auto__,writer__20531__auto__,opt__20532__auto__){
return cljs.core._write.call(null,writer__20531__auto__,"cljs.core.async/t_cljs$core$async25581");
});

cljs.core.async.__GT_t_cljs$core$async25581 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25581(map_GT___$1,f__$1,ch__$1,meta25582){
return (new cljs.core.async.t_cljs$core$async25581(map_GT___$1,f__$1,ch__$1,meta25582));
});

}

return (new cljs.core.async.t_cljs$core$async25581(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25587 = (function (filter_GT_,p,ch,meta25588){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25588 = meta25588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25589,meta25588__$1){
var self__ = this;
var _25589__$1 = this;
return (new cljs.core.async.t_cljs$core$async25587(self__.filter_GT_,self__.p,self__.ch,meta25588__$1));
});

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25589){
var self__ = this;
var _25589__$1 = this;
return self__.meta25588;
});

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25588","meta25588",-1459907334,null)], null);
});

cljs.core.async.t_cljs$core$async25587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25587";

cljs.core.async.t_cljs$core$async25587.cljs$lang$ctorPrWriter = (function (this__20530__auto__,writer__20531__auto__,opt__20532__auto__){
return cljs.core._write.call(null,writer__20531__auto__,"cljs.core.async/t_cljs$core$async25587");
});

cljs.core.async.__GT_t_cljs$core$async25587 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25587(filter_GT___$1,p__$1,ch__$1,meta25588){
return (new cljs.core.async.t_cljs$core$async25587(filter_GT___$1,p__$1,ch__$1,meta25588));
});

}

return (new cljs.core.async.t_cljs$core$async25587(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25590 = [];
var len__20994__auto___25634 = arguments.length;
var i__20995__auto___25635 = (0);
while(true){
if((i__20995__auto___25635 < len__20994__auto___25634)){
args25590.push((arguments[i__20995__auto___25635]));

var G__25636 = (i__20995__auto___25635 + (1));
i__20995__auto___25635 = G__25636;
continue;
} else {
}
break;
}

var G__25592 = args25590.length;
switch (G__25592) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25590.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23388__auto___25638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___25638,out){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___25638,out){
return (function (state_25613){
var state_val_25614 = (state_25613[(1)]);
if((state_val_25614 === (7))){
var inst_25609 = (state_25613[(2)]);
var state_25613__$1 = state_25613;
var statearr_25615_25639 = state_25613__$1;
(statearr_25615_25639[(2)] = inst_25609);

(statearr_25615_25639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (1))){
var state_25613__$1 = state_25613;
var statearr_25616_25640 = state_25613__$1;
(statearr_25616_25640[(2)] = null);

(statearr_25616_25640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (4))){
var inst_25595 = (state_25613[(7)]);
var inst_25595__$1 = (state_25613[(2)]);
var inst_25596 = (inst_25595__$1 == null);
var state_25613__$1 = (function (){var statearr_25617 = state_25613;
(statearr_25617[(7)] = inst_25595__$1);

return statearr_25617;
})();
if(cljs.core.truth_(inst_25596)){
var statearr_25618_25641 = state_25613__$1;
(statearr_25618_25641[(1)] = (5));

} else {
var statearr_25619_25642 = state_25613__$1;
(statearr_25619_25642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (6))){
var inst_25595 = (state_25613[(7)]);
var inst_25600 = p.call(null,inst_25595);
var state_25613__$1 = state_25613;
if(cljs.core.truth_(inst_25600)){
var statearr_25620_25643 = state_25613__$1;
(statearr_25620_25643[(1)] = (8));

} else {
var statearr_25621_25644 = state_25613__$1;
(statearr_25621_25644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (3))){
var inst_25611 = (state_25613[(2)]);
var state_25613__$1 = state_25613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25613__$1,inst_25611);
} else {
if((state_val_25614 === (2))){
var state_25613__$1 = state_25613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25613__$1,(4),ch);
} else {
if((state_val_25614 === (11))){
var inst_25603 = (state_25613[(2)]);
var state_25613__$1 = state_25613;
var statearr_25622_25645 = state_25613__$1;
(statearr_25622_25645[(2)] = inst_25603);

(statearr_25622_25645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (9))){
var state_25613__$1 = state_25613;
var statearr_25623_25646 = state_25613__$1;
(statearr_25623_25646[(2)] = null);

(statearr_25623_25646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (5))){
var inst_25598 = cljs.core.async.close_BANG_.call(null,out);
var state_25613__$1 = state_25613;
var statearr_25624_25647 = state_25613__$1;
(statearr_25624_25647[(2)] = inst_25598);

(statearr_25624_25647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (10))){
var inst_25606 = (state_25613[(2)]);
var state_25613__$1 = (function (){var statearr_25625 = state_25613;
(statearr_25625[(8)] = inst_25606);

return statearr_25625;
})();
var statearr_25626_25648 = state_25613__$1;
(statearr_25626_25648[(2)] = null);

(statearr_25626_25648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (8))){
var inst_25595 = (state_25613[(7)]);
var state_25613__$1 = state_25613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25613__$1,(11),out,inst_25595);
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
});})(c__23388__auto___25638,out))
;
return ((function (switch__23276__auto__,c__23388__auto___25638,out){
return (function() {
var cljs$core$async$state_machine__23277__auto__ = null;
var cljs$core$async$state_machine__23277__auto____0 = (function (){
var statearr_25630 = [null,null,null,null,null,null,null,null,null];
(statearr_25630[(0)] = cljs$core$async$state_machine__23277__auto__);

(statearr_25630[(1)] = (1));

return statearr_25630;
});
var cljs$core$async$state_machine__23277__auto____1 = (function (state_25613){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_25613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e25631){if((e25631 instanceof Object)){
var ex__23280__auto__ = e25631;
var statearr_25632_25649 = state_25613;
(statearr_25632_25649[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25650 = state_25613;
state_25613 = G__25650;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$state_machine__23277__auto__ = function(state_25613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23277__auto____1.call(this,state_25613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23277__auto____0;
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23277__auto____1;
return cljs$core$async$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___25638,out))
})();
var state__23390__auto__ = (function (){var statearr_25633 = f__23389__auto__.call(null);
(statearr_25633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___25638);

return statearr_25633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___25638,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25651 = [];
var len__20994__auto___25654 = arguments.length;
var i__20995__auto___25655 = (0);
while(true){
if((i__20995__auto___25655 < len__20994__auto___25654)){
args25651.push((arguments[i__20995__auto___25655]));

var G__25656 = (i__20995__auto___25655 + (1));
i__20995__auto___25655 = G__25656;
continue;
} else {
}
break;
}

var G__25653 = args25651.length;
switch (G__25653) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25651.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto__){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto__){
return (function (state_25823){
var state_val_25824 = (state_25823[(1)]);
if((state_val_25824 === (7))){
var inst_25819 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25825_25866 = state_25823__$1;
(statearr_25825_25866[(2)] = inst_25819);

(statearr_25825_25866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (20))){
var inst_25789 = (state_25823[(7)]);
var inst_25800 = (state_25823[(2)]);
var inst_25801 = cljs.core.next.call(null,inst_25789);
var inst_25775 = inst_25801;
var inst_25776 = null;
var inst_25777 = (0);
var inst_25778 = (0);
var state_25823__$1 = (function (){var statearr_25826 = state_25823;
(statearr_25826[(8)] = inst_25777);

(statearr_25826[(9)] = inst_25800);

(statearr_25826[(10)] = inst_25775);

(statearr_25826[(11)] = inst_25778);

(statearr_25826[(12)] = inst_25776);

return statearr_25826;
})();
var statearr_25827_25867 = state_25823__$1;
(statearr_25827_25867[(2)] = null);

(statearr_25827_25867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (1))){
var state_25823__$1 = state_25823;
var statearr_25828_25868 = state_25823__$1;
(statearr_25828_25868[(2)] = null);

(statearr_25828_25868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (4))){
var inst_25764 = (state_25823[(13)]);
var inst_25764__$1 = (state_25823[(2)]);
var inst_25765 = (inst_25764__$1 == null);
var state_25823__$1 = (function (){var statearr_25829 = state_25823;
(statearr_25829[(13)] = inst_25764__$1);

return statearr_25829;
})();
if(cljs.core.truth_(inst_25765)){
var statearr_25830_25869 = state_25823__$1;
(statearr_25830_25869[(1)] = (5));

} else {
var statearr_25831_25870 = state_25823__$1;
(statearr_25831_25870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (15))){
var state_25823__$1 = state_25823;
var statearr_25835_25871 = state_25823__$1;
(statearr_25835_25871[(2)] = null);

(statearr_25835_25871[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (21))){
var state_25823__$1 = state_25823;
var statearr_25836_25872 = state_25823__$1;
(statearr_25836_25872[(2)] = null);

(statearr_25836_25872[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (13))){
var inst_25777 = (state_25823[(8)]);
var inst_25775 = (state_25823[(10)]);
var inst_25778 = (state_25823[(11)]);
var inst_25776 = (state_25823[(12)]);
var inst_25785 = (state_25823[(2)]);
var inst_25786 = (inst_25778 + (1));
var tmp25832 = inst_25777;
var tmp25833 = inst_25775;
var tmp25834 = inst_25776;
var inst_25775__$1 = tmp25833;
var inst_25776__$1 = tmp25834;
var inst_25777__$1 = tmp25832;
var inst_25778__$1 = inst_25786;
var state_25823__$1 = (function (){var statearr_25837 = state_25823;
(statearr_25837[(8)] = inst_25777__$1);

(statearr_25837[(10)] = inst_25775__$1);

(statearr_25837[(11)] = inst_25778__$1);

(statearr_25837[(14)] = inst_25785);

(statearr_25837[(12)] = inst_25776__$1);

return statearr_25837;
})();
var statearr_25838_25873 = state_25823__$1;
(statearr_25838_25873[(2)] = null);

(statearr_25838_25873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (22))){
var state_25823__$1 = state_25823;
var statearr_25839_25874 = state_25823__$1;
(statearr_25839_25874[(2)] = null);

(statearr_25839_25874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (6))){
var inst_25764 = (state_25823[(13)]);
var inst_25773 = f.call(null,inst_25764);
var inst_25774 = cljs.core.seq.call(null,inst_25773);
var inst_25775 = inst_25774;
var inst_25776 = null;
var inst_25777 = (0);
var inst_25778 = (0);
var state_25823__$1 = (function (){var statearr_25840 = state_25823;
(statearr_25840[(8)] = inst_25777);

(statearr_25840[(10)] = inst_25775);

(statearr_25840[(11)] = inst_25778);

(statearr_25840[(12)] = inst_25776);

return statearr_25840;
})();
var statearr_25841_25875 = state_25823__$1;
(statearr_25841_25875[(2)] = null);

(statearr_25841_25875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (17))){
var inst_25789 = (state_25823[(7)]);
var inst_25793 = cljs.core.chunk_first.call(null,inst_25789);
var inst_25794 = cljs.core.chunk_rest.call(null,inst_25789);
var inst_25795 = cljs.core.count.call(null,inst_25793);
var inst_25775 = inst_25794;
var inst_25776 = inst_25793;
var inst_25777 = inst_25795;
var inst_25778 = (0);
var state_25823__$1 = (function (){var statearr_25842 = state_25823;
(statearr_25842[(8)] = inst_25777);

(statearr_25842[(10)] = inst_25775);

(statearr_25842[(11)] = inst_25778);

(statearr_25842[(12)] = inst_25776);

return statearr_25842;
})();
var statearr_25843_25876 = state_25823__$1;
(statearr_25843_25876[(2)] = null);

(statearr_25843_25876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (3))){
var inst_25821 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25823__$1,inst_25821);
} else {
if((state_val_25824 === (12))){
var inst_25809 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25844_25877 = state_25823__$1;
(statearr_25844_25877[(2)] = inst_25809);

(statearr_25844_25877[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (2))){
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25823__$1,(4),in$);
} else {
if((state_val_25824 === (23))){
var inst_25817 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25845_25878 = state_25823__$1;
(statearr_25845_25878[(2)] = inst_25817);

(statearr_25845_25878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (19))){
var inst_25804 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25846_25879 = state_25823__$1;
(statearr_25846_25879[(2)] = inst_25804);

(statearr_25846_25879[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (11))){
var inst_25789 = (state_25823[(7)]);
var inst_25775 = (state_25823[(10)]);
var inst_25789__$1 = cljs.core.seq.call(null,inst_25775);
var state_25823__$1 = (function (){var statearr_25847 = state_25823;
(statearr_25847[(7)] = inst_25789__$1);

return statearr_25847;
})();
if(inst_25789__$1){
var statearr_25848_25880 = state_25823__$1;
(statearr_25848_25880[(1)] = (14));

} else {
var statearr_25849_25881 = state_25823__$1;
(statearr_25849_25881[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (9))){
var inst_25811 = (state_25823[(2)]);
var inst_25812 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25823__$1 = (function (){var statearr_25850 = state_25823;
(statearr_25850[(15)] = inst_25811);

return statearr_25850;
})();
if(cljs.core.truth_(inst_25812)){
var statearr_25851_25882 = state_25823__$1;
(statearr_25851_25882[(1)] = (21));

} else {
var statearr_25852_25883 = state_25823__$1;
(statearr_25852_25883[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (5))){
var inst_25767 = cljs.core.async.close_BANG_.call(null,out);
var state_25823__$1 = state_25823;
var statearr_25853_25884 = state_25823__$1;
(statearr_25853_25884[(2)] = inst_25767);

(statearr_25853_25884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (14))){
var inst_25789 = (state_25823[(7)]);
var inst_25791 = cljs.core.chunked_seq_QMARK_.call(null,inst_25789);
var state_25823__$1 = state_25823;
if(inst_25791){
var statearr_25854_25885 = state_25823__$1;
(statearr_25854_25885[(1)] = (17));

} else {
var statearr_25855_25886 = state_25823__$1;
(statearr_25855_25886[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (16))){
var inst_25807 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25856_25887 = state_25823__$1;
(statearr_25856_25887[(2)] = inst_25807);

(statearr_25856_25887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (10))){
var inst_25778 = (state_25823[(11)]);
var inst_25776 = (state_25823[(12)]);
var inst_25783 = cljs.core._nth.call(null,inst_25776,inst_25778);
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25823__$1,(13),out,inst_25783);
} else {
if((state_val_25824 === (18))){
var inst_25789 = (state_25823[(7)]);
var inst_25798 = cljs.core.first.call(null,inst_25789);
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25823__$1,(20),out,inst_25798);
} else {
if((state_val_25824 === (8))){
var inst_25777 = (state_25823[(8)]);
var inst_25778 = (state_25823[(11)]);
var inst_25780 = (inst_25778 < inst_25777);
var inst_25781 = inst_25780;
var state_25823__$1 = state_25823;
if(cljs.core.truth_(inst_25781)){
var statearr_25857_25888 = state_25823__$1;
(statearr_25857_25888[(1)] = (10));

} else {
var statearr_25858_25889 = state_25823__$1;
(statearr_25858_25889[(1)] = (11));

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
});})(c__23388__auto__))
;
return ((function (switch__23276__auto__,c__23388__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23277__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23277__auto____0 = (function (){
var statearr_25862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25862[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23277__auto__);

(statearr_25862[(1)] = (1));

return statearr_25862;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23277__auto____1 = (function (state_25823){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_25823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e25863){if((e25863 instanceof Object)){
var ex__23280__auto__ = e25863;
var statearr_25864_25890 = state_25823;
(statearr_25864_25890[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25891 = state_25823;
state_25823 = G__25891;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23277__auto__ = function(state_25823){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23277__auto____1.call(this,state_25823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23277__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23277__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto__))
})();
var state__23390__auto__ = (function (){var statearr_25865 = f__23389__auto__.call(null);
(statearr_25865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto__);

return statearr_25865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto__))
);

return c__23388__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25892 = [];
var len__20994__auto___25895 = arguments.length;
var i__20995__auto___25896 = (0);
while(true){
if((i__20995__auto___25896 < len__20994__auto___25895)){
args25892.push((arguments[i__20995__auto___25896]));

var G__25897 = (i__20995__auto___25896 + (1));
i__20995__auto___25896 = G__25897;
continue;
} else {
}
break;
}

var G__25894 = args25892.length;
switch (G__25894) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25892.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25899 = [];
var len__20994__auto___25902 = arguments.length;
var i__20995__auto___25903 = (0);
while(true){
if((i__20995__auto___25903 < len__20994__auto___25902)){
args25899.push((arguments[i__20995__auto___25903]));

var G__25904 = (i__20995__auto___25903 + (1));
i__20995__auto___25903 = G__25904;
continue;
} else {
}
break;
}

var G__25901 = args25899.length;
switch (G__25901) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25899.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25906 = [];
var len__20994__auto___25957 = arguments.length;
var i__20995__auto___25958 = (0);
while(true){
if((i__20995__auto___25958 < len__20994__auto___25957)){
args25906.push((arguments[i__20995__auto___25958]));

var G__25959 = (i__20995__auto___25958 + (1));
i__20995__auto___25958 = G__25959;
continue;
} else {
}
break;
}

var G__25908 = args25906.length;
switch (G__25908) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25906.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23388__auto___25961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___25961,out){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___25961,out){
return (function (state_25932){
var state_val_25933 = (state_25932[(1)]);
if((state_val_25933 === (7))){
var inst_25927 = (state_25932[(2)]);
var state_25932__$1 = state_25932;
var statearr_25934_25962 = state_25932__$1;
(statearr_25934_25962[(2)] = inst_25927);

(statearr_25934_25962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (1))){
var inst_25909 = null;
var state_25932__$1 = (function (){var statearr_25935 = state_25932;
(statearr_25935[(7)] = inst_25909);

return statearr_25935;
})();
var statearr_25936_25963 = state_25932__$1;
(statearr_25936_25963[(2)] = null);

(statearr_25936_25963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (4))){
var inst_25912 = (state_25932[(8)]);
var inst_25912__$1 = (state_25932[(2)]);
var inst_25913 = (inst_25912__$1 == null);
var inst_25914 = cljs.core.not.call(null,inst_25913);
var state_25932__$1 = (function (){var statearr_25937 = state_25932;
(statearr_25937[(8)] = inst_25912__$1);

return statearr_25937;
})();
if(inst_25914){
var statearr_25938_25964 = state_25932__$1;
(statearr_25938_25964[(1)] = (5));

} else {
var statearr_25939_25965 = state_25932__$1;
(statearr_25939_25965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (6))){
var state_25932__$1 = state_25932;
var statearr_25940_25966 = state_25932__$1;
(statearr_25940_25966[(2)] = null);

(statearr_25940_25966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (3))){
var inst_25929 = (state_25932[(2)]);
var inst_25930 = cljs.core.async.close_BANG_.call(null,out);
var state_25932__$1 = (function (){var statearr_25941 = state_25932;
(statearr_25941[(9)] = inst_25929);

return statearr_25941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25932__$1,inst_25930);
} else {
if((state_val_25933 === (2))){
var state_25932__$1 = state_25932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25932__$1,(4),ch);
} else {
if((state_val_25933 === (11))){
var inst_25912 = (state_25932[(8)]);
var inst_25921 = (state_25932[(2)]);
var inst_25909 = inst_25912;
var state_25932__$1 = (function (){var statearr_25942 = state_25932;
(statearr_25942[(7)] = inst_25909);

(statearr_25942[(10)] = inst_25921);

return statearr_25942;
})();
var statearr_25943_25967 = state_25932__$1;
(statearr_25943_25967[(2)] = null);

(statearr_25943_25967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (9))){
var inst_25912 = (state_25932[(8)]);
var state_25932__$1 = state_25932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25932__$1,(11),out,inst_25912);
} else {
if((state_val_25933 === (5))){
var inst_25909 = (state_25932[(7)]);
var inst_25912 = (state_25932[(8)]);
var inst_25916 = cljs.core._EQ_.call(null,inst_25912,inst_25909);
var state_25932__$1 = state_25932;
if(inst_25916){
var statearr_25945_25968 = state_25932__$1;
(statearr_25945_25968[(1)] = (8));

} else {
var statearr_25946_25969 = state_25932__$1;
(statearr_25946_25969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (10))){
var inst_25924 = (state_25932[(2)]);
var state_25932__$1 = state_25932;
var statearr_25947_25970 = state_25932__$1;
(statearr_25947_25970[(2)] = inst_25924);

(statearr_25947_25970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (8))){
var inst_25909 = (state_25932[(7)]);
var tmp25944 = inst_25909;
var inst_25909__$1 = tmp25944;
var state_25932__$1 = (function (){var statearr_25948 = state_25932;
(statearr_25948[(7)] = inst_25909__$1);

return statearr_25948;
})();
var statearr_25949_25971 = state_25932__$1;
(statearr_25949_25971[(2)] = null);

(statearr_25949_25971[(1)] = (2));


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
});})(c__23388__auto___25961,out))
;
return ((function (switch__23276__auto__,c__23388__auto___25961,out){
return (function() {
var cljs$core$async$state_machine__23277__auto__ = null;
var cljs$core$async$state_machine__23277__auto____0 = (function (){
var statearr_25953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25953[(0)] = cljs$core$async$state_machine__23277__auto__);

(statearr_25953[(1)] = (1));

return statearr_25953;
});
var cljs$core$async$state_machine__23277__auto____1 = (function (state_25932){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_25932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e25954){if((e25954 instanceof Object)){
var ex__23280__auto__ = e25954;
var statearr_25955_25972 = state_25932;
(statearr_25955_25972[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25973 = state_25932;
state_25932 = G__25973;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$state_machine__23277__auto__ = function(state_25932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23277__auto____1.call(this,state_25932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23277__auto____0;
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23277__auto____1;
return cljs$core$async$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___25961,out))
})();
var state__23390__auto__ = (function (){var statearr_25956 = f__23389__auto__.call(null);
(statearr_25956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___25961);

return statearr_25956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___25961,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25974 = [];
var len__20994__auto___26044 = arguments.length;
var i__20995__auto___26045 = (0);
while(true){
if((i__20995__auto___26045 < len__20994__auto___26044)){
args25974.push((arguments[i__20995__auto___26045]));

var G__26046 = (i__20995__auto___26045 + (1));
i__20995__auto___26045 = G__26046;
continue;
} else {
}
break;
}

var G__25976 = args25974.length;
switch (G__25976) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25974.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23388__auto___26048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___26048,out){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___26048,out){
return (function (state_26014){
var state_val_26015 = (state_26014[(1)]);
if((state_val_26015 === (7))){
var inst_26010 = (state_26014[(2)]);
var state_26014__$1 = state_26014;
var statearr_26016_26049 = state_26014__$1;
(statearr_26016_26049[(2)] = inst_26010);

(statearr_26016_26049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26015 === (1))){
var inst_25977 = (new Array(n));
var inst_25978 = inst_25977;
var inst_25979 = (0);
var state_26014__$1 = (function (){var statearr_26017 = state_26014;
(statearr_26017[(7)] = inst_25978);

(statearr_26017[(8)] = inst_25979);

return statearr_26017;
})();
var statearr_26018_26050 = state_26014__$1;
(statearr_26018_26050[(2)] = null);

(statearr_26018_26050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26015 === (4))){
var inst_25982 = (state_26014[(9)]);
var inst_25982__$1 = (state_26014[(2)]);
var inst_25983 = (inst_25982__$1 == null);
var inst_25984 = cljs.core.not.call(null,inst_25983);
var state_26014__$1 = (function (){var statearr_26019 = state_26014;
(statearr_26019[(9)] = inst_25982__$1);

return statearr_26019;
})();
if(inst_25984){
var statearr_26020_26051 = state_26014__$1;
(statearr_26020_26051[(1)] = (5));

} else {
var statearr_26021_26052 = state_26014__$1;
(statearr_26021_26052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26015 === (15))){
var inst_26004 = (state_26014[(2)]);
var state_26014__$1 = state_26014;
var statearr_26022_26053 = state_26014__$1;
(statearr_26022_26053[(2)] = inst_26004);

(statearr_26022_26053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26015 === (13))){
var state_26014__$1 = state_26014;
var statearr_26023_26054 = state_26014__$1;
(statearr_26023_26054[(2)] = null);

(statearr_26023_26054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26015 === (6))){
var inst_25979 = (state_26014[(8)]);
var inst_26000 = (inst_25979 > (0));
var state_26014__$1 = state_26014;
if(cljs.core.truth_(inst_26000)){
var statearr_26024_26055 = state_26014__$1;
(statearr_26024_26055[(1)] = (12));

} else {
var statearr_26025_26056 = state_26014__$1;
(statearr_26025_26056[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26015 === (3))){
var inst_26012 = (state_26014[(2)]);
var state_26014__$1 = state_26014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26014__$1,inst_26012);
} else {
if((state_val_26015 === (12))){
var inst_25978 = (state_26014[(7)]);
var inst_26002 = cljs.core.vec.call(null,inst_25978);
var state_26014__$1 = state_26014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26014__$1,(15),out,inst_26002);
} else {
if((state_val_26015 === (2))){
var state_26014__$1 = state_26014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26014__$1,(4),ch);
} else {
if((state_val_26015 === (11))){
var inst_25994 = (state_26014[(2)]);
var inst_25995 = (new Array(n));
var inst_25978 = inst_25995;
var inst_25979 = (0);
var state_26014__$1 = (function (){var statearr_26026 = state_26014;
(statearr_26026[(10)] = inst_25994);

(statearr_26026[(7)] = inst_25978);

(statearr_26026[(8)] = inst_25979);

return statearr_26026;
})();
var statearr_26027_26057 = state_26014__$1;
(statearr_26027_26057[(2)] = null);

(statearr_26027_26057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26015 === (9))){
var inst_25978 = (state_26014[(7)]);
var inst_25992 = cljs.core.vec.call(null,inst_25978);
var state_26014__$1 = state_26014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26014__$1,(11),out,inst_25992);
} else {
if((state_val_26015 === (5))){
var inst_25982 = (state_26014[(9)]);
var inst_25978 = (state_26014[(7)]);
var inst_25979 = (state_26014[(8)]);
var inst_25987 = (state_26014[(11)]);
var inst_25986 = (inst_25978[inst_25979] = inst_25982);
var inst_25987__$1 = (inst_25979 + (1));
var inst_25988 = (inst_25987__$1 < n);
var state_26014__$1 = (function (){var statearr_26028 = state_26014;
(statearr_26028[(12)] = inst_25986);

(statearr_26028[(11)] = inst_25987__$1);

return statearr_26028;
})();
if(cljs.core.truth_(inst_25988)){
var statearr_26029_26058 = state_26014__$1;
(statearr_26029_26058[(1)] = (8));

} else {
var statearr_26030_26059 = state_26014__$1;
(statearr_26030_26059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26015 === (14))){
var inst_26007 = (state_26014[(2)]);
var inst_26008 = cljs.core.async.close_BANG_.call(null,out);
var state_26014__$1 = (function (){var statearr_26032 = state_26014;
(statearr_26032[(13)] = inst_26007);

return statearr_26032;
})();
var statearr_26033_26060 = state_26014__$1;
(statearr_26033_26060[(2)] = inst_26008);

(statearr_26033_26060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26015 === (10))){
var inst_25998 = (state_26014[(2)]);
var state_26014__$1 = state_26014;
var statearr_26034_26061 = state_26014__$1;
(statearr_26034_26061[(2)] = inst_25998);

(statearr_26034_26061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26015 === (8))){
var inst_25978 = (state_26014[(7)]);
var inst_25987 = (state_26014[(11)]);
var tmp26031 = inst_25978;
var inst_25978__$1 = tmp26031;
var inst_25979 = inst_25987;
var state_26014__$1 = (function (){var statearr_26035 = state_26014;
(statearr_26035[(7)] = inst_25978__$1);

(statearr_26035[(8)] = inst_25979);

return statearr_26035;
})();
var statearr_26036_26062 = state_26014__$1;
(statearr_26036_26062[(2)] = null);

(statearr_26036_26062[(1)] = (2));


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
});})(c__23388__auto___26048,out))
;
return ((function (switch__23276__auto__,c__23388__auto___26048,out){
return (function() {
var cljs$core$async$state_machine__23277__auto__ = null;
var cljs$core$async$state_machine__23277__auto____0 = (function (){
var statearr_26040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26040[(0)] = cljs$core$async$state_machine__23277__auto__);

(statearr_26040[(1)] = (1));

return statearr_26040;
});
var cljs$core$async$state_machine__23277__auto____1 = (function (state_26014){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_26014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e26041){if((e26041 instanceof Object)){
var ex__23280__auto__ = e26041;
var statearr_26042_26063 = state_26014;
(statearr_26042_26063[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26064 = state_26014;
state_26014 = G__26064;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$state_machine__23277__auto__ = function(state_26014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23277__auto____1.call(this,state_26014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23277__auto____0;
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23277__auto____1;
return cljs$core$async$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___26048,out))
})();
var state__23390__auto__ = (function (){var statearr_26043 = f__23389__auto__.call(null);
(statearr_26043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___26048);

return statearr_26043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___26048,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26065 = [];
var len__20994__auto___26139 = arguments.length;
var i__20995__auto___26140 = (0);
while(true){
if((i__20995__auto___26140 < len__20994__auto___26139)){
args26065.push((arguments[i__20995__auto___26140]));

var G__26141 = (i__20995__auto___26140 + (1));
i__20995__auto___26140 = G__26141;
continue;
} else {
}
break;
}

var G__26067 = args26065.length;
switch (G__26067) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26065.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23388__auto___26143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23388__auto___26143,out){
return (function (){
var f__23389__auto__ = (function (){var switch__23276__auto__ = ((function (c__23388__auto___26143,out){
return (function (state_26109){
var state_val_26110 = (state_26109[(1)]);
if((state_val_26110 === (7))){
var inst_26105 = (state_26109[(2)]);
var state_26109__$1 = state_26109;
var statearr_26111_26144 = state_26109__$1;
(statearr_26111_26144[(2)] = inst_26105);

(statearr_26111_26144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26110 === (1))){
var inst_26068 = [];
var inst_26069 = inst_26068;
var inst_26070 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26109__$1 = (function (){var statearr_26112 = state_26109;
(statearr_26112[(7)] = inst_26070);

(statearr_26112[(8)] = inst_26069);

return statearr_26112;
})();
var statearr_26113_26145 = state_26109__$1;
(statearr_26113_26145[(2)] = null);

(statearr_26113_26145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26110 === (4))){
var inst_26073 = (state_26109[(9)]);
var inst_26073__$1 = (state_26109[(2)]);
var inst_26074 = (inst_26073__$1 == null);
var inst_26075 = cljs.core.not.call(null,inst_26074);
var state_26109__$1 = (function (){var statearr_26114 = state_26109;
(statearr_26114[(9)] = inst_26073__$1);

return statearr_26114;
})();
if(inst_26075){
var statearr_26115_26146 = state_26109__$1;
(statearr_26115_26146[(1)] = (5));

} else {
var statearr_26116_26147 = state_26109__$1;
(statearr_26116_26147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26110 === (15))){
var inst_26099 = (state_26109[(2)]);
var state_26109__$1 = state_26109;
var statearr_26117_26148 = state_26109__$1;
(statearr_26117_26148[(2)] = inst_26099);

(statearr_26117_26148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26110 === (13))){
var state_26109__$1 = state_26109;
var statearr_26118_26149 = state_26109__$1;
(statearr_26118_26149[(2)] = null);

(statearr_26118_26149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26110 === (6))){
var inst_26069 = (state_26109[(8)]);
var inst_26094 = inst_26069.length;
var inst_26095 = (inst_26094 > (0));
var state_26109__$1 = state_26109;
if(cljs.core.truth_(inst_26095)){
var statearr_26119_26150 = state_26109__$1;
(statearr_26119_26150[(1)] = (12));

} else {
var statearr_26120_26151 = state_26109__$1;
(statearr_26120_26151[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26110 === (3))){
var inst_26107 = (state_26109[(2)]);
var state_26109__$1 = state_26109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26109__$1,inst_26107);
} else {
if((state_val_26110 === (12))){
var inst_26069 = (state_26109[(8)]);
var inst_26097 = cljs.core.vec.call(null,inst_26069);
var state_26109__$1 = state_26109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26109__$1,(15),out,inst_26097);
} else {
if((state_val_26110 === (2))){
var state_26109__$1 = state_26109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26109__$1,(4),ch);
} else {
if((state_val_26110 === (11))){
var inst_26073 = (state_26109[(9)]);
var inst_26077 = (state_26109[(10)]);
var inst_26087 = (state_26109[(2)]);
var inst_26088 = [];
var inst_26089 = inst_26088.push(inst_26073);
var inst_26069 = inst_26088;
var inst_26070 = inst_26077;
var state_26109__$1 = (function (){var statearr_26121 = state_26109;
(statearr_26121[(11)] = inst_26089);

(statearr_26121[(7)] = inst_26070);

(statearr_26121[(8)] = inst_26069);

(statearr_26121[(12)] = inst_26087);

return statearr_26121;
})();
var statearr_26122_26152 = state_26109__$1;
(statearr_26122_26152[(2)] = null);

(statearr_26122_26152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26110 === (9))){
var inst_26069 = (state_26109[(8)]);
var inst_26085 = cljs.core.vec.call(null,inst_26069);
var state_26109__$1 = state_26109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26109__$1,(11),out,inst_26085);
} else {
if((state_val_26110 === (5))){
var inst_26073 = (state_26109[(9)]);
var inst_26077 = (state_26109[(10)]);
var inst_26070 = (state_26109[(7)]);
var inst_26077__$1 = f.call(null,inst_26073);
var inst_26078 = cljs.core._EQ_.call(null,inst_26077__$1,inst_26070);
var inst_26079 = cljs.core.keyword_identical_QMARK_.call(null,inst_26070,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26080 = (inst_26078) || (inst_26079);
var state_26109__$1 = (function (){var statearr_26123 = state_26109;
(statearr_26123[(10)] = inst_26077__$1);

return statearr_26123;
})();
if(cljs.core.truth_(inst_26080)){
var statearr_26124_26153 = state_26109__$1;
(statearr_26124_26153[(1)] = (8));

} else {
var statearr_26125_26154 = state_26109__$1;
(statearr_26125_26154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26110 === (14))){
var inst_26102 = (state_26109[(2)]);
var inst_26103 = cljs.core.async.close_BANG_.call(null,out);
var state_26109__$1 = (function (){var statearr_26127 = state_26109;
(statearr_26127[(13)] = inst_26102);

return statearr_26127;
})();
var statearr_26128_26155 = state_26109__$1;
(statearr_26128_26155[(2)] = inst_26103);

(statearr_26128_26155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26110 === (10))){
var inst_26092 = (state_26109[(2)]);
var state_26109__$1 = state_26109;
var statearr_26129_26156 = state_26109__$1;
(statearr_26129_26156[(2)] = inst_26092);

(statearr_26129_26156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26110 === (8))){
var inst_26073 = (state_26109[(9)]);
var inst_26077 = (state_26109[(10)]);
var inst_26069 = (state_26109[(8)]);
var inst_26082 = inst_26069.push(inst_26073);
var tmp26126 = inst_26069;
var inst_26069__$1 = tmp26126;
var inst_26070 = inst_26077;
var state_26109__$1 = (function (){var statearr_26130 = state_26109;
(statearr_26130[(14)] = inst_26082);

(statearr_26130[(7)] = inst_26070);

(statearr_26130[(8)] = inst_26069__$1);

return statearr_26130;
})();
var statearr_26131_26157 = state_26109__$1;
(statearr_26131_26157[(2)] = null);

(statearr_26131_26157[(1)] = (2));


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
});})(c__23388__auto___26143,out))
;
return ((function (switch__23276__auto__,c__23388__auto___26143,out){
return (function() {
var cljs$core$async$state_machine__23277__auto__ = null;
var cljs$core$async$state_machine__23277__auto____0 = (function (){
var statearr_26135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26135[(0)] = cljs$core$async$state_machine__23277__auto__);

(statearr_26135[(1)] = (1));

return statearr_26135;
});
var cljs$core$async$state_machine__23277__auto____1 = (function (state_26109){
while(true){
var ret_value__23278__auto__ = (function (){try{while(true){
var result__23279__auto__ = switch__23276__auto__.call(null,state_26109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23279__auto__;
}
break;
}
}catch (e26136){if((e26136 instanceof Object)){
var ex__23280__auto__ = e26136;
var statearr_26137_26158 = state_26109;
(statearr_26137_26158[(5)] = ex__23280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26159 = state_26109;
state_26109 = G__26159;
continue;
} else {
return ret_value__23278__auto__;
}
break;
}
});
cljs$core$async$state_machine__23277__auto__ = function(state_26109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23277__auto____1.call(this,state_26109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23277__auto____0;
cljs$core$async$state_machine__23277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23277__auto____1;
return cljs$core$async$state_machine__23277__auto__;
})()
;})(switch__23276__auto__,c__23388__auto___26143,out))
})();
var state__23390__auto__ = (function (){var statearr_26138 = f__23389__auto__.call(null);
(statearr_26138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23388__auto___26143);

return statearr_26138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23390__auto__);
});})(c__23388__auto___26143,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1472593625368