import{r as u}from"./has-tostringtag-7fd0be08.js";var r,e;function y(){if(e)return r;e=1;var a=Date.prototype.getDay,o=function(t){try{return a.call(t),!0}catch{return!1}},c=Object.prototype.toString,n="[object Date]",i=u()();return r=function(t){return typeof t!="object"||t===null?!1:i?o(t):c.call(t)===n},r}export{y as r};