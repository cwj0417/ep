(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function F2(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const z={},fn=[],$1=()=>{},je=()=>!1,n2=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),H2=n=>n.startsWith("onUpdate:"),s1=Object.assign,$2=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ne=Object.prototype.hasOwnProperty,K=(n,e)=>Ne.call(n,e),M=Array.isArray,dn=n=>e2(n)==="[object Map]",M0=n=>e2(n)==="[object Set]",F=n=>typeof n=="function",Q=n=>typeof n=="string",z1=n=>typeof n=="symbol",X=n=>n!==null&&typeof n=="object",I0=n=>(X(n)||F(n))&&F(n.then)&&F(n.catch),F0=Object.prototype.toString,e2=n=>F0.call(n),We=n=>e2(n).slice(8,-1),H0=n=>e2(n)==="[object Object]",L2=n=>Q(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Tn=F2(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),t2=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Be=/-(\w)/g,J1=t2(n=>n.replace(Be,(e,t)=>t?t.toUpperCase():"")),Ue=/\B([A-Z])/g,on=t2(n=>n.replace(Ue,"-$1").toLowerCase()),$0=t2(n=>n.charAt(0).toUpperCase()+n.slice(1)),f2=t2(n=>n?`on${$0(n)}`:""),G1=(n,e)=>!Object.is(n,e),d2=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},L0=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},Ve=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let i0;const s2=()=>i0||(i0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function i2(n){if(M(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],i=Q(s)?Ye(s):i2(s);if(i)for(const l in i)e[l]=i[l]}return e}else if(Q(n)||X(n))return n}const Ke=/;(?![^(]*\))/g,ke=/:([^]+)/,qe=/\/\*[^]*?\*\//g;function Ye(n){const e={};return n.replace(qe,"").split(Ke).forEach(t=>{if(t){const s=t.split(ke);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function I1(n){let e="";if(Q(n))e=n;else if(M(n))for(let t=0;t<n.length;t++){const s=I1(n[t]);s&&(e+=s+" ")}else if(X(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ge="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Je=F2(Ge);function j0(n){return!!n||n===""}const N0=n=>!!(n&&n.__v_isRef===!0),e1=n=>Q(n)?n:n==null?"":M(n)||X(n)&&(n.toString===F0||!F(n.toString))?N0(n)?e1(n.value):JSON.stringify(n,W0,2):String(n),W0=(n,e)=>N0(e)?W0(n,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,i],l)=>(t[u2(s,l)+" =>"]=i,t),{})}:M0(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>u2(t))}:z1(e)?u2(e):X(e)&&!M(e)&&!H0(e)?String(e):e,u2=(n,e="")=>{var t;return z1(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _1;class ze{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_1,!e&&_1&&(this.index=(_1.scopes||(_1.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=_1;try{return _1=this,e()}finally{_1=t}}}on(){_1=this}off(){_1=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Xe(){return _1}let J;const p2=new WeakSet;class B0{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_1&&_1.active&&_1.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,p2.has(this)&&(p2.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||V0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,l0(this),K0(this);const e=J,t=O1;J=this,O1=!0;try{return this.fn()}finally{k0(this),J=e,O1=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)W2(e);this.deps=this.depsTail=void 0,l0(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?p2.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){S2(this)&&this.run()}get dirty(){return S2(this)}}let U0=0,On,En;function V0(n,e=!1){if(n.flags|=8,e){n.next=En,En=n;return}n.next=On,On=n}function j2(){U0++}function N2(){if(--U0>0)return;if(En){let e=En;for(En=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;On;){let e=On;for(On=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function K0(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function k0(n){let e,t=n.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),W2(s),Ze(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}n.deps=e,n.depsTail=t}function S2(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(q0(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function q0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Mn))return;n.globalVersion=Mn;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!S2(n)){n.flags&=-3;return}const t=J,s=O1;J=n,O1=!0;try{K0(n);const i=n.fn(n._value);(e.version===0||G1(i,n._value))&&(n._value=i,e.version++)}catch(i){throw e.version++,i}finally{J=t,O1=s,k0(n),n.flags&=-3}}function W2(n,e=!1){const{dep:t,prevSub:s,nextSub:i}=n;if(s&&(s.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let l=t.computed.deps;l;l=l.nextDep)W2(l,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ze(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let O1=!0;const Y0=[];function X1(){Y0.push(O1),O1=!1}function Z1(){const n=Y0.pop();O1=n===void 0?!0:n}function l0(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=J;J=void 0;try{e()}finally{J=t}}}let Mn=0;class Qe{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class B2{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!J||!O1||J===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==J)t=this.activeLink=new Qe(J,this),J.deps?(t.prevDep=J.depsTail,J.depsTail.nextDep=t,J.depsTail=t):J.deps=J.depsTail=t,G0(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=J.depsTail,t.nextDep=void 0,J.depsTail.nextDep=t,J.depsTail=t,J.deps===t&&(J.deps=s)}return t}trigger(e){this.version++,Mn++,this.notify(e)}notify(e){j2();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{N2()}}}function G0(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)G0(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const w2=new WeakMap,sn=Symbol(""),C2=Symbol(""),In=Symbol("");function r1(n,e,t){if(O1&&J){let s=w2.get(n);s||w2.set(n,s=new Map);let i=s.get(t);i||(s.set(t,i=new B2),i.map=s,i.key=t),i.track()}}function B1(n,e,t,s,i,l){const r=w2.get(n);if(!r){Mn++;return}const o=c=>{c&&c.trigger()};if(j2(),e==="clear")r.forEach(o);else{const c=M(n),d=c&&L2(t);if(c&&t==="length"){const f=Number(s);r.forEach((p,w)=>{(w==="length"||w===In||!z1(w)&&w>=f)&&o(p)})}else switch((t!==void 0||r.has(void 0))&&o(r.get(t)),d&&o(r.get(In)),e){case"add":c?d&&o(r.get("length")):(o(r.get(sn)),dn(n)&&o(r.get(C2)));break;case"delete":c||(o(r.get(sn)),dn(n)&&o(r.get(C2)));break;case"set":dn(n)&&o(r.get(sn));break}}N2()}function an(n){const e=V(n);return e===n?e:(r1(e,"iterate",In),w1(n)?e:e.map(o1))}function l2(n){return r1(n=V(n),"iterate",In),n}const nt={__proto__:null,[Symbol.iterator](){return g2(this,Symbol.iterator,o1)},concat(...n){return an(this).concat(...n.map(e=>M(e)?an(e):e))},entries(){return g2(this,"entries",n=>(n[1]=o1(n[1]),n))},every(n,e){return N1(this,"every",n,e,void 0,arguments)},filter(n,e){return N1(this,"filter",n,e,t=>t.map(o1),arguments)},find(n,e){return N1(this,"find",n,e,o1,arguments)},findIndex(n,e){return N1(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return N1(this,"findLast",n,e,o1,arguments)},findLastIndex(n,e){return N1(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return N1(this,"forEach",n,e,void 0,arguments)},includes(...n){return m2(this,"includes",n)},indexOf(...n){return m2(this,"indexOf",n)},join(n){return an(this).join(n)},lastIndexOf(...n){return m2(this,"lastIndexOf",n)},map(n,e){return N1(this,"map",n,e,void 0,arguments)},pop(){return vn(this,"pop")},push(...n){return vn(this,"push",n)},reduce(n,...e){return r0(this,"reduce",n,e)},reduceRight(n,...e){return r0(this,"reduceRight",n,e)},shift(){return vn(this,"shift")},some(n,e){return N1(this,"some",n,e,void 0,arguments)},splice(...n){return vn(this,"splice",n)},toReversed(){return an(this).toReversed()},toSorted(n){return an(this).toSorted(n)},toSpliced(...n){return an(this).toSpliced(...n)},unshift(...n){return vn(this,"unshift",n)},values(){return g2(this,"values",o1)}};function g2(n,e,t){const s=l2(n),i=s[e]();return s!==n&&!w1(n)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.value&&(l.value=t(l.value)),l}),i}const et=Array.prototype;function N1(n,e,t,s,i,l){const r=l2(n),o=r!==n&&!w1(n),c=r[e];if(c!==et[e]){const p=c.apply(n,l);return o?o1(p):p}let d=t;r!==n&&(o?d=function(p,w){return t.call(this,o1(p),w,n)}:t.length>2&&(d=function(p,w){return t.call(this,p,w,n)}));const f=c.call(r,d,s);return o&&i?i(f):f}function r0(n,e,t,s){const i=l2(n);let l=t;return i!==n&&(w1(n)?t.length>3&&(l=function(r,o,c){return t.call(this,r,o,c,n)}):l=function(r,o,c){return t.call(this,r,o1(o),c,n)}),i[e](l,...s)}function m2(n,e,t){const s=V(n);r1(s,"iterate",In);const i=s[e](...t);return(i===-1||i===!1)&&K2(t[0])?(t[0]=V(t[0]),s[e](...t)):i}function vn(n,e,t=[]){X1(),j2();const s=V(n)[e].apply(n,t);return N2(),Z1(),s}const tt=F2("__proto__,__v_isRef,__isVue"),J0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(z1));function st(n){z1(n)||(n=String(n));const e=V(this);return r1(e,"has",n),e.hasOwnProperty(n)}class z0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,l=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return l;if(t==="__v_raw")return s===(i?l?ut:ne:l?Q0:Z0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=M(e);if(!i){let c;if(r&&(c=nt[t]))return c;if(t==="hasOwnProperty")return st}const o=Reflect.get(e,t,t1(e)?e:s);return(z1(t)?J0.has(t):tt(t))||(i||r1(e,"get",t),l)?o:t1(o)?r&&L2(t)?o:o.value:X(o)?i?ee(o):Fn(o):o}}class X0 extends z0{constructor(e=!1){super(!1,e)}set(e,t,s,i){let l=e[t];if(!this._isShallow){const c=ln(l);if(!w1(s)&&!ln(s)&&(l=V(l),s=V(s)),!M(e)&&t1(l)&&!t1(s))return c?!1:(l.value=s,!0)}const r=M(e)&&L2(t)?Number(t)<e.length:K(e,t),o=Reflect.set(e,t,s,t1(e)?e:i);return e===V(i)&&(r?G1(s,l)&&B1(e,"set",t,s):B1(e,"add",t,s)),o}deleteProperty(e,t){const s=K(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&s&&B1(e,"delete",t,void 0),i}has(e,t){const s=Reflect.has(e,t);return(!z1(t)||!J0.has(t))&&r1(e,"has",t),s}ownKeys(e){return r1(e,"iterate",M(e)?"length":sn),Reflect.ownKeys(e)}}class it extends z0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const lt=new X0,rt=new it,ot=new X0(!0);const T2=n=>n,Bn=n=>Reflect.getPrototypeOf(n);function at(n,e,t){return function(...s){const i=this.__v_raw,l=V(i),r=dn(l),o=n==="entries"||n===Symbol.iterator&&r,c=n==="keys"&&r,d=i[n](...s),f=t?T2:e?O2:o1;return!e&&r1(l,"iterate",c?C2:sn),{next(){const{value:p,done:w}=d.next();return w?{value:p,done:w}:{value:o?[f(p[0]),f(p[1])]:f(p),done:w}},[Symbol.iterator](){return this}}}}function Un(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ct(n,e){const t={get(i){const l=this.__v_raw,r=V(l),o=V(i);n||(G1(i,o)&&r1(r,"get",i),r1(r,"get",o));const{has:c}=Bn(r),d=e?T2:n?O2:o1;if(c.call(r,i))return d(l.get(i));if(c.call(r,o))return d(l.get(o));l!==r&&l.get(i)},get size(){const i=this.__v_raw;return!n&&r1(V(i),"iterate",sn),Reflect.get(i,"size",i)},has(i){const l=this.__v_raw,r=V(l),o=V(i);return n||(G1(i,o)&&r1(r,"has",i),r1(r,"has",o)),i===o?l.has(i):l.has(i)||l.has(o)},forEach(i,l){const r=this,o=r.__v_raw,c=V(o),d=e?T2:n?O2:o1;return!n&&r1(c,"iterate",sn),o.forEach((f,p)=>i.call(l,d(f),d(p),r))}};return s1(t,n?{add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear")}:{add(i){!e&&!w1(i)&&!ln(i)&&(i=V(i));const l=V(this);return Bn(l).has.call(l,i)||(l.add(i),B1(l,"add",i,i)),this},set(i,l){!e&&!w1(l)&&!ln(l)&&(l=V(l));const r=V(this),{has:o,get:c}=Bn(r);let d=o.call(r,i);d||(i=V(i),d=o.call(r,i));const f=c.call(r,i);return r.set(i,l),d?G1(l,f)&&B1(r,"set",i,l):B1(r,"add",i,l),this},delete(i){const l=V(this),{has:r,get:o}=Bn(l);let c=r.call(l,i);c||(i=V(i),c=r.call(l,i)),o&&o.call(l,i);const d=l.delete(i);return c&&B1(l,"delete",i,void 0),d},clear(){const i=V(this),l=i.size!==0,r=i.clear();return l&&B1(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=at(i,n,e)}),t}function U2(n,e){const t=ct(n,e);return(s,i,l)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?s:Reflect.get(K(t,i)&&i in s?t:s,i,l)}const ht={get:U2(!1,!1)},ft={get:U2(!1,!0)},dt={get:U2(!0,!1)};const Z0=new WeakMap,Q0=new WeakMap,ne=new WeakMap,ut=new WeakMap;function pt(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gt(n){return n.__v_skip||!Object.isExtensible(n)?0:pt(We(n))}function Fn(n){return ln(n)?n:V2(n,!1,lt,ht,Z0)}function mt(n){return V2(n,!1,ot,ft,Q0)}function ee(n){return V2(n,!0,rt,dt,ne)}function V2(n,e,t,s,i){if(!X(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const l=i.get(n);if(l)return l;const r=gt(n);if(r===0)return n;const o=new Proxy(n,r===2?s:t);return i.set(n,o),o}function un(n){return ln(n)?un(n.__v_raw):!!(n&&n.__v_isReactive)}function ln(n){return!!(n&&n.__v_isReadonly)}function w1(n){return!!(n&&n.__v_isShallow)}function K2(n){return n?!!n.__v_raw:!1}function V(n){const e=n&&n.__v_raw;return e?V(e):n}function yt(n){return!K(n,"__v_skip")&&Object.isExtensible(n)&&L0(n,"__v_skip",!0),n}const o1=n=>X(n)?Fn(n):n,O2=n=>X(n)?ee(n):n;function t1(n){return n?n.__v_isRef===!0:!1}function cn(n){return _t(n,!1)}function _t(n,e){return t1(n)?n:new bt(n,e)}class bt{constructor(e,t){this.dep=new B2,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:V(e),this._value=t?e:o1(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||w1(e)||ln(e);e=s?e:V(e),G1(e,t)&&(this._rawValue=e,this._value=s?e:o1(e),this.dep.trigger())}}function S1(n){return t1(n)?n.value:n}const vt={get:(n,e,t)=>e==="__v_raw"?n:S1(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const i=n[e];return t1(i)&&!t1(t)?(i.value=t,!0):Reflect.set(n,e,t,s)}};function te(n){return un(n)?n:new Proxy(n,vt)}class xt{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new B2(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&J!==this)return V0(this,!0),!0}get value(){const e=this.dep.track();return q0(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function St(n,e,t=!1){let s,i;return F(n)?s=n:(s=n.get,i=n.set),new xt(s,i,t)}const Vn={},Gn=new WeakMap;let tn;function wt(n,e=!1,t=tn){if(t){let s=Gn.get(t);s||Gn.set(t,s=[]),s.push(n)}}function Ct(n,e,t=z){const{immediate:s,deep:i,once:l,scheduler:r,augmentJob:o,call:c}=t,d=R=>i?R:w1(R)||i===!1||i===0?Y1(R,1):Y1(R);let f,p,w,T,j=!1,H=!1;if(t1(n)?(p=()=>n.value,j=w1(n)):un(n)?(p=()=>d(n),j=!0):M(n)?(H=!0,j=n.some(R=>un(R)||w1(R)),p=()=>n.map(R=>{if(t1(R))return R.value;if(un(R))return d(R);if(F(R))return c?c(R,2):R()})):F(n)?e?p=c?()=>c(n,2):n:p=()=>{if(w){X1();try{w()}finally{Z1()}}const R=tn;tn=f;try{return c?c(n,3,[T]):n(T)}finally{tn=R}}:p=$1,e&&i){const R=p,Z=i===!0?1/0:i;p=()=>Y1(R(),Z)}const n1=Xe(),k=()=>{f.stop(),n1&&n1.active&&$2(n1.effects,f)};if(l&&e){const R=e;e=(...Z)=>{R(...Z),k()}}let I=H?new Array(n.length).fill(Vn):Vn;const Y=R=>{if(!(!(f.flags&1)||!f.dirty&&!R))if(e){const Z=f.run();if(i||j||(H?Z.some((u1,v1)=>G1(u1,I[v1])):G1(Z,I))){w&&w();const u1=tn;tn=f;try{const v1=[Z,I===Vn?void 0:H&&I[0]===Vn?[]:I,T];c?c(e,3,v1):e(...v1),I=Z}finally{tn=u1}}}else f.run()};return o&&o(Y),f=new B0(p),f.scheduler=r?()=>r(Y,!1):Y,T=R=>wt(R,!1,f),w=f.onStop=()=>{const R=Gn.get(f);if(R){if(c)c(R,4);else for(const Z of R)Z();Gn.delete(f)}},e?s?Y(!0):I=f.run():r?r(Y.bind(null,!0),!0):f.run(),k.pause=f.pause.bind(f),k.resume=f.resume.bind(f),k.stop=k,k}function Y1(n,e=1/0,t){if(e<=0||!X(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,t1(n))Y1(n.value,e,t);else if(M(n))for(let s=0;s<n.length;s++)Y1(n[s],e,t);else if(M0(n)||dn(n))n.forEach(s=>{Y1(s,e,t)});else if(H0(n)){for(const s in n)Y1(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Y1(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jn(n,e,t,s){try{return s?n(...s):n()}catch(i){r2(i,e,t)}}function L1(n,e,t,s){if(F(n)){const i=jn(n,e,t,s);return i&&I0(i)&&i.catch(l=>{r2(l,e,t)}),i}if(M(n)){const i=[];for(let l=0;l<n.length;l++)i.push(L1(n[l],e,t,s));return i}}function r2(n,e,t,s=!0){const i=e?e.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||z;if(e){let o=e.parent;const c=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const f=o.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](n,c,d)===!1)return}o=o.parent}if(l){X1(),jn(l,null,10,[n,c,d]),Z1();return}}Tt(n,t,i,s,r)}function Tt(n,e,t,s=!0,i=!1){if(i)throw n;console.error(n)}const h1=[];let M1=-1;const pn=[];let k1=null,hn=0;const se=Promise.resolve();let Jn=null;function Ot(n){const e=Jn||se;return n?e.then(this?n.bind(this):n):e}function Et(n){let e=M1+1,t=h1.length;for(;e<t;){const s=e+t>>>1,i=h1[s],l=Hn(i);l<n||l===n&&i.flags&2?e=s+1:t=s}return e}function k2(n){if(!(n.flags&1)){const e=Hn(n),t=h1[h1.length-1];!t||!(n.flags&2)&&e>=Hn(t)?h1.push(n):h1.splice(Et(e),0,n),n.flags|=1,ie()}}function ie(){Jn||(Jn=se.then(re))}function Pt(n){M(n)?pn.push(...n):k1&&n.id===-1?k1.splice(hn+1,0,n):n.flags&1||(pn.push(n),n.flags|=1),ie()}function o0(n,e,t=M1+1){for(;t<h1.length;t++){const s=h1[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;h1.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function le(n){if(pn.length){const e=[...new Set(pn)].sort((t,s)=>Hn(t)-Hn(s));if(pn.length=0,k1){k1.push(...e);return}for(k1=e,hn=0;hn<k1.length;hn++){const t=k1[hn];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}k1=null,hn=0}}const Hn=n=>n.id==null?n.flags&2?-1:1/0:n.id;function re(n){try{for(M1=0;M1<h1.length;M1++){const e=h1[M1];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;M1<h1.length;M1++){const e=h1[M1];e&&(e.flags&=-2)}M1=-1,h1.length=0,le(),Jn=null,(h1.length||pn.length)&&re()}}let H1=null,oe=null;function zn(n){const e=H1;return H1=n,oe=n&&n.type.__scopeId||null,e}function Rt(n,e=H1,t){if(!e||n._n)return n;const s=(...i)=>{s._d&&g0(-1);const l=zn(e);let r;try{r=n(...i)}finally{zn(l),s._d&&g0(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function nn(n,e,t,s){const i=n.dirs,l=e&&e.dirs;for(let r=0;r<i.length;r++){const o=i[r];l&&(o.oldValue=l[r].value);let c=o.dir[s];c&&(X1(),L1(c,t,8,[n.el,o,n,e]),Z1())}}const At=Symbol("_vte"),Dt=n=>n.__isTeleport;function q2(n,e){n.shapeFlag&6&&n.component?(n.transition=e,q2(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ae(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Xn(n,e,t,s,i=!1){if(M(n)){n.forEach((j,H)=>Xn(j,e&&(M(e)?e[H]:e),t,s,i));return}if(Pn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Xn(n,e,t,s.component.subTree);return}const l=s.shapeFlag&4?X2(s.component):s.el,r=i?null:l,{i:o,r:c}=n,d=e&&e.r,f=o.refs===z?o.refs={}:o.refs,p=o.setupState,w=V(p),T=p===z?()=>!1:j=>K(w,j);if(d!=null&&d!==c&&(Q(d)?(f[d]=null,T(d)&&(p[d]=null)):t1(d)&&(d.value=null)),F(c))jn(c,o,12,[r,f]);else{const j=Q(c),H=t1(c);if(j||H){const n1=()=>{if(n.f){const k=j?T(c)?p[c]:f[c]:c.value;i?M(k)&&$2(k,l):M(k)?k.includes(l)||k.push(l):j?(f[c]=[l],T(c)&&(p[c]=f[c])):(c.value=[l],n.k&&(f[n.k]=c.value))}else j?(f[c]=r,T(c)&&(p[c]=r)):H&&(c.value=r,n.k&&(f[n.k]=r))};r?(n1.id=-1,y1(n1,t)):n1()}}}s2().requestIdleCallback;s2().cancelIdleCallback;const Pn=n=>!!n.type.__asyncLoader,ce=n=>n.type.__isKeepAlive;function Mt(n,e){he(n,"a",e)}function It(n,e){he(n,"da",e)}function he(n,e,t=d1){const s=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(o2(e,s,t),t){let i=t.parent;for(;i&&i.parent;)ce(i.parent.vnode)&&Ft(s,e,t,i),i=i.parent}}function Ft(n,e,t,s){const i=o2(e,n,s,!0);fe(()=>{$2(s[e],i)},t)}function o2(n,e,t=d1,s=!1){if(t){const i=t[n]||(t[n]=[]),l=e.__weh||(e.__weh=(...r)=>{X1();const o=Nn(t),c=L1(e,t,n,r);return o(),Z1(),c});return s?i.unshift(l):i.push(l),l}}const U1=n=>(e,t=d1)=>{(!Ln||n==="sp")&&o2(n,(...s)=>e(...s),t)},Ht=U1("bm"),Y2=U1("m"),$t=U1("bu"),Lt=U1("u"),jt=U1("bum"),fe=U1("um"),Nt=U1("sp"),Wt=U1("rtg"),Bt=U1("rtc");function Ut(n,e=d1){o2("ec",n,e)}const Vt=Symbol.for("v-ndc");function xn(n,e,t,s){let i;const l=t,r=M(n);if(r||Q(n)){const o=r&&un(n);let c=!1;o&&(c=!w1(n),n=l2(n)),i=new Array(n.length);for(let d=0,f=n.length;d<f;d++)i[d]=e(c?o1(n[d]):n[d],d,void 0,l)}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,l)}else if(X(n))if(n[Symbol.iterator])i=Array.from(n,(o,c)=>e(o,c,void 0,l));else{const o=Object.keys(n);i=new Array(o.length);for(let c=0,d=o.length;c<d;c++){const f=o[c];i[c]=e(n[f],f,c,l)}}else i=[];return i}const E2=n=>n?Ie(n)?X2(n):E2(n.parent):null,Rn=s1(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>E2(n.parent),$root:n=>E2(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>G2(n),$forceUpdate:n=>n.f||(n.f=()=>{k2(n.update)}),$nextTick:n=>n.n||(n.n=Ot.bind(n.proxy)),$watch:n=>f3.bind(n)}),y2=(n,e)=>n!==z&&!n.__isScriptSetup&&K(n,e),Kt={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:l,accessCache:r,type:o,appContext:c}=n;let d;if(e[0]!=="$"){const T=r[e];if(T!==void 0)switch(T){case 1:return s[e];case 2:return i[e];case 4:return t[e];case 3:return l[e]}else{if(y2(s,e))return r[e]=1,s[e];if(i!==z&&K(i,e))return r[e]=2,i[e];if((d=n.propsOptions[0])&&K(d,e))return r[e]=3,l[e];if(t!==z&&K(t,e))return r[e]=4,t[e];P2&&(r[e]=0)}}const f=Rn[e];let p,w;if(f)return e==="$attrs"&&r1(n.attrs,"get",""),f(n);if((p=o.__cssModules)&&(p=p[e]))return p;if(t!==z&&K(t,e))return r[e]=4,t[e];if(w=c.config.globalProperties,K(w,e))return w[e]},set({_:n},e,t){const{data:s,setupState:i,ctx:l}=n;return y2(i,e)?(i[e]=t,!0):s!==z&&K(s,e)?(s[e]=t,!0):K(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(l[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:i,propsOptions:l}},r){let o;return!!t[r]||n!==z&&K(n,r)||y2(e,r)||(o=l[0])&&K(o,r)||K(s,r)||K(Rn,r)||K(i.config.globalProperties,r)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:K(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function a0(n){return M(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let P2=!0;function kt(n){const e=G2(n),t=n.proxy,s=n.ctx;P2=!1,e.beforeCreate&&c0(e.beforeCreate,n,"bc");const{data:i,computed:l,methods:r,watch:o,provide:c,inject:d,created:f,beforeMount:p,mounted:w,beforeUpdate:T,updated:j,activated:H,deactivated:n1,beforeDestroy:k,beforeUnmount:I,destroyed:Y,unmounted:R,render:Z,renderTracked:u1,renderTriggered:v1,errorCaptured:x1,serverPrefetch:P1,expose:j1,inheritAttrs:V1,components:$,directives:O,filters:C}=e;if(d&&qt(d,s,null),r)for(const W in r){const U=r[W];F(U)&&(s[W]=U.bind(t))}if(i){const W=i.call(t,t);X(W)&&(n.data=Fn(W))}if(P2=!0,l)for(const W in l){const U=l[W],C1=F(U)?U.bind(t,t):F(U.get)?U.get.bind(t,t):$1,K1=!F(U)&&F(U.set)?U.set.bind(t):$1,Q1=I3({get:C1,set:K1});Object.defineProperty(s,W,{enumerable:!0,configurable:!0,get:()=>Q1.value,set:R1=>Q1.value=R1})}if(o)for(const W in o)de(o[W],s,t,W);if(c){const W=F(c)?c.call(t):c;Reflect.ownKeys(W).forEach(U=>{Zt(U,W[U])})}f&&c0(f,n,"c");function L(W,U){M(U)?U.forEach(C1=>W(C1.bind(t))):U&&W(U.bind(t))}if(L(Ht,p),L(Y2,w),L($t,T),L(Lt,j),L(Mt,H),L(It,n1),L(Ut,x1),L(Bt,u1),L(Wt,v1),L(jt,I),L(fe,R),L(Nt,P1),M(j1))if(j1.length){const W=n.exposed||(n.exposed={});j1.forEach(U=>{Object.defineProperty(W,U,{get:()=>t[U],set:C1=>t[U]=C1})})}else n.exposed||(n.exposed={});Z&&n.render===$1&&(n.render=Z),V1!=null&&(n.inheritAttrs=V1),$&&(n.components=$),O&&(n.directives=O),P1&&ae(n)}function qt(n,e,t=$1){M(n)&&(n=R2(n));for(const s in n){const i=n[s];let l;X(i)?"default"in i?l=Kn(i.from||s,i.default,!0):l=Kn(i.from||s):l=Kn(i),t1(l)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):e[s]=l}}function c0(n,e,t){L1(M(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function de(n,e,t,s){let i=s.includes(".")?Oe(t,s):()=>t[s];if(Q(n)){const l=e[n];F(l)&&An(i,l)}else if(F(n))An(i,n.bind(t));else if(X(n))if(M(n))n.forEach(l=>de(l,e,t,s));else{const l=F(n.handler)?n.handler.bind(t):e[n.handler];F(l)&&An(i,l,n)}}function G2(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=n.appContext,o=l.get(e);let c;return o?c=o:!i.length&&!t&&!s?c=e:(c={},i.length&&i.forEach(d=>Zn(c,d,r,!0)),Zn(c,e,r)),X(e)&&l.set(e,c),c}function Zn(n,e,t,s=!1){const{mixins:i,extends:l}=e;l&&Zn(n,l,t,!0),i&&i.forEach(r=>Zn(n,r,t,!0));for(const r in e)if(!(s&&r==="expose")){const o=Yt[r]||t&&t[r];n[r]=o?o(n[r],e[r]):e[r]}return n}const Yt={data:h0,props:f0,emits:f0,methods:Cn,computed:Cn,beforeCreate:a1,created:a1,beforeMount:a1,mounted:a1,beforeUpdate:a1,updated:a1,beforeDestroy:a1,beforeUnmount:a1,destroyed:a1,unmounted:a1,activated:a1,deactivated:a1,errorCaptured:a1,serverPrefetch:a1,components:Cn,directives:Cn,watch:Jt,provide:h0,inject:Gt};function h0(n,e){return e?n?function(){return s1(F(n)?n.call(this,this):n,F(e)?e.call(this,this):e)}:e:n}function Gt(n,e){return Cn(R2(n),R2(e))}function R2(n){if(M(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function a1(n,e){return n?[...new Set([].concat(n,e))]:e}function Cn(n,e){return n?s1(Object.create(null),n,e):e}function f0(n,e){return n?M(n)&&M(e)?[...new Set([...n,...e])]:s1(Object.create(null),a0(n),a0(e??{})):e}function Jt(n,e){if(!n)return e;if(!e)return n;const t=s1(Object.create(null),n);for(const s in e)t[s]=a1(n[s],e[s]);return t}function ue(){return{app:null,config:{isNativeTag:je,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zt=0;function Xt(n,e){return function(s,i=null){F(s)||(s=s1({},s)),i!=null&&!X(i)&&(i=null);const l=ue(),r=new WeakSet,o=[];let c=!1;const d=l.app={_uid:zt++,_component:s,_props:i,_container:null,_context:l,_instance:null,version:F3,get config(){return l.config},set config(f){},use(f,...p){return r.has(f)||(f&&F(f.install)?(r.add(f),f.install(d,...p)):F(f)&&(r.add(f),f(d,...p))),d},mixin(f){return l.mixins.includes(f)||l.mixins.push(f),d},component(f,p){return p?(l.components[f]=p,d):l.components[f]},directive(f,p){return p?(l.directives[f]=p,d):l.directives[f]},mount(f,p,w){if(!c){const T=d._ceVNode||E1(s,i);return T.appContext=l,w===!0?w="svg":w===!1&&(w=void 0),p&&e?e(T,f):n(T,f,w),c=!0,d._container=f,f.__vue_app__=d,X2(T.component)}},onUnmount(f){o.push(f)},unmount(){c&&(L1(o,d._instance,16),n(null,d._container),delete d._container.__vue_app__)},provide(f,p){return l.provides[f]=p,d},runWithContext(f){const p=gn;gn=d;try{return f()}finally{gn=p}}};return d}}let gn=null;function Zt(n,e){if(d1){let t=d1.provides;const s=d1.parent&&d1.parent.provides;s===t&&(t=d1.provides=Object.create(s)),t[n]=e}}function Kn(n,e,t=!1){const s=d1||H1;if(s||gn){const i=gn?gn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&F(e)?e.call(s&&s.proxy):e}}const pe={},ge=()=>Object.create(pe),me=n=>Object.getPrototypeOf(n)===pe;function Qt(n,e,t,s=!1){const i={},l=ge();n.propsDefaults=Object.create(null),ye(n,e,i,l);for(const r in n.propsOptions[0])r in i||(i[r]=void 0);t?n.props=s?i:mt(i):n.type.props?n.props=i:n.props=l,n.attrs=l}function n3(n,e,t,s){const{props:i,attrs:l,vnode:{patchFlag:r}}=n,o=V(i),[c]=n.propsOptions;let d=!1;if((s||r>0)&&!(r&16)){if(r&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let w=f[p];if(a2(n.emitsOptions,w))continue;const T=e[w];if(c)if(K(l,w))T!==l[w]&&(l[w]=T,d=!0);else{const j=J1(w);i[j]=A2(c,o,j,T,n,!1)}else T!==l[w]&&(l[w]=T,d=!0)}}}else{ye(n,e,i,l)&&(d=!0);let f;for(const p in o)(!e||!K(e,p)&&((f=on(p))===p||!K(e,f)))&&(c?t&&(t[p]!==void 0||t[f]!==void 0)&&(i[p]=A2(c,o,p,void 0,n,!0)):delete i[p]);if(l!==o)for(const p in l)(!e||!K(e,p))&&(delete l[p],d=!0)}d&&B1(n.attrs,"set","")}function ye(n,e,t,s){const[i,l]=n.propsOptions;let r=!1,o;if(e)for(let c in e){if(Tn(c))continue;const d=e[c];let f;i&&K(i,f=J1(c))?!l||!l.includes(f)?t[f]=d:(o||(o={}))[f]=d:a2(n.emitsOptions,c)||(!(c in s)||d!==s[c])&&(s[c]=d,r=!0)}if(l){const c=V(t),d=o||z;for(let f=0;f<l.length;f++){const p=l[f];t[p]=A2(i,c,p,d[p],n,!K(d,p))}}return r}function A2(n,e,t,s,i,l){const r=n[t];if(r!=null){const o=K(r,"default");if(o&&s===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&F(c)){const{propsDefaults:d}=i;if(t in d)s=d[t];else{const f=Nn(i);s=d[t]=c.call(null,e),f()}}else s=c;i.ce&&i.ce._setProp(t,s)}r[0]&&(l&&!o?s=!1:r[1]&&(s===""||s===on(t))&&(s=!0))}return s}const e3=new WeakMap;function _e(n,e,t=!1){const s=t?e3:e.propsCache,i=s.get(n);if(i)return i;const l=n.props,r={},o=[];let c=!1;if(!F(n)){const f=p=>{c=!0;const[w,T]=_e(p,e,!0);s1(r,w),T&&o.push(...T)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!l&&!c)return X(n)&&s.set(n,fn),fn;if(M(l))for(let f=0;f<l.length;f++){const p=J1(l[f]);d0(p)&&(r[p]=z)}else if(l)for(const f in l){const p=J1(f);if(d0(p)){const w=l[f],T=r[p]=M(w)||F(w)?{type:w}:s1({},w),j=T.type;let H=!1,n1=!0;if(M(j))for(let k=0;k<j.length;++k){const I=j[k],Y=F(I)&&I.name;if(Y==="Boolean"){H=!0;break}else Y==="String"&&(n1=!1)}else H=F(j)&&j.name==="Boolean";T[0]=H,T[1]=n1,(H||K(T,"default"))&&o.push(p)}}const d=[r,o];return X(n)&&s.set(n,d),d}function d0(n){return n[0]!=="$"&&!Tn(n)}const be=n=>n[0]==="_"||n==="$stable",J2=n=>M(n)?n.map(F1):[F1(n)],t3=(n,e,t)=>{if(e._n)return e;const s=Rt((...i)=>J2(e(...i)),t);return s._c=!1,s},ve=(n,e,t)=>{const s=n._ctx;for(const i in n){if(be(i))continue;const l=n[i];if(F(l))e[i]=t3(i,l,s);else if(l!=null){const r=J2(l);e[i]=()=>r}}},xe=(n,e)=>{const t=J2(e);n.slots.default=()=>t},Se=(n,e,t)=>{for(const s in e)(t||s!=="_")&&(n[s]=e[s])},s3=(n,e,t)=>{const s=n.slots=ge();if(n.vnode.shapeFlag&32){const i=e._;i?(Se(s,e,t),t&&L0(s,"_",i,!0)):ve(e,s)}else e&&xe(n,e)},i3=(n,e,t)=>{const{vnode:s,slots:i}=n;let l=!0,r=z;if(s.shapeFlag&32){const o=e._;o?t&&o===1?l=!1:Se(i,e,t):(l=!e.$stable,ve(e,i)),r=e}else e&&(xe(n,e),r={default:1});if(l)for(const o in i)!be(o)&&r[o]==null&&delete i[o]},y1=_3;function l3(n){return r3(n)}function r3(n,e){const t=s2();t.__VUE__=!0;const{insert:s,remove:i,patchProp:l,createElement:r,createText:o,createComment:c,setText:d,setElementText:f,parentNode:p,nextSibling:w,setScopeId:T=$1,insertStaticContent:j}=n,H=(a,h,u,y=null,g=null,m=null,x=void 0,v=null,b=!!h.dynamicChildren)=>{if(a===h)return;a&&!Sn(a,h)&&(y=Wn(a),R1(a,g,m,!0),a=null),h.patchFlag===-2&&(b=!1,h.dynamicChildren=null);const{type:_,ref:P,shapeFlag:S}=h;switch(_){case c2:n1(a,h,u,y);break;case rn:k(a,h,u,y);break;case kn:a==null&&I(h,u,y,x);break;case f1:$(a,h,u,y,g,m,x,v,b);break;default:S&1?Z(a,h,u,y,g,m,x,v,b):S&6?O(a,h,u,y,g,m,x,v,b):(S&64||S&128)&&_.process(a,h,u,y,g,m,x,v,b,_n)}P!=null&&g&&Xn(P,a&&a.ref,m,h||a,!h)},n1=(a,h,u,y)=>{if(a==null)s(h.el=o(h.children),u,y);else{const g=h.el=a.el;h.children!==a.children&&d(g,h.children)}},k=(a,h,u,y)=>{a==null?s(h.el=c(h.children||""),u,y):h.el=a.el},I=(a,h,u,y)=>{[a.el,a.anchor]=j(a.children,h,u,y,a.el,a.anchor)},Y=({el:a,anchor:h},u,y)=>{let g;for(;a&&a!==h;)g=w(a),s(a,u,y),a=g;s(h,u,y)},R=({el:a,anchor:h})=>{let u;for(;a&&a!==h;)u=w(a),i(a),a=u;i(h)},Z=(a,h,u,y,g,m,x,v,b)=>{h.type==="svg"?x="svg":h.type==="math"&&(x="mathml"),a==null?u1(h,u,y,g,m,x,v,b):P1(a,h,g,m,x,v,b)},u1=(a,h,u,y,g,m,x,v)=>{let b,_;const{props:P,shapeFlag:S,transition:E,dirs:A}=a;if(b=a.el=r(a.type,m,P&&P.is,P),S&8?f(b,a.children):S&16&&x1(a.children,b,null,y,g,_2(a,m),x,v),A&&nn(a,null,y,"created"),v1(b,a,a.scopeId,x,y),P){for(const G in P)G!=="value"&&!Tn(G)&&l(b,G,null,P[G],m,y);"value"in P&&l(b,"value",null,P.value,m),(_=P.onVnodeBeforeMount)&&D1(_,y,a)}A&&nn(a,null,y,"beforeMount");const N=o3(g,E);N&&E.beforeEnter(b),s(b,h,u),((_=P&&P.onVnodeMounted)||N||A)&&y1(()=>{_&&D1(_,y,a),N&&E.enter(b),A&&nn(a,null,y,"mounted")},g)},v1=(a,h,u,y,g)=>{if(u&&T(a,u),y)for(let m=0;m<y.length;m++)T(a,y[m]);if(g){let m=g.subTree;if(h===m||Pe(m.type)&&(m.ssContent===h||m.ssFallback===h)){const x=g.vnode;v1(a,x,x.scopeId,x.slotScopeIds,g.parent)}}},x1=(a,h,u,y,g,m,x,v,b=0)=>{for(let _=b;_<a.length;_++){const P=a[_]=v?q1(a[_]):F1(a[_]);H(null,P,h,u,y,g,m,x,v)}},P1=(a,h,u,y,g,m,x)=>{const v=h.el=a.el;let{patchFlag:b,dynamicChildren:_,dirs:P}=h;b|=a.patchFlag&16;const S=a.props||z,E=h.props||z;let A;if(u&&en(u,!1),(A=E.onVnodeBeforeUpdate)&&D1(A,u,h,a),P&&nn(h,a,u,"beforeUpdate"),u&&en(u,!0),(S.innerHTML&&E.innerHTML==null||S.textContent&&E.textContent==null)&&f(v,""),_?j1(a.dynamicChildren,_,v,u,y,_2(h,g),m):x||U(a,h,v,null,u,y,_2(h,g),m,!1),b>0){if(b&16)V1(v,S,E,u,g);else if(b&2&&S.class!==E.class&&l(v,"class",null,E.class,g),b&4&&l(v,"style",S.style,E.style,g),b&8){const N=h.dynamicProps;for(let G=0;G<N.length;G++){const q=N[G],p1=S[q],i1=E[q];(i1!==p1||q==="value")&&l(v,q,p1,i1,g,u)}}b&1&&a.children!==h.children&&f(v,h.children)}else!x&&_==null&&V1(v,S,E,u,g);((A=E.onVnodeUpdated)||P)&&y1(()=>{A&&D1(A,u,h,a),P&&nn(h,a,u,"updated")},y)},j1=(a,h,u,y,g,m,x)=>{for(let v=0;v<h.length;v++){const b=a[v],_=h[v],P=b.el&&(b.type===f1||!Sn(b,_)||b.shapeFlag&70)?p(b.el):u;H(b,_,P,null,y,g,m,x,!0)}},V1=(a,h,u,y,g)=>{if(h!==u){if(h!==z)for(const m in h)!Tn(m)&&!(m in u)&&l(a,m,h[m],null,g,y);for(const m in u){if(Tn(m))continue;const x=u[m],v=h[m];x!==v&&m!=="value"&&l(a,m,v,x,g,y)}"value"in u&&l(a,"value",h.value,u.value,g)}},$=(a,h,u,y,g,m,x,v,b)=>{const _=h.el=a?a.el:o(""),P=h.anchor=a?a.anchor:o("");let{patchFlag:S,dynamicChildren:E,slotScopeIds:A}=h;A&&(v=v?v.concat(A):A),a==null?(s(_,u,y),s(P,u,y),x1(h.children||[],u,P,g,m,x,v,b)):S>0&&S&64&&E&&a.dynamicChildren?(j1(a.dynamicChildren,E,u,g,m,x,v),(h.key!=null||g&&h===g.subTree)&&we(a,h,!0)):U(a,h,u,P,g,m,x,v,b)},O=(a,h,u,y,g,m,x,v,b)=>{h.slotScopeIds=v,a==null?h.shapeFlag&512?g.ctx.activate(h,u,y,x,b):C(h,u,y,g,m,x,b):D(a,h,b)},C=(a,h,u,y,g,m,x)=>{const v=a.component=E3(a,y,g);if(ce(a)&&(v.ctx.renderer=_n),P3(v,!1,x),v.asyncDep){if(g&&g.registerDep(v,L,x),!a.el){const b=v.subTree=E1(rn);k(null,b,h,u)}}else L(v,a,h,u,g,m,x)},D=(a,h,u)=>{const y=h.component=a.component;if(m3(a,h,u))if(y.asyncDep&&!y.asyncResolved){W(y,h,u);return}else y.next=h,y.update();else h.el=a.el,y.vnode=h},L=(a,h,u,y,g,m,x)=>{const v=()=>{if(a.isMounted){let{next:S,bu:E,u:A,parent:N,vnode:G}=a;{const g1=Ce(a);if(g1){S&&(S.el=G.el,W(a,S,x)),g1.asyncDep.then(()=>{a.isUnmounted||v()});return}}let q=S,p1;en(a,!1),S?(S.el=G.el,W(a,S,x)):S=G,E&&d2(E),(p1=S.props&&S.props.onVnodeBeforeUpdate)&&D1(p1,N,S,G),en(a,!0);const i1=b2(a),T1=a.subTree;a.subTree=i1,H(T1,i1,p(T1.el),Wn(T1),a,g,m),S.el=i1.el,q===null&&y3(a,i1.el),A&&y1(A,g),(p1=S.props&&S.props.onVnodeUpdated)&&y1(()=>D1(p1,N,S,G),g)}else{let S;const{el:E,props:A}=h,{bm:N,m:G,parent:q,root:p1,type:i1}=a,T1=Pn(h);if(en(a,!1),N&&d2(N),!T1&&(S=A&&A.onVnodeBeforeMount)&&D1(S,q,h),en(a,!0),E&&e0){const g1=()=>{a.subTree=b2(a),e0(E,a.subTree,a,g,null)};T1&&i1.__asyncHydrate?i1.__asyncHydrate(E,a,g1):g1()}else{p1.ce&&p1.ce._injectChildStyle(i1);const g1=a.subTree=b2(a);H(null,g1,u,y,a,g,m),h.el=g1.el}if(G&&y1(G,g),!T1&&(S=A&&A.onVnodeMounted)){const g1=h;y1(()=>D1(S,q,g1),g)}(h.shapeFlag&256||q&&Pn(q.vnode)&&q.vnode.shapeFlag&256)&&a.a&&y1(a.a,g),a.isMounted=!0,h=u=y=null}};a.scope.on();const b=a.effect=new B0(v);a.scope.off();const _=a.update=b.run.bind(b),P=a.job=b.runIfDirty.bind(b);P.i=a,P.id=a.uid,b.scheduler=()=>k2(P),en(a,!0),_()},W=(a,h,u)=>{h.component=a;const y=a.vnode.props;a.vnode=h,a.next=null,n3(a,h.props,y,u),i3(a,h.children,u),X1(),o0(a),Z1()},U=(a,h,u,y,g,m,x,v,b=!1)=>{const _=a&&a.children,P=a?a.shapeFlag:0,S=h.children,{patchFlag:E,shapeFlag:A}=h;if(E>0){if(E&128){K1(_,S,u,y,g,m,x,v,b);return}else if(E&256){C1(_,S,u,y,g,m,x,v,b);return}}A&8?(P&16&&yn(_,g,m),S!==_&&f(u,S)):P&16?A&16?K1(_,S,u,y,g,m,x,v,b):yn(_,g,m,!0):(P&8&&f(u,""),A&16&&x1(S,u,y,g,m,x,v,b))},C1=(a,h,u,y,g,m,x,v,b)=>{a=a||fn,h=h||fn;const _=a.length,P=h.length,S=Math.min(_,P);let E;for(E=0;E<S;E++){const A=h[E]=b?q1(h[E]):F1(h[E]);H(a[E],A,u,null,g,m,x,v,b)}_>P?yn(a,g,m,!0,!1,S):x1(h,u,y,g,m,x,v,b,S)},K1=(a,h,u,y,g,m,x,v,b)=>{let _=0;const P=h.length;let S=a.length-1,E=P-1;for(;_<=S&&_<=E;){const A=a[_],N=h[_]=b?q1(h[_]):F1(h[_]);if(Sn(A,N))H(A,N,u,null,g,m,x,v,b);else break;_++}for(;_<=S&&_<=E;){const A=a[S],N=h[E]=b?q1(h[E]):F1(h[E]);if(Sn(A,N))H(A,N,u,null,g,m,x,v,b);else break;S--,E--}if(_>S){if(_<=E){const A=E+1,N=A<P?h[A].el:y;for(;_<=E;)H(null,h[_]=b?q1(h[_]):F1(h[_]),u,N,g,m,x,v,b),_++}}else if(_>E)for(;_<=S;)R1(a[_],g,m,!0),_++;else{const A=_,N=_,G=new Map;for(_=N;_<=E;_++){const m1=h[_]=b?q1(h[_]):F1(h[_]);m1.key!=null&&G.set(m1.key,_)}let q,p1=0;const i1=E-N+1;let T1=!1,g1=0;const bn=new Array(i1);for(_=0;_<i1;_++)bn[_]=0;for(_=A;_<=S;_++){const m1=a[_];if(p1>=i1){R1(m1,g,m,!0);continue}let A1;if(m1.key!=null)A1=G.get(m1.key);else for(q=N;q<=E;q++)if(bn[q-N]===0&&Sn(m1,h[q])){A1=q;break}A1===void 0?R1(m1,g,m,!0):(bn[A1-N]=_+1,A1>=g1?g1=A1:T1=!0,H(m1,h[A1],u,null,g,m,x,v,b),p1++)}const t0=T1?a3(bn):fn;for(q=t0.length-1,_=i1-1;_>=0;_--){const m1=N+_,A1=h[m1],s0=m1+1<P?h[m1+1].el:y;bn[_]===0?H(null,A1,u,s0,g,m,x,v,b):T1&&(q<0||_!==t0[q]?Q1(A1,u,s0,2):q--)}}},Q1=(a,h,u,y,g=null)=>{const{el:m,type:x,transition:v,children:b,shapeFlag:_}=a;if(_&6){Q1(a.component.subTree,h,u,y);return}if(_&128){a.suspense.move(h,u,y);return}if(_&64){x.move(a,h,u,_n);return}if(x===f1){s(m,h,u);for(let S=0;S<b.length;S++)Q1(b[S],h,u,y);s(a.anchor,h,u);return}if(x===kn){Y(a,h,u);return}if(y!==2&&_&1&&v)if(y===0)v.beforeEnter(m),s(m,h,u),y1(()=>v.enter(m),g);else{const{leave:S,delayLeave:E,afterLeave:A}=v,N=()=>s(m,h,u),G=()=>{S(m,()=>{N(),A&&A()})};E?E(m,N,G):G()}else s(m,h,u)},R1=(a,h,u,y=!1,g=!1)=>{const{type:m,props:x,ref:v,children:b,dynamicChildren:_,shapeFlag:P,patchFlag:S,dirs:E,cacheIndex:A}=a;if(S===-2&&(g=!1),v!=null&&Xn(v,null,u,a,!0),A!=null&&(h.renderCache[A]=void 0),P&256){h.ctx.deactivate(a);return}const N=P&1&&E,G=!Pn(a);let q;if(G&&(q=x&&x.onVnodeBeforeUnmount)&&D1(q,h,a),P&6)Le(a.component,u,y);else{if(P&128){a.suspense.unmount(u,y);return}N&&nn(a,null,h,"beforeUnmount"),P&64?a.type.remove(a,h,u,_n,y):_&&!_.hasOnce&&(m!==f1||S>0&&S&64)?yn(_,h,u,!1,!0):(m===f1&&S&384||!g&&P&16)&&yn(b,h,u),y&&Z2(a)}(G&&(q=x&&x.onVnodeUnmounted)||N)&&y1(()=>{q&&D1(q,h,a),N&&nn(a,null,h,"unmounted")},u)},Z2=a=>{const{type:h,el:u,anchor:y,transition:g}=a;if(h===f1){$e(u,y);return}if(h===kn){R(a);return}const m=()=>{i(u),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(a.shapeFlag&1&&g&&!g.persisted){const{leave:x,delayLeave:v}=g,b=()=>x(u,m);v?v(a.el,m,b):b()}else m()},$e=(a,h)=>{let u;for(;a!==h;)u=w(a),i(a),a=u;i(h)},Le=(a,h,u)=>{const{bum:y,scope:g,job:m,subTree:x,um:v,m:b,a:_}=a;u0(b),u0(_),y&&d2(y),g.stop(),m&&(m.flags|=8,R1(x,a,h,u)),v&&y1(v,h),y1(()=>{a.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},yn=(a,h,u,y=!1,g=!1,m=0)=>{for(let x=m;x<a.length;x++)R1(a[x],h,u,y,g)},Wn=a=>{if(a.shapeFlag&6)return Wn(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const h=w(a.anchor||a.el),u=h&&h[At];return u?w(u):h};let h2=!1;const Q2=(a,h,u)=>{a==null?h._vnode&&R1(h._vnode,null,null,!0):H(h._vnode||null,a,h,null,null,null,u),h._vnode=a,h2||(h2=!0,o0(),le(),h2=!1)},_n={p:H,um:R1,m:Q1,r:Z2,mt:C,mc:x1,pc:U,pbc:j1,n:Wn,o:n};let n0,e0;return{render:Q2,hydrate:n0,createApp:Xt(Q2,n0)}}function _2({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function en({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function o3(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function we(n,e,t=!1){const s=n.children,i=e.children;if(M(s)&&M(i))for(let l=0;l<s.length;l++){const r=s[l];let o=i[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[l]=q1(i[l]),o.el=r.el),!t&&o.patchFlag!==-2&&we(r,o)),o.type===c2&&(o.el=r.el)}}function a3(n){const e=n.slice(),t=[0];let s,i,l,r,o;const c=n.length;for(s=0;s<c;s++){const d=n[s];if(d!==0){if(i=t[t.length-1],n[i]<d){e[s]=i,t.push(s);continue}for(l=0,r=t.length-1;l<r;)o=l+r>>1,n[t[o]]<d?l=o+1:r=o;d<n[t[l]]&&(l>0&&(e[s]=t[l-1]),t[l]=s)}}for(l=t.length,r=t[l-1];l-- >0;)t[l]=r,r=e[r];return t}function Ce(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ce(e)}function u0(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const c3=Symbol.for("v-scx"),h3=()=>Kn(c3);function An(n,e,t){return Te(n,e,t)}function Te(n,e,t=z){const{immediate:s,deep:i,flush:l,once:r}=t,o=s1({},t),c=e&&s||!e&&l!=="post";let d;if(Ln){if(l==="sync"){const T=h3();d=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=$1,T.resume=$1,T.pause=$1,T}}const f=d1;o.call=(T,j,H)=>L1(T,f,j,H);let p=!1;l==="post"?o.scheduler=T=>{y1(T,f&&f.suspense)}:l!=="sync"&&(p=!0,o.scheduler=(T,j)=>{j?T():k2(T)}),o.augmentJob=T=>{e&&(T.flags|=4),p&&(T.flags|=2,f&&(T.id=f.uid,T.i=f))};const w=Ct(n,e,o);return Ln&&(d?d.push(w):c&&w()),w}function f3(n,e,t){const s=this.proxy,i=Q(n)?n.includes(".")?Oe(s,n):()=>s[n]:n.bind(s,s);let l;F(e)?l=e:(l=e.handler,t=e);const r=Nn(this),o=Te(i,l.bind(s),t);return r(),o}function Oe(n,e){const t=e.split(".");return()=>{let s=n;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const d3=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${J1(e)}Modifiers`]||n[`${on(e)}Modifiers`];function u3(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||z;let i=t;const l=e.startsWith("update:"),r=l&&d3(s,e.slice(7));r&&(r.trim&&(i=t.map(f=>Q(f)?f.trim():f)),r.number&&(i=t.map(Ve)));let o,c=s[o=f2(e)]||s[o=f2(J1(e))];!c&&l&&(c=s[o=f2(on(e))]),c&&L1(c,n,6,i);const d=s[o+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,L1(d,n,6,i)}}function Ee(n,e,t=!1){const s=e.emitsCache,i=s.get(n);if(i!==void 0)return i;const l=n.emits;let r={},o=!1;if(!F(n)){const c=d=>{const f=Ee(d,e,!0);f&&(o=!0,s1(r,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!l&&!o?(X(n)&&s.set(n,null),null):(M(l)?l.forEach(c=>r[c]=null):s1(r,l),X(n)&&s.set(n,r),r)}function a2(n,e){return!n||!n2(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(n,e[0].toLowerCase()+e.slice(1))||K(n,on(e))||K(n,e))}function b2(n){const{type:e,vnode:t,proxy:s,withProxy:i,propsOptions:[l],slots:r,attrs:o,emit:c,render:d,renderCache:f,props:p,data:w,setupState:T,ctx:j,inheritAttrs:H}=n,n1=zn(n);let k,I;try{if(t.shapeFlag&4){const R=i||s,Z=R;k=F1(d.call(Z,R,f,p,T,w,j)),I=o}else{const R=e;k=F1(R.length>1?R(p,{attrs:o,slots:r,emit:c}):R(p,null)),I=e.props?o:p3(o)}}catch(R){Dn.length=0,r2(R,n,1),k=E1(rn)}let Y=k;if(I&&H!==!1){const R=Object.keys(I),{shapeFlag:Z}=Y;R.length&&Z&7&&(l&&R.some(H2)&&(I=g3(I,l)),Y=mn(Y,I,!1,!0))}return t.dirs&&(Y=mn(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(t.dirs):t.dirs),t.transition&&q2(Y,t.transition),k=Y,zn(n1),k}const p3=n=>{let e;for(const t in n)(t==="class"||t==="style"||n2(t))&&((e||(e={}))[t]=n[t]);return e},g3=(n,e)=>{const t={};for(const s in n)(!H2(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function m3(n,e,t){const{props:s,children:i,component:l}=n,{props:r,children:o,patchFlag:c}=e,d=l.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?p0(s,r,d):!!r;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const w=f[p];if(r[w]!==s[w]&&!a2(d,w))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:s===r?!1:s?r?p0(s,r,d):!0:!!r;return!1}function p0(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let i=0;i<s.length;i++){const l=s[i];if(e[l]!==n[l]&&!a2(t,l))return!0}return!1}function y3({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const Pe=n=>n.__isSuspense;function _3(n,e){e&&e.pendingBranch?M(n)?e.effects.push(...n):e.effects.push(n):Pt(n)}const f1=Symbol.for("v-fgt"),c2=Symbol.for("v-txt"),rn=Symbol.for("v-cmt"),kn=Symbol.for("v-stc"),Dn=[];let b1=null;function l1(n=!1){Dn.push(b1=n?null:[])}function b3(){Dn.pop(),b1=Dn[Dn.length-1]||null}let $n=1;function g0(n,e=!1){$n+=n,n<0&&b1&&e&&(b1.hasOnce=!0)}function Re(n){return n.dynamicChildren=$n>0?b1||fn:null,b3(),$n>0&&b1&&b1.push(n),n}function c1(n,e,t,s,i,l){return Re(B(n,e,t,s,i,l,!0))}function v3(n,e,t,s,i){return Re(E1(n,e,t,s,i,!0))}function Ae(n){return n?n.__v_isVNode===!0:!1}function Sn(n,e){return n.type===e.type&&n.key===e.key}const De=({key:n})=>n??null,qn=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Q(n)||t1(n)||F(n)?{i:H1,r:n,k:e,f:!!t}:n:null);function B(n,e=null,t=null,s=0,i=null,l=n===f1?0:1,r=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&De(e),ref:e&&qn(e),scopeId:oe,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:H1};return o?(z2(c,t),l&128&&n.normalize(c)):t&&(c.shapeFlag|=Q(t)?8:16),$n>0&&!r&&b1&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&b1.push(c),c}const E1=x3;function x3(n,e=null,t=null,s=0,i=null,l=!1){if((!n||n===Vt)&&(n=rn),Ae(n)){const o=mn(n,e,!0);return t&&z2(o,t),$n>0&&!l&&b1&&(o.shapeFlag&6?b1[b1.indexOf(n)]=o:b1.push(o)),o.patchFlag=-2,o}if(M3(n)&&(n=n.__vccOpts),e){e=S3(e);let{class:o,style:c}=e;o&&!Q(o)&&(e.class=I1(o)),X(c)&&(K2(c)&&!M(c)&&(c=s1({},c)),e.style=i2(c))}const r=Q(n)?1:Pe(n)?128:Dt(n)?64:X(n)?4:F(n)?2:0;return B(n,e,t,s,i,r,l,!0)}function S3(n){return n?K2(n)||me(n)?s1({},n):n:null}function mn(n,e,t=!1,s=!1){const{props:i,ref:l,patchFlag:r,children:o,transition:c}=n,d=e?C3(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:d,key:d&&De(d),ref:e&&e.ref?t&&l?M(l)?l.concat(qn(e)):[l,qn(e)]:qn(e):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==f1?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mn(n.ssContent),ssFallback:n.ssFallback&&mn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&q2(f,c.clone(f)),f}function Me(n=" ",e=0){return E1(c2,null,n,e)}function w3(n,e){const t=E1(kn,null,n);return t.staticCount=e,t}function wn(n="",e=!1){return e?(l1(),v3(rn,null,n)):E1(rn,null,n)}function F1(n){return n==null||typeof n=="boolean"?E1(rn):M(n)?E1(f1,null,n.slice()):Ae(n)?q1(n):E1(c2,null,String(n))}function q1(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mn(n)}function z2(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(M(e))t=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),z2(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!me(e)?e._ctx=H1:i===3&&H1&&(H1.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:H1},t=32):(e=String(e),s&64?(t=16,e=[Me(e)]):t=8);n.children=e,n.shapeFlag|=t}function C3(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=I1([e.class,s.class]));else if(i==="style")e.style=i2([e.style,s.style]);else if(n2(i)){const l=e[i],r=s[i];r&&l!==r&&!(M(l)&&l.includes(r))&&(e[i]=l?[].concat(l,r):r)}else i!==""&&(e[i]=s[i])}return e}function D1(n,e,t,s=null){L1(n,e,7,[t,s])}const T3=ue();let O3=0;function E3(n,e,t){const s=n.type,i=(e?e.appContext:n.appContext)||T3,l={uid:O3++,vnode:n,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ze(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_e(s,i),emitsOptions:Ee(s,i),emit:null,emitted:null,propsDefaults:z,inheritAttrs:s.inheritAttrs,ctx:z,data:z,props:z,attrs:z,slots:z,refs:z,setupState:z,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=e?e.root:l,l.emit=u3.bind(null,l),n.ce&&n.ce(l),l}let d1=null,Qn,D2;{const n=s2(),e=(t,s)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(s),l=>{i.length>1?i.forEach(r=>r(l)):i[0](l)}};Qn=e("__VUE_INSTANCE_SETTERS__",t=>d1=t),D2=e("__VUE_SSR_SETTERS__",t=>Ln=t)}const Nn=n=>{const e=d1;return Qn(n),n.scope.on(),()=>{n.scope.off(),Qn(e)}},m0=()=>{d1&&d1.scope.off(),Qn(null)};function Ie(n){return n.vnode.shapeFlag&4}let Ln=!1;function P3(n,e=!1,t=!1){e&&D2(e);const{props:s,children:i}=n.vnode,l=Ie(n);Qt(n,s,l,e),s3(n,i,t);const r=l?R3(n,e):void 0;return e&&D2(!1),r}function R3(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Kt);const{setup:s}=t;if(s){X1();const i=n.setupContext=s.length>1?D3(n):null,l=Nn(n),r=jn(s,n,0,[n.props,i]),o=I0(r);if(Z1(),l(),(o||n.sp)&&!Pn(n)&&ae(n),o){if(r.then(m0,m0),e)return r.then(c=>{y0(n,c,e)}).catch(c=>{r2(c,n,0)});n.asyncDep=r}else y0(n,r,e)}else Fe(n,e)}function y0(n,e,t){F(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:X(e)&&(n.setupState=te(e)),Fe(n,t)}let _0;function Fe(n,e,t){const s=n.type;if(!n.render){if(!e&&_0&&!s.render){const i=s.template||G2(n).template;if(i){const{isCustomElement:l,compilerOptions:r}=n.appContext.config,{delimiters:o,compilerOptions:c}=s,d=s1(s1({isCustomElement:l,delimiters:o},r),c);s.render=_0(i,d)}}n.render=s.render||$1}{const i=Nn(n);X1();try{kt(n)}finally{Z1(),i()}}}const A3={get(n,e){return r1(n,"get",""),n[e]}};function D3(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,A3),slots:n.slots,emit:n.emit,expose:e}}function X2(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(te(yt(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Rn)return Rn[t](n)},has(e,t){return t in e||t in Rn}})):n.proxy}function M3(n){return F(n)&&"__vccOpts"in n}const I3=(n,e)=>St(n,e,Ln),F3="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let M2;const b0=typeof window<"u"&&window.trustedTypes;if(b0)try{M2=b0.createPolicy("vue",{createHTML:n=>n})}catch{}const He=M2?n=>M2.createHTML(n):n=>n,H3="http://www.w3.org/2000/svg",$3="http://www.w3.org/1998/Math/MathML",W1=typeof document<"u"?document:null,v0=W1&&W1.createElement("template"),L3={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const i=e==="svg"?W1.createElementNS(H3,n):e==="mathml"?W1.createElementNS($3,n):t?W1.createElement(n,{is:t}):W1.createElement(n);return n==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:n=>W1.createTextNode(n),createComment:n=>W1.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>W1.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,i,l){const r=t?t.previousSibling:e.lastChild;if(i&&(i===l||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===l||!(i=i.nextSibling)););else{v0.innerHTML=He(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const o=v0.content;if(s==="svg"||s==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}e.insertBefore(o,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},j3=Symbol("_vtc");function N3(n,e,t){const s=n[j3];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const x0=Symbol("_vod"),W3=Symbol("_vsh"),B3=Symbol(""),U3=/(^|;)\s*display\s*:/;function V3(n,e,t){const s=n.style,i=Q(t);let l=!1;if(t&&!i){if(e)if(Q(e))for(const r of e.split(";")){const o=r.slice(0,r.indexOf(":")).trim();t[o]==null&&Yn(s,o,"")}else for(const r in e)t[r]==null&&Yn(s,r,"");for(const r in t)r==="display"&&(l=!0),Yn(s,r,t[r])}else if(i){if(e!==t){const r=s[B3];r&&(t+=";"+r),s.cssText=t,l=U3.test(t)}}else e&&n.removeAttribute("style");x0 in n&&(n[x0]=l?s.display:"",n[W3]&&(s.display="none"))}const S0=/\s*!important$/;function Yn(n,e,t){if(M(t))t.forEach(s=>Yn(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=K3(n,e);S0.test(t)?n.setProperty(on(s),t.replace(S0,""),"important"):n[s]=t}}const w0=["Webkit","Moz","ms"],v2={};function K3(n,e){const t=v2[e];if(t)return t;let s=J1(e);if(s!=="filter"&&s in n)return v2[e]=s;s=$0(s);for(let i=0;i<w0.length;i++){const l=w0[i]+s;if(l in n)return v2[e]=l}return e}const C0="http://www.w3.org/1999/xlink";function T0(n,e,t,s,i,l=Je(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(C0,e.slice(6,e.length)):n.setAttributeNS(C0,e,t):t==null||l&&!j0(t)?n.removeAttribute(e):n.setAttribute(e,l?"":z1(t)?String(t):t)}function O0(n,e,t,s,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?He(t):t);return}const l=n.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const o=l==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(o!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=j0(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(i||e)}function k3(n,e,t,s){n.addEventListener(e,t,s)}function q3(n,e,t,s){n.removeEventListener(e,t,s)}const E0=Symbol("_vei");function Y3(n,e,t,s,i=null){const l=n[E0]||(n[E0]={}),r=l[e];if(s&&r)r.value=s;else{const[o,c]=G3(e);if(s){const d=l[e]=X3(s,i);k3(n,o,d,c)}else r&&(q3(n,o,r,c),l[e]=void 0)}}const P0=/(?:Once|Passive|Capture)$/;function G3(n){let e;if(P0.test(n)){e={};let s;for(;s=n.match(P0);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):on(n.slice(2)),e]}let x2=0;const J3=Promise.resolve(),z3=()=>x2||(J3.then(()=>x2=0),x2=Date.now());function X3(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;L1(Z3(s,t.value),e,5,[s])};return t.value=n,t.attached=z3(),t}function Z3(n,e){if(M(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const R0=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Q3=(n,e,t,s,i,l)=>{const r=i==="svg";e==="class"?N3(n,s,r):e==="style"?V3(n,t,s):n2(e)?H2(e)||Y3(n,e,t,s,l):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ns(n,e,s,r))?(O0(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&T0(n,e,s,r,l,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Q(s))?O0(n,J1(e),s,l,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),T0(n,e,s,r))};function ns(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&R0(e)&&F(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return R0(e)&&Q(t)?!1:e in n}const es=s1({patchProp:Q3},L3);let A0;function ts(){return A0||(A0=l3(es))}const ss=(...n)=>{const e=ts().createApp(...n),{mount:t}=e;return e.mount=s=>{const i=ls(s);if(!i)return;const l=e._component;!F(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=t(i,!1,is(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},e};function is(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ls(n){return Q(n)?document.querySelector(n):n}const I2={s1:[{name:"红色背景",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#c14949",n.fillRect(0,0,e,t)}},{name:"红色长条",strategy:(n,e,t,s,i)=>{n.fillStyle="red",n.globalCompositeOperation="destination-over",s.forEach(l=>{n.fillRect(l/24*e,0,e/24,t)})}}],s2:[{name:"紫色背景",id:"s21",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#d58585",n.fillRect(0,0,e,t)}}],s3:[{name:"蓝色进度条",id:"s31",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#8fb3f7",n.fillRect(e/3,t-t/10*s,e/3,t/10*s)}}],s4:[{name:"粉红进度条",id:"s41",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#ffd6e7",n.fillRect(e/3*2,t-t/10*s,e/3,t/10*s)}}],hh:[{name:"绿色进度条",id:"hh1",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#88ff8a",n.fillRect(0,t-t/10*s.length,e/3,t/10*s.length)}},{name:"绿色长条",strategy:(n,e,t,s,i)=>{n.fillStyle="#88ff8a",n.globalCompositeOperation="destination-over",s.forEach(l=>{n.fillRect(l/24*e,0,e/24,t)})}}],coner:[{name:"左上角大字",id:"coner1",strategy:(n,e,t,s,i)=>{n.font="50px gray",n.fillStyle="#2c2c2c",n.textBaseline="top",n.fillText(s[0],10,10)}}],memo:[{name:"左下角展示",id:"memo1",strategy:(n,e,t,s,i)=>{n.font="20px gray",n.fillStyle="black",n.textBaseline="bottom",n.fillText(s,10,t-10)}}],detail:[{name:"粉红badge",id:"detail1",strategy:(n,e,t,s,i)=>{}}]},rs={s1:"大发",s2:"大发不抽",s3:"小发",s4:"轻微发",hh:"恍惚",coner:"事件",memo:"备注",detail:"详情"},D0={s1:0,s2:0,s3:0,s4:0,hh:0,coner:0,memo:0,detail:0},os={class:"record"},as={__name:"Record",props:{record:Object,strategy:Object},setup(n){const e=n;let t,s,i,l;return Y2(()=>{s=t.getContext("2d"),i=t.width,l=t.height,An(e,()=>{if(e.record&&e.strategy&&s){s.clearRect(0,0,i,l);for(let r in e.record)e.strategy[r]!==-1&&I2[r][e.strategy[r]].strategy&&I2[r][e.strategy[r]].strategy(s,i,l,e.record[r],e.strategy)}},{deep:!0,immediate:!0})}),(r,o)=>(l1(),c1("div",os,[B("canvas",{ref:c=>t1(t)?t.value=c:t=c,width:"240",height:"148.32"},null,512)]))}},cs={"2024-02-04":{s1:[7],detail:`2月4号 7点（自己烧饭之类的，不开心？）尿了？
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
15:24说小哈去上学是背出来的样子`,s4:3},"2025-09-03":{memo:"今天开始那种很短的梦境或呕吐, 非常频繁, 持续天数也非常多",detail:`09:16看到王力宏视频，好像有点不舒服，其实早上到现在好几次了，大概23次，感觉的时候就会有，很淡的熟悉加梦境，感觉又不一定是，20问好了
27聊到大概昨天晚上也有，大概每天10次左右
09:30主动说又有的，有点梦里的，有一点点想吐，33问好了
10:27 有点不舒服, 不是熟悉感, 是什么我也不知道, 有点想吐, 有点晕, 讲不清楚, 30, 算好了. 说都不重
11:10太阳穴紧，没其他的，28还有，5分，4分
11:35站起来以后，觉得房间和平时不一样，说不站起来，不是房间，也不一样，没睡醒，想睡觉的感觉，不是熟悉啥的
12:09有一点点梦境感，小哈刚回来，11好了，刚才什么忘记，眼睛一直很酸的，大概是想睡觉
13:28好像有不舒服，讲不清，强度还是不高，没办法描述，说是梦境吧也不是，梦境加熟悉吧，31问好了
15:19 没办法描述, 一点点点想吐，中间还有1，2的
15:29又有了，一点点梦境，非常不强，30问好了，就几秒
16:14 有一点, 每次不舒服的时候感觉都一样, 但是描述不了
16:22 又有一点, 这次看到是22:30, 23:11好的, 也就是40秒的样子
16:34一点点
17:04拉屎回来，忘记刚才是跟小哈一起尿尿而出去的，但是是自己主动问，是不是跟小哈一起出去的，说没有过不舒服
17:17 看着卢广仲, 有一种”陌生”的感觉, 后来就好了
17:51 有点想吐, 和之前一样
18.12 不舒服
18:29 不舒服
18:36 不舒服
18:40 不舒服
19:01有过一次或者2次
出门了，还是不老问了
19:10 涨/烫/风凉
19:27不舒服
19:38不舒服
19:41 涨/烫/风凉
19:55 涨/烫/风凉
20:21 涨/烫/风凉
20:36 涨/烫/风凉
21:12 涨/烫/风凉
22:40麻了，42好了，中间咽口水厉害，忘记什么感觉了`,s3:1,s4:29},"2025-09-04":{detail:`08:44恍惚，梦境，难过，已经有一段时间了，在涂香香，45问好了
08:59恍惚，梦境，和上次一样，2，3分，00，好了
09:05又有了，有一点想吐，梦境，07问好了
09:10又有，12问好了
09:24不舒服，26头好了
09:35不舒服过，1分钟前
09:38不舒服
09:47一分
09:57不舒服
10:02恍惚，说的时候好了，十几秒
10:05 涨/烫/风凉
10:11有一点，这几次感觉都是一样的，1，2分，一点想吐加一点梦境
10:26 有点
10:32 有点, 在说八卦之类的
10:52 有点
11:03 有点, 说算梦境, 和之前一样, 但说这次能确定是梦境, 但是没有梦
11:08 有点, 有点想吐, 40秒左右好
11:18 有点想吐
11:24 有点不舒服
11:35 不舒服, 50秒
11:45 不舒服
11:52 不舒服
12:33 太阳穴很近, 熬夜的感觉, 说从接小哈到现在, 有的话也1次.
12:38有点恍惚，程度一样, 39, 问是不是没吃午饭, 应该没特别的断片
13:05不舒服，1分
12:56 一样
13:23不舒服
13:50到现在3次，或者2次，51又有一次，5秒
14:22一下
然后睡觉了, 6点不到自己醒了
18:17恍惚过
18:22梦境
18:33恍惚
18:39恍惚
18:43 梦境
19:21 涨/烫/风凉
19:35 涨/烫/风凉
一直有的，不计了，说是2次
20:19 涨/烫/风凉
21:09 涨/烫/风凉
21:16 涨/烫/风凉
30出来兜
22:47 涨/烫/风凉
22:55十秒，很短
23:08 涨/烫/风凉
23:11 涨/烫/风凉
23:17 涨/烫/风凉
23:21 涨/烫/风凉`,s4:48},"2025-09-05":{detail:`08:25 涨/烫/风凉
08:28 涨/烫/风凉
08:39 涨/烫/风凉
09:10 涨/烫/风凉
还是十分钟一次，没一直计
09:23 涨/烫/风凉
09:37 涨/烫/风凉
10:02 涨/烫/风凉
10:12 涨/烫/风凉
10:27太阳穴紧，感觉是一直在紧的
10:30 涨/烫/风凉
10:38 说太阳穴紧
10:51 涨/烫/风凉
11:07 涨/烫/风凉
11:27 涨/烫/风凉，太阳穴紧
11:40 太阳穴紧
11:48 涨/烫/风凉
12:08 涨/烫/风凉
12:32 涨/烫/风凉
12:35 涨/烫/风凉
12:39 涨/烫/风凉
12:48 涨/烫/风
12:52 涨/烫/风凉
13:18 涨/烫/风凉
13:28 涨/烫/风凉
13:43 涨/烫/风凉
13:45 涨/烫/风凉
14.10 睡觉, 大概是15点40醒的
16:56 涨/烫/风凉
17:38 涨/烫/风凉
18:31 涨/烫/风凉
19:11 涨/烫/风凉
19:17 涨/烫/风凉
19:23 涨/烫/风凉
19:38 涨/烫/风凉
19:51 涨/烫/风凉
20:11 涨/烫/风凉
20:13 涨/烫/风凉
20:24 涨/烫/风凉
20:41 涨/烫/风凉
20:52 涨/烫/风凉
21:04 涨/烫/风凉
21:12 涨/烫/风凉
21:15 涨/烫/风凉
洗澡
22:15 涨/烫/风凉
22:50 涨/烫/风凉`,s4:44},"2025-09-06":{detail:`09:30 涨/烫/风凉
差不多还是10分钟一次
10:06 不舒服
11:33 涨/烫/风凉
11:37 涨/烫/风凉
11:44 轻微恍惚
11:50 轻微恍惚
11:54 涨/烫/风凉
11:57 涨/烫/风凉
12:08 轻微恍惚
12:32 涨/烫/风凉
12:36 涨/烫/风凉
12:51 涨/烫/风凉
13:19 涨/烫/风凉
13:31 涨/烫/风凉
13:37 涨/烫/风凉
13:44 涨/烫/风凉
13:47 涨/烫/风凉
13:59 涨/烫/风凉
14:08 涨/烫/风凉
14:13 涨/烫/风凉
14:15 涨/烫/风凉
14:18 涨/烫/风凉
14:22 涨/烫/风凉
14:26 涨/烫/风凉
14:30 涨/烫/风凉
14:40 涨/烫/风凉
14:43 涨/烫/风凉
14:49 涨/烫/风凉
14:51 涨/烫/风凉
14:56 涨/烫/风凉 睡觉
15:22 涨/烫/风凉
15:28 涨/烫/风凉
15:31 涨/烫/风凉
15:35 涨/烫/风凉
15:40 涨/烫/风凉
15:41 涨/烫/风凉
15:46 涨/烫/风凉
15:53 涨/烫/风凉
15:57 涨/烫/风凉
16:09 涨/烫/风凉
17:37 涨/烫/风凉
16:24 涨/烫/风凉
16:28 涨/烫/风凉
17:14 涨/烫/风凉
17:44 涨/烫/风凉
17:52 涨/烫/风凉
18:09 涨/烫/风凉
18:26 涨/烫/风凉
18:15 涨/烫/风凉
18:18 涨/烫/风凉
18:43 涨/烫/风凉
19:03 涨/烫/风凉
19:14梦境感强了，15好了，3，4分
19:22 涨/烫/风凉
19:26 涨/烫/风凉
19:35 涨/烫/风凉
19:40 涨/烫/风凉
21:12洗好澡在恍惚，说，差不多，几分想好的，忘记了，又说1分
21:18 1秒
22:50有3，4次了
23:04 涨/烫/风凉
23:41到家，路上大概2次`,s4:67},"2025-09-07":{detail:`08.43 醒来到现在觉得有4次
08:53 涨/烫/风凉
08:54 确定和刚才是2次，现在54，又有了
09:20 涨/烫/风凉
10:59 涨/烫/风凉
09:42 涨/烫/风凉
11:52到现在大概有4次
一直头很紧
12:07 涨/烫/风凉
12:09 涨/烫/风凉，一直有点想吐，加头紧，10，梦境熟悉消失了，吐和紧都还有
12:13 梦境，想吐，2分
12:34 涨/烫/风凉
1点不到主动睡，我1点半带小哈出门
17:21回家小哈直接推门了
17:28醒来到现在2次，1分
18:10 涨/烫/风凉 2次
18:21 涨/烫/风凉
18:57 涨/烫/风凉
19:03 涨/烫/风凉
19:07 涨/烫/风凉
19:08 涨/烫/风凉
19:17左手烫涨到现在有2次
22聊到所有的梦境感都有点害怕的感觉
19:36 涨/烫/风凉，0.5分
19:57 涨/烫/风凉
20:49 在聊抑郁的感觉，不知道是不是这个触发，有呕吐，梦境，问了说2分，聊到觉得如果有来世，就大幅增加跳楼的欲望
21:12 涨/烫/风凉
21:29 涨/烫/风凉
36我洗澡出来找他聊，抑郁的分析，大部分是没有原因的，要说原因，那就是工作
21:42 不舒服，在聊‘最后见面会’要邀请的人
22:34有过不舒服的，没记
23:16梦境，在兜，有一点具体的梦了，5分，17，好了
23:25大概1，2次了，不是5分的，5分是难受的
23:42左脚有点热
23:45带手表的地方麻，52，麻都没好，准备睡觉，今天兜是因为他下午睡了3小时，又有点抑郁，还洗头了，多重原因吧`,s4:38},"2025-09-08":{detail:`！！今天手表6点15醒的，问有不舒服吗，说是恍惚，但我怀疑是抑郁，手表睡觉时间是0点到6点15，一共5小时59分
07:54从醒来到现在有13，14次
08:22 涨/烫/风凉
08:54 今天恍惚，吐的时间变长了，梦境还是12分
09:10从早上到现在，头都紧，持续的，没有失重，感觉一直想吐
09:51 想吐, 比之前重一点, 头紧还行, 梦境感有一点
12:44 醒来后，吐了好几次了，梦境1，2次
12:31 涨/烫/风凉
12:34 涨/烫/风凉
13:15 涨/烫/风凉
13:20 涨/烫/风凉
13:24 涨/烫/风凉
13:39 涨/烫/风凉
13:44 涨/烫/风凉
13:50 涨/烫/风凉
13:57 涨/烫/风凉
14:03 涨/烫/风凉
14:22 涨/烫/风凉
14:27 涨/烫/风凉
14:32 涨/烫/风凉
14:37 涨/烫/风凉
14:44 涨/烫/风凉
14:57 涨/烫/风凉
15:03 涨/烫/风凉
15:13梦境很足，刚尿尿回来，熟悉感，5分，16问，好一点，18，还有1，2分，19，还想吐，没有熟悉感，一直往窗台走，不想回房间（有小孩在看电视），后来下雨了，30分回来了，还想吐，梦境感没有
15:37梦境，1，2分
15:50梦境感足，5，6分，51好点
16:06 涨/烫/风凉
16:10 涨/烫/风凉
16:11 涨/烫/风凉
16:15 涨/烫/风凉
16:20梦境感，5分
16:28 涨/烫/风凉，29问的，又不确定, 今天反复问有没有跟红皮猪和异形说过请假
16:39 涨/烫/风凉
17:09 有过一次
17:25 涨/烫/风凉
18:03 涨/烫/风凉
18:13梦境，2分
18:24梦境感，熟悉感，觉得这些梦里都出现过，5分至少，6分。25，好了，26，又想吐了，在聊小哈，27，又说好了
18:36一直想吐，没梦境感
18:57梦境感，5分，57好了
19:19 涨/烫/风凉
19:54 涨/烫/风凉
20:09 涨/烫/风凉5分不到 但是时间短
20:53梦境，那种东西都到肚子里，然后想吐出来那种感觉，1分梦境，在想晚饭吃了什么，想出来了，55，还有梦境，56问，算没有
57，聊到，如果后面2天准备自杀，今天会不会跟妈妈好一点
21:01梦境感，7，8分，02，想吐吐不出来的感觉，说想去称体重，说想着苗条还好，02，梦境感好了
22:05洗澡出来，觉得洗澡前应该有过一次5分的
23:3419分，有5分恍惚，24分，有5分，34到家，准备睡，我和奶奶出去吃饭`,s4:62},"2025-09-09":{detail:`7.13醒，只睡了7小时
我35醒，问情况，说是有5分的梦境感，醒来以后有1次
07:45 涨/烫/风凉
07:58梦境感，5分，在等电梯送哈上学，进电梯就好了，很短，大概10秒
08:01梦境，吐，几秒就忘了，梦境不强
08:14想吐，很少，或是没有梦境，15，说有的，又说忘了，16，闻到熟悉的味道，17，有点想吐
08:34想吐，想拉屎
08:41又想吐，觉得吃药不记得这些药了
09:07想吐，感觉比昨天强
09:42梦境，2，3分，想吐，一会就好了
09:59想吐
12:26 轻微恍惚
12:31 轻微恍惚
12:32 轻微恍惚，是指2分的梦境感
12:40醒来了，后脑勺紧，不是很严重
12:42 涨/烫/风凉
13:08 轻微恍惚
13:12 轻微恍惚
13:23想吐，比较短
13:25 涨/烫/风凉
13:37 轻微恍惚
13:40熟悉感，现在有5分，42好了
13:59 轻微恍惚
今天没吃午饭
14:24 涨/烫/风凉 梦境 熟悉感
14:45刚才尿尿有一次2分
14:50想吐 是发作性的
15:09梦境感，5分，时间短，觉得我在开奶茶梦里开过
15:14不舒服过了，我就出了个房门，应该是梦境，时间短，17，说又有，又好了
15:26有点梦境，28，一直在打嗝
15:46恍惚过，说“你们在吃的时候应该恍惚过了，应该5分”
15:59熟悉感，1，2分
16:18梦境，5分，我感觉10秒
16:3215秒，大概是想吐，可能是梦境，忘记了
16:38熟悉感
17:00 涨/烫/风凉，也是十几秒
16:53梦境，5分，在折纸十几二十秒
16:55想吐，晕？想拉屎，十几秒
17:12 涨/烫/风凉
17:21 涨/烫/风凉
17:31打凳子打到现在，可能停过一会
17:35聊到小菜园，觉得是昨天中午或晚上，又猜前天，最近记忆有点乱
17:36梦境感，1分
17:39梦境1分
17:44梦境，1分
17:46梦境1，2分
17:52梦境1分
18:03看到奶茶袋子有点梦境，有点想吐，2，3分，比刚才重，时间还可以，记好问就好了
18:10梦境感2分
18:14想吐
最近一直是“打出嗝了会舒服点”
18:32梦境1分
18:49想拉屎，想吐，时间短，30秒内
18:581，2分想吐
19:01想吐过
19:13有点想吐
19:21 梦境 吐
19:28 涨/烫/风凉
19:32 涨/烫/风凉
19:53 轻微恍惚
19:36 涨/烫/风凉
19:48梦境，想吐
20:00梦境，2，3分
20:17洗澡回来，说之前想好要记2，3次的，现在说不确定，想吐，最后一次是想吐，前面不确定
20:26还在连续打凳子
20:39熟悉感，6，7分，梦里有，40好了
21:02 涨/烫/风凉
20:43梦境，23分，想吐
21:10想吐
21:58想吐
22:07又打凳子
22:40梦境，34分，很短
23:05现在出门再兜，家里梦境过一次，23分
23:10梦境感，5分5秒`,s4:72},"2025-09-10":{memo:"这天突然有2次小发",detail:`睡觉和我一样，7,28醒，总时长7
08:19从醒来到现在想吐6次，背着的，不确定梦境有没有，可能1次
08:25想吐，想拉屎，没梦境感，大概30秒好了，27，开始有1分梦境感，左手烫了，大概20秒好了
08:30梦境，23分，最多5，短，每次都想吐，多个画面，31，想吐
08:39想吐
08:43梦境，没刚刚强
08:52梦境过了，23分
08:56想拉屎
09:03说一直有点想吐，1分或者0.5分
09:08有过梦境1分
09:101分
09:18想吐，不记得有没有梦境
09:42想吐
09:53有点想吐
09:57想吐
10:29梦境，23分
10:43想吐，23分，34分
11:18在睡觉，有梦境和想吐，先梦境再吐
11:23想吐
11:26聊到太阳穴一直紧
11:28梦境，觉得现在有过
11:31有点想吐
11:50想吐了
12:04想吐
12:16有点梦境，3分
12:48梦境感，23分
12:57想吐
13:08想吐
14:06在睡觉，自己醒来，看了手表，我问知道星期几，说知道，然后捂着眼睛躺下去，我问是不是不舒服，说是，是不是怕光，说是，后来好了，大概1，2分钟，就是小麻的时间，09问，是怕亮的感觉，不是麻
14:36醒了，因为我压到了头发想吐
15:36 涨/烫/风凉
14:53觉得早上送小哈，5分真实，是昨天的，中午吃的饭89分
15:31拉屎回来，觉得一直想吐，有没有梦境也不问了，肯定不记得
15:45 涨/烫/风凉
15:59 涨/烫/风凉
16:28 涨/烫/风凉
17:25 涨/烫/风凉
17:38梦境感，3分，说到吃饭，感觉梦过，但说的话不觉得
17:31梦境感
17:52想吐
18.55 本来在和小哈玩，突然捏左手，我在工作，去看了，不知道什么情况，捉着自己左手，说不清楚，然后不说话很久，小孩在搞他也不理了，03好点了，左手还是有点麻，04说忘记什么东西，可以考一考自己，知道礼拜几，语言能力出现问题，偶尔说错词语的一个字，或者音调，09，说有1分梦境，手还是热，脑子比之前清楚点了，补充，以前有过，24发作前，上周也有叫过小花
19:21想吐
19:26梦境
19:31梦境熟悉
20:02梦境，3到5
20:23想吐
20:27梦境，但是不熟悉，想吐，89分的难受，想吐的难受，29，好一点
20:44洗澡出来，说可能1次，大概是梦境
21:12想吐
21:22想吐，拉屎
23.24到家，尿尿的时候有熟悉感`,s3:2,s4:54},"2025-09-11":{detail:`7.14自己醒，7小时出头
07:39想吐，醒来以后第二次了
07:54刷好牙了，大概有1次吐
07:59想吐
08:1212次想吐，应该1次，我从幼儿园出来
08:23吐
08:31梦境34分，也有想吐，在吃早饭
08:49想吐
08:51太阳穴紧
09:10想吐
我在理东西, 他慢慢的就睡觉了
我准备接小孩的时候醒的
12:05想吐 轻微
12:43 涨/烫/风凉
13:29梦境5分 想吐1
13:40梦
13:56梦境1分
14:00想吐了
14:04想吐 熟悉 梦境2分
14:12梦境6
14:13想吐
14:17想吐
14:30熟悉
14:36忘记是什么不舒服了
14:431分想吐
15:19熟悉感 想吐
15:03有过吐
15:43梦境过了，23分，现在都10秒左右，然后睡觉了
大概16.50醒的，到59，大概2次吐
17:06好像是不舒服，好像是吐
18:18刚到罗南，有梦境，34分，说路上也有过
18:24梦境，好了以后想吐
18:49梦境，67分，觉得真的梦到过
19:07梦境，23分，30多秒了
19:13想吐
20:29想吐了
20:21梦境，34分
20:24想吐
20:37想吐
这两天又开始不吃东西, 心情比较差, 看到卢广仲有点厌恶, 不理解之前为什么喜欢
自己觉得看卢广仲不喜欢, 是病态的, 理性知道是情况的
21:31想吐
21:57我和小哈出去，他洗澡，现在到家，他说不舒服过2次，什么也不确定
22:26问了，到现在1次
22:31想吐
22:59想睡觉的时候吐过
23:26梦境有过1次
2346到家，最多一次，也不重，就这样吧`,s4:44},"2025-09-12":{coner:["华山/朱","没什么特别的, 而且瑾对朱的态度开始不满意, 这天睡觉特别少"],detail:`去了医院，结果是继续加药。我问这种发作是不是好转，敷衍的说是的，说恶心是不是肝有问题，说不是，问抑郁怎么办，说出去走走。总之，要加药。下次问问生酮饮食之类的
从0点到6.36，只睡了5小时0.14到0.16有醒，不知道是不是小发，3点开始醒，就没什么睡
08:05想吐
08:07想吐
08:11想吐
08:56有过23分，一直想吐
09:04梦境
09:08梦
09:12一路都想吐
09:18吐
09:22梦境
09:34吐
09:41梦境
09:45太阳穴一直紧
09:54有点晕，在诊室门口主动找地方坐
10:41想吐，看完了其实，在医院的咖啡店旁边聊
10:49梦境感，觉得场景熟悉，觉得就这2天的梦，输入完了，49，还没好，49，好了
11:09想吐
12:04想吐了，到11分还想吐
12:11梦境，觉得梦过，还能想到那个梦，就是5分了
12:34梦境，5分，场景梦到过，不长
12:42梦境，34分，不长
12:49熟悉，感觉在梦里问过他小哈不爱吃什么，比上次长，估计有30秒
13:04梦境，5分，不长
13:22想吐
13:27聊到觉得93是前天，最近记忆都是往前
14:55熟悉梦境感
15:13想吐，睡觉了，哈是4点不到到家的，看电视了, 他还能继续睡, 应该是真累了, 17:37醒了, 应该已经醒了一会了
17:37想吐*2 5分钟内
18:55梦境大于5
19:43梦境，他还继续睡
19:37不舒服，不知道是啥了
20:38吐
19:58梦境，1分
20:21到现在有2次吐
20:42熟悉
20:59吐
21:19吐
21:35太阳穴这里紧
23:02想吐，洗澡时候也有
23:14梦境12分，5秒`,s4:40},"2025-09-13":{detail:`0到7.40，睡了6.42，睡觉前面阶段很碎
起床后到8.20 不舒服了5，6次，呕吐梦境都有
08:57想吐
09:04想吐
10:11吐
11:11脚飘12分，而且左脚厉害
11:24想吐
11:44好像是吐 忘记了
11:42聊到早上跟哈玩的时候，有点特殊的情绪，负面的，讨厌，嫌弃之类的
11:47想吐
11:52熟悉感
11:59吐
12:05想吐，06才好，比较久
12:55想吐
13:08想吐
13:22想吐了
13:24熟悉
13:32梦境轻 有一点点想吐
13:48想吐
14:06梦境
14:07左手轻微涨烫
14:11梦境强
14:19梦境熟悉想吐都有
情况是10点半出门加油，天街兜，吃饭，刚到家，一路上没啥休息
14:30刚刚有，但是忘记了
14:39梦境好了，本来在睡觉了
16:13起来揉左边眼睛，咽口水
看视频回顾：16.12.50醒过来看手表，13.00坐起来，13.20我坐旁边后，开始揉眼睛，然后咽口水的，事后不太记得怎么不舒服了
算1630起来的睡了2小时
17:09想吐
17:28吐和……忘了，描述不了，说睡醒到现在有45次了
17:33吐
17:43梦境
17:51想吐
18:17吐
18:34聊到没必要生小孩，是第一次，现在对卢广仲还有兴趣，其他事情都不感兴趣
18:22想吐
19:01熟悉
19:30想吐，在和小哈说话，突然停顿了，发作性的
20:09想吐和做梦都1分
20:44觉得不想和小哈住一起，第一次，但是确实因为小哈搞，但是平时也是这样搞的
21:46 2分想吐
23.29 睡下，好像好很多了
23:30突然说话，是报告想吐，哄睡的时候也有一次`,s4:48},"2025-09-14":{coner:["左1000, 卫3粒",""],detail:`07:53吐
07:58吐
08:08吐
08:52之前到现在，梦境1次，呕吐大概2次
09:07吐
10:43大概2次吐，可能1次梦境
10:43想吐
10:46吐
10:53吐好了
11:10吐
11:12吐
12:48想吐
13:04想吐，有多次
13:44吐
14:00吐
14:04吐
14:15吐
14:19想吐
14:40梦境
14:42梦境
14:57想吐
15:01吐
15:05梦境
15:16想吐
15:29想吐
15:44熟悉感
15:50梦1
然后睡觉了，我把哈带出去
16:05吐
梦1
16:15左手开始烫麻 太阳穴和想吐好一点了 烫到小手臂一半
16:23吐2
17.00 左右我和哈到家的，17.35他出房间门了（上面的记录都是他自己记的）
17.40问情况，不说话，用点头回答，记忆没问题，有说话能力（但是没说话），我又带哈去客厅了，他在床上坐着，我是通过监控看的，小哈看到又冲房间了
18:31有过不舒服，忘了
18:58梦境
19:09想吐
19:54平时吃的菜，今天也不爱吃了
20:17今天看到别人谈朋友，虽然是他主动说的，但是他说看到谈朋友没兴趣
19:52吐
20:29吐
20:40梦境34分40秒
20:47吐
20:52想吐
21:02想吐1
21:15想吐
22:10吐
22:19吐1
2242 可能是梦境，34分
到2325都没有不舒服，聊到下午说起来断片厉害，说明有小发`,s4:51},"2025-09-15":{detail:`08:29到现在是一次吐
08:40吐1分
08:43吐一下子，站不稳，太阳穴紧
08:48左手涨，烫
09:01吐，刚才大便有梦过
09:09吐
19聊到想睡觉
09:55到单位了，路上吐3次梦境1次
09:57看到妹子0,5梦境
10:16 听到xx说话想吐, 45分, 没梦境
11:01手麻 小手指 下面 5分
10:26 觉得一直紧+晕
11:21吐1-2
11:40 问好像有过吐, 梦境不确定
11:48 想吐, 是说到外婆
12:04吐
11:54 想吐, 还在说外婆
12:09吐1
12:12吐 5
12:19看视频 有一些同感 想吐
12:22吐
12:30吐1
12:35吐1
睡到一点多醒的, 半小时多
14:31 聊到每次看朋友圈都想吐, 说”不是物理, 也不是化学”, 又八卦, 又没兴趣, 又觉得无聊的感觉, 增加吐的概率
15:10 吐+拉屎+梦境1+熟悉1, 仔细感受, 觉得 吐是带着后面这些的, 只是都不强.
15:27吐1 熟悉可能是1
15:57回忆型的梦境
18:03 到家了, 说有”在楼下坐一会”的想法, 虽然今天下午聊到状态还可以, 愿意一起出去吃饭
18:40 问情况, 从回来到现在有4, 5次, 不确定，回忆李刚才上来，觉得是梦
19:12手烫 脚重 小烫
19:22吐1
30问脚好了
20:35梦境2
21:07恍1
22:25到现在1次`,s4:42},"2025-09-16":{detail:`08:16吐
08:22梦境1分十几秒
08:35讲不清楚的不舒服，可能各种都有，吐梦熟悉都有，最多1，0.5，但是时间有点长，36好了
09:12路上好像有2次
09:46停车到现在有2次，想吐梦境，也不确定，又应该是的
11:52吐 梦境1 半小时内2次
13.43睡醒后
14:14梦2分 10秒
14:39到现在，2次想吐1分, 回忆说这2次还蛮久
15:03 吐, 说到卢广仲粉丝说答题获取专辑信息啥的, 1分, 好得快.
15:13 吐, 觉得以前自己ae厉害
15:44 说现在经常有5秒左右1分梦境, 大概有3~4次了, 半小时内.
15:47 梦1秒
16:01 有过2次 1分5秒的
16:43 问, 说忘了
16:49 觉得最近2次尿尿特别厉害, 感觉是膀胱反应慢了, 所以容纳了非常多的尿
16:51 刚尿尿上来有2秒熟悉
17:14梦境2分
17:15现在又想尿尿，昨天也是
17:43到家，还是想尿尿，路上45次梦境
17:55在天街尿尿，很多
18:30左腿膝盖以下，左手，也是一样的关节以下，烫，一点点麻，36问好了
19:06想吐1
19:08手和脚又烫了，14问好了
19:37想吐12梦境12
21:38感觉今天是周末
08:25吐
08:31梦
23:05 1秒梦境，之前都没`,s4:31},"2025-09-17":{memo:"回家路上感觉有很久的梦境, 说是15分钟, 但暂时算作5次",detail:`7.15起来的，到7.45问，有过梦境，1或2次很弱，说睡得不好，问原因是帮小孩盖被子
08:14送完小孩，问有不舒服吗，说“就前两天这种”，从早上起来34次
08:41问晚上吃了什么，反应不过来了，43没想出来，说路上想
10:53问有没有过不舒服，说不记得了，说在点外卖，点了哪里，什么，也忘了，说因为来回看了很多
11:10上午到现在，梦境1秒 3次, 想吐 2次, 说这2次想吐确定没”梦境感”
11:21梦境了5到10秒，没想拉屎，去洗杯子的，最近算比较长的了，但最多10秒
聊到，尿多，浑浊，不透明，觉得是膀胱反应不行
11:33想吐，2分
11:47说想不起来午饭点了什么，11.07刚说过，昨晚烧烤，记得的，可能是东西太多了
11.48 有点梦境，1分5秒
13:20睡醒，睡前有梦境，聊到，还是不知道点了啥外卖，是馄饨
13:31梦境3秒，3分，5分以下
13:58说充电充不进，忘记电脑进过水了
13:59梦境1分，时间有点长，估计30，怕电脑坏了要赔钱
15:26梦境2
16:13吐 梦境1
16:16梦境 拉屎 想吐 3
17:48路上一直梦境，5分的，感觉3分之1的时间，描述不了的情况，说40分钟路程的话，可能有15分钟在梦境，现在是刚到家
17:54梦境，10秒，算好了
18:04梦境了，短，最多20秒，23分
18:11想吐，梦境弱，短
18:33梦境12分，34，想拉屎，梦境没了
18:38想吐，没想拉屎，在回忆事情的时候引起的，和自己发的，好像不一样
20:21 想吐0.5，很短，刚到家
20:47描述不了的，也没想吐，11分
20:49有1，2秒，一下头晕，不舒服，说不清
21:14洗好澡，有23次小的
22:18到现在，有23次，说不清楚的那种感觉，23分，应该也是短的
22:19又来了，描述不了，想吐1分，梦境，说不清楚，发完字就好了
22:33房间出来的时候有一次“说不清楚的”
23:01到家，路上没不舒服`,s4:41},"2025-09-18":{memo:"睡得不好, 下午起床后14点多有很难过的不舒服, 导致抑郁感很重, 晚上有一次小麻, 恢复得快",detail:`睡觉非常差，23.27到6.23 6小时，很碎，我730起来，他在看手机，问情况，表示有发作，但是问细节不回答，应该是说不清，自己觉得睡的一般
从6.23到7.43，有89次梦境，有2次时间比较长，短的34秒，长的10到30
08:13路上到现在3次 梦境感，想吐，1分，短的
08:24梦境2
08:19路上1次，是想说，说不清楚的那种
08:21又有了
不能主动想起昨晚吃的，愿意想，不让我说，提醒了能知道
08:29想吐，梦境1分
08:38梦境1
08:40梦1
08:42梦2
08:43又有了，和刚才很近，想拉屎
09:12 到学校, 路上2次, 说路上本来记好的, 现在不记得
0925聊到, 觉得头紧
09:53想吐
10:23梦境2 想吐
10:56梦境3 5s
11:01梦境2 1s
11:07 不舒服 1 , 说对卢广仲失望导致的, 希望自己喜欢他导致的
11:17 又有那种感觉, 算梦境吧.大概2s
11:30 有点吐, 聊到外婆
14:081330到14 梦境4次 5分
14:32梦境1
14:36梦境，很难受，梦境加吐，38才回复好了，但是觉得一会儿就会有，而且开始得不明显
14:41我听卢广仲以前的歌也有一种奇怪的陌生感 不是很重 但是有一点点点点想关掉 但是知道不是理性的 知道本质上喜欢听的
14:46听有吉，也有这种感觉，关了
接着聊到, 自杀可能不舍得, 理性知道生活还可以, 但是愿意被一些人杀, 并讨论了谁.
觉得身体上感觉说不清, 打不到60分, 所以会想到生死问题. (之前也说过, 说是超过60分的)
15:16梦境熟悉2 2s
15:20梦境1 2s
15:41 想吐想拉屎, 短, 在说帅哥洗头
16:11梦境1 2s
16:32梦境1 2s
17:23梦境1 1
18:04 3次梦境
18:30梦境2，2
18:51梦境1分2秒
18:58梦境23分23秒
20:36（可能是吃饭糖多？所以心情好，发少了？）
21:51从洗澡到现在，23次，一样的
22:56腿麻，左边脸麻，大概半分钟好的，1030吃的药，哄小孩睡，又准备起来刷牙
03:05小孩发病吵醒所有人`,s3:1,s4:52},"2025-09-19":{memo:"有脚飘, 晚上是小麻",detail:`07:56早上到现在一直在不舒服（原话）
08:12到现在1次，今天都是34分
08:41到现在有34次，都是34分，5秒
08:43又有了，还是34分，20秒应该有，自己觉得5秒
09:47 和妹子聊天, 到现在 1~2次? 5秒的
10:34 想吐, 梦境, 看到放假通知, 觉得复杂, 问之前有几次, 说有的吧, 但忘了
10:39 想吐, 梦境, 看到xx下去, 最近2次都是1~2分, 5秒
10:47下去拿汉堡脚飘，仔细感受，觉得有点麻，而且觉得整个身体都是左边，左边有点麻烫，53分问，没好，和刚才一样，还有右边太阳穴紧，1103问，要感受才有，不感受忘记，左边残疾的感觉，飘比麻明显，09说好了
11:22 梦境, 2分, 2秒
11:38 2分2秒
11:39 3分2秒
11:56 3分5秒
12:561245醒的，睡着的，醒来到现在15分钟，34次，3分5秒，和之前差不多
13:02梦境22
13:04点了外卖，看到早上11点买的汉堡，取消了
13:06梦境32
13:22梦境2 2s
13:33 梦境 3 5
14:53 梦境 1 2, 明显心脏抽下
16:02看书1小时，只有12次很短的，1分，都不想记
16:11看到我发幼儿园照片，想吐梦境，但是还好，1分1秒
16:39梦境1分 10秒
16:53尿尿好梦境蛮久的，2次，尿尿前后，都10多，2分，3分，梦境的感觉不强烈，但是就是那种不舒服感
17:02梦境 33
17:12梦境 拉屎 2 3s
17:14梦境 3 5s
17:43路上34次，23分，很难过的是，路上想着车祸，不管任何人，想到楚楚外公
17:48聊到现在，觉得喉咙有点疼，59，还有喉咙疼
18:06心脏比平时紧一点，09没好
20:39梦境1 2，刚吃完烧烤就有了
20:42又有了
22:16洗澡回来是2次
22:37想吐，梦境，说到小熊
23:12到家准备睡觉
半夜有2次很严重的麻，不能动，很麻很麻，和18晚一样，自己说1分钟
半夜麻了0次，睡醒麻了0次轻微39，早上可以算5次`,s3:2,s4:43},"2025-09-20":{memo:"有好15秒发30秒, 持续很久的情况, 并且没记录到轻微发里",detail:`还是自动醒，6小时23，醒来不爱说话，感觉醒来发得多
08:16早上起来到现在大概10次，2分，2到5秒的样子
08:23到现在34次
08:35到现在12次，我去买早饭回来的
10:072次
11:14到现在2次
11:29梦境2分 2s
14:10梦境2 2
12.20睡到13.50
13.56 醒来到现在1次
15:05梦境 3 5s
14:24到现在1次
15:10梦境 吐 3 3s
15:34一样，没好，或者是又来了，这次时间很长，35，好了，过了一会，又有了，又好了
15:37 37末，又有了，梦境，加耳朵里有咚咚咚的声音，39，好了
15:40又有了，梦境，耳朵也有，一会耳朵好了，其实不是梦境，是奇怪的感觉，描述不清楚，41末问好了
15:42耳朵又有，刚又好，43，又来了，只好了15秒，持续得久，43还有，44头好了，好了15秒，都又来了，45，好了，又不好了，一直是好15秒发30秒的样子，53问，暂时是好的，54，又来了，09问，大概好了23分钟了，耳朵感受还是有了
16:16梦境2 2s
16:26梦境4 3s
16:42梦境，吐，34分5秒
16:43梦境，23分34秒
16:48跟上次差不多
16:49跟上次一样
17:05想吐，梦境，2分3秒
17:43梦境2分3秒，又有了，1分
19:05有过2次，梦境，34分，4秒
19:43梦境 4 4s
19:49梦境3分10秒
22:53有过1.2次，一直在理房间，刚刷好牙
23:37还都没睡，在跟小孩说话`,s4:43},"2025-09-21":{detail:`07:46 7310起来，到现在5次
07:58到现在2次
08:3623次
09:18到现在2次
13:04梦境*5 6s左右
13:14大概是1点醒的，就是以往的那种不舒服比较多，23分510秒的
13:15现在有了
14:03 到现在有23次
14:25梦境，34分56秒
15:12梦境 3 5s
16:47上车以后有一次，在从原湘湖回来
19:15梦境 2次 3 5s
19:30有12次
19:50有1次
20:50洗澡出来2次
23:30到家，好像没有不舒服`,s4:32},"2025-09-22":{detail:`23.47到7.18睡了6.34
07:50早上到现在10次了，34分的，发34秒听10多秒又来
52，又来了
08:25从出门到现在有34次
08:26又一次
08:28不舒服
08:44不舒服
09:17上学骑车 2次 3分 3s
10:23 说到单位后1次
10:34梦境 3 5s
10:55梦境 2次 3
10:57梦境 3 5s
13:24 1点醒来 6次 2-3分 3-5s
13:35 去拿外卖的时候有1次
13:39 梦境 1分2秒
13:40 梦境 不重, 但长了 2分6秒, 就是感觉大于5秒
13:42 又来了 1秒不到 被压住的感觉
14:12 2次 2分 6
14:51 2次梦境了, 在说学费
14:56 梦境 2 4s
15:00 梦境 3 3s
15:46 梦境 4 8s 10分钟内有3次
15:50 梦境 3 5s
16:04 梦境 3 6s
16:21 觉得今天是周三, 不觉得昨天是周末, 在想吃过什么芝士, 说了才知道是昨天早饭肯德基, 说”有一个玻璃一样的门进不去之类的, 还是不太能进去, 别人进去了” (我没想起来, 可能是没的) 我说昨天去远香湖, 他说是不是2个人去的. 我发了照片后, 觉得是半个月前, 真实度9分.
16:27 不舒服
16:30 梦境3 6s
16:32 梦境 3 5s 这两次都在看王德峰说命 大概紧张
16:34 梦境 3 5s 这次没看还是这样
16:39 梦境 1 2s
16:41 梦境2次 4 6s 在看视频
16:45梦境 3 5s
17:02梦境 1 2s
17:11梦境 3 6s
17:14梦境 3 6s
17:46路上89次
19:00梦境 3 5s
19:01+1
18:30梦境，34分10秒
19:40梦境，一样的
19:51梦境，1分钟前也有一次
20:354次
22:41梦境24
23:13到家了
23.30 梦境过一次，50傻逼老头在外面声音很响，都吵醒我了，我拿开腿冲出去了`,s4:77},"2025-09-23":{detail:`今天总时间和昨天差不多，但是5到5.48醒着，监控看起来是一直眼睛闭着，但是手表是全红，我540尿尿回来他还拉着我，然后睡了，交流后，表示没啥原因，应该是自己醒的，说是给小孩盖被子
7.57醒的
08:18早上醒了以后10次，晚上10次，程度都和之前差不多，23分5秒
08:20有了
08:24有了
08:26来了，23秒
08:31有了
10:40梦境 2 2s
08:36来了
08:39有了
08:40又来了
09:15 到单位, 路上7次
09:34 +1
10:57梦境 3 7s
11:06梦境 2 3s
11:22梦境 2 2s
11:29梦境3 6s
11:38 梦境 3分5秒
11:40梦境 3 5s
11:45梦境5s 4
11:54梦境 5 6s
13:22睡着前后6次 2
13:25梦境 3 5s
13:28梦境 2 2s 3次
13:46梦境 3次 3分5
14:05梦境 3次 3 5s
14:25梦境 2 5s
14:27梦境 3 6s
14:32梦境 4 6s
14:33半分钟内 第2次
14:35第3 都2分 3s程度
14:36第4
14:40第5
14:59梦境 2 5s 两次
15:04梦境 4 3s
15:45梦境 3 4s
15:46第2次 6s
15:47第三次
15:51梦境 4 6s
16:12梦境 4 8s
16:27梦境 4 6s
16:54梦境五分钟内3次 3 5s
17:05梦境 拉屎 3 6s
17:14 说4点尿过, 3刻尿过, 现在又想, 可能是喝了奶茶, 和冷
17:52 回来有11, 12次不舒服
17:12梦境 3 6s
18:12梦境 3 5s
18:25梦境 2 5
18:29 3 5s
18:40 3 5s
18:41 3 6s
18:46 3 8s 2次
19:11 +2
19:13 +1
19:32 +2
19:55 +1
22:22洗澡回来，1次
22:4634次不舒服，我很凶，因为小孩搞，他还配合小孩一起说话和搞`,s4:101},"2025-09-24":{memo:"有手麻, 后一天说今天晚上有半边麻",s3:1,detail:`07:38醒来到现在56次，大概是718醒的，6点多醒了24分钟，晚上1.30和2.00小孩不舒服醒了会
08:183次
09:17路上3次
11:34 梦了2次 3分5秒
11:423 5s
12:053 8s
13:104 6s
13:13睡前2次，有一次10多，睡后1次
13:17 2次 2分 3s
13:30 3次 3 6s
13:46 4 6s
13:50 3 6s
14:05 4 5s
14:10 3 4s
14:20 3 4s
14:23 4 6s
14:32 3 5s
15:21 5分钟内2次 2分
15:30 4 6s
15:43 聊到, 记得9/5我和缪哥出去, 我说了什么事以后,  他也表示记得, 很棒.
16:26 2分 3
16:41 4 6s 
17:05 3 5s
17:09 45分想尿的, 现在又想尿了
17:47路上7次
17:58 梦境，在去美兰湖路上
18:03梦境，1分，3秒，然后聊到，回家路上手麻，23分
19:00 3 5s
19:323分，8秒
19:55到现在有12次1分很短的，23秒的
21:02 67次12分12秒
21:32很轻12次，可能没有，洗澡出来`,s4:58},"2025-09-25":{memo:"有手麻",detail:`睡觉很差，小孩咳嗽，520到620去医院了，自己说睡得还可以
1415的时候聊到”昨天半夜睡左边的时候又不太能动, 然后睡回去就好了, 平着睡大概半分钟恢复, 上次好像也有, 如果以前8分的话, 今天6分”
07:44 730起来的，到现在3次
08:43 3次
08:45又有一次2分3，4秒
09:41准备上学
10:06忘记带手机，重新出发，但是没问发作情况
10:36 到单位, 3次
11:02 2 5s
11:32 2 2s
11:40 1 2s
12:23 4 10s
12:31 3 6s
今天中午看微博的private 没睡觉
12:58 2 6s
13:24 2 8s 左手烫涨麻3
13:42 3 6s
14:08 2 3s
14:10 左手烫涨, 18分问, 说-2分, 28分问好了.
14:45 4 9s
15:03 2次 5s
15:45 4次 3 6s
16:04 3次
16:49  5次 2-4分 5s
17:02 3次 3 5s
17:50路上3次
18:20一次，到美兰湖不久
18:54吃完饭，34次
18:58梦境4 7，最近都是
19:19差不多
19:42到家了，2次
19:47梦境，4分10秒
20:17可能有一次
21:062次，准备洗澡
21:30洗好，不确定有没有
22:413次`,s4:58},"2025-09-26":{memo:"下午开始有非常高频率的, 自己觉得放弃记录了, 并且有放弃治疗的负面情绪",detail:`早上815起来，到20已经2次了。
睡觉非常差，小孩的关系，问有没有麻，有的，不是最确定
08:28到现在1次
08:36一次，3分 10秒
08:39一次，3分，5秒
08:56一次
09:46一起买了螺丝，可能没有
09:462秒
09:59梦境，2分3秒
10:11梦境，3分6秒
11:00 路上5次. 有一次时间很长, 8秒
11:40 3 5s
12:25 4 6s
12:49 3次 3 5s
今天中午没睡, 在看知乎
13:40 4 5s
14:03 3 6s
15:22 5 9s
15:59 4 4s
16:22 4 4s
16:29 熟悉感 微信说话 看到李大仁的名字 觉得前两天也微信上聊过的
16:31 3 4s
16:40 3 6s
16:47 4 4s
16:50 4 8s
17:57回来路上15次，5分，有短有长，短3秒，长10多秒，并且状态差，想一个人在家其他人出去吃饭，倒也不一定，以前也有过
18:14上楼后有2，3次
18:25有一些“比1分1秒更短”的感觉，所以感觉不好说
18:37好几次不舒服了，但是不想记了，说放弃了，又说3次，我就不问了，19点左右吧睡着了
19:39到现在都有10次了，刚醒，说不记了
20:08吃了点东西后，频率有好点，他自己说是因为在玩手机，但是也不多问了
22:16问，回答“没很夸张的”，小哈不让说话，就没再问
22:45问，说不记得，问半小时内，说34次，程度差不多
23:17最近半小时4次5分，5，6秒`,s4:72},"2025-09-27":{memo:"聊天会变好, 紧张会发作, 和情绪相关很大",coner:["蓝十字/朱","加了吡仑帕奈, 开了高压氧仓"],detail:`08.01 起床，自己觉得睡觉可以，手表8小时
08:27到现在，和昨天差不多，程度差不多，次数5到10
08:49在吃饭，频率一样
09:39太阳穴很紧，上车到现在可能没有
10:33左脚烫软，已经有一会了，梦境2次
10:55到医院了，没有梦境，腿也好了
12:06在翠富楼，23次
13:223次，吃好饭
14:071，2次
14:23到医院，路上2次
14:51到现在没有
15:09出医院，准备去7宝兜一下，1次
15:39不舒服，想到外婆，梦境
15:41又有了，还在说外婆
16:25在医院有一会了，可能没
16:56到现在1次
16:59梦境，快排到了，说紧张，怕医生说没用了，打完字还没好，17，算好了，这次事件很长
17:11梦境，在想怎么请假
17:13梦境，还是在想这事情
17:20有一点不舒服，说和以前不一样
17:36梦境，准备回去，刚在躲雨
17:37又有了，在门口
17:42加1
17:45加1
17:48 涨/烫/风凉
17:50 涨/烫/风凉
17:56 涨/烫/风凉
17:59 涨/烫/风凉
18:06 涨/烫/风凉
18:09 涨/烫/风凉
18:12 涨/烫/风凉
18:14 涨/烫/风凉
18:23 涨/烫/风凉
18:25 涨/烫/风凉
18:31 涨/烫/风凉
18:53 涨/烫/风凉
18:58 涨/烫/风凉
19:422，3次
20:14可能1次
20:31 3 5
20:59 2 5
21:44到现在，没有不舒服
22:55起来刷牙后，有2，3次，大概是40分起来的，想等小哈睡，没等到，起来吃药准备睡觉的`,s4:55},"2025-09-28":{memo:"手麻了几次, 并且中午有忘记有没有的, 就作为没有了",coner:["卫4粒",""],detail:`晚上中间一大段没睡觉, 小孩吵我带小孩出去的，后半段睡的还可以，8不到醒的
08:25起来到现在4，5次
到单位说没不舒服, 因为在想快一点
10点问, 还没有
忘记有没有
中午睡了40分钟
1250醒的, 到13.43 2次
13:51 2次 3 4s,
忘记有没有
14:55 左手麻, 5分, 02问, 1, 2分
15:34 左手麻
15:41 4 6s
15:46 4 7s
15:51 4 6s
15:53 左手麻, 5分, 54好很多了
15:54 3 3s
16:23 轻微恍惚
16:25 轻微恍惚
16:28 轻微恍惚
16:45 4 7s 想吐
16:54 轻微恍惚
16:56 轻微恍惚
17:08 轻微恍惚
17:48 轻微恍惚
17:58 2次
18:15 轻微恍惚
18:47 轻微恍惚
18:50 轻微恍惚
18:54 轻微恍惚
19:13 2次
20:19到现在3次，吃好饭了，面条饺子
20:48 2次，我洗好澡了
20:54梦境，45分，5
21:43梦境，4分，6秒 
21:54梦境，3分5秒，手麻了，在说太太，说国庆要不要去，觉得见一次少一次
22:24洗澡回来，2次
23:06准备睡觉`,s4:42},"2025-09-29":{memo:"左手飘",detail:`23.26到7.05，睡了7.13
07:48醒来到现在5次
10:58 轻微恍惚
08:52 46出门，潦草的说3次
到单位一直和妹子聊天, 我就不盯着问了
12问了下, 不记得上午频率了, 不累
12:12 轻微恍惚
12:24 轻微恍惚
13.18 被午饭叫醒，睡的不多
13:28 轻微恍惚
13:31 轻微恍惚
13:32 轻微恍惚
13:40 轻微恍惚
14:37 轻微恍惚
15:03 轻微恍惚
15:27 轻微恍惚
15:55 轻微恍惚
今天下午写作文
16:20 轻微恍惚
16:36 左手觉得飘起来了, 很轻, 抬起来就会自己往上飘, 问和情绪有关系吗, 自己觉得有70%关系. 42问, 没好, 说可能是习惯了, 而且因为没有很严重, 一开始6分, 现在是5分. 手臂没有感觉, 主要是小手臂, 46问, 好像好了. 估计2分.
17:12 轻微恍惚
17:24 轻微恍惚
18:01到家了，8次，想一个人在家
18:10 轻微恍惚
18:25 轻微恍惚
18:39 轻微恍惚
19:23 轻微恍惚
19:58 轻微恍惚
19:59 轻微恍惚
11.32姐发了峨眉山给他了一个串，开始难过的，20.10想到还哭了
21:11大概1次
21:40一次
22:4734次
23:091次`,s4:42},"2025-09-30":{memo:"有腿飘, prefer一个人在家",coner:["高压氧10次","9-30~10-8, 10-10"],detail:`起床后翻来翻去坐起躺下，问有没有不舒服，还是心情不好，不回答，“没有很讨厌我的样子”把我轻轻推开，7.42主动过来，应该没有讨厌我，之前问也没有不舒服，不知道了，那就应该是不舒服，不想说，或者不厉害，不让我担心
睡得还可以，6.23小时，打断少，但是6.30尿尿醒了，可能眼睛痒
08:32醒来以后到现在30次，就是4分钟一次
09:39到单位路上8次, 大概在认真开车, 感觉上间隔是久一点
10:11 2次, 之前都没有
11:37 本应该有记录, 丢了
11:49 轻微恍惚
11:53 轻微恍惚
11:58 轻微恍惚
12:03 轻微恍惚
12:06 轻微恍惚
12:10 轻微恍惚
12:16 轻微恍惚
12:21 轻微恍惚
12:28 轻微恍惚
12:29 轻微恍惚
13:25回来13次，吃了个饭，准备去医院
13:36 涨/烫/风凉
13:46 涨/烫/风凉
13:57 涨/烫/风凉
14:03 涨/烫/风凉
14:05 涨/烫/风凉
14:252次
14:30 涨/烫/风凉
14:31 涨/烫/风凉
14:34 涨/烫/风凉
14:38 涨/烫/风凉，都是45分510秒
14:45 涨/烫/风凉
14:542次
16:4915次，高压氧出来了，3点多几分进去的
16:54一次，尿尿出来
16:56 涨/烫/风凉，后面几次都2，3秒的
17:034分6秒
17:05 涨/烫/风凉，22
17:13 涨/烫/风凉33
17:1622
17:1722
17:2033
17:383次
17:44 涨/烫/风凉 33
17:5144
17:52 33
18:12 23
18:312次，到家了
18:49 轻微恍惚
19:07一次
19:27梦境23分3秒
19:34 34
19:35 轻微恍惚
19:4633
21:59左边耳朵聋，左边腿飘，都是12分，刚吃好左庭右院，没梦境，09好了
22:02梦境，因为爷爷一个人带小孩，我们去厕所，紧张了
22:14脚又票了
23:01洗好澡了，1次还是2次
23:23 之前一次，准备去加油
23:24梦境，55
23:3545
23:44一次
23:56准备睡觉
00:19有小发，是因为我咳嗽了，咽口水，可能是因为他咳嗽，打完问就忘记了，08分开始不动的，16.48，我咳嗽他醒的，17.21 遮眼睛，我估计十秒左右咽口水18.48好的, 从第二天的记录看, 可能有2次
02:54尿尿`,s4:128,s3:2},"2025-10-01":{memo:"脚飘, 下午睡觉有小发",detail:`睡了6小时多，晚上2.30到3.30基本醒着，可能和我开空调电风扇啥的有关系，8.08醒的，8.48，准备出门，说2分钟一次，程度一样
08:53 涨/烫/风凉
08:54 涨/烫/风凉
08:55 涨/烫/风凉
08:55 涨/烫/风凉，4分5秒都是
08:56 涨/烫/风凉
08:58 涨/烫/风凉
09:01 涨/烫/风凉
09:03 涨/烫/风凉
09:05 涨/烫/风凉
09:09 涨/烫/风凉
09:15 涨/烫/风凉
09:18 涨/烫/风凉
09:31 涨/烫/风凉
09:32 涨/烫/风凉
09:46翠富楼忘记吃啥了，上个月27去的
09:52准备进仓，说到，早上腿超麻，而且是朝着不容易发的地方
11:44出来了，舱里5次，刚出来1次，仓里是接近减压的时候，有普通频率的5次，开始减压后又没了，出舱1次，尿尿2次，但是进仓前尿尿没有
11:56 涨/烫/风凉
11:59 涨/烫/风凉
12:06 涨/烫/风凉
12:09 涨/烫/风凉
12:13 涨/烫/风凉
12:18 涨/烫/风凉
12:36 涨/烫/风凉，最近23分45秒
12:50 涨/烫/风凉
13:02 涨/烫/风凉
13:05 涨/烫/风凉
13:08左脚飘，左手硬感受有点，0,5，17问，还有1分
13:20 涨/烫/风凉
13:23脚又飘了，和刚才一样，今天问了范围，就是脚，到脚踝，28，0.5
13:25 涨/烫/风凉
13:37 涨/烫/风凉
13:40梦境一点点，说到卢广仲
13:44 涨/烫/风凉，厕所里
13:49 涨/烫/风凉
13:51 涨/烫/风凉
14:03 左手麻，4分，到小手臂，8，还有0.5，准备回家，从虹桥
14:08 涨/烫/风凉
14:13 涨/烫/风凉
14:20 涨/烫/风凉
14:26 涨/烫/风凉
14:27 涨/烫/风凉
14:29 涨/烫/风凉
14:30 涨/烫/风凉
14:42 涨/烫/风凉
14:44 涨/烫/风凉
到家准备睡觉，15多睡到了17.30，自然醒的
15:09 涨/烫/风凉
15:13 2 4s
15:30 涨/烫/风凉 是小发 动不了
17:34 涨/烫/风凉
17:36 涨/烫/风凉
17:49 轻微恍惚
18:08 涨/烫/风凉
18:22 涨/烫/风凉
18:25 轻微恍惚
18:33 轻微恍惚
19:14 轻微恍惚
19:22 轻微恍惚
19:37 轻微恍惚
19:38 轻微恍惚
19:58 轻微恍惚
20:04 轻微恍惚
20:20 轻微恍惚
20:44 轻微恍惚
21:00 轻微恍惚
21:21洗好澡，1次
中间有小孩10睡，我们出去，刷牙，回来有点奇怪的感觉之类的，都丢了，这里应该有个10次
23:18 涨/烫/风凉
23:23 涨/烫/风凉梦境
23:24 涨/烫/风凉，间隔短
23:52小孩发神经，吵醒`,s4:100},"2025-10-02":{memo:"有脚飘",detail:`0.17到6.47 睡了6.09
07:48 1小时15次
到8.18 18次，睡得好的，自己醒的，程度4，5分3。4秒
08:19 涨/烫/风凉
08:20 涨/烫/风凉
08:25 轻微恍惚
08:36 轻微恍惚
08:41 轻微恍惚
08:46 涨/烫/风凉，时间久，47才好，5分，从上车到路口了，自己说10秒
08:48 涨/烫/风凉
08:50 涨/烫/风凉
08:52 涨/烫/风凉
08:55 涨/烫/风凉
09:00 涨/烫/风凉，78秒
09:16 涨/烫/风凉
路上撞了个车，陪了50，但是没梦境
09:48 涨/烫/风凉，刚到氧舱
09:53进厕所有点脚飘，一会儿就好了
11:45出来了，15次
11:50 涨/烫/风凉
11:51 涨/烫/风凉
11:53 涨/烫/风凉
11:56 涨/烫/风凉
12:02 涨/烫/风凉
12:12 涨/烫/风凉
15:21 轻微恍惚
12:18 涨/烫/风凉
12:27 涨/烫/风凉
12:39今天说了不吃鸭子的原因，我是第一次，而且昨天吃茄子了，说只不吃青椒，聊了后，可能是“忘记了不能说”的规定
12:50 涨/烫/风凉
12:59很快好了
13:11 涨/烫/风凉
13:30 涨/烫/风凉
13:42 涨/烫/风凉
13:49 涨/烫/风凉
13:59 涨/烫/风凉
14:04 涨/烫/风凉
14:06 涨/烫/风凉
14:094分6秒
14:09 涨/烫/风凉
14:18 涨/烫/风凉
14:20 涨/烫/风凉，4分6
14:21 涨/烫/风凉
14:25 涨/烫/风凉
14:29 涨/烫/风凉
14:36 涨/烫/风凉
14:42 涨/烫/风凉
15:18帮小孩穿衣服的时候34次，回来后本来没有现在去拍照
15:27 涨/烫/风凉
16:152，3次，在和化妆师聊天
16:17 涨/烫/风凉
16:361，2次，在拍照
17:24 涨/烫/风凉，在等选片
18:37 轻微恍惚
18:03准备回去，忙于社交没不舒服
18:161，2次在跟小哈搞
19:03 轻微恍惚
19:11 轻微恍惚
19:18 轻微恍惚
19:29 轻微恍惚
19:35 轻微恍惚
19:39 轻微恍惚
19:57 轻微恍惚
20:16 轻微恍惚
20:27 轻微恍惚
20:29 轻微恍惚
20:33 轻微恍惚
20:35 轻微恍惚
20:36 轻微恍惚
20:39 轻微恍惚
20:56 轻微恍惚
21:06 轻微恍惚
22:04洗完澡，3次
22:332次
23:0745次
02:32傻逼老头把我吵醒了`,s4:126},"2025-10-03":{memo:"有脚飘",detail:`23.20到7.46，7.04，自己觉得睡觉质量“差不多”
08:48准备出门，醒来现在67次
08:51 涨/烫/风凉
08:52 涨/烫/风凉
08:53 涨/烫/风凉
09:00 涨/烫/风凉
09:01 涨/烫/风凉
09:04 涨/烫/风凉
09:07 涨/烫/风凉
09:14 涨/烫/风凉
09:16 涨/烫/风凉
09:20 涨/烫/风凉
09:28 涨/烫/风凉
09:29 涨/烫/风凉
09:30 涨/烫/风凉
09:37 涨/烫/风凉
09:43 涨/烫/风凉
09:48 涨/烫/风凉，时间长的67分，短的23分
09:53准备进
11:47出舱了，21次，有轻有重，出来的时候腿有点飘，就一会
12:01 涨/烫/风凉
12:02 涨/烫/风凉
12:08 涨/烫/风凉
12:10 涨/烫/风凉
12:22 涨/烫/风凉
12:27 涨/烫/风凉
12:36 涨/烫/风凉
13:41 轻微恍惚左庭右院
14:16 轻微恍惚
14:37 轻微恍惚。韩国街
15:54主动问，好像有一次，从韩国街回来，再兜一会
16:23 涨/烫/风凉，刚和姐分开
16:30厕所出来2次
16:30 涨/烫/风凉
16:40 涨/烫/风凉
16:41 涨/烫/风凉
16:49 涨/烫/风凉
16:56 涨/烫/风凉
16:58 涨/烫/风凉
17:05 涨/烫/风凉
17:08 涨/烫/风凉
17:11 涨/烫/风凉，13秒，45分
17:12 涨/烫/风凉，短
17:13 涨/烫/风凉，短
17:22 涨/烫/风凉
17:31 涨/烫/风凉，，3，4
17:41 涨/烫/风凉
17:52 涨/烫/风凉，到家
18:00 涨/烫/风凉
20:37我到家了，大概18.30我出去的他洗澡的时候3分钟一次，现在大概10分钟一次
20:56 涨/烫/风凉
21:38记不清有没有，问5分钟没有没有，说就记一次吧
22:07 涨/烫/风凉
22:42还没有，吃好药了`,s4:90},"2025-10-04":{memo:"脚飘2次",detail:`23.01到7.09，一共6.23，睡得比较差，3.30到4.30醒着，看录像，3.31突然坐起来，原来是尿尿，回来后一直尝试睡觉的，4.19没摸到小哈去下面抓小孩了
醒过来到7.46 4次，6，7分，10左右，问是不是比前面变重，说不确定
07:50 涨/烫/风凉，短
07:52 涨/烫/风凉，中
07:59 涨/烫/风凉，说到半夜里有3次
08:02 涨/烫/风凉，去厕所了，不记了
08:12 轻微恍惚
08:17 轻微恍惚丢了很多 5次吧
08:52 轻微恍惚
09:42到了，左脚有点飘，路上很少
09:53脚飘好了，没有过梦境，准备进仓
11:42出来了，本来是8，说自己23岁，加1
11:48 涨/烫/风凉
11:58 涨/烫/风凉
12:03 涨/烫/风凉
12:24路上2次，到南翔了
12:53 轻微恍惚
13:04 轻微恍惚
12:29 涨/烫/风凉
12:42 涨/烫/风凉
13:19 轻微恍惚
13:28 涨/烫/风凉
13:33 涨/烫/风凉，最近4分了，准备回
13:55 涨/烫/风凉
14:01 涨/烫/风凉
14:08 涨/烫/风凉
14:19梦境，刚到家
14:37 轻微恍惚
14:58 轻微恍惚
15:06 轻微恍惚
15:21 轻微恍惚
15:54 轻微恍惚
17:02 涨/烫/风凉
17:12 轻微恍惚
17:16 轻微恍惚 看电视 哈在洛南
17:23 轻微恍惚
17:32 轻微恍惚
17:56 轻微恍惚
18:02 轻微恍惚
18:10 轻微恍惚
18:11 轻微恍惚
18:22 轻微恍惚
18:25 轻微恍惚
18:49 轻微恍惚
19:08 轻微恍惚
19:10 轻微恍惚
19:22 轻微恍惚
19:36 轻微恍惚
19:53 轻微恍惚
19:59 轻微恍惚
20:02 轻微恍惚
20:19 轻微恍惚 2
20:36洗澡出来4次
20:38 轻微恍惚
20:45 涨/烫/风凉
20:53 涨/烫/风凉
21:38左手到大半小手臂没感觉，脚比好点，哈接回来睡了，我们刚到天街，41，手好点了，42，在减轻，45，算好了，硬说有点`,s4:80},"2025-10-05":{detail:`睡得还可以的，比我多，
08:13 轻微恍惚睡得不好，起床有梦境，没小发，梦境频率高
07:35 涨/烫/风凉
07:38 涨/烫/风凉
08:21 轻微恍惚
08:21 轻微恍惚
08:27 轻微恍惚
08:36 轻微恍惚
09:03 涨/烫/风凉 掉了很多 4次吧
09:202次了
09:22 涨/烫/风凉
09:24 涨/烫/风凉
09:26 涨/烫/风凉，34分，十多
09:30 涨/烫/风凉
09:34 涨/烫/风凉
09:42到医院了，好像1次
09:52准备进，没有梦境
11:39出舱，13次，中间是几次集中的
12:01 涨/烫/风凉
12:11 涨/烫/风凉
12:12 涨/烫/风凉
12:27 涨/烫/风凉
12:33 涨/烫/风凉
12:48 涨/烫/风凉
12:54 涨/烫/风凉
13:01 涨/烫/风凉
13:14 涨/烫/风凉
13:20 涨/烫/风凉，大概20秒了
13:35 涨/烫/风凉，5秒了
13:50 涨/烫/风凉
13:54 涨/烫/风凉
14:13 涨/烫/风凉
14:17 涨/烫/风凉
14:26 涨/烫/风凉
14:40 涨/烫/风凉
14:45 涨/烫/风凉
14:56 涨/烫/风凉，快到家了
15:00 涨/烫/风凉，电梯
15:07 涨/烫/风凉，一起睡到16.50不到点
17:22醒来到现在6次，一样是5以上的
17:24 涨/烫/风凉
17:28 涨/烫/风凉，愿意约圈圈玩的
17:393次
17:40 涨/烫/风凉
17:43 涨/烫/风凉
17:50 涨/烫/风凉
17:52 涨/烫/风凉
17:55 涨/烫/风凉
18:03 涨/烫/风凉
18:05 涨/烫/风凉
18:322次
18:39 涨/烫/风凉
18:57 涨/烫/风凉
19:11 涨/烫/风凉
19:24 涨/烫/风凉
19:26 涨/烫/风凉
19:36大便2次
19:59 涨/烫/风凉
20:14 2次，短时间的，外婆打了个电话
20:25 涨/烫/风凉
20:34 涨/烫/风凉
20:59 涨/烫/风凉，2，3次
21:20 涨/烫/风凉，轻，12分5内
21:37到家了，还没有
21:53准备去洗澡，还没有
22:22洗澡回来2次
22:56 涨/烫/风凉，刚才还有1次
23:05 涨/烫/风凉
08:14 轻微恍惚，准备睡觉 
23:16 涨/烫/风凉`,s4:98},"2025-10-06":{memo:"肚子痛导致不爱说话",detail:`23,26到6.37 睡了5.08，说是肚子疼，2.51到3.41完全醒，醒到现在10次
08:22 轻微恍惚
08:27 轻微恍惚
08:28 轻微恍惚
08:30 轻微恍惚
08:33 轻微恍惚
08:37 轻微恍惚
路上肚子痛，不说话
08:38 轻微恍惚
08:56 涨/烫/风凉
09:07 涨/烫/风凉
09:11 涨/烫/风凉
09:14 涨/烫/风凉
09:17 涨/烫/风凉
09:26 涨/烫/风凉
09:29 涨/烫/风凉
09:31 涨/烫/风凉
09:33 涨/烫/风凉
09:44 涨/烫/风凉，刚到医院
09:51准备进，没有
11:35出，11次
11:39 涨/烫/风凉
11:39 涨/烫/风凉
11:42 涨/烫/风凉
11:46 涨/烫/风凉
11:47 涨/烫/风凉
11:49 涨/烫/风凉
11:52 涨/烫/风凉
11:54 涨/烫/风凉
11:58 涨/烫/风凉
12:072次
12:08 涨/烫/风凉
12:242次，到南翔印象成了
12:57 轻微恍惚
12:50在添好运，有过1，2次
12:57 涨/烫/风凉
13:27 涨/烫/风凉，吃好了
13:48准备回
13:50 涨/烫/风凉
13:58 涨/烫/风凉
14:06 涨/烫/风凉
14:12 涨/烫/风凉，15到家
前两天和姐碰过以后，自己拉屎看视频，大概是1988，有泪流满面
14:53 涨/烫/风凉
15:06 涨/烫/风凉
15:15 涨/烫/风凉
16:55睡了一会，4次，看着电视的
16:56 涨/烫/风凉
17:01 涨/烫/风凉
17:02 涨/烫/风凉
17:35到现在3次
17:57 轻微恍惚
18:03 轻微恍惚
18:0134次
18:05 轻微恍惚
18:57 轻微恍惚
19:08 轻微恍惚
19:20 轻微恍惚
19:48 轻微恍惚
19:53 轻微恍惚
19:55 轻微恍惚
19:59 轻微恍惚
20:02 轻微恍惚
20:05 轻微恍惚
20:06 轻微恍惚
20:08 轻微恍惚
20:12 轻微恍惚
20:34 轻微恍惚
20:39 轻微恍惚
20:49 轻微恍惚
20:50 轻微恍惚
21:31洗好澡 3次
21:39 涨/烫/风凉
22:37问频率怎么样，回答1，2次
23:11拉屎出来 1还是2次
23:26 涨/烫/风凉`,s4:108},"2025-10-07":{memo:"脚飘了",detail:`睡觉还可以，和我差不多，零碎打断，6.30小时左右
07:535次，频率不算高
07:55 涨/烫/风凉
08:301次
08:10 轻微恍惚
08:45 涨/烫/风凉
08:46 涨/烫/风凉
08:49 涨/烫/风凉
09:16 涨/烫/风凉
09:40路上有一次，下车了，在聊第一次见到奶奶啥的，2个脚都飘，手没有，45，右脚好了，左脚还有，2分，一开始3分
09:51准备进仓，脚好了，没梦境
11:41出来了，13次，比较轻，减压的时候5次比较长，其他的短
11:49 涨/烫/风凉
11:53 涨/烫/风凉
12:06 轻微恍惚
12:14 涨/烫/风凉，到虹桥天地了
12:45 涨/烫/风凉
12:52 涨/烫/风凉
13:09 涨/烫/风凉
13:30 涨/烫/风凉
13:38 涨/烫/风凉
14:05 涨/烫/风凉
14:07 涨/烫/风凉
14:18 涨/烫/风凉
14:34到家
14:56 涨/烫/风凉
15:373次，在玩游戏
15:41 涨/烫/风凉
15:52 涨/烫/风凉
17:40睡觉前后各1次
17:43 涨/烫/风凉
17:45 涨/烫/风凉
17:46 涨/烫/风凉，感觉有10秒，45分
17:48 涨/烫/风凉
17:52 涨/烫/风凉
17:57 涨/烫/风凉
18:09 涨/烫/风凉
18:22 涨/烫/风凉
18:26 涨/烫/风凉
18:29 涨/烫/风凉
18:32 涨/烫/风凉
18:46 涨/烫/风凉
18:57 涨/烫/风凉
19:03 涨/烫/风凉
19:09 涨/烫/风凉
19:24尿尿，3次？2分钟内
19:24 涨/烫/风凉
20:03 涨/烫/风凉，大概30秒，是有波动的，可能可以记成多次，5分
我洗澡回来，大概30分，2次
20:41 涨/烫/风凉
21:00洗澡出来，3或者4
21:08 涨/烫/风凉
21:27 涨/烫/风凉
21:402次，在开车哄睡
21:42 涨/烫/风凉
21:48 涨/烫/风凉
22:10 涨/烫/风凉
22:33有过一次
23:26问说2，3次
23:33 涨/烫/风凉
23:39 涨/烫/风凉
23:481秒
23:53 涨/烫/风凉，10秒以上了，5分
00:03 涨/烫/风凉`,s4:84},"2025-10-08":{memo:"可能没睡够导致不爱说话",detail:`0.18到6.55，一共6.16，质量一般，到7.53大概9次，正常程度
08:33到现在5，6次
08:45到现在有4次
08:49 涨/烫/风凉
08:54 涨/烫/风凉
08:57 涨/烫/风凉
08:58 涨/烫/风凉
09:06 涨/烫/风凉
09:10 涨/烫/风凉，都是4分5秒
路上不说话，我们一起判断是没睡足
09:51路上2次，估计15分钟里的
09:53 涨/烫/风凉
09:56进，没有
11:45出，17次，都是4分5秒
11:47 涨/烫/风凉
11:55 涨/烫/风凉
肚子疼，可能不高兴记了
14:26吃好张拉拉，问了下，十几次吧，没记录
14:4534次
15:01到家了，5，6次
15:43在看电视，5到8次
睡了会，16到17.31自己醒，但说觉得睡得浅
18:14换完机油，还是5分钟一次
18:2223次
18:23 涨/烫/风凉
18:29问了，说最多一次，不高兴记了`,s4:100},"2025-10-09":{detail:`睡得一般，还想睡的 6.36小时，23.22到6.51
11:29 聊, 说”好一点了”, 15分钟一次, 持续5秒, 但是手臂麻过, 现在还烫, 就是前两天这种, 程度是5分, 10分钟后还有
下午3点问程度, 说有时候多, 有时候少
回家不愿意一起吃饭，我和奶和哈出门，一个人在楼下兜，也不愿意回家
22.24 吃过药了，问情况，回家后好一点，大概是7.30后，厉害的时候2，3分钟一次，不厉害的20，30分钟一次，严重的有7，8分，正常的4，5分
22.47都睡了，我有点凶`,s4:100},"2025-10-10":{memo:"因为我脾气差, 有手麻",coner:["华山/朱","准备做一个月氧舱"],detail:`没麻，睡得差
22.48到7.26， 7.40小时，5.31到6.08醒着
08:26早上到现在，还是5分钟一次，4，5分，5到10秒
从昨晚到现在，食欲很差，又不能确定是抑郁
08:53路上，问情况，说我批评他的时候一直有，现在手也麻了，02没好，08，👌一点
10:34出院了，没啥发
11.48 在吃塔斯丁，最近发得不多
12:32准备进，20到现在应该没
14:25发挺多的，有集中的，最多8分，半分钟的，接近于减压前后
14:30出来还有发，不爱说话，准备直接回，34，问心情差吗，捏我表示差的
15:052.52前，42开始吧，2分钟一次，到现在没有过
15:10 涨/烫/风凉
15:19 涨/烫/风凉
15:29 涨/烫/风凉
20:45问了，不记得最近什么时候，应该比较少`,s4:100},"2025-10-11":{detail:`6.45小时，23.37到7.09
出门前问，一小时10次大概
10:06说一小时8次的频率
12点问, 说最近一小时没有, 觉得上学以后5, 6次.
14点17问, 午饭没吃, 说给自己心情打5分, 一直看相册, 大概5分钟一次
17点问, 近2个小时大概5分钟一次, 今天仍然想一个人在家不愿意出去吃饭
19.33问，5分钟一次，还有更快的，2分钟的，半分钟的。我在捞王，他在家，被逼下吃了个外卖汉堡，中午也没吃，还一直刷视频
21:49最近2小时，4，5次（2小时总共）`,s4:100},"2025-10-12":{detail:`23.33到7.12，6.28，4到430醒着，是尿尿
上午看电视，又捏过我一次，15分钟后问，说不记得，应该频率还可以
13睡觉，问情况不回答，可能是考虑中，就没追问，15点起来，15.30问，发了5，6次，4分10秒，50问，可能没有，16点问一次
16:07 5分10秒
16:412，到3分14秒
17:024分
17:12 涨/烫/风凉
17:16 涨/烫/风凉
17:33 涨/烫/风凉
17:47 涨/烫/风凉
17:51 涨/烫/风凉
20:00630吃饭到现在有56次
20:36到家了，大概5次
22:03洗澡到现在56次，但是洗澡前说忘记，总之频率差不多
22:30还没睡，50应该是睡了
早上说的, 晚上百分之95麻过，当天下午还睡了2小时的`,s3:1,s4:100},"2025-10-13":{detail:`6.49小时，23.04到7.26 醒了15次，1.33小时
08:38起来后间隔很短的，比5分钟还短, 询问下, 这两天没脚飘
10:50 问, 5~15一次, 近半小时高点, 说吃了一包锅巴, 不想吃饭了
还是睡觉起来以后频繁, 玩卡丁车倒不发
14:28 说 近20分钟频繁, 可能6, 7次, 之前玩游戏都没
14:30 又有了, 5~6分, 6秒,”不轻”的程度, 40问没, 说在看卢广仲
放学后, 我下楼不久, 突然有工作, 上楼了, 他边点外卖, 边走路去地铁站, 是给小哈生日点蛋糕
20:25出单位到现在21次
23.20才躺下，26感觉都睡着了`,s4:100},"2025-10-14":{detail:`没麻，睡得一般，7.16小时，23.24到7.07
11:23 问, 说起来到现在20+, 有一点时间集中, 早上去医院开氧舱了, 集中的是3分钟一次, 现在是10分钟
16:03最近发作10分钟一次
18:02回来路上发得多，这两天一直说大蒜味
17:06 问, 说最近5分钟频率高, 1~2分钟, 发作10多秒, 6~8分，晚上不愿意吃饭，不愿意吃咸的
21:22不低，最近一次大概10分钟
21:57洗澡出来，56次
22:19最多2次，可能没有
22:21 涨/烫/风凉
23:05准备睡觉，晚上麻了，自己说是睡中，觉得有人了，4点起来尿尿，但是没什么尿
因为和前天像，看了手机使用时间，应该没关系`,s3:1,s4:100},"2025-10-15":{memo:"脚飘",coner:["高压氧","周三开始, 每次开6天, 除周日外都做"],detail:`6.23小时，23.10到6.57，打断13次，1.24小时，4到5醒着，晚上麻了1次
08:38起床到现在10次
10:42问, 和妹子聊天没发, 之前5, 6分钟一次
12:14为了和我碰头去氧舱，走路快，有点飘，光左脚, 氧舱里有一段时间频率高, 总的来说就和之前差不多的
17:08 问, 说 一小时里4次~5次
19:007号冰室，过程就一次
19:16在商场，发得有点频繁
晚上小孩咳嗽`,s4:100},"2025-10-16":{detail:`没麻，7.37小时，22.59到7.35，打断9次59分钟，还在小孩咳嗽的情况下
11:20 问了最近没有泪流满面, 到学校以后 10次左右
1140到1210 三十分钟, 3次了, 1140是吃好饭, 1210准备去氧舱
14:10 报告做高压氧的时候6次, 减压的时候多, 时间长, 10秒
睡前问了下，说一般`,s4:100},"2025-10-17":{detail:`7.32 23.26到8.09 5.47到6.33醒，打断13次1.11，晚上没麻
12.15 说到学校后5次，起来89次
14.11 氧舱出来, 10大概
14:35到单位了，路上3次
晚上10点跟小孩吵架了，小孩拿西替利秦打他妈嘴
22:32之前有记过15次，最近一小时没
22:52路上有2次，还聊到，不知道和“讨厌的味道”有没有联系，比如之前的孜然，大蒜，和今天的香薰`,s4:100},"2025-10-18":{memo:"梦境有减少",detail:`6.08小时，0.33到7.17，打断12次，36分，监控看，23.30已经睡着了
15:52  14点吃完饭以后在有天地门口玩到现在没有
17:07说有过5，6分钟一次的，我看凡人的时候没有
18:30我睡觉40分钟都觉得断片了，怕他晚上睡觉不舒服
19:02现在问，5分钟内有
19:10有过1次
19:26在问小孩明天去哪里，小孩又盯着说话，梦境比较厉害，心烦，以后少让他做决定
20:36问了说3，4次
22:27晚上理小孩衣服，有意识的，但是说是“被迫的”，可能是指心里烦
22:51 之前到现在7，8次，确定了一下，觉得频率是有减少
01:45小孩吵`,s4:80},"2025-10-19":{detail:`睡的不好，没麻5.14，23.50到7.10，1.40到2.40醒着 
10:15因为睡的少，比昨天多一点
17:49在玩卡丁车，跟哈一人一盘，哈玩他就有
18:18可能没
20:4318出去20.30回来，回来路上有5分钟的，重的有7，8分，太累了，内容就是在天街晃
23:04我2220拆电风扇，到现在，不多
23.20前都睡了，外面16度，空调开了28.5，今天肚子1分，有点咳嗽`,s4:80},"2025-10-20":{detail:`没麻，7小时，23.13到7.11，打断10，59分钟
11:35频率正常
16:53问了下，说平均十分钟一次
21:26回家以后5分钟一次，4，5分，时间比较长
22:4020分钟一次？
23不到睡着`,s4:80},"2025-10-21":{detail:`7.31小时，22.58到7.51，打断15，1.22，6.40到7.10醒，肚子疼3分
11:45说没昨天多，具体问，今天从起床到现在15，昨天20，这个级别
(17点又说这是比喻, 但12点当时说不是比喻)
16:47 问情况, 氧舱减压的时候多, 回来以后15分钟或者10分钟一次, 肚子0.5分疼
17:08 涨/烫/风凉，准备回，并且，04有，50也有
17:17 又有了
20:59路上4次，有2，3次连续的，最近半小时在房间里没有，回来以后手烫过2次了，最近走路都没有飘，手烫到带手表的地方，2，3分钟好了，因为也不注意，烫`,s4:80},"2025-10-22":{detail:`7.14，23.29到7.21，打断11，38分钟，没麻
中午因为抱枕丢了, 来回跑了几步, 只是跑不动, 没飘
14:25 说氧舱里13次 但后5次是1秒
16:00 问情况说不记得了, 问半小时内有吗, 说”半小时我猜有的”
20:16在永辉超市，5分钟一次
20:30我拉屎好回到地下室，有2，3次
21:17到家了，还是5分钟一次
22:48说有的多有的少，具体问，说不知道`,s4:80},"2025-10-23":{memo:"开始比较明显的减少",detail:`7.19，23.19到7.17，打断9，39，没麻
11:18 说早上到现在 7,8次, 到单位后不多, 起床后多点
14:15 氧舱一共5~6次, 降压的时候3次(之前一共2~3次)
17:00 估计到现在5~6次
21:56回家到现在10几次`,s4:50},"2025-10-24":{memo:"这天奶奶生病去医院了, 到30号才好",detail:`6.42，23.35到6.58，没麻，打断13，41
12:00 问 早上6~7次, 到学校后可能没有, 直到11点吃了奶茶, 到现在3~4次
14:22 早上尿了2次, 现在又要尿, 说估计是奶茶甜, 氧舱里11次
17:05下午问，说忘了
20:35感觉10分钟一次，我回家了一次，在陪奶奶看病
21:07准备走，说洗澡的15分钟不超过5次，但是不记得，可能还是差不多吧
23:11好点了吧`,s4:50},"2025-10-25":{detail:`没麻，7.15，23.48到7.26，打断6，23
11:48进仓前，和昨天一样，氧舱前一半没有，后一半3，4次
15:45十分钟一次，在看长安的荔枝
16:34看完了，3，4次
17:17看完到现在2，3次
20:214，5次
我和奶奶在医院，小哈23睡了，他20突然起来，脸朝下撑着，30起来去了下窗口，从影子看可能是关灯`,s3:1,s4:50},"2025-10-26":{memo:"梦境变多, 下午睡觉也麻了, 后面2天又恢复少的程度了",detail:`我在医院，看起来是7.11小哈叫醒的
电话报告晚上麻了，麻得坐起来，应该是23.20那次
7.19小时，23.25到7.09 打断8，25
08.54吃药的，早上打车送哈去罗南，我在医院
15:23我到家了，梦境比前两天多，中等程度
15:29 涨/烫/风凉
15:30 涨/烫/风凉
15:32 涨/烫/风凉，1秒
16:15麻了，到眼皮的，重的程度差不多，起来2次，加起来1分钟多
19:49在罗南，10分钟内没有，30可能也没
22:12不多，忘了的程度`,s3:1,s4:50},"2025-10-27":{detail:`没麻，7.04小时，23.18到7.29，打断15，1.07
11:26 问情况, 说忘记了, 起来有一点, 后面到单位, 自己猜不多, 5次以内
17:11 问氧舱和下午, 说氧舱后面一半有5分钟一次的,  也有10分钟一次的, 可能是睡着醒来的关系多了. 下午和周老师和陈晨聊天发得少.
23:10我回家了一次，问，说不知道`,s4:50},"2025-10-28":{detail:`没麻 6.48，23.47到6.55打断6，20
出门前问，说频率和之前一样
11:43问, 说起床有, 路上有, 到学校以后的”忘记了”, “可能有的比较少”, 程度自己猜是4分6秒
氧舱里5，6次
16:08 问, 说忘记了, 自己说那就是不多`,s4:50},"2025-10-29":{detail:`没麻 7.11，23.18到6.50打断7，21
14:22今天氧舱就1次
16:57下午问，说好像没有，又说不超过5次，因为习惯了
20:50到家以后5次以内`,s4:50},"2025-10-30":{detail:`没麻，6.38，23.28到7.19，其实6.34醒了，哈叫的，打断6，1.14，但其实6.34到7.19可以不算
14:35 今天氧舱里2次
17:00 问, 说忘记了, 然后说氧舱里大概2~3次, 早上一共7~8次, 下午1~2次, 他猜的
23:21一天20次梦境，3次手涨麻，3到4分，3分钟，减弱，后面慢慢不管了`,s4:50},"2025-10-31":{detail:`没麻，早上被小哈叫醒的，6.47，23.33到6.37，打断7，17
14:36氧舱里4，5次，早上起来5分钟里3次，后来好多了，对比觉得昨天是10分钟3次，到现在为止手没麻
19:33回家以后到现在很少，出去走了圈，因为奶奶回家了，他不想回家，吃饭闻到酱油有0.5梦境
晚上情绪有烦，本来还想跟我说的，后来也忘记了，第二天情绪是好的`,s4:50},"2025-11-01":{detail:`没麻，8.13，23.44到8.10，打断7，13
09.44 不到5次，左手手臂涨烫
12:16氧舱里3，4次，出来也涨过
19:47氧舱出来以后5次左右`,s4:15},"2025-11-02":{detail:`没麻，昨晚小哈吵，因为要玩具
6.57，0.14到7.56，打断10，45
10:45突然到床上站着，问不舒服吗，过了会说不算，说等一下，看手表，说早上起来就这样，“算太阳穴紧”
14睡觉，6不到醒了
16:21问，忘了，不多，最近的平均水平
22:41说加起来5，6次`,s4:10},"2025-11-03":{detail:`没麻，睡得少，6.31，00.30到7.37，打断9，42，晚上urs 晚了
12:14赶路，脚很飘，2分，早上到现在5，6次
14:14 氧舱里5~6次, 因为在看书
18:12路上5，6次，还有一次快撞车了，下午不多，自己说是因为讨厌老头子同事，但因果我认为不能确定
20:24猜4，5次，连着2天头动了就晕，有点像吃药的感觉
23:00urs 好有点头晕的感觉`,s4:23},"2025-11-04":{memo:"早上有比较轻的麻, 脚飘过, 有一次比较重的梦境",detail:`7.27，23.56到7.37，打断5，14，自己觉得睡得不太好的
醒来的时候, 麻了5~10秒, “而且马上结束”, “可能就是正常人麻”
11:29 说上午5, 6次, 手飘, 早上头也不能动一次(补充在上面了)
11:39 说脚也飘的, 走起来才发现在
18:08下午忘记了，没记，氧舱里3，4次，回来路上有一次“梦中梦”，感觉7，8分的程度，自己说10秒以上。最近梦境平均5，6秒，3分。回来碰到爷爷觉得“第一次像外婆”，最近2开始，下班不想上楼
22.37 忘记了，“肯定不多”`,s3:1,s4:10},"2025-11-05":{memo:"早上有热泪盈眶, 晚上麻有声音, 早上起来耳朵一直堵着",detail:`没麻，8.02，23.15到7.58，打断11，41
9:26 微信消息”梦境, 好”从聊天记录都是26分, 说只是碰巧告诉我, 好了又有点, 连起来7, 8秒, 不重
11:52 微信报告”dreaming 5分吧 3s吧 正好碰到”
14:17 说氧舱里听了八卦热泪盈眶，晚上问了情况，我觉得不值得，出氧舱， 看到姐姐问逛马路，也热泪盈眶了，氧舱里5，6次，也是减压多
14:38 梦境, 5秒
20:04大概5，6次，半小时一次，今天手涨烫蛮多的
23.50麻了次，半边麻，突然好的，看了监控半分钟，00.26又麻了次，监控看是17.25到18.16，表现是眼睛睁开，闭闭铮铮，18.16人动了（早上补充，第二次是，先麻，再耳朵有声音，然后有人）
这天回家后吃好饭出去吃奶茶加炸鸡加买好特卖，到家830，不知道是不是累了`,s3:2,s4:14},"2025-11-06":{memo:"有提到昨完的事像前两天的",detail:`6.57小时，0.32到7.41，打断7，12
早上问，可能就麻了那1到2次，换位置后大概率没麻，早上起床后说话就一直感觉左边耳朵一直堵着
09:13起来到现在1次梦境
09:32准备去上班了，没有梦境，没有飘，耳朵基本好了
10:55 聊到, 觉得昨天晚上买coco, 正新鸡排, 薯片, 是”前两天的事”
14:12, 氧舱里4次, 耳朵可能0.5也可能没, 特地问了手脚和情绪的问题, 没有. 过一会又说觉得右耳有回音.
14:23 手烫
16:56 说氧舱里3次, 回来忘记了, 估计也是3次
18:59路上3次，回来以后没有，现在去天街，哈饿了，没饭了
20:43梦境，出去也有
晚上大概1030urs说话到0020`,s4:12},"2025-11-07":{detail:`没麻，7.03，00.28到7.42，打断6，11
13:05早上5次
14:35氧舱里3次
21:20什么时候记录过2，3次，截至忘记了，回来吃饭以后有1，2次。下午有一次比较强烈的，5分10秒，很轻的是1分2秒就好了，感觉上比以前好很多？`,s4:12},"2025-11-08":{memo:"第一次说有橡胶味",detail:`没麻，起来晕，6.24，0.27到7.06，打断6，15
12:08早上3次，氧舱里1次，氧舱里有橡胶感觉，轻微，1分，梦境是3，4分，5秒
16:31和姐姐吃饭，刚分开，最多2次
19:52到现在，忘记了，可能1，2次
20:29嘴里又有橡胶味道，大概1分钟，不强`,s4:8},"2025-11-09":{detail:`没麻，起床前也是动了就晕晕的，7.00，23.30到6.51，打断9，21
12:23醒来以后十分钟内3，4次，后来忘记了，可能没有
12.40 没吃午饭，睡觉了，我带哈去罗南了，睡了2小时没麻
20:46梦境，5分以上，估计20秒？在问前进的蜡烛有没有发霉，然后说下午一共就1，2次
21:14又有橡胶感了，同一分钟好了，程度一样
23.40小孩睡的
23:58眼睛跳，我过去以后有梦境，然后又去尿尿，刚才是尿过的，看录像，55分30秒呜眼睛，55分55秒好，我才去的，然后估计梦境，大概是56分多，说是不到5分，57分半以后人才动`,s3:1,s4:6},"2025-11-10":{detail:`6.32，23.49到7.35，打断9，1.14，觉得睡的可以，可能是白天睡过？
12:13 问 起来1~2, 单位1~2.
14:36 问 氧舱里6次, 但都很短, 脚不飘
18:03下午忘记，路上3次，单位门口那次重5，6分，5，6秒，轻的1秒
18:072秒，在过马路，准备吃点东西回，说到下午有过一次橡胶味，最多一分钟
20:24从上次到这次没有，梦境重 10秒 很快递减 7，8分持续3秒开始递减 在看方大同 觉得看过 有橡胶味
22:41梦境，橡胶，梦境先好的，还没洗澡，因为我睡着了，我醒来后还一直以为他洗好的，然后我有点生气的
23:52Urs
4点多起来尿尿后入睡麻了，说是“正常”`,s3:1,s4:16},"2025-11-11":{detail:`5.37，0.51到7.44，打断11，1.16，4.28到5.26醒着，看了录像，其实是睡得好的，被小哈踢醒的
09:20早上没有，还说是第一次早上没，路上忘记
11:58 说上午没有, 或者忘记了
14:16氧舱里6次，后来又说3，4次，3，4秒，程度一般，原来6次是说开了6次氧舱
18:02路上有2，3次，下午忘记了
23:12准备睡觉的期间有2，3次，之前也有2，3次
23:41urs
18分睡22分打呼`,s4:11},"2025-11-12":{memo:"上班停车后觉得前面2天没上班",detail:`没麻，6.58，00.26到7.36，打断6，12
9:20 聊到, 到单位觉得是周一, 但早上起床知道星期几的, 确定早上和路上没有梦境, 并且知道昨天的事, 就来的时候有陌生感, 慢慢经过分析(回忆昨天的事)能感觉昨天来过. 详见聊天记录, 聊到29, 还觉得前两天是周末, 不觉得昨天来了, 是停好车以后感觉的. 聊到, 前天(10号)晚上我睡了一会, 我起来后生气他还没洗澡, 觉得是4天前的事. (发现上周11/6也有)
12:07 问, 先说1次, 又说早上起来1次, 单位估计2次, 但早上是说没, 再确认路上是不是没有, 说应该是, 也可能有, 忘记了.
14:29 问, 氧舱里2次, 有橡胶味, 橡胶味2分钟, 梦境就一般, 问周六和姐姐逛街, 说3天前, 正常的
14:43 因为氧舱出来, 外婆找他说了点话, 吐槽了下, 现在把外婆微信删了, 还想把我的也删了
14:58 外婆打电话, 外婆哭, 引起瑾也想哭, 之后又想把钥匙拿回来.
17:59下午手涨了一会，路上有4，5次，5分，今天去美兰湖吃
19:112，3分，在世纪联华，准备拿奶茶
20:28文峰回来，有过一次`,s4:10},"2025-11-13":{memo:"好像有点心情不好, 可能不是生病导致",detail:`没麻，7.18，23.54到7.39，打断7，27
9:19 早上1次, 最多2次, 路上没有
14:20 上午2, 3次. 氧舱里5次, 自己是”觉得太闲, 想了点不开心的东西”
16:36 梦境, 顺口问了几次, 说, 算这次最多3次.
21:22到现在猜5次，我们去盒马买了鸡毛菜烧关东煮了
21:46到房间里，觉得有熟悉的味道，但是自己说不是生病
22:49说小哈大了的样子看不到会不会可惜，但自己说没有抑郁，今天有点肚子疼, 情绪有点差`,s4:15},"2025-11-14":{coner:["华山/朱","高压氧没做"],detail:`没麻，8.02，23.30到7.53，打断8，21，晚上小孩尿尿出，他换了裤子，我不知道
09:27算1次
12:58烫涨，55到现在还持续，梦境到现在没有
15:55最多1次，去接小哈
18:03没有，或者1次，感觉有左眼皮跳，但是没别的不舒服，不一定是发作，小哈进来叫妈妈，他说熟悉，又自己分析是正常的
22:11有过2次下眼睑跳，没有过梦境，吃完饭帮我剪头发的
23:27没有梦境，但是有眼皮跳
00:09还没睡觉，这两天我工作比较忙`,s4:3},"2025-11-15":{memo:"有手麻",detail:`没麻，6.18，0.50到8.07，打断6，59，是6点多上厕所半小时
11:43氧舱出来，后面半段氧舱有3次很短，其他都没有
15:38到现在2，3次梦境，说早上梦到和外婆有啥不开心的，现在不太记得了
20:02洗好澡出来问，说忘记了，但是下午一直心情不太好，因为小哈不睡，我工作忙
21:41问，还是说忘记了，不一定有，但是有左手麻，程度一般，范围手掌
00:08和昨天一样，睡的比较晚
02:01连续2天门都没关`,s4:5},"2025-11-16":{memo:"下午睡觉鬼压床, 心情不好没多问次数, 所以记10次",detail:`没麻，7.03，00.31到8.11，打断6，59
13:42肚子疼，问发作情况，说不知道
15.08 躺在床上，我在工作，小哈在看电视，我听到重复的咽口水声，过去问，是不舒服了。拍了视频，问什么感受，说忘记了，又说鬼压床，我过去的时候已经块好了，中午开始肚子疼的，午饭没吃，但是早上吃的肯德基，10点多拿了小婷的东西，还吃了个蛋糕啥的
20:04问了，回答不知道，硬问，说3次的感觉
23:00刚从罗南拿东西，小孩顺便哄睡，上次到现在确定没有，但是说今天眼皮跳了2，3次`,s3:2,s4:5},"2025-11-17":{detail:`6点多麻的，手表看起来是6.27到6.44醒的，跟中午一样，失重，问麻没，说忘了，猜有的
睡觉7.30，23.47到7.39，打断9，22
12:09没有不舒服，说好像比较忙的关系
14:20 说肚子疼, 没心情说话
14:45估计氧舱里2次
20:51大概3次梦境，有长有短，最多5，6分，平均2，3分`,s4:5},"2025-11-18":{memo:"有手麻",detail:`没麻，6.44，23.56到7.08，打断8，28
14:33上午1次，氧舱里2次，有手麻和失重，不是很重，因为只是手
19:47忘记了，最多1，2次`,s4:5},"2025-11-19":{detail:`没麻，7.20，23.35到7.18，打断7，23
14:18 氧舱里1次, 早上起来2次, 单位里2次
16:10 梦境
22:43主动报告，从上次到现在4，5次了`,s4:11},"2025-11-20":{memo:"手失重2次, 晚上梦境明显变多, 可能是情绪关系, 第二天早上还麻了",detail:`没麻，7.31，23.41到7.40，打断9，28
11:28 手臂失重, 有点烫, 在聊外婆, 还有香水味, 早上到现在没梦境
14:17氧舱里梦境1次
20:40洗好碗感觉不开心，问的，说觉得回家后梦境有7，8次。正常程度，又说其实是忘记了。晚饭吃得有点多，不浪费硬吃的，吃的时候小孩在搞，很心烦。问下午在单位里，忘记了，又说估计3次左右
21:32到现在2，3次
22:03洗澡回来了，没有
22:39发火的时候左手失重，到现在没有梦境`,s3:1,s4:14},"2025-11-21":{detail:`没带手表，估计1130睡的，早上起来麻的，鬼压床，比以前都重，半边麻，最后眼睛跳了5秒，补充，麻前房子转了1分钟，自己觉得动了能好，但是不高兴动，然后再鬼压床再麻，估计730后了，6.19尿尿的，745起床的
11:48 上午1次
14:18 氧舱里3次, “有中等的”, 相比之前有特别轻的.
17:55到家了，说3，4次
18:30去盒马买东西到回来，3，4次，时间不久，程度中等，但不太愿意说的样子，半小时内，因为6点抢号的。 重要的是，是因为聊天不回复，说因为不舒服了所以不想回
19:47可能没有，觉得陈雨玄太烦了，想搬走
00:09失重，没有要入睡，直接发的，早上说，麻了2分钟，有眼睛跳，口水的感觉，但短1.27还有翻来翻去
02:39 起来尿尿`,s3:1,s4:12},"2025-11-22":{detail:`5.41，5.41，0.37到6.50，打断5，32 
08:22醒来到现在3次
09:56准备氧舱，路上最多一次
11:46氧舱里2次梦境1次橡胶，都程度一般，时间短，4，5秒，橡胶半分钟
14:11盒马出来，到现在2次
16:08刚吃好东西，有2，3次，过会要去和小婷玩
20:46和小婷玩回来，2次
23:561到2次，我在搞箱子`,s3:1,s4:15},"2025-11-23":{detail:`麻了，不太记得了，没到眼睛，时间不长，鬼压床，失重，没流口水的感觉，应该比前一天轻一点，7.17，0.08到7.59，其实是730醒的，所以打断7，34
12:42不超过5次，但是说做的盒子像自己棺材
14:583点不到睡一会，睡到6点不到一点，入睡时候麻的，不重，没到眼睛，有失重
20:39睡觉起来到现在2，3次梦境，刚吃好小菜园
21:17心悸
晚上睡前说最多2次`,s3:2,s4:10},"2025-11-24":{memo:"抑郁情绪第一天, 发作时间是回家路上, 记作5次, 但恢复得快, 心情不好小发可能漏记, 晚上小孩看病, 这周幼儿园还请假了",detail:`麻了，和昨天下午一样比较轻，说是10秒，6.03，00.27到7.37，打断12，1.07
12:12梦境
14:27氧舱2次
17:49到家不想上楼，但说自己没事，楼下碰头，说下午没有，路上有手麻，路上梦境挺多的，还说描述不了，问了不太愿意说
18:00梦境，不长，说让他自己走一会，我说一定要一起，我问去天街兜一圈吗，他说不要，人太多了
18:16可能没有过，到家5分钟了
19:07准备带小孩看病，到现在说没有，说到家后就好了，心情也恢复了 
19:54没有过不舒服，在做雾化
21:15回来以后有2次
23:55urs 了，感觉比较兴奋，不想睡觉
02:18晚上小孩1点多，1点半，2点都在叫，还换过位子了`,s4:10},"2025-11-25":{memo:"今天放学外面徘徊了一个半小时, 聊到安乐死, 也是回家路上发得多, 记作了5次",detail:`11.25
晚上没麻，但睡得很少，小孩闹了一夜
7.10，0.05到7.41，打断8，26，自己觉得不准备，睡得不好的
11:35估计1到2次
14:23氧舱2次梦境，出来1次
17:50下楼下5分钟了，没跟我说，我下楼问的，我问有没有不舒服，不回答，过了会说，路上也多，放学也多
18:01梦境，正常程度，说都是这个程度，03分，说我们70，陈宇轩40岁，那我们这个时候去安乐死，09聊到投胎
18:14梦境
18:28梦境，我估计十几秒，我们在逛马路
19:03梦境，7.25左右到家
20:03忘记了，最多1，2次
20:40到现在没有吧
22:03没有不舒服`,s4:16},"2025-11-26":{memo:"晚上小孩刷牙什么的生气了, 还是回家路上多, 也记作5次",detail:`说是没麻，6小时，23.55到8.11，打断12，2.16，0.28到1.06和1.20到2.33醒着, 监控上看是睡的
11:47说外婆的时候1到2次，从早上到现在1次
14:48氧舱里3次
16:57 问, 说”普通, 应该有的, 但是正常”
18:11楼下呆了10分钟，还想呆更久，路上梦境多
18:21有过1次
19:38问了说是3次，问半小时后有吗，说有的
21:03到现在2，3次
22:59问情况，回答“无数次”，问真的吗，说“不说了”。在跟小孩搞刷牙尿尿的，之前在研究卢广仲
23:27小孩秒睡，准备睡觉
02:13我大发火了，骂了2个人，一个只会叫，一个不说话`,s4:20},"2025-11-27":{memo:"今天放学一起去盒马和天街拿蛋糕",detail:`没麻，5.31，23.37到1.45，3.39到7.43，这里我是2.48睡着的，从录像上看是睡着的，是闹了以后我逼着换位子的，打断10，41分钟
09:34 问情况, 确定晚上没麻, 早上到现在1~2次或者没有, 昨天晚上闹的时候, 说应该3次一下
11:59好像没，还说干活，ocd 没空
14:17氧舱里3次
17:06下午3次，觉得ocd和不配得感，不愿意说故事, 问打算, 还说”没兴趣, 我好像任何时候不喜欢人多”, 这个和24号那天发作问要不要去天街一样, 24晚上好了就说愿意去天街的.
18:28放学以后4次，细问都说忘了
20:24梦境，聊到小熊，之前大概2次
21:57有2，3次
晚上urs, 后面连续3天`,s4:18},"2025-11-28":{memo:"非典型梦境加橡胶后鸡皮疙瘩",detail:`没麻，6.16，00.31到7.00，打断8，22
11:54问的，说一共5，6次
15:09氧舱里2次“非典型的”梦境，1次“橡胶后鸡皮疙瘩的感觉”，出来以后没有
15:19 聊晚上抢号, 说想6点抢好再回家
17:09 问情况, 说”应该没啥”, 但是情绪比较低落, 说打算抢了号上来, 对走一圈什么都没兴趣. 5点半才下班的
18:35问发作情况，说不知道，不肯吃饭，我认为是没心情不想说了，第二天早上补充说5次`,s3:1,s4:13},"2025-11-29":{memo:"开始有比较重的梦境, 小发是下午睡觉的, 抑郁倒是消失了, 开始有平时走路不稳, 不知道发作和药代谢有关系吗",detail:`（今天下午睡觉了，排除了下班路上冷和看手机/工作累，都是下午5点多发的）
早上起来麻，说最近有一次也这样麻，但是描述不出，又问前几天有没有心情不好瞎说，回答没有，那可能是昨晚，或者昨天中午的那种，问昨天18到24，说5次，7.44，00.15到8.10，打断6，11
11:46出门问过，1到2次，路上好像没有，氧舱里1次，时间快聊天多
14:16吃好饭了，有4，5次
14.25 准备睡觉，15.23遮眼睛的，16.26和31动，16.40醒，50分出门的，睡前麻了一次，比晚上轻，可能是失重，说不清，但不像之前，不算拒绝聊
17:06不舒服，梦境，有点重，时间估计是一分钟左右，是最近最重的，有7，8分，有意识的，但问了去不去小菜园，没回答
17:24 心悸，一会儿就好了
17:50没有
18:20梦境，叹气，说有橡胶味，21，问，说“算好了”，比刚才轻一点，5，6分，20拍我的，但是说是从爷爷说“小哈我来跟你玩一会”开始的，可能要加1分钟
19:34梦境了，也有橡胶味，和上次差不多，时间大概半分钟
20:36洗澡出来，3次，一次重2次轻，大概10去的，2次非常轻，重的一次，比前面的轻
20:51我大便回来，很重，有橡胶味，比洗澡的2次都重，心情感觉没影响，程度是下午重的那次，7，8分
21:47大概半小时前，在盒马，开始走路飘，到现在还有，可能是药，说觉得头前面部分感觉变“浆糊”了
22:36可能没有
0.53 动了，说了句啊呀
04:38小孩大叫`,hh:[17,18,19,20,21],s3:1,s4:8},"2025-11-30":{memo:"上午小哈没醒, 我们2人去罗南, 还化妆了, 晚上吃完小菜园回来又有比昨天更重的发作",detail:`没麻，7.49，23.51到7.58，打断7，18
早上起来有过橡胶和梦境，比8.38的轻一点
08:38梦境，还没刷牙，5分，时间也是半分钟的样子，从周六下午5点开始，我看到的情况，不舒服都是“停下来”的，以前都是“正常”的
09:23不舒服，吃东西停了，能对话，橡胶味不重，有点想吐，想拉屎，橡胶是后面出来的，问有梦境吗，回答“应该算有吧”，主要的不舒服是想吐，早上的就有，总的持续时间大概1分钟，心情还可以，有7分多一点
10:10想吐，拉屎，橡胶味，梦境有一点点，半分钟，强度和上次差不多
11:00橡胶味，想拉屎，有一点想吐，在罗南涂了口红，还在看化妆品
13:06没有
14:12有一丝梦境，1分程度，2秒
15:29应该没有
15:41梦境，一会就好了，然后，想拉屎，有一点橡胶，打完点字以后还没好，又打完这点字好了，梦境不重，2秒后开始拉屎橡胶的，没有想吐
15:59梦境弱，然后有拉屎和想吐，然后有橡胶，打完字还没好，打完这里好了，橡胶是最后好的，在床上躺着看鞋子，小哈在看电视
17:58大概没有
18:32梦境，拉屎，橡胶味很弱，33好了，头很紧，32末发作，打完字34，发作接近1分钟，在小菜园，不知道是不是因为跟小哈搞了一下
19:34吃完饭了，没有，或者只有比较轻的
20:21梦境，到小区门口了，有熟悉感了，说是9分，持续时间估计有2分钟了，自己评价是“又久又重”，从门口的“雨”下水盖，到门口口腔广告这里，小哈和奶奶认字。这是近几天最重的一次
21:21洗澡出来，应该没事
22:04手烫，到手臂，渐变，虎口这块最烫，涨麻失重比较轻，算带的效果，05也没好，07也没好
22:37教育小哈的时候，小哈不肯刷牙，闹，，梦境，熟悉感，5，6分，我也生气
22:52小孩又大闹，今天吵得很厉害，不知道会不会大发`,hh:[8,9,10,11,15,16,18,20,23],s4:2},"2025-12-01":{coner:["高压氧没做","忘带了"],detail:`没麻，7.19，23.57到7.59，打断14，43，不知道是不是发得多
08:34 8点起床，到的那种，3分和6分的程度
12:44没有不舒服，有的话也是很轻的，而且不一定有
14:55 梦境，拉屎，橡胶味有一点，在给李老婆处理照片
17:41 梦境, 6, 7分, 有点橡胶和拉屎想吐, 但是不重, 梦境多一点, 45秒不到好的, 还在干活
18:26梦境，15秒开始，橡胶味，梦境6分，00好，持续45秒
19:04到家
19:40梦境，2分，感觉橡胶快来了，压掉了，20秒左右，说单位里有几次的
19:49有熟悉感，纯熟悉，偏真实，50好了，应该是发作
20:06梦境，5不到，半分钟
22:00 洗好澡, 被压掉的有
23:19小哈刷牙的时候，5，6分，不轻不重，梦境为主，橡胶压掉了，时间和之前差不多`,hh:[7,8,15,17,18,19,20,23],s3:1,s4:2},"2025-12-02":{detail:`麻了一次，忘记睡前还是睡后，麻的程度，感觉，都忘了，30分猜睡前
7.17，0.04到7.48，打断12，27
08:01起来以后第二次梦境了，有橡胶，想拉屎，5，6分，第一次轻
08:38熟悉感，觉得前两天有锅贴在桌上，然后开始有橡胶，39，难过，叹气，40，问药吃过吗，（没吃），40头好的，但说“身体有抽筋的感觉”，像大便出来的爽感
11:50 问, 说估计没有, 集中精力干活
14:15氧舱里2次梦境加熟悉加橡胶，程度是6分
16:51问情况，说忘记了，有的话，也是轻的，就算没有吧
17:16 觉得想到外婆生气，好像被压住了，后来确认没有
17.56 路上一次重的，7，8分，是熟悉感为主，拉屎，想
18.56 吃了鸡蛋灌饼和盒马蛋糕，盒马出来有一次不重的，没打断说话
20:099分40开始到10分30，梦境，橡胶，想吐拉屎，说橡胶味道是“那个味道”，5，6分
21:35好像被压下去了？`,hh:[8,9,13,14,18,20],s4:2},"2025-12-03":{detail:`没麻，7.15，23.37到7.14，打断7，22
07:52发作4分，前面几次被压了
08:29橡胶，拉屎，想吐，熟悉梦境，30好了，5分
9:22 说没不舒服吧, 忘记了. 那就是没严重的
9:28 说到外婆, 好像压住了, 57秒说现在橡胶+吐了, 梦境就1秒, 橡胶+吐也不重, 整体3分, 29分45秒好的
12:00去尿尿有梦境，橡胶，想吐之类的，但说不清了
14:18 说好像氧舱里有, 又好像没有, 也不知道是不是路上的. 我害怕的是”不确定”, 怕是自己搞不清.
14:35 有橡胶, 弱, 梦境呕吐都有, 都不强.
17:42 问, 说没有不舒服, 刚准备下班
18:22到家了，自己上楼了，路上没有大的不舒服
19:22橡胶，刚买好鸡蛋灌饼，奶茶回来，大概1分钟不到，程度4，5
19:50不舒服，吃完饭在看脱口秀，51好的，先梦境，感觉没压住，然后橡胶，拉屎了，和上次差不多
20:40 有过，在看虎的草体
21:11洗澡出来没事
23:05准备睡觉，没有`,hh:[8,9,10,12,14,19,20],s4:4},"2025-12-04":{detail:`没麻，7.46。23.30到7.33，打断7，17
08:44有被压下去的1，2
09:50 没
14:17氧舱里，2次，橡胶 dream 5分左右，可能没有拉屎，忘记了
17:19 没, 但是后来听到xx打电话讨厌,  有熟悉感了, 没橡胶拉屎.
18:29到家，路上没有，愿意上楼，爷爷奶奶都在
21:45洗澡回来，没`,hh:[13,14,17],s4:2},"2025-12-05":{detail:`没麻6.38，23.17到6.21，12，26
08:40有压下去的，0.5秒
14:12 橡胶,梦境2次5分的. 有0.5秒被压的.
17:16 下午没有
21:31没有不舒服`,hh:[13,14],s4:1},"2025-12-06":{detail:`没麻，但说是“忘记了”，6.50，23.41到7.34，打断8，1.03, 4.30到5.30醒着
11:45氧舱里11.17有过6分梦境和橡胶，说早上刷牙有过熟悉，起床后有被压的
21:59梦境，拉屎，橡胶轻，6，7分，我刚开始钻孔，估计有1分多了
00:01帮小哈穿袜子，梦境，熟悉，没橡胶和拉屎，3，4分，5秒
02:04小孩要尿尿叫`,hh:[8,12,22],s3:1,s4:2},"2025-12-07":{detail:`麻了，睡前，没办法说感觉，忘记了，睡觉5.49，00.39到7.17，打断7，49，1.25到1.50醒着
09:23到现在都是压下去的，1秒左右的，大概3，4次
11:25没有
14:36没麻没重的梦境，睡起来urs了下
17:29在地铁上，去地铁路上的车上，梦境熟悉，5分以上，时间也不短，觉得15秒
23:14没不舒服，1014到家的，和钱婧新锦江吃饭的，弄得挺快的，已经和小哈啥的都弄好准备睡了`,hh:[17],s4:4},"2025-12-08":{detail:`没麻，6.46，0.13到7.17，打断5，18
08:36没有不舒服，我执勤回来了
12:13没有，单位有一次0.5
14:16 氧舱 一次熟悉+梦境+橡胶, 半分钟, 2次轻
17:53路上有1，2次1分，0.5分的，没有不开心
跟外婆打电话的时候手烫
23:35我和小孩吵架`,hh:[14],s4:5},"2025-12-09":{memo:"胸口热手烫",detail:`没麻，总之没有厉害的，6.29，23.56到7.09，打断6，44
08:41都没有，准备上班
14:36 上午2次, 氧舱里2次, 氧舱里有一次重的6分, 1分钟熟悉和一点点橡胶味
18:13下午没有，有也很少，回家路上橡胶5，6分，1分钟, 轻的是1~2秒的梦境
20:00左边胸口有点热，左手有点烫，在看卢广仲
22:13和上次一样，在听f3 新歌`,hh:[14,16],s4:6},"2025-12-10":{memo:"这2天肚子疼拒绝记录, 后一天描述里有这两天的",detail:`没麻，7.45，23.56到8.08，打断10，27
11:22 问路上和上午有什么不舒服, 说忘记了, 我确定了没重的, 想聊吃饭了吗, 回不想说话了, 不知道是发病导致, 还是早上上班不顺心情不好导致, 就尽量不找他说话了
14:08 氧舱里1次, 熟悉 5分 橡胶, 今天开始肚子疼比较厉害
17:56回来没上楼，问情况说现在不管他，我工作忙，准备带小孩去买面包, 后来一起买并吃陈香贵了
22:08问了下，说想不起来了，问有厉害的吗，忘记了`,hh:[14],s4:0},"2025-12-11":{detail:`没麻，7.09，23.31到7.47，打断10，1.07，3点以后就很频繁醒
14:10问有没有重的，说忘记了，想了就肚子疼
18:31回家肚子疼躺着，手机也不玩，昨天玩手机的
21:49问回家以后，说不重的5分钟一次，再问就忘记了，又说学校里就这样了，觉得和疼有关系`,hh:[],s3:1,s4:10},"2025-12-12":{coner:["氧舱停","还剩了1次"],detail:`猜有麻，忘记了，不一定，手表没带，心情感觉还可以，比昨天好
07:58醒来的一小时没有
09:00出门前问应该没
10:27 说早上有, 但没昨天多, 没有5, 6分的
14:12不太记得清，但是没重的没橡胶的
17:07问有没有重的，说忘记，肚子又疼了
17:53现在才到潘广路，出门不晚，不知道是冷还是不舒服了，6点到家问有厉害的梦境吗，没有
20:20从出发回家到现在10次，都是没橡胶的
23:13这两天都没有橡胶，但是15分钟一次轻的，3分3秒`,hh:[],s4:20},"2025-12-13":{memo:"有手长时间烫麻",coner:["蓝十字/朱","停高压氧, 加奥卡西平"],detail:`没麻，7.7，23.43到7.08，打断6，18
09:21最多一次轻的
10:38到医院了，1次，轻的，具体忘记，没橡胶
11:56有一次，3，4秒，在等阿妈手作
12:06梦境
12:19梦境
13:06到现在没有
13:21梦境，提到外婆，就小几秒
13:37梦境，2秒，说到在阿妈手作手有烫
15:37明确说没有，去宝龙吃了汉堡回来的
15:55梦境，短
16:23左手烫
18:17梦境，3秒，路上，之前都没
今天医生说多吃蛋白质，不要减肥
今天问10月头的事也记得不少的，但是第一次看朱国行是爷爷帮挂号的不太记得，隧道里摔了爷爷帮忙找人也忘记了，说了又好像记得那人的爸爸
19:51我拉屎出来，有轻的
20:05梦境了2秒
20:06熟悉感，说是真熟悉，大概半分钟好了，感觉2个礼拜里也有一次，应该是跟我说过的
22:50整个手臂很烫，之前没有过，大概率没有，52，没刚刚烫，有点麻的，失重了，就是“没感觉”，53，还没好，54，还没好，57，感觉手掌好了，大手臂还是烫了，本来是下面躺下面麻，01，没好，但是说不是很重，06还没好，但是轻一点，13还没好，但是好一点
23:18梦境，短的，已经准备睡了`,hh:[20],s4:14},"2025-12-14":{coner:["奥750",""],detail:`猜猜没有麻，有过压着的麻，自己觉得是压的，小孩晚上搞了，7.20，23.21到7.46，打断8，1.05，是小孩搞的
09:422次轻的，买好肯德基回来
09:56有点吃好药1分钟的晕
11:3510分钟前用除螨仪的时候有一次轻的
13:20应该没，准备睡，迷迷糊糊15.30醒的，没麻，没不舒服
17:13没有
19:08没有，从永辉，盒马，买了牛蛇啥的烧丸子
22:37没有不舒服，轻的也没有，开心`,hh:[],s4:3},"2025-12-15":{detail:`没麻，7.41，0.07到7.34打断6，15
08:48两次梦境，没橡胶，10点问，到单位，忘记了
11:11聊到单位打印，他说现在不会在单位打印科目3和小孩疫苗了，那么扣，昨晚看亲宝宝，也说怎么穿我赤膊照片，不合适。我认为性格有改变，所以记录。
13:50手很烫，中午睡觉没麻
15:38手烫，问没有过不舒服，说忘记，来不及，先干活
18:15回来路上轻的一次或者没有，50到家，正常的，我们都了一圈
21:20准备洗澡，之前在看电视，从上次到现在2次轻的，5以内`,hh:[],s4:5},"2025-12-16":{detail:`没麻，7,23，23.17到7.06，打断10，26
08:43没有
09:58有点晕，讲不清，但是能去倒水，头不太能动，没有其他不舒服，是比伦怕乃的感觉
10:15说聊天聊到一半就头涨了，紧张程度也和平时一样，到单位后聊天一会才晕的
13:02电视看到一半手烫，现在估计15分钟了还在烫，之前的头晕大概11点好的，19手烫好像好了
17:00猜有3次，程度5秒的
18:016点刚到家，路上有过“梦中梦”，就是梦境加熟悉，有0.5橡胶，又说不确定，但是今天是有过的，时间不久，说场中路的环没兜好就好了，后来问，原来是去加油了
20:44很多次，没有重的，忘记次数，5秒的
21:04梦境，长，20秒，自己觉得偏重，带一点拉屎
21:31上次在盒马门口，买牛奶，现在到家了，没有
21:34比伦怕乃的晕，但是吃的是奥卡西平和左乙拉西坦，奥卡西平加了150
21:58没有不舒服
22:12没有
22:55忘记了`,hh:[18,21],s4:8},"2025-12-17":{detail:`没麻，7.25，23.20到7.03，打断8，18
08:42起来到现在3次，轻的，5秒的
09:21路上没有，说可能开车认真，但我觉得只是解释，然后有点晕
09:29晕，像刚吃了5分钟药的样子，不像尿尿那样晕
09:41晕，在吃鸡爪
10:22头好像好了
13:14没有
15:30 手涨, 问有没有, 估计3次轻的
15:46梦境，想吐的，47头好了，说可能平时都是这样的
15:48手烫
17:48路上3，4次，我在开会，程度说一般，没梦境以外的症状，后来等爷爷奶奶出去了，才进门，大概6点15？
18:57进房间以后有3，4次。脱鞋子的时候有梦中梦，就是熟悉感“一模一样”，这3次，没橡胶，只有梦境和熟悉，可能半分钟
19:11梦境，熟悉感，既视感，和上次一模一样，12，想吐了，“感觉上次也这么说”，问了，橡胶0.5，13头，都好了，问难过吗，说化学难过的。 然后问, 回来以后的4次只有第一次是这样的.
19:30到现在2还是3次，问有没有熟悉感吗，说忘记了，细问有，没那么重，我在开会，他在和小哈玩
19:32梦境，短的，5秒
20:06梦境，5到10秒
20:1415分头，梦境，既视感，问是不是上次也在喂小孩吃芋圆，42秒，橡胶了，0.5，既视感还有，16分17秒好
20:56梦境，在刷手机，想吐，15秒，去厕所刷手机了
21:05 手机汇报梦境，后来说好了，06又说橡胶，08头才好，后来自己说应该是连着的
21:39洗澡出来，不重的一次
22:03没有重的或者没有
22:38说有点晕，坐起来就好了，确定没有不舒服，后脑涨，学校里也是
23:07尿尿准备睡，没有不舒服，也没前两天晕，自己觉得奇怪`,hh:[15,19,20,21],s4:20},"2025-12-18":{detail:`没麻，6.43，23.28到6.20，打断5，9
730问醒来后有没有，说不知道（不是说没有），醒的比较早，但是手表显示最后时间也是睡的，打断很少
08:29没有
09:11橡胶0.5分，短，看工作人员捡树叶，冲出来吓了跳
09:51没前两天晕
10:19梦境，说是怕秒杀下架，短的，5秒，没有其他感觉
10:25梦境，忘记强度，自己说那说明不强
10:42手掌涨烫
10:50梦境，30秒，不重，自己说5秒但物理上想吐
12:30问，回答2次5秒的
12:40梦境，5秒，在看教程
12:48手烫，小手臂加手掌
13.00还烫，03，手掌好了一半，11，没好，24问好了，说问了又涨了
13:58没有
14:43熟悉5秒，看到小红书上自己的问诊
14:46梦境，想吐
14:59手烫，11好了
16:03有弱的，说可能日常就这样，3次
16:45梦境，5分，想吐，自己觉得15秒好的
17:17橡胶，3分，说出发了，时间应该是短的
17:48到家，问，说忘记了，问有没有重的，说应该没有
17:49熟悉感，49分55秒，然后说熟中熟50分34说好
18:522，3次轻的，在烧饭给我吃
19:25不舒服，吃饭，丸子含嘴里停住了，40到55，既视感
20:15没有
20:49没有
21:49没有，洗好澡了
22:54说不知道，确定没重的`,hh:[11,15,16,17,18,19],s4:17},"2025-12-19":{detail:`没麻，6.35，23.35到8.10，5.23到6.57醒着，打断13，2.00，监控看，没明显的问题，没起床，问本人，说确实醒了一段时间，大概小小时
09:11有点晕，从起床到现在有2，3次轻的，今天爆胎，等我改点东西一起去补胎
09:44没有，但是晕，准备去补胎
11:05 修完车子，到单位了，问情况说忘记，问有没有严重的，没有
12:26梦境，想吐，20秒，不轻，不重，准备睡觉
13:16睡觉起来，没不舒服，觉得没啥睡过，没有过，但说上次到现在2次，我说上次是睡觉前，那就说没有
13:50 梦境，拉屎，觉得奶茶难吃了，不知道算不算橡胶味，估计20秒
16:25做了会小红书题目，应该没重的，说“被压下”
16:36梦境，36分15，37说偏重，48说好了
17:07在考虑要不要带电脑回来，有点橡胶，20秒
17:59到家，路上有重的，可能有橡胶的，在修轮胎的附近，心情没差
18:37熟悉感，10秒好了，橡胶，打完字好了，偏轻
19:31熟悉感，橡胶，在弄comfyui  
20:39被压下去了
22:19熟悉，5到10秒，之前压下去2次`,hh:[12,14,16,17,18,19],s4:7},"2025-12-20":{detail:`没麻，7.25，23.27到7.01，打断4，9
08:16熟悉和橡胶，10秒
09:01想吐，想拉屎，梦境，买肯德基，扔垃圾的时候，估计有30秒，属于“不轻”
10:36应该没有
11:55一次轻的
13:12熟悉感，橡胶不重，30秒，不轻
13:17又有点熟悉加梦境，没刚才严重，15秒，这次有点想吐
15:20小哈看着电视，灯开着，睡觉，后来没睡
16:24梦境，没有具体的熟悉感，4分，想吐和拉屎，橡胶0.1，睡觉起来到现在最多2次轻的
16:46不舒服，橡胶，30秒，橡胶味重的，整体不轻
17:09有一下子的熟悉感
18:30熟悉，橡胶，20秒
19:10 有梦境，拉屎，橡胶，在谋划跟李说换位子，20还没好，40了，说“一点都没好”，12分13好的，回忆说有熟悉感，自己评价比较重，6，7分
19:57看脱口秀的时候有熟悉感，橡胶，10秒
20:43洗澡出来，没有，应该没有，没有重的
21:09应该没有
22:13没有`,hh:[9,13,14,15,16,17],s4:7},"2025-12-21":{detail:`没麻，7.36，23.41到7.42，打断10，25，前段打断多
08:55拉屎的时候，橡胶重，难过程度高的，整体难受，因为梦境就会难受，大概10多秒，有熟悉梦境，起床到现在1次轻的
09:18出发买肯德基，走路，有点晕
11:16没有
13:16醒了，没啥不舒服，11.30睡着的
14:37没有
15:09想吐，橡胶，拉屎，一点点熟悉，10分10秒好了，3，4分
16:13 吐 拉屎 4 20s，程度差不多
17:34梦境，橡胶，30秒，差不多
18:18橡胶，梦境，拉屎，重口烫，19分50好，比较重
20:34没有不舒服
21:06有，07分38好，梦境橡胶，刚才我出去弄泡饭也有一次，没这次重
21:21看到自己左脚伤口，忘记了，提醒后也说不记得
21:58没有
23:34没有`,hh:[9,15,16,17,18,21],s3:1,s4:1},"2025-12-22":{detail:`早上起来觉得有人，类似鬼压床，中等偏轻的程度，6.38，23.53到6.51，打断8，20
07:41近5分钟有过一次橡胶，10秒
07:54橡胶，看时间的，30秒出头，中等
08:43 没有
09:18 路上有橡胶和梦境, 5分, 10秒, 1次.
09:57 晕, 吃药的关系(本人说)
11:06 没有
12:47没有
13:27梦境，橡胶，28分30秒说好了，自己说觉得半分钟有的，比较重的
14:55 梦境，橡胶重，55分30到56分18，梦境也偏重
17:56到家了，路上可能有2次，1次重，心情比较差，想一个人去洗头，不想吃东西，只聊卢广仲开心点
19:21梦境，21分15秒，45秒结束，想吐拉屎，一点橡胶不重
19:41压住了
20:12不舒服，15年开始，40秒肚子叫，13，40结束，自己觉得梦境“很重”
21:52没有，22.11没有
22:135秒，压下去了
23:22没有`,hh:[8,13,15,18,19,20],s4:4},"2025-12-23":{detail:`没麻，6.59，23.36到7.12，打断11，37
08:221次梦境，在大便，5到10秒，另外不确定是不是有一次
09:19 橡胶, 短的, 路上没有
11:56 好像没有
14:23手烫，30问好了，是因为我发了言承旭林依晨
14:36 梦境, 单梦境30秒, 严重程度”一般”
15:01 梦境, 拉屎, 20秒, 没橡胶
17:02 没
17:51在比亚迪梦境了，重的，时间好像30秒
18:14熟悉感重，5分钟前，大概20秒，我在烧菜
20:59梦境，5秒，中下，之前压了几次
21:31洗好澡，大概一次轻的
22:01没有
23:04和小哈睡觉的时候有熟悉感，中等，5秒`,hh:[14,15,16],s4:7},"2025-12-24":{detail:`没麻，7.07，23.37到7.09，打断8，25
08:41起来到现在没有，轻的也没有
09:27路上有过轻微的，想到漂亮奶奶，0.5秒
12:24都压住了
12:27都被压住了
15:49熟悉，有点橡胶，7到53，熟悉重的，觉得ps做过
18:10路上有过熟悉，现在都忘记了
19:13今天说圈发小斌照片让人家怎么回，之前也有过
20:18说“一直想吐”，没别的感觉，不知道是不是吃多了，到吃药，一直不说话，反复确认没其他异常感受
20:50 有熟悉感，30秒
22:28没有，呕吐应该好了，可能是吃多了`,hh:[15,18,21],s3:1,s4:3},"2025-12-25":{detail:`睡前麻了1次，左半边麻，时间还行，没到眼睛，但感觉快到了，就失重，是以前那种
7.09，23.29到7.03，打断10，25
08:39没有
09:19 (微信报告)熟悉, 好强, 觉得梦, 楼梯按了9, 后来问, 路上可能没有
12:23没有
15:41问情况，说很少
17.08 熟悉，巨熟悉，熟中熟，“感觉上次的情况也在熟”，40秒，问有没有别的，问想吐算吗，因为一直有
17:57路上压住的0.5
19:09熟悉感，940好的，自己觉得有一分钟，从监控看是850开始
22:13洗澡回来后看视频笑得缺氧熟悉了，大概20秒`,hh:[9,17,19],s4:3},"2025-12-26":{detail:`想了会说应该没麻，7.11，23.31到7,22，打断6，40，1.06到1.25醒着但监控看起来还好，没睁眼
07:58橡胶，先熟悉，说的时候已经好了，一共30秒
09:17路上有不舒服，偏轻，15秒，具体症状忘记了，这3天（前天昨天今天）路上都非常冷
16:03到学校以后没
18:12路上压住的
18:24中等，熟悉，现在补充到家后是有的，不知道为什么刚才没说
21:54洗澡回来，有熟悉和梦境，30秒，问到家到现在，应该是没`,hh:[8,18,22],s4:0},"2025-12-27":{coner:["蓝十字/朱","说2个月复查了"],detail:`没麻，6.20，23.47到7.11，打断10，1.04，晚上小孩不舒服，大家都醒过
08:56起床到现在2次熟悉，20秒
09:01随便问了车子贴纸什么时候贴的，我说了宝山日月光，说不知道，说了点场景，又说记得
10:16路上只有小的，2，3次
11:04吃好全家，准备洗头，到现在没有
12:16 洗好头，没有，轻的也没有
14:23大概3次以下被压下去的
15:00左手烫，到小手臂，33出诊的时候问好了，说比较早就好了
16:22聊天到，心情打分6，最近手烫过一次
17:22主动报告2次，路上，出来以后，中等，有一次有橡胶
17:44到家了没有
1907 纯熟悉感20秒
20:50玩手机的时候熟悉过一次，补充，是1940自己手机记录的
22:37去医院和洗澡各1次`,hh:[8,9,17,21,22],s4:7},"2025-12-28":{detail:`没麻，7.05，23.22到7.23，打断10，56，5.09到5.49醒着，看录像确实是小哈搞和擦鼻涕之类的大换位
08:09梦境，然后橡胶，然后熟悉，40秒，之前还有一次20秒的
10:14没有，小的应该也没
12:26睡醒了，没有
12:55可能有过一次轻的熟悉
13:48橡胶，是想到马骁同学，感受到难过，估计半分钟，正常橡胶程度，想吐
15:13橡胶，然后想拉屎，30秒，自己感觉40秒
15:25有点想吐，在说f4，拉屎，没橡胶，0.5秒就开始减少的
17:40转场从茶室去酒店吃饭，没有
19:48吃完饭，有一次很强的熟悉，还有一次中等
20:11橡胶非常厉害，熟悉，1分50秒
21:02很轻的，在路上
21:42没有
22:20洗好澡，没不舒服
23:06没有不舒服`,hh:[8,14,15,18,19,20],s4:3},"2025-12-29":{detail:`没麻，7.21，23.42到7.24，打断6，21
08:34起床到现在没有
09:44没有，但是头晕
09:58主动说如果晚上7分，现在是5分晕
10:41主动说头好点了
11:26d 好了 估计30s 想拉屎 吐
13:33 梦境, 橡胶轻, 吐, 自己说20秒, 但是34分30秒好的, 自己说程度中
16:32 纯橡胶, 但是重, 自己说估计30秒. 后来补充说是”不是很轻”
17:57锦秋路不舒服，重的，到家在楼梯间没进来，自己说2，3分钟我找他进来
18:37聊到，长期感觉像游泳池抢到水起来以后的感觉，左边单边，而且像连着左边脑子，追问，不是长期的，是发作性的，单位里也有过，56好了
19:10梦境，很重，熟悉，30秒开始，熟悉重，20好的，持续50秒，这次是“一下子好的”，自己觉得3，4十秒
19:58呛水，我给小孩涂药膏发火，影响大家情绪，下次发作8.28还没好
20:28梦境，从盒马刚回来，很厉害，熟悉厉害，橡胶也重，1分钟好，一下子好的
21:10梦境，5，6分，30秒，我在跟小孩搞滴眼药水
21:53拉屎洗澡的时候有一次不那么重的
22:16梦境，想吐，背部正当中，说不清楚，1分钟好，自己觉得5，6分，自己觉得3，4十秒`,hh:[11,13,16,18,19,20,21,22],s3:1,s4:3},"2025-12-30":{detail:`早上起来麻的，晚上小孩非常搞，6.49，23.26到7.19，到6.28后打断厉害，可能是这里麻醒的，9，1.04
07:30梦境30秒，程度一般
08:45偏轻的一次
09:22问，说忘记，追问说猜一次中等的，还说2个事情一起弄的时候心跳快，心烦，想把心脏挖出来
12:05橡胶梦境，上午2，3次，这次重，40秒后说熟悉，又说梦境，持续1分5秒
13:52有1到2次光想吐，可能是被压
13:53想吐，梦境，想吐更让人难受，55秒，马上就好的那种
16:30 主动说有2次被压下的, 但是是想吐为主, 比较难受的
16:41 聊不想回家, 奶奶也不愿意管小孩, 有5秒梦境想吐, 好了, 42分25又有了, 5分以下, 有点橡胶, 43分头好了
17:09 梦境, 橡胶, 23秒开始, 51秒说算重的, 之前在说卢广仲的周边快递给自己又想用券在搞, 10分23秒 说熟悉, 59, 说”都有,  没完全好”, 11秒说好了.
21:22熟悉，橡胶，估计，40秒，回家以后第五次，前几次没这么强，都是轻或中等的，路上有没有忘记了，因为我看心情不好没主动问
21:44想吐有一段时间了，没有别的感觉
22:34之后有过一次中等的
22:4510秒`,hh:[7,9,12,14,16,17,21,22],s4:13},"2025-12-31":{detail:`没麻，7.14，23.21到6.47，6，12
08:272次轻的
09:06路上可能轻的1次，我在小哈幼儿园
09:58鼻子呛水的难过，11.10呛水还没好
11:50又呛水
12:25梦境，吐，估计20秒，25分15秒又来了，55好，是今天最厉害的
17:39橡胶40秒橡胶，问了中间有一次“中等”的，下午睡了2小时(中午放学了)
18:27不舒服，橡胶不重，想吐梦境，35秒
19:51说到小熊有不舒服压下去，在说其他同事假期开心
20:36梦境过了，看起来心情差，只记得梦境，猜30秒
21:32梦境30
22:05洗澡的时候有中偏轻
睡前有轻的`,hh:[12,17,18,20,21],s4:7},"2026-01-01":{detail:`没麻，5.18，00.59到6.58，打断10，41
在家不肯出门，中午和小哈吵架后睡觉，没吃饭，5点小哈闯进房间，没麻，大概是1.30睡的
18点问，重的5次以上以下，用手指以上，10次以上以下，摇头，不说话，各种说话不理，我只能尽量克制自己情绪，没法继续问了
19:23“觉得心在跳”，盒马买了东西，在吃饭，才慢慢说话
19:43问起床到现在，都不重
19:59梦境，45秒开始，15不到好
22:37小孩不肯刷牙，很生气，出房间了
23:34后面有2次中等的`,hh:[8,10,12,14,16,18,20,23],s4:2},"2026-01-02":{memo:"出门玩好像会好?",detail:`没麻，起床坐着也不爱说话，问不舒服也没，不肯躺下不肯出门，6.23，00.31到7.16，打断9，22
10:06 5，6次轻的，最多一次中等
13:363次轻的
14:57在美兰湖滑滑梯，路上没有
17:02没有重的，但是补充出门前找手机的时候有重的熟悉，30秒左右
17:31到家，路上没有
22:07应该没重的`,hh:[17],s3:1,s4:10},"2026-01-03":{detail:`不知道麻没麻，说忘了，后来追问，不是特别厉害的麻，没有人，可能是晚上太兴奋，看造句，6.18，23.58到7.37，打断12，1.22，0.22到1.47醒着，看监控确实动来动去，但眼闭着，可能是热了开背子
08:47醒来到现在3，4次轻的，5秒级别的
11:14没有重的，猜3次
16:10到现在5次以下轻的
18:48熟悉感，觉得吃过，烧饭的时候也有过一次轻的，出去加油，滑滑梯也有轻的
19:30问上次去看病的情况，能答对大多数，但是感觉比正常人差
21:35没有不舒服`,hh:[19],s4:12},"2026-01-04":{detail:`没麻，7.33，23.06到7.19，打断11，40
09:31 问, 路上有一次, 本来记得在哪, 程度中等, 猜10秒, 现在吃药的晕
09:41 我说到duik, 他说”觉得会想起来是什么”, 我觉得不正常
10:24 觉得自己回忆上周工作内容的事, 自己觉得是不正常的
今天肚子疼, 不想说话, 没多问
18:55 我弄饭到一半进房间问，5分钟前有很重的，重的最多今天再有一次，情况是熟悉，时间是40秒
20:36有过1次短的熟悉，没有其他感觉
21:33洗澡回来，没有
23:09有一次，轻的, 晚上很兴奋, 没有想睡, 但药是吃的, 但吃完就躺下了, 不确定原因`,hh:[18],s4:3},"2026-01-05":{detail:`没麻，睡得不好，我也睡得不好，不知道是不是因为把灯放睡觉的一头，有蓝色的光
6.08，23.58到7.43，打断10，1.37，大段醒着00.38到1.34，这段时间我是正常的，监控看眼睛闭着人动
09:25没有，再早点问有过轻的
20:06熟悉，30秒，问情况，说有过3次没比这次轻的“比较重的”，路上也有中等的，今天一直说肚子疼，不让说话，然后问，回来以后应该是第一次
21:09肚子疼，没梦境
22:25没有
22:39梦境，想吐，20秒
23:27今天吃药正常晕了，昨天没晕`,hh:[20],s4:1},"2026-01-06":{detail:`没麻，自己觉得睡的比昨天好，7.07，23.40到7.18，打断12，31
09:46 在看pocky的事, 有难过情绪有流泪, 重的2次, 轻的4, 5次. 重的是路上一次, 还有一次说不知道. 重的是20秒
12:40没有
17:09估计有3次轻的
18:03问路上有没有不舒服，说肯定有的，追问轻重拒绝回答，肚子疼, 晚上追问, 说有是肯定有的, 中等吧, 10秒到20秒的
18:10熟悉，真实的熟悉，15秒后问已经没了
20:35纯想吐，拉屎，没有其他，在说外婆，估计30，但是没有任何其他感觉，我生气了，问了都说忘记了，口齿不清，到39说一直想吐的
20:43熟悉感，50秒
22:00除了肚子没不舒服
23:01左边耳朵烫，还有过手烫，有过2次轻的，2秒`,hh:[8,9,18,20,21],s4:11},"2026-01-07":{detail:`没麻，7.11，23.23到7.11，打断9，37
11:59早上和上午都没
12:50在鲜芋仙回忆前两天的滑滑梯的事 呕吐被压了 但记忆有点串
16:54最多3次，5秒内
18:13路上有重的熟悉2次近1分钟不到
19:57忘记，肯定没重
22:23没有重的`,hh:[16,17],s4:4},"2026-01-08":{detail:`没麻，8.11，23.14到7.36，打断6，11
09:29只有短的
13:32没有重，少
17:00 5次轻的，5秒左右
17:15 碰头的时候，搞错去车库找了，有过一次强烈的熟悉感，20秒，之前在单位里，也有3次轻一些的，程度是中等
18:03走路去地铁站，路上说到小熊，压下去了
19:53梦境，中等，25秒
21:12没有
22:01应该没有
22:46手烫，到手臂，今天一共2，3次，时间比较久，超过10分钟`,hh:[17,18],s4:14},"2026-01-09":{detail:`没麻，7.4，23.45到7.10，打断5，21
09:13路上一次中等，早上没
09:48没不舒服，刚才在陪我修车，现在准备上去
12:42吃完饭后有一次中等偏轻的，上午没重的
12:46聊到上次钱靖送的护手霜，忘记是在隐溪碰头的了聊到52分，还是想不出，记得回来是和钱到彭浦新村，但是想不到怎么回去的了。我说了以后，还过得去，能知道点
13:12忘记头哪里剪的，我说了以后，还说抽血是地下，上次还记得2楼
13:18说到上次去南京大排档，也忘记了，让他有不舒服马上说，说店里也有过中等偏轻的
13:23不记得2号去美兰湖滑滑梯，和鲜芋仙，而且是说了也不记得，我情绪有点失控，他也偏向回去，并且自己上楼，后来跟我说，是压力大了，我逼太紧，太凶了，所以后来只摇头不说话了，看了发作记录，上次是1月3号问的，效果也不好
15:08手烫，到手臂，很烫，麻麻的，22问好了
15:52轻的，主动报告，5秒内，因为中午我发火了，所以主动报告
16:20梦境，5秒
17:12说到小熊，有不明显的不舒服，表现是恶心，物理想吐，觉得有东西堵的，描述不清
17:51路上没有
17:57有5，6秒的，说不清的，梦境加呕吐，生理上更难过，又说路上也有过一次
19:58没有
20:36手臂烫，1分钟
20:43梦境，20秒，中等
20:45梦境，纯梦境没想吐，梦中梦，1分钟不到
20:49烫，很烫，53还没好
21:17整个手刺，怀疑是压着，但18还没好
21:22有被压下去的，然后对我说，有打嗝，就是被压下去的，如果是单纯打嗝，会说
22:43都是压下去的，记一下924这个日子`,hh:[17,20,21],s4:11},"2026-01-10":{detail:`不麻，7.45，23.34到7.27，打断3，8说
09:20压住的1，2次
11:03应该没有
12:36被压下去
14:20没有，准备去远香湖
15:40三次被压住，1秒，玩好了，去宝龙
16:01熟悉了10秒，路过宝龙的永辉超市，玩好准备回
16:19压住了
16:44没有不舒服，到家了
17:131，2秒
17:35压下去
18:06熟悉，自己估计20秒
19:11一次轻的
19:52压下去了
20:15压住了
20:17熟悉，10秒，没有好40秒有橡胶了，然后好了，刚盒马买了橘子和鸡翅回来，天气是冷的，不知道是不是这个关系
21:39没有不舒服
22:23压下去了
22:50手烫`,hh:[18,20],s4:15},"2026-01-11":{detail:`思考了会，觉得百分之90没有，说“健康的梦”里麻的，睡眠打分92，8小时，23.22到7.43，打断8，21，我的判断2.26的时候发声音和动的时候手表显示没醒
10:24没有重的，忘记了，早上和小哈吵架
12:07我跟奶奶小哈出去，他睡觉，20分回微信了，大概睡到1点
14:02睡觉的时候有2次，自己说应该不重，因为在睡觉，所以不知道了
15:59说是麻醒了，其实是小发，应该是愣神了，我以为要大发，视频15.37睡着，直到55，人都没动，55中不舒服了，56坐起来，56.30躺下去，57.15开始咳嗽，也就是5630到5715算在发作
18:05聊到昨天和上周四一些事，我觉得可以
19:33 只有小的，细问程度，小的是5秒内的，大多数是1，2秒的，最近一小时就1次，但是平均15分到30分一次，还是5分钟到2小时
21:47洗好澡，说2次压住了`,s3:1,hh:[],s4:10},"2026-01-12":{detail:`没麻，7.26，23.24到7.12，打断8，22
09:06出门前有压住的，问5次以上还是以下，以下
09:23 到了以后说比平常晕, 像晚上的一样, 路上没不舒服
10:39 聊到外婆有点恶心, 但是没有
12:16问了，说好像没啥不舒服
12:21有2秒
14:27 接了斑马电话, 看到妹子带耳机, 联想到小熊和妹子孤立自己, 心悸感, 没有其他
17:06手烫之类的，压住3，4次，没重的
17:5651微信说不想上楼，楼下坐一会，我在烧猪蹄刚看到，问有没有不舒服，说不知道，问有没有重的，没看手机，我6点下楼想看他下，他跟我一起上楼了
18:05有不舒服，问了没反应，过了会好了，问能不能听到，点头，然后问话不理，然后说出去玩一会，直接出门了，我跟着下一场电梯下去，看他坐车子上，然后一个人去加油了，23到加油站，路口逆行啥的折腾到27，回来的时候，35到了鄱阳湖路，不知道和不舒服有没有关系，最后在瑞丽江路转弯，40到家，我45下楼，碰到
20:48我说明天一起上学吧，他说不要，问回来以后有不舒服吗，说忘记，问是不是没重的，说忘记，问心情有没有好一点，说有好一点`,hh:[18],s4:9},"2026-01-13":{memo:"抑郁",detail:`没麻，7.06，23.21到6.27，打断5，10，问是不是6点半起来的，说不知道，我状态比他还差，心情被他影响了
11:40 一上午没说话，29分问情况，39分回答路上好像有，忘记了。我情绪也不好，我表示他不想说，我也不想问了，14.46说圈圈约玩，但是不想去，自己评价是自己这两天状态社交不动，然后说想8点半回家，我说可以的，但最好报告
16:3429分跟我说有八卦，之前都没说话，现在告诉我，这个时候有过重的梦境，持续1分钟，中间有断掉过
16:55说没地方去，是回复我10分钟前的微信，回复慢，不想说话
18:15还在单位，已经在车棚坐了一小时了，每次看都难过，但忍住不发微信打扰，奶奶都问我怎么不去接，我说还在单位，奶奶让我跟他一起上班去，上次抑郁发作是生日左右18.26主动说慢慢骑，并说不要给他准备吃的，立马又说不想回了，我说愿意过来，他说别，第一他不需要我，第二要跟奶奶撇清关系，结合我现在的情绪和7.31的微博，可能也在讨厌我了。这是我之前一直对他说的，我最难过的场景。
18:34报告梦境，橡胶，想吐，想拉屎，35说好了，自己说1到2分钟，跟我报告我的计算是1分钟，然后又说想拉屎，不行，不看手机了，就不回了，我不知道对他与对小孩，这样自我感动式的“尊重”是不是错的
18:45说刚刚半边蹆有点热 不知道麻吗，说35的时候说“不能骑车”，现在觉得好了，我问刚才觉得不能骑车是腿麻还是发作导致的感觉，回答不知道，忘记了，可能是刚才梦境重，后来车子坏了，我去把人接回来，后面还是一起去，回来以后一直打嗝，太阳穴紧，头颈酸`,hh:[16,18,19],s4:0},"2026-01-14":{memo:"抑郁后期, 发作比较多",detail:`没麻，7.09，23.52到7.12，打断2，11
08:24说前两天拉屎少，今天正常了，我觉得可能和发作有关系，导致肠胃蠕动慢
09:22早上到现在有5，6次中等的，要吐的那种，但我感觉他今天状态还可以了，比昨天早上好很多
10:24聊到上周木桶饭，只记得木桶饭，具体忘记了，也忘记我车坏了哪里，在猜第二天是骑他车去的，我感觉是这次发作忘记的，但是麦当劳碰到流川枫记得，所以可能是在不在意导致的
12:01上午好像没，打嗝还是有，问上次来木桶饭吃啥，记得的
13:16顶多1，2次轻的
16:44主动报告估计下午有6-7次以上中等的，熟悉，吐，其实3点半到4点20跟我在一起，然后问中午，说猜5次，中午其实说1，2次。问中等的程度，说10秒左右，或者没有，5秒的
17:58没有特别重的
19:02梦境，10秒，今天晚饭食欲正常
19:31有2到3秒的，我估计10分钟，现在测一下
19:40手烫，到手臂，说回来很多次，路上也很多次
20:02被压，只想吐，0.5秒
20:06聊到昨天这个时候还没到家，想不起来昨天是在单位下面，后来车子坏了我跟他一起回，07想起来了
20:40梦境，蛮重的，有橡胶，半分钟
21:44洗澡回来，有2次，一次3秒内，一次3秒以上，10秒以下`,hh:[21],s4:22},"2026-01-15":{detail:`没麻，6.33，23.37到7.05，打断7，55，0.13到1.06醒着
08:37有一次重的，不是很重，但是感觉明显，然后现在吃着芝麻觉得味道难闻
10:54橡胶，想跟圈吐槽外婆，5秒
14:27忘记了，问了没重的
16:04手烫，说到外婆外公，说刚才看视频看到都想吐
16:34梦境，重，橡胶，1分钟，自己说30秒
18:28路上有一次厉害的，梦境，橡胶，和上一次差不多，到家后在楼下呆了5分多钟
19:15梦境，橡胶，拉屎，一开始在说葱油味道难闻，20秒
19:48聊到生气会心悸，长期太阳穴有点小紧
20:09橡胶，梦境，30秒，一下子消失了`,hh:[8,16,18,15,20],s4:5},"2026-01-16":{detail:`没麻，7.40，22,57到6.47，打断4，10
12:02到学校后有7，8次轻到中的，2秒到10秒的，早上路上忘记了，没有10秒以上的
15:51 梦境，橡胶，在回忆被数学老师打，25秒，一下子好的，在市北高新兜
18:17聊到外公外婆，有点心悸和呕吐
19:39不舒服，30秒，重的，说不清具体问题，就是物理上很难过
22:19 洗好澡回来有一次，是我睡着醒了问的，重的，是橡胶加熟悉加梦境
23:12 问2个人去约圈圈，说没精力`,s3:1,hh:[16,18,19,22],s4:8},"2026-01-17":{detail:`醒来失重，旁边有人，翻身到不同方向，不同方向就有，没有麻，晚上没有，手表没带
09:561次5秒，早上到现在
15:08没重的，今天在各种理东西
18:24装加热手把的时候有次重的，梦境，30秒，中等和轻的的最多3次，中等是10，轻的是1
19:03在跟小哈吵架，熟悉感1分钟
19:06又有梦境了，说算上刚刚这次一共有4次，2次很重的
19:22到现在还没
19:39梦境，橡胶，自己说40秒
20:09没有
21:15没有
21:57没有
22:44左手臂一直烫，5分钟了`,hh:[18,19,39],s4:8},"2026-01-18":{detail:`没麻，6.24，0.03到7.11，6.36尿尿后就没睡，打断7，46
09:15起床到现在2次3秒
12:071，2次轻的
13:121次不重的
16:073次不重，10以内
17:02纯梦境，30秒，熟悉
17:21熟悉感，一点点吐，一点点点橡胶，40秒，自己觉得30秒
18:25没有
20:21没有重的
21:331，2次中等`,hh:[17,18],s4:10},"2026-01-19":{detail:`没麻，6.46，23.50到7.15，打断6，39，是4.30到5点我和小哈把他搞醒了
09:30没有重的，有过不舒服
13:10到现在2次轻的
17:00下午4到5次轻的
18:11熟悉，重的，想吐，想拉屎，自己说30秒，路上也有重的，比这次还久，好了一会又开始的
19:25梦境，在吃饭，估计30秒多
21:25 梦境，熟悉，1分钟，重
21:58没有重的`,hh:[18,19,21],s4:8},"2026-01-20":{memo:"有1分50秒的",detail:`其实睡得早的，但是晚上畜生老头在外面吵，早上730他还没醒，按以往情况判断是晚上没睡好
8点问，没麻，也不知道老头发神经，但是肯定是影响到的，8.36，22.56到7,52，打断9，20
09:38早上到现在应该没有，但不确定，今天下雪啦
12:19没有重的
16:40主动报告下午，3到5次，2秒的
18:38熟悉，在吃饭，30秒后说有橡胶，1分10秒我问情况，回答“非常不舒服，没办法描述的”，嘴巴里的东西不吃了，最后1分50秒好的，自己说是“1分钟有的吧”，然后问回家路上，2次轻的
21:44没有不舒服，我刚睡醒
22:40没有不舒服`,hh:[19],s4:5},"2026-01-21":{detail:`没麻，6.35，0.31到7.17，打断6，11
09:27早上到现在没重的，现在头晕
13:11没重的
15:55被压下去，连续2次，说下午应该5次了，时间是3秒的
19:45刚问，回家路上有重的，梦境加熟悉，估计1分钟
22:12有过中等的，10秒的`,hh:[20],s4:6},"2026-01-22":{detail:`没麻，7.24，23.14到7.15，打断9，37
08:39起来到现在1次10秒
09:15路上有梦境，而且是真实的梦境，是有内容的，但现在忘记了，说正常人也有，但是只有2秒
15:10熟悉，自己觉得30秒, 我觉得是超过的, 但不到1分钟, 在做小红书题目，熟悉加梦境，觉得题目做过，觉得上次也做的时候梦境，之前比较近有2次5秒，回忆早上到现在猜2次
18:26路上有重的，说30到40秒，但是回家情绪正常的
22:02到家以后大便的时候有一次梦境加橡胶，30秒的，轻的5次以下，后看到自己微信记录是21.13，10秒，也可能后来又有`,hh:[15,18,22],s4:11},"2026-01-23":{memo:"2分15秒, 后面一天也有点严重",detail:`没麻，但是起来房子老是转，没有感觉的异常，6.45，23.35到7.38，打断11，1.18，晚上小哈是搞的
08:42可能有一次轻的
10:22 路上没有, 头晕也好了
11:24左耳后面，后脑勺，烫麻，34问好了
17:16下午应该没，但是现在脚麻，但又觉得普通的
18:19说路上有非常重的，然后不愿意说，说1分钟的，本来说复习饿的，现在不肯吃饭，但是愿意刷手机，后来说有2次没那么重的
20:08鼻子呛水1小时了，25还没好
20:41熟悉，30秒后橡胶，2分15秒，自己说1分钟，跟路上一样。 后补充说这2次都有鸡皮疙瘩的感觉
21:58洗澡出来没有
23:07没有
01:37梦话，能对话，但是胡话`,s3:1,hh:[18,21],s4:6},"2026-01-24":{detail:`醒来的时候麻“一直是这种麻，算有麻，我也不知道是不是”，7,21，23.47到7.25，打断7，17
08:35起来以后大概2次轻的
13:02上午没有
15:26梦境，20秒，说手已经烫了10分钟，下午轻的3次以内
16:39睡觉小发了，在沙发上，就是那种有点咽口水之类的，我问了能不能说话，手势表示可以，问知不知道星期几，没反应，继续让他睡了，看回放，我把镜头动过来以后，右手拿着眼镜左手捂着左脸，后来回忆比早上的重，后来睡到6点不到
19:30问从起床到现在，说不能回忆，回忆又想吐了，硬问有没重的，说中等的
20:15有中等的，因为嘴里突然念着药是不是不能再加了
21:25最多只有轻的
22:05没有
04:02被不肯尿尿的小孩叫醒，6点多又自己起床尿尿`,s3:1,hh:[15],s4:9},"2026-01-25":{detail:`问半天硬说不知道，说这两天太多了搞不清，最后自己说没麻，6.45，23.54到7.44，6.12到7.05醒着，打断6，1.05，其他点打断很少
08:44尿尿的时候“不是特别重”，20秒的，追问下这次是最重的
09:09忘记了12月26三大to签
10:01没有重的，没中的，然后我拖地板回来睡着了，估计11点睡的，13.56坐起来，59又躺下去，40起床，没有不舒服，状态比较好
16:50猜1，2次不重的，一共2小时，去买了85度和刘行外卖
18:11聊到上次奶奶菩萨退钱的事，有点连不起来，后来看了日子是10.21
18:15没有
19:21梦境，橡胶，重的，自己说40，50秒
22:17没有，轻的也没有`,hh:[19],s4:3},"2026-01-26":{detail:`没麻，晚上小哈闹过2次，6.06，0.12到7.34，打断11，1.16，反复问，说一直做梦，暂时算作没麻吧
09:13没有重的，3次以下
10:03路上没有
13.32 没重的，3次以下轻的
17:18没有
18:07没有不舒服，但是摔跤了
19:41梦境加熟悉，自己觉得50秒，没想吐
21:52应该没重的
22:25跟小哈鼠标牙，“应该没有”`,hh:[19],s4:6},"2026-01-27":{detail:`没麻，7.17，23.24到7.07，打断9，26
09:20早上路上没重的
12:09没不舒服，上午跟妹子说话
17:09“可能是很轻的，忘记了，应该没重“
18:19路上没有，到家20分钟梦境加熟悉了，大概30秒
21:01到现在都压住的，1，2秒的
22:05没有不舒服`,s3:1,hh:[18],s4:3},"2026-01-28":{detail:`半夜麻，程度忘记了，7.34，23.17到7.16，打断10，25
09:18没有重的
12:04没有重的，轻的频率一刻钟一次，1150到1222确认没有，到1300有一次。感觉频率没这么高，但是是有时候特别高
16:05没重的，都是轻的，5次以下
17:34大概5分钟前，熟悉，想吐，大概半分钟，今天我和他一起上班，请了调休2小时，和小哈一起买了85度吃，再到尚北路玩扭扭车的路上
18:30有一次中等的，补充说，回家的时候，小哈敲门，有很重的，1分钟，所以才在门口叫要去85度，总结这是第一次，到现在有2，3次中的
19:11到家拖完地板问，没有重和中的
20:03熟悉，20秒后说，应该有点重的，因为想拉屎，橡胶应该被压下去，40秒，自己觉得半分钟
20:44没有，看了会程又青，准备洗澡
21:29没有，刚洗好澡
22:23算没有
23:18睡前最后的尿尿，没有不舒服
最后睡觉的时候捏了下我手，问，眼睛跳`,s3:1,hh:[15,18,20],s4:12},"2026-01-29":{detail:`早上问，说以为昨天的麻是半夜的，讨论了半天，总结1次或者2次眼睛跳，确认在麻里面算轻的，睡觉7小时，23.32到6.57，打断8，25
08:45都没有，轻的也没
09:53没有不舒服，到了学校走了一圈，我准备去田林路和缪哥吃饭
12:08说“乍一想没有”
14:15在缪哥办公室坐了会，出来，问，说手烫了2次
16:10手烫，“可能没有”其他不舒服
16:45梦境，在看和外公聊天记录，觉得自己情绪激动的，时间很短，只是告诉我而已
17:34在日月光，今天到现在都没重的
18:09梦境，橡胶，想吐，在日月光吃肯德基，说外公，小熊的事，1分钟，自己也觉得1分钟，很重的，重到会起鸡皮疙瘩，之前几次也是，我没记
18:51到家了，没有
19:13梦境了1，2秒，说前进啥的
19:55梦境，在看和外公聊天记录，结婚吃饭之类的，20秒，是慢慢减弱的
20:48熟悉10秒，好了会又5秒
22:00洗澡回来没有`,hh:[18,20],s4:7},"2026-01-30":{coner:["华山/朱",""],detail:`没麻，昨天开始肚子，但还没开始疼，7.34，23.17到7.30，打断7，39
09:09起床到现在1次轻的，1，2秒的
10:19路上没有，下雨，到华山医院了，原来挂号截止是1030
10:58出医院，可能没有
12:38没有超过1秒的，在蟠龙天地，买了奥克斯，在奈雪
14:34没有，或者只有轻的，在新商场吃好了肥猫佬
16:39到家一会了，只有轻的，接了小哈到家的
19:30有2，3次偏轻的，5秒的，在看程又青
20:05熟悉，大概20秒，在吃饭，喂了小哈吃饭
21:39准备洗澡大概没有
22:38洗澡的时候1次或2次轻的
`,hh:[19],s4:8},"2026-01-31":{detail:`没麻，7.07，23.30到7.31，打断13，54，昨天让小哈挨着她睡了，所以睡得不好，也可能是肚子疼
08:23梦境10秒，起床后的第二次，第一次是2秒
09:38应该没有
11:36大概没有
12:26 两分钟内有3次1，2秒的
今天下午肚子很疼，至少5分
17:45问有没有重的，说没
19:00我在外面烧饭的时候有重的梦境，40秒，大概15分钟前
20:43没事
22:34洗澡回来，没有，看上去肚子也好了
23:38没有，晚上小孩有点搞，才准备睡觉`,hh:[19],s4:5},"2026-02-01":{detail:`没麻，7.59，23.56到8.03，打断5，8
10:35起床到现在没有
13:58迷迷糊糊睡了会，到现在可能没有
17:04没重的，下午肚子又疼了，我在理东西
19:06估计有1到2次轻的，5秒内的
20:38有过一次10秒的梦境
21:46没有
23:06说没重的，但是刚收手机，还没睡，明天还要上班`,hh:[],s4:3},"2026-02-02":{detail:`没麻，6,28，23.47到6.53，打断8，38
08:42早上起来应该没有，吃药的时候发现少吃了一粒奥拉西平！黏在盒子上
08:48梦境5秒
09:19到单位，没有
12:15没重的
14:51说听同事讨论团建“再听就要不舒服了”
15:18手烫，家里没有
17:22没不舒服，被压下去的，心跳快
18:15到楼下不肯回家，去奶茶店，才找到人。
20:11聊到路上2次30秒的梦境，回来可能没重的，不是很愿意多说`,hh:[18,19],s4:5},"2026-02-03":{detail:`没麻，7.18，23.39到7.39，打断5，42，23.51到0.24醒着
09:14起床到现在没重的，路上和家里都没超过2次
10:53看到小熊和妹子说话，心跳快
12:51可能没有梦境，只有心跳重
15:15梦境，5秒内
16:53下午就那一次，和2次手烫
18:03路上2次2秒的，买刘行老饭店卖完了
18:13 梦境，自己觉得半分钟，是“慢慢好”的，看时间是有40秒的，今天最重的
22:29回家到现在2次重的，细问不知道了`,hh:[18,22,23],s4:9},"2026-02-04":{detail:`不知道有没有麻，细问确定没麻，只是觉得做过梦，又忘记了，所以不知道是不是梦境，6.53，23,55到7.10，打断8，22
08:47起床到现在不多不重
12:38 出门到现在, 有1次10秒的,  2次2秒的, 路上1次, 单位2次
14.30 梦境8分，熟悉，1分钟，重
15:58下午一共3次，1次很重60秒，2次中等，这次是中等的，后来看记录，这次是重的
17:04在我偶然说等你回家的时候，说不想回家，然后过了会说奶奶打电话说想他，打算去奶奶家
18:53地图看起来离开奶奶家了
20:19回来路上有2次很重的，忘记了，应该半分钟以上，说打完电话哭了很久，并且打字左手大拇指弯到一定程度会抖，但没麻
20:30回家以后没有，730回来的
22:20说忘记了，5次以上还是以下，说以下`,hh:[14,16],s4:7},"2026-02-05":{detail:`没麻，7.33，23.11到7.04，打断6，20
09:21 早上到现在有1次3, 4秒的
12:16最重的就是1，2秒，5次以下
16:56重的梦境，8分，可能40秒，觉得视频看过的，间隔10秒又有梦境想吐，持续时间不知道了
17:21和妹子说了几句话，觉得怕被讨厌，然后心跳重，想洗头不想回家
17:31左半边风凉，腿，手涨，在车棚没回家，左边整体失重，脚很重但是没知觉，和昨天很像，34，说风凉
18:29到家失重好了，路上有中的
18:43梦境，40秒开始的，一直不说话，1分05秒点头表示好了，重吗，点头，自己说1分半
21:41到现在有2次30秒的，在看视频，看起来很开心
22:18洗澡有过中等的，30不到点
23:16没有`,s3:1,hh:[17,18,19,21,22,23],s4:6},"2026-02-06":{detail:`睡前半边身体麻，左上觉得有人，6.59，0.21到7.44，打断7，24
08:53没有重的，轻的忘记了
11:54估计出门后没重的，单位里有手涨
16:48下午3次中等，15秒，路上也没重
19:29比较重，半分钟
19:59又有一次差不多的
20:22左边后脑勺和手烫和失重，补充说下午一段时间呛水
21:41应该没重的
23:11咳嗽，不确定是发导致的口水，还是空气问题，明早问，昨天类似的情况就是不舒服了`,s3:1,hh:[19,20],s4:6},"2026-02-07":{detail:`早上有人，比昨天轻，8.10，22.49到7.29，打断8，30
10:02到现在，没重的，有10秒的，1，2次级别的
13:35没重的，有中的话是1，2次
18:39跟小哈吵过架，我状态也不好，中午饭也没吃，问有没有重的，说不知道，追问今天没重的，重的有没有，还是说不知道，我情绪也很差
18:49重的，半分钟
18:54有两次1，2秒压住的
19:02太阳穴紧
20:02梦境了，觉得梦里面发生过，昨天发生过，一下子好的，自己觉得40秒
21:08有1，2次不重不轻的
22:04洗澡出来看到爷爷理东西，梦境，橡胶，重，30秒，程度6，7分
00:10没有，有一次压住
00:45录像看，42分04秒开始遮眼睛，45分转身（结束）`,hh:[19,20,22,24],s3:1,s4:5},"2026-02-08":{detail:`晚上麻的，6.08，0.23到7.43，打断10，58
（2.12 补充，看手机看到，8.34，重吐打嗝）
10:57刚才有一次橡胶加想吐，20秒，橡胶重，物理难过，起来到现在大概3，4次
13:51没吃饭，睡了一会，没重的
14:01压住了
14:42橡胶，拉屎，没梦境，20秒，重的
15:28没有，出去兜一圈，打算去看草莓
16:35梦境里的熟悉，拉屎，一模一样的，自己觉得4，5十秒，手臂有点烫
19:29没有重的
19:36梦境，重，吐，拉屎，40秒变成熟悉了，心悸，自己觉得1分钟
21:42洗澡出来有重，估计半分钟，梦境，熟悉，估计十分钟前的`,hh:[8,10,11,14,16,19,22],s4:1},"2026-02-09":{detail:`问了半天，还是说不知道，追问算没有，6,38，0.17到7.46，打断10，51
11:54 起床到现在, “应该没”
16:25橡胶5秒，在搞千问免费奶茶
17:03没有重的
18:10梦境，熟悉，又梦境，在刘行老饭店回家路上，40秒，蛮重的，问路上，说不知道，追问后拒绝回答
18:59手烫，失重，到小手臂
20:52耳朵烫，失重，到手，2，3分钟了
21:26问有没有重的，说不知道
22:14洗好澡问，应该没有
晚上4点大家都醒了，小孩咳嗽了一会`,hh:[18],s4:3},"2026-02-10":{detail:`没麻，7.20，23.37到8.03，打断10，1.06
11:26回答忘记了，猜有中的，程度不知道，因为忘记了
18:03 50分到家，要去买奶茶，不想上楼，我状态也不好，没出去，24问盒马几点打折，我说8点，30问，说路上1分钟梦境橡胶，重的，并且说不出“橡胶”，说那个味道，下午说应该没有，最后6.48到家，也就是一小时在外面
19:09梦境半分钟
22:37问了，说忘记`,hh:[18,19],s4:0},"2026-02-11":{detail:`可能没有，应该没有，8.0723.33到7.59，打断5，19
11:47左边加后面有点飘，但是站起来正常，问起来有没有重的“应该没有”，后来说自己和豆包说心理，昨天在同事面前说了小熊请假没跟领导说之类的，然后说了会外婆的事，12.22我吃饭了，飘好了
17:20 梦境，熟悉，呕吐，6分，30秒，下午有7，8次轻的梦境，不先回家，25还在车棚，问爷爷奶奶不在愿意回吗，愿意的
17:26左边耳朵这里失重
17:32手失重
18:14梦境，橡胶，9分，1分钟后说，重，超级梦境，1分20秒好，自己估计半分钟，41才考虑回来，车子又没电了
19:09 梦境，熟悉，比上次轻，刚说好了，又来了，自己估计2分钟，车子坏了，爷爷奶奶都马路，他手机没电，打算自己坐地铁路上
19:13补充上一次有熟悉了，还有鸡皮疙瘩
20:10地铁上没重的
20:20熟悉，30秒，刚到家
23:15没有重的`,hh:[17,18,19,20],s4:10},"2026-02-12":{detail:`大概没麻，7.22，23.44到7.26，打断8，20
09:3710秒熟悉，今天一起来电瓶充电
12:13应该没有重的，因为电梯里同事照镜子抑郁了好久，现在才肯说，前面2天因为妹子小熊一起放学，他还要自己一个人走，然后关朋友圈了，上次是9月15
13:35到现在，有中等的，梦境多，想吐的，5次左右，我问是不是15分钟一次，他说可能不止
14:03微信说，刚有很厉害的梦境，8，9。结束以后有个很熟悉的味道
15:48兜了一圈，上楼前问，都是压住的
15:52又是那个味道，30秒开始，梦境，熟悉，自己说30秒好的，有味道5秒后开始不舒服的，说是觉得群里的照片以前好像发过，然后往上翻，翻着翻着有味道了
16:05很轻的，3秒
16:31压下去了
17:34路上，和前两次一样，自己觉得半分钟
17:48梦境，橡胶，熟悉中的熟悉，刚到家，准备走一圈回，问我们真没有这样子过吗，1分10秒，自己觉得1分钟，53，问“你今天跟我一起去上学的吗”，然后说，哦，是我车坏了，怎么修的呢，然后回忆一天，在说碎片，感觉他连不起来，回忆到59分，算都清楚，记得路上发作，不记得这次，我认为说明这次发得重，07，买奶茶输入密码的时候又输了850715的老密码，并且问是不是改了。这次是有点失忆的
18:46不舒服，算0开始的，40，捏着我腿说，那个味道，50秒好了，然后说这个味道以前没有的，但是是熟悉的味道，自己说也不排除自己判断有问题，50分说想说什么，但是想不起来了，在想中午吃了啥，上一次发作是顺利回忆的，大概10秒想出来了，但是没那么顺利
19:34熟悉半分钟，我不在，后来说的
19:46不舒服，自己说4，5十秒，大家都躺着，我感觉不对去看的，然后想睡觉，躺着
21:41洗完澡，只有被压住的
22:56准备睡，一直没，感恩`,hh:[14,16,17,18,19,19,20],s4:9},"2026-02-13":{detail:`8.42，23.02到7.52，打断3，8，小孩晚上3点到4点半咳嗽很吵很闹，这个睡眠质量很奇怪
08:05说没麻，起来到现在没梦境过，但是没说话，状态一般
09:16起床到现在没有超过5秒的，只有压住的
12:04放学了，在经委会，没有重的了，开心
15:53问了，没重的，但是状况一般，我倒觉得还可以，后来开始睡觉，我和小哈19.22进房间，就慢慢醒了
19:40问了情况，睡觉没麻，睡前梦境1分钟，重的
21:55没重的
22:55洗澡有中等的，2次，10秒以内`,hh:[20],s4:5},"2026-02-14":{detail:`没麻，7.06，0.07到7.25，打断5，12
09:39压住了，1，2秒，有味道
10:34和小孩不开心，吃了肯德基回家后，不肯进房间
14:07中午睡了会，到1点半，看到小婷消息，敢去山姆了，现在到了，问睡觉没麻，没重的
18:30回来了，有2次重的，熟悉，十几秒
20:34打嗝，问有吗，有的，不算很重，没重的，有中的，在考虑外婆见面的事，中午就看到微信了，现在在说死了以后不要谁看自己的
21:55哪有不舒服，在看视频，准备洗澡
22:41洗好澡了，没有`,hh:[17,18],s4:2},"2026-02-15":{detail:`没麻，说得很果断，23.13到6.11，打断7，27，起床尿尿就没睡了，晚上小哈很搞，咳嗽
09:06起床到现在没重和中
12:41没重的，我们准备出去玩，他要一个人睡觉，我们没出去，他2.50醒的，麻和重都没
18:54应该没重的，因为聊到伤早的衣服，说忘记哪里买的，而且是看到衣服觉得梦里买的，然后压下去了，看了日子是12月30
20:45不舒服，熟悉，大概15秒，刚好，又有了，这次持续了10秒
22:54应该没有，但是脾气比较大，和小哈吵架
02:54小孩搞`,hh:[20],s4:1},"2026-02-16":{detail:`没麻，7，23.38到7.34打断8，56
12:53和外婆视频吵架没不舒服，上午重的没有
13:50熟悉，1分钟，光熟悉没别的，不重，隐隐约约觉得熟悉
13:54梦境，20秒
16:40美兰湖商场回来，没重的
18:44开朋友圈了
22:51没有重的
00:51没有重的，看完烟花到家`,s3:1,hh:[13,14],s4:0},"2026-02-17":{detail:`有人，但是没麻，应该是中间，5.38，1.38到6.00，和7.09到8.49，中间是小哈弄醒的，大家都醒了，打断9，24
9点吃药，问知不知道昨晚去哪里了，知道，但是一直不说话，可能是累
13:20问有没有重的，说忘记了，追问也是不知道
17:22没有重的
18:00吃饭的时候熟悉，梦境，半分钟，觉得是今天最重的
20:23梦境，在从美兰湖路上回来，想拉屎，自己觉得半分钟，没上次的味道，重的
23:23没有`,hh:[18,20],s4:0},"2026-02-18":{memo:"第一次有点失忆的味道",detail:`应该没有，5.24，0.33到7,25，打断12，1.28
又说可能是昨天下午，右边麻，但是可能最后左边眼睛跳，又说可能是左边麻，说不清
10:40起床到现在没有10秒以上的
15:20可能一次不重的熟悉，和外婆在日月光吃了半天妖回来，小哈跟着去罗南路
18:41想吐，梦境，很重，说是说到外婆，半分钟后减弱，一分钟完全好，下午睡了半小时
20:52非常大的梦境，熟悉，54头问，说还有百分之80，快55分，问，说“脑子上面应该好了”，然后问“我外面的袋子应该有红包吗”，56分30秒，说就有1分了，58问，有一点反复，但是反复出来的有1分的强度，没有断片感，我们8点不到出门想买盒马，走路很快的40分钟，说忘记我们为什么出去，又想起来了，10还有断断续续的打嗝，回忆了一天事情，还可以，午饭在哪里吃，吃什么忘记了
22:46洗澡回来，没有重的`,hh:[18,21],s4:0},"2026-02-19":{detail:`没麻，7.02，0.44到8.02，打断6，16
14:24睡了一会，上午去买包脚布的，起床到现在没重的，没有10的
15:31熟悉，自己觉得15秒
18:26熟悉，中等，15秒
20:42没有，在看laughing sir
22:17洗好澡，没事，轻的也可能没有`,hh:[15,18],s4:0},"2026-02-20":{detail:`没麻，6.42，23.37到6.42，打断9，23，昨天中午睡了2小时
12:10没重的，今天在娘娘家，10秒也没，轻的5次以下
17:10 纯熟悉10秒下午没有，在四季公园
20:34梦境，拉屎不重，打嗝，算重，自己
估计半分钟，时间看1分钟
23:34洗澡回来说没事，忘记记了`,hh:[20],s4:6},"2026-02-21":{detail:`没麻，晚上12点睡觉，2点，5点都被小孩吵醒，7点30被小孩彻底吵醒起床
11:59应该没有中的，轻的3次以下
1.30睡到3.50
18:52没有重的，猜有中的，十几秒，好像是熟悉
20:20熟悉。15秒或者20秒
20:32熟悉，比上次久点，晚上和小哈吵架过，小哈打人，问了点2月的事情，记性不好
20:41太阳穴一直很紧，左边更紧
21:11我洗澡回来，没有，头也不紧了
22:06洗好澡，应该没有
23:19没有`,hh:[20,21],s4:0},"2026-02-22":{detail:`没麻，6.51，00.04到7.04，打断9，22
12:04没有重的和中的
16:21没有重的中的
17:32梦境，一般，15秒，来和走没这么明显
19:29梦境了一会，大概10秒，过了会，又开始熟悉，30秒，一般
19:34又梦境了一会，在看column文档，比较认真
19:37又有5，6秒的，左边太阳穴紧，37尾巴又又，5，6秒的，说到平时可能也是这样的
19:45又有一次
19:47又梦境了，5，6秒
22:07没有
22:50洗好澡，没事
23:47梦境，小哈不讲道理说好最后一个，又要退头，10秒
01:02咬牙齿`,s3:1,hh:[17,19,20,24],s4:0},"2026-02-23":{memo:"抑郁",detail:`不知道有没有麻，6.01，00.47到7.39，打断9，51，00.53到1.25醒着，和昨天咬牙齿匹配，问了还是说不记得，那暂时认为是有的
11:15没有重的
12:34早上上过厕所，厕所又上了45分钟，因为我犹豫加不加5号微信不开心
13:08量心跳，问不舒服，不回答，问了半天回答是的，5分钟问好了吗，考虑了会说要过一会才知道，那就是没好
13:44熟悉10秒后又熟悉了一会，要一个人去加油，给他去了，微信联系想办法找事做不想回家，找不到事，也决定去罗南，但是不认识路，后来从联杨路去了，15.05到家里小区，10分微信说，想点奶茶，楼下等，不让我下楼，问有没有不舒服，说没有，然后我忍不住下楼把他接上来
18:15没有重的
20:58一起弄了春卷吃，应该没重的
22:38洗澡回来，有一次20秒的
23:36不舒服坐起来，失重，左眼跳，2分钟左右`,s3:1,hh:[13,14],s4:0},"2026-02-24":{detail:`只有昨晚记录的那次麻，7.11，0.27到7.53，打断6，15
09:50没重的
11:20 微信报告, 梦境, 熟悉, 估计20秒
13:19没重的
17:08肚子疼1分，没重的
18:01到家，微信回答有10秒的
20:30梦境熟悉，好了以后又有了，自己觉得第一次半分钟，后来又有10秒，打完心悸，然后说平时也会心悸的，问是不是第一次，追问，都是不知道
23:02应该没有
00:36动了`,hh:[11,20],s4:6},"2026-02-25":{detail:`没麻，7.20，0.01到8.11，闹钟醒的，打断12，50，打断次数多
09:45起来到现在应该没有
11.49 梦境3分5秒
17:08应该没有，但是肚子疼
17:58心情可以，没问，但是肚子疼
19:024，5分疼
22:09没重的，应该有轻的`,hh:[],s4:2},"2026-02-26":{detail:`没麻，6.55，23,50到7.34，打断14，58
11:57梦境，在说外婆，早上说了一会小熊，熟悉，自己觉得40秒，我记录1分半，起床到现在没重的
14:57 梦境, 自己说30秒, 自己觉得明显, 先梦境再熟悉, 然后还是梦境
15:03梦境，熟悉，这次没有聊不开心的，40秒，自己说20秒，然后又说还有点，过了20秒确定又来了，持续15秒
18:06梦境，熟悉，在家，我准备和奶奶小哈去天街，估计20秒
19:59压下去的，我和小哈回来了
19:59熟悉，说现在看的电视看过，20秒
21:06 洗澡f2次中等10秒
22:32心跳快，在睡觉，被吵醒，再准备吃药刷牙拉屎
23:22应该没有`,hh:[12,14,15,18,20],s4:4},"2026-02-27":{detail:`没麻，7.05，23.51到7.37，打断10，41
11:2211点有2次梦境的纪录，自己回忆估计10到20秒
14:53手烫了好几次
15:34 熟悉, 梦境, 自己觉得20秒, 说一直在看聊天记录所以没回复我
15:43 梦境了一下, 说5秒, 可能也忘了
15:59 熟悉, 橡胶, 今天下午表示很讨厌小熊, 1分钟的时候我问了, 说”算好了”
16:15 梦境, 10秒
16:29 梦境, 10秒
18:21 梦境，在修车，10秒
21:45吃烧烤回来，10秒左右中等的有3次以下
22:222月13，14，17有隐私的微博，还有2.23，1.15，9.30，8.18，7.31
22:35回来以后应该没有
23:11洗好澡，没有重的
23:29梦境，10秒
晚上一直说小熊的事，盘算换位子，不肯睡觉，我凶了，12点多才肯让小孩开始睡觉的电视倒计时`,s3:1,hh:[10,11,15,16],s4:7},"2026-02-28":{memo:"比较中的, 断断续续2分多钟",detail:`早上起来麻的，失重，没人，中等，问什么感觉，右边有没有，都不说，说忘记了，问了不说话，用手势，又表达不清，把我弄生气了，没带手表，从0.15到7.15睡觉
08:45起来到现在没有
12:33没有重的
14.21 梦境，拉屎，吐10秒5分
14.40 梦境，吐，5秒3分
16.25 梦境，吐，10秒4分
16.50 梦境5秒，3分
17:16 说好像3次, 自己记了, 说明不轻，看记录后补充了
18:09路上3，4次偏重，20左右的，说这两天每天4点想拉屎
18:42梦境，5，6秒
18:58梦境，打嗝，好了又有了，熟悉了，梦里有过，1分钟后说“我靠”，然后，比较拒绝互动，人应该是知道的，2分钟刚好，确认是今天最重，最近最重，02分问有没有好，回答“说不清”，确认了没断片，03分问，说在反复，熟悉感是有时候有有时候没，04，打嗝，还没好，梦境，双手捂着眼睛一会，05开始主动说话，说是发5到10秒，间隔15到20再发，小哈变得很懂事，答应晚上找我，发的时候关心妈妈，想让他变好，上次大发小孩还在跳舞
19:39到美兰湖了，准备吃烤鱼，没重的
20:20梦境，在等位，10秒左右的，大概没重的，问了说忘记了，不太愿意想，确认太日常
21:56吃完了，3到5次中的，手机上记录了21点21分
22:37到家，没有
23:32洗好澡，没有，最近2次都是完全没有`,s3:2,hh:[19,20],s4:14},"2026-03-01":{detail:`睡觉前和醒来，手到手臂麻，6.54，0.09到7.12，打断4，9
11:56起来到现在没不舒服
12.53 熟悉 10秒
15:07手臂烫，不是自己的感觉，失重？右边耳鸣，耳鸣短，10秒，中午到现在2次10秒的，15问已经好一会了
15:19熟悉，1分半，不是持续的，只是对特定场景熟悉和梦境，2245左手臂麻了，一点点，30问手好了
16:11不知道是什么不舒服，10秒，在跟小哈搞
16:36熟悉，在看不能说的秘密简介，10秒
17:20梦境，好了一会又有了，一共30秒，2220又又了，30秒好
17:56我吃好饭到房间里看，说可能有1，2次
18:57半个手麻，说忘记在哪里梦境过了
19:34我洗好澡，大概没
19:42梦境，橡胶，35开始，45说算重，说：一直在梦境，人会热的，是“一开始的橡胶”，43分50结束，说是想拉屎的，自己觉得40秒，计时应该是1分15，拉屎和橡胶都不是每次都有的
20:26左手臂热，左耳朵也感觉不对，30分小哈突然进来，又说手不舒服，不确定是不是连续的，41问，好了
21:42洗澡回来，可能是1次
22:27左手臂烫麻，好久，其他应该没有`,hh:[15,17,19,20],s4:9},"2026-03-02":{memo:"抑郁",detail:`没麻，8.45，22.52到7.41，打断3，4
08:36我从学校回来，告诉我有一次重的，1分钟，大概是梦境和熟悉
09:26路上没事
09:51一直说头晕不说，今天好像药的晕比平时厉害，今天还是因为同事而不开心，1042主动说头晕好了
11:28半个手臂，到单位后没不舒服
14:38半个手臂，没有梦境，应该没有，46问好了
16:50说忘记了，那我理解是没重的
16:53梦境，橡胶，说应该是第二次，说前面一次比这次厉害吗不知道，两次都是因为听到小熊打电话
17:17主动说，外面坐一会再回，后来说是小熊换位子的事，后来还是回家了
18:02到家不说话，问有没有不舒服，摇头，但是打嗝多，我觉得可能是有的，只是不想说，呆了2分钟，出去了，叫我别跟，42分回到家门口，46进门
18:50说进来就有很重的熟悉，30秒，现在说又有，应该也不多，19.17我在烧菜，进来问情况，他在找遥控器关电视，电视并不响
19:23手臂，告诉我今天又想删外婆
19:31不舒服，放下了手上的鱼豆腐，求着吃的，好了以后说有橡胶味，说吃异味的一吃就有梦境，然后不吃饭了，外卖也不肯点，让他吃饼干了
21:18没有重的，手臂失重
23:06一开始说不知道，因为重的也日常了，后来分析后说没有`,hh:[8,16,17,19,20],s4:3},"2026-03-03":{detail:`没麻，7.24，23.38到7.19，打断7，17
08:41出门前一次重的，估计30秒，重的
09:21 路上没, 吃药的晕, 今天问了具体, 说和平时是差不多的, 然后又说不说了, 但平时是没这样的
11:41上午可能有一次，今天中午和圈圈玩
13:16和圈圈分开，有一次或者2次强的，30秒到1分钟，表示怀疑圈圈讨厌自己，自己说多了，以及不能胜任周日和小斌过生日
14:10熟悉，非常重，15秒开始的，50秒说好了，自己说20秒，吐，梦境，梦里发生过
14:18梦境了，40秒开始，19分15秒说好，强度中等
15:10:50 梦境, 橡胶, 重, 11:40, 拉屎, 12分00号, 持续1分10秒
17:04 梦境, 4分, 10秒
17:56路上2次10秒的
19:49 本来在洗碗，49分30秒过来我这我手，不说话，51头好了，53还呢，说话，56还没说话，我问几分重，说9分
20:02半个手臂不舒服
22:06打嗝频繁`,hh:[8,12,13,14,15,20],s4:5},"2026-03-04":{detail:`没麻，8.04，23.08到7.38，打断6，27，打断都是小孩吵，不是自己醒的，我打断时间是翻倍的
08:33不舒服，45开始，包子放下来了，30秒多，自己也觉得如此，起来以后第一次，重的，有味道，6，7分
09:29说“应该没有”
10:01 说想睡觉, 昨天和前天都是, 而且手表上睡得都不少, 我觉得可能是发多累的, 问有没有晕, 说每天都晕, 但没有说”不说了”
11:51没有
12:25 梦境，说在尝试睡觉，后来就没回复，后来说，就一会，不到10，但是明确是梦境
17:21下午只有小的
18:03路上有中等的，到家后也有一次梦境中等，52到家的
18:20不舒服，大概20多秒
19:16我睡了会，手机记录19点梦境，橡胶，9分，手机看到记录的：13.40 梦境熟悉橡胶奇怪味道40秒7分，14：29梦境3分10秒，30又梦境，16：32熟悉，也就是1151的没有和1721的描述都是错的
19:18手臂不舒服
19:49到现在2次，10秒
20:49洗好澡，大概没有
21:02梦境，20秒，5，6分，这两天因为讨厌小熊，纠结怎么要求换位子而情绪不好，不知道发作和情绪的先后关系
22:16没有`,hh:[8,18,21],s4:4},"2026-03-05":{memo:"重到需要坐到房间的发作",detail:`没麻，7.05，23.17到7,25，打断10，1.03。早上5点好像是醒了
08:31有一次小的
09:18说忘记了，那就是没有重的
12:00没重的
12.23 梦境6分10秒
15.06 梦境20秒6分
16.21 梦境 40秒 6分
17.14 梦境，重，40秒
17:54到家，问路上，不知道，大概没有
19:14梦境，20秒，我觉得多一点，说嘴里的小核桃不好吃了
20:15梦境，15秒发现的，说有一会了，而且有梦境的画面，很厉害，需要坐到房间里，16头，有味道，鸡皮疙瘩，17头，还没好，18.15问好一点了吗，点头，1850问好了吗，点头，但不说话，问星期几，猜是2或者3或者4，21分起来晚饭的内容，一直坐到26分，说左手臂烫，说可能和昨天的差不多
21:51洗好澡，应该没有不舒服
22:54没有`,hh:[15,16,17,19,20],s4:4},"2026-03-06":{detail:`没麻，23.20到7.10，打断10，1.03，10点到1点打断很厉害，监控看不出什么特别的
08:29起来到现在没有，但是起床前觉得晕
09:25 问, 应该没, 可能有轻的, 也不多
10.59 梦境，4分10秒
15.01 梦境，10分，2到3分钟，晚上说是吃了外卖香肠开始的，微信自己记录的： 01：d，10，02：d完全一样，d，10，鸡皮疙瘩，03：f
18:11路上可能没重的，情绪感觉还可以
19:17不舒服，10秒开始的，一分钟后，不太说话，表示能听到话的，说讲不清楚，，18分50秒，说退得很慢，说，就是鸡皮疙瘩，但不是通过鸡皮疙瘩方式出来的，19分30说好，说刚才哪个画面和梦里一模一样，不知道，程度是9，10分，今天小熊不上班，没情绪问题
20:415到10秒的，但是不太爱说话
21:31应该没有重的
22:26有一次5秒的
23:33动了下，差不多是入睡后半小时`,hh:[15,19],s4:4},"2026-03-07":{detail:`没麻，7.45，23,12到7.14，打断7，17
09:31没有过
11:13没有重的，中等的说忘记了，太多了，睡过一会，环境是吵的，准备去和小婷玩，早上回忆了下上次和小婷玩带回来什么，没想起来，但是我说了能想起来
16:09玩好了，有一次7，8分的，10到20秒
17:24重的，7，8分，有味道，不算重，30秒，是去小婷小区装充好电的电池，小区里有
18:34没有不舒服，但是尿尿多，而且尿量正常
18:57持续20秒，程度3分，但是想拉屎的时间久了
19:22手掌烫麻，26，烫到手臂了，57还没好
20:44说忘记，硬追问没有重的
22:23没有，但是一直想尿尿
00:10urs后40分钟还盯着反复说来呀，不肯睡，觉得不是很正常
00:23现在和大海5分钟前都动了下
00:28翻身
00:33没动，有一点打呼声
00:45大翻身
01:00动了一下，可能是因为小哈动，好几次，07又打呼了，又动了
01:22我睡觉
02:00翻身`,hh:[16,17],s4:2},"2026-03-08":{detail:`追问都说不知道，早上没麻，追问大概是没有，7.12，0.15到7.55，打断9，28
11:31起来到现在，大概没重的，我非常生气，太累了，后来我爆发了，不小心砸了自己表带，最后和好后，确定了最重10秒
12:53路上可能有轻的
14:49吃好饭了，没有不舒服
15:45到家了，路上有一次20秒的
15:51吐和拉屎，梦境没有
19:17 梦境，5分，20到30秒
21:06 梦境，2分`,hh:[15,19],s4:4},"2026-03-09":{detail:`没麻，7,39，到23.35到7,23，打断6，9
07:49梦境，打嗝开始，40秒开始，重的，2分钟好，自己说是50秒，6，7分重
09:15到单位里，我一起，因为车电瓶没电，没重的
12:02应该没有重的
13:10熟悉，说忘记上次碰到小熊妹子，20秒，到现在没重的
17:42回来路上2次20秒3，4分的，下午没重的，这2次也不算重
17:46刚到家，又有过7，8分的，30秒的
19:34到现在没有
19:39梦境，肚子叫，重的，手臂烫，1分钟，自己觉得50秒，这次有味道，9分
21:08小哈哮喘严重，不肯看病
21:24没有
22:12洗好澡，没有重的`,hh:[8,13,17,20],s4:3},"2026-03-10":{detail:`小孩非常吵，上半夜吵醒2次下半夜1次
没麻，8.01，23.27到7.51，打断9，23，很奇怪
09:21 起床到现在有1次轻的, 10秒, 路上
17:59正常到家，不脱鞋子，说看到小哈咳嗽心烦，今天说工作忙，我没问，自己记录的17.16有梦境7分，橡胶，腿烫，熟悉梦，17分梦境，18分记录1分钟，然后说今天手烫多次
20:21梦境，40秒，有橡胶，6分
21:15有一点，不明显
23:58动了几下手和嘴巴，抓眼睛，应该没事`,hh:[17,20],s4:5},"2026-03-11":{detail:`没麻，7.19，23.28到7.02，小哈叫醒的，打断8，15
10.05 梦境，4分30秒
14.14 熟悉，拉屎，想吐，心跳，30秒，15分又说梦境6分20秒，加起来就1分多
14.47 梦境，4分10秒，熟悉2秒1分
15.00 梦境2分5秒
16.08 梦境3分5秒
16.14 梦境，吐，4分10秒
17:58到家不上，说是等我拆电瓶，后来还是上来了，说路上有，但不是重的，今天的记录是我从他自己微信记录的
19.15 熟悉，6分，拉屎，鸡皮疙瘩，30秒
21:59发了一条私密微博，但不知道内容，问有没有不舒服，说没有，问了以后说是看卢广仲视频想到小熊
22:50整个左手臂烫，在跟陈晨说公司倒闭`,hh:[10,14,19],s4:6},"2026-03-12":{memo:"第二次重到坐到房间, 说超过10分的难过",coner:["失业","公司倒闭, 当天下午回来"],detail:`没麻，23.33到6.32，打断4，7
08:53起来到出门3次10秒的, 到单位后问, 说忘记了, 然后他说公司40亿的事了, 我也不追问了
12.34 熟悉，梦境，6分，吐
19:09不舒服，说“不行”，坐到房间里了，在理东西，今天下午回家的，梦境，拉屎，鸡皮疙瘩，味道，9分，1分15秒，然后又反复的，但不久，说是小孩来了就有，下午理东西一直会有，但是是5秒的
19:12手臂烫
20:48不舒服，还是在理东西，跪在地上了，打嗝厉害，说程度超过10分，说11分，是一下子好的，1分钟多，橡胶，梦境，鸡皮疙瘩，结束以后打嗝多，其实之前一直打嗝多`,hh:[12,19,21],s4:3},"2026-03-13":{detail:`没麻，7，23.37到6.39，打断1，2
7.39 梦境橡胶，15秒
08:25在早餐店，味道像是梦境好，但是不一定有梦境
12:45早上去仲裁地方，然后和外婆碰，说和外婆一起的时候有过6，7分30到40秒的
14:34梦境，40秒，5，6分，因为是明显的熟悉，在吃三黄鸡
17.16 梦境，拉屎，7分，大概30秒
17.45 梦境，橡胶，6分，是闻到油烟味
18.20 梦境，橡胶，9分，鸡皮疙瘩，30秒
18:52闻到酱油和橘子都觉得味道重
19:59烫到整个手臂，然后不舒服了，橡胶，应该是梦境熟悉融合，50秒，8，9分
23:26不舒服，其实是弓下身的，但是说是压住了`,hh:[8,13,14,17,18,19,20],s4:0},"2026-03-14":{detail:`没麻，7，23.47到7.08，打断8，16，下午睡加起来8.50
08:42不舒服，打嗝，橡胶，梦境，30秒
15:32梦境，橡胶，鸡皮疙瘩，拉屎，9分重，1分钟，今天早上一起出去吃饭的，中午睡了会
20:04从觉得有消毒水味道开始，过了会，十几秒，5，6分，后来又有一次，稍微轻一点，后来又有味道，并坚持有味道
22:54左脚麻，没其他反应，之前好像连轻的都没有，23.00还没好，应该是发作，01分说手臂也烫了，脚是麻，03手好了，13问好了，14脚又麻了，也没有刺`,s3:1,hh:[9,15,20],s4:4},"2026-03-15":{detail:`早上醒来旁边有人，5,26，0.21到5.52，打断3，5，睡得好的，不累的，昨天下午睡了，加起来8.50
09:45不重，3，4分的，到现在有3，4次
11:59醒来耳朵顶顶顶，出发和前进吃饭
17:42下午有过5，6分，30到40秒，大多数是1次
17.52 梦境，8分，橡胶，30，40秒
19:28出来了，有过一次不是很重的
20:05吐和屎偏多，在回家的地铁上，3，4分，10秒
20:47手臂烫`,hh:[17,18,20],s4:6},"2026-03-16":{coner:["配药","去北院配了点药, 最后吃了2顿国产左乙拉西坦"],detail:`没麻，7.39，22.59到6.54，打断7，16
08:42应该没有
10:30轻的1，2次
12:43没有，我准备出去和奶奶到大宁
16:23可能没有
17:05有过1，2分的
19:07算有2，3秒
20:54没有重的
22:45今天好像没重的`,hh:[],s4:5},"2026-03-17":{memo:"抑郁, 怕人, 点奶茶不出去拿, 类似于下班楼下不上来",detail:`没麻，6.47，23.33到6.57，打断7，37
08:52半分钟，8，9分
15:21问有没有不舒服说没有，但是不爱说话，没吃饭，奶茶到了也不出门拿
17:57问的时候，左手臂烫，可能今天没重的
19:19问有没有不舒服，说现在没，问刚才怎么了，说忘记了
21:15问情况，说就这样，然后刷视频不理我
22:08洗澡前看一直打嗝，问有没有不舒服，说不知道
23:00追问，今天有过2次重的，其中一次特别重，那可能就一次`,s3:1,hh:[9,19,23],s4:3},"2026-03-18":{detail:`早上6.54小发不舒服，坐起来，到眼睛了，咽口水，5.55，23.51到6.52，530到630醒着，其他记得看睡得好的，打断4，1.06，前一天中午睡了2小时，加起来8.40
11:27我睡醒，他一直在打嗝，问有没有重的，不说话，只摇头，追问下没重的
17.23 7分 拉屎，30秒
19.30 梦境，橡胶，厉害，坐到房间里想关门，31分打嗝，1分半结束，后来说8，9分，以后还一直打嗝`,hh:[17,19],s4:0},"2026-03-19":{detail:`没麻，7，23.08到6.16，中午1.30，加起来8.29，打断5，14
15:561到2次轻的，但是一直打嗝
17:16有过一次重的，6，7分，30或者60的
19:57开家长会结束，里面有一次重的，和下午差不多有橡胶的
21:36问有没有不舒服，说忘记，问有没有重的，也说忘记了，追问应该没重的`,hh:[17,20],s4:0},"2026-03-20":{detail:`睡觉一直青蛙叫，6.35，0.09到7.18，打断12，34
睡觉没麻，早上左边眉毛一直跳，不是一直跳，只是经常，每次1，2下，所以是发作性的
斑马的事情忘记了，是1.12的事
13:29没有，但是有打嗝
16:19开始肚子疼，问有没有不舒服，说不知道了，中午是说没
18:31主动说4点50分睡觉的时候有失重
19:50熟悉梦境，5，6分，30秒，说感觉今天有更重的，经过分析，可能是1点半到4点之间的`,hh:[16,17,20],s4:0},"2026-03-21":{coner:["接活","开始接wendy活, 之前一周urs很多, 下个周一在奉贤还接了李的活, 从此一周多都不太吃饭, 也不理我, 所以记录少"],memo:"凶他去吃饭, 上次3月头我也是发脾气",detail:`没麻，但是不那么确定，昨天下午睡了2小时，晚上6.10，0.56到7.32，打断6，17
10:21到现在应该没有
22:24问情况，下午睡了会起来动不了，眼睛跳，之前去胡子大厨有重的，早上也有一次，去就促中心的，今天去完就促有心烦不开心，事情多导致的，和上次一样，wendy 还找他干活，回家后我是凶他一起去吃胡子的，下午肚子疼`,s3:1,hh:[],s4:0},"2026-03-22":{detail:`没麻，说半夜肚子非常疼，还和平时不太一样
5.12，0.11到2.26，4.38到8.10，打断12，38，中间2小时里，一小时在厕所没拉出来
13:36 问, 说可能没有, 肚子还是疼的, 然后wendy在催东西的
17:02问有没有重的，说有过，其他不回答了，在做工作和带孩子，我刚睡醒，今天我状态都不好
21:50我和小哈吃烧烤回来，有2次，1次很重，有9，10分，要停下来的那种
22:13一天没吃饭，说了不听，我发火了
23:16洗好澡，说不知道有没有`,hh:[21],s4:0},"2026-03-23":{detail:`5.44 翻身叫了下呼吸重，不知道是不是，最近不上班了，很难分辨愿不愿意上楼了
早上问没麻，7.19，23.37到7.19，打断7，23
13:45在奉贤就促，有过一次左腿失重，涨，还应该有一次重的，梦境加熟悉，轻的3到5次
17:05路上和杜卡迪比快慢的时候有，5，6分，聊了下上次和前进吃饭，记性很好
19:19闻到小葱头的味道梦境，40秒，5，6分
21:21左边太阳穴紧，脑子有一块感觉是空的，眼睛闭起来感觉转，在干活`,hh:[12,17,19],s4:5},"2026-03-24":{detail:`没麻，而且晚上小哈起来了一次，6.5，0.31到7.38，早上我叫醒的，打断5，16
09:49左边耳朵烫，头不能动，可能是吃药
15:43经常打嗝，工作忙，拒绝回答，我睡觉了，现在醒，我睡觉一小时里，有1次重的，1次中等的，重的是梦境加熟悉
17:49有过1次重的
18:17不舒服，1分钟不到，程度8分，之前几次弱一点
23:48猜2，3次重的`,hh:[15,17,18,22,23],s4:3},"2026-03-25":{detail:`12点以后睡的，手表没带，0.24像咳嗽呛到起来咳嗽，7.40醒的，没麻
10:45手涨，早上起来到现在可能没有
14:58可能没，但是一直打嗝
16:345，6分，半分钟，在社保中心回来路上
18:27梦境，半分钟
20:49熟悉，觉得ai产生的图片熟悉，但没有觉得说话有熟悉
23.13还没洗澡
00:09手烫`,hh:[16,18],s4:0},"2026-03-26":{detail:`没麻，7.14，0.33到8.02，打断6，15
12:57不确定，轻的有手烫，轻的3次的
15:46不舒服了，30秒，没吃午饭，早饭也基本没吃
22:28问了不回答，只说手烫过，从接到任务以来每天都从9到24点
小孩1点半和2点和2点半叫过，我在补发作记录，明天看病`,hh:[16],s4:4}},hs={id:"cont-wrap"},fs={id:"calender-wrap"},ds={id:"calender-head"},us={class:"calender-year"},ps={class:"tag s3"},gs={class:"tag s4"},ms={class:"tag hh"},ys=["data-ts","onClick"],_s={class:"date"},bs=["data-theme","onClick","title"],vs={class:"opt-head"},xs=["onClick"],Ss=["onClick"],ws={class:"strat setall"},Cs=["onClick"],Ts={class:"detail-header"},Os={class:"detail-date"},Es={class:"detail-tags"},Ps={key:0,class:"tag s3"},Rs={key:1,class:"tag s4"},As={key:2,class:"tag hh"},Ds={key:0,class:"detail-memo"},Ms={key:1,class:"detail-coner"},Is={class:"detail-detail"},Fs={__name:"App",setup(n){const e={purple:{name:"紫色",primary:"#9966cc",primaryLight:"#f8f5ff",primaryDark:"#7a4fb5",accent:"#e0b3ff",secondary:"#b12bc7",bgSubtle:"#f3f0ff",highlight:"#ffd700"},blue:{name:"蓝色",primary:"#3b82f6",primaryLight:"#eff6ff",primaryDark:"#1d4ed8",accent:"#93c5fd",secondary:"#1e40af",bgSubtle:"#dbeafe",highlight:"#f97316"},red:{name:"红色",primary:"#ef4444",primaryLight:"#fef2f2",primaryDark:"#dc2626",accent:"#fca5a5",secondary:"#dc2626",bgSubtle:"#fee2e2",highlight:"#22c55e"},green:{name:"绿色",primary:"#10b981",primaryLight:"#ecfdf5",primaryDark:"#059669",accent:"#6ee7b7",secondary:"#047857",bgSubtle:"#d1fae5",highlight:"#f59e0b"},yellow:{name:"黄色",primary:"#f59e0b",primaryLight:"#fffbeb",primaryDark:"#d97706",accent:"#fcd34d",secondary:"#d97706",bgSubtle:"#fef3c7",highlight:"#8b5cf6"},black:{name:"黑色",primary:"#1f2937",primaryLight:"#f9fafb",primaryDark:"#111827",accent:"#6b7280",secondary:"#374151",bgSubtle:"#f3f4f6",highlight:"#fbbf24"},white:{name:"白色",primary:"#64748b",primaryLight:"#f8fafc",primaryDark:"#475569",accent:"#94a3b8",secondary:"#475569",bgSubtle:"#f1f5f9",highlight:"#f97316"}},t=$=>$<10?`0${$}`:$,s=$=>{const O=new Date(+$);return`${O.getFullYear()}-${t(O.getMonth()+1)}-${t(O.getDate())}`},i=Object.fromEntries(Object.entries(cs).map(([$,O])=>[new Date($).valueOf(),O])),l=["2024-01-27",s(Date.now()+864e5*21)],r=(new Date(l[1])-new Date(l[0]))/864e5,o=new Date(l[0]).valueOf(),c=cn(new Date(l[0]).valueOf()+864e5*4),d=Fn(D0),f=cn(0);let p={};const w=$=>{f.value=$.toString(),c.value=+$;const O=p[$],C=document.querySelector("#detail");if(O&&C){const D=O.getBoundingClientRect(),L=C.getBoundingClientRect();if(D.top<L.top||D.bottom>L.bottom){const W=C.clientHeight,U=O.offsetHeight,C1=D.top-L.top,K1=C.scrollTop+C1-(W-U)/2;C.scrollTo({top:Math.max(0,K1),behavior:"smooth"})}}},T=$=>{f.value=$.toString(),c.value=+$,setTimeout(()=>{const O=document.querySelector(`.card[data-ts="${$}"]`),C=document.querySelector("#calander-body");if(O&&C){const D=O.getBoundingClientRect(),L=C.getBoundingClientRect();if(D.top<L.top||D.bottom>L.bottom){const W=O.offsetTop,U=C.clientHeight,C1=O.offsetHeight,K1=W-(U-C1)/2;C.scrollTo({top:K1,behavior:"smooth"})}}},0)};let j=0,H=null;const n1=cn(!0),k=$=>{if(!H){const O=$.target;n1.value=j>O.scrollTop,j=O.scrollTop;const C=new Date(l[0]).valueOf()+(new Date(l[1])-new Date(l[0]))/O.scrollHeight*(O.scrollTop+O.clientHeight/2);c.value=C,H=setTimeout(()=>{H=null},350)}},I=Fn({s3:{days:0,count:0},s4:{days:0,count:0},hh:{days:0,count:0}});An(c,()=>{const $=new Date(c.value).getMonth(),O=new Date(c.value).getFullYear();I.s3.days=0,I.s3.count=0,I.s4.days=0,I.s4.count=0,I.hh.days=0,I.hh.count=0;for(const[C,D]of Object.entries(i)){const L=new Date(+C);L.getMonth()===$&&L.getFullYear()===O&&(D.s3&&(I.s3.days++,I.s3.count+=D.s3),D.s4&&(I.s4.days++,I.s4.count+=D.s4),D.hh&&D.hh.length>0&&(I.hh.days++,I.hh.count+=D.hh.length))}});let Y=null;const R=$=>{Y||(n1.value=!1,Y=setTimeout(()=>{Y=null},350))},Z=$=>{for(const O in D0)["coner","memo","detail"].includes(O)||(d[O]=$?0:-1)},u1=cn(!1),v1=()=>{u1.value=!u1.value},x1=cn(localStorage.getItem("selectedTheme")||"purple"),P1=cn(!1),j1=()=>{P1.value=!P1.value},V1=$=>{x1.value=$;const O=e[$],C=document.documentElement;C.style.setProperty("--theme-primary",O.primary),C.style.setProperty("--theme-primary-light",O.primaryLight),C.style.setProperty("--theme-primary-dark",O.primaryDark),C.style.setProperty("--theme-accent",O.accent),C.style.setProperty("--theme-secondary",O.secondary),C.style.setProperty("--theme-bg-subtle",O.bgSubtle),C.style.setProperty("--theme-highlight",O.highlight),$==="black"?(C.style.setProperty("--text-color-light","#f9fafb"),C.style.setProperty("--bg-hover","#374151")):(C.style.setProperty("--text-color-light","#333"),C.style.setProperty("--bg-hover",O.bgSubtle)),localStorage.setItem("selectedTheme",$),P1.value=!1};return Y2(()=>{const $=document.querySelector("#calander-body");$.scroll(0,$.scrollHeight*(new Date-new Date(l[0]))/(new Date(l[1])-new Date(l[0]))-$.clientHeight),V1(x1.value),document.addEventListener("click",O=>{const C=document.querySelector("#strategy-select"),D=document.querySelector(".strategy-trigger"),L=document.querySelector("#theme-select"),W=document.querySelector(".theme-trigger");!(C!=null&&C.contains(O.target))&&!(D!=null&&D.contains(O.target))&&(u1.value=!1),!(L!=null&&L.contains(O.target))&&!(W!=null&&W.contains(O.target))&&(P1.value=!1)})}),($,O)=>(l1(),c1(f1,null,[B("div",hs,[B("div",fs,[B("div",ds,[B("div",us,[Me(e1(new Date(c.value).getFullYear())+"年"+e1(new Date(c.value).getMonth()+1)+"月 ",1),B("span",ps,e1(I.s3.days)+"天, "+e1(I.s3.count)+"次",1),B("span",gs,e1(I.s4.days)+"天, "+e1(I.s4.count)+"次",1),B("span",ms,e1(I.hh.days)+"天, "+e1(I.hh.count)+"次",1)]),O[2]||(O[2]=w3('<div class="calender-item">周日</div><div class="calender-item">周一</div><div class="calender-item">周二</div><div class="calender-item">周三</div><div class="calender-item">周四</div><div class="calender-item">周五</div><div class="calender-item">周六</div>',7))]),B("div",{id:"calander-body",onScroll:k},[(l1(),c1(f1,null,xn(r,C=>B("div",{class:I1(["calender-item card",[{"current-month":new Date(S1(o)+C*864e5).getMonth()===new Date(c.value).getMonth(),active:f.value==S1(o)+C*864e5}]]),"data-ts":S1(o)+C*864e5,onClick:D=>w(S1(o)+C*864e5),key:C},[B("div",_s,e1(new Date(S1(o)+C*864e5).getDate()),1),E1(as,{strategy:d,record:S1(i)[S1(o)+C*864e5]},null,8,["strategy","record"])],10,ys)),64))],32),B("div",{class:"strategy-trigger",onClick:v1},O[3]||(O[3]=[B("span",{style:{"font-size":"1.2rem"}},"⚙️",-1)])),B("div",{class:"theme-trigger",onClick:j1},O[4]||(O[4]=[B("span",{style:{"font-size":"1.2rem"}},"🎨",-1)])),B("div",{id:"theme-select",class:I1({visible:P1.value})},[(l1(),c1(f1,null,xn(e,(C,D)=>B("div",{class:I1(["theme-option",{active:x1.value===D}]),key:D,"data-theme":D,onClick:L=>V1(D),title:C.name},[B("div",{class:"theme-color",style:i2({backgroundColor:C.primary})},null,4)],10,bs)),64))],2),B("div",{id:"strategy-select",class:I1({visible:u1.value})},[(l1(!0),c1(f1,null,xn(Object.entries(S1(I2)),C=>(l1(),c1("div",{class:"strat",key:C[0]},[B("div",vs,e1(S1(rs)[C[0]]),1),(l1(!0),c1(f1,null,xn(C[1],(D,L)=>(l1(),c1("div",{class:I1(["option",{active:L===d[C[0]]}]),onClick:W=>d[C[0]]=L,key:D.name},e1(D.name),11,xs))),128)),B("div",{class:I1(["option",{active:d[C[0]]===-1}]),onClick:D=>d[C[0]]=-1}," 不渲染 ",10,Ss)]))),128)),B("div",ws,[B("div",{class:"action",onClick:O[0]||(O[0]=C=>Z(!0))},"恢复默认"),B("div",{class:"action",onClick:O[1]||(O[1]=C=>Z(!1))},"关闭渲染")])],2)])]),B("div",{id:"detail",onScroll:R},[(l1(!0),c1(f1,null,xn(Object.entries(S1(i)),([C,D])=>(l1(),c1("div",{class:I1(["detail-card",f.value==C?"active":""]),ref_for:!0,ref:L=>S1(p)[C]=L,key:C,onClick:L=>T(C)},[B("div",Ts,[B("span",Os,e1(s(C)),1),B("span",Es,[D.s3?(l1(),c1("span",Ps,"小发 "+e1(D.s3),1)):wn("",!0),D.s4?(l1(),c1("span",Rs,"轻微 "+e1(D.s4),1)):wn("",!0),D.hh&&D.hh.length?(l1(),c1("span",As,"恍惚 "+e1(D.hh.length),1)):wn("",!0)])]),O[5]||(O[5]=B("hr",{class:"detail-divider"},null,-1)),D.memo?(l1(),c1("pre",Ds,e1(D.memo),1)):wn("",!0),D.coner?(l1(),c1("pre",Ms,e1(D.coner[1]),1)):wn("",!0),B("pre",Is,e1(D.detail),1)],10,Cs))),128))],32)],64))}};ss(Fs).mount("#app");
