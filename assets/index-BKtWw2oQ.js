(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Mn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const K={},tt=[],Ee=()=>{},Ni=()=>!1,Yt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),In=e=>e.startsWith("onUpdate:"),Z=Object.assign,Dn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Li=Object.prototype.hasOwnProperty,N=(e,t)=>Li.call(e,t),M=Array.isArray,nt=e=>zt(e)==="[object Map]",Is=e=>zt(e)==="[object Set]",D=e=>typeof e=="function",J=e=>typeof e=="string",Ue=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Ds=e=>(G(e)||D(e))&&D(e.then)&&D(e.catch),Fs=Object.prototype.toString,zt=e=>Fs.call(e),Ui=e=>zt(e).slice(8,-1),Hs=e=>zt(e)==="[object Object]",Fn=e=>J(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,gt=Mn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Bi=/-(\w)/g,Le=Xt(e=>e.replace(Bi,(t,n)=>n?n.toUpperCase():"")),Vi=/\B([A-Z])/g,Qe=Xt(e=>e.replace(Vi,"-$1").toLowerCase()),$s=Xt(e=>e.charAt(0).toUpperCase()+e.slice(1)),cn=Xt(e=>e?`on${$s(e)}`:""),Ne=(e,t)=>!Object.is(e,t),fn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},js=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Ki=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ns;const Zt=()=>ns||(ns=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qt(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=J(s)?Ji(s):Qt(s);if(i)for(const r in i)t[r]=i[r]}return t}else if(J(e)||G(e))return e}const Wi=/;(?![^(]*\))/g,qi=/:([^]+)/,Gi=/\/\*[^]*?\*\//g;function Ji(e){const t={};return e.replace(Gi,"").split(Wi).forEach(n=>{if(n){const s=n.split(qi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function st(e){let t="";if(J(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const s=st(e[n]);s&&(t+=s+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zi=Mn(Yi);function Ns(e){return!!e||e===""}const Ls=e=>!!(e&&e.__v_isRef===!0),Se=e=>J(e)?e:e==null?"":M(e)||G(e)&&(e.toString===Fs||!D(e.toString))?Ls(e)?Se(e.value):JSON.stringify(e,Us,2):String(e),Us=(e,t)=>Ls(t)?Us(e,t.value):nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],r)=>(n[un(s,r)+" =>"]=i,n),{})}:Is(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>un(n))}:Ue(t)?un(t):G(t)&&!M(t)&&!Hs(t)?String(t):t,un=(e,t="")=>{var n;return Ue(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class Xi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Zi(){return ue}let V;const an=new WeakSet;class Bs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,an.has(this)&&(an.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ks(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ss(this),Ws(this);const t=V,n=_e;V=this,_e=!0;try{return this.fn()}finally{qs(this),V=t,_e=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)jn(t);this.deps=this.depsTail=void 0,ss(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?an.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yn(this)&&this.run()}get dirty(){return yn(this)}}let Vs=0,mt,_t;function Ks(e,t=!1){if(e.flags|=8,t){e.next=_t,_t=e;return}e.next=mt,mt=e}function Hn(){Vs++}function $n(){if(--Vs>0)return;if(_t){let t=_t;for(_t=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;mt;){let t=mt;for(mt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Ws(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function qs(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),jn(s),Qi(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function yn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Gs(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Gs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===xt))return;e.globalVersion=xt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!yn(e)){e.flags&=-3;return}const n=V,s=_e;V=e,_e=!0;try{Ws(e);const i=e.fn(e._value);(t.version===0||Ne(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{V=n,_e=s,qs(e),e.flags&=-3}}function jn(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)jn(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Qi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let _e=!0;const Js=[];function Be(){Js.push(_e),_e=!1}function Ve(){const e=Js.pop();_e=e===void 0?!0:e}function ss(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=V;V=void 0;try{t()}finally{V=n}}}let xt=0;class ki{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!V||!_e||V===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==V)n=this.activeLink=new ki(V,this),V.deps?(n.prevDep=V.depsTail,V.depsTail.nextDep=n,V.depsTail=n):V.deps=V.depsTail=n,Ys(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=V.depsTail,n.nextDep=void 0,V.depsTail.nextDep=n,V.depsTail=n,V.deps===n&&(V.deps=s)}return n}trigger(t){this.version++,xt++,this.notify(t)}notify(t){Hn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$n()}}}function Ys(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ys(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const vn=new WeakMap,ze=Symbol(""),xn=Symbol(""),wt=Symbol("");function k(e,t,n){if(_e&&V){let s=vn.get(e);s||vn.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new Nn),i.map=s,i.key=n),i.track()}}function Ie(e,t,n,s,i,r){const l=vn.get(e);if(!l){xt++;return}const c=f=>{f&&f.trigger()};if(Hn(),t==="clear")l.forEach(c);else{const f=M(e),h=f&&Fn(n);if(f&&n==="length"){const a=Number(s);l.forEach((p,S)=>{(S==="length"||S===wt||!Ue(S)&&S>=a)&&c(p)})}else switch((n!==void 0||l.has(void 0))&&c(l.get(n)),h&&c(l.get(wt)),t){case"add":f?h&&c(l.get("length")):(c(l.get(ze)),nt(e)&&c(l.get(xn)));break;case"delete":f||(c(l.get(ze)),nt(e)&&c(l.get(xn)));break;case"set":nt(e)&&c(l.get(ze));break}}$n()}function ke(e){const t=j(e);return t===e?t:(k(t,"iterate",wt),he(e)?t:t.map(ee))}function kt(e){return k(e=j(e),"iterate",wt),e}const er={__proto__:null,[Symbol.iterator](){return dn(this,Symbol.iterator,ee)},concat(...e){return ke(this).concat(...e.map(t=>M(t)?ke(t):t))},entries(){return dn(this,"entries",e=>(e[1]=ee(e[1]),e))},every(e,t){return Pe(this,"every",e,t,void 0,arguments)},filter(e,t){return Pe(this,"filter",e,t,n=>n.map(ee),arguments)},find(e,t){return Pe(this,"find",e,t,ee,arguments)},findIndex(e,t){return Pe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Pe(this,"findLast",e,t,ee,arguments)},findLastIndex(e,t){return Pe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Pe(this,"forEach",e,t,void 0,arguments)},includes(...e){return hn(this,"includes",e)},indexOf(...e){return hn(this,"indexOf",e)},join(e){return ke(this).join(e)},lastIndexOf(...e){return hn(this,"lastIndexOf",e)},map(e,t){return Pe(this,"map",e,t,void 0,arguments)},pop(){return dt(this,"pop")},push(...e){return dt(this,"push",e)},reduce(e,...t){return is(this,"reduce",e,t)},reduceRight(e,...t){return is(this,"reduceRight",e,t)},shift(){return dt(this,"shift")},some(e,t){return Pe(this,"some",e,t,void 0,arguments)},splice(...e){return dt(this,"splice",e)},toReversed(){return ke(this).toReversed()},toSorted(e){return ke(this).toSorted(e)},toSpliced(...e){return ke(this).toSpliced(...e)},unshift(...e){return dt(this,"unshift",e)},values(){return dn(this,"values",ee)}};function dn(e,t,n){const s=kt(e),i=s[t]();return s!==e&&!he(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const tr=Array.prototype;function Pe(e,t,n,s,i,r){const l=kt(e),c=l!==e&&!he(e),f=l[t];if(f!==tr[t]){const p=f.apply(e,r);return c?ee(p):p}let h=n;l!==e&&(c?h=function(p,S){return n.call(this,ee(p),S,e)}:n.length>2&&(h=function(p,S){return n.call(this,p,S,e)}));const a=f.call(l,h,s);return c&&i?i(a):a}function is(e,t,n,s){const i=kt(e);let r=n;return i!==e&&(he(e)?n.length>3&&(r=function(l,c,f){return n.call(this,l,c,f,e)}):r=function(l,c,f){return n.call(this,l,ee(c),f,e)}),i[t](r,...s)}function hn(e,t,n){const s=j(e);k(s,"iterate",wt);const i=s[t](...n);return(i===-1||i===!1)&&Bn(n[0])?(n[0]=j(n[0]),s[t](...n)):i}function dt(e,t,n=[]){Be(),Hn();const s=j(e)[t].apply(e,n);return $n(),Ve(),s}const nr=Mn("__proto__,__v_isRef,__isVue"),zs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ue));function sr(e){Ue(e)||(e=String(e));const t=j(this);return k(t,"has",e),t.hasOwnProperty(e)}class Xs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?hr:ei:r?ks:Qs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const l=M(t);if(!i){let f;if(l&&(f=er[n]))return f;if(n==="hasOwnProperty")return sr}const c=Reflect.get(t,n,X(t)?t:s);return(Ue(n)?zs.has(n):nr(n))||(i||k(t,"get",n),r)?c:X(c)?l&&Fn(n)?c:c.value:G(c)?i?ti(c):en(c):c}}class Zs extends Xs{constructor(t=!1){super(!1,t)}set(t,n,s,i){let r=t[n];if(!this._isShallow){const f=Xe(r);if(!he(s)&&!Xe(s)&&(r=j(r),s=j(s)),!M(t)&&X(r)&&!X(s))return f?!1:(r.value=s,!0)}const l=M(t)&&Fn(n)?Number(n)<t.length:N(t,n),c=Reflect.set(t,n,s,X(t)?t:i);return t===j(i)&&(l?Ne(s,r)&&Ie(t,"set",n,s):Ie(t,"add",n,s)),c}deleteProperty(t,n){const s=N(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&Ie(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!Ue(n)||!zs.has(n))&&k(t,"has",n),s}ownKeys(t){return k(t,"iterate",M(t)?"length":ze),Reflect.ownKeys(t)}}class ir extends Xs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const rr=new Zs,lr=new ir,or=new Zs(!0);const wn=e=>e,Dt=e=>Reflect.getPrototypeOf(e);function cr(e,t,n){return function(...s){const i=this.__v_raw,r=j(i),l=nt(r),c=e==="entries"||e===Symbol.iterator&&l,f=e==="keys"&&l,h=i[e](...s),a=n?wn:t?Sn:ee;return!t&&k(r,"iterate",f?xn:ze),{next(){const{value:p,done:S}=h.next();return S?{value:p,done:S}:{value:c?[a(p[0]),a(p[1])]:a(p),done:S}},[Symbol.iterator](){return this}}}}function Ft(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function fr(e,t){const n={get(i){const r=this.__v_raw,l=j(r),c=j(i);e||(Ne(i,c)&&k(l,"get",i),k(l,"get",c));const{has:f}=Dt(l),h=t?wn:e?Sn:ee;if(f.call(l,i))return h(r.get(i));if(f.call(l,c))return h(r.get(c));r!==l&&r.get(i)},get size(){const i=this.__v_raw;return!e&&k(j(i),"iterate",ze),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,l=j(r),c=j(i);return e||(Ne(i,c)&&k(l,"has",i),k(l,"has",c)),i===c?r.has(i):r.has(i)||r.has(c)},forEach(i,r){const l=this,c=l.__v_raw,f=j(c),h=t?wn:e?Sn:ee;return!e&&k(f,"iterate",ze),c.forEach((a,p)=>i.call(r,h(a),h(p),l))}};return Z(n,e?{add:Ft("add"),set:Ft("set"),delete:Ft("delete"),clear:Ft("clear")}:{add(i){!t&&!he(i)&&!Xe(i)&&(i=j(i));const r=j(this);return Dt(r).has.call(r,i)||(r.add(i),Ie(r,"add",i,i)),this},set(i,r){!t&&!he(r)&&!Xe(r)&&(r=j(r));const l=j(this),{has:c,get:f}=Dt(l);let h=c.call(l,i);h||(i=j(i),h=c.call(l,i));const a=f.call(l,i);return l.set(i,r),h?Ne(r,a)&&Ie(l,"set",i,r):Ie(l,"add",i,r),this},delete(i){const r=j(this),{has:l,get:c}=Dt(r);let f=l.call(r,i);f||(i=j(i),f=l.call(r,i)),c&&c.call(r,i);const h=r.delete(i);return f&&Ie(r,"delete",i,void 0),h},clear(){const i=j(this),r=i.size!==0,l=i.clear();return r&&Ie(i,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=cr(i,e,t)}),n}function Ln(e,t){const n=fr(e,t);return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(N(n,i)&&i in s?n:s,i,r)}const ur={get:Ln(!1,!1)},ar={get:Ln(!1,!0)},dr={get:Ln(!0,!1)};const Qs=new WeakMap,ks=new WeakMap,ei=new WeakMap,hr=new WeakMap;function pr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gr(e){return e.__v_skip||!Object.isExtensible(e)?0:pr(Ui(e))}function en(e){return Xe(e)?e:Un(e,!1,rr,ur,Qs)}function mr(e){return Un(e,!1,or,ar,ks)}function ti(e){return Un(e,!0,lr,dr,ei)}function Un(e,t,n,s,i){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const l=gr(e);if(l===0)return e;const c=new Proxy(e,l===2?s:n);return i.set(e,c),c}function it(e){return Xe(e)?it(e.__v_raw):!!(e&&e.__v_isReactive)}function Xe(e){return!!(e&&e.__v_isReadonly)}function he(e){return!!(e&&e.__v_isShallow)}function Bn(e){return e?!!e.__v_raw:!1}function j(e){const t=e&&e.__v_raw;return t?j(t):e}function _r(e){return!N(e,"__v_skip")&&Object.isExtensible(e)&&js(e,"__v_skip",!0),e}const ee=e=>G(e)?en(e):e,Sn=e=>G(e)?ti(e):e;function X(e){return e?e.__v_isRef===!0:!1}function rs(e){return br(e,!1)}function br(e,t){return X(e)?e:new yr(e,t)}class yr{constructor(t,n){this.dep=new Nn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:j(t),this._value=n?t:ee(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||he(t)||Xe(t);t=s?t:j(t),Ne(t,n)&&(this._rawValue=t,this._value=s?t:ee(t),this.dep.trigger())}}function ge(e){return X(e)?e.value:e}const vr={get:(e,t,n)=>t==="__v_raw"?e:ge(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return X(i)&&!X(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function ni(e){return it(e)?e:new Proxy(e,vr)}class xr{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Nn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&V!==this)return Ks(this,!0),!0}get value(){const t=this.dep.track();return Gs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function wr(e,t,n=!1){let s,i;return D(e)?s=e:(s=e.get,i=e.set),new xr(s,i,n)}const Ht={},Vt=new WeakMap;let Ye;function Sr(e,t=!1,n=Ye){if(n){let s=Vt.get(n);s||Vt.set(n,s=[]),s.push(e)}}function Cr(e,t,n=K){const{immediate:s,deep:i,once:r,scheduler:l,augmentJob:c,call:f}=n,h=T=>i?T:he(T)||i===!1||i===0?je(T,1):je(T);let a,p,S,C,F=!1,H=!1;if(X(e)?(p=()=>e.value,F=he(e)):it(e)?(p=()=>h(e),F=!0):M(e)?(H=!0,F=e.some(T=>it(T)||he(T)),p=()=>e.map(T=>{if(X(T))return T.value;if(it(T))return h(T);if(D(T))return f?f(T,2):T()})):D(e)?t?p=f?()=>f(e,2):e:p=()=>{if(S){Be();try{S()}finally{Ve()}}const T=Ye;Ye=a;try{return f?f(e,3,[C]):e(C)}finally{Ye=T}}:p=Ee,t&&i){const T=p,W=i===!0?1/0:i;p=()=>je(T(),W)}const Y=Zi(),P=()=>{a.stop(),Y&&Y.active&&Dn(Y.effects,a)};if(r&&t){const T=t;t=(...W)=>{T(...W),P()}}let A=H?new Array(e.length).fill(Ht):Ht;const I=T=>{if(!(!(a.flags&1)||!a.dirty&&!T))if(t){const W=a.run();if(i||F||(H?W.some((Re,ye)=>Ne(Re,A[ye])):Ne(W,A))){S&&S();const Re=Ye;Ye=a;try{const ye=[W,A===Ht?void 0:H&&A[0]===Ht?[]:A,C];f?f(t,3,ye):t(...ye),A=W}finally{Ye=Re}}}else a.run()};return c&&c(I),a=new Bs(p),a.scheduler=l?()=>l(I,!1):I,C=T=>Sr(T,!1,a),S=a.onStop=()=>{const T=Vt.get(a);if(T){if(f)f(T,4);else for(const W of T)W();Vt.delete(a)}},t?s?I(!0):A=a.run():l?l(I.bind(null,!0),!0):a.run(),P.pause=a.pause.bind(a),P.resume=a.resume.bind(a),P.stop=P,P}function je(e,t=1/0,n){if(t<=0||!G(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,X(e))je(e.value,t,n);else if(M(e))for(let s=0;s<e.length;s++)je(e[s],t,n);else if(Is(e)||nt(e))e.forEach(s=>{je(s,t,n)});else if(Hs(e)){for(const s in e)je(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&je(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ot(e,t,n,s){try{return s?e(...s):e()}catch(i){tn(i,t,n)}}function Ae(e,t,n,s){if(D(e)){const i=Ot(e,t,n,s);return i&&Ds(i)&&i.catch(r=>{tn(r,t,n)}),i}if(M(e)){const i=[];for(let r=0;r<e.length;r++)i.push(Ae(e[r],t,n,s));return i}}function tn(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||K;if(t){let c=t.parent;const f=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const a=c.ec;if(a){for(let p=0;p<a.length;p++)if(a[p](e,f,h)===!1)return}c=c.parent}if(r){Be(),Ot(r,null,10,[e,f,h]),Ve();return}}Tr(e,n,i,s,l)}function Tr(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const se=[];let Ce=-1;const rt=[];let He=null,et=0;const si=Promise.resolve();let Kt=null;function Or(e){const t=Kt||si;return e?t.then(this?e.bind(this):e):t}function Er(e){let t=Ce+1,n=se.length;for(;t<n;){const s=t+n>>>1,i=se[s],r=St(i);r<e||r===e&&i.flags&2?t=s+1:n=s}return t}function Vn(e){if(!(e.flags&1)){const t=St(e),n=se[se.length-1];!n||!(e.flags&2)&&t>=St(n)?se.push(e):se.splice(Er(t),0,e),e.flags|=1,ii()}}function ii(){Kt||(Kt=si.then(li))}function Ar(e){M(e)?rt.push(...e):He&&e.id===-1?He.splice(et+1,0,e):e.flags&1||(rt.push(e),e.flags|=1),ii()}function ls(e,t,n=Ce+1){for(;n<se.length;n++){const s=se[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;se.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ri(e){if(rt.length){const t=[...new Set(rt)].sort((n,s)=>St(n)-St(s));if(rt.length=0,He){He.push(...t);return}for(He=t,et=0;et<He.length;et++){const n=He[et];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}He=null,et=0}}const St=e=>e.id==null?e.flags&2?-1:1/0:e.id;function li(e){try{for(Ce=0;Ce<se.length;Ce++){const t=se[Ce];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ot(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ce<se.length;Ce++){const t=se[Ce];t&&(t.flags&=-2)}Ce=-1,se.length=0,ri(),Kt=null,(se.length||rt.length)&&li()}}let Oe=null,oi=null;function Wt(e){const t=Oe;return Oe=e,oi=e&&e.type.__scopeId||null,t}function Rr(e,t=Oe,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&ps(-1);const r=Wt(t);let l;try{l=e(...i)}finally{Wt(r),s._d&&ps(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function Ge(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let l=0;l<i.length;l++){const c=i[l];r&&(c.oldValue=r[l].value);let f=c.dir[s];f&&(Be(),Ae(f,n,8,[e.el,c,e,t]),Ve())}}const Pr=Symbol("_vte"),Mr=e=>e.__isTeleport;function Kn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Kn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ci(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function qt(e,t,n,s,i=!1){if(M(e)){e.forEach((F,H)=>qt(F,t&&(M(t)?t[H]:t),n,s,i));return}if(bt(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&qt(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?Yn(s.component):s.el,l=i?null:r,{i:c,r:f}=e,h=t&&t.r,a=c.refs===K?c.refs={}:c.refs,p=c.setupState,S=j(p),C=p===K?()=>!1:F=>N(S,F);if(h!=null&&h!==f&&(J(h)?(a[h]=null,C(h)&&(p[h]=null)):X(h)&&(h.value=null)),D(f))Ot(f,c,12,[l,a]);else{const F=J(f),H=X(f);if(F||H){const Y=()=>{if(e.f){const P=F?C(f)?p[f]:a[f]:f.value;i?M(P)&&Dn(P,r):M(P)?P.includes(r)||P.push(r):F?(a[f]=[r],C(f)&&(p[f]=a[f])):(f.value=[r],e.k&&(a[e.k]=f.value))}else F?(a[f]=l,C(f)&&(p[f]=l)):H&&(f.value=l,e.k&&(a[e.k]=l))};l?(Y.id=-1,fe(Y,n)):Y()}}}Zt().requestIdleCallback;Zt().cancelIdleCallback;const bt=e=>!!e.type.__asyncLoader,fi=e=>e.type.__isKeepAlive;function Ir(e,t){ui(e,"a",t)}function Dr(e,t){ui(e,"da",t)}function ui(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(nn(t,s,n),n){let i=n.parent;for(;i&&i.parent;)fi(i.parent.vnode)&&Fr(s,t,n,i),i=i.parent}}function Fr(e,t,n,s){const i=nn(t,e,s,!0);ai(()=>{Dn(s[t],i)},n)}function nn(e,t,n=ie,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...l)=>{Be();const c=Et(n),f=Ae(t,n,e,l);return c(),Ve(),f});return s?i.unshift(r):i.push(r),r}}const De=e=>(t,n=ie)=>{(!Tt||e==="sp")&&nn(e,(...s)=>t(...s),n)},Hr=De("bm"),Wn=De("m"),$r=De("bu"),jr=De("u"),Nr=De("bum"),ai=De("um"),Lr=De("sp"),Ur=De("rtg"),Br=De("rtc");function Vr(e,t=ie){nn("ec",e,t)}const Kr=Symbol.for("v-ndc");function $t(e,t,n,s){let i;const r=n,l=M(e);if(l||J(e)){const c=l&&it(e);let f=!1;c&&(f=!he(e),e=kt(e)),i=new Array(e.length);for(let h=0,a=e.length;h<a;h++)i[h]=t(f?ee(e[h]):e[h],h,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let c=0;c<e;c++)i[c]=t(c+1,c,void 0,r)}else if(G(e))if(e[Symbol.iterator])i=Array.from(e,(c,f)=>t(c,f,void 0,r));else{const c=Object.keys(e);i=new Array(c.length);for(let f=0,h=c.length;f<h;f++){const a=c[f];i[f]=t(e[a],a,f,r)}}else i=[];return i}const Cn=e=>e?Di(e)?Yn(e):Cn(e.parent):null,yt=Z(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cn(e.parent),$root:e=>Cn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>qn(e),$forceUpdate:e=>e.f||(e.f=()=>{Vn(e.update)}),$nextTick:e=>e.n||(e.n=Or.bind(e.proxy)),$watch:e=>al.bind(e)}),pn=(e,t)=>e!==K&&!e.__isScriptSetup&&N(e,t),Wr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:l,type:c,appContext:f}=e;let h;if(t[0]!=="$"){const C=l[t];if(C!==void 0)switch(C){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(pn(s,t))return l[t]=1,s[t];if(i!==K&&N(i,t))return l[t]=2,i[t];if((h=e.propsOptions[0])&&N(h,t))return l[t]=3,r[t];if(n!==K&&N(n,t))return l[t]=4,n[t];Tn&&(l[t]=0)}}const a=yt[t];let p,S;if(a)return t==="$attrs"&&k(e.attrs,"get",""),a(e);if((p=c.__cssModules)&&(p=p[t]))return p;if(n!==K&&N(n,t))return l[t]=4,n[t];if(S=f.config.globalProperties,N(S,t))return S[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return pn(i,t)?(i[t]=n,!0):s!==K&&N(s,t)?(s[t]=n,!0):N(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},l){let c;return!!n[l]||e!==K&&N(e,l)||pn(t,l)||(c=r[0])&&N(c,l)||N(s,l)||N(yt,l)||N(i.config.globalProperties,l)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:N(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function os(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Tn=!0;function qr(e){const t=qn(e),n=e.proxy,s=e.ctx;Tn=!1,t.beforeCreate&&cs(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:l,watch:c,provide:f,inject:h,created:a,beforeMount:p,mounted:S,beforeUpdate:C,updated:F,activated:H,deactivated:Y,beforeDestroy:P,beforeUnmount:A,destroyed:I,unmounted:T,render:W,renderTracked:Re,renderTriggered:ye,errorCaptured:Fe,serverPrefetch:At,expose:Ke,inheritAttrs:ct,components:Rt,directives:Pt,filters:ln}=t;if(h&&Gr(h,s,null),l)for(const q in l){const U=l[q];D(U)&&(s[q]=U.bind(n))}if(i){const q=i.call(n,n);G(q)&&(e.data=en(q))}if(Tn=!0,r)for(const q in r){const U=r[q],We=D(U)?U.bind(n,n):D(U.get)?U.get.bind(n,n):Ee,Mt=!D(U)&&D(U.set)?U.set.bind(n):Ee,qe=Dl({get:We,set:Mt});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>qe.value,set:ve=>qe.value=ve})}if(c)for(const q in c)di(c[q],s,n,q);if(f){const q=D(f)?f.call(n):f;Reflect.ownKeys(q).forEach(U=>{Qr(U,q[U])})}a&&cs(a,e,"c");function te(q,U){M(U)?U.forEach(We=>q(We.bind(n))):U&&q(U.bind(n))}if(te(Hr,p),te(Wn,S),te($r,C),te(jr,F),te(Ir,H),te(Dr,Y),te(Vr,Fe),te(Br,Re),te(Ur,ye),te(Nr,A),te(ai,T),te(Lr,At),M(Ke))if(Ke.length){const q=e.exposed||(e.exposed={});Ke.forEach(U=>{Object.defineProperty(q,U,{get:()=>n[U],set:We=>n[U]=We})})}else e.exposed||(e.exposed={});W&&e.render===Ee&&(e.render=W),ct!=null&&(e.inheritAttrs=ct),Rt&&(e.components=Rt),Pt&&(e.directives=Pt),At&&ci(e)}function Gr(e,t,n=Ee){M(e)&&(e=On(e));for(const s in e){const i=e[s];let r;G(i)?"default"in i?r=jt(i.from||s,i.default,!0):r=jt(i.from||s):r=jt(i),X(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:l=>r.value=l}):t[s]=r}}function cs(e,t,n){Ae(M(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function di(e,t,n,s){let i=s.includes(".")?Oi(n,s):()=>n[s];if(J(e)){const r=t[e];D(r)&&Nt(i,r)}else if(D(e))Nt(i,e.bind(n));else if(G(e))if(M(e))e.forEach(r=>di(r,t,n,s));else{const r=D(e.handler)?e.handler.bind(n):t[e.handler];D(r)&&Nt(i,r,e)}}function qn(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,c=r.get(t);let f;return c?f=c:!i.length&&!n&&!s?f=t:(f={},i.length&&i.forEach(h=>Gt(f,h,l,!0)),Gt(f,t,l)),G(t)&&r.set(t,f),f}function Gt(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&Gt(e,r,n,!0),i&&i.forEach(l=>Gt(e,l,n,!0));for(const l in t)if(!(s&&l==="expose")){const c=Jr[l]||n&&n[l];e[l]=c?c(e[l],t[l]):t[l]}return e}const Jr={data:fs,props:us,emits:us,methods:pt,computed:pt,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:pt,directives:pt,watch:zr,provide:fs,inject:Yr};function fs(e,t){return t?e?function(){return Z(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function Yr(e,t){return pt(On(e),On(t))}function On(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function pt(e,t){return e?Z(Object.create(null),e,t):t}function us(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:Z(Object.create(null),os(e),os(t??{})):t}function zr(e,t){if(!e)return t;if(!t)return e;const n=Z(Object.create(null),e);for(const s in t)n[s]=ne(e[s],t[s]);return n}function hi(){return{app:null,config:{isNativeTag:Ni,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xr=0;function Zr(e,t){return function(s,i=null){D(s)||(s=Z({},s)),i!=null&&!G(i)&&(i=null);const r=hi(),l=new WeakSet,c=[];let f=!1;const h=r.app={_uid:Xr++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Fl,get config(){return r.config},set config(a){},use(a,...p){return l.has(a)||(a&&D(a.install)?(l.add(a),a.install(h,...p)):D(a)&&(l.add(a),a(h,...p))),h},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),h},component(a,p){return p?(r.components[a]=p,h):r.components[a]},directive(a,p){return p?(r.directives[a]=p,h):r.directives[a]},mount(a,p,S){if(!f){const C=h._ceVNode||be(s,i);return C.appContext=r,S===!0?S="svg":S===!1&&(S=void 0),p&&t?t(C,a):e(C,a,S),f=!0,h._container=a,a.__vue_app__=h,Yn(C.component)}},onUnmount(a){c.push(a)},unmount(){f&&(Ae(c,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(a,p){return r.provides[a]=p,h},runWithContext(a){const p=lt;lt=h;try{return a()}finally{lt=p}}};return h}}let lt=null;function Qr(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function jt(e,t,n=!1){const s=ie||Oe;if(s||lt){const i=lt?lt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&D(t)?t.call(s&&s.proxy):t}}const pi={},gi=()=>Object.create(pi),mi=e=>Object.getPrototypeOf(e)===pi;function kr(e,t,n,s=!1){const i={},r=gi();e.propsDefaults=Object.create(null),_i(e,t,i,r);for(const l in e.propsOptions[0])l in i||(i[l]=void 0);n?e.props=s?i:mr(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function el(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:l}}=e,c=j(i),[f]=e.propsOptions;let h=!1;if((s||l>0)&&!(l&16)){if(l&8){const a=e.vnode.dynamicProps;for(let p=0;p<a.length;p++){let S=a[p];if(sn(e.emitsOptions,S))continue;const C=t[S];if(f)if(N(r,S))C!==r[S]&&(r[S]=C,h=!0);else{const F=Le(S);i[F]=En(f,c,F,C,e,!1)}else C!==r[S]&&(r[S]=C,h=!0)}}}else{_i(e,t,i,r)&&(h=!0);let a;for(const p in c)(!t||!N(t,p)&&((a=Qe(p))===p||!N(t,a)))&&(f?n&&(n[p]!==void 0||n[a]!==void 0)&&(i[p]=En(f,c,p,void 0,e,!0)):delete i[p]);if(r!==c)for(const p in r)(!t||!N(t,p))&&(delete r[p],h=!0)}h&&Ie(e.attrs,"set","")}function _i(e,t,n,s){const[i,r]=e.propsOptions;let l=!1,c;if(t)for(let f in t){if(gt(f))continue;const h=t[f];let a;i&&N(i,a=Le(f))?!r||!r.includes(a)?n[a]=h:(c||(c={}))[a]=h:sn(e.emitsOptions,f)||(!(f in s)||h!==s[f])&&(s[f]=h,l=!0)}if(r){const f=j(n),h=c||K;for(let a=0;a<r.length;a++){const p=r[a];n[p]=En(i,f,p,h[p],e,!N(h,p))}}return l}function En(e,t,n,s,i,r){const l=e[n];if(l!=null){const c=N(l,"default");if(c&&s===void 0){const f=l.default;if(l.type!==Function&&!l.skipFactory&&D(f)){const{propsDefaults:h}=i;if(n in h)s=h[n];else{const a=Et(i);s=h[n]=f.call(null,t),a()}}else s=f;i.ce&&i.ce._setProp(n,s)}l[0]&&(r&&!c?s=!1:l[1]&&(s===""||s===Qe(n))&&(s=!0))}return s}const tl=new WeakMap;function bi(e,t,n=!1){const s=n?tl:t.propsCache,i=s.get(e);if(i)return i;const r=e.props,l={},c=[];let f=!1;if(!D(e)){const a=p=>{f=!0;const[S,C]=bi(p,t,!0);Z(l,S),C&&c.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!r&&!f)return G(e)&&s.set(e,tt),tt;if(M(r))for(let a=0;a<r.length;a++){const p=Le(r[a]);as(p)&&(l[p]=K)}else if(r)for(const a in r){const p=Le(a);if(as(p)){const S=r[a],C=l[p]=M(S)||D(S)?{type:S}:Z({},S),F=C.type;let H=!1,Y=!0;if(M(F))for(let P=0;P<F.length;++P){const A=F[P],I=D(A)&&A.name;if(I==="Boolean"){H=!0;break}else I==="String"&&(Y=!1)}else H=D(F)&&F.name==="Boolean";C[0]=H,C[1]=Y,(H||N(C,"default"))&&c.push(p)}}const h=[l,c];return G(e)&&s.set(e,h),h}function as(e){return e[0]!=="$"&&!gt(e)}const yi=e=>e[0]==="_"||e==="$stable",Gn=e=>M(e)?e.map(Te):[Te(e)],nl=(e,t,n)=>{if(t._n)return t;const s=Rr((...i)=>Gn(t(...i)),n);return s._c=!1,s},vi=(e,t,n)=>{const s=e._ctx;for(const i in e){if(yi(i))continue;const r=e[i];if(D(r))t[i]=nl(i,r,s);else if(r!=null){const l=Gn(r);t[i]=()=>l}}},xi=(e,t)=>{const n=Gn(t);e.slots.default=()=>n},wi=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},sl=(e,t,n)=>{const s=e.slots=gi();if(e.vnode.shapeFlag&32){const i=t._;i?(wi(s,t,n),n&&js(s,"_",i,!0)):vi(t,s)}else t&&xi(e,t)},il=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,l=K;if(s.shapeFlag&32){const c=t._;c?n&&c===1?r=!1:wi(i,t,n):(r=!t.$stable,vi(t,i)),l=t}else t&&(xi(e,t),l={default:1});if(r)for(const c in i)!yi(c)&&l[c]==null&&delete i[c]},fe=bl;function rl(e){return ll(e)}function ll(e,t){const n=Zt();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:l,createText:c,createComment:f,setText:h,setElementText:a,parentNode:p,nextSibling:S,setScopeId:C=Ee,insertStaticContent:F}=e,H=(o,u,d,_=null,g=null,m=null,x=void 0,v=null,y=!!u.dynamicChildren)=>{if(o===u)return;o&&!ht(o,u)&&(_=It(o),ve(o,g,m,!0),o=null),u.patchFlag===-2&&(y=!1,u.dynamicChildren=null);const{type:b,ref:E,shapeFlag:w}=u;switch(b){case rn:Y(o,u,d,_);break;case Ze:P(o,u,d,_);break;case Lt:o==null&&A(u,d,_,x);break;case re:Rt(o,u,d,_,g,m,x,v,y);break;default:w&1?W(o,u,d,_,g,m,x,v,y):w&6?Pt(o,u,d,_,g,m,x,v,y):(w&64||w&128)&&b.process(o,u,d,_,g,m,x,v,y,ut)}E!=null&&g&&qt(E,o&&o.ref,m,u||o,!u)},Y=(o,u,d,_)=>{if(o==null)s(u.el=c(u.children),d,_);else{const g=u.el=o.el;u.children!==o.children&&h(g,u.children)}},P=(o,u,d,_)=>{o==null?s(u.el=f(u.children||""),d,_):u.el=o.el},A=(o,u,d,_)=>{[o.el,o.anchor]=F(o.children,u,d,_,o.el,o.anchor)},I=({el:o,anchor:u},d,_)=>{let g;for(;o&&o!==u;)g=S(o),s(o,d,_),o=g;s(u,d,_)},T=({el:o,anchor:u})=>{let d;for(;o&&o!==u;)d=S(o),i(o),o=d;i(u)},W=(o,u,d,_,g,m,x,v,y)=>{u.type==="svg"?x="svg":u.type==="math"&&(x="mathml"),o==null?Re(u,d,_,g,m,x,v,y):At(o,u,g,m,x,v,y)},Re=(o,u,d,_,g,m,x,v)=>{let y,b;const{props:E,shapeFlag:w,transition:O,dirs:R}=o;if(y=o.el=l(o.type,m,E&&E.is,E),w&8?a(y,o.children):w&16&&Fe(o.children,y,null,_,g,gn(o,m),x,v),R&&Ge(o,null,_,"created"),ye(y,o,o.scopeId,x,_),E){for(const B in E)B!=="value"&&!gt(B)&&r(y,B,null,E[B],m,_);"value"in E&&r(y,"value",null,E.value,m),(b=E.onVnodeBeforeMount)&&we(b,_,o)}R&&Ge(o,null,_,"beforeMount");const $=ol(g,O);$&&O.beforeEnter(y),s(y,u,d),((b=E&&E.onVnodeMounted)||$||R)&&fe(()=>{b&&we(b,_,o),$&&O.enter(y),R&&Ge(o,null,_,"mounted")},g)},ye=(o,u,d,_,g)=>{if(d&&C(o,d),_)for(let m=0;m<_.length;m++)C(o,_[m]);if(g){let m=g.subTree;if(u===m||Ai(m.type)&&(m.ssContent===u||m.ssFallback===u)){const x=g.vnode;ye(o,x,x.scopeId,x.slotScopeIds,g.parent)}}},Fe=(o,u,d,_,g,m,x,v,y=0)=>{for(let b=y;b<o.length;b++){const E=o[b]=v?$e(o[b]):Te(o[b]);H(null,E,u,d,_,g,m,x,v)}},At=(o,u,d,_,g,m,x)=>{const v=u.el=o.el;let{patchFlag:y,dynamicChildren:b,dirs:E}=u;y|=o.patchFlag&16;const w=o.props||K,O=u.props||K;let R;if(d&&Je(d,!1),(R=O.onVnodeBeforeUpdate)&&we(R,d,u,o),E&&Ge(u,o,d,"beforeUpdate"),d&&Je(d,!0),(w.innerHTML&&O.innerHTML==null||w.textContent&&O.textContent==null)&&a(v,""),b?Ke(o.dynamicChildren,b,v,d,_,gn(u,g),m):x||U(o,u,v,null,d,_,gn(u,g),m,!1),y>0){if(y&16)ct(v,w,O,d,g);else if(y&2&&w.class!==O.class&&r(v,"class",null,O.class,g),y&4&&r(v,"style",w.style,O.style,g),y&8){const $=u.dynamicProps;for(let B=0;B<$.length;B++){const L=$[B],le=w[L],Q=O[L];(Q!==le||L==="value")&&r(v,L,le,Q,g,d)}}y&1&&o.children!==u.children&&a(v,u.children)}else!x&&b==null&&ct(v,w,O,d,g);((R=O.onVnodeUpdated)||E)&&fe(()=>{R&&we(R,d,u,o),E&&Ge(u,o,d,"updated")},_)},Ke=(o,u,d,_,g,m,x)=>{for(let v=0;v<u.length;v++){const y=o[v],b=u[v],E=y.el&&(y.type===re||!ht(y,b)||y.shapeFlag&70)?p(y.el):d;H(y,b,E,null,_,g,m,x,!0)}},ct=(o,u,d,_,g)=>{if(u!==d){if(u!==K)for(const m in u)!gt(m)&&!(m in d)&&r(o,m,u[m],null,g,_);for(const m in d){if(gt(m))continue;const x=d[m],v=u[m];x!==v&&m!=="value"&&r(o,m,v,x,g,_)}"value"in d&&r(o,"value",u.value,d.value,g)}},Rt=(o,u,d,_,g,m,x,v,y)=>{const b=u.el=o?o.el:c(""),E=u.anchor=o?o.anchor:c("");let{patchFlag:w,dynamicChildren:O,slotScopeIds:R}=u;R&&(v=v?v.concat(R):R),o==null?(s(b,d,_),s(E,d,_),Fe(u.children||[],d,E,g,m,x,v,y)):w>0&&w&64&&O&&o.dynamicChildren?(Ke(o.dynamicChildren,O,d,g,m,x,v),(u.key!=null||g&&u===g.subTree)&&Si(o,u,!0)):U(o,u,d,E,g,m,x,v,y)},Pt=(o,u,d,_,g,m,x,v,y)=>{u.slotScopeIds=v,o==null?u.shapeFlag&512?g.ctx.activate(u,d,_,x,y):ln(u,d,_,g,m,x,y):zn(o,u,y)},ln=(o,u,d,_,g,m,x)=>{const v=o.component=El(o,_,g);if(fi(o)&&(v.ctx.renderer=ut),Al(v,!1,x),v.asyncDep){if(g&&g.registerDep(v,te,x),!o.el){const y=v.subTree=be(Ze);P(null,y,u,d)}}else te(v,o,u,d,g,m,x)},zn=(o,u,d)=>{const _=u.component=o.component;if(ml(o,u,d))if(_.asyncDep&&!_.asyncResolved){q(_,u,d);return}else _.next=u,_.update();else u.el=o.el,_.vnode=u},te=(o,u,d,_,g,m,x)=>{const v=()=>{if(o.isMounted){let{next:w,bu:O,u:R,parent:$,vnode:B}=o;{const oe=Ci(o);if(oe){w&&(w.el=B.el,q(o,w,x)),oe.asyncDep.then(()=>{o.isUnmounted||v()});return}}let L=w,le;Je(o,!1),w?(w.el=B.el,q(o,w,x)):w=B,O&&fn(O),(le=w.props&&w.props.onVnodeBeforeUpdate)&&we(le,$,w,B),Je(o,!0);const Q=mn(o),pe=o.subTree;o.subTree=Q,H(pe,Q,p(pe.el),It(pe),o,g,m),w.el=Q.el,L===null&&_l(o,Q.el),R&&fe(R,g),(le=w.props&&w.props.onVnodeUpdated)&&fe(()=>we(le,$,w,B),g)}else{let w;const{el:O,props:R}=u,{bm:$,m:B,parent:L,root:le,type:Q}=o,pe=bt(u);if(Je(o,!1),$&&fn($),!pe&&(w=R&&R.onVnodeBeforeMount)&&we(w,L,u),Je(o,!0),O&&kn){const oe=()=>{o.subTree=mn(o),kn(O,o.subTree,o,g,null)};pe&&Q.__asyncHydrate?Q.__asyncHydrate(O,o,oe):oe()}else{le.ce&&le.ce._injectChildStyle(Q);const oe=o.subTree=mn(o);H(null,oe,d,_,o,g,m),u.el=oe.el}if(B&&fe(B,g),!pe&&(w=R&&R.onVnodeMounted)){const oe=u;fe(()=>we(w,L,oe),g)}(u.shapeFlag&256||L&&bt(L.vnode)&&L.vnode.shapeFlag&256)&&o.a&&fe(o.a,g),o.isMounted=!0,u=d=_=null}};o.scope.on();const y=o.effect=new Bs(v);o.scope.off();const b=o.update=y.run.bind(y),E=o.job=y.runIfDirty.bind(y);E.i=o,E.id=o.uid,y.scheduler=()=>Vn(E),Je(o,!0),b()},q=(o,u,d)=>{u.component=o;const _=o.vnode.props;o.vnode=u,o.next=null,el(o,u.props,_,d),il(o,u.children,d),Be(),ls(o),Ve()},U=(o,u,d,_,g,m,x,v,y=!1)=>{const b=o&&o.children,E=o?o.shapeFlag:0,w=u.children,{patchFlag:O,shapeFlag:R}=u;if(O>0){if(O&128){Mt(b,w,d,_,g,m,x,v,y);return}else if(O&256){We(b,w,d,_,g,m,x,v,y);return}}R&8?(E&16&&ft(b,g,m),w!==b&&a(d,w)):E&16?R&16?Mt(b,w,d,_,g,m,x,v,y):ft(b,g,m,!0):(E&8&&a(d,""),R&16&&Fe(w,d,_,g,m,x,v,y))},We=(o,u,d,_,g,m,x,v,y)=>{o=o||tt,u=u||tt;const b=o.length,E=u.length,w=Math.min(b,E);let O;for(O=0;O<w;O++){const R=u[O]=y?$e(u[O]):Te(u[O]);H(o[O],R,d,null,g,m,x,v,y)}b>E?ft(o,g,m,!0,!1,w):Fe(u,d,_,g,m,x,v,y,w)},Mt=(o,u,d,_,g,m,x,v,y)=>{let b=0;const E=u.length;let w=o.length-1,O=E-1;for(;b<=w&&b<=O;){const R=o[b],$=u[b]=y?$e(u[b]):Te(u[b]);if(ht(R,$))H(R,$,d,null,g,m,x,v,y);else break;b++}for(;b<=w&&b<=O;){const R=o[w],$=u[O]=y?$e(u[O]):Te(u[O]);if(ht(R,$))H(R,$,d,null,g,m,x,v,y);else break;w--,O--}if(b>w){if(b<=O){const R=O+1,$=R<E?u[R].el:_;for(;b<=O;)H(null,u[b]=y?$e(u[b]):Te(u[b]),d,$,g,m,x,v,y),b++}}else if(b>O)for(;b<=w;)ve(o[b],g,m,!0),b++;else{const R=b,$=b,B=new Map;for(b=$;b<=O;b++){const ce=u[b]=y?$e(u[b]):Te(u[b]);ce.key!=null&&B.set(ce.key,b)}let L,le=0;const Q=O-$+1;let pe=!1,oe=0;const at=new Array(Q);for(b=0;b<Q;b++)at[b]=0;for(b=R;b<=w;b++){const ce=o[b];if(le>=Q){ve(ce,g,m,!0);continue}let xe;if(ce.key!=null)xe=B.get(ce.key);else for(L=$;L<=O;L++)if(at[L-$]===0&&ht(ce,u[L])){xe=L;break}xe===void 0?ve(ce,g,m,!0):(at[xe-$]=b+1,xe>=oe?oe=xe:pe=!0,H(ce,u[xe],d,null,g,m,x,v,y),le++)}const es=pe?cl(at):tt;for(L=es.length-1,b=Q-1;b>=0;b--){const ce=$+b,xe=u[ce],ts=ce+1<E?u[ce+1].el:_;at[b]===0?H(null,xe,d,ts,g,m,x,v,y):pe&&(L<0||b!==es[L]?qe(xe,d,ts,2):L--)}}},qe=(o,u,d,_,g=null)=>{const{el:m,type:x,transition:v,children:y,shapeFlag:b}=o;if(b&6){qe(o.component.subTree,u,d,_);return}if(b&128){o.suspense.move(u,d,_);return}if(b&64){x.move(o,u,d,ut);return}if(x===re){s(m,u,d);for(let w=0;w<y.length;w++)qe(y[w],u,d,_);s(o.anchor,u,d);return}if(x===Lt){I(o,u,d);return}if(_!==2&&b&1&&v)if(_===0)v.beforeEnter(m),s(m,u,d),fe(()=>v.enter(m),g);else{const{leave:w,delayLeave:O,afterLeave:R}=v,$=()=>s(m,u,d),B=()=>{w(m,()=>{$(),R&&R()})};O?O(m,$,B):B()}else s(m,u,d)},ve=(o,u,d,_=!1,g=!1)=>{const{type:m,props:x,ref:v,children:y,dynamicChildren:b,shapeFlag:E,patchFlag:w,dirs:O,cacheIndex:R}=o;if(w===-2&&(g=!1),v!=null&&qt(v,null,d,o,!0),R!=null&&(u.renderCache[R]=void 0),E&256){u.ctx.deactivate(o);return}const $=E&1&&O,B=!bt(o);let L;if(B&&(L=x&&x.onVnodeBeforeUnmount)&&we(L,u,o),E&6)ji(o.component,d,_);else{if(E&128){o.suspense.unmount(d,_);return}$&&Ge(o,null,u,"beforeUnmount"),E&64?o.type.remove(o,u,d,ut,_):b&&!b.hasOnce&&(m!==re||w>0&&w&64)?ft(b,u,d,!1,!0):(m===re&&w&384||!g&&E&16)&&ft(y,u,d),_&&Xn(o)}(B&&(L=x&&x.onVnodeUnmounted)||$)&&fe(()=>{L&&we(L,u,o),$&&Ge(o,null,u,"unmounted")},d)},Xn=o=>{const{type:u,el:d,anchor:_,transition:g}=o;if(u===re){$i(d,_);return}if(u===Lt){T(o);return}const m=()=>{i(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(o.shapeFlag&1&&g&&!g.persisted){const{leave:x,delayLeave:v}=g,y=()=>x(d,m);v?v(o.el,m,y):y()}else m()},$i=(o,u)=>{let d;for(;o!==u;)d=S(o),i(o),o=d;i(u)},ji=(o,u,d)=>{const{bum:_,scope:g,job:m,subTree:x,um:v,m:y,a:b}=o;ds(y),ds(b),_&&fn(_),g.stop(),m&&(m.flags|=8,ve(x,o,u,d)),v&&fe(v,u),fe(()=>{o.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&o.asyncDep&&!o.asyncResolved&&o.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},ft=(o,u,d,_=!1,g=!1,m=0)=>{for(let x=m;x<o.length;x++)ve(o[x],u,d,_,g)},It=o=>{if(o.shapeFlag&6)return It(o.component.subTree);if(o.shapeFlag&128)return o.suspense.next();const u=S(o.anchor||o.el),d=u&&u[Pr];return d?S(d):u};let on=!1;const Zn=(o,u,d)=>{o==null?u._vnode&&ve(u._vnode,null,null,!0):H(u._vnode||null,o,u,null,null,null,d),u._vnode=o,on||(on=!0,ls(),ri(),on=!1)},ut={p:H,um:ve,m:qe,r:Xn,mt:ln,mc:Fe,pc:U,pbc:Ke,n:It,o:e};let Qn,kn;return{render:Zn,hydrate:Qn,createApp:Zr(Zn,Qn)}}function gn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Je({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ol(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Si(e,t,n=!1){const s=e.children,i=t.children;if(M(s)&&M(i))for(let r=0;r<s.length;r++){const l=s[r];let c=i[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[r]=$e(i[r]),c.el=l.el),!n&&c.patchFlag!==-2&&Si(l,c)),c.type===rn&&(c.el=l.el)}}function cl(e){const t=e.slice(),n=[0];let s,i,r,l,c;const f=e.length;for(s=0;s<f;s++){const h=e[s];if(h!==0){if(i=n[n.length-1],e[i]<h){t[s]=i,n.push(s);continue}for(r=0,l=n.length-1;r<l;)c=r+l>>1,e[n[c]]<h?r=c+1:l=c;h<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,l=n[r-1];r-- >0;)n[r]=l,l=t[l];return n}function Ci(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ci(t)}function ds(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const fl=Symbol.for("v-scx"),ul=()=>jt(fl);function Nt(e,t,n){return Ti(e,t,n)}function Ti(e,t,n=K){const{immediate:s,deep:i,flush:r,once:l}=n,c=Z({},n),f=t&&s||!t&&r!=="post";let h;if(Tt){if(r==="sync"){const C=ul();h=C.__watcherHandles||(C.__watcherHandles=[])}else if(!f){const C=()=>{};return C.stop=Ee,C.resume=Ee,C.pause=Ee,C}}const a=ie;c.call=(C,F,H)=>Ae(C,a,F,H);let p=!1;r==="post"?c.scheduler=C=>{fe(C,a&&a.suspense)}:r!=="sync"&&(p=!0,c.scheduler=(C,F)=>{F?C():Vn(C)}),c.augmentJob=C=>{t&&(C.flags|=4),p&&(C.flags|=2,a&&(C.id=a.uid,C.i=a))};const S=Cr(e,t,c);return Tt&&(h?h.push(S):f&&S()),S}function al(e,t,n){const s=this.proxy,i=J(e)?e.includes(".")?Oi(s,e):()=>s[e]:e.bind(s,s);let r;D(t)?r=t:(r=t.handler,n=t);const l=Et(this),c=Ti(i,r.bind(s),n);return l(),c}function Oi(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const dl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Le(t)}Modifiers`]||e[`${Qe(t)}Modifiers`];function hl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||K;let i=n;const r=t.startsWith("update:"),l=r&&dl(s,t.slice(7));l&&(l.trim&&(i=n.map(a=>J(a)?a.trim():a)),l.number&&(i=n.map(Ki)));let c,f=s[c=cn(t)]||s[c=cn(Le(t))];!f&&r&&(f=s[c=cn(Qe(t))]),f&&Ae(f,e,6,i);const h=s[c+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ae(h,e,6,i)}}function Ei(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let l={},c=!1;if(!D(e)){const f=h=>{const a=Ei(h,t,!0);a&&(c=!0,Z(l,a))};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}return!r&&!c?(G(e)&&s.set(e,null),null):(M(r)?r.forEach(f=>l[f]=null):Z(l,r),G(e)&&s.set(e,l),l)}function sn(e,t){return!e||!Yt(t)?!1:(t=t.slice(2).replace(/Once$/,""),N(e,t[0].toLowerCase()+t.slice(1))||N(e,Qe(t))||N(e,t))}function mn(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:l,attrs:c,emit:f,render:h,renderCache:a,props:p,data:S,setupState:C,ctx:F,inheritAttrs:H}=e,Y=Wt(e);let P,A;try{if(n.shapeFlag&4){const T=i||s,W=T;P=Te(h.call(W,T,a,p,C,S,F)),A=c}else{const T=t;P=Te(T.length>1?T(p,{attrs:c,slots:l,emit:f}):T(p,null)),A=t.props?c:pl(c)}}catch(T){vt.length=0,tn(T,e,1),P=be(Ze)}let I=P;if(A&&H!==!1){const T=Object.keys(A),{shapeFlag:W}=I;T.length&&W&7&&(r&&T.some(In)&&(A=gl(A,r)),I=ot(I,A,!1,!0))}return n.dirs&&(I=ot(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&Kn(I,n.transition),P=I,Wt(Y),P}const pl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yt(n))&&((t||(t={}))[n]=e[n]);return t},gl=(e,t)=>{const n={};for(const s in e)(!In(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function ml(e,t,n){const{props:s,children:i,component:r}=e,{props:l,children:c,patchFlag:f}=t,h=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&f>=0){if(f&1024)return!0;if(f&16)return s?hs(s,l,h):!!l;if(f&8){const a=t.dynamicProps;for(let p=0;p<a.length;p++){const S=a[p];if(l[S]!==s[S]&&!sn(h,S))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===l?!1:s?l?hs(s,l,h):!0:!!l;return!1}function hs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!sn(n,r))return!0}return!1}function _l({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ai=e=>e.__isSuspense;function bl(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Ar(e)}const re=Symbol.for("v-fgt"),rn=Symbol.for("v-txt"),Ze=Symbol.for("v-cmt"),Lt=Symbol.for("v-stc"),vt=[];let ae=null;function de(e=!1){vt.push(ae=e?null:[])}function yl(){vt.pop(),ae=vt[vt.length-1]||null}let Ct=1;function ps(e,t=!1){Ct+=e,e<0&&ae&&t&&(ae.hasOnce=!0)}function Ri(e){return e.dynamicChildren=Ct>0?ae||tt:null,yl(),Ct>0&&ae&&ae.push(e),e}function me(e,t,n,s,i,r){return Ri(z(e,t,n,s,i,r,!0))}function vl(e,t,n,s,i){return Ri(be(e,t,n,s,i,!0))}function Pi(e){return e?e.__v_isVNode===!0:!1}function ht(e,t){return e.type===t.type&&e.key===t.key}const Mi=({key:e})=>e??null,Ut=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?J(e)||X(e)||D(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function z(e,t=null,n=null,s=0,i=null,r=e===re?0:1,l=!1,c=!1){const f={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Mi(t),ref:t&&Ut(t),scopeId:oi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Oe};return c?(Jn(f,n),r&128&&e.normalize(f)):n&&(f.shapeFlag|=J(n)?8:16),Ct>0&&!l&&ae&&(f.patchFlag>0||r&6)&&f.patchFlag!==32&&ae.push(f),f}const be=xl;function xl(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===Kr)&&(e=Ze),Pi(e)){const c=ot(e,t,!0);return n&&Jn(c,n),Ct>0&&!r&&ae&&(c.shapeFlag&6?ae[ae.indexOf(e)]=c:ae.push(c)),c.patchFlag=-2,c}if(Il(e)&&(e=e.__vccOpts),t){t=wl(t);let{class:c,style:f}=t;c&&!J(c)&&(t.class=st(c)),G(f)&&(Bn(f)&&!M(f)&&(f=Z({},f)),t.style=Qt(f))}const l=J(e)?1:Ai(e)?128:Mr(e)?64:G(e)?4:D(e)?2:0;return z(e,t,n,s,i,l,r,!0)}function wl(e){return e?Bn(e)||mi(e)?Z({},e):e:null}function ot(e,t,n=!1,s=!1){const{props:i,ref:r,patchFlag:l,children:c,transition:f}=e,h=t?Cl(i||{},t):i,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Mi(h),ref:t&&t.ref?n&&r?M(r)?r.concat(Ut(t)):[r,Ut(t)]:Ut(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==re?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:f,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ot(e.ssContent),ssFallback:e.ssFallback&&ot(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return f&&s&&Kn(a,f.clone(a)),a}function Ii(e=" ",t=0){return be(rn,null,e,t)}function Sl(e,t){const n=be(Lt,null,e);return n.staticCount=t,n}function gs(e="",t=!1){return t?(de(),vl(Ze,null,e)):be(Ze,null,e)}function Te(e){return e==null||typeof e=="boolean"?be(Ze):M(e)?be(re,null,e.slice()):Pi(e)?$e(e):be(rn,null,String(e))}function $e(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ot(e)}function Jn(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Jn(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!mi(t)?t._ctx=Oe:i===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),s&64?(n=16,t=[Ii(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=st([t.class,s.class]));else if(i==="style")t.style=Qt([t.style,s.style]);else if(Yt(i)){const r=t[i],l=s[i];l&&r!==l&&!(M(r)&&r.includes(l))&&(t[i]=r?[].concat(r,l):l)}else i!==""&&(t[i]=s[i])}return t}function we(e,t,n,s=null){Ae(e,t,7,[n,s])}const Tl=hi();let Ol=0;function El(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Tl,r={uid:Ol++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bi(s,i),emitsOptions:Ei(s,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=hl.bind(null,r),e.ce&&e.ce(r),r}let ie=null,Jt,An;{const e=Zt(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),r=>{i.length>1?i.forEach(l=>l(r)):i[0](r)}};Jt=t("__VUE_INSTANCE_SETTERS__",n=>ie=n),An=t("__VUE_SSR_SETTERS__",n=>Tt=n)}const Et=e=>{const t=ie;return Jt(e),e.scope.on(),()=>{e.scope.off(),Jt(t)}},ms=()=>{ie&&ie.scope.off(),Jt(null)};function Di(e){return e.vnode.shapeFlag&4}let Tt=!1;function Al(e,t=!1,n=!1){t&&An(t);const{props:s,children:i}=e.vnode,r=Di(e);kr(e,s,r,t),sl(e,i,n);const l=r?Rl(e,t):void 0;return t&&An(!1),l}function Rl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Wr);const{setup:s}=n;if(s){Be();const i=e.setupContext=s.length>1?Ml(e):null,r=Et(e),l=Ot(s,e,0,[e.props,i]),c=Ds(l);if(Ve(),r(),(c||e.sp)&&!bt(e)&&ci(e),c){if(l.then(ms,ms),t)return l.then(f=>{_s(e,f,t)}).catch(f=>{tn(f,e,0)});e.asyncDep=l}else _s(e,l,t)}else Fi(e,t)}function _s(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=ni(t)),Fi(e,n)}let bs;function Fi(e,t,n){const s=e.type;if(!e.render){if(!t&&bs&&!s.render){const i=s.template||qn(e).template;if(i){const{isCustomElement:r,compilerOptions:l}=e.appContext.config,{delimiters:c,compilerOptions:f}=s,h=Z(Z({isCustomElement:r,delimiters:c},l),f);s.render=bs(i,h)}}e.render=s.render||Ee}{const i=Et(e);Be();try{qr(e)}finally{Ve(),i()}}}const Pl={get(e,t){return k(e,"get",""),e[t]}};function Ml(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Pl),slots:e.slots,emit:e.emit,expose:t}}function Yn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ni(_r(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in yt)return yt[n](e)},has(t,n){return n in t||n in yt}})):e.proxy}function Il(e){return D(e)&&"__vccOpts"in e}const Dl=(e,t)=>wr(e,t,Tt),Fl="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rn;const ys=typeof window<"u"&&window.trustedTypes;if(ys)try{Rn=ys.createPolicy("vue",{createHTML:e=>e})}catch{}const Hi=Rn?e=>Rn.createHTML(e):e=>e,Hl="http://www.w3.org/2000/svg",$l="http://www.w3.org/1998/Math/MathML",Me=typeof document<"u"?document:null,vs=Me&&Me.createElement("template"),jl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?Me.createElementNS(Hl,e):t==="mathml"?Me.createElementNS($l,e):n?Me.createElement(e,{is:n}):Me.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Me.createTextNode(e),createComment:e=>Me.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Me.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const l=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{vs.innerHTML=Hi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const c=vs.content;if(s==="svg"||s==="mathml"){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}t.insertBefore(c,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Nl=Symbol("_vtc");function Ll(e,t,n){const s=e[Nl];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const xs=Symbol("_vod"),Ul=Symbol("_vsh"),Bl=Symbol(""),Vl=/(^|;)\s*display\s*:/;function Kl(e,t,n){const s=e.style,i=J(n);let r=!1;if(n&&!i){if(t)if(J(t))for(const l of t.split(";")){const c=l.slice(0,l.indexOf(":")).trim();n[c]==null&&Bt(s,c,"")}else for(const l in t)n[l]==null&&Bt(s,l,"");for(const l in n)l==="display"&&(r=!0),Bt(s,l,n[l])}else if(i){if(t!==n){const l=s[Bl];l&&(n+=";"+l),s.cssText=n,r=Vl.test(n)}}else t&&e.removeAttribute("style");xs in e&&(e[xs]=r?s.display:"",e[Ul]&&(s.display="none"))}const ws=/\s*!important$/;function Bt(e,t,n){if(M(n))n.forEach(s=>Bt(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Wl(e,t);ws.test(n)?e.setProperty(Qe(s),n.replace(ws,""),"important"):e[s]=n}}const Ss=["Webkit","Moz","ms"],_n={};function Wl(e,t){const n=_n[t];if(n)return n;let s=Le(t);if(s!=="filter"&&s in e)return _n[t]=s;s=$s(s);for(let i=0;i<Ss.length;i++){const r=Ss[i]+s;if(r in e)return _n[t]=r}return t}const Cs="http://www.w3.org/1999/xlink";function Ts(e,t,n,s,i,r=zi(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Cs,t.slice(6,t.length)):e.setAttributeNS(Cs,t,n):n==null||r&&!Ns(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Ue(n)?String(n):n)}function Os(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Hi(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const c=r==="OPTION"?e.getAttribute("value")||"":e.value,f=n==null?e.type==="checkbox"?"on":"":String(n);(c!==f||!("_value"in e))&&(e.value=f),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ns(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(i||t)}function ql(e,t,n,s){e.addEventListener(t,n,s)}function Gl(e,t,n,s){e.removeEventListener(t,n,s)}const Es=Symbol("_vei");function Jl(e,t,n,s,i=null){const r=e[Es]||(e[Es]={}),l=r[t];if(s&&l)l.value=s;else{const[c,f]=Yl(t);if(s){const h=r[t]=Zl(s,i);ql(e,c,h,f)}else l&&(Gl(e,c,l,f),r[t]=void 0)}}const As=/(?:Once|Passive|Capture)$/;function Yl(e){let t;if(As.test(e)){t={};let s;for(;s=e.match(As);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Qe(e.slice(2)),t]}let bn=0;const zl=Promise.resolve(),Xl=()=>bn||(zl.then(()=>bn=0),bn=Date.now());function Zl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ae(Ql(s,n.value),t,5,[s])};return n.value=e,n.attached=Xl(),n}function Ql(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const Rs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,kl=(e,t,n,s,i,r)=>{const l=i==="svg";t==="class"?Ll(e,s,l):t==="style"?Kl(e,n,s):Yt(t)?In(t)||Jl(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):eo(e,t,s,l))?(Os(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ts(e,t,s,l,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!J(s))?Os(e,Le(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Ts(e,t,s,l))};function eo(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Rs(t)&&D(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Rs(t)&&J(n)?!1:t in e}const to=Z({patchProp:kl},jl);let Ps;function no(){return Ps||(Ps=rl(to))}const so=(...e)=>{const t=no().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=ro(s);if(!i)return;const r=t._component;!D(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const l=n(i,!1,io(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},t};function io(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ro(e){return J(e)?document.querySelector(e):e}const Pn={s1:[{name:"红色背景",strategy:(e,t,n,s,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#c14949",e.fillRect(0,0,t,n)}},{name:"红色长条",strategy:(e,t,n,s,i)=>{e.fillStyle="red",e.globalCompositeOperation="destination-over",s.forEach(r=>{e.fillRect(r/24*t,0,t/24,n)})}}],s2:[{name:"紫色背景",id:"s21",strategy:(e,t,n,s,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#d58585",e.fillRect(0,0,t,n)}}],s3:[{name:"蓝色进度条",id:"s31",strategy:(e,t,n,s,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#8fb3f7",e.fillRect(0,0,t/5*s,n/3)}}],s4:[{name:"粉红进度条",id:"s41",strategy:(e,t,n,s,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#ffbbfe",e.fillRect(0,n/3,t/15*s,n/3)}}],hh:[{name:"绿色进度条",id:"hh1",strategy:(e,t,n,s,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#88ff8a",e.fillRect(0,n/3*2,t/15*s,n/3)}}],coner:[{name:"左上角大字",id:"coner1",strategy:(e,t,n,s,i)=>{e.font="50px gray",e.fillStyle="#2c2c2c",e.textBaseline="top",e.fillText(s[0],10,10)}}],memo:[{name:"左下角展示",id:"memo1",strategy:(e,t,n,s,i)=>{e.font="20px gray",e.fillStyle="black",e.textBaseline="bottom",e.fillText(s,10,n-10)}}],detail:[{name:"粉红badge",id:"detail1",strategy:(e,t,n,s,i)=>{}}]},lo={s1:"大发",s2:"大发不抽",s3:"小发",s4:"轻微发",hh:"恍惚",coner:"事件",memo:"备注",detail:"详情"},Ms={s1:0,s2:0,s3:0,s4:0,hh:0,coner:0,memo:0,detail:0},oo={class:"record"},co={__name:"Record",props:{record:Object,strategy:Object},setup(e){const t=e;let n,s,i,r;return Wn(()=>{s=n.getContext("2d"),i=n.width,r=n.height,Nt(t,()=>{if(t.record&&t.strategy&&s){s.clearRect(0,0,i,r);for(let l in t.record)t.strategy[l]!==-1&&Pn[l][t.strategy[l]].strategy&&Pn[l][t.strategy[l]].strategy(s,i,r,t.record[l],t.strategy)}},{deep:!0,immediate:!0})}),(l,c)=>(de(),me("div",oo,[z("canvas",{ref:f=>X(n)?n.value=f:n=f},null,512)]))}},fo={"2024-02-04":{s1:[7],detail:`
2月4号 7点（自己烧饭之类的，不开心？）尿了？
`},"2024-03-01":{s1:[1],detail:`
（2/29 陪去浦东提车？）
1点02分 感觉听声音不舒服
1点03发作，右手抽，其他僵硬
1点04多减轻`},"2024-03-08":{s1:[24],detail:`
3月8号  （袜子在床上有点不开心？开车多了冷？）
23：39到23：40，之前1天有半边麻。23：44 有一点意识`},"2024-03-23":{s1:[1],detail:`
3月23号  （前面好像是3天有发麻）（连续2天工作忙，啃指甲）
00：32 前兆是声音，先躺到我这边，然后自己坐到自己床位，抱着开始发作，慢慢放下来，发作比较轻
00：33 停止抽搐，感觉一分钟不到
00：36 手去掀自己裙子，大概到37彻底发作完毕
00：48 我手机亮看，被吵醒，问，不知道发作，也不知道发作什么
        `},"2024-04-12":{s1:[1],detail:`
4月12号  前面2天（10号）办公室头麻
和小哈在外面玩，听到声音，就进房间，先看人，再看手机，截图0点39分，40分停止
身体向左转，可能是想向门外求救，嘴里有血， 白天是去了一妇婴看乳腺，并且小哈前一天哮喘晚上闹，没睡好。
        `},"2024-04-17":{s3:1,detail:`
4月17号 2：17 前兆，没发作
但当天（16号）有至少3次“熟悉的感觉，加想大便加胃有指定的味道”
        `},"2024-04-22":{s1:[2],detail:`
4月22号 1：57 被叫声叫醒 拿的手机
1：58 抽搐停止
20，21号是周末，据说19晚上2点半才睡，并且一直有麻
当天睡前觉得耳朵堵住，但不一定是前兆，可能是发炎
然后睡前有聊天很久，但不确定最后是几点睡下的
        `},"2024-04-30":{s1:[1],detail:`
4月30号 
1：08 我问是不是不舒服 ，说手机照难受，08分末开始发，幅度小
09分开始幅度大，右手伸直，关节有声音，身体反曲
10分停止
带小哈开车40多上楼的，估计1点不到点躺下的
1：26 看他的时候 互相吓了一跳 问你干嘛
1：57 正常对话，知道情况了，问有没有发
        `},"2024-05-11":{s1:[4,23],detail:`
5月11号

04：14 到04：15 
前面几天一直白天晚上都有前兆
晚上说话说到3点以后，晚上带小哈出去哄睡了
这次是左手伸直，右手弯曲
尿了

22：48 到 22：49
发前自己是知道 这次是会发出来的
应该是睡着了，我和小哈读书吵醒了， 睡着没多久

进房间前，可能因为爷爷给小哈麻花，二次刷牙，而压抑了？

后来带小哈出去，全程两人沉默，好像小哈也在想这事
        `},"2024-05-18":{s1:[0],detail:`
5月18日 
0：12 瑾爸电话来。 11点40分准备睡觉的
        `},"2024-05-22":{s3:1,detail:`
5月22日，（不是发作）20点05分，靠近听了音响，左半身非常麻
        `},"2024-05-24":{s3:1,detail:`
（5，24）早上的麻，和眨眼，觉得有眼泪，今天开始定义为小发作
        `},"2024-05-26":{s3:1,detail:`
（5,
        26）下午16点小发作
        `},"2024-05-29":{s3:1,detail:`
（5，29）23点59小发作（眨左眼）
        `},"2024-05-30":{s3:1,detail:`
（5，30）中午小发作，13点跟我说的，自己描述24小时麻了6次，有声音，眼泪不明显，觉得左边有人（体感）
        `},"2024-06-01":{s1:[8],detail:`
6月1日，早上7点40。爬到我身上发的，感觉一分钟不到，打完7.40
前一晚因为我8点睡了，导致他和小哈没人管晚睡，我还不开心了
这2个原因，还是不发作时间久了，一共3个可能的原因
7.54自己起来盖被子
8: 07 醒了，不知道自己发过，没有不舒服
        `},"2024-06-07":{s4:1,coner:["医院","第一次去虹桥, 开了奥卡西平, 但因为曼月乐和副作用没吃"],detail:`
（6.7）去罗南，晚上9不到，新增蚊子叫，早上虹桥看病了
        `},"2024-06-09":{s1:[23],detail:`
6.9 23点16微信跟我说睡觉，第二天早上说发了
        `},"2024-06-21":{s1:[23],detail:`
6.22 也是在罗南 应该是21号11点多
        `},"2024-06-24":{coner:["中医","第一次去苏州"]},"2024-06-29":{s1:[14],detail:`
6.29 14点05左右，时间短，在罗南
        `},"2024-07-09":{coner:["中医","第二次去苏州"]},"2024-07-10":{s1:[4],detail:`
7.10 发作，发完3点54  我觉得时间不短，还是1分钟不到

前面一天白天去苏州看病，5点半起床，睡得也不早，人累，下午16点45陪我练车驾照里三人摔倒了，晚上睡前有‘做噩梦’，自己晚上有明确说，“今天累，拉窗帘，多睡会”
想到还有个细节，早上因为“3块钱买了苏州火车票而说他了”

4点10 起床尿尿，走路不稳，都是向右倒，推开奶奶房间门，尿尿比较深，但没泡沫，这也是前一晚他在担心的事，洗手的时候用牙膏 ——补充：晚上聊过后，本人表示没有印象

（4点48思考补充：1，突然想到我也做噩梦了，说胃一寒一热需要怎么治疗啥的，还考虑去看赵医生。2，哈妈尿尿不多的，自己也聊过是担心尿床所以让自己起床）
（5点14被‘我拿充电线碰到巧虎掉下来’惊醒，问我有没有发作，并且记得昨晚鬼压床，还说本以为中药吃了会好，意识挺清楚的）
        `},"2024-07-14":{s1:[15],detail:`
7.14 发作，下午14.52微信跟我说的，尿尿，他爸妈说5分钟，瞎说
        `},"2024-07-22":{memo:"摔跤, 破伤风?"},"2024-07-25":{hh:5,detail:`
（7月25 23点50 恍惚小发作）白天发作多次，失忆一点，正好跟我聊天，忘记自己摔跤请假
～（8.02晚补充： 可能25晚的小发作发到海马了）
12.04 恍惚 持续到12.09还在
12.22 恍惚
13.43 恍惚
23.50 大恍惚
        `},"2024-07-26":{detail:`
7月26 高度怀疑大发作，这次失忆特别厉害，（8.2补充：讨论认为，这次以后，对听到的，语速快的，一下子理解不到）（8.2晚补充： 当天不记得小哈是什么时候去罗南的，其实是前一天，在罗南也是逻辑推的，不记得床头奶茶的来历，想起来后觉得“不真实”）忘记小哈去苏州，上次发作后是记得的。早 我7点出门考科目二，9点到家，他说830醒来不知道身边状况，但是9点应该恢复差不多了，没麻，可能也是恍惚小发作
（8.2晚补充：
16号我中午去一起吃饭看天鹅
17号验车➕被警察抓
19号晚上游乐园
20号玩具奥莱➕万科天空➕蟠龙天地
21号长风大悦城
以上全部清空记忆
22号摔跤忘记地点，23号忘记晚上急诊拿药，我认为也是清空，只是逻辑编造补充的
）
        `},"2024-07-27":{memo:"半夜有点记录",detail:`
（7月27晚2点43，我醒了（不知道具体原因），去看他， 拿手机照下巴，他醒着，问他有事吗，他说没事，问他是不是叫我（我不知道自己怎么醒的），他说他本来想问我他们怎么碰我肚子，我问谁，他说不知道，我问什么时候，也不清楚，然后问有事吗，说没事，就不问了，我出来尿尿并记录了这点字。回到房间2点48，同样手法手机照下巴，睡着了）
（我没睡，看手机，3点46摸我，我问怎么了，他说以为我是女孩子，又说以为外公的脚，看起来人很正常，不一定有问题）
        `},"2024-07-29":{s3:1,detail:`
？小？7月29 1点17分结束，开始记录，入睡不久，说热有点醒了，然后觉得声音响，自己说意识清醒，并左边麻，但看脸部假笑了，害怕，不知道是不是破伤风，打算看一下监控，并百度。（因为百度到假笑）
看了监控，左半边脸假笑，查了半天资料，破伤风概率不大，并且死亡率不高。现在是3点32，她醒了多次，但看起来问题不大
        `},"2024-07-31":{s1:[1],s3:3,s4:1,hh:4,detail:`
7月31日 0点29分44秒发作 30分44秒，抽搐60秒，结束，36呼吸正常
我的角度：我快入睡了，听到有深呼吸声音，感觉没啥事，又过了一会，他手来抓我了，我穿过小哈过去，5秒左右就发了，一开始几秒有叫声，手机截屏时间是29到30，36呼吸声恢复，具体待看监控。
～
0点超过点入睡，还说好要冥想，睡前轻度叮叮声，但在我和奶奶小哈去游乐园玩的时候看了周文静，说紧张，看的时候啃指甲了。也不知道是说到小哈心理退行一直要吃奶或者要抱着睡（提示：通过监控看的，不去游乐园的原因是脚摔伤了） （写的时候0点46，在厕所，准备看监控）
～
0点53，大便回来看到她有点醒，对话思路清晰，说自己麻了，后来不记得了，我问他有没有发，他说没有。我也说没有
1点22，我在看监控，他问我有没有睡觉，问我有没有发，我说发了，正常聊天，聊到39分，还记得昨天发生的事，还不错

（当天早上8点48 左半边声音加麻 小发作，自己说早上还麻过一次）
（12点20 恍惚，觉得是做梦内容，熟悉感觉）
（中间短睡起来 麻）
（1点40恍惚，梦境和即视感）
（16点10，ureshi有点激动，耳朵打蛋声）
（19点58 在菊盛路和小哈 买奶绿coco 250摩托车，恍惚，梦境）
（睡前多次 小小发作，有麻有恍惚）
（23点47 睡眠中小发作醒）
        `},"2024-08-01":{coner:["中医","第三次去苏州"],s3:1,hh:3,detail:`
8月1日了 （第三次苏州）
（第二天，去一妇婴路上730聊，昨晚洗头吹头的事觉得不真实）
12点27 即视感恍惚，在去虹桥火车路上，游乐园门口
16点10在苏州配药的药店，在回忆上半天的事
在回火车站的地铁入口，感觉梦里有过现在的场景
22点12在家说恍惚，中度
23点07 快睡着 发麻加声音
        `},"2024-08-02":{s3:2,detail:`
～8月2日周五，去一妇婴，今天好像没事，第一天吃药，晚上拉肚子了，可能是药馊臭了，没倒出来放到下午
（8.2睡觉，睡前，半夜，早上歌一次 麻
        `},"2024-08-03":{s4:13,detail:`
（8月3日，下午6点，油天地，轻微手机铃声幻听，下午有手热，这几天比较多，10分钟后补充：第三次幻听了，
21点39：出去过河马奥莱，洗澡，聊天，又听到了一共10次，还是有铃声）
        `},"2024-08-04":{s3:1,detail:`
（8月4日，2点14分，中午小睡麻）
        `},"2024-08-05":{s3:1,detail:`
（8月5日，0点19 眼睛型小麻，55分后入睡）
        `},"2024-08-06":{s3:3,detail:`
（8月6日， 前2后1 3次小麻）
        `},"2024-08-07":{s3:4,detail:`
（8月7日，晚上1点小麻，一共4次，感觉时间长，慢慢移动）
        `},"2024-08-08":{s4:1,s3:2,detail:`
（8月8日，早上有点短暂耳塞，晚上睡前和半夜麻2次， 今天医院放环导致中药第一顿12点吃的）
        `},"2024-08-09":{s3:2,detail:`
（8月9日，睡前，半夜，早上都一次，比以前长）
        `},"2024-08-10":{s4:3,detail:`
（8月10日， 白天开始有纯熟悉感，非恍惚，多次，但不严重，不难受，晚上没麻，这2天小哈不在）
        `},"2024-08-11":{s3:2,detail:`
（8月11，18点15，吃饭的时候，左手发麻，晚上23点58，睡了半小时，麻加声音加有人，和早上一样，手到脖子，到耳朵，到眼睛，再结束）
        `},"2024-08-13":{s1:[23],detail:`
8月13日，（22点44准备睡觉）22点53分11秒到22点54分11秒，抽搐发作60秒，57分不到些恢复呼吸 ，眼睛里有泪，可怜，可能是觉得最近情况挺好的

从51开始，主动告诉我没事，过了一分钟，然后说还是麻了，自己在捏左手，大概几秒，就发起来了
声音比上次小，感觉振幅比上次小

23点06坐起来，不清楚情况，虚弱
23点45分起来尿尿，脑子很清楚，记得睡前的事（22点）
他说觉得昨天累，睡得晚，小哈是23点45摩托睡着回家的，他后来有点害怕，所以睡得晚，估计也睡得没那么好
前一天的表现是：翻来翻去，说一个动作人就酸
        `},"2024-08-14":{hh:6,coner:["奥1","奥卡西平晚上开始吃150"],detail:`
～接发作的第二天早上（8月14日，上班的）想呕吐，说是从胃来的不舒服，中午说又又做梦恍惚的感觉了，但是不像上次那么重
下午搞不清上下午
下午4点，又有做梦加恶心感觉，还感觉上现在是上午

～从罗南回家路上恍惚，大概是9点左右
～同一天晚上 （8月14日22点56分）快入睡，小哈哄睡中，有点声音，触发 砸吧嘴的海马小发作，具体没仔细问，想让他快点睡
        `},"2024-08-15":{hh:7,detail:`
自己说上班开错园区的入口了，因为在犹豫停车场的位置
10点32 描述不出的不舒服，追问后还是熟悉感做梦感
11点42 轻度想吐
下午2点55，3点50，4点07，都是恍惚，“梦里有过”，或者“昨天有过”的感觉
下午5点，背酸
下午7点10左右，想吐想拉屎恍惚
晚22点16 恍惚想吐
        `},"2024-08-16":{hh:1,s3:1,s4:3,detail:`
14点55小恍惚
14点13背疼加重，呼吸就疼，靠背也疼
22点左右，晚上手有点热，在罗南哄小哈睡，好像前一天也有过
23点47，耳朵顶顶顶，不明显
0点06，耳鸣，短暂，通过吸气解决的
半夜小麻，感觉有人，左半边，没到眼睛，恢复速度比以前快，翻身触发的麻
        `},"2024-08-17":{coner:["奥2","奥卡西平晚上开始吃300"],s3:1,detail:`
23点53麻 ，大概是23点30不说话睡的，比昨晚轻，感觉有人，没到眼睛，都比昨天轻
        `},"2024-08-18":{hh:3,s4:3,s3:1,detail:`
11.52 熟悉感，没恍惚和胃气上升
18.13 熟悉感，同上
23点左右哄小哈的时候手有点涨，说不太清
03分麻，感觉有人，没到眼睛，时间变长了，23点45带小哈出去才入睡的
        `},"2024-08-19":{s3:1,s4:1,detail:`
早上8.09 熟悉感，没恍惚，再陪小哈吃早饭
16点43 头撞了一下电脑
23点22 小麻，感觉有人，没到眼睛，时间和上次差不多，程度差不多，先有人再觉得麻
        `},"2024-08-20":{coner:["奥3","奥卡西平晚上开始吃450"],hh:1,s4:1,detail:`
16.43耳朵有描述不了的节奏，不厉害，说之前一直有
0.09分熟悉感，和小哈吵架吵醒了，0.09开始准备睡觉
        `},"2024-08-21":{s3:1,s4:11,hh:1,detail:`
7.30小麻
10.26 左边头“晕”，带一点涨，程度2分
12.58 左手烫涨
15.54 左边的手脸脖子发烫
16.00 熟悉感
19.40 左手烫涨
20.10 左手烫涨
20.35 左手发烫
20.40 左手发烫
21.22 左手发烫
21.45 左手发烫
22.01 同上
22.12 同上
        `},"2024-08-22":{s3:1,s4:7,detail:`
10.00 头晕
10.39 手烫
14.50 手臂烫
15.20 手涨，后背冒汗
15.32 幻听
16.12 工作不顺利就出汗
21.40 先半边，好点了，又感觉有人并加重，到头皮，没到眼睛，耳朵有点异常，非幻听，21.20开始睡的
半夜不严重的小麻，比较快，还没开始就结束，在等开始的时候结束的
        `},"2024-08-23":{s4:8,hh:1,detail:`
10.30 手烫涨
12.45 手烫涨
14.53 耳朵顶顶顶
15.10 脸烫，耳鸣
15.50 熟悉感
16.32 手涨烫
16.48 耳鸣
19.14 手涨烫
20.55 不记得的很不舒服的感觉
睡觉没有麻
        `},"2024-08-24":{s4:4,detail:`
下午手烫涨2次
22.45 刷牙一秒晕，讲不清
23.00 说话有点回音
        `},"2024-08-25":{s4:7,detail:`
上午手烫涨
12.15 耳鸣 十秒
15.41 手涨烫
16.20 手烫涨
19.32 手烫涨
20.01 手烫涨
22.22 手涨烫
        `},"2024-08-26":{s4:7,detail:`
11.49 手涨烫
13.55 手烫涨
16.10 手烫涨
18.19 手烫涨
20.27 手烫涨
22.19 右耳鸣
22.25 手涨烫
        `},"2024-08-27":{s4:3,detail:`
11.24 手烫到小手臂
11.30 手烫
16.53 手烫，耳朵磨的声音
        `},"2024-08-28":{s4:3,s3:2,detail:`
上班路上 手涨烫，估计9.00
13.33 手烫涨
20.02 手烫涨
22.30和半夜2次差点发作，突然有人
        `},"2024-08-29":{s3:1,detail:`
8.25 耳朵不正常，然后左边手加脸，麻到眼睛眨了
        `},"2024-08-31":{s3:3,detail:`
晚上有2次“做梦，失重”，跳眼2秒
早上麻一次，没到眼睛
        `},"2024-09-01":{detail:`
皮疹，口腔溃疡
        `},"2024-09-02":{hh:12,detail:`
2.48 半夜有害怕和不舒服，眨双眼，过程一分钟不到
9.45 2次，单位上厕所前后，熟悉感，梦境感，很快忘记，想吐，十几秒
12.12 熟悉，梦境，想吐，想拉，随着拉屎感觉消失恢复，大概20秒
13.26 同上，持续30秒
16.15
16.20
16.30
16.40
17.26
18.24
19.51 2分钟，刚吃完饭，在天街，不知道为什么在这里，不知道自己有没有上班 “医生类型的人，然后说不了了，有很多信息，说不了”，刚才的感觉像做梦
        `},"2024-09-03":{s3:1,hh:10,detail:`
睡觉的时候可能有发，但记不清了
11.29 熟悉，梦境，想吐，拉屎，回忆混乱
12.33 熟悉，耳鸣
13.12
14.16
15.49 看视频，连续不舒服
16.53 熟悉加发麻
18.37
19.20 19.24恢复 不知道周末去哪儿了，之前知道
19.45 麻加眼睛跳
22.34 想吐，熟悉感
        `},"2024-09-04":{memo:"起床失忆, 恍惚发作第三天, 周三",s3:1,hh:10,detail:`
前面一天药晚吃一小时
晚上3点肚子咕噜严重，可能呕吐感有身体基础，植物神经？
起床失忆，
问我每天吃药吗，吃什么药
不记得小哈前几天肠胃炎呕吐
忘记自己麻疹和口腔溃疡
不记得星期几
上周末玩分手厨房完全忘记
完全忘记腿摔过，和爷爷摔跤
8.37 觉得有人，站不稳，蹲下了，眼睛跳
10.42  恶心，熟悉，梦境 46分‘好了95’
    ——  10.56 不记得刚才不舒服了
12.00 同上 03分结束
13.17 发完，在厕所，刚出来
13.27 洗碗，可能也发了下，轻微，洗碗没停
中午回忆上午，觉得是上周的事，时间13.41
14.10 左脚麻
15.54 恍惚 梦境
18.06 想吐 08分好
19.39 轻微想吐
20.30 同上 33好
22.26 同上 还能回微信 29分好
        `},"2024-09-05":{hh:7,s4:1,detail:`
起床失忆，惊讶今天周四，觉得昨天看病很远，像做梦，觉得昨晚拿衣服像2，3天前
9.42 熟悉，梦境，自述几秒
11.31 想吐 整个头皮麻 35分好
（发得越久越严重）35分说：几秒前的聊天记录是昨天的，并且觉得昨天放假，所以是前天的，但其实今天是周四
12.35 恍惚 39好
15点左右可能恍惚过，没跟我说，自己也记不清了，但是觉得记忆混乱
15.44 想吐 47好
18.53 拉屎 呕吐 57好 发完忘记症状
22.02 左手涨烫
        `},"2024-09-06":{coner:["医院","第二次去虹桥, 之前取消了31的号挂了13号的, 求医生6号加了号"],s4:4,detail:`
去虹桥看病了
15.00前2次左手烫涨
19.20 手涨 后脑勺发烫
21.00 手烫
        `},"2024-09-07":{s4:5,detail:`
15.00 手烫
16.06 手烫
19.07 手烫
19.15 手烫
然后长时间有点晕晕的
22.09 手涨烫
        `},"2024-09-08":{s3:1,s4:14,detail:`
0.32 反应全身发麻，可能是左边
12.13 涨麻 说早上可能漏了一次
12.40 烫涨
13.16 涨烫
13.26 
14.22 
14.29 
18.15 烫
19.01
19.08
19.15
19.17
19.23 
19.46
21.45
        `},"2024-09-09":{memo:"开始觉得脆弱, 后觉得和发作有联系",s3:1,s4:11,detail:`
8.37
脆弱
10.07
12.11
12.18
12.41
12.53
13.44
16.39
17.08
17.20
17.30 手麻加小恍惚，自己说可能日历有压力
23.43 涨
        `},"2024-09-10":{memo:"出现了一次新形式: 强迫性思维",s1:[20],s3:1,s4:4,detail:`
13.20
18.00 （晚上回忆）好像有左手轻微涨，脑子里会被强制想到一首歌，不能主动停下，不记得是哪首歌，是个电视剧的插曲
20.04 发作了，但全程有意识
日期09.10 算是大发，与过往的区别：没叫声，抖动没以前力气大，没有失神
21.13 左手涨烫
21.36 左手涨烫3次
22.14
        `},"2024-09-11":{memo:"有出现和昨晚发作相似的先兆, 但轻",s3:4,s4:7,detail:`
8.36 手烫
10.27
11.40
12.45 幻听，说是双耳
14.11
14.30 麻，和昨晚一样，没到眼睛，要我自己去体会 本来也不是很明显 但是体会了就觉得比平时更涨 带点麻 觉得是延伸到半个手臂，长期了
14.43 手涨烫，脸麻，轻度，就是下巴到耳朵
15.32 手涨烫
16.16 烫涨，木，消失感，收紧 20变成涨的感觉，然后减弱为“需要去感受”的程度，持续很久，
22.27 涨
22.43 左边麻，没到眼睛
        `},"2024-09-12":{s3:3,s4:8,detail:`
半夜2次，有一次麻到右腿
07.55 
10.35 左边后脑勺烫麻
12.23 心里播放一个场景
12.38 手麻涨
12.48 手涨烫
15.54 好像幻听很久了，可能是单位吵导致
21.13 涨
21.27 涨
22.17 幻听
        `},"2024-09-13":{coner:["医院","第三次去虹桥"],s3:3,s4:17,detail:`
去医院看病, 但完全忘记上周来医院的细节.
加了左乙拉西坦, 做了认知检查和自免脑外周血检查, 都没啥问题.
3.53 左边有点麻
医生诊室里，麻过2次，10点和11点左右
11.44 幻听了 微信视频通话声音，就一下，刚打过奶奶电话
14.03 涨
14.46 幻听 苹果手机铃声
14.48 手涨烫
15.20 幻听
16.03 幻听
17.17 幻听
截止到20.41 3次幻听+3次手涨
20.41 幻听
20.45 幻听
21.01 手烫
21.50 幻听
        `},"2024-09-14":{s3:3,s4:4,detail:`
6点多 有睁眼麻，到眼睛
15.39 手帐 一小时前幻听
20.06 感觉“小金条”不熟悉，问是不是有别的名字
22.43 右边耳鸣
23.23 左手麻，没到手臂，10秒或者20秒，然后涨
23.34 左边腿麻2次，持续5，6秒，空了1，2秒
23.38 右边耳鸣
        `},"2024-09-15":{s4:5,detail:`
13.00 左手涨，到手臂，感觉和平时有点不一样，但时间短，15秒左右
18.30 左手涨
21.14 右耳耳鸣
22.06 幻听
22.37 左手涨
        `},"2024-09-16":{coner:["左","左乙拉西坦晚上吃250"],s4:11,s3:2,detail:`
12.50 左手涨
13.15
13.25
14.05
15.02 太阳穴表面麻，幻听
15.33 幻听铃声
17.04 说话有话筒，快入睡了，然后耳朵好，腿麻，再半边，到眼睛，后来好了，07分好了
18.14 手帐
18.43 幻听
18.51 幻听
20.08 手涨烫
20.15 小手臂下烫
23.03 后脑勺麻，鼻子像吸水，感觉双侧，说了感觉左边重
        `},"2024-09-17":{s4:7,detail:`
第二片左乙拉西坦后 明显嗜睡
10.48前2次手涨
11.07 手涨
15.00 左手食指涨
16.30 左耳幻听
23.36 左手涨，左手臂烫
23.58 左手涨
        `},"2024-09-18":{s4:3,detail:`
15.37 幻听
16.64 手涨
18.10 手涨
        `},"2024-09-19":{s4:4,s3:1,detail:`
12.02 手涨
13.05 幻听
17.00 幻听
18.38 手涨
19.22 左手失重
        `},"2024-09-20":{s4:3,detail:`
12.23 眉毛跳麻清凉
13.43 手涨
睡前被批评 普通的不舒服，不记得什么了
        `},"2024-09-22":{s4:2,s3:1,detail:`
(这天去长江边公园没开, 然后去宝杨宝龙看地铁, 他一个人开车先回去)
15.30 小哈摔了耳鸣一下
17.54 耳鸣
21.04 左边整个手麻，因为在玩陀螺，一个手付，一个手拍视频，有点吓人
大概11点，睡前手涨
        `},"2024-09-23":{memo:"第一次'不抽搐大发', 有先兆新增小发形式, 脆弱加重",s2:1,detail:`
14.24 感觉在氢气球上，不断上升，因为我说阿姨红包的事，说他是想要钱，他觉得我觉得他不好，但并没有
14.59 左后脑勺 清凉的麻
20.48 右手涨 ，其实当时是全身涨了，所以发现左手也涨的，

大发了，但是没抽搐，单位里看电视，偷哭了好几次，就看大仁哥
日期 10.23 大发，在描述的时候，说上午的事，眼里出泪水了，脆弱

自己描述全程有意识，知道自己眼神发呆。主要是语言能力失去，心理描述能力也没了，但是“自己知道”
然后是半边恢复的，发完考试记忆了，记忆很好

然后说，阿姨，三姨妈的事，就眼里有泪
        `},"2024-09-24":{s3:1,s4:1,detail:`
7.40 早上麻到眼睛
21.16 左手烫
        `},"2024-09-26":{s4:6,s2:1,detail:`
17.14 手指甲风凉
19.00 全麻？右手涨半秒，看到镜子里的戒指，有联想一些事（好像和病没联系），开始全身涨失重，轻微麻晕，19.03恢复，回微信，后续说有强迫性思考和不真实感
20.40 右手涨半秒
20.45 手帐
21.09 手帐
21.40 头晕，和以前营养不良一样，感觉不是病
        `},"2024-09-27":{memo:"恍惚发作第三次",s4:3,hh:6,detail:`
8.02 不舒服，和昨晚一样
16.05 恍惚发作 程度大，想吐，难受，场景，梦里场景，毛孔竖起来 17分说放空，不真实，熟悉感
17.12 恍惚，想吐，说是2秒，紧张，心跳快
17.37 手涨
19.06 想吐 恍惚，是下班路上，忘记要回哪里了
19.40 恍惚 卢广仲电视剧，以前做过梦，自己在里面，45分才‘回到世界’
今天恍惚后 记忆测试：20.41 感觉还行
20.45 后脑勺发凉
21.05 手涨
22.04 洗澡出来说恍惚了一次
23.26 左手涨烫，紧接着恍惚
        `},"2024-09-28":{s4:6,hh:5,detail:`
这天的行程是去罗南, 和外婆油天地醉美里, 再美兰西湖公园, 再美兰湖商场
这里比较有意思的是,
        \\'和外婆说好不烧饭出去吃, 但不记得了\\' --- 不知道是不是生病少了一层过滤, 还竟然成功了
11.05 2，3秒短暂恍惚，轻微，然后双手有点涨烫
11.20 恶心 想吐 程度比较高
14.05 恍惚 恶心 在美兰西湖公园，忘记了，问了说觉得游天地直接到商店的
15.30 左手手烫 
15.39 左手涨烫
19.54 恍惚 大概是57分发作停止，已经忘记症状，回忆到8点05分，还可以，但是像做梦和不真实。自己描述是这次发作群里最重的，因为不知道自己在哪里了
20.19 补充，还没缓过来，记忆短
这次完全不记得生小孩去浦东了
21.00 手烫
21.43 手烫
22.10 手烫
23.00 手涨
        `},"2024-09-29":{coner:["左+医院","第四次去虹桥, 左乙拉西坦晚上加250"],s4:9,s3:1,hh:2,detail:`
09.28 感觉是血糖低的晕
10.23 手涨
11.01 手烫
11.14 ，刚到蟠龙天地，轻微想吐 想拉屎 熟悉感很强烈，现在是17分，觉得刚才万科天空之城的事2天前
11.56 轻微恍惚呕吐，恢复很快，影响几乎没
15.43 左手腕 有点烫
16.44 手烫
19.26 手烫，29分说又烫了
19.34 手烫
20.00 手烫
20.08 手烫
22.48 手烫到小手臂，左后脑勺针刺感
23.01 醒过来，说做了2个梦，一直鬼压床
23.31 右腿很麻 ，说是姿势问题
        `},"2024-09-30":{s4:14,detail:`
11.52 手涨，啃右手大指甲，再左手碰右手，会触发，至少2次了
11.55 左边额头小麻，太阳穴上面一块，很小一块，清凉
12.50 手涨
13,
        52 手涨
14.32 烫
14.36 烫
14.58 左边眉毛尾这里 太阳穴上面清凉感，跟上午一样
15.15 手烫，就手指甲烫，手掌涨
15.44 指甲一直风凉，小麻
16.27 手和小手臂烫
16.33 手指和太阳穴上面小麻
23.？？左手烫
23.46 左手麻
00.05 手烫
        `},"2024-10-01":{s4:19,detail:`
(在家一天, 小哈玩弹珠)
10.39 手烫
12.14 手烫
13.00 手烫涨
14.10 手烫
14.41 手烫
15.06 手风凉
15.09 手烫
15.14 手烫
15.16 手涨
15.31 手烫
16点到19点 左手烫6次
到21.30 3次烫 
21.43 烫
21.46 涨
        `},"2024-10-02":{s4:12,detail:`
(中午吃潮界, 下午长江边)
9.50 前烫2次
11.08 烫
11.45 烫
19.29 后脑勺烫
20.10 烫3次
20.13 后脑勺烫
21.55 手烫
22.27 手烫
22.52手烫
        `},"2024-10-03":{s3:2,s4:9,detail:`
(大宁公园太太碰头, 下午玩沙子, 晚上和外婆吃饭)
7.02 半身麻，到眼睛，2次，半夜一次，早上一次
8.50 手烫
11.39 烫
17.30 烫
19.59 烫
20.03 我在母婴室打喷嚏后即视感
20.57 烫
21.37 烫
21.58 烫
22.07 烫
        `},"2024-10-04":{s4:12,detail:`
(在家一天)
20.40前3次烫
21.25 烫，发现药单数，应该是少吃过了
21.51 轻微失重
22.03 烫
22.26 烫
22.30 烫，有点晕，不知道是不是发现少吃药
22.41 烫了2次
22.46 烫
23.11 烫
        `},"2024-10-05":{s3:2,s4:10,detail:`
(今天下雨, 下午做82路去外婆家, 晚上回来)
11.25 前 手烫3次
12.08
15.04 
15.07 烫到手腕
19.26 烫2次
19.42 手烫
19.45 手烫
20.40 麻 没到眼睛 在和 小哈在 trek拍球
晚上麻2次，没到眼睛，早晚各一次
        `},"2024-10-06":{s3:2,s4:5,detail:`
14.30 左右，在睡觉，小哈叫，麻了久，没到眼睛，下午睡觉有思考一些东西，脆弱，生气，是小哈吵醒他导致的，思考爸妈小时候对待自己，然后醒过来就都有“睁眼麻”
20.10 左耳风凉，之前烫了4次
20.35 烫
23.00 以后 麻到眼睛
        `},"2024-10-07":{s4:8,detail:`
11.51 之前烫，现在麻，算2次
12.11 烫
14.46 烫
21.21 烫涨
23.07 烫涨 到小手臂
23.14 和上次一样
23.21 和上次一样
        `},"2024-10-08":{s4:15,detail:`
11.00 烫，第一天工作
11.19 太阳穴清凉
12.05 烫
12.41 太阳穴风凉，或者太阳穴
14.26 涨
15.23 后脑勺风凉
15.42 耳朵上面风凉
17.22 左手带着手臂
18.00 涨
20.39 耳朵上面风凉
21.20 涨
22.20 即视感
23.18 烫
23.32 烫
23.53 烫
        `},"2024-10-09":{s4:7,detail:`
12.30 后脑勺风凉
14.39 左手很风凉
14.59 太阳穴附近凉快
16.11 手指尖风凉
16.35 烫
22.10 烫
23.59 耳朵上面风凉
`},"2024-10-10":{s4:11,detail:`
09.45 手很风凉
09.51 烫
12.15 手麻手烫
12.35 后脑勺风凉
12.41 手指风凉
13.12 烫
13.19 眉毛，太阳穴风凉
14.37 烫
15.28 烫
15.37 手风凉
16.38 
20.13 烫
        `},"2024-10-11":{s3:2,s4:4,detail:`
10.31 风凉
11.09 太阳穴风凉
15.44 太阳穴风凉
0.05 失重感，感觉气球上飘，小麻，没到眼睛
0.11 左手烫
1.14 嗯哼了2次
07.08 眼睛睁开导致的小麻
        `},"2024-10-12":{s4:9,detail:`
09.36 烫
脆弱
15.41 烫，涨，后脑勺风凉 一共2次
17.20 手指风凉
17.30 耳朵风凉
19.48 左手烫
20.19 烫
22.19 说话多的时候 视野周围黑
22.20 烫
        `},"2024-10-13":{hh:1,s4:8,detail:`
11.23 熟悉感
11.46 涨
13.04 风凉
13.14 烫
记性不太好，10月3号的事情记得不清楚
18.48 烫
18.54 
21.02
21.29
21.38
        `},"2024-10-14":{hh:3,s4:7,detail:`
蚊子多，所以恍惚了？
10.36 恍惚发作
11.53 后脑勺风凉
13.11 烫
13.51 烫
15.54 手风凉
16.32 恍惚，知道小哈16.10睡觉，知道下午帮我打了科目三
18.30 恍惚
晚上 烫2次
        `},"2024-10-15":{coner:["医院","第五次医院, 总院"],s3:1,s4:13,hh:1,detail:`
09.00 恍惚 梦境，呕吐 在去医院的路上，长乐路，1分钟恢复，08分还有一点
09.15 烫
09.48
11.18 低血糖的头晕
12.07 烫
12.23
12.54
13.43
15.25
15.52
19.08
19.22
20.46
21.11
漏药一粒左乙拉西坦，已经漏了3次
晚上睡前轻飘飘，ureshi后
睡醒麻到眼睛
        `},"2024-10-16":{s4:2,hh:1,detail:`
16.16 手指风凉
18.30 恍惚 想吐，梦境感不重
19.59 烫
        `},"2024-10-17":{s4:8,s3:1,detail:`
09.48 烫
10.04
11.44 太阳穴风凉
13.14 烫
15.10 耳朵顶顶顶2次
16.22 风凉
16.27 耳朵风凉
23.26 耳朵风凉
08.00 小麻，以失重和轻飘飘开始，发到眼睛，时间久，后来反推还是麻的
        `},"2024-10-18":{s4:7,detail:`
10.08 烫到手臂
10.50 烫到手臂
11.50 烫
12.17 烫到整个手臂
14.06 烫
15.20 烫
21.40 烫
        `},"2024-10-19":{s4:4,detail:`
15.42 麻左手普通的
17.40 烫
19.11 烫
19.44
这几天晚上都有之前9.22提到的鼻子堵住的回音
（晚上测试：9.22和9.29忘记得很多）
        `},"2024-10-20":{s3:2,s4:5,detail:`
19.30 鼻孔风凉 在吃纸包鱼，好像是鼻子过敏的皮导致的
21.37 烫
22.13 烫到小手臂
22.23 烫到小手臂
23.15 烫到小手臂
        `},"2024-10-21":{s3:1,s4:7,hh:1,detail:`
早晚各一次麻到眼睛，时间久，早上是先失重，飘了一会
08.39 呕吐，拉屎，恍惚，1，2秒短暂的梦境感，前一天太累了，海上世界宝乐汇吵架
11.09 手指尖发凉
11.36 同上
12.52 同上
14.09 同上
14.20 同上
15.05 同上
17.56 同上
晚上失重加飘，ureshi了
        `},"2024-10-22":{hh:1,s3:1,s4:2,detail:`
11.02 到11.05 恍惚 呕吐，但是不严重
13.40 太阳穴风凉
16.40 手风凉
早上5点 小麻 到眼睛
        `},"2024-10-23":{coner:["涨+开浦兰","持续型的涨, 晚上开始吃开浦兰"],s4:6,hh:2,detail:`
13.05 小指涨麻，和平时不太一样，已经2次了，一次到手腕
13.38 涨麻，好像在持续，但在想别的就没有，现在是14.41
14.51 带耳机的地方风凉
19.11 间隔5分钟恍惚了2次，一次特别明显，梦境感重，想到事情泪流满面，回家理东西也泪流满面
21.55 涨麻
00.37 手烫，到手腕
：晚上开始吃开浦兰
        `},"2024-10-24":{s4:6,detail:`
11.41 后脑勺凉
14.36 手指风凉
15.31
16.07 手风凉
23.20 手烫
23.32
        `},"2024-10-25":{s3:1,hh:1,s4:6,detail:`
03.27手烫2次，到手腕，小哈23点开始看电视的
11.30 手指风凉
14.18 同上
22.48 左手烫
00.42 烫到手腕，ureshi过
        `},"2024-10-26":{s3:1,s4:4,detail:`
08.20 小麻到眼睛，有梦境感，但都不严重
22.43 烫
        `},"2024-10-27":{s3:1,s4:4,detail:`
00.22 烫
07.26 小麻，说到眼睛很久，还有口水
14.46 左后脑勺麻
17.13 烫
17.26
21.37
        `},"2024-10-28":{s4:5,detail:`
01.01 有嘴巴和肚子叫，左半边麻，眼睛跳的前面状态，原来是怕流口水
15.38 手风凉
17.10 后脑勺凉
23.59 手烫
00.09 手烫，到手腕了
00.16 同上
        `},"2024-10-29":{hh:1,s3:1,s4:3,detail:`
16.53 手背凉
20.20 恍惚 想拉屎
22.40 后脑勺凉
23.10 手烫
        `},"2024-10-30":{s3:1,s4:4,hh:1,detail:`
早晚各麻一次，自己认为轻，早上是翻身导致的
14.10 手背风凉
14.59 手，然后头顶也风凉
16.35 风凉
19.24 恍惚，和昨天一样
说这两天右边有耳鸣
早上麻到眼睛跳，8点左右
        `},"2024-10-31":{s4:4,detail:`
16.11 手背风凉，半小时前也有一次
17.00 手指凉
17.07 手背风凉
        `},"2024-11-01":{s4:7,detail:`
11.18 手指风凉
12.13 头顶风凉
13.43 手指风凉
14.22
14.32
14.43
16.06
        `},"2024-11-02":{s3:1,s4:4,detail:`
11.24 涨过2次，去无锡路上红灯说的
19.24 左手风凉
19.46 太阳穴风凉
半夜麻过
        `},"2024-11-03":{s4:2,hh:2,s3:1,memo:"去无锡第二天失忆严重",detail:`
睡前听到她呼吸很响，觉得是太累了，也应该是因为累
起床不知道礼拜几，感觉做了好多梦，问要不要上学，昨天去干嘛了不知道了，问今天外婆是不是去罗南（是对的）
后来好像想起来去无锡了，感觉是梦到的，不真实，说好像很多奶茶
想起来小哈晚上话多，跟我去洗澡了，玩具在房间里，和一些睡前的事
后来想起来昨天的事了，但是觉得是梦到的
半夜醒过一次，还知道礼拜天

14.49 风凉
16.56 下午睡觉小麻
17.30 想拉屎，想吐，不严重
21.56 左手烫
        `},"2024-11-04":{s4:5,detail:`
睡前我跟陆云打电话了，他是在打的时候睡着的，之前在看照片和偶像
好像没麻，没恍惚
10.24 手风凉
10.39
11.28
11.37 太阳穴风凉
16.38 手风凉
        `},"2024-11-05":{s3:1,s4:2,detail:`
16.44 手风凉
22.33 左手涨
        `},"2024-11-06":{s3:1,s4:2,detail:`
00.12 起来说胡话，说怕鸭子爬起身上，再问说红绿灯
半夜小麻到眼睛
有感觉有人
21.07 额头麻，早上有2次手风凉
醒来有一点点麻
        `},"2024-11-07":{s3:2,s4:4,detail:`
10.59 手风凉
13.45 手涨
15.27 手指风凉
16.16 手风凉
睡觉前后都小麻，都到眼睛，说这两天眼睛痒睡得不好
        `},"2024-11-08":{s3:1,s4:6,detail:`
10.30 耳朵风凉
11.08 手风凉
12.02 手风凉
12.58 
15.09
15.55
睡前麻
        `},"2024-11-09":{s3:1,s4:6,detail:`
20.32 左手烫
20.46 手烫
20.57 左边头麻
21.07 手烫
22.31 涨
22.56 烫
睡前小麻
        `},"2024-11-10":{memo:"恍惚发作开始, 没以前严重",s3:1,s4:3,hh:1,detail:`
08.18 睡着前小麻
20.32 从到家后到现在2次烫
20.54 烫
20.57 在说下午自己和小哈玩，外公发了在美兰西湖，然后他打电话给外婆的事，有梦境感，想吐，比较严重，说无法描述，21.01说好了
现在回忆，早上醒来，大概4点搞不清状况，啥都不知道的感觉
下午带小哈出去，觉得是模糊的，像1，2周前看过的电影
23.07 说麻了一下
00.13 换转向睡觉，不知道有没有什么不舒服
        `},"2024-11-11":{s3:1,s4:4,detail:`
15.00 手指风凉
17.13 
22.03 烫涨
22.36 烫
半夜醒了后翻身小麻了
        `},"2024-11-12":{s4:7,hh:1,detail:`
13.45 手风凉
18.27 烫
18.45 涨
19.14 涨
21.31 风凉
23.03 烫
23.29 烫
半夜有一次恍惚
        `},"2024-11-13":{hh:4,s4:3,detail:`
09.14 到单位，说路上恍惚了，时间比较长，所有症状都有，有无法描述，梦境感，熟悉感久
分析后，觉得昨天的事模糊，其他还好
11.27 手烫
14.14 恍惚，自己描述“非常难受”，18分描述，一直有点麻，对周围环境陌生，不记得上午搬位子的事，问小熊在哪里，20分说发作结束了，说刚才不知道自己在哪里，不知道上下午
18.09 恍惚，14确认好了，觉得下午的事是假的，和下午差不多厉害，有梦境，熟悉感没有，不知道是不是换过位子了
18.37 手风凉
19.46 烫
20.44 我洗澡回来，在恍惚，程度看起来一般
        `},"2024-11-14":{hh:3,s4:4,s3:2,detail:`
09.49 恍惚，梦境，拉屎，吐
14.54 恍惚
15.45 手风凉
18.06 恍惚，做梦，1分钟内好了
22.40 烫2次
23.32 烫
早晚各一次小麻，比较厉害，早上一次是6点打蚊子以后，说可能流口水了
        `},"2024-11-15":{hh:2,s3:1,s4:1,detail:`
12.12 恍惚，自己说比昨天轻
17.15 手烫
21.16 恍惚，17分结束
23.29 小麻 快睡了
早上小麻
        `},"2024-11-16":{hh:1,s4:9,s3:2,detail:`
和小婷一起过生日, 吃了一绪, 玩了美兰湖的商场和公园
08.56 恍惚
20.52 涨2次
20.55
21.00 烫，我摸了好像是物理的
21.40 左手麻，转风凉
21.54 涨
22.41 风凉
00.49 左手烫2次了，今天睡得晚了
半夜麻一次，早上一次，早上比较轻
最近开始有“有人”的感觉
        `},"2024-11-17":{coner:["奥4","奥卡西平加了150bid"],s4:8,hh:1,detail:`
今天早上开始多吃150奥卡西平
16.54 手麻再风凉
20.04 左风凉
20.23 风凉
20.28 恍惚，29好，程度算轻
21.27 烫
21.30 烫
22.00 烫
23.38 烫
00.16 涨烫
`},"2024-11-18":{detail:`
13:13 恍惚，自己说不重
13:57 手烫
14:03 涨/烫/风凉
15:40 太阳穴风凉
16:41 涨/烫/风凉
16:47 涨/烫/风凉
19:06 涨/烫/风凉
20:01 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:7},"2024-11-19":{detail:`
15:58左耳朵上面风凉
16:48 涨/烫/风凉
17:05 恍惚, 比昨天厉害
19:18 涨/烫/风凉
20:09 涨/烫/风凉
21.19 风凉，在看电视
21.41 风凉，在看电视
21.47 轻微恍惚
22.47 整个右臂麻了, 算小麻
半夜麻了0次，睡醒麻了0次`,hh:2,s3:2,s4:6},"2024-11-20":{detail:`
14:04 涨/烫/风凉
18:05 涨/烫/风凉
半夜麻0了次，睡醒麻了1次`,hh:0,s3:1,s4:2},"2024-11-21":{detail:`
今天恍惚比较严重, 有”困”的感觉, 不确定是先兆, 恍惚前在玩卡丁车和spacegarden, 前一天接小哈回来. 
但根据历史看, 又不完全和screentime有关系.(卡丁车肯定是累的)
09:00恍惚，程度普通
10:33 涨/烫/风凉
10.44 恍惚严重, 持续的熟悉感, 非常想吐, 问了昨晚羽毛球和今天早饭, 问题不大
11点半睡着了，睡到13点一刻
14:08纯想吐（比较轻的恍惚）
15.00 恍惚，熟悉感和梦境感严重，但比早上轻和短
半夜麻了0次，睡醒麻了0次`,hh:4,s3:0,s4:1},"2024-11-22":{detail:`
10:35 涨/烫/风凉
11:35 涨/烫/风凉
14:21 涨/烫/风凉
14:44 耳朵风凉
14:52 涨/烫/风凉
今天大扫除了，晚上，到11点了
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:5},"2024-11-23":{detail:`
17:45 涨/烫/风凉
20:41 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2024-11-24":{detail:`
15:12 涨/烫/风凉
19.45 涨/烫/风凉
下午开始好像不太精神
半夜麻了1次，睡醒麻了1次`,hh:0,s3:2,s4:2},"2024-11-25":{detail:`
早上的小麻感觉有人，眼镜跳
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2024-11-26":{detail:`
10:43 涨/烫/风凉
11:18 涨/烫/风凉
12:03 涨/烫/风凉
14:13 涨/烫/风凉
14:30 涨/烫/风凉
19:39 涨/烫/风凉
21:06 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:7},"2024-11-27":{detail:`16:58 涨/烫/风凉
19:39 涨/烫/风凉
20:19 涨/烫/风凉
21:54 涨/烫/风凉
22:01 失重
22:09 失重
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:6},"2024-11-28":{detail:`11:12 涨/烫/风凉
19:16 涨/烫/风凉
有一次轻微的感觉不对，这次算作轻微发
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:2},"2024-11-29":{detail:`10:36恍惚，梦境感，但没想吐和拉屎
13:44 涨/烫/风凉
15.00 恍惚，梦境感
16:54 涨/烫/风凉
20:17恍惚，梦境，想吐，21分好，不知道为什么手上电脑，是谁的，不知道时间，有没有上班，刚才的事（指发作前几分钟）觉得很远，大概早上或者昨天，发作时的事不真实
半夜2点有说回他，早上问说不知道有没有发，但知道早上眼睛跳了
半夜麻了0次，睡醒麻了1次`,hh:3,s3:1,s4:2},"2024-12-01":{detail:`09:20 恍惚, 说”平时也会这样, 平时是身上”发怵”, 现在是上半身”发怵””, 24恶心的感觉没了
17:23 恍惚，梦境感，想大便，想吐，24说发好了
21:17想拉屎，想吐，后背后脑勺下半部分风凉，熟悉感，梦境感，19分梦境感熟悉感明显。20分问有没有梦境中的梦境。21分好了
00.14 失重麻
1.30左右 右脚抽动多次
半夜麻了0次，睡醒麻了0次`,hh:3,s3:1,s4:0}},uo={id:"cont-wrap"},ao={id:"calender-wrap"},ho={id:"calender-head"},po={class:"calender-year"},go=["onClick"],mo={class:"date"},_o={class:"strat"},bo={class:"opt-head"},yo=["onClick"],vo=["onClick"],xo={class:"strat setall"},wo={key:0},So={key:1},Co={__name:"App",setup(e){const t=Object.fromEntries(Object.entries(fo).map(([P,A])=>[new Date(P).valueOf(),A])),n=["2024-01-27","2024-12-30"],s=(new Date(n[1])-new Date(n[0]))/864e5,i=new Date(n[0]).valueOf(),r=rs(new Date(n[0]).valueOf()+864e5*4),l=en(Ms),c=P=>{const A=new Date(+P);return`${A.getFullYear()}-${A.getMonth()+1}-${A.getDate()}`};let f={};const h=P=>{var A;(A=f[P])==null||A.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})};let a=0,p=null;const S=rs(!0),C=P=>{if(!p){const A=P.target;S.value=a>A.scrollTop,a=A.scrollTop;const I=new Date(n[0]).valueOf()+(new Date(n[1])-new Date(n[0]))/A.scrollHeight*(A.scrollTop+A.clientHeight/2);r.value=I,p=setTimeout(()=>{p=null},350)}};let F=null;const H=P=>{F||(S.value=!1,F=setTimeout(()=>{F=null},350))},Y=P=>{for(const A in Ms)l[A]=P?0:-1};return Wn(()=>{const P=document.querySelector("#calander-body");P.scroll(0,P.scrollHeight*(new Date-new Date(n[0]))/(new Date(n[1])-new Date(n[0]))-P.clientHeight)}),(P,A)=>(de(),me(re,null,[z("div",uo,[z("div",ao,[z("div",ho,[z("div",po,Se(new Date(r.value).getFullYear())+"年"+Se(new Date(r.value).getMonth()+1)+"月 ",1),A[2]||(A[2]=Sl('<div class="calender-item">周日</div><div class="calender-item">周一</div><div class="calender-item">周二</div><div class="calender-item">周三</div><div class="calender-item">周四</div><div class="calender-item">周五</div><div class="calender-item">周六</div>',7))]),z("div",{id:"calander-body",onScroll:C},[(de(),me(re,null,$t(s,I=>z("div",{class:st(["calender-item card",{active:ge(i)+I*864e5-r.value<864e5*31&&new Date(ge(i)+I*864e5).getMonth()===new Date(r.value).getMonth()}]),onClick:T=>h(ge(i)+I*864e5)},[z("div",mo,Se(new Date(ge(i)+I*864e5).getDate()),1),be(co,{strategy:l,record:ge(t)[ge(i)+I*864e5]},null,8,["strategy","record"])],10,go)),64))],32),z("div",{id:"strategy-select",style:Qt(`transform: translateY(${S.value?0:"100%"})`)},[(de(!0),me(re,null,$t(Object.entries(ge(Pn)),I=>(de(),me("div",_o,[z("div",bo,Se(ge(lo)[I[0]]),1),(de(!0),me(re,null,$t(I[1],(T,W)=>(de(),me("div",{class:st(["option",{active:W===l[I[0]]}]),onClick:Re=>l[I[0]]=W},Se(T.name),11,yo))),256)),z("div",{class:st(["option",{active:l[I[0]]===-1}]),onClick:T=>l[I[0]]=-1}," 不渲染 ",10,vo)]))),256)),z("div",xo,[z("div",{class:"action",onClick:A[0]||(A[0]=I=>Y(!0))},"恢复默认"),z("div",{class:"action",onClick:A[1]||(A[1]=I=>Y(!1))},"关闭渲染")])],4)])]),z("div",{id:"detail",onScroll:H},[(de(!0),me(re,null,$t(Object.entries(ge(t)),([I,T])=>(de(),me("div",{class:"detail-card",ref_for:!0,ref:W=>ge(f)[I]=W},[Ii(Se(c(I))+" ",1),T.memo?(de(),me("pre",wo,"        "+Se(T.memo)+`
      `,1)):gs("",!0),T.coner?(de(),me("pre",So,"        "+Se(T.coner[1])+`
      `,1)):gs("",!0),z("pre",null,"        "+Se(T.detail)+`
      `,1)],512))),256))],32)],64))}};so(Co).mount("#app");
