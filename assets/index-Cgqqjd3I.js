(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ps(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const K={},et=[],Se=()=>{},ji=()=>!1,Jt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ms=e=>e.startsWith("onUpdate:"),Z=Object.assign,Is=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Ni=Object.prototype.hasOwnProperty,j=(e,t)=>Ni.call(e,t),P=Array.isArray,tt=e=>Yt(e)==="[object Map]",Mn=e=>Yt(e)==="[object Set]",I=e=>typeof e=="function",J=e=>typeof e=="string",Ue=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",In=e=>(G(e)||I(e))&&I(e.then)&&I(e.catch),Dn=Object.prototype.toString,Yt=e=>Dn.call(e),Li=e=>Yt(e).slice(8,-1),Fn=e=>Yt(e)==="[object Object]",Ds=e=>J(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,pt=Ps(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zt=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},Ui=/-(\w)/g,Le=zt(e=>e.replace(Ui,(t,s)=>s?s.toUpperCase():"")),Bi=/\B([A-Z])/g,Ze=zt(e=>e.replace(Bi,"-$1").toLowerCase()),Hn=zt(e=>e.charAt(0).toUpperCase()+e.slice(1)),ls=zt(e=>e?`on${Hn(e)}`:""),Ne=(e,t)=>!Object.is(e,t),os=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},$n=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},Vi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let en;const Xt=()=>en||(en=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zt(e){if(P(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],i=J(n)?Gi(n):Zt(n);if(i)for(const r in i)t[r]=i[r]}return t}else if(J(e)||G(e))return e}const Ki=/;(?![^(]*\))/g,Wi=/:([^]+)/,qi=/\/\*[^]*?\*\//g;function Gi(e){const t={};return e.replace(qi,"").split(Ki).forEach(s=>{if(s){const n=s.split(Wi);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function st(e){let t="";if(J(e))t=e;else if(P(e))for(let s=0;s<e.length;s++){const n=st(e[s]);n&&(t+=n+" ")}else if(G(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Ji="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yi=Ps(Ji);function jn(e){return!!e||e===""}const Nn=e=>!!(e&&e.__v_isRef===!0),Fe=e=>J(e)?e:e==null?"":P(e)||G(e)&&(e.toString===Dn||!I(e.toString))?Nn(e)?Fe(e.value):JSON.stringify(e,Ln,2):String(e),Ln=(e,t)=>Nn(t)?Ln(e,t.value):tt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,i],r)=>(s[cs(n,r)+" =>"]=i,s),{})}:Mn(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>cs(s))}:Ue(t)?cs(t):G(t)&&!P(t)&&!Fn(t)?String(t):t,cs=(e,t="")=>{var s;return Ue(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class zi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=ue;try{return ue=this,t()}finally{ue=s}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.scopes)for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Xi(){return ue}let V;const fs=new WeakSet;class Un{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fs.has(this)&&(fs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tn(this),Kn(this);const t=V,s=ge;V=this,ge=!0;try{return this.fn()}finally{Wn(this),V=t,ge=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)$s(t);this.deps=this.depsTail=void 0,tn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_s(this)&&this.run()}get dirty(){return _s(this)}}let Bn=0,gt,mt;function Vn(e,t=!1){if(e.flags|=8,t){e.next=mt,mt=e;return}e.next=gt,gt=e}function Fs(){Bn++}function Hs(){if(--Bn>0)return;if(mt){let t=mt;for(mt=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;gt;){let t=gt;for(gt=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function Kn(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Wn(e){let t,s=e.depsTail,n=s;for(;n;){const i=n.prevDep;n.version===-1?(n===s&&(s=i),$s(n),Zi(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=s}function _s(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(qn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function qn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===vt))return;e.globalVersion=vt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!_s(e)){e.flags&=-3;return}const s=V,n=ge;V=e,ge=!0;try{Kn(e);const i=e.fn(e._value);(t.version===0||Ne(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{V=s,ge=n,Wn(e),e.flags&=-3}}function $s(e,t=!1){const{dep:s,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)$s(r,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Zi(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let ge=!0;const Gn=[];function Be(){Gn.push(ge),ge=!1}function Ve(){const e=Gn.pop();ge=e===void 0?!0:e}function tn(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=V;V=void 0;try{t()}finally{V=s}}}let vt=0;class Qi{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class js{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!V||!ge||V===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==V)s=this.activeLink=new Qi(V,this),V.deps?(s.prevDep=V.depsTail,V.depsTail.nextDep=s,V.depsTail=s):V.deps=V.depsTail=s,Jn(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=V.depsTail,s.nextDep=void 0,V.depsTail.nextDep=s,V.depsTail=s,V.deps===s&&(V.deps=n)}return s}trigger(t){this.version++,vt++,this.notify(t)}notify(t){Fs();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Hs()}}}function Jn(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Jn(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const bs=new WeakMap,ze=Symbol(""),ys=Symbol(""),xt=Symbol("");function k(e,t,s){if(ge&&V){let n=bs.get(e);n||bs.set(e,n=new Map);let i=n.get(s);i||(n.set(s,i=new js),i.map=n,i.key=s),i.track()}}function Re(e,t,s,n,i,r){const l=bs.get(e);if(!l){vt++;return}const c=f=>{f&&f.trigger()};if(Fs(),t==="clear")l.forEach(c);else{const f=P(e),h=f&&Ds(s);if(f&&s==="length"){const a=Number(n);l.forEach((p,S)=>{(S==="length"||S===xt||!Ue(S)&&S>=a)&&c(p)})}else switch((s!==void 0||l.has(void 0))&&c(l.get(s)),h&&c(l.get(xt)),t){case"add":f?h&&c(l.get("length")):(c(l.get(ze)),tt(e)&&c(l.get(ys)));break;case"delete":f||(c(l.get(ze)),tt(e)&&c(l.get(ys)));break;case"set":tt(e)&&c(l.get(ze));break}}Hs()}function Qe(e){const t=$(e);return t===e?t:(k(t,"iterate",xt),de(e)?t:t.map(ee))}function Qt(e){return k(e=$(e),"iterate",xt),e}const ki={__proto__:null,[Symbol.iterator](){return us(this,Symbol.iterator,ee)},concat(...e){return Qe(this).concat(...e.map(t=>P(t)?Qe(t):t))},entries(){return us(this,"entries",e=>(e[1]=ee(e[1]),e))},every(e,t){return Te(this,"every",e,t,void 0,arguments)},filter(e,t){return Te(this,"filter",e,t,s=>s.map(ee),arguments)},find(e,t){return Te(this,"find",e,t,ee,arguments)},findIndex(e,t){return Te(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Te(this,"findLast",e,t,ee,arguments)},findLastIndex(e,t){return Te(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Te(this,"forEach",e,t,void 0,arguments)},includes(...e){return as(this,"includes",e)},indexOf(...e){return as(this,"indexOf",e)},join(e){return Qe(this).join(e)},lastIndexOf(...e){return as(this,"lastIndexOf",e)},map(e,t){return Te(this,"map",e,t,void 0,arguments)},pop(){return at(this,"pop")},push(...e){return at(this,"push",e)},reduce(e,...t){return sn(this,"reduce",e,t)},reduceRight(e,...t){return sn(this,"reduceRight",e,t)},shift(){return at(this,"shift")},some(e,t){return Te(this,"some",e,t,void 0,arguments)},splice(...e){return at(this,"splice",e)},toReversed(){return Qe(this).toReversed()},toSorted(e){return Qe(this).toSorted(e)},toSpliced(...e){return Qe(this).toSpliced(...e)},unshift(...e){return at(this,"unshift",e)},values(){return us(this,"values",ee)}};function us(e,t,s){const n=Qt(e),i=n[t]();return n!==e&&!de(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=s(r.value)),r}),i}const er=Array.prototype;function Te(e,t,s,n,i,r){const l=Qt(e),c=l!==e&&!de(e),f=l[t];if(f!==er[t]){const p=f.apply(e,r);return c?ee(p):p}let h=s;l!==e&&(c?h=function(p,S){return s.call(this,ee(p),S,e)}:s.length>2&&(h=function(p,S){return s.call(this,p,S,e)}));const a=f.call(l,h,n);return c&&i?i(a):a}function sn(e,t,s,n){const i=Qt(e);let r=s;return i!==e&&(de(e)?s.length>3&&(r=function(l,c,f){return s.call(this,l,c,f,e)}):r=function(l,c,f){return s.call(this,l,ee(c),f,e)}),i[t](r,...n)}function as(e,t,s){const n=$(e);k(n,"iterate",xt);const i=n[t](...s);return(i===-1||i===!1)&&Us(s[0])?(s[0]=$(s[0]),n[t](...s)):i}function at(e,t,s=[]){Be(),Fs();const n=$(e)[t].apply(e,s);return Hs(),Ve(),n}const tr=Ps("__proto__,__v_isRef,__isVue"),Yn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ue));function sr(e){Ue(e)||(e=String(e));const t=$(this);return k(t,"has",e),t.hasOwnProperty(e)}class zn{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){const i=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return r;if(s==="__v_raw")return n===(i?r?dr:kn:r?Qn:Zn).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const l=P(t);if(!i){let f;if(l&&(f=ki[s]))return f;if(s==="hasOwnProperty")return sr}const c=Reflect.get(t,s,X(t)?t:n);return(Ue(s)?Yn.has(s):tr(s))||(i||k(t,"get",s),r)?c:X(c)?l&&Ds(s)?c:c.value:G(c)?i?ei(c):kt(c):c}}class Xn extends zn{constructor(t=!1){super(!1,t)}set(t,s,n,i){let r=t[s];if(!this._isShallow){const f=Xe(r);if(!de(n)&&!Xe(n)&&(r=$(r),n=$(n)),!P(t)&&X(r)&&!X(n))return f?!1:(r.value=n,!0)}const l=P(t)&&Ds(s)?Number(s)<t.length:j(t,s),c=Reflect.set(t,s,n,X(t)?t:i);return t===$(i)&&(l?Ne(n,r)&&Re(t,"set",s,n):Re(t,"add",s,n)),c}deleteProperty(t,s){const n=j(t,s);t[s];const i=Reflect.deleteProperty(t,s);return i&&n&&Re(t,"delete",s,void 0),i}has(t,s){const n=Reflect.has(t,s);return(!Ue(s)||!Yn.has(s))&&k(t,"has",s),n}ownKeys(t){return k(t,"iterate",P(t)?"length":ze),Reflect.ownKeys(t)}}class nr extends zn{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const ir=new Xn,rr=new nr,lr=new Xn(!0);const vs=e=>e,Dt=e=>Reflect.getPrototypeOf(e);function or(e,t,s){return function(...n){const i=this.__v_raw,r=$(i),l=tt(r),c=e==="entries"||e===Symbol.iterator&&l,f=e==="keys"&&l,h=i[e](...n),a=s?vs:t?xs:ee;return!t&&k(r,"iterate",f?ys:ze),{next(){const{value:p,done:S}=h.next();return S?{value:p,done:S}:{value:c?[a(p[0]),a(p[1])]:a(p),done:S}},[Symbol.iterator](){return this}}}}function Ft(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function cr(e,t){const s={get(i){const r=this.__v_raw,l=$(r),c=$(i);e||(Ne(i,c)&&k(l,"get",i),k(l,"get",c));const{has:f}=Dt(l),h=t?vs:e?xs:ee;if(f.call(l,i))return h(r.get(i));if(f.call(l,c))return h(r.get(c));r!==l&&r.get(i)},get size(){const i=this.__v_raw;return!e&&k($(i),"iterate",ze),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,l=$(r),c=$(i);return e||(Ne(i,c)&&k(l,"has",i),k(l,"has",c)),i===c?r.has(i):r.has(i)||r.has(c)},forEach(i,r){const l=this,c=l.__v_raw,f=$(c),h=t?vs:e?xs:ee;return!e&&k(f,"iterate",ze),c.forEach((a,p)=>i.call(r,h(a),h(p),l))}};return Z(s,e?{add:Ft("add"),set:Ft("set"),delete:Ft("delete"),clear:Ft("clear")}:{add(i){!t&&!de(i)&&!Xe(i)&&(i=$(i));const r=$(this);return Dt(r).has.call(r,i)||(r.add(i),Re(r,"add",i,i)),this},set(i,r){!t&&!de(r)&&!Xe(r)&&(r=$(r));const l=$(this),{has:c,get:f}=Dt(l);let h=c.call(l,i);h||(i=$(i),h=c.call(l,i));const a=f.call(l,i);return l.set(i,r),h?Ne(r,a)&&Re(l,"set",i,r):Re(l,"add",i,r),this},delete(i){const r=$(this),{has:l,get:c}=Dt(r);let f=l.call(r,i);f||(i=$(i),f=l.call(r,i)),c&&c.call(r,i);const h=r.delete(i);return f&&Re(r,"delete",i,void 0),h},clear(){const i=$(this),r=i.size!==0,l=i.clear();return r&&Re(i,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(i=>{s[i]=or(i,e,t)}),s}function Ns(e,t){const s=cr(e,t);return(n,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(j(s,i)&&i in n?s:n,i,r)}const fr={get:Ns(!1,!1)},ur={get:Ns(!1,!0)},ar={get:Ns(!0,!1)};const Zn=new WeakMap,Qn=new WeakMap,kn=new WeakMap,dr=new WeakMap;function hr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pr(e){return e.__v_skip||!Object.isExtensible(e)?0:hr(Li(e))}function kt(e){return Xe(e)?e:Ls(e,!1,ir,fr,Zn)}function gr(e){return Ls(e,!1,lr,ur,Qn)}function ei(e){return Ls(e,!0,rr,ar,kn)}function Ls(e,t,s,n,i){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const l=pr(e);if(l===0)return e;const c=new Proxy(e,l===2?n:s);return i.set(e,c),c}function nt(e){return Xe(e)?nt(e.__v_raw):!!(e&&e.__v_isReactive)}function Xe(e){return!!(e&&e.__v_isReadonly)}function de(e){return!!(e&&e.__v_isShallow)}function Us(e){return e?!!e.__v_raw:!1}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function mr(e){return!j(e,"__v_skip")&&Object.isExtensible(e)&&$n(e,"__v_skip",!0),e}const ee=e=>G(e)?kt(e):e,xs=e=>G(e)?ei(e):e;function X(e){return e?e.__v_isRef===!0:!1}function nn(e){return _r(e,!1)}function _r(e,t){return X(e)?e:new br(e,t)}class br{constructor(t,s){this.dep=new js,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:$(t),this._value=s?t:ee(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||de(t)||Xe(t);t=n?t:$(t),Ne(t,s)&&(this._rawValue=t,this._value=n?t:ee(t),this.dep.trigger())}}function pe(e){return X(e)?e.value:e}const yr={get:(e,t,s)=>t==="__v_raw"?e:pe(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const i=e[t];return X(i)&&!X(s)?(i.value=s,!0):Reflect.set(e,t,s,n)}};function ti(e){return nt(e)?e:new Proxy(e,yr)}class vr{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new js(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&V!==this)return Vn(this,!0),!0}get value(){const t=this.dep.track();return qn(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function xr(e,t,s=!1){let n,i;return I(e)?n=e:(n=e.get,i=e.set),new vr(n,i,s)}const Ht={},Vt=new WeakMap;let Ye;function wr(e,t=!1,s=Ye){if(s){let n=Vt.get(s);n||Vt.set(s,n=[]),n.push(e)}}function Sr(e,t,s=K){const{immediate:n,deep:i,once:r,scheduler:l,augmentJob:c,call:f}=s,h=A=>i?A:de(A)||i===!1||i===0?je(A,1):je(A);let a,p,S,C,M=!1,T=!1;if(X(e)?(p=()=>e.value,M=de(e)):nt(e)?(p=()=>h(e),M=!0):P(e)?(T=!0,M=e.some(A=>nt(A)||de(A)),p=()=>e.map(A=>{if(X(A))return A.value;if(nt(A))return h(A);if(I(A))return f?f(A,2):A()})):I(e)?t?p=f?()=>f(e,2):e:p=()=>{if(S){Be();try{S()}finally{Ve()}}const A=Ye;Ye=a;try{return f?f(e,3,[C]):e(C)}finally{Ye=A}}:p=Se,t&&i){const A=p,Y=i===!0?1/0:i;p=()=>je(A(),Y)}const D=Xi(),H=()=>{a.stop(),D&&Is(D.effects,a)};if(r&&t){const A=t;t=(...Y)=>{A(...Y),H()}}let L=T?new Array(e.length).fill(Ht):Ht;const W=A=>{if(!(!(a.flags&1)||!a.dirty&&!A))if(t){const Y=a.run();if(i||M||(T?Y.some((Ie,me)=>Ne(Ie,L[me])):Ne(Y,L))){S&&S();const Ie=Ye;Ye=a;try{const me=[Y,L===Ht?void 0:T&&L[0]===Ht?[]:L,C];f?f(t,3,me):t(...me),L=Y}finally{Ye=Ie}}}else a.run()};return c&&c(W),a=new Un(p),a.scheduler=l?()=>l(W,!1):W,C=A=>wr(A,!1,a),S=a.onStop=()=>{const A=Vt.get(a);if(A){if(f)f(A,4);else for(const Y of A)Y();Vt.delete(a)}},t?n?W(!0):L=a.run():l?l(W.bind(null,!0),!0):a.run(),H.pause=a.pause.bind(a),H.resume=a.resume.bind(a),H.stop=H,H}function je(e,t=1/0,s){if(t<=0||!G(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),t--,X(e))je(e.value,t,s);else if(P(e))for(let n=0;n<e.length;n++)je(e[n],t,s);else if(Mn(e)||tt(e))e.forEach(n=>{je(n,t,s)});else if(Fn(e)){for(const n in e)je(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&je(e[n],t,s)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ot(e,t,s,n){try{return n?e(...n):e()}catch(i){es(i,t,s)}}function Ce(e,t,s,n){if(I(e)){const i=Ot(e,t,s,n);return i&&In(i)&&i.catch(r=>{es(r,t,s)}),i}if(P(e)){const i=[];for(let r=0;r<e.length;r++)i.push(Ce(e[r],t,s,n));return i}}function es(e,t,s,n=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||K;if(t){let c=t.parent;const f=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${s}`;for(;c;){const a=c.ec;if(a){for(let p=0;p<a.length;p++)if(a[p](e,f,h)===!1)return}c=c.parent}if(r){Be(),Ot(r,null,10,[e,f,h]),Ve();return}}Cr(e,s,i,n,l)}function Cr(e,t,s,n=!0,i=!1){if(i)throw e;console.error(e)}const ne=[];let ve=-1;const it=[];let He=null,ke=0;const si=Promise.resolve();let Kt=null;function Tr(e){const t=Kt||si;return e?t.then(this?e.bind(this):e):t}function Or(e){let t=ve+1,s=ne.length;for(;t<s;){const n=t+s>>>1,i=ne[n],r=wt(i);r<e||r===e&&i.flags&2?t=n+1:s=n}return t}function Bs(e){if(!(e.flags&1)){const t=wt(e),s=ne[ne.length-1];!s||!(e.flags&2)&&t>=wt(s)?ne.push(e):ne.splice(Or(t),0,e),e.flags|=1,ni()}}function ni(){Kt||(Kt=si.then(ri))}function Er(e){P(e)?it.push(...e):He&&e.id===-1?He.splice(ke+1,0,e):e.flags&1||(it.push(e),e.flags|=1),ni()}function rn(e,t,s=ve+1){for(;s<ne.length;s++){const n=ne[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;ne.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function ii(e){if(it.length){const t=[...new Set(it)].sort((s,n)=>wt(s)-wt(n));if(it.length=0,He){He.push(...t);return}for(He=t,ke=0;ke<He.length;ke++){const s=He[ke];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}He=null,ke=0}}const wt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ri(e){try{for(ve=0;ve<ne.length;ve++){const t=ne[ve];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ot(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ve<ne.length;ve++){const t=ne[ve];t&&(t.flags&=-2)}ve=-1,ne.length=0,ii(),Kt=null,(ne.length||it.length)&&ri()}}let we=null,li=null;function Wt(e){const t=we;return we=e,li=e&&e.type.__scopeId||null,t}function Ar(e,t=we,s){if(!t||e._n)return e;const n=(...i)=>{n._d&&hn(-1);const r=Wt(t);let l;try{l=e(...i)}finally{Wt(r),n._d&&hn(1)}return l};return n._n=!0,n._c=!0,n._d=!0,n}function Ge(e,t,s,n){const i=e.dirs,r=t&&t.dirs;for(let l=0;l<i.length;l++){const c=i[l];r&&(c.oldValue=r[l].value);let f=c.dir[n];f&&(Be(),Ce(f,s,8,[e.el,c,e,t]),Ve())}}const Rr=Symbol("_vte"),Pr=e=>e.__isTeleport;function Vs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Vs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function oi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ws(e,t,s,n,i=!1){if(P(e)){e.forEach((M,T)=>ws(M,t&&(P(t)?t[T]:t),s,n,i));return}if(_t(n)&&!i)return;const r=n.shapeFlag&4?Gs(n.component):n.el,l=i?null:r,{i:c,r:f}=e,h=t&&t.r,a=c.refs===K?c.refs={}:c.refs,p=c.setupState,S=$(p),C=p===K?()=>!1:M=>j(S,M);if(h!=null&&h!==f&&(J(h)?(a[h]=null,C(h)&&(p[h]=null)):X(h)&&(h.value=null)),I(f))Ot(f,c,12,[l,a]);else{const M=J(f),T=X(f);if(M||T){const D=()=>{if(e.f){const H=M?C(f)?p[f]:a[f]:f.value;i?P(H)&&Is(H,r):P(H)?H.includes(r)||H.push(r):M?(a[f]=[r],C(f)&&(p[f]=a[f])):(f.value=[r],e.k&&(a[e.k]=f.value))}else M?(a[f]=l,C(f)&&(p[f]=l)):T&&(f.value=l,e.k&&(a[e.k]=l))};l?(D.id=-1,fe(D,s)):D()}}}Xt().requestIdleCallback;Xt().cancelIdleCallback;const _t=e=>!!e.type.__asyncLoader,ci=e=>e.type.__isKeepAlive;function Mr(e,t){fi(e,"a",t)}function Ir(e,t){fi(e,"da",t)}function fi(e,t,s=ie){const n=e.__wdc||(e.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ts(t,n,s),s){let i=s.parent;for(;i&&i.parent;)ci(i.parent.vnode)&&Dr(n,t,s,i),i=i.parent}}function Dr(e,t,s,n){const i=ts(t,e,n,!0);ai(()=>{Is(n[t],i)},s)}function ts(e,t,s=ie,n=!1){if(s){const i=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...l)=>{Be();const c=Et(s),f=Ce(t,s,e,l);return c(),Ve(),f});return n?i.unshift(r):i.push(r),r}}const Me=e=>(t,s=ie)=>{(!Tt||e==="sp")&&ts(e,(...n)=>t(...n),s)},Fr=Me("bm"),ui=Me("m"),Hr=Me("bu"),$r=Me("u"),jr=Me("bum"),ai=Me("um"),Nr=Me("sp"),Lr=Me("rtg"),Ur=Me("rtc");function Br(e,t=ie){ts("ec",e,t)}const Vr=Symbol.for("v-ndc");function $t(e,t,s,n){let i;const r=s,l=P(e);if(l||J(e)){const c=l&&nt(e);let f=!1;c&&(f=!de(e),e=Qt(e)),i=new Array(e.length);for(let h=0,a=e.length;h<a;h++)i[h]=t(f?ee(e[h]):e[h],h,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let c=0;c<e;c++)i[c]=t(c+1,c,void 0,r)}else if(G(e))if(e[Symbol.iterator])i=Array.from(e,(c,f)=>t(c,f,void 0,r));else{const c=Object.keys(e);i=new Array(c.length);for(let f=0,h=c.length;f<h;f++){const a=c[f];i[f]=t(e[a],a,f,r)}}else i=[];return i}const Ss=e=>e?Ii(e)?Gs(e):Ss(e.parent):null,bt=Z(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ss(e.parent),$root:e=>Ss(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ks(e),$forceUpdate:e=>e.f||(e.f=()=>{Bs(e.update)}),$nextTick:e=>e.n||(e.n=Tr.bind(e.proxy)),$watch:e=>ul.bind(e)}),ds=(e,t)=>e!==K&&!e.__isScriptSetup&&j(e,t),Kr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:i,props:r,accessCache:l,type:c,appContext:f}=e;let h;if(t[0]!=="$"){const C=l[t];if(C!==void 0)switch(C){case 1:return n[t];case 2:return i[t];case 4:return s[t];case 3:return r[t]}else{if(ds(n,t))return l[t]=1,n[t];if(i!==K&&j(i,t))return l[t]=2,i[t];if((h=e.propsOptions[0])&&j(h,t))return l[t]=3,r[t];if(s!==K&&j(s,t))return l[t]=4,s[t];Cs&&(l[t]=0)}}const a=bt[t];let p,S;if(a)return t==="$attrs"&&k(e.attrs,"get",""),a(e);if((p=c.__cssModules)&&(p=p[t]))return p;if(s!==K&&j(s,t))return l[t]=4,s[t];if(S=f.config.globalProperties,j(S,t))return S[t]},set({_:e},t,s){const{data:n,setupState:i,ctx:r}=e;return ds(i,t)?(i[t]=s,!0):n!==K&&j(n,t)?(n[t]=s,!0):j(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:i,propsOptions:r}},l){let c;return!!s[l]||e!==K&&j(e,l)||ds(t,l)||(c=r[0])&&j(c,l)||j(n,l)||j(bt,l)||j(i.config.globalProperties,l)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:j(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function ln(e){return P(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let Cs=!0;function Wr(e){const t=Ks(e),s=e.proxy,n=e.ctx;Cs=!1,t.beforeCreate&&on(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:l,watch:c,provide:f,inject:h,created:a,beforeMount:p,mounted:S,beforeUpdate:C,updated:M,activated:T,deactivated:D,beforeDestroy:H,beforeUnmount:L,destroyed:W,unmounted:A,render:Y,renderTracked:Ie,renderTriggered:me,errorCaptured:De,serverPrefetch:At,expose:Ke,inheritAttrs:ot,components:Rt,directives:Pt,filters:is}=t;if(h&&qr(h,n,null),l)for(const q in l){const U=l[q];I(U)&&(n[q]=U.bind(s))}if(i){const q=i.call(s,s);G(q)&&(e.data=kt(q))}if(Cs=!0,r)for(const q in r){const U=r[q],We=I(U)?U.bind(s,s):I(U.get)?U.get.bind(s,s):Se,Mt=!I(U)&&I(U.set)?U.set.bind(s):Se,qe=Il({get:We,set:Mt});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>qe.value,set:_e=>qe.value=_e})}if(c)for(const q in c)di(c[q],n,s,q);if(f){const q=I(f)?f.call(s):f;Reflect.ownKeys(q).forEach(U=>{Zr(U,q[U])})}a&&on(a,e,"c");function te(q,U){P(U)?U.forEach(We=>q(We.bind(s))):U&&q(U.bind(s))}if(te(Fr,p),te(ui,S),te(Hr,C),te($r,M),te(Mr,T),te(Ir,D),te(Br,De),te(Ur,Ie),te(Lr,me),te(jr,L),te(ai,A),te(Nr,At),P(Ke))if(Ke.length){const q=e.exposed||(e.exposed={});Ke.forEach(U=>{Object.defineProperty(q,U,{get:()=>s[U],set:We=>s[U]=We})})}else e.exposed||(e.exposed={});Y&&e.render===Se&&(e.render=Y),ot!=null&&(e.inheritAttrs=ot),Rt&&(e.components=Rt),Pt&&(e.directives=Pt),At&&oi(e)}function qr(e,t,s=Se){P(e)&&(e=Ts(e));for(const n in e){const i=e[n];let r;G(i)?"default"in i?r=jt(i.from||n,i.default,!0):r=jt(i.from||n):r=jt(i),X(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:l=>r.value=l}):t[n]=r}}function on(e,t,s){Ce(P(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function di(e,t,s,n){let i=n.includes(".")?Oi(s,n):()=>s[n];if(J(e)){const r=t[e];I(r)&&Nt(i,r)}else if(I(e))Nt(i,e.bind(s));else if(G(e))if(P(e))e.forEach(r=>di(r,t,s,n));else{const r=I(e.handler)?e.handler.bind(s):t[e.handler];I(r)&&Nt(i,r,e)}}function Ks(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,c=r.get(t);let f;return c?f=c:!i.length&&!s&&!n?f=t:(f={},i.length&&i.forEach(h=>qt(f,h,l,!0)),qt(f,t,l)),G(t)&&r.set(t,f),f}function qt(e,t,s,n=!1){const{mixins:i,extends:r}=t;r&&qt(e,r,s,!0),i&&i.forEach(l=>qt(e,l,s,!0));for(const l in t)if(!(n&&l==="expose")){const c=Gr[l]||s&&s[l];e[l]=c?c(e[l],t[l]):t[l]}return e}const Gr={data:cn,props:fn,emits:fn,methods:ht,computed:ht,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:ht,directives:ht,watch:Yr,provide:cn,inject:Jr};function cn(e,t){return t?e?function(){return Z(I(e)?e.call(this,this):e,I(t)?t.call(this,this):t)}:t:e}function Jr(e,t){return ht(Ts(e),Ts(t))}function Ts(e){if(P(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function ht(e,t){return e?Z(Object.create(null),e,t):t}function fn(e,t){return e?P(e)&&P(t)?[...new Set([...e,...t])]:Z(Object.create(null),ln(e),ln(t??{})):t}function Yr(e,t){if(!e)return t;if(!t)return e;const s=Z(Object.create(null),e);for(const n in t)s[n]=se(e[n],t[n]);return s}function hi(){return{app:null,config:{isNativeTag:ji,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zr=0;function Xr(e,t){return function(n,i=null){I(n)||(n=Z({},n)),i!=null&&!G(i)&&(i=null);const r=hi(),l=new WeakSet,c=[];let f=!1;const h=r.app={_uid:zr++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:Dl,get config(){return r.config},set config(a){},use(a,...p){return l.has(a)||(a&&I(a.install)?(l.add(a),a.install(h,...p)):I(a)&&(l.add(a),a(h,...p))),h},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),h},component(a,p){return p?(r.components[a]=p,h):r.components[a]},directive(a,p){return p?(r.directives[a]=p,h):r.directives[a]},mount(a,p,S){if(!f){const C=h._ceVNode||Pe(n,i);return C.appContext=r,S===!0?S="svg":S===!1&&(S=void 0),p&&t?t(C,a):e(C,a,S),f=!0,h._container=a,a.__vue_app__=h,Gs(C.component)}},onUnmount(a){c.push(a)},unmount(){f&&(Ce(c,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(a,p){return r.provides[a]=p,h},runWithContext(a){const p=rt;rt=h;try{return a()}finally{rt=p}}};return h}}let rt=null;function Zr(e,t){if(ie){let s=ie.provides;const n=ie.parent&&ie.parent.provides;n===s&&(s=ie.provides=Object.create(n)),s[e]=t}}function jt(e,t,s=!1){const n=ie||we;if(n||rt){const i=rt?rt._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return s&&I(t)?t.call(n&&n.proxy):t}}const pi={},gi=()=>Object.create(pi),mi=e=>Object.getPrototypeOf(e)===pi;function Qr(e,t,s,n=!1){const i={},r=gi();e.propsDefaults=Object.create(null),_i(e,t,i,r);for(const l in e.propsOptions[0])l in i||(i[l]=void 0);s?e.props=n?i:gr(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function kr(e,t,s,n){const{props:i,attrs:r,vnode:{patchFlag:l}}=e,c=$(i),[f]=e.propsOptions;let h=!1;if((n||l>0)&&!(l&16)){if(l&8){const a=e.vnode.dynamicProps;for(let p=0;p<a.length;p++){let S=a[p];if(ss(e.emitsOptions,S))continue;const C=t[S];if(f)if(j(r,S))C!==r[S]&&(r[S]=C,h=!0);else{const M=Le(S);i[M]=Os(f,c,M,C,e,!1)}else C!==r[S]&&(r[S]=C,h=!0)}}}else{_i(e,t,i,r)&&(h=!0);let a;for(const p in c)(!t||!j(t,p)&&((a=Ze(p))===p||!j(t,a)))&&(f?s&&(s[p]!==void 0||s[a]!==void 0)&&(i[p]=Os(f,c,p,void 0,e,!0)):delete i[p]);if(r!==c)for(const p in r)(!t||!j(t,p))&&(delete r[p],h=!0)}h&&Re(e.attrs,"set","")}function _i(e,t,s,n){const[i,r]=e.propsOptions;let l=!1,c;if(t)for(let f in t){if(pt(f))continue;const h=t[f];let a;i&&j(i,a=Le(f))?!r||!r.includes(a)?s[a]=h:(c||(c={}))[a]=h:ss(e.emitsOptions,f)||(!(f in n)||h!==n[f])&&(n[f]=h,l=!0)}if(r){const f=$(s),h=c||K;for(let a=0;a<r.length;a++){const p=r[a];s[p]=Os(i,f,p,h[p],e,!j(h,p))}}return l}function Os(e,t,s,n,i,r){const l=e[s];if(l!=null){const c=j(l,"default");if(c&&n===void 0){const f=l.default;if(l.type!==Function&&!l.skipFactory&&I(f)){const{propsDefaults:h}=i;if(s in h)n=h[s];else{const a=Et(i);n=h[s]=f.call(null,t),a()}}else n=f;i.ce&&i.ce._setProp(s,n)}l[0]&&(r&&!c?n=!1:l[1]&&(n===""||n===Ze(s))&&(n=!0))}return n}const el=new WeakMap;function bi(e,t,s=!1){const n=s?el:t.propsCache,i=n.get(e);if(i)return i;const r=e.props,l={},c=[];let f=!1;if(!I(e)){const a=p=>{f=!0;const[S,C]=bi(p,t,!0);Z(l,S),C&&c.push(...C)};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!r&&!f)return G(e)&&n.set(e,et),et;if(P(r))for(let a=0;a<r.length;a++){const p=Le(r[a]);un(p)&&(l[p]=K)}else if(r)for(const a in r){const p=Le(a);if(un(p)){const S=r[a],C=l[p]=P(S)||I(S)?{type:S}:Z({},S),M=C.type;let T=!1,D=!0;if(P(M))for(let H=0;H<M.length;++H){const L=M[H],W=I(L)&&L.name;if(W==="Boolean"){T=!0;break}else W==="String"&&(D=!1)}else T=I(M)&&M.name==="Boolean";C[0]=T,C[1]=D,(T||j(C,"default"))&&c.push(p)}}const h=[l,c];return G(e)&&n.set(e,h),h}function un(e){return e[0]!=="$"&&!pt(e)}const yi=e=>e[0]==="_"||e==="$stable",Ws=e=>P(e)?e.map(xe):[xe(e)],tl=(e,t,s)=>{if(t._n)return t;const n=Ar((...i)=>Ws(t(...i)),s);return n._c=!1,n},vi=(e,t,s)=>{const n=e._ctx;for(const i in e){if(yi(i))continue;const r=e[i];if(I(r))t[i]=tl(i,r,n);else if(r!=null){const l=Ws(r);t[i]=()=>l}}},xi=(e,t)=>{const s=Ws(t);e.slots.default=()=>s},wi=(e,t,s)=>{for(const n in t)(s||n!=="_")&&(e[n]=t[n])},sl=(e,t,s)=>{const n=e.slots=gi();if(e.vnode.shapeFlag&32){const i=t._;i?(wi(n,t,s),s&&$n(n,"_",i,!0)):vi(t,n)}else t&&xi(e,t)},nl=(e,t,s)=>{const{vnode:n,slots:i}=e;let r=!0,l=K;if(n.shapeFlag&32){const c=t._;c?s&&c===1?r=!1:wi(i,t,s):(r=!t.$stable,vi(t,i)),l=t}else t&&(xi(e,t),l={default:1});if(r)for(const c in i)!yi(c)&&l[c]==null&&delete i[c]},fe=_l;function il(e){return rl(e)}function rl(e,t){const s=Xt();s.__VUE__=!0;const{insert:n,remove:i,patchProp:r,createElement:l,createText:c,createComment:f,setText:h,setElementText:a,parentNode:p,nextSibling:S,setScopeId:C=Se,insertStaticContent:M}=e,T=(o,u,d,_=null,g=null,m=null,x=void 0,v=null,y=!!u.dynamicChildren)=>{if(o===u)return;o&&!dt(o,u)&&(_=It(o),_e(o,g,m,!0),o=null),u.patchFlag===-2&&(y=!1,u.dynamicChildren=null);const{type:b,ref:E,shapeFlag:w}=u;switch(b){case ns:D(o,u,d,_);break;case St:H(o,u,d,_);break;case Lt:o==null&&L(u,d,_,x);break;case re:Rt(o,u,d,_,g,m,x,v,y);break;default:w&1?Y(o,u,d,_,g,m,x,v,y):w&6?Pt(o,u,d,_,g,m,x,v,y):(w&64||w&128)&&b.process(o,u,d,_,g,m,x,v,y,ft)}E!=null&&g&&ws(E,o&&o.ref,m,u||o,!u)},D=(o,u,d,_)=>{if(o==null)n(u.el=c(u.children),d,_);else{const g=u.el=o.el;u.children!==o.children&&h(g,u.children)}},H=(o,u,d,_)=>{o==null?n(u.el=f(u.children||""),d,_):u.el=o.el},L=(o,u,d,_)=>{[o.el,o.anchor]=M(o.children,u,d,_,o.el,o.anchor)},W=({el:o,anchor:u},d,_)=>{let g;for(;o&&o!==u;)g=S(o),n(o,d,_),o=g;n(u,d,_)},A=({el:o,anchor:u})=>{let d;for(;o&&o!==u;)d=S(o),i(o),o=d;i(u)},Y=(o,u,d,_,g,m,x,v,y)=>{u.type==="svg"?x="svg":u.type==="math"&&(x="mathml"),o==null?Ie(u,d,_,g,m,x,v,y):At(o,u,g,m,x,v,y)},Ie=(o,u,d,_,g,m,x,v)=>{let y,b;const{props:E,shapeFlag:w,transition:O,dirs:R}=o;if(y=o.el=l(o.type,m,E&&E.is,E),w&8?a(y,o.children):w&16&&De(o.children,y,null,_,g,hs(o,m),x,v),R&&Ge(o,null,_,"created"),me(y,o,o.scopeId,x,_),E){for(const B in E)B!=="value"&&!pt(B)&&r(y,B,null,E[B],m,_);"value"in E&&r(y,"value",null,E.value,m),(b=E.onVnodeBeforeMount)&&ye(b,_,o)}R&&Ge(o,null,_,"beforeMount");const F=ll(g,O);F&&O.beforeEnter(y),n(y,u,d),((b=E&&E.onVnodeMounted)||F||R)&&fe(()=>{b&&ye(b,_,o),F&&O.enter(y),R&&Ge(o,null,_,"mounted")},g)},me=(o,u,d,_,g)=>{if(d&&C(o,d),_)for(let m=0;m<_.length;m++)C(o,_[m]);if(g){let m=g.subTree;if(u===m||Ai(m.type)&&(m.ssContent===u||m.ssFallback===u)){const x=g.vnode;me(o,x,x.scopeId,x.slotScopeIds,g.parent)}}},De=(o,u,d,_,g,m,x,v,y=0)=>{for(let b=y;b<o.length;b++){const E=o[b]=v?$e(o[b]):xe(o[b]);T(null,E,u,d,_,g,m,x,v)}},At=(o,u,d,_,g,m,x)=>{const v=u.el=o.el;let{patchFlag:y,dynamicChildren:b,dirs:E}=u;y|=o.patchFlag&16;const w=o.props||K,O=u.props||K;let R;if(d&&Je(d,!1),(R=O.onVnodeBeforeUpdate)&&ye(R,d,u,o),E&&Ge(u,o,d,"beforeUpdate"),d&&Je(d,!0),(w.innerHTML&&O.innerHTML==null||w.textContent&&O.textContent==null)&&a(v,""),b?Ke(o.dynamicChildren,b,v,d,_,hs(u,g),m):x||U(o,u,v,null,d,_,hs(u,g),m,!1),y>0){if(y&16)ot(v,w,O,d,g);else if(y&2&&w.class!==O.class&&r(v,"class",null,O.class,g),y&4&&r(v,"style",w.style,O.style,g),y&8){const F=u.dynamicProps;for(let B=0;B<F.length;B++){const N=F[B],le=w[N],Q=O[N];(Q!==le||N==="value")&&r(v,N,le,Q,g,d)}}y&1&&o.children!==u.children&&a(v,u.children)}else!x&&b==null&&ot(v,w,O,d,g);((R=O.onVnodeUpdated)||E)&&fe(()=>{R&&ye(R,d,u,o),E&&Ge(u,o,d,"updated")},_)},Ke=(o,u,d,_,g,m,x)=>{for(let v=0;v<u.length;v++){const y=o[v],b=u[v],E=y.el&&(y.type===re||!dt(y,b)||y.shapeFlag&70)?p(y.el):d;T(y,b,E,null,_,g,m,x,!0)}},ot=(o,u,d,_,g)=>{if(u!==d){if(u!==K)for(const m in u)!pt(m)&&!(m in d)&&r(o,m,u[m],null,g,_);for(const m in d){if(pt(m))continue;const x=d[m],v=u[m];x!==v&&m!=="value"&&r(o,m,v,x,g,_)}"value"in d&&r(o,"value",u.value,d.value,g)}},Rt=(o,u,d,_,g,m,x,v,y)=>{const b=u.el=o?o.el:c(""),E=u.anchor=o?o.anchor:c("");let{patchFlag:w,dynamicChildren:O,slotScopeIds:R}=u;R&&(v=v?v.concat(R):R),o==null?(n(b,d,_),n(E,d,_),De(u.children||[],d,E,g,m,x,v,y)):w>0&&w&64&&O&&o.dynamicChildren?(Ke(o.dynamicChildren,O,d,g,m,x,v),(u.key!=null||g&&u===g.subTree)&&Si(o,u,!0)):U(o,u,d,E,g,m,x,v,y)},Pt=(o,u,d,_,g,m,x,v,y)=>{u.slotScopeIds=v,o==null?u.shapeFlag&512?g.ctx.activate(u,d,_,x,y):is(u,d,_,g,m,x,y):Js(o,u,y)},is=(o,u,d,_,g,m,x)=>{const v=o.component=Ol(o,_,g);if(ci(o)&&(v.ctx.renderer=ft),El(v,!1,x),v.asyncDep){if(g&&g.registerDep(v,te,x),!o.el){const y=v.subTree=Pe(St);H(null,y,u,d)}}else te(v,o,u,d,g,m,x)},Js=(o,u,d)=>{const _=u.component=o.component;if(gl(o,u,d))if(_.asyncDep&&!_.asyncResolved){q(_,u,d);return}else _.next=u,_.update();else u.el=o.el,_.vnode=u},te=(o,u,d,_,g,m,x)=>{const v=()=>{if(o.isMounted){let{next:w,bu:O,u:R,parent:F,vnode:B}=o;{const oe=Ci(o);if(oe){w&&(w.el=B.el,q(o,w,x)),oe.asyncDep.then(()=>{o.isUnmounted||v()});return}}let N=w,le;Je(o,!1),w?(w.el=B.el,q(o,w,x)):w=B,O&&os(O),(le=w.props&&w.props.onVnodeBeforeUpdate)&&ye(le,F,w,B),Je(o,!0);const Q=ps(o),he=o.subTree;o.subTree=Q,T(he,Q,p(he.el),It(he),o,g,m),w.el=Q.el,N===null&&ml(o,Q.el),R&&fe(R,g),(le=w.props&&w.props.onVnodeUpdated)&&fe(()=>ye(le,F,w,B),g)}else{let w;const{el:O,props:R}=u,{bm:F,m:B,parent:N,root:le,type:Q}=o,he=_t(u);if(Je(o,!1),F&&os(F),!he&&(w=R&&R.onVnodeBeforeMount)&&ye(w,N,u),Je(o,!0),O&&Zs){const oe=()=>{o.subTree=ps(o),Zs(O,o.subTree,o,g,null)};he&&Q.__asyncHydrate?Q.__asyncHydrate(O,o,oe):oe()}else{le.ce&&le.ce._injectChildStyle(Q);const oe=o.subTree=ps(o);T(null,oe,d,_,o,g,m),u.el=oe.el}if(B&&fe(B,g),!he&&(w=R&&R.onVnodeMounted)){const oe=u;fe(()=>ye(w,N,oe),g)}(u.shapeFlag&256||N&&_t(N.vnode)&&N.vnode.shapeFlag&256)&&o.a&&fe(o.a,g),o.isMounted=!0,u=d=_=null}};o.scope.on();const y=o.effect=new Un(v);o.scope.off();const b=o.update=y.run.bind(y),E=o.job=y.runIfDirty.bind(y);E.i=o,E.id=o.uid,y.scheduler=()=>Bs(E),Je(o,!0),b()},q=(o,u,d)=>{u.component=o;const _=o.vnode.props;o.vnode=u,o.next=null,kr(o,u.props,_,d),nl(o,u.children,d),Be(),rn(o),Ve()},U=(o,u,d,_,g,m,x,v,y=!1)=>{const b=o&&o.children,E=o?o.shapeFlag:0,w=u.children,{patchFlag:O,shapeFlag:R}=u;if(O>0){if(O&128){Mt(b,w,d,_,g,m,x,v,y);return}else if(O&256){We(b,w,d,_,g,m,x,v,y);return}}R&8?(E&16&&ct(b,g,m),w!==b&&a(d,w)):E&16?R&16?Mt(b,w,d,_,g,m,x,v,y):ct(b,g,m,!0):(E&8&&a(d,""),R&16&&De(w,d,_,g,m,x,v,y))},We=(o,u,d,_,g,m,x,v,y)=>{o=o||et,u=u||et;const b=o.length,E=u.length,w=Math.min(b,E);let O;for(O=0;O<w;O++){const R=u[O]=y?$e(u[O]):xe(u[O]);T(o[O],R,d,null,g,m,x,v,y)}b>E?ct(o,g,m,!0,!1,w):De(u,d,_,g,m,x,v,y,w)},Mt=(o,u,d,_,g,m,x,v,y)=>{let b=0;const E=u.length;let w=o.length-1,O=E-1;for(;b<=w&&b<=O;){const R=o[b],F=u[b]=y?$e(u[b]):xe(u[b]);if(dt(R,F))T(R,F,d,null,g,m,x,v,y);else break;b++}for(;b<=w&&b<=O;){const R=o[w],F=u[O]=y?$e(u[O]):xe(u[O]);if(dt(R,F))T(R,F,d,null,g,m,x,v,y);else break;w--,O--}if(b>w){if(b<=O){const R=O+1,F=R<E?u[R].el:_;for(;b<=O;)T(null,u[b]=y?$e(u[b]):xe(u[b]),d,F,g,m,x,v,y),b++}}else if(b>O)for(;b<=w;)_e(o[b],g,m,!0),b++;else{const R=b,F=b,B=new Map;for(b=F;b<=O;b++){const ce=u[b]=y?$e(u[b]):xe(u[b]);ce.key!=null&&B.set(ce.key,b)}let N,le=0;const Q=O-F+1;let he=!1,oe=0;const ut=new Array(Q);for(b=0;b<Q;b++)ut[b]=0;for(b=R;b<=w;b++){const ce=o[b];if(le>=Q){_e(ce,g,m,!0);continue}let be;if(ce.key!=null)be=B.get(ce.key);else for(N=F;N<=O;N++)if(ut[N-F]===0&&dt(ce,u[N])){be=N;break}be===void 0?_e(ce,g,m,!0):(ut[be-F]=b+1,be>=oe?oe=be:he=!0,T(ce,u[be],d,null,g,m,x,v,y),le++)}const Qs=he?ol(ut):et;for(N=Qs.length-1,b=Q-1;b>=0;b--){const ce=F+b,be=u[ce],ks=ce+1<E?u[ce+1].el:_;ut[b]===0?T(null,be,d,ks,g,m,x,v,y):he&&(N<0||b!==Qs[N]?qe(be,d,ks,2):N--)}}},qe=(o,u,d,_,g=null)=>{const{el:m,type:x,transition:v,children:y,shapeFlag:b}=o;if(b&6){qe(o.component.subTree,u,d,_);return}if(b&128){o.suspense.move(u,d,_);return}if(b&64){x.move(o,u,d,ft);return}if(x===re){n(m,u,d);for(let w=0;w<y.length;w++)qe(y[w],u,d,_);n(o.anchor,u,d);return}if(x===Lt){W(o,u,d);return}if(_!==2&&b&1&&v)if(_===0)v.beforeEnter(m),n(m,u,d),fe(()=>v.enter(m),g);else{const{leave:w,delayLeave:O,afterLeave:R}=v,F=()=>n(m,u,d),B=()=>{w(m,()=>{F(),R&&R()})};O?O(m,F,B):B()}else n(m,u,d)},_e=(o,u,d,_=!1,g=!1)=>{const{type:m,props:x,ref:v,children:y,dynamicChildren:b,shapeFlag:E,patchFlag:w,dirs:O,cacheIndex:R}=o;if(w===-2&&(g=!1),v!=null&&ws(v,null,d,o,!0),R!=null&&(u.renderCache[R]=void 0),E&256){u.ctx.deactivate(o);return}const F=E&1&&O,B=!_t(o);let N;if(B&&(N=x&&x.onVnodeBeforeUnmount)&&ye(N,u,o),E&6)$i(o.component,d,_);else{if(E&128){o.suspense.unmount(d,_);return}F&&Ge(o,null,u,"beforeUnmount"),E&64?o.type.remove(o,u,d,ft,_):b&&!b.hasOnce&&(m!==re||w>0&&w&64)?ct(b,u,d,!1,!0):(m===re&&w&384||!g&&E&16)&&ct(y,u,d),_&&Ys(o)}(B&&(N=x&&x.onVnodeUnmounted)||F)&&fe(()=>{N&&ye(N,u,o),F&&Ge(o,null,u,"unmounted")},d)},Ys=o=>{const{type:u,el:d,anchor:_,transition:g}=o;if(u===re){Hi(d,_);return}if(u===Lt){A(o);return}const m=()=>{i(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(o.shapeFlag&1&&g&&!g.persisted){const{leave:x,delayLeave:v}=g,y=()=>x(d,m);v?v(o.el,m,y):y()}else m()},Hi=(o,u)=>{let d;for(;o!==u;)d=S(o),i(o),o=d;i(u)},$i=(o,u,d)=>{const{bum:_,scope:g,job:m,subTree:x,um:v,m:y,a:b}=o;an(y),an(b),_&&os(_),g.stop(),m&&(m.flags|=8,_e(x,o,u,d)),v&&fe(v,u),fe(()=>{o.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&o.asyncDep&&!o.asyncResolved&&o.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},ct=(o,u,d,_=!1,g=!1,m=0)=>{for(let x=m;x<o.length;x++)_e(o[x],u,d,_,g)},It=o=>{if(o.shapeFlag&6)return It(o.component.subTree);if(o.shapeFlag&128)return o.suspense.next();const u=S(o.anchor||o.el),d=u&&u[Rr];return d?S(d):u};let rs=!1;const zs=(o,u,d)=>{o==null?u._vnode&&_e(u._vnode,null,null,!0):T(u._vnode||null,o,u,null,null,null,d),u._vnode=o,rs||(rs=!0,rn(),ii(),rs=!1)},ft={p:T,um:_e,m:qe,r:Ys,mt:is,mc:De,pc:U,pbc:Ke,n:It,o:e};let Xs,Zs;return{render:zs,hydrate:Xs,createApp:Xr(zs,Xs)}}function hs({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function Je({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ll(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Si(e,t,s=!1){const n=e.children,i=t.children;if(P(n)&&P(i))for(let r=0;r<n.length;r++){const l=n[r];let c=i[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[r]=$e(i[r]),c.el=l.el),!s&&c.patchFlag!==-2&&Si(l,c)),c.type===ns&&(c.el=l.el)}}function ol(e){const t=e.slice(),s=[0];let n,i,r,l,c;const f=e.length;for(n=0;n<f;n++){const h=e[n];if(h!==0){if(i=s[s.length-1],e[i]<h){t[n]=i,s.push(n);continue}for(r=0,l=s.length-1;r<l;)c=r+l>>1,e[s[c]]<h?r=c+1:l=c;h<e[s[r]]&&(r>0&&(t[n]=s[r-1]),s[r]=n)}}for(r=s.length,l=s[r-1];r-- >0;)s[r]=l,l=t[l];return s}function Ci(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ci(t)}function an(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const cl=Symbol.for("v-scx"),fl=()=>jt(cl);function Nt(e,t,s){return Ti(e,t,s)}function Ti(e,t,s=K){const{immediate:n,deep:i,flush:r,once:l}=s,c=Z({},s),f=t&&n||!t&&r!=="post";let h;if(Tt){if(r==="sync"){const C=fl();h=C.__watcherHandles||(C.__watcherHandles=[])}else if(!f){const C=()=>{};return C.stop=Se,C.resume=Se,C.pause=Se,C}}const a=ie;c.call=(C,M,T)=>Ce(C,a,M,T);let p=!1;r==="post"?c.scheduler=C=>{fe(C,a&&a.suspense)}:r!=="sync"&&(p=!0,c.scheduler=(C,M)=>{M?C():Bs(C)}),c.augmentJob=C=>{t&&(C.flags|=4),p&&(C.flags|=2,a&&(C.id=a.uid,C.i=a))};const S=Sr(e,t,c);return Tt&&(h?h.push(S):f&&S()),S}function ul(e,t,s){const n=this.proxy,i=J(e)?e.includes(".")?Oi(n,e):()=>n[e]:e.bind(n,n);let r;I(t)?r=t:(r=t.handler,s=t);const l=Et(this),c=Ti(i,r.bind(n),s);return l(),c}function Oi(e,t){const s=t.split(".");return()=>{let n=e;for(let i=0;i<s.length&&n;i++)n=n[s[i]];return n}}const al=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Le(t)}Modifiers`]||e[`${Ze(t)}Modifiers`];function dl(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||K;let i=s;const r=t.startsWith("update:"),l=r&&al(n,t.slice(7));l&&(l.trim&&(i=s.map(a=>J(a)?a.trim():a)),l.number&&(i=s.map(Vi)));let c,f=n[c=ls(t)]||n[c=ls(Le(t))];!f&&r&&(f=n[c=ls(Ze(t))]),f&&Ce(f,e,6,i);const h=n[c+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ce(h,e,6,i)}}function Ei(e,t,s=!1){const n=t.emitsCache,i=n.get(e);if(i!==void 0)return i;const r=e.emits;let l={},c=!1;if(!I(e)){const f=h=>{const a=Ei(h,t,!0);a&&(c=!0,Z(l,a))};!s&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}return!r&&!c?(G(e)&&n.set(e,null),null):(P(r)?r.forEach(f=>l[f]=null):Z(l,r),G(e)&&n.set(e,l),l)}function ss(e,t){return!e||!Jt(t)?!1:(t=t.slice(2).replace(/Once$/,""),j(e,t[0].toLowerCase()+t.slice(1))||j(e,Ze(t))||j(e,t))}function ps(e){const{type:t,vnode:s,proxy:n,withProxy:i,propsOptions:[r],slots:l,attrs:c,emit:f,render:h,renderCache:a,props:p,data:S,setupState:C,ctx:M,inheritAttrs:T}=e,D=Wt(e);let H,L;try{if(s.shapeFlag&4){const A=i||n,Y=A;H=xe(h.call(Y,A,a,p,C,S,M)),L=c}else{const A=t;H=xe(A.length>1?A(p,{attrs:c,slots:l,emit:f}):A(p,null)),L=t.props?c:hl(c)}}catch(A){yt.length=0,es(A,e,1),H=Pe(St)}let W=H;if(L&&T!==!1){const A=Object.keys(L),{shapeFlag:Y}=W;A.length&&Y&7&&(r&&A.some(Ms)&&(L=pl(L,r)),W=lt(W,L,!1,!0))}return s.dirs&&(W=lt(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(s.dirs):s.dirs),s.transition&&Vs(W,s.transition),H=W,Wt(D),H}const hl=e=>{let t;for(const s in e)(s==="class"||s==="style"||Jt(s))&&((t||(t={}))[s]=e[s]);return t},pl=(e,t)=>{const s={};for(const n in e)(!Ms(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function gl(e,t,s){const{props:n,children:i,component:r}=e,{props:l,children:c,patchFlag:f}=t,h=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&f>=0){if(f&1024)return!0;if(f&16)return n?dn(n,l,h):!!l;if(f&8){const a=t.dynamicProps;for(let p=0;p<a.length;p++){const S=a[p];if(l[S]!==n[S]&&!ss(h,S))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:n===l?!1:n?l?dn(n,l,h):!0:!!l;return!1}function dn(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const r=n[i];if(t[r]!==e[r]&&!ss(s,r))return!0}return!1}function ml({vnode:e,parent:t},s){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=s,t=t.parent;else break}}const Ai=e=>e.__isSuspense;function _l(e,t){t&&t.pendingBranch?P(e)?t.effects.push(...e):t.effects.push(e):Er(e)}const re=Symbol.for("v-fgt"),ns=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),Lt=Symbol.for("v-stc"),yt=[];let ae=null;function Oe(e=!1){yt.push(ae=e?null:[])}function bl(){yt.pop(),ae=yt[yt.length-1]||null}let Ct=1;function hn(e){Ct+=e,e<0&&ae&&(ae.hasOnce=!0)}function yl(e){return e.dynamicChildren=Ct>0?ae||et:null,bl(),Ct>0&&ae&&ae.push(e),e}function Ee(e,t,s,n,i,r){return yl(z(e,t,s,n,i,r,!0))}function Ri(e){return e?e.__v_isVNode===!0:!1}function dt(e,t){return e.type===t.type&&e.key===t.key}const Pi=({key:e})=>e??null,Ut=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?J(e)||X(e)||I(e)?{i:we,r:e,k:t,f:!!s}:e:null);function z(e,t=null,s=null,n=0,i=null,r=e===re?0:1,l=!1,c=!1){const f={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Pi(t),ref:t&&Ut(t),scopeId:li,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:we};return c?(qs(f,s),r&128&&e.normalize(f)):s&&(f.shapeFlag|=J(s)?8:16),Ct>0&&!l&&ae&&(f.patchFlag>0||r&6)&&f.patchFlag!==32&&ae.push(f),f}const Pe=vl;function vl(e,t=null,s=null,n=0,i=null,r=!1){if((!e||e===Vr)&&(e=St),Ri(e)){const c=lt(e,t,!0);return s&&qs(c,s),Ct>0&&!r&&ae&&(c.shapeFlag&6?ae[ae.indexOf(e)]=c:ae.push(c)),c.patchFlag=-2,c}if(Ml(e)&&(e=e.__vccOpts),t){t=xl(t);let{class:c,style:f}=t;c&&!J(c)&&(t.class=st(c)),G(f)&&(Us(f)&&!P(f)&&(f=Z({},f)),t.style=Zt(f))}const l=J(e)?1:Ai(e)?128:Pr(e)?64:G(e)?4:I(e)?2:0;return z(e,t,s,n,i,l,r,!0)}function xl(e){return e?Us(e)||mi(e)?Z({},e):e:null}function lt(e,t,s=!1,n=!1){const{props:i,ref:r,patchFlag:l,children:c,transition:f}=e,h=t?Sl(i||{},t):i,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Pi(h),ref:t&&t.ref?s&&r?P(r)?r.concat(Ut(t)):[r,Ut(t)]:Ut(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==re?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:f,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lt(e.ssContent),ssFallback:e.ssFallback&&lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return f&&n&&Vs(a,f.clone(a)),a}function Mi(e=" ",t=0){return Pe(ns,null,e,t)}function wl(e,t){const s=Pe(Lt,null,e);return s.staticCount=t,s}function xe(e){return e==null||typeof e=="boolean"?Pe(St):P(e)?Pe(re,null,e.slice()):Ri(e)?$e(e):Pe(ns,null,String(e))}function $e(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:lt(e)}function qs(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(P(t))s=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),qs(e,i()),i._c&&(i._d=!0));return}else{s=32;const i=t._;!i&&!mi(t)?t._ctx=we:i===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else I(t)?(t={default:t,_ctx:we},s=32):(t=String(t),n&64?(s=16,t=[Mi(t)]):s=8);e.children=t,e.shapeFlag|=s}function Sl(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=st([t.class,n.class]));else if(i==="style")t.style=Zt([t.style,n.style]);else if(Jt(i)){const r=t[i],l=n[i];l&&r!==l&&!(P(r)&&r.includes(l))&&(t[i]=r?[].concat(r,l):l)}else i!==""&&(t[i]=n[i])}return t}function ye(e,t,s,n=null){Ce(e,t,7,[s,n])}const Cl=hi();let Tl=0;function Ol(e,t,s){const n=e.type,i=(t?t.appContext:e.appContext)||Cl,r={uid:Tl++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bi(n,i),emitsOptions:Ei(n,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:n.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=dl.bind(null,r),e.ce&&e.ce(r),r}let ie=null,Gt,Es;{const e=Xt(),t=(s,n)=>{let i;return(i=e[s])||(i=e[s]=[]),i.push(n),r=>{i.length>1?i.forEach(l=>l(r)):i[0](r)}};Gt=t("__VUE_INSTANCE_SETTERS__",s=>ie=s),Es=t("__VUE_SSR_SETTERS__",s=>Tt=s)}const Et=e=>{const t=ie;return Gt(e),e.scope.on(),()=>{e.scope.off(),Gt(t)}},pn=()=>{ie&&ie.scope.off(),Gt(null)};function Ii(e){return e.vnode.shapeFlag&4}let Tt=!1;function El(e,t=!1,s=!1){t&&Es(t);const{props:n,children:i}=e.vnode,r=Ii(e);Qr(e,n,r,t),sl(e,i,s);const l=r?Al(e,t):void 0;return t&&Es(!1),l}function Al(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Kr);const{setup:n}=s;if(n){Be();const i=e.setupContext=n.length>1?Pl(e):null,r=Et(e),l=Ot(n,e,0,[e.props,i]),c=In(l);if(Ve(),r(),(c||e.sp)&&!_t(e)&&oi(e),c){if(l.then(pn,pn),t)return l.then(f=>{gn(e,f,t)}).catch(f=>{es(f,e,0)});e.asyncDep=l}else gn(e,l,t)}else Di(e,t)}function gn(e,t,s){I(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=ti(t)),Di(e,s)}let mn;function Di(e,t,s){const n=e.type;if(!e.render){if(!t&&mn&&!n.render){const i=n.template||Ks(e).template;if(i){const{isCustomElement:r,compilerOptions:l}=e.appContext.config,{delimiters:c,compilerOptions:f}=n,h=Z(Z({isCustomElement:r,delimiters:c},l),f);n.render=mn(i,h)}}e.render=n.render||Se}{const i=Et(e);Be();try{Wr(e)}finally{Ve(),i()}}}const Rl={get(e,t){return k(e,"get",""),e[t]}};function Pl(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Rl),slots:e.slots,emit:e.emit,expose:t}}function Gs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ti(mr(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in bt)return bt[s](e)},has(t,s){return s in t||s in bt}})):e.proxy}function Ml(e){return I(e)&&"__vccOpts"in e}const Il=(e,t)=>xr(e,t,Tt),Dl="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let As;const _n=typeof window<"u"&&window.trustedTypes;if(_n)try{As=_n.createPolicy("vue",{createHTML:e=>e})}catch{}const Fi=As?e=>As.createHTML(e):e=>e,Fl="http://www.w3.org/2000/svg",Hl="http://www.w3.org/1998/Math/MathML",Ae=typeof document<"u"?document:null,bn=Ae&&Ae.createElement("template"),$l={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const i=t==="svg"?Ae.createElementNS(Fl,e):t==="mathml"?Ae.createElementNS(Hl,e):s?Ae.createElement(e,{is:s}):Ae.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>Ae.createTextNode(e),createComment:e=>Ae.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ae.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,i,r){const l=s?s.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),s),!(i===r||!(i=i.nextSibling)););else{bn.innerHTML=Fi(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const c=bn.content;if(n==="svg"||n==="mathml"){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}t.insertBefore(c,s)}return[l?l.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},jl=Symbol("_vtc");function Nl(e,t,s){const n=e[jl];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const yn=Symbol("_vod"),Ll=Symbol("_vsh"),Ul=Symbol(""),Bl=/(^|;)\s*display\s*:/;function Vl(e,t,s){const n=e.style,i=J(s);let r=!1;if(s&&!i){if(t)if(J(t))for(const l of t.split(";")){const c=l.slice(0,l.indexOf(":")).trim();s[c]==null&&Bt(n,c,"")}else for(const l in t)s[l]==null&&Bt(n,l,"");for(const l in s)l==="display"&&(r=!0),Bt(n,l,s[l])}else if(i){if(t!==s){const l=n[Ul];l&&(s+=";"+l),n.cssText=s,r=Bl.test(s)}}else t&&e.removeAttribute("style");yn in e&&(e[yn]=r?n.display:"",e[Ll]&&(n.display="none"))}const vn=/\s*!important$/;function Bt(e,t,s){if(P(s))s.forEach(n=>Bt(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=Kl(e,t);vn.test(s)?e.setProperty(Ze(n),s.replace(vn,""),"important"):e[n]=s}}const xn=["Webkit","Moz","ms"],gs={};function Kl(e,t){const s=gs[t];if(s)return s;let n=Le(t);if(n!=="filter"&&n in e)return gs[t]=n;n=Hn(n);for(let i=0;i<xn.length;i++){const r=xn[i]+n;if(r in e)return gs[t]=r}return t}const wn="http://www.w3.org/1999/xlink";function Sn(e,t,s,n,i,r=Yi(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(wn,t.slice(6,t.length)):e.setAttributeNS(wn,t,s):s==null||r&&!jn(s)?e.removeAttribute(t):e.setAttribute(t,r?"":Ue(s)?String(s):s)}function Cn(e,t,s,n,i){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?Fi(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const c=r==="OPTION"?e.getAttribute("value")||"":e.value,f=s==null?e.type==="checkbox"?"on":"":String(s);(c!==f||!("_value"in e))&&(e.value=f),s==null&&e.removeAttribute(t),e._value=s;return}let l=!1;if(s===""||s==null){const c=typeof e[t];c==="boolean"?s=jn(s):s==null&&c==="string"?(s="",l=!0):c==="number"&&(s=0,l=!0)}try{e[t]=s}catch{}l&&e.removeAttribute(i||t)}function Wl(e,t,s,n){e.addEventListener(t,s,n)}function ql(e,t,s,n){e.removeEventListener(t,s,n)}const Tn=Symbol("_vei");function Gl(e,t,s,n,i=null){const r=e[Tn]||(e[Tn]={}),l=r[t];if(n&&l)l.value=n;else{const[c,f]=Jl(t);if(n){const h=r[t]=Xl(n,i);Wl(e,c,h,f)}else l&&(ql(e,c,l,f),r[t]=void 0)}}const On=/(?:Once|Passive|Capture)$/;function Jl(e){let t;if(On.test(e)){t={};let n;for(;n=e.match(On);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ze(e.slice(2)),t]}let ms=0;const Yl=Promise.resolve(),zl=()=>ms||(Yl.then(()=>ms=0),ms=Date.now());function Xl(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;Ce(Zl(n,s.value),t,5,[n])};return s.value=e,s.attached=zl(),s}function Zl(e,t){if(P(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const En=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ql=(e,t,s,n,i,r)=>{const l=i==="svg";t==="class"?Nl(e,n,l):t==="style"?Vl(e,s,n):Jt(t)?Ms(t)||Gl(e,t,s,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kl(e,t,n,l))?(Cn(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Sn(e,t,n,l,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!J(n))?Cn(e,Le(t),n,r,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Sn(e,t,n,l))};function kl(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&En(t)&&I(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return En(t)&&J(s)?!1:t in e}const eo=Z({patchProp:Ql},$l);let An;function to(){return An||(An=il(eo))}const so=(...e)=>{const t=to().createApp(...e),{mount:s}=t;return t.mount=n=>{const i=io(n);if(!i)return;const r=t._component;!I(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const l=s(i,!1,no(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},t};function no(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function io(e){return J(e)?document.querySelector(e):e}const Rs={s1:[{name:"红色背景",strategy:(e,t,s,n,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#c14949",e.fillRect(0,0,t,s)}},{name:"红色长条",strategy:(e,t,s,n,i)=>{e.fillStyle="red",e.globalCompositeOperation="destination-over",n.forEach(r=>{e.fillRect(r/24*t,0,t/24,s)})}}],s2:[{name:"紫色背景",id:"s21",strategy:(e,t,s,n,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#d58585",e.fillRect(0,0,t,s)}}],s3:[{name:"蓝色进度条",id:"s31",strategy:(e,t,s,n,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#8fb3f7",e.fillRect(0,0,t/5*n,s/3)}}],s4:[{name:"粉红进度条",id:"s41",strategy:(e,t,s,n,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#ffbbfe",e.fillRect(0,s/3,t/15*n,s/3)}}],hh:[{name:"绿色进度条",id:"hh1",strategy:(e,t,s,n,i)=>{e.globalCompositeOperation="destination-over",e.fillStyle="#88ff8a",e.fillRect(0,s/3*2,t/15*n,s/3)}}],coner:[{name:"左上角大字",id:"coner1",strategy:(e,t,s,n,i)=>{e.font="50px gray",e.fillStyle="#2c2c2c",e.textBaseline="top",e.fillText(n[0],10,10)}}],memo:[{name:"左下角展示",id:"memo1",strategy:(e,t,s,n,i)=>{e.font="20px gray",e.fillStyle="black",e.textBaseline="bottom",e.fillText(n,10,s-10)}}],detail:[{name:"粉红badge",id:"detail1",strategy:(e,t,s,n,i)=>{}}]},ro={s1:"大发",s2:"大发不抽",s3:"小发",s4:"轻微发",hh:"恍惚",coner:"事件",memo:"备注",detail:"详情"},Rn={s1:0,s2:0,s3:0,s4:0,hh:0,coner:0,memo:0,detail:0},lo={class:"record"},oo={__name:"Record",props:{record:Object,strategy:Object},setup(e){const t=e;let s,n,i,r;return ui(()=>{n=s.getContext("2d"),i=s.width,r=s.height,Nt(t,()=>{if(t.record&&t.strategy&&n){n.clearRect(0,0,i,r);for(let l in t.record)t.strategy[l]!==-1&&Rs[l][t.strategy[l]].strategy&&Rs[l][t.strategy[l]].strategy(n,i,r,t.record[l],t.strategy)}},{deep:!0,immediate:!0})}),(l,c)=>(Oe(),Ee("div",lo,[z("canvas",{ref:f=>X(s)?s.value=f:s=f},null,512)]))}},co={"2024-02-04":{s1:[7],detail:`
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
（5,26）下午16点小发作
        `},"2024-05-29":{s3:1,detail:`
（5，29）23点59小发作（眨左眼）
        `},"2024-05-30":{s3:1,detail:`
（5，30）中午小发作，13点跟我说的，自己描述24小时麻了6次，有声音，眼泪不明显，觉得左边有人（体感）
        `},"2024-06-01":{s1:[8],detail:`
6月1日，早上7点40。爬到我身上发的，感觉一分钟不到，打完7.40
前一晚因为我8点睡了，导致他和小哈没人管晚睡，我还不开心了
这2个原因，还是不发作时间久了，一共3个可能的原因
7.54自己起来盖被子
8:07 醒了，不知道自己发过，没有不舒服
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
这里比较有意思的是, "和外婆说好不烧饭出去吃, 但不记得了" --- 不知道是不是生病少了一层过滤, 还竟然成功了
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
        `}},Pn=Object.fromEntries(Object.entries(co).map(([e,t])=>[new Date(e).valueOf(),t])),fo={id:"cont-wrap"},uo={id:"calender-wrap"},ao={id:"calender-head"},ho={class:"calender-year"},po=["onClick"],go={class:"date"},mo={class:"strat"},_o={class:"opt-head"},bo=["onClick"],yo=["onClick"],vo={class:"strat"},xo={id:"detail"},wo={__name:"App",setup(e){const t=["2024-01-29","2024-12-30"],s=(new Date(t[1])-new Date(t[0]))/864e5,n=new Date(t[0]).valueOf(),i=nn(new Date(t[0]).valueOf()+864e5*4),r=kt(Rn),l=M=>{const T=new Date(+M);return`${T.getFullYear()}-${T.getMonth()+1}-${T.getDate()}`};let c={};const f=M=>{var T;(T=c[M])==null||T.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})};let h=0,a=null;const p=nn(!0),S=M=>{if(!a){const T=M.target;p.value=h>T.scrollTop,h=T.scrollTop;const D=new Date(t[0]).valueOf()+(new Date(t[1])-new Date(t[0]))/T.scrollHeight*(T.scrollTop+T.clientHeight/2);i.value=D,a=setTimeout(()=>{a=null},350)}},C=M=>{for(const T in Rn)r[T]=M?0:-1};return(M,T)=>(Oe(),Ee(re,null,[z("div",fo,[z("div",uo,[z("div",ao,[z("div",ho,Fe(new Date(i.value).getFullYear())+"年"+Fe(new Date(i.value).getMonth()+1)+"月 ",1),T[2]||(T[2]=wl('<div class="calender-item">周日</div><div class="calender-item">周一</div><div class="calender-item">周二</div><div class="calender-item">周三</div><div class="calender-item">周四</div><div class="calender-item">周五</div><div class="calender-item">周六</div>',7))]),z("div",{id:"calander-body",onScroll:S},[(Oe(),Ee(re,null,$t(s,D=>z("div",{class:st(["calender-item card",{active:pe(n)+D*864e5-i.value<864e5*31&&new Date(pe(n)+D*864e5).getMonth()===new Date(i.value).getMonth()}]),onClick:H=>f(pe(n)+D*864e5)},[z("div",go,Fe(new Date(pe(n)+D*864e5).getDate()),1),Pe(oo,{strategy:r,record:pe(Pn)[pe(n)+D*864e5]},null,8,["strategy","record"])],10,po)),64))],32),z("div",{id:"strategy-select",style:Zt(`transform: translateY(${p.value?0:"100%"})`)},[(Oe(!0),Ee(re,null,$t(Object.entries(pe(Rs)),D=>(Oe(),Ee("div",mo,[z("div",_o,Fe(pe(ro)[D[0]]),1),(Oe(!0),Ee(re,null,$t(D[1],(H,L)=>(Oe(),Ee("div",{class:st(["option",{active:L===r[D[0]]}]),onClick:W=>r[D[0]]=L},Fe(H.name),11,bo))),256)),z("div",{class:st(["option",{active:r[D[0]]===-1}]),onClick:H=>r[D[0]]=-1}," 不渲染 ",10,yo)]))),256)),z("div",vo,[z("div",{class:"action",onClick:T[0]||(T[0]=D=>C(!0))},"默认"),z("div",{class:"action",onClick:T[1]||(T[1]=D=>C(!1))},"关闭渲染")])],4)])]),z("div",xo,[(Oe(!0),Ee(re,null,$t(Object.entries(pe(Pn)),([D,H])=>(Oe(),Ee("div",{class:"detail-card",ref_for:!0,ref:L=>pe(c)[D]=L},[Mi(Fe(l(D))+" ",1),z("pre",null,"        "+Fe(H.detail)+`
      `,1)],512))),256))])],64))}};so(wo).mount("#app");
