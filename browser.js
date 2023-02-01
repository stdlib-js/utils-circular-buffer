// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t=Math.floor;function e(e){return t(e)===e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,s,h;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),s="get"in r,h="set"in r,a&&(s||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(t,e,r.get),h&&c&&c.call(t,e,r.set),t};function s(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function h(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString,b=Object.prototype.hasOwnProperty;function g(t,e){return null!=t&&b.call(t,e)}var d="function"==typeof Symbol?Symbol.toStringTag:"",v=y()?function(t){var e,r,n;if(null==t)return _.call(t);r=t[d],e=g(t,d);try{t[d]=void 0}catch(e){return _.call(t)}return n=_.call(t),e?t[d]=r:delete t[d],n}:function(t){return _.call(t)},m=Number,j=m.prototype.toString,S=y();function O(t){return"object"==typeof t&&(t instanceof m||(S?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Number]"===v(t)))}function w(t){return h(t)||O(t)}s(w,"isPrimitive",h),s(w,"isObject",O);var T=Number.POSITIVE_INFINITY,I=m.NEGATIVE_INFINITY;function P(t){return t<T&&t>I&&e(t)}function N(t){return h(t)&&P(t)}function E(t){return O(t)&&P(t.valueOf())}function V(t){return N(t)||E(t)}function A(t){return N(t)&&t>0}function x(t){return E(t)&&t.valueOf()>0}function k(t){return A(t)||x(t)}function F(t){return N(t)&&t>=0}function G(t){return E(t)&&t.valueOf()>=0}function B(t){return F(t)||G(t)}function C(t,e,r){a(t,e,{configurable:!1,enumerable:!1,get:r})}s(V,"isPrimitive",N),s(V,"isObject",E),s(k,"isPrimitive",A),s(k,"isObject",x),s(B,"isPrimitive",F),s(B,"isObject",G);var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null,Y=17976931348623157e292;function z(t,e){return t[e]}function J(t,e){return t.get(e)}function R(t,e,r){t[e]=r}function U(t,e,r){t.set(r,e)}function q(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function D(t){var r,n,o,i,u;if(!(this instanceof D))return new D(t);if(A(t))for(r=[],n=0;n<t;n++)r.push(0);else{if(!("object"==typeof(o=t)&&null!==o&&"number"==typeof o.length&&e(o.length)&&o.length>=0&&o.length<=9007199254740991))throw new TypeError(q("invalid argument. Must provide either a valid buffer size (i.e., a positive integer) or an array-like object which can serve as the underlying buffer. Value: `%s`.",t));r=t}return this._buffer=(i=r,u=Boolean(i.get&&i.set),{data:i,accessors:u,getter:u?J:z,setter:u?U:R}),this._length=r.length,this._count=0,this._i=-1,this}return s(D.prototype,"clear",(function(){return this._count=0,this._i=-1,this})),C(D.prototype,"count",(function(){return this._count})),C(D.prototype,"full",(function(){return this._count===this._length})),s(D.prototype,"iterator",(function(t){var e,r,n,o,i,u;if(arguments.length){if(!F(t))throw new TypeError(q("0is2V",t));o=t}else o=Y;return r=this,u=this._i,i=0,s(e={},"next",c),s(e,"return",f),M&&s(e,M,l),e;function c(){return i+=1,n||i>o?{done:!0}:r._count!==r._length?(n=!0,{done:!0}):(u=(u+1)%r._length,{value:r._buffer.accessors[0](r._buffer.data,u),done:!1})}function f(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return r.iterator(o)}})),C(D.prototype,"length",(function(){return this._length})),s(D.prototype,"push",(function(t){var e,r,n,o;return n=this._buffer.data,r=this._buffer.accessors[0],e=this._buffer.accessors[1],this._i=(this._i+1)%this._length,this._count<this._length?(e(n,this._i,t),void(this._count+=1)):(o=r(n,this._i),e(n,this._i,t),o)})),s(D.prototype,"toArray",(function(){var t,e,r,n,o;for(t=this._buffer.data,e=this._buffer.accessors[0],r=[],o=1;o<=this._count;o++)n=(this._i+o)%this._count,r.push(e(t,n));return r})),s(D.prototype,"toJSON",(function(){var t={type:"circular-buffer"};return t.length=this._length,t.data=this.toArray(),t})),D},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).circularBuffer=e();
//# sourceMappingURL=browser.js.map