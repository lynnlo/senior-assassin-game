import{r as g}from"./is-callable-7492318c.js";import{r as h}from"./is-date-object-3b5131b4.js";import{r as S}from"./is-symbol-5383681d.js";var a,y;function w(){return y||(y=1,a=function(t){return t===null||typeof t!="function"&&typeof t!="object"}),a}var u,b;function E(){if(b)return u;b=1;var m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol",t=w(),l=g(),d=h(),s=S(),c=function(r,e){if(typeof r>"u"||r===null)throw new TypeError("Cannot call method on "+r);if(typeof e!="string"||e!=="number"&&e!=="string")throw new TypeError('hint must be "string" or "number"');var i=e==="string"?["toString","valueOf"]:["valueOf","toString"],o,f,n;for(n=0;n<i.length;++n)if(o=r[i[n]],l(o)&&(f=o.call(r),t(f)))return f;throw new TypeError("No default value")},p=function(r,e){var i=r[e];if(i!==null&&typeof i<"u"){if(!l(i))throw new TypeError(i+" returned for property "+e+" of object "+r+" is not a function");return i}};return u=function(r){if(t(r))return r;var e="default";arguments.length>1&&(arguments[1]===String?e="string":arguments[1]===Number&&(e="number"));var i;if(m&&(Symbol.toPrimitive?i=p(r,Symbol.toPrimitive):s(r)&&(i=Symbol.prototype.valueOf)),typeof i<"u"){var o=i.call(r,e);if(t(o))return o;throw new TypeError("unable to convert exotic object to primitive")}return e==="default"&&(d(r)||s(r))&&(e="string"),c(r,e==="default"?"number":e)},u}export{E as r};