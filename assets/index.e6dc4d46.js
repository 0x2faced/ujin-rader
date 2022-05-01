var Es=Object.defineProperty,Os=Object.defineProperties;var Rs=Object.getOwnPropertyDescriptors;var xt=Object.getOwnPropertySymbols;var eo=Object.prototype.hasOwnProperty,to=Object.prototype.propertyIsEnumerable;var $n=(e,t,n)=>t in e?Es(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,tn=(e,t)=>{for(var n in t||(t={}))eo.call(t,n)&&$n(e,n,t[n]);if(xt)for(var n of xt(t))to.call(t,n)&&$n(e,n,t[n]);return e},nn=(e,t)=>Os(e,Rs(t));var no=(e,t)=>{var n={};for(var o in e)eo.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&xt)for(var o of xt(e))t.indexOf(o)<0&&to.call(e,o)&&(n[o]=e[o]);return n};const Vs=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Vs();function Fn(e,t){const n=Object.create(null),o=e.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ws="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qs=Fn(Ws);function Do(e){return!!e||e===""}function Sn(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=Z(o)?qs(o):Sn(o);if(s)for(const i in s)t[i]=s[i]}return t}else{if(Z(e))return e;if(X(e))return e}}const Ks=/;(?![^(]*\))/g,Xs=/:(.+)/;function qs(e){const t={};return e.split(Ks).forEach(n=>{if(n){const o=n.split(Xs);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ln(e){let t="";if(Z(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const o=Ln(e[n]);o&&(t+=o+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Zs(e,t){if(e.length!==t.length)return!1;let n=!0;for(let o=0;n&&o<e.length;o++)n=Et(e[o],t[o]);return n}function Et(e,t){if(e===t)return!0;let n=oo(e),o=oo(t);if(n||o)return n&&o?e.getTime()===t.getTime():!1;if(n=M(e),o=M(t),n||o)return n&&o?Zs(e,t):!1;if(n=X(e),o=X(t),n||o){if(!n||!o)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Et(e[a],t[a]))return!1}}return String(e)===String(t)}function Ys(e,t){return e.findIndex(n=>Et(n,t))}const ct=e=>Z(e)?e:e==null?"":M(e)||X(e)&&(e.toString===Bo||!L(e.toString))?JSON.stringify(e,To,2):String(e),To=(e,t)=>t&&t.__v_isRef?To(e,t.value):et(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s])=>(n[`${o} =>`]=s,n),{})}:Rt(t)?{[`Set(${t.size})`]:[...t.values()]}:X(t)&&!M(t)&&!No(t)?String(t):t,E={},$e=[],be=()=>{},zs=()=>!1,Js=/^on[^a-z]/,Ot=e=>Js.test(e),Pn=e=>e.startsWith("onUpdate:"),$=Object.assign,An=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Gs=Object.prototype.hasOwnProperty,A=(e,t)=>Gs.call(e,t),M=Array.isArray,et=e=>Vt(e)==="[object Map]",Rt=e=>Vt(e)==="[object Set]",oo=e=>e instanceof Date,L=e=>typeof e=="function",Z=e=>typeof e=="string",Hn=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Io=e=>X(e)&&L(e.then)&&L(e.catch),Bo=Object.prototype.toString,Vt=e=>Bo.call(e),$s=e=>Vt(e).slice(8,-1),No=e=>Vt(e)==="[object Object]",Cn=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Lt=Fn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ei=/-(\w)/g,nt=Wt(e=>e.replace(ei,(t,n)=>n?n.toUpperCase():"")),ti=/\B([A-Z])/g,st=Wt(e=>e.replace(ti,"-$1").toLowerCase()),Eo=Wt(e=>e.charAt(0).toUpperCase()+e.slice(1)),on=Wt(e=>e?`on${Eo(e)}`:""),bt=(e,t)=>!Object.is(e,t),Pt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ht=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Oo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let so;const ni=()=>so||(so=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let we;class oi{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&we&&(this.parent=we,this.index=(we.scopes||(we.scopes=[])).push(this)-1)}run(t){if(this.active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this.active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function si(e,t=we){t&&t.active&&t.effects.push(e)}const Dn=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ro=e=>(e.w&De)>0,Vo=e=>(e.n&De)>0,ii=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=De},ai=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const s=t[o];Ro(s)&&!Vo(s)?s.delete(e):t[n++]=s,s.w&=~De,s.n&=~De}t.length=n}},hn=new WeakMap;let dt=0,De=1;const dn=30;let me;const Ve=Symbol(""),un=Symbol("");class Tn{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,si(this,o)}run(){if(!this.active)return this.fn();let t=me,n=He;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=me,me=this,He=!0,De=1<<++dt,dt<=dn?ii(this):io(this),this.fn()}finally{dt<=dn&&ai(this),De=1<<--dt,me=this.parent,He=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){me===this?this.deferStop=!0:this.active&&(io(this),this.onStop&&this.onStop(),this.active=!1)}}function io(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let He=!0;const Wo=[];function it(){Wo.push(He),He=!1}function at(){const e=Wo.pop();He=e===void 0?!0:e}function re(e,t,n){if(He&&me){let o=hn.get(e);o||hn.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=Dn()),Qo(s)}}function Qo(e,t){let n=!1;dt<=dn?Vo(e)||(e.n|=De,n=!Ro(e)):n=!e.has(me),n&&(e.add(me),me.deps.push(e))}function Me(e,t,n,o,s,i){const a=hn.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&M(e))a.forEach((c,d)=>{(d==="length"||d>=o)&&l.push(c)});else switch(n!==void 0&&l.push(a.get(n)),t){case"add":M(e)?Cn(n)&&l.push(a.get("length")):(l.push(a.get(Ve)),et(e)&&l.push(a.get(un)));break;case"delete":M(e)||(l.push(a.get(Ve)),et(e)&&l.push(a.get(un)));break;case"set":et(e)&&l.push(a.get(Ve));break}if(l.length===1)l[0]&&pn(l[0]);else{const c=[];for(const d of l)d&&c.push(...d);pn(Dn(c))}}function pn(e,t){for(const n of M(e)?e:[...e])(n!==me||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ri=Fn("__proto__,__v_isRef,__isVue"),Ko=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Hn)),li=In(),ci=In(!1,!0),fi=In(!0),ao=hi();function hi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=D(this);for(let i=0,a=this.length;i<a;i++)re(o,"get",i+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(D)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){it();const o=D(this)[t].apply(this,n);return at(),o}}),e}function In(e=!1,t=!1){return function(o,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?Fi:zo:t?Yo:Zo).get(o))return o;const a=M(o);if(!e&&a&&A(ao,s))return Reflect.get(ao,s,i);const l=Reflect.get(o,s,i);return(Hn(s)?Ko.has(s):ri(s))||(e||re(o,"get",s),t)?l:G(l)?!a||!Cn(s)?l.value:l:X(l)?e?Jo(l):En(l):l}}const di=Xo(),ui=Xo(!0);function Xo(e=!1){return function(n,o,s,i){let a=n[o];if(kt(a)&&G(a)&&!G(s))return!1;if(!e&&!kt(s)&&(Go(s)||(s=D(s),a=D(a)),!M(n)&&G(a)&&!G(s)))return a.value=s,!0;const l=M(n)&&Cn(o)?Number(o)<n.length:A(n,o),c=Reflect.set(n,o,s,i);return n===D(i)&&(l?bt(s,a)&&Me(n,"set",o,s):Me(n,"add",o,s)),c}}function pi(e,t){const n=A(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&Me(e,"delete",t,void 0),o}function mi(e,t){const n=Reflect.has(e,t);return(!Hn(t)||!Ko.has(t))&&re(e,"has",t),n}function gi(e){return re(e,"iterate",M(e)?"length":Ve),Reflect.ownKeys(e)}const qo={get:li,set:di,deleteProperty:pi,has:mi,ownKeys:gi},bi={get:fi,set(e,t){return!0},deleteProperty(e,t){return!0}},ki=$({},qo,{get:ci,set:ui}),Bn=e=>e,Qt=e=>Reflect.getPrototypeOf(e);function Ut(e,t,n=!1,o=!1){e=e.__v_raw;const s=D(e),i=D(t);t!==i&&!n&&re(s,"get",t),!n&&re(s,"get",i);const{has:a}=Qt(s),l=o?Bn:n?Rn:yt;if(a.call(s,t))return l(e.get(t));if(a.call(s,i))return l(e.get(i));e!==s&&e.get(t)}function vt(e,t=!1){const n=this.__v_raw,o=D(n),s=D(e);return e!==s&&!t&&re(o,"has",e),!t&&re(o,"has",s),e===s?n.has(e):n.has(e)||n.has(s)}function Mt(e,t=!1){return e=e.__v_raw,!t&&re(D(e),"iterate",Ve),Reflect.get(e,"size",e)}function ro(e){e=D(e);const t=D(this);return Qt(t).has.call(t,e)||(t.add(e),Me(t,"add",e,e)),this}function lo(e,t){t=D(t);const n=D(this),{has:o,get:s}=Qt(n);let i=o.call(n,e);i||(e=D(e),i=o.call(n,e));const a=s.call(n,e);return n.set(e,t),i?bt(t,a)&&Me(n,"set",e,t):Me(n,"add",e,t),this}function co(e){const t=D(this),{has:n,get:o}=Qt(t);let s=n.call(t,e);s||(e=D(e),s=n.call(t,e)),o&&o.call(t,e);const i=t.delete(e);return s&&Me(t,"delete",e,void 0),i}function fo(){const e=D(this),t=e.size!==0,n=e.clear();return t&&Me(e,"clear",void 0,void 0),n}function Ft(e,t){return function(o,s){const i=this,a=i.__v_raw,l=D(a),c=t?Bn:e?Rn:yt;return!e&&re(l,"iterate",Ve),a.forEach((d,m)=>o.call(s,c(d),c(m),i))}}function St(e,t,n){return function(...o){const s=this.__v_raw,i=D(s),a=et(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,d=s[e](...o),m=n?Bn:t?Rn:yt;return!t&&re(i,"iterate",c?un:Ve),{next(){const{value:w,done:_}=d.next();return _?{value:w,done:_}:{value:l?[m(w[0]),m(w[1])]:m(w),done:_}},[Symbol.iterator](){return this}}}}function Le(e){return function(...t){return e==="delete"?!1:this}}function yi(){const e={get(i){return Ut(this,i)},get size(){return Mt(this)},has:vt,add:ro,set:lo,delete:co,clear:fo,forEach:Ft(!1,!1)},t={get(i){return Ut(this,i,!1,!0)},get size(){return Mt(this)},has:vt,add:ro,set:lo,delete:co,clear:fo,forEach:Ft(!1,!0)},n={get(i){return Ut(this,i,!0)},get size(){return Mt(this,!0)},has(i){return vt.call(this,i,!0)},add:Le("add"),set:Le("set"),delete:Le("delete"),clear:Le("clear"),forEach:Ft(!0,!1)},o={get(i){return Ut(this,i,!0,!0)},get size(){return Mt(this,!0)},has(i){return vt.call(this,i,!0)},add:Le("add"),set:Le("set"),delete:Le("delete"),clear:Le("clear"),forEach:Ft(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=St(i,!1,!1),n[i]=St(i,!0,!1),t[i]=St(i,!1,!0),o[i]=St(i,!0,!0)}),[e,n,t,o]}const[wi,ji,_i,xi]=yi();function Nn(e,t){const n=t?e?xi:_i:e?ji:wi;return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(A(n,s)&&s in o?n:o,s,i)}const Ui={get:Nn(!1,!1)},vi={get:Nn(!1,!0)},Mi={get:Nn(!0,!1)},Zo=new WeakMap,Yo=new WeakMap,zo=new WeakMap,Fi=new WeakMap;function Si(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Li(e){return e.__v_skip||!Object.isExtensible(e)?0:Si($s(e))}function En(e){return kt(e)?e:On(e,!1,qo,Ui,Zo)}function Pi(e){return On(e,!1,ki,vi,Yo)}function Jo(e){return On(e,!0,bi,Mi,zo)}function On(e,t,n,o,s){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=Li(e);if(a===0)return e;const l=new Proxy(e,a===2?o:n);return s.set(e,l),l}function tt(e){return kt(e)?tt(e.__v_raw):!!(e&&e.__v_isReactive)}function kt(e){return!!(e&&e.__v_isReadonly)}function Go(e){return!!(e&&e.__v_isShallow)}function $o(e){return tt(e)||kt(e)}function D(e){const t=e&&e.__v_raw;return t?D(t):e}function es(e){return Ht(e,"__v_skip",!0),e}const yt=e=>X(e)?En(e):e,Rn=e=>X(e)?Jo(e):e;function ts(e){He&&me&&(e=D(e),Qo(e.dep||(e.dep=Dn())))}function ns(e,t){e=D(e),e.dep&&pn(e.dep)}function G(e){return!!(e&&e.__v_isRef===!0)}function Ai(e){return Hi(e,!1)}function Hi(e,t){return G(e)?e:new Ci(e,t)}class Ci{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:D(t),this._value=n?t:yt(t)}get value(){return ts(this),this._value}set value(t){t=this.__v_isShallow?t:D(t),bt(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:yt(t),ns(this))}}function os(e){return G(e)?e.value:e}const Di={get:(e,t,n)=>os(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return G(s)&&!G(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function ss(e){return tt(e)?e:new Proxy(e,Di)}class Ti{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Tn(t,()=>{this._dirty||(this._dirty=!0,ns(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=D(this);return ts(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ii(e,t,n=!1){let o,s;const i=L(e);return i?(o=e,s=be):(o=e.get,s=e.set),new Ti(o,s,i||!s,n)}function Ce(e,t,n,o){let s;try{s=o?e(...o):e()}catch(i){Kt(i,t,n)}return s}function he(e,t,n,o){if(L(e)){const i=Ce(e,t,n,o);return i&&Io(i)&&i.catch(a=>{Kt(a,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(he(e[i],t,n,o));return s}function Kt(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const a=t.proxy,l=n;for(;i;){const d=i.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](e,a,l)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Ce(c,null,10,[e,a,l]);return}}Bi(e,n,s,o)}function Bi(e,t,n,o=!0){console.error(e)}let Ct=!1,mn=!1;const ae=[];let Ue=0;const pt=[];let ut=null,Je=0;const mt=[];let Pe=null,Ge=0;const is=Promise.resolve();let Vn=null,gn=null;function Ni(e){const t=Vn||is;return e?t.then(this?e.bind(this):e):t}function Ei(e){let t=Ue+1,n=ae.length;for(;t<n;){const o=t+n>>>1;wt(ae[o])<e?t=o+1:n=o}return t}function as(e){(!ae.length||!ae.includes(e,Ct&&e.allowRecurse?Ue+1:Ue))&&e!==gn&&(e.id==null?ae.push(e):ae.splice(Ei(e.id),0,e),rs())}function rs(){!Ct&&!mn&&(mn=!0,Vn=is.then(fs))}function Oi(e){const t=ae.indexOf(e);t>Ue&&ae.splice(t,1)}function ls(e,t,n,o){M(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?o+1:o))&&n.push(e),rs()}function Ri(e){ls(e,ut,pt,Je)}function Vi(e){ls(e,Pe,mt,Ge)}function Wn(e,t=null){if(pt.length){for(gn=t,ut=[...new Set(pt)],pt.length=0,Je=0;Je<ut.length;Je++)ut[Je]();ut=null,Je=0,gn=null,Wn(e,t)}}function cs(e){if(mt.length){const t=[...new Set(mt)];if(mt.length=0,Pe){Pe.push(...t);return}for(Pe=t,Pe.sort((n,o)=>wt(n)-wt(o)),Ge=0;Ge<Pe.length;Ge++)Pe[Ge]();Pe=null,Ge=0}}const wt=e=>e.id==null?1/0:e.id;function fs(e){mn=!1,Ct=!0,Wn(e),ae.sort((n,o)=>wt(n)-wt(o));const t=be;try{for(Ue=0;Ue<ae.length;Ue++){const n=ae[Ue];n&&n.active!==!1&&Ce(n,null,14)}}finally{Ue=0,ae.length=0,cs(),Ct=!1,Vn=null,(ae.length||pt.length||mt.length)&&fs(e)}}function Wi(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||E;let s=n;const i=t.startsWith("update:"),a=i&&t.slice(7);if(a&&a in o){const m=`${a==="modelValue"?"model":a}Modifiers`,{number:w,trim:_}=o[m]||E;_?s=n.map(S=>S.trim()):w&&(s=n.map(Oo))}let l,c=o[l=on(t)]||o[l=on(nt(t))];!c&&i&&(c=o[l=on(st(t))]),c&&he(c,e,6,s);const d=o[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,he(d,e,6,s)}}function hs(e,t,n=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!L(e)){const c=d=>{const m=hs(d,t,!0);m&&(l=!0,$(a,m))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(o.set(e,null),null):(M(i)?i.forEach(c=>a[c]=null):$(a,i),o.set(e,a),a)}function Xt(e,t){return!e||!Ot(t)?!1:(t=t.slice(2).replace(/Once$/,""),A(e,t[0].toLowerCase()+t.slice(1))||A(e,st(t))||A(e,t))}let ge=null,ds=null;function Dt(e){const t=ge;return ge=e,ds=e&&e.type.__scopeId||null,t}function Qi(e,t=ge,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&jo(-1);const i=Dt(t),a=e(...s);return Dt(i),o._d&&jo(1),a};return o._n=!0,o._c=!0,o._d=!0,o}function sn(e){const{type:t,vnode:n,proxy:o,withProxy:s,props:i,propsOptions:[a],slots:l,attrs:c,emit:d,render:m,renderCache:w,data:_,setupState:S,ctx:I,inheritAttrs:C}=e;let P,T;const le=Dt(e);try{if(n.shapeFlag&4){const K=s||o;P=je(m.call(K,K,w,i,S,_,I)),T=c}else{const K=t;P=je(K.length>1?K(i,{attrs:c,slots:l,emit:d}):K(i,null)),T=t.props?c:Ki(c)}}catch(K){gt.length=0,Kt(K,e,1),P=Qe(ve)}let Y=P;if(T&&C!==!1){const K=Object.keys(T),{shapeFlag:oe}=Y;K.length&&oe&7&&(a&&K.some(Pn)&&(T=Xi(T,a)),Y=Xe(Y,T))}return n.dirs&&(Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&(Y.transition=n.transition),P=Y,Dt(le),P}const Ki=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ot(n))&&((t||(t={}))[n]=e[n]);return t},Xi=(e,t)=>{const n={};for(const o in e)(!Pn(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function qi(e,t,n){const{props:o,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?ho(o,a,d):!!a;if(c&8){const m=t.dynamicProps;for(let w=0;w<m.length;w++){const _=m[w];if(a[_]!==o[_]&&!Xt(d,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:o===a?!1:o?a?ho(o,a,d):!0:!!a;return!1}function ho(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const i=o[s];if(t[i]!==e[i]&&!Xt(n,i))return!0}return!1}function Zi({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Yi=e=>e.__isSuspense;function zi(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Vi(e)}function Ji(e,t){if(J){let n=J.provides;const o=J.parent&&J.parent.provides;o===n&&(n=J.provides=Object.create(o)),n[e]=t}}function an(e,t,n=!1){const o=J||ge;if(o){const s=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&L(t)?t.call(o.proxy):t}}const uo={};function rn(e,t,n){return us(e,t,n)}function us(e,t,{immediate:n,deep:o,flush:s,onTrack:i,onTrigger:a}=E){const l=J;let c,d=!1,m=!1;if(G(e)?(c=()=>e.value,d=Go(e)):tt(e)?(c=()=>e,o=!0):M(e)?(m=!0,d=e.some(tt),c=()=>e.map(T=>{if(G(T))return T.value;if(tt(T))return Re(T);if(L(T))return Ce(T,l,2)})):L(e)?t?c=()=>Ce(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return w&&w(),he(e,l,3,[_])}:c=be,t&&o){const T=c;c=()=>Re(T())}let w,_=T=>{w=P.onStop=()=>{Ce(T,l,4)}};if(jt)return _=be,t?n&&he(t,l,3,[c(),m?[]:void 0,_]):c(),be;let S=m?[]:uo;const I=()=>{if(!!P.active)if(t){const T=P.run();(o||d||(m?T.some((le,Y)=>bt(le,S[Y])):bt(T,S)))&&(w&&w(),he(t,l,3,[T,S===uo?void 0:S,_]),S=T)}else P.run()};I.allowRecurse=!!t;let C;s==="sync"?C=I:s==="post"?C=()=>ne(I,l&&l.suspense):C=()=>{!l||l.isMounted?Ri(I):I()};const P=new Tn(c,C);return t?n?I():S=P.run():s==="post"?ne(P.run.bind(P),l&&l.suspense):P.run(),()=>{P.stop(),l&&l.scope&&An(l.scope.effects,P)}}function Gi(e,t,n){const o=this.proxy,s=Z(e)?e.includes(".")?ps(o,e):()=>o[e]:e.bind(o,o);let i;L(t)?i=t:(i=t.handler,n=t);const a=J;ot(this);const l=us(s,i.bind(o),n);return a?ot(a):Ke(),l}function ps(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function Re(e,t){if(!X(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),G(e))Re(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)Re(e[n],t);else if(Rt(e)||et(e))e.forEach(n=>{Re(n,t)});else if(No(e))for(const n in e)Re(e[n],t);return e}function $i(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ks(()=>{e.isMounted=!0}),ys(()=>{e.isUnmounting=!0}),e}const ce=[Function,Array],ea={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ce,onEnter:ce,onAfterEnter:ce,onEnterCancelled:ce,onBeforeLeave:ce,onLeave:ce,onAfterLeave:ce,onLeaveCancelled:ce,onBeforeAppear:ce,onAppear:ce,onAfterAppear:ce,onAppearCancelled:ce},setup(e,{slots:t}){const n=Ra(),o=$i();let s;return()=>{const i=t.default&&gs(t.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){for(const C of i)if(C.type!==ve){a=C;break}}const l=D(e),{mode:c}=l;if(o.isLeaving)return ln(a);const d=po(a);if(!d)return ln(a);const m=bn(d,l,o,n);kn(d,m);const w=n.subTree,_=w&&po(w);let S=!1;const{getTransitionKey:I}=d.type;if(I){const C=I();s===void 0?s=C:C!==s&&(s=C,S=!0)}if(_&&_.type!==ve&&(!Ee(d,_)||S)){const C=bn(_,l,o,n);if(kn(_,C),c==="out-in")return o.isLeaving=!0,C.afterLeave=()=>{o.isLeaving=!1,n.update()},ln(a);c==="in-out"&&d.type!==ve&&(C.delayLeave=(P,T,le)=>{const Y=ms(o,_);Y[String(_.key)]=_,P._leaveCb=()=>{T(),P._leaveCb=void 0,delete m.delayedLeave},m.delayedLeave=le})}return a}}},ta=ea;function ms(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function bn(e,t,n,o){const{appear:s,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:m,onBeforeLeave:w,onLeave:_,onAfterLeave:S,onLeaveCancelled:I,onBeforeAppear:C,onAppear:P,onAfterAppear:T,onAppearCancelled:le}=t,Y=String(e.key),K=ms(n,e),oe=(B,z)=>{B&&he(B,o,9,z)},Te={mode:i,persisted:a,beforeEnter(B){let z=l;if(!n.isMounted)if(s)z=C||l;else return;B._leaveCb&&B._leaveCb(!0);const q=K[Y];q&&Ee(e,q)&&q.el._leaveCb&&q.el._leaveCb(),oe(z,[B])},enter(B){let z=c,q=d,de=m;if(!n.isMounted)if(s)z=P||c,q=T||d,de=le||m;else return;let se=!1;const ue=B._enterCb=qe=>{se||(se=!0,qe?oe(de,[B]):oe(q,[B]),Te.delayedLeave&&Te.delayedLeave(),B._enterCb=void 0)};z?(z(B,ue),z.length<=1&&ue()):ue()},leave(B,z){const q=String(e.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return z();oe(w,[B]);let de=!1;const se=B._leaveCb=ue=>{de||(de=!0,z(),ue?oe(I,[B]):oe(S,[B]),B._leaveCb=void 0,K[q]===e&&delete K[q])};K[q]=e,_?(_(B,se),_.length<=1&&se()):se()},clone(B){return bn(B,t,n,o)}};return Te}function ln(e){if(qt(e))return e=Xe(e),e.children=null,e}function po(e){return qt(e)?e.children?e.children[0]:void 0:e}function kn(e,t){e.shapeFlag&6&&e.component?kn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function gs(e,t=!1,n){let o=[],s=0;for(let i=0;i<e.length;i++){let a=e[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===fe?(a.patchFlag&128&&s++,o=o.concat(gs(a.children,t,l))):(t||a.type!==ve)&&o.push(l!=null?Xe(a,{key:l}):a)}if(s>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}function na(e){return L(e)?{setup:e,name:e.name}:e}const yn=e=>!!e.type.__asyncLoader,qt=e=>e.type.__isKeepAlive;function oa(e,t){bs(e,"a",t)}function sa(e,t){bs(e,"da",t)}function bs(e,t,n=J){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Zt(t,o,n),n){let s=n.parent;for(;s&&s.parent;)qt(s.parent.vnode)&&ia(o,t,n,s),s=s.parent}}function ia(e,t,n,o){const s=Zt(t,e,o,!0);ws(()=>{An(o[t],s)},n)}function Zt(e,t,n=J,o=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;it(),ot(n);const l=he(t,n,e,a);return Ke(),at(),l});return o?s.unshift(i):s.push(i),i}}const Fe=e=>(t,n=J)=>(!jt||e==="sp")&&Zt(e,t,n),aa=Fe("bm"),ks=Fe("m"),ra=Fe("bu"),la=Fe("u"),ys=Fe("bum"),ws=Fe("um"),ca=Fe("sp"),fa=Fe("rtg"),ha=Fe("rtc");function da(e,t=J){Zt("ec",e,t)}let wn=!0;function ua(e){const t=_s(e),n=e.proxy,o=e.ctx;wn=!1,t.beforeCreate&&mo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:d,created:m,beforeMount:w,mounted:_,beforeUpdate:S,updated:I,activated:C,deactivated:P,beforeDestroy:T,beforeUnmount:le,destroyed:Y,unmounted:K,render:oe,renderTracked:Te,renderTriggered:B,errorCaptured:z,serverPrefetch:q,expose:de,inheritAttrs:se,components:ue,directives:qe,filters:qn}=t;if(d&&pa(d,o,null,e.appContext.config.unwrapInjectedRef),a)for(const Q in a){const R=a[Q];L(R)&&(o[Q]=R.bind(n))}if(s){const Q=s.call(n,n);X(Q)&&(e.data=En(Q))}if(wn=!0,i)for(const Q in i){const R=i[Q],_e=L(R)?R.bind(n,n):L(R.get)?R.get.bind(n,n):be,Gt=!L(R)&&L(R.set)?R.set.bind(n):be,rt=Ds({get:_e,set:Gt});Object.defineProperty(o,Q,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ze=>rt.value=Ze})}if(l)for(const Q in l)js(l[Q],o,n,Q);if(c){const Q=L(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(R=>{Ji(R,Q[R])})}m&&mo(m,e,"c");function te(Q,R){M(R)?R.forEach(_e=>Q(_e.bind(n))):R&&Q(R.bind(n))}if(te(aa,w),te(ks,_),te(ra,S),te(la,I),te(oa,C),te(sa,P),te(da,z),te(ha,Te),te(fa,B),te(ys,le),te(ws,K),te(ca,q),M(de))if(de.length){const Q=e.exposed||(e.exposed={});de.forEach(R=>{Object.defineProperty(Q,R,{get:()=>n[R],set:_e=>n[R]=_e})})}else e.exposed||(e.exposed={});oe&&e.render===be&&(e.render=oe),se!=null&&(e.inheritAttrs=se),ue&&(e.components=ue),qe&&(e.directives=qe)}function pa(e,t,n=be,o=!1){M(e)&&(e=jn(e));for(const s in e){const i=e[s];let a;X(i)?"default"in i?a=an(i.from||s,i.default,!0):a=an(i.from||s):a=an(i),G(a)&&o?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[s]=a}}function mo(e,t,n){he(M(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function js(e,t,n,o){const s=o.includes(".")?ps(n,o):()=>n[o];if(Z(e)){const i=t[e];L(i)&&rn(s,i)}else if(L(e))rn(s,e.bind(n));else if(X(e))if(M(e))e.forEach(i=>js(i,t,n,o));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&rn(s,i,e)}}function _s(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!o?c=t:(c={},s.length&&s.forEach(d=>Tt(c,d,a,!0)),Tt(c,t,a)),i.set(t,c),c}function Tt(e,t,n,o=!1){const{mixins:s,extends:i}=t;i&&Tt(e,i,n,!0),s&&s.forEach(a=>Tt(e,a,n,!0));for(const a in t)if(!(o&&a==="expose")){const l=ma[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const ma={data:go,props:Ne,emits:Ne,methods:Ne,computed:Ne,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:Ne,directives:Ne,watch:ba,provide:go,inject:ga};function go(e,t){return t?e?function(){return $(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function ga(e,t){return Ne(jn(e),jn(t))}function jn(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ee(e,t){return e?[...new Set([].concat(e,t))]:t}function Ne(e,t){return e?$($(Object.create(null),e),t):t}function ba(e,t){if(!e)return t;if(!t)return e;const n=$(Object.create(null),e);for(const o in t)n[o]=ee(e[o],t[o]);return n}function ka(e,t,n,o=!1){const s={},i={};Ht(i,Yt,1),e.propsDefaults=Object.create(null),xs(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=o?s:Pi(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function ya(e,t,n,o){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=D(s),[c]=e.propsOptions;let d=!1;if((o||a>0)&&!(a&16)){if(a&8){const m=e.vnode.dynamicProps;for(let w=0;w<m.length;w++){let _=m[w];if(Xt(e.emitsOptions,_))continue;const S=t[_];if(c)if(A(i,_))S!==i[_]&&(i[_]=S,d=!0);else{const I=nt(_);s[I]=_n(c,l,I,S,e,!1)}else S!==i[_]&&(i[_]=S,d=!0)}}}else{xs(e,t,s,i)&&(d=!0);let m;for(const w in l)(!t||!A(t,w)&&((m=st(w))===w||!A(t,m)))&&(c?n&&(n[w]!==void 0||n[m]!==void 0)&&(s[w]=_n(c,l,w,void 0,e,!0)):delete s[w]);if(i!==l)for(const w in i)(!t||!A(t,w)&&!0)&&(delete i[w],d=!0)}d&&Me(e,"set","$attrs")}function xs(e,t,n,o){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(Lt(c))continue;const d=t[c];let m;s&&A(s,m=nt(c))?!i||!i.includes(m)?n[m]=d:(l||(l={}))[m]=d:Xt(e.emitsOptions,c)||(!(c in o)||d!==o[c])&&(o[c]=d,a=!0)}if(i){const c=D(n),d=l||E;for(let m=0;m<i.length;m++){const w=i[m];n[w]=_n(s,c,w,d[w],e,!A(d,w))}}return a}function _n(e,t,n,o,s,i){const a=e[n];if(a!=null){const l=A(a,"default");if(l&&o===void 0){const c=a.default;if(a.type!==Function&&L(c)){const{propsDefaults:d}=s;n in d?o=d[n]:(ot(s),o=d[n]=c.call(null,t),Ke())}else o=c}a[0]&&(i&&!l?o=!1:a[1]&&(o===""||o===st(n))&&(o=!0))}return o}function Us(e,t,n=!1){const o=t.propsCache,s=o.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!L(e)){const m=w=>{c=!0;const[_,S]=Us(w,t,!0);$(a,_),S&&l.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(m),e.extends&&m(e.extends),e.mixins&&e.mixins.forEach(m)}if(!i&&!c)return o.set(e,$e),$e;if(M(i))for(let m=0;m<i.length;m++){const w=nt(i[m]);bo(w)&&(a[w]=E)}else if(i)for(const m in i){const w=nt(m);if(bo(w)){const _=i[m],S=a[w]=M(_)||L(_)?{type:_}:_;if(S){const I=wo(Boolean,S.type),C=wo(String,S.type);S[0]=I>-1,S[1]=C<0||I<C,(I>-1||A(S,"default"))&&l.push(w)}}}const d=[a,l];return o.set(e,d),d}function bo(e){return e[0]!=="$"}function ko(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function yo(e,t){return ko(e)===ko(t)}function wo(e,t){return M(t)?t.findIndex(n=>yo(n,e)):L(t)&&yo(t,e)?0:-1}const vs=e=>e[0]==="_"||e==="$stable",Qn=e=>M(e)?e.map(je):[je(e)],wa=(e,t,n)=>{const o=Qi((...s)=>Qn(t(...s)),n);return o._c=!1,o},Ms=(e,t,n)=>{const o=e._ctx;for(const s in e){if(vs(s))continue;const i=e[s];if(L(i))t[s]=wa(s,i,o);else if(i!=null){const a=Qn(i);t[s]=()=>a}}},Fs=(e,t)=>{const n=Qn(t);e.slots.default=()=>n},ja=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=D(t),Ht(t,"_",n)):Ms(t,e.slots={})}else e.slots={},t&&Fs(e,t);Ht(e.slots,Yt,1)},_a=(e,t,n)=>{const{vnode:o,slots:s}=e;let i=!0,a=E;if(o.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:($(s,t),!n&&l===1&&delete s._):(i=!t.$stable,Ms(t,s)),a=t}else t&&(Fs(e,t),a={default:1});if(i)for(const l in s)!vs(l)&&!(l in a)&&delete s[l]};function xa(e,t){const n=ge;if(n===null)return e;const o=zt(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[a,l,c,d=E]=t[i];L(a)&&(a={mounted:a,updated:a}),a.deep&&Re(l),s.push({dir:a,instance:o,value:l,oldValue:void 0,arg:c,modifiers:d})}return e}function Ie(e,t,n,o){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[o];c&&(it(),he(c,n,8,[e.el,l,e,t]),at())}}function Ss(){return{app:null,config:{isNativeTag:zs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ua=0;function va(e,t){return function(o,s=null){L(o)||(o=Object.assign({},o)),s!=null&&!X(s)&&(s=null);const i=Ss(),a=new Set;let l=!1;const c=i.app={_uid:Ua++,_component:o,_props:s,_container:null,_context:i,_instance:null,version:qa,get config(){return i.config},set config(d){},use(d,...m){return a.has(d)||(d&&L(d.install)?(a.add(d),d.install(c,...m)):L(d)&&(a.add(d),d(c,...m))),c},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),c},component(d,m){return m?(i.components[d]=m,c):i.components[d]},directive(d,m){return m?(i.directives[d]=m,c):i.directives[d]},mount(d,m,w){if(!l){const _=Qe(o,s);return _.appContext=i,m&&t?t(_,d):e(_,d,w),l=!0,c._container=d,d.__vue_app__=c,zt(_.component)||_.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(d,m){return i.provides[d]=m,c}};return c}}function xn(e,t,n,o,s=!1){if(M(e)){e.forEach((_,S)=>xn(_,t&&(M(t)?t[S]:t),n,o,s));return}if(yn(o)&&!s)return;const i=o.shapeFlag&4?zt(o.component)||o.component.proxy:o.el,a=s?null:i,{i:l,r:c}=e,d=t&&t.r,m=l.refs===E?l.refs={}:l.refs,w=l.setupState;if(d!=null&&d!==c&&(Z(d)?(m[d]=null,A(w,d)&&(w[d]=null)):G(d)&&(d.value=null)),L(c))Ce(c,l,12,[a,m]);else{const _=Z(c),S=G(c);if(_||S){const I=()=>{if(e.f){const C=_?m[c]:c.value;s?M(C)&&An(C,i):M(C)?C.includes(i)||C.push(i):_?(m[c]=[i],A(w,c)&&(w[c]=m[c])):(c.value=[i],e.k&&(m[e.k]=c.value))}else _?(m[c]=a,A(w,c)&&(w[c]=a)):G(c)&&(c.value=a,e.k&&(m[e.k]=a))};a?(I.id=-1,ne(I,n)):I()}}}const ne=zi;function Ma(e){return Fa(e)}function Fa(e,t){const n=ni();n.__VUE__=!0;const{insert:o,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:d,setElementText:m,parentNode:w,nextSibling:_,setScopeId:S=be,cloneNode:I,insertStaticContent:C}=e,P=(r,f,h,p=null,u=null,k=null,j=!1,b=null,y=!!f.dynamicChildren)=>{if(r===f)return;r&&!Ee(r,f)&&(p=_t(r),Se(r,u,k,!0),r=null),f.patchFlag===-2&&(y=!1,f.dynamicChildren=null);const{type:g,ref:U,shapeFlag:x}=f;switch(g){case Kn:T(r,f,h,p);break;case ve:le(r,f,h,p);break;case cn:r==null&&Y(f,h,p,j);break;case fe:qe(r,f,h,p,u,k,j,b,y);break;default:x&1?Te(r,f,h,p,u,k,j,b,y):x&6?qn(r,f,h,p,u,k,j,b,y):(x&64||x&128)&&g.process(r,f,h,p,u,k,j,b,y,Ye)}U!=null&&u&&xn(U,r&&r.ref,k,f||r,!f)},T=(r,f,h,p)=>{if(r==null)o(f.el=l(f.children),h,p);else{const u=f.el=r.el;f.children!==r.children&&d(u,f.children)}},le=(r,f,h,p)=>{r==null?o(f.el=c(f.children||""),h,p):f.el=r.el},Y=(r,f,h,p)=>{[r.el,r.anchor]=C(r.children,f,h,p,r.el,r.anchor)},K=({el:r,anchor:f},h,p)=>{let u;for(;r&&r!==f;)u=_(r),o(r,h,p),r=u;o(f,h,p)},oe=({el:r,anchor:f})=>{let h;for(;r&&r!==f;)h=_(r),s(r),r=h;s(f)},Te=(r,f,h,p,u,k,j,b,y)=>{j=j||f.type==="svg",r==null?B(f,h,p,u,k,j,b,y):de(r,f,u,k,j,b,y)},B=(r,f,h,p,u,k,j,b)=>{let y,g;const{type:U,props:x,shapeFlag:v,transition:F,patchFlag:H,dirs:W}=r;if(r.el&&I!==void 0&&H===-1)y=r.el=I(r.el);else{if(y=r.el=a(r.type,k,x&&x.is,x),v&8?m(y,r.children):v&16&&q(r.children,y,null,p,u,k&&U!=="foreignObject",j,b),W&&Ie(r,null,p,"created"),x){for(const V in x)V!=="value"&&!Lt(V)&&i(y,V,null,x[V],k,r.children,p,u,xe);"value"in x&&i(y,"value",null,x.value),(g=x.onVnodeBeforeMount)&&ye(g,p,r)}z(y,r,r.scopeId,j,p)}W&&Ie(r,null,p,"beforeMount");const N=(!u||u&&!u.pendingBranch)&&F&&!F.persisted;N&&F.beforeEnter(y),o(y,f,h),((g=x&&x.onVnodeMounted)||N||W)&&ne(()=>{g&&ye(g,p,r),N&&F.enter(y),W&&Ie(r,null,p,"mounted")},u)},z=(r,f,h,p,u)=>{if(h&&S(r,h),p)for(let k=0;k<p.length;k++)S(r,p[k]);if(u){let k=u.subTree;if(f===k){const j=u.vnode;z(r,j,j.scopeId,j.slotScopeIds,u.parent)}}},q=(r,f,h,p,u,k,j,b,y=0)=>{for(let g=y;g<r.length;g++){const U=r[g]=b?Ae(r[g]):je(r[g]);P(null,U,f,h,p,u,k,j,b)}},de=(r,f,h,p,u,k,j)=>{const b=f.el=r.el;let{patchFlag:y,dynamicChildren:g,dirs:U}=f;y|=r.patchFlag&16;const x=r.props||E,v=f.props||E;let F;h&&Be(h,!1),(F=v.onVnodeBeforeUpdate)&&ye(F,h,f,r),U&&Ie(f,r,h,"beforeUpdate"),h&&Be(h,!0);const H=u&&f.type!=="foreignObject";if(g?se(r.dynamicChildren,g,b,h,p,H,k):j||_e(r,f,b,null,h,p,H,k,!1),y>0){if(y&16)ue(b,f,x,v,h,p,u);else if(y&2&&x.class!==v.class&&i(b,"class",null,v.class,u),y&4&&i(b,"style",x.style,v.style,u),y&8){const W=f.dynamicProps;for(let N=0;N<W.length;N++){const V=W[N],pe=x[V],ze=v[V];(ze!==pe||V==="value")&&i(b,V,pe,ze,u,r.children,h,p,xe)}}y&1&&r.children!==f.children&&m(b,f.children)}else!j&&g==null&&ue(b,f,x,v,h,p,u);((F=v.onVnodeUpdated)||U)&&ne(()=>{F&&ye(F,h,f,r),U&&Ie(f,r,h,"updated")},p)},se=(r,f,h,p,u,k,j)=>{for(let b=0;b<f.length;b++){const y=r[b],g=f[b],U=y.el&&(y.type===fe||!Ee(y,g)||y.shapeFlag&70)?w(y.el):h;P(y,g,U,null,p,u,k,j,!0)}},ue=(r,f,h,p,u,k,j)=>{if(h!==p){for(const b in p){if(Lt(b))continue;const y=p[b],g=h[b];y!==g&&b!=="value"&&i(r,b,g,y,j,f.children,u,k,xe)}if(h!==E)for(const b in h)!Lt(b)&&!(b in p)&&i(r,b,h[b],null,j,f.children,u,k,xe);"value"in p&&i(r,"value",h.value,p.value)}},qe=(r,f,h,p,u,k,j,b,y)=>{const g=f.el=r?r.el:l(""),U=f.anchor=r?r.anchor:l("");let{patchFlag:x,dynamicChildren:v,slotScopeIds:F}=f;F&&(b=b?b.concat(F):F),r==null?(o(g,h,p),o(U,h,p),q(f.children,h,U,u,k,j,b,y)):x>0&&x&64&&v&&r.dynamicChildren?(se(r.dynamicChildren,v,h,u,k,j,b),(f.key!=null||u&&f===u.subTree)&&Ls(r,f,!0)):_e(r,f,h,U,u,k,j,b,y)},qn=(r,f,h,p,u,k,j,b,y)=>{f.slotScopeIds=b,r==null?f.shapeFlag&512?u.ctx.activate(f,h,p,j,y):Jt(f,h,p,u,k,j,y):te(r,f,y)},Jt=(r,f,h,p,u,k,j)=>{const b=r.component=Oa(r,p,u);if(qt(r)&&(b.ctx.renderer=Ye),Va(b),b.asyncDep){if(u&&u.registerDep(b,Q),!r.el){const y=b.subTree=Qe(ve);le(null,y,f,h)}return}Q(b,r,f,h,u,k,j)},te=(r,f,h)=>{const p=f.component=r.component;if(qi(r,f,h))if(p.asyncDep&&!p.asyncResolved){R(p,f,h);return}else p.next=f,Oi(p.update),p.update();else f.component=r.component,f.el=r.el,p.vnode=f},Q=(r,f,h,p,u,k,j)=>{const b=()=>{if(r.isMounted){let{next:U,bu:x,u:v,parent:F,vnode:H}=r,W=U,N;Be(r,!1),U?(U.el=H.el,R(r,U,j)):U=H,x&&Pt(x),(N=U.props&&U.props.onVnodeBeforeUpdate)&&ye(N,F,U,H),Be(r,!0);const V=sn(r),pe=r.subTree;r.subTree=V,P(pe,V,w(pe.el),_t(pe),r,u,k),U.el=V.el,W===null&&Zi(r,V.el),v&&ne(v,u),(N=U.props&&U.props.onVnodeUpdated)&&ne(()=>ye(N,F,U,H),u)}else{let U;const{el:x,props:v}=f,{bm:F,m:H,parent:W}=r,N=yn(f);if(Be(r,!1),F&&Pt(F),!N&&(U=v&&v.onVnodeBeforeMount)&&ye(U,W,f),Be(r,!0),x&&en){const V=()=>{r.subTree=sn(r),en(x,r.subTree,r,u,null)};N?f.type.__asyncLoader().then(()=>!r.isUnmounted&&V()):V()}else{const V=r.subTree=sn(r);P(null,V,h,p,r,u,k),f.el=V.el}if(H&&ne(H,u),!N&&(U=v&&v.onVnodeMounted)){const V=f;ne(()=>ye(U,W,V),u)}f.shapeFlag&256&&r.a&&ne(r.a,u),r.isMounted=!0,f=h=p=null}},y=r.effect=new Tn(b,()=>as(r.update),r.scope),g=r.update=y.run.bind(y);g.id=r.uid,Be(r,!0),g()},R=(r,f,h)=>{f.component=r;const p=r.vnode.props;r.vnode=f,r.next=null,ya(r,f.props,p,h),_a(r,f.children,h),it(),Wn(void 0,r.update),at()},_e=(r,f,h,p,u,k,j,b,y=!1)=>{const g=r&&r.children,U=r?r.shapeFlag:0,x=f.children,{patchFlag:v,shapeFlag:F}=f;if(v>0){if(v&128){rt(g,x,h,p,u,k,j,b,y);return}else if(v&256){Gt(g,x,h,p,u,k,j,b,y);return}}F&8?(U&16&&xe(g,u,k),x!==g&&m(h,x)):U&16?F&16?rt(g,x,h,p,u,k,j,b,y):xe(g,u,k,!0):(U&8&&m(h,""),F&16&&q(x,h,p,u,k,j,b,y))},Gt=(r,f,h,p,u,k,j,b,y)=>{r=r||$e,f=f||$e;const g=r.length,U=f.length,x=Math.min(g,U);let v;for(v=0;v<x;v++){const F=f[v]=y?Ae(f[v]):je(f[v]);P(r[v],F,h,null,u,k,j,b,y)}g>U?xe(r,u,k,!0,!1,x):q(f,h,p,u,k,j,b,y,x)},rt=(r,f,h,p,u,k,j,b,y)=>{let g=0;const U=f.length;let x=r.length-1,v=U-1;for(;g<=x&&g<=v;){const F=r[g],H=f[g]=y?Ae(f[g]):je(f[g]);if(Ee(F,H))P(F,H,h,null,u,k,j,b,y);else break;g++}for(;g<=x&&g<=v;){const F=r[x],H=f[v]=y?Ae(f[v]):je(f[v]);if(Ee(F,H))P(F,H,h,null,u,k,j,b,y);else break;x--,v--}if(g>x){if(g<=v){const F=v+1,H=F<U?f[F].el:p;for(;g<=v;)P(null,f[g]=y?Ae(f[g]):je(f[g]),h,H,u,k,j,b,y),g++}}else if(g>v)for(;g<=x;)Se(r[g],u,k,!0),g++;else{const F=g,H=g,W=new Map;for(g=H;g<=v;g++){const ie=f[g]=y?Ae(f[g]):je(f[g]);ie.key!=null&&W.set(ie.key,g)}let N,V=0;const pe=v-H+1;let ze=!1,zn=0;const lt=new Array(pe);for(g=0;g<pe;g++)lt[g]=0;for(g=F;g<=x;g++){const ie=r[g];if(V>=pe){Se(ie,u,k,!0);continue}let ke;if(ie.key!=null)ke=W.get(ie.key);else for(N=H;N<=v;N++)if(lt[N-H]===0&&Ee(ie,f[N])){ke=N;break}ke===void 0?Se(ie,u,k,!0):(lt[ke-H]=g+1,ke>=zn?zn=ke:ze=!0,P(ie,f[ke],h,null,u,k,j,b,y),V++)}const Jn=ze?Sa(lt):$e;for(N=Jn.length-1,g=pe-1;g>=0;g--){const ie=H+g,ke=f[ie],Gn=ie+1<U?f[ie+1].el:p;lt[g]===0?P(null,ke,h,Gn,u,k,j,b,y):ze&&(N<0||g!==Jn[N]?Ze(ke,h,Gn,2):N--)}}},Ze=(r,f,h,p,u=null)=>{const{el:k,type:j,transition:b,children:y,shapeFlag:g}=r;if(g&6){Ze(r.component.subTree,f,h,p);return}if(g&128){r.suspense.move(f,h,p);return}if(g&64){j.move(r,f,h,Ye);return}if(j===fe){o(k,f,h);for(let x=0;x<y.length;x++)Ze(y[x],f,h,p);o(r.anchor,f,h);return}if(j===cn){K(r,f,h);return}if(p!==2&&g&1&&b)if(p===0)b.beforeEnter(k),o(k,f,h),ne(()=>b.enter(k),u);else{const{leave:x,delayLeave:v,afterLeave:F}=b,H=()=>o(k,f,h),W=()=>{x(k,()=>{H(),F&&F()})};v?v(k,H,W):W()}else o(k,f,h)},Se=(r,f,h,p=!1,u=!1)=>{const{type:k,props:j,ref:b,children:y,dynamicChildren:g,shapeFlag:U,patchFlag:x,dirs:v}=r;if(b!=null&&xn(b,null,h,r,!0),U&256){f.ctx.deactivate(r);return}const F=U&1&&v,H=!yn(r);let W;if(H&&(W=j&&j.onVnodeBeforeUnmount)&&ye(W,f,r),U&6)Ns(r.component,h,p);else{if(U&128){r.suspense.unmount(h,p);return}F&&Ie(r,null,f,"beforeUnmount"),U&64?r.type.remove(r,f,h,u,Ye,p):g&&(k!==fe||x>0&&x&64)?xe(g,f,h,!1,!0):(k===fe&&x&384||!u&&U&16)&&xe(y,f,h),p&&Zn(r)}(H&&(W=j&&j.onVnodeUnmounted)||F)&&ne(()=>{W&&ye(W,f,r),F&&Ie(r,null,f,"unmounted")},h)},Zn=r=>{const{type:f,el:h,anchor:p,transition:u}=r;if(f===fe){Bs(h,p);return}if(f===cn){oe(r);return}const k=()=>{s(h),u&&!u.persisted&&u.afterLeave&&u.afterLeave()};if(r.shapeFlag&1&&u&&!u.persisted){const{leave:j,delayLeave:b}=u,y=()=>j(h,k);b?b(r.el,k,y):y()}else k()},Bs=(r,f)=>{let h;for(;r!==f;)h=_(r),s(r),r=h;s(f)},Ns=(r,f,h)=>{const{bum:p,scope:u,update:k,subTree:j,um:b}=r;p&&Pt(p),u.stop(),k&&(k.active=!1,Se(j,r,f,h)),b&&ne(b,f),ne(()=>{r.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&r.asyncDep&&!r.asyncResolved&&r.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},xe=(r,f,h,p=!1,u=!1,k=0)=>{for(let j=k;j<r.length;j++)Se(r[j],f,h,p,u)},_t=r=>r.shapeFlag&6?_t(r.component.subTree):r.shapeFlag&128?r.suspense.next():_(r.anchor||r.el),Yn=(r,f,h)=>{r==null?f._vnode&&Se(f._vnode,null,null,!0):P(f._vnode||null,r,f,null,null,null,h),cs(),f._vnode=r},Ye={p:P,um:Se,m:Ze,r:Zn,mt:Jt,mc:q,pc:_e,pbc:se,n:_t,o:e};let $t,en;return t&&([$t,en]=t(Ye)),{render:Yn,hydrate:$t,createApp:va(Yn,$t)}}function Be({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ls(e,t,n=!1){const o=e.children,s=t.children;if(M(o)&&M(s))for(let i=0;i<o.length;i++){const a=o[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Ae(s[i]),l.el=a.el),n||Ls(a,l))}}function Sa(e){const t=e.slice(),n=[0];let o,s,i,a,l;const c=e.length;for(o=0;o<c;o++){const d=e[o];if(d!==0){if(s=n[n.length-1],e[s]<d){t[o]=s,n.push(o);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<d?i=l+1:a=l;d<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}const La=e=>e.__isTeleport,Pa=Symbol(),fe=Symbol(void 0),Kn=Symbol(void 0),ve=Symbol(void 0),cn=Symbol(void 0),gt=[];let We=null;function ft(e=!1){gt.push(We=e?null:[])}function Aa(){gt.pop(),We=gt[gt.length-1]||null}let It=1;function jo(e){It+=e}function Ha(e){return e.dynamicChildren=It>0?We||$e:null,Aa(),It>0&&We&&We.push(e),e}function ht(e,t,n,o,s,i){return Ha(O(e,t,n,o,s,i,!0))}function Ca(e){return e?e.__v_isVNode===!0:!1}function Ee(e,t){return e.type===t.type&&e.key===t.key}const Yt="__vInternal",Ps=({key:e})=>e!=null?e:null,At=({ref:e,ref_key:t,ref_for:n})=>e!=null?Z(e)||G(e)||L(e)?{i:ge,r:e,k:t,f:!!n}:e:null;function O(e,t=null,n=null,o=0,s=null,i=e===fe?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ps(t),ref:t&&At(t),scopeId:ds,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(Xn(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Z(n)?8:16),It>0&&!a&&We&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&We.push(c),c}const Qe=Da;function Da(e,t=null,n=null,o=0,s=null,i=!1){if((!e||e===Pa)&&(e=ve),Ca(e)){const l=Xe(e,t,!0);return n&&Xn(l,n),l}if(Xa(e)&&(e=e.__vccOpts),t){t=Ta(t);let{class:l,style:c}=t;l&&!Z(l)&&(t.class=Ln(l)),X(c)&&($o(c)&&!M(c)&&(c=$({},c)),t.style=Sn(c))}const a=Z(e)?1:Yi(e)?128:La(e)?64:X(e)?4:L(e)?2:0;return O(e,t,n,o,s,a,i,!0)}function Ta(e){return e?$o(e)||Yt in e?$({},e):e:null}function Xe(e,t,n=!1){const{props:o,ref:s,patchFlag:i,children:a}=e,l=t?Ia(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ps(l),ref:t&&t.ref?n&&s?M(s)?s.concat(At(t)):[s,At(t)]:At(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xe(e.ssContent),ssFallback:e.ssFallback&&Xe(e.ssFallback),el:e.el,anchor:e.anchor}}function As(e=" ",t=0){return Qe(Kn,null,e,t)}function je(e){return e==null||typeof e=="boolean"?Qe(ve):M(e)?Qe(fe,null,e.slice()):typeof e=="object"?Ae(e):Qe(Kn,null,String(e))}function Ae(e){return e.el===null||e.memo?e:Xe(e)}function Xn(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),Xn(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Yt in t)?t._ctx=ge:s===3&&ge&&(ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ge},n=32):(t=String(t),o&64?(n=16,t=[As(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ia(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=Ln([t.class,o.class]));else if(s==="style")t.style=Sn([t.style,o.style]);else if(Ot(s)){const i=t[s],a=o[s];a&&i!==a&&!(M(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=o[s])}return t}function ye(e,t,n,o=null){he(e,t,7,[n,o])}function _o(e,t,n,o){let s;const i=n&&n[o];if(M(e)||Z(e)){s=new Array(e.length);for(let a=0,l=e.length;a<l;a++)s[a]=t(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,i&&i[a])}else if(X(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,i&&i[l]));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const d=a[l];s[l]=t(e[d],d,l,i&&i[l])}}else s=[];return n&&(n[o]=s),s}const Un=e=>e?Hs(e)?zt(e)||e.proxy:Un(e.parent):null,Bt=$(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Un(e.parent),$root:e=>Un(e.root),$emit:e=>e.emit,$options:e=>_s(e),$forceUpdate:e=>()=>as(e.update),$nextTick:e=>Ni.bind(e.proxy),$watch:e=>Gi.bind(e)}),Ba={get({_:e},t){const{ctx:n,setupState:o,data:s,props:i,accessCache:a,type:l,appContext:c}=e;let d;if(t[0]!=="$"){const S=a[t];if(S!==void 0)switch(S){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(o!==E&&A(o,t))return a[t]=1,o[t];if(s!==E&&A(s,t))return a[t]=2,s[t];if((d=e.propsOptions[0])&&A(d,t))return a[t]=3,i[t];if(n!==E&&A(n,t))return a[t]=4,n[t];wn&&(a[t]=0)}}const m=Bt[t];let w,_;if(m)return t==="$attrs"&&re(e,"get",t),m(e);if((w=l.__cssModules)&&(w=w[t]))return w;if(n!==E&&A(n,t))return a[t]=4,n[t];if(_=c.config.globalProperties,A(_,t))return _[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:i}=e;return s!==E&&A(s,t)?(s[t]=n,!0):o!==E&&A(o,t)?(o[t]=n,!0):A(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==E&&A(e,a)||t!==E&&A(t,a)||(l=i[0])&&A(l,a)||A(o,a)||A(Bt,a)||A(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:A(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Na=Ss();let Ea=0;function Oa(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||Na,i={uid:Ea++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new oi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Us(o,s),emitsOptions:hs(o,s),emit:null,emitted:null,propsDefaults:E,inheritAttrs:o.inheritAttrs,ctx:E,data:E,props:E,attrs:E,slots:E,refs:E,setupState:E,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Wi.bind(null,i),e.ce&&e.ce(i),i}let J=null;const Ra=()=>J||ge,ot=e=>{J=e,e.scope.on()},Ke=()=>{J&&J.scope.off(),J=null};function Hs(e){return e.vnode.shapeFlag&4}let jt=!1;function Va(e,t=!1){jt=t;const{props:n,children:o}=e.vnode,s=Hs(e);ka(e,n,s,t),ja(e,o);const i=s?Wa(e,t):void 0;return jt=!1,i}function Wa(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=es(new Proxy(e.ctx,Ba));const{setup:o}=n;if(o){const s=e.setupContext=o.length>1?Ka(e):null;ot(e),it();const i=Ce(o,e,0,[e.props,s]);if(at(),Ke(),Io(i)){if(i.then(Ke,Ke),t)return i.then(a=>{xo(e,a,t)}).catch(a=>{Kt(a,e,0)});e.asyncDep=i}else xo(e,i,t)}else Cs(e,t)}function xo(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=ss(t)),Cs(e,n)}let Uo;function Cs(e,t,n){const o=e.type;if(!e.render){if(!t&&Uo&&!o.render){const s=o.template;if(s){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=o,d=$($({isCustomElement:i,delimiters:l},a),c);o.render=Uo(s,d)}}e.render=o.render||be}ot(e),it(),ua(e),at(),Ke()}function Qa(e){return new Proxy(e.attrs,{get(t,n){return re(e,"get","$attrs"),t[n]}})}function Ka(e){const t=o=>{e.exposed=o||{}};let n;return{get attrs(){return n||(n=Qa(e))},slots:e.slots,emit:e.emit,expose:t}}function zt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ss(es(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bt)return Bt[n](e)}}))}function Xa(e){return L(e)&&"__vccOpts"in e}const Ds=(e,t)=>Ii(e,t,jt),qa="3.2.33",Za="http://www.w3.org/2000/svg",Oe=typeof document!="undefined"?document:null,vo=Oe&&Oe.createElement("template"),Ya={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t?Oe.createElementNS(Za,e):Oe.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Oe.createTextNode(e),createComment:e=>Oe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Oe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vo.innerHTML=o?`<svg>${e}</svg>`:e;const l=vo.content;if(o){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function za(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ja(e,t,n){const o=e.style,s=Z(n);if(n&&!s){for(const i in n)vn(o,i,n[i]);if(t&&!Z(t))for(const i in t)n[i]==null&&vn(o,i,"")}else{const i=o.display;s?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=i)}}const Mo=/\s*!important$/;function vn(e,t,n){if(M(n))n.forEach(o=>vn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Ga(e,t);Mo.test(n)?e.setProperty(st(o),n.replace(Mo,""),"important"):e[o]=n}}const Fo=["Webkit","Moz","ms"],fn={};function Ga(e,t){const n=fn[t];if(n)return n;let o=nt(t);if(o!=="filter"&&o in e)return fn[t]=o;o=Eo(o);for(let s=0;s<Fo.length;s++){const i=Fo[s]+o;if(i in e)return fn[t]=i}return t}const So="http://www.w3.org/1999/xlink";function $a(e,t,n,o,s){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(So,t.slice(6,t.length)):e.setAttributeNS(So,t,n);else{const i=Qs(t);n==null||i&&!Do(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function er(e,t,n,o,s,i,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,s,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Do(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[Ts,tr]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Mn=0;const nr=Promise.resolve(),or=()=>{Mn=0},sr=()=>Mn||(nr.then(or),Mn=Ts());function Is(e,t,n,o){e.addEventListener(t,n,o)}function ir(e,t,n,o){e.removeEventListener(t,n,o)}function ar(e,t,n,o,s=null){const i=e._vei||(e._vei={}),a=i[t];if(o&&a)a.value=o;else{const[l,c]=rr(t);if(o){const d=i[t]=lr(o,s);Is(e,l,d,c)}else a&&(ir(e,l,a,c),i[t]=void 0)}}const Lo=/(?:Once|Passive|Capture)$/;function rr(e){let t;if(Lo.test(e)){t={};let n;for(;n=e.match(Lo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[st(e.slice(2)),t]}function lr(e,t){const n=o=>{const s=o.timeStamp||Ts();(tr||s>=n.attached-1)&&he(cr(o,n.value),t,5,[o])};return n.value=e,n.attached=sr(),n}function cr(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const Po=/^on[a-z]/,fr=(e,t,n,o,s=!1,i,a,l,c)=>{t==="class"?za(e,o,s):t==="style"?Ja(e,n,o):Ot(t)?Pn(t)||ar(e,t,n,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hr(e,t,o,s))?er(e,t,o,i,a,l,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),$a(e,t,o,s))};function hr(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Po.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Po.test(t)&&Z(n)?!1:t in e}const dr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ta.props;const Ao=e=>{const t=e.props["onUpdate:modelValue"];return M(t)?n=>Pt(t,n):t},ur={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const s=Rt(t);Is(e,"change",()=>{const i=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?Oo(Nt(a)):Nt(a));e._assign(e.multiple?s?new Set(i):i:i[0])}),e._assign=Ao(o)},mounted(e,{value:t}){Ho(e,t)},beforeUpdate(e,t,n){e._assign=Ao(n)},updated(e,{value:t}){Ho(e,t)}};function Ho(e,t){const n=e.multiple;if(!(n&&!M(t)&&!Rt(t))){for(let o=0,s=e.options.length;o<s;o++){const i=e.options[o],a=Nt(i);if(n)M(t)?i.selected=Ys(t,a)>-1:i.selected=t.has(a);else if(Et(Nt(i),t)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Nt(e){return"_value"in e?e._value:e.value}const pr=$({patchProp:fr},Ya);let Co;function mr(){return Co||(Co=Ma(pr))}const gr=(...e)=>{const t=mr().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=br(o);if(!s)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function br(e){return Z(e)?document.querySelector(e):e}var kr=[{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723891198929666049",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0099",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0099.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723890099418038273",owners:[{name:"ddungddang",address:"0xc9a9dc3765eb9214680a295e7766700c51583c7c",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/16.png"}],name:"#0098",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0098.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723888999906410497",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0097",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0097.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Gibbous",count:4,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723887900394782721",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0096",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0096.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723886800883154945",owners:[{name:null,address:"0x27fa91b2867718e66f5a0563115da0c7774a0cf3",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/23.png"}],name:"#0095",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0095.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dead Side",count:4,total:103},{type:"Phases of the Moon",value:"First Quarter",count:18,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723885701371527169",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0094",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0094.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dead Side",count:4,total:103},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723884601859899393",owners:[{name:"kimjoe",address:"0xf5fd21c89d5e2206bd6184e88486b61fc5093894",imageUrl:"https://lh3.googleusercontent.com/-D-VSgURvUNRAndEaa5XaqH_Mlt1sab_0N8EyDQJ_mOkHodlK-PTTJP98leYgVjjl0UVPTkX-1zfI1bEkT8_7upJ8n-DU9FwMZTNAQ=s100"}],name:"#0093",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0093.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dead Side",count:4,total:103},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723883502348271617",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0092",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0092.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723882402836643841",owners:[{name:"GMGM",address:"0x7ee93e58f1784f23956de508ed0ec33ec8be9701",imageUrl:"https://lh3.googleusercontent.com/KSdBgqGuNgdf4CIkzsG_cOkj3K8aYM7q-slItA9V_wylt3D6kBWIp3FmvGXFsgK8xamHzjlI1GZqk69yN1Fl6eP96ioXPCt2_1SDGnM=s100"}],name:"#0091",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0091.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723881303325016065",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0090",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0090.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723880203813388289",owners:[{name:"ddungddang",address:"0xc9a9dc3765eb9214680a295e7766700c51583c7c",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/16.png"}],name:"#0089",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0089.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723879104301760513",owners:[{name:"bongsanjee33",address:"0x21159b098768cdc4e7fbe9859835d8b8f527f370",imageUrl:"https://lh3.googleusercontent.com/2VYhG0BmNNwgFRzV8Xcd57orQyY6diXrdhH5MXoFsyCB0n4Md7vJeQG6Rb1H7wqtXgV4Cl2rr_rvtfvhk4VS3ISSB0gIuFfLcKFNww=s100"}],name:"#0088",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

one more thing...

Ujin x FINGER PRINCESS
"Thank you to everyone who wished me a happy birthday. Have a nice weekend! \u{1F382}\u{1F60B}\u{1F497}"

https://opensea.io/collection/finger-princess`,imageFile:"0088.gif",animationFile:"0088.mp4",properties:[{type:"Phases of the Moon",value:"New Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723878004790132737",owners:[{name:"RODNEYCOOKIEDOG",address:"0xe1b17ee25a4271256a126b2388d3ff29459b8618",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/12.png"}],name:"#0087",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0087.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723876905278504961",owners:[{name:"gohgoon_nft",address:"0xeb9aa66d8c651e829ef010a2b34a0c76d2878ab8",imageUrl:"https://lh3.googleusercontent.com/r3JsiL8EDOJs5rlZzbn5_TTSrzTv3punVDuI1lQsWOZ5nkSxLyf0tb7foL1L6-ytFscKeIIoQFVNuSLcmxvMiirmfWpicqZ2nbYocg=s100"}],name:"#0086",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0086.jpeg",animationFile:null,properties:[{type:"Moon",value:"Blood Side",count:1,total:103},{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723875805766877185",owners:[{name:"bongsanjee33",address:"0x21159b098768cdc4e7fbe9859835d8b8f527f370",imageUrl:"https://lh3.googleusercontent.com/2VYhG0BmNNwgFRzV8Xcd57orQyY6diXrdhH5MXoFsyCB0n4Md7vJeQG6Rb1H7wqtXgV4Cl2rr_rvtfvhk4VS3ISSB0gIuFfLcKFNww=s100"}],name:"#0085",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0085.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723874706255249409",owners:[{name:"bongsanjee33",address:"0x21159b098768cdc4e7fbe9859835d8b8f527f370",imageUrl:"https://lh3.googleusercontent.com/2VYhG0BmNNwgFRzV8Xcd57orQyY6diXrdhH5MXoFsyCB0n4Md7vJeQG6Rb1H7wqtXgV4Cl2rr_rvtfvhk4VS3ISSB0gIuFfLcKFNww=s100"}],name:"#0084",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0084.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723873606743621633",owners:[{name:"hashim999",address:"0xf9dbdb1e1f4607ba433f1c50ea469dbb0cd04ea0",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/22.png"}],name:"#0083",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0083.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Third Quarter",count:9,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723872507231993857",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0082",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0082.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Third Quarter",count:9,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723871407720366081",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0081",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0081.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723870308208738305",owners:[{name:"kimjoe",address:"0xf5fd21c89d5e2206bd6184e88486b61fc5093894",imageUrl:"https://lh3.googleusercontent.com/-D-VSgURvUNRAndEaa5XaqH_Mlt1sab_0N8EyDQJ_mOkHodlK-PTTJP98leYgVjjl0UVPTkX-1zfI1bEkT8_7upJ8n-DU9FwMZTNAQ=s100"}],name:"#0080",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0080.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Gibbous",count:4,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723869208697110529",owners:[{name:"e1e1e1",address:"0xcbc992e42acbb0b8a6e43b2f283ca4b3dbc6e1e1",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/26.png"}],name:"#0079",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0079.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Gibbous",count:4,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723868109185482753",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0078",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0078.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Gibbous",count:4,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723867009673854977",owners:[{name:"cgs21",address:"0xb94179f79664908b1c94518885b0e76cef4e0ca2",imageUrl:"https://lh3.googleusercontent.com/Tmfr6GyLAiOeb1iZJFanv3yoOuRWqgbd7dWMf-HNiZJPBh0-6STeQza86USh7DZtaXrBsWauJUW2RiPPY4OYPSaDqHYpo6sla1tYKA"}],name:"#0077",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0077.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723865910162227201",owners:[{name:"gohgoon_nft",address:"0xeb9aa66d8c651e829ef010a2b34a0c76d2878ab8",imageUrl:"https://lh3.googleusercontent.com/r3JsiL8EDOJs5rlZzbn5_TTSrzTv3punVDuI1lQsWOZ5nkSxLyf0tb7foL1L6-ytFscKeIIoQFVNuSLcmxvMiirmfWpicqZ2nbYocg=s100"}],name:"#0076",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0076.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723864810650599425",owners:[{name:"bongsanjee33",address:"0x21159b098768cdc4e7fbe9859835d8b8f527f370",imageUrl:"https://lh3.googleusercontent.com/2VYhG0BmNNwgFRzV8Xcd57orQyY6diXrdhH5MXoFsyCB0n4Md7vJeQG6Rb1H7wqtXgV4Cl2rr_rvtfvhk4VS3ISSB0gIuFfLcKFNww=s100"}],name:"#0075",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0075.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723863711138971649",owners:[{name:"bongsanjee33",address:"0x21159b098768cdc4e7fbe9859835d8b8f527f370",imageUrl:"https://lh3.googleusercontent.com/2VYhG0BmNNwgFRzV8Xcd57orQyY6diXrdhH5MXoFsyCB0n4Md7vJeQG6Rb1H7wqtXgV4Cl2rr_rvtfvhk4VS3ISSB0gIuFfLcKFNww=s100"}],name:"#0074",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0074.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723862611627343873",owners:[{name:null,address:"0xb3b831c64dd2d0f4423e3900855bbb5f97336e5d",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/31.png"}],name:"#0073",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0073.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723861512115716097",owners:[{name:null,address:"0x3309d99909b76d660716f18ecb7e3c2e3e33b690",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/8.png"}],name:"#0072",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0072.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723860412604088321",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0071",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0071.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723859313092460545",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0070",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0070.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723857114069204993",owners:[{name:null,address:"0xfa75a6cecbb49256ba948bfcbaf72f1193a60b67",imageUrl:"https://lh3.googleusercontent.com/2llVCKCHuElmevwihQj9DwryDAK9E6VQOUX7ARUP8rxDwOdo7fbsv0DH9cwHa_l8xDsVN43VACg2BSP3MidNXUnFyDUqqaOytM_EkUo=s100"}],name:"#0069",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0069.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723856014557577217",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0068",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0068.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723854915045949441",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0067",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0067.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"New Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723853815534321665",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0066",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0066.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723852716022693889",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0065",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0065.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723851616511066113",owners:[{name:"CryptoQueeen",address:"0x0934c94a7e3b3fb7967f8c71e060117605ff8be6",imageUrl:"https://lh3.googleusercontent.com/2V5BdwpY7zvoIrh0868OyPouO0X436o-HBjcRUWMCjsPfALMePVpAWW0NtRnllZoR3_z66lZbWvHXppnsURtFpbsSZ4rzWUB_QKbziQ=s100"}],name:"#0064",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0064.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Full Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723850516999438337",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0063",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0063.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723849417487810561",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0062",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0062.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723847218464555009",owners:[{name:"rapper111.eth",address:"0x202c44ef498d109352c76a192e86fd2e4c137022",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/33.png"}],name:"#0061",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0061.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Full Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723846118952927233",owners:[{name:"TBLinnu",address:"0xb47a1de1d48ca4b65df6301782c3f3f879f4527a",imageUrl:"https://lh3.googleusercontent.com/TscWRALi2q7qllqPrHizuXUEI3yLB9LTsajF99Xq13PgcfDgYmnsaWUSaY-xeEPn4MNV5QivI4PXrsGy5aWOxWM_syKJF8VHvv2a0Q=s100"}],name:"#0060",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0060.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"Full Moon",count:12,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723845019441299457",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0059",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0059.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Third Quarter",count:9,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723843919929671681",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0058",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0058.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Third Quarter",count:9,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723842820418043905",owners:[{name:"ewjf29034r2j3rkofj02",address:"0x1e9f5a2a1c38deb432257bde75c77e27ec3628e7",imageUrl:"https://lh3.googleusercontent.com/xz9W5UiTA1hIF2XKhPPrlQAB0mvqJECOeu6Rqf1zXppkDuAYUF_-lSvJ1uJWj-80eswV2S72tzDUvWEwjuz4FroiSF1Oz9-nh4LrHg=s100"}],name:"#0057",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0057.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Last Quarter",count:2,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723839521883160577",owners:[{name:null,address:"0xfeddf7bb35afc8d272f8f35e2a49b38b42d8a0fb",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/13.png"}],name:"#0056",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0056.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Last Quarter",count:2,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723838422371532801",owners:[{name:"Dogyun_99",address:"0x69af485141cb8bb7a6e7ad825be8a69edb697294",imageUrl:"https://lh3.googleusercontent.com/9lVMfDNwJs1v60R-PteSQOkqUPkODo_oGYwWIyN_IWhI2--SC8ujLRq8D--OZzs21YAo5LEd0jQm8fxsI_cd2GxB9J9Onj4SXUmQnc4=s100"}],name:"#0055",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0055.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723776849720377345",owners:[{name:"spikespiegell",address:"0xc7b900f7c9b1dd40c9d2de6c739d5127c85b298d",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/21.png"}],name:"#0054",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0054.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"New Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723775750208749569",owners:[{name:"taeyeol.eth",address:"0x723b1bf840a677aab004cf8573d3189476824ec3",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/2.png"}],name:"#0053",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0053.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723774650697121793",owners:[{name:"Ryot_eth",address:"0x4861babe0c26866d4f1f8c64461827967cdd8fb1",imageUrl:"https://lh3.googleusercontent.com/Yf7lrvDBCT5DCe2AZ_ZSNURpSTg-RBoOCYD3BhhT_QmnY7Rdy0DGhghO2hl_3ChcUppEnUA42e_O-fmMV0HijR6BYen1dbswDIO_vA=s100"}],name:"#0052",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0052.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Full Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723773551185494017",owners:[{name:"LAZYYmfer",address:"0x0374b8b9b515dc83c4bc8b4706fdab15dfcd599e",imageUrl:"https://lh3.googleusercontent.com/KC6t1b0F5p_LLV9nRihObwAfNmnZzltU2Sapm9DaAArUD01t6sqcWd64Y1qeiRz7AkfmaEK1-ss86yfDQGeej4XfRa9sLjzzbQl6Aw=s100"}],name:"#0051",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0051.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"Full Moon",count:12,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723772451673866241",owners:[{name:"Cochang",address:"0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",imageUrl:"https://lh3.googleusercontent.com/7UmKvjA63sgQRlY_4vQlTyaI2SLq7P7vnt4rqWxlAYMT12_8HJ7IJWzKmpqiXY4vAoc93ZmLx9FfNStK49plxBVW-3hlqyTFKFO_7Q"}],name:"#0050",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0050.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Full Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723771352162238465",owners:[{name:"byungheon.eth",address:"0x6cbb8ba9e93a295f6fa0f8eca0000ea9db083059",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/33.png"}],name:"#0049",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0049.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723770252650610689",owners:[{name:"0x2faced",address:"0x2faceda28350549c7b4bac2a8404a6d8a7debe2b",imageUrl:"https://lh3.googleusercontent.com/RZOI4QIXG0iuamK_INvpuY1_q_aPXM5c0kvYmczpmX4acIJrrTlqYPSJ0qzXM0TAlVjI__Kn6mhKDPwoS0acS7qs4rOOS0vf8bJ3BLU"}],name:"#0048",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0048.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Full Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723769153138982913",owners:[{name:"yona_eth",address:"0x9f7096664a86d76400187dd75fe5081c2cb4d822",imageUrl:"https://lh3.googleusercontent.com/akfUlWqc_jFWKDVWAr_dCObeh5CowisY8XiltFP2qCXdrA-pZJCSZCugMFz1MEs7uEJguGQgiraxjXOtKA4hNjFZWAR6kEVhAlo8nQ=s100"}],name:"#0047",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0047.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Full Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723768053627355137",owners:[{name:"autumnchicaneko",address:"0x00000018988ff5723410b47209f7d891d88732d7",imageUrl:"https://lh3.googleusercontent.com/mgE6yNNGOGWgab5EdACr_a5Mpg2l5TlUJ_QICs-Pzk-MxWKlgTk9BZsUGCRNHwby7iPfr5UjnNbeGnq1o1djfhloxCdVKJ0bFs0R_Nc=s100"}],name:"#0046",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0046.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723766954115727361",owners:[{name:"Ted_Chang",address:"0x27c2f5b20abc4c3d462f2046d98e9dc638cb6fed",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/21.png"}],name:"#0045",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0045.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Half Moon",count:4,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723765854604099585",owners:[{name:null,address:"0x33dad58201f62894576b61d582af9bcca8ca9ce9",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/17.png"}],name:"#0044",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0044.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Third Quarter",count:9,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723764755092471809",owners:[{name:"jumanzi.eth",address:"0xbab608d14b0748013b9e64cc6637c6155612d422",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/14.png"}],name:"#0043",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0043.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723763655580844033",owners:[{name:"h0neybad9er",address:"0x26a22514d3ac0b05e2f4f04df96ef302ba434cbe",imageUrl:"https://lh3.googleusercontent.com/WQqdV_xjEGiLg8YYXei1yvVgFshIj5VreguzbD_VrYqEPx-sCUOHw5XxUBULZsb8kBYJ2UECrb1AGAn-ROnkj6iDLssNw1Dp2BV5=s100"}],name:"#0042",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0042.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"New Moon",count:12,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723762556069216257",owners:[{name:"Cochang",address:"0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",imageUrl:"https://lh3.googleusercontent.com/7UmKvjA63sgQRlY_4vQlTyaI2SLq7P7vnt4rqWxlAYMT12_8HJ7IJWzKmpqiXY4vAoc93ZmLx9FfNStK49plxBVW-3hlqyTFKFO_7Q"}],name:"#0041",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0041.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723761456557588481",owners:[{name:null,address:"0x33dad58201f62894576b61d582af9bcca8ca9ce9",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/17.png"}],name:"#0040",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0040.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723760357045960705",owners:[{name:"MiiHo",address:"0x6dbf6c38a27ea9bc0ebeb57d33a09a438db681f5",imageUrl:"https://lh3.googleusercontent.com/bqqQXwDtth3j6vW0cMQ0DCU_uytg0-fwKouNp3yzZqBPESUsgTBzPxHY2LY6IwTPIsZqGzzyIQ0k6P5ZLAYHx9BpuORbRUZNhKIN59c"}],name:"#0039",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0039.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Third Quarter",count:9,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723759257534332929",owners:[{name:"koddang52",address:"0xdaf4d3a2f1bae963ee6c1df2e8185ef413b8928d",imageUrl:"https://lh3.googleusercontent.com/J3mQUH8123dD-AX68LabOvxDWIUiboZT5bKurL2Z-MZn96ObsR7NQer0v4bWOd2_fUtdNobze2EUPZvZ8H0ei-2BVdI4tzlg2CfX=s100"}],name:"#0038",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0038.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"New Moon",count:12,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723758158022705153",owners:[{name:"Goldfinney",address:"0x4053083ad6244e6281660e34e295e4dcd72d2cd4",imageUrl:"https://lh3.googleusercontent.com/aGvtwEx4ShGJz-S5vIkCqGeSXHMtNs7oQsSZXXH07Pga2SjSDqvLP2-U-494bF2t9HxHJTnBHvPYLaKBg0vpSVaTrRXE5NY7kqedxoc=s100"}],name:"#0037",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0037.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723757058511077377",owners:[{name:"IlIIlIlIllIIIll",address:"0xa2d8041b6edcd696ec301d0f040185a3ea66ae6f",imageUrl:"https://lh3.googleusercontent.com/T6HGCDTGjhdUehOU4EwKTmQqAgZ6XfOZUoAtLYzYu4zK-_PEEe2qSmNrThwegZ27ImIHSF_zhEtid4k2DqLImUu0s_vjJdT0rjYEU1c"}],name:"#0036",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0036.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"New Moon",count:12,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723755958999449601",owners:[{name:"Boodraw1",address:"0x6598f8a8850d2bfe1930f5669ac32660333afcac",imageUrl:"https://lh3.googleusercontent.com/4VNy8zk66YzIhxUKFL095L1yMK28_4oLbegfoX6uND_U_38sqJd0rMvKu0C8RFyelRHT2x2CiLmXmtcl6jcwf3RmLrD9JCUUEiC2=s100"}],name:"#0035",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0035.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723754859487821825",owners:[{name:"eqrfeqE",address:"0x42dc5c61d7392d74307357bdc0be178fa53bd922",imageUrl:"https://lh3.googleusercontent.com/qHKz87Z13VQdNXFJp8gvFSZXgD_wztQrb3eKSYA2y5KtqY3p0kjwfU-N0WiGV9Q4f5No_B0zMJDG3nSGIbyD7073O6-xK_0PB1yXwQ=s100"}],name:"#0034",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0034.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723753759976194049",owners:[{name:"SUPERELLIPSE",address:"0xfd4868b2a1af80073556d6fb7565c33e6377de98",imageUrl:"https://lh3.googleusercontent.com/1bBurcaMSM9i_QgSY2fwZLYxMuru5FCX6TCEb7MdqpGVjyjot7l4Fbn8ExiYMCSpCm2mHiRYP72bipwRDG1n3KHf3zs2_ND2PDIw8A=s100"}],name:"#0033",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0033.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723752660464566273",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0032",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0032.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723751560952938497",owners:[{name:"a41-steve.eth",address:"0xc48109dec9c4eaa3385e934cd7e5e5bfbf5d95ed",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/30.png"}],name:"#0031",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0031.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723750461441310721",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0030",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0030.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723749361929682945",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0029",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0029.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"New Moon",count:12,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723748262418055169",owners:[{name:null,address:"0x33dad58201f62894576b61d582af9bcca8ca9ce9",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/17.png"}],name:"#0028",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0028.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723747162906427393",owners:[{name:"e1e1e1",address:"0xcbc992e42acbb0b8a6e43b2f283ca4b3dbc6e1e1",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/26.png"}],name:"#0027",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0027.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"New Moon",count:12,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723746063394799617",owners:[{name:"Cochang",address:"0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",imageUrl:"https://lh3.googleusercontent.com/7UmKvjA63sgQRlY_4vQlTyaI2SLq7P7vnt4rqWxlAYMT12_8HJ7IJWzKmpqiXY4vAoc93ZmLx9FfNStK49plxBVW-3hlqyTFKFO_7Q"}],name:"#0026",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0026.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723744963883171841",owners:[{name:"Hawoon",address:"0x64df7af696e0977771a0e1e1b1a8dd22ded3cf4b",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/2.png"}],name:"#0025",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0025.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Third Quarter",count:9,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723743864371544065",owners:[{name:"tigerr",address:"0xfc1ab1ee5b163879a850477fbfeb35eaec52abc8",imageUrl:"https://lh3.googleusercontent.com/8aV1xf5UWlZVj-FX5bhLZdFOeZjx-bU1FVNm72X356UDzPMPDtC7HaI54gDQy0_o_cztSSXcyWKecjbTTwGogcmQN0ciHCAeskJJJ90=s100"}],name:"#0024",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0024.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723742764859916289",owners:[{name:"wisekim",address:"0x5cf6e510e0c123e1e839376f8ea1900bb9b9a6c1",imageUrl:"https://lh3.googleusercontent.com/2Ux6XbwuuVbHNJDT92Btfo3snImqyAWK5JEVkB9kabqvgOoP95efLT6h5wZygfzoToeCRF0qLkDgycwNUdmNpe0DdhDZMv8_dlUt9v4=s100"}],name:"#0023",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0023.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723741665348288513",owners:[{name:"colinworld",address:"0x1903bc4488ee4def59af04a4df04afd342b03294",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/9.png"}],name:"#0022",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0022.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Third Quarter",count:9,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723740565836660737",owners:[{name:"GaryKwon",address:"0xc7933f7df4de83c76b39982dfa99cc356e45c9bd",imageUrl:"https://lh3.googleusercontent.com/OZXEaoWBPTGhyOX4X0kL6X3CdNZ5YfvgiA4lfOH8KLTLzmm8-G7tQKL7NGrIKZddf-U_Az67ilvxPLx2_fv6ZnMoJbpUcbIXaUuWP9I"}],name:"#0021",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0021.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723739466325032961",owners:[{name:"leeyunsung",address:"0x4ebdd05348ff7299cb116e3dd61601154c784660",imageUrl:"https://lh3.googleusercontent.com/3B5f51gphBcjVtQlQLuCwFH-fVyy1g4DztMESAVJHJAUpvy84iWkEOo3ZAT8bl1SmFfmjfYsT3FPrIVI6Ki52RnC_70N-mByRL7z9A=s100"}],name:"#0020",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0020.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"Full Moon",count:12,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723738366813405185",owners:[{name:"workforkimchi",address:"0xe4d86e7971e3280d3cc4967cfc6a8210d1158293",imageUrl:"https://lh3.googleusercontent.com/fUDAXKsYlHX9Jn6-67GEvvfU7hmCxQHH0RZevE9_czSBQPhwq3yls49vVMvN1gQckfv4tWKY_fZeoZ2T2Jo-99QnsJMWqQorKAI9=s100"}],name:"#0019",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0019.png",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723737267301777409",owners:[{name:"Boodraw1",address:"0x6598f8a8850d2bfe1930f5669ac32660333afcac",imageUrl:"https://lh3.googleusercontent.com/4VNy8zk66YzIhxUKFL095L1yMK28_4oLbegfoX6uND_U_38sqJd0rMvKu0C8RFyelRHT2x2CiLmXmtcl6jcwf3RmLrD9JCUUEiC2=s100"}],name:"#0018",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0018.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"Half Moon",count:4,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723736167790149633",owners:[{name:"Hyukkkkkk",address:"0xf608aafd2b1ffbefb85df0f17877d30b71a8a761",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/6.png"}],name:"#0017",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0017.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723735068278521857",owners:[{name:null,address:"0x560fd42c50da294662d4f4fa24bd19e4f8012101",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/25.png"}],name:"#0016",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0016.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"New Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723733968766894081",owners:[{name:null,address:"0xf05d39d78c0f8946815701afa290c0d94b904a11",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/27.png"}],name:"#0015",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0015.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"New Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723732869255266305",owners:[{name:"Boodraw1",address:"0x6598f8a8850d2bfe1930f5669ac32660333afcac",imageUrl:"https://lh3.googleusercontent.com/4VNy8zk66YzIhxUKFL095L1yMK28_4oLbegfoX6uND_U_38sqJd0rMvKu0C8RFyelRHT2x2CiLmXmtcl6jcwf3RmLrD9JCUUEiC2=s100"}],name:"#0014",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0014.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723731769743638529",owners:[{name:"bivibig",address:"0x16fb900dfe2edff25ea4ae02b38a843590340748",imageUrl:"https://lh3.googleusercontent.com/_hasbiZ2uvmQbWaOslEb4F0qsWq7zv1fooZApAww03WyaxVRbOU_98vjteIjUg2LcFcX4l3nW4u7Ho8LWaOwg3Vk9G9HN8ELYiP4=s100"}],name:"#0013",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0013.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723730670232010753",owners:[{name:"gamja58",address:"0xe6a917efb682466df3804d0471c9d98b2cefd469",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/28.png"}],name:"#0012",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0012.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723729570720382977",owners:[{name:"19fc362",address:"0x39afc8529ffeffb37ffa2e7315cd3420e19fc362",imageUrl:"https://lh3.googleusercontent.com/LeWSSzxWgqwNcUy2DaaWyaTcX0mKwBdPPY0MHfGP-K4AqvvafUYAe_oLiTdifFGOVEvWKP8lr6jjR5RIGVDVrhpLF3nT0QkFhldDbhs=s100"}],name:"#0011",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0011.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Half Moon",count:4,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723728471208755201",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0010",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0010.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723727371697127425",owners:[{name:null,address:"0x3377eb1651657b62b2b09d9d9b6183a906eb95af",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/15.png"}],name:"#0009",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0009.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Full Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723726272185499649",owners:[{name:"spikespiegell",address:"0xc7b900f7c9b1dd40c9d2de6c739d5127c85b298d",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/21.png"}],name:"#0008",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0008.png",animationFile:null,properties:[{type:"Phases of the Moon",value:"Full Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723725172673871873",owners:[{name:"Perrypak",address:"0xa28640848572f3b95dcfe2290e718c5943ad38d9",imageUrl:"https://lh3.googleusercontent.com/CwiYh0LGuI2NvZRXehsngr2_xbbcg5F1d-YV5XNnJtQ-KiKXA6bQt0okg2hc3vjSlZvN-UNC8q5BB5O5u7urSJv_XbHrY1AsW1A29AM=s100"}],name:"#0007",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0007.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"First Quarter",count:18,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723724073162244097",owners:[{name:"Level19_Ryan",address:"0xf0839f77d88a93e74b5aca6946b89f110de750cf",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/28.png"}],name:"#0006",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0006.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:39,total:103},{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723721874138988545",owners:[{name:null,address:"0xe401477f3acc0b021cd6c7e8fd2cd44a10c5f369",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/18.png"}],name:"#0005",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0005.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Crescent",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723720774627360769",owners:[{name:"TBLinnu",address:"0xb47a1de1d48ca4b65df6301782c3f3f879f4527a",imageUrl:"https://lh3.googleusercontent.com/TscWRALi2q7qllqPrHizuXUEI3yLB9LTsajF99Xq13PgcfDgYmnsaWUSaY-xeEPn4MNV5QivI4PXrsGy5aWOxWM_syKJF8VHvv2a0Q=s100"}],name:"#0004",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0004.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"New Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723719675115732993",owners:[{name:"Goldfinney",address:"0x4053083ad6244e6281660e34e295e4dcd72d2cd4",imageUrl:"https://lh3.googleusercontent.com/aGvtwEx4ShGJz-S5vIkCqGeSXHMtNs7oQsSZXXH07Pga2SjSDqvLP2-U-494bF2t9HxHJTnBHvPYLaKBg0vpSVaTrRXE5NY7kqedxoc=s100"}],name:"#0003",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0003.png",animationFile:null,properties:[{type:"Phases of the Moon",value:"Full Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723718575604105217",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0002",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0002.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Half Moon",count:4,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723717476092477441",owners:[{name:"0x2faced",address:"0x2faceda28350549c7b4bac2a8404a6d8a7debe2b",imageUrl:"https://lh3.googleusercontent.com/RZOI4QIXG0iuamK_INvpuY1_q_aPXM5c0kvYmczpmX4acIJrrTlqYPSJ0qzXM0TAlVjI__Kn6mhKDPwoS0acS7qs4rOOS0vf8bJ3BLU"}],name:"#0001",description:`\u201CShape of the moonlight reminds me of her silhouette.
Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken.
Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE  `,imageFile:"0001.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"New Moon",count:12,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723899995022688257",owners:[{name:"kimjoe",address:"0xf5fd21c89d5e2206bd6184e88486b61fc5093894",imageUrl:"https://lh3.googleusercontent.com/-D-VSgURvUNRAndEaa5XaqH_Mlt1sab_0N8EyDQJ_mOkHodlK-PTTJP98leYgVjjl0UVPTkX-1zfI1bEkT8_7upJ8n-DU9FwMZTNAQ=s100"}],name:"#0107",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0107.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dead Side",count:4,total:103},{type:"Phases of the Moon",value:"Third Quarter",count:9,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723894497464549377",owners:[{name:"GMGM",address:"0x7ee93e58f1784f23956de508ed0ec33ec8be9701",imageUrl:"https://lh3.googleusercontent.com/wr9HeO7sbgNDKBq-ATB5HjvFjV1rDUsj7IqVBvH5-ZrdPsJaa1nXyH5M0oR7l0wUcovKJGK_3XiUCknbLqzjnqlWDu5RY0mLKJ8S=s100"}],name:"#0102",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0102.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Dark Side",count:39,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723893397952921601",owners:[{name:"GMGM",address:"0x7ee93e58f1784f23956de508ed0ec33ec8be9701",imageUrl:"https://lh3.googleusercontent.com/wr9HeO7sbgNDKBq-ATB5HjvFjV1rDUsj7IqVBvH5-ZrdPsJaa1nXyH5M0oR7l0wUcovKJGK_3XiUCknbLqzjnqlWDu5RY0mLKJ8S=s100"}],name:"#0101",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0101.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723892298441293825",owners:[{name:null,address:"0x33dad58201f62894576b61d582af9bcca8ca9ce9",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/17.png"}],name:"#0100",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0100.jpeg",animationFile:null,properties:[{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:103},{type:"Moon",value:"Bright Side",count:59,total:103}]}];const yr={class:"py-4"},wr={class:"container mx-auto font-roboto space-y-2 px-2"},jr={class:"flex justify-between items-center"},_r=O("h2",{class:"text-xl font-press"},[As("UJIN"),O("span",{class:"text-purple-400 pl-2"},"RADER")],-1),xr=O("option",{value:"name_asc"},"Name",-1),Ur=O("option",{value:"name_desc"},"Recently Created",-1),vr=O("option",{value:"rank_asc"},"Rank: Low to High",-1),Mr=O("option",{value:"rank_desc"},"Rank: High to Low",-1),Fr=[xr,Ur,vr,Mr],Sr={class:"grid grid-cols-2 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 auto-cols-fr gap-x-4 gap-y-6"},Lr=["href"],Pr={class:"rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"},Ar={class:"overflow-hidden aspect-square"},Hr=["src"],Cr={class:"px-4 pt-2 pb-4 dark:bg-gray-900"},Dr={class:"flex justify-between items-center"},Tr={class:"text-purple-400 font-extrabold"},Ir={class:"font-extrabold"},Br={class:"space-y-1"},Nr={class:"text-xs text-gray-400"},Er={class:"flex justify-between items-center"},Or={class:"text-sm"},Rr={class:"text-xs"},Vr=na({setup(e){const t=Ai("name_asc"),n=kr.map(l=>{var c=l,{properties:i}=c,a=no(c,["properties"]);let d=1;for(const m of i)d*=m.count/m.total;return nn(tn({},a),{properties:i.sort((m,w)=>m.type.localeCompare(w.type)),rarity:d})}).sort((i,a)=>i.rarity-a.rarity).map((i,a)=>nn(tn({},i),{rank:a+1}));for(const[i,a]of n.entries())if(i>0){const l=n[i-1];l.rarity===a.rarity&&(a.rank=l.rank)}const o=Ds(()=>t.value==="name_asc"?n.sort((i,a)=>i.name.localeCompare(a.name)):t.value==="name_desc"?n.sort((i,a)=>a.name.localeCompare(i.name)):t.value==="rank_asc"?n.sort((i,a)=>i.rank-a.rank):t.value==="rank_desc"?n.sort((i,a)=>a.rank-i.rank):n);function s(i){return`${(i*100).toFixed(2)}%`}return(i,a)=>(ft(),ht("div",yr,[O("div",wr,[O("div",jr,[_r,O("div",null,[xa(O("select",{"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),class:"border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-600"},Fr,512),[[ur,t.value]])])]),O("div",Sr,[(ft(!0),ht(fe,null,_o(os(o),l=>(ft(),ht("a",{key:l.id,target:"_blank",href:`https://opensea.io/assets/${l.contractAddress}/${l.tokenId}`},[O("div",Pr,[O("div",Ar,[O("img",{src:`../data/${l.imageFile}`,class:"block object-cover w-full h-full"},null,8,Hr)]),O("div",Cr,[O("div",Dr,[O("div",Tr,"Rank"+ct(l.rank),1),O("div",Ir,ct(l.name),1)]),O("div",null,[O("div",Br,[(ft(!0),ht(fe,null,_o(l.properties,c=>(ft(),ht("div",{key:c.type},[O("div",Nr,ct(c.type),1),O("div",Er,[O("div",Or,ct(c.value),1),O("div",Rr,ct(s(c.count/c.total)),1)])]))),128))])])])])],8,Lr))),128))])])]))}});gr(Vr).mount("#app");
