"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=s(function(J,d){
var O=require('@stdlib/strided-base-reinterpret-complex64/dist'),p=require('@stdlib/complex-float32-real/dist'),y=require('@stdlib/complex-float32-imag/dist');function b(e,r,i,u,v,w){var t,l,o,c,m,a,q;if(e<=0)return u;for(l=p(r),o=y(r),c=p(i),m=y(i),t=O(u,0),a=w*2,v*=2,q=0;q<e;q++)t[a]===l&&t[a+1]===o&&(t[a]=c,t[a+1]=m),a+=v;return u}d.exports=b
});var j=s(function(K,E){
var k=require('@stdlib/strided-base-stride2offset/dist'),z=n();function A(e,r,i,u,v){return z(e,r,i,u,v,k(e,v))}E.exports=A
});var _=s(function(L,R){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=j(),C=n();B(x,"ndarray",C);R.exports=x
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=_(),f,g=F(D(__dirname,"./native.js"));G(g)?f=H:f=g;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
