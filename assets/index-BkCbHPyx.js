(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function It(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const G={},ae=[],In=()=>{},N0=()=>!1,nt=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ft=n=>n.startsWith("onUpdate:"),sn=Object.assign,Ht=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},L0=Object.prototype.hasOwnProperty,B=(n,e)=>L0.call(n,e),D=Array.isArray,fe=n=>et(n)==="[object Map]",Ds=n=>et(n)==="[object Set]",F=n=>typeof n=="function",Q=n=>typeof n=="string",Gn=n=>typeof n=="symbol",X=n=>n!==null&&typeof n=="object",Is=n=>(X(n)||F(n))&&F(n.then)&&F(n.catch),Fs=Object.prototype.toString,et=n=>Fs.call(n),B0=n=>et(n).slice(8,-1),Hs=n=>et(n)==="[object Object]",$t=n=>Q(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,we=It(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tt=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},U0=/-(\w)/g,Yn=tt(n=>n.replace(U0,(e,t)=>t?t.toUpperCase():"")),V0=/\B([A-Z])/g,le=tt(n=>n.replace(V0,"-$1").toLowerCase()),$s=tt(n=>n.charAt(0).toUpperCase()+n.slice(1)),ft=tt(n=>n?`on${$s(n)}`:""),qn=(n,e)=>!Object.is(n,e),ut=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},js=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},K0=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let is;const st=()=>is||(is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jt(n){if(D(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],i=Q(s)?G0(s):jt(s);if(i)for(const l in i)e[l]=i[l]}return e}else if(Q(n)||X(n))return n}const W0=/;(?![^(]*\))/g,q0=/:([^]+)/,Y0=/\/\*[^]*?\*\//g;function G0(n){const e={};return n.replace(Y0,"").split(W0).forEach(t=>{if(t){const s=t.split(q0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Kn(n){let e="";if(Q(n))e=n;else if(D(n))for(let t=0;t<n.length;t++){const s=Kn(n[t]);s&&(e+=s+" ")}else if(X(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const J0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",k0=It(J0);function Ns(n){return!!n||n===""}const Ls=n=>!!(n&&n.__v_isRef===!0),nn=n=>Q(n)?n:n==null?"":D(n)||X(n)&&(n.toString===Fs||!F(n.toString))?Ls(n)?nn(n.value):JSON.stringify(n,Bs,2):String(n),Bs=(n,e)=>Ls(e)?Bs(n,e.value):fe(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,i],l)=>(t[ht(s,l)+" =>"]=i,t),{})}:Ds(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ht(t))}:Gn(e)?ht(e):X(e)&&!D(e)&&!Hs(e)?String(e):e,ht=(n,e="")=>{var t;return Gn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yn;class z0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yn,!e&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=yn;try{return yn=this,e()}finally{yn=t}}}on(){yn=this}off(){yn=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function X0(){return yn}let Y;const dt=new WeakSet;class Us{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yn&&yn.active&&yn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,dt.has(this)&&(dt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ks(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ls(this),Ws(this);const e=Y,t=Cn;Y=this,Cn=!0;try{return this.fn()}finally{qs(this),Y=e,Cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bt(e);this.deps=this.depsTail=void 0,ls(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?dt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xt(this)&&this.run()}get dirty(){return xt(this)}}let Vs=0,Se,Ce;function Ks(n,e=!1){if(n.flags|=8,e){n.next=Ce,Ce=n;return}n.next=Se,Se=n}function Nt(){Vs++}function Lt(){if(--Vs>0)return;if(Ce){let e=Ce;for(Ce=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Se;){let e=Se;for(Se=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function Ws(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qs(n){let e,t=n.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),Bt(s),Z0(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}n.deps=e,n.depsTail=t}function xt(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ys(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ys(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ae))return;n.globalVersion=Ae;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!xt(n)){n.flags&=-3;return}const t=Y,s=Cn;Y=n,Cn=!0;try{Ws(n);const i=n.fn(n._value);(e.version===0||qn(i,n._value))&&(n._value=i,e.version++)}catch(i){throw e.version++,i}finally{Y=t,Cn=s,qs(n),n.flags&=-3}}function Bt(n,e=!1){const{dep:t,prevSub:s,nextSub:i}=n;if(s&&(s.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let l=t.computed.deps;l;l=l.nextDep)Bt(l,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Z0(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Cn=!0;const Gs=[];function Jn(){Gs.push(Cn),Cn=!1}function kn(){const n=Gs.pop();Cn=n===void 0?!0:n}function ls(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Y;Y=void 0;try{e()}finally{Y=t}}}let Ae=0;class Q0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ut{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Y||!Cn||Y===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Y)t=this.activeLink=new Q0(Y,this),Y.deps?(t.prevDep=Y.depsTail,Y.depsTail.nextDep=t,Y.depsTail=t):Y.deps=Y.depsTail=t,Js(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=Y.depsTail,t.nextDep=void 0,Y.depsTail.nextDep=t,Y.depsTail=t,Y.deps===t&&(Y.deps=s)}return t}trigger(e){this.version++,Ae++,this.notify(e)}notify(e){Nt();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Lt()}}}function Js(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Js(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wt=new WeakMap,te=Symbol(""),St=Symbol(""),Pe=Symbol("");function rn(n,e,t){if(Cn&&Y){let s=wt.get(n);s||wt.set(n,s=new Map);let i=s.get(t);i||(s.set(t,i=new Ut),i.map=s,i.key=t),i.track()}}function Nn(n,e,t,s,i,l){const r=wt.get(n);if(!r){Ae++;return}const o=a=>{a&&a.trigger()};if(Nt(),e==="clear")r.forEach(o);else{const a=D(n),d=a&&$t(t);if(a&&t==="length"){const u=Number(s);r.forEach((p,S)=>{(S==="length"||S===Pe||!Gn(S)&&S>=u)&&o(p)})}else switch((t!==void 0||r.has(void 0))&&o(r.get(t)),d&&o(r.get(Pe)),e){case"add":a?d&&o(r.get("length")):(o(r.get(te)),fe(n)&&o(r.get(St)));break;case"delete":a||(o(r.get(te)),fe(n)&&o(r.get(St)));break;case"set":fe(n)&&o(r.get(te));break}}Lt()}function oe(n){const e=L(n);return e===n?e:(rn(e,"iterate",Pe),wn(n)?e:e.map(on))}function it(n){return rn(n=L(n),"iterate",Pe),n}const n1={__proto__:null,[Symbol.iterator](){return pt(this,Symbol.iterator,on)},concat(...n){return oe(this).concat(...n.map(e=>D(e)?oe(e):e))},entries(){return pt(this,"entries",n=>(n[1]=on(n[1]),n))},every(n,e){return $n(this,"every",n,e,void 0,arguments)},filter(n,e){return $n(this,"filter",n,e,t=>t.map(on),arguments)},find(n,e){return $n(this,"find",n,e,on,arguments)},findIndex(n,e){return $n(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return $n(this,"findLast",n,e,on,arguments)},findLastIndex(n,e){return $n(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return $n(this,"forEach",n,e,void 0,arguments)},includes(...n){return gt(this,"includes",n)},indexOf(...n){return gt(this,"indexOf",n)},join(n){return oe(this).join(n)},lastIndexOf(...n){return gt(this,"lastIndexOf",n)},map(n,e){return $n(this,"map",n,e,void 0,arguments)},pop(){return be(this,"pop")},push(...n){return be(this,"push",n)},reduce(n,...e){return rs(this,"reduce",n,e)},reduceRight(n,...e){return rs(this,"reduceRight",n,e)},shift(){return be(this,"shift")},some(n,e){return $n(this,"some",n,e,void 0,arguments)},splice(...n){return be(this,"splice",n)},toReversed(){return oe(this).toReversed()},toSorted(n){return oe(this).toSorted(n)},toSpliced(...n){return oe(this).toSpliced(...n)},unshift(...n){return be(this,"unshift",n)},values(){return pt(this,"values",on)}};function pt(n,e,t){const s=it(n),i=s[e]();return s!==n&&!wn(n)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.value&&(l.value=t(l.value)),l}),i}const e1=Array.prototype;function $n(n,e,t,s,i,l){const r=it(n),o=r!==n&&!wn(n),a=r[e];if(a!==e1[e]){const p=a.apply(n,l);return o?on(p):p}let d=t;r!==n&&(o?d=function(p,S){return t.call(this,on(p),S,n)}:t.length>2&&(d=function(p,S){return t.call(this,p,S,n)}));const u=a.call(r,d,s);return o&&i?i(u):u}function rs(n,e,t,s){const i=it(n);let l=t;return i!==n&&(wn(n)?t.length>3&&(l=function(r,o,a){return t.call(this,r,o,a,n)}):l=function(r,o,a){return t.call(this,r,on(o),a,n)}),i[e](l,...s)}function gt(n,e,t){const s=L(n);rn(s,"iterate",Pe);const i=s[e](...t);return(i===-1||i===!1)&&Wt(t[0])?(t[0]=L(t[0]),s[e](...t)):i}function be(n,e,t=[]){Jn(),Nt();const s=L(n)[e].apply(n,t);return Lt(),kn(),s}const t1=It("__proto__,__v_isRef,__isVue"),ks=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Gn));function s1(n){Gn(n)||(n=String(n));const e=L(this);return rn(e,"has",n),e.hasOwnProperty(n)}class zs{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,l=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return l;if(t==="__v_raw")return s===(i?l?d1:n0:l?Qs:Zs).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=D(e);if(!i){let a;if(r&&(a=n1[t]))return a;if(t==="hasOwnProperty")return s1}const o=Reflect.get(e,t,tn(e)?e:s);return(Gn(t)?ks.has(t):t1(t))||(i||rn(e,"get",t),l)?o:tn(o)?r&&$t(t)?o:o.value:X(o)?i?e0(o):Me(o):o}}class Xs extends zs{constructor(e=!1){super(!1,e)}set(e,t,s,i){let l=e[t];if(!this._isShallow){const a=se(l);if(!wn(s)&&!se(s)&&(l=L(l),s=L(s)),!D(e)&&tn(l)&&!tn(s))return a?!1:(l.value=s,!0)}const r=D(e)&&$t(t)?Number(t)<e.length:B(e,t),o=Reflect.set(e,t,s,tn(e)?e:i);return e===L(i)&&(r?qn(s,l)&&Nn(e,"set",t,s):Nn(e,"add",t,s)),o}deleteProperty(e,t){const s=B(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&s&&Nn(e,"delete",t,void 0),i}has(e,t){const s=Reflect.has(e,t);return(!Gn(t)||!ks.has(t))&&rn(e,"has",t),s}ownKeys(e){return rn(e,"iterate",D(e)?"length":te),Reflect.ownKeys(e)}}class i1 extends zs{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const l1=new Xs,r1=new i1,o1=new Xs(!0);const Ct=n=>n,Le=n=>Reflect.getPrototypeOf(n);function c1(n,e,t){return function(...s){const i=this.__v_raw,l=L(i),r=fe(l),o=n==="entries"||n===Symbol.iterator&&r,a=n==="keys"&&r,d=i[n](...s),u=t?Ct:e?Tt:on;return!e&&rn(l,"iterate",a?St:te),{next(){const{value:p,done:S}=d.next();return S?{value:p,done:S}:{value:o?[u(p[0]),u(p[1])]:u(p),done:S}},[Symbol.iterator](){return this}}}}function Be(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function a1(n,e){const t={get(i){const l=this.__v_raw,r=L(l),o=L(i);n||(qn(i,o)&&rn(r,"get",i),rn(r,"get",o));const{has:a}=Le(r),d=e?Ct:n?Tt:on;if(a.call(r,i))return d(l.get(i));if(a.call(r,o))return d(l.get(o));l!==r&&l.get(i)},get size(){const i=this.__v_raw;return!n&&rn(L(i),"iterate",te),Reflect.get(i,"size",i)},has(i){const l=this.__v_raw,r=L(l),o=L(i);return n||(qn(i,o)&&rn(r,"has",i),rn(r,"has",o)),i===o?l.has(i):l.has(i)||l.has(o)},forEach(i,l){const r=this,o=r.__v_raw,a=L(o),d=e?Ct:n?Tt:on;return!n&&rn(a,"iterate",te),o.forEach((u,p)=>i.call(l,d(u),d(p),r))}};return sn(t,n?{add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear")}:{add(i){!e&&!wn(i)&&!se(i)&&(i=L(i));const l=L(this);return Le(l).has.call(l,i)||(l.add(i),Nn(l,"add",i,i)),this},set(i,l){!e&&!wn(l)&&!se(l)&&(l=L(l));const r=L(this),{has:o,get:a}=Le(r);let d=o.call(r,i);d||(i=L(i),d=o.call(r,i));const u=a.call(r,i);return r.set(i,l),d?qn(l,u)&&Nn(r,"set",i,l):Nn(r,"add",i,l),this},delete(i){const l=L(this),{has:r,get:o}=Le(l);let a=r.call(l,i);a||(i=L(i),a=r.call(l,i)),o&&o.call(l,i);const d=l.delete(i);return a&&Nn(l,"delete",i,void 0),d},clear(){const i=L(this),l=i.size!==0,r=i.clear();return l&&Nn(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=c1(i,n,e)}),t}function Vt(n,e){const t=a1(n,e);return(s,i,l)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?s:Reflect.get(B(t,i)&&i in s?t:s,i,l)}const f1={get:Vt(!1,!1)},u1={get:Vt(!1,!0)},h1={get:Vt(!0,!1)};const Zs=new WeakMap,Qs=new WeakMap,n0=new WeakMap,d1=new WeakMap;function p1(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function g1(n){return n.__v_skip||!Object.isExtensible(n)?0:p1(B0(n))}function Me(n){return se(n)?n:Kt(n,!1,l1,f1,Zs)}function m1(n){return Kt(n,!1,o1,u1,Qs)}function e0(n){return Kt(n,!0,r1,h1,n0)}function Kt(n,e,t,s,i){if(!X(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const l=i.get(n);if(l)return l;const r=g1(n);if(r===0)return n;const o=new Proxy(n,r===2?s:t);return i.set(n,o),o}function ue(n){return se(n)?ue(n.__v_raw):!!(n&&n.__v_isReactive)}function se(n){return!!(n&&n.__v_isReadonly)}function wn(n){return!!(n&&n.__v_isShallow)}function Wt(n){return n?!!n.__v_raw:!1}function L(n){const e=n&&n.__v_raw;return e?L(e):n}function _1(n){return!B(n,"__v_skip")&&Object.isExtensible(n)&&js(n,"__v_skip",!0),n}const on=n=>X(n)?Me(n):n,Tt=n=>X(n)?e0(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function Ue(n){return b1(n,!1)}function b1(n,e){return tn(n)?n:new y1(n,e)}class y1{constructor(e,t){this.dep=new Ut,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:L(e),this._value=t?e:on(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||wn(e)||se(e);e=s?e:L(e),qn(e,t)&&(this._rawValue=e,this._value=s?e:on(e),this.dep.trigger())}}function xn(n){return tn(n)?n.value:n}const v1={get:(n,e,t)=>e==="__v_raw"?n:xn(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const i=n[e];return tn(i)&&!tn(t)?(i.value=t,!0):Reflect.set(n,e,t,s)}};function t0(n){return ue(n)?n:new Proxy(n,v1)}class x1{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ut(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ae-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Y!==this)return Ks(this,!0),!0}get value(){const e=this.dep.track();return Ys(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function w1(n,e,t=!1){let s,i;return F(n)?s=n:(s=n.get,i=n.set),new x1(s,i,t)}const Ve={},Je=new WeakMap;let ee;function S1(n,e=!1,t=ee){if(t){let s=Je.get(t);s||Je.set(t,s=[]),s.push(n)}}function C1(n,e,t=G){const{immediate:s,deep:i,once:l,scheduler:r,augmentJob:o,call:a}=t,d=R=>i?R:wn(R)||i===!1||i===0?Wn(R,1):Wn(R);let u,p,S,C,$=!1,j=!1;if(tn(n)?(p=()=>n.value,$=wn(n)):ue(n)?(p=()=>d(n),$=!0):D(n)?(j=!0,$=n.some(R=>ue(R)||wn(R)),p=()=>n.map(R=>{if(tn(R))return R.value;if(ue(R))return d(R);if(F(R))return a?a(R,2):R()})):F(n)?e?p=a?()=>a(n,2):n:p=()=>{if(S){Jn();try{S()}finally{kn()}}const R=ee;ee=u;try{return a?a(n,3,[C]):n(C)}finally{ee=R}}:p=In,e&&i){const R=p,k=i===!0?1/0:i;p=()=>Wn(R(),k)}const en=X0(),A=()=>{u.stop(),en&&en.active&&Ht(en.effects,u)};if(l&&e){const R=e;e=(...k)=>{R(...k),A()}}let K=j?new Array(n.length).fill(Ve):Ve;const J=R=>{if(!(!(u.flags&1)||!u.dirty&&!R))if(e){const k=u.run();if(i||$||(j?k.some((On,H)=>qn(On,K[H])):qn(k,K))){S&&S();const On=ee;ee=u;try{const H=[k,K===Ve?void 0:j&&K[0]===Ve?[]:K,C];a?a(e,3,H):e(...H),K=k}finally{ee=On}}}else u.run()};return o&&o(J),u=new Us(p),u.scheduler=r?()=>r(J,!1):J,C=R=>S1(R,!1,u),S=u.onStop=()=>{const R=Je.get(u);if(R){if(a)a(R,4);else for(const k of R)k();Je.delete(u)}},e?s?J(!0):K=u.run():r?r(J.bind(null,!0),!0):u.run(),A.pause=u.pause.bind(u),A.resume=u.resume.bind(u),A.stop=A,A}function Wn(n,e=1/0,t){if(e<=0||!X(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,tn(n))Wn(n.value,e,t);else if(D(n))for(let s=0;s<n.length;s++)Wn(n[s],e,t);else if(Ds(n)||fe(n))n.forEach(s=>{Wn(s,e,t)});else if(Hs(n)){for(const s in n)Wn(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Wn(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function He(n,e,t,s){try{return s?n(...s):n()}catch(i){lt(i,e,t)}}function Fn(n,e,t,s){if(F(n)){const i=He(n,e,t,s);return i&&Is(i)&&i.catch(l=>{lt(l,e,t)}),i}if(D(n)){const i=[];for(let l=0;l<n.length;l++)i.push(Fn(n[l],e,t,s));return i}}function lt(n,e,t,s=!0){const i=e?e.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||G;if(e){let o=e.parent;const a=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](n,a,d)===!1)return}o=o.parent}if(l){Jn(),He(l,null,10,[n,a,d]),kn();return}}T1(n,t,i,s,r)}function T1(n,e,t,s=!0,i=!1){if(i)throw n;console.error(n)}const un=[];let Pn=-1;const he=[];let Un=null,ce=0;const s0=Promise.resolve();let ke=null;function O1(n){const e=ke||s0;return n?e.then(this?n.bind(this):n):e}function E1(n){let e=Pn+1,t=un.length;for(;e<t;){const s=e+t>>>1,i=un[s],l=De(i);l<n||l===n&&i.flags&2?e=s+1:t=s}return e}function qt(n){if(!(n.flags&1)){const e=De(n),t=un[un.length-1];!t||!(n.flags&2)&&e>=De(t)?un.push(n):un.splice(E1(e),0,n),n.flags|=1,i0()}}function i0(){ke||(ke=s0.then(r0))}function R1(n){D(n)?he.push(...n):Un&&n.id===-1?Un.splice(ce+1,0,n):n.flags&1||(he.push(n),n.flags|=1),i0()}function os(n,e,t=Pn+1){for(;t<un.length;t++){const s=un[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;un.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function l0(n){if(he.length){const e=[...new Set(he)].sort((t,s)=>De(t)-De(s));if(he.length=0,Un){Un.push(...e);return}for(Un=e,ce=0;ce<Un.length;ce++){const t=Un[ce];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Un=null,ce=0}}const De=n=>n.id==null?n.flags&2?-1:1/0:n.id;function r0(n){try{for(Pn=0;Pn<un.length;Pn++){const e=un[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),He(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<un.length;Pn++){const e=un[Pn];e&&(e.flags&=-2)}Pn=-1,un.length=0,l0(),ke=null,(un.length||he.length)&&r0()}}let Dn=null,o0=null;function ze(n){const e=Dn;return Dn=n,o0=n&&n.type.__scopeId||null,e}function A1(n,e=Dn,t){if(!e||n._n)return n;const s=(...i)=>{s._d&&gs(-1);const l=ze(e);let r;try{r=n(...i)}finally{ze(l),s._d&&gs(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Qn(n,e,t,s){const i=n.dirs,l=e&&e.dirs;for(let r=0;r<i.length;r++){const o=i[r];l&&(o.oldValue=l[r].value);let a=o.dir[s];a&&(Jn(),Fn(a,t,8,[n.el,o,n,e]),kn())}}const P1=Symbol("_vte"),M1=n=>n.__isTeleport;function Yt(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Yt(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function c0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Xe(n,e,t,s,i=!1){if(D(n)){n.forEach(($,j)=>Xe($,e&&(D(e)?e[j]:e),t,s,i));return}if(Te(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Xe(n,e,t,s.component.subTree);return}const l=s.shapeFlag&4?Xt(s.component):s.el,r=i?null:l,{i:o,r:a}=n,d=e&&e.r,u=o.refs===G?o.refs={}:o.refs,p=o.setupState,S=L(p),C=p===G?()=>!1:$=>B(S,$);if(d!=null&&d!==a&&(Q(d)?(u[d]=null,C(d)&&(p[d]=null)):tn(d)&&(d.value=null)),F(a))He(a,o,12,[r,u]);else{const $=Q(a),j=tn(a);if($||j){const en=()=>{if(n.f){const A=$?C(a)?p[a]:u[a]:a.value;i?D(A)&&Ht(A,l):D(A)?A.includes(l)||A.push(l):$?(u[a]=[l],C(a)&&(p[a]=u[a])):(a.value=[l],n.k&&(u[n.k]=a.value))}else $?(u[a]=r,C(a)&&(p[a]=r)):j&&(a.value=r,n.k&&(u[n.k]=r))};r?(en.id=-1,bn(en,t)):en()}}}st().requestIdleCallback;st().cancelIdleCallback;const Te=n=>!!n.type.__asyncLoader,a0=n=>n.type.__isKeepAlive;function D1(n,e){f0(n,"a",e)}function I1(n,e){f0(n,"da",e)}function f0(n,e,t=hn){const s=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(rt(e,s,t),t){let i=t.parent;for(;i&&i.parent;)a0(i.parent.vnode)&&F1(s,e,t,i),i=i.parent}}function F1(n,e,t,s){const i=rt(e,n,s,!0);u0(()=>{Ht(s[e],i)},t)}function rt(n,e,t=hn,s=!1){if(t){const i=t[n]||(t[n]=[]),l=e.__weh||(e.__weh=(...r)=>{Jn();const o=$e(t),a=Fn(e,t,n,r);return o(),kn(),a});return s?i.unshift(l):i.push(l),l}}const Ln=n=>(e,t=hn)=>{(!Fe||n==="sp")&&rt(n,(...s)=>e(...s),t)},H1=Ln("bm"),Gt=Ln("m"),$1=Ln("bu"),j1=Ln("u"),N1=Ln("bum"),u0=Ln("um"),L1=Ln("sp"),B1=Ln("rtg"),U1=Ln("rtc");function V1(n,e=hn){rt("ec",n,e)}const K1=Symbol.for("v-ndc");function Ke(n,e,t,s){let i;const l=t,r=D(n);if(r||Q(n)){const o=r&&ue(n);let a=!1;o&&(a=!wn(n),n=it(n)),i=new Array(n.length);for(let d=0,u=n.length;d<u;d++)i[d]=e(a?on(n[d]):n[d],d,void 0,l)}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,l)}else if(X(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,l));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,d=o.length;a<d;a++){const u=o[a];i[a]=e(n[u],u,a,l)}}else i=[];return i}const Ot=n=>n?I0(n)?Xt(n):Ot(n.parent):null,Oe=sn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ot(n.parent),$root:n=>Ot(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Jt(n),$forceUpdate:n=>n.f||(n.f=()=>{qt(n.update)}),$nextTick:n=>n.n||(n.n=O1.bind(n.proxy)),$watch:n=>ui.bind(n)}),mt=(n,e)=>n!==G&&!n.__isScriptSetup&&B(n,e),W1={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:l,accessCache:r,type:o,appContext:a}=n;let d;if(e[0]!=="$"){const C=r[e];if(C!==void 0)switch(C){case 1:return s[e];case 2:return i[e];case 4:return t[e];case 3:return l[e]}else{if(mt(s,e))return r[e]=1,s[e];if(i!==G&&B(i,e))return r[e]=2,i[e];if((d=n.propsOptions[0])&&B(d,e))return r[e]=3,l[e];if(t!==G&&B(t,e))return r[e]=4,t[e];Et&&(r[e]=0)}}const u=Oe[e];let p,S;if(u)return e==="$attrs"&&rn(n.attrs,"get",""),u(n);if((p=o.__cssModules)&&(p=p[e]))return p;if(t!==G&&B(t,e))return r[e]=4,t[e];if(S=a.config.globalProperties,B(S,e))return S[e]},set({_:n},e,t){const{data:s,setupState:i,ctx:l}=n;return mt(i,e)?(i[e]=t,!0):s!==G&&B(s,e)?(s[e]=t,!0):B(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(l[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:i,propsOptions:l}},r){let o;return!!t[r]||n!==G&&B(n,r)||mt(e,r)||(o=l[0])&&B(o,r)||B(s,r)||B(Oe,r)||B(i.config.globalProperties,r)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:B(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function cs(n){return D(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Et=!0;function q1(n){const e=Jt(n),t=n.proxy,s=n.ctx;Et=!1,e.beforeCreate&&as(e.beforeCreate,n,"bc");const{data:i,computed:l,methods:r,watch:o,provide:a,inject:d,created:u,beforeMount:p,mounted:S,beforeUpdate:C,updated:$,activated:j,deactivated:en,beforeDestroy:A,beforeUnmount:K,destroyed:J,unmounted:R,render:k,renderTracked:On,renderTriggered:H,errorCaptured:O,serverPrefetch:P,expose:I,inheritAttrs:Z,components:Hn,directives:Bn,filters:zn}=e;if(d&&Y1(d,s,null),r)for(const z in r){const W=r[z];F(W)&&(s[z]=W.bind(t))}if(i){const z=i.call(t,t);X(z)&&(n.data=Me(z))}if(Et=!0,l)for(const z in l){const W=l[z],Xn=F(W)?W.bind(t,t):F(W.get)?W.get.bind(t,t):In,je=!F(W)&&F(W.set)?W.set.bind(t):In,Zn=Ii({get:Xn,set:je});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>Zn.value,set:En=>Zn.value=En})}if(o)for(const z in o)h0(o[z],s,t,z);if(a){const z=F(a)?a.call(t):a;Reflect.ownKeys(z).forEach(W=>{Z1(W,z[W])})}u&&as(u,n,"c");function cn(z,W){D(W)?W.forEach(Xn=>z(Xn.bind(t))):W&&z(W.bind(t))}if(cn(H1,p),cn(Gt,S),cn($1,C),cn(j1,$),cn(D1,j),cn(I1,en),cn(V1,O),cn(U1,On),cn(B1,H),cn(N1,K),cn(u0,R),cn(L1,P),D(I))if(I.length){const z=n.exposed||(n.exposed={});I.forEach(W=>{Object.defineProperty(z,W,{get:()=>t[W],set:Xn=>t[W]=Xn})})}else n.exposed||(n.exposed={});k&&n.render===In&&(n.render=k),Z!=null&&(n.inheritAttrs=Z),Hn&&(n.components=Hn),Bn&&(n.directives=Bn),P&&c0(n)}function Y1(n,e,t=In){D(n)&&(n=Rt(n));for(const s in n){const i=n[s];let l;X(i)?"default"in i?l=We(i.from||s,i.default,!0):l=We(i.from||s):l=We(i),tn(l)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):e[s]=l}}function as(n,e,t){Fn(D(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function h0(n,e,t,s){let i=s.includes(".")?O0(t,s):()=>t[s];if(Q(n)){const l=e[n];F(l)&&Ee(i,l)}else if(F(n))Ee(i,n.bind(t));else if(X(n))if(D(n))n.forEach(l=>h0(l,e,t,s));else{const l=F(n.handler)?n.handler.bind(t):e[n.handler];F(l)&&Ee(i,l,n)}}function Jt(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=n.appContext,o=l.get(e);let a;return o?a=o:!i.length&&!t&&!s?a=e:(a={},i.length&&i.forEach(d=>Ze(a,d,r,!0)),Ze(a,e,r)),X(e)&&l.set(e,a),a}function Ze(n,e,t,s=!1){const{mixins:i,extends:l}=e;l&&Ze(n,l,t,!0),i&&i.forEach(r=>Ze(n,r,t,!0));for(const r in e)if(!(s&&r==="expose")){const o=G1[r]||t&&t[r];n[r]=o?o(n[r],e[r]):e[r]}return n}const G1={data:fs,props:us,emits:us,methods:xe,computed:xe,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:xe,directives:xe,watch:k1,provide:fs,inject:J1};function fs(n,e){return e?n?function(){return sn(F(n)?n.call(this,this):n,F(e)?e.call(this,this):e)}:e:n}function J1(n,e){return xe(Rt(n),Rt(e))}function Rt(n){if(D(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function an(n,e){return n?[...new Set([].concat(n,e))]:e}function xe(n,e){return n?sn(Object.create(null),n,e):e}function us(n,e){return n?D(n)&&D(e)?[...new Set([...n,...e])]:sn(Object.create(null),cs(n),cs(e??{})):e}function k1(n,e){if(!n)return e;if(!e)return n;const t=sn(Object.create(null),n);for(const s in e)t[s]=an(n[s],e[s]);return t}function d0(){return{app:null,config:{isNativeTag:N0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let z1=0;function X1(n,e){return function(s,i=null){F(s)||(s=sn({},s)),i!=null&&!X(i)&&(i=null);const l=d0(),r=new WeakSet,o=[];let a=!1;const d=l.app={_uid:z1++,_component:s,_props:i,_container:null,_context:l,_instance:null,version:Fi,get config(){return l.config},set config(u){},use(u,...p){return r.has(u)||(u&&F(u.install)?(r.add(u),u.install(d,...p)):F(u)&&(r.add(u),u(d,...p))),d},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),d},component(u,p){return p?(l.components[u]=p,d):l.components[u]},directive(u,p){return p?(l.directives[u]=p,d):l.directives[u]},mount(u,p,S){if(!a){const C=d._ceVNode||Tn(s,i);return C.appContext=l,S===!0?S="svg":S===!1&&(S=void 0),p&&e?e(C,u):n(C,u,S),a=!0,d._container=u,u.__vue_app__=d,Xt(C.component)}},onUnmount(u){o.push(u)},unmount(){a&&(Fn(o,d._instance,16),n(null,d._container),delete d._container.__vue_app__)},provide(u,p){return l.provides[u]=p,d},runWithContext(u){const p=de;de=d;try{return u()}finally{de=p}}};return d}}let de=null;function Z1(n,e){if(hn){let t=hn.provides;const s=hn.parent&&hn.parent.provides;s===t&&(t=hn.provides=Object.create(s)),t[n]=e}}function We(n,e,t=!1){const s=hn||Dn;if(s||de){const i=de?de._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&F(e)?e.call(s&&s.proxy):e}}const p0={},g0=()=>Object.create(p0),m0=n=>Object.getPrototypeOf(n)===p0;function Q1(n,e,t,s=!1){const i={},l=g0();n.propsDefaults=Object.create(null),_0(n,e,i,l);for(const r in n.propsOptions[0])r in i||(i[r]=void 0);t?n.props=s?i:m1(i):n.type.props?n.props=i:n.props=l,n.attrs=l}function ni(n,e,t,s){const{props:i,attrs:l,vnode:{patchFlag:r}}=n,o=L(i),[a]=n.propsOptions;let d=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=n.vnode.dynamicProps;for(let p=0;p<u.length;p++){let S=u[p];if(ot(n.emitsOptions,S))continue;const C=e[S];if(a)if(B(l,S))C!==l[S]&&(l[S]=C,d=!0);else{const $=Yn(S);i[$]=At(a,o,$,C,n,!1)}else C!==l[S]&&(l[S]=C,d=!0)}}}else{_0(n,e,i,l)&&(d=!0);let u;for(const p in o)(!e||!B(e,p)&&((u=le(p))===p||!B(e,u)))&&(a?t&&(t[p]!==void 0||t[u]!==void 0)&&(i[p]=At(a,o,p,void 0,n,!0)):delete i[p]);if(l!==o)for(const p in l)(!e||!B(e,p))&&(delete l[p],d=!0)}d&&Nn(n.attrs,"set","")}function _0(n,e,t,s){const[i,l]=n.propsOptions;let r=!1,o;if(e)for(let a in e){if(we(a))continue;const d=e[a];let u;i&&B(i,u=Yn(a))?!l||!l.includes(u)?t[u]=d:(o||(o={}))[u]=d:ot(n.emitsOptions,a)||(!(a in s)||d!==s[a])&&(s[a]=d,r=!0)}if(l){const a=L(t),d=o||G;for(let u=0;u<l.length;u++){const p=l[u];t[p]=At(i,a,p,d[p],n,!B(d,p))}}return r}function At(n,e,t,s,i,l){const r=n[t];if(r!=null){const o=B(r,"default");if(o&&s===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&F(a)){const{propsDefaults:d}=i;if(t in d)s=d[t];else{const u=$e(i);s=d[t]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(t,s)}r[0]&&(l&&!o?s=!1:r[1]&&(s===""||s===le(t))&&(s=!0))}return s}const ei=new WeakMap;function b0(n,e,t=!1){const s=t?ei:e.propsCache,i=s.get(n);if(i)return i;const l=n.props,r={},o=[];let a=!1;if(!F(n)){const u=p=>{a=!0;const[S,C]=b0(p,e,!0);sn(r,S),C&&o.push(...C)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!l&&!a)return X(n)&&s.set(n,ae),ae;if(D(l))for(let u=0;u<l.length;u++){const p=Yn(l[u]);hs(p)&&(r[p]=G)}else if(l)for(const u in l){const p=Yn(u);if(hs(p)){const S=l[u],C=r[p]=D(S)||F(S)?{type:S}:sn({},S),$=C.type;let j=!1,en=!0;if(D($))for(let A=0;A<$.length;++A){const K=$[A],J=F(K)&&K.name;if(J==="Boolean"){j=!0;break}else J==="String"&&(en=!1)}else j=F($)&&$.name==="Boolean";C[0]=j,C[1]=en,(j||B(C,"default"))&&o.push(p)}}const d=[r,o];return X(n)&&s.set(n,d),d}function hs(n){return n[0]!=="$"&&!we(n)}const y0=n=>n[0]==="_"||n==="$stable",kt=n=>D(n)?n.map(Mn):[Mn(n)],ti=(n,e,t)=>{if(e._n)return e;const s=A1((...i)=>kt(e(...i)),t);return s._c=!1,s},v0=(n,e,t)=>{const s=n._ctx;for(const i in n){if(y0(i))continue;const l=n[i];if(F(l))e[i]=ti(i,l,s);else if(l!=null){const r=kt(l);e[i]=()=>r}}},x0=(n,e)=>{const t=kt(e);n.slots.default=()=>t},w0=(n,e,t)=>{for(const s in e)(t||s!=="_")&&(n[s]=e[s])},si=(n,e,t)=>{const s=n.slots=g0();if(n.vnode.shapeFlag&32){const i=e._;i?(w0(s,e,t),t&&js(s,"_",i,!0)):v0(e,s)}else e&&x0(n,e)},ii=(n,e,t)=>{const{vnode:s,slots:i}=n;let l=!0,r=G;if(s.shapeFlag&32){const o=e._;o?t&&o===1?l=!1:w0(i,e,t):(l=!e.$stable,v0(e,i)),r=e}else e&&(x0(n,e),r={default:1});if(l)for(const o in i)!y0(o)&&r[o]==null&&delete i[o]},bn=bi;function li(n){return ri(n)}function ri(n,e){const t=st();t.__VUE__=!0;const{insert:s,remove:i,patchProp:l,createElement:r,createText:o,createComment:a,setText:d,setElementText:u,parentNode:p,nextSibling:S,setScopeId:C=In,insertStaticContent:$}=n,j=(c,f,h,_=null,g=null,m=null,x=void 0,v=null,y=!!f.dynamicChildren)=>{if(c===f)return;c&&!ye(c,f)&&(_=Ne(c),En(c,g,m,!0),c=null),f.patchFlag===-2&&(y=!1,f.dynamicChildren=null);const{type:b,ref:E,shapeFlag:w}=f;switch(b){case ct:en(c,f,h,_);break;case ie:A(c,f,h,_);break;case qe:c==null&&K(f,h,_,x);break;case pn:Hn(c,f,h,_,g,m,x,v,y);break;default:w&1?k(c,f,h,_,g,m,x,v,y):w&6?Bn(c,f,h,_,g,m,x,v,y):(w&64||w&128)&&b.process(c,f,h,_,g,m,x,v,y,me)}E!=null&&g&&Xe(E,c&&c.ref,m,f||c,!f)},en=(c,f,h,_)=>{if(c==null)s(f.el=o(f.children),h,_);else{const g=f.el=c.el;f.children!==c.children&&d(g,f.children)}},A=(c,f,h,_)=>{c==null?s(f.el=a(f.children||""),h,_):f.el=c.el},K=(c,f,h,_)=>{[c.el,c.anchor]=$(c.children,f,h,_,c.el,c.anchor)},J=({el:c,anchor:f},h,_)=>{let g;for(;c&&c!==f;)g=S(c),s(c,h,_),c=g;s(f,h,_)},R=({el:c,anchor:f})=>{let h;for(;c&&c!==f;)h=S(c),i(c),c=h;i(f)},k=(c,f,h,_,g,m,x,v,y)=>{f.type==="svg"?x="svg":f.type==="math"&&(x="mathml"),c==null?On(f,h,_,g,m,x,v,y):P(c,f,g,m,x,v,y)},On=(c,f,h,_,g,m,x,v)=>{let y,b;const{props:E,shapeFlag:w,transition:T,dirs:M}=c;if(y=c.el=r(c.type,m,E&&E.is,E),w&8?u(y,c.children):w&16&&O(c.children,y,null,_,g,_t(c,m),x,v),M&&Qn(c,null,_,"created"),H(y,c,c.scopeId,x,_),E){for(const q in E)q!=="value"&&!we(q)&&l(y,q,null,E[q],m,_);"value"in E&&l(y,"value",null,E.value,m),(b=E.onVnodeBeforeMount)&&An(b,_,c)}M&&Qn(c,null,_,"beforeMount");const N=oi(g,T);N&&T.beforeEnter(y),s(y,f,h),((b=E&&E.onVnodeMounted)||N||M)&&bn(()=>{b&&An(b,_,c),N&&T.enter(y),M&&Qn(c,null,_,"mounted")},g)},H=(c,f,h,_,g)=>{if(h&&C(c,h),_)for(let m=0;m<_.length;m++)C(c,_[m]);if(g){let m=g.subTree;if(f===m||R0(m.type)&&(m.ssContent===f||m.ssFallback===f)){const x=g.vnode;H(c,x,x.scopeId,x.slotScopeIds,g.parent)}}},O=(c,f,h,_,g,m,x,v,y=0)=>{for(let b=y;b<c.length;b++){const E=c[b]=v?Vn(c[b]):Mn(c[b]);j(null,E,f,h,_,g,m,x,v)}},P=(c,f,h,_,g,m,x)=>{const v=f.el=c.el;let{patchFlag:y,dynamicChildren:b,dirs:E}=f;y|=c.patchFlag&16;const w=c.props||G,T=f.props||G;let M;if(h&&ne(h,!1),(M=T.onVnodeBeforeUpdate)&&An(M,h,f,c),E&&Qn(f,c,h,"beforeUpdate"),h&&ne(h,!0),(w.innerHTML&&T.innerHTML==null||w.textContent&&T.textContent==null)&&u(v,""),b?I(c.dynamicChildren,b,v,h,_,_t(f,g),m):x||W(c,f,v,null,h,_,_t(f,g),m,!1),y>0){if(y&16)Z(v,w,T,h,g);else if(y&2&&w.class!==T.class&&l(v,"class",null,T.class,g),y&4&&l(v,"style",w.style,T.style,g),y&8){const N=f.dynamicProps;for(let q=0;q<N.length;q++){const U=N[q],gn=w[U],ln=T[U];(ln!==gn||U==="value")&&l(v,U,gn,ln,g,h)}}y&1&&c.children!==f.children&&u(v,f.children)}else!x&&b==null&&Z(v,w,T,h,g);((M=T.onVnodeUpdated)||E)&&bn(()=>{M&&An(M,h,f,c),E&&Qn(f,c,h,"updated")},_)},I=(c,f,h,_,g,m,x)=>{for(let v=0;v<f.length;v++){const y=c[v],b=f[v],E=y.el&&(y.type===pn||!ye(y,b)||y.shapeFlag&70)?p(y.el):h;j(y,b,E,null,_,g,m,x,!0)}},Z=(c,f,h,_,g)=>{if(f!==h){if(f!==G)for(const m in f)!we(m)&&!(m in h)&&l(c,m,f[m],null,g,_);for(const m in h){if(we(m))continue;const x=h[m],v=f[m];x!==v&&m!=="value"&&l(c,m,v,x,g,_)}"value"in h&&l(c,"value",f.value,h.value,g)}},Hn=(c,f,h,_,g,m,x,v,y)=>{const b=f.el=c?c.el:o(""),E=f.anchor=c?c.anchor:o("");let{patchFlag:w,dynamicChildren:T,slotScopeIds:M}=f;M&&(v=v?v.concat(M):M),c==null?(s(b,h,_),s(E,h,_),O(f.children||[],h,E,g,m,x,v,y)):w>0&&w&64&&T&&c.dynamicChildren?(I(c.dynamicChildren,T,h,g,m,x,v),(f.key!=null||g&&f===g.subTree)&&S0(c,f,!0)):W(c,f,h,E,g,m,x,v,y)},Bn=(c,f,h,_,g,m,x,v,y)=>{f.slotScopeIds=v,c==null?f.shapeFlag&512?g.ctx.activate(f,h,_,x,y):zn(f,h,_,g,m,x,y):re(c,f,y)},zn=(c,f,h,_,g,m,x)=>{const v=c.component=Ei(c,_,g);if(a0(c)&&(v.ctx.renderer=me),Ri(v,!1,x),v.asyncDep){if(g&&g.registerDep(v,cn,x),!c.el){const y=v.subTree=Tn(ie);A(null,y,f,h)}}else cn(v,c,f,h,g,m,x)},re=(c,f,h)=>{const _=f.component=c.component;if(mi(c,f,h))if(_.asyncDep&&!_.asyncResolved){z(_,f,h);return}else _.next=f,_.update();else f.el=c.el,_.vnode=f},cn=(c,f,h,_,g,m,x)=>{const v=()=>{if(c.isMounted){let{next:w,bu:T,u:M,parent:N,vnode:q}=c;{const mn=C0(c);if(mn){w&&(w.el=q.el,z(c,w,x)),mn.asyncDep.then(()=>{c.isUnmounted||v()});return}}let U=w,gn;ne(c,!1),w?(w.el=q.el,z(c,w,x)):w=q,T&&ut(T),(gn=w.props&&w.props.onVnodeBeforeUpdate)&&An(gn,N,w,q),ne(c,!0);const ln=bt(c),Sn=c.subTree;c.subTree=ln,j(Sn,ln,p(Sn.el),Ne(Sn),c,g,m),w.el=ln.el,U===null&&_i(c,ln.el),M&&bn(M,g),(gn=w.props&&w.props.onVnodeUpdated)&&bn(()=>An(gn,N,w,q),g)}else{let w;const{el:T,props:M}=f,{bm:N,m:q,parent:U,root:gn,type:ln}=c,Sn=Te(f);if(ne(c,!1),N&&ut(N),!Sn&&(w=M&&M.onVnodeBeforeMount)&&An(w,U,f),ne(c,!0),T&&es){const mn=()=>{c.subTree=bt(c),es(T,c.subTree,c,g,null)};Sn&&ln.__asyncHydrate?ln.__asyncHydrate(T,c,mn):mn()}else{gn.ce&&gn.ce._injectChildStyle(ln);const mn=c.subTree=bt(c);j(null,mn,h,_,c,g,m),f.el=mn.el}if(q&&bn(q,g),!Sn&&(w=M&&M.onVnodeMounted)){const mn=f;bn(()=>An(w,U,mn),g)}(f.shapeFlag&256||U&&Te(U.vnode)&&U.vnode.shapeFlag&256)&&c.a&&bn(c.a,g),c.isMounted=!0,f=h=_=null}};c.scope.on();const y=c.effect=new Us(v);c.scope.off();const b=c.update=y.run.bind(y),E=c.job=y.runIfDirty.bind(y);E.i=c,E.id=c.uid,y.scheduler=()=>qt(E),ne(c,!0),b()},z=(c,f,h)=>{f.component=c;const _=c.vnode.props;c.vnode=f,c.next=null,ni(c,f.props,_,h),ii(c,f.children,h),Jn(),os(c),kn()},W=(c,f,h,_,g,m,x,v,y=!1)=>{const b=c&&c.children,E=c?c.shapeFlag:0,w=f.children,{patchFlag:T,shapeFlag:M}=f;if(T>0){if(T&128){je(b,w,h,_,g,m,x,v,y);return}else if(T&256){Xn(b,w,h,_,g,m,x,v,y);return}}M&8?(E&16&&ge(b,g,m),w!==b&&u(h,w)):E&16?M&16?je(b,w,h,_,g,m,x,v,y):ge(b,g,m,!0):(E&8&&u(h,""),M&16&&O(w,h,_,g,m,x,v,y))},Xn=(c,f,h,_,g,m,x,v,y)=>{c=c||ae,f=f||ae;const b=c.length,E=f.length,w=Math.min(b,E);let T;for(T=0;T<w;T++){const M=f[T]=y?Vn(f[T]):Mn(f[T]);j(c[T],M,h,null,g,m,x,v,y)}b>E?ge(c,g,m,!0,!1,w):O(f,h,_,g,m,x,v,y,w)},je=(c,f,h,_,g,m,x,v,y)=>{let b=0;const E=f.length;let w=c.length-1,T=E-1;for(;b<=w&&b<=T;){const M=c[b],N=f[b]=y?Vn(f[b]):Mn(f[b]);if(ye(M,N))j(M,N,h,null,g,m,x,v,y);else break;b++}for(;b<=w&&b<=T;){const M=c[w],N=f[T]=y?Vn(f[T]):Mn(f[T]);if(ye(M,N))j(M,N,h,null,g,m,x,v,y);else break;w--,T--}if(b>w){if(b<=T){const M=T+1,N=M<E?f[M].el:_;for(;b<=T;)j(null,f[b]=y?Vn(f[b]):Mn(f[b]),h,N,g,m,x,v,y),b++}}else if(b>T)for(;b<=w;)En(c[b],g,m,!0),b++;else{const M=b,N=b,q=new Map;for(b=N;b<=T;b++){const _n=f[b]=y?Vn(f[b]):Mn(f[b]);_n.key!=null&&q.set(_n.key,b)}let U,gn=0;const ln=T-N+1;let Sn=!1,mn=0;const _e=new Array(ln);for(b=0;b<ln;b++)_e[b]=0;for(b=M;b<=w;b++){const _n=c[b];if(gn>=ln){En(_n,g,m,!0);continue}let Rn;if(_n.key!=null)Rn=q.get(_n.key);else for(U=N;U<=T;U++)if(_e[U-N]===0&&ye(_n,f[U])){Rn=U;break}Rn===void 0?En(_n,g,m,!0):(_e[Rn-N]=b+1,Rn>=mn?mn=Rn:Sn=!0,j(_n,f[Rn],h,null,g,m,x,v,y),gn++)}const ts=Sn?ci(_e):ae;for(U=ts.length-1,b=ln-1;b>=0;b--){const _n=N+b,Rn=f[_n],ss=_n+1<E?f[_n+1].el:_;_e[b]===0?j(null,Rn,h,ss,g,m,x,v,y):Sn&&(U<0||b!==ts[U]?Zn(Rn,h,ss,2):U--)}}},Zn=(c,f,h,_,g=null)=>{const{el:m,type:x,transition:v,children:y,shapeFlag:b}=c;if(b&6){Zn(c.component.subTree,f,h,_);return}if(b&128){c.suspense.move(f,h,_);return}if(b&64){x.move(c,f,h,me);return}if(x===pn){s(m,f,h);for(let w=0;w<y.length;w++)Zn(y[w],f,h,_);s(c.anchor,f,h);return}if(x===qe){J(c,f,h);return}if(_!==2&&b&1&&v)if(_===0)v.beforeEnter(m),s(m,f,h),bn(()=>v.enter(m),g);else{const{leave:w,delayLeave:T,afterLeave:M}=v,N=()=>s(m,f,h),q=()=>{w(m,()=>{N(),M&&M()})};T?T(m,N,q):q()}else s(m,f,h)},En=(c,f,h,_=!1,g=!1)=>{const{type:m,props:x,ref:v,children:y,dynamicChildren:b,shapeFlag:E,patchFlag:w,dirs:T,cacheIndex:M}=c;if(w===-2&&(g=!1),v!=null&&Xe(v,null,h,c,!0),M!=null&&(f.renderCache[M]=void 0),E&256){f.ctx.deactivate(c);return}const N=E&1&&T,q=!Te(c);let U;if(q&&(U=x&&x.onVnodeBeforeUnmount)&&An(U,f,c),E&6)j0(c.component,h,_);else{if(E&128){c.suspense.unmount(h,_);return}N&&Qn(c,null,f,"beforeUnmount"),E&64?c.type.remove(c,f,h,me,_):b&&!b.hasOnce&&(m!==pn||w>0&&w&64)?ge(b,f,h,!1,!0):(m===pn&&w&384||!g&&E&16)&&ge(y,f,h),_&&Zt(c)}(q&&(U=x&&x.onVnodeUnmounted)||N)&&bn(()=>{U&&An(U,f,c),N&&Qn(c,null,f,"unmounted")},h)},Zt=c=>{const{type:f,el:h,anchor:_,transition:g}=c;if(f===pn){$0(h,_);return}if(f===qe){R(c);return}const m=()=>{i(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:x,delayLeave:v}=g,y=()=>x(h,m);v?v(c.el,m,y):y()}else m()},$0=(c,f)=>{let h;for(;c!==f;)h=S(c),i(c),c=h;i(f)},j0=(c,f,h)=>{const{bum:_,scope:g,job:m,subTree:x,um:v,m:y,a:b}=c;ds(y),ds(b),_&&ut(_),g.stop(),m&&(m.flags|=8,En(x,c,f,h)),v&&bn(v,f),bn(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},ge=(c,f,h,_=!1,g=!1,m=0)=>{for(let x=m;x<c.length;x++)En(c[x],f,h,_,g)},Ne=c=>{if(c.shapeFlag&6)return Ne(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=S(c.anchor||c.el),h=f&&f[P1];return h?S(h):f};let at=!1;const Qt=(c,f,h)=>{c==null?f._vnode&&En(f._vnode,null,null,!0):j(f._vnode||null,c,f,null,null,null,h),f._vnode=c,at||(at=!0,os(),l0(),at=!1)},me={p:j,um:En,m:Zn,r:Zt,mt:zn,mc:O,pc:W,pbc:I,n:Ne,o:n};let ns,es;return{render:Qt,hydrate:ns,createApp:X1(Qt,ns)}}function _t({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ne({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function oi(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function S0(n,e,t=!1){const s=n.children,i=e.children;if(D(s)&&D(i))for(let l=0;l<s.length;l++){const r=s[l];let o=i[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[l]=Vn(i[l]),o.el=r.el),!t&&o.patchFlag!==-2&&S0(r,o)),o.type===ct&&(o.el=r.el)}}function ci(n){const e=n.slice(),t=[0];let s,i,l,r,o;const a=n.length;for(s=0;s<a;s++){const d=n[s];if(d!==0){if(i=t[t.length-1],n[i]<d){e[s]=i,t.push(s);continue}for(l=0,r=t.length-1;l<r;)o=l+r>>1,n[t[o]]<d?l=o+1:r=o;d<n[t[l]]&&(l>0&&(e[s]=t[l-1]),t[l]=s)}}for(l=t.length,r=t[l-1];l-- >0;)t[l]=r,r=e[r];return t}function C0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:C0(e)}function ds(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const ai=Symbol.for("v-scx"),fi=()=>We(ai);function Ee(n,e,t){return T0(n,e,t)}function T0(n,e,t=G){const{immediate:s,deep:i,flush:l,once:r}=t,o=sn({},t),a=e&&s||!e&&l!=="post";let d;if(Fe){if(l==="sync"){const C=fi();d=C.__watcherHandles||(C.__watcherHandles=[])}else if(!a){const C=()=>{};return C.stop=In,C.resume=In,C.pause=In,C}}const u=hn;o.call=(C,$,j)=>Fn(C,u,$,j);let p=!1;l==="post"?o.scheduler=C=>{bn(C,u&&u.suspense)}:l!=="sync"&&(p=!0,o.scheduler=(C,$)=>{$?C():qt(C)}),o.augmentJob=C=>{e&&(C.flags|=4),p&&(C.flags|=2,u&&(C.id=u.uid,C.i=u))};const S=C1(n,e,o);return Fe&&(d?d.push(S):a&&S()),S}function ui(n,e,t){const s=this.proxy,i=Q(n)?n.includes(".")?O0(s,n):()=>s[n]:n.bind(s,s);let l;F(e)?l=e:(l=e.handler,t=e);const r=$e(this),o=T0(i,l.bind(s),t);return r(),o}function O0(n,e){const t=e.split(".");return()=>{let s=n;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const hi=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Yn(e)}Modifiers`]||n[`${le(e)}Modifiers`];function di(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||G;let i=t;const l=e.startsWith("update:"),r=l&&hi(s,e.slice(7));r&&(r.trim&&(i=t.map(u=>Q(u)?u.trim():u)),r.number&&(i=t.map(K0)));let o,a=s[o=ft(e)]||s[o=ft(Yn(e))];!a&&l&&(a=s[o=ft(le(e))]),a&&Fn(a,n,6,i);const d=s[o+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Fn(d,n,6,i)}}function E0(n,e,t=!1){const s=e.emitsCache,i=s.get(n);if(i!==void 0)return i;const l=n.emits;let r={},o=!1;if(!F(n)){const a=d=>{const u=E0(d,e,!0);u&&(o=!0,sn(r,u))};!t&&e.mixins.length&&e.mixins.forEach(a),n.extends&&a(n.extends),n.mixins&&n.mixins.forEach(a)}return!l&&!o?(X(n)&&s.set(n,null),null):(D(l)?l.forEach(a=>r[a]=null):sn(r,l),X(n)&&s.set(n,r),r)}function ot(n,e){return!n||!nt(e)?!1:(e=e.slice(2).replace(/Once$/,""),B(n,e[0].toLowerCase()+e.slice(1))||B(n,le(e))||B(n,e))}function bt(n){const{type:e,vnode:t,proxy:s,withProxy:i,propsOptions:[l],slots:r,attrs:o,emit:a,render:d,renderCache:u,props:p,data:S,setupState:C,ctx:$,inheritAttrs:j}=n,en=ze(n);let A,K;try{if(t.shapeFlag&4){const R=i||s,k=R;A=Mn(d.call(k,R,u,p,C,S,$)),K=o}else{const R=e;A=Mn(R.length>1?R(p,{attrs:o,slots:r,emit:a}):R(p,null)),K=e.props?o:pi(o)}}catch(R){Re.length=0,lt(R,n,1),A=Tn(ie)}let J=A;if(K&&j!==!1){const R=Object.keys(K),{shapeFlag:k}=J;R.length&&k&7&&(l&&R.some(Ft)&&(K=gi(K,l)),J=pe(J,K,!1,!0))}return t.dirs&&(J=pe(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(t.dirs):t.dirs),t.transition&&Yt(J,t.transition),A=J,ze(en),A}const pi=n=>{let e;for(const t in n)(t==="class"||t==="style"||nt(t))&&((e||(e={}))[t]=n[t]);return e},gi=(n,e)=>{const t={};for(const s in n)(!Ft(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function mi(n,e,t){const{props:s,children:i,component:l}=n,{props:r,children:o,patchFlag:a}=e,d=l.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return s?ps(s,r,d):!!r;if(a&8){const u=e.dynamicProps;for(let p=0;p<u.length;p++){const S=u[p];if(r[S]!==s[S]&&!ot(d,S))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:s===r?!1:s?r?ps(s,r,d):!0:!!r;return!1}function ps(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let i=0;i<s.length;i++){const l=s[i];if(e[l]!==n[l]&&!ot(t,l))return!0}return!1}function _i({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const R0=n=>n.__isSuspense;function bi(n,e){e&&e.pendingBranch?D(n)?e.effects.push(...n):e.effects.push(n):R1(n)}const pn=Symbol.for("v-fgt"),ct=Symbol.for("v-txt"),ie=Symbol.for("v-cmt"),qe=Symbol.for("v-stc"),Re=[];let vn=null;function fn(n=!1){Re.push(vn=n?null:[])}function yi(){Re.pop(),vn=Re[Re.length-1]||null}let Ie=1;function gs(n,e=!1){Ie+=n,n<0&&vn&&e&&(vn.hasOnce=!0)}function A0(n){return n.dynamicChildren=Ie>0?vn||ae:null,yi(),Ie>0&&vn&&vn.push(n),n}function dn(n,e,t,s,i,l){return A0(V(n,e,t,s,i,l,!0))}function vi(n,e,t,s,i){return A0(Tn(n,e,t,s,i,!0))}function P0(n){return n?n.__v_isVNode===!0:!1}function ye(n,e){return n.type===e.type&&n.key===e.key}const M0=({key:n})=>n??null,Ye=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Q(n)||tn(n)||F(n)?{i:Dn,r:n,k:e,f:!!t}:n:null);function V(n,e=null,t=null,s=0,i=null,l=n===pn?0:1,r=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&M0(e),ref:e&&Ye(e),scopeId:o0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Dn};return o?(zt(a,t),l&128&&n.normalize(a)):t&&(a.shapeFlag|=Q(t)?8:16),Ie>0&&!r&&vn&&(a.patchFlag>0||l&6)&&a.patchFlag!==32&&vn.push(a),a}const Tn=xi;function xi(n,e=null,t=null,s=0,i=null,l=!1){if((!n||n===K1)&&(n=ie),P0(n)){const o=pe(n,e,!0);return t&&zt(o,t),Ie>0&&!l&&vn&&(o.shapeFlag&6?vn[vn.indexOf(n)]=o:vn.push(o)),o.patchFlag=-2,o}if(Di(n)&&(n=n.__vccOpts),e){e=wi(e);let{class:o,style:a}=e;o&&!Q(o)&&(e.class=Kn(o)),X(a)&&(Wt(a)&&!D(a)&&(a=sn({},a)),e.style=jt(a))}const r=Q(n)?1:R0(n)?128:M1(n)?64:X(n)?4:F(n)?2:0;return V(n,e,t,s,i,r,l,!0)}function wi(n){return n?Wt(n)||m0(n)?sn({},n):n:null}function pe(n,e,t=!1,s=!1){const{props:i,ref:l,patchFlag:r,children:o,transition:a}=n,d=e?Ci(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:d,key:d&&M0(d),ref:e&&e.ref?t&&l?D(l)?l.concat(Ye(e)):[l,Ye(e)]:Ye(e):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==pn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:a,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&pe(n.ssContent),ssFallback:n.ssFallback&&pe(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return a&&s&&Yt(u,a.clone(u)),u}function D0(n=" ",e=0){return Tn(ct,null,n,e)}function Si(n,e){const t=Tn(qe,null,n);return t.staticCount=e,t}function ve(n="",e=!1){return e?(fn(),vi(ie,null,n)):Tn(ie,null,n)}function Mn(n){return n==null||typeof n=="boolean"?Tn(ie):D(n)?Tn(pn,null,n.slice()):P0(n)?Vn(n):Tn(ct,null,String(n))}function Vn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:pe(n)}function zt(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(D(e))t=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),zt(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!m0(e)?e._ctx=Dn:i===3&&Dn&&(Dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:Dn},t=32):(e=String(e),s&64?(t=16,e=[D0(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ci(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Kn([e.class,s.class]));else if(i==="style")e.style=jt([e.style,s.style]);else if(nt(i)){const l=e[i],r=s[i];r&&l!==r&&!(D(l)&&l.includes(r))&&(e[i]=l?[].concat(l,r):r)}else i!==""&&(e[i]=s[i])}return e}function An(n,e,t,s=null){Fn(n,e,7,[t,s])}const Ti=d0();let Oi=0;function Ei(n,e,t){const s=n.type,i=(e?e.appContext:n.appContext)||Ti,l={uid:Oi++,vnode:n,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new z0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:b0(s,i),emitsOptions:E0(s,i),emit:null,emitted:null,propsDefaults:G,inheritAttrs:s.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=e?e.root:l,l.emit=di.bind(null,l),n.ce&&n.ce(l),l}let hn=null,Qe,Pt;{const n=st(),e=(t,s)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(s),l=>{i.length>1?i.forEach(r=>r(l)):i[0](l)}};Qe=e("__VUE_INSTANCE_SETTERS__",t=>hn=t),Pt=e("__VUE_SSR_SETTERS__",t=>Fe=t)}const $e=n=>{const e=hn;return Qe(n),n.scope.on(),()=>{n.scope.off(),Qe(e)}},ms=()=>{hn&&hn.scope.off(),Qe(null)};function I0(n){return n.vnode.shapeFlag&4}let Fe=!1;function Ri(n,e=!1,t=!1){e&&Pt(e);const{props:s,children:i}=n.vnode,l=I0(n);Q1(n,s,l,e),si(n,i,t);const r=l?Ai(n,e):void 0;return e&&Pt(!1),r}function Ai(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,W1);const{setup:s}=t;if(s){Jn();const i=n.setupContext=s.length>1?Mi(n):null,l=$e(n),r=He(s,n,0,[n.props,i]),o=Is(r);if(kn(),l(),(o||n.sp)&&!Te(n)&&c0(n),o){if(r.then(ms,ms),e)return r.then(a=>{_s(n,a,e)}).catch(a=>{lt(a,n,0)});n.asyncDep=r}else _s(n,r,e)}else F0(n,e)}function _s(n,e,t){F(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:X(e)&&(n.setupState=t0(e)),F0(n,t)}let bs;function F0(n,e,t){const s=n.type;if(!n.render){if(!e&&bs&&!s.render){const i=s.template||Jt(n).template;if(i){const{isCustomElement:l,compilerOptions:r}=n.appContext.config,{delimiters:o,compilerOptions:a}=s,d=sn(sn({isCustomElement:l,delimiters:o},r),a);s.render=bs(i,d)}}n.render=s.render||In}{const i=$e(n);Jn();try{q1(n)}finally{kn(),i()}}}const Pi={get(n,e){return rn(n,"get",""),n[e]}};function Mi(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Pi),slots:n.slots,emit:n.emit,expose:e}}function Xt(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(t0(_1(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Oe)return Oe[t](n)},has(e,t){return t in e||t in Oe}})):n.proxy}function Di(n){return F(n)&&"__vccOpts"in n}const Ii=(n,e)=>w1(n,e,Fe),Fi="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;const ys=typeof window<"u"&&window.trustedTypes;if(ys)try{Mt=ys.createPolicy("vue",{createHTML:n=>n})}catch{}const H0=Mt?n=>Mt.createHTML(n):n=>n,Hi="http://www.w3.org/2000/svg",$i="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,vs=jn&&jn.createElement("template"),ji={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const i=e==="svg"?jn.createElementNS(Hi,n):e==="mathml"?jn.createElementNS($i,n):t?jn.createElement(n,{is:t}):jn.createElement(n);return n==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:n=>jn.createTextNode(n),createComment:n=>jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,i,l){const r=t?t.previousSibling:e.lastChild;if(i&&(i===l||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===l||!(i=i.nextSibling)););else{vs.innerHTML=H0(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const o=vs.content;if(s==="svg"||s==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}e.insertBefore(o,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ni=Symbol("_vtc");function Li(n,e,t){const s=n[Ni];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const xs=Symbol("_vod"),Bi=Symbol("_vsh"),Ui=Symbol(""),Vi=/(^|;)\s*display\s*:/;function Ki(n,e,t){const s=n.style,i=Q(t);let l=!1;if(t&&!i){if(e)if(Q(e))for(const r of e.split(";")){const o=r.slice(0,r.indexOf(":")).trim();t[o]==null&&Ge(s,o,"")}else for(const r in e)t[r]==null&&Ge(s,r,"");for(const r in t)r==="display"&&(l=!0),Ge(s,r,t[r])}else if(i){if(e!==t){const r=s[Ui];r&&(t+=";"+r),s.cssText=t,l=Vi.test(t)}}else e&&n.removeAttribute("style");xs in n&&(n[xs]=l?s.display:"",n[Bi]&&(s.display="none"))}const ws=/\s*!important$/;function Ge(n,e,t){if(D(t))t.forEach(s=>Ge(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=Wi(n,e);ws.test(t)?n.setProperty(le(s),t.replace(ws,""),"important"):n[s]=t}}const Ss=["Webkit","Moz","ms"],yt={};function Wi(n,e){const t=yt[e];if(t)return t;let s=Yn(e);if(s!=="filter"&&s in n)return yt[e]=s;s=$s(s);for(let i=0;i<Ss.length;i++){const l=Ss[i]+s;if(l in n)return yt[e]=l}return e}const Cs="http://www.w3.org/1999/xlink";function Ts(n,e,t,s,i,l=k0(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Cs,e.slice(6,e.length)):n.setAttributeNS(Cs,e,t):t==null||l&&!Ns(t)?n.removeAttribute(e):n.setAttribute(e,l?"":Gn(t)?String(t):t)}function Os(n,e,t,s,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?H0(t):t);return}const l=n.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const o=l==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Ns(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(i||e)}function qi(n,e,t,s){n.addEventListener(e,t,s)}function Yi(n,e,t,s){n.removeEventListener(e,t,s)}const Es=Symbol("_vei");function Gi(n,e,t,s,i=null){const l=n[Es]||(n[Es]={}),r=l[e];if(s&&r)r.value=s;else{const[o,a]=Ji(e);if(s){const d=l[e]=Xi(s,i);qi(n,o,d,a)}else r&&(Yi(n,o,r,a),l[e]=void 0)}}const Rs=/(?:Once|Passive|Capture)$/;function Ji(n){let e;if(Rs.test(n)){e={};let s;for(;s=n.match(Rs);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):le(n.slice(2)),e]}let vt=0;const ki=Promise.resolve(),zi=()=>vt||(ki.then(()=>vt=0),vt=Date.now());function Xi(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Fn(Zi(s,t.value),e,5,[s])};return t.value=n,t.attached=zi(),t}function Zi(n,e){if(D(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const As=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Qi=(n,e,t,s,i,l)=>{const r=i==="svg";e==="class"?Li(n,s,r):e==="style"?Ki(n,t,s):nt(e)?Ft(e)||Gi(n,e,t,s,l):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):n2(n,e,s,r))?(Os(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ts(n,e,s,r,l,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Q(s))?Os(n,Yn(e),s,l,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),Ts(n,e,s,r))};function n2(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&As(e)&&F(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return As(e)&&Q(t)?!1:e in n}const e2=sn({patchProp:Qi},ji);let Ps;function t2(){return Ps||(Ps=li(e2))}const s2=(...n)=>{const e=t2().createApp(...n),{mount:t}=e;return e.mount=s=>{const i=l2(s);if(!i)return;const l=e._component;!F(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=t(i,!1,i2(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},e};function i2(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function l2(n){return Q(n)?document.querySelector(n):n}const Dt={s1:[{name:"红色背景",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#c14949",n.fillRect(0,0,e,t)}},{name:"红色长条",strategy:(n,e,t,s,i)=>{n.fillStyle="red",n.globalCompositeOperation="destination-over",s.forEach(l=>{n.fillRect(l/24*e,0,e/24,t)})}}],s2:[{name:"紫色背景",id:"s21",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#d58585",n.fillRect(0,0,e,t)}}],s3:[{name:"蓝色进度条",id:"s31",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#8fb3f7",n.fillRect(e/3,t-t/10*s,e/3,t/10*s)}}],s4:[{name:"粉红进度条",id:"s41",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#ffd6e7",n.fillRect(e/3*2,t-t/10*s,e/3,t/10*s)}}],hh:[{name:"绿色进度条",id:"hh1",strategy:(n,e,t,s,i)=>{n.globalCompositeOperation="destination-over",n.fillStyle="#88ff8a",n.fillRect(0,t-t/10*s,e/3,t/10*s)}}],coner:[{name:"左上角大字",id:"coner1",strategy:(n,e,t,s,i)=>{n.font="50px gray",n.fillStyle="#2c2c2c",n.textBaseline="top",n.fillText(s[0],10,10)}}],memo:[{name:"左下角展示",id:"memo1",strategy:(n,e,t,s,i)=>{n.font="20px gray",n.fillStyle="black",n.textBaseline="bottom",n.fillText(s,10,t-10)}}],detail:[{name:"粉红badge",id:"detail1",strategy:(n,e,t,s,i)=>{}}]},r2={s1:"大发",s2:"大发不抽",s3:"小发",s4:"轻微发",hh:"恍惚",coner:"事件",memo:"备注",detail:"详情"},Ms={s1:0,s2:0,s3:0,s4:0,hh:0,coner:0,memo:0,detail:0},o2={class:"record"},c2={__name:"Record",props:{record:Object,strategy:Object},setup(n){const e=n;let t,s,i,l;return Gt(()=>{s=t.getContext("2d"),i=t.width,l=t.height,Ee(e,()=>{if(e.record&&e.strategy&&s){s.clearRect(0,0,i,l);for(let r in e.record)e.strategy[r]!==-1&&Dt[r][e.strategy[r]].strategy&&Dt[r][e.strategy[r]].strategy(s,i,l,e.record[r],e.strategy)}},{deep:!0,immediate:!0})}),(r,o)=>(fn(),dn("div",o2,[V("canvas",{ref:a=>tn(t)?t.value=a:t=a,width:"240",height:"148.32"},null,512)]))}},a2={"2024-02-04":{s1:[7],detail:`2月4号 7点（自己烧饭之类的，不开心？）尿了？
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
身体向左转，可能是想向门外求救，嘴里有血， 白天是去了一妇婴看乳腺，并且小哈前一天哮喘晚上闹，没睡好。`},"2024-04-17":{s3:1,hh:3,detail:`4月17号 2：17 前兆，没发作
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
半夜麻了0次，睡醒麻了0次`,hh:7,s3:0,s4:2},"2025-05-04":{detail:`0813不知道星期几不知道昨晚吃了什么不知道睡前怎么哄小孩睡的
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
半夜麻了0次，睡醒麻了0次`,hh:7,s3:0,s4:2},"2025-05-05":{detail:`0836问小孩晚上怎么睡觉，在床的什么位置都知道，感觉还行，可能晚上没恍惚过
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
半夜麻了0次，睡醒麻了0次`,hh:7,s4:5},"2025-05-06":{detail:`06:41 涨/烫/风凉
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
半夜麻了0次，睡醒麻了1次`,hh:2,s3:1,s4:7},"2025-05-07":{detail:`情绪还是很不好，自杀程度1分，这2天起床都很早，6点
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
半夜麻了0次，睡醒麻了1次`,hh:0,s3:2,s4:8},"2025-05-08":{detail:`自杀的感觉减轻了
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
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:11},"2025-05-09":{detail:`13:08 涨/烫/风凉
14:55 涨/烫/风凉
18:19 耳鸣 嗡嗡
22:48 涨/烫/风凉 22点间一共4次 比较明显
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:7},"2025-05-10":{detail:`09:52 涨/烫/风凉
10:32 涨/烫/风凉
13:00 涨/烫/风凉
14:30 涨/烫/风凉
22:48 涨/烫/风凉 22点间一共3次
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:7},"2025-05-11":{detail:`08:49 涨/烫/风凉
12:11 涨/烫/风凉
今天起床后精神状态一直不太正常
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2025-05-12":{detail:`早上回忆, 好像晚上头顶还是左边头顶有点麻, 忘记了, 因为当时不想说话, 不一定是麻, 总之比平时难受一点.
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
半夜麻了0次，睡醒麻了1次`,hh:0,s3:1,s4:5},"2025-05-14":{detail:`早上还是6点起来的，麻到眼睛了，有口水的感觉，说“像以前的感觉”
08:06 涨/烫/风凉
20:11 涨/烫/风凉
20:46 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:3},"2025-05-15":{detail:`11:20耳朵叮叮
12:10耳朵叮
14:13耳朵叮
14:55叮
21:36 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:5},"2025-05-16":{detail:`15:59耳朵叮叮
半夜麻了0次，睡醒麻了1次`,hh:0,s3:1,s4:1},"2025-05-17":{detail:`到眼睛，不重，没睡好，手表显示4小时16分钟
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2025-05-18":{detail:`今天和奶奶去汽车博物馆，路上他开车快睡着了，但是到晚上21.30还没有洗澡，应该很缺觉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2025-05-19":{detail:`13:23 涨/烫/风凉
16:11耳朵嗡嗡
16:29 有飘起来的感觉, 感觉在飘, 坐在气球上的感觉, 感觉飘了2分钟
17:17回家路上有1秒熟悉感
21:15一秒熟悉感
21:37 涨/烫/风凉
23:28 涨/烫/风凉
00:03麻，是前几天醒来的那种，05好了，有抿嘴，录视频了
半夜麻了1次，睡醒麻了1次`,hh:0,s3:5,s4:4},"2025-05-20":{detail:`早上5点左右小麻，有人，忘记有没有眼睛
14:45 涨/烫/风凉
3.48到3.58起床坐着，最后穿了衣服，房间温度27湿度70
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-05-21":{detail:`15:45耳朵叮叮
10:29 涨/烫/风凉
10:31耳朵叮
11:51耳朵叮叮叮
12:09耳朵嗡嗡
12:20耳朵叮叮叮
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:6},"2025-05-22":{memo:"开始恍惚前兆, 这波恍惚没熟悉感",detail:`10:16 涨/烫/风凉
15:00有点想吐，没熟悉感, 想吐的时间蛮长, 和恍惚的吐是一样的, 有点放空的感觉, 但不是失重, 没有发作性
15:41耳朵叮 有音乐
19:08 涨/烫/风凉
00:34麻了下，失重
早上6.50麻到眼睛，自己觉得以为迟到了硬醒来的
半夜麻了1次，睡醒麻了1次`,hh:0,s3:2,s4:4},"2025-05-23":{detail:`最近肚子疼, 并且晚上睡眠非常差, 晚上入睡晚, 还醒了2次大的
12:42 和昨天的情况差不多, 想吐, 没有熟悉感, 但中间应该一片空白的时间, 等反应过来了知道自己在单位
16:10 想吐, 说”缓一下”, 问有没有熟悉感, 不回答, 11, 回”= =“, 15分发完, 说”算断片”, 感觉”为什么在这里”, 看了旁边同事觉得陌生, 要反应一下.
事后自己说没熟悉感, 说”可能有一点梦境, 我也不知道”
00:03恍惚过了，刚在洗澡，在回忆单位里的画面，觉得像好久以前，回忆说有想吐。
半夜麻了0次，睡醒麻了0次`,hh:3,s3:0,s4:0},"2025-05-24":{detail:`问有没有抑郁，不像以前正面回答，可能发病会导致抑郁
食欲差，一天只吃了2口面条，并拒绝吃饭
09:25恍惚，想吐，左边脑袋烫，肚子烫，胸口烫，想拉屎，26，打嗝，27头好了，问你为什么要记，我刚才干嘛了。全程好像没有熟悉感，全程能对话，但发好就忘记发作，之前的发作周期“前几次”是不会这么严重的。
15:00 恍惚完睡了, 我和哈和奶奶在蟠龙玩, 是17:26微信告诉我, 3点不到恍完睡的, 想吐, 梦境, 不知道为什么在家, 没熟悉感, 当场能想起来情况. 
18:32 说恍惚过了, 最后聊天记录是18点以后, 恍完睡觉, 醒来在想星期几, 我和小哈在哪里之类的问题. (全过程都在这半小时内)
19:44恍惚，在陪小哈玩，我被玻璃刺了，想吐，胸口热，额头热，咽口水，问熟悉感，回答一直有，还可以，没梦境感，45，打嗝，小的嗝，46，好了
20:05 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:4,s3:0,s4:1},"2025-05-25":{detail:`我早上9点17看到他坐窗台上，发呆，问有没有麻，有没有恍惚，都答不知道，所以记了没有麻，但是人绝对不正常，自己能说昨天发生的叫小哈跟我出去的场景，但记忆微弱，是半个月到一个月前的事
9：17 肯定是恍惚过了，而且已经到了恍惚完不知道自己恍惚过了，9.32 恢复点了回忆说6.30起来拉屎，然后睡到8.45起来吃药，吃完坐在窗台玩手机，就恍惚了，很巧我醒了，发生了一开始记录的9.17的事情，然后回忆事情昨天的事，像1，2周前，自己说没有抑郁
14:49 涨/烫/风凉
13：06 恍惚过了，我和奶奶在外面，已经恢复过来了，程度和后续都差不多吧
15:46恍惚，我在烧饭，听到他们不说话了过去问的，发作是46以前的，47好，不知星期几，不知道我为什么要烧菜
15:40 涨/烫/风凉
17:56恍惚，非常难受，想吐，57，说啥也不知道，为什么要问我这些东西都不知道，59，礼拜几，为什么在这里，都不知道，感觉我刚才烧的菜是1，2年前的事，06，问我刚是从厕所出来的吗，去厕所干嘛了，答案是56分记录就是他去厕所，一边说很难受，27，问烧菜，像今天的事情了。
20:46不知道刚才干嘛了，应该是恍惚了，但是想不起来恍惚，也能说个大概刚才干嘛了，53，说有点熟悉感
21:07说自己5分钟前大概恍惚，我是真搞不清了
晚上说不知道在用的绿色的包哪里来的，后来猜了下，猜到了
半夜麻了0次，睡醒麻了0次`,hh:5,s3:0,s4:2},"2025-05-26":{detail:`早起问，没有恍惚，但有抑郁
08:39恍惚，想拉屎，头很烫，在吃药，不知道妥泰吃几粒，问想吐吗好了吗，答等一下还不知道，5秒内，刚吃过药吗，吃多少了不知道，刚喝的是水吗，41发好了，问今天礼拜一吗
10:25 涨/烫/风凉
11点在看自己的抑郁微博, 说都不熟悉了
10:26左手 有点烫麻
14点说在看和圈圈的聊天记录, 上周约的细节都忘了, 不知道为什么要去火车站.
15:51 恍惚, 52分微信告诉我的, 54分发作完, 事后说是想拉屎, 想吐, 有梦境感, 正在写微博作文, 是关于抑郁的, 发完知道在哪里, 但不知道星期几.
半夜麻了0次，睡醒麻了0次`,hh:2,s3:0,s4:2},"2025-05-27":{detail:`中午说，早上抑郁，中午好点了才有心情反馈
14:21恍惚好了，没啥熟悉感，想吐想拉屎，左边手和脑子烫，记忆连续
下班到家，楼下坐一会8分钟，自己也不知道为什么，但说没有恍惚
半夜麻了1次，睡醒麻了0次`,hh:1,s3:1,s4:0},"2025-05-28":{detail:`睡前麻得快，程度轻
早上抑郁比昨天好一些，程度大概是觉得什么事都没意思
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2025-05-29":{detail:`心情和昨天差不多
12:02 晕1秒, 转
13:24 涨/烫/风凉
13:46 涨/烫/风凉
15:01 涨/烫/风凉
19：40 头晕，2分钟 我
21:21 涨/烫/风凉
23:15 涨/烫/风凉
23:33 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:8},"2025-05-30":{detail:`早上6点起床，睡了6小时不到，说是尿尿醒的
今天抑郁减轻
19:46 涨/烫/风凉
21:01 涨/烫/风凉
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:2},"2025-05-31":{detail:`睡前麻到眼睛，麻得厉害，以为流口水，晚上和小孩吵架，小孩兴奋在玩，最后我把小孩带出去
10:56 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-06-01":{detail:`20:34 涨/烫/风凉
00:46还没睡觉，在跟小哈搞
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-06-02":{detail:`14:00 因为奶奶电话里说，外公外婆想看小孩，喝生小孩公婆不给钱而哭了一会
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2025-06-03":{detail:`19:08看了杀羊视频后有点受刺激，睡觉了
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2025-06-04":{detail:`09:52 涨/烫/风凉
17:00 涨/烫/风凉
18:06 涨/烫/风凉
18:08 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:4},"2025-06-05":{detail:"半夜麻了1次，睡醒麻了1次",hh:0,s3:2,s4:0},"2025-06-06":{coner:["医院","第8次医院, 虹桥, 医生第一次说建议手术, 在请求下换了新药"],detail:`早上麻到眼睛, 早上有人, 手表显示是4点醒了以后没睡, 但其实是睡的.
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
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:7},"2025-06-07":{detail:`15:11 涨/烫/风凉
16:59 涨/烫/风凉 2次，在和哈儿玩
今天聊了本来说3岁拍婚纱的事, 现在说不想拍了(认真的), 不知道是不是性格改变, 难过
另外, 之前2岁和3岁p的桌面, 现在说上班不好意思让同事看到了, 不知道是不是性格改变
18:55 涨/烫/风凉
20:02 涨/烫/风凉
20:16 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:6},"2025-06-08":{coner:["妥泰减到2","早上开始妥泰每次吃1粒了"],detail:`10:56 涨/烫/风凉
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
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:8},"2025-06-09":{detail:`15:43 恍惚, 45说好了, “但等一下, 有点热”, 46说刚才应该是上半身发烫的, 47说”和昨天的梦境感差不多” (说明记得昨天发), 确定记忆连续并且真实.
18:07 涨/烫/风凉17: 10 涨/烫/风凉
18: 50 涨/烫/风凉
19: 57 涨/烫/风凉
20: 08 涨/烫/风凉
21: 50恍惚，（我在身边记录）51说开始了，熟悉，想吐，比较严重，打嗝，非常难受，感觉脚是软的，52，问我们是从外面回来的吗（是的，小哈哄睡了，哄睡花了大半小时，我们出去兜了大半小时），星期几不知道了，说没有记忆了，（咽口水2次），几点也不知道，53发好了。54说星期几不知道，好像有骑车的印象，其他都没有了。56，能知道我洗过澡，然后哄睡后出去回来了。59，回忆到刚回家的场景了，并知道时间，并“硬分析出是周一”。60分，能回忆起今天的大多数事情，并且时间上感觉是今天的，但是有点模糊，像一层雾。
简单分析，因为昨天睡觉比较好，所以中午没睡觉，看了很紧张很悲伤的电视，下午明确说过想睡觉，晚上又动得太多了。
22: 07 涨/烫/风凉
22: 44 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:2,s3:0,s4:7},"2025-06-10":{detail:`早上起来说“不知道忘记了什么”问星期几，上午下午是知道的。但自己觉得忘记了点啥，应该是发过了，但也因为之前都不记睡着的，就也不记了
10:38 恍惚, 想拉屎, 想吐, 刚在看银行理财产品, 39, 有一点梦境, 不强, 身体烫, 还是39, 自己说应该是快好了. 42, 说还没完全好, 身体上不舒服, 是”有点点点晕”, 自己怀疑是没睡好, 和发作没关系. 询问后确认记忆连续.
11:58 涨/烫/风凉
14:27 涨/烫/风凉
15:26 恍惚, 刚在说昨天买了2万高风险的公募中的基金, 想吐, 想拉屎, 没有熟悉感之类的, 人发烫, 比较弱的梦境感, 是主动去体会感受到的, 27, 还是吐和拉屎, 还没好. 28分好了, 电话也接好了. 确认记忆连续. 30分补充说, 是看了阿姨发的照片, 回忆到高考后跟他们一起去杭州啥的有点小压力
20:10恍惚，梦境感比熟悉感多一点，想吐，拉屎，11，胸口闷，还是拉屎，记性不好（原话），12，打嗝，13头，拉屎的感觉好了，问我们在干什么，不知道星期几，知道是晚上，不知道大概几点，几月也不知道，想也想不出，一点都不知道，15头，说“哦，刚才是恍惚了是吧，恍惚感是好了，但什么都不知道”，知道是晾衣服的时候恍的，16，问是不是刚才从罗南回来，是不是跟外婆住一起。感觉是住了3，4天然后他逃回来循环了几天（其实没有，很久没去了，他所谓的记忆是4月底，已经一个半月了），24说不连续，看到饭盒不知道带了啥，没有上班的记忆，放了一个国庆的感觉，28，我提示昨天在外面聊天内容，觉得3，4天前，能知道连着2天带小哈睡觉，但没画面了，看到手机能知道刚才在买牛奶，看到镜框，知道这个礼拜内被我弄断并且让店家寄了一副，晚饭时扫码瓶盖觉得记得，也不远，但是蒙了一层纱，21.24聊，感觉比前两次失忆严重，但是又主动说了一些当天的细节，但是说到做晚小孩睡觉的监控，觉得3到5天的感觉，零碎的记忆有，但连不起来
22:22 涨/烫/风凉
22:30 涨/烫/风凉
半夜麻了2次，睡醒麻了0次`,hh:3,s3:2,s4:4},"2025-06-11":{detail:`觉得一次晚上麻的，另一次不确定，有2个事：1，小哈晚上拉我，我惊醒以为他拉的以为要发，可能吵醒他了，2，（现在是11号8点，他说的内容）半夜有在想周围有哪些同事，能想起来的程度。我问了些事件他也能说知道。（虽然他说在想，但是手表显示11点睡觉的）（昨晚的恍惚蛮严重的，是最近的最严重的了）
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
半夜麻了0次，睡醒麻了0次`,hh:5,s3:1,s4:3},"2025-06-12":{detail:`现在7.40，早上肯定恍惚了，起床不知道情况，不觉得昨天上过班，问晚上麻过吗，恍惚过吗，都回答不知道。自己说多想了很久单位的座位。手表显示2点多和4点多共醒了一小时，自己不记得了。过了20分钟，8点，说感觉好点了，所以可能是刚醒的时候恍惚的。然后我看了监控，2点多和4点多看起来没有醒，要不是手表不紧，要不是睡眠浅
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
半夜麻了0次，睡醒麻了1次`,hh:10,s3:1,s4:1},"2025-06-13":{coner:["医院, 卫1","第9次医院, 虹桥, 因为发的厉害加号, 晚上开始吃卫克泰1粒"],detail:`早上问情况，回答得不清，迷糊说早上麻，并且不知道很多问题，看了手表，5点6点醒的，估计是这个时候恍惚和麻的，然后说到一半就恍惚了（每次恍惚前都会给自己找理由，说，不能说这个，说这个有点不舒服了）
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
半夜麻了0次，睡醒麻了0次`,hh:9,s3:0,s4:2},"2025-06-14":{detail:`早上起来人呆着，说话响应正常，但是非常不想说话的样子，因为没记忆。
问麻没麻，是不知道的，晚上可能恍过的，问了昨天晚上怎么睡的，我出去吃饺子，晚上吃西瓜，说知道的。晚上11.30睡到8.10的，从监控看睡觉是可以的
现在9.00，说话不回，勉强用手势回答，让选择原因，他表示迷茫和觉得生活没意思的成分都有，也是用手势，没说话
躺到9.20, 还是不说话, 我有点害怕, 坐起来整理这2天的发作记录, 他躺在我旁边.
9.29 我忍不住求他说话，我特别难受，他思考了会，说了句 不知道。 应该是不知道说什么的意思。我要去大便了，因为紧张，要看小哈跟他说话他回不回了。刚打完字，30分，小哈醒了，叫了句妈妈，他没回复。32分，有点开始说了几句，我开心，简单的说了几句，34，又躺着了，但是我好受多了，聊到昨天看医院，觉得一周或者一个月了
11.59 聊天，忘记我骨折了, 不知道昨天去过蟠龙天地
14:29有点想吐，梦境不强，熟悉感有一点，但是不强。30，感觉是“想到梦里的东西”，打嗝2下。还是30，发好了。记忆还可以，我从早上的事情到现在说了一遍，他觉得还可以
因为人好点了能思考了，开始难过我之前的难过了，然后昨天只吃了2小个三明治，今天只吃了几口饭
19:12有点恍惚，在给圈圈送东西路上，大便感觉重，14好了，不知道我们去哪里，星期几不知道，为什么小哈在，不知道是去还是回，24不知道礼拜几，说礼拜5，又说礼拜天，37好像记得恍过，不知道晚上吃了什么了，在乱猜，说了正新鸡排，说78分印象，58，以为小哈下午睡外面的
22:37有一瞬间想吐，好了，不算恍惚
半夜麻了0次，睡醒麻了0次`,hh:2,s3:0,s4:0},"2025-06-15":{detail:`今天早上能回答有没有麻，恢复的第一天！！！
12:02好像有不舒服，问了没不舒服，说不清，我逼他去睡觉了
12.48 记录： 看到已经醒了一会了，问有没有断片，说“现在跟醒来的时候断片了” ，问恍惚吗，说没，但按理论是恍惚过了。现在开始问记忆：
知道星期天。描述今天想到的场景：和小哈画画，吃包子，小哈赶爷爷，我给他看生病分析。昨天的场景：碰到过小斌了（和昨天差不多），自己觉得没有恍惚过。
19:03 涨/烫/风凉
10多还在夜市，11多陪我吃泡面，1130躺好准备入睡的
半夜麻了0次，睡醒麻了1次`,hh:0,s3:1,s4:1},"2025-06-16":{detail:`有点不知道什么时候吃药，因为最近我在弄，应该是没问题的
聊天(13:56)觉得破美工傻逼了, 之前一直被调侃后还笑, 觉得”好玩”, 不知道是不是性格改变
20:51 涨/烫/风凉
20:56 涨/烫/风凉
其实是1030都在床上了，小孩让开个小灯，又搞到1138了，以后一定要关灯。
52小哈早睡了，他又起来担心这担心那的
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2025-06-17":{detail:`手表看起来睡得不好, 但我也睡得不好, 可能是小哈的问题.
抑郁好像没有
中午报告，午睡后有点晕，可能是姿势不对，并且昨天晚上也有不舒服，和平时不一样，但是现在忘记了
23.23还在搞，小孩不肯睡，40才没声音
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2025-06-18":{detail:`640起床，后来又睡了会，手表显示就睡了6个多
中午聊到, 早上做梦, 梦到”不会说话”\b了.
说吃了安眠药后睡眠质量上升
今天说今天不抑郁了, 昨天有
15:52 涨/烫/风凉
今天10多关灯了，1045被蚊子吵醒，换地方睡了，蚊子没找到，晚上睡觉质量说不清了
蚊子是打死了，睡的地方不舒服，老是动，12点跟他换位子了
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-06-19":{detail:`放学不想上楼，在楼下20多分钟，但自己觉得没有发作，没有抑郁
18:33 涨/烫/风凉
19:01 涨/烫/风凉
19:37 涨/烫/风凉
20:26 涨/烫/风凉
21:11 涨/烫/风凉
21:15 涨/烫/风凉
21:18 涨/烫/风凉
21:25 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:8},"2025-06-20":{detail:`睡的少，6小时
09:48 涨/烫/风凉
16:35 涨/烫/风凉
17:08 涨/烫/风凉
17:24 涨/烫/风凉
18:22 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:6},"2025-06-21":{detail:`晚上睡了6小时38分，而且不太连续，我总觉得不太对，不说话
今天周六，中午去了美兰湖商场，下午天街游乐场，搞到8点半，2场都非常累
半夜麻了1次，睡醒麻了0次`,hh:0,s3:1,s4:0},"2025-06-22":{coner:["卫2, 妥0","换药, 第一次加卫克泰, 睡觉明显变好"],detail:`昨晚小孩叫来叫去，好像是左边手麻，被压住了，记得不是很清楚
12：38 小麻，睡了25分钟，有人，到眼睛了
20:50 涨/烫/风凉
21:10 涨/烫/风凉
22:49 涨/烫/风凉
23:01 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:1,s4:4},"2025-06-23":{detail:`吃了2粒卫克泰后睡了8小时37分钟，很好
今天饿了
11:15 涨/烫/风凉
12:26 涨/烫/风凉
21:49太阳穴有点紧，最近追星兴奋
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:2},"2025-06-24":{detail:`17:55 涨/烫/风凉
睡觉晚，现在11.23刚带小哈骑车睡，他在刷牙
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-06-25":{detail:`16:57恍惚，梦境感，拉屎，58，有点难受，说不清楚，有点梦境，说嘴巴里有血，估计是牙齿，59，说“有点失忆”，“我刚想拉屎？”，应该是好了，每次开始回忆就是发作完了。17.00，说失忆有点重的感觉，说不清楚，感觉在其它地方，01，问我这两天有失忆吗，我不知道，不知道星期几，知道下午，要放学了
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
半夜麻了0次，睡醒麻了1次`,hh:1,s3:1,s4:4},"2025-06-26":{detail:`早上麻到眼睛但时间不长, 睡了8小时半, 醒得也少, 算睡很好了
10:39 恍惚, 微信报告”可能是恍了, 等等”, 41, “想吐, 现在好点”, 42, (应该是好了, 才开始回忆) 说我只知道我买了麦麦, 其他好像都不知道, 知道小哈睡觉, 知道自己睡得晚, 45, 说了一些早上和昨天的事, 说不觉得远, 但不真实. 说拉屎感好像没有, 比较确定的说熟悉感, 梦境感都没有. 以为星期五. (奇怪, 平时是发完以为星期一)
最近有强烈的不想回潘广路的感受
17:04微信报告刚才恍了下，就一下，现在想拉屎，但是不重，05，说先不说了，有点梦，06，很想吐，不说，08，发作好了，星期几什么的，知道，说近的干嘛了不知道，只知道上了厕所
回家在在路口站了20分钟楼下15分钟上楼
18:44恍惚，刚下楼，准备陪我去吃饭，拉屎，熟悉感很强，很想拉屎，熟悉感太强了，嘴巴里还有腥气，描述不了的腥气，是鱼吗，我也不知道，45，想吐，以前梦里发生过，46，打嗝2个。应该是好了
20:29 涨/烫/风凉
到现在为止，记性还行，但是画面丢失了点
今天也带小孩睡觉了，23.17到房间了，大概是22.30吃的要，他说有点共济失调和想睡觉
半夜麻了0次，睡醒麻了1次`,hh:3,s3:1,s4:1},"2025-06-27":{detail:`早上麻的，和前一天一样
09:38 恍惚, 在买早饭, 微信报告, 想吐加拉屎, 难受. 直到47分回复的, 11:14 提到头胀感觉没睡醒, 中午睡到2点, 可能是12点睡的
15:55恍惚, 微信报告的, 57, 说”好一点, 我刚在恍%3F 我不觉得, 我知道我中午睡了很久, 其他不知道, 看到奶茶知道, 刚还跟你说”, 16点说跟恍惚前感觉隔了很久.05分自己评价可能有想吐, 拉屎, 不强, 但是记忆损失一样
16:07 耳朵叮叮叮
20:43恍惚过了，因为工作忙，他洗澡回来，在弄药，肯定是恍过了，应该是洗澡后恍惚的，记性和上次差不多，能生活的程度
2228出发带小哈骑车2349在床上了，继续哄睡
半夜麻了0次，睡醒麻了0次`,hh:3,s3:0,s4:1},"2025-06-28":{detail:`08:10 恍惚，拉屎，锁骨烫，没有熟悉感梦境感，7.30醒的，和我躺在一起，迷迷糊糊，810突然躺平，说想拉屎，肚子叫，大概是12好的，觉得礼拜天
10:11恍惚，很想吐，12，小哈跟他说话会回复，看到我看他，主动摇头说没好，也是12，问我为什么躺下来，应该是好了，猜礼拜天，知道放假，说不太记得工位，然后睡觉了， 睡到12点多
15:17恍惚，梦境，下午，小哈在客厅地板睡觉，我们在房间里，没熟悉感，有拉屎感，打嗝2次，19，还有一点梦境感，但应该算好了？梦的内容描述不了，对记忆形象小，都知道 
16:38 轻微发（本人记录第一次，38）
16:43 轻微恍惚 但是记不得很多事 后来好一点 有很久的感觉 比较模糊（本人记录，50输入完）
21:40 恍惚，吃完醉美里，到家的电梯里，梦境感很足，进门后开房间的门给小哈开门的时候好了，估计也就一分钟左右，记得晚饭吃了什么，记得从哪里回来
半夜麻了1次，睡醒麻了0次`,hh:5,s3:1,s4:0},"2025-06-29":{detail:`晚上起夜非常频繁，尿尿至少3次，23到8的9小时只睡了7小时（手表），早上起来不知道昨天干嘛，问有没有恍惚，确定的说没有，但应该是恍过了，但是不记录，因为不确定
09:16 恍惚，在床上聊天，想拉屎，想吐，一点点梦境，要吐，17，想吐的感觉没了，没断片
10:43 恍惚, 拉屎, 难受, 想吐, 45, 咽口水, 45末好了, 45分钟小哈来跟他说的话有熟悉感. 没断片
11:49恍惚，自己说没前几次，或者前几个月严重，50好了
14:25恍惚想吐，拉屎，熟悉感，28，好了，记忆过得去，在回忆昨晚吃了什么饭店，知道由天地，睡觉了
最近每次恍惚都说自己正好可以去拉屎了
16:36恍惚过了，我和小哈回来，小哈进房间他醒了，问了，不太知道情况。迷迷糊糊躺着，经过询问，感觉这次发虽然问了都知道，但是真实度降低了，所以感觉比较差
17:18恍惚了，刚才还在聊，昨天的事都不记得了，还没回复，现在觉得拉屎，胸口以上发凉（是以前的发烫），20，问了大便的感觉还有，咽口水，21，问了说好一点，问：下午吗，星期几，这两天都在这里吗？ 都搞不清楚了。22，我确认是不是拉屎好了，他回答我刚才想拉屎吗
20:45 涨/烫/风凉
晚上去天街玩了，自己9点到家的，到现在10,37还没有发，开心
半夜麻了0次，睡醒麻了0次`,hh:6,s3:0,s4:1},"2025-06-30":{detail:`11:57 头晕, 转的那种, 58好了, 自己说就晕了6~7秒.
16:19 恍惚, 微信报告, 今天中午是睡过的, 想吐, 拉屎, 有一点梦境感, 不强, 比之前弱一点, 20末尾好了. 不断片.
17:02 感觉脚下轻飘飘的, 17又起来, 说没这感觉, 不确定是不是因为 12点头晕后就没走路的关系
22:54头动了就晕，在陪我吃饺子，大概是22.30 吃药的，12.13站起来腿飘，左手和左手臂麻，20脚好一点，手臂还麻
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:1},"2025-07-01":{detail:`今天昨天都陪我吃饭，10.30吃药，11.30到家，和昨天差不多的药的副作用
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2025-07-02":{coner:["卫1","减了一粒吡仑帕奈"],detail:`08:41好像刷牙回来以后恍惚过，一下子
09:50 和昨晚那样的晕一样, 程度昨晚的一半
10:40 拿外卖, 跟昨晚一样, 腿软, 左手臂胀麻, 45分还在麻, 11:41聊也是这样, 应该不是发作
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2025-07-03":{detail:`不知道是不是因为减药，睡觉变差，6小时好像，4点多以后就睡觉很差
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
半夜麻了2次，睡醒麻了0次`,hh:0,s3:2,s4:0,s1:[9]},"2025-07-04":{detail:`07:57有点回音，自己说已经5，6分钟了
今天和他一起上学, 我去了大场图书馆, 他反应胃有不舒服, 还有点轻微疼, 另外, 太阳穴疼.
10:43聊天 看到darkforce, 想不起来刘宇轩名字
11:05 聊到 发现心跳100多, 之前应该都是70多我觉得, 可能是大发导致的, 也可能是睡觉少, 也可能是发烧. (早上出门前量没有, 但一直觉得喉咙烫)
20:39 涨/烫/风凉
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:1},"2025-07-05":{detail:`19:50和小婷吃饭回来，说好像恍过一次，程度一般，恍完和小婷正常交流, 说是吃完饭后在盒马发的.
21:54左手有点针刺，54，现在变麻了，56好像好了，57，聊到，刚才到现在，都是大拇指针扎，持续到22点了
半夜麻了0次，睡醒麻了0次`,hh:1,s3:0,s4:0},"2025-07-06":{detail:`14:09左脚，左手，有点涨烫麻，在美兰湖商场，过来的时候有点热
16:43恍惚，刚吃好肯德基，拉屎，梦境感不强，熟悉感没，44已经好了，说昨天也是这样，如果这样的话，时间很短
18:53 涨/烫/风凉
2230陪我吃面说有以前那样的晕，躺下就好了
半夜麻了0次，睡醒麻了1次`,hh:1,s3:1,s4:2},"2025-07-07":{detail:`早上起来询问他一直不回答，在回忆，大概840点左右，报告晚上没麻，全程没恍惚，但是早上有视物不清的问题，视物不清结束后开始耳朵不舒服，类似耳鸣，但不是，只是用以往的语言描述不了，然后麻了，但坐起来后马上好了，然后感觉一直在做梦没睡着。
结合手表，看了监控4点20到 8点多起床, 是7:30发的, 比较严重的小发, 左脸已经抽搐了. 手机录监控了.
17:44恍惚，2，3分钟前，现在刚到家门口，梦境感很足，拉屎，吐，不断片，说是持续开车1，2个路口
20:49 涨/烫/风凉
22:12 涨/烫/风凉
22:46恍惚，拉屎，想吐，陪我吃完面，在兜，兜久了点，还在聊天，48，问好点吗，说好一点，还是想吐（就是还没好），还是48，还是说不知道今天星期几，什么情况，为什么出来。53，在路上，还有熟悉感，梦境感，说的时候就好了
半夜麻了1次，睡醒麻了1次`,hh:2,s3:2,s4:2},"2025-07-08":{coner:["卫2","吡仑帕奈增加回2粒"],detail:`睡得可以，麻的2次程度一般，到眼睛，没其他症状，没恍惚（7.11醒，8点问的）
08:36 恍惚，37，问吃药了吗，回答吃什么药也不知道了，去大便了，手表看星期几，38，我问拉屎的感觉好了吗，他问，什么，我想拉屎吗. 到单位了聊到东西还记得, 短期断片
12:34微信12点报告恍惚
15:38 微信报告, 不久前尿尿的时候恍惚过, 程度和之前差不多, 断片, 不知道自己为什么在厕所, 刚才在干什么, 但仔细想能想起来.
19:22应该恍惚过了，01分到20分之间，可能是07分，因为我们本来再印象城，他有事回去，电脑在我车子里，拿电脑是07分，他说拿好电脑恍惚的。可怜
后来说尿裤子了，最后印象在选钥匙拿电脑。要看监控才知道是不是大发了
后来聊到鞋子里都是尿，那么不一定大发
07分拿电脑，电脑里文件创建是16分
后来聊到，今天大概下午到现在，都尿频
今天再试试2粒比轮怕乃
半夜麻了0次，睡醒麻了1次`,hh:4,s3:1,s4:0},"2025-07-09":{detail:`起来没断片，早上麻得和昨天程度一样
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
半夜麻了0次，睡醒麻了1次`,hh:5,s3:1,s4:5},"2025-07-10":{detail:`手表，睡了8小时多，3点多醒过
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
半夜麻了0次，睡醒麻了0次`,hh:4,s3:0,s4:2},"2025-07-11":{detail:`晚上没断片，没麻，睡得也好的
09:47 （末）恍惚，（微信报告）不强，想吐，拉屎，有一点熟悉感，50问没回复，51回好了，知道自己恍惚，说不记得Wendy工作内容了，说不算断片
11:33 聊到头一直比较晕, 但不算严重. 中午第一次点饭了.
14:43耳朵叮叮叮半小时 还在叮
14:45小手指有一点麻 快半小时
18:59恍惚，想吐，熟悉感，说大概有了一分钟，刚在跟小哈搞ipad密码啥的，00好像好了，没断片，不顾阻拦跑去拉屎了
半夜麻了0次，睡醒麻了0次`,hh:2,s3:0,s4:3},"2025-07-12":{detail:`今天开始肚子疼
晚上11点，我和小孩在楼下吵架，小孩要吃尖叫什么的，小孩吵着他抱着
0.20还没睡觉，30小哈躺下，38他躺下
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2025-07-13":{detail:`手表显示1点睡到8点半16
今天有点兴奋
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2025-07-14":{detail:`聊到头有点晕, 动了更晕, 紧, 但周六, 周日没有晕.
11点聊到还是头晕
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:0},"2025-07-15":{detail:`17:02 聊到, 觉得这两天, 都有左手小手指麻1~2分钟, 但不确定.
今天干活忙, 加班了, 也没睡午觉
18:08 熟悉感很厉害, 没有想吐, 觉得同事下班, 然后给了他吃的, 觉得画面很熟悉
19:48 手指又麻了
8点硬叫回家, 要吃药了.
手指还没完全好
21:49 轻微恍惚
回家干活到10点半，洗完澡躺着，11点半我把小哈带出去开始睡觉，回家后就不爱说话，担心
半夜麻了0次，睡醒麻了1次`,hh:0,s3:2,s4:1},"2025-07-16":{coner:["卫1","吡仑帕奈减回1粒"],detail:`好像是早上麻了一次，不重，早上5点多醒了41分钟，因为小哈爬到他身上，早上询问情况，全程不说话，我有点发火了还是不说话
问不说话是因为累还是不知道，用摇头表示不知道
出门前只说了1句话, 从昨天回家到今天出门没啥说话.
经过询问, 昨天头也晕的, 应该有抑郁.
昨天工作忙, 是李的logo, 说还没结束, 但今天会结束, 今天中午还要和wendy吃饭.
抑郁是因为哔伦耐帕还是工作忙, 还不确定, 不敢盲目减药, 因为上次减药后睡眠明显变差, 并且第二天大发了(也不确定是减药的关系). 也可能是姨妈
好心疼, 希望会好转.
9:40 询问, 都是下午晕, 现在还不晕. 昨天21:49点了(轻微恍惚), 现在问说是点错了, 具体不知道.
今晚比轮怕乃吃一粒了，11.20吃的，哈还没睡
半夜麻了2次，睡醒麻了1次`,hh:0,s3:3,s4:0},"2025-07-17":{detail:`减药第一天，小麻3次，前后2次都到眼睛，中间次好点，手表显示睡得可以不断，但是7点醒了，平时都是8点10后
比昨天愿意说话，但我感觉还是抑郁，继续观察，今天开始要注意晚上少看手机小心大发
13:38 中午睡了一会起来小麻了, 说先右腿, 再左腿左手, 右腿可能是压的, 具体不知道了. 后来补充应该是麻过的, 因为有失重的感觉, 但是好得快. 而且醒来左边耳朵轰轰轰的, 应该是不正常的, 又睡了下, 又有了, 就不睡了. 而且”没有特定的一边”的感觉, 可能是2边. 
13.49聊到 晕过, 但现在不晕过, 说是早上晕的, 又可能是昨天或者中午, 不知道了.
14:37头晕了
今天也是加班掐着8点45到家吃药。
然后因为厕所占用之类的很晚洗澡
11点，小孩发疯，说基地被拆了，他跟小孩说话说到11点20，小孩睡了，他准备睡
23.34.00右手遮眼睛，遮到36秒
半夜麻了1次，睡醒麻了0次`,hh:0,s3:2,s4:0},"2025-07-18":{detail:`入睡时麻，到眼睛，情绪看起来还是抑郁，没问，好像好一点，这次抑郁是14号开始的16晚开始减药的
10:18 耳朵一直叮叮叮, 蛮久了, 好了一会又开始, 可能超过10分钟.
12:24耳朵叮叮
12:39耳朵嗡嗡叮叮
12:56耳朵嗡嗡
13:22耳朵叮叮叮
14点问了头不晕, 工作忙.
13:54耳朵嗡
15:25 左手小指是那种没有知觉的胀, 连到手, 感觉手”不太受控”, 越靠近手掌越没感觉. 30, 轻飘的, 又涨又烫, 和身体麻很像., 49分问, 说是减弱了, 而且有”饿”的感觉, 16点手还没好, 但没意开始麻
16.08聊到前两天看卢广仲泪流满面了
半夜麻了0次，睡醒麻了0次`,hh:0,s3:0,s4:6},"2025-07-19":{detail:`睡觉6小时40分，但是质量好，没断，第一天没麻
今天和10号一样，但已经不记得10号晚上的事了，中间明明没有断片的恍惚，现在11.17，都在床上，小孩还没睡，48小孩还不睡，不让他上厕所，他从11点以后情绪就在变差了，脾气比较大，因为小孩不睡觉而焦虑心烦，12.04躺下睡
半夜麻了1次，睡醒麻了0次`,hh:1,s3:1,s4:0}},f2={id:"cont-wrap"},u2={id:"calender-wrap"},h2={id:"calender-head"},d2={class:"calender-year"},p2={class:"tag s3"},g2={class:"tag s4"},m2={class:"tag hh"},_2=["data-ts","onClick"],b2={class:"date"},y2={class:"opt-head"},v2=["onClick"],x2=["onClick"],w2={class:"strat setall"},S2=["onClick"],C2={class:"detail-header"},T2={class:"detail-date"},O2={class:"detail-tags"},E2={key:0,class:"tag s3"},R2={key:1,class:"tag s4"},A2={key:2,class:"tag hh"},P2={key:0,class:"detail-memo"},M2={key:1,class:"detail-coner"},D2={class:"detail-detail"},I2={__name:"App",setup(n){const e=H=>H<10?`0${H}`:H,t=H=>{const O=new Date(+H);return`${O.getFullYear()}-${e(O.getMonth()+1)}-${e(O.getDate())}`},s=Object.fromEntries(Object.entries(a2).map(([H,O])=>[new Date(H).valueOf(),O])),i=["2024-01-27",t(Date.now()+864e5*21)],l=(new Date(i[1])-new Date(i[0]))/864e5,r=new Date(i[0]).valueOf(),o=Ue(new Date(i[0]).valueOf()+864e5*4),a=Me(Ms),d=Ue(0);let u={};const p=H=>{d.value=H.toString(),o.value=+H;const O=u[H],P=document.querySelector("#detail");if(O&&P){const I=O.getBoundingClientRect(),Z=P.getBoundingClientRect();if(I.top<Z.top||I.bottom>Z.bottom){const Hn=O.offsetTop,Bn=P.clientHeight,zn=O.offsetHeight,re=Hn-(Bn-zn)/2;P.scrollTo({top:re,behavior:"smooth"})}}},S=H=>{d.value=H.toString(),o.value=+H,setTimeout(()=>{const O=document.querySelector(`.card[data-ts="${H}"]`),P=document.querySelector("#calander-body");if(O&&P){const I=O.getBoundingClientRect(),Z=P.getBoundingClientRect();if(I.top<Z.top||I.bottom>Z.bottom){const Hn=O.offsetTop,Bn=P.clientHeight,zn=O.offsetHeight,re=Hn-(Bn-zn)/2;P.scrollTo({top:re,behavior:"smooth"})}}},0)};let C=0,$=null;const j=Ue(!0),en=H=>{if(!$){const O=H.target;j.value=C>O.scrollTop,C=O.scrollTop;const P=new Date(i[0]).valueOf()+(new Date(i[1])-new Date(i[0]))/O.scrollHeight*(O.scrollTop+O.clientHeight/2);o.value=P,$=setTimeout(()=>{$=null},350)}},A=Me({s3:{days:0,count:0},s4:{days:0,count:0},hh:{days:0,count:0}});Ee(o,()=>{const H=new Date(o.value).getMonth(),O=new Date(o.value).getFullYear();A.s3.days=0,A.s3.count=0,A.s4.days=0,A.s4.count=0,A.hh.days=0,A.hh.count=0;for(const[P,I]of Object.entries(s)){const Z=new Date(+P);Z.getMonth()===H&&Z.getFullYear()===O&&(I.s3&&(A.s3.days++,A.s3.count+=I.s3),I.s4&&(A.s4.days++,A.s4.count+=I.s4),I.hh&&(A.hh.days++,A.hh.count+=I.hh))}});let K=null;const J=H=>{K||(j.value=!1,K=setTimeout(()=>{K=null},350))},R=H=>{for(const O in Ms)["coner","memo","detail"].includes(O)||(a[O]=H?0:-1)},k=Ue(!1),On=()=>{k.value=!k.value};return Gt(()=>{const H=document.querySelector("#calander-body");H.scroll(0,H.scrollHeight*(new Date-new Date(i[0]))/(new Date(i[1])-new Date(i[0]))-H.clientHeight),document.addEventListener("click",O=>{const P=document.querySelector("#strategy-select"),I=document.querySelector(".strategy-trigger");!(P!=null&&P.contains(O.target))&&!(I!=null&&I.contains(O.target))&&(k.value=!1)})}),(H,O)=>(fn(),dn(pn,null,[V("div",f2,[V("div",u2,[V("div",h2,[V("div",d2,[D0(nn(new Date(o.value).getFullYear())+"年"+nn(new Date(o.value).getMonth()+1)+"月 ",1),V("span",p2,nn(A.s3.days)+"天, "+nn(A.s3.count)+"次",1),V("span",g2,nn(A.s4.days)+"天, "+nn(A.s4.count)+"次",1),V("span",m2,nn(A.hh.days)+"天, "+nn(A.hh.count)+"次",1)]),O[2]||(O[2]=Si('<div class="calender-item">周日</div><div class="calender-item">周一</div><div class="calender-item">周二</div><div class="calender-item">周三</div><div class="calender-item">周四</div><div class="calender-item">周五</div><div class="calender-item">周六</div>',7))]),V("div",{id:"calander-body",onScroll:en},[(fn(),dn(pn,null,Ke(l,P=>V("div",{class:Kn(["calender-item card",[{"current-month":new Date(xn(r)+P*864e5).getMonth()===new Date(o.value).getMonth(),active:d.value==xn(r)+P*864e5}]]),"data-ts":xn(r)+P*864e5,onClick:I=>p(xn(r)+P*864e5),key:P},[V("div",b2,nn(new Date(xn(r)+P*864e5).getDate()),1),Tn(c2,{strategy:a,record:xn(s)[xn(r)+P*864e5]},null,8,["strategy","record"])],10,_2)),64))],32),V("div",{class:"strategy-trigger",onClick:On},O[3]||(O[3]=[V("span",{style:{"font-size":"1.2rem"}},"⚙️",-1)])),V("div",{id:"strategy-select",class:Kn({visible:k.value})},[(fn(!0),dn(pn,null,Ke(Object.entries(xn(Dt)),P=>(fn(),dn("div",{class:"strat",key:P[0]},[V("div",y2,nn(xn(r2)[P[0]]),1),(fn(!0),dn(pn,null,Ke(P[1],(I,Z)=>(fn(),dn("div",{class:Kn(["option",{active:Z===a[P[0]]}]),onClick:Hn=>a[P[0]]=Z,key:I.name},nn(I.name),11,v2))),128)),V("div",{class:Kn(["option",{active:a[P[0]]===-1}]),onClick:I=>a[P[0]]=-1}," 不渲染 ",10,x2)]))),128)),V("div",w2,[V("div",{class:"action",onClick:O[0]||(O[0]=P=>R(!0))},"恢复默认"),V("div",{class:"action",onClick:O[1]||(O[1]=P=>R(!1))},"关闭渲染")])],2)])]),V("div",{id:"detail",onScroll:J},[(fn(!0),dn(pn,null,Ke(Object.entries(xn(s)),([P,I])=>(fn(),dn("div",{class:Kn(["detail-card",d.value==P?"active":""]),ref_for:!0,ref:Z=>xn(u)[P]=Z,key:P,onClick:Z=>S(P)},[V("div",C2,[V("span",T2,nn(t(P)),1),V("span",O2,[I.s3?(fn(),dn("span",E2,"小发 "+nn(I.s3),1)):ve("",!0),I.s4?(fn(),dn("span",R2,"轻微 "+nn(I.s4),1)):ve("",!0),I.hh?(fn(),dn("span",A2,"恍惚 "+nn(I.hh),1)):ve("",!0)])]),O[4]||(O[4]=V("hr",{class:"detail-divider"},null,-1)),I.memo?(fn(),dn("pre",P2,nn(I.memo),1)):ve("",!0),I.coner?(fn(),dn("pre",M2,nn(I.coner[1]),1)):ve("",!0),V("pre",D2,nn(I.detail),1)],10,S2))),128))],32)],64))}};s2(I2).mount("#app");
