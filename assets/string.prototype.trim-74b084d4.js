import{d as o}from"./define-properties-0d7bd0f6.js";import{c as v,a as s}from"./call-bind-d434ea07.js";import{R as a,T as c}from"./es-abstract-aba81ebc.js";var F=a,f=c,g=v,i=g("String.prototype.replace"),n=/^\s$/.test("᠎"),d=n?/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/:/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,y=n?/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/:/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/,l=function(){var u=f(F(this));return i(i(u,d,""),y,"")},A=l,e="​",r="᠎",m=function(){return String.prototype.trim&&e.trim()===e&&r.trim()===r&&("_"+r).trim()==="_"+r&&(r+"_").trim()===r+"_"?String.prototype.trim:A},S=o,$=m,h=function(){var u=$();return S(String.prototype,{trim:u},{trim:function(){return String.prototype.trim!==u}}),u},E=s,b=o,B=a,C=l,p=m,_=h,P=E(p()),x=function(u){return B(u),P(u)};b(x,{getPolyfill:p,implementation:C,shim:_});var j=x;export{j as s};