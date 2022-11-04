// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function f(r){var i,s;if(!(this instanceof f))return new f(r);if(e(r))for(i=[],s=0;s<r;s++)i.push(0);else{if(!t(r))throw new TypeError(u("invalid argument. Must provide either a valid buffer size (i.e., a positive integer) or an array-like object which can serve as the underlying buffer. Value: `%s`.",r));i=r}return this._buffer=h(i),this._length=i.length,this._count=0,this._i=-1,this}i(f.prototype,"clear",(function(){return this._count=0,this._i=-1,this})),s(f.prototype,"count",(function(){return this._count})),s(f.prototype,"full",(function(){return this._count===this._length})),i(f.prototype,"iterator",(function(t){var e,s,h,f,l,d;if(arguments.length){if(!r(t))throw new TypeError(u("0is2V",t));f=t}else f=o;return s=this,d=this._i,l=0,i(e={},"next",a),i(e,"return",p),n&&i(e,n,c),e;function a(){return l+=1,h||l>f?{done:!0}:s._count!==s._length?(h=!0,{done:!0}):(d=(d+1)%s._length,{value:s._buffer.getter(s._buffer.data,d),done:!1})}function p(t){return h=!0,arguments.length?{value:t,done:!0}:{done:!0}}function c(){return s.iterator(f)}})),s(f.prototype,"length",(function(){return this._length})),i(f.prototype,"push",(function(t){var e,r,i,s;return i=this._buffer.data,r=this._buffer.getter,e=this._buffer.setter,this._i=(this._i+1)%this._length,this._count<this._length?(e(i,this._i,t),void(this._count+=1)):(s=r(i,this._i),e(i,this._i,t),s)})),i(f.prototype,"toArray",(function(){var t,e,r,i,s;for(t=this._buffer.data,e=this._buffer.getter,r=[],s=1;s<=this._count;s++)i=(this._i+s)%this._count,r.push(e(t,i));return r})),i(f.prototype,"toJSON",(function(){var t={type:"circular-buffer"};return t.length=this._length,t.data=this.toArray(),t}));export{f as default};
//# sourceMappingURL=index.mjs.map
