(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ft(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const z={},he=[],Ln=()=>{},j0=()=>!1,nt=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ht=n=>n.startsWith("onUpdate:"),sn=Object.assign,$t=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},N0=Object.prototype.hasOwnProperty,K=(n,e)=>N0.call(n,e),M=Array.isArray,de=n=>et(n)==="[object Map]",M1=n=>et(n)==="[object Set]",F=n=>typeof n=="function",Q=n=>typeof n=="string",Xn=n=>typeof n=="symbol",X=n=>n!==null&&typeof n=="object",I1=n=>(X(n)||F(n))&&F(n.then)&&F(n.catch),F1=Object.prototype.toString,et=n=>F1.call(n),W0=n=>et(n).slice(8,-1),H1=n=>et(n)==="[object Object]",Lt=n=>Q(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Te=Ft(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tt=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},B0=/-(\w)/g,zn=tt(n=>n.replace(B0,(e,t)=>t?t.toUpperCase():"")),U0=/\B([A-Z])/g,oe=tt(n=>n.replace(U0,"-$1").toLowerCase()),$1=tt(n=>n.charAt(0).toUpperCase()+n.slice(1)),ht=tt(n=>n?`on${$1(n)}`:""),Jn=(n,e)=>!Object.is(n,e),dt=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},L1=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},V0=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let i1;const st=()=>i1||(i1=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function it(n){if(M(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],i=Q(s)?Y0(s):it(s);if(i)for(const l in i)e[l]=i[l]}return e}else if(Q(n)||X(n))return n}const K0=/;(?![^(]*\))/g,k0=/:([^]+)/,q0=/\/\*[^]*?\*\//g;function Y0(n){const e={};return n.replace(q0,"").split(K0).forEach(t=>{if(t){const s=t.split(k0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Fn(n){let e="";if(Q(n))e=n;else if(M(n))for(let t=0;t<n.length;t++){const s=Fn(n[t]);s&&(e+=s+" ")}else if(X(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const G0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",J0=Ft(G0);function j1(n){return!!n||n===""}const N1=n=>!!(n&&n.__v_isRef===!0),en=n=>Q(n)?n:n==null?"":M(n)||X(n)&&(n.toString===F1||!F(n.toString))?N1(n)?en(n.value):JSON.stringify(n,W1,2):String(n),W1=(n,e)=>N1(e)?W1(n,e.value):de(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,i],l)=>(t[ut(s,l)+" =>"]=i,t),{})}:M1(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ut(t))}:Xn(e)?ut(e):X(e)&&!M(e)&&!H1(e)?String(e):e,ut=(n,e="")=>{var t;return Xn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bn;class z0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bn,!e&&bn&&(this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=bn;try{return bn=this,e()}finally{bn=t}}}on(){bn=this}off(){bn=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function X0(){return bn}let J;const pt=new WeakSet;class B1{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bn&&bn.active&&bn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pt.has(this)&&(pt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||V1(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,l1(this),K1(this);const e=J,t=En;J=this,En=!0;try{return this.fn()}finally{k1(this),J=e,En=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wt(e);this.deps=this.depsTail=void 0,l1(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){St(this)&&this.run()}get dirty(){return St(this)}}let U1=0,Oe,Ee;function V1(n,e=!1){if(n.flags|=8,e){n.next=Ee,Ee=n;return}n.next=Oe,Oe=n}function jt(){U1++}function Nt(){if(--U1>0)return;if(Ee){let e=Ee;for(Ee=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Oe;){let e=Oe;for(Oe=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function K1(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function k1(n){let e,t=n.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),Wt(s),Z0(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}n.deps=e,n.depsTail=t}function St(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(q1(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function q1(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Me))return;n.globalVersion=Me;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!St(n)){n.flags&=-3;return}const t=J,s=En;J=n,En=!0;try{K1(n);const i=n.fn(n._value);(e.version===0||Jn(i,n._value))&&(n._value=i,e.version++)}catch(i){throw e.version++,i}finally{J=t,En=s,k1(n),n.flags&=-3}}function Wt(n,e=!1){const{dep:t,prevSub:s,nextSub:i}=n;if(s&&(s.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let l=t.computed.deps;l;l=l.nextDep)Wt(l,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Z0(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let En=!0;const Y1=[];function Zn(){Y1.push(En),En=!1}function Qn(){const n=Y1.pop();En=n===void 0?!0:n}function l1(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=J;J=void 0;try{e()}finally{J=t}}}let Me=0;class Q0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bt{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!J||!En||J===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==J)t=this.activeLink=new Q0(J,this),J.deps?(t.prevDep=J.depsTail,J.depsTail.nextDep=t,J.depsTail=t):J.deps=J.depsTail=t,G1(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=J.depsTail,t.nextDep=void 0,J.depsTail.nextDep=t,J.depsTail=t,J.deps===t&&(J.deps=s)}return t}trigger(e){this.version++,Me++,this.notify(e)}notify(e){jt();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Nt()}}}function G1(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)G1(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wt=new WeakMap,ie=Symbol(""),Ct=Symbol(""),Ie=Symbol("");function on(n,e,t){if(En&&J){let s=wt.get(n);s||wt.set(n,s=new Map);let i=s.get(t);i||(s.set(t,i=new Bt),i.map=s,i.key=t),i.track()}}function Un(n,e,t,s,i,l){const r=wt.get(n);if(!r){Me++;return}const o=a=>{a&&a.trigger()};if(jt(),e==="clear")r.forEach(o);else{const a=M(n),d=a&&Lt(t);if(a&&t==="length"){const h=Number(s);r.forEach((p,w)=>{(w==="length"||w===Ie||!Xn(w)&&w>=h)&&o(p)})}else switch((t!==void 0||r.has(void 0))&&o(r.get(t)),d&&o(r.get(Ie)),e){case"add":a?d&&o(r.get("length")):(o(r.get(ie)),de(n)&&o(r.get(Ct)));break;case"delete":a||(o(r.get(ie)),de(n)&&o(r.get(Ct)));break;case"set":de(n)&&o(r.get(ie));break}}Nt()}function ce(n){const e=V(n);return e===n?e:(on(e,"iterate",Ie),Cn(n)?e:e.map(cn))}function lt(n){return on(n=V(n),"iterate",Ie),n}const ns={__proto__:null,[Symbol.iterator](){return gt(this,Symbol.iterator,cn)},concat(...n){return ce(this).concat(...n.map(e=>M(e)?ce(e):e))},entries(){return gt(this,"entries",n=>(n[1]=cn(n[1]),n))},every(n,e){return Wn(this,"every",n,e,void 0,arguments)},filter(n,e){return Wn(this,"filter",n,e,t=>t.map(cn),arguments)},find(n,e){return Wn(this,"find",n,e,cn,arguments)},findIndex(n,e){return Wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Wn(this,"findLast",n,e,cn,arguments)},findLastIndex(n,e){return Wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return mt(this,"includes",n)},indexOf(...n){return mt(this,"indexOf",n)},join(n){return ce(this).join(n)},lastIndexOf(...n){return mt(this,"lastIndexOf",n)},map(n,e){return Wn(this,"map",n,e,void 0,arguments)},pop(){return ve(this,"pop")},push(...n){return ve(this,"push",n)},reduce(n,...e){return r1(this,"reduce",n,e)},reduceRight(n,...e){return r1(this,"reduceRight",n,e)},shift(){return ve(this,"shift")},some(n,e){return Wn(this,"some",n,e,void 0,arguments)},splice(...n){return ve(this,"splice",n)},toReversed(){return ce(this).toReversed()},toSorted(n){return ce(this).toSorted(n)},toSpliced(...n){return ce(this).toSpliced(...n)},unshift(...n){return ve(this,"unshift",n)},values(){return gt(this,"values",cn)}};function gt(n,e,t){const s=lt(n),i=s[e]();return s!==n&&!Cn(n)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.value&&(l.value=t(l.value)),l}),i}const es=Array.prototype;function Wn(n,e,t,s,i,l){const r=lt(n),o=r!==n&&!Cn(n),a=r[e];if(a!==es[e]){const p=a.apply(n,l);return o?cn(p):p}let d=t;r!==n&&(o?d=function(p,w){return t.call(this,cn(p),w,n)}:t.length>2&&(d=function(p,w){return t.call(this,p,w,n)}));const h=a.call(r,d,s);return o&&i?i(h):h}function r1(n,e,t,s){const i=lt(n);let l=t;return i!==n&&(Cn(n)?t.length>3&&(l=function(r,o,a){return t.call(this,r,o,a,n)}):l=function(r,o,a){return t.call(this,r,cn(o),a,n)}),i[e](l,...s)}function mt(n,e,t){const s=V(n);on(s,"iterate",Ie);const i=s[e](...t);return(i===-1||i===!1)&&Kt(t[0])?(t[0]=V(t[0]),s[e](...t)):i}function ve(n,e,t=[]){Zn(),jt();const s=V(n)[e].apply(n,t);return Nt(),Qn(),s}const ts=Ft("__proto__,__v_isRef,__isVue"),J1=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xn));function ss(n){Xn(n)||(n=String(n));const e=V(this);return on(e,"has",n),e.hasOwnProperty(n)}class z1{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,l=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return l;if(t==="__v_raw")return s===(i?l?us:n0:l?Q1:Z1).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=M(e);if(!i){let a;if(r&&(a=ns[t]))return a;if(t==="hasOwnProperty")return ss}const o=Reflect.get(e,t,tn(e)?e:s);return(Xn(t)?J1.has(t):ts(t))||(i||on(e,"get",t),l)?o:tn(o)?r&&Lt(t)?o:o.value:X(o)?i?e0(o):Fe(o):o}}class X1 extends z1{constructor(e=!1){super(!1,e)}set(e,t,s,i){let l=e[t];if(!this._isShallow){const a=le(l);if(!Cn(s)&&!le(s)&&(l=V(l),s=V(s)),!M(e)&&tn(l)&&!tn(s))return a?!1:(l.value=s,!0)}const r=M(e)&&Lt(t)?Number(t)<e.length:K(e,t),o=Reflect.set(e,t,s,tn(e)?e:i);return e===V(i)&&(r?Jn(s,l)&&Un(e,"set",t,s):Un(e,"add",t,s)),o}deleteProperty(e,t){const s=K(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&s&&Un(e,"delete",t,void 0),i}has(e,t){const s=Reflect.has(e,t);return(!Xn(t)||!J1.has(t))&&on(e,"has",t),s}ownKeys(e){return on(e,"iterate",M(e)?"length":ie),Reflect.ownKeys(e)}}class is extends z1{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ls=new X1,rs=new is,os=new X1(!0);const Tt=n=>n,Be=n=>Reflect.getPrototypeOf(n);function cs(n,e,t){return function(...s){const i=this.__v_raw,l=V(i),r=de(l),o=n==="entries"||n===Symbol.iterator&&r,a=n==="keys"&&r,d=i[n](...s),h=t?Tt:e?Ot:cn;return!e&&on(l,"iterate",a?Ct:ie),{next(){const{value:p,done:w}=d.next();return w?{value:p,done:w}:{value:o?[h(p[0]),h(p[1])]:h(p),done:w}},[Symbol.iterator](){return this}}}}function Ue(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function as(n,e){const t={get(i){const l=this.__v_raw,r=V(l),o=V(i);n||(Jn(i,o)&&on(r,"get",i),on(r,"get",o));const{has:a}=Be(r),d=e?Tt:n?Ot:cn;if(a.call(r,i))return d(l.get(i));if(a.call(r,o))return d(l.get(o));l!==r&&l.get(i)},get size(){const i=this.__v_raw;return!n&&on(V(i),"iterate",ie),Reflect.get(i,"size",i)},has(i){const l=this.__v_raw,r=V(l),o=V(i);return n||(Jn(i,o)&&on(r,"has",i),on(r,"has",o)),i===o?l.has(i):l.has(i)||l.has(o)},forEach(i,l){const r=this,o=r.__v_raw,a=V(o),d=e?Tt:n?Ot:cn;return!n&&on(a,"iterate",ie),o.forEach((h,p)=>i.call(l,d(h),d(p),r))}};return sn(t,n?{add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear")}:{add(i){!e&&!Cn(i)&&!le(i)&&(i=V(i));const l=V(this);return Be(l).has.call(l,i)||(l.add(i),Un(l,"add",i,i)),this},set(i,l){!e&&!Cn(l)&&!le(l)&&(l=V(l));const r=V(this),{has:o,get:a}=Be(r);let d=o.call(r,i);d||(i=V(i),d=o.call(r,i));const h=a.call(r,i);return r.set(i,l),d?Jn(l,h)&&Un(r,"set",i,l):Un(r,"add",i,l),this},delete(i){const l=V(this),{has:r,get:o}=Be(l);let a=r.call(l,i);a||(i=V(i),a=r.call(l,i)),o&&o.call(l,i);const d=l.delete(i);return a&&Un(l,"delete",i,void 0),d},clear(){const i=V(this),l=i.size!==0,r=i.clear();return l&&Un(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=cs(i,n,e)}),t}function Ut(n,e){const t=as(n,e);return(s,i,l)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?s:Reflect.get(K(t,i)&&i in s?t:s,i,l)}const fs={get:Ut(!1,!1)},hs={get:Ut(!1,!0)},ds={get:Ut(!0,!1)};const Z1=new WeakMap,Q1=new WeakMap,n0=new WeakMap,us=new WeakMap;function ps(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gs(n){return n.__v_skip||!Object.isExtensible(n)?0:ps(W0(n))}function Fe(n){return le(n)?n:Vt(n,!1,ls,fs,Z1)}function ms(n){return Vt(n,!1,os,hs,Q1)}function e0(n){return Vt(n,!0,rs,ds,n0)}function Vt(n,e,t,s,i){if(!X(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const l=i.get(n);if(l)return l;const r=gs(n);if(r===0)return n;const o=new Proxy(n,r===2?s:t);return i.set(n,o),o}function ue(n){return le(n)?ue(n.__v_raw):!!(n&&n.__v_isReactive)}function le(n){return!!(n&&n.__v_isReadonly)}function Cn(n){return!!(n&&n.__v_isShallow)}function Kt(n){return n?!!n.__v_raw:!1}function V(n){const e=n&&n.__v_raw;return e?V(e):n}function _s(n){return!K(n,"__v_skip")&&Object.isExtensible(n)&&L1(n,"__v_skip",!0),n}const cn=n=>X(n)?Fe(n):n,Ot=n=>X(n)?e0(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function ae(n){return ys(n,!1)}function ys(n,e){return tn(n)?n:new bs(n,e)}class bs{constructor(e,t){this.dep=new Bt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:V(e),this._value=t?e:cn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||Cn(e)||le(e);e=s?e:V(e),Jn(e,t)&&(this._rawValue=e,this._value=s?e:cn(e),this.dep.trigger())}}function wn(n){return tn(n)?n.value:n}const vs={get:(n,e,t)=>e==="__v_raw"?n:wn(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const i=n[e];return tn(i)&&!tn(t)?(i.value=t,!0):Reflect.set(n,e,t,s)}};function t0(n){return ue(n)?n:new Proxy(n,vs)}class xs{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Bt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Me-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&J!==this)return V1(this,!0),!0}get value(){const e=this.dep.track();return q1(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ss(n,e,t=!1){let s,i;return F(n)?s=n:(s=n.get,i=n.set),new xs(s,i,t)}const Ve={},Ge=new WeakMap;let se;function ws(n,e=!1,t=se){if(t){let s=Ge.get(t);s||Ge.set(t,s=[]),s.push(n)}}function Cs(n,e,t=z){const{immediate:s,deep:i,once:l,scheduler:r,augmentJob:o,call:a}=t,d=R=>i?R:Cn(R)||i===!1||i===0?Gn(R,1):Gn(R);let h,p,w,C,L=!1,H=!1;if(tn(n)?(p=()=>n.value,L=Cn(n)):ue(n)?(p=()=>d(n),L=!0):M(n)?(H=!0,L=n.some(R=>ue(R)||Cn(R)),p=()=>n.map(R=>{if(tn(R))return R.value;if(ue(R))return d(R);if(F(R))return a?a(R,2):R()})):F(n)?e?p=a?()=>a(n,2):n:p=()=>{if(w){Zn();try{w()}finally{Qn()}}const R=se;se=h;try{return a?a(n,3,[C]):n(C)}finally{se=R}}:p=Ln,e&&i){const R=p,Z=i===!0?1/0:i;p=()=>Gn(R(),Z)}const nn=X0(),k=()=>{h.stop(),nn&&nn.active&&$t(nn.effects,h)};if(l&&e){const R=e;e=(...Z)=>{R(...Z),k()}}let I=H?new Array(n.length).fill(Ve):Ve;const Y=R=>{if(!(!(h.flags&1)||!h.dirty&&!R))if(e){const Z=h.run();if(i||L||(H?Z.some((pn,xn)=>Jn(pn,I[xn])):Jn(Z,I))){w&&w();const pn=se;se=h;try{const xn=[Z,I===Ve?void 0:H&&I[0]===Ve?[]:I,C];a?a(e,3,xn):e(...xn),I=Z}finally{se=pn}}}else h.run()};return o&&o(Y),h=new B1(p),h.scheduler=r?()=>r(Y,!1):Y,C=R=>ws(R,!1,h),w=h.onStop=()=>{const R=Ge.get(h);if(R){if(a)a(R,4);else for(const Z of R)Z();Ge.delete(h)}},e?s?Y(!0):I=h.run():r?r(Y.bind(null,!0),!0):h.run(),k.pause=h.pause.bind(h),k.resume=h.resume.bind(h),k.stop=k,k}function Gn(n,e=1/0,t){if(e<=0||!X(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,tn(n))Gn(n.value,e,t);else if(M(n))for(let s=0;s<n.length;s++)Gn(n[s],e,t);else if(M1(n)||de(n))n.forEach(s=>{Gn(s,e,t)});else if(H1(n)){for(const s in n)Gn(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Gn(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function je(n,e,t,s){try{return s?n(...s):n()}catch(i){rt(i,e,t)}}function jn(n,e,t,s){if(F(n)){const i=je(n,e,t,s);return i&&I1(i)&&i.catch(l=>{rt(l,e,t)}),i}if(M(n)){const i=[];for(let l=0;l<n.length;l++)i.push(jn(n[l],e,t,s));return i}}function rt(n,e,t,s=!0){const i=e?e.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||z;if(e){let o=e.parent;const a=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const h=o.ec;if(h){for(let p=0;p<h.length;p++)if(h[p](n,a,d)===!1)return}o=o.parent}if(l){Zn(),je(l,null,10,[n,a,d]),Qn();return}}Ts(n,t,i,s,r)}function Ts(n,e,t,s=!0,i=!1){if(i)throw n;console.error(n)}const hn=[];let In=-1;const pe=[];let qn=null,fe=0;const s0=Promise.resolve();let Je=null;function Os(n){const e=Je||s0;return n?e.then(this?n.bind(this):n):e}function Es(n){let e=In+1,t=hn.length;for(;e<t;){const s=e+t>>>1,i=hn[s],l=He(i);l<n||l===n&&i.flags&2?e=s+1:t=s}return e}function kt(n){if(!(n.flags&1)){const e=He(n),t=hn[hn.length-1];!t||!(n.flags&2)&&e>=He(t)?hn.push(n):hn.splice(Es(e),0,n),n.flags|=1,i0()}}function i0(){Je||(Je=s0.then(r0))}function Ps(n){M(n)?pe.push(...n):qn&&n.id===-1?qn.splice(fe+1,0,n):n.flags&1||(pe.push(n),n.flags|=1),i0()}function o1(n,e,t=In+1){for(;t<hn.length;t++){const s=hn[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;hn.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function l0(n){if(pe.length){const e=[...new Set(pe)].sort((t,s)=>He(t)-He(s));if(pe.length=0,qn){qn.push(...e);return}for(qn=e,fe=0;fe<qn.length;fe++){const t=qn[fe];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}qn=null,fe=0}}const He=n=>n.id==null?n.flags&2?-1:1/0:n.id;function r0(n){try{for(In=0;In<hn.length;In++){const e=hn[In];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),je(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;In<hn.length;In++){const e=hn[In];e&&(e.flags&=-2)}In=-1,hn.length=0,l0(),Je=null,(hn.length||pe.length)&&r0()}}let $n=null,o0=null;function ze(n){const e=$n;return $n=n,o0=n&&n.type.__scopeId||null,e}function Rs(n,e=$n,t){if(!e||n._n)return n;const s=(...i)=>{s._d&&g1(-1);const l=ze(e);let r;try{r=n(...i)}finally{ze(l),s._d&&g1(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function ee(n,e,t,s){const i=n.dirs,l=e&&e.dirs;for(let r=0;r<i.length;r++){const o=i[r];l&&(o.oldValue=l[r].value);let a=o.dir[s];a&&(Zn(),jn(a,t,8,[n.el,o,n,e]),Qn())}}const As=Symbol("_vte"),Ds=n=>n.__isTeleport;function qt(n,e){n.shapeFlag&6&&n.component?(n.transition=e,qt(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function c0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Xe(n,e,t,s,i=!1){if(M(n)){n.forEach((L,H)=>Xe(L,e&&(M(e)?e[H]:e),t,s,i));return}if(Pe(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Xe(n,e,t,s.component.subTree);return}const l=s.shapeFlag&4?Xt(s.component):s.el,r=i?null:l,{i:o,r:a}=n,d=e&&e.r,h=o.refs===z?o.refs={}:o.refs,p=o.setupState,w=V(p),C=p===z?()=>!1:L=>K(w,L);if(d!=null&&d!==a&&(Q(d)?(h[d]=null,C(d)&&(p[d]=null)):tn(d)&&(d.value=null)),F(a))je(a,o,12,[r,h]);else{const L=Q(a),H=tn(a);if(L||H){const nn=()=>{if(n.f){const k=L?C(a)?p[a]:h[a]:a.value;i?M(k)&&$t(k,l):M(k)?k.includes(l)||k.push(l):L?(h[a]=[l],C(a)&&(p[a]=h[a])):(a.value=[l],n.k&&(h[n.k]=a.value))}else L?(h[a]=r,C(a)&&(p[a]=r)):H&&(a.value=r,n.k&&(h[n.k]=r))};r?(nn.id=-1,yn(nn,t)):nn()}}}st().requestIdleCallback;st().cancelIdleCallback;const Pe=n=>!!n.type.__asyncLoader,a0=n=>n.type.__isKeepAlive;function Ms(n,e){f0(n,"a",e)}function Is(n,e){f0(n,"da",e)}function f0(n,e,t=un){const s=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(ot(e,s,t),t){let i=t.parent;for(;i&&i.parent;)a0(i.parent.vnode)&&Fs(s,e,t,i),i=i.parent}}function Fs(n,e,t,s){const i=ot(e,n,s,!0);h0(()=>{$t(s[e],i)},t)}function ot(n,e,t=un,s=!1){if(t){const i=t[n]||(t[n]=[]),l=e.__weh||(e.__weh=(...r)=>{Zn();const o=Ne(t),a=jn(e,t,n,r);return o(),Qn(),a});return s?i.unshift(l):i.push(l),l}}const Vn=n=>(e,t=un)=>{(!Le||n==="sp")&&ot(n,(...s)=>e(...s),t)},Hs=Vn("bm"),Yt=Vn("m"),$s=Vn("bu"),Ls=Vn("u"),js=Vn("bum"),h0=Vn("um"),Ns=Vn("sp"),Ws=Vn("rtg"),Bs=Vn("rtc");function Us(n,e=un){ot("ec",n,e)}const Vs=Symbol.for("v-ndc");function xe(n,e,t,s){let i;const l=t,r=M(n);if(r||Q(n)){const o=r&&ue(n);let a=!1;o&&(a=!Cn(n),n=lt(n)),i=new Array(n.length);for(let d=0,h=n.length;d<h;d++)i[d]=e(a?cn(n[d]):n[d],d,void 0,l)}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,l)}else if(X(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,l));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,d=o.length;a<d;a++){const h=o[a];i[a]=e(n[h],h,a,l)}}else i=[];return i}const Et=n=>n?I0(n)?Xt(n):Et(n.parent):null,Re=sn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Et(n.parent),$root:n=>Et(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Gt(n),$forceUpdate:n=>n.f||(n.f=()=>{kt(n.update)}),$nextTick:n=>n.n||(n.n=Os.bind(n.proxy)),$watch:n=>h2.bind(n)}),_t=(n,e)=>n!==z&&!n.__isScriptSetup&&K(n,e),Ks={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:l,accessCache:r,type:o,appContext:a}=n;let d;if(e[0]!=="$"){const C=r[e];if(C!==void 0)switch(C){case 1:return s[e];case 2:return i[e];case 4:return t[e];case 3:return l[e]}else{if(_t(s,e))return r[e]=1,s[e];if(i!==z&&K(i,e))return r[e]=2,i[e];if((d=n.propsOptions[0])&&K(d,e))return r[e]=3,l[e];if(t!==z&&K(t,e))return r[e]=4,t[e];Pt&&(r[e]=0)}}const h=Re[e];let p,w;if(h)return e==="$attrs"&&on(n.attrs,"get",""),h(n);if((p=o.__cssModules)&&(p=p[e]))return p;if(t!==z&&K(t,e))return r[e]=4,t[e];if(w=a.config.globalProperties,K(w,e))return w[e]},set({_:n},e,t){const{data:s,setupState:i,ctx:l}=n;return _t(i,e)?(i[e]=t,!0):s!==z&&K(s,e)?(s[e]=t,!0):K(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(l[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:i,propsOptions:l}},r){let o;return!!t[r]||n!==z&&K(n,r)||_t(e,r)||(o=l[0])&&K(o,r)||K(s,r)||K(Re,r)||K(i.config.globalProperties,r)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:K(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function c1(n){return M(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Pt=!0;function ks(n){const e=Gt(n),t=n.proxy,s=n.ctx;Pt=!1,e.beforeCreate&&a1(e.beforeCreate,n,"bc");const{data:i,computed:l,methods:r,watch:o,provide:a,inject:d,created:h,beforeMount:p,mounted:w,beforeUpdate:C,updated:L,activated:H,deactivated:nn,beforeDestroy:k,beforeUnmount:I,destroyed:Y,unmounted:R,render:Z,renderTracked:pn,renderTriggered:xn,errorCaptured:Sn,serverPrefetch:Rn,expose:Nn,inheritAttrs:Kn,components:$,directives:O,filters:T}=e;if(d&&qs(d,s,null),r)for(const W in r){const U=r[W];F(U)&&(s[W]=U.bind(t))}if(i){const W=i.call(t,t);X(W)&&(n.data=Fe(W))}if(Pt=!0,l)for(const W in l){const U=l[W],Tn=F(U)?U.bind(t,t):F(U.get)?U.get.bind(t,t):Ln,kn=!F(U)&&F(U.set)?U.set.bind(t):Ln,ne=I2({get:Tn,set:kn});Object.defineProperty(s,W,{enumerable:!0,configurable:!0,get:()=>ne.value,set:An=>ne.value=An})}if(o)for(const W in o)d0(o[W],s,t,W);if(a){const W=F(a)?a.call(t):a;Reflect.ownKeys(W).forEach(U=>{Zs(U,W[U])})}h&&a1(h,n,"c");function j(W,U){M(U)?U.forEach(Tn=>W(Tn.bind(t))):U&&W(U.bind(t))}if(j(Hs,p),j(Yt,w),j($s,C),j(Ls,L),j(Ms,H),j(Is,nn),j(Us,Sn),j(Bs,pn),j(Ws,xn),j(js,I),j(h0,R),j(Ns,Rn),M(Nn))if(Nn.length){const W=n.exposed||(n.exposed={});Nn.forEach(U=>{Object.defineProperty(W,U,{get:()=>t[U],set:Tn=>t[U]=Tn})})}else n.exposed||(n.exposed={});Z&&n.render===Ln&&(n.render=Z),Kn!=null&&(n.inheritAttrs=Kn),$&&(n.components=$),O&&(n.directives=O),Rn&&c0(n)}function qs(n,e,t=Ln){M(n)&&(n=Rt(n));for(const s in n){const i=n[s];let l;X(i)?"default"in i?l=Ke(i.from||s,i.default,!0):l=Ke(i.from||s):l=Ke(i),tn(l)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):e[s]=l}}function a1(n,e,t){jn(M(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function d0(n,e,t,s){let i=s.includes(".")?O0(t,s):()=>t[s];if(Q(n)){const l=e[n];F(l)&&Ae(i,l)}else if(F(n))Ae(i,n.bind(t));else if(X(n))if(M(n))n.forEach(l=>d0(l,e,t,s));else{const l=F(n.handler)?n.handler.bind(t):e[n.handler];F(l)&&Ae(i,l,n)}}function Gt(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=n.appContext,o=l.get(e);let a;return o?a=o:!i.length&&!t&&!s?a=e:(a={},i.length&&i.forEach(d=>Ze(a,d,r,!0)),Ze(a,e,r)),X(e)&&l.set(e,a),a}function Ze(n,e,t,s=!1){const{mixins:i,extends:l}=e;l&&Ze(n,l,t,!0),i&&i.forEach(r=>Ze(n,r,t,!0));for(const r in e)if(!(s&&r==="expose")){const o=Ys[r]||t&&t[r];n[r]=o?o(n[r],e[r]):e[r]}return n}const Ys={data:f1,props:h1,emits:h1,methods:Ce,computed:Ce,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Ce,directives:Ce,watch:Js,provide:f1,inject:Gs};function f1(n,e){return e?n?function(){return sn(F(n)?n.call(this,this):n,F(e)?e.call(this,this):e)}:e:n}function Gs(n,e){return Ce(Rt(n),Rt(e))}function Rt(n){if(M(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function an(n,e){return n?[...new Set([].concat(n,e))]:e}function Ce(n,e){return n?sn(Object.create(null),n,e):e}function h1(n,e){return n?M(n)&&M(e)?[...new Set([...n,...e])]:sn(Object.create(null),c1(n),c1(e??{})):e}function Js(n,e){if(!n)return e;if(!e)return n;const t=sn(Object.create(null),n);for(const s in e)t[s]=an(n[s],e[s]);return t}function u0(){return{app:null,config:{isNativeTag:j0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zs=0;function Xs(n,e){return function(s,i=null){F(s)||(s=sn({},s)),i!=null&&!X(i)&&(i=null);const l=u0(),r=new WeakSet,o=[];let a=!1;const d=l.app={_uid:zs++,_component:s,_props:i,_container:null,_context:l,_instance:null,version:F2,get config(){return l.config},set config(h){},use(h,...p){return r.has(h)||(h&&F(h.install)?(r.add(h),h.install(d,...p)):F(h)&&(r.add(h),h(d,...p))),d},mixin(h){return l.mixins.includes(h)||l.mixins.push(h),d},component(h,p){return p?(l.components[h]=p,d):l.components[h]},directive(h,p){return p?(l.directives[h]=p,d):l.directives[h]},mount(h,p,w){if(!a){const C=d._ceVNode||Pn(s,i);return C.appContext=l,w===!0?w="svg":w===!1&&(w=void 0),p&&e?e(C,h):n(C,h,w),a=!0,d._container=h,h.__vue_app__=d,Xt(C.component)}},onUnmount(h){o.push(h)},unmount(){a&&(jn(o,d._instance,16),n(null,d._container),delete d._container.__vue_app__)},provide(h,p){return l.provides[h]=p,d},runWithContext(h){const p=ge;ge=d;try{return h()}finally{ge=p}}};return d}}let ge=null;function Zs(n,e){if(un){let t=un.provides;const s=un.parent&&un.parent.provides;s===t&&(t=un.provides=Object.create(s)),t[n]=e}}function Ke(n,e,t=!1){const s=un||$n;if(s||ge){const i=ge?ge._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&F(e)?e.call(s&&s.proxy):e}}const p0={},g0=()=>Object.create(p0),m0=n=>Object.getPrototypeOf(n)===p0;function Qs(n,e,t,s=!1){const i={},l=g0();n.propsDefaults=Object.create(null),_0(n,e,i,l);for(const r in n.propsOptions[0])r in i||(i[r]=void 0);t?n.props=s?i:ms(i):n.type.props?n.props=i:n.props=l,n.attrs=l}function n2(n,e,t,s){const{props:i,attrs:l,vnode:{patchFlag:r}}=n,o=V(i),[a]=n.propsOptions;let d=!1;if((s||r>0)&&!(r&16)){if(r&8){const h=n.vnode.dynamicProps;for(let p=0;p<h.length;p++){let w=h[p];if(ct(n.emitsOptions,w))continue;const C=e[w];if(a)if(K(l,w))C!==l[w]&&(l[w]=C,d=!0);else{const L=zn(w);i[L]=At(a,o,L,C,n,!1)}else C!==l[w]&&(l[w]=C,d=!0)}}}else{_0(n,e,i,l)&&(d=!0);let h;for(const p in o)(!e||!K(e,p)&&((h=oe(p))===p||!K(e,h)))&&(a?t&&(t[p]!==void 0||t[h]!==void 0)&&(i[p]=At(a,o,p,void 0,n,!0)):delete i[p]);if(l!==o)for(const p in l)(!e||!K(e,p))&&(delete l[p],d=!0)}d&&Un(n.attrs,"set","")}function _0(n,e,t,s){const[i,l]=n.propsOptions;let r=!1,o;if(e)for(let a in e){if(Te(a))continue;const d=e[a];let h;i&&K(i,h=zn(a))?!l||!l.includes(h)?t[h]=d:(o||(o={}))[h]=d:ct(n.emitsOptions,a)||(!(a in s)||d!==s[a])&&(s[a]=d,r=!0)}if(l){const a=V(t),d=o||z;for(let h=0;h<l.length;h++){const p=l[h];t[p]=At(i,a,p,d[p],n,!K(d,p))}}return r}function At(n,e,t,s,i,l){const r=n[t];if(r!=null){const o=K(r,"default");if(o&&s===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&F(a)){const{propsDefaults:d}=i;if(t in d)s=d[t];else{const h=Ne(i);s=d[t]=a.call(null,e),h()}}else s=a;i.ce&&i.ce._setProp(t,s)}r[0]&&(l&&!o?s=!1:r[1]&&(s===""||s===oe(t))&&(s=!0))}return s}const e2=new WeakMap;function y0(n,e,t=!1){const s=t?e2:e.propsCache,i=s.get(n);if(i)return i;const l=n.props,r={},o=[];let a=!1;if(!F(n)){const h=p=>{a=!0;const[w,C]=y0(p,e,!0);sn(r,w),C&&o.push(...C)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!l&&!a)return X(n)&&s.set(n,he),he;if(M(l))for(let h=0;h<l.length;h++){const p=zn(l[h]);d1(p)&&(r[p]=z)}else if(l)for(const h in l){const p=zn(h);if(d1(p)){const w=l[h],C=r[p]=M(w)||F(w)?{type:w}:sn({},w),L=C.type;let H=!1,nn=!0;if(M(L))for(let k=0;k<L.length;++k){const I=L[k],Y=F(I)&&I.name;if(Y==="Boolean"){H=!0;break}else Y==="String"&&(nn=!1)}else H=F(L)&&L.name==="Boolean";C[0]=H,C[1]=nn,(H||K(C,"default"))&&o.push(p)}}const d=[r,o];return X(n)&&s.set(n,d),d}function d1(n){return n[0]!=="$"&&!Te(n)}const b0=n=>n[0]==="_"||n==="$stable",Jt=n=>M(n)?n.map(Hn):[Hn(n)],t2=(n,e,t)=>{if(e._n)return e;const s=Rs((...i)=>Jt(e(...i)),t);return s._c=!1,s},v0=(n,e,t)=>{const s=n._ctx;for(const i in n){if(b0(i))continue;const l=n[i];if(F(l))e[i]=t2(i,l,s);else if(l!=null){const r=Jt(l);e[i]=()=>r}}},x0=(n,e)=>{const t=Jt(e);n.slots.default=()=>t},S0=(n,e,t)=>{for(const s in e)(t||s!=="_")&&(n[s]=e[s])},s2=(n,e,t)=>{const s=n.slots=g0();if(n.vnode.shapeFlag&32){const i=e._;i?(S0(s,e,t),t&&L1(s,"_",i,!0)):v0(e,s)}else e&&x0(n,e)},i2=(n,e,t)=>{const{vnode:s,slots:i}=n;let l=!0,r=z;if(s.shapeFlag&32){const o=e._;o?t&&o===1?l=!1:S0(i,e,t):(l=!e.$stable,v0(e,i)),r=e}else e&&(x0(n,e),r={default:1});if(l)for(const o in i)!b0(o)&&r[o]==null&&delete i[o]},yn=y2;function l2(n){return r2(n)}function r2(n,e){const t=st();t.__VUE__=!0;const{insert:s,remove:i,patchProp:l,createElement:r,createText:o,createComment:a,setText:d,setElementText:h,parentNode:p,nextSibling:w,setScopeId:C=Ln,insertStaticContent:L}=n,H=(c,f,u,_=null,g=null,m=null,x=void 0,v=null,b=!!f.dynamicChildren)=>{if(c===f)return;c&&!Se(c,f)&&(_=We(c),An(c,g,m,!0),c=null),f.patchFlag===-2&&(b=!1,f.dynamicChildren=null);const{type:y,ref:P,shapeFlag:S}=f;switch(y){case at:nn(c,f,u,_);break;case re:k(c,f,u,_);break;case ke:c==null&&I(f,u,_,x);break;case dn:$(c,f,u,_,g,m,x,v,b);break;default:S&1?Z(c,f,u,_,g,m,x,v,b):S&6?O(c,f,u,_,g,m,x,v,b):(S&64||S&128)&&y.process(c,f,u,_,g,m,x,v,b,ye)}P!=null&&g&&Xe(P,c&&c.ref,m,f||c,!f)},nn=(c,f,u,_)=>{if(c==null)s(f.el=o(f.children),u,_);else{const g=f.el=c.el;f.children!==c.children&&d(g,f.children)}},k=(c,f,u,_)=>{c==null?s(f.el=a(f.children||""),u,_):f.el=c.el},I=(c,f,u,_)=>{[c.el,c.anchor]=L(c.children,f,u,_,c.el,c.anchor)},Y=({el:c,anchor:f},u,_)=>{let g;for(;c&&c!==f;)g=w(c),s(c,u,_),c=g;s(f,u,_)},R=({el:c,anchor:f})=>{let u;for(;c&&c!==f;)u=w(c),i(c),c=u;i(f)},Z=(c,f,u,_,g,m,x,v,b)=>{f.type==="svg"?x="svg":f.type==="math"&&(x="mathml"),c==null?pn(f,u,_,g,m,x,v,b):Rn(c,f,g,m,x,v,b)},pn=(c,f,u,_,g,m,x,v)=>{let b,y;const{props:P,shapeFlag:S,transition:E,dirs:A}=c;if(b=c.el=r(c.type,m,P&&P.is,P),S&8?h(b,c.children):S&16&&Sn(c.children,b,null,_,g,yt(c,m),x,v),A&&ee(c,null,_,"created"),xn(b,c,c.scopeId,x,_),P){for(const G in P)G!=="value"&&!Te(G)&&l(b,G,null,P[G],m,_);"value"in P&&l(b,"value",null,P.value,m),(y=P.onVnodeBeforeMount)&&Mn(y,_,c)}A&&ee(c,null,_,"beforeMount");const N=o2(g,E);N&&E.beforeEnter(b),s(b,f,u),((y=P&&P.onVnodeMounted)||N||A)&&yn(()=>{y&&Mn(y,_,c),N&&E.enter(b),A&&ee(c,null,_,"mounted")},g)},xn=(c,f,u,_,g)=>{if(u&&C(c,u),_)for(let m=0;m<_.length;m++)C(c,_[m]);if(g){let m=g.subTree;if(f===m||P0(m.type)&&(m.ssContent===f||m.ssFallback===f)){const x=g.vnode;xn(c,x,x.scopeId,x.slotScopeIds,g.parent)}}},Sn=(c,f,u,_,g,m,x,v,b=0)=>{for(let y=b;y<c.length;y++){const P=c[y]=v?Yn(c[y]):Hn(c[y]);H(null,P,f,u,_,g,m,x,v)}},Rn=(c,f,u,_,g,m,x)=>{const v=f.el=c.el;let{patchFlag:b,dynamicChildren:y,dirs:P}=f;b|=c.patchFlag&16;const S=c.props||z,E=f.props||z;let A;if(u&&te(u,!1),(A=E.onVnodeBeforeUpdate)&&Mn(A,u,f,c),P&&ee(f,c,u,"beforeUpdate"),u&&te(u,!0),(S.innerHTML&&E.innerHTML==null||S.textContent&&E.textContent==null)&&h(v,""),y?Nn(c.dynamicChildren,y,v,u,_,yt(f,g),m):x||U(c,f,v,null,u,_,yt(f,g),m,!1),b>0){if(b&16)Kn(v,S,E,u,g);else if(b&2&&S.class!==E.class&&l(v,"class",null,E.class,g),b&4&&l(v,"style",S.style,E.style,g),b&8){const N=f.dynamicProps;for(let G=0;G<N.length;G++){const q=N[G],gn=S[q],ln=E[q];(ln!==gn||q==="value")&&l(v,q,gn,ln,g,u)}}b&1&&c.children!==f.children&&h(v,f.children)}else!x&&y==null&&Kn(v,S,E,u,g);((A=E.onVnodeUpdated)||P)&&yn(()=>{A&&Mn(A,u,f,c),P&&ee(f,c,u,"updated")},_)},Nn=(c,f,u,_,g,m,x)=>{for(let v=0;v<f.length;v++){const b=c[v],y=f[v],P=b.el&&(b.type===dn||!Se(b,y)||b.shapeFlag&70)?p(b.el):u;H(b,y,P,null,_,g,m,x,!0)}},Kn=(c,f,u,_,g)=>{if(f!==u){if(f!==z)for(const m in f)!Te(m)&&!(m in u)&&l(c,m,f[m],null,g,_);for(const m in u){if(Te(m))continue;const x=u[m],v=f[m];x!==v&&m!=="value"&&l(c,m,v,x,g,_)}"value"in u&&l(c,"value",f.value,u.value,g)}},$=(c,f,u,_,g,m,x,v,b)=>{const y=f.el=c?c.el:o(""),P=f.anchor=c?c.anchor:o("");let{patchFlag:S,dynamicChildren:E,slotScopeIds:A}=f;A&&(v=v?v.concat(A):A),c==null?(s(y,u,_),s(P,u,_),Sn(f.children||[],u,P,g,m,x,v,b)):S>0&&S&64&&E&&c.dynamicChildren?(Nn(c.dynamicChildren,E,u,g,m,x,v),(f.key!=null||g&&f===g.subTree)&&w0(c,f,!0)):U(c,f,u,P,g,m,x,v,b)},O=(c,f,u,_,g,m,x,v,b)=>{f.slotScopeIds=v,c==null?f.shapeFlag&512?g.ctx.activate(f,u,_,x,b):T(f,u,_,g,m,x,b):D(c,f,b)},T=(c,f,u,_,g,m,x)=>{const v=c.component=E2(c,_,g);if(a0(c)&&(v.ctx.renderer=ye),P2(v,!1,x),v.asyncDep){if(g&&g.registerDep(v,j,x),!c.el){const b=v.subTree=Pn(re);k(null,b,f,u)}}else j(v,c,f,u,g,m,x)},D=(c,f,u)=>{const _=f.component=c.component;if(m2(c,f,u))if(_.asyncDep&&!_.asyncResolved){W(_,f,u);return}else _.next=f,_.update();else f.el=c.el,_.vnode=f},j=(c,f,u,_,g,m,x)=>{const v=()=>{if(c.isMounted){let{next:S,bu:E,u:A,parent:N,vnode:G}=c;{const mn=C0(c);if(mn){S&&(S.el=G.el,W(c,S,x)),mn.asyncDep.then(()=>{c.isUnmounted||v()});return}}let q=S,gn;te(c,!1),S?(S.el=G.el,W(c,S,x)):S=G,E&&dt(E),(gn=S.props&&S.props.onVnodeBeforeUpdate)&&Mn(gn,N,S,G),te(c,!0);const ln=bt(c),On=c.subTree;c.subTree=ln,H(On,ln,p(On.el),We(On),c,g,m),S.el=ln.el,q===null&&_2(c,ln.el),A&&yn(A,g),(gn=S.props&&S.props.onVnodeUpdated)&&yn(()=>Mn(gn,N,S,G),g)}else{let S;const{el:E,props:A}=f,{bm:N,m:G,parent:q,root:gn,type:ln}=c,On=Pe(f);if(te(c,!1),N&&dt(N),!On&&(S=A&&A.onVnodeBeforeMount)&&Mn(S,q,f),te(c,!0),E&&e1){const mn=()=>{c.subTree=bt(c),e1(E,c.subTree,c,g,null)};On&&ln.__asyncHydrate?ln.__asyncHydrate(E,c,mn):mn()}else{gn.ce&&gn.ce._injectChildStyle(ln);const mn=c.subTree=bt(c);H(null,mn,u,_,c,g,m),f.el=mn.el}if(G&&yn(G,g),!On&&(S=A&&A.onVnodeMounted)){const mn=f;yn(()=>Mn(S,q,mn),g)}(f.shapeFlag&256||q&&Pe(q.vnode)&&q.vnode.shapeFlag&256)&&c.a&&yn(c.a,g),c.isMounted=!0,f=u=_=null}};c.scope.on();const b=c.effect=new B1(v);c.scope.off();const y=c.update=b.run.bind(b),P=c.job=b.runIfDirty.bind(b);P.i=c,P.id=c.uid,b.scheduler=()=>kt(P),te(c,!0),y()},W=(c,f,u)=>{f.component=c;const _=c.vnode.props;c.vnode=f,c.next=null,n2(c,f.props,_,u),i2(c,f.children,u),Zn(),o1(c),Qn()},U=(c,f,u,_,g,m,x,v,b=!1)=>{const y=c&&c.children,P=c?c.shapeFlag:0,S=f.children,{patchFlag:E,shapeFlag:A}=f;if(E>0){if(E&128){kn(y,S,u,_,g,m,x,v,b);return}else if(E&256){Tn(y,S,u,_,g,m,x,v,b);return}}A&8?(P&16&&_e(y,g,m),S!==y&&h(u,S)):P&16?A&16?kn(y,S,u,_,g,m,x,v,b):_e(y,g,m,!0):(P&8&&h(u,""),A&16&&Sn(S,u,_,g,m,x,v,b))},Tn=(c,f,u,_,g,m,x,v,b)=>{c=c||he,f=f||he;const y=c.length,P=f.length,S=Math.min(y,P);let E;for(E=0;E<S;E++){const A=f[E]=b?Yn(f[E]):Hn(f[E]);H(c[E],A,u,null,g,m,x,v,b)}y>P?_e(c,g,m,!0,!1,S):Sn(f,u,_,g,m,x,v,b,S)},kn=(c,f,u,_,g,m,x,v,b)=>{let y=0;const P=f.length;let S=c.length-1,E=P-1;for(;y<=S&&y<=E;){const A=c[y],N=f[y]=b?Yn(f[y]):Hn(f[y]);if(Se(A,N))H(A,N,u,null,g,m,x,v,b);else break;y++}for(;y<=S&&y<=E;){const A=c[S],N=f[E]=b?Yn(f[E]):Hn(f[E]);if(Se(A,N))H(A,N,u,null,g,m,x,v,b);else break;S--,E--}if(y>S){if(y<=E){const A=E+1,N=A<P?f[A].el:_;for(;y<=E;)H(null,f[y]=b?Yn(f[y]):Hn(f[y]),u,N,g,m,x,v,b),y++}}else if(y>E)for(;y<=S;)An(c[y],g,m,!0),y++;else{const A=y,N=y,G=new Map;for(y=N;y<=E;y++){const _n=f[y]=b?Yn(f[y]):Hn(f[y]);_n.key!=null&&G.set(_n.key,y)}let q,gn=0;const ln=E-N+1;let On=!1,mn=0;const be=new Array(ln);for(y=0;y<ln;y++)be[y]=0;for(y=A;y<=S;y++){const _n=c[y];if(gn>=ln){An(_n,g,m,!0);continue}let Dn;if(_n.key!=null)Dn=G.get(_n.key);else for(q=N;q<=E;q++)if(be[q-N]===0&&Se(_n,f[q])){Dn=q;break}Dn===void 0?An(_n,g,m,!0):(be[Dn-N]=y+1,Dn>=mn?mn=Dn:On=!0,H(_n,f[Dn],u,null,g,m,x,v,b),gn++)}const t1=On?c2(be):he;for(q=t1.length-1,y=ln-1;y>=0;y--){const _n=N+y,Dn=f[_n],s1=_n+1<P?f[_n+1].el:_;be[y]===0?H(null,Dn,u,s1,g,m,x,v,b):On&&(q<0||y!==t1[q]?ne(Dn,u,s1,2):q--)}}},ne=(c,f,u,_,g=null)=>{const{el:m,type:x,transition:v,children:b,shapeFlag:y}=c;if(y&6){ne(c.component.subTree,f,u,_);return}if(y&128){c.suspense.move(f,u,_);return}if(y&64){x.move(c,f,u,ye);return}if(x===dn){s(m,f,u);for(let S=0;S<b.length;S++)ne(b[S],f,u,_);s(c.anchor,f,u);return}if(x===ke){Y(c,f,u);return}if(_!==2&&y&1&&v)if(_===0)v.beforeEnter(m),s(m,f,u),yn(()=>v.enter(m),g);else{const{leave:S,delayLeave:E,afterLeave:A}=v,N=()=>s(m,f,u),G=()=>{S(m,()=>{N(),A&&A()})};E?E(m,N,G):G()}else s(m,f,u)},An=(c,f,u,_=!1,g=!1)=>{const{type:m,props:x,ref:v,children:b,dynamicChildren:y,shapeFlag:P,patchFlag:S,dirs:E,cacheIndex:A}=c;if(S===-2&&(g=!1),v!=null&&Xe(v,null,u,c,!0),A!=null&&(f.renderCache[A]=void 0),P&256){f.ctx.deactivate(c);return}const N=P&1&&E,G=!Pe(c);let q;if(G&&(q=x&&x.onVnodeBeforeUnmount)&&Mn(q,f,c),P&6)L0(c.component,u,_);else{if(P&128){c.suspense.unmount(u,_);return}N&&ee(c,null,f,"beforeUnmount"),P&64?c.type.remove(c,f,u,ye,_):y&&!y.hasOnce&&(m!==dn||S>0&&S&64)?_e(y,f,u,!1,!0):(m===dn&&S&384||!g&&P&16)&&_e(b,f,u),_&&Zt(c)}(G&&(q=x&&x.onVnodeUnmounted)||N)&&yn(()=>{q&&Mn(q,f,c),N&&ee(c,null,f,"unmounted")},u)},Zt=c=>{const{type:f,el:u,anchor:_,transition:g}=c;if(f===dn){$0(u,_);return}if(f===ke){R(c);return}const m=()=>{i(u),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:x,delayLeave:v}=g,b=()=>x(u,m);v?v(c.el,m,b):b()}else m()},$0=(c,f)=>{let u;for(;c!==f;)u=w(c),i(c),c=u;i(f)},L0=(c,f,u)=>{const{bum:_,scope:g,job:m,subTree:x,um:v,m:b,a:y}=c;u1(b),u1(y),_&&dt(_),g.stop(),m&&(m.flags|=8,An(x,c,f,u)),v&&yn(v,f),yn(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},_e=(c,f,u,_=!1,g=!1,m=0)=>{for(let x=m;x<c.length;x++)An(c[x],f,u,_,g)},We=c=>{if(c.shapeFlag&6)return We(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=w(c.anchor||c.el),u=f&&f[As];return u?w(u):f};let ft=!1;const Qt=(c,f,u)=>{c==null?f._vnode&&An(f._vnode,null,null,!0):H(f._vnode||null,c,f,null,null,null,u),f._vnode=c,ft||(ft=!0,o1(),l0(),ft=!1)},ye={p:H,um:An,m:ne,r:Zt,mt:T,mc:Sn,pc:U,pbc:Nn,n:We,o:n};let n1,e1;return{render:Qt,hydrate:n1,createApp:Xs(Qt,n1)}}function yt({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function te({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function o2(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function w0(n,e,t=!1){const s=n.children,i=e.children;if(M(s)&&M(i))for(let l=0;l<s.length;l++){const r=s[l];let o=i[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[l]=Yn(i[l]),o.el=r.el),!t&&o.patchFlag!==-2&&w0(r,o)),o.type===at&&(o.el=r.el)}}function c2(n){const e=n.slice(),t=[0];let s,i,l,r,o;const a=n.length;for(s=0;s<a;s++){const d=n[s];if(d!==0){if(i=t[t.length-1],n[i]<d){e[s]=i,t.push(s);continue}for(l=0,r=t.length-1;l<r;)o=l+r>>1,n[t[o]]<d?l=o+1:r=o;d<n[t[l]]&&(l>0&&(e[s]=t[l-1]),t[l]=s)}}for(l=t.length,r=t[l-1];l-- >0;)t[l]=r,r=e[r];return t}function C0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:C0(e)}function u1(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const a2=Symbol.for("v-scx"),f2=()=>Ke(a2);function Ae(n,e,t){return T0(n,e,t)}function T0(n,e,t=z){const{immediate:s,deep:i,flush:l,once:r}=t,o=sn({},t),a=e&&s||!e&&l!=="post";let d;if(Le){if(l==="sync"){const C=f2();d=C.__watcherHandles||(C.__watcherHandles=[])}else if(!a){const C=()=>{};return C.stop=Ln,C.resume=Ln,C.pause=Ln,C}}const h=un;o.call=(C,L,H)=>jn(C,h,L,H);let p=!1;l==="post"?o.scheduler=C=>{yn(C,h&&h.suspense)}:l!=="sync"&&(p=!0,o.scheduler=(C,L)=>{L?C():kt(C)}),o.augmentJob=C=>{e&&(C.flags|=4),p&&(C.flags|=2,h&&(C.id=h.uid,C.i=h))};const w=Cs(n,e,o);return Le&&(d?d.push(w):a&&w()),w}function h2(n,e,t){const s=this.proxy,i=Q(n)?n.includes(".")?O0(s,n):()=>s[n]:n.bind(s,s);let l;F(e)?l=e:(l=e.handler,t=e);const r=Ne(this),o=T0(i,l.bind(s),t);return r(),o}function O0(n,e){const t=e.split(".");return()=>{let s=n;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const d2=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${zn(e)}Modifiers`]||n[`${oe(e)}Modifiers`];function u2(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||z;let i=t;const l=e.startsWith("update:"),r=l&&d2(s,e.slice(7));r&&(r.trim&&(i=t.map(h=>Q(h)?h.trim():h)),r.number&&(i=t.map(V0)));let o,a=s[o=ht(e)]||s[o=ht(zn(e))];!a&&l&&(a=s[o=ht(oe(e))]),a&&jn(a,n,6,i);const d=s[o+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,jn(d,n,6,i)}}function E0(n,e,t=!1){const s=e.emitsCache,i=s.get(n);if(i!==void 0)return i;const l=n.emits;let r={},o=!1;if(!F(n)){const a=d=>{const h=E0(d,e,!0);h&&(o=!0,sn(r,h))};!t&&e.mixins.length&&e.mixins.forEach(a),n.extends&&a(n.extends),n.mixins&&n.mixins.forEach(a)}return!l&&!o?(X(n)&&s.set(n,null),null):(M(l)?l.forEach(a=>r[a]=null):sn(r,l),X(n)&&s.set(n,r),r)}function ct(n,e){return!n||!nt(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(n,e[0].toLowerCase()+e.slice(1))||K(n,oe(e))||K(n,e))}function bt(n){const{type:e,vnode:t,proxy:s,withProxy:i,propsOptions:[l],slots:r,attrs:o,emit:a,render:d,renderCache:h,props:p,data:w,setupState:C,ctx:L,inheritAttrs:H}=n,nn=ze(n);let k,I;try{if(t.shapeFlag&4){const R=i||s,Z=R;k=Hn(d.call(Z,R,h,p,C,w,L)),I=o}else{const R=e;k=Hn(R.length>1?R(p,{attrs:o,slots:r,emit:a}):R(p,null)),I=e.props?o:p2(o)}}catch(R){De.length=0,rt(R,n,1),k=Pn(re)}let Y=k;if(I&&H!==!1){const R=Object.keys(I),{shapeFlag:Z}=Y;R.length&&Z&7&&(l&&R.some(Ht)&&(I=g2(I,l)),Y=me(Y,I,!1,!0))}return t.dirs&&(Y=me(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(t.dirs):t.dirs),t.transition&&qt(Y,t.transition),k=Y,ze(nn),k}const p2=n=>{let e;for(const t in n)(t==="class"||t==="style"||nt(t))&&((e||(e={}))[t]=n[t]);return e},g2=(n,e)=>{const t={};for(const s in n)(!Ht(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function m2(n,e,t){const{props:s,children:i,component:l}=n,{props:r,children:o,patchFlag:a}=e,d=l.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return s?p1(s,r,d):!!r;if(a&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const w=h[p];if(r[w]!==s[w]&&!ct(d,w))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:s===r?!1:s?r?p1(s,r,d):!0:!!r;return!1}function p1(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let i=0;i<s.length;i++){const l=s[i];if(e[l]!==n[l]&&!ct(t,l))return!0}return!1}function _2({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const P0=n=>n.__isSuspense;function y2(n,e){e&&e.pendingBranch?M(n)?e.effects.push(...n):e.effects.push(n):Ps(n)}const dn=Symbol.for("v-fgt"),at=Symbol.for("v-txt"),re=Symbol.for("v-cmt"),ke=Symbol.for("v-stc"),De=[];let vn=null;function rn(n=!1){De.push(vn=n?null:[])}function b2(){De.pop(),vn=De[De.length-1]||null}let $e=1;function g1(n,e=!1){$e+=n,n<0&&vn&&e&&(vn.hasOnce=!0)}function R0(n){return n.dynamicChildren=$e>0?vn||he:null,b2(),$e>0&&vn&&vn.push(n),n}function fn(n,e,t,s,i,l){return R0(B(n,e,t,s,i,l,!0))}function v2(n,e,t,s,i){return R0(Pn(n,e,t,s,i,!0))}function A0(n){return n?n.__v_isVNode===!0:!1}function Se(n,e){return n.type===e.type&&n.key===e.key}const D0=({key:n})=>n??null,qe=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Q(n)||tn(n)||F(n)?{i:$n,r:n,k:e,f:!!t}:n:null);function B(n,e=null,t=null,s=0,i=null,l=n===dn?0:1,r=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&D0(e),ref:e&&qe(e),scopeId:o0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$n};return o?(zt(a,t),l&128&&n.normalize(a)):t&&(a.shapeFlag|=Q(t)?8:16),$e>0&&!r&&vn&&(a.patchFlag>0||l&6)&&a.patchFlag!==32&&vn.push(a),a}const Pn=x2;function x2(n,e=null,t=null,s=0,i=null,l=!1){if((!n||n===Vs)&&(n=re),A0(n)){const o=me(n,e,!0);return t&&zt(o,t),$e>0&&!l&&vn&&(o.shapeFlag&6?vn[vn.indexOf(n)]=o:vn.push(o)),o.patchFlag=-2,o}if(M2(n)&&(n=n.__vccOpts),e){e=S2(e);let{class:o,style:a}=e;o&&!Q(o)&&(e.class=Fn(o)),X(a)&&(Kt(a)&&!M(a)&&(a=sn({},a)),e.style=it(a))}const r=Q(n)?1:P0(n)?128:Ds(n)?64:X(n)?4:F(n)?2:0;return B(n,e,t,s,i,r,l,!0)}function S2(n){return n?Kt(n)||m0(n)?sn({},n):n:null}function me(n,e,t=!1,s=!1){const{props:i,ref:l,patchFlag:r,children:o,transition:a}=n,d=e?C2(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:d,key:d&&D0(d),ref:e&&e.ref?t&&l?M(l)?l.concat(qe(e)):[l,qe(e)]:qe(e):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==dn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:a,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&me(n.ssContent),ssFallback:n.ssFallback&&me(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return a&&s&&qt(h,a.clone(h)),h}function M0(n=" ",e=0){return Pn(at,null,n,e)}function w2(n,e){const t=Pn(ke,null,n);return t.staticCount=e,t}function we(n="",e=!1){return e?(rn(),v2(re,null,n)):Pn(re,null,n)}function Hn(n){return n==null||typeof n=="boolean"?Pn(re):M(n)?Pn(dn,null,n.slice()):A0(n)?Yn(n):Pn(at,null,String(n))}function Yn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:me(n)}function zt(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(M(e))t=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),zt(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!m0(e)?e._ctx=$n:i===3&&$n&&($n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:$n},t=32):(e=String(e),s&64?(t=16,e=[M0(e)]):t=8);n.children=e,n.shapeFlag|=t}function C2(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Fn([e.class,s.class]));else if(i==="style")e.style=it([e.style,s.style]);else if(nt(i)){const l=e[i],r=s[i];r&&l!==r&&!(M(l)&&l.includes(r))&&(e[i]=l?[].concat(l,r):r)}else i!==""&&(e[i]=s[i])}return e}function Mn(n,e,t,s=null){jn(n,e,7,[t,s])}const T2=u0();let O2=0;function E2(n,e,t){const s=n.type,i=(e?e.appContext:n.appContext)||T2,l={uid:O2++,vnode:n,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new z0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:y0(s,i),emitsOptions:E0(s,i),emit:null,emitted:null,propsDefaults:z,inheritAttrs:s.inheritAttrs,ctx:z,data:z,props:z,attrs:z,slots:z,refs:z,setupState:z,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=e?e.root:l,l.emit=u2.bind(null,l),n.ce&&n.ce(l),l}let un=null,Qe,Dt;{const n=st(),e=(t,s)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(s),l=>{i.length>1?i.forEach(r=>r(l)):i[0](l)}};Qe=e("__VUE_INSTANCE_SETTERS__",t=>un=t),Dt=e("__VUE_SSR_SETTERS__",t=>Le=t)}const Ne=n=>{const e=un;return Qe(n),n.scope.on(),()=>{n.scope.off(),Qe(e)}},m1=()=>{un&&un.scope.off(),Qe(null)};function I0(n){return n.vnode.shapeFlag&4}let Le=!1;function P2(n,e=!1,t=!1){e&&Dt(e);const{props:s,children:i}=n.vnode,l=I0(n);Qs(n,s,l,e),s2(n,i,t);const r=l?R2(n,e):void 0;return e&&Dt(!1),r}function R2(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ks);const{setup:s}=t;if(s){Zn();const i=n.setupContext=s.length>1?D2(n):null,l=Ne(n),r=je(s,n,0,[n.props,i]),o=I1(r);if(Qn(),l(),(o||n.sp)&&!Pe(n)&&c0(n),o){if(r.then(m1,m1),e)return r.then(a=>{_1(n,a,e)}).catch(a=>{rt(a,n,0)});n.asyncDep=r}else _1(n,r,e)}else F0(n,e)}function _1(n,e,t){F(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:X(e)&&(n.setupState=t0(e)),F0(n,t)}let y1;function F0(n,e,t){const s=n.type;if(!n.render){if(!e&&y1&&!s.render){const i=s.template||Gt(n).template;if(i){const{isCustomElement:l,compilerOptions:r}=n.appContext.config,{delimiters:o,compilerOptions:a}=s,d=sn(sn({isCustomElement:l,delimiters:o},r),a);s.render=y1(i,d)}}n.render=s.render||Ln}{const i=Ne(n);Zn();try{ks(n)}finally{Qn(),i()}}}const A2={get(n,e){return on(n,"get",""),n[e]}};function D2(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,A2),slots:n.slots,emit:n.emit,expose:e}}function Xt(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(t0(_s(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Re)return Re[t](n)},has(e,t){return t in e||t in Re}})):n.proxy}function M2(n){return F(n)&&"__vccOpts"in n}const I2=(n,e)=>Ss(n,e,Le),F2="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;const b1=typeof window<"u"&&window.trustedTypes;if(b1)try{Mt=b1.createPolicy("vue",{createHTML:n=>n})}catch{}const H0=Mt?n=>Mt.createHTML(n):n=>n,H2="http://www.w3.org/2000/svg",$2="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,v1=Bn&&Bn.createElement("template"),L2={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const i=e==="svg"?Bn.createElementNS(H2,n):e==="mathml"?Bn.createElementNS($2,n):t?Bn.createElement(n,{is:t}):Bn.createElement(n);return n==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:n=>Bn.createTextNode(n),createComment:n=>Bn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Bn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,i,l){const r=t?t.previousSibling:e.lastChild;if(i&&(i===l||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===l||!(i=i.nextSibling)););else{v1.innerHTML=H0(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const o=v1.content;if(s==="svg"||s==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}e.insertBefore(o,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},j2=Symbol("_vtc");function N2(n,e,t){const s=n[j2];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const x1=Symbol("_vod"),W2=Symbol("_vsh"),B2=Symbol(""),U2=/(^|;)\s*display\s*:/;function V2(n,e,t){const s=n.style,i=Q(t);let l=!1;if(t&&!i){if(e)if(Q(e))for(const r of e.split(";")){const o=r.slice(0,r.indexOf(":")).trim();t[o]==null&&Ye(s,o,"")}else for(const r in e)t[r]==null&&Ye(s,r,"");for(const r in t)r==="display"&&(l=!0),Ye(s,r,t[r])}else if(i){if(e!==t){const r=s[B2];r&&(t+=";"+r),s.cssText=t,l=U2.test(t)}}else e&&n.removeAttribute("style");x1 in n&&(n[x1]=l?s.display:"",n[W2]&&(s.display="none"))}const S1=/\s*!important$/;function Ye(n,e,t){if(M(t))t.forEach(s=>Ye(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=K2(n,e);S1.test(t)?n.setProperty(oe(s),t.replace(S1,""),"important"):n[s]=t}}const w1=["Webkit","Moz","ms"],vt={};function K2(n,e){const t=vt[e];if(t)return t;let s=zn(e);if(s!=="filter"&&s in n)return vt[e]=s;s=$1(s);for(let i=0;i<w1.length;i++){const l=w1[i]+s;if(l in n)return vt[e]=l}return e}const C1="http://www.w3.org/1999/xlink";function T1(n,e,t,s,i,l=J0(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(C1,e.slice(6,e.length)):n.setAttributeNS(C1,e,t):t==null||l&&!j1(t)?n.removeAttribute(e):n.setAttribute(e,l?"":Xn(t)?String(t):t)}function O1(n,e,t,s,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?H0(t):t);return}const l=n.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const o=l==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=j1(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(i||e)}function k2(n,e,t,s){n.addEventListener(e,t,s)}function q2(n,e,t,s){n.removeEventListener(e,t,s)}const E1=Symbol("_vei");function Y2(n,e,t,s,i=null){const l=n[E1]||(n[E1]={}),r=l[e];if(s&&r)r.value=s;else{const[o,a]=G2(e);if(s){const d=l[e]=X2(s,i);k2(n,o,d,a)}else r&&(q2(n,o,r,a),l[e]=void 0)}}const P1=/(?:Once|Passive|Capture)$/;function G2(n){let e;if(P1.test(n)){e={};let s;for(;s=n.match(P1);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):oe(n.slice(2)),e]}let xt=0;const J2=Promise.resolve(),z2=()=>xt||(J2.then(()=>xt=0),xt=Date.now());function X2(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;jn(Z2(s,t.value),e,5,[s])};return t.value=n,t.attached=z2(),t}function Z2(n,e){if(M(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const R1=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Q2=(n,e,t,s,i,l)=>{const r=i==="svg";e==="class"?N2(n,s,r):e==="style"?V2(n,t,s):nt(e)?Ht(e)||Y2(n,e,t,s,l):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ni(n,e,s,r))?(O1(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&T1(n,e,s,r,l,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Q(s))?O1(n,zn(e),s,l,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),T1(n,e,s,r))};function ni(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&R1(e)&&F(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return R1(e)&&Q(t)?!1:e in n}const ei=sn({patchProp:Q2},L2);let A1;function ti(){return A1||(A1=l2(ei))}const si=(...n)=>{const e=ti().createApp(...n),{mount:t}=e;return e.mount=s=>{const i=li(s);if(!i)return;const l=e._component;!F(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=t(i,!1,ii(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},e};function ii(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function li(n){return Q(n)?document.querySelector(n):n}const It={s1:[{name:"红色背景",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#c14949",n.fillRect(0,0,e,t)}},{name:"红色长条",strategy:(n,e,t,s,i)=>{n.fillStyle="red",n.globalCompositeOperation="destination-over",s.forEach(l=>{n.fillRect(l/24*e,0,e/24,t)})}}],s2:[{name:"紫色背景",id:"s21",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#d58585",n.fillRect(0,0,e,t)}}],s3:[{name:"蓝色进度条",id:"s31",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#8fb3f7",n.fillRect(e/3,t-t/10*s,e/3,t/10*s)}}],s4:[{name:"粉红进度条",id:"s41",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#ffd6e7",n.fillRect(e/3*2,t-t/10*s,e/3,t/10*s)}}],hh:[{name:"绿色进度条",id:"hh1",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#88ff8a",n.fillRect(0,t-t/10*s.length,e/3,t/10*s.length)}},{name:"绿色长条",strategy:(n,e,t,s,i)=>{n.fillStyle="#88ff8a",n.globalCompositeOperation="destination-over",s.forEach(l=>{n.fillRect(l/24*e,0,e/24,t)})}}],coner:[{name:"左上角大字",id:"coner1",strategy:(n,e,t,s,i)=>{n.font="50px gray",n.fillStyle="#2c2c2c",n.textBaseline="top",n.fillText(s[0],10,10)}}],memo:[{name:"左下角展示",id:"memo1",strategy:(n,e,t,s,i)=>{n.font="20px gray",n.fillStyle="black",n.textBaseline="bottom",n.fillText(s,10,t-10)}}],detail:[{name:"粉红badge",id:"detail1",strategy:(n,e,t,s,i)=>{}}]},ri={s1:"大发",s2:"大发不抽",s3:"小发",s4:"轻微发",hh:"恍惚",coner:"事件",memo:"备注",detail:"详情"},D1={s1:0,s2:0,s3:0,s4:0,hh:0,coner:0,memo:0,detail:0},oi={class:"record"},ci={__name:"Record",props:{record:Object,strategy:Object},setup(n){const e=n;let t,s,i,l;return Yt(()=>{s=t.getContext("2d"),i=t.width,l=t.height,Ae(e,()=>{if(e.record&&e.strategy&&s){s.clearRect(0,0,i,l);for(let r in e.record)e.strategy[r]!==-1&&It[r][e.strategy[r]].strategy&&It[r][e.strategy[r]].strategy(s,i,l,e.record[r],e.strategy)}},{deep:!0,immediate:!0})}),(r,o)=>(rn(),fn("div",oi,[B("canvas",{ref:a=>tn(t)?t.value=a:t=a,width:"240",height:"148.32"},null,512)]))}},ai={"2024-02-04":{s1:[7],detail:`2月4号 7点（自己烧饭之类的，不开心？）尿了？
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
身体向左转，可能是想向门外求救，嘴里有血， 白天是去了一妇婴看乳腺，并且小哈前一天哮喘晚上闹，没睡好。`},"2024-04-17":{s3:1,hh:[2,3,4],detail:`4月17号 2：17 前兆，没发作
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
（5点14被‘我拿充电线碰到巧虎掉下来’惊醒，问我有没有发作，并且记得昨晚鬼压床，还说本以为中药吃了会好，意识挺清楚的）`},"2024-07-14":{s1:[15],detail:"7.14 发作，下午14.52微信跟我说的，尿尿，他爸妈说5分钟，瞎说"},"2024-07-22":{memo:"摔跤, 破伤风?"},"2024-07-25":{hh:[11,12,13,14,23],detail:`（7月25 23点50 恍惚小发作）白天发作多次，失忆一点，正好跟我聊天，忘记自己摔跤请假
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
看了监控，左半边脸假笑，查了半天资料，破伤风概率不大，并且死亡率不高。现在是3点32，她醒了多次，但看起来问题不大`},"2024-07-31":{s1:[1],s3:3,s4:1,hh:[1,13,1,20,23],detail:`7月31日 0点29分44秒发作 30分44秒，抽搐60秒，结束，36呼吸正常
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
（23点47 睡眠中小发作醒）`},"2024-08-01":{coner:["中医","第三次去苏州"],s3:1,hh:[12,16,22],detail:`这天其实发了很多次, 但是当时没注意, 回上海的时候, 都不记得去的路上经过的车站之类的
8月1日了 （第三次苏州）
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
前一天的表现是：翻来翻去，说一个动作人就酸`},"2024-08-14":{hh:[9,10,11,12,13,14,15,16],coner:["奥1","奥卡西平晚上开始吃150"],detail:`从聊天记录来看, 这天恍惚发作得非常多, 详情要去看聊天记录了
～接发作的第二天早上（8月14日，上班的）想呕吐，说是从胃来的不舒服，中午说又又做梦恍惚的感觉了，但是不像上次那么重
下午搞不清上下午
下午4点，又有做梦加恶心感觉，还感觉上现在是上午

～从罗南回家路上恍惚，大概是9点左右
～同一天晚上 （8月14日22点56分）快入睡，小哈哄睡中，有点声音，触发 砸吧嘴的海马小发作，具体没仔细问，想让他快点睡`},"2024-08-15":{hh:[10,15,16,17,19,22,23],detail:`自己说上班开错园区的入口了，因为在犹豫停车场的位置
10点32 描述不出的不舒服，追问后还是熟悉感做梦感
11点42 轻度想吐
下午2点55，3点50，4点07，都是恍惚，“梦里有过”，或者“昨天有过”的感觉
下午5点，背酸
下午7点10左右，想吐想拉屎恍惚
晚22点16 恍惚想吐`},"2024-08-16":{hh:[15],s3:1,s4:3,detail:`14点55小恍惚
14点13背疼加重，呼吸就疼，靠背也疼
22点左右，晚上手有点热，在罗南哄小哈睡，好像前一天也有过
23点47，耳朵顶顶顶，不明显
0点06，耳鸣，短暂，通过吸气解决的
半夜小麻，感觉有人，左半边，没到眼睛，恢复速度比以前快，翻身触发的麻`},"2024-08-17":{coner:["奥2","奥卡西平晚上开始吃300"],s3:1,detail:"23点53麻 ，大概是23点30不说话睡的，比昨晚轻，感觉有人，没到眼睛，都比昨天轻"},"2024-08-18":{s4:3,s3:1,hh:[12,18],detail:`11.52 熟悉感，没恍惚和胃气上升
18.13 熟悉感，同上
23点左右哄小哈的时候手有点涨，说不太清
03分麻，感觉有人，没到眼睛，时间变长了，23点45带小哈出去才入睡的`},"2024-08-19":{s3:1,s4:1,detail:`早上8.09 熟悉感，没恍惚，再陪小哈吃早饭
16点43 头撞了一下电脑
23点22 小麻，感觉有人，没到眼睛，时间和上次差不多，程度差不多，先有人再觉得麻`},"2024-08-20":{coner:["奥3","奥卡西平晚上开始吃450"],hh:[23],s4:1,detail:`16.43耳朵有描述不了的节奏，不厉害，说之前一直有
0.09分熟悉感，和小哈吵架吵醒了，0.09开始准备睡觉`},"2024-08-21":{s3:1,s4:11,hh:[16],detail:`7.30小麻
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
半夜不严重的小麻，比较快，还没开始就结束，在等开始的时候结束的`},"2024-08-23":{s4:8,hh:[16],detail:`10.30 手烫涨
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
早上麻一次，没到眼睛`},"2024-09-01":{detail:"皮疹，口腔溃疡"},"2024-09-02":{hh:[3,10,12,13,14,16,17,18,19,20],detail:`2.48 半夜有害怕和不舒服，眨双眼，过程一分钟不到
9.45 2次，单位上厕所前后，熟悉感，梦境感，很快忘记，想吐，十几秒
12.12 熟悉，梦境，想吐，想拉，随着拉屎感觉消失恢复，大概20秒
13.26 同上，持续30秒
16.15
16.20
16.30
16.40
17.26
18.24
19.51 2分钟，刚吃完饭，在天街，不知道为什么在这里，不知道自己有没有上班 “医生类型的人，然后说不了了，有很多信息，说不了”，刚才的感觉像做梦`},"2024-09-03":{s3:1,hh:[11,12,13,14,15,16,19,20,22],detail:`睡觉的时候可能有发，但记不清了
11.29 熟悉，梦境，想吐，拉屎，回忆混乱
12.33 熟悉，耳鸣
13.12
14.16
15.49 看视频，连续不舒服
16.53 熟悉加发麻
18.37
19.20 19.24恢复 不知道周末去哪儿了，之前知道
19.45 麻加眼睛跳
22.34 想吐，熟悉感`},"2024-09-04":{memo:"起床失忆, 恍惚发作第三天, 周三",s3:1,hh:[9,11,12,13,14,15,16,18,20,21,22],detail:`前面一天药晚吃一小时
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
22.26 同上 还能回微信 29分好`},"2024-09-05":{hh:[10,11,12,15,19,18],s4:1,detail:`起床失忆，惊讶今天周四，觉得昨天看病很远，像做梦，觉得昨晚拿衣服像2，3天前
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
21.45`},"2024-09-09":{memo:"开始觉得脆弱, 后觉得和发作有联系",s3:1,s4:11,hh:[17],detail:`8.37
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
21.40 头晕，和以前营养不良一样，感觉不是病`},"2024-09-27":{memo:"恍惚发作第三次",s4:3,hh:[8,16,17,19,20,22,23],detail:`8.02 不舒服，和昨晚一样
16.05 恍惚发作 程度大，想吐，难受，场景，梦里场景，毛孔竖起来 17分说放空，不真实，熟悉感
17.12 恍惚，想吐，说是2秒，紧张，心跳快
17.37 手涨
19.06 想吐 恍惚，是下班路上，忘记要回哪里了
19.40 恍惚 卢广仲电视剧，以前做过梦，自己在里面，45分才‘回到世界’
今天恍惚后 记忆测试：20.41 感觉还行
20.45 后脑勺发凉
21.05 手涨
22.04 洗澡出来说恍惚了一次
23.26 左手涨烫，紧接着恍惚`},"2024-09-28":{s4:6,hh:[11,12,14,20],detail:`这天的行程是去罗南, 和外婆油天地醉美里, 再美兰西湖公园, 再美兰湖商场
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
23.00 手涨`},"2024-09-29":{coner:["左500+医院","第四次去虹桥, 左乙拉西坦晚上加250"],s4:9,s3:1,hh:[11,12],detail:`09.28 感觉是血糖低的晕
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
22.20 烫`},"2024-10-13":{s4:8,hh:[11],detail:`11.23 熟悉感
11.46 涨
13.04 风凉
13.14 烫
记性不太好，10月3号的事情记得不清楚
18.48 烫
18.54 
21.02
21.29
21.38`},"2024-10-14":{hh:[10,16,18],s4:7,detail:`蚊子多，所以恍惚了？
10.36 恍惚发作
11.53 后脑勺风凉
13.11 烫
13.51 烫
15.54 手风凉
16.32 恍惚，知道小哈16.10睡觉，知道下午帮我打了科目三
18.30 恍惚
晚上 烫2次`},"2024-10-15":{coner:["医院","第五次医院, 总院"],s3:1,s4:13,hh:[9],detail:`09.00 恍惚 梦境，呕吐 在去医院的路上，长乐路，1分钟恢复，08分还有一点
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
睡醒麻到眼睛`},"2024-10-16":{s4:2,hh:[18],detail:`16.16 手指风凉
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
23.15 烫到小手臂`},"2024-10-21":{s3:1,s4:7,hh:[9],detail:`早晚各一次麻到眼睛，时间久，早上是先失重，飘了一会
08.39 呕吐，拉屎，恍惚，1，2秒短暂的梦境感，前一天太累了，海上世界宝乐汇吵架
11.09 手指尖发凉
11.36 同上
12.52 同上
14.09 同上
14.20 同上
15.05 同上
17.56 同上
晚上失重加飘，ureshi了`},"2024-10-22":{hh:[11],s3:1,s4:2,detail:`11.02 到11.05 恍惚 呕吐，但是不严重
13.40 太阳穴风凉
16.40 手风凉
早上5点 小麻 到眼睛`},"2024-10-23":{coner:["涨+开浦兰","持续型的涨, 晚上开始吃开浦兰"],s4:6,hh:[19,20],detail:`13.05 小指涨麻，和平时不太一样，已经2次了，一次到手腕
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
23.32`},"2024-10-25":{s3:1,hh:[],s4:6,detail:`03.27手烫2次，到手腕，小哈23点开始看电视的
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
00.16 同上`},"2024-10-29":{hh:[20],s3:1,s4:3,detail:`16.53 手背凉
20.20 恍惚 想拉屎
22.40 后脑勺凉
23.10 手烫`},"2024-10-30":{s3:1,s4:4,hh:[19],detail:`早晚各麻一次，自己认为轻，早上是翻身导致的
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
半夜麻过`},"2024-11-03":{memo:"去无锡第二天失忆严重",s4:2,hh:[9,15],s3:1,detail:`睡前听到她呼吸很响，觉得是太累了，也应该是因为累
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
睡前小麻`},"2024-11-10":{memo:"恍惚发作开始, 没以前严重",s3:1,s4:3,hh:[21],detail:`08.18 睡着前小麻
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
半夜醒了后翻身小麻了`},"2024-11-12":{s4:7,hh:[23],detail:`13.45 手风凉
18.27 烫
18.45 涨
19.14 涨
21.31 风凉
23.03 烫
23.29 烫
半夜有一次恍惚`},"2024-11-13":{hh:[9,14,18,21],s4:3,detail:`09.14 到单位，说路上恍惚了，时间比较长，所有症状都有，有无法描述，梦境感，熟悉感久
分析后，觉得昨天的事模糊，其他还好
11.27 手烫
14.14 恍惚，自己描述“非常难受”，18分描述，一直有点麻，对周围环境陌生，不记得上午搬位子的事，问小熊在哪里，20分说发作结束了，说刚才不知道自己在哪里，不知道上下午
18.09 恍惚，14确认好了，觉得下午的事是假的，和下午差不多厉害，有梦境，熟悉感没有，不知道是不是换过位子了
18.37 手风凉
19.46 烫
20.44 我洗澡回来，在恍惚，程度看起来一般`},"2024-11-14":{hh:[9,14,18],s4:4,s3:2,detail:`09.49 恍惚，梦境，拉屎，吐
14.54 恍惚
15.45 手风凉
18.06 恍惚，做梦，1分钟内好了
22.40 烫2次
23.32 烫
早晚各一次小麻，比较厉害，早上一次是6点打蚊子以后，说可能流口水了`},"2024-11-15":{hh:["???","???"],s3:1,s4:1,detail:`12.12 恍惚，自己说比昨天轻
17.15 手烫
21.16 恍惚，17分结束
23.29 小麻 快睡了
早上小麻`},"2024-11-16":{hh:[12,21],s4:9,s3:2,detail:`和小婷一起过生日, 吃了一绪, 玩了美兰湖的商场和公园
08.56 恍惚
20.52 涨2次
20.55
21.00 烫，我摸了好像是物理的
21.40 左手麻，转风凉
21.54 涨
22.41 风凉
00.49 左手烫2次了，今天睡得晚了
半夜麻一次，早上一次，早上比较轻
最近开始有“有人”的感觉`},"2024-11-17":{coner:["奥600","奥卡西平加了150bid"],s4:8,hh:[20],detail:`今天早上开始多吃150奥卡西平
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
半夜麻了0次，睡醒麻了0次`,hh:[13],s3:0,s4:7},"2024-11-19":{detail:`15:58左耳朵上面风凉
16:48 涨/烫/风凉
17:05 恍惚, 比昨天厉害
19:18 涨/烫/风凉
20:09 涨/烫/风凉
21.19 风凉，在看电视
21.41 风凉，在看电视
21.47 轻微恍惚
22.47 整个右臂麻了, 算小麻
半夜麻了0次，睡醒麻了0次`,hh:[15,16],s3:2,s4:6},"2024-11-20":{detail:`14:04 涨/烫/风凉
18:05 涨/烫/风凉
半夜麻0了次，睡醒麻了1次`,hh:[],s3:1,s4:2},"2024-11-21":{detail:`今天恍惚比较严重, 有”困”的感觉, 不确定是先兆, 恍惚前在玩卡丁车和spacegarden, 前一天接小哈回来. 
但根据历史看, 又不完全和screentime有关系.(卡丁车肯定是累的)
09:00恍惚，程度普通
10:33 涨/烫/风凉
10.44 恍惚严重, 持续的熟悉感, 非常想吐, 问了昨晚羽毛球和今天早饭, 问题不大
11点半睡着了，睡到13点一刻
14:08纯想吐（比较轻的恍惚）
15.00 恍惚，熟悉感和梦境感严重，但比早上轻和短
半夜麻了0次，睡醒麻了0次`,hh:[9,10,11,13],s3:0,s4:1},"2024-11-22":{detail:`10:35 涨/烫/风凉
11:35 涨/烫/风凉
14:21 涨/烫/风凉
14:44 耳朵风凉
14:52 涨/烫/风凉
今天大扫除了，晚上，到11点了
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:5},"2024-11-23":{detail:`17:45 涨/烫/风凉
20:41 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2024-11-24":{detail:`15:12 涨/烫/风凉
19.45 涨/烫/风凉
下午开始好像不太精神
半夜麻了1次，睡醒麻了1次`,hh:[],s3:2,s4:2},"2024-11-25":{detail:`早上的小麻感觉有人，眼镜跳
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2024-11-26":{detail:`10:43 涨/烫/风凉
11:18 涨/烫/风凉
12:03 涨/烫/风凉
14:13 涨/烫/风凉
14:30 涨/烫/风凉
19:39 涨/烫/风凉
21:06 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:7},"2024-11-27":{detail:`16:58 涨/烫/风凉
19:39 涨/烫/风凉
20:19 涨/烫/风凉
21:54 涨/烫/风凉
22:01 失重
22:09 失重
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:6},"2024-11-28":{detail:`11:12 涨/烫/风凉
19:16 涨/烫/风凉
有一次轻微的感觉不对，这次算作轻微发
半夜麻了0次，睡醒麻了0次`,hh:[11],s3:0,s4:2},"2024-11-29":{detail:`10:36恍惚，梦境感，但没想吐和拉屎
13:44 涨/烫/风凉
15.00 恍惚，梦境感
16:54 涨/烫/风凉
20:17恍惚，梦境，想吐，21分好，不知道为什么手上电脑，是谁的，不知道时间，有没有上班，刚才的事（指发作前几分钟）觉得很远，大概早上或者昨天，发作时的事不真实
半夜2点有说回他，早上问说不知道有没有发，但知道早上眼睛跳了
半夜麻了0次，睡醒麻了1次`,hh:[2,10,13],s3:1,s4:2},"2024-11-30":{memo:"恍惚严重发作第四次",detail:`19:24 恍惚严重（事后记忆还行）, 梦境感, 有想吐, 头好晕, 28了还在发, 29分, 人笑了, 问了是主动笑的, 说感觉很神奇(这种感受), 30分问话不回答了, 30分:51秒 问有没有拉屎感说没了, 说不知道礼拜几, 32分: 我问恍惚过了吗, 他说没恍惚过, 问我刚才是恍惚了吗, 问我是不是刚从罗南回来, 其实不是, 下午家里呆了一下午
问我下午有没有睡过觉, 因为感觉有梦到一些剧情
35分, 说出礼拜六了, 问我们白天在哪里, 自己回忆了一点东西, 都是正确的, 但感觉不真实

20.41 恍惚, “难受”, 44: 恶心的感觉没有了, 45分问, “电脑是我带回来的吗? 今天礼拜几?感觉像做了很多梦, 不知道之前干什么了” 46: 不知道自己恍惚了, 48: 我让他现在吃药, 他问我吃什么药, 我问了知道生病吗, 说知道.49:又问了我自己睡过觉没, 上一次发作问了3次, 51分, 问有没有做梦, 看到电脑问为什么有2个电脑, 54分问我为什么他要把电脑带回家

(不知道这2次是不是因为在做斐波那契数列, 下午因为comfyui搞不清教点基础, 偶然从递归弄到斐波那契数列他一下午没做出)
21.43忘记和小婷吃了什么
22:47 涨/烫/风凉

0.54 说了很短一句话
半夜麻了1次，睡醒麻了0次`,hh:[19,22],s3:1,s4:1},"2024-12-01":{detail:`09:20 恍惚, 说”平时也会这样, 平时是身上”发怵”, 现在是上半身”发怵””, 24恶心的感觉没了
17:23 恍惚，梦境感，想大便，想吐，24说发好了
21:17想拉屎，想吐，后背后脑勺下半部分风凉，熟悉感，梦境感，19分梦境感熟悉感明显。20分问有没有梦境中的梦境。21分好了
00.14 失重麻
1.30左右 右脚抽动多次
半夜麻了0次，睡醒麻了0次`,hh:[9,17,21],s3:1,s4:0},"2024-12-02":{detail:`09:20上班路上恍惚，估计9.15吧
13.08 睡醒想吐，头疼，短暂
半夜麻了0次，睡醒麻了0次`,hh:[9],s3:1,s4:0},"2024-12-03":{detail:`22:18 涨/烫/风凉
23:50 涨/烫/风凉
00:00失重，左边麻，手比较明显，没到眼睛
半夜麻了1次，睡醒麻了0次`,hh:[],s3:2,s4:2},"2024-12-04":{detail:`17:35 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:1,s4:1},"2024-12-05":{detail:`10:28 涨/烫/风凉
12.39 左耳有叮叮叮声音 不太响 持续5分钟以上
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2024-12-06":{detail:`11:48 涨/烫/风凉
13:19 涨/烫/风凉
16:41 涨/烫/风凉
19:50 涨/烫/风凉 2次
睡前和半夜都失重感觉有人，时间长。晚上和小哈疯，眼睛过敏眼皮肿起来，不知道有没有关系
半夜麻了2次，睡醒麻了0次`,hh:[],s3:2,s4:5},"2024-12-07":{detail:`17:05 涨/烫/风凉
19:16 涨/烫/风凉
20:12 涨/烫/风凉
20:24 涨/烫/风凉
晚上麻了2次，一次到眼睛，自己记得不清了，大概是因为累，睡得深，白天去浦东吃翠花，很累，睡的也很晚，12点半，我和小哈4点多睡的
半夜麻了2次，睡醒麻了0次`,hh:[],s3:2,s4:4},"2024-12-08":{detail:`14:15 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:1},"2024-12-09":{detail:`12:17 涨/烫/风凉
14:07 涨/烫/风凉
00:18 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2024-12-10":{hh:[9],detail:`上班或者下班路上有呕吐的感觉, 但是没恍惚
10:25 涨/烫/风凉
16:39 涨/烫/风凉
20:52 涨/烫/风凉
21:01 涨/烫/风凉 2次
21:44 涨/烫/风凉
21:47 涨/烫/风凉
21:19 涨/烫/风凉
22:50 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,s3:0,s4:9},"2024-12-11":{detail:`10:53 涨/烫/风凉
11:49 恍惚 梦境感 程度一般
14:30 涨/烫/风凉
15:09 涨/烫/风凉
15:42 涨/烫/风凉
16:12 涨/烫/风凉
16:45 恍惚, 梦境, 想吐, 不能描述, “非常难受”. 16.49 发作结束
16:21 涨/烫/风凉
21:00 涨/烫/风凉
22:30 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:[11,16],s3:1,s4:8},"2024-12-12":{detail:`11:51 恍惚, 熟悉, 梦境, 想拉屎, 想吐. 53分 呕吐感好了. 55分 “有一瞬间感觉脑子恢复了, 思维上的恢复, 有觉得他国这个障碍的感觉” 这个我判断也是发作的症状, 因为恢复不会”一下子”, 然后他说感觉还没完全恢复, 头热.
21:08 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[11],s3:0,s4:1},"2024-12-13":{detail:`12.03 恍惚，梦境，想拉屎，时间短，自己说1分钟好了
22:16 涨/烫/风凉
23.41 小麻
半夜麻了0次，睡醒麻了0次`,hh:[22],s3:1,s4:3},"2024-12-14":{detail:`10:52 涨/烫/风凉
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
半夜麻了0次，睡醒麻了0次`,hh:[0,10],s3:0,s4:9},"2024-12-15":{detail:`18:57 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2024-12-16":{detail:`22:33 涨/烫/风凉
23:17 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2024-12-17":{detail:`09:48 涨/烫/风凉
17:25 涨/烫/风凉
19:30 涨/烫/风凉
23:49轻微恍惚
早上起来 耳朵嗡嗡，失重，麻，时间久，没到眼睛。 这几天睡觉都非常晚，当天小哈是3点硬要躺他身上睡着的
半夜麻了0次，睡醒麻了1次`,hh:[],s3:1,s4:4},"2024-12-18":{detail:`11:32 涨/烫/风凉
13:10 涨/烫/风凉
00:03 涨/烫/风凉
01.39 说睡前麻过，小哈还没睡现在
麻到眼睛了，第二天看视频有脆弱，热泪盈眶了
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:3},"2024-12-19":{detail:`15:15 涨/烫/风凉
15:30 涨/烫/风凉
20:03 涨/烫/风凉
20:10 轻微恍惚
20:18 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:5},"2024-12-20":{coner:["医院","第六次医院, 虹桥"],detail:`10:47 涨/烫/风凉
这次做脑电图涨烫了，但是脑电图正常
14:35恍惚，梦境感，跟他说话梦境感很足，刚看完医生，难受，吃完一绪，在七宝万科，37，想吐和拉屎好一点了。梦境感还有一点。38，恢复了。
14:53 涨/烫/风凉
19:49 涨/烫/风凉
看了圈嘻嘻老公热泪盈眶
01:30左边整条腿麻
早晚各一次，都到眼睛，看病累加睡得晚
半夜麻了1次，睡醒麻了1次`,hh:[1],s3:3,s4:3},"2024-12-21":{coner:["左750","今天早上开始加了半粒开浦兰bid"],detail:`今天早上开始加左乙拉西坦
08:42有比较弱的梦境感，没有想吐
12:51 涨/烫/风凉
19:07恍惚
19.38 恍惚，去天街吃烤鱼路上推小哈，想吐，想大便，中等程度
20:35 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:[8,12,19],s3:1,s4:2},"2024-12-22":{detail:`08:54想吐，这次熟悉感重，梦境感轻，“和平时不一样”
20:43 涨/烫/风凉
22:32 轻微恍惚
23:31 失重，有点飘，说话有回声，左边麻，有奇怪的感觉，可能算熟悉感，35好
半夜麻了1次，睡醒麻了0次`,hh:[8],s3:1,s4:2},"2024-12-23":{detail:`10:18 轻微恍惚
17:57 回家路上轻微恍惚
21:51 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2024-12-24":{detail:`15:53 左耳一直叮叮叮
16:37 持续叮叮叮 感受了就会有
19.00 从外婆家回潘广路泪流满面
23:49 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:3},"2024-12-25":{detail:`昨晚的小麻程度一般，持续短，到眼睛但没跳或者是时间短
9.57 头晕，不能动，动了就晕
19:47恍惚，48好一点点，刚吃完汉堡，50还有熟悉感，52好像好了
22:30 涨/烫/风凉
23:10 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[19],s3:0,s4:3},"2024-12-26":{detail:`13:22 恍惚，熟悉感时间不长，感觉不算严重，26左右恢复
23:38 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[13],s3:0,s4:1},"2024-12-27":{detail:`9:01 恍惚，上班路上，不算严重，恍好散的熟悉感很多，不知道是不是上班路线比较熟，一共3、4分钟
10:50 恍惚, 54回复, 觉得累, 56说梦境感恢复
14:15 涨/烫/风凉
17:40 涨/烫/风凉
回家路上恍惚
19:34恍惚，想拉屎，梦境感，熟悉感，36好点了
23:35 涨/烫/风凉
23:44小麻，到眼睛
晚上我和小哈吵架了, 把他妈弄醒了
半夜麻了1次，睡醒麻了1次`,hh:[9,10,14,17],s3:3,s4:3},"2024-12-28":{detail:`18:35 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2024-12-29":{detail:`10:02 涨/烫/风凉
21:59 涨/烫/风凉
23:52小麻，左边麻
这2天早上都说不确定晚上有没有发过
半夜麻了0次，睡醒麻了0次`,hh:[],s3:1,s4:2},"2024-12-30":{detail:`10:02 涨/烫/风凉
晚上还是不确定，但这次说比较可能麻，所以可能是减轻了
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:1},"2024-12-31":{detail:`21:23 涨/烫/风凉 左边手腿都麻 不失重 32还有点麻, 23:28麻还没好
23:23 涨/烫/风凉
睡前麻，听到我和小哈说话的声音变奇怪
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:3},"2025-01-01":{detail:`20:27 涨/烫/风凉
23.53 小麻，听声音奇怪，然后失重
半夜麻了1次，睡醒麻了0次`,hh:[],s3:2,s4:1},"2025-01-02":{detail:`09:47恍惚，正常偏轻，梦境感，想拉屎，忘记小哈是怎么去裸男的，看来这次挺严重，有失忆，说很难描述，52，发作结束
总结这次算“明显失忆”，前面2天有“持续脚麻”和“声音奇怪” ，10.06自己描述还是有点懵，感觉昨天像2星期前
11:31 涨/烫/风凉
12:16 恍惚 和早上的差不多 18，大便呕吐好了，人累，懵，记忆还可以
18:06 恍惚, 09梦境感既视感好了, 说”描述不清, 记性有点混乱”, 刚才等过我, 觉得不真实. 看到小哈觉得有点陌生
21:50洗澡的时候恍惚了，程度还好，没第一次失忆明显
22:01觉得左腿持续麻
半夜麻了1次，睡醒麻了0次, 晚上应该是恍惚了一次`,hh:[9,11,12,18,21],s3:1,s4:2},"2025-01-03":{detail:`11:21 恍惚, 想拉屎, 梦境感强, 11:25 说20秒前想不起小哈为什么不在家 (他一直在描述, 就没打断问现在有没有恢复), 11:33说忘了刚才恍惚
18:15恍惚，18大便好了，记忆还可以
21:56小麻，左半边脸抽了一下停住了
半夜麻了0次，睡醒麻了0次`,hh:[11,18],s3:1,s4:0},"2025-01-04":{detail:`09:29恍惚，大便，呕吐，没有既视感，有梦境感，32问了次没反应，问了好几次说好一点，36应该打完了，但还萌萌的呆呆的
11:28 涨/烫/风凉
下午状态是躺床上被小哈爬着的睡觉
16:14恍惚，想吐，梦境感不强，16大便好了
16:56恍惚，拉屎感，有一点既视感，说“难受”，想吐，58分，在说胡话‘神志清醒，说话乱七八糟’，59分，还有梦境感，自己还在说是下午睡觉梦到的（我认为是梦境感），00分大便感觉没了
觉得有多次被压住的恍惚
20:32恍惚，大便，恶心，梦境，熟悉，想吐，34，大便，想吐好了，都好了
有2次被压了
半夜麻了0次，睡醒麻了0次`,hh:[9,11,16,20],s3:0,s4:1},"2025-01-05":{detail:`08:50有点想吐，在想昨天半夜是不是有很多，53想吐好了，可能是比较小的发作
09:08觉得窗外挖掘机声音熟悉，但没觉得我说话熟悉，没梦境没熟悉
09:31有一点恍被压住了
11:39 涨/烫/风凉
12:59恍惚，想吐想拉屎，“非常难受”，02，大便好了，熟悉感还有，说不知道早上干嘛了，昨天干嘛了03，发作结束，在回忆事情
6点不到，在弄被子固定，恍惚被压了
19点左右，说有点持续的想吐，一点点拉屎，都是一点点
19:52恍惚，正常程度，普通症状，说“这种感觉很难受”，54，去房间坐了（本来在饭桌上吃东西），56，说跟想晕的恍惚不一样，57，问发作前在干嘛，他说在洗澡，洗好了，然后看了很多江直树，58，大便的感觉好了，熟悉感也好了
21:50 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[9,10,13,20],s3:0,s4:2},"2025-01-06":{detail:`08:22睡觉的时候有大便呕吐感觉
9:32 恍惚，表现和之前一样，38好像好了，还是问重复的问题，问前两天干嘛了
14:31 恍惚, 想拉屎, 35, 说梦境感很强, 在工作做东西, 发现看着不是像刚做的. 然后问我有带他去看病吗?早上醒来以后正常吗?昨天有一起看电视吗?刚才有讨论过梦境感吗?看了聊天记录后说觉得真实感很低
到吃饭，多多少少有几次被压了
19:26 恍惚，熟悉感，梦境感，28问我今天是上班了对吧，在给小哈弄如实，手没停，30问，回答“非常混乱”，问我回来带东西了吗，31，熟悉感好了，36说感觉下午看到同事儿子像2周前
23:22 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[8,9,14,19],s4:1},"2025-01-07":{memo:"开始轻度抑郁",detail:`09:51 恍惚, 应该是发完能动了后51分尝试用shortcuts记录但操作混乱, 52分微信告诉我的, 告诉我的时候说不清楚症状, 判断程度不轻, 是中等.
到下午，有2次被压住的感觉
15:34轻微的，压住了
17:45恍惚，刚到家，程度中等，46，梦境感强，问现在电视放的视频以前看过吗，47，说在恍，48，问我是不是药吃完了，我说没，问我昨天有什么担心的东西，问小哈昨晚是不是跟我一起睡的，50，大便好了，熟悉感好了
半夜麻了1次，睡醒麻了0次`,hh:[9,15],s3:1,s4:2},"2025-01-08":{detail:`昨天开始心情有点不好，感受是“没劲，单位不想呆，家里也不想呆”
今天放学路上难过
说前两天梦到外婆
开车的时候会想这车会不会把我撞死
睡前一次小麻，半夜有一次“手掌麻”，暂时不记
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:0},"2025-01-09":{detail:`14:36 涨/烫/风凉
23:50感觉0.5秒被压住，在和小哈讲故事，还没刷牙
半夜的小麻只有眼睛跳, 暂时算作轻微
半夜麻了1次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2025-01-10":{detail:`14:18 小手指麻, 28说好了, 又说怎么又有一点
早上小麻，有人，没到眼睛
半夜麻了0次，睡醒麻了1次`,hh:[],s3:1,s4:1},"2025-01-11":{memo:"这天开始刻意早睡觉, 因为是吃药来首次大发作, 晚上睡觉晚",detail:`00:24 涨/烫/风凉
02：48 大发作，嘴唇有点紫，其他就普通持续1分08秒， 小哈2点睡的，晚上在聊天
早上说，昨晚醒来有一次不知道情况了，但早上起来又记得了
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1,s1:[3]},"2025-01-12":{detail:`09:26有点恍惚，梦境感，想吐拉屎，梦境感挺强的
11:09睡觉小麻
15:40恍惚，在换机油，有梦境感，于是上楼，上楼后31分，32分发作好
后面开始 懒
19:33 涨/烫/风凉
下午和晚上，大概2，3次恍惚被压
21:09恍惚，从厕所里回来，10分，又问下午睡过觉吗，问今天是星期几，猜是星期天，问我刚才是去洗澡了吗，现在有点想吐，11分问感觉怎么，他摇头说等一下，12分他说等一下，说什么也搞不清了，只记得我告诉他昨天晚上大发，然后其他都不记得了，13分，梦境感，大便都好了，14，说最近老是闻到盐酥鸡的油类似的味道，16，能大概想起来今天下午行程了
半夜麻了0次，睡醒麻了0次`,hh:[9,11,15],s3:1,s4:1},"2025-01-13":{detail:`早上觉得懵，不知道晚上有没有麻，自己说是换机油恍惚懵到现在，忘记了晚上恍惚，所以可能是早上或者睡觉恍惚过，忘记了
12:53 涨/烫/风凉
17:54恍惚，梦境感，大便，56，说非常难受，躺一下，又说躺下来也不行，但是躺着，57，说有点想吐，问我是不是上班回来（是的刚回来不久），问是不是昨天晚上也被清过记忆，感觉这个状态“有过”，58，发作好了
20:48恍惚，中等，梦境感，在厕所里，说“每次都是这个场景”，又问我刚刚有睡觉吗，50我今天白天上班吗，是不是正常回来，也能自己刚才在房间里干嘛，50，梦境感没了，并且问我刚才有梦境感吗
22:22被压了
22:28被压了
半夜麻了0次，睡醒麻了0次`,hh:[12,17],s3:0,s4:3},"2025-01-14":{detail:`09.39 ， 10.02 恍惚2次，“时间短，但感觉明显”
17:48回家路上恍惚了
22:04 涨/烫/风凉
22:43 涨/烫/风凉
还是有抑郁，但确定是不是和发作有关系，不想说话，不想吃饭，不想玩（约好的）
半夜麻了0次，睡醒麻了0次`,hh:[9,10,16],s3:0,s4:2},"2025-01-15":{detail:`08:20 恍惚, 时间不长
10:45 涨/烫/风凉
14:29 2次轻微恍惚 1次想拉屎 1次想吐 感觉很轻 觉得被压了
22:49 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[8],s3:0,s4:4},"2025-01-16":{detail:`这两天睡觉早了，恍惚的不明显，表现为记不清是不是恍惚，并且时间短
11:40 涨/烫/风凉
13:02 涨/烫/风凉
23:27 涨/烫/风凉
23:39头风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:4},"2025-01-17":{coner:["医院","第六次医院, 虹桥"],detail:`16:29 涨/烫/风凉
21:40后脑勺2边收紧，人有点闷，耳朵有点堵
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:2},"2025-01-18":{coner:["左500","左乙拉西坦减到500"],detail:`17:20 涨/烫/风凉
22:57 涨/烫/风凉
23:21左边麻
半夜麻了0次，睡醒麻了0次`,hh:[],s3:1,s4:2},"2025-01-19":{detail:`14:43 涨/烫/风凉
20:26洗碗的时候左手烫，然后头皮躺
21:02 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2025-01-20":{detail:`10:47 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:1},"2025-01-22":{detail:`23:25 涨/烫/风凉
23:34 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-01-23":{detail:`19:59 涨/烫/风凉
21:32 涨/烫/风凉
22:13 涨/烫/风凉
23:03 涨/烫/风凉
23:13小麻，时间长，没到眼睛
做噩梦频繁
半夜麻了0次，睡醒麻了0次`,hh:[],s3:1,s4:4},"2025-01-24":{detail:`14:53 涨/烫/风凉
16:02 涨/烫/风凉
19:56 涨/烫/风凉
22:41 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:4},"2025-01-25":{detail:`15:43 涨/烫/风凉
17:00 涨/烫/风凉
18:07 涨/烫/风凉
18:21 涨/烫/风凉
18:25 涨/烫/风凉
19:56 恍惚 梦境感强烈 想拉屎 想吐了
20:11 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[15],s3:0,s4:6},"2025-01-26":{detail:`09:39 涨/烫/风凉
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
半夜麻了0次，睡醒麻了0次`,hh:[9,10,12,13],s3:0,s4:6},"2025-01-27":{detail:`起来有一点懵
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
半夜麻了0次，睡醒麻了0次`,hh:[9,13,15,19,20],s4:1},"2025-01-28":{detail:`09:13起床恍惚了
11:14恍惚，轻，大便，熟悉感不强，14，有梦境，15，肚子这块麻，发烫，左右脸颊烫，16，问是要过年了吗，感觉做了好多梦，我是放假了吗，混乱，熟悉感还是没有，17，问昨天跟我爸妈碰过面吗，昨天上班了吗，今天开始放假了吗，今天星期几，昨天有接我吗，我有见过我奶奶吗，小哈有去吗18，大便感好了，22，不知道自己恍惚了，并且觉得刚才的记忆更淡
14:49恍惚过了，在四季公园的蚂蚁玩楼梯
18:15恍惚，大便，熟悉感强烈，后脑勺有点麻，后背烫，19，好了
18:56 涨/烫/风凉
19:19 涨/烫/风凉
20:10 恍惚，在万达，想呕吐，14好，程度和之前差不多
半夜麻到眼睛
半夜麻了1次，睡醒麻了0次`,hh:[9,11,14,18,19],s3:1,s4:2},"2025-01-29":{detail:`09:11 恍惚，分析出来昨天休息，但是去过哪里不确定，比较模糊，有好几个画面，比较混乱，根据分析猜可能前天下班去了我妈家里，但是觉得很模糊，18分梦境感也重
10:22恍惚，23，说非常难受，胸口烫，想吐，反胃，熟悉感强，说等一下，真的好难受，27，大便感觉好了，28问我今天是不是不用上班了
13:43恍惚，44说很难过，想吐，后脑勺发烫，还有脖子，46打嗝2下，47想着说，我好像梦到他说过这个东西，48好了
19:25恍惚，27问我下午睡过很久的觉吗，熟悉感，梦境感，28打嗝，29发好
20:11 涨/烫/风凉
22:28 涨/烫/风凉
23:00 涨/烫/风凉
23:06手还在持续烫
半夜恍惚了，程度和以前一样
半夜麻了0次，睡醒麻了0次`,hh:[9,10,13,19,20],s3:0,s4:4},"2025-01-30":{detail:`今天是初二，楚楚外婆请吃饭，我们又自己吃了一绪晚饭，回家晚，1点14他们睡了
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
半夜麻了0次，睡醒麻了0次`,hh:[16,21],s4:12},"2025-01-31":{detail:`09:51 涨/烫/风凉
14:25 后脑勺烫, 耳朵一直有堵住的感觉/回声的感觉`,s4:2,s1:[3]},"2025-02-01":{detail:`17:04 今天还是一直感觉耳朵堵着
18:48 涨/烫/风凉
19:55 涨/烫/风凉
21:21 涨/烫/风凉
21:31 涨/烫/风凉
22:09 涨/烫/风凉
22:18 涨/烫/风凉
23:26 涨/烫/风凉
23:28 涨/烫/风凉 31还在烫
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:7},"2025-02-02":{detail:`今天下午去了虹口汪汪队的商场，碰到了圈圈
12:37今天感觉耳朵还堵
20:52 涨/烫/风凉
21:31 涨/烫/风凉
22:37闭上眼睛感觉人在转，逆时针转，睁开不转了但是头涨，早上摩托车上也有过觉得头晕
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-02-03":{detail:`20:30 涨/烫/风凉
21:04左耳朵很轻的麻
20:42 涨/烫/风凉
21:05 涨/烫/风凉
22:54 涨/烫/风凉
22:58 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:6},"2025-02-04":{detail:`昨天小麻因为跟前进王思楠玩回家晚睡觉晚，起床耳朵回音
17:07 涨/烫/风凉
半夜小麻，早上小麻，早上到眼睛
半夜麻了1次，睡醒麻了1次`,hh:[],s3:2,s4:1},"2025-02-05":{detail:"半夜麻了0次，睡醒麻了0次",hh:[],s3:0,s4:0},"2025-02-06":{detail:`13:24 涨/烫/风凉
19:14有一点想吐？在吃烤鱼，说昨晚觉得有人，睁眼好了，因为小哈叫了醒了
22:35左边后脑勺烫
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2025-02-07":{detail:`昨晚小哈很晚睡，1点半还叫醒过他 
今天团建，晚上回家晚，又跟小哈搞，不知道睡觉，我10点提醒了最后一次，就不管了
最后12点睡的
然后小哈晚上搞，他自己说醒过很久，麻了一次，到眼睛
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:0},"2025-02-08":{detail:`14:01 涨/烫/风凉
14:54 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-02-09":{detail:`09:46 小麻，有人，昨晚没睡好，小哈一直叫醒，还换尿布，其实这次应该算作前一天起床的麻
13:34 涨/烫/风凉
22:52 手烫，到小手臂
吃晚饭的时候有一次1秒的恍惚
晚上睡前麻得厉害和多，因为小哈2点睡，一直在说话，半夜也麻了一次，小哈是个问题
半夜麻了2次，睡醒麻了0次`,hh:[],s3:3,s4:2},"2025-02-10":{detail:`15:49 涨/烫/风凉
17:08 涨/烫/风凉
18:51 涨/烫/风凉
18:55 涨/烫/风凉
18:57 涨/烫/风凉
19:03 涨/烫/风凉
19:25 涨/烫/风凉
22:32 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:8},"2025-02-11":{detail:`16:55 涨/烫/风凉
22:02 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-02-12":{detail:`08:15耳朵叮叮叮
16:22今天耳朵一直叮叮叮，大概3，4次
23:17小麻，比前几天好一点，小哈哄睡时间长
半夜麻了0次，睡醒麻了0次`,hh:[],s3:1,s4:4},"2025-02-13":{detail:`14的起床麻了，但不是很确定，程度小
半夜麻了0次，睡醒麻了1次`,hh:[],s3:1,s4:0},"2025-02-14":{detail:`18:06 涨/烫/风凉
21:48 涨/烫/风凉
15的早上说半夜“好像麻过”，但程度小
不知道和恍惚有没有关系
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:2},"2025-02-15":{detail:`09:04 恍惚，自己说8点45起床恍惚的，然后吃药了，9点告诉我这些的。
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
半夜麻了0次，睡醒麻了0次`,hh:[9,13,15,18,19],s3:0,s4:3},"2025-02-16":{detail:`11:40早上恍惚了一次，我在睡觉刚醒
13:23恍惚，24，非常恍，25，感觉描述不了，26，问今天是礼拜天吗，28，现在是几月份，有没有过过年，29，好了。这次失忆比较严重了，33还不知道月份
15:43恍惚过了，因为在道馆道长在介绍东西
16:54 涨/烫/风凉
18:52恍惚，梦境感强，熟悉感，大便，54说打嗝舒服点了，55，熟悉感好了，都好了
19:03恍惚， 梦境感，熟悉感，05，说好一点了，“刚刚说什么都忘记了”，06，对着外公说“我说让你吃饭的吗，你是认真吃饭的吗”，然后说我要吐了（但是没吐，也没很难受的样子，只是安静），07问我刚去哪里了吗（去了吴泾道观，太仓博物馆图书馆，万达），14说感觉这2天没和我住一起，问我和谁住一起了，21还在问前几天睡哪里
20:44 轻微恍惚
20:47恍惚，已经恍惚好了，我在弄灯，大家判断是2，3分钟前还在说话，50：问礼拜几，几月，他说对，但说自己是猜的
08:04 轻微恍惚
半夜麻了0次，睡醒麻了0次`,hh:[8,13,15,16,18,21],s3:0,s4:1},"2025-02-17":{detail:`起床失业严重。经过询问，我觉得程度不是最重，只是不记得事的程度
另外，前一天，2次“轻微恍惚”是自己记录的，20.47我记录的和20.44是同一次
08:29想吐了，不知道是不是开始恍惚了，因为我在跟他说注意事项，但是说到以前忘记过结婚对象，可能引起他紧张了，发作频率太高了，31说‘我感觉嘴巴这里还在上线，还在跳容，这是叫跳容吗，我不知道，这是现实中吗，我是不是很久没去上班，过年过了很久，还在疆场三路做’，32，我听到他肚子叫，34发好了，发好一会了
12：00 恍惚，程度一般，具体见聊天记录，这几天反复问是不是过过年了，12.36说感觉脑子里物理木，感觉
16:48 恍惚, 呕吐, 心跳块, 脸红, 不知道为什么在单位, 看了知道是周一, 不知道刚才在干什么, 是不是放学要去罗南. 54, 问刚才是不是做梦了, 说不清的感觉, 59, 感觉不安全感, 忘记52说的话了.里面堵（微信聊天）
20:10恍惚，有1，2分钟了，我和小哈在玩开门，有梦境感，10，发作好了，还没过年，11，说电梯出来恍惚了，其实是上电梯前恍惚的
早上起来是蒙的感觉，推测半夜恍惚过。但也不计数
半夜麻了0次，睡醒麻了0次`,hh:[8,12,16,20],s3:0,s4:0},"2025-02-18":{detail:`10：33 恍惚 见微信聊天记录
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
半夜麻了0次，睡醒麻了0次`,hh:[10,13,16,18,19,20],s3:0,s4:2},"2025-02-19":{detail:`08:51早上起床一次，准备吃药前进房间不知道干嘛，应该一共2次恍惚！！！
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
半夜麻了0次，睡醒麻了0次`,hh:[0,8,12,15,16,20],s3:0,s4:4},"2025-02-20":{detail:`14:18耳朵叮叮叮，和一些植物神经症状
14:39 涨/烫/风凉
15.35 小恍惚
16:30小恍惚，见微信聊天
18:15路上恍惚，48说“假吐”见聊天记录
22:28左边头风凉
23:01左边麻了
晚上起来给小哈换尿布，又麻了
半夜麻了0次，睡醒麻了0次`,hh:[16],s3:2,s4:4},"2025-02-21":{detail:`10:46 涨/烫/风凉
14:46 2次感觉快恍惚，压住了
14:02 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2025-02-22":{detail:`12:43 涨/烫/风凉
23:18 左手烫
今天一直说轻微呕吐和心悸，心跳100上下
23.30 小麻，先有人，时间久，再麻，麻得厉害，忘了有没有到眼睛“又厉害又久”
半夜麻了0次，睡醒麻了0次`,hh:[],s3:1,s4:2},"2025-02-23":{memo:"睡得不晚, 可能是白天累或我凶了",detail:`中午觉得植物神经症状好很多了
12:44 涨/烫/风凉
19:14 涨/烫/风凉
19：10 洗澡的时候恍惚了，早上10不到出去吃饭，然后小哈要买玉米去天街，又直接约奶奶吃饭，又去污水公园喂鱼，累了应该
20:50 涨/烫/风凉
21:11左耳廓酸
22:12 说麻了，问有声音吗，能撑住吗，然后开始砸吧嘴，开始发了， 22:14自动，抱着我，摸我 22:17能说话，清醒，知道怎么回事
（补充，原因可能是因为我凶了）`,s4:3,hh:[19],s2:1},"2025-02-24":{detail:`19:44 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-02-25":{detail:`13: 35 (全身)头皮到大手臂发麻 发冷的这种 在看全嘻嘻视频紧张了可能
19:53 涨/烫/风凉
23:37和小哈吵架了，现在才睡觉，2个人刚闭上眼
23:45给小哈穿袜子，准备睡觉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-02-26":{memo:"这2天睡觉都很晚",detail:`17:19 涨/烫/风凉
17: 20 有一点点点晕 然后左手臂有点烫
21:23一瞬间的晕和左手臂烫，晕的时候轻微有人感
23:07不舒服过了，起来抱着我，感觉快发了，已经有咽口水了，压住了，13分回忆说有熟悉的味道，和害怕的感觉了
23:23我爆发了，一直在吵架
00:07小哈刚睡了，让他去喝水，尝试平静了再睡觉
00:23我听呼吸声，去看他，想从监控可以看到他脸，就拉了他下被子，他说刚才有一点失重。
最后早晚各小麻一次，到眼睛，时间不长`,hh:[],s3:3,s4:3},"2025-02-27":{detail:`20:06 涨/烫/风凉
23:11 小麻了
半夜麻了0次，睡醒麻了0次`,hh:[],s3:1,s4:1},"2025-02-28":{coner:["医院,妥泰1","第7次医院, 虹桥, 开始晚上一粒妥泰"],detail:`13:47 涨/烫/风凉
15:11 涨/烫/风凉
17:53 涨/烫/风凉
20:38跟小哈吵架，忍不住哭了，今天看病3点多到家的吧，然后陪小哈玩，没啥休息
22:37urs 
23点小哈有点醒了，开始睡觉
23:11小哈醒了一下，他也醒了
00:10小哈睡着
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2025-03-01":{detail:`20:49 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-03-02":{detail:`09:45 涨/烫/风凉
18:30 涨/烫/风凉
半夜5点小哈发神经把大家叫醒，她没睡好（原因是要妈妈给他吃牛奶）
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-03-03":{detail:`15:02 涨/烫/风凉
16:09耳朵有叮叮叮
晚上小麻程度轻
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:2},"2025-03-04":{detail:"半夜麻了0次，睡醒麻了0次",hh:[],s3:0,s4:0},"2025-03-05":{detail:`14:33 太阳穴有点晕 可能是做手册有点紧张 怕做不好 很久不做
14:43 涨/烫/风凉
18:02 回家后，出电梯的时候恍惚了。在楼道里站了10分钟，估计是17.50 发的。既视感很强。现在描述还算清楚，但是有“刚才发生的事是好久以前”的感觉
（直接原因可能是工作来活了，但有个规律是每次恍惚前对明星过分激动）
22:18有一点点头紧，左手烫
22:40 小麻，有点到眼睛，没声音，说“有光”，我以为要发了，但是没法，还比较快就好了
半夜麻了1次，睡醒麻了1次`,hh:[18],s3:3,s4:3},"2025-03-06":{detail:`12:50 涨/烫/风凉
半夜麻了0次，睡醒麻了1次`,hh:[],s3:1,s4:2},"2025-03-07":{detail:`19:13工作啃手指出血了
干活到11点，11点半睡觉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-03-08":{detail:`08:42现在描述7点起来恍惚了，描述“不严重，但不知道星期几了”，我估计都忘记了
17:36大姨妈微信发癫痫的事，他哭了
20:21 涨/烫/风凉
20:24 轻微恍惚
20:25恍惚，27，问大便感熟悉感都说没有。问现在是晚上吗，猜周六，不记得吃了什么晚饭（答案是10分钟前刚吃了带回来的生煎）说知道不想睬他妈但不知道为什么
半夜麻了0次，睡醒麻了0次`,hh:[9,20],s3:0,s4:1},"2025-03-09":{detail:`14:22恍惚，梦境感，在美兰湖商场，有点想大便，没有熟悉感，23，打嗝了，24头应该好了，知道自己为什么在这里
(备注: 恍惚持续只有1分钟, 之前都有5分钟)
23:17 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[14],s3:0,s4:1},"2025-03-10":{memo:"周一, 周二都去下班去罗南了, 外婆在",detail:`18:33有点回音，两边
23:07 涨/烫/风凉 2次
23:09恍惚被压住了
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:3},"2025-03-11":{memo:"吃了一粒妥泰后明显症状被压住的感觉, 这2天越来越不注意, 所以被压的感觉明显(因为本来要发了)",coner:["妥泰2","今天早上开始加妥泰一粒"],detail:`15:00 涨/烫/风凉
18:46 梦境感, 在给卢广仲微博留言, 自己觉得”不是非常严重”
19:08 有回声
22:30 涨/烫/风凉
刚才说，今天呕吐感被压了无数次，具体估计是20次
半夜麻了2次，但是轻了，睡醒麻了0次`,hh:[19],s3:2,s4:3},"2025-03-12":{detail:`11:53 后脑勺左边有一点烫
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
半夜麻了0次，睡醒麻了1次`,hh:[21,22],s3:1,s4:8},"2025-03-13":{memo:`14日早上自己不确定有没有恍惚, 但起码不严重. 早上聊了最近情况, 确认2/25, 3/14是有抑郁的.
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
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:9},"2025-03-14":{detail:`上学路上手有涨了 来不及记
11:07 涨/烫/风凉
11:43耳朵叮叮叮
14:35 涨/烫/风凉
15:18 涨/烫/风凉
15:53 涨/烫/风凉 
16:49 涨/烫/风凉
18:20恍惚，在家门口不进来大概5分钟，出去看站在电梯口，自己说恍惚，问别的什么都不知道，22说不知道星期几，知道送弟弟到地铁站，25回忆起来放雨衣的时候恍惚的
20:27 涨/烫/风凉
21:50 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[18],s3:0,s4:9},"2025-03-15":{detail:`15:07 涨/烫/风凉
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
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:5},"2025-03-16":{detail:`14:59 涨/烫/风凉
20:30 涨/烫/风凉
20:39 左边耳朵后面发烫
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:3},"2025-03-17":{detail:`12:03聊到最近有“被抛弃”的假设的想法
半夜，大家都睡了，眼睛跳，好像流口水，好像没麻
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:0},"2025-03-18":{detail:`早上看刘开心想哭
下午做海报被退回来2次, 没有正常下班.
18:21 告诉我恍惚了, 在不知道星期几, 回忆了一下, 好像在改海报. 24, 说”还是不知道” (注意 21是报告时间, 不是发作时间), 26说想起来昨天请假, 但不知道去干什么(答案是上午体检)
19:33 涨/烫/风凉
没吃饭，睡觉了，到80自己出来，说没睡觉，情绪是“装出来的好”，（具体是：不开心的时候跑过来要帮我洗碗，本打算晚上睡我这头，怕我不舒服，走前还问我会不会生气）很令人担心
20:22 涨/烫/风凉
21:39 涨/烫/风凉
晚上2次小发, 第一次和昨晚一样, “没麻, 感觉被压, 说不清症状, 然后流口水了”, 第二次是麻.
半夜麻了2次，睡醒麻了0次`,hh:[18],s3:2,s4:3},"2025-03-19":{memo:"我下午骨折, 开始需要照顾.",detail:`10:43 耳朵叮叮叮
11:40 耳朵叮叮叮
13:35 打开ae, 有熟悉感. 36 说有点恍惚, 38, 确定恍惚, 39, 恢复
22:32左边耳朵后面烫
半夜麻了0次，睡醒麻了0次`,hh:[14],s3:0,s4:3},"2025-03-20":{detail:`昨晚没睡好, 在想请假申请有没有通过的事
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
半夜麻了0次，睡醒麻了0次`,hh:[11],s3:0,s4:9},"2025-03-21":{detail:`10：40 恍惚，想吐，熟悉感轻，没梦境感，43好
12:33耳朵叮叮
14:37 涨/烫/风凉
16:54 左边耳朵上面 太阳穴附近烫
18:28恍惚，梦境，想吐，拉屎，没有熟悉感，30，打嗝，30半，放屁，开始有熟悉感，31想吐好了，都好了
（比之前重了一点了，但记忆还可以）
22:02 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[10,19],s3:0,s4:4},"2025-03-22":{detail:`20:15有点懵，有回声
20:39 涨/烫/风凉
21:51恍惚，已经好了，想吐，拉屎，没梦境感，熟悉感
21:56 涨/烫/风凉
半夜麻了1次 到眼睛 但是没有全身麻的感觉 感觉有口水 但是反应过来没口水的 整个时间很短，睡醒麻了0次`,hh:[22],s3:1,s4:3},"2025-03-23":{detail:`08:12恍惚 想吐 拉屎 不知道周几 昨天干什么也不知道 不真实感比较足 隐约记得要出去 很模糊的 前面在刷微博 刷什么忘记了 14好了 22想起来微博刷什么了 看明星怎么带孩子的
16:48 恍惚，还不严重，49，想吐，后来补充说很轻的
19:32 涨/烫/风凉
19:39 涨/烫/风凉
21:46 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[8,17],s3:0,s4:3},"2025-03-24":{detail:`13.29后脑勺发烫有点麻
15.39耳朵叮叮
16:08 涨/烫/风凉
16:49 涨/烫/风凉
20:33 涨/烫/风凉
22:04 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:6},"2025-03-25":{detail:`昨天心情不好
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
半夜麻了0次，睡醒麻了2次`,hh:[10,18,21],s3:2,s4:6},"2025-03-26":{detail:`09:50 太阳穴紧
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
半夜麻了0次，睡醒麻了0次`,hh:[21],s3:0,s4:10},"2025-03-27":{detail:`08:29恍惚，主动发现的，可能已经有一会了，30，说“非常严重”，31，打嗝，不知道星期几，单位干什么。
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
半夜麻了1次，睡醒麻了0次`,hh:[8,14,16],s3:1,s4:7},"2025-03-28":{detail:`09:13 快到单位的时候, 恍惚, 程度轻, 拉屎, 打嗝, 发完没有”搞不清状况”的感觉
10:38 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[9],s3:0,s4:1},"2025-03-29":{detail:"半夜麻了0次，睡醒麻了0次",hh:[],s3:0,s4:0},"2025-03-30":{detail:`07:47应该是恍惚了，问他怎么了，他说讲不清楚，48说，刚才有一秒熟悉感，然后就搞不清楚了，49，有梦境，没熟悉，大便还没好，50，算是好了。
15:30 恍惚 熟悉感 想拉屎 在看凡人传 可能看到啥情节以前看到过 所以有熟悉感 程度中等偏小 不算特别严重 看到上面的才知道早上有恍惚 32好了，补充：从播放记录看，是27发的，30算好了，才会来记录。32是彻底好了
17:31 涨/烫/风凉
18.20 去罗南路上，恍惚，严重失忆，“什么都不知道”，好像是去接小孩，帅子好像骨折了，24，恢复点了，晚上问记忆都还可以。1820应该是发后一段时间，停车后开始记录的。
23:15 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[8,15,16],s3:0,s4:2},"2025-03-31":{detail:`13:22 涨/烫/风凉
16:34 涨/烫/风凉
17:49 涨/烫/风凉
晚上开车到天街的时候，大概是19点左右，有恍惚被“主动压了”，方法是闭眼睁眼
因为奶奶坐爷爷车加油摔了，晚上睡罗南，和小哈，外公外婆。没睡好，小发多，半夜一次早上2次，第一次和最后次都好得快
半夜麻了1次，睡醒麻了2次`,hh:[],s3:3,s4:4},"2025-04-01":{memo:"奶奶骨折, 这天起他和小哈去罗南住, 工作日先来潘广路, 吃好药回, 周末带小哈来",detail:`上班路上有2次小恍惚, 被压住了, 但比以前厉害, 自己说可能发了10秒左右
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-04-02":{detail:`08:10 恍惚，麻，想吐，想拉屎，11，说好了
15:45 这几小时, “感受就会有:” 左手小手指麻, 觉得工作做得不好在返工
22:17 恍惚 , 拉屎感强, “整体不轻” 20, 说好点, 应该是好了, 刚才在看李的聊天, 放了一个语音给小哈听. 
半夜麻了0次，睡醒麻了0次`,hh:[8,22],s3:0,s4:1},"2025-04-03":{detail:`09:06 恍惚, 恶心, 被压, 大概半分钟左右
11:19 手臂有一点点烫涨麻 小臂 左边 前面
12:05 涨/烫/风凉
13:39 涨/烫/风凉
14:33耳朵叮叮
14:43耳朵
16:39 后脑勺左边耳朵后面烫
17:06 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:1,s4:7},"2025-04-04":{detail:`11:16 涨/烫/风凉
12:42 涨/烫/风凉
18:53 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2025-04-05":{detail:`睡得很晚, 11:50 微信告诉我小哈睡了, 12:00 微信说了最后句话
晚上麻了2次，都有人，有一次到眼睛，到感觉不严重
半夜麻了2次，睡醒麻了0次`,hh:[],s3:2,s4:0},"2025-04-06":{detail:`08:45恍惚 想拉屎 在吃药 想到李说他爸爸后来年纪大了自然就好了 但是想到他爸爸好像不在了 有点难过 总时间也不长 估计1分钟左右 强度算是中度
13:50 涨/烫/风凉
16:30 耳朵叮叮
今天写微博小作文了
晚上睡得不好
半夜麻了0次，睡醒麻了0次`,hh:[9],s3:0,s4:2},"2025-04-07":{detail:`19:29 耳朵后面烫了
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-04-08":{detail:`12:01 涨/烫/风凉
15:01耳朵叮叮
15:14 恍惚 想吐 想拉屎 一分钟没完全好 程度算重
半夜麻了0次，睡醒麻了0次`,hh:[15],s4:2},"2025-04-09":{detail:`16:53 涨/烫/风凉
晚上12点以后睡觉，睡得不好，麻了2次
半夜麻了2次，睡醒麻了0次`,hh:[],s3:2,s4:1},"2025-04-10":{detail:`08:22 涨/烫/风凉
11:14 涨/烫/风凉
16: 06 恍惚, 拉屎. 没有说什么时候好的. 发完不知道星期几, 猜吃过午饭饭, 不知道上午下午, 不想大便后冒汗. 16分才恢复, 说应该能想起来, 但是回忆累.
 36说 觉得中午的事是昨天的
19:21睡了一下，麻到眼睛了
19:48恍惚，想吐，梦境，48说梦境感强，49放屁，梦里梦过的感觉，想吐，不知道自己为什么在这里，不知道星期几，不知道过会要回哪里，不知道什么情况，大便呕吐还没好，50说“刚才是不是有跟你说不知道今天星期几”，51，发作结束
晚上没睡好，但没麻
半夜麻了0次，睡醒麻了0次`,hh:[16,20],s3:1,s4:2},"2025-04-11":{detail:`08:09恍惚完，现在不知道情况, 10点问情况, 记忆不连续, 并且不知道早上恍惚，为什么在罗南，怎么来的
14:46耳朵叮叮
16:17恍惚，拉屎，想吐，18说非常难受，等一下，19，无法描述，20，发作好了，问“我昨天是不是在罗南”说“我现在一无所知”，22说“大概是刚才做梦了”
18:16 涨/烫/风凉
19:11恍惚，拉屎感，熟悉感梦境感不强，11分说慢慢在变强，12分说还没好，好了跟你说，过了一会说：你等一下，等我冷静下来了再问你，13分说，讲不清楚，有既视感，不知道星期几，描述不了，14分发作好了
19:05 涨/烫/风凉
5点醒来不知道情况，肯定是恍惚了
半夜麻了0次，睡醒麻了0次`,hh:[8,16,19],s3:0,s4:3},"2025-04-12":{coner:["妥泰3","今天晚上开始吃2粒妥泰"],detail:`19:58恍惚，想吐，拉屎，可能是1分钟前开始的，“好像没有熟悉感和梦境感”，00：不知道今天星期几，应该发作好了，我问的时候他问“我有说过我想呕吐吗”，03：不知道星期几，明天要不要上班，要不要去罗南
半夜麻了0次，睡醒麻了0次`,hh:[20],s3:0,s4:0},"2025-04-13":{detail:`今天忘记吃药了10点不到才吃的
12:52恍惚，拉屎，想吐，54，发作好了，房间布局不熟，问什么时候变成这种布局的
21:03 恍惚 熟悉感很强 觉得昨天倒垃圾回来是一样电梯出来（还是进去不记得了）的熟悉感 到04分大概 不确定
半夜麻了0次，睡醒麻了0次`,hh:[13,21],s3:0,s4:0},"2025-04-14":{detail:`上班路上恍惚，可能不重
12:55刚恍惚好
半夜麻了0次，睡醒麻了0次`,hh:[9,12],s3:0,s4:0},"2025-04-15":{detail:`起床麻了，速度快，到眼睛，有人
半夜麻了0次，睡醒麻了1次`,hh:[],s3:1,s4:0},"2025-04-16":{detail:`15:13耳朵叮叮
16:30耳朵叮叮
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-04-17":{detail:`11:15耳朵叮叮叮
睡前麻，好像不太重
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:1},"2025-04-18":{detail:`14:25耳朵叮叮
16:34耳朵叮
23:47耳朵叮
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2025-04-19":{detail:`22:02 涨/烫/风凉
半夜麻了0次，睡醒麻了1次`,hh:[],s3:1,s4:1},"2025-04-20":{detail:"半夜麻了0次，睡醒麻了0次",hh:[],s3:0,s4:0},"2025-04-21":{detail:`15:00后脑勺一点点发麻
19:47 涨/烫/风凉
11:46耳朵叮叮叮
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2025-04-22":{coner:["妥泰4","今天早上开始吃2粒妥泰"],detail:`17:50 恍惚，梦境，熟悉，停车停下来的时候，52发作好
19:57晕，躺着晕，坐起来好，动了就晕
半夜麻了0次，睡醒麻了1次`,hh:[17],s3:1,s4:1},"2025-04-23":{detail:`12:25中午睡觉麻了
半夜麻了0次，睡醒麻了0次`,hh:[],s3:1,s4:0},"2025-04-24":{detail:`18:07 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-04-25":{detail:`17:40 恍惚，在路上，41，拉屎，想吐，梦境感强，43，身体发烫，44头，发作完，记忆几乎没影响，47，说又有点梦境感
19:37 涨/烫/风凉
22:00 涨/烫/风凉
23:11 涨/烫/风凉
23:20 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[17],s3:0,s4:4},"2025-04-26":{detail:`20:43 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-04-27":{detail:`21:36 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-04-28":{detail:`21:09 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-04-29":{detail:`早上麻得不厉害
半夜麻了0次，睡醒麻了1次`,hh:[],s3:1,s4:0},"2025-04-30":{detail:"半夜麻了0次，睡醒麻了0次",hh:[],s3:0,s4:0},"2025-05-01":{detail:`09:47出去买饼，过程中恍惚了，很严重，说回家路上在清美门口恍惚的了
14:54恍惚, 已经恍惚完2分钟, 很严重, 而且说”如果是恶心, 梦境应该算轻了”, 描述不清情况. 早上恍惚后和小哈摔跤, 感觉是一个月前发生的, 没有参与感.
16:39 涨/烫/风凉
16:58 涨/烫/风凉
19 :32 恍惚，拉屎，梦境，既视感强，去拿盒马邻里路上，不知道星期几，不知道去哪里的，多久好的不知道
21:52恍惚，想吐，拉屎，53，既视感，放屁，看到表带觉得熟悉，54发作好了，59，问他情况，不说话，摇头，不是发作，说描述不清，思路不清，在想问题
23:01有点想吐，压下去了
起床的时候，已经醒了，怕时间晚，麻了几秒，没到眼睛
半夜麻了0次，睡醒麻了1次`,hh:[9,14,20,22],s3:1,s4:3},"2025-05-02":{detail:`08:14恍惚，想吐，其他症状描述不了，“还是那个场景，还是牙齿的那种”，在咽口水，问他，说不知道，又咽口水了，肚子叫了，17发作好了，18，自己觉得脑子还清楚
14: 00 恍惚，和之前一样，和小哈在客厅，我在睡觉
很明显，人反应慢了，说话没反馈
25说一点都描述不了，当时的画面
16:47 恍惚，熟悉感，梦境感，49，熟悉感非常强，呕吐拉屎都有，打嗝了，但是还能跟小孩说话，50，发作好了
估计是17点50分恍惚了，坐了10分钟又睡了，睡觉到19.30起床，有点呆，应该是恍惚过，醒来后觉得是半夜，不知道自己坐起来10分钟过
22:28 涨/烫/风凉
23:07 恍惚，洗澡的时候
23:28 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[8,14,17,18,23],s3:0,s4:2},"2025-05-03":{detail:`08:00 恍惚 拉屎感很重 想吐 早上起来不知道周几 不知道在哪里 以为是在裸男
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
半夜麻了0次，睡醒麻了0次`,hh:[8,11,14,17,18,20,22],s3:0,s4:2},"2025-05-04":{detail:`0813不知道星期几不知道昨晚吃了什么不知道睡前怎么哄小孩睡的
问51期间想到任何事情：记得我骑摩托车拿拐杖，恰恰过生日微信祝福（其实是结婚），问吃过啥，答外卖奶茶，问我开车去过哪，不知道
早上吃药，自己拿药，忘记药在第几层了，忘记开浦兰了
08:55头晕，房子转，自己主动说不知道昨晚自己怎么睡的
0907问昨天去油天地完全不记得，加油记得用支付宝，买肯德基，等的时候的场景忘记了，昨天晚上还记得
12:49恍惚，梦境感，大便感觉没有想吐的感觉重，房子在转（人躺着），整个脑袋很烫，想吐，51发作好了，记忆连续，没有不知道时间地点
13:02恍惚，想吐，纯想吐，梦里梦到的想吐，既视感熟悉感都没有，04，发作好了，不知道上午下午礼拜几上不上班。
15:49想拉屎，想吐，既视感，梦境感（不知道是不是想urs怕小哈醒，不确定），51，打嗝，52发作好
17:34 恍惚, 39分发好, 他在和小哈玩, 我刚写完代码在看视频, 小哈在说话我没注意
22:19 涨/烫/风凉
18:49恍惚了，刚洗好碗，过来问他，说不知道情况了
22:40 涨/烫/风凉
22:43恍惚，45，说“不行，不行，好了我会告诉你的”，然后看小孩搭积木，还跟他说话。 打嗝，肚子叫。47，问星期几，几号，猜是下午，发好了
02:13 2点多，醒了一下，被我拖着讲了一会代码，到现在应该没恍惚过，我有点开心，所以话多了，后悔
起床还是失忆
半夜麻了0次，睡醒麻了0次`,hh:[12,13,16,18,19,23],s3:0,s4:2},"2025-05-05":{detail:`0836问小孩晚上怎么睡觉，在床的什么位置都知道，感觉还行，可能晚上没恍惚过
09:40 轻微恍惚
11:23 轻微恍惚 喝牛奶前和小哈玩的东西不知道了
只记得几个片段 估计在玩 为什么要喝牛奶不知道
(吃午饭前睡觉了)1309醒了一下，问怎么是白天，又睡了
1430睡醒，不知道上午下午，知道劳动节，1524，看到圈圈单位定的牛奶，问我是哪里来的（前面几天都是他下楼拿的），
1535，恍惚好了，他不知道自己恍惚，只是过来问有没有给小孩刷牙，因为他一直觉得现在是上午，我告诉他后，他说刚准备给小孩吃早饭
17:14恍惚，头脸很热，想吐，16，打嗝，17发作好，不知道上午下午，不知道几号，什么都不知道，我问小孩牙刷了吗，他问“我刷了吗”，“刚起来吗”，但小孩跟他说话，发作全程都能对话。现在发作后状态越来越差，如果不是我在发作的时候在旁边，他是不知道自己发作的，只能通过‘搞不清状况’来分辨，1752忘记我买了新电脑，应该是一周前的事
19:05 恍惚过了，我在吃饭，他在喂哈吃饭
22:11 涨/烫/风凉
洗澡的时候也很有陌生的感觉，感觉好久没洗过澡了，放假urs都忘记了，没有昨天在这里睡觉的感觉
22:57熟悉感，不重，想吐，58，好了？算被压下去了
23:15 涨/烫/风凉
23:32 涨/烫/风凉
23:40 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[10,11,16,17,22,23],s4:5},"2025-05-06":{detail:`06:41 涨/烫/风凉
06:43 涨/烫/风凉
06:48 涨/烫/风凉
08:18 恍惚 想吐 想拉屎 梦境感不强 拉屎感强
上班到单位, 看到后视镜摔了, 忘记是5/1自己摔的了
(今天告诉我, “最近想法偏消极”, 有跳楼的想法)
11:15 涨/烫/风凉
16:19 涨/烫/风凉
16:36 有打嗝, 压住了
17:17恍惚，拉屎，在单位电梯下来，17，说等, 19, 说恍得厉害, 说这个场景都很熟悉, 后视镜坏掉了, 好像是梦里, 21, 说”好一点了, 应该是恍了”, 说明不记得自己发作了. 并且有很多做梦的感觉, 17:50 到家后在楼下呆着, 自己认为路上没恍惚, 18:06 上楼, 09到
22:41 涨/烫/风凉
半夜麻了0次，睡醒麻了1次`,hh:[8,17],s3:1,s4:7},"2025-05-07":{detail:`情绪还是很不好，自杀程度1分，这2天起床都很早，6点
920聊, 觉得昨天李叫自己换位子是上周的事.
13:07中午睡醒起来麻了, 感觉到眼睛, 可能实际没到
13:08 后面补充醒来后耳鸣
14:58 涨/烫/风凉
1517聊病, 我觉得抑郁挺严重的, 他希望生小孩没抢救过来, 而之前是觉得如果没救过来见不到小哈太可惜了
17:19 涨/烫/风凉
18:19 涨/烫/风凉
22:19 涨/烫/风凉
22:35 涨/烫/风凉
22:43 涨/烫/风凉
23:09 涨/烫/风凉
今天和昨天白天麻到眼睛，有人
半夜麻了0次，睡醒麻了1次`,hh:[],s3:2,s4:8},"2025-05-08":{detail:`自杀的感觉减轻了
不知道小麻超厉害，是隐藏了，还是和颞叶发作消失相关
12:28 耳鸣 嗡嗡
15:02耳鸣
17:05 涨/烫/风凉
18:53 涨/烫/风凉
20:08 涨/烫/风凉
20:29 涨/烫/风凉
20:36 涨/烫/风凉
20:52 涨/烫/风凉
21:48 涨/烫/风凉
22:05 涨/烫/风凉
23:21 涨/烫/风凉
今天入睡很快，很熟，打呼厉害
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:11},"2025-05-09":{detail:`13:08 涨/烫/风凉
14:55 涨/烫/风凉
18:19 耳鸣 嗡嗡
22:48 涨/烫/风凉 22点间一共4次 比较明显
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:7},"2025-05-10":{detail:`09:52 涨/烫/风凉
10:32 涨/烫/风凉
13:00 涨/烫/风凉
14:30 涨/烫/风凉
22:48 涨/烫/风凉 22点间一共3次
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:7},"2025-05-11":{detail:`08:49 涨/烫/风凉
12:11 涨/烫/风凉
今天起床后精神状态一直不太正常
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-05-12":{detail:`早上回忆, 好像晚上头顶还是左边头顶有点麻, 忘记了, 因为当时不想说话, 不一定是麻, 总之比平时难受一点.
11:14耳朵叮叮叮
13:37 涨/烫/风凉
13:40 涨/烫/风凉
14:25耳鸣了
14:39 涨/烫/风凉
14:46耳朵嗡嗡
(所有耳朵症状, 都是单个左耳)
5:16 耳鸣, 17又有一次, 算作同一次吧
16:55 耳鸣
17:20 涨/烫/风凉
半夜麻了0次，睡醒麻了1次`,s3:1,s4:9},"2025-05-13":{detail:`早上的麻好像到眼睛前被压住了
还是6点起床，问有抑郁程度说还行，表情敷衍，状态中下
这两天有想“不想再被爸妈，朋友，关系绑着的想法”
13:14 涨/烫/风凉
13:37耳朵嗡
13:58耳朵叮
17:50 涨/烫/风凉
20:47 涨/烫/风凉
半夜麻了0次，睡醒麻了1次`,hh:[],s3:1,s4:5},"2025-05-14":{detail:`早上还是6点起来的，麻到眼睛了，有口水的感觉，说“像以前的感觉”
08:06 涨/烫/风凉
20:11 涨/烫/风凉
20:46 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2025-05-15":{detail:`11:20耳朵叮叮
12:10耳朵叮
14:13耳朵叮
14:55叮
21:36 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:5},"2025-05-16":{detail:`15:59耳朵叮叮
半夜麻了0次，睡醒麻了1次`,hh:[],s3:1,s4:1},"2025-05-17":{detail:`到眼睛，不重，没睡好，手表显示4小时16分钟
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-05-18":{detail:`今天和奶奶去汽车博物馆，路上他开车快睡着了，但是到晚上21.30还没有洗澡，应该很缺觉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-05-19":{detail:`13:23 涨/烫/风凉
16:11耳朵嗡嗡
16:29 有飘起来的感觉, 感觉在飘, 坐在气球上的感觉, 感觉飘了2分钟
17:17回家路上有1秒熟悉感
21:15一秒熟悉感
21:37 涨/烫/风凉
23:28 涨/烫/风凉
00:03麻，是前几天醒来的那种，05好了，有抿嘴，录视频了
半夜麻了1次，睡醒麻了1次`,hh:[],s3:5,s4:4},"2025-05-20":{detail:`早上5点左右小麻，有人，忘记有没有眼睛
14:45 涨/烫/风凉
3.48到3.58起床坐着，最后穿了衣服，房间温度27湿度70
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-05-21":{detail:`15:45耳朵叮叮
10:29 涨/烫/风凉
10:31耳朵叮
11:51耳朵叮叮叮
12:09耳朵嗡嗡
12:20耳朵叮叮叮
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:6},"2025-05-22":{memo:"开始恍惚前兆, 这波恍惚没熟悉感",detail:`10:16 涨/烫/风凉
15:00有点想吐，没熟悉感, 想吐的时间蛮长, 和恍惚的吐是一样的, 有点放空的感觉, 但不是失重, 没有发作性
15:41耳朵叮 有音乐
19:08 涨/烫/风凉
00:34麻了下，失重
早上6.50麻到眼睛，自己觉得以为迟到了硬醒来的
半夜麻了1次，睡醒麻了1次`,hh:[],s3:2,s4:4},"2025-05-23":{detail:`最近肚子疼, 并且晚上睡眠非常差, 晚上入睡晚, 还醒了2次大的
12:42 和昨天的情况差不多, 想吐, 没有熟悉感, 但中间应该一片空白的时间, 等反应过来了知道自己在单位
16:10 想吐, 说”缓一下”, 问有没有熟悉感, 不回答, 11, 回”= =“, 15分发完, 说”算断片”, 感觉”为什么在这里”, 看了旁边同事觉得陌生, 要反应一下.
事后自己说没熟悉感, 说”可能有一点梦境, 我也不知道”
00:03恍惚过了，刚在洗澡，在回忆单位里的画面，觉得像好久以前，回忆说有想吐。
半夜麻了0次，睡醒麻了0次`,hh:[13,16,23],s3:0,s4:0},"2025-05-24":{detail:`问有没有抑郁，不像以前正面回答，可能发病会导致抑郁
食欲差，一天只吃了2口面条，并拒绝吃饭
09:25恍惚，想吐，左边脑袋烫，肚子烫，胸口烫，想拉屎，26，打嗝，27头好了，问你为什么要记，我刚才干嘛了。全程好像没有熟悉感，全程能对话，但发好就忘记发作，之前的发作周期“前几次”是不会这么严重的。
15:00 恍惚完睡了, 我和哈和奶奶在蟠龙玩, 是17:26微信告诉我, 3点不到恍完睡的, 想吐, 梦境, 不知道为什么在家, 没熟悉感, 当场能想起来情况. 
18:32 说恍惚过了, 最后聊天记录是18点以后, 恍完睡觉, 醒来在想星期几, 我和小哈在哪里之类的问题. (全过程都在这半小时内)
19:44恍惚，在陪小哈玩，我被玻璃刺了，想吐，胸口热，额头热，咽口水，问熟悉感，回答一直有，还可以，没梦境感，45，打嗝，小的嗝，46，好了
20:05 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[9,15,18,20],s3:0,s4:1},"2025-05-25":{detail:`我早上9点17看到他坐窗台上，发呆，问有没有麻，有没有恍惚，都答不知道，所以记了没有麻，但是人绝对不正常，自己能说昨天发生的叫小哈跟我出去的场景，但记忆微弱，是半个月到一个月前的事
9：17 肯定是恍惚过了，而且已经到了恍惚完不知道自己恍惚过了，9.32 恢复点了回忆说6.30起来拉屎，然后睡到8.45起来吃药，吃完坐在窗台玩手机，就恍惚了，很巧我醒了，发生了一开始记录的9.17的事情，然后回忆事情昨天的事，像1，2周前，自己说没有抑郁
14:49 涨/烫/风凉
13：06 恍惚过了，我和奶奶在外面，已经恢复过来了，程度和后续都差不多吧
15:46恍惚，我在烧饭，听到他们不说话了过去问的，发作是46以前的，47好，不知星期几，不知道我为什么要烧菜
15:40 涨/烫/风凉
17:56恍惚，非常难受，想吐，57，说啥也不知道，为什么要问我这些东西都不知道，59，礼拜几，为什么在这里，都不知道，感觉我刚才烧的菜是1，2年前的事，06，问我刚是从厕所出来的吗，去厕所干嘛了，答案是56分记录就是他去厕所，一边说很难受，27，问烧菜，像今天的事情了。
20:46不知道刚才干嘛了，应该是恍惚了，但是想不起来恍惚，也能说个大概刚才干嘛了，53，说有点熟悉感
21:07说自己5分钟前大概恍惚，我是真搞不清了
晚上说不知道在用的绿色的包哪里来的，后来猜了下，猜到了
半夜麻了0次，睡醒麻了0次`,hh:[9,13,16,18,21,22],s3:0,s4:2},"2025-05-26":{detail:`早起问，没有恍惚，但有抑郁
08:39恍惚，想拉屎，头很烫，在吃药，不知道妥泰吃几粒，问想吐吗好了吗，答等一下还不知道，5秒内，刚吃过药吗，吃多少了不知道，刚喝的是水吗，41发好了，问今天礼拜一吗
10:25 涨/烫/风凉
11点在看自己的抑郁微博, 说都不熟悉了
10:26左手 有点烫麻
14点说在看和圈圈的聊天记录, 上周约的细节都忘了, 不知道为什么要去火车站.
15:51 恍惚, 52分微信告诉我的, 54分发作完, 事后说是想拉屎, 想吐, 有梦境感, 正在写微博作文, 是关于抑郁的, 发完知道在哪里, 但不知道星期几.
半夜麻了0次，睡醒麻了0次`,hh:[9,16],s3:0,s4:2},"2025-05-27":{detail:`中午说，早上抑郁，中午好点了才有心情反馈
14:21恍惚好了，没啥熟悉感，想吐想拉屎，左边手和脑子烫，记忆连续
下班到家，楼下坐一会8分钟，自己也不知道为什么，但说没有恍惚
半夜麻了1次，睡醒麻了0次`,hh:[14],s3:1,s4:0},"2025-05-28":{detail:`睡前麻得快，程度轻
早上抑郁比昨天好一些，程度大概是觉得什么事都没意思
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-05-29":{detail:`心情和昨天差不多
12:02 晕1秒, 转
13:24 涨/烫/风凉
13:46 涨/烫/风凉
15:01 涨/烫/风凉
19：40 头晕，2分钟 我
21:21 涨/烫/风凉
23:15 涨/烫/风凉
23:33 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:8},"2025-05-30":{detail:`早上6点起床，睡了6小时不到，说是尿尿醒的
今天抑郁减轻
19:46 涨/烫/风凉
21:01 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:2},"2025-05-31":{detail:`睡前麻到眼睛，麻得厉害，以为流口水，晚上和小孩吵架，小孩兴奋在玩，最后我把小孩带出去
10:56 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-06-01":{detail:`20:34 涨/烫/风凉
00:46还没睡觉，在跟小哈搞
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-06-02":{detail:`14:00 因为奶奶电话里说，外公外婆想看小孩，喝生小孩公婆不给钱而哭了一会
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-06-03":{detail:`19:08看了杀羊视频后有点受刺激，睡觉了
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-06-04":{detail:`09:52 涨/烫/风凉
17:00 涨/烫/风凉
18:06 涨/烫/风凉
18:08 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:4},"2025-06-05":{detail:"半夜麻了1次，睡醒麻了1次",hh:[],s3:2,s4:0},"2025-06-06":{coner:["医院","第8次医院, 虹桥, 医生第一次说建议手术, 在请求下换了新药"],detail:`早上麻到眼睛, 早上有人, 手表显示是4点醒了以后没睡, 但其实是睡的.
前一晚我心跳快, 大家9点半睡觉的.
今天去医院了, 医生换了个药, 但是建议做手术了, 到家后我心跳160, 他陪我去了医院, 检查了没啥事.
11:47 涨/烫/风凉
14:24 涨/烫/风凉凉
14:28 涨/烫/风凉
15:10 涨/烫/风凉
18:22 涨/烫/风凉
18:31 涨/烫/风凉
22:59 涨/烫/风凉
06:20听到多次咽口水，去看了会，没看到，过了会他看到我了，说压住了，我问有人吗，麻了吗，都说没，说是因为觉得要麻了翻身到左边，但算没麻，不记作麻，问如何知道要麻了，说“可能”是失重
07:15后面urs 说只有5分印象
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:7},"2025-06-07":{detail:`15:11 涨/烫/风凉
16:59 涨/烫/风凉 2次，在和哈儿玩
今天聊了本来说3岁拍婚纱的事, 现在说不想拍了(认真的), 不知道是不是性格改变, 难过
另外, 之前2岁和3岁p的桌面, 现在说上班不好意思让同事看到了, 不知道是不是性格改变
18:55 涨/烫/风凉
20:02 涨/烫/风凉
20:16 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:6},"2025-06-08":{coner:["妥泰减到2","早上开始妥泰每次吃1粒了"],detail:`10:56 涨/烫/风凉
11:45 涨/烫/风凉
不确定身份证是的4~6位是108
6/8只有2~3分记得自己6/3写的算是杂事的日记, 在notes上的\b
13:37 涨/烫/风凉
17:22 恍惚，上厕所的时候恍了，26分报告的，22或者23，现在应该是好了（怪不得没关灯就回来了，26我看到的时候在关电视），下午还刚睡觉醒了不久，恍的时候想拉屎，想吐，有梦境，没熟悉。 看来恢复是比较快，询问后，记忆真实，连续。32，在说梦的内容，我判断不是发病的梦，发病的梦从来没说出来过。
18:10 涨/烫/风凉
20:43 涨/烫/风凉
21:43 涨/烫/风凉
21:45 涨/烫/风凉
22:45 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[17],s3:0,s4:8},"2025-06-09":{detail:`15:43 恍惚, 45说好了, “但等一下, 有点热”, 46说刚才应该是上半身发烫的, 47说”和昨天的梦境感差不多” (说明记得昨天发), 确定记忆连续并且真实.
18:07 涨/烫/风凉17: 10 涨/烫/风凉
18: 50 涨/烫/风凉
19: 57 涨/烫/风凉
20: 08 涨/烫/风凉
21: 50恍惚，（我在身边记录）51说开始了，熟悉，想吐，比较严重，打嗝，非常难受，感觉脚是软的，52，问我们是从外面回来的吗（是的，小哈哄睡了，哄睡花了大半小时，我们出去兜了大半小时），星期几不知道了，说没有记忆了，（咽口水2次），几点也不知道，53发好了。54说星期几不知道，好像有骑车的印象，其他都没有了。56，能知道我洗过澡，然后哄睡后出去回来了。59，回忆到刚回家的场景了，并知道时间，并“硬分析出是周一”。60分，能回忆起今天的大多数事情，并且时间上感觉是今天的，但是有点模糊，像一层雾。
简单分析，因为昨天睡觉比较好，所以中午没睡觉，看了很紧张很悲伤的电视，下午明确说过想睡觉，晚上又动得太多了。
22: 07 涨/烫/风凉
22: 44 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[16,22],s3:0,s4:7},"2025-06-10":{detail:`早上起来说“不知道忘记了什么”问星期几，上午下午是知道的。但自己觉得忘记了点啥，应该是发过了，但也因为之前都不记睡着的，就也不记了
10:38 恍惚, 想拉屎, 想吐, 刚在看银行理财产品, 39, 有一点梦境, 不强, 身体烫, 还是39, 自己说应该是快好了. 42, 说还没完全好, 身体上不舒服, 是”有点点点晕”, 自己怀疑是没睡好, 和发作没关系. 询问后确认记忆连续.
11:58 涨/烫/风凉
14:27 涨/烫/风凉
15:26 恍惚, 刚在说昨天买了2万高风险的公募中的基金, 想吐, 想拉屎, 没有熟悉感之类的, 人发烫, 比较弱的梦境感, 是主动去体会感受到的, 27, 还是吐和拉屎, 还没好. 28分好了, 电话也接好了. 确认记忆连续. 30分补充说, 是看了阿姨发的照片, 回忆到高考后跟他们一起去杭州啥的有点小压力
20:10恍惚，梦境感比熟悉感多一点，想吐，拉屎，11，胸口闷，还是拉屎，记性不好（原话），12，打嗝，13头，拉屎的感觉好了，问我们在干什么，不知道星期几，知道是晚上，不知道大概几点，几月也不知道，想也想不出，一点都不知道，15头，说“哦，刚才是恍惚了是吧，恍惚感是好了，但什么都不知道”，知道是晾衣服的时候恍的，16，问是不是刚才从罗南回来，是不是跟外婆住一起。感觉是住了3，4天然后他逃回来循环了几天（其实没有，很久没去了，他所谓的记忆是4月底，已经一个半月了），24说不连续，看到饭盒不知道带了啥，没有上班的记忆，放了一个国庆的感觉，28，我提示昨天在外面聊天内容，觉得3，4天前，能知道连着2天带小哈睡觉，但没画面了，看到手机能知道刚才在买牛奶，看到镜框，知道这个礼拜内被我弄断并且让店家寄了一副，晚饭时扫码瓶盖觉得记得，也不远，但是蒙了一层纱，21.24聊，感觉比前两次失忆严重，但是又主动说了一些当天的细节，但是说到做晚小孩睡觉的监控，觉得3到5天的感觉，零碎的记忆有，但连不起来
22:22 涨/烫/风凉
22:30 涨/烫/风凉
半夜麻了2次，睡醒麻了0次`,hh:[10,13,20],s3:2,s4:4},"2025-06-11":{detail:`觉得一次晚上麻的，另一次不确定，有2个事：1，小哈晚上拉我，我惊醒以为他拉的以为要发，可能吵醒他了，2，（现在是11号8点，他说的内容）半夜有在想周围有哪些同事，能想起来的程度。我问了些事件他也能说知道。（虽然他说在想，但是手表显示11点睡觉的）（昨晚的恍惚蛮严重的，是最近的最严重的了）
早上聊，9点20，6号的陪我去医院细节记忆不深了，不记得验血后陪我去商场买水了, 不太记得工作的内容. 问了抑郁情况, 现在还没有抑郁.
09:57 (微信报告的原时间原话)恍了一下很重的被压住, = =, 现在好多, 但还是不舒服, 01, 回忆,(原话) 可能有一点熟悉感, 也可能是正常的熟悉感, 拉屎呕吐这次本来不强, 记忆算连续. 总结, 算是被压住的恍惚, 这次发作正在减轻.
12:33 轻微恍惚 (这条本人记录, 下面一条是我收到微信的时间)
12:34恍惚，想吐, 想拉屎, 很难受，连发3个“==”，36，问呕吐有吗，说“还好，等一下”，在单位里，我不知道具体原因，38，说是因为不舒服，要睡一会, 40, 说”好像是 公开的头晕”(不知道自己恍惚了), 记忆不连续, 但知道几月份和星期几, 我问他”搞不清的程度”, 他说中等偏轻, 再说”好像去看病了” (5天前的事), 然后说”可能穿越了”, 看了聊天记录后说知道恍惚了, 说睡一会, 睡到了13:43, 问上午的事, 说真实并且时间的感受也是上午. 又觉得记忆是连续的. 又回忆昨天下午感觉2~3天.
13:43 睡醒的时候麻了一下, 比较轻
14:01 涨/烫/风凉
15:13 恍惚可能, 15:13微信跟他说话, (上一次微信聊天是2:28).  他回复说”==, 连不上, 刚好像是睡觉了”, 接着说”不知道我昨天上学了吗? 没啥记性”, 我问”你是刚醒吗?”, 回答”不知道, 中午睡过吗?”, 问是不是断片了, 回答”有点断的”, 然后说”不知道是又睡了吗, 可能做了很多梦, 现在想不出是什么梦” (典型的恍惚发完), 25, 说看了聊天记录, 知道自己回答出是星期三过, 但没有前两天上班的回忆.30，又说出梦的内容，看起来是真做梦，可能是先发作，然后睡了，从记忆的不连续看，基本是发作过了，但是对早上的事记忆真实，也不远，可能是我反复问的关系，15.42，又说刚才是想吐过，但没啥熟悉感, 15,52问了下昨晚出门兜的记忆, 真实, 3天前.
16:53 恍惚, 微信53告诉我, 我在叫小哈起来, 59看到的, 问情况, 回答: “不算恍吧, 不想吐了, 困, 我也搞不清, 是不是中午睡过. 02说, 困+搞不清状况+感觉刚醒的样子, 由此判断2小时前是恍惚了. 03, 问他前两天是不是在罗南, 他梦里想回来, 他妈在那里. (注意这个错觉前面2天也发生过), 梦到和我奶奶小哈一起吃饭. (很奇怪, 现在恍惚的梦可以描述了, 之前从来不可以描述)
19:09 涨/烫/风凉
19:48 涨/烫/风凉
22：14 在倒垃圾恍惚了，16分好的，呕吐，梦境，熟悉，没断片，记忆连续，发完后找钥匙的时候有熟悉感，发完去大便了
半夜麻了0次，睡醒麻了0次`,hh:[10,13,15,17,22],s3:1,s4:3},"2025-06-12":{detail:`现在7.40，早上肯定恍惚了，起床不知道情况，不觉得昨天上过班，问晚上麻过吗，恍惚过吗，都回答不知道。自己说多想了很久单位的座位。手表显示2点多和4点多共醒了一小时，自己不记得了。过了20分钟，8点，说感觉好点了，所以可能是刚醒的时候恍惚的。然后我看了监控，2点多和4点多看起来没有醒，要不是手表不紧，要不是睡眠浅
9:19 恍惚, 在上班路上, 雨大, “非常恍”, 发了张路上的照片给我, 22分头, 他说好了, 我从地图看到下桥了. 25回忆, 19分发照片以后开车就不恍了, 有点陌生感. 45到单位, 问我为什么请年假(6/6, 看完病陪我看心率快), 告诉了情况后, 觉得真实, 觉得距离半个月. 给他看了下午医院的视频, 说真实, 并”没什么远不远的”, 59分, 问我圈圈说这周会到这里来吗, 我告诉他, 早上出门前刚说过, 他说完全不记得. 但问了些其他事, 说”算是记得, 真实度9分, 感觉是昨天”.
12:04 报告”刚突然恍惚”, “被叫了, 说不清楚, 一直在座位上, 也不是恍吧, 就是有个剧情, 很长的剧情, 就像做了个梦”, 不知道为什么有包子(早上带去的), 感受是”奇怪”, 反复说”奇怪, 是不是梦游了”
13: 49 恍惚, 45刚睡醒, 在吃馒头, 49说 == 想吐, 胸口难过, 感觉很重的盐味那种吐, 50, 发了2个==, 1个难受, 51, 问呕吐的感觉好了吗, 回复=, 到57, 说刚才在点奶茶, 不知道谁这里来的手机. 59, 说不知道点了什么奶茶, 只是尽量没点茶, 问了是不是和圈圈吃饭类似的事. 
聊天(14:36)我说有不舒服第一时间通知我, 他说其实他不知道他不舒服, 忘记不舒服了, 只知道老是忘记事情, 感觉都忘记忘记事情这个感觉了.
聊天(14:51) 问奶奶生日买了冰激凌蛋糕记得吗, 不记得了. (10天前)
15:13 小恍惚, 想吐, 不太舒服, 有点熟悉感, 不太确定恍惚, 15分肯定是好了, 而且记忆连续, 有点像昨天晚上22:14倒垃圾时候的感觉
16:00 恍惚, 16:00报告的, 原话是: “我刚在单位里”, “有点”, <我:嗯>, “嗯”, <我: 恍了?>, “还在”, <我: 好, ok> , “说不清”, <我: 好的>, “就想吐”, 01, 说: “我旁边有一杯一点点, 好多人一起点的, 但谁请客的不记得了”, “好像做梦了, 但是没睡觉”
这次的总结: 忘记了2小时前点的奶茶, 看到不知道情况, 但其实又是知道谁请的. 我难过的是: 他以”我刚才在单位里, 有点”说, 说明不清楚自己发了, 还记得找我.
06, 说, “昨天是不是没上班”, “今天是星期几不知道”
聊天(17:25)下班的时候觉得路上都陌生了, 因为3点到5点在干活, 应该是没恍过.
17:58想吐，梦境感，在我车上，准备去盒马拿东西，下班还是忘记拿了，59，很想吐，肚子发烫，感觉梦过啥，00头发好了 （补充：应该是没好，而是还没开始）, 说记忆连续，还告诉我绿灯了，我问你坐我车上干嘛，他说不知道，然后说“买东西”，03承认不知道，05再问，应该是发好了。06，好像想出来是去拿盒马了，15，说想不起来单位的工位，问今天是礼拜二吗，这么看来，刚才01分是没好。
19：15恍惚开始，在车上，17问，说我会跟你说的，19停车，发好了，不知道星期几，不知道为什么在我车上，25，到家，还不知道为什么出来，问星期几，说星期六，因为我们开车回来，猜的，觉得下午的工作是一周前
20:25 涨/烫/风凉
20:52恍惚，拉屎，吐，左边锁骨这里烫，54，问了，还有一点呕吐的感觉，已经“不知道刚才自己怎么了”，55还是回答“好点了”，应该是发好了？，56，在看周围情况，嘴上说“串不起来”，不记得2小时前如果日月光了
22:11应该恍惚过了，我10点多崩溃发火的，他去刷牙了，刷牙的时候恍惚了，11分才发现，53聊到，电梯里的裤子忘记了，迪斯尼打架视频也忘了，前两天还说记得的，第一次绘品仓看的，去过，也都忘记了
23.03刚关门准备睡，我状态很差，尽量在克制
半夜麻了0次，睡醒麻了1次`,hh:[9,12,14,15,16,18,19,21,22],s3:1,s4:1},"2025-06-13":{coner:["医院, 卫1","第9次医院, 虹桥, 因为发的厉害加号, 晚上开始吃卫克泰1粒"],detail:`早上问情况，回答得不清，迷糊说早上麻，并且不知道很多问题，看了手表，5点6点醒的，估计是这个时候恍惚和麻的，然后说到一半就恍惚了（每次恍惚前都会给自己找理由，说，不能说这个，说这个有点不舒服了）
07:57恍惚，想吐，正在问昨晚情况，难受，左边烫，麻，58，咽口水，59，咽口水，00问，想吐吗，说还好，问别的话没反应，看起来在思考
08:48恍惚，我声音响过了，大概2分钟前，他指着爷爷奶奶的房间，问刚才是不是睡这里的？ 54说，看到小哈牙刷，只能猜是刷牙了，是不是48分那次，不知道了，
现在出发医院，路上准备用“我们去哪里”测试是不是发过，59，要吃药，忘记吃药了，找手机的时候，用不来手表了
聊天（10.16）在诊室门口，一点也不记得上次来过了
10:21恍惚，梦境，熟悉，想拉屎，想吐，我进诊室加号的时候开始发的，大概1分钟前，22，问了说好一点，25，聊，没有“怎么在医院的感觉”，40聊，小哈说他是丑美女，忘记了，11.17聊，忘记前几天杀羊视频了
10:42 涨/烫/风凉
11:57 涨/烫/风凉
13:21梦境感，想吐，有点晕，想拉屎，打嗝1次，22，说还没好，拉屎的感觉还在，其他感觉弱了，发好了，还是22。本来在出商场，发完往商场里走路了。问了，知道这里是哪里，知道从哪儿来，要去哪儿，感觉还行
14:01想吐，加拉屎，不算作恍惚，刚才也有一次，大概13.48，还删了
14:19有点想吐，08做脑电图的，18出来的
14:37又想吐了，在配药
14:58大便感觉很强，1分钟前弄头盔的时候，“多少有一点恍”，58，好了？15.05，确定记忆连续
15:25恍惚，拉屎，在星巴克，25，打嗝，说我们弄好这个就回去吧，26，好一点了，27，问记忆连续吗，说70，80，主动问小哈早上闹了吗，都忘记了
聊天（16.32）刚才14.58前一点，看到的猫，刚又看到了，说不记得了
17:19恍惚，有点想吐，拉屎，在回家路上，说“不太能提小哈，提了就恍惚”，19，肚子烫，想尿尿（上几次，在咖啡店也有，没记），喉咙有苦，闷，21，还有想吐，说忘了我们刚去干嘛了。应该是发作好了。不知道情况了，问是不是和吴冬燕有关，是不是去过什么商场。问今天星期五吗。23，知道医院出来，回家了。好像吃了肯德基（没有的事），说去了蟠龙天地，但问细节说不上，不知道是不是编的
18:32 32尾巴，恍惚，拉屎，想吐，上半身发烫，34，想尿尿，好了，知道奶奶在洗澡，记忆算连续，在陪小哈画画，记错上一副，但知道在玩，让我叫去睡觉了
睡到830，过程中我是和小哈画画，买西瓜，吃西瓜，洗澡，拖到830，开门了。
一开门他就醒了，但是看监控，睡得不错，询问下诸多搞不清，但我暂时认为没恍惚。
20:56想吐，57，还没有恍惚，头有点紧，58，没恍出来？
23:16梦境，想吐，喉咙这里发烫，恍惚，想拉屎，17，打很大的嗝，说好点了。
一直在跟小哈搞，2个人都不肯睡觉，我又不能发火
23.20聊，还算行，2030以后的事还算记得。吃药
23.30才躺下
半夜麻了0次，睡醒麻了0次`,hh:[8,9,10,13,14,15,16,17,19,21,23],s3:0,s4:2},"2025-06-14":{detail:`早上起来人呆着，说话响应正常，但是非常不想说话的样子，因为没记忆。
问麻没麻，是不知道的，晚上可能恍过的，问了昨天晚上怎么睡的，我出去吃饺子，晚上吃西瓜，说知道的。晚上11.30睡到8.10的，从监控看睡觉是可以的
现在9.00，说话不回，勉强用手势回答，让选择原因，他表示迷茫和觉得生活没意思的成分都有，也是用手势，没说话
躺到9.20, 还是不说话, 我有点害怕, 坐起来整理这2天的发作记录, 他躺在我旁边.
9.29 我忍不住求他说话，我特别难受，他思考了会，说了句 不知道。 应该是不知道说什么的意思。我要去大便了，因为紧张，要看小哈跟他说话他回不回了。刚打完字，30分，小哈醒了，叫了句妈妈，他没回复。32分，有点开始说了几句，我开心，简单的说了几句，34，又躺着了，但是我好受多了，聊到昨天看医院，觉得一周或者一个月了
11.59 聊天，忘记我骨折了, 不知道昨天去过蟠龙天地
14:29有点想吐，梦境不强，熟悉感有一点，但是不强。30，感觉是“想到梦里的东西”，打嗝2下。还是30，发好了。记忆还可以，我从早上的事情到现在说了一遍，他觉得还可以
因为人好点了能思考了，开始难过我之前的难过了，然后昨天只吃了2小个三明治，今天只吃了几口饭
19:12有点恍惚，在给圈圈送东西路上，大便感觉重，14好了，不知道我们去哪里，星期几不知道，为什么小哈在，不知道是去还是回，24不知道礼拜几，说礼拜5，又说礼拜天，37好像记得恍过，不知道晚上吃了什么了，在乱猜，说了正新鸡排，说78分印象，58，以为小哈下午睡外面的
22:37有一瞬间想吐，好了，不算恍惚
半夜麻了0次，睡醒麻了0次`,hh:[14,19],s3:0,s4:0},"2025-06-15":{detail:`今天早上能回答有没有麻，恢复的第一天！！！
12:02好像有不舒服，问了没不舒服，说不清，我逼他去睡觉了
12.48 记录： 看到已经醒了一会了，问有没有断片，说“现在跟醒来的时候断片了” ，问恍惚吗，说没，但按理论是恍惚过了。现在开始问记忆：
知道星期天。描述今天想到的场景：和小哈画画，吃包子，小哈赶爷爷，我给他看生病分析。昨天的场景：碰到过小斌了（和昨天差不多），自己觉得没有恍惚过。
19:03 涨/烫/风凉
10多还在夜市，11多陪我吃泡面，1130躺好准备入睡的
半夜麻了0次，睡醒麻了1次`,hh:[],s3:1,s4:1},"2025-06-16":{detail:`有点不知道什么时候吃药，因为最近我在弄，应该是没问题的
聊天(13:56)觉得破美工傻逼了, 之前一直被调侃后还笑, 觉得”好玩”, 不知道是不是性格改变
20:51 涨/烫/风凉
20:56 涨/烫/风凉
其实是1030都在床上了，小孩让开个小灯，又搞到1138了，以后一定要关灯。
52小哈早睡了，他又起来担心这担心那的
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-06-17":{detail:`手表看起来睡得不好, 但我也睡得不好, 可能是小哈的问题.
抑郁好像没有
中午报告，午睡后有点晕，可能是姿势不对，并且昨天晚上也有不舒服，和平时不一样，但是现在忘记了
23.23还在搞，小孩不肯睡，40才没声音
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-06-18":{detail:`640起床，后来又睡了会，手表显示就睡了6个多
中午聊到, 早上做梦, 梦到”不会说话”\b了.
说吃了安眠药后睡眠质量上升
今天说今天不抑郁了, 昨天有
15:52 涨/烫/风凉
今天10多关灯了，1045被蚊子吵醒，换地方睡了，蚊子没找到，晚上睡觉质量说不清了
蚊子是打死了，睡的地方不舒服，老是动，12点跟他换位子了
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-06-19":{detail:`放学不想上楼，在楼下20多分钟，但自己觉得没有发作，没有抑郁
18:33 涨/烫/风凉
19:01 涨/烫/风凉
19:37 涨/烫/风凉
20:26 涨/烫/风凉
21:11 涨/烫/风凉
21:15 涨/烫/风凉
21:18 涨/烫/风凉
21:25 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:8},"2025-06-20":{detail:`睡的少，6小时
09:48 涨/烫/风凉
16:35 涨/烫/风凉
17:08 涨/烫/风凉
17:24 涨/烫/风凉
18:22 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:6},"2025-06-21":{detail:`晚上睡了6小时38分，而且不太连续，我总觉得不太对，不说话
今天周六，中午去了美兰湖商场，下午天街游乐场，搞到8点半，2场都非常累
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:0},"2025-06-22":{coner:["卫2, 妥0","换药, 第一次加卫克泰, 睡觉明显变好"],detail:`昨晚小孩叫来叫去，好像是左边手麻，被压住了，记得不是很清楚
12：38 小麻，睡了25分钟，有人，到眼睛了
20:50 涨/烫/风凉
21:10 涨/烫/风凉
22:49 涨/烫/风凉
23:01 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:1,s4:4},"2025-06-23":{detail:`吃了2粒卫克泰后睡了8小时37分钟，很好
今天饿了
11:15 涨/烫/风凉
12:26 涨/烫/风凉
21:49太阳穴有点紧，最近追星兴奋
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-06-24":{detail:`17:55 涨/烫/风凉
睡觉晚，现在11.23刚带小哈骑车睡，他在刷牙
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-06-25":{detail:`16:57恍惚，梦境感，拉屎，58，有点难受，说不清楚，有点梦境，说嘴巴里有血，估计是牙齿，59，说“有点失忆”，“我刚想拉屎？”，应该是好了，每次开始回忆就是发作完了。17.00，说失忆有点重的感觉，说不清楚，感觉在其它地方，01，问我这两天有失忆吗，我不知道，不知道星期几，知道下午，要放学了
最近追星很兴奋, 每次发作前人都会很兴奋, 不知道有没有联系.
今天和昨天都放学不想上楼, 20分钟没上，我下去的，昨天有爷爷, 今天没有
然后感觉今天心情也比较抑郁, 我怀疑是怕我老是问, 所以今天忍着点
19:19 18.54躺着的，刚惊醒了，好像找东西，问任何话都不回复，让捏来表达也没反应
20:17 涨/烫/风凉
20:24 涨/烫/风凉
20:34 涨/烫/风凉
记忆还可以
10.11陪我吃好饭到家门口，不想上楼，想坐摩托车
21:02 涨/烫/风凉
半夜麻了0次，睡醒麻了1次`,hh:[17],s3:1,s4:4},"2025-06-26":{detail:`早上麻到眼睛但时间不长, 睡了8小时半, 醒得也少, 算睡很好了
10:39 恍惚, 微信报告”可能是恍了, 等等”, 41, “想吐, 现在好点”, 42, (应该是好了, 才开始回忆) 说我只知道我买了麦麦, 其他好像都不知道, 知道小哈睡觉, 知道自己睡得晚, 45, 说了一些早上和昨天的事, 说不觉得远, 但不真实. 说拉屎感好像没有, 比较确定的说熟悉感, 梦境感都没有. 以为星期五. (奇怪, 平时是发完以为星期一)
最近有强烈的不想回潘广路的感受
17:04微信报告刚才恍了下，就一下，现在想拉屎，但是不重，05，说先不说了，有点梦，06，很想吐，不说，08，发作好了，星期几什么的，知道，说近的干嘛了不知道，只知道上了厕所
回家在在路口站了20分钟楼下15分钟上楼
18:44恍惚，刚下楼，准备陪我去吃饭，拉屎，熟悉感很强，很想拉屎，熟悉感太强了，嘴巴里还有腥气，描述不了的腥气，是鱼吗，我也不知道，45，想吐，以前梦里发生过，46，打嗝2个。应该是好了
20:29 涨/烫/风凉
到现在为止，记性还行，但是画面丢失了点
今天也带小孩睡觉了，23.17到房间了，大概是22.30吃的要，他说有点共济失调和想睡觉
半夜麻了0次，睡醒麻了1次`,hh:[11,17,19],s3:1,s4:1},"2025-06-27":{detail:`早上麻的，和前一天一样
09:38 恍惚, 在买早饭, 微信报告, 想吐加拉屎, 难受. 直到47分回复的, 11:14 提到头胀感觉没睡醒, 中午睡到2点, 可能是12点睡的
15:55恍惚, 微信报告的, 57, 说”好一点, 我刚在恍%3F 我不觉得, 我知道我中午睡了很久, 其他不知道, 看到奶茶知道, 刚还跟你说”, 16点说跟恍惚前感觉隔了很久.05分自己评价可能有想吐, 拉屎, 不强, 但是记忆损失一样
16:07 耳朵叮叮叮
20:43恍惚过了，因为工作忙，他洗澡回来，在弄药，肯定是恍过了，应该是洗澡后恍惚的，记性和上次差不多，能生活的程度
2228出发带小哈骑车2349在床上了，继续哄睡
半夜麻了0次，睡醒麻了0次`,hh:[10,16,21],s3:0,s4:1},"2025-06-28":{detail:`08:10 恍惚，拉屎，锁骨烫，没有熟悉感梦境感，7.30醒的，和我躺在一起，迷迷糊糊，810突然躺平，说想拉屎，肚子叫，大概是12好的，觉得礼拜天
10:11恍惚，很想吐，12，小哈跟他说话会回复，看到我看他，主动摇头说没好，也是12，问我为什么躺下来，应该是好了，猜礼拜天，知道放假，说不太记得工位，然后睡觉了， 睡到12点多
15:17恍惚，梦境，下午，小哈在客厅地板睡觉，我们在房间里，没熟悉感，有拉屎感，打嗝2次，19，还有一点梦境感，但应该算好了？梦的内容描述不了，对记忆形象小，都知道 
16:38 轻微发（本人记录第一次，38）
16:43 轻微恍惚 但是记不得很多事 后来好一点 有很久的感觉 比较模糊（本人记录，50输入完）
21:40 恍惚，吃完醉美里，到家的电梯里，梦境感很足，进门后开房间的门给小哈开门的时候好了，估计也就一分钟左右，记得晚饭吃了什么，记得从哪里回来
半夜麻了1次，睡醒麻了0次`,hh:[8,10,15,17,22],s3:1,s4:0},"2025-06-29":{detail:`晚上起夜非常频繁，尿尿至少3次，23到8的9小时只睡了7小时（手表），早上起来不知道昨天干嘛，问有没有恍惚，确定的说没有，但应该是恍过了，但是不记录，因为不确定
09:16 恍惚，在床上聊天，想拉屎，想吐，一点点梦境，要吐，17，想吐的感觉没了，没断片
10:43 恍惚, 拉屎, 难受, 想吐, 45, 咽口水, 45末好了, 45分钟小哈来跟他说的话有熟悉感. 没断片
11:49恍惚，自己说没前几次，或者前几个月严重，50好了
14:25恍惚想吐，拉屎，熟悉感，28，好了，记忆过得去，在回忆昨晚吃了什么饭店，知道由天地，睡觉了
最近每次恍惚都说自己正好可以去拉屎了
16:36恍惚过了，我和小哈回来，小哈进房间他醒了，问了，不太知道情况。迷迷糊糊躺着，经过询问，感觉这次发虽然问了都知道，但是真实度降低了，所以感觉比较差
17:18恍惚了，刚才还在聊，昨天的事都不记得了，还没回复，现在觉得拉屎，胸口以上发凉（是以前的发烫），20，问了大便的感觉还有，咽口水，21，问了说好一点，问：下午吗，星期几，这两天都在这里吗？ 都搞不清楚了。22，我确认是不是拉屎好了，他回答我刚才想拉屎吗
20:45 涨/烫/风凉
晚上去天街玩了，自己9点到家的，到现在10,37还没有发，开心
半夜麻了0次，睡醒麻了0次`,hh:[9,10,11,14,16,17],s3:0,s4:1},"2025-06-30":{detail:`11:57 头晕, 转的那种, 58好了, 自己说就晕了6~7秒.
16:19 恍惚, 微信报告, 今天中午是睡过的, 想吐, 拉屎, 有一点梦境感, 不强, 比之前弱一点, 20末尾好了. 不断片.
17:02 感觉脚下轻飘飘的, 17又起来, 说没这感觉, 不确定是不是因为 12点头晕后就没走路的关系
22:54头动了就晕，在陪我吃饺子，大概是22.30 吃药的，12.13站起来腿飘，左手和左手臂麻，20脚好一点，手臂还麻
半夜麻了0次，睡醒麻了0次`,hh:[16],s3:0,s4:1},"2025-07-01":{detail:`今天昨天都陪我吃饭，10.30吃药，11.30到家，和昨天差不多的药的副作用
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-07-02":{coner:["卫1","减了一粒吡仑帕奈"],detail:`08:41好像刷牙回来以后恍惚过，一下子
09:50 和昨晚那样的晕一样, 程度昨晚的一半
10:40 拿外卖, 跟昨晚一样, 腿软, 左手臂胀麻, 45分还在麻, 11:41聊也是这样, 应该不是发作
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-07-03":{detail:`不知道是不是因为减药，睡觉变差，6小时好像，4点多以后就睡觉很差
今天身体不飘了
下午大概4，5点我带小孩去罗南，他下班来罗南，全程没开空调，他来了以后陪小孩玩，我工作到7点，点了外卖啥的，最后搞到8点40，想哄小孩回去，小孩要搭凳子投篮，后来没尿布，想尿尿，在搞。
喂小孩吃东西啥的，他都蹲着，不知道有没有影响，仔细想，应该也不是站起来后血少的时候发的
然后估计20:56分，发病前，说听到啥声音，（事后说是回音，非正常的回音）然后问怎么了，他说，说不清，边说说不清，边把搭起来玩篮球的椅子放起来（叠起来），后来就不会说话，无法回答了
20.58 开始录像，是问话不回答的阶段，视频30秒开始，2分钟不录了还在发，应该超过1分半了
21:05想起来，我说躺一会，问了几句话不回答，小哈叫他也不应
21:10走路不稳，去房间躺着，问了几句话，叫用手捏，能回答，让他说小哈名字，能口吃不太清楚的回答
21:14说，刚才看到小哈的脸有点模糊，叠影，一会正一会歪，问为什么我会躺在地上，我说了大发了，他能说出是不是我不能少吃，记忆除了发作的时候，其他没断片。
最近几天晚上都陪我出去吃饺子，11.30左右才睡，我看了早上的监控，可以看到开门拿药，大概率是吃了的
10.37聊到，声音的时候是有恍惚的感觉
兜了一圈，11.21到家，10.37前一点吃药的
睡前小哈又叫，23:34 睡下不动的
23:43 说麻，到眼睛，大概45好
23:46 又不舒服，现在不是麻，讲不清楚，感觉在一个……在一个画面，场景里，不是梦境，以前没发生过，48好了
半夜又麻过，情况一样，6点醒了就睡不着，手表显示睡觉时间是6小时
半夜麻了2次，睡醒麻了0次`,hh:[],s3:2,s4:0,s1:[9]},"2025-07-04":{detail:`07:57有点回音，自己说已经5，6分钟了
今天和他一起上学, 我去了大场图书馆, 他反应胃有不舒服, 还有点轻微疼, 另外, 太阳穴疼.
10:43聊天 看到darkforce, 想不起来刘宇轩名字
11:05 聊到 发现心跳100多, 之前应该都是70多我觉得, 可能是大发导致的, 也可能是睡觉少, 也可能是发烧. (早上出门前量没有, 但一直觉得喉咙烫)
20:39 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-07-05":{detail:`19:50和小婷吃饭回来，说好像恍过一次，程度一般，恍完和小婷正常交流, 说是吃完饭后在盒马发的.
21:54左手有点针刺，54，现在变麻了，56好像好了，57，聊到，刚才到现在，都是大拇指针扎，持续到22点了
半夜麻了0次，睡醒麻了0次`,hh:[19],s3:0,s4:0},"2025-07-06":{detail:`14:09左脚，左手，有点涨烫麻，在美兰湖商场，过来的时候有点热
16:43恍惚，刚吃好肯德基，拉屎，梦境感不强，熟悉感没，44已经好了，说昨天也是这样，如果这样的话，时间很短
18:53 涨/烫/风凉
2230陪我吃面说有以前那样的晕，躺下就好了
半夜麻了0次，睡醒麻了1次`,hh:[17],s3:1,s4:2},"2025-07-07":{detail:`早上起来询问他一直不回答，在回忆，大概840点左右，报告晚上没麻，全程没恍惚，但是早上有视物不清的问题，视物不清结束后开始耳朵不舒服，类似耳鸣，但不是，只是用以往的语言描述不了，然后麻了，但坐起来后马上好了，然后感觉一直在做梦没睡着。
结合手表，看了监控4点20到 8点多起床, 是7:30发的, 比较严重的小发, 左脸已经抽搐了. 手机录监控了.
17:44恍惚，2，3分钟前，现在刚到家门口，梦境感很足，拉屎，吐，不断片，说是持续开车1，2个路口
20:49 涨/烫/风凉
22:12 涨/烫/风凉
22:46恍惚，拉屎，想吐，陪我吃完面，在兜，兜久了点，还在聊天，48，问好点吗，说好一点，还是想吐（就是还没好），还是48，还是说不知道今天星期几，什么情况，为什么出来。53，在路上，还有熟悉感，梦境感，说的时候就好了
半夜麻了1次，睡醒麻了1次`,hh:[18,23],s3:2,s4:2},"2025-07-08":{coner:["卫2","吡仑帕奈增加回2粒"],detail:`睡得可以，麻的2次程度一般，到眼睛，没其他症状，没恍惚（7.11醒，8点问的）
08:36 恍惚，37，问吃药了吗，回答吃什么药也不知道了，去大便了，手表看星期几，38，我问拉屎的感觉好了吗，他问，什么，我想拉屎吗. 到单位了聊到东西还记得, 短期断片
12:34微信12点报告恍惚
15:38 微信报告, 不久前尿尿的时候恍惚过, 程度和之前差不多, 断片, 不知道自己为什么在厕所, 刚才在干什么, 但仔细想能想起来.
19:22应该恍惚过了，01分到20分之间，可能是07分，因为我们本来再印象城，他有事回去，电脑在我车子里，拿电脑是07分，他说拿好电脑恍惚的。可怜
后来说尿裤子了，最后印象在选钥匙拿电脑。要看监控才知道是不是大发了
后来聊到鞋子里都是尿，那么不一定大发
07分拿电脑，电脑里文件创建是16分
后来聊到，今天大概下午到现在，都尿频
今天再试试2粒比轮怕乃
半夜麻了0次，睡醒麻了1次`,hh:[8,12,15,19],s3:1,s4:0},"2025-07-09":{detail:`起来没断片，早上麻得和昨天程度一样
08:43 应该恍惚过了，吃完药刚准备走，小哈开门，我进去跟小哈开了个电视的时间，出门问他有事吗（最近经常呆的，凑巧问到了）他说：“不敢过去，觉得过去很危险“，问断片吗，说不知道，知道星期几，44问刚才的“不敢过去“，忘记了，知道小哈醒了，问吃药了吗，说知道，问为什么电脑在这里，还说早上想过，现在又忘了
聊了问了下3天前开家长会, 不太记得了. 觉得昨天去印象城, 尿尿出, 是上个星期的事. 6, 7分真实度. (昨天睡前没恍过, 都是睡觉中与吃完药那次恍惚导致的)
这次的恍惚开始进入搞不清的状态了
09:38 恍惚, 在回忆事情, 但应该是联系不大的. 39又说压住了.
10:53 (末) 恍惚, 拉屎, 54, “说不明白, 难受”, 56(头)发作完, 没拉屎感觉, 搞不清状况. “也不知道刚才混乱个啥, 好像幻觉了, 为啥有个麦当劳也不知道”. 59主动说, 断片了, 问昨天在单位吗, 晚上有帮人家干活吗(答案: 都有), 04, 又说断片了, 应该是一起的, 而且不知道自己恍惚过. 11.11, 说看了和wendy的聊天记录, 包括昨天给他打500, “完全断片”. 11.20, 说看我们11.10的聊天记录也不熟, 35分又去问他, 状态好点了, 在干活了. 11.48, 他说怎么12点了, 感觉上午很短, 知道自己恍惚
13.55聊到尿尿多, 今天第三次了, 上次一小时前, 今天中午没睡觉
13.58聊到，一小时前有微信声音, 一共5, 6次
14:15 恍惚,(微信报告) 梦境感, 想吐, 难受, 有股味道, 说不清楚, 16, 熟悉感也有, 可能是梦境感, 我也搞不清. 17问, 没拉屎了, 有特殊味道, 可能跟噩梦连接, 味道不喜欢, 让我紧张的味道. 18头, 好了. 他开始问问题了. 知道下午, 知道几月不知道星期几. 22聊, 知道干活内容, 29聊到, 觉得昨天是周末(本次发作第一次)
15:53 耳朵叮叮叮, 聊到前两天做logo忘记了, 就是昨天晚上发给wendy的logo, 说了以后想起来了有4个logo.
16:03 说一直有耳鸣的, 聊到不知道为什么昨天他一个人在家, 答案是我和小哈在印象城, 11:54的聊天记录是知道的.
16:16耳鸣, 说听过，又有了
16:51说耳鸣可能是空调
17:35恍惚，在路口等红灯微信报告，37说断片了，还说“可能是”，45到家后，我和他楼下碰头，我问是不是断片，回答是，然后说话基本不理，应该是在想东西，可怜，站着不动到52分问我陈雨玄呢，会不会睡觉，18.01，看了跟Wendy的聊天记录都不记得了
19:52应该是恍惚了，刚洗好澡出来
22:15在陪我吃面，聊到有消极情绪，不想说，说比跳楼消极，安乐死，今天只吃了一顿早饭
半夜麻了0次，睡醒麻了1次`,hh:[9,10,14,18,20],s3:1,s4:5},"2025-07-10":{detail:`手表，睡了8小时多，3点多醒过
起来状态还可以，说断过片，(9.40补充: 这时候不知道自己在哪里, 猜过罗南, 结论是在芷江西路)但想起来过，早上麻得轻，看了录像3点左右人是没动，而且闭眼的，所以可能是3点恍惚？但不记录数据，因为之前睡觉也不记录
08:19在恍惚，躺着，问的时候说了句在发，20，问话不回答，21，不回答，22，坐起来了，好像发好了，问星期几和要上班了知道吗，他点头不说话
8.48聊到，半夜想过事情，想起来了，快起床也有一次，和8.20不是同一次，但是也不记，作为参考，而且他能说自己发作过
20:43 涨/烫/风凉
10:49 问有没有恍惚, 没有, 但头有点晕, 说不清.
12:14 (末)恍惚,(微信报告)非常想吐, 熟悉味道, 16, 问, 回答梦境感, 刚不知道想啥, 17, 问, 没想吐了, 18问, 回复感受很差, 应该是发好断片了. 19说没断片, 知道刚是恍惚了. 后来中午还睡了会, 睡到13:30
14:59 (末) 恍惚, (微信报告), 想吐, 问还想吐吗, 02头回答还想吐, 03分, 说, 我不知道刚才恍惚了, 也不知道刚刚想吐. 04说, “今天是星期四吗, 有点断片”, 说, 早上是不是有啥? 我也说不清楚, 比如我什么地方不行, 比如比赛输了, 发现其实是我吃药关系, 15:30 问情况, 情况不好, 做的东西都忘记了, 比上次发作重.
22:05恍惚，在陪我吃饭，拉屎，06，梦境，全程跟小哈说话，还有拉屎的感觉，问了确定没熟悉感，07，大便感觉好多了，但还有，不多，09聊，没断片，知道自己恍惚
搞到11.49回家，吃药，又出去给小孩买水
折磨到00.24，我和小哈到房间了，他躺了会，还没睡
半夜麻了0次，睡醒麻了0次`,hh:[8,12,15,22],s3:0,s4:2},"2025-07-11":{detail:`晚上没断片，没麻，睡得也好的
09:47 （末）恍惚，（微信报告）不强，想吐，拉屎，有一点熟悉感，50问没回复，51回好了，知道自己恍惚，说不记得Wendy工作内容了，说不算断片
11:33 聊到头一直比较晕, 但不算严重. 中午第一次点饭了.
14:43耳朵叮叮叮半小时 还在叮
14:45小手指有一点麻 快半小时
18:59恍惚，想吐，熟悉感，说大概有了一分钟，刚在跟小哈搞ipad密码啥的，00好像好了，没断片，不顾阻拦跑去拉屎了
半夜麻了0次，睡醒麻了0次`,hh:[10,17],s3:0,s4:3},"2025-07-12":{detail:`今天开始肚子疼
晚上11点，我和小孩在楼下吵架，小孩要吃尖叫什么的，小孩吵着他抱着
0.20还没睡觉，30小哈躺下，38他躺下
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-07-13":{detail:`手表显示1点睡到8点半16
今天有点兴奋
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-07-14":{detail:`聊到头有点晕, 动了更晕, 紧, 但周六, 周日没有晕.
11点聊到还是头晕
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-07-15":{detail:`17:02 聊到, 觉得这两天, 都有左手小手指麻1~2分钟, 但不确定.
今天干活忙, 加班了, 也没睡午觉
18:08 熟悉感很厉害, 没有想吐, 觉得同事下班, 然后给了他吃的, 觉得画面很熟悉
19:48 手指又麻了
8点硬叫回家, 要吃药了.
手指还没完全好
21:49 轻微恍惚
回家干活到10点半，洗完澡躺着，11点半我把小哈带出去开始睡觉，回家后就不爱说话，担心
半夜麻了0次，睡醒麻了1次`,hh:[],s3:2,s4:1},"2025-07-16":{coner:["卫1","吡仑帕奈减回1粒"],detail:`好像是早上麻了一次，不重，早上5点多醒了41分钟，因为小哈爬到他身上，早上询问情况，全程不说话，我有点发火了还是不说话
问不说话是因为累还是不知道，用摇头表示不知道
出门前只说了1句话, 从昨天回家到今天出门没啥说话.
经过询问, 昨天头也晕的, 应该有抑郁.
昨天工作忙, 是李的logo, 说还没结束, 但今天会结束, 今天中午还要和wendy吃饭.
抑郁是因为哔伦耐帕还是工作忙, 还不确定, 不敢盲目减药, 因为上次减药后睡眠明显变差, 并且第二天大发了(也不确定是减药的关系). 也可能是姨妈
好心疼, 希望会好转.
9:40 询问, 都是下午晕, 现在还不晕. 昨天21:49点了(轻微恍惚), 现在问说是点错了, 具体不知道.
今晚比轮怕乃吃一粒了，11.20吃的，哈还没睡
半夜麻了2次，睡醒麻了1次`,hh:[],s3:3,s4:0},"2025-07-17":{detail:`减药第一天，小麻3次，前后2次都到眼睛，中间次好点，手表显示睡得可以不断，但是7点醒了，平时都是8点10后
比昨天愿意说话，但我感觉还是抑郁，继续观察，今天开始要注意晚上少看手机小心大发
13:38 中午睡了一会起来小麻了, 说先右腿, 再左腿左手, 右腿可能是压的, 具体不知道了. 后来补充应该是麻过的, 因为有失重的感觉, 但是好得快. 而且醒来左边耳朵轰轰轰的, 应该是不正常的, 又睡了下, 又有了, 就不睡了. 而且”没有特定的一边”的感觉, 可能是2边. 
13.49聊到 晕过, 但现在不晕过, 说是早上晕的, 又可能是昨天或者中午, 不知道了.
14:37头晕了
今天也是加班掐着8点45到家吃药。
然后因为厕所占用之类的很晚洗澡
11点，小孩发疯，说基地被拆了，他跟小孩说话说到11点20，小孩睡了，他准备睡
23.34.00右手遮眼睛，遮到36秒
半夜麻了1次，睡醒麻了0次`,hh:[],s3:2,s4:0},"2025-07-18":{detail:`入睡时麻，到眼睛，情绪看起来还是抑郁，没问，好像好一点，这次抑郁是14号开始的16晚开始减药的
10:18 耳朵一直叮叮叮, 蛮久了, 好了一会又开始, 可能超过10分钟.
12:24耳朵叮叮
12:39耳朵嗡嗡叮叮
12:56耳朵嗡嗡
13:22耳朵叮叮叮
14点问了头不晕, 工作忙.
13:54耳朵嗡
15:25 左手小指是那种没有知觉的胀, 连到手, 感觉手”不太受控”, 越靠近手掌越没感觉. 30, 轻飘的, 又涨又烫, 和身体麻很像., 49分问, 说是减弱了, 而且有”饿”的感觉, 16点手还没好, 但没意开始麻
16.08聊到前两天看卢广仲泪流满面了
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:6},"2025-07-19":{detail:`睡觉6小时40分，但是质量好，没断，第一天没麻
今天和10号一样，但已经不记得10号晚上的事了，中间明明没有断片的恍惚，现在11.17，都在床上，小孩还没睡，48小孩还不睡，不让他上厕所，他从11点以后情绪就在变差了，脾气比较大，因为小孩不睡觉而焦虑心烦，12.04躺下睡
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:0},"2025-07-20":{detail:`半夜麻程度一般
13:22 恍惚，在去大华虎城，场中路上桥的时候，呕吐好，23，梦境感，胃里的味道熟悉，梦里。24，好了，知道要去哪里，觉得刚才在聊的事是昨天说的。25，没想吐，但是这里有梦里来过的感觉，28，还有熟悉感，说这个路一模一样，31好了
半夜麻了0次，睡醒麻了1次`,hh:[13],s3:1,s4:0},"2025-07-21":{detail:`5点尿尿，还没麻，又睡下，小哈要喝水，帮他拿好回来，又睡的时候麻了到眼睛，时间长，觉得流口水，摸一下都没有
16:30耳朵嗡嗡
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-07-22":{detail:`10:28 觉得头不能动, 动了会失重, 比较轻的失重, 能忍, 不动也有一点, 42, 头还一样, 11.16问头还一样
14:31耳朵嗡嗡
19:26 涨/烫/风凉
17.13问头晕说好了
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-07-23":{detail:`10:03耳朵嗡
12:09耳朵嗡嗡
只睡了7小时，但是状态好
这两天有热泪盈眶
今天哥圈圈吃饭，宝山万达，回家迷路了，9.14吃药，晚上11.20到床上，小哈还没睡
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:2},"2025-07-24":{detail:`和昨天一样，7点自然醒，一共睡了6.45，但是状态好
09:43恍惚，要吐，梦境感，拉屎感，44，好了会跟你说，现在有梦境感，45，比较难受，但没呕吐，46，现在难受的，47头发作好，48，说“又有点”，有梦境感，50，算好了，觉得和圈圈碰头不真实了，很久以前，但和圈圈碰头是自己提的，知道星期几，算有一点断片
57头，说又有点梦境感，不敢问，59头问他，说比较懵，脑子不行，头不晕，没在发作，“但是硬感受可以感受到的”，打字的时候有点梦境，不知道断不断，跟昨晚有点断，一会看会不会恢复（原话）
10:02耳朵嗡嗡
12点不到, 看卢广仲访谈, 被觉得普通的话听得笑出声了
下午看傻逼全嘻嘻泪流满面
18:29恍惚，想吐，在回家路上，刚还看了火车，29，想吐，头晕，梦境感，30，想拉屎，有点梦境感，30问话一直没回，估计开车了，34，说停车跟我说，已经想了很久，现在不知道为什么加班，做了什么不知道，36说想起来了，39还聊到，感觉路上想吐，不是恍惚，记得自己恍惚的，54，有很重的不想社交，不想见人的疲劳感，之前还说梦到不想回家，想外面兜一圈的感觉，有很多负面情绪，19.11 开始开车往回
19:56 涨/烫/风凉
20:13 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:[10,16],s3:0,s4:3},"2025-07-25":{detail:`睡觉多了，7小时半，起床断片了，问断片程度，不说话了。
8.19说，是起床的时候刚恍惚的，他是7.30醒的我是8.08 醒的
9.48聊到早上恍好后忘记位子了, 后来都想起来了, 现在的感觉是”不觉得忘了什么”
15:20 恍惚, (微信报告), 想吐, 在画表情, 21, 问熟悉梦境有吗, 回答 = =, 说不清, 22, 问呕吐的感觉答好一点. 然后问”早上是不是有啥情况” 然后接着说, 这句话熟悉感很强. 然后说这句话也很熟悉. 24, 不记得恍惚过了, 说了一些乱七八糟的感觉. 26, 说”现在竟然下午了”.  29, 说理智上知道和圈圈碰过头, 但是一直提醒自己的, 不觉得是这周的事, 觉得是上个月. 现在想到印象更弱了, 并且觉得在梦里.
21:09恍惚过了，我带小孩从外面回来，他在洗澡吃药期间恍惚的，询问，回答说搞不清楚，21.21说吃药的时候恍惚的
半夜麻了0次，睡醒麻了1次`,hh:[8,15,21],s3:1,s4:0},"2025-07-26":{detail:`早上8点问断片吗，回答不知道，8.27说是醒来以后恍惚的，7.14醒的
09:54恍惚，拉屎，说完这句话，说正式开始恍惚了，叹气，55，打嗝，问面前的支付宝袋子是哪里来的（刚才是知道的），57，应该是好了，说不知道刚才呕吐了，猜礼拜六，早上，58，说不知道架子上的牛奶哪里来的，好像刚才一起玩游戏的
16:23在聊小黑，他说突然有害怕的感觉，梦里梦到，呕吐的感觉，又说要去拉屎，被我拉住了说发完再去，24，打嗝了，问了，说现在只有想拉屎，没害怕的感觉了，26头，算好了，没断片，28，隐隐约约闻到很奇怪的味道，又补充说从一开始就有，31，还有, 35, 还有, 46问, 说好了已经5分钟了
17:39只有熟悉感，没有拉屎，暂时不算
19:21恍惚，拉屎，想吐，22，想说我说的话有什么的感觉，但是说不清楚，然后开始说“好像是不是真的奶奶说过”的胡话，然后说有熟悉感，23，又说有熟悉感“卧槽，一模一样”，24头，看手表，看日期，确认发作好，但是搞不清楚，打了个嗝。我说了星期六后，表示不太知道，30，问是不是下午睡过觉，我说每次发都这样，他问发什么了，不知道自己恍惚了
21:22恍惚，想吐，梦境感，在吃生煎，他在手机聊微信，22，想拉屎，23，难受，梦境感这次比较足（原话），24，好了。问了点，记忆还行，没断片
早上其实是小麻接大发的, 所以记一次小麻, 大发记在第二天.
半夜麻了0次，睡醒麻了1次`,hh:[8,10,16,19,21],s3:1,s4:0},"2025-07-27":{detail:`6:48 大发，50秒左右，全程有意识，发完来抱我，还没断片，手表显示睡觉6.48，连续。晚上也没不开心，晚上也吃药的，找不到原因。不知道是不是昨天我凶了，因为小孩尿尿心烦而已，而且睡前没不开心。发完我出去看的时候爷爷刚出门，不确定是不是他声音太吵，但也不能作为发作的原因吧，7.13，我刚记录完，询问后，说半夜恍惚过，问怎么知道的，说不知道，因为手表看睡觉没问题的，但是记得昨晚吃生煎。9点说，内裤上有很多血，时期是排卵期，但是不知道情况
07:25恍惚，想拉屎，和之前差不多的那种，26，肚子叫，说很难过，想吐，27，有他们正在入侵我娘家的感觉，谁在入侵，我的同类，乖，素，讲不清楚，28，吐气2次，咬牙一下，28末，不想吐了，29，问奶奶刚刚来过吗，为什么（原来刚才是这个感觉）知道自己发过，还说不是全程清楚
10.37聊到太阳穴紧，想明天请年假
11:35 恍惚，在客厅和小哈玩，我在准备拖地梦境感非常足，熟悉感有一点，有拉屎感，37，好了，没断片
12:26恍惚，呕吐，拉屎，打嗝，27，“没完全好”，27，熟悉感，之前在看流星花园，现在在看，说觉得看过，但不知道是什么电视，29，应该好了，忘记自己发过了，38，问情况，说等一下，搞不清情况
14:35恍惚，梦境，熟悉感，说“一模一样，太像了”，其实是34末开始，36，说骑吧，好一点了（我们在去美兰湖商场路上），不断片
15:49恍惚，刚到美兰湖商场，之前是被雨困在加油站，梦境感，想拉屎，49，梦境感足，感觉一模一样，又问了“这里之前来过吗”，51头，好了，没断片
16:52恍惚，在回家路上，想吐，觉得上次这里停过，一模一样，53，梦境加熟悉，54，好了，不断片
17:51 沙发上躺着睡着了会，估计17.30左右睡的，刚坐起来，看起来很迷茫，问了几次，不回答，53，又躺下去了，全程没说过话, 睡到20.37, 我想去叫他, 才走到地板, 他就自己醒了，询问，断片了，上午下午，星期几，都不知道，询问了下，失忆厉害，今天下午的事情只有片段，昨晚去吃生煎完全忘记，旁边的妹子长啥样不知道
21:35 我从奶奶房间到房间，他正在发微信给我，恍惚，要吐，已经发完了，断片。36，问我刚有睡觉过吗，睡哪儿的。不知道礼拜几，问刚刚是不是带小哈一起出去骑车了（没有，是他说考虑过会去），知道刚吃过三黄鸡
22:47 恍惚，刚哄好小哈睡，到家门口，我腿麻，他硬要去扔垃圾，回来恍惚了，想吐，47，说等一下，说：好恐怖，指着别人的车，问是不是我的，49，说我不知道我发什么了，今天是礼拜天吗？，聊到58，问了3次今天礼拜天吗，2次为什么刚才出去，2次我是不是平时带着手表，我太热进房间，他在外面撑着头想事情不肯进来，内裤血只有早上有后来没了，23.25 让他冥想开始睡觉了。今天早上看过，他其实睡觉也没有很少，找不到原因
01:50突然拉肚子，在厕所10分钟，说弄短裤上点，问断片吗，看起来状态可以，并且回答只记得晚上带小哈出去，其他不知道了。想洗内裤，让他别洗直接睡觉，回床上睡错地方，横过来睡了，我让他直接睡，他说是以为本来就是这样睡的
半夜麻了0次，睡醒麻了0次`,hh:[7,11,12,15,16,17,21,22,23],s3:0,s4:0,s1:[7]},"2025-07-28":{detail:`早上问有没断片，说断了，但问晚上拉稀，记得，问有没有麻，说不知道了，睡觉是8小时，手表看起来是可以的
08:09恍惚，呕吐，拉屎强，又说我去拉屎了，10，咽口水，吐气，主动说还没好，胸口堵和烫，11，看手表，估计是好了，不断片，但是肚子叫了很多下，去看手表，问看什么，说丁丁，问我有没有看过，说了一些胡话，应该是看本月迟到机会的意思
这次恍惚是我主动问的，他想去上班，今天应该是会漏很多恍惚记录了
9.40 聊到，衣服湿了，电脑也湿了, 应该是淋雨了, 但自己不知道为什么，坚持说没恍惚过，但是路上不知道星期几，聊到昨天下午的事，觉得一个月
11.54聊到上周六去芷江西路的事情完全不记得, 并且一些事情, 比如早上带的饭放哪里, 不太知道,  但确定没恍惚过.
13:10 恍惚, (微信报告), 恍惚, 想吐, 想拉屎, 难受, 梦境. 自己说没断片，是已经恢复了报告的，
18:05 到家了楼下坐一会18:13 说出去晃一圈回, 19点回, prefer不要我跟着, 应该是有了抑郁和轻微敌意, 我尽量少问少缠着. 51我没忍住问了下愿不愿意让我去, 婉拒, 原画等我走到走不动了来接我, 现在走得动, 沿着陆翔路向南走了. 19.16 忍不住问, 拒绝我去, 说到8点半回来吃药. (后面记录在19:23恍惚的描述后了)
18:19 恍惚, 梦境, 吐, 拉屎. 21头, 问情况, 说好点, 主动说应该没断片. 位置在途虎养车, 和6/25一样, 但上次我找了他, 他就因为什么和我上去了.
19:23 想吐, 拉屎, 恍惚, 屁股和头都烫, 25, 问他, 他回答”看到有个男的, 应该也是, 他也恍, 然后衣服上有点东西, 忘了, 反正可能跟我一样, 27问好点了吗, 回答不知道, 一会再想想, 我问那个男的还在吗, 28, 回复, 断片的, 哪个男的? 刚才陆翔路是宝安公路向东走了, 好像在菊盛路往回了. 我问能不能去, 他说再想想. 他有10分钟没动了, 我准备去了, 不打算告诉他, 怕他冲动什么的
看到他以后我跟着后面，他走得很慢，我放心很多，但很难过，不敢打扰他，跟着。我走过的每一段路，都在想象，是他几秒前刚走过的，想感受他的感受
半夜麻了0次，睡醒麻了0次`,hh:[8,13,18,29],s3:0,s4:0},"2025-07-29":{detail:`08:19恍惚，想吐，20，肚子叫，胸口很烫，肚子叫，22，看了下手表，估计是好了加断片。询问，知道上午，不知道星期几，问了回答断片“不知道有什么事情”，问麻过吗，说好像麻过，但是早上问说没麻。问知不知道恍惚，回答是好像在那恍惚，不确定<那是指了指门外>
10:27 恍惚, (微信报告), 原话”= = 再说, 反胃的味道味道”, 32, 说刚才想打字告诉我什么的忘记了. 然后我问有没喝水, 他是从来没喝过, 我发了一下脾气, 受不了, 小孩和大人都不配合, 明明是我在帮他们. 37 他本来在写微博, 到一半恍惚了. 
13.49找他聊，他说记性非常差，刚还想找我说什么，忘记了，说星期几，也想了很久，但是自己说没恍惚过，完全忘记Wendy吃饭了
16:15 恍惚, (微信报告), 吐, 拉屎, 16, 问脸烫, 没梦境感, 17末, 问好了吗, 说”还没完全”, 18, 主动说”我刚刚想到什么, 我想说的, 现在忘记了, 19头, 我问好了吗, 说”算好了, 没完全, 还是有点想吐”, 没断片, 知道刚才在说移动的事. 24, 能回忆恍惚开始到结束的过程.
20:38恍惚，正在吃药，有点尴尬，39，没完全好，还有一点，41，问，没不舒服，但是搞不清情况，46，说自己大概率吃过了，不知道自己恍惚过。断片
半夜麻了0次，睡醒麻了0次`,hh:[8,10,16,21],s3:0,s4:0},"2025-07-30":{detail:`醒来断片，询问后是醒来断的，不是刚断的
8.56 在路上恍惚，想吐，拉屎，是10.06报告的，但是9.11是聊过天的，当时没说，说迷茫，但是没完全断片
10.12聊到早上醒了几次, 有和我妈睡的感觉, 这个在7/10的时候也有过
22.38聊到一直有点想吐的，应该是大发后遗症，过几天就好了
00:32手捂头，咂嘴，不确定是不是恍惚
半夜麻了0次，睡醒麻了0次`,hh:[9],s3:0,s4:0},"2025-07-31":{detail:`早上问应该没断片，不是很精神，早上3点和5点尿尿，7点半就醒了
11:41耳朵叮嗡声音
12:30耳朵嗡嗡嗡
14:15 小手指有点失去感觉, 可能是麻, 已经十几分钟了
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2025-08-01":{detail:`今天早上吃药的时候壳掉水里什么的，左乙拉西坦可能没吃！！
今天说了很多话，22.47洗澡
我和哈1点不到回家，不小心踩了下他脚，肯定是有点醒的，我们是30出门55到家的
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:0},"2025-08-02":{detail:`22:50聊到，想过坟墓和撒大海，对来世有没有影响，今天自我评价没用抑郁
半夜麻了0次，睡醒麻了2次`,hh:[],s3:2,s4:0},"2025-08-03":{detail:`小哈晚上来我这里，我只能睡他这里，大概5点多，小哈醒来后大叫，他麻了2次，有人，到眼睛。
19:25回声，自己说话，声音有点奇怪，28说已经有十分钟了吧，告诉我的时候已经有一会了，38，还是这样，应该还行，20,34说算好了，不认真感受没有
今天不抑郁，问的时候快速正面的回答没有，昨天犹豫着说的。我好开心。然后小孩23点还没睡，但快了，感觉他有点因为小孩不睡觉生气，小哈睡着后他刷牙到11.20准备睡，进行了今天第二次urs，35了
半夜麻了0次，睡醒麻了1次`,hh:[],s3:1,s4:1},"2025-08-04":{detail:`和昨天早上类似，被小哈吵醒，5点左右，然后想要入睡的时候麻的，有口水的感觉，没人
14:40耳朵叮叮
15:04耳朵嗡嗡嗡
15:34耳朵嗡
15:55 涨/烫/风凉
15:59耳朵嗡
16:34耳朵嗡嗡
17:02耳朵嗡
18:52 涨/烫/风凉
加班，说没做完，状态差，不知道是不是指工作状态，20.23才下楼，20.59吃药的，22.30干好活，23.30洗好澡，还在看手机，下楼哄小哈睡觉，0.23上楼，0.30开始睡觉
半夜麻了0次，睡醒麻了3次`,hh:[],s3:3,s4:8},"2025-08-05":{detail:`早上说2到3次，时间，严重程度，都不知道了，但说没恍惚过，手表显示睡觉连续的，但是不多，问话又不爱说话
10:37 涨/烫/风凉
12:03耳朵嗡嗡
12:23耳朵嗡
14:06恍惚，想吐，想拉屎, 07, 有梦境感, 难受, 不说了, 要吐, 09, 好了, 说有点断片, 没有熟悉感, 发完后梦境感厉害, 一直在说什么梦里的画面, 但又描述不了. 14.30 聊到感觉”放学不想回来”, 但是有点意识到是生病, 所以告诉我, 还说”到放学了再说”, 15.15, 幼儿园群里老师让改群昵称, 他很快改了, 人应该还行.
17:06 涨/烫/风凉
17.07 主动告诉还是不想回家, 后来还是打算回家了
23.02 躺下，23.19突然坐起来，找了一下裤子，问麻了吗，等等，不回复，一分钟后躺下继续睡，录视频了，和7.27那次很像，害怕
半夜麻了1次，睡醒麻了0次`,hh:[14],s3:1,s4:4},"2025-08-06":{detail:`早上问没麻没断片，但是问23.19的事，又说是麻了
10:29耳朵嗡
11:18耳朵嗡
14:37耳朵嗡嗡
22:51问有抑郁吗，想了会说我忘了，觉得周末的事是昨天的
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2025-08-07":{detail:`晚上3点尿尿，睡得不好，睡前就报告了不喝水也尿尿的问题
10:04耳朵嗡
10:22 头涨, 有点晕, 都是一点点, 和动不动没关系, 24, 说加起来是失重的感觉, 里面被掏空, 刚才就是这样, 只是现在描述, 但是描述不了, 只是尝试描述. 27, 还没好, 说干活没问题, 11.32问, 还有一点, 有好点, 不知道是不是习惯了
17:46 涨/烫/风凉, 13.43睡了半小时说好像好了, 这个情况和7/20很像, 恍惚-尿尿-头晕
14.29聊到自己也觉得视频没什么好流泪的, 在”忍住流泪”
15.35 主动说, 有呼吸困难,心悸的感觉, 但是不严重
17:50短暂的回声，还是失重之类的
20:47恍惚，想吐，刚才梦境感很强，48，说礼拜几不知道，面前在玩的玩具，和刚在吃的东西，都不知道。49头，说好一点，52，还有梦境熟悉结合的感觉，59，想起来一点事情，但是还是有梦境感，01分说好了
23:07手涨了一下，手失重, 26还没好, 准备睡觉了
半夜麻了0次，睡醒麻了0次`,hh:[21],s3:0,s4:4},"2025-08-08":{coner:["医院/朱","朱国行"],detail:`今天看朱国行，他是20分钟一个人，哈哈
10:21头有点重，在诊室外，算晕，说像低血糖，动会严重点，27，没有了
朱国行看了磁共振, 发现24年的比22年海马肿了, 说和生小孩有关, 并且就是一年发的.
聊到情绪低落，医生说发作吃药都有可能有关系
然后开了验血, 海马磁共振, 3小时视频脑电图.
脑电图是排着视频, 让闭眼尽量睡觉, 这样视频和脑电图有对比.
开始的换气测试，我很惊讶，原来人眼睛闭起来，所有脑电图就都平了，脚动就是下面那排，眼睛动是上面那排
13.43分开始弄脑电图, 46医生走的.
13.53分的时候有咋追, 拉衣服之类的动作
13.59分脑电图看起来有点乱
14.00 旁边床的人说了句话, 中间偏右右边一块就凸起来一下
14.05 最后边那排有波动, 然后右边都有波动了, 下一轮就好了, 然后又有了.
14.07 中间偏左那排有点波动, 就一轮
14.11 小麻了，我拍了视频，他睁眼看了下情况，好像反应过来了，继续闭眼了
我去机器看了下，原来竖直的是时间，所有横线一起动就是没问题，刚才只有上面2个动
14.19好像上面2跟有波动，他闭着眼睛眨眼
在刻意观察下，上面2跟一直比起其他的有异常波动
16.04记录，后来发现有状态提升，就一直是昏睡状态，所有横线都在波动，但人姿势没动，应该睡着的
21:39觉得有回音，现在已经好点了
今天肚子开始有点疼
半夜麻了2次，睡醒麻了0次`,hh:[],s3:3,s4:2},"2025-08-09":{detail:`睡前和半夜各一次，具体程度记不得了
13.01 聊到，忘记自己碰到我和5号是在学农，现在说，像是学校里阴暗角落，之前4月我骨折，她和我一起看1988还记得的，问了，小哈生日时间还记得，看了相册，不记得316去放风筝，还记得天街过道樱花，还记得自免脑的照片
18:31恍惚，在吃大牛，梦境，想吐，想大便，现在的场景跟梦里真的很像，32，缓一下，现在很想拉屎，33，没想拉屎，搞不清楚啥情况，礼拜几，知道在哪里，36，问我是明天要跟圈圈碰头吗，是的，37，还有梦境感，觉得很真实，问是不是以前也和小哈来吃过，39还有，43没了，56，问觉得断片，我感觉还行
今天肚子也疼
11.50起来尿尿了
0.55 起来 问了说肚子疼，没别的，立马睡下了，1.01又起来一次，1.23拉屎成功回来，肚子还是疼，没说过话，担心，躺下了
2.06 又起来了，估计还是肚子疼，11，尝试搭个台子，尝试趴着睡，14重新躺下去蜷着肚子尝试睡，问他要不要换我这里不冷，没理我，20又起来了，可怜死了，又躺下去，30又起来，出去尿尿了，39尝试躺下
6.24 尿尿
8.00 小哈醒了
半夜麻了1次，睡醒麻了0次`,hh:[18],s3:1,s4:0},"2025-08-10":{detail:`睡觉非常差，手表显示5小时。醒3小时
问抑郁厉害吗，摇摇头，不知道是不厉害还是没有，1248聊到，麻得不厉害，在等他到眼睛，结果没到，也不重
10:05起来到现在一直有晕
今天和圈圈华山路海底捞，11出门13碰头15.40分开
15:54左脚和手有点麻，脚比手厉害，55，还有一点但是不重，58，好了
18:50恍惚，有点想吐，有点熟悉感，51，想拉屎，梦境感，熟悉感，梦境感“简直一模一样”，打嗝，今天之前好像有过，但压住了，52，我看他，他主动说，我好了会告诉你，过了会说“没好”，53问想吐吗，摇头，知道礼拜天，不断片
半夜麻了0次，睡醒麻了0次`,hh:[19],s3:0,s4:0},"2025-08-11":{detail:`今天睡得好，晚上肚子没疼，而且没麻，感动
09:44 恍惚过了, 到单位报告的, 今天是9:15走的, 没断片, 南蕴藻路前面那个桥恍的. 想吐有的, 熟悉感梦境感不确定, 那么就起码不重. 47, 正在聊, 他说”不想了, 再想要不行”, 不知道是不是恍惚了, 51确认没恍惚, 开心
12:40耳朵嗡
今天看视频没感动
16:04 聊天的时候头涨了, 在吐槽外婆, 说是激动了, 昨天, 06说, 左边身体热, 手臂烫, 头轻微的麻. 16问已经好了, 对外婆的讨厌也减少了, 但觉得刚才的情绪不是发作
19:25恍惚，在吃饺子，小哈有点搞，吐和拉屎，26，没断片，主动问出来的，不知道什么时候开始的
半夜麻了0次，睡醒麻了0次`,hh:[10,17],s3:0,s4:1},"2025-08-12":{detail:`小哈吵，其实没睡好，但手表显示8.5小时，而且连续
今天路上车胎没气没法开了, 天比较热, 去换了轮胎, 12点wendy又布置了任务, 今天是做不完的那种, 16:00 还没说报告任何不舒服
21:25脑袋紧
22:53有点脑袋紧，跟刚才一样，03问，好了
23:33说刚才听到消防车，现在有回音，35，又听到消防车声音了
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:3},"2025-08-13":{detail:`手表看起来睡觉还行，但是自己觉得睡得不好，但是不是自己原因，是小哈原因
另外我感觉最近打嗝很多
08:44已经恍惚了2次了，只有拉屎和呕吐，一个是我尿尿的时候，一个是刚才，没断片，没熟悉感，但是自己确定算是恍惚
0938聊到还记得周日的事, 最近也自己主动点外卖吃, 很好
10:22问情况，答头有点涨，大概是没睡醒，没事
12:48 在聊外婆, 有点情绪, 有点心跳的很紧, 觉得血上来了
今天主要做wendy的东西, 3点问还被说不好看打回了下
2219主动说以前给奶奶送过葡萄
22:21感觉不能想东西，不想就好了，说朱国行觉得自己是什么角色
22:44左半边有点小麻，烫，47问，好一点，50，好了
22:57听到救命车声音，就一下，准备睡觉，哈已经睡了，我们出去了20分钟
今天睡觉咂嘴很频繁
半夜麻了0次，睡醒麻了0次`,hh:[8,9],s3:0,s4:5},"2025-08-14":{detail:`没睡醒的, 大概是眼睛痒, 最近心情还挺好的
9:06 恍惚了下, 想吐拉屎, 还比较轻, 好像在想什么事.
11:27 恍惚, 有一点点梦境感, 其他就是吐之类. 29头, 主动说差不多了, 就是想拉屎, 本来就想拉, 其他都好了. 自己说”应该没断片”. 
问要不要兜一圈, 说没有不想上楼
2个人吃了美兰湖小杨生煎, 没啥事, 开心, 最近老打嗝
21.00 大概是9点多，小哈绑架的时候，头很紧
半夜麻了0次，睡醒麻了0次`,hh:[9,11],s3:0,s4:1},"2025-08-15":{detail:`手表睡了8.30，自己还是觉得没睡醒。5点多小哈搞了下，我带出去了半小时，回来也有点动静的，但是算不大
状态看起来还可以，但是不太爱说话，应该是没睡醒
10:48 脑子紧, 看微博的东西, 有点情绪, 也不一定是坏, 看到25.2\b.14 我说他洗碗不干净, 我正在道歉, 11.18聊到没事了
今天晚上吃了捞王，太饱了，今天还聊天很久
大概12点前打呼了，睡觉很快，52分小哈叫把我弄醒了，我跟小哈说了后，小哈不叫了，我来记录这些
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:1},"2025-08-16":{detail:`还是没太睡醒，其他没啥，urs了但是结束发现有一点blood
932聊到，最近都几次被压的，大概就是3，4天里有3，4次，最多的一天1，2次
14:23晕了2秒，脑袋里面转，说是看到刚才拍的超市工资，6000到7000，然后觉得自己是7000，还可以又觉得到手了只有6000，太少了，失落的感觉，导致不舒服吗
约了明天中午和前进吃饭, 晚上给小哈拍入园照
14:48感觉喉咙有点风凉，之前有过几次了
16:05又有喉咙风凉
16:54风凉感
17:14耳朵有一点回声，左边，19还有，说是低音印象的感觉，22变成鼻音了，接着说好了
17:41刚才有点头紧，好了，说最多5分钟
20:53感觉压住了次，大概10分钟前，刚吃完很久以前
22:32头有一点点紧，一点失重，很轻的很轻的麻，2次了，现在在兜，34，说有点失重，36，还没好，可能是吃药
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:8},"2025-08-17":{detail:`中午太阳下走了50分钟，和前进碰头
17:00喉咙里又有风凉了，刚和前进吃好饭，下地铁，我单位这里，准备做摩托回
22:17失重，可能也是药，和昨天的时间差不多，但是仔细体会，是半边的，不明显
半夜麻了1次，睡醒麻了1次`,hh:[],s3:2,s4:1},"2025-08-18":{detail:`手表睡的8.6小时, 自己也说睡得好的, 但3点起来尿过, 并且小哈其实一直在翻身, 估计是气温不对, 并且他经常砸嘴(青蛙声).
晚上麻一次, 到眼睛, 早上麻一次, 感觉有人. 程度都算是中等.
昨天聊到觉得朱国行能让人减少发作的原因, 是他给了确定的答案, 确定是生孩子导致的.
10:42 头有点紧, 52主动说还没好, 和昨天晚上有点像, 怀疑早上有没有吃错药, 因为前面2天晚上觉得是吃药导致的. 11.11问好像好了
11.14 说好像又有点, 刚才同事来跟他说话, 就是普通的问显示器, 但是他不想说话.
11.18 说头又紧了, 刚才好过, 20问, 说好一点了, 应该好了
12:44在看全嘻嘻宿舍聊天，泪流满面2，3次了，餐巾纸那种，要暂停的
晚上聊到, 场景是大象一个人走的时候, 想到这个大象如果是我或者她, 就感受到很难过, 我觉得不是发病, 因为我也是如此的.
19:03喉咙风油精
23:22左腿有点涨麻
今天睡觉有点晚，失控了，之前都是带小哈睡，我们出去兜一圈，今天小哈下午睡了1小时，奶奶还带他出去玩到10多放电了，但没安排好，弄到23.37还没睡着，0014小孩终于睡着，他翻了个身，应该已经睡着了
半夜麻了1次，睡醒麻了0次`,hh:[],s3:1,s4:5},"2025-08-19":{detail:`睡前麻了一次到眼睛程度中等，睡觉时间也是可以，手表显示可以，自己觉得睡得不太好，但也没很想睡。我也差不多，感觉传染了，而且后半夜感到很重的失落感，不知道原因，在潜意识吧
10:04 涨/烫/风凉
10:26 喉咙风油精, 32好了
11:08 风油精
中午说睡了10分钟”自己感觉快不舒服了就醒了”, 但是没有不舒服, 像是身体在保护自己
15:28 说有过2次耳鸣, wendy的事, 工作有点紧张的
17:46放学尿过，到家又想尿尿了
20:19从出来到现在，都有一点点回音，20.00出来的，39，到家了，还有，刚才去五彩城吃饭，又去了印象城兜了一圈，44补充的，没出那里就有了20点前
20:43风油精味道，耳朵还没好，49，风油精好了，耳朵还有点, 确定是左耳朵, 或者鼻子, 堵住的感觉, 不是很厉害，21.22耳朵还没完全好，还经常打嗝
21:35尿尿，急的，不过喝了水
21.52洗好澡说耳朵好了，进房间又说没完全，22.13还没好
22.49 躺着不说话等小孩睡，还没吃药
23.11 准备睡觉，声音没了
23:30睡前刚尿过，又想尿尿了，尿了，不多
0.21 热醒了
半夜麻了0次，睡醒麻了0次`,hh:[],s3:0,s4:5},"2025-08-20":{detail:`说睡得好的但是没睡醒，算正常
12:57 涨/烫/风凉
今天下午工作很忙
17.53到家, 说不上楼了, 自己走一下, 问有没有不舒服, 说”一会儿说吧”.  18.00 追到了，说恍惚了，断片了，外环这里有个小桥后，快黄灯了，恍惚的，很轻的梦境感，忘记我忘记什么了，聊到今天有很多次恍惚被压住了，虽然断片，不知道断了什么，知道我们约好吃东西，然后小哈睡了，带她到美兰湖一起了，小哈要回，就回了，19.18到家，今天有排卵有点出血
今天洗头，眼睛痒
23点听到他打呼了，小哈还在翻来翻去，灯我也不敢关，怕小哈吵，要稳住小哈
小哈睡觉不久，23.45  他起来说刷牙啥都没弄
半夜麻了1次，睡醒麻了0次`,hh:[18],s3:1,s4:1},"2025-08-21":{detail:`半夜麻到眼睛，睡得可以，还是没睡醒
10:37 耳鸣, 昨天下午耳鸣也很多
11:50 涨/烫/风凉
看儿科什么的, 聊到愿意捐献器官之类的, 经过了解, 应该么问题
16:22一直耳鸣，现在好了，每次持续蛮久，大概2次了
16:30 又耳鸣了
18:19 涨/烫/风凉
今天回家有一点低落，应该是累了
19:42恍惚，想拉屎，想吐，在美兰湖，吃好饭稍微走了下，刚准备回家，43，说等一下，啊呀不行，这里也难受，梦境感，把手上的奶茶给我了，感觉发生过，不知道为什么在这里不知道星期几，前面在干嘛都不知道，44，为什么喝茉莉奶白也不知道，问想拉屎吗，回答“我想拉屎了吗”，星期几什么都不知道，45，知道是哪，不知道为什么来，现在还有既视感，46，熟悉感还有，48，问了下，说记得放学在楼下等我，然后说这个话也有既视感，或者说是梦境感，50，还有梦境，不强而已，56问好了，58主动说，放学路上一直想吐的，被压住的，00，都想起来了，但不像今天的。到家以后聊了下，感觉还行
22点以后, 房间里有个虫, 我抓的时候忍不住叫了2次, 不知道有没有影响
22.30小哈睡了，都准备睡觉
22.36 小麻导致抽了, 看起来是大发, 但自己认为是比较厉害的小麻. 过程是: 他问我小哈睡着了吗, 我说睡了, 我脱眼镜准备一起睡, 让他让个地方他没反应, 听到咂嘴的声音, 我就去戴眼镜, 开灯, 录视频了, 发的时间不长, 发完后摇手让我关灯. 全程有意识, 自己定义为小麻, 只是因为”想躲开小哈” 尝试动, 而发得厉害了,  不知道是不是排卵期会发得厉害. 上个月也如此
01:54小哈大概痒，翻来翻去自己撞到哭，吵醒了
03:33尿出来了，又吵醒了
早上7点33, 突然坐起来, 躺下去以后咂嘴了, 最后肚子咕噜了下, 留了点口水发完了, 问了以后也说是小麻, 这2个都录视频了
半夜麻了1次，睡醒麻了1次`,s2:1,hh:[20],s3:3,s4:5},"2025-08-22":{detail:`09:53 恍惚, 在聊昨天的发作, 突然说”不说了”, 我问是不是不舒服, 他说”有点”, 54末, 主动说等等, 我问是不是恍惚了, 回嗯. 56头我问, 没回复, 57末又问, 回答搞不清情况, 断片了, 说也不知道我问了啥, 也不知道想了啥, 都忘了, 我04问有没有梦境感, 他10不到回, 我搞不太清楚, 就是很困, 睡了一会, 刚好像是恍了. 昨晚20分钟已经想起来了, 今天感觉叠加得严重了些.12说我睡一会再来, 21主动说了些话, 说知道在单位, 感觉没睡醒, 准备点外卖娱乐下, 我问他恍惚过了吗, 回答”就刚才那次”, \b点完说头紧, 先不说了. 稍微聊了会, 还是说头紧, 然后大家工作了
11:17 聊天到厕所之类的, 说头紧, 没恍
14:48 恍惚, 微信报告, 在干活, 拉屎, 49, 主动打”%3D %3D“, 51头我问, \b回答失忆, 好一点我再说, 确定发作好了. 58说, 我刚找不到我做的东西, 反正搞不太清楚, 因为正在做, 刚好做做, 刚才发给wendy, 说要几个封底, 总之挺糊涂的. 09问情况, 算能干活,  结束了, 但不知道忘记了什么
15.25聊到头后面很疼的
17:53到家了，路上恍惚过，我到楼下接他，他说我猜礼拜三，说想了会才想到电脑在，55，说是不是星期五，58，说路上的就梦境感
18.19 在天街聊天，回忆了下，都有印象发生过，但是连不起来了
20:41恍惚过了，通过视频记录发现是2030恍惚的，我和小哈剪头发之类的，刚回来，我20.25微信还说等我吃药，问恍惚厉害吗，回答厉害的，从视频看，是30不到合上电脑的，50，记得刚才在天街kkv 买的盲盒，知道晚饭，说刚才是由梦境感开始恍惚的，54问刚才的事都真实的
小哈从21.40关灯到22.40睡了，他也迷迷糊糊睡了，还没吃药和刷牙，23.30 问过他，他拒绝去刷牙吃药
大概11.15叫起来了，25准备睡
半夜麻了0次，睡醒麻了0次`,hh:[10,15,18,21],s3:0,s4:2},"2025-08-23":{coner:["严重","21点的那次恍惚严重, 后面开始记忆非常短, 导致暂时不能工作了, 早上10点还能工作"],detail:`7.10起来的，起床断片了，确认没恍惚
08:36 恍惚，躺在床上刷手机，我躺着睡觉，不知道为什么我醒了，看时间，说吃药，看他的样子像在恍惚，后确认，38多好的，知道星期几
我状态不太好, 睡到10多, 我们2个都在改老板的任务
1030聊到, 早上起来想了好久最近吃了什么奶茶
他一会干活就好了, 我一直在弄勾选的问题, 效率低
11:37恍惚，想吐，有既视感，在陪小哈玩车子华容道，38，吐气2次，小哈感受到了，说去给你药，我好难过，39，打嗝，看了下手表，说礼拜六，小哈拿了一瓶药进来了。我问有没有结束，他说我有恍惚过吗，应该是结束了，不知道礼拜六还是礼拜天，不知道早上有没有吃过药, 52, 回顾了下早上的事, 觉得一周前, 过了会说好点, 然后睡觉了, 13.19有点醒
13:38恍惚，刚睡醒，出来吃饭，在问我西梅是哪里来的，说梦里发生过，还差等一等，哈哈被我们救了，40，看手表，发好了，不知道星期几，知道中午，42，既视感没了，43，问单位里有没有换位子，问单位的位子，说it那边，但是感觉换过位子，49，问我这个礼拜是每天都去上学的吗，问盲盒记得吗，说不知道什么盲盒，哪里买的，后来说出来了，但是不联系
14:50恍惚，想吐，想拉屎，熟悉感有一点，想吐，52，打嗝，过了一会，53不到，说好点了，猜下午，猜周末，说刚才怎么在穿婚纱照之类的东西（完全没有），又说早上还是下午我也不知道（和几秒前矛盾），吃饭和早上的事都不记得了，15.11 把小哈叫到外面，让他休息会，主要是搞不清楚的难受，睡到16.37起来尿尿了
16.37 恍惚，接上面，刚醒，尿尿好，很想吐，咽口水的声音，39，好了，40，咽口水，因为小哈过来搞了，我没问清楚，41问，还有一点想吐的感觉，肚子叫了，看手表了，应该发好了，52问，不记得有没有吃过饭了，又睡下了，心疼
17:45恍惚，刚醒了不久，我跟他聊了5分钟，我去拆了3个牛奶快递，刚回来，又有不舒服了，想拉屎，锁骨这里烫，肚子叫，很难过，47，好了，这次是我看着他，觉得他好了的，他现在看了下手表，不知道恍惚了
18.47聊到想起来工位了，一直在和哈玩华容道
19.36聊到，有人叫自己做东西，一直很客气，但是名字想不起来了，是Wendy
1948聊到最近的恍惚都没熟悉感，近几分钟一直想吐
19:52恍惚，说，好像每次劝小哈少玩游戏的时候会有一点，53，咽口水2次，肚子叫，咽口水，呼气，既视感，53，问星期几，星期一吗，看着奶茶袋子，问是什么奶茶，问下午睡觉了吗，什么东西找不到了所以，有感觉没办法治愈恍惚了，只能睡觉
2019聊到看到工作的东西都不觉得自己做的
吃药的时候，问还有2粒白色的呢，看到卫克泰问是自己的吗
21聊到盲盒都不记得了，我说了以后不知道盲盒内容
21:04恍惚了，洗好澡在聊昨天，既视感很强，想拉屎了，想吐了，自己说恍得没那么严重，05，吐气，问后面是不是你是坏人，06非常非常，unbeliable ，我去，口气很惊人的感觉，天呐，我的妈呀，我靠，07，又笑了下，咽口水，打嗝，我也不知道我在想什么，忘记了，08，发好了，这次我录视频了。09，问今天礼拜二吗，10，问是礼拜三吗，我们之前在哪里呢，告诉他之后，感觉难以置信，我问盲盒的事，不记得了，发作前刚给他看的，他看到还很开心，12，又问，今天礼拜二吗，13，不知道自己恍惚了，16，问我请假了吗，明天是星期三吗，18，主动说我吃什么药我也不知道，20，主动说猜6，7月份，问了好几遍是不是礼拜六，21，问和我妈有什么矛盾吗，31，不记得和圈圈过生日了，看了图片也没印象了，马小没来，也不记得了，昨天，或者是今天还记得的，33，问我眼镜哪里来的，35，问今天是不是礼拜六，想考虑请年假的，这个状态，36，走问了次
22.09 带小孩睡了，我问他今天恍惚了几次，说一次，现在让他吃卫克泰，他还要准备吃其他2个药
22:32恍惚，想拉屎，在兜，很难受，物理上很难受，想吐，左边有点发烫，33，说啊有我的妈呀，别弄了，叹气，很难过，很难受，吐气，33，说走吧我们在原地也没什么用，身上是烫的，34，打嗝，说“刚我说什么东西掉了，我都不记得，什么粘纸之类的”，35，好了，不知道恍惚过了，问我是不是电梯里在跟他吵架，猜礼拜四，37，说连着掉了很多东西，42，已经确认过2次礼拜六了，又忘记了，43，已经忘记刚才哄睡小哈了，44，第三次问白天去哪里，礼拜六吗，我说恍惚了很多次，他说最多2次
2250到家，我准备和奶奶兜一下他问了很多次要不要吃药，我说不要，他又去吃维生素了
奶奶陪我兜到了2点，我在奶奶房间坐一会回去，2.34回到房间，得睡，明天还要给瑾吃药
4.47 哈衣服湿了，他起来给换`,hh:[9,12,14,15,16,18,19,20,21,22]},"2025-08-24":{memo:"发作得特别厉害, 间隔很短, 记忆已经很短, 还有一次说小哈会叫爸爸了这种话",detail:`8.20 左右找他，睡觉没问题，表示没麻，知道晚上我找奶奶兜，也知道晚上小哈衣服湿了，但是表示恍惚过
08:31恍惚了，只用手指了下自己喉咙，33，恶心的感觉还有，小哈翻身他伸手去弄，但是全程不说话，34，看手表，应该发完了，我让他吃药之类的，小哈跟他说话了，他才开口说话，到39，反复看了几次手表
0907又看手机聊天记录了，开心，看到周五下午倪鹏的聊天记录，有个故事，周五晚上告诉我的，现在忘记了
0931 有点吓人，刚小哈说要吃冷饮，他说买点包子垫一下再吃，打开外卖软件后，忘记刚才要吃的是冷饮了
09:32恍惚了，说卧槽，感觉小哈在看的视频看过，咽口水，33，说我忘了他本来要干嘛，34，看手表，打嗝，问他刚才要什么，我什么都不知道，不知道小哈衣服尿湿了，不知道昨天我和奶奶兜了一圈了，刚才都知道 ，37，不知道自己工位，好像坐it旁边，到现在看了2次手表了 
57，只知道自己什么都不知道，不记得自己恍惚过，
10.01 ！！半小时内，问了2次鼠标怎么带回来了，早上好像有什么东西找不到了，但不记得什么找不到了，06，看到倪鹏微信，又不知道情况了，16，又问了一次，为什么电脑带回来了，又看了Wendy的聊天记录，又打开了一次ps，看了说印象不深，说记得抢到朱的号，18，看到Wendy，又说又表示惊讶，说怎么是昨天，20，又去找文件夹了，又找ps文件了，23，问马丽是谁，问Wendy是谁的助理，25，问我昨天有在家里干活吗，我给他看鼠标，他说昨天也看到过，跟小哈说了会话，30，我尝试问电脑和鼠标的来历，好像这次没忘记，32，主动问，昨天有没有和小哈哄睡，问我和奶奶兜是昨天吗，35，我问记得倪鹏找你吗，惊讶的口气问倪鹏？36问鼠标，ok，38，给他看了聊天记录，Wendy记得，倪鹏又不记得了，42，又主动问，我们昨天是晚上带小哈兜了吗，55问了下鼠标，还行，记得刚才的
11:05恍惚了，刚才还聊了句，其实半夜就恍惚了，非常难受，想吐，说不清楚，那种感觉，06，说哦呦我的妈呀，反出来的那种，说哎哟我的妈呀，指着小哈，说，他指着你，叫你爸爸，好厉害啊，07，看手机，做过什么梦啊，昨天一直在找什么东西吗，什么东西找不到了，问我做梦了吗，如果没做的话，还挺严重的，09，问单位是不是有什么事情要做，我问小哈几岁，他说4岁，主动说7月份生的，14，主动说感觉工作带回来了，之类的，22，今天第6，7次问昨天干嘛，又问了下工作之类的事，24，问了下刚才吃过的包子，还记得，33，和小哈玩车子华容道了，看起来还可以
11:50 是恍惚，想拉屎，没梦境感，咽口水了，说好奇怪哦，刚刚这样子，好啥来着的，51，咽了口水，好难受，太unbelievable 了，我靠3次，喘气，51，看手表问星期几，52，应该是断片了。上班，选学校，52，又看了一次手表，说礼拜天，说应该算断片了，现在就说那些，工作之类的，12.05 又看到Wendy的聊天记录，又重复，12.30主动想起来昨晚小哈衣服湿了，12,50，主动说周五，我给他看了盲盒的东西，他，他提到了盲盒这个关键词
13.00准备出去天街兜兜，08到了，说保守34天没来，在回忆圈圈嘉定，还可以
44，只能想起来百分之40刚才买的红宝石和薯条（刚去天街的时候买的）
13:53恍惚了，在天街，场景几乎一样，双皮奶这种，我和他在麦记，53，非常难过，要吐，拿起手边东西，问是我们的吗，54，说我啥都不知道，54，问，有一点点想吐，熟悉感没有，看手表，说2点啦，本来在家里和小哈奶奶一起玩，为什么出来不记得了，我还记得我刚才说看什么店啊，57，说自己没恍，最近吃蛋糕？我问圈圈，他说不是，58，又看了下时间，00，我今天有说过什么考试之类的东西吗，是我们2个人找地方坐？小哈没出来？（但刚才还问我们没出来），03，又看了一次手表，04，又看聊天记录，倪鹏的，和之前反应一样，06，又看手机，但忘记自己好像要找什么了，看到Wendy，又强调“昨天啊，礼拜六啊？”，09，问刚才有问我有新的东西要做吗，10，看到自己朋友圈，觉得是昨天看到的，其实今天刚兜过，25，又看手表礼拜天，看到薯条，说猜是永辉买的
14:30恍惚，梦境感，想拉屎，还在麦记，31，还想拉屎，问是不是每个晚上都这样，32，我不知道了，我都要崩溃了，32，unbelievable ，我看他们在讨论哎，都是污垢，我觉得没什么好买的，我们没买东西吧，33，看手表，说2点啊，我以为晚上了，34，看到薯条，在猜哪里买的，猜不到，我们没点吃的东西吗，我怎么觉得我还吃了，35，又看了时间，36，看到薯条，问这个是帮他买的吗，又看了2次时间，问昨天干嘛，41，看到薯条，说买了吗我不知道，又问小哈在睡觉吗，43，问工作有什么事吗，我说没，他说，是不是昨天问过你，49，又看时间，说薯条小哈不是吃光了，又说不是准备去虹桥吃饭？，问是礼拜天吧，50，看到薯条问是永辉买的吗，又问工作上面要干嘛
14:59恍惚了，还说知道每天和妹子一起放学，还做梦到和妹子一起体检，书包里打开东西有什么，比较私人的，可能要脱衣服，还没脱，00，不行要快点走，我觉得这里太糙了，我刚才说了啥我都忘了，就觉得说了好多妹子，应该是好了，比较短，知道礼拜天，01，为什么觉得昨天去过罗南，03，准备回家，说怎么感觉还和一个女孩子出来的，05，看手机，说礼拜天，问我们怎么逃出来的，11，短时间内，看了2次时间了，13，说Wendy的事了，问电脑带回来了吗，又看手机了。15，说觉得奶奶跟我聊过天
15:18恍惚了，问朱国行是谁啊，20，比刚好一点，不想吐了，26问我们本来是去社区医院吗
15:39恍惚，想吐，觉得心跳很沉，咽口水2次。41，好了，说连不起来，不知道恍惚了，42，做梦感觉到原文件，45，又看时间，54，聊了些差不多类似的，问了好几次礼拜天了。昨天干嘛，出去干嘛。问是不是装环了，是不是年纪大了就会好了
15:59想吐，拉屎，躺着在想睡觉了
16.58听到肚子叫得很厉害
16点睡到17.49醒了，看了会手机又躺下去了，现在是18点，我去房间里看看，我现在在奶奶房间和小哈玩，他在房间里睁着眼睛的，醒着
18:25恍惚，26，摸胸口，表示烫，这个我要录视频，27，可能好了，断片
现在小哈跟他说话，他都不太用语言回答了，肯定很难受
44，在看手机，又是如此，倪鹏，Wendy
18:50恍惚，想吐，感觉做梦一样，我问恍惚，他说不知道什么叫恍惚，什么情况，我一点都不知道
19.02 主动说陈雨玄是不是要开学了，我好感动，还说可以跟着爸妈去
05，说做梦梦到位子改了
我拿三明治进来，刚才确认了2次，他看到问是小哈要吃的吗
小哈玩华容道，主动他搭给妈妈玩，奇怪
19.21 看手机看时间，又问工作，和电脑带了没，还有奇怪的联想，现在恍惚不盯着表情，也不能获得汇报了
31，问怎么觉得吃过三明治，感觉是要通过一些楼梯之类困难才能吃到
我说给小孩洗短裤，说了一通客气话，我洗了个碗，回来说洗短裤，又说了一遍
19:43恍惚了，问“我今天拉过屎吗”，他已经不知道恍惚这件事了，问是我这两天发得厉害吗，44，没完全好，是热的
46，问这两天一直住这里的吗，说有最近去看病，但是那里没有开，隐隐约约还感觉单位里好像有东西给我做，然后原文件没有，然后又问工位
我们洗澡，55分他拿了浴巾，56分放回去，不确定放哪里了
20.00 记得吃三明治，但觉得是前几天买的
20:14恍惚，想拉屎，这次说“在恍”了，开心，走到门口，不觉得是家里，本来是什么东西啊，有一些小的宠物在帮我们，但是没有什么用，比如小鱼，小汪，15，还没，16，应该好了
20:32梦境，恍惚，问我今天拉过屎吗，33，还没好，好了会帮你说的，33，问礼拜几，问了。回答没完全好
20.36 竟然还知道要吃药
21:32恍惚了，在看自己的日记，拉屎，34，一直在说话，但是说说不清楚，尿有一点点露出来了，小哈在玩的东西一点点都没印象，应该发好了，35，快好了，小哈玩的东西，刚才他一起玩的，说已经9点半啦，以为7点半，问是不是今天下过雨，有没有出去过
21.51 已经说了4，5次礼拜几，工作什么的了，自己浴巾拿了2次，心疼死我
22:02洗澡出来了，说洗澡恍得蛮厉害的
已经说了2次圈圈了，之前很多次了，每次看到日期都问圈圈，然后医生挂号也是问了5，6次吧
23.08 睡前，聊了下星期几，工作，之类的事
13问我们今天出去过吗，几乎没印象
23:17恍惚了，好想拉屎，在说话的，咽口水了。18，他说他想说的是，形容不了，等一下，梅雨关系掉到我的左胸口，我好像是能捉到一些情绪的。19头好了。
又开始说工作了，一直爱说话，37应该睡了.`,hh:[8,9,11,12,14,14,15,15,16,16,18,19,20,20,21,22,22,22,23]},"2025-08-25":{detail:`我2睡到7，睡得好的，多希望是一场噩梦，我接受不了现实，瑾和哈还在睡，我好痛苦
我817睁眼，看他在看手表，现在准备过去
他坐着呆着，不知道情况，我知道他在想着什么，我试着感受他的感受。好痛苦，他好痛苦，心疼
08:48恍惚，我看瑾自己点了下手机，49，还想吐，但是一直能说话，从早上一直看手机，问了，是看还有几次迟到，时间不长
56我问了他吃没吃药，他说知道我在他上厕所的时候给他吃了一把，很好，开心，大概是20分钟前了
09:00恍惚，拉屎和吐出来的感觉，很难受，非常难受，我说不清楚，从胸口到屁眼都动来动去的感觉，01说，我们是正常的还是他们是正常的，就是电视，而且陈雨玄看起来好正常好帅啊，02，应该好了，问怎么是周一了，我还有迟到吗，还在打嗝，03。我刚刷牙时候有说蒋雅帮我分担工作吗
09:04 自己问有没有吃药, 也搞不清吃什么药, 又问妥泰
09:22想吐，23，一直想吐，程度算轻
我一直在拦着他去上班
0935问 我的要是再吃几天不吃了吗, 我早上吃过药了吗, 问座位, 38又问了一下, 问电脑, 说去看一下,  其实刚才看过, 电脑还一直在手上
09:43恍惚，想吐，拉屎, 
10.05 自己聊到海马不好
10.09 聊到药，问妥泰，然后去看药，去看房间里的架子了，其实早就放到外面了
10.10 恍惚了，接了个打错的电话
10.13 看到自己10点请假的微信，说不知道了
10:21恍惚
10:43拉屎回来，瑾躺着，问了，说应该恍过了，心疼死了, 他准备睡了, 开始睡觉了. 11.27 吵醒了, 还是在用想象填补记忆.
12:11恍惚，12，既视感很强，13，说今天礼拜一吗
12.30 最近和小哈一起玩ipad游戏
12.30 恍惚了 
12:44 想吐 
12.59 恍惚了, 01, 脸烫 , 但最近恍惚都能一直和小孩说话
13:21 想吐, 梦境感, 想拉屎
我睡着了一会，醒来感觉很难过
13:47说正在放的电视很像，刚恍过，48，在恍惚，49，猜礼拜一 ，谁去国外玩了吗 ，51，问了下工位，问最近有没有考试
14.18 小哈睡了，我醒了，他也醒了，看时间，之类的一系列操作
14:31恍惚，33好, 22, 好了, 断片
15:04恍惚
15.23 睡醒，觉得有点心慌
15:27恍惚了
15:56恍惚，但是能一直跟哈说话，57，想吐，胸口，这一串，都烫
我说心疼他，他说，他也心疼死了，觉得小哈想过来跟他睡觉，但是他只能拦着他。（这种意向）
16:06 恍惚, 还一直在跟小哈说话，我抱着她，表达了感情，他说我觉得我们很共平的(是的, 就是这个读音), 09说刚才觉得醒过来之前干嘛, 会忘记东西, 说感觉这
16:36熟悉感2天一直在医院那里, 38, 想吐
16:56恍惚，想到同事好像有事情要一起做，觉得恐怖，看了手表，说陈雨玄快开学了，看到小孩头发短了，已经不知道问几次了，难过死
17:03又恍惚
17:12恍惚了
17:23轻微不舒服，应该是恍惚，小哈在跟他说地球啥的，24，说做了什么梦，感觉是“无聊”，“难受”的梦，酒店的大堂里面，有小胖
17:30在恍惚，难受
17:41说梦境感，又不算梦境感，和平时不太一样，想吐，异常的感觉，44，持续到现在，就是一个“概念”，车，奥迪，外公，外婆，他，场景里都在，过程很艰难，干嘛我也不知道，睡前在做梦，45，现在也很难受，想吐，47，还在难过，但是能和哈说话，49，尝试描述什么的，描述不出来，心理知道，有几个场景，难受，生理上的难受，52，熟悉感还在，53，打嗝，难受，小哈让我帮帮妈妈，55，还没好，头里面很烫，56，让我顺着小哈安抚，不想动，很重的打嗝2下，胃起上升，带点梦境，座位，魔法，58，还没好，00，没什么好说，就是想吐，说有一点梦里的场景，01，打嗝，03，还没好，看了下礼拜几，问上学了吗，但还没好，打嗝2次，梦境感足。05，咽口水，又问了次我今天上学了吗，问，蒋雅是谁，梦境感，08话多了，可能好点了，问他，说还想吐，但是好一点了，熟悉感还有，10，把衣服脱了，应该好点了，刚才是不舒服了穿衣服的
18:23普通的“想吐”，刚才就有了，25，喝水，躺下了，我们抓着手，我陪小孩玩，30，还没好，34，拿衣服遮脸，问话，回答正常，说是不是怕光，就是自己想，39，问，还是不舒服，想吐，44，还不舒服
19.29 我大便回来，他一直躺着的，问，说想吐的，不舒服，说不清，31，说断片了，以为自己上班的，说感觉自己回来的时候奶奶好像在
20:46吃好药，本来有点心慌，然后开始恐惧。大发了，录视频。小哈还在玩，小孩没有死亡意识
23左右吃药睡觉，吃好药跟他说明了下情况，他还是那个他，抱着我，听我说话，用手势回答，温暖。
然后就接着睡觉了`,hh:[9,9,10,10,11,12,12,13,13,14,15,15,15,16,16,17,17,17,17,18,18,18,19],s1:[21]},"2025-08-26":{detail:`02:47尿尿
8.20 他起来把我带起来的，看手机，思考，刷牙，我心疼死
我该死，接了外婆电话，忘记吃药的事，发现瑾说自己吃了奥卡西平。最后打算补吃了半粒左乙拉西坦
今天他还是想上班去
09:25恍惚，脑子里转，动漫里最后上能量那种，想吐
聊了聊，瑾还是坚持不让他妈来，瑾说了些对人的判断，真是非常非常准，他对他爸妈，我，奶奶的人格把控也是准到离谱，真是厉害，怪不得我那么喜欢他
10:11轻微的拉屎和头晕，想吐
12.49醒了，也是我在睡
13:02恍惚，躺在我身上的时候 
13:12喉咙胸口特别烫，表达不出来，14，看手表，肚子叫，18，还在不舒服，21，还在不舒服，24，抱了一会，放开，还是不舒服，算轻微，27，又不舒服了一下，咽口水厉害，28，捂着胸口，说好难受，最下面离心脏最近的地方，31，问好点了吗，回答我怎么不舒服忘记了，我临时请假了吗
13:59想吐，00，说我手上捏的布，也没用了，开始说上学之类的事，问为什么不上学
14:40恍惚，剪切选中，长短，就在这个地方，哎哟妈呀，我很难受。41，吐气，看手表，开始问日常，不知道恍惚了
14:56不舒服，57看时间了，重置记忆，58，又要吐了，59，抓手，放屁，咽口水，看手表，又重置
15:43坐起来导致难受，想吐，晕，44，在说话的，想描述点什么，说不清，44，觉得本来要被冲掉，感谢小哈帮了我。 这个时候说话口气非常正常的，不像发病. 从这个时间开始在和小哈玩了, 应该是16点又躺下去了
16.52醒了，我一直在外面的，手机充电，刚准备进来看，正好看到的
17:28不舒服，29，看手表
18:20刚醒，我们一起睡了会，还是如此，断片
18:37在这个之前，梦到厉害这里的，哎哟，我说不出来了，就是有这种，哎哟，描述不了，38，看手表，已经连续问了5，6次这两天没去上班之类的日常
18:47又想吐了，说到一些事情
19:20脸热，胸以上的都很热，刚才架子上的东西，一片一片的，移动到了右边
19:47不认识Wendy了，然后我给他看手机，他出去弄工作了，他还能自然地回复微信，真厉害，工作内容只是把word的内容放到ai 里，但他在3个软件里，重复找文件，重复建立文件，看聊天记录，并觉得是我帮他回复的聊天和创建的文件，20,39 吃好药，小哈在搞，他一下子搞不清楚小哈名字，问是不是小花
21:10想吐，想拉屎，11，好了，没断片
21.13 发出原来如此的叹气，说，原来这个需求是你帮我接的啊，我没看过需求，21.34 我和奶奶在说幼儿园送被子的事，他又说他是不是在弄小哈的p图
22.00 准备放弃，在跟Wendy发微信，一会又问要做什么，知道了以后，又说能马上弄好
2小时啥都没干，太可怜了
22:23想吐，拉屎，有点想吐
22.29 我最近第一次有点失去耐心，忍住了，因为他坚持要弄完
2241被我逼去洗澡了，问了我4次有没有洗澡
22:59洗好澡出来问我今天有带电脑回来吗，我问恍惚过吗，说洗手的时候大概恍惚过，但现在都不能确定了
23.05聊到旁边妹子，我说你们一起走的。他说夸张，只算认识，然后说觉得今天可能是百分之6，7十一起走的
23:08有点想吐，没有很不舒服，不知道有没有刷牙，还记得05说的
23:21轻微的想吐，从肚子开始往上烫的，和以前一样的，23没不舒服，断片`,hh:[9,10,13,13,14,15,15,16,17,19,19,19,21,22,23,23,23]},"2025-08-27":{detail:`08:42头皮很烫，想拉屎，吃药的时候还是又妥泰要吃吗
09:07想吐
17.04 想吐 今天睡觉多，可能很多没记录的
然后继续睡了`,hh:[8,9,17]},"2025-08-28":{memo:"最近其实记录都记得少, 因为记忆太短了, 状态也很差",detail:"11:46有点心慌，在看外婆聊天记录",s4:1},"2025-08-29":{coner:["龙华医院","提到了丁晶"],detail:"21:23太阳穴紧，失重？，脖子晕，酸？，31还有，44好了",s4:1},"2025-08-30":{coner:["蓝十字/朱","确定病情, 明天加药"],detail:`10点，幼儿园回来路上，吐槽了下外婆，到家后不太知道上午下午
11.26 已经忘记幼儿园，说了以后，觉得知道梦里，小哈和老师玩
16:57回家路上，不知道去哪儿，猜到回去了
17:53很奇怪，回家后，在家门口兜了圈，上来我洗了个脚，进房间，他说断片了，不记得刚才兜了圈了，但问了说没恍惚，可能是也不记得了，所以现在很难记录
明天要开始加药了，左乙拉西坦半粒和比伦怕乃，今天不想拆半粒
19:33说到他妈什么的，胸口有点烫，头有点紧，36好了`,s4:1},"2025-08-31":{coner:["左750, 卫2粒","我感觉这天开始已经有点恢复了, 就是能上班了的感觉"],detail:`12:16在铂金岛，准备去吃午饭，有点感觉有一点梦到过，17好像没有，今天自己描述百分之60希望在家，是陪我来的
15:40突然说，觉得好久没有见到过小哈和我了
18:22感觉喉咙有点烫
22:02头有一点点紧，吃捞王回来我刚洗好澡
22:26洗澡半路回来了，然后我态度也不太好，他应该恢复点，所以开始老要管小孩了`,s4:3},"2025-09-01":{detail:`送小哈上学后, 聊了会, 我在工作, 他躺着了, 午饭也prefer不吃, 还不明确是不是抑郁
21:24聊到，想问外婆讨钥匙的场景，有1，2分想吐
21:34还在聊，又有1分，胸口有点沉
22:27洗完澡，感觉断片过了，不记得小哈刚才是路上睡着的，问下来，感觉又还好`,s4:3},"2025-09-02":{detail:`09:31一点点点想吐
09:50 太阳穴有点紧, 有点失重, 53, 还有失重, 55, 还有, 10.00, 还有, 10.32, 还有
10:37跟吕萍18分钟前的话，问是不是我写的
14:11我洗好澡出来，他穿衣服，以为要送小孩去幼儿园，（其实是奶奶去的），说自己睡着了一会，有点断片
15:24说小哈去上学是背出来的样子`,s4:3}},fi={id:"cont-wrap"},hi={id:"calender-wrap"},di={id:"calender-head"},ui={class:"calender-year"},pi={class:"tag s3"},gi={class:"tag s4"},mi={class:"tag hh"},_i=["data-ts","onClick"],yi={class:"date"},bi=["data-theme","onClick","title"],vi={class:"opt-head"},xi=["onClick"],Si=["onClick"],wi={class:"strat setall"},Ci=["onClick"],Ti={class:"detail-header"},Oi={class:"detail-date"},Ei={class:"detail-tags"},Pi={key:0,class:"tag s3"},Ri={key:1,class:"tag s4"},Ai={key:2,class:"tag hh"},Di={key:0,class:"detail-memo"},Mi={key:1,class:"detail-coner"},Ii={class:"detail-detail"},Fi={__name:"App",setup(n){const e={purple:{name:"紫色",primary:"#9966cc",primaryLight:"#f8f5ff",primaryDark:"#7a4fb5",accent:"#e0b3ff",secondary:"#b12bc7",bgSubtle:"#f3f0ff",highlight:"#ffd700"},blue:{name:"蓝色",primary:"#3b82f6",primaryLight:"#eff6ff",primaryDark:"#1d4ed8",accent:"#93c5fd",secondary:"#1e40af",bgSubtle:"#dbeafe",highlight:"#f97316"},red:{name:"红色",primary:"#ef4444",primaryLight:"#fef2f2",primaryDark:"#dc2626",accent:"#fca5a5",secondary:"#dc2626",bgSubtle:"#fee2e2",highlight:"#22c55e"},green:{name:"绿色",primary:"#10b981",primaryLight:"#ecfdf5",primaryDark:"#059669",accent:"#6ee7b7",secondary:"#047857",bgSubtle:"#d1fae5",highlight:"#f59e0b"},yellow:{name:"黄色",primary:"#f59e0b",primaryLight:"#fffbeb",primaryDark:"#d97706",accent:"#fcd34d",secondary:"#d97706",bgSubtle:"#fef3c7",highlight:"#8b5cf6"},black:{name:"黑色",primary:"#1f2937",primaryLight:"#f9fafb",primaryDark:"#111827",accent:"#6b7280",secondary:"#374151",bgSubtle:"#f3f4f6",highlight:"#fbbf24"},white:{name:"白色",primary:"#64748b",primaryLight:"#f8fafc",primaryDark:"#475569",accent:"#94a3b8",secondary:"#475569",bgSubtle:"#f1f5f9",highlight:"#f97316"}},t=$=>$<10?`0${$}`:$,s=$=>{const O=new Date(+$);return`${O.getFullYear()}-${t(O.getMonth()+1)}-${t(O.getDate())}`},i=Object.fromEntries(Object.entries(ai).map(([$,O])=>[new Date($).valueOf(),O])),l=["2024-01-27",s(Date.now()+864e5*21)],r=(new Date(l[1])-new Date(l[0]))/864e5,o=new Date(l[0]).valueOf(),a=ae(new Date(l[0]).valueOf()+864e5*4),d=Fe(D1),h=ae(0);let p={};const w=$=>{h.value=$.toString(),a.value=+$;const O=p[$],T=document.querySelector("#detail");if(O&&T){const D=O.getBoundingClientRect(),j=T.getBoundingClientRect();if(D.top<j.top||D.bottom>j.bottom){const W=O.offsetTop,U=T.clientHeight,Tn=O.offsetHeight,kn=W-(U-Tn)/2;T.scrollTo({top:kn,behavior:"smooth"})}}},C=$=>{h.value=$.toString(),a.value=+$,setTimeout(()=>{const O=document.querySelector(`.card[data-ts="${$}"]`),T=document.querySelector("#calander-body");if(O&&T){const D=O.getBoundingClientRect(),j=T.getBoundingClientRect();if(D.top<j.top||D.bottom>j.bottom){const W=O.offsetTop,U=T.clientHeight,Tn=O.offsetHeight,kn=W-(U-Tn)/2;T.scrollTo({top:kn,behavior:"smooth"})}}},0)};let L=0,H=null;const nn=ae(!0),k=$=>{if(!H){const O=$.target;nn.value=L>O.scrollTop,L=O.scrollTop;const T=new Date(l[0]).valueOf()+(new Date(l[1])-new Date(l[0]))/O.scrollHeight*(O.scrollTop+O.clientHeight/2);a.value=T,H=setTimeout(()=>{H=null},350)}},I=Fe({s3:{days:0,count:0},s4:{days:0,count:0},hh:{days:0,count:0}});Ae(a,()=>{const $=new Date(a.value).getMonth(),O=new Date(a.value).getFullYear();I.s3.days=0,I.s3.count=0,I.s4.days=0,I.s4.count=0,I.hh.days=0,I.hh.count=0;for(const[T,D]of Object.entries(i)){const j=new Date(+T);j.getMonth()===$&&j.getFullYear()===O&&(D.s3&&(I.s3.days++,I.s3.count+=D.s3),D.s4&&(I.s4.days++,I.s4.count+=D.s4),D.hh&&D.hh.length>0&&(I.hh.days++,I.hh.count+=D.hh.length))}});let Y=null;const R=$=>{Y||(nn.value=!1,Y=setTimeout(()=>{Y=null},350))},Z=$=>{for(const O in D1)["coner","memo","detail"].includes(O)||(d[O]=$?0:-1)},pn=ae(!1),xn=()=>{pn.value=!pn.value},Sn=ae(localStorage.getItem("selectedTheme")||"purple"),Rn=ae(!1),Nn=()=>{Rn.value=!Rn.value},Kn=$=>{Sn.value=$;const O=e[$],T=document.documentElement;T.style.setProperty("--theme-primary",O.primary),T.style.setProperty("--theme-primary-light",O.primaryLight),T.style.setProperty("--theme-primary-dark",O.primaryDark),T.style.setProperty("--theme-accent",O.accent),T.style.setProperty("--theme-secondary",O.secondary),T.style.setProperty("--theme-bg-subtle",O.bgSubtle),T.style.setProperty("--theme-highlight",O.highlight),$==="black"?(T.style.setProperty("--text-color-light","#f9fafb"),T.style.setProperty("--bg-hover","#374151")):(T.style.setProperty("--text-color-light","#333"),T.style.setProperty("--bg-hover",O.bgSubtle)),localStorage.setItem("selectedTheme",$),Rn.value=!1};return Yt(()=>{const $=document.querySelector("#calander-body");$.scroll(0,$.scrollHeight*(new Date-new Date(l[0]))/(new Date(l[1])-new Date(l[0]))-$.clientHeight),Kn(Sn.value),document.addEventListener("click",O=>{const T=document.querySelector("#strategy-select"),D=document.querySelector(".strategy-trigger"),j=document.querySelector("#theme-select"),W=document.querySelector(".theme-trigger");!(T!=null&&T.contains(O.target))&&!(D!=null&&D.contains(O.target))&&(pn.value=!1),!(j!=null&&j.contains(O.target))&&!(W!=null&&W.contains(O.target))&&(Rn.value=!1)})}),($,O)=>(rn(),fn(dn,null,[B("div",fi,[B("div",hi,[B("div",di,[B("div",ui,[M0(en(new Date(a.value).getFullYear())+"年"+en(new Date(a.value).getMonth()+1)+"月 ",1),B("span",pi,en(I.s3.days)+"天, "+en(I.s3.count)+"次",1),B("span",gi,en(I.s4.days)+"天, "+en(I.s4.count)+"次",1),B("span",mi,en(I.hh.days)+"天, "+en(I.hh.count)+"次",1)]),O[2]||(O[2]=w2('<div class="calender-item">周日</div><div class="calender-item">周一</div><div class="calender-item">周二</div><div class="calender-item">周三</div><div class="calender-item">周四</div><div class="calender-item">周五</div><div class="calender-item">周六</div>',7))]),B("div",{id:"calander-body",onScroll:k},[(rn(),fn(dn,null,xe(r,T=>B("div",{class:Fn(["calender-item card",[{"current-month":new Date(wn(o)+T*864e5).getMonth()===new Date(a.value).getMonth(),active:h.value==wn(o)+T*864e5}]]),"data-ts":wn(o)+T*864e5,onClick:D=>w(wn(o)+T*864e5),key:T},[B("div",yi,en(new Date(wn(o)+T*864e5).getDate()),1),Pn(ci,{strategy:d,record:wn(i)[wn(o)+T*864e5]},null,8,["strategy","record"])],10,_i)),64))],32),B("div",{class:"strategy-trigger",onClick:xn},O[3]||(O[3]=[B("span",{style:{"font-size":"1.2rem"}},"⚙️",-1)])),B("div",{class:"theme-trigger",onClick:Nn},O[4]||(O[4]=[B("span",{style:{"font-size":"1.2rem"}},"🎨",-1)])),B("div",{id:"theme-select",class:Fn({visible:Rn.value})},[(rn(),fn(dn,null,xe(e,(T,D)=>B("div",{class:Fn(["theme-option",{active:Sn.value===D}]),key:D,"data-theme":D,onClick:j=>Kn(D),title:T.name},[B("div",{class:"theme-color",style:it({backgroundColor:T.primary})},null,4)],10,bi)),64))],2),B("div",{id:"strategy-select",class:Fn({visible:pn.value})},[(rn(!0),fn(dn,null,xe(Object.entries(wn(It)),T=>(rn(),fn("div",{class:"strat",key:T[0]},[B("div",vi,en(wn(ri)[T[0]]),1),(rn(!0),fn(dn,null,xe(T[1],(D,j)=>(rn(),fn("div",{class:Fn(["option",{active:j===d[T[0]]}]),onClick:W=>d[T[0]]=j,key:D.name},en(D.name),11,xi))),128)),B("div",{class:Fn(["option",{active:d[T[0]]===-1}]),onClick:D=>d[T[0]]=-1}," 不渲染 ",10,Si)]))),128)),B("div",wi,[B("div",{class:"action",onClick:O[0]||(O[0]=T=>Z(!0))},"恢复默认"),B("div",{class:"action",onClick:O[1]||(O[1]=T=>Z(!1))},"关闭渲染")])],2)])]),B("div",{id:"detail",onScroll:R},[(rn(!0),fn(dn,null,xe(Object.entries(wn(i)),([T,D])=>(rn(),fn("div",{class:Fn(["detail-card",h.value==T?"active":""]),ref_for:!0,ref:j=>wn(p)[T]=j,key:T,onClick:j=>C(T)},[B("div",Ti,[B("span",Oi,en(s(T)),1),B("span",Ei,[D.s3?(rn(),fn("span",Pi,"小发 "+en(D.s3),1)):we("",!0),D.s4?(rn(),fn("span",Ri,"轻微 "+en(D.s4),1)):we("",!0),D.hh&&D.hh.length?(rn(),fn("span",Ai,"恍惚 "+en(D.hh.length),1)):we("",!0)])]),O[5]||(O[5]=B("hr",{class:"detail-divider"},null,-1)),D.memo?(rn(),fn("pre",Di,en(D.memo),1)):we("",!0),D.coner?(rn(),fn("pre",Mi,en(D.coner[1]),1)):we("",!0),B("pre",Ii,en(D.detail),1)],10,Ci))),128))],32)],64))}};si(Fi).mount("#app");
