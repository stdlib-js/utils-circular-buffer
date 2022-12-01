// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.floor;function e(e){return t(e)===e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;var c=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,c,s,h;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(f.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),s="get"in r,h="set"in r,c&&(s||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(t,e,r.get),h&&a&&a.call(t,e,r.set),t};function s(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function h(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function g(t,e){return null!=t&&b.call(t,e)}var v="function"==typeof Symbol?Symbol.toStringTag:"";var m=_()?function(t){var e,r,n;if(null==t)return y.call(t);r=t[v],e=g(t,v);try{t[v]=void 0}catch(e){return y.call(t)}return n=y.call(t),e?t[v]=r:delete t[v],n}:function(t){return y.call(t)},d=Number,j=d.prototype.toString;var S=_();function O(t){return"object"==typeof t&&(t instanceof d||(S?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function w(t){return h(t)||O(t)}s(w,"isPrimitive",h),s(w,"isObject",O);var I=Number.POSITIVE_INFINITY,P=d.NEGATIVE_INFINITY;function T(t){return t<I&&t>P&&e(t)}function N(t){return h(t)&&T(t)}function E(t){return O(t)&&T(t.valueOf())}function V(t){return N(t)||E(t)}function A(t){return N(t)&&t>0}function k(t){return E(t)&&t.valueOf()>0}function x(t){return A(t)||k(t)}function F(t){return N(t)&&t>=0}function G(t){return E(t)&&t.valueOf()>=0}function C(t){return F(t)||G(t)}function M(t,e,r){c(t,e,{configurable:!1,enumerable:!1,get:r})}s(V,"isPrimitive",N),s(V,"isObject",E),s(x,"isPrimitive",A),s(x,"isObject",k),s(C,"isPrimitive",F),s(C,"isObject",G);var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null,z=17976931348623157e292;function B(t,e){return t[e]}function J(t,e){return t.get(e)}function R(t,e,r){t[e]=r}function U(t,e,r){t.set(r,e)}function q(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function D(t){var r,n,o,i,u;if(!(this instanceof D))return new D(t);if(A(t))for(r=[],n=0;n<t;n++)r.push(0);else{if(!("object"==typeof(o=t)&&null!==o&&"number"==typeof o.length&&e(o.length)&&o.length>=0&&o.length<=9007199254740991))throw new TypeError(q("invalid argument. Must provide either a valid buffer size (i.e., a positive integer) or an array-like object which can serve as the underlying buffer. Value: `%s`.",t));r=t}return this._buffer=(i=r,u=Boolean(i.get&&i.set),{data:i,accessors:u,getter:u?J:B,setter:u?U:R}),this._length=r.length,this._count=0,this._i=-1,this}s(D.prototype,"clear",(function(){return this._count=0,this._i=-1,this})),M(D.prototype,"count",(function(){return this._count})),M(D.prototype,"full",(function(){return this._count===this._length})),s(D.prototype,"iterator",(function(t){var e,r,n,o,i,u;if(arguments.length){if(!F(t))throw new TypeError(q("0is2V",t));o=t}else o=z;return r=this,u=this._i,i=0,s(e={},"next",a),s(e,"return",f),Y&&s(e,Y,l),e;function a(){return i+=1,n||i>o?{done:!0}:r._count!==r._length?(n=!0,{done:!0}):(u=(u+1)%r._length,{value:r._buffer.getter(r._buffer.data,u),done:!1})}function f(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return r.iterator(o)}})),M(D.prototype,"length",(function(){return this._length})),s(D.prototype,"push",(function(t){var e,r,n,o;return n=this._buffer.data,r=this._buffer.getter,e=this._buffer.setter,this._i=(this._i+1)%this._length,this._count<this._length?(e(n,this._i,t),void(this._count+=1)):(o=r(n,this._i),e(n,this._i,t),o)})),s(D.prototype,"toArray",(function(){var t,e,r,n,o;for(t=this._buffer.data,e=this._buffer.getter,r=[],o=1;o<=this._count;o++)n=(this._i+o)%this._count,r.push(e(t,n));return r})),s(D.prototype,"toJSON",(function(){var t={type:"circular-buffer"};return t.length=this._length,t.data=this.toArray(),t}));export{D as default};
//# sourceMappingURL=mod.js.map
