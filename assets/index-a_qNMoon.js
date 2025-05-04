(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function It(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const W={},nn=[],Ae=()=>{},Ni=()=>!1,Xn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ft=e=>e.startsWith("onUpdate:"),ee=Object.assign,Ht=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Li=Object.prototype.hasOwnProperty,N=(e,n)=>Li.call(e,n),D=Array.isArray,tn=e=>Zn(e)==="[object Map]",Is=e=>Zn(e)==="[object Set]",I=e=>typeof e=="function",k=e=>typeof e=="string",Ue=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Fs=e=>(G(e)||I(e))&&I(e.then)&&I(e.catch),Hs=Object.prototype.toString,Zn=e=>Hs.call(e),Ui=e=>Zn(e).slice(8,-1),$s=e=>Zn(e)==="[object Object]",$t=e=>k(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_n=It(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qn=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Bi=/-(\w)/g,Le=Qn(e=>e.replace(Bi,(n,t)=>t?t.toUpperCase():"")),Vi=/\B([A-Z])/g,Ze=Qn(e=>e.replace(Vi,"-$1").toLowerCase()),js=Qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ft=Qn(e=>e?`on${js(e)}`:""),Ne=(e,n)=>!Object.is(e,n),at=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Ns=(e,n,t,s=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:s,value:t})},Ki=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let is;const et=()=>is||(is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nt(e){if(D(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],i=k(s)?Gi(s):nt(s);if(i)for(const l in i)n[l]=i[l]}return n}else if(k(e)||G(e))return e}const Wi=/;(?![^(]*\))/g,qi=/:([^]+)/,Yi=/\/\*[^]*?\*\//g;function Gi(e){const n={};return e.replace(Yi,"").split(Wi).forEach(t=>{if(t){const s=t.split(qi);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function sn(e){let n="";if(k(e))n=e;else if(D(e))for(let t=0;t<e.length;t++){const s=sn(e[t]);s&&(n+=s+" ")}else if(G(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Ji="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zi=It(Ji);function Ls(e){return!!e||e===""}const Us=e=>!!(e&&e.__v_isRef===!0),X=e=>k(e)?e:e==null?"":D(e)||G(e)&&(e.toString===Hs||!I(e.toString))?Us(e)?X(e.value):JSON.stringify(e,Bs,2):String(e),Bs=(e,n)=>Us(n)?Bs(e,n.value):tn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,i],l)=>(t[ut(s,l)+" =>"]=i,t),{})}:Is(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>ut(t))}:Ue(n)?ut(n):G(n)&&!D(n)&&!$s(n)?String(n):n,ut=(e,n="")=>{var t;return Ue(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ge;class ki{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ge,!n&&ge&&(this.index=(ge.scopes||(ge.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=ge;try{return ge=this,n()}finally{ge=t}}}on(){ge=this}off(){ge=this.parent}stop(n){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Xi(){return ge}let K;const dt=new WeakSet;class Vs{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ge&&ge.active&&ge.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,dt.has(this)&&(dt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ws(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ls(this),qs(this);const n=K,t=ve;K=this,ve=!0;try{return this.fn()}finally{Ys(this),K=n,ve=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Lt(n);this.deps=this.depsTail=void 0,ls(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?dt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vt(this)&&this.run()}get dirty(){return vt(this)}}let Ks=0,bn,yn;function Ws(e,n=!1){if(e.flags|=8,n){e.next=yn,yn=e;return}e.next=bn,bn=e}function jt(){Ks++}function Nt(){if(--Ks>0)return;if(yn){let n=yn;for(yn=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;bn;){let n=bn;for(bn=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(s){e||(e=s)}n=t}}if(e)throw e}function qs(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Ys(e){let n,t=e.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),Lt(s),Zi(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=n,e.depsTail=t}function vt(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Gs(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Gs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Cn))return;e.globalVersion=Cn;const n=e.dep;if(e.flags|=2,n.version>0&&!e.isSSR&&e.deps&&!vt(e)){e.flags&=-3;return}const t=K,s=ve;K=e,ve=!0;try{qs(e);const i=e.fn(e._value);(n.version===0||Ne(i,e._value))&&(e._value=i,n.version++)}catch(i){throw n.version++,i}finally{K=t,ve=s,Ys(e),e.flags&=-3}}function Lt(e,n=!1){const{dep:t,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),t.subs===e&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let l=t.computed.deps;l;l=l.nextDep)Lt(l,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Zi(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let ve=!0;const Js=[];function Be(){Js.push(ve),ve=!1}function Ve(){const e=Js.pop();ve=e===void 0?!0:e}function ls(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=K;K=void 0;try{n()}finally{K=t}}}let Cn=0;class Qi{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ut{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!K||!ve||K===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==K)t=this.activeLink=new Qi(K,this),K.deps?(t.prevDep=K.depsTail,K.depsTail.nextDep=t,K.depsTail=t):K.deps=K.depsTail=t,zs(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=K.depsTail,t.nextDep=void 0,K.depsTail.nextDep=t,K.depsTail=t,K.deps===t&&(K.deps=s)}return t}trigger(n){this.version++,Cn++,this.notify(n)}notify(n){jt();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Nt()}}}function zs(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let s=n.deps;s;s=s.nextDep)zs(s)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const xt=new WeakMap,ze=Symbol(""),wt=Symbol(""),Tn=Symbol("");function te(e,n,t){if(ve&&K){let s=xt.get(e);s||xt.set(e,s=new Map);let i=s.get(t);i||(s.set(t,i=new Ut),i.map=s,i.key=t),i.track()}}function Ie(e,n,t,s,i,l){const r=xt.get(e);if(!r){Cn++;return}const o=f=>{f&&f.trigger()};if(jt(),n==="clear")r.forEach(o);else{const f=D(e),h=f&&$t(t);if(f&&t==="length"){const u=Number(s);r.forEach((p,C)=>{(C==="length"||C===Tn||!Ue(C)&&C>=u)&&o(p)})}else switch((t!==void 0||r.has(void 0))&&o(r.get(t)),h&&o(r.get(Tn)),n){case"add":f?h&&o(r.get("length")):(o(r.get(ze)),tn(e)&&o(r.get(wt)));break;case"delete":f||(o(r.get(ze)),tn(e)&&o(r.get(wt)));break;case"set":tn(e)&&o(r.get(ze));break}}Nt()}function Qe(e){const n=j(e);return n===e?n:(te(n,"iterate",Tn),_e(e)?n:n.map(se))}function tt(e){return te(e=j(e),"iterate",Tn),e}const e0={__proto__:null,[Symbol.iterator](){return ht(this,Symbol.iterator,se)},concat(...e){return Qe(this).concat(...e.map(n=>D(n)?Qe(n):n))},entries(){return ht(this,"entries",e=>(e[1]=se(e[1]),e))},every(e,n){return Me(this,"every",e,n,void 0,arguments)},filter(e,n){return Me(this,"filter",e,n,t=>t.map(se),arguments)},find(e,n){return Me(this,"find",e,n,se,arguments)},findIndex(e,n){return Me(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Me(this,"findLast",e,n,se,arguments)},findLastIndex(e,n){return Me(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Me(this,"forEach",e,n,void 0,arguments)},includes(...e){return pt(this,"includes",e)},indexOf(...e){return pt(this,"indexOf",e)},join(e){return Qe(this).join(e)},lastIndexOf(...e){return pt(this,"lastIndexOf",e)},map(e,n){return Me(this,"map",e,n,void 0,arguments)},pop(){return hn(this,"pop")},push(...e){return hn(this,"push",e)},reduce(e,...n){return rs(this,"reduce",e,n)},reduceRight(e,...n){return rs(this,"reduceRight",e,n)},shift(){return hn(this,"shift")},some(e,n){return Me(this,"some",e,n,void 0,arguments)},splice(...e){return hn(this,"splice",e)},toReversed(){return Qe(this).toReversed()},toSorted(e){return Qe(this).toSorted(e)},toSpliced(...e){return Qe(this).toSpliced(...e)},unshift(...e){return hn(this,"unshift",e)},values(){return ht(this,"values",se)}};function ht(e,n,t){const s=tt(e),i=s[n]();return s!==e&&!_e(e)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.value&&(l.value=t(l.value)),l}),i}const n0=Array.prototype;function Me(e,n,t,s,i,l){const r=tt(e),o=r!==e&&!_e(e),f=r[n];if(f!==n0[n]){const p=f.apply(e,l);return o?se(p):p}let h=t;r!==e&&(o?h=function(p,C){return t.call(this,se(p),C,e)}:t.length>2&&(h=function(p,C){return t.call(this,p,C,e)}));const u=f.call(r,h,s);return o&&i?i(u):u}function rs(e,n,t,s){const i=tt(e);let l=t;return i!==e&&(_e(e)?t.length>3&&(l=function(r,o,f){return t.call(this,r,o,f,e)}):l=function(r,o,f){return t.call(this,r,se(o),f,e)}),i[n](l,...s)}function pt(e,n,t){const s=j(e);te(s,"iterate",Tn);const i=s[n](...t);return(i===-1||i===!1)&&Kt(t[0])?(t[0]=j(t[0]),s[n](...t)):i}function hn(e,n,t=[]){Be(),jt();const s=j(e)[n].apply(e,t);return Nt(),Ve(),s}const t0=It("__proto__,__v_isRef,__isVue"),ks=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ue));function s0(e){Ue(e)||(e=String(e));const n=j(this);return te(n,"has",e),n.hasOwnProperty(e)}class Xs{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,s){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,l=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return l;if(t==="__v_raw")return s===(i?l?h0:ni:l?ei:Qs).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const r=D(n);if(!i){let f;if(r&&(f=e0[t]))return f;if(t==="hasOwnProperty")return s0}const o=Reflect.get(n,t,Q(n)?n:s);return(Ue(t)?ks.has(t):t0(t))||(i||te(n,"get",t),l)?o:Q(o)?r&&$t(t)?o:o.value:G(o)?i?ti(o):On(o):o}}class Zs extends Xs{constructor(n=!1){super(!1,n)}set(n,t,s,i){let l=n[t];if(!this._isShallow){const f=ke(l);if(!_e(s)&&!ke(s)&&(l=j(l),s=j(s)),!D(n)&&Q(l)&&!Q(s))return f?!1:(l.value=s,!0)}const r=D(n)&&$t(t)?Number(t)<n.length:N(n,t),o=Reflect.set(n,t,s,Q(n)?n:i);return n===j(i)&&(r?Ne(s,l)&&Ie(n,"set",t,s):Ie(n,"add",t,s)),o}deleteProperty(n,t){const s=N(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&s&&Ie(n,"delete",t,void 0),i}has(n,t){const s=Reflect.has(n,t);return(!Ue(t)||!ks.has(t))&&te(n,"has",t),s}ownKeys(n){return te(n,"iterate",D(n)?"length":ze),Reflect.ownKeys(n)}}class i0 extends Xs{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const l0=new Zs,r0=new i0,o0=new Zs(!0);const St=e=>e,jn=e=>Reflect.getPrototypeOf(e);function c0(e,n,t){return function(...s){const i=this.__v_raw,l=j(i),r=tn(l),o=e==="entries"||e===Symbol.iterator&&r,f=e==="keys"&&r,h=i[e](...s),u=t?St:n?Ct:se;return!n&&te(l,"iterate",f?wt:ze),{next(){const{value:p,done:C}=h.next();return C?{value:p,done:C}:{value:o?[u(p[0]),u(p[1])]:u(p),done:C}},[Symbol.iterator](){return this}}}}function Nn(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function f0(e,n){const t={get(i){const l=this.__v_raw,r=j(l),o=j(i);e||(Ne(i,o)&&te(r,"get",i),te(r,"get",o));const{has:f}=jn(r),h=n?St:e?Ct:se;if(f.call(r,i))return h(l.get(i));if(f.call(r,o))return h(l.get(o));l!==r&&l.get(i)},get size(){const i=this.__v_raw;return!e&&te(j(i),"iterate",ze),Reflect.get(i,"size",i)},has(i){const l=this.__v_raw,r=j(l),o=j(i);return e||(Ne(i,o)&&te(r,"has",i),te(r,"has",o)),i===o?l.has(i):l.has(i)||l.has(o)},forEach(i,l){const r=this,o=r.__v_raw,f=j(o),h=n?St:e?Ct:se;return!e&&te(f,"iterate",ze),o.forEach((u,p)=>i.call(l,h(u),h(p),r))}};return ee(t,e?{add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear")}:{add(i){!n&&!_e(i)&&!ke(i)&&(i=j(i));const l=j(this);return jn(l).has.call(l,i)||(l.add(i),Ie(l,"add",i,i)),this},set(i,l){!n&&!_e(l)&&!ke(l)&&(l=j(l));const r=j(this),{has:o,get:f}=jn(r);let h=o.call(r,i);h||(i=j(i),h=o.call(r,i));const u=f.call(r,i);return r.set(i,l),h?Ne(l,u)&&Ie(r,"set",i,l):Ie(r,"add",i,l),this},delete(i){const l=j(this),{has:r,get:o}=jn(l);let f=r.call(l,i);f||(i=j(i),f=r.call(l,i)),o&&o.call(l,i);const h=l.delete(i);return f&&Ie(l,"delete",i,void 0),h},clear(){const i=j(this),l=i.size!==0,r=i.clear();return l&&Ie(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=c0(i,e,n)}),t}function Bt(e,n){const t=f0(e,n);return(s,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(N(t,i)&&i in s?t:s,i,l)}const a0={get:Bt(!1,!1)},u0={get:Bt(!1,!0)},d0={get:Bt(!0,!1)};const Qs=new WeakMap,ei=new WeakMap,ni=new WeakMap,h0=new WeakMap;function p0(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function g0(e){return e.__v_skip||!Object.isExtensible(e)?0:p0(Ui(e))}function On(e){return ke(e)?e:Vt(e,!1,l0,a0,Qs)}function m0(e){return Vt(e,!1,o0,u0,ei)}function ti(e){return Vt(e,!0,r0,d0,ni)}function Vt(e,n,t,s,i){if(!G(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const l=i.get(e);if(l)return l;const r=g0(e);if(r===0)return e;const o=new Proxy(e,r===2?s:t);return i.set(e,o),o}function ln(e){return ke(e)?ln(e.__v_raw):!!(e&&e.__v_isReactive)}function ke(e){return!!(e&&e.__v_isReadonly)}function _e(e){return!!(e&&e.__v_isShallow)}function Kt(e){return e?!!e.__v_raw:!1}function j(e){const n=e&&e.__v_raw;return n?j(n):e}function _0(e){return!N(e,"__v_skip")&&Object.isExtensible(e)&&Ns(e,"__v_skip",!0),e}const se=e=>G(e)?On(e):e,Ct=e=>G(e)?ti(e):e;function Q(e){return e?e.__v_isRef===!0:!1}function os(e){return b0(e,!1)}function b0(e,n){return Q(e)?e:new y0(e,n)}class y0{constructor(n,t){this.dep=new Ut,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:j(n),this._value=t?n:se(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,s=this.__v_isShallow||_e(n)||ke(n);n=s?n:j(n),Ne(n,t)&&(this._rawValue=n,this._value=s?n:se(n),this.dep.trigger())}}function ye(e){return Q(e)?e.value:e}const v0={get:(e,n,t)=>n==="__v_raw"?e:ye(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const i=e[n];return Q(i)&&!Q(t)?(i.value=t,!0):Reflect.set(e,n,t,s)}};function si(e){return ln(e)?e:new Proxy(e,v0)}class x0{constructor(n,t,s){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Ut(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&K!==this)return Ws(this,!0),!0}get value(){const n=this.dep.track();return Gs(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function w0(e,n,t=!1){let s,i;return I(e)?s=e:(s=e.get,i=e.set),new x0(s,i,t)}const Ln={},qn=new WeakMap;let Je;function S0(e,n=!1,t=Je){if(t){let s=qn.get(t);s||qn.set(t,s=[]),s.push(e)}}function C0(e,n,t=W){const{immediate:s,deep:i,once:l,scheduler:r,augmentJob:o,call:f}=t,h=w=>i?w:_e(w)||i===!1||i===0?je(w,1):je(w);let u,p,C,T,F=!1,E=!1;if(Q(e)?(p=()=>e.value,F=_e(e)):ln(e)?(p=()=>h(e),F=!0):D(e)?(E=!0,F=e.some(w=>ln(w)||_e(w)),p=()=>e.map(w=>{if(Q(w))return w.value;if(ln(w))return h(w);if(I(w))return f?f(w,2):w()})):I(e)?n?p=f?()=>f(e,2):e:p=()=>{if(C){Be();try{C()}finally{Ve()}}const w=Je;Je=u;try{return f?f(e,3,[T]):e(T)}finally{Je=w}}:p=Ae,n&&i){const w=p,M=i===!0?1/0:i;p=()=>je(w(),M)}const z=Xi(),L=()=>{u.stop(),z&&z.active&&Ht(z.effects,u)};if(l&&n){const w=n;n=(...M)=>{w(...M),L()}}let q=E?new Array(e.length).fill(Ln):Ln;const P=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(n){const M=u.run();if(i||F||(E?M.some(($,Z)=>Ne($,q[Z])):Ne(M,q))){C&&C();const $=Je;Je=u;try{const Z=[M,q===Ln?void 0:E&&q[0]===Ln?[]:q,T];f?f(n,3,Z):n(...Z),q=M}finally{Je=$}}}else u.run()};return o&&o(P),u=new Vs(p),u.scheduler=r?()=>r(P,!1):P,T=w=>S0(w,!1,u),C=u.onStop=()=>{const w=qn.get(u);if(w){if(f)f(w,4);else for(const M of w)M();qn.delete(u)}},n?s?P(!0):q=u.run():r?r(P.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function je(e,n=1/0,t){if(n<=0||!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),n--,Q(e))je(e.value,n,t);else if(D(e))for(let s=0;s<e.length;s++)je(e[s],n,t);else if(Is(e)||tn(e))e.forEach(s=>{je(s,n,t)});else if($s(e)){for(const s in e)je(e[s],n,t);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&je(e[s],n,t)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pn(e,n,t,s){try{return s?e(...s):e()}catch(i){st(i,n,t)}}function Re(e,n,t,s){if(I(e)){const i=Pn(e,n,t,s);return i&&Fs(i)&&i.catch(l=>{st(l,n,t)}),i}if(D(e)){const i=[];for(let l=0;l<e.length;l++)i.push(Re(e[l],n,t,s));return i}}function st(e,n,t,s=!0){const i=n?n.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:r}=n&&n.appContext.config||W;if(n){let o=n.parent;const f=n.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,f,h)===!1)return}o=o.parent}if(l){Be(),Pn(l,null,10,[e,f,h]),Ve();return}}T0(e,t,i,s,r)}function T0(e,n,t,s=!0,i=!1){if(i)throw e;console.error(e)}const oe=[];let Te=-1;const rn=[];let He=null,en=0;const ii=Promise.resolve();let Yn=null;function O0(e){const n=Yn||ii;return e?n.then(this?e.bind(this):e):n}function E0(e){let n=Te+1,t=oe.length;for(;n<t;){const s=n+t>>>1,i=oe[s],l=En(i);l<e||l===e&&i.flags&2?n=s+1:t=s}return n}function Wt(e){if(!(e.flags&1)){const n=En(e),t=oe[oe.length-1];!t||!(e.flags&2)&&n>=En(t)?oe.push(e):oe.splice(E0(n),0,e),e.flags|=1,li()}}function li(){Yn||(Yn=ii.then(oi))}function A0(e){D(e)?rn.push(...e):He&&e.id===-1?He.splice(en+1,0,e):e.flags&1||(rn.push(e),e.flags|=1),li()}function cs(e,n,t=Te+1){for(;t<oe.length;t++){const s=oe[t];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;oe.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ri(e){if(rn.length){const n=[...new Set(rn)].sort((t,s)=>En(t)-En(s));if(rn.length=0,He){He.push(...n);return}for(He=n,en=0;en<He.length;en++){const t=He[en];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}He=null,en=0}}const En=e=>e.id==null?e.flags&2?-1:1/0:e.id;function oi(e){try{for(Te=0;Te<oe.length;Te++){const n=oe[Te];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Pn(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Te<oe.length;Te++){const n=oe[Te];n&&(n.flags&=-2)}Te=-1,oe.length=0,ri(),Yn=null,(oe.length||rn.length)&&oi()}}let Ee=null,ci=null;function Gn(e){const n=Ee;return Ee=e,ci=e&&e.type.__scopeId||null,n}function R0(e,n=Ee,t){if(!n||e._n)return e;const s=(...i)=>{s._d&&ms(-1);const l=Gn(n);let r;try{r=e(...i)}finally{Gn(l),s._d&&ms(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Ye(e,n,t,s){const i=e.dirs,l=n&&n.dirs;for(let r=0;r<i.length;r++){const o=i[r];l&&(o.oldValue=l[r].value);let f=o.dir[s];f&&(Be(),Re(f,t,8,[e.el,o,e,n]),Ve())}}const P0=Symbol("_vte"),M0=e=>e.__isTeleport;function qt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,qt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function fi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Jn(e,n,t,s,i=!1){if(D(e)){e.forEach((F,E)=>Jn(F,n&&(D(n)?n[E]:n),t,s,i));return}if(vn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Jn(e,n,t,s.component.subTree);return}const l=s.shapeFlag&4?kt(s.component):s.el,r=i?null:l,{i:o,r:f}=e,h=n&&n.r,u=o.refs===W?o.refs={}:o.refs,p=o.setupState,C=j(p),T=p===W?()=>!1:F=>N(C,F);if(h!=null&&h!==f&&(k(h)?(u[h]=null,T(h)&&(p[h]=null)):Q(h)&&(h.value=null)),I(f))Pn(f,o,12,[r,u]);else{const F=k(f),E=Q(f);if(F||E){const z=()=>{if(e.f){const L=F?T(f)?p[f]:u[f]:f.value;i?D(L)&&Ht(L,l):D(L)?L.includes(l)||L.push(l):F?(u[f]=[l],T(f)&&(p[f]=u[f])):(f.value=[l],e.k&&(u[e.k]=f.value))}else F?(u[f]=r,T(f)&&(p[f]=r)):E&&(f.value=r,e.k&&(u[e.k]=r))};r?(z.id=-1,pe(z,t)):z()}}}et().requestIdleCallback;et().cancelIdleCallback;const vn=e=>!!e.type.__asyncLoader,ai=e=>e.type.__isKeepAlive;function D0(e,n){ui(e,"a",n)}function I0(e,n){ui(e,"da",n)}function ui(e,n,t=ce){const s=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(it(n,s,t),t){let i=t.parent;for(;i&&i.parent;)ai(i.parent.vnode)&&F0(s,n,t,i),i=i.parent}}function F0(e,n,t,s){const i=it(n,e,s,!0);di(()=>{Ht(s[n],i)},t)}function it(e,n,t=ce,s=!1){if(t){const i=t[e]||(t[e]=[]),l=n.__weh||(n.__weh=(...r)=>{Be();const o=Mn(t),f=Re(n,t,e,r);return o(),Ve(),f});return s?i.unshift(l):i.push(l),l}}const Fe=e=>(n,t=ce)=>{(!Rn||e==="sp")&&it(e,(...s)=>n(...s),t)},H0=Fe("bm"),Yt=Fe("m"),$0=Fe("bu"),j0=Fe("u"),N0=Fe("bum"),di=Fe("um"),L0=Fe("sp"),U0=Fe("rtg"),B0=Fe("rtc");function V0(e,n=ce){it("ec",e,n)}const K0=Symbol.for("v-ndc");function Un(e,n,t,s){let i;const l=t,r=D(e);if(r||k(e)){const o=r&&ln(e);let f=!1;o&&(f=!_e(e),e=tt(e)),i=new Array(e.length);for(let h=0,u=e.length;h<u;h++)i[h]=n(f?se(e[h]):e[h],h,void 0,l)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=n(o+1,o,void 0,l)}else if(G(e))if(e[Symbol.iterator])i=Array.from(e,(o,f)=>n(o,f,void 0,l));else{const o=Object.keys(e);i=new Array(o.length);for(let f=0,h=o.length;f<h;f++){const u=o[f];i[f]=n(e[u],u,f,l)}}else i=[];return i}const Tt=e=>e?Ii(e)?kt(e):Tt(e.parent):null,xn=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tt(e.parent),$root:e=>Tt(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Gt(e),$forceUpdate:e=>e.f||(e.f=()=>{Wt(e.update)}),$nextTick:e=>e.n||(e.n=O0.bind(e.proxy)),$watch:e=>ul.bind(e)}),gt=(e,n)=>e!==W&&!e.__isScriptSetup&&N(e,n),W0={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:l,accessCache:r,type:o,appContext:f}=e;let h;if(n[0]!=="$"){const T=r[n];if(T!==void 0)switch(T){case 1:return s[n];case 2:return i[n];case 4:return t[n];case 3:return l[n]}else{if(gt(s,n))return r[n]=1,s[n];if(i!==W&&N(i,n))return r[n]=2,i[n];if((h=e.propsOptions[0])&&N(h,n))return r[n]=3,l[n];if(t!==W&&N(t,n))return r[n]=4,t[n];Ot&&(r[n]=0)}}const u=xn[n];let p,C;if(u)return n==="$attrs"&&te(e.attrs,"get",""),u(e);if((p=o.__cssModules)&&(p=p[n]))return p;if(t!==W&&N(t,n))return r[n]=4,t[n];if(C=f.config.globalProperties,N(C,n))return C[n]},set({_:e},n,t){const{data:s,setupState:i,ctx:l}=e;return gt(i,n)?(i[n]=t,!0):s!==W&&N(s,n)?(s[n]=t,!0):N(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(l[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:i,propsOptions:l}},r){let o;return!!t[r]||e!==W&&N(e,r)||gt(n,r)||(o=l[0])&&N(o,r)||N(s,r)||N(xn,r)||N(i.config.globalProperties,r)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:N(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function fs(e){return D(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Ot=!0;function q0(e){const n=Gt(e),t=e.proxy,s=e.ctx;Ot=!1,n.beforeCreate&&as(n.beforeCreate,e,"bc");const{data:i,computed:l,methods:r,watch:o,provide:f,inject:h,created:u,beforeMount:p,mounted:C,beforeUpdate:T,updated:F,activated:E,deactivated:z,beforeDestroy:L,beforeUnmount:q,destroyed:P,unmounted:w,render:M,renderTracked:$,renderTriggered:Z,errorCaptured:Pe,serverPrefetch:Dn,expose:Ke,inheritAttrs:fn,components:In,directives:Fn,filters:ot}=n;if(h&&Y0(h,s,null),r)for(const Y in r){const B=r[Y];I(B)&&(s[Y]=B.bind(t))}if(i){const Y=i.call(t,t);G(Y)&&(e.data=On(Y))}if(Ot=!0,l)for(const Y in l){const B=l[Y],We=I(B)?B.bind(t,t):I(B.get)?B.get.bind(t,t):Ae,Hn=!I(B)&&I(B.set)?B.set.bind(t):Ae,qe=Il({get:We,set:Hn});Object.defineProperty(s,Y,{enumerable:!0,configurable:!0,get:()=>qe.value,set:we=>qe.value=we})}if(o)for(const Y in o)hi(o[Y],s,t,Y);if(f){const Y=I(f)?f.call(t):f;Reflect.ownKeys(Y).forEach(B=>{Z0(B,Y[B])})}u&&as(u,e,"c");function ie(Y,B){D(B)?B.forEach(We=>Y(We.bind(t))):B&&Y(B.bind(t))}if(ie(H0,p),ie(Yt,C),ie($0,T),ie(j0,F),ie(D0,E),ie(I0,z),ie(V0,Pe),ie(B0,$),ie(U0,Z),ie(N0,q),ie(di,w),ie(L0,Dn),D(Ke))if(Ke.length){const Y=e.exposed||(e.exposed={});Ke.forEach(B=>{Object.defineProperty(Y,B,{get:()=>t[B],set:We=>t[B]=We})})}else e.exposed||(e.exposed={});M&&e.render===Ae&&(e.render=M),fn!=null&&(e.inheritAttrs=fn),In&&(e.components=In),Fn&&(e.directives=Fn),Dn&&fi(e)}function Y0(e,n,t=Ae){D(e)&&(e=Et(e));for(const s in e){const i=e[s];let l;G(i)?"default"in i?l=Bn(i.from||s,i.default,!0):l=Bn(i.from||s):l=Bn(i),Q(l)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):n[s]=l}}function as(e,n,t){Re(D(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function hi(e,n,t,s){let i=s.includes(".")?Ei(t,s):()=>t[s];if(k(e)){const l=n[e];I(l)&&wn(i,l)}else if(I(e))wn(i,e.bind(t));else if(G(e))if(D(e))e.forEach(l=>hi(l,n,t,s));else{const l=I(e.handler)?e.handler.bind(t):n[e.handler];I(l)&&wn(i,l,e)}}function Gt(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,o=l.get(n);let f;return o?f=o:!i.length&&!t&&!s?f=n:(f={},i.length&&i.forEach(h=>zn(f,h,r,!0)),zn(f,n,r)),G(n)&&l.set(n,f),f}function zn(e,n,t,s=!1){const{mixins:i,extends:l}=n;l&&zn(e,l,t,!0),i&&i.forEach(r=>zn(e,r,t,!0));for(const r in n)if(!(s&&r==="expose")){const o=G0[r]||t&&t[r];e[r]=o?o(e[r],n[r]):n[r]}return e}const G0={data:us,props:ds,emits:ds,methods:mn,computed:mn,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:mn,directives:mn,watch:z0,provide:us,inject:J0};function us(e,n){return n?e?function(){return ee(I(e)?e.call(this,this):e,I(n)?n.call(this,this):n)}:n:e}function J0(e,n){return mn(Et(e),Et(n))}function Et(e){if(D(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function le(e,n){return e?[...new Set([].concat(e,n))]:n}function mn(e,n){return e?ee(Object.create(null),e,n):n}function ds(e,n){return e?D(e)&&D(n)?[...new Set([...e,...n])]:ee(Object.create(null),fs(e),fs(n??{})):n}function z0(e,n){if(!e)return n;if(!n)return e;const t=ee(Object.create(null),e);for(const s in n)t[s]=le(e[s],n[s]);return t}function pi(){return{app:null,config:{isNativeTag:Ni,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let k0=0;function X0(e,n){return function(s,i=null){I(s)||(s=ee({},s)),i!=null&&!G(i)&&(i=null);const l=pi(),r=new WeakSet,o=[];let f=!1;const h=l.app={_uid:k0++,_component:s,_props:i,_container:null,_context:l,_instance:null,version:Fl,get config(){return l.config},set config(u){},use(u,...p){return r.has(u)||(u&&I(u.install)?(r.add(u),u.install(h,...p)):I(u)&&(r.add(u),u(h,...p))),h},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),h},component(u,p){return p?(l.components[u]=p,h):l.components[u]},directive(u,p){return p?(l.directives[u]=p,h):l.directives[u]},mount(u,p,C){if(!f){const T=h._ceVNode||xe(s,i);return T.appContext=l,C===!0?C="svg":C===!1&&(C=void 0),p&&n?n(T,u):e(T,u,C),f=!0,h._container=u,u.__vue_app__=h,kt(T.component)}},onUnmount(u){o.push(u)},unmount(){f&&(Re(o,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(u,p){return l.provides[u]=p,h},runWithContext(u){const p=on;on=h;try{return u()}finally{on=p}}};return h}}let on=null;function Z0(e,n){if(ce){let t=ce.provides;const s=ce.parent&&ce.parent.provides;s===t&&(t=ce.provides=Object.create(s)),t[e]=n}}function Bn(e,n,t=!1){const s=ce||Ee;if(s||on){const i=on?on._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&I(n)?n.call(s&&s.proxy):n}}const gi={},mi=()=>Object.create(gi),_i=e=>Object.getPrototypeOf(e)===gi;function Q0(e,n,t,s=!1){const i={},l=mi();e.propsDefaults=Object.create(null),bi(e,n,i,l);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);t?e.props=s?i:m0(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function el(e,n,t,s){const{props:i,attrs:l,vnode:{patchFlag:r}}=e,o=j(i),[f]=e.propsOptions;let h=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let C=u[p];if(lt(e.emitsOptions,C))continue;const T=n[C];if(f)if(N(l,C))T!==l[C]&&(l[C]=T,h=!0);else{const F=Le(C);i[F]=At(f,o,F,T,e,!1)}else T!==l[C]&&(l[C]=T,h=!0)}}}else{bi(e,n,i,l)&&(h=!0);let u;for(const p in o)(!n||!N(n,p)&&((u=Ze(p))===p||!N(n,u)))&&(f?t&&(t[p]!==void 0||t[u]!==void 0)&&(i[p]=At(f,o,p,void 0,e,!0)):delete i[p]);if(l!==o)for(const p in l)(!n||!N(n,p))&&(delete l[p],h=!0)}h&&Ie(e.attrs,"set","")}function bi(e,n,t,s){const[i,l]=e.propsOptions;let r=!1,o;if(n)for(let f in n){if(_n(f))continue;const h=n[f];let u;i&&N(i,u=Le(f))?!l||!l.includes(u)?t[u]=h:(o||(o={}))[u]=h:lt(e.emitsOptions,f)||(!(f in s)||h!==s[f])&&(s[f]=h,r=!0)}if(l){const f=j(t),h=o||W;for(let u=0;u<l.length;u++){const p=l[u];t[p]=At(i,f,p,h[p],e,!N(h,p))}}return r}function At(e,n,t,s,i,l){const r=e[t];if(r!=null){const o=N(r,"default");if(o&&s===void 0){const f=r.default;if(r.type!==Function&&!r.skipFactory&&I(f)){const{propsDefaults:h}=i;if(t in h)s=h[t];else{const u=Mn(i);s=h[t]=f.call(null,n),u()}}else s=f;i.ce&&i.ce._setProp(t,s)}r[0]&&(l&&!o?s=!1:r[1]&&(s===""||s===Ze(t))&&(s=!0))}return s}const nl=new WeakMap;function yi(e,n,t=!1){const s=t?nl:n.propsCache,i=s.get(e);if(i)return i;const l=e.props,r={},o=[];let f=!1;if(!I(e)){const u=p=>{f=!0;const[C,T]=yi(p,n,!0);ee(r,C),T&&o.push(...T)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!l&&!f)return G(e)&&s.set(e,nn),nn;if(D(l))for(let u=0;u<l.length;u++){const p=Le(l[u]);hs(p)&&(r[p]=W)}else if(l)for(const u in l){const p=Le(u);if(hs(p)){const C=l[u],T=r[p]=D(C)||I(C)?{type:C}:ee({},C),F=T.type;let E=!1,z=!0;if(D(F))for(let L=0;L<F.length;++L){const q=F[L],P=I(q)&&q.name;if(P==="Boolean"){E=!0;break}else P==="String"&&(z=!1)}else E=I(F)&&F.name==="Boolean";T[0]=E,T[1]=z,(E||N(T,"default"))&&o.push(p)}}const h=[r,o];return G(e)&&s.set(e,h),h}function hs(e){return e[0]!=="$"&&!_n(e)}const vi=e=>e[0]==="_"||e==="$stable",Jt=e=>D(e)?e.map(Oe):[Oe(e)],tl=(e,n,t)=>{if(n._n)return n;const s=R0((...i)=>Jt(n(...i)),t);return s._c=!1,s},xi=(e,n,t)=>{const s=e._ctx;for(const i in e){if(vi(i))continue;const l=e[i];if(I(l))n[i]=tl(i,l,s);else if(l!=null){const r=Jt(l);n[i]=()=>r}}},wi=(e,n)=>{const t=Jt(n);e.slots.default=()=>t},Si=(e,n,t)=>{for(const s in n)(t||s!=="_")&&(e[s]=n[s])},sl=(e,n,t)=>{const s=e.slots=mi();if(e.vnode.shapeFlag&32){const i=n._;i?(Si(s,n,t),t&&Ns(s,"_",i,!0)):xi(n,s)}else n&&wi(e,n)},il=(e,n,t)=>{const{vnode:s,slots:i}=e;let l=!0,r=W;if(s.shapeFlag&32){const o=n._;o?t&&o===1?l=!1:Si(i,n,t):(l=!n.$stable,xi(n,i)),r=n}else n&&(wi(e,n),r={default:1});if(l)for(const o in i)!vi(o)&&r[o]==null&&delete i[o]},pe=bl;function ll(e){return rl(e)}function rl(e,n){const t=et();t.__VUE__=!0;const{insert:s,remove:i,patchProp:l,createElement:r,createText:o,createComment:f,setText:h,setElementText:u,parentNode:p,nextSibling:C,setScopeId:T=Ae,insertStaticContent:F}=e,E=(c,a,d,_=null,g=null,m=null,x=void 0,v=null,y=!!a.dynamicChildren)=>{if(c===a)return;c&&!pn(c,a)&&(_=$n(c),we(c,g,m,!0),c=null),a.patchFlag===-2&&(y=!1,a.dynamicChildren=null);const{type:b,ref:A,shapeFlag:S}=a;switch(b){case rt:z(c,a,d,_);break;case Xe:L(c,a,d,_);break;case Vn:c==null&&q(a,d,_,x);break;case ae:In(c,a,d,_,g,m,x,v,y);break;default:S&1?M(c,a,d,_,g,m,x,v,y):S&6?Fn(c,a,d,_,g,m,x,v,y):(S&64||S&128)&&b.process(c,a,d,_,g,m,x,v,y,un)}A!=null&&g&&Jn(A,c&&c.ref,m,a||c,!a)},z=(c,a,d,_)=>{if(c==null)s(a.el=o(a.children),d,_);else{const g=a.el=c.el;a.children!==c.children&&h(g,a.children)}},L=(c,a,d,_)=>{c==null?s(a.el=f(a.children||""),d,_):a.el=c.el},q=(c,a,d,_)=>{[c.el,c.anchor]=F(c.children,a,d,_,c.el,c.anchor)},P=({el:c,anchor:a},d,_)=>{let g;for(;c&&c!==a;)g=C(c),s(c,d,_),c=g;s(a,d,_)},w=({el:c,anchor:a})=>{let d;for(;c&&c!==a;)d=C(c),i(c),c=d;i(a)},M=(c,a,d,_,g,m,x,v,y)=>{a.type==="svg"?x="svg":a.type==="math"&&(x="mathml"),c==null?$(a,d,_,g,m,x,v,y):Dn(c,a,g,m,x,v,y)},$=(c,a,d,_,g,m,x,v)=>{let y,b;const{props:A,shapeFlag:S,transition:O,dirs:R}=c;if(y=c.el=r(c.type,m,A&&A.is,A),S&8?u(y,c.children):S&16&&Pe(c.children,y,null,_,g,mt(c,m),x,v),R&&Ye(c,null,_,"created"),Z(y,c,c.scopeId,x,_),A){for(const V in A)V!=="value"&&!_n(V)&&l(y,V,null,A[V],m,_);"value"in A&&l(y,"value",null,A.value,m),(b=A.onVnodeBeforeMount)&&Ce(b,_,c)}R&&Ye(c,null,_,"beforeMount");const H=ol(g,O);H&&O.beforeEnter(y),s(y,a,d),((b=A&&A.onVnodeMounted)||H||R)&&pe(()=>{b&&Ce(b,_,c),H&&O.enter(y),R&&Ye(c,null,_,"mounted")},g)},Z=(c,a,d,_,g)=>{if(d&&T(c,d),_)for(let m=0;m<_.length;m++)T(c,_[m]);if(g){let m=g.subTree;if(a===m||Ri(m.type)&&(m.ssContent===a||m.ssFallback===a)){const x=g.vnode;Z(c,x,x.scopeId,x.slotScopeIds,g.parent)}}},Pe=(c,a,d,_,g,m,x,v,y=0)=>{for(let b=y;b<c.length;b++){const A=c[b]=v?$e(c[b]):Oe(c[b]);E(null,A,a,d,_,g,m,x,v)}},Dn=(c,a,d,_,g,m,x)=>{const v=a.el=c.el;let{patchFlag:y,dynamicChildren:b,dirs:A}=a;y|=c.patchFlag&16;const S=c.props||W,O=a.props||W;let R;if(d&&Ge(d,!1),(R=O.onVnodeBeforeUpdate)&&Ce(R,d,a,c),A&&Ye(a,c,d,"beforeUpdate"),d&&Ge(d,!0),(S.innerHTML&&O.innerHTML==null||S.textContent&&O.textContent==null)&&u(v,""),b?Ke(c.dynamicChildren,b,v,d,_,mt(a,g),m):x||B(c,a,v,null,d,_,mt(a,g),m,!1),y>0){if(y&16)fn(v,S,O,d,g);else if(y&2&&S.class!==O.class&&l(v,"class",null,O.class,g),y&4&&l(v,"style",S.style,O.style,g),y&8){const H=a.dynamicProps;for(let V=0;V<H.length;V++){const U=H[V],ue=S[U],ne=O[U];(ne!==ue||U==="value")&&l(v,U,ue,ne,g,d)}}y&1&&c.children!==a.children&&u(v,a.children)}else!x&&b==null&&fn(v,S,O,d,g);((R=O.onVnodeUpdated)||A)&&pe(()=>{R&&Ce(R,d,a,c),A&&Ye(a,c,d,"updated")},_)},Ke=(c,a,d,_,g,m,x)=>{for(let v=0;v<a.length;v++){const y=c[v],b=a[v],A=y.el&&(y.type===ae||!pn(y,b)||y.shapeFlag&70)?p(y.el):d;E(y,b,A,null,_,g,m,x,!0)}},fn=(c,a,d,_,g)=>{if(a!==d){if(a!==W)for(const m in a)!_n(m)&&!(m in d)&&l(c,m,a[m],null,g,_);for(const m in d){if(_n(m))continue;const x=d[m],v=a[m];x!==v&&m!=="value"&&l(c,m,v,x,g,_)}"value"in d&&l(c,"value",a.value,d.value,g)}},In=(c,a,d,_,g,m,x,v,y)=>{const b=a.el=c?c.el:o(""),A=a.anchor=c?c.anchor:o("");let{patchFlag:S,dynamicChildren:O,slotScopeIds:R}=a;R&&(v=v?v.concat(R):R),c==null?(s(b,d,_),s(A,d,_),Pe(a.children||[],d,A,g,m,x,v,y)):S>0&&S&64&&O&&c.dynamicChildren?(Ke(c.dynamicChildren,O,d,g,m,x,v),(a.key!=null||g&&a===g.subTree)&&Ci(c,a,!0)):B(c,a,d,A,g,m,x,v,y)},Fn=(c,a,d,_,g,m,x,v,y)=>{a.slotScopeIds=v,c==null?a.shapeFlag&512?g.ctx.activate(a,d,_,x,y):ot(a,d,_,g,m,x,y):Xt(c,a,y)},ot=(c,a,d,_,g,m,x)=>{const v=c.component=El(c,_,g);if(ai(c)&&(v.ctx.renderer=un),Al(v,!1,x),v.asyncDep){if(g&&g.registerDep(v,ie,x),!c.el){const y=v.subTree=xe(Xe);L(null,y,a,d)}}else ie(v,c,a,d,g,m,x)},Xt=(c,a,d)=>{const _=a.component=c.component;if(ml(c,a,d))if(_.asyncDep&&!_.asyncResolved){Y(_,a,d);return}else _.next=a,_.update();else a.el=c.el,_.vnode=a},ie=(c,a,d,_,g,m,x)=>{const v=()=>{if(c.isMounted){let{next:S,bu:O,u:R,parent:H,vnode:V}=c;{const de=Ti(c);if(de){S&&(S.el=V.el,Y(c,S,x)),de.asyncDep.then(()=>{c.isUnmounted||v()});return}}let U=S,ue;Ge(c,!1),S?(S.el=V.el,Y(c,S,x)):S=V,O&&at(O),(ue=S.props&&S.props.onVnodeBeforeUpdate)&&Ce(ue,H,S,V),Ge(c,!0);const ne=_t(c),be=c.subTree;c.subTree=ne,E(be,ne,p(be.el),$n(be),c,g,m),S.el=ne.el,U===null&&_l(c,ne.el),R&&pe(R,g),(ue=S.props&&S.props.onVnodeUpdated)&&pe(()=>Ce(ue,H,S,V),g)}else{let S;const{el:O,props:R}=a,{bm:H,m:V,parent:U,root:ue,type:ne}=c,be=vn(a);if(Ge(c,!1),H&&at(H),!be&&(S=R&&R.onVnodeBeforeMount)&&Ce(S,U,a),Ge(c,!0),O&&ns){const de=()=>{c.subTree=_t(c),ns(O,c.subTree,c,g,null)};be&&ne.__asyncHydrate?ne.__asyncHydrate(O,c,de):de()}else{ue.ce&&ue.ce._injectChildStyle(ne);const de=c.subTree=_t(c);E(null,de,d,_,c,g,m),a.el=de.el}if(V&&pe(V,g),!be&&(S=R&&R.onVnodeMounted)){const de=a;pe(()=>Ce(S,U,de),g)}(a.shapeFlag&256||U&&vn(U.vnode)&&U.vnode.shapeFlag&256)&&c.a&&pe(c.a,g),c.isMounted=!0,a=d=_=null}};c.scope.on();const y=c.effect=new Vs(v);c.scope.off();const b=c.update=y.run.bind(y),A=c.job=y.runIfDirty.bind(y);A.i=c,A.id=c.uid,y.scheduler=()=>Wt(A),Ge(c,!0),b()},Y=(c,a,d)=>{a.component=c;const _=c.vnode.props;c.vnode=a,c.next=null,el(c,a.props,_,d),il(c,a.children,d),Be(),cs(c),Ve()},B=(c,a,d,_,g,m,x,v,y=!1)=>{const b=c&&c.children,A=c?c.shapeFlag:0,S=a.children,{patchFlag:O,shapeFlag:R}=a;if(O>0){if(O&128){Hn(b,S,d,_,g,m,x,v,y);return}else if(O&256){We(b,S,d,_,g,m,x,v,y);return}}R&8?(A&16&&an(b,g,m),S!==b&&u(d,S)):A&16?R&16?Hn(b,S,d,_,g,m,x,v,y):an(b,g,m,!0):(A&8&&u(d,""),R&16&&Pe(S,d,_,g,m,x,v,y))},We=(c,a,d,_,g,m,x,v,y)=>{c=c||nn,a=a||nn;const b=c.length,A=a.length,S=Math.min(b,A);let O;for(O=0;O<S;O++){const R=a[O]=y?$e(a[O]):Oe(a[O]);E(c[O],R,d,null,g,m,x,v,y)}b>A?an(c,g,m,!0,!1,S):Pe(a,d,_,g,m,x,v,y,S)},Hn=(c,a,d,_,g,m,x,v,y)=>{let b=0;const A=a.length;let S=c.length-1,O=A-1;for(;b<=S&&b<=O;){const R=c[b],H=a[b]=y?$e(a[b]):Oe(a[b]);if(pn(R,H))E(R,H,d,null,g,m,x,v,y);else break;b++}for(;b<=S&&b<=O;){const R=c[S],H=a[O]=y?$e(a[O]):Oe(a[O]);if(pn(R,H))E(R,H,d,null,g,m,x,v,y);else break;S--,O--}if(b>S){if(b<=O){const R=O+1,H=R<A?a[R].el:_;for(;b<=O;)E(null,a[b]=y?$e(a[b]):Oe(a[b]),d,H,g,m,x,v,y),b++}}else if(b>O)for(;b<=S;)we(c[b],g,m,!0),b++;else{const R=b,H=b,V=new Map;for(b=H;b<=O;b++){const he=a[b]=y?$e(a[b]):Oe(a[b]);he.key!=null&&V.set(he.key,b)}let U,ue=0;const ne=O-H+1;let be=!1,de=0;const dn=new Array(ne);for(b=0;b<ne;b++)dn[b]=0;for(b=R;b<=S;b++){const he=c[b];if(ue>=ne){we(he,g,m,!0);continue}let Se;if(he.key!=null)Se=V.get(he.key);else for(U=H;U<=O;U++)if(dn[U-H]===0&&pn(he,a[U])){Se=U;break}Se===void 0?we(he,g,m,!0):(dn[Se-H]=b+1,Se>=de?de=Se:be=!0,E(he,a[Se],d,null,g,m,x,v,y),ue++)}const ts=be?cl(dn):nn;for(U=ts.length-1,b=ne-1;b>=0;b--){const he=H+b,Se=a[he],ss=he+1<A?a[he+1].el:_;dn[b]===0?E(null,Se,d,ss,g,m,x,v,y):be&&(U<0||b!==ts[U]?qe(Se,d,ss,2):U--)}}},qe=(c,a,d,_,g=null)=>{const{el:m,type:x,transition:v,children:y,shapeFlag:b}=c;if(b&6){qe(c.component.subTree,a,d,_);return}if(b&128){c.suspense.move(a,d,_);return}if(b&64){x.move(c,a,d,un);return}if(x===ae){s(m,a,d);for(let S=0;S<y.length;S++)qe(y[S],a,d,_);s(c.anchor,a,d);return}if(x===Vn){P(c,a,d);return}if(_!==2&&b&1&&v)if(_===0)v.beforeEnter(m),s(m,a,d),pe(()=>v.enter(m),g);else{const{leave:S,delayLeave:O,afterLeave:R}=v,H=()=>s(m,a,d),V=()=>{S(m,()=>{H(),R&&R()})};O?O(m,H,V):V()}else s(m,a,d)},we=(c,a,d,_=!1,g=!1)=>{const{type:m,props:x,ref:v,children:y,dynamicChildren:b,shapeFlag:A,patchFlag:S,dirs:O,cacheIndex:R}=c;if(S===-2&&(g=!1),v!=null&&Jn(v,null,d,c,!0),R!=null&&(a.renderCache[R]=void 0),A&256){a.ctx.deactivate(c);return}const H=A&1&&O,V=!vn(c);let U;if(V&&(U=x&&x.onVnodeBeforeUnmount)&&Ce(U,a,c),A&6)ji(c.component,d,_);else{if(A&128){c.suspense.unmount(d,_);return}H&&Ye(c,null,a,"beforeUnmount"),A&64?c.type.remove(c,a,d,un,_):b&&!b.hasOnce&&(m!==ae||S>0&&S&64)?an(b,a,d,!1,!0):(m===ae&&S&384||!g&&A&16)&&an(y,a,d),_&&Zt(c)}(V&&(U=x&&x.onVnodeUnmounted)||H)&&pe(()=>{U&&Ce(U,a,c),H&&Ye(c,null,a,"unmounted")},d)},Zt=c=>{const{type:a,el:d,anchor:_,transition:g}=c;if(a===ae){$i(d,_);return}if(a===Vn){w(c);return}const m=()=>{i(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:x,delayLeave:v}=g,y=()=>x(d,m);v?v(c.el,m,y):y()}else m()},$i=(c,a)=>{let d;for(;c!==a;)d=C(c),i(c),c=d;i(a)},ji=(c,a,d)=>{const{bum:_,scope:g,job:m,subTree:x,um:v,m:y,a:b}=c;ps(y),ps(b),_&&at(_),g.stop(),m&&(m.flags|=8,we(x,c,a,d)),v&&pe(v,a),pe(()=>{c.isUnmounted=!0},a),a&&a.pendingBranch&&!a.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===a.pendingId&&(a.deps--,a.deps===0&&a.resolve())},an=(c,a,d,_=!1,g=!1,m=0)=>{for(let x=m;x<c.length;x++)we(c[x],a,d,_,g)},$n=c=>{if(c.shapeFlag&6)return $n(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const a=C(c.anchor||c.el),d=a&&a[P0];return d?C(d):a};let ct=!1;const Qt=(c,a,d)=>{c==null?a._vnode&&we(a._vnode,null,null,!0):E(a._vnode||null,c,a,null,null,null,d),a._vnode=c,ct||(ct=!0,cs(),ri(),ct=!1)},un={p:E,um:we,m:qe,r:Zt,mt:ot,mc:Pe,pc:B,pbc:Ke,n:$n,o:e};let es,ns;return{render:Qt,hydrate:es,createApp:X0(Qt,es)}}function mt({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Ge({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function ol(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Ci(e,n,t=!1){const s=e.children,i=n.children;if(D(s)&&D(i))for(let l=0;l<s.length;l++){const r=s[l];let o=i[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[l]=$e(i[l]),o.el=r.el),!t&&o.patchFlag!==-2&&Ci(r,o)),o.type===rt&&(o.el=r.el)}}function cl(e){const n=e.slice(),t=[0];let s,i,l,r,o;const f=e.length;for(s=0;s<f;s++){const h=e[s];if(h!==0){if(i=t[t.length-1],e[i]<h){n[s]=i,t.push(s);continue}for(l=0,r=t.length-1;l<r;)o=l+r>>1,e[t[o]]<h?l=o+1:r=o;h<e[t[l]]&&(l>0&&(n[s]=t[l-1]),t[l]=s)}}for(l=t.length,r=t[l-1];l-- >0;)t[l]=r,r=n[r];return t}function Ti(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Ti(n)}function ps(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const fl=Symbol.for("v-scx"),al=()=>Bn(fl);function wn(e,n,t){return Oi(e,n,t)}function Oi(e,n,t=W){const{immediate:s,deep:i,flush:l,once:r}=t,o=ee({},t),f=n&&s||!n&&l!=="post";let h;if(Rn){if(l==="sync"){const T=al();h=T.__watcherHandles||(T.__watcherHandles=[])}else if(!f){const T=()=>{};return T.stop=Ae,T.resume=Ae,T.pause=Ae,T}}const u=ce;o.call=(T,F,E)=>Re(T,u,F,E);let p=!1;l==="post"?o.scheduler=T=>{pe(T,u&&u.suspense)}:l!=="sync"&&(p=!0,o.scheduler=(T,F)=>{F?T():Wt(T)}),o.augmentJob=T=>{n&&(T.flags|=4),p&&(T.flags|=2,u&&(T.id=u.uid,T.i=u))};const C=C0(e,n,o);return Rn&&(h?h.push(C):f&&C()),C}function ul(e,n,t){const s=this.proxy,i=k(e)?e.includes(".")?Ei(s,e):()=>s[e]:e.bind(s,s);let l;I(n)?l=n:(l=n.handler,t=n);const r=Mn(this),o=Oi(i,l.bind(s),t);return r(),o}function Ei(e,n){const t=n.split(".");return()=>{let s=e;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const dl=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${Le(n)}Modifiers`]||e[`${Ze(n)}Modifiers`];function hl(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||W;let i=t;const l=n.startsWith("update:"),r=l&&dl(s,n.slice(7));r&&(r.trim&&(i=t.map(u=>k(u)?u.trim():u)),r.number&&(i=t.map(Ki)));let o,f=s[o=ft(n)]||s[o=ft(Le(n))];!f&&l&&(f=s[o=ft(Ze(n))]),f&&Re(f,e,6,i);const h=s[o+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Re(h,e,6,i)}}function Ai(e,n,t=!1){const s=n.emitsCache,i=s.get(e);if(i!==void 0)return i;const l=e.emits;let r={},o=!1;if(!I(e)){const f=h=>{const u=Ai(h,n,!0);u&&(o=!0,ee(r,u))};!t&&n.mixins.length&&n.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}return!l&&!o?(G(e)&&s.set(e,null),null):(D(l)?l.forEach(f=>r[f]=null):ee(r,l),G(e)&&s.set(e,r),r)}function lt(e,n){return!e||!Xn(n)?!1:(n=n.slice(2).replace(/Once$/,""),N(e,n[0].toLowerCase()+n.slice(1))||N(e,Ze(n))||N(e,n))}function _t(e){const{type:n,vnode:t,proxy:s,withProxy:i,propsOptions:[l],slots:r,attrs:o,emit:f,render:h,renderCache:u,props:p,data:C,setupState:T,ctx:F,inheritAttrs:E}=e,z=Gn(e);let L,q;try{if(t.shapeFlag&4){const w=i||s,M=w;L=Oe(h.call(M,w,u,p,T,C,F)),q=o}else{const w=n;L=Oe(w.length>1?w(p,{attrs:o,slots:r,emit:f}):w(p,null)),q=n.props?o:pl(o)}}catch(w){Sn.length=0,st(w,e,1),L=xe(Xe)}let P=L;if(q&&E!==!1){const w=Object.keys(q),{shapeFlag:M}=P;w.length&&M&7&&(l&&w.some(Ft)&&(q=gl(q,l)),P=cn(P,q,!1,!0))}return t.dirs&&(P=cn(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition&&qt(P,t.transition),L=P,Gn(z),L}const pl=e=>{let n;for(const t in e)(t==="class"||t==="style"||Xn(t))&&((n||(n={}))[t]=e[t]);return n},gl=(e,n)=>{const t={};for(const s in e)(!Ft(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function ml(e,n,t){const{props:s,children:i,component:l}=e,{props:r,children:o,patchFlag:f}=n,h=l.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&f>=0){if(f&1024)return!0;if(f&16)return s?gs(s,r,h):!!r;if(f&8){const u=n.dynamicProps;for(let p=0;p<u.length;p++){const C=u[p];if(r[C]!==s[C]&&!lt(h,C))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:s===r?!1:s?r?gs(s,r,h):!0:!!r;return!1}function gs(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const l=s[i];if(n[l]!==e[l]&&!lt(t,l))return!0}return!1}function _l({vnode:e,parent:n},t){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=n.vnode).el=t,n=n.parent;else break}}const Ri=e=>e.__isSuspense;function bl(e,n){n&&n.pendingBranch?D(e)?n.effects.push(...e):n.effects.push(e):A0(e)}const ae=Symbol.for("v-fgt"),rt=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),Vn=Symbol.for("v-stc"),Sn=[];let me=null;function re(e=!1){Sn.push(me=e?null:[])}function yl(){Sn.pop(),me=Sn[Sn.length-1]||null}let An=1;function ms(e,n=!1){An+=e,e<0&&me&&n&&(me.hasOnce=!0)}function Pi(e){return e.dynamicChildren=An>0?me||nn:null,yl(),An>0&&me&&me.push(e),e}function fe(e,n,t,s,i,l){return Pi(J(e,n,t,s,i,l,!0))}function vl(e,n,t,s,i){return Pi(xe(e,n,t,s,i,!0))}function Mi(e){return e?e.__v_isVNode===!0:!1}function pn(e,n){return e.type===n.type&&e.key===n.key}const Di=({key:e})=>e??null,Kn=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?k(e)||Q(e)||I(e)?{i:Ee,r:e,k:n,f:!!t}:e:null);function J(e,n=null,t=null,s=0,i=null,l=e===ae?0:1,r=!1,o=!1){const f={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Di(n),ref:n&&Kn(n),scopeId:ci,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ee};return o?(zt(f,t),l&128&&e.normalize(f)):t&&(f.shapeFlag|=k(t)?8:16),An>0&&!r&&me&&(f.patchFlag>0||l&6)&&f.patchFlag!==32&&me.push(f),f}const xe=xl;function xl(e,n=null,t=null,s=0,i=null,l=!1){if((!e||e===K0)&&(e=Xe),Mi(e)){const o=cn(e,n,!0);return t&&zt(o,t),An>0&&!l&&me&&(o.shapeFlag&6?me[me.indexOf(e)]=o:me.push(o)),o.patchFlag=-2,o}if(Dl(e)&&(e=e.__vccOpts),n){n=wl(n);let{class:o,style:f}=n;o&&!k(o)&&(n.class=sn(o)),G(f)&&(Kt(f)&&!D(f)&&(f=ee({},f)),n.style=nt(f))}const r=k(e)?1:Ri(e)?128:M0(e)?64:G(e)?4:I(e)?2:0;return J(e,n,t,s,i,r,l,!0)}function wl(e){return e?Kt(e)||_i(e)?ee({},e):e:null}function cn(e,n,t=!1,s=!1){const{props:i,ref:l,patchFlag:r,children:o,transition:f}=e,h=n?Cl(i||{},n):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Di(h),ref:n&&n.ref?t&&l?D(l)?l.concat(Kn(n)):[l,Kn(n)]:Kn(n):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==ae?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:f,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cn(e.ssContent),ssFallback:e.ssFallback&&cn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return f&&s&&qt(u,f.clone(u)),u}function Rt(e=" ",n=0){return xe(rt,null,e,n)}function Sl(e,n){const t=xe(Vn,null,e);return t.staticCount=n,t}function gn(e="",n=!1){return n?(re(),vl(Xe,null,e)):xe(Xe,null,e)}function Oe(e){return e==null||typeof e=="boolean"?xe(Xe):D(e)?xe(ae,null,e.slice()):Mi(e)?$e(e):xe(rt,null,String(e))}function $e(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:cn(e)}function zt(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(D(n))t=16;else if(typeof n=="object")if(s&65){const i=n.default;i&&(i._c&&(i._d=!1),zt(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!_i(n)?n._ctx=Ee:i===3&&Ee&&(Ee.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else I(n)?(n={default:n,_ctx:Ee},t=32):(n=String(n),s&64?(t=16,n=[Rt(n)]):t=8);e.children=n,e.shapeFlag|=t}function Cl(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const i in s)if(i==="class")n.class!==s.class&&(n.class=sn([n.class,s.class]));else if(i==="style")n.style=nt([n.style,s.style]);else if(Xn(i)){const l=n[i],r=s[i];r&&l!==r&&!(D(l)&&l.includes(r))&&(n[i]=l?[].concat(l,r):r)}else i!==""&&(n[i]=s[i])}return n}function Ce(e,n,t,s=null){Re(e,n,7,[t,s])}const Tl=pi();let Ol=0;function El(e,n,t){const s=e.type,i=(n?n.appContext:e.appContext)||Tl,l={uid:Ol++,vnode:e,type:s,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ki(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yi(s,i),emitsOptions:Ai(s,i),emit:null,emitted:null,propsDefaults:W,inheritAttrs:s.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=n?n.root:l,l.emit=hl.bind(null,l),e.ce&&e.ce(l),l}let ce=null,kn,Pt;{const e=et(),n=(t,s)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(s),l=>{i.length>1?i.forEach(r=>r(l)):i[0](l)}};kn=n("__VUE_INSTANCE_SETTERS__",t=>ce=t),Pt=n("__VUE_SSR_SETTERS__",t=>Rn=t)}const Mn=e=>{const n=ce;return kn(e),e.scope.on(),()=>{e.scope.off(),kn(n)}},_s=()=>{ce&&ce.scope.off(),kn(null)};function Ii(e){return e.vnode.shapeFlag&4}let Rn=!1;function Al(e,n=!1,t=!1){n&&Pt(n);const{props:s,children:i}=e.vnode,l=Ii(e);Q0(e,s,l,n),sl(e,i,t);const r=l?Rl(e,n):void 0;return n&&Pt(!1),r}function Rl(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,W0);const{setup:s}=t;if(s){Be();const i=e.setupContext=s.length>1?Ml(e):null,l=Mn(e),r=Pn(s,e,0,[e.props,i]),o=Fs(r);if(Ve(),l(),(o||e.sp)&&!vn(e)&&fi(e),o){if(r.then(_s,_s),n)return r.then(f=>{bs(e,f,n)}).catch(f=>{st(f,e,0)});e.asyncDep=r}else bs(e,r,n)}else Fi(e,n)}function bs(e,n,t){I(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:G(n)&&(e.setupState=si(n)),Fi(e,t)}let ys;function Fi(e,n,t){const s=e.type;if(!e.render){if(!n&&ys&&!s.render){const i=s.template||Gt(e).template;if(i){const{isCustomElement:l,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:f}=s,h=ee(ee({isCustomElement:l,delimiters:o},r),f);s.render=ys(i,h)}}e.render=s.render||Ae}{const i=Mn(e);Be();try{q0(e)}finally{Ve(),i()}}}const Pl={get(e,n){return te(e,"get",""),e[n]}};function Ml(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Pl),slots:e.slots,emit:e.emit,expose:n}}function kt(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(si(_0(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in xn)return xn[t](e)},has(n,t){return t in n||t in xn}})):e.proxy}function Dl(e){return I(e)&&"__vccOpts"in e}const Il=(e,n)=>w0(e,n,Rn),Fl="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;const vs=typeof window<"u"&&window.trustedTypes;if(vs)try{Mt=vs.createPolicy("vue",{createHTML:e=>e})}catch{}const Hi=Mt?e=>Mt.createHTML(e):e=>e,Hl="http://www.w3.org/2000/svg",$l="http://www.w3.org/1998/Math/MathML",De=typeof document<"u"?document:null,xs=De&&De.createElement("template"),jl={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const i=n==="svg"?De.createElementNS(Hl,e):n==="mathml"?De.createElementNS($l,e):t?De.createElement(e,{is:t}):De.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>De.createTextNode(e),createComment:e=>De.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>De.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,s,i,l){const r=t?t.previousSibling:n.lastChild;if(i&&(i===l||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===l||!(i=i.nextSibling)););else{xs.innerHTML=Hi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const o=xs.content;if(s==="svg"||s==="mathml"){const f=o.firstChild;for(;f.firstChild;)o.appendChild(f.firstChild);o.removeChild(f)}n.insertBefore(o,t)}return[r?r.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Nl=Symbol("_vtc");function Ll(e,n,t){const s=e[Nl];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const ws=Symbol("_vod"),Ul=Symbol("_vsh"),Bl=Symbol(""),Vl=/(^|;)\s*display\s*:/;function Kl(e,n,t){const s=e.style,i=k(t);let l=!1;if(t&&!i){if(n)if(k(n))for(const r of n.split(";")){const o=r.slice(0,r.indexOf(":")).trim();t[o]==null&&Wn(s,o,"")}else for(const r in n)t[r]==null&&Wn(s,r,"");for(const r in t)r==="display"&&(l=!0),Wn(s,r,t[r])}else if(i){if(n!==t){const r=s[Bl];r&&(t+=";"+r),s.cssText=t,l=Vl.test(t)}}else n&&e.removeAttribute("style");ws in e&&(e[ws]=l?s.display:"",e[Ul]&&(s.display="none"))}const Ss=/\s*!important$/;function Wn(e,n,t){if(D(t))t.forEach(s=>Wn(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=Wl(e,n);Ss.test(t)?e.setProperty(Ze(s),t.replace(Ss,""),"important"):e[s]=t}}const Cs=["Webkit","Moz","ms"],bt={};function Wl(e,n){const t=bt[n];if(t)return t;let s=Le(n);if(s!=="filter"&&s in e)return bt[n]=s;s=js(s);for(let i=0;i<Cs.length;i++){const l=Cs[i]+s;if(l in e)return bt[n]=l}return n}const Ts="http://www.w3.org/1999/xlink";function Os(e,n,t,s,i,l=zi(n)){s&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Ts,n.slice(6,n.length)):e.setAttributeNS(Ts,n,t):t==null||l&&!Ls(t)?e.removeAttribute(n):e.setAttribute(n,l?"":Ue(t)?String(t):t)}function Es(e,n,t,s,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Hi(t):t);return}const l=e.tagName;if(n==="value"&&l!=="PROGRESS"&&!l.includes("-")){const o=l==="OPTION"?e.getAttribute("value")||"":e.value,f=t==null?e.type==="checkbox"?"on":"":String(t);(o!==f||!("_value"in e))&&(e.value=f),t==null&&e.removeAttribute(n),e._value=t;return}let r=!1;if(t===""||t==null){const o=typeof e[n];o==="boolean"?t=Ls(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{e[n]=t}catch{}r&&e.removeAttribute(i||n)}function ql(e,n,t,s){e.addEventListener(n,t,s)}function Yl(e,n,t,s){e.removeEventListener(n,t,s)}const As=Symbol("_vei");function Gl(e,n,t,s,i=null){const l=e[As]||(e[As]={}),r=l[n];if(s&&r)r.value=s;else{const[o,f]=Jl(n);if(s){const h=l[n]=Xl(s,i);ql(e,o,h,f)}else r&&(Yl(e,o,r,f),l[n]=void 0)}}const Rs=/(?:Once|Passive|Capture)$/;function Jl(e){let n;if(Rs.test(e)){n={};let s;for(;s=e.match(Rs);)e=e.slice(0,e.length-s[0].length),n[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ze(e.slice(2)),n]}let yt=0;const zl=Promise.resolve(),kl=()=>yt||(zl.then(()=>yt=0),yt=Date.now());function Xl(e,n){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Re(Zl(s,t.value),n,5,[s])};return t.value=e,t.attached=kl(),t}function Zl(e,n){if(D(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>i=>!i._stopped&&s&&s(i))}else return n}const Ps=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ql=(e,n,t,s,i,l)=>{const r=i==="svg";n==="class"?Ll(e,s,r):n==="style"?Kl(e,t,s):Xn(n)?Ft(n)||Gl(e,n,t,s,l):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):er(e,n,s,r))?(Es(e,n,s),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Os(e,n,s,r,l,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!k(s))?Es(e,Le(n),s,l,n):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),Os(e,n,s,r))};function er(e,n,t,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in e&&Ps(n)&&I(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ps(n)&&k(t)?!1:n in e}const nr=ee({patchProp:Ql},jl);let Ms;function tr(){return Ms||(Ms=ll(nr))}const sr=(...e)=>{const n=tr().createApp(...e),{mount:t}=n;return n.mount=s=>{const i=lr(s);if(!i)return;const l=n._component;!I(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=t(i,!1,ir(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},n};function ir(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function lr(e){return k(e)?document.querySelector(e):e}const Dt={s1:[{name:"红色背景",strategy:(e,n,t,s,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#c14949",e.fillRect(0,0,n,t)}},{name:"红色长条",strategy:(e,n,t,s,i)=>{e.fillStyle="red",e.globalCompositeOperation="destination-over",s.forEach(l=>{e.fillRect(l/24*n,0,n/24,t)})}}],s2:[{name:"紫色背景",id:"s21",strategy:(e,n,t,s,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#d58585",e.fillRect(0,0,n,t)}}],s3:[{name:"蓝色进度条",id:"s31",strategy:(e,n,t,s,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#8fb3f7",e.fillRect(n/3,t-t/10*s,n/3,t/10*s)}}],s4:[{name:"粉红进度条",id:"s41",strategy:(e,n,t,s,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#ffd6e7",e.fillRect(n/3*2,t-t/10*s,n/3,t/10*s)}}],hh:[{name:"绿色进度条",id:"hh1",strategy:(e,n,t,s,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#88ff8a",e.fillRect(0,t-t/10*s,n/3,t/10*s)}}],coner:[{name:"左上角大字",id:"coner1",strategy:(e,n,t,s,i)=>{e.font="50px gray",e.fillStyle="#2c2c2c",e.textBaseline="top",e.fillText(s[0],10,10)}}],memo:[{name:"左下角展示",id:"memo1",strategy:(e,n,t,s,i)=>{e.font="20px gray",e.fillStyle="black",e.textBaseline="bottom",e.fillText(s,10,t-10)}}],detail:[{name:"粉红badge",id:"detail1",strategy:(e,n,t,s,i)=>{}}]},rr={s1:"大发",s2:"大发不抽",s3:"小发",s4:"轻微发",hh:"恍惚",coner:"事件",memo:"备注",detail:"详情"},Ds={s1:0,s2:0,s3:0,s4:0,hh:0,coner:0,memo:0,detail:0},or={class:"record"},cr={__name:"Record",props:{record:Object,strategy:Object},setup(e){const n=e;let t,s,i,l;return Yt(()=>{s=t.getContext("2d"),i=t.width,l=t.height,wn(n,()=>{if(n.record&&n.strategy&&s){s.clearRect(0,0,i,l);for(let r in n.record)n.strategy[r]!==-1&&Dt[r][n.strategy[r]].strategy&&Dt[r][n.strategy[r]].strategy(s,i,l,n.record[r],n.strategy)}},{deep:!0,immediate:!0})}),(r,o)=>(re(),fe("div",or,[J("canvas",{ref:f=>Q(t)?t.value=f:t=f,width:"240",height:"148.32"},null,512)]))}},fr={"2024-02-04":{s1:[7],detail:`2月4号 7点（自己烧饭之类的，不开心？）尿了？
`},"2024-03-01":{s1:[1],detail:`（2/29 陪去浦东提车？）
1点02分 感觉听声音不舒服
1点03发作，右手抽，其他僵硬
1点04多减轻`},"2024-03-08":{s1:[24],detail:`3月8号  （袜子在床上有点不开心？开车多了冷？）
23：39到23：40，之前1天有半边麻。23：44 有一点意识`},"2024-03-23":{s1:[1],detail:`3月23号  （前面好像是3天有发麻）（连续2天工作忙，啃指甲）
00：32 前兆是声音，先躺到我这边，然后自己坐到自己床位，抱着开始发作，慢慢放下来，发作比较轻
00：33 停止抽搐，感觉一分钟不到
00：36 手去掀自己裙子，大概到37彻底发作完毕
00：48 我手机亮看，被吵醒，问，不知道发作，也不知道发作什么`},"2024-04-12":{s1:[1],detail:`4月12号  前面2天（10号）办公室头麻
和小哈在外面玩，听到声音，就进房间，先看人，再看手机，截图0点39分，40分停止
身体向左转，可能是想向门外求救，嘴里有血， 白天是去了一妇婴看乳腺，并且小哈前一天哮喘晚上闹，没睡好。`},"2024-04-17":{s3:1,detail:`4月17号 2：17 前兆，没发作
但当天（16号）有至少3次“熟悉的感觉，加想大便加胃有指定的味道”`},"2024-04-22":{s1:[2],detail:`4月22号 1：57 被叫声叫醒 拿的手机
1：58 抽搐停止
20，21号是周末，据说19晚上2点半才睡，并且一直有麻
当天睡前觉得耳朵堵住，但不一定是前兆，可能是发炎
然后睡前有聊天很久，但不确定最后是几点睡下的`},"2024-04-30":{s1:[1],detail:`4月30号 
1：08 我问是不是不舒服 ，说手机照难受，08分末开始发，幅度小
09分开始幅度大，右手伸直，关节有声音，身体反曲
10分停止
带小哈开车40多上楼的，估计1点不到点躺下的
1：26 看他的时候 互相吓了一跳 问你干嘛
1：57 正常对话，知道情况了，问有没有发`},"2024-05-11":{s1:[4,23],detail:`5月11号

04：14 到04：15 
前面几天一直白天晚上都有前兆
晚上说话说到3点以后，晚上带小哈出去哄睡了
这次是左手伸直，右手弯曲
尿了

22：48 到 22：49
发前自己是知道 这次是会发出来的
应该是睡着了，我和小哈读书吵醒了， 睡着没多久

进房间前，可能因为爷爷给小哈麻花，二次刷牙，而压抑了？

后来带小哈出去，全程两人沉默，好像小哈也在想这事`},"2024-05-18":{s1:[0],detail:`5月18日 
0：12 瑾爸电话来。 11点40分准备睡觉的`},"2024-05-22":{s3:1,detail:"5月22日，（不是发作）20点05分，靠近听了音响，左半身非常麻"},"2024-05-24":{s3:1,detail:"（5，24）早上的麻，和眨眼，觉得有眼泪，今天开始定义为小发作"},"2024-05-26":{s3:1,detail:"（5,26）下午16点小发作"},"2024-05-29":{s3:1,detail:"（5，29）23点59小发作（眨左眼）"},"2024-05-30":{s3:1,detail:"（5，30）中午小发作，13点跟我说的，自己描述24小时麻了6次，有声音，眼泪不明显，觉得左边有人（体感）"},"2024-06-01":{s1:[8],detail:`6月1日，早上7点40。爬到我身上发的，感觉一分钟不到，打完7.40
前一晚因为我8点睡了，导致他和小哈没人管晚睡，我还不开心了
这2个原因，还是不发作时间久了，一共3个可能的原因
7.54自己起来盖被子
8: 07 醒了，不知道自己发过，没有不舒服`},"2024-06-07":{s4:1,coner:["医院","第一次去虹桥, 开了奥卡西平, 但因为曼月乐和副作用没吃"],detail:"（6.7）去罗南，晚上9不到，新增蚊子叫，早上虹桥看病了"},"2024-06-09":{s1:[23],detail:"6.9 23点16微信跟我说睡觉，第二天早上说发了"},"2024-06-21":{s1:[23],detail:"6.22 也是在罗南 应该是21号11点多"},"2024-06-24":{coner:["中医","第一次去苏州"]},"2024-06-29":{s1:[14],detail:"6.29 14点05左右，时间短，在罗南"},"2024-07-09":{coner:["中医","第二次去苏州"]},"2024-07-10":{s1:[4],detail:`7.10 发作，发完3点54  我觉得时间不短，还是1分钟不到

前面一天白天去苏州看病，5点半起床，睡得也不早，人累，下午16点45陪我练车驾照里三人摔倒了，晚上睡前有‘做噩梦’，自己晚上有明确说，“今天累，拉窗帘，多睡会”
想到还有个细节，早上因为“3块钱买了苏州火车票而说他了”

4点10 起床尿尿，走路不稳，都是向右倒，推开奶奶房间门，尿尿比较深，但没泡沫，这也是前一晚他在担心的事，洗手的时候用牙膏 ——补充：晚上聊过后，本人表示没有印象

（4点48思考补充：1，突然想到我也做噩梦了，说胃一寒一热需要怎么治疗啥的，还考虑去看赵医生。2，哈妈尿尿不多的，自己也聊过是担心尿床所以让自己起床）
（5点14被‘我拿充电线碰到巧虎掉下来’惊醒，问我有没有发作，并且记得昨晚鬼压床，还说本以为中药吃了会好，意识挺清楚的）`},"2024-07-14":{s1:[15],detail:"7.14 发作，下午14.52微信跟我说的，尿尿，他爸妈说5分钟，瞎说"},"2024-07-22":{memo:"摔跤, 破伤风?"},"2024-07-25":{hh:5,detail:`（7月25 23点50 恍惚小发作）白天发作多次，失忆一点，正好跟我聊天，忘记自己摔跤请假
～（8.02晚补充： 可能25晚的小发作发到海马了）
12.04 恍惚 持续到12.09还在
12.22 恍惚
13.43 恍惚
23.50 大恍惚`},"2024-07-26":{detail:`7月26 高度怀疑大发作，这次失忆特别厉害，（8.2补充：讨论认为，这次以后，对听到的，语速快的，一下子理解不到）（8.2晚补充： 当天不记得小哈是什么时候去罗南的，其实是前一天，在罗南也是逻辑推的，不记得床头奶茶的来历，想起来后觉得“不真实”）忘记小哈去苏州，上次发作后是记得的。早 我7点出门考科目二，9点到家，他说830醒来不知道身边状况，但是9点应该恢复差不多了，没麻，可能也是恍惚小发作
（8.2晚补充：
16号我中午去一起吃饭看天鹅
17号验车➕被警察抓
19号晚上游乐园
20号玩具奥莱➕万科天空➕蟠龙天地
21号长风大悦城
以上全部清空记忆
22号摔跤忘记地点，23号忘记晚上急诊拿药，我认为也是清空，只是逻辑编造补充的
）`},"2024-07-27":{memo:"半夜有点记录",detail:`（7月27晚2点43，我醒了（不知道具体原因），去看他， 拿手机照下巴，他醒着，问他有事吗，他说没事，问他是不是叫我（我不知道自己怎么醒的），他说他本来想问我他们怎么碰我肚子，我问谁，他说不知道，我问什么时候，也不清楚，然后问有事吗，说没事，就不问了，我出来尿尿并记录了这点字。回到房间2点48，同样手法手机照下巴，睡着了）
（我没睡，看手机，3点46摸我，我问怎么了，他说以为我是女孩子，又说以为外公的脚，看起来人很正常，不一定有问题）`},"2024-07-29":{s3:1,detail:`？小？7月29 1点17分结束，开始记录，入睡不久，说热有点醒了，然后觉得声音响，自己说意识清醒，并左边麻，但看脸部假笑了，害怕，不知道是不是破伤风，打算看一下监控，并百度。（因为百度到假笑）
看了监控，左半边脸假笑，查了半天资料，破伤风概率不大，并且死亡率不高。现在是3点32，她醒了多次，但看起来问题不大`},"2024-07-31":{s1:[1],s3:3,s4:1,hh:4,detail:`7月31日 0点29分44秒发作 30分44秒，抽搐60秒，结束，36呼吸正常
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
（23点47 睡眠中小发作醒）`},"2024-08-01":{coner:["中医","第三次去苏州"],s3:1,hh:3,detail:`8月1日了 （第三次苏州）
（第二天，去一妇婴路上730聊，昨晚洗头吹头的事觉得不真实）
12点27 即视感恍惚，在去虹桥火车路上，游乐园门口
16点10在苏州配药的药店，在回忆上半天的事
在回火车站的地铁入口，感觉梦里有过现在的场景
22点12在家说恍惚，中度
23点07 快睡着 发麻加声音`},"2024-08-02":{s3:2,detail:`～8月2日周五，去一妇婴，今天好像没事，第一天吃药，晚上拉肚子了，可能是药馊臭了，没倒出来放到下午
（8.2睡觉，睡前，半夜，早上歌一次 麻`},"2024-08-03":{s4:13,detail:`（8月3日，下午6点，油天地，轻微手机铃声幻听，下午有手热，这几天比较多，10分钟后补充：第三次幻听了，
21点39：出去过河马奥莱，洗澡，聊天，又听到了一共10次，还是有铃声）`},"2024-08-04":{s3:1,detail:"（8月4日，2点14分，中午小睡麻）"},"2024-08-05":{s3:1,detail:"（8月5日，0点19 眼睛型小麻，55分后入睡）"},"2024-08-06":{s3:3,detail:"（8月6日， 前2后1 3次小麻）"},"2024-08-07":{s3:4,detail:"（8月7日，晚上1点小麻，一共4次，感觉时间长，慢慢移动）"},"2024-08-08":{s4:1,s3:2,detail:"（8月8日，早上有点短暂耳塞，晚上睡前和半夜麻2次， 今天医院放环导致中药第一顿12点吃的）"},"2024-08-09":{s3:2,detail:"（8月9日，睡前，半夜，早上都一次，比以前长）"},"2024-08-10":{s4:3,detail:"（8月10日， 白天开始有纯熟悉感，非恍惚，多次，但不严重，不难受，晚上没麻，这2天小哈不在）"},"2024-08-11":{s3:2,detail:"（8月11，18点15，吃饭的时候，左手发麻，晚上23点58，睡了半小时，麻加声音加有人，和早上一样，手到脖子，到耳朵，到眼睛，再结束）"},"2024-08-13":{s1:[23],detail:`8月13日，（22点44准备睡觉）22点53分11秒到22点54分11秒，抽搐发作60秒，57分不到些恢复呼吸 ，眼睛里有泪，可怜，可能是觉得最近情况挺好的

从51开始，主动告诉我没事，过了一分钟，然后说还是麻了，自己在捏左手，大概几秒，就发起来了
声音比上次小，感觉振幅比上次小

23点06坐起来，不清楚情况，虚弱
23点45分起来尿尿，脑子很清楚，记得睡前的事（22点）
他说觉得昨天累，睡得晚，小哈是23点45摩托睡着回家的，他后来有点害怕，所以睡得晚，估计也睡得没那么好
前一天的表现是：翻来翻去，说一个动作人就酸`},"2024-08-14":{hh:6,coner:["奥1","奥卡西平晚上开始吃150"],detail:`～接发作的第二天早上（8月14日，上班的）想呕吐，说是从胃来的不舒服，中午说又又做梦恍惚的感觉了，但是不像上次那么重
下午搞不清上下午
下午4点，又有做梦加恶心感觉，还感觉上现在是上午

～从罗南回家路上恍惚，大概是9点左右
～同一天晚上 （8月14日22点56分）快入睡，小哈哄睡中，有点声音，触发 砸吧嘴的海马小发作，具体没仔细问，想让他快点睡`},"2024-08-15":{hh:7,detail:`自己说上班开错园区的入口了，因为在犹豫停车场的位置
10点32 描述不出的不舒服，追问后还是熟悉感做梦感
11点42 轻度想吐
下午2点55，3点50，4点07，都是恍惚，“梦里有过”，或者“昨天有过”的感觉
下午5点，背酸
下午7点10左右，想吐想拉屎恍惚
晚22点16 恍惚想吐`},"2024-08-16":{hh:1,s3:1,s4:3,detail:`14点55小恍惚
14点13背疼加重，呼吸就疼，靠背也疼
22点左右，晚上手有点热，在罗南哄小哈睡，好像前一天也有过
23点47，耳朵顶顶顶，不明显
0点06，耳鸣，短暂，通过吸气解决的
半夜小麻，感觉有人，左半边，没到眼睛，恢复速度比以前快，翻身触发的麻`},"2024-08-17":{coner:["奥2","奥卡西平晚上开始吃300"],s3:1,detail:"23点53麻 ，大概是23点30不说话睡的，比昨晚轻，感觉有人，没到眼睛，都比昨天轻"},"2024-08-18":{hh:3,s4:3,s3:1,detail:`11.52 熟悉感，没恍惚和胃气上升
18.13 熟悉感，同上
23点左右哄小哈的时候手有点涨，说不太清
03分麻，感觉有人，没到眼睛，时间变长了，23点45带小哈出去才入睡的`},"2024-08-19":{s3:1,s4:1,detail:`早上8.09 熟悉感，没恍惚，再陪小哈吃早饭
16点43 头撞了一下电脑
23点22 小麻，感觉有人，没到眼睛，时间和上次差不多，程度差不多，先有人再觉得麻`},"2024-08-20":{coner:["奥3","奥卡西平晚上开始吃450"],hh:1,s4:1,detail:`16.43耳朵有描述不了的节奏，不厉害，说之前一直有
0.09分熟悉感，和小哈吵架吵醒了，0.09开始准备睡觉`},"2024-08-21":{s3:1,s4:11,hh:1,detail:`7.30小麻
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
22.12 同上`},"2024-08-22":{s3:1,s4:7,detail:`10.00 头晕
10.39 手烫
14.50 手臂烫
15.20 手涨，后背冒汗
15.32 幻听
16.12 工作不顺利就出汗
21.40 先半边，好点了，又感觉有人并加重，到头皮，没到眼睛，耳朵有点异常，非幻听，21.20开始睡的
半夜不严重的小麻，比较快，还没开始就结束，在等开始的时候结束的`},"2024-08-23":{s4:8,hh:1,detail:`10.30 手烫涨
12.45 手烫涨
14.53 耳朵顶顶顶
15.10 脸烫，耳鸣
15.50 熟悉感
16.32 手涨烫
16.48 耳鸣
19.14 手涨烫
20.55 不记得的很不舒服的感觉
睡觉没有麻`},"2024-08-24":{s4:4,detail:`下午手烫涨2次
22.45 刷牙一秒晕，讲不清
23.00 说话有点回音`},"2024-08-25":{s4:7,detail:`上午手烫涨
12.15 耳鸣 十秒
15.41 手涨烫
16.20 手烫涨
19.32 手烫涨
20.01 手烫涨
22.22 手涨烫`},"2024-08-26":{s4:7,detail:`11.49 手涨烫
13.55 手烫涨
16.10 手烫涨
18.19 手烫涨
20.27 手烫涨
22.19 右耳鸣
22.25 手涨烫`},"2024-08-27":{s4:3,detail:`11.24 手烫到小手臂
11.30 手烫
16.53 手烫，耳朵磨的声音`},"2024-08-28":{s4:3,s3:2,detail:`上班路上 手涨烫，估计9.00
13.33 手烫涨
20.02 手烫涨
22.30和半夜2次差点发作，突然有人`},"2024-08-29":{s3:1,detail:"8.25 耳朵不正常，然后左边手加脸，麻到眼睛眨了"},"2024-08-31":{s3:3,detail:`晚上有2次“做梦，失重”，跳眼2秒
早上麻一次，没到眼睛`},"2024-09-01":{detail:"皮疹，口腔溃疡"},"2024-09-02":{hh:12,detail:`2.48 半夜有害怕和不舒服，眨双眼，过程一分钟不到
9.45 2次，单位上厕所前后，熟悉感，梦境感，很快忘记，想吐，十几秒
12.12 熟悉，梦境，想吐，想拉，随着拉屎感觉消失恢复，大概20秒
13.26 同上，持续30秒
16.15
16.20
16.30
16.40
17.26
18.24
19.51 2分钟，刚吃完饭，在天街，不知道为什么在这里，不知道自己有没有上班 “医生类型的人，然后说不了了，有很多信息，说不了”，刚才的感觉像做梦`},"2024-09-03":{s3:1,hh:10,detail:`睡觉的时候可能有发，但记不清了
11.29 熟悉，梦境，想吐，拉屎，回忆混乱
12.33 熟悉，耳鸣
13.12
14.16
15.49 看视频，连续不舒服
16.53 熟悉加发麻
18.37
19.20 19.24恢复 不知道周末去哪儿了，之前知道
19.45 麻加眼睛跳
22.34 想吐，熟悉感`},"2024-09-04":{memo:"起床失忆, 恍惚发作第三天, 周三",s3:1,hh:10,detail:`前面一天药晚吃一小时
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
22.26 同上 还能回微信 29分好`},"2024-09-05":{hh:7,s4:1,detail:`起床失忆，惊讶今天周四，觉得昨天看病很远，像做梦，觉得昨晚拿衣服像2，3天前
9.42 熟悉，梦境，自述几秒
11.31 想吐 整个头皮麻 35分好
（发得越久越严重）35分说：几秒前的聊天记录是昨天的，并且觉得昨天放假，所以是前天的，但其实今天是周四
12.35 恍惚 39好
15点左右可能恍惚过，没跟我说，自己也记不清了，但是觉得记忆混乱
15.44 想吐 47好
18.53 拉屎 呕吐 57好 发完忘记症状
22.02 左手涨烫`},"2024-09-06":{coner:["医院","第二次去虹桥, 之前取消了31的号挂了13号的, 求医生6号加了号"],s4:4,detail:`去虹桥看病了
15.00前2次左手烫涨
19.20 手涨 后脑勺发烫
21.00 手烫`},"2024-09-07":{s4:5,detail:`15.00 手烫
16.06 手烫
19.07 手烫
19.15 手烫
然后长时间有点晕晕的
22.09 手涨烫`},"2024-09-08":{s3:1,s4:14,detail:`0.32 反应全身发麻，可能是左边
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
21.45`},"2024-09-09":{memo:"开始觉得脆弱, 后觉得和发作有联系",s3:1,s4:11,detail:`8.37
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
23.43 涨`},"2024-09-10":{memo:"出现了一次新形式: 强迫性思维",s3:1,s4:4,s1:[20],detail:`13.20
18.00 （晚上回忆）好像有左手轻微涨，脑子里会被强制想到一首歌，不能主动停下，不记得是哪首歌，是个电视剧的插曲
20.04 发作了，但全程有意识
日期09.10 算是大发，与过往的区别：没叫声，抖动没以前力气大，没有失神
21.13 左手涨烫
21.36 左手涨烫3次
22.14`},"2024-09-11":{memo:"有出现和昨晚发作相似的先兆, 但轻",s3:4,s4:7,detail:`8.36 手烫
10.27
11.40
12.45 幻听，说是双耳
14.11
14.30 麻，和昨晚一样，没到眼睛，要我自己去体会 本来也不是很明显 但是体会了就觉得比平时更涨 带点麻 觉得是延伸到半个手臂，长期了
14.43 手涨烫，脸麻，轻度，就是下巴到耳朵
15.32 手涨烫
16.16 烫涨，木，消失感，收紧 20变成涨的感觉，然后减弱为“需要去感受”的程度，持续很久，
22.27 涨
22.43 左边麻，没到眼睛`},"2024-09-12":{s3:3,s4:8,detail:`半夜2次，有一次麻到右腿
07.55 
10.35 左边后脑勺烫麻
12.23 心里播放一个场景
12.38 手麻涨
12.48 手涨烫
15.54 好像幻听很久了，可能是单位吵导致
21.13 涨
21.27 涨
22.17 幻听`},"2024-09-13":{coner:["医院","第三次去虹桥"],s3:3,s4:17,detail:`去医院看病, 但完全忘记上周来医院的细节.
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
21.50 幻听`},"2024-09-14":{s3:3,s4:4,detail:`6点多 有睁眼麻，到眼睛
15.39 手帐 一小时前幻听
20.06 感觉“小金条”不熟悉，问是不是有别的名字
22.43 右边耳鸣
23.23 左手麻，没到手臂，10秒或者20秒，然后涨
23.34 左边腿麻2次，持续5，6秒，空了1，2秒
23.38 右边耳鸣`},"2024-09-15":{s4:5,detail:`13.00 左手涨，到手臂，感觉和平时有点不一样，但时间短，15秒左右
18.30 左手涨
21.14 右耳耳鸣
22.06 幻听
22.37 左手涨`},"2024-09-16":{coner:["左250","左乙拉西坦晚上吃250"],s4:11,s3:2,detail:`12.50 左手涨
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
23.03 后脑勺麻，鼻子像吸水，感觉双侧，说了感觉左边重`},"2024-09-17":{s4:7,detail:`第二片左乙拉西坦后 明显嗜睡
10.48前2次手涨
11.07 手涨
15.00 左手食指涨
16.30 左耳幻听
23.36 左手涨，左手臂烫
23.58 左手涨`},"2024-09-18":{s4:3,detail:`15.37 幻听
16.64 手涨
18.10 手涨`},"2024-09-19":{s4:4,s3:1,detail:`12.02 手涨
13.05 幻听
17.00 幻听
18.38 手涨
19.22 左手失重`},"2024-09-20":{s4:3,detail:`12.23 眉毛跳麻清凉
13.43 手涨
睡前被批评 普通的不舒服，不记得什么了`},"2024-09-22":{s4:2,s3:1,detail:`(这天去长江边公园没开, 然后去宝杨宝龙看地铁, 他一个人开车先回去)
15.30 小哈摔了耳鸣一下
17.54 耳鸣
21.04 左边整个手麻，因为在玩陀螺，一个手付，一个手拍视频，有点吓人
大概11点，睡前手涨`},"2024-09-23":{memo:"第一次'不抽搐大发', 有先兆新增小发形式, 脆弱加重",s2:1,detail:`14.24 感觉在氢气球上，不断上升，因为我说阿姨红包的事，说他是想要钱，他觉得我觉得他不好，但并没有
14.59 左后脑勺 清凉的麻
20.48 右手涨 ，其实当时是全身涨了，所以发现左手也涨的，

大发了，但是没抽搐，单位里看电视，偷哭了好几次，就看大仁哥
日期 10.23 大发，在描述的时候，说上午的事，眼里出泪水了，脆弱

自己描述全程有意识，知道自己眼神发呆。主要是语言能力失去，心理描述能力也没了，但是“自己知道”
然后是半边恢复的，发完考试记忆了，记忆很好

然后说，阿姨，三姨妈的事，就眼里有泪`},"2024-09-24":{s3:1,s4:1,detail:`7.40 早上麻到眼睛
21.16 左手烫`},"2024-09-26":{s4:6,s2:1,detail:`17.14 手指甲风凉
19.00 全麻？右手涨半秒，看到镜子里的戒指，有联想一些事（好像和病没联系），开始全身涨失重，轻微麻晕，19.03恢复，回微信，后续说有强迫性思考和不真实感
20.40 右手涨半秒
20.45 手帐
21.09 手帐
21.40 头晕，和以前营养不良一样，感觉不是病`},"2024-09-27":{memo:"恍惚发作第三次",s4:3,hh:6,detail:`8.02 不舒服，和昨晚一样
16.05 恍惚发作 程度大，想吐，难受，场景，梦里场景，毛孔竖起来 17分说放空，不真实，熟悉感
17.12 恍惚，想吐，说是2秒，紧张，心跳快
17.37 手涨
19.06 想吐 恍惚，是下班路上，忘记要回哪里了
19.40 恍惚 卢广仲电视剧，以前做过梦，自己在里面，45分才‘回到世界’
今天恍惚后 记忆测试：20.41 感觉还行
20.45 后脑勺发凉
21.05 手涨
22.04 洗澡出来说恍惚了一次
23.26 左手涨烫，紧接着恍惚`},"2024-09-28":{s4:6,hh:5,detail:`这天的行程是去罗南, 和外婆油天地醉美里, 再美兰西湖公园, 再美兰湖商场
这里比较有意思的是,\\'和外婆说好不烧饭出去吃, 但不记得了\\' --- 不知道是不是生病少了一层过滤, 还竟然成功了
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
23.00 手涨`},"2024-09-29":{coner:["左500+医院","第四次去虹桥, 左乙拉西坦晚上加250"],s4:9,s3:1,hh:2,detail:`09.28 感觉是血糖低的晕
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
23.31 右腿很麻 ，说是姿势问题`},"2024-09-30":{s4:14,detail:`11.52 手涨，啃右手大指甲，再左手碰右手，会触发，至少2次了
11.55 左边额头小麻，太阳穴上面一块，很小一块，清凉
12.50 手涨
13,52 手涨
14.32 烫
14.36 烫
14.58 左边眉毛尾这里 太阳穴上面清凉感，跟上午一样
15.15 手烫，就手指甲烫，手掌涨
15.44 指甲一直风凉，小麻
16.27 手和小手臂烫
16.33 手指和太阳穴上面小麻
23.？？左手烫
23.46 左手麻
00.05 手烫`},"2024-10-01":{s4:19,detail:`(在家一天, 小哈玩弹珠)
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
21.46 涨`},"2024-10-02":{s4:12,detail:`(中午吃潮界, 下午长江边)
9.50 前烫2次
11.08 烫
11.45 烫
19.29 后脑勺烫
20.10 烫3次
20.13 后脑勺烫
21.55 手烫
22.27 手烫
22.52手烫`},"2024-10-03":{s3:2,s4:9,detail:`(大宁公园太太碰头, 下午玩沙子, 晚上和外婆吃饭)
7.02 半身麻，到眼睛，2次，半夜一次，早上一次
8.50 手烫
11.39 烫
17.30 烫
19.59 烫
20.03 我在母婴室打喷嚏后即视感
20.57 烫
21.37 烫
21.58 烫
22.07 烫`},"2024-10-04":{s4:12,detail:`(在家一天)
20.40前3次烫
21.25 烫，发现药单数，应该是少吃过了
21.51 轻微失重
22.03 烫
22.26 烫
22.30 烫，有点晕，不知道是不是发现少吃药
22.41 烫了2次
22.46 烫
23.11 烫`},"2024-10-05":{s3:2,s4:10,detail:`(今天下雨, 下午做82路去外婆家, 晚上回来)
11.25 前 手烫3次
12.08
15.04 
15.07 烫到手腕
19.26 烫2次
19.42 手烫
19.45 手烫
20.40 麻 没到眼睛 在和 小哈在 trek拍球
晚上麻2次，没到眼睛，早晚各一次`},"2024-10-06":{s3:2,s4:5,detail:`14.30 左右，在睡觉，小哈叫，麻了久，没到眼睛，下午睡觉有思考一些东西，脆弱，生气，是小哈吵醒他导致的，思考爸妈小时候对待自己，然后醒过来就都有“睁眼麻”
20.10 左耳风凉，之前烫了4次
20.35 烫
23.00 以后 麻到眼睛`},"2024-10-07":{s4:8,detail:`11.51 之前烫，现在麻，算2次
12.11 烫
14.46 烫
21.21 烫涨
23.07 烫涨 到小手臂
23.14 和上次一样
23.21 和上次一样`},"2024-10-08":{s4:15,detail:`11.00 烫，第一天工作
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
23.53 烫`},"2024-10-09":{s4:7,detail:`12.30 后脑勺风凉
14.39 左手很风凉
14.59 太阳穴附近凉快
16.11 手指尖风凉
16.35 烫
22.10 烫
23.59 耳朵上面风凉
`},"2024-10-10":{s4:11,detail:`09.45 手很风凉
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
20.13 烫`},"2024-10-11":{s3:2,s4:4,detail:`10.31 风凉
11.09 太阳穴风凉
15.44 太阳穴风凉
0.05 失重感，感觉气球上飘，小麻，没到眼睛
0.11 左手烫
1.14 嗯哼了2次
07.08 眼睛睁开导致的小麻`},"2024-10-12":{s4:9,detail:`09.36 烫
脆弱
15.41 烫，涨，后脑勺风凉 一共2次
17.20 手指风凉
17.30 耳朵风凉
19.48 左手烫
20.19 烫
22.19 说话多的时候 视野周围黑
22.20 烫`},"2024-10-13":{hh:1,s4:8,detail:`11.23 熟悉感
11.46 涨
13.04 风凉
13.14 烫
记性不太好，10月3号的事情记得不清楚
18.48 烫
18.54 
21.02
21.29
21.38`},"2024-10-14":{hh:3,s4:7,detail:`蚊子多，所以恍惚了？
10.36 恍惚发作
11.53 后脑勺风凉
13.11 烫
13.51 烫
15.54 手风凉
16.32 恍惚，知道小哈16.10睡觉，知道下午帮我打了科目三
18.30 恍惚
晚上 烫2次`},"2024-10-15":{coner:["医院","第五次医院, 总院"],s3:1,s4:13,hh:1,detail:`09.00 恍惚 梦境，呕吐 在去医院的路上，长乐路，1分钟恢复，08分还有一点
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
睡醒麻到眼睛`},"2024-10-16":{s4:2,hh:1,detail:`16.16 手指风凉
18.30 恍惚 想吐，梦境感不重
19.59 烫`},"2024-10-17":{s4:8,s3:1,detail:`09.48 烫
10.04
11.44 太阳穴风凉
13.14 烫
15.10 耳朵顶顶顶2次
16.22 风凉
16.27 耳朵风凉
23.26 耳朵风凉
08.00 小麻，以失重和轻飘飘开始，发到眼睛，时间久，后来反推还是麻的`},"2024-10-18":{s4:7,detail:`10.08 烫到手臂
10.50 烫到手臂
11.50 烫
12.17 烫到整个手臂
14.06 烫
15.20 烫
21.40 烫`},"2024-10-19":{s4:4,detail:`15.42 麻左手普通的
17.40 烫
19.11 烫
19.44
这几天晚上都有之前9.22提到的鼻子堵住的回音
（晚上测试：9.22和9.29忘记得很多）`},"2024-10-20":{s3:2,s4:5,detail:`19.30 鼻孔风凉 在吃纸包鱼，好像是鼻子过敏的皮导致的
21.37 烫
22.13 烫到小手臂
22.23 烫到小手臂
23.15 烫到小手臂`},"2024-10-21":{s3:1,s4:7,hh:1,detail:`早晚各一次麻到眼睛，时间久，早上是先失重，飘了一会
08.39 呕吐，拉屎，恍惚，1，2秒短暂的梦境感，前一天太累了，海上世界宝乐汇吵架
11.09 手指尖发凉
11.36 同上
12.52 同上
14.09 同上
14.20 同上
15.05 同上
17.56 同上
晚上失重加飘，ureshi了`},"2024-10-22":{hh:1,s3:1,s4:2,detail:`11.02 到11.05 恍惚 呕吐，但是不严重
13.40 太阳穴风凉
16.40 手风凉
早上5点 小麻 到眼睛`},"2024-10-23":{coner:["涨+开浦兰","持续型的涨, 晚上开始吃开浦兰"],s4:6,hh:2,detail:`13.05 小指涨麻，和平时不太一样，已经2次了，一次到手腕
13.38 涨麻，好像在持续，但在想别的就没有，现在是14.41
14.51 带耳机的地方风凉
19.11 间隔5分钟恍惚了2次，一次特别明显，梦境感重，想到事情泪流满面，回家理东西也泪流满面
21.55 涨麻
00.37 手烫，到手腕
：晚上开始吃开浦兰`},"2024-10-24":{s4:6,detail:`11.41 后脑勺凉
14.36 手指风凉
15.31
16.07 手风凉
23.20 手烫
23.32`},"2024-10-25":{s3:1,hh:1,s4:6,detail:`03.27手烫2次，到手腕，小哈23点开始看电视的
11.30 手指风凉
14.18 同上
22.48 左手烫
00.42 烫到手腕，ureshi过`},"2024-10-26":{s3:1,s4:4,detail:`08.20 小麻到眼睛，有梦境感，但都不严重
22.43 烫`},"2024-10-27":{s3:1,s4:4,detail:`00.22 烫
07.26 小麻，说到眼睛很久，还有口水
14.46 左后脑勺麻
17.13 烫
17.26
21.37`},"2024-10-28":{s4:5,detail:`01.01 有嘴巴和肚子叫，左半边麻，眼睛跳的前面状态，原来是怕流口水
15.38 手风凉
17.10 后脑勺凉
23.59 手烫
00.09 手烫，到手腕了
00.16 同上`},"2024-10-29":{hh:1,s3:1,s4:3,detail:`16.53 手背凉
20.20 恍惚 想拉屎
22.40 后脑勺凉
23.10 手烫`},"2024-10-30":{s3:1,s4:4,hh:1,detail:`早晚各麻一次，自己认为轻，早上是翻身导致的
14.10 手背风凉
14.59 手，然后头顶也风凉
16.35 风凉
19.24 恍惚，和昨天一样
说这两天右边有耳鸣
早上麻到眼睛跳，8点左右`},"2024-10-31":{s4:4,detail:`16.11 手背风凉，半小时前也有一次
17.00 手指凉
17.07 手背风凉`},"2024-11-01":{s4:7,detail:`11.18 手指风凉
12.13 头顶风凉
13.43 手指风凉
14.22
14.32
14.43
16.06`},"2024-11-02":{s3:1,s4:4,detail:`11.24 涨过2次，去无锡路上红灯说的
19.24 左手风凉
19.46 太阳穴风凉
半夜麻过`},"2024-11-03":{memo:"去无锡第二天失忆严重",s4:2,hh:2,s3:1,detail:`睡前听到她呼吸很响，觉得是太累了，也应该是因为累
起床不知道礼拜几，感觉做了好多梦，问要不要上学，昨天去干嘛了不知道了，问今天外婆是不是去罗南（是对的）
后来好像想起来去无锡了，感觉是梦到的，不真实，说好像很多奶茶
想起来小哈晚上话多，跟我去洗澡了，玩具在房间里，和一些睡前的事
后来想起来昨天的事了，但是觉得是梦到的
半夜醒过一次，还知道礼拜天

14.49 风凉
16.56 下午睡觉小麻
17.30 想拉屎，想吐，不严重
21.56 左手烫`},"2024-11-04":{s4:5,detail:`睡前我跟陆云打电话了，他是在打的时候睡着的，之前在看照片和偶像
好像没麻，没恍惚
10.24 手风凉
10.39
11.28
11.37 太阳穴风凉
16.38 手风凉`},"2024-11-05":{s3:1,s4:2,detail:`16.44 手风凉
22.33 左手涨`},"2024-11-06":{s3:1,s4:2,detail:`00.12 起来说胡话，说怕鸭子爬起身上，再问说红绿灯
半夜小麻到眼睛
有感觉有人
21.07 额头麻，早上有2次手风凉
醒来有一点点麻`},"2024-11-07":{s3:2,s4:4,detail:`10.59 手风凉
13.45 手涨
15.27 手指风凉
16.16 手风凉
睡觉前后都小麻，都到眼睛，说这两天眼睛痒睡得不好`},"2024-11-08":{s3:1,s4:6,detail:`10.30 耳朵风凉
11.08 手风凉
12.02 手风凉
12.58 
15.09
15.55
睡前麻`},"2024-11-09":{s3:1,s4:6,detail:`20.32 左手烫
20.46 手烫
20.57 左边头麻
21.07 手烫
22.31 涨
22.56 烫
睡前小麻`},"2024-11-10":{memo:"恍惚发作开始, 没以前严重",s3:1,s4:3,hh:1,detail:`08.18 睡着前小麻
20.32 从到家后到现在2次烫
20.54 烫
20.57 在说下午自己和小哈玩，外公发了在美兰西湖，然后他打电话给外婆的事，有梦境感，想吐，比较严重，说无法描述，21.01说好了
现在回忆，早上醒来，大概4点搞不清状况，啥都不知道的感觉
下午带小哈出去，觉得是模糊的，像1，2周前看过的电影
23.07 说麻了一下
00.13 换转向睡觉，不知道有没有什么不舒服`},"2024-11-11":{s3:1,s4:4,detail:`15.00 手指风凉
17.13 
22.03 烫涨
22.36 烫
半夜醒了后翻身小麻了`},"2024-11-12":{s4:7,hh:1,detail:`13.45 手风凉
18.27 烫
18.45 涨
19.14 涨
21.31 风凉
23.03 烫
23.29 烫
半夜有一次恍惚`},"2024-11-13":{hh:4,s4:3,detail:`09.14 到单位，说路上恍惚了，时间比较长，所有症状都有，有无法描述，梦境感，熟悉感久
分析后，觉得昨天的事模糊，其他还好
11.27 手烫
14.14 恍惚，自己描述“非常难受”，18分描述，一直有点麻，对周围环境陌生，不记得上午搬位子的事，问小熊在哪里，20分说发作结束了，说刚才不知道自己在哪里，不知道上下午
18.09 恍惚，14确认好了，觉得下午的事是假的，和下午差不多厉害，有梦境，熟悉感没有，不知道是不是换过位子了
18.37 手风凉
19.46 烫
20.44 我洗澡回来，在恍惚，程度看起来一般`},"2024-11-14":{hh:3,s4:4,s3:2,detail:`09.49 恍惚，梦境，拉屎，吐
14.54 恍惚
15.45 手风凉
18.06 恍惚，做梦，1分钟内好了
22.40 烫2次
23.32 烫
早晚各一次小麻，比较厉害，早上一次是6点打蚊子以后，说可能流口水了`},"2024-11-15":{hh:2,s3:1,s4:1,detail:`12.12 恍惚，自己说比昨天轻
17.15 手烫
21.16 恍惚，17分结束
23.29 小麻 快睡了
早上小麻`},"2024-11-16":{hh:1,s4:9,s3:2,detail:`和小婷一起过生日, 吃了一绪, 玩了美兰湖的商场和公园
08.56 恍惚
20.52 涨2次
20.55
21.00 烫，我摸了好像是物理的
21.40 左手麻，转风凉
21.54 涨
22.41 风凉
00.49 左手烫2次了，今天睡得晚了
半夜麻一次，早上一次，早上比较轻
最近开始有“有人”的感觉`},"2024-11-17":{coner:["奥600","奥卡西平加了150bid"],s4:8,hh:1,detail:`今天早上开始多吃150奥卡西平
16.54 手麻再风凉
20.04 左风凉
20.23 风凉
20.28 恍惚，29好，程度算轻
21.27 烫
21.30 烫
22.00 烫
23.38 烫
00.16 涨烫
`},"2024-11-18":{detail:`13:13 恍惚，自己说不重
13:57 手烫
14:03 涨/烫/风凉
15:40 太阳穴风凉
16:41 涨/烫/风凉
16:47 涨/烫/风凉
19:06 涨/烫/风凉
20:01 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:7},"2024-11-19":{detail:`15:58左耳朵上面风凉
16:48 涨/烫/风凉
17:05 恍惚, 比昨天厉害
19:18 涨/烫/风凉
20:09 涨/烫/风凉
21.19 风凉，在看电视
21.41 风凉，在看电视
21.47 轻微恍惚
22.47 整个右臂麻了, 算小麻
半夜麻了0次，睡醒麻了0次`,hh:2,s3:2,s4:6},"2024-11-20":{detail:`14:04 涨/烫/风凉
18:05 涨/烫/风凉
半夜麻0了次，睡醒麻了1次`,hh:0,s3:1,s4:2},"2024-11-21":{detail:`今天恍惚比较严重, 有”困”的感觉, 不确定是先兆, 恍惚前在玩卡丁车和spacegarden, 前一天接小哈回来. 
但根据历史看, 又不完全和screentime有关系.(卡丁车肯定是累的)
09:00恍惚，程度普通
10:33 涨/烫/风凉
10.44 恍惚严重, 持续的熟悉感, 非常想吐, 问了昨晚羽毛球和今天早饭, 问题不大
11点半睡着了，睡到13点一刻
14:08纯想吐（比较轻的恍惚）
15.00 恍惚，熟悉感和梦境感严重，但比早上轻和短
半夜麻了0次，睡醒麻了0次`,hh:4,s3:0,s4:1},"2024-11-22":{detail:`10:35 涨/烫/风凉
11:35 涨/烫/风凉
14:21 涨/烫/风凉
14:44 耳朵风凉
14:52 涨/烫/风凉
今天大扫除了，晚上，到11点了
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:5},"2024-11-23":{detail:`17:45 涨/烫/风凉
20:41 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2024-11-24":{detail:`15:12 涨/烫/风凉
19.45 涨/烫/风凉
下午开始好像不太精神
半夜麻了1次，睡醒麻了1次`,hh:0,s3:2,s4:2},"2024-11-25":{detail:`早上的小麻感觉有人，眼镜跳
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2024-11-26":{detail:`10:43 涨/烫/风凉
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
半夜麻了0次，睡醒麻了1次`,hh:3,s3:1,s4:2},"2024-11-30":{memo:"恍惚严重发作第四次",detail:`19:24 恍惚严重（事后记忆还行）, 梦境感, 有想吐, 头好晕, 28了还在发, 29分, 人笑了, 问了是主动笑的, 说感觉很神奇(这种感受), 30分问话不回答了, 30分:51秒 问有没有拉屎感说没了, 说不知道礼拜几, 32分: 我问恍惚过了吗, 他说没恍惚过, 问我刚才是恍惚了吗, 问我是不是刚从罗南回来, 其实不是, 下午家里呆了一下午
问我下午有没有睡过觉, 因为感觉有梦到一些剧情
35分, 说出礼拜六了, 问我们白天在哪里, 自己回忆了一点东西, 都是正确的, 但感觉不真实

20.41 恍惚, “难受”, 44: 恶心的感觉没有了, 45分问, “电脑是我带回来的吗? 今天礼拜几?感觉像做了很多梦, 不知道之前干什么了” 46: 不知道自己恍惚了, 48: 我让他现在吃药, 他问我吃什么药, 我问了知道生病吗, 说知道.49:又问了我自己睡过觉没, 上一次发作问了3次, 51分, 问有没有做梦, 看到电脑问为什么有2个电脑, 54分问我为什么他要把电脑带回家

(不知道这2次是不是因为在做斐波那契数列, 下午因为comfyui搞不清教点基础, 偶然从递归弄到斐波那契数列他一下午没做出)
21.43忘记和小婷吃了什么
22:47 涨/烫/风凉

0.54 说了很短一句话
半夜麻了1次，睡醒麻了0次`,hh:2,s3:1,s4:1},"2024-12-01":{detail:`09:20 恍惚, 说”平时也会这样, 平时是身上”发怵”, 现在是上半身”发怵””, 24恶心的感觉没了
17:23 恍惚，梦境感，想大便，想吐，24说发好了
21:17想拉屎，想吐，后背后脑勺下半部分风凉，熟悉感，梦境感，19分梦境感熟悉感明显。20分问有没有梦境中的梦境。21分好了
00.14 失重麻
1.30左右 右脚抽动多次
半夜麻了0次，睡醒麻了0次`,hh:3,s3:1,s4:0},"2024-12-02":{detail:`09:20上班路上恍惚，估计9.15吧
13.08 睡醒想吐，头疼，短暂
半夜麻了0次，睡醒麻了0次`,hh:1,s3:1,s4:0},"2024-12-03":{detail:`22:18 涨/烫/风凉
23:50 涨/烫/风凉
00:00失重，左边麻，手比较明显，没到眼睛
半夜麻了1次，睡醒麻了0次`,hh:0,s3:2,s4:2},"2024-12-04":{detail:`17:35 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:1,s4:1},"2024-12-05":{detail:`10:28 涨/烫/风凉
12.39 左耳有叮叮叮声音 不太响 持续5分钟以上
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2024-12-06":{detail:`11:48 涨/烫/风凉
13:19 涨/烫/风凉
16:41 涨/烫/风凉
19:50 涨/烫/风凉 2次
睡前和半夜都失重感觉有人，时间长。晚上和小哈疯，眼睛过敏眼皮肿起来，不知道有没有关系
半夜麻了2次，睡醒麻了0次`,hh:0,s3:2,s4:5},"2024-12-07":{detail:`17:05 涨/烫/风凉
19:16 涨/烫/风凉
20:12 涨/烫/风凉
20:24 涨/烫/风凉
晚上麻了2次，一次到眼睛，自己记得不清了，大概是因为累，睡得深，白天去浦东吃翠花，很累，睡的也很晚，12点半，我和小哈4点多睡的
半夜麻了2次，睡醒麻了0次`,hh:0,s3:2,s4:4},"2024-12-08":{detail:`14:15 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:1},"2024-12-09":{detail:`12:17 涨/烫/风凉
14:07 涨/烫/风凉
00:18 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:3},"2024-12-10":{detail:`上班或者下班路上有呕吐的感觉, 但是没恍惚
10:25 涨/烫/风凉
16:39 涨/烫/风凉
20:52 涨/烫/风凉
21:01 涨/烫/风凉 2次
21:44 涨/烫/风凉
21:47 涨/烫/风凉
21:19 涨/烫/风凉
22:50 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:9},"2024-12-11":{detail:`10:53 涨/烫/风凉
11:49 恍惚 梦境感 程度一般
14:30 涨/烫/风凉
15:09 涨/烫/风凉
15:42 涨/烫/风凉
16:12 涨/烫/风凉
16:45 恍惚, 梦境, 想吐, 不能描述, “非常难受”. 16.49 发作结束
16:21 涨/烫/风凉
21:00 涨/烫/风凉
22:30 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:2,s3:1,s4:8},"2024-12-12":{detail:`11:51 恍惚, 熟悉, 梦境, 想拉屎, 想吐. 53分 呕吐感好了. 55分 “有一瞬间感觉脑子恢复了, 思维上的恢复, 有觉得他国这个障碍的感觉” 这个我判断也是发作的症状, 因为恢复不会”一下子”, 然后他说感觉还没完全恢复, 头热.
21:08 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:1},"2024-12-13":{detail:`12.03 恍惚，梦境，想拉屎，时间短，自己说1分钟好了
22:16 涨/烫/风凉
23.41 小麻
半夜麻了0次，睡醒麻了0次`,hh:1,s3:1,s4:3},"2024-12-14":{detail:`10:52 涨/烫/风凉
11:01 涨/烫/风凉
15.17 恍惚，在天街面包店看桃酥饼的时候，梦境感，呕吐，时间还可以
18:48 涨/烫/风凉
18:54 涨/烫/风凉
19:21 涨/烫/风凉
19.12 恍惚，想拉屎，放屁，13躺下去，电话里外婆说我瘦了，他说别说，我是怕生病。（现在14分，他能说出来开始恍惚的时间的事情）
20:14有点想吐，想恍惚，但是感觉被压住了
20:16 涨/烫/风凉
20:42 轻微恍惚
22:58 涨/烫/风凉
00:26 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:2,s3:0,s4:9},"2024-12-15":{detail:`18:57 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2024-12-16":{detail:`22:33 涨/烫/风凉
23:17 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2024-12-17":{detail:`09:48 涨/烫/风凉
17:25 涨/烫/风凉
19:30 涨/烫/风凉
23:49轻微恍惚
早上起来 耳朵嗡嗡，失重，麻，时间久，没到眼睛。 这几天睡觉都非常晚，当天小哈是3点硬要躺他身上睡着的
半夜麻了0次，睡醒麻了1次`,hh:0,s3:1,s4:4},"2024-12-18":{detail:`11:32 涨/烫/风凉
13:10 涨/烫/风凉
00:03 涨/烫/风凉
01.39 说睡前麻过，小哈还没睡现在
麻到眼睛了，第二天看视频有脆弱，热泪盈眶了
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:3},"2024-12-19":{detail:`15:15 涨/烫/风凉
15:30 涨/烫/风凉
20:03 涨/烫/风凉
20:10 轻微恍惚
20:18 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:5},"2024-12-20":{coner:["医院","第六次医院, 虹桥"],detail:`10:47 涨/烫/风凉
这次做脑电图涨烫了，但是脑电图正常
14:35恍惚，梦境感，跟他说话梦境感很足，刚看完医生，难受，吃完一绪，在七宝万科，37，想吐和拉屎好一点了。梦境感还有一点。38，恢复了。
14:53 涨/烫/风凉
19:49 涨/烫/风凉
看了圈嘻嘻老公热泪盈眶
01:30左边整条腿麻
早晚各一次，都到眼睛，看病累加睡得晚
半夜麻了1次，睡醒麻了1次`,hh:1,s3:3,s4:3},"2024-12-21":{coner:["左750","今天早上开始加了半粒开浦兰bid"],detail:`今天早上开始加左乙拉西坦
08:42有比较弱的梦境感，没有想吐
12:51 涨/烫/风凉
19:07恍惚
19.38 恍惚，去天街吃烤鱼路上推小哈，想吐，想大便，中等程度
20:35 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:3,s3:1,s4:2},"2024-12-22":{detail:`08:54想吐，这次熟悉感重，梦境感轻，“和平时不一样”
20:43 涨/烫/风凉
22:32 轻微恍惚
23:31 失重，有点飘，说话有回声，左边麻，有奇怪的感觉，可能算熟悉感，35好
半夜麻了1次，睡醒麻了0次`,hh:1,s3:1,s4:2},"2024-12-23":{detail:`10:18 轻微恍惚
17:57 回家路上轻微恍惚
21:51 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:3},"2024-12-24":{detail:`15:53 左耳一直叮叮叮
16:37 持续叮叮叮 感受了就会有
19.00 从外婆家回潘广路泪流满面
23:49 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:3},"2024-12-25":{detail:`昨晚的小麻程度一般，持续短，到眼睛但没跳或者是时间短
9.57 头晕，不能动，动了就晕
19:47恍惚，48好一点点，刚吃完汉堡，50还有熟悉感，52好像好了
22:30 涨/烫/风凉
23:10 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:3},"2024-12-26":{detail:`13:22 恍惚，熟悉感时间不长，感觉不算严重，26左右恢复
23:38 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:1},"2024-12-27":{detail:`9:01 恍惚，上班路上，不算严重，恍好散的熟悉感很多，不知道是不是上班路线比较熟，一共3、4分钟
10:50 恍惚, 54回复, 觉得累, 56说梦境感恢复
14:15 涨/烫/风凉
17:40 涨/烫/风凉
回家路上恍惚
19:34恍惚，想拉屎，梦境感，熟悉感，36好点了
23:35 涨/烫/风凉
23:44小麻，到眼睛
晚上我和小哈吵架了, 把他妈弄醒了
半夜麻了1次，睡醒麻了1次`,hh:4,s3:3,s4:3},"2024-12-28":{detail:`18:35 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2024-12-29":{detail:`10:02 涨/烫/风凉
21:59 涨/烫/风凉
23:52小麻，左边麻
这2天早上都说不确定晚上有没有发过
半夜麻了0次，睡醒麻了0次`,hh:0,s3:1,s4:2},"2024-12-30":{detail:`10:02 涨/烫/风凉
晚上还是不确定，但这次说比较可能麻，所以可能是减轻了
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:1},"2024-12-31":{detail:`21:23 涨/烫/风凉 左边手腿都麻 不失重 32还有点麻, 23:28麻还没好
23:23 涨/烫/风凉
睡前麻，听到我和小哈说话的声音变奇怪
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:3},"2025-01-01":{detail:`20:27 涨/烫/风凉
23.53 小麻，听声音奇怪，然后失重
半夜麻了1次，睡醒麻了0次`,hh:0,s3:2,s4:1},"2025-01-02":{detail:`09:47恍惚，正常偏轻，梦境感，想拉屎，忘记小哈是怎么去裸男的，看来这次挺严重，有失忆，说很难描述，52，发作结束
总结这次算“明显失忆”，前面2天有“持续脚麻”和“声音奇怪” ，10.06自己描述还是有点懵，感觉昨天像2星期前
11:31 涨/烫/风凉
12:16 恍惚 和早上的差不多 18，大便呕吐好了，人累，懵，记忆还可以
18:06 恍惚, 09梦境感既视感好了, 说”描述不清, 记性有点混乱”, 刚才等过我, 觉得不真实. 看到小哈觉得有点陌生
21:50洗澡的时候恍惚了，程度还好，没第一次失忆明显
22:01觉得左腿持续麻
半夜麻了1次，睡醒麻了0次, 晚上应该是恍惚了一次`,hh:5,s3:1,s4:2},"2025-01-03":{detail:`11:21 恍惚, 想拉屎, 梦境感强, 11:25 说20秒前想不起小哈为什么不在家 (他一直在描述, 就没打断问现在有没有恢复), 11:33说忘了刚才恍惚
18:15恍惚，18大便好了，记忆还可以
21:56小麻，左半边脸抽了一下停住了
半夜麻了0次，睡醒麻了0次`,hh:2,s3:1,s4:0},"2025-01-04":{detail:`09:29恍惚，大便，呕吐，没有既视感，有梦境感，32问了次没反应，问了好几次说好一点，36应该打完了，但还萌萌的呆呆的
11:28 涨/烫/风凉
下午状态是躺床上被小哈爬着的睡觉
16:14恍惚，想吐，梦境感不强，16大便好了
16:56恍惚，拉屎感，有一点既视感，说“难受”，想吐，58分，在说胡话‘神志清醒，说话乱七八糟’，59分，还有梦境感，自己还在说是下午睡觉梦到的（我认为是梦境感），00分大便感觉没了
觉得有多次被压住的恍惚
20:32恍惚，大便，恶心，梦境，熟悉，想吐，34，大便，想吐好了，都好了
有2次被压了
半夜麻了0次，睡醒麻了0次`,hh:4,s3:0,s4:1},"2025-01-05":{detail:`08:50有点想吐，在想昨天半夜是不是有很多，53想吐好了，可能是比较小的发作
09:08觉得窗外挖掘机声音熟悉，但没觉得我说话熟悉，没梦境没熟悉
09:31有一点恍被压住了
11:39 涨/烫/风凉
12:59恍惚，想吐想拉屎，“非常难受”，02，大便好了，熟悉感还有，说不知道早上干嘛了，昨天干嘛了03，发作结束，在回忆事情
6点不到，在弄被子固定，恍惚被压了
19点左右，说有点持续的想吐，一点点拉屎，都是一点点
19:52恍惚，正常程度，普通症状，说“这种感觉很难受”，54，去房间坐了（本来在饭桌上吃东西），56，说跟想晕的恍惚不一样，57，问发作前在干嘛，他说在洗澡，洗好了，然后看了很多江直树，58，大便的感觉好了，熟悉感也好了
21:50 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:4,s3:0,s4:2},"2025-01-06":{detail:`08:22睡觉的时候有大便呕吐感觉
9:32 恍惚，表现和之前一样，38好像好了，还是问重复的问题，问前两天干嘛了
14:31 恍惚, 想拉屎, 35, 说梦境感很强, 在工作做东西, 发现看着不是像刚做的. 然后问我有带他去看病吗?早上醒来以后正常吗?昨天有一起看电视吗?刚才有讨论过梦境感吗?看了聊天记录后说觉得真实感很低
到吃饭，多多少少有几次被压了
19:26 恍惚，熟悉感，梦境感，28问我今天是上班了对吧，在给小哈弄如实，手没停，30问，回答“非常混乱”，问我回来带东西了吗，31，熟悉感好了，36说感觉下午看到同事儿子像2周前
23:22 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:4,s4:1},"2025-01-07":{memo:"开始轻度抑郁",detail:`09:51 恍惚, 应该是发完能动了后51分尝试用shortcuts记录但操作混乱, 52分微信告诉我的, 告诉我的时候说不清楚症状, 判断程度不轻, 是中等.
到下午，有2次被压住的感觉
15:34轻微的，压住了
17:45恍惚，刚到家，程度中等，46，梦境感强，问现在电视放的视频以前看过吗，47，说在恍，48，问我是不是药吃完了，我说没，问我昨天有什么担心的东西，问小哈昨晚是不是跟我一起睡的，50，大便好了，熟悉感好了
半夜麻了1次，睡醒麻了0次`,hh:2,s3:1,s4:2},"2025-01-08":{detail:`昨天开始心情有点不好，感受是“没劲，单位不想呆，家里也不想呆”
今天放学路上难过
说前两天梦到外婆
开车的时候会想这车会不会把我撞死
睡前一次小麻，半夜有一次“手掌麻”，暂时不记
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:0},"2025-01-09":{detail:`14:36 涨/烫/风凉
23:50感觉0.5秒被压住，在和小哈讲故事，还没刷牙
半夜的小麻只有眼睛跳, 暂时算作轻微
半夜麻了1次，睡醒麻了0次`,hh:0,s3:0,s4:3},"2025-01-10":{detail:`14:18 小手指麻, 28说好了, 又说怎么又有一点
早上小麻，有人，没到眼睛
半夜麻了0次，睡醒麻了1次`,hh:0,s3:1,s4:1},"2025-01-11":{memo:"这天开始刻意早睡觉, 因为是吃药来首次大发作, 晚上睡觉晚",detail:`00:24 涨/烫/风凉
02：48 大发作，嘴唇有点紫，其他就普通持续1分08秒， 小哈2点睡的，晚上在聊天
早上说，昨晚醒来有一次不知道情况了，但早上起来又记得了
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1,s1:[3]},"2025-01-12":{detail:`09:26有点恍惚，梦境感，想吐拉屎，梦境感挺强的
11:09睡觉小麻
15:40恍惚，在换机油，有梦境感，于是上楼，上楼后31分，32分发作好
后面开始 懒
19:33 涨/烫/风凉
下午和晚上，大概2，3次恍惚被压
21:09恍惚，从厕所里回来，10分，又问下午睡过觉吗，问今天是星期几，猜是星期天，问我刚才是去洗澡了吗，现在有点想吐，11分问感觉怎么，他摇头说等一下，12分他说等一下，说什么也搞不清了，只记得我告诉他昨天晚上大发，然后其他都不记得了，13分，梦境感，大便都好了，14，说最近老是闻到盐酥鸡的油类似的味道，16，能大概想起来今天下午行程了
半夜麻了0次，睡醒麻了0次`,hh:3,s3:1,s4:1},"2025-01-13":{detail:`早上觉得懵，不知道晚上有没有麻，自己说是换机油恍惚懵到现在，忘记了晚上恍惚，所以可能是早上或者睡觉恍惚过，忘记了
12:53 涨/烫/风凉
17:54恍惚，梦境感，大便，56，说非常难受，躺一下，又说躺下来也不行，但是躺着，57，说有点想吐，问我是不是上班回来（是的刚回来不久），问是不是昨天晚上也被清过记忆，感觉这个状态“有过”，58，发作好了
20:48恍惚，中等，梦境感，在厕所里，说“每次都是这个场景”，又问我刚刚有睡觉吗，50我今天白天上班吗，是不是正常回来，也能自己刚才在房间里干嘛，50，梦境感没了，并且问我刚才有梦境感吗
22:22被压了
22:28被压了
半夜麻了0次，睡醒麻了0次`,hh:2,s3:0,s4:3},"2025-01-14":{detail:`09.39 ， 10.02 恍惚2次，“时间短，但感觉明显”
17:48回家路上恍惚了
22:04 涨/烫/风凉
22:43 涨/烫/风凉
还是有抑郁，但确定是不是和发作有关系，不想说话，不想吃饭，不想玩（约好的）
半夜麻了0次，睡醒麻了0次`,hh:3,s3:0,s4:2},"2025-01-15":{detail:`08:20 恍惚, 时间不长
10:45 涨/烫/风凉
14:29 2次轻微恍惚 1次想拉屎 1次想吐 感觉很轻 觉得被压了
22:49 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:4},"2025-01-16":{detail:`这两天睡觉早了，恍惚的不明显，表现为记不清是不是恍惚，并且时间短
11:40 涨/烫/风凉
13:02 涨/烫/风凉
23:27 涨/烫/风凉
23:39头风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:4},"2025-01-17":{coner:["医院","第六次医院, 虹桥"],detail:`16:29 涨/烫/风凉
21:40后脑勺2边收紧，人有点闷，耳朵有点堵
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:2},"2025-01-18":{coner:["左500","左乙拉西坦减到500"],detail:`17:20 涨/烫/风凉
22:57 涨/烫/风凉
23:21左边麻
半夜麻了0次，睡醒麻了0次`,hh:0,s3:1,s4:2},"2025-01-19":{detail:`14:43 涨/烫/风凉
20:26洗碗的时候左手烫，然后头皮躺
21:02 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:3},"2025-01-20":{detail:`10:47 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:1},"2025-01-22":{detail:`23:25 涨/烫/风凉
23:34 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2025-01-23":{detail:`19:59 涨/烫/风凉
21:32 涨/烫/风凉
22:13 涨/烫/风凉
23:03 涨/烫/风凉
23:13小麻，时间长，没到眼睛
做噩梦频繁
半夜麻了0次，睡醒麻了0次`,hh:0,s3:1,s4:4},"2025-01-24":{detail:`14:53 涨/烫/风凉
16:02 涨/烫/风凉
19:56 涨/烫/风凉
22:41 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:4},"2025-01-25":{detail:`15:43 涨/烫/风凉
17:00 涨/烫/风凉
18:07 涨/烫/风凉
18:21 涨/烫/风凉
18:25 涨/烫/风凉
19:56 恍惚 梦境感强烈 想拉屎 想吐了
20:11 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:6},"2025-01-26":{detail:`09:39 涨/烫/风凉
9:55 恍惚，梦境，大便，呕吐，58恢复，然后说昨晚也恍惚，大便，梦境，醒来只知道有小孩，不知道和谁结婚
10:39 涨/烫/风凉
12:17 恍惚, 梦境感, 想拉屎, 19自己描述”算严重的”, 21问是不是这几天上班人少/大家都回去了/我只要上两天/刚我突然在想/为啥蒋雅不在, 23发作结束
13:56 有几次半秒的恍惚感觉被压下去了
19:07恍惚，想吐，08，让我别跟他说话，很难受，熟悉感明显，还放了个屁，09，问今天有没有上班，今天星期几，10，大便呕吐感觉好了，但质疑刚才有没有，说不知道刚才怎么了，11，问刚才有恍惚吗
22:33恍惚，呕吐，34说说不清楚，问我刚才一直醒着吗，说感觉晚饭烤鱼好不真实，35，呕吐好了，还有熟悉感，不知道上不上班，36好了，想不起来在做连连看材料是做什么的
22:52 涨/烫/风凉
22:57 涨/烫/风凉
这次发作前面2天睡得不好，但是发的2天睡的还可以
今天晚上睡觉喘粗气
半夜麻了0次，睡醒麻了0次`,hh:4,s3:0,s4:6},"2025-01-27":{detail:`起来有一点懵
09:50 恍惚，54发好
13:39 恍惚, 熟悉感, 想呕吐, 43, 微信说“非常混乱, 好了叫你”, 46, 回答好了, 但什么都不知道
1. 为什么没吃早饭(应该没吃) 
2. 半夜做什么了
3. 小哈奶奶有啥不开心吗
4. 外公外婆有啥不开心吗
5. 我只知道放学要去 其他都不清楚
6. 还记得你说爷爷要去娘娘家
7. 小哈玩什么游戏
8. 你去哪里骑了我的车
9. 我骑车是不是引起了什么意见
10. 奶奶是不是要买菜
15：40恍惚，46说好一点，刚刚很多奇怪的问题
19:14恍惚，17好了，在外婆家吃年夜饭
20:15 涨/烫/风凉
22:25恍惚，洗澡的时候恍的，现在出来了，可能没之前强，因为知道自己恍惚了
半夜麻了0次，睡醒麻了0次`,hh:5,s4:1},"2025-01-28":{detail:`09:13起床恍惚了
11:14恍惚，轻，大便，熟悉感不强，14，有梦境，15，肚子这块麻，发烫，左右脸颊烫，16，问是要过年了吗，感觉做了好多梦，我是放假了吗，混乱，熟悉感还是没有，17，问昨天跟我爸妈碰过面吗，昨天上班了吗，今天开始放假了吗，今天星期几，昨天有接我吗，我有见过我奶奶吗，小哈有去吗18，大便感好了，22，不知道自己恍惚了，并且觉得刚才的记忆更淡
14:49恍惚过了，在四季公园的蚂蚁玩楼梯
18:15恍惚，大便，熟悉感强烈，后脑勺有点麻，后背烫，19，好了
18:56 涨/烫/风凉
19:19 涨/烫/风凉
20:10 恍惚，在万达，想呕吐，14好，程度和之前差不多
半夜麻到眼睛
半夜麻了1次，睡醒麻了0次`,hh:5,s3:1,s4:2},"2025-01-29":{detail:`09:11 恍惚，分析出来昨天休息，但是去过哪里不确定，比较模糊，有好几个画面，比较混乱，根据分析猜可能前天下班去了我妈家里，但是觉得很模糊，18分梦境感也重
10:22恍惚，23，说非常难受，胸口烫，想吐，反胃，熟悉感强，说等一下，真的好难受，27，大便感觉好了，28问我今天是不是不用上班了
13:43恍惚，44说很难过，想吐，后脑勺发烫，还有脖子，46打嗝2下，47想着说，我好像梦到他说过这个东西，48好了
19:25恍惚，27问我下午睡过很久的觉吗，熟悉感，梦境感，28打嗝，29发好
20:11 涨/烫/风凉
22:28 涨/烫/风凉
23:00 涨/烫/风凉
23:06手还在持续烫
半夜恍惚了，程度和以前一样
半夜麻了0次，睡醒麻了0次`,hh:5,s3:0,s4:4},"2025-01-30":{detail:`今天是初二，楚楚外婆请吃饭，我们又自己吃了一绪晚饭，回家晚，1点14他们睡了
10:41 涨/烫/风凉
15:39 恍惚，熟悉感，脸和后脑勺烫，想吐，42手烫着，43好了，45，在说拉布拉多觉得熟悉，05说觉得外公来过像前两天发生的
17:13 涨/烫/风凉 2次
21:21 恍惚，拉屎，还没熟悉，想吐明显，放屁，22，熟悉感来了，想吐，23熟悉感好了，还是有呕吐感，24好了，说不知道为什么在这里，不知道星期几，知道关键字“阿姨姐姐爸妈，王思楠”，22.27回家感觉2，3天没回来
23:41 涨/烫/风凉
21点恍惚前就一直心悸到现在
23:53 涨/烫/风凉
23:58 涨/烫/风凉
00:03 涨/烫/风凉
00:05左边耳朵有点烫，一点点麻
00:27 涨/烫/风凉
00:54手指头烫，过了半分钟变成手
01:07 涨/烫/风凉
01:10 涨/烫/风凉
1点14他们才睡，小哈一直没睡，他有点心悸，想安静下来
01:34 说有点麻，我问他是不是左边，说是的，问有没有声音，说有，我就知道不对劲，告诉他要发了，我在没事，我开了下灯准备录，他说亮我关了，然后打开手机视频录制，其实光很小，他说，不要光我害怕，然后就发了
这次完全是我不好，吃一绪前是讨论过要不要去的，我应该决定不去的，明明知道已经很累了，教训：不能累和兴奋
另外有2个点：吃了白茶，和吃药的时候吃了很多东西，是不是药没到，因为这次时长明显超过1分钟
5点43小哈尿出来醒了，问我有没有发，因为有麻的记忆，后面不知道了
半夜麻了0次，睡醒麻了0次`,hh:2,s4:12},"2025-01-31":{detail:`09:51 涨/烫/风凉
14:25 后脑勺烫, 耳朵一直有堵住的感觉/回声的感觉`,s4:2,s1:[3]},"2025-02-01":{detail:`17:04 今天还是一直感觉耳朵堵着
18:48 涨/烫/风凉
19:55 涨/烫/风凉
21:21 涨/烫/风凉
21:31 涨/烫/风凉
22:09 涨/烫/风凉
22:18 涨/烫/风凉
23:26 涨/烫/风凉
23:28 涨/烫/风凉 31还在烫
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:7},"2025-02-02":{detail:`今天下午去了虹口汪汪队的商场，碰到了圈圈
12:37今天感觉耳朵还堵
20:52 涨/烫/风凉
21:31 涨/烫/风凉
22:37闭上眼睛感觉人在转，逆时针转，睁开不转了但是头涨，早上摩托车上也有过觉得头晕
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2025-02-03":{detail:`20:30 涨/烫/风凉
21:04左耳朵很轻的麻
20:42 涨/烫/风凉
21:05 涨/烫/风凉
22:54 涨/烫/风凉
22:58 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:6},"2025-02-04":{detail:`昨天小麻因为跟前进王思楠玩回家晚睡觉晚，起床耳朵回音
17:07 涨/烫/风凉
半夜小麻，早上小麻，早上到眼睛
半夜麻了1次，睡醒麻了1次`,hh:0,s3:2,s4:1},"2025-02-05":{detail:"半夜麻了0次，睡醒麻了0次",hh:0,s3:0,s4:0},"2025-02-06":{detail:`13:24 涨/烫/风凉
19:14有一点想吐？在吃烤鱼，说昨晚觉得有人，睁眼好了，因为小哈叫了醒了
22:35左边后脑勺烫
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:3},"2025-02-07":{detail:`昨晚小哈很晚睡，1点半还叫醒过他 
今天团建，晚上回家晚，又跟小哈搞，不知道睡觉，我10点提醒了最后一次，就不管了
最后12点睡的
然后小哈晚上搞，他自己说醒过很久，麻了一次，到眼睛
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:0},"2025-02-08":{detail:`14:01 涨/烫/风凉
14:54 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2025-02-09":{detail:`09:46 小麻，有人，昨晚没睡好，小哈一直叫醒，还换尿布，其实这次应该算作前一天起床的麻
13:34 涨/烫/风凉
22:52 手烫，到小手臂
吃晚饭的时候有一次1秒的恍惚
晚上睡前麻得厉害和多，因为小哈2点睡，一直在说话，半夜也麻了一次，小哈是个问题
半夜麻了2次，睡醒麻了0次`,hh:0,s3:3,s4:2},"2025-02-10":{detail:`15:49 涨/烫/风凉
17:08 涨/烫/风凉
18:51 涨/烫/风凉
18:55 涨/烫/风凉
18:57 涨/烫/风凉
19:03 涨/烫/风凉
19:25 涨/烫/风凉
22:32 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:8},"2025-02-11":{detail:`16:55 涨/烫/风凉
22:02 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2025-02-12":{detail:`08:15耳朵叮叮叮
16:22今天耳朵一直叮叮叮，大概3，4次
23:17小麻，比前几天好一点，小哈哄睡时间长
半夜麻了0次，睡醒麻了0次`,hh:0,s3:1,s4:4},"2025-02-13":{detail:`14的起床麻了，但不是很确定，程度小
半夜麻了0次，睡醒麻了1次`,hh:0,s3:1,s4:0},"2025-02-14":{detail:`18:06 涨/烫/风凉
21:48 涨/烫/风凉
15的早上说半夜“好像麻过”，但程度小
不知道和恍惚有没有关系
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:2},"2025-02-15":{detail:`09:04 恍惚，自己说8点45起床恍惚的，然后吃药了，9点告诉我这些的。
然后说想了几秒谁生病死了，想起来的。
因为发作15分钟吃药加说这些话，判断程度还可以，可能是第一次的关系。
原因分析：晚上小哈尿湿了？睡觉不算晚。还是前一天说他洗碗不干净？但是隔了一天
13:18 恍惚，19 头很晕 熟悉感强 20 描述不了，21，好了
13:58 涨/烫/风凉
14:37 恍惚，现在刚开始，说没刚才严重，37分，变严重，说梦境感，拉屎，想吐，39熟悉感减弱了。40，好了
16:50 涨/烫/风凉
17:07 0.5秒恍惚
17:37恍惚，现在还轻，好像是从眼角有异物感开始的。38有拉屎感了，梦境感重，打嗝了，还没熟悉感，39，胸口烫，左边烫。40，熟悉感，“描述不了”，41问“上一次是不是我也坐在这里”，应该是熟悉感了。42，好了
18:52感觉快恍惚了，53，开始了，想拉屎了，梦境感没刚才那么强，53，熟悉感来了，55，主动说“等一下，还没好，好了会叫你”，56好了
23:09耳朵有叮叮叮，urs好，13，说耳鸣
半夜恍惚过一次，暂时不记录，因为之前都不记的
半夜麻了0次，睡醒麻了0次`,hh:5,s3:0,s4:3},"2025-02-16":{detail:`11:40早上恍惚了一次，我在睡觉刚醒
13:23恍惚，24，非常恍，25，感觉描述不了，26，问今天是礼拜天吗，28，现在是几月份，有没有过过年，29，好了。这次失忆比较严重了，33还不知道月份
15:43恍惚过了，因为在道馆道长在介绍东西
16:54 涨/烫/风凉
18:52恍惚，梦境感强，熟悉感，大便，54说打嗝舒服点了，55，熟悉感好了，都好了
19:03恍惚， 梦境感，熟悉感，05，说好一点了，“刚刚说什么都忘记了”，06，对着外公说“我说让你吃饭的吗，你是认真吃饭的吗”，然后说我要吐了（但是没吐，也没很难受的样子，只是安静），07问我刚去哪里了吗（去了吴泾道观，太仓博物馆图书馆，万达），14说感觉这2天没和我住一起，问我和谁住一起了，21还在问前几天睡哪里
20:44 轻微恍惚
20:47恍惚，已经恍惚好了，我在弄灯，大家判断是2，3分钟前还在说话，50：问礼拜几，几月，他说对，但说自己是猜的
08:04 轻微恍惚
半夜麻了0次，睡醒麻了0次`,hh:6,s3:0,s4:1},"2025-02-17":{detail:`起床失业严重。经过询问，我觉得程度不是最重，只是不记得事的程度
另外，前一天，2次“轻微恍惚”是自己记录的，20.47我记录的和20.44是同一次
08:29想吐了，不知道是不是开始恍惚了，因为我在跟他说注意事项，但是说到以前忘记过结婚对象，可能引起他紧张了，发作频率太高了，31说‘我感觉嘴巴这里还在上线，还在跳容，这是叫跳容吗，我不知道，这是现实中吗，我是不是很久没去上班，过年过了很久，还在疆场三路做’，32，我听到他肚子叫，34发好了，发好一会了
12：00 恍惚，程度一般，具体见聊天记录，这几天反复问是不是过过年了，12.36说感觉脑子里物理木，感觉
16:48 恍惚, 呕吐, 心跳块, 脸红, 不知道为什么在单位, 看了知道是周一, 不知道刚才在干什么, 是不是放学要去罗南. 54, 问刚才是不是做梦了, 说不清的感觉, 59, 感觉不安全感, 忘记52说的话了.里面堵（微信聊天）
20:10恍惚，有1，2分钟了，我和小哈在玩开门，有梦境感，10，发作好了，还没过年，11，说电梯出来恍惚了，其实是上电梯前恍惚的
早上起来是蒙的感觉，推测半夜恍惚过。但也不计数
半夜麻了0次，睡醒麻了0次`,hh:4,s3:0,s4:0},"2025-02-18":{detail:`10：33 恍惚 见微信聊天记录
13:35恍惚，1323有过压住，“有点厉害”，37问“我刚恍惚了？”，41问过好年了吗
16:07恍惚，梦境，熟悉，08，说“难受，非常难受”，10，梦境感强，想吐，心口烫，11，好了
16:21好像又恍惚了，他自己说“感觉在扭，想吐”（微信聊天），24，说有点晕，过一会,29, 梦境还没好, 他说”刚闭眼在幻想”, 33分, 微信发了一个”=“, 34分, 说”可能早上也很晕”, 不知道是怎么来上班的. 35分, 确认没呕吐感了, 36问, 是不是第一天上班(其实周二)
（这2次发作期间，我在要求他做连连看素材，不知道有没有关系）
18:24 轻微恍惚
18.30 恍惚了会，在罗南，我在外面吃饭
19:25 涨/烫/风凉
20:03有点心慌 人有一点点点颤抖
20:55 恍惚，熟悉感强，想吐，问我们刚才是怎么回来的（前15分钟），是从罗南回来的吗，是不是只住着外婆，59，发作好了
22:11晚上觉得有点持续的不舒服，呕吐感个心跳
半夜麻了0次，睡醒麻了0次`,hh:6,s3:0,s4:2},"2025-02-19":{detail:`08:51早上起床一次，准备吃药前进房间不知道干嘛，应该一共2次恍惚！！！
看了录像，8.37进房间，不知道干嘛了，后来是拿左乙拉西坦了，但是不知道奥拉西平吃没吃
12:20说觉得胸口有气，我问有没有恍惚，已经说不清了（微信聊天）
15:12 耳朵有叮叮叮的混乱声音
15:44 涨/烫/风凉
15:54 轻微恍惚
16:03 轻微恍惚
16:05恍惚了，20分问，还回答“%3D%3D”，后来说睡着了
18:05 涨/烫/风凉
20:12 恍惚，描述不清，现实梦境串，19，熟悉感非常强
22:30 涨/烫/风凉
22:32 涨/烫/风凉
00:15晚上和他右脚碰着，时而抽一下，30分醒了一次以后不抽了，醒过来问小哈什么的，迷迷糊糊，早上补充：应该是恍惚了！！！
半夜麻了0次，睡醒麻了0次`,hh:6,s3:0,s4:4},"2025-02-20":{detail:`14:18耳朵叮叮叮，和一些植物神经症状
14:39 涨/烫/风凉
15.35 小恍惚
16:30小恍惚，见微信聊天
18:15路上恍惚，48说“假吐”见聊天记录
22:28左边头风凉
23:01左边麻了
晚上起来给小哈换尿布，又麻了
半夜麻了0次，睡醒麻了0次`,hh:1,s3:2,s4:4},"2025-02-21":{detail:`10:46 涨/烫/风凉
14:46 2次感觉快恍惚，压住了
14:02 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:3},"2025-02-22":{detail:`12:43 涨/烫/风凉
23:18 左手烫
今天一直说轻微呕吐和心悸，心跳100上下
23.30 小麻，先有人，时间久，再麻，麻得厉害，忘了有没有到眼睛“又厉害又久”
半夜麻了0次，睡醒麻了0次`,hh:0,s3:1,s4:2},"2025-02-23":{memo:"睡得不晚, 可能是白天累或我凶了",detail:`中午觉得植物神经症状好很多了
12:44 涨/烫/风凉
19:14 涨/烫/风凉
19：10 洗澡的时候恍惚了，早上10不到出去吃饭，然后小哈要买玉米去天街，又直接约奶奶吃饭，又去污水公园喂鱼，累了应该
20:50 涨/烫/风凉
21:11左耳廓酸
22:12 说麻了，问有声音吗，能撑住吗，然后开始砸吧嘴，开始发了， 22:14自动，抱着我，摸我 22:17能说话，清醒，知道怎么回事
（补充，原因可能是因为我凶了）`,s4:3,hh:1,s2:1},"2025-02-24":{detail:`19:44 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-02-25":{detail:`13: 35 (全身)头皮到大手臂发麻 发冷的这种 在看全嘻嘻视频紧张了可能
19:53 涨/烫/风凉
23:37和小哈吵架了，现在才睡觉，2个人刚闭上眼
23:45给小哈穿袜子，准备睡觉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2025-02-26":{memo:"这2天睡觉都很晚",detail:`17:19 涨/烫/风凉
17: 20 有一点点点晕 然后左手臂有点烫
21:23一瞬间的晕和左手臂烫，晕的时候轻微有人感
23:07不舒服过了，起来抱着我，感觉快发了，已经有咽口水了，压住了，13分回忆说有熟悉的味道，和害怕的感觉了
23:23我爆发了，一直在吵架
00:07小哈刚睡了，让他去喝水，尝试平静了再睡觉
00:23我听呼吸声，去看他，想从监控可以看到他脸，就拉了他下被子，他说刚才有一点失重。
最后早晚各小麻一次，到眼睛，时间不长`,hh:0,s3:3,s4:3},"2025-02-27":{detail:`20:06 涨/烫/风凉
23:11 小麻了
半夜麻了0次，睡醒麻了0次`,hh:0,s3:1,s4:1},"2025-02-28":{coner:["医院,妥泰1","第7次医院, 虹桥, 开始晚上一粒妥泰"],detail:`13:47 涨/烫/风凉
15:11 涨/烫/风凉
17:53 涨/烫/风凉
20:38跟小哈吵架，忍不住哭了，今天看病3点多到家的吧，然后陪小哈玩，没啥休息
22:37urs 
23点小哈有点醒了，开始睡觉
23:11小哈醒了一下，他也醒了
00:10小哈睡着
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:3},"2025-03-01":{detail:`20:49 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-03-02":{detail:`09:45 涨/烫/风凉
18:30 涨/烫/风凉
半夜5点小哈发神经把大家叫醒，她没睡好（原因是要妈妈给他吃牛奶）
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2025-03-03":{detail:`15:02 涨/烫/风凉
16:09耳朵有叮叮叮
晚上小麻程度轻
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:2},"2025-03-04":{detail:"半夜麻了0次，睡醒麻了0次",hh:0,s3:0,s4:0},"2025-03-05":{detail:`14:33 太阳穴有点晕 可能是做手册有点紧张 怕做不好 很久不做
14:43 涨/烫/风凉
18:02 回家后，出电梯的时候恍惚了。在楼道里站了10分钟，估计是17.50 发的。既视感很强。现在描述还算清楚，但是有“刚才发生的事是好久以前”的感觉
（直接原因可能是工作来活了，但有个规律是每次恍惚前对明星过分激动）
22:18有一点点头紧，左手烫
22:40 小麻，有点到眼睛，没声音，说“有光”，我以为要发了，但是没法，还比较快就好了
半夜麻了1次，睡醒麻了1次`,hh:1,s3:3,s4:3},"2025-03-06":{detail:`12:50 涨/烫/风凉
半夜麻了0次，睡醒麻了1次`,hh:0,s3:1,s4:2},"2025-03-07":{detail:`19:13工作啃手指出血了
干活到11点，11点半睡觉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2025-03-08":{detail:`08:42现在描述7点起来恍惚了，描述“不严重，但不知道星期几了”，我估计都忘记了
17:36大姨妈微信发癫痫的事，他哭了
20:21 涨/烫/风凉
20:24 轻微恍惚
20:25恍惚，27，问大便感熟悉感都说没有。问现在是晚上吗，猜周六，不记得吃了什么晚饭（答案是10分钟前刚吃了带回来的生煎）说知道不想睬他妈但不知道为什么
半夜麻了0次，睡醒麻了0次`,hh:2,s3:0,s4:1},"2025-03-09":{detail:`14:22恍惚，梦境感，在美兰湖商场，有点想大便，没有熟悉感，23，打嗝了，24头应该好了，知道自己为什么在这里
(备注: 恍惚持续只有1分钟, 之前都有5分钟)
23:17 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:1},"2025-03-10":{memo:"周一, 周二都去下班去罗南了, 外婆在",detail:`18:33有点回音，两边
23:07 涨/烫/风凉 2次
23:09恍惚被压住了
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:3},"2025-03-11":{memo:"吃了一粒妥泰后明显症状被压住的感觉, 这2天越来越不注意, 所以被压的感觉明显(因为本来要发了)",coner:["妥泰2","今天早上开始加妥泰一粒"],detail:`15:00 涨/烫/风凉
18:46 梦境感, 在给卢广仲微博留言, 自己觉得”不是非常严重”
19:08 有回声
22:30 涨/烫/风凉
刚才说，今天呕吐感被压了无数次，具体估计是20次
半夜麻了2次，但是轻了，睡醒麻了0次`,hh:1,s3:2,s4:3},"2025-03-12":{detail:`11:53 后脑勺左边有一点烫
14:01 涨/烫/风凉
14:12 后脑勺左边有一点烫
15:51 涨/烫/风凉
16:56 涨/烫/风凉
20:19 涨/烫/风凉 回声
20:54 涨/烫/风凉
21:09有点恍惚了，自己说不严重。很想拉屎，想吐，10好了
21:38 在恍惚，估计1分钟前，刚洗好澡进来，问情况，说“等一下”，感觉比较严重，38，打嗝4次，咽口水一次，想吐想拉屎，39，放屁1次，40，问好没好，有熟悉感，41，自己说缓解了
他说是想到我说“我变成照片了”小哈看的相机怪
23:01 涨/烫/风凉
23:21小麻，大概是23点睡觉的，20分钟麻了
23:43脚抽了一下醒了，看起来没麻的样子
23:45又抽了一下
23:50抽了3下，和上一次连续恍惚非常像
23:52抽了2下
23:54抽了一下，小哈睡了，电视声音关了
半夜麻了0次，睡醒麻了1次`,hh:2,s3:1,s4:8},"2025-03-13":{memo:`14日早上自己不确定有没有恍惚, 但起码不严重. 早上聊了最近情况, 确认2/25, 3/14是有抑郁的.
周期大概就是以前恍惚的周期, 可能是药控制好了.
周期中的表现很像躁郁症, 不能确定是发作形式还是吃药的副作用
循环是: 1. 发作周期结束后爱看聊天记录.(一天左右) 2. 平静几天(正常期)(1周~2周). 3. 亢奋期(2~3天): 喜欢看明星, 情绪不正常的激动. 4. 抑郁期(5天左右, 或者更多但零散, 和之前恍惚差不多): 抑郁难受, 而且不愿意告诉我, 表现是在单独一个人的时候难受, 停着不动什么也不干`,detail:`11:35 涨/烫/风凉
12:59 涨/烫/风凉
13:00左边耳朵这边有点烫麻
15:58 涨/烫/风凉
16:03 涨/烫/风凉
16:11 涨/烫/风凉
18:34 涨/烫/风凉
19:32 涨/烫/风凉
21:12 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:9},"2025-03-14":{detail:`上学路上手有涨了 来不及记
11:07 涨/烫/风凉
11:43耳朵叮叮叮
14:35 涨/烫/风凉
15:18 涨/烫/风凉
15:53 涨/烫/风凉 
16:49 涨/烫/风凉
18:20恍惚，在家门口不进来大概5分钟，出去看站在电梯口，自己说恍惚，问别的什么都不知道，22说不知道星期几，知道送弟弟到地铁站，25回忆起来放雨衣的时候恍惚的
20:27 涨/烫/风凉
21:50 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:9},"2025-03-15":{detail:`15:07 涨/烫/风凉
15:18 涨/烫/风凉
19:14 涨/烫/风凉
22:23 涨/烫/风凉
22:36 涨/烫/风凉
23:54脚抽了3下
23:57抽了一下
23:57抽了3下，小哈打了个喷嚏，此时小哈还在看电视
23:59抽了一下
00:00抽了一下
00:01抽了3下
00:01抽了2下
00:02抽了3下
00:05抽了3下
00:08抽了2下
00:09抽了2下
00:10抽了2下
00:12我躺下来了不看了
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:5},"2025-03-16":{detail:`14:59 涨/烫/风凉
20:30 涨/烫/风凉
20:39 左边耳朵后面发烫
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:3},"2025-03-17":{detail:`12:03聊到最近有“被抛弃”的假设的想法
半夜，大家都睡了，眼睛跳，好像流口水，好像没麻
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:0},"2025-03-18":{detail:`早上看刘开心想哭
下午做海报被退回来2次, 没有正常下班.
18:21 告诉我恍惚了, 在不知道星期几, 回忆了一下, 好像在改海报. 24, 说”还是不知道” (注意 21是报告时间, 不是发作时间), 26说想起来昨天请假, 但不知道去干什么(答案是上午体检)
19:33 涨/烫/风凉
没吃饭，睡觉了，到80自己出来，说没睡觉，情绪是“装出来的好”，（具体是：不开心的时候跑过来要帮我洗碗，本打算晚上睡我这头，怕我不舒服，走前还问我会不会生气）很令人担心
20:22 涨/烫/风凉
21:39 涨/烫/风凉
晚上2次小发, 第一次和昨晚一样, “没麻, 感觉被压, 说不清症状, 然后流口水了”, 第二次是麻.
半夜麻了2次，睡醒麻了0次`,hh:1,s3:2,s4:3},"2025-03-19":{memo:"我下午骨折, 开始需要照顾.",detail:`10:43 耳朵叮叮叮
11:40 耳朵叮叮叮
13:35 打开ae, 有熟悉感. 36 说有点恍惚, 38, 确定恍惚, 39, 恢复
22:32左边耳朵后面烫
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:3},"2025-03-20":{detail:`昨晚没睡好, 在想请假申请有没有通过的事
11:01 恍惚，在写小作文，拉屎，熟悉，不强，没梦境感，03分恢复
12:47耳朵叮叮
14:07 耳朵叮叮
14:47耳朵叮叮
15:29 耳朵叮叮刚刚漏了
15:38左边后脑勺烫
16:01 左边后脑勺烫
16:02 涨/烫/风凉
17:40 涨/烫/风凉
18:12 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:9},"2025-03-21":{detail:`10：40 恍惚，想吐，熟悉感轻，没梦境感，43好
12:33耳朵叮叮
14:37 涨/烫/风凉
16:54 左边耳朵上面 太阳穴附近烫
18:28恍惚，梦境，想吐，拉屎，没有熟悉感，30，打嗝，30半，放屁，开始有熟悉感，31想吐好了，都好了
（比之前重了一点了，但记忆还可以）
22:02 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:2,s3:0,s4:4},"2025-03-22":{detail:`20:15有点懵，有回声
20:39 涨/烫/风凉
21:51恍惚，已经好了，想吐，拉屎，没梦境感，熟悉感
21:56 涨/烫/风凉
半夜麻了1次 到眼睛 但是没有全身麻的感觉 感觉有口水 但是反应过来没口水的 整个时间很短，睡醒麻了0次`,hh:1,s3:1,s4:3},"2025-03-23":{detail:`08:12恍惚 想吐 拉屎 不知道周几 昨天干什么也不知道 不真实感比较足 隐约记得要出去 很模糊的 前面在刷微博 刷什么忘记了 14好了 22想起来微博刷什么了 看明星怎么带孩子的
16:48 恍惚，还不严重，49，想吐，后来补充说很轻的
19:32 涨/烫/风凉
19:39 涨/烫/风凉
21:46 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:2,s3:0,s4:3},"2025-03-24":{detail:`13.29后脑勺发烫有点麻
15.39耳朵叮叮
16:08 涨/烫/风凉
16:49 涨/烫/风凉
20:33 涨/烫/风凉
22:04 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:6},"2025-03-25":{detail:`昨天心情不好
脆弱，看到崔静给他天猫超市卡
09:46 恍惚(微信说的), 梦境感 拉屎 想吐 不算特别强烈, 自己说是”可能是馒头太咸”, 48, 好点, 但没完全好, 还有轻微想吐.(算是好了, 昨晚没睡好, 本来就不舒服)
18:20 恍惚 梦境感 小哈在睡觉和他爸都在睡觉 我放袜子的时候他爸醒了 然后好像就恍惚了 想拉屎 有点想吐 好很快 也不算很强烈 21已经完全好了
19:19 涨/烫/风凉
大概21点，我拖地板，他恍惚
22:27 涨/烫/风凉
22:30 涨/烫/风凉
22:35 涨/烫/风凉
22:40 涨/烫/风凉
22:52 涨/烫/风凉
6点和8点不到，小发了2次，严重，都是‘麻到眼睛，感觉有口水，但没，感觉有人，最后恐惧’，按以往，恐惧了就是要发了
这2天都睡得不好，大概11点多睡，但质量不好，还和我生病，担心血栓啥的有关注
半夜麻了0次，睡醒麻了2次`,hh:3,s3:2,s4:6},"2025-03-26":{detail:`09:50 太阳穴紧
15:57 涨/烫/风凉
16:10 涨/烫/风凉
20:15 涨/烫/风凉
20:30 涨/烫/风凉
20:32 涨/烫/风凉
20:53恍惚，54，既视感很强，打嗝，55，好一点，好了
22:27 涨/烫/风凉
22:34 涨/烫/风凉
22:53 涨/烫/风凉
23:20 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:10},"2025-03-27":{detail:`08:29恍惚，主动发现的，可能已经有一会了，30，说“非常严重”，31，打嗝，不知道星期几，单位干什么。
早一些问晚上怎么样，说不确定
09:53 涨/烫/风凉
11:08 涨/烫/风凉
13:33 微信说恍惚, 拉屎, 熟悉, 35好了.
13:43 涨/烫/风凉
13:59 涨/烫/风凉
14:49 涨/烫/风凉
17:45 涨/烫/风凉
18:16 路上恍惚 程度中等 不知道单位里做了什么事 也不知道为什么现在干嘛 过了一会儿才想起来 也知道单位里做了什么 全都想起来了
反馈：情绪不好
晚上被压了很多次
23:12 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:3,s3:1,s4:7},"2025-03-28":{detail:`09:13 快到单位的时候, 恍惚, 程度轻, 拉屎, 打嗝, 发完没有”搞不清状况”的感觉
10:38 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:1},"2025-03-29":{detail:"半夜麻了0次，睡醒麻了0次",hh:0,s3:0,s4:0},"2025-03-30":{detail:`07:47应该是恍惚了，问他怎么了，他说讲不清楚，48说，刚才有一秒熟悉感，然后就搞不清楚了，49，有梦境，没熟悉，大便还没好，50，算是好了。
15:30 恍惚 熟悉感 想拉屎 在看凡人传 可能看到啥情节以前看到过 所以有熟悉感 程度中等偏小 不算特别严重 看到上面的才知道早上有恍惚 32好了，补充：从播放记录看，是27发的，30算好了，才会来记录。32是彻底好了
17:31 涨/烫/风凉
18.20 去罗南路上，恍惚，严重失忆，“什么都不知道”，好像是去接小孩，帅子好像骨折了，24，恢复点了，晚上问记忆都还可以。1820应该是发后一段时间，停车后开始记录的。
23:15 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:3,s3:0,s4:2},"2025-03-31":{detail:`13:22 涨/烫/风凉
16:34 涨/烫/风凉
17:49 涨/烫/风凉
晚上开车到天街的时候，大概是19点左右，有恍惚被“主动压了”，方法是闭眼睁眼
因为奶奶坐爷爷车加油摔了，晚上睡罗南，和小哈，外公外婆。没睡好，小发多，半夜一次早上2次，第一次和最后次都好得快
半夜麻了1次，睡醒麻了2次`,hh:0,s3:3,s4:4},"2025-04-01":{memo:"奶奶骨折, 这天起他和小哈去罗南住, 工作日先来潘广路, 吃好药回, 周末带小哈来",detail:`上班路上有2次小恍惚, 被压住了, 但比以前厉害, 自己说可能发了10秒左右
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2025-04-02":{detail:`08:10 恍惚，麻，想吐，想拉屎，11，说好了
15:45 这几小时, “感受就会有:” 左手小手指麻, 觉得工作做得不好在返工
22:17 恍惚 , 拉屎感强, “整体不轻” 20, 说好点, 应该是好了, 刚才在看李的聊天, 放了一个语音给小哈听. 
半夜麻了0次，睡醒麻了0次`,hh:2,s3:0,s4:1},"2025-04-03":{detail:`09:06 恍惚, 恶心, 被压, 大概半分钟左右
11:19 手臂有一点点烫涨麻 小臂 左边 前面
12:05 涨/烫/风凉
13:39 涨/烫/风凉
14:33耳朵叮叮
14:43耳朵
16:39 后脑勺左边耳朵后面烫
17:06 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:1,s4:7},"2025-04-04":{detail:`11:16 涨/烫/风凉
12:42 涨/烫/风凉
18:53 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:3},"2025-04-05":{detail:`睡得很晚, 11:50 微信告诉我小哈睡了, 12:00 微信说了最后句话
晚上麻了2次，都有人，有一次到眼睛，到感觉不严重
半夜麻了2次，睡醒麻了0次`,hh:0,s3:2,s4:0},"2025-04-06":{detail:`08:45恍惚 想拉屎 在吃药 想到李说他爸爸后来年纪大了自然就好了 但是想到他爸爸好像不在了 有点难过 总时间也不长 估计1分钟左右 强度算是中度
13:50 涨/烫/风凉
16:30 耳朵叮叮
今天写微博小作文了
晚上睡得不好
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:2},"2025-04-07":{detail:`19:29 耳朵后面烫了
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-04-08":{detail:`12:01 涨/烫/风凉
15:01耳朵叮叮
15:14 恍惚 想吐 想拉屎 一分钟没完全好 程度算重
半夜麻了0次，睡醒麻了0次`,hh:1,s4:2},"2025-04-09":{detail:`16:53 涨/烫/风凉
晚上12点以后睡觉，睡得不好，麻了2次
半夜麻了2次，睡醒麻了0次`,hh:0,s3:2,s4:1},"2025-04-10":{detail:`08:22 涨/烫/风凉
11:14 涨/烫/风凉
16: 06 恍惚, 拉屎. 没有说什么时候好的. 发完不知道星期几, 猜吃过午饭饭, 不知道上午下午, 不想大便后冒汗. 16分才恢复, 说应该能想起来, 但是回忆累.
 36说 觉得中午的事是昨天的
19:21睡了一下，麻到眼睛了
19:48恍惚，想吐，梦境，48说梦境感强，49放屁，梦里梦过的感觉，想吐，不知道自己为什么在这里，不知道星期几，不知道过会要回哪里，不知道什么情况，大便呕吐还没好，50说“刚才是不是有跟你说不知道今天星期几”，51，发作结束
晚上没睡好，但没麻
半夜麻了0次，睡醒麻了0次`,hh:2,s3:1,s4:2},"2025-04-11":{detail:`08:09恍惚完，现在不知道情况, 10点问情况, 记忆不连续, 并且不知道早上恍惚，为什么在罗南，怎么来的
14:46耳朵叮叮
16:17恍惚，拉屎，想吐，18说非常难受，等一下，19，无法描述，20，发作好了，问“我昨天是不是在罗南”说“我现在一无所知”，22说“大概是刚才做梦了”
18:16 涨/烫/风凉
19:11恍惚，拉屎感，熟悉感梦境感不强，11分说慢慢在变强，12分说还没好，好了跟你说，过了一会说：你等一下，等我冷静下来了再问你，13分说，讲不清楚，有既视感，不知道星期几，描述不了，14分发作好了
19:05 涨/烫/风凉
5点醒来不知道情况，肯定是恍惚了
半夜麻了0次，睡醒麻了0次`,hh:4,s3:0,s4:3},"2025-04-12":{coner:["妥泰3","今天晚上开始吃2粒妥泰"],detail:`19:58恍惚，想吐，拉屎，可能是1分钟前开始的，“好像没有熟悉感和梦境感”，00：不知道今天星期几，应该发作好了，我问的时候他问“我有说过我想呕吐吗”，03：不知道星期几，明天要不要上班，要不要去罗南
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:0},"2025-04-13":{detail:`今天忘记吃药了10点不到才吃的
12:52恍惚，拉屎，想吐，54，发作好了，房间布局不熟，问什么时候变成这种布局的
21:03 恍惚 熟悉感很强 觉得昨天倒垃圾回来是一样电梯出来（还是进去不记得了）的熟悉感 到04分大概 不确定
半夜麻了0次，睡醒麻了0次`,hh:2,s3:0,s4:0},"2025-04-14":{detail:`上班路上恍惚，可能不重
12:55刚恍惚好
半夜麻了0次，睡醒麻了0次`,hh:2,s3:0,s4:0},"2025-04-15":{detail:`起床麻了，速度快，到眼睛，有人
半夜麻了0次，睡醒麻了1次`,hh:0,s3:1,s4:0},"2025-04-16":{detail:`15:13耳朵叮叮
16:30耳朵叮叮
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2025-04-17":{detail:`11:15耳朵叮叮叮
睡前麻，好像不太重
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:1},"2025-04-18":{detail:`14:25耳朵叮叮
16:34耳朵叮
23:47耳朵叮
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:3},"2025-04-19":{detail:`22:02 涨/烫/风凉
半夜麻了0次，睡醒麻了1次`,hh:0,s3:1,s4:1},"2025-04-20":{detail:"半夜麻了0次，睡醒麻了0次",hh:0,s3:0,s4:0},"2025-04-21":{detail:`15:00后脑勺一点点发麻
19:47 涨/烫/风凉
11:46耳朵叮叮叮
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:3},"2025-04-22":{coner:["妥泰4","今天早上开始吃2粒妥泰"],detail:`17:50 恍惚，梦境，熟悉，停车停下来的时候，52发作好
19:57晕，躺着晕，坐起来好，动了就晕
半夜麻了0次，睡醒麻了1次`,hh:1,s3:1,s4:1},"2025-04-23":{detail:`12:25中午睡觉麻了
半夜麻了0次，睡醒麻了0次`,hh:0,s3:1,s4:0},"2025-04-24":{detail:`18:07 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-04-25":{detail:`17:40 恍惚，在路上，41，拉屎，想吐，梦境感强，43，身体发烫，44头，发作完，记忆几乎没影响，47，说又有点梦境感
19:37 涨/烫/风凉
22:00 涨/烫/风凉
23:11 涨/烫/风凉
23:20 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:4},"2025-04-26":{detail:`20:43 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-04-27":{detail:`21:36 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-04-28":{detail:`21:09 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-04-29":{detail:`早上麻得不厉害
半夜麻了0次，睡醒麻了1次`,hh:0,s3:1,s4:0},"2025-04-30":{detail:"半夜麻了0次，睡醒麻了0次",hh:0,s3:0,s4:0},"2025-05-01":{detail:`09:47出去买饼，过程中恍惚了，很严重，说回家路上在清美门口恍惚的了
14:54恍惚, 已经恍惚完2分钟, 很严重, 而且说”如果是恶心, 梦境应该算轻了”, 描述不清情况. 早上恍惚后和小哈摔跤, 感觉是一个月前发生的, 没有参与感.
16:39 涨/烫/风凉
16:58 涨/烫/风凉
19 :32 恍惚，拉屎，梦境，既视感强，去拿盒马邻里路上，不知道星期几，不知道去哪里的，多久好的不知道
21:52恍惚，想吐，拉屎，53，既视感，放屁，看到表带觉得熟悉，54发作好了，59，问他情况，不说话，摇头，不是发作，说描述不清，思路不清，在想问题
23:01有点想吐，压下去了
起床的时候，已经醒了，怕时间晚，麻了几秒，没到眼睛
半夜麻了0次，睡醒麻了1次`,hh:4,s3:1,s4:3},"2025-05-02":{detail:`08:14恍惚，想吐，其他症状描述不了，“还是那个场景，还是牙齿的那种”，在咽口水，问他，说不知道，又咽口水了，肚子叫了，17发作好了，18，自己觉得脑子还清楚
14: 00 恍惚，和之前一样，和小哈在客厅，我在睡觉
很明显，人反应慢了，说话没反馈
25说一点都描述不了，当时的画面
16:47 恍惚，熟悉感，梦境感，49，熟悉感非常强，呕吐拉屎都有，打嗝了，但是还能跟小孩说话，50，发作好了
估计是17点50分恍惚了，坐了10分钟又睡了，睡觉到19.30起床，有点呆，应该是恍惚过，醒来后觉得是半夜，不知道自己坐起来10分钟过
22:28 涨/烫/风凉
23:07 恍惚，洗澡的时候
23:28 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:5,s3:0,s4:2},"2025-05-03":{detail:`08:00 恍惚 拉屎感很重 想吐 早上起来不知道周几 不知道在哪里 以为是在裸男
11:05恍惚，自己说很厉害，很像拉屎，说不清楚的感受，08，发作好了，搞不清楚星期几 几月份 现在在干嘛 眼神呆滞 发的次数已经到了迷糊的程度了 不知道有没有吃过饭，17，问晚上是不是睡在这里的，最近是不是一直住在这里，和上午的一次一样，对地点也开始判断出问题了，可能是丢失了最近2周的记忆，因为是最近2周开始住回来的, 躺了会, 11:45因为小哈叫了一下醒了, 醒来眼神有点呆滞, 看了手表, 第一句话问我有没有吃药, 然后说刚才醒来以为在罗南.
13:41恍惚，我在睡觉，他刚恍好了 
16:50恍惚，在油天地2楼，大便，呕吐，屁眼烫，51，熟悉梦境，腹部这一块都很烫，52，打嗝，现在不知道在哪里，不知道什么时间，星期几，发作结束，53已经知道情况了，还可以
18:13恍惚，他说刚才什么地方也恍惚过，没告诉我，刚才人发麻，说从左边头到左边腿，躺下来，到17分，问有没有麻和大便，都回答说没有，20，没有大发，应该算17分发作结束了，22问礼拜几，放假了吗，51吗，（在我回答下逐个问的）刚才有睡过觉吗，感觉了做了很多梦
19:16 涨/烫/风凉
19:57恍惚，老样子，左边额头烫，在搅拌，59，好了，00，问他吃什么，想了一会说肯德基，但自己不敢相信，问刚才睡觉了吗，感觉做了很多梦，梦到买了很多肯德基，感觉每个人都有阴谋
21:34 左耳耳鸣
21:53 在和小哈讲故事, 奶奶进房间说话, 我看他一段时间没说话, 应该是恍惚过了, 因为问有没有洗过澡, 刷过牙, 都不知道了, 不知道礼拜几, 不知道几点, 不知道今天上班还是休息.
00:47打嗝一下，不知道有没有恍惚
0807起床啥都不知道，眼神呆滞
半夜麻了0次，睡醒麻了0次`,hh:7,s3:0,s4:2}},ar={id:"cont-wrap"},ur={id:"calender-wrap"},dr={id:"calender-head"},hr={class:"calender-year"},pr={class:"tag s3"},gr={class:"tag s4"},mr={class:"tag hh"},_r=["onClick"],br={class:"date"},yr={class:"opt-head"},vr=["onClick"],xr=["onClick"],wr={class:"strat setall"},Sr={key:0,class:"tag s3"},Cr={key:1,class:"tag s4"},Tr={key:2,class:"tag hh"},Or={key:3,style:{"font-weight":"900","font-size":"16px",padding:"10px 20px"}},Er={key:4,style:{"font-weight":"900","font-size":"16px",padding:"10px 20px"}},Ar={__name:"App",setup(e){const n=P=>P<10?`0${P}`:P,t=P=>{const w=new Date(+P);return`${w.getFullYear()}-${n(w.getMonth()+1)}-${n(w.getDate())}`},s=Object.fromEntries(Object.entries(fr).map(([P,w])=>[new Date(P).valueOf(),w])),i=["2024-01-27",t(Date.now()+864e5*7)],l=(new Date(i[1])-new Date(i[0]))/864e5,r=new Date(i[0]).valueOf(),o=os(new Date(i[0]).valueOf()+864e5*4),f=On(Ds);let h={};const u=P=>{var w;(w=h[P])==null||w.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})};let p=0,C=null;const T=os(!0),F=P=>{if(!C){const w=P.target;T.value=p>w.scrollTop,p=w.scrollTop;const M=new Date(i[0]).valueOf()+(new Date(i[1])-new Date(i[0]))/w.scrollHeight*(w.scrollTop+w.clientHeight/2);o.value=M,C=setTimeout(()=>{C=null},350)}},E=On({s3:{days:0,count:0},s4:{days:0,count:0},hh:{days:0,count:0}});wn(o,()=>{const P=new Date(o.value).getMonth(),w=new Date(o.value).getFullYear();E.s3.days=0,E.s3.count=0,E.s4.days=0,E.s4.count=0,E.hh.days=0,E.hh.count=0;for(const[M,$]of Object.entries(s)){const Z=new Date(+M);Z.getMonth()===P&&Z.getFullYear()===w&&($.s3&&(E.s3.days++,E.s3.count+=$.s3),$.s4&&(E.s4.days++,E.s4.count+=$.s4),$.hh&&(E.hh.days++,E.hh.count+=$.hh))}});let z=null;const L=P=>{z||(T.value=!1,z=setTimeout(()=>{z=null},350))},q=P=>{for(const w in Ds)["coner","memo","detail"].includes(w)||(f[w]=P?0:-1)};return Yt(()=>{const P=document.querySelector("#calander-body");P.scroll(0,P.scrollHeight*(new Date-new Date(i[0]))/(new Date(i[1])-new Date(i[0]))-P.clientHeight)}),(P,w)=>(re(),fe(ae,null,[J("div",ar,[J("div",ur,[J("div",dr,[J("div",hr,[Rt(X(new Date(o.value).getFullYear())+"年"+X(new Date(o.value).getMonth()+1)+"月 ",1),J("span",pr,"小发天数: "+X(E.s3.days)+" 次数: "+X(E.s3.count),1),J("span",gr,"轻微天数: "+X(E.s4.days)+" 次数: "+X(E.s4.count),1),J("span",mr,"恍惚天数: "+X(E.hh.days)+" 次数: "+X(E.hh.count),1)]),w[2]||(w[2]=Sl('<div class="calender-item">周日</div><div class="calender-item">周一</div><div class="calender-item">周二</div><div class="calender-item">周三</div><div class="calender-item">周四</div><div class="calender-item">周五</div><div class="calender-item">周六</div>',7))]),J("div",{id:"calander-body",onScroll:F},[(re(),fe(ae,null,Un(l,M=>J("div",{class:sn(["calender-item card",{active:ye(r)+M*864e5-o.value<864e5*31&&new Date(ye(r)+M*864e5).getMonth()===new Date(o.value).getMonth()}]),onClick:$=>u(ye(r)+M*864e5),key:M},[J("div",br,X(new Date(ye(r)+M*864e5).getDate()),1),xe(cr,{strategy:f,record:ye(s)[ye(r)+M*864e5]},null,8,["strategy","record"])],10,_r)),64))],32),J("div",{id:"strategy-select",style:nt(`transform: translateY(${T.value?0:"100%"})`)},[(re(!0),fe(ae,null,Un(Object.entries(ye(Dt)),M=>(re(),fe("div",{class:"strat",key:M[0]},[J("div",yr,X(ye(rr)[M[0]]),1),(re(!0),fe(ae,null,Un(M[1],($,Z)=>(re(),fe("div",{class:sn(["option",{active:Z===f[M[0]]}]),onClick:Pe=>f[M[0]]=Z,key:$.name},X($.name),11,vr))),128)),J("div",{class:sn(["option",{active:f[M[0]]===-1}]),onClick:$=>f[M[0]]=-1}," 不渲染 ",10,xr)]))),128)),J("div",wr,[J("div",{class:"action",onClick:w[0]||(w[0]=M=>q(!0))},"恢复默认"),J("div",{class:"action",onClick:w[1]||(w[1]=M=>q(!1))},"关闭渲染")])],4)])]),J("div",{id:"detail",onScroll:L},[(re(!0),fe(ae,null,Un(Object.entries(ye(s)),([M,$])=>(re(),fe("div",{class:"detail-card",ref_for:!0,ref:Z=>ye(h)[M]=Z,key:M},[Rt(X(t(M))+" ",1),$.s3?(re(),fe("span",Sr,"小发 "+X($.s3),1)):gn("",!0),$.s4?(re(),fe("span",Cr,"轻微 "+X($.s4),1)):gn("",!0),$.hh?(re(),fe("span",Tr,"恍惚 "+X($.hh),1)):gn("",!0),$.memo?(re(),fe("pre",Or,X($.memo),1)):gn("",!0),$.coner?(re(),fe("pre",Er,X($.coner[1]),1)):gn("",!0),J("pre",null,X($.detail)+`

      `,1)]))),128))],32)],64))}};sr(Ar).mount("#app");
