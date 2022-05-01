const As=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};As();function vn(e,t){const n=Object.create(null),o=e.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Cs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ds=vn(Cs);function Lo(e){return!!e||e===""}function Mn(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=Z(o)?Bs(o):Mn(o);if(s)for(const i in s)t[i]=s[i]}return t}else{if(Z(e))return e;if(X(e))return e}}const Ts=/;(?![^(]*\))/g,Is=/:(.+)/;function Bs(e){const t={};return e.split(Ts).forEach(n=>{if(n){const o=n.split(Is);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Sn(e){let t="";if(Z(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const o=Sn(e[n]);o&&(t+=o+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Ns(e,t){if(e.length!==t.length)return!1;let n=!0;for(let o=0;n&&o<e.length;o++)n=Nt(e[o],t[o]);return n}function Nt(e,t){if(e===t)return!0;let n=Yn(e),o=Yn(t);if(n||o)return n&&o?e.getTime()===t.getTime():!1;if(n=M(e),o=M(t),n||o)return n&&o?Ns(e,t):!1;if(n=X(e),o=X(t),n||o){if(!n||!o)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Nt(e[a],t[a]))return!1}}return String(e)===String(t)}function Es(e,t){return e.findIndex(n=>Nt(n,t))}const ct=e=>Z(e)?e:e==null?"":M(e)||X(e)&&(e.toString===Ho||!F(e.toString))?JSON.stringify(e,Fo,2):String(e),Fo=(e,t)=>t&&t.__v_isRef?Fo(e,t.value):et(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s])=>(n[`${o} =>`]=s,n),{})}:Ot(t)?{[`Set(${t.size})`]:[...t.values()]}:X(t)&&!M(t)&&!Ao(t)?String(t):t,E={},$e=[],be=()=>{},Os=()=>!1,Vs=/^on[^a-z]/,Et=e=>Vs.test(e),Ln=e=>e.startsWith("onUpdate:"),$=Object.assign,Fn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Rs=Object.prototype.hasOwnProperty,H=(e,t)=>Rs.call(e,t),M=Array.isArray,et=e=>Vt(e)==="[object Map]",Ot=e=>Vt(e)==="[object Set]",Yn=e=>e instanceof Date,F=e=>typeof e=="function",Z=e=>typeof e=="string",Pn=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Po=e=>X(e)&&F(e.then)&&F(e.catch),Ho=Object.prototype.toString,Vt=e=>Ho.call(e),Qs=e=>Vt(e).slice(8,-1),Ao=e=>Vt(e)==="[object Object]",Hn=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Lt=vn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ws=/-(\w)/g,nt=Rt(e=>e.replace(Ws,(t,n)=>n?n.toUpperCase():"")),Ks=/\B([A-Z])/g,st=Rt(e=>e.replace(Ks,"-$1").toLowerCase()),Co=Rt(e=>e.charAt(0).toUpperCase()+e.slice(1)),en=Rt(e=>e?`on${Co(e)}`:""),bt=(e,t)=>!Object.is(e,t),Ft=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ht=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Do=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Gn;const Xs=()=>Gn||(Gn=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let we;class qs{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&we&&(this.parent=we,this.index=(we.scopes||(we.scopes=[])).push(this)-1)}run(t){if(this.active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this.active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Zs(e,t=we){t&&t.active&&t.effects.push(e)}const An=e=>{const t=new Set(e);return t.w=0,t.n=0,t},To=e=>(e.w&De)>0,Io=e=>(e.n&De)>0,zs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=De},Js=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const s=t[o];To(s)&&!Io(s)?s.delete(e):t[n++]=s,s.w&=~De,s.n&=~De}t.length=n}},ln=new WeakMap;let dt=0,De=1;const cn=30;let me;const Re=Symbol(""),hn=Symbol("");class Cn{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zs(this,o)}run(){if(!this.active)return this.fn();let t=me,n=Ae;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=me,me=this,Ae=!0,De=1<<++dt,dt<=cn?zs(this):$n(this),this.fn()}finally{dt<=cn&&Js(this),De=1<<--dt,me=this.parent,Ae=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){me===this?this.deferStop=!0:this.active&&($n(this),this.onStop&&this.onStop(),this.active=!1)}}function $n(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ae=!0;const Bo=[];function it(){Bo.push(Ae),Ae=!1}function at(){const e=Bo.pop();Ae=e===void 0?!0:e}function re(e,t,n){if(Ae&&me){let o=ln.get(e);o||ln.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=An()),No(s)}}function No(e,t){let n=!1;dt<=cn?Io(e)||(e.n|=De,n=!To(e)):n=!e.has(me),n&&(e.add(me),me.deps.push(e))}function Me(e,t,n,o,s,i){const a=ln.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&M(e))a.forEach((c,f)=>{(f==="length"||f>=o)&&l.push(c)});else switch(n!==void 0&&l.push(a.get(n)),t){case"add":M(e)?Hn(n)&&l.push(a.get("length")):(l.push(a.get(Re)),et(e)&&l.push(a.get(hn)));break;case"delete":M(e)||(l.push(a.get(Re)),et(e)&&l.push(a.get(hn)));break;case"set":et(e)&&l.push(a.get(Re));break}if(l.length===1)l[0]&&fn(l[0]);else{const c=[];for(const f of l)f&&c.push(...f);fn(An(c))}}function fn(e,t){for(const n of M(e)?e:[...e])(n!==me||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ys=vn("__proto__,__v_isRef,__isVue"),Eo=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Pn)),Gs=Dn(),$s=Dn(!1,!0),ei=Dn(!0),eo=ti();function ti(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=D(this);for(let i=0,a=this.length;i<a;i++)re(o,"get",i+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(D)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){it();const o=D(this)[t].apply(this,n);return at(),o}}),e}function Dn(e=!1,t=!1){return function(o,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?bi:Wo:t?Qo:Ro).get(o))return o;const a=M(o);if(!e&&a&&H(eo,s))return Reflect.get(eo,s,i);const l=Reflect.get(o,s,i);return(Pn(s)?Eo.has(s):Ys(s))||(e||re(o,"get",s),t)?l:G(l)?!a||!Hn(s)?l.value:l:X(l)?e?Ko(l):Bn(l):l}}const ni=Oo(),oi=Oo(!0);function Oo(e=!1){return function(n,o,s,i){let a=n[o];if(kt(a)&&G(a)&&!G(s))return!1;if(!e&&!kt(s)&&(Xo(s)||(s=D(s),a=D(a)),!M(n)&&G(a)&&!G(s)))return a.value=s,!0;const l=M(n)&&Hn(o)?Number(o)<n.length:H(n,o),c=Reflect.set(n,o,s,i);return n===D(i)&&(l?bt(s,a)&&Me(n,"set",o,s):Me(n,"add",o,s)),c}}function si(e,t){const n=H(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&Me(e,"delete",t,void 0),o}function ii(e,t){const n=Reflect.has(e,t);return(!Pn(t)||!Eo.has(t))&&re(e,"has",t),n}function ai(e){return re(e,"iterate",M(e)?"length":Re),Reflect.ownKeys(e)}const Vo={get:Gs,set:ni,deleteProperty:si,has:ii,ownKeys:ai},ri={get:ei,set(e,t){return!0},deleteProperty(e,t){return!0}},li=$({},Vo,{get:$s,set:oi}),Tn=e=>e,Qt=e=>Reflect.getPrototypeOf(e);function xt(e,t,n=!1,o=!1){e=e.__v_raw;const s=D(e),i=D(t);t!==i&&!n&&re(s,"get",t),!n&&re(s,"get",i);const{has:a}=Qt(s),l=o?Tn:n?En:yt;if(a.call(s,t))return l(e.get(t));if(a.call(s,i))return l(e.get(i));e!==s&&e.get(t)}function Ut(e,t=!1){const n=this.__v_raw,o=D(n),s=D(e);return e!==s&&!t&&re(o,"has",e),!t&&re(o,"has",s),e===s?n.has(e):n.has(e)||n.has(s)}function vt(e,t=!1){return e=e.__v_raw,!t&&re(D(e),"iterate",Re),Reflect.get(e,"size",e)}function to(e){e=D(e);const t=D(this);return Qt(t).has.call(t,e)||(t.add(e),Me(t,"add",e,e)),this}function no(e,t){t=D(t);const n=D(this),{has:o,get:s}=Qt(n);let i=o.call(n,e);i||(e=D(e),i=o.call(n,e));const a=s.call(n,e);return n.set(e,t),i?bt(t,a)&&Me(n,"set",e,t):Me(n,"add",e,t),this}function oo(e){const t=D(this),{has:n,get:o}=Qt(t);let s=n.call(t,e);s||(e=D(e),s=n.call(t,e)),o&&o.call(t,e);const i=t.delete(e);return s&&Me(t,"delete",e,void 0),i}function so(){const e=D(this),t=e.size!==0,n=e.clear();return t&&Me(e,"clear",void 0,void 0),n}function Mt(e,t){return function(o,s){const i=this,a=i.__v_raw,l=D(a),c=t?Tn:e?En:yt;return!e&&re(l,"iterate",Re),a.forEach((f,g)=>o.call(s,c(f),c(g),i))}}function St(e,t,n){return function(...o){const s=this.__v_raw,i=D(s),a=et(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,f=s[e](...o),g=n?Tn:t?En:yt;return!t&&re(i,"iterate",c?hn:Re),{next(){const{value:w,done:_}=f.next();return _?{value:w,done:_}:{value:l?[g(w[0]),g(w[1])]:g(w),done:_}},[Symbol.iterator](){return this}}}}function Fe(e){return function(...t){return e==="delete"?!1:this}}function ci(){const e={get(i){return xt(this,i)},get size(){return vt(this)},has:Ut,add:to,set:no,delete:oo,clear:so,forEach:Mt(!1,!1)},t={get(i){return xt(this,i,!1,!0)},get size(){return vt(this)},has:Ut,add:to,set:no,delete:oo,clear:so,forEach:Mt(!1,!0)},n={get(i){return xt(this,i,!0)},get size(){return vt(this,!0)},has(i){return Ut.call(this,i,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Mt(!0,!1)},o={get(i){return xt(this,i,!0,!0)},get size(){return vt(this,!0)},has(i){return Ut.call(this,i,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Mt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=St(i,!1,!1),n[i]=St(i,!0,!1),t[i]=St(i,!1,!0),o[i]=St(i,!0,!0)}),[e,n,t,o]}const[hi,fi,di,ui]=ci();function In(e,t){const n=t?e?ui:di:e?fi:hi;return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(H(n,s)&&s in o?n:o,s,i)}const pi={get:In(!1,!1)},mi={get:In(!1,!0)},gi={get:In(!0,!1)},Ro=new WeakMap,Qo=new WeakMap,Wo=new WeakMap,bi=new WeakMap;function ki(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yi(e){return e.__v_skip||!Object.isExtensible(e)?0:ki(Qs(e))}function Bn(e){return kt(e)?e:Nn(e,!1,Vo,pi,Ro)}function wi(e){return Nn(e,!1,li,mi,Qo)}function Ko(e){return Nn(e,!0,ri,gi,Wo)}function Nn(e,t,n,o,s){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=yi(e);if(a===0)return e;const l=new Proxy(e,a===2?o:n);return s.set(e,l),l}function tt(e){return kt(e)?tt(e.__v_raw):!!(e&&e.__v_isReactive)}function kt(e){return!!(e&&e.__v_isReadonly)}function Xo(e){return!!(e&&e.__v_isShallow)}function qo(e){return tt(e)||kt(e)}function D(e){const t=e&&e.__v_raw;return t?D(t):e}function Zo(e){return Ht(e,"__v_skip",!0),e}const yt=e=>X(e)?Bn(e):e,En=e=>X(e)?Ko(e):e;function zo(e){Ae&&me&&(e=D(e),No(e.dep||(e.dep=An())))}function Jo(e,t){e=D(e),e.dep&&fn(e.dep)}function G(e){return!!(e&&e.__v_isRef===!0)}function ji(e){return _i(e,!1)}function _i(e,t){return G(e)?e:new xi(e,t)}class xi{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:D(t),this._value=n?t:yt(t)}get value(){return zo(this),this._value}set value(t){t=this.__v_isShallow?t:D(t),bt(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:yt(t),Jo(this))}}function dn(e){return G(e)?e.value:e}const Ui={get:(e,t,n)=>dn(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return G(s)&&!G(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function Yo(e){return tt(e)?e:new Proxy(e,Ui)}class vi{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Cn(t,()=>{this._dirty||(this._dirty=!0,Jo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=D(this);return zo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Mi(e,t,n=!1){let o,s;const i=F(e);return i?(o=e,s=be):(o=e.get,s=e.set),new vi(o,s,i||!s,n)}function Ce(e,t,n,o){let s;try{s=o?e(...o):e()}catch(i){Wt(i,t,n)}return s}function fe(e,t,n,o){if(F(e)){const i=Ce(e,t,n,o);return i&&Po(i)&&i.catch(a=>{Wt(a,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(fe(e[i],t,n,o));return s}function Wt(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const a=t.proxy,l=n;for(;i;){const f=i.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](e,a,l)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Ce(c,null,10,[e,a,l]);return}}Si(e,n,s,o)}function Si(e,t,n,o=!0){console.error(e)}let At=!1,un=!1;const ae=[];let Ue=0;const pt=[];let ut=null,Ye=0;const mt=[];let Pe=null,Ge=0;const Go=Promise.resolve();let On=null,pn=null;function Li(e){const t=On||Go;return e?t.then(this?e.bind(this):e):t}function Fi(e){let t=Ue+1,n=ae.length;for(;t<n;){const o=t+n>>>1;wt(ae[o])<e?t=o+1:n=o}return t}function $o(e){(!ae.length||!ae.includes(e,At&&e.allowRecurse?Ue+1:Ue))&&e!==pn&&(e.id==null?ae.push(e):ae.splice(Fi(e.id),0,e),es())}function es(){!At&&!un&&(un=!0,On=Go.then(os))}function Pi(e){const t=ae.indexOf(e);t>Ue&&ae.splice(t,1)}function ts(e,t,n,o){M(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?o+1:o))&&n.push(e),es()}function Hi(e){ts(e,ut,pt,Ye)}function Ai(e){ts(e,Pe,mt,Ge)}function Vn(e,t=null){if(pt.length){for(pn=t,ut=[...new Set(pt)],pt.length=0,Ye=0;Ye<ut.length;Ye++)ut[Ye]();ut=null,Ye=0,pn=null,Vn(e,t)}}function ns(e){if(mt.length){const t=[...new Set(mt)];if(mt.length=0,Pe){Pe.push(...t);return}for(Pe=t,Pe.sort((n,o)=>wt(n)-wt(o)),Ge=0;Ge<Pe.length;Ge++)Pe[Ge]();Pe=null,Ge=0}}const wt=e=>e.id==null?1/0:e.id;function os(e){un=!1,At=!0,Vn(e),ae.sort((n,o)=>wt(n)-wt(o));const t=be;try{for(Ue=0;Ue<ae.length;Ue++){const n=ae[Ue];n&&n.active!==!1&&Ce(n,null,14)}}finally{Ue=0,ae.length=0,ns(),At=!1,On=null,(ae.length||pt.length||mt.length)&&os(e)}}function Ci(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||E;let s=n;const i=t.startsWith("update:"),a=i&&t.slice(7);if(a&&a in o){const g=`${a==="modelValue"?"model":a}Modifiers`,{number:w,trim:_}=o[g]||E;_?s=n.map(L=>L.trim()):w&&(s=n.map(Do))}let l,c=o[l=en(t)]||o[l=en(nt(t))];!c&&i&&(c=o[l=en(st(t))]),c&&fe(c,e,6,s);const f=o[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,fe(f,e,6,s)}}function ss(e,t,n=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!F(e)){const c=f=>{const g=ss(f,t,!0);g&&(l=!0,$(a,g))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(o.set(e,null),null):(M(i)?i.forEach(c=>a[c]=null):$(a,i),o.set(e,a),a)}function Kt(e,t){return!e||!Et(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,st(t))||H(e,t))}let ge=null,is=null;function Ct(e){const t=ge;return ge=e,is=e&&e.type.__scopeId||null,t}function Di(e,t=ge,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&mo(-1);const i=Ct(t),a=e(...s);return Ct(i),o._d&&mo(1),a};return o._n=!0,o._c=!0,o._d=!0,o}function tn(e){const{type:t,vnode:n,proxy:o,withProxy:s,props:i,propsOptions:[a],slots:l,attrs:c,emit:f,render:g,renderCache:w,data:_,setupState:L,ctx:I,inheritAttrs:C}=e;let P,T;const le=Ct(e);try{if(n.shapeFlag&4){const K=s||o;P=je(g.call(K,K,w,i,L,_,I)),T=c}else{const K=t;P=je(K.length>1?K(i,{attrs:c,slots:l,emit:f}):K(i,null)),T=t.props?c:Ti(c)}}catch(K){gt.length=0,Wt(K,e,1),P=We(ve)}let z=P;if(T&&C!==!1){const K=Object.keys(T),{shapeFlag:oe}=z;K.length&&oe&7&&(a&&K.some(Ln)&&(T=Ii(T,a)),z=Xe(z,T))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),P=z,Ct(le),P}const Ti=e=>{let t;for(const n in e)(n==="class"||n==="style"||Et(n))&&((t||(t={}))[n]=e[n]);return t},Ii=(e,t)=>{const n={};for(const o in e)(!Ln(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Bi(e,t,n){const{props:o,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?io(o,a,f):!!a;if(c&8){const g=t.dynamicProps;for(let w=0;w<g.length;w++){const _=g[w];if(a[_]!==o[_]&&!Kt(f,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:o===a?!1:o?a?io(o,a,f):!0:!!a;return!1}function io(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const i=o[s];if(t[i]!==e[i]&&!Kt(n,i))return!0}return!1}function Ni({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ei=e=>e.__isSuspense;function Oi(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Ai(e)}function Vi(e,t){if(Y){let n=Y.provides;const o=Y.parent&&Y.parent.provides;o===n&&(n=Y.provides=Object.create(o)),n[e]=t}}function nn(e,t,n=!1){const o=Y||ge;if(o){const s=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&F(t)?t.call(o.proxy):t}}const ao={};function on(e,t,n){return as(e,t,n)}function as(e,t,{immediate:n,deep:o,flush:s,onTrack:i,onTrigger:a}=E){const l=Y;let c,f=!1,g=!1;if(G(e)?(c=()=>e.value,f=Xo(e)):tt(e)?(c=()=>e,o=!0):M(e)?(g=!0,f=e.some(tt),c=()=>e.map(T=>{if(G(T))return T.value;if(tt(T))return Ve(T);if(F(T))return Ce(T,l,2)})):F(e)?t?c=()=>Ce(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return w&&w(),fe(e,l,3,[_])}:c=be,t&&o){const T=c;c=()=>Ve(T())}let w,_=T=>{w=P.onStop=()=>{Ce(T,l,4)}};if(jt)return _=be,t?n&&fe(t,l,3,[c(),g?[]:void 0,_]):c(),be;let L=g?[]:ao;const I=()=>{if(!!P.active)if(t){const T=P.run();(o||f||(g?T.some((le,z)=>bt(le,L[z])):bt(T,L)))&&(w&&w(),fe(t,l,3,[T,L===ao?void 0:L,_]),L=T)}else P.run()};I.allowRecurse=!!t;let C;s==="sync"?C=I:s==="post"?C=()=>ne(I,l&&l.suspense):C=()=>{!l||l.isMounted?Hi(I):I()};const P=new Cn(c,C);return t?n?I():L=P.run():s==="post"?ne(P.run.bind(P),l&&l.suspense):P.run(),()=>{P.stop(),l&&l.scope&&Fn(l.scope.effects,P)}}function Ri(e,t,n){const o=this.proxy,s=Z(e)?e.includes(".")?rs(o,e):()=>o[e]:e.bind(o,o);let i;F(t)?i=t:(i=t.handler,n=t);const a=Y;ot(this);const l=as(s,i.bind(o),n);return a?ot(a):Ke(),l}function rs(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function Ve(e,t){if(!X(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),G(e))Ve(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)Ve(e[n],t);else if(Ot(e)||et(e))e.forEach(n=>{Ve(n,t)});else if(Ao(e))for(const n in e)Ve(e[n],t);return e}function Qi(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fs(()=>{e.isMounted=!0}),ds(()=>{e.isUnmounting=!0}),e}const ce=[Function,Array],Wi={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ce,onEnter:ce,onAfterEnter:ce,onEnterCancelled:ce,onBeforeLeave:ce,onLeave:ce,onAfterLeave:ce,onLeaveCancelled:ce,onBeforeAppear:ce,onAppear:ce,onAfterAppear:ce,onAppearCancelled:ce},setup(e,{slots:t}){const n=Ha(),o=Qi();let s;return()=>{const i=t.default&&cs(t.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){for(const C of i)if(C.type!==ve){a=C;break}}const l=D(e),{mode:c}=l;if(o.isLeaving)return sn(a);const f=ro(a);if(!f)return sn(a);const g=mn(f,l,o,n);gn(f,g);const w=n.subTree,_=w&&ro(w);let L=!1;const{getTransitionKey:I}=f.type;if(I){const C=I();s===void 0?s=C:C!==s&&(s=C,L=!0)}if(_&&_.type!==ve&&(!Ee(f,_)||L)){const C=mn(_,l,o,n);if(gn(_,C),c==="out-in")return o.isLeaving=!0,C.afterLeave=()=>{o.isLeaving=!1,n.update()},sn(a);c==="in-out"&&f.type!==ve&&(C.delayLeave=(P,T,le)=>{const z=ls(o,_);z[String(_.key)]=_,P._leaveCb=()=>{T(),P._leaveCb=void 0,delete g.delayedLeave},g.delayedLeave=le})}return a}}},Ki=Wi;function ls(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function mn(e,t,n,o){const{appear:s,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:g,onBeforeLeave:w,onLeave:_,onAfterLeave:L,onLeaveCancelled:I,onBeforeAppear:C,onAppear:P,onAfterAppear:T,onAppearCancelled:le}=t,z=String(e.key),K=ls(n,e),oe=(B,J)=>{B&&fe(B,o,9,J)},Te={mode:i,persisted:a,beforeEnter(B){let J=l;if(!n.isMounted)if(s)J=C||l;else return;B._leaveCb&&B._leaveCb(!0);const q=K[z];q&&Ee(e,q)&&q.el._leaveCb&&q.el._leaveCb(),oe(J,[B])},enter(B){let J=c,q=f,de=g;if(!n.isMounted)if(s)J=P||c,q=T||f,de=le||g;else return;let se=!1;const ue=B._enterCb=qe=>{se||(se=!0,qe?oe(de,[B]):oe(q,[B]),Te.delayedLeave&&Te.delayedLeave(),B._enterCb=void 0)};J?(J(B,ue),J.length<=1&&ue()):ue()},leave(B,J){const q=String(e.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return J();oe(w,[B]);let de=!1;const se=B._leaveCb=ue=>{de||(de=!0,J(),ue?oe(I,[B]):oe(L,[B]),B._leaveCb=void 0,K[q]===e&&delete K[q])};K[q]=e,_?(_(B,se),_.length<=1&&se()):se()},clone(B){return mn(B,t,n,o)}};return Te}function sn(e){if(Xt(e))return e=Xe(e),e.children=null,e}function ro(e){return Xt(e)?e.children?e.children[0]:void 0:e}function gn(e,t){e.shapeFlag&6&&e.component?gn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function cs(e,t=!1,n){let o=[],s=0;for(let i=0;i<e.length;i++){let a=e[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===he?(a.patchFlag&128&&s++,o=o.concat(cs(a.children,t,l))):(t||a.type!==ve)&&o.push(l!=null?Xe(a,{key:l}):a)}if(s>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}function Xi(e){return F(e)?{setup:e,name:e.name}:e}const bn=e=>!!e.type.__asyncLoader,Xt=e=>e.type.__isKeepAlive;function qi(e,t){hs(e,"a",t)}function Zi(e,t){hs(e,"da",t)}function hs(e,t,n=Y){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(qt(t,o,n),n){let s=n.parent;for(;s&&s.parent;)Xt(s.parent.vnode)&&zi(o,t,n,s),s=s.parent}}function zi(e,t,n,o){const s=qt(t,e,o,!0);us(()=>{Fn(o[t],s)},n)}function qt(e,t,n=Y,o=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;it(),ot(n);const l=fe(t,n,e,a);return Ke(),at(),l});return o?s.unshift(i):s.push(i),i}}const Se=e=>(t,n=Y)=>(!jt||e==="sp")&&qt(e,t,n),Ji=Se("bm"),fs=Se("m"),Yi=Se("bu"),Gi=Se("u"),ds=Se("bum"),us=Se("um"),$i=Se("sp"),ea=Se("rtg"),ta=Se("rtc");function na(e,t=Y){qt("ec",e,t)}let kn=!0;function oa(e){const t=ms(e),n=e.proxy,o=e.ctx;kn=!1,t.beforeCreate&&lo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:f,created:g,beforeMount:w,mounted:_,beforeUpdate:L,updated:I,activated:C,deactivated:P,beforeDestroy:T,beforeUnmount:le,destroyed:z,unmounted:K,render:oe,renderTracked:Te,renderTriggered:B,errorCaptured:J,serverPrefetch:q,expose:de,inheritAttrs:se,components:ue,directives:qe,filters:Kn}=t;if(f&&sa(f,o,null,e.appContext.config.unwrapInjectedRef),a)for(const W in a){const V=a[W];F(V)&&(o[W]=V.bind(n))}if(s){const W=s.call(n,n);X(W)&&(e.data=Bn(W))}if(kn=!0,i)for(const W in i){const V=i[W],_e=F(V)?V.bind(n,n):F(V.get)?V.get.bind(n,n):be,Yt=!F(V)&&F(V.set)?V.set.bind(n):be,rt=Ss({get:_e,set:Yt});Object.defineProperty(o,W,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ze=>rt.value=Ze})}if(l)for(const W in l)ps(l[W],o,n,W);if(c){const W=F(c)?c.call(n):c;Reflect.ownKeys(W).forEach(V=>{Vi(V,W[V])})}g&&lo(g,e,"c");function te(W,V){M(V)?V.forEach(_e=>W(_e.bind(n))):V&&W(V.bind(n))}if(te(Ji,w),te(fs,_),te(Yi,L),te(Gi,I),te(qi,C),te(Zi,P),te(na,J),te(ta,Te),te(ea,B),te(ds,le),te(us,K),te($i,q),M(de))if(de.length){const W=e.exposed||(e.exposed={});de.forEach(V=>{Object.defineProperty(W,V,{get:()=>n[V],set:_e=>n[V]=_e})})}else e.exposed||(e.exposed={});oe&&e.render===be&&(e.render=oe),se!=null&&(e.inheritAttrs=se),ue&&(e.components=ue),qe&&(e.directives=qe)}function sa(e,t,n=be,o=!1){M(e)&&(e=yn(e));for(const s in e){const i=e[s];let a;X(i)?"default"in i?a=nn(i.from||s,i.default,!0):a=nn(i.from||s):a=nn(i),G(a)&&o?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[s]=a}}function lo(e,t,n){fe(M(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function ps(e,t,n,o){const s=o.includes(".")?rs(n,o):()=>n[o];if(Z(e)){const i=t[e];F(i)&&on(s,i)}else if(F(e))on(s,e.bind(n));else if(X(e))if(M(e))e.forEach(i=>ps(i,t,n,o));else{const i=F(e.handler)?e.handler.bind(n):t[e.handler];F(i)&&on(s,i,e)}}function ms(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!o?c=t:(c={},s.length&&s.forEach(f=>Dt(c,f,a,!0)),Dt(c,t,a)),i.set(t,c),c}function Dt(e,t,n,o=!1){const{mixins:s,extends:i}=t;i&&Dt(e,i,n,!0),s&&s.forEach(a=>Dt(e,a,n,!0));for(const a in t)if(!(o&&a==="expose")){const l=ia[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const ia={data:co,props:Ne,emits:Ne,methods:Ne,computed:Ne,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:Ne,directives:Ne,watch:ra,provide:co,inject:aa};function co(e,t){return t?e?function(){return $(F(e)?e.call(this,this):e,F(t)?t.call(this,this):t)}:t:e}function aa(e,t){return Ne(yn(e),yn(t))}function yn(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ee(e,t){return e?[...new Set([].concat(e,t))]:t}function Ne(e,t){return e?$($(Object.create(null),e),t):t}function ra(e,t){if(!e)return t;if(!t)return e;const n=$(Object.create(null),e);for(const o in t)n[o]=ee(e[o],t[o]);return n}function la(e,t,n,o=!1){const s={},i={};Ht(i,Zt,1),e.propsDefaults=Object.create(null),gs(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=o?s:wi(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function ca(e,t,n,o){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=D(s),[c]=e.propsOptions;let f=!1;if((o||a>0)&&!(a&16)){if(a&8){const g=e.vnode.dynamicProps;for(let w=0;w<g.length;w++){let _=g[w];if(Kt(e.emitsOptions,_))continue;const L=t[_];if(c)if(H(i,_))L!==i[_]&&(i[_]=L,f=!0);else{const I=nt(_);s[I]=wn(c,l,I,L,e,!1)}else L!==i[_]&&(i[_]=L,f=!0)}}}else{gs(e,t,s,i)&&(f=!0);let g;for(const w in l)(!t||!H(t,w)&&((g=st(w))===w||!H(t,g)))&&(c?n&&(n[w]!==void 0||n[g]!==void 0)&&(s[w]=wn(c,l,w,void 0,e,!0)):delete s[w]);if(i!==l)for(const w in i)(!t||!H(t,w)&&!0)&&(delete i[w],f=!0)}f&&Me(e,"set","$attrs")}function gs(e,t,n,o){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(Lt(c))continue;const f=t[c];let g;s&&H(s,g=nt(c))?!i||!i.includes(g)?n[g]=f:(l||(l={}))[g]=f:Kt(e.emitsOptions,c)||(!(c in o)||f!==o[c])&&(o[c]=f,a=!0)}if(i){const c=D(n),f=l||E;for(let g=0;g<i.length;g++){const w=i[g];n[w]=wn(s,c,w,f[w],e,!H(f,w))}}return a}function wn(e,t,n,o,s,i){const a=e[n];if(a!=null){const l=H(a,"default");if(l&&o===void 0){const c=a.default;if(a.type!==Function&&F(c)){const{propsDefaults:f}=s;n in f?o=f[n]:(ot(s),o=f[n]=c.call(null,t),Ke())}else o=c}a[0]&&(i&&!l?o=!1:a[1]&&(o===""||o===st(n))&&(o=!0))}return o}function bs(e,t,n=!1){const o=t.propsCache,s=o.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!F(e)){const g=w=>{c=!0;const[_,L]=bs(w,t,!0);$(a,_),L&&l.push(...L)};!n&&t.mixins.length&&t.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!i&&!c)return o.set(e,$e),$e;if(M(i))for(let g=0;g<i.length;g++){const w=nt(i[g]);ho(w)&&(a[w]=E)}else if(i)for(const g in i){const w=nt(g);if(ho(w)){const _=i[g],L=a[w]=M(_)||F(_)?{type:_}:_;if(L){const I=po(Boolean,L.type),C=po(String,L.type);L[0]=I>-1,L[1]=C<0||I<C,(I>-1||H(L,"default"))&&l.push(w)}}}const f=[a,l];return o.set(e,f),f}function ho(e){return e[0]!=="$"}function fo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function uo(e,t){return fo(e)===fo(t)}function po(e,t){return M(t)?t.findIndex(n=>uo(n,e)):F(t)&&uo(t,e)?0:-1}const ks=e=>e[0]==="_"||e==="$stable",Rn=e=>M(e)?e.map(je):[je(e)],ha=(e,t,n)=>{const o=Di((...s)=>Rn(t(...s)),n);return o._c=!1,o},ys=(e,t,n)=>{const o=e._ctx;for(const s in e){if(ks(s))continue;const i=e[s];if(F(i))t[s]=ha(s,i,o);else if(i!=null){const a=Rn(i);t[s]=()=>a}}},ws=(e,t)=>{const n=Rn(t);e.slots.default=()=>n},fa=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=D(t),Ht(t,"_",n)):ys(t,e.slots={})}else e.slots={},t&&ws(e,t);Ht(e.slots,Zt,1)},da=(e,t,n)=>{const{vnode:o,slots:s}=e;let i=!0,a=E;if(o.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:($(s,t),!n&&l===1&&delete s._):(i=!t.$stable,ys(t,s)),a=t}else t&&(ws(e,t),a={default:1});if(i)for(const l in s)!ks(l)&&!(l in a)&&delete s[l]};function ua(e,t){const n=ge;if(n===null)return e;const o=zt(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[a,l,c,f=E]=t[i];F(a)&&(a={mounted:a,updated:a}),a.deep&&Ve(l),s.push({dir:a,instance:o,value:l,oldValue:void 0,arg:c,modifiers:f})}return e}function Ie(e,t,n,o){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[o];c&&(it(),fe(c,n,8,[e.el,l,e,t]),at())}}function js(){return{app:null,config:{isNativeTag:Os,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pa=0;function ma(e,t){return function(o,s=null){F(o)||(o=Object.assign({},o)),s!=null&&!X(s)&&(s=null);const i=js(),a=new Set;let l=!1;const c=i.app={_uid:pa++,_component:o,_props:s,_container:null,_context:i,_instance:null,version:Ba,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&F(f.install)?(a.add(f),f.install(c,...g)):F(f)&&(a.add(f),f(c,...g))),c},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),c},component(f,g){return g?(i.components[f]=g,c):i.components[f]},directive(f,g){return g?(i.directives[f]=g,c):i.directives[f]},mount(f,g,w){if(!l){const _=We(o,s);return _.appContext=i,g&&t?t(_,f):e(_,f,w),l=!0,c._container=f,f.__vue_app__=c,zt(_.component)||_.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,g){return i.provides[f]=g,c}};return c}}function jn(e,t,n,o,s=!1){if(M(e)){e.forEach((_,L)=>jn(_,t&&(M(t)?t[L]:t),n,o,s));return}if(bn(o)&&!s)return;const i=o.shapeFlag&4?zt(o.component)||o.component.proxy:o.el,a=s?null:i,{i:l,r:c}=e,f=t&&t.r,g=l.refs===E?l.refs={}:l.refs,w=l.setupState;if(f!=null&&f!==c&&(Z(f)?(g[f]=null,H(w,f)&&(w[f]=null)):G(f)&&(f.value=null)),F(c))Ce(c,l,12,[a,g]);else{const _=Z(c),L=G(c);if(_||L){const I=()=>{if(e.f){const C=_?g[c]:c.value;s?M(C)&&Fn(C,i):M(C)?C.includes(i)||C.push(i):_?(g[c]=[i],H(w,c)&&(w[c]=g[c])):(c.value=[i],e.k&&(g[e.k]=c.value))}else _?(g[c]=a,H(w,c)&&(w[c]=a)):G(c)&&(c.value=a,e.k&&(g[e.k]=a))};a?(I.id=-1,ne(I,n)):I()}}}const ne=Oi;function ga(e){return ba(e)}function ba(e,t){const n=Xs();n.__VUE__=!0;const{insert:o,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:f,setElementText:g,parentNode:w,nextSibling:_,setScopeId:L=be,cloneNode:I,insertStaticContent:C}=e,P=(r,h,d,p=null,u=null,k=null,j=!1,b=null,y=!!h.dynamicChildren)=>{if(r===h)return;r&&!Ee(r,h)&&(p=_t(r),Le(r,u,k,!0),r=null),h.patchFlag===-2&&(y=!1,h.dynamicChildren=null);const{type:m,ref:U,shapeFlag:x}=h;switch(m){case Qn:T(r,h,d,p);break;case ve:le(r,h,d,p);break;case an:r==null&&z(h,d,p,j);break;case he:qe(r,h,d,p,u,k,j,b,y);break;default:x&1?Te(r,h,d,p,u,k,j,b,y):x&6?Kn(r,h,d,p,u,k,j,b,y):(x&64||x&128)&&m.process(r,h,d,p,u,k,j,b,y,ze)}U!=null&&u&&jn(U,r&&r.ref,k,h||r,!h)},T=(r,h,d,p)=>{if(r==null)o(h.el=l(h.children),d,p);else{const u=h.el=r.el;h.children!==r.children&&f(u,h.children)}},le=(r,h,d,p)=>{r==null?o(h.el=c(h.children||""),d,p):h.el=r.el},z=(r,h,d,p)=>{[r.el,r.anchor]=C(r.children,h,d,p,r.el,r.anchor)},K=({el:r,anchor:h},d,p)=>{let u;for(;r&&r!==h;)u=_(r),o(r,d,p),r=u;o(h,d,p)},oe=({el:r,anchor:h})=>{let d;for(;r&&r!==h;)d=_(r),s(r),r=d;s(h)},Te=(r,h,d,p,u,k,j,b,y)=>{j=j||h.type==="svg",r==null?B(h,d,p,u,k,j,b,y):de(r,h,u,k,j,b,y)},B=(r,h,d,p,u,k,j,b)=>{let y,m;const{type:U,props:x,shapeFlag:v,transition:S,patchFlag:A,dirs:Q}=r;if(r.el&&I!==void 0&&A===-1)y=r.el=I(r.el);else{if(y=r.el=a(r.type,k,x&&x.is,x),v&8?g(y,r.children):v&16&&q(r.children,y,null,p,u,k&&U!=="foreignObject",j,b),Q&&Ie(r,null,p,"created"),x){for(const R in x)R!=="value"&&!Lt(R)&&i(y,R,null,x[R],k,r.children,p,u,xe);"value"in x&&i(y,"value",null,x.value),(m=x.onVnodeBeforeMount)&&ye(m,p,r)}J(y,r,r.scopeId,j,p)}Q&&Ie(r,null,p,"beforeMount");const N=(!u||u&&!u.pendingBranch)&&S&&!S.persisted;N&&S.beforeEnter(y),o(y,h,d),((m=x&&x.onVnodeMounted)||N||Q)&&ne(()=>{m&&ye(m,p,r),N&&S.enter(y),Q&&Ie(r,null,p,"mounted")},u)},J=(r,h,d,p,u)=>{if(d&&L(r,d),p)for(let k=0;k<p.length;k++)L(r,p[k]);if(u){let k=u.subTree;if(h===k){const j=u.vnode;J(r,j,j.scopeId,j.slotScopeIds,u.parent)}}},q=(r,h,d,p,u,k,j,b,y=0)=>{for(let m=y;m<r.length;m++){const U=r[m]=b?He(r[m]):je(r[m]);P(null,U,h,d,p,u,k,j,b)}},de=(r,h,d,p,u,k,j)=>{const b=h.el=r.el;let{patchFlag:y,dynamicChildren:m,dirs:U}=h;y|=r.patchFlag&16;const x=r.props||E,v=h.props||E;let S;d&&Be(d,!1),(S=v.onVnodeBeforeUpdate)&&ye(S,d,h,r),U&&Ie(h,r,d,"beforeUpdate"),d&&Be(d,!0);const A=u&&h.type!=="foreignObject";if(m?se(r.dynamicChildren,m,b,d,p,A,k):j||_e(r,h,b,null,d,p,A,k,!1),y>0){if(y&16)ue(b,h,x,v,d,p,u);else if(y&2&&x.class!==v.class&&i(b,"class",null,v.class,u),y&4&&i(b,"style",x.style,v.style,u),y&8){const Q=h.dynamicProps;for(let N=0;N<Q.length;N++){const R=Q[N],pe=x[R],Je=v[R];(Je!==pe||R==="value")&&i(b,R,pe,Je,u,r.children,d,p,xe)}}y&1&&r.children!==h.children&&g(b,h.children)}else!j&&m==null&&ue(b,h,x,v,d,p,u);((S=v.onVnodeUpdated)||U)&&ne(()=>{S&&ye(S,d,h,r),U&&Ie(h,r,d,"updated")},p)},se=(r,h,d,p,u,k,j)=>{for(let b=0;b<h.length;b++){const y=r[b],m=h[b],U=y.el&&(y.type===he||!Ee(y,m)||y.shapeFlag&70)?w(y.el):d;P(y,m,U,null,p,u,k,j,!0)}},ue=(r,h,d,p,u,k,j)=>{if(d!==p){for(const b in p){if(Lt(b))continue;const y=p[b],m=d[b];y!==m&&b!=="value"&&i(r,b,m,y,j,h.children,u,k,xe)}if(d!==E)for(const b in d)!Lt(b)&&!(b in p)&&i(r,b,d[b],null,j,h.children,u,k,xe);"value"in p&&i(r,"value",d.value,p.value)}},qe=(r,h,d,p,u,k,j,b,y)=>{const m=h.el=r?r.el:l(""),U=h.anchor=r?r.anchor:l("");let{patchFlag:x,dynamicChildren:v,slotScopeIds:S}=h;S&&(b=b?b.concat(S):S),r==null?(o(m,d,p),o(U,d,p),q(h.children,d,U,u,k,j,b,y)):x>0&&x&64&&v&&r.dynamicChildren?(se(r.dynamicChildren,v,d,u,k,j,b),(h.key!=null||u&&h===u.subTree)&&_s(r,h,!0)):_e(r,h,d,U,u,k,j,b,y)},Kn=(r,h,d,p,u,k,j,b,y)=>{h.slotScopeIds=b,r==null?h.shapeFlag&512?u.ctx.activate(h,d,p,j,y):Jt(h,d,p,u,k,j,y):te(r,h,y)},Jt=(r,h,d,p,u,k,j)=>{const b=r.component=Pa(r,p,u);if(Xt(r)&&(b.ctx.renderer=ze),Aa(b),b.asyncDep){if(u&&u.registerDep(b,W),!r.el){const y=b.subTree=We(ve);le(null,y,h,d)}return}W(b,r,h,d,u,k,j)},te=(r,h,d)=>{const p=h.component=r.component;if(Bi(r,h,d))if(p.asyncDep&&!p.asyncResolved){V(p,h,d);return}else p.next=h,Pi(p.update),p.update();else h.component=r.component,h.el=r.el,p.vnode=h},W=(r,h,d,p,u,k,j)=>{const b=()=>{if(r.isMounted){let{next:U,bu:x,u:v,parent:S,vnode:A}=r,Q=U,N;Be(r,!1),U?(U.el=A.el,V(r,U,j)):U=A,x&&Ft(x),(N=U.props&&U.props.onVnodeBeforeUpdate)&&ye(N,S,U,A),Be(r,!0);const R=tn(r),pe=r.subTree;r.subTree=R,P(pe,R,w(pe.el),_t(pe),r,u,k),U.el=R.el,Q===null&&Ni(r,R.el),v&&ne(v,u),(N=U.props&&U.props.onVnodeUpdated)&&ne(()=>ye(N,S,U,A),u)}else{let U;const{el:x,props:v}=h,{bm:S,m:A,parent:Q}=r,N=bn(h);if(Be(r,!1),S&&Ft(S),!N&&(U=v&&v.onVnodeBeforeMount)&&ye(U,Q,h),Be(r,!0),x&&$t){const R=()=>{r.subTree=tn(r),$t(x,r.subTree,r,u,null)};N?h.type.__asyncLoader().then(()=>!r.isUnmounted&&R()):R()}else{const R=r.subTree=tn(r);P(null,R,d,p,r,u,k),h.el=R.el}if(A&&ne(A,u),!N&&(U=v&&v.onVnodeMounted)){const R=h;ne(()=>ye(U,Q,R),u)}h.shapeFlag&256&&r.a&&ne(r.a,u),r.isMounted=!0,h=d=p=null}},y=r.effect=new Cn(b,()=>$o(r.update),r.scope),m=r.update=y.run.bind(y);m.id=r.uid,Be(r,!0),m()},V=(r,h,d)=>{h.component=r;const p=r.vnode.props;r.vnode=h,r.next=null,ca(r,h.props,p,d),da(r,h.children,d),it(),Vn(void 0,r.update),at()},_e=(r,h,d,p,u,k,j,b,y=!1)=>{const m=r&&r.children,U=r?r.shapeFlag:0,x=h.children,{patchFlag:v,shapeFlag:S}=h;if(v>0){if(v&128){rt(m,x,d,p,u,k,j,b,y);return}else if(v&256){Yt(m,x,d,p,u,k,j,b,y);return}}S&8?(U&16&&xe(m,u,k),x!==m&&g(d,x)):U&16?S&16?rt(m,x,d,p,u,k,j,b,y):xe(m,u,k,!0):(U&8&&g(d,""),S&16&&q(x,d,p,u,k,j,b,y))},Yt=(r,h,d,p,u,k,j,b,y)=>{r=r||$e,h=h||$e;const m=r.length,U=h.length,x=Math.min(m,U);let v;for(v=0;v<x;v++){const S=h[v]=y?He(h[v]):je(h[v]);P(r[v],S,d,null,u,k,j,b,y)}m>U?xe(r,u,k,!0,!1,x):q(h,d,p,u,k,j,b,y,x)},rt=(r,h,d,p,u,k,j,b,y)=>{let m=0;const U=h.length;let x=r.length-1,v=U-1;for(;m<=x&&m<=v;){const S=r[m],A=h[m]=y?He(h[m]):je(h[m]);if(Ee(S,A))P(S,A,d,null,u,k,j,b,y);else break;m++}for(;m<=x&&m<=v;){const S=r[x],A=h[v]=y?He(h[v]):je(h[v]);if(Ee(S,A))P(S,A,d,null,u,k,j,b,y);else break;x--,v--}if(m>x){if(m<=v){const S=v+1,A=S<U?h[S].el:p;for(;m<=v;)P(null,h[m]=y?He(h[m]):je(h[m]),d,A,u,k,j,b,y),m++}}else if(m>v)for(;m<=x;)Le(r[m],u,k,!0),m++;else{const S=m,A=m,Q=new Map;for(m=A;m<=v;m++){const ie=h[m]=y?He(h[m]):je(h[m]);ie.key!=null&&Q.set(ie.key,m)}let N,R=0;const pe=v-A+1;let Je=!1,Zn=0;const lt=new Array(pe);for(m=0;m<pe;m++)lt[m]=0;for(m=S;m<=x;m++){const ie=r[m];if(R>=pe){Le(ie,u,k,!0);continue}let ke;if(ie.key!=null)ke=Q.get(ie.key);else for(N=A;N<=v;N++)if(lt[N-A]===0&&Ee(ie,h[N])){ke=N;break}ke===void 0?Le(ie,u,k,!0):(lt[ke-A]=m+1,ke>=Zn?Zn=ke:Je=!0,P(ie,h[ke],d,null,u,k,j,b,y),R++)}const zn=Je?ka(lt):$e;for(N=zn.length-1,m=pe-1;m>=0;m--){const ie=A+m,ke=h[ie],Jn=ie+1<U?h[ie+1].el:p;lt[m]===0?P(null,ke,d,Jn,u,k,j,b,y):Je&&(N<0||m!==zn[N]?Ze(ke,d,Jn,2):N--)}}},Ze=(r,h,d,p,u=null)=>{const{el:k,type:j,transition:b,children:y,shapeFlag:m}=r;if(m&6){Ze(r.component.subTree,h,d,p);return}if(m&128){r.suspense.move(h,d,p);return}if(m&64){j.move(r,h,d,ze);return}if(j===he){o(k,h,d);for(let x=0;x<y.length;x++)Ze(y[x],h,d,p);o(r.anchor,h,d);return}if(j===an){K(r,h,d);return}if(p!==2&&m&1&&b)if(p===0)b.beforeEnter(k),o(k,h,d),ne(()=>b.enter(k),u);else{const{leave:x,delayLeave:v,afterLeave:S}=b,A=()=>o(k,h,d),Q=()=>{x(k,()=>{A(),S&&S()})};v?v(k,A,Q):Q()}else o(k,h,d)},Le=(r,h,d,p=!1,u=!1)=>{const{type:k,props:j,ref:b,children:y,dynamicChildren:m,shapeFlag:U,patchFlag:x,dirs:v}=r;if(b!=null&&jn(b,null,d,r,!0),U&256){h.ctx.deactivate(r);return}const S=U&1&&v,A=!bn(r);let Q;if(A&&(Q=j&&j.onVnodeBeforeUnmount)&&ye(Q,h,r),U&6)Hs(r.component,d,p);else{if(U&128){r.suspense.unmount(d,p);return}S&&Ie(r,null,h,"beforeUnmount"),U&64?r.type.remove(r,h,d,u,ze,p):m&&(k!==he||x>0&&x&64)?xe(m,h,d,!1,!0):(k===he&&x&384||!u&&U&16)&&xe(y,h,d),p&&Xn(r)}(A&&(Q=j&&j.onVnodeUnmounted)||S)&&ne(()=>{Q&&ye(Q,h,r),S&&Ie(r,null,h,"unmounted")},d)},Xn=r=>{const{type:h,el:d,anchor:p,transition:u}=r;if(h===he){Ps(d,p);return}if(h===an){oe(r);return}const k=()=>{s(d),u&&!u.persisted&&u.afterLeave&&u.afterLeave()};if(r.shapeFlag&1&&u&&!u.persisted){const{leave:j,delayLeave:b}=u,y=()=>j(d,k);b?b(r.el,k,y):y()}else k()},Ps=(r,h)=>{let d;for(;r!==h;)d=_(r),s(r),r=d;s(h)},Hs=(r,h,d)=>{const{bum:p,scope:u,update:k,subTree:j,um:b}=r;p&&Ft(p),u.stop(),k&&(k.active=!1,Le(j,r,h,d)),b&&ne(b,h),ne(()=>{r.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&r.asyncDep&&!r.asyncResolved&&r.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},xe=(r,h,d,p=!1,u=!1,k=0)=>{for(let j=k;j<r.length;j++)Le(r[j],h,d,p,u)},_t=r=>r.shapeFlag&6?_t(r.component.subTree):r.shapeFlag&128?r.suspense.next():_(r.anchor||r.el),qn=(r,h,d)=>{r==null?h._vnode&&Le(h._vnode,null,null,!0):P(h._vnode||null,r,h,null,null,null,d),ns(),h._vnode=r},ze={p:P,um:Le,m:Ze,r:Xn,mt:Jt,mc:q,pc:_e,pbc:se,n:_t,o:e};let Gt,$t;return t&&([Gt,$t]=t(ze)),{render:qn,hydrate:Gt,createApp:ma(qn,Gt)}}function Be({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function _s(e,t,n=!1){const o=e.children,s=t.children;if(M(o)&&M(s))for(let i=0;i<o.length;i++){const a=o[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=He(s[i]),l.el=a.el),n||_s(a,l))}}function ka(e){const t=e.slice(),n=[0];let o,s,i,a,l;const c=e.length;for(o=0;o<c;o++){const f=e[o];if(f!==0){if(s=n[n.length-1],e[s]<f){t[o]=s,n.push(o);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<f?i=l+1:a=l;f<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}const ya=e=>e.__isTeleport,wa=Symbol(),he=Symbol(void 0),Qn=Symbol(void 0),ve=Symbol(void 0),an=Symbol(void 0),gt=[];let Qe=null;function ht(e=!1){gt.push(Qe=e?null:[])}function ja(){gt.pop(),Qe=gt[gt.length-1]||null}let Tt=1;function mo(e){Tt+=e}function _a(e){return e.dynamicChildren=Tt>0?Qe||$e:null,ja(),Tt>0&&Qe&&Qe.push(e),e}function ft(e,t,n,o,s,i){return _a(O(e,t,n,o,s,i,!0))}function xa(e){return e?e.__v_isVNode===!0:!1}function Ee(e,t){return e.type===t.type&&e.key===t.key}const Zt="__vInternal",xs=({key:e})=>e!=null?e:null,Pt=({ref:e,ref_key:t,ref_for:n})=>e!=null?Z(e)||G(e)||F(e)?{i:ge,r:e,k:t,f:!!n}:e:null;function O(e,t=null,n=null,o=0,s=null,i=e===he?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&xs(t),ref:t&&Pt(t),scopeId:is,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(Wn(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Z(n)?8:16),Tt>0&&!a&&Qe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Qe.push(c),c}const We=Ua;function Ua(e,t=null,n=null,o=0,s=null,i=!1){if((!e||e===wa)&&(e=ve),xa(e)){const l=Xe(e,t,!0);return n&&Wn(l,n),l}if(Ia(e)&&(e=e.__vccOpts),t){t=va(t);let{class:l,style:c}=t;l&&!Z(l)&&(t.class=Sn(l)),X(c)&&(qo(c)&&!M(c)&&(c=$({},c)),t.style=Mn(c))}const a=Z(e)?1:Ei(e)?128:ya(e)?64:X(e)?4:F(e)?2:0;return O(e,t,n,o,s,a,i,!0)}function va(e){return e?qo(e)||Zt in e?$({},e):e:null}function Xe(e,t,n=!1){const{props:o,ref:s,patchFlag:i,children:a}=e,l=t?Ma(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&xs(l),ref:t&&t.ref?n&&s?M(s)?s.concat(Pt(t)):[s,Pt(t)]:Pt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xe(e.ssContent),ssFallback:e.ssFallback&&Xe(e.ssFallback),el:e.el,anchor:e.anchor}}function Us(e=" ",t=0){return We(Qn,null,e,t)}function je(e){return e==null||typeof e=="boolean"?We(ve):M(e)?We(he,null,e.slice()):typeof e=="object"?He(e):We(Qn,null,String(e))}function He(e){return e.el===null||e.memo?e:Xe(e)}function Wn(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),Wn(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Zt in t)?t._ctx=ge:s===3&&ge&&(ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else F(t)?(t={default:t,_ctx:ge},n=32):(t=String(t),o&64?(n=16,t=[Us(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ma(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=Sn([t.class,o.class]));else if(s==="style")t.style=Mn([t.style,o.style]);else if(Et(s)){const i=t[s],a=o[s];a&&i!==a&&!(M(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=o[s])}return t}function ye(e,t,n,o=null){fe(e,t,7,[n,o])}function go(e,t,n,o){let s;const i=n&&n[o];if(M(e)||Z(e)){s=new Array(e.length);for(let a=0,l=e.length;a<l;a++)s[a]=t(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,i&&i[a])}else if(X(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,i&&i[l]));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const f=a[l];s[l]=t(e[f],f,l,i&&i[l])}}else s=[];return n&&(n[o]=s),s}const _n=e=>e?vs(e)?zt(e)||e.proxy:_n(e.parent):null,It=$(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_n(e.parent),$root:e=>_n(e.root),$emit:e=>e.emit,$options:e=>ms(e),$forceUpdate:e=>()=>$o(e.update),$nextTick:e=>Li.bind(e.proxy),$watch:e=>Ri.bind(e)}),Sa={get({_:e},t){const{ctx:n,setupState:o,data:s,props:i,accessCache:a,type:l,appContext:c}=e;let f;if(t[0]!=="$"){const L=a[t];if(L!==void 0)switch(L){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(o!==E&&H(o,t))return a[t]=1,o[t];if(s!==E&&H(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&H(f,t))return a[t]=3,i[t];if(n!==E&&H(n,t))return a[t]=4,n[t];kn&&(a[t]=0)}}const g=It[t];let w,_;if(g)return t==="$attrs"&&re(e,"get",t),g(e);if((w=l.__cssModules)&&(w=w[t]))return w;if(n!==E&&H(n,t))return a[t]=4,n[t];if(_=c.config.globalProperties,H(_,t))return _[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:i}=e;return s!==E&&H(s,t)?(s[t]=n,!0):o!==E&&H(o,t)?(o[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==E&&H(e,a)||t!==E&&H(t,a)||(l=i[0])&&H(l,a)||H(o,a)||H(It,a)||H(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},La=js();let Fa=0;function Pa(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||La,i={uid:Fa++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new qs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bs(o,s),emitsOptions:ss(o,s),emit:null,emitted:null,propsDefaults:E,inheritAttrs:o.inheritAttrs,ctx:E,data:E,props:E,attrs:E,slots:E,refs:E,setupState:E,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ci.bind(null,i),e.ce&&e.ce(i),i}let Y=null;const Ha=()=>Y||ge,ot=e=>{Y=e,e.scope.on()},Ke=()=>{Y&&Y.scope.off(),Y=null};function vs(e){return e.vnode.shapeFlag&4}let jt=!1;function Aa(e,t=!1){jt=t;const{props:n,children:o}=e.vnode,s=vs(e);la(e,n,s,t),fa(e,o);const i=s?Ca(e,t):void 0;return jt=!1,i}function Ca(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Zo(new Proxy(e.ctx,Sa));const{setup:o}=n;if(o){const s=e.setupContext=o.length>1?Ta(e):null;ot(e),it();const i=Ce(o,e,0,[e.props,s]);if(at(),Ke(),Po(i)){if(i.then(Ke,Ke),t)return i.then(a=>{bo(e,a,t)}).catch(a=>{Wt(a,e,0)});e.asyncDep=i}else bo(e,i,t)}else Ms(e,t)}function bo(e,t,n){F(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=Yo(t)),Ms(e,n)}let ko;function Ms(e,t,n){const o=e.type;if(!e.render){if(!t&&ko&&!o.render){const s=o.template;if(s){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=o,f=$($({isCustomElement:i,delimiters:l},a),c);o.render=ko(s,f)}}e.render=o.render||be}ot(e),it(),oa(e),at(),Ke()}function Da(e){return new Proxy(e.attrs,{get(t,n){return re(e,"get","$attrs"),t[n]}})}function Ta(e){const t=o=>{e.exposed=o||{}};let n;return{get attrs(){return n||(n=Da(e))},slots:e.slots,emit:e.emit,expose:t}}function zt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yo(Zo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in It)return It[n](e)}}))}function Ia(e){return F(e)&&"__vccOpts"in e}const Ss=(e,t)=>Mi(e,t,jt),Ba="3.2.33",Na="http://www.w3.org/2000/svg",Oe=typeof document!="undefined"?document:null,yo=Oe&&Oe.createElement("template"),Ea={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t?Oe.createElementNS(Na,e):Oe.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Oe.createTextNode(e),createComment:e=>Oe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Oe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yo.innerHTML=o?`<svg>${e}</svg>`:e;const l=yo.content;if(o){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Oa(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Va(e,t,n){const o=e.style,s=Z(n);if(n&&!s){for(const i in n)xn(o,i,n[i]);if(t&&!Z(t))for(const i in t)n[i]==null&&xn(o,i,"")}else{const i=o.display;s?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=i)}}const wo=/\s*!important$/;function xn(e,t,n){if(M(n))n.forEach(o=>xn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Ra(e,t);wo.test(n)?e.setProperty(st(o),n.replace(wo,""),"important"):e[o]=n}}const jo=["Webkit","Moz","ms"],rn={};function Ra(e,t){const n=rn[t];if(n)return n;let o=nt(t);if(o!=="filter"&&o in e)return rn[t]=o;o=Co(o);for(let s=0;s<jo.length;s++){const i=jo[s]+o;if(i in e)return rn[t]=i}return t}const _o="http://www.w3.org/1999/xlink";function Qa(e,t,n,o,s){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(_o,t.slice(6,t.length)):e.setAttributeNS(_o,t,n);else{const i=Ds(t);n==null||i&&!Lo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Wa(e,t,n,o,s,i,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,s,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Lo(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[Ls,Ka]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Un=0;const Xa=Promise.resolve(),qa=()=>{Un=0},Za=()=>Un||(Xa.then(qa),Un=Ls());function Fs(e,t,n,o){e.addEventListener(t,n,o)}function za(e,t,n,o){e.removeEventListener(t,n,o)}function Ja(e,t,n,o,s=null){const i=e._vei||(e._vei={}),a=i[t];if(o&&a)a.value=o;else{const[l,c]=Ya(t);if(o){const f=i[t]=Ga(o,s);Fs(e,l,f,c)}else a&&(za(e,l,a,c),i[t]=void 0)}}const xo=/(?:Once|Passive|Capture)$/;function Ya(e){let t;if(xo.test(e)){t={};let n;for(;n=e.match(xo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[st(e.slice(2)),t]}function Ga(e,t){const n=o=>{const s=o.timeStamp||Ls();(Ka||s>=n.attached-1)&&fe($a(o,n.value),t,5,[o])};return n.value=e,n.attached=Za(),n}function $a(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const Uo=/^on[a-z]/,er=(e,t,n,o,s=!1,i,a,l,c)=>{t==="class"?Oa(e,o,s):t==="style"?Va(e,n,o):Et(t)?Ln(t)||Ja(e,t,n,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tr(e,t,o,s))?Wa(e,t,o,i,a,l,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Qa(e,t,o,s))};function tr(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Uo.test(t)&&F(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Uo.test(t)&&Z(n)?!1:t in e}const nr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ki.props;const vo=e=>{const t=e.props["onUpdate:modelValue"];return M(t)?n=>Ft(t,n):t},or={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const s=Ot(t);Fs(e,"change",()=>{const i=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?Do(Bt(a)):Bt(a));e._assign(e.multiple?s?new Set(i):i:i[0])}),e._assign=vo(o)},mounted(e,{value:t}){Mo(e,t)},beforeUpdate(e,t,n){e._assign=vo(n)},updated(e,{value:t}){Mo(e,t)}};function Mo(e,t){const n=e.multiple;if(!(n&&!M(t)&&!Ot(t))){for(let o=0,s=e.options.length;o<s;o++){const i=e.options[o],a=Bt(i);if(n)M(t)?i.selected=Es(t,a)>-1:i.selected=t.has(a);else if(Nt(Bt(i),t)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Bt(e){return"_value"in e?e._value:e.value}const sr=$({patchProp:er},Ea);let So;function ir(){return So||(So=ga(sr))}const ar=(...e)=>{const t=ir().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=rr(o);if(!s)return;const i=t._component;!F(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function rr(e){return Z(e)?document.querySelector(e):e}var lr=[{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723876905278504961",owners:[{name:"gohgoon_nft",address:"0xeb9aa66d8c651e829ef010a2b34a0c76d2878ab8",imageUrl:"https://lh3.googleusercontent.com/r3JsiL8EDOJs5rlZzbn5_TTSrzTv3punVDuI1lQsWOZ5nkSxLyf0tb7foL1L6-ytFscKeIIoQFVNuSLcmxvMiirmfWpicqZ2nbYocg=s100"}],name:"#0086",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0086.jpeg",animationFile:null,properties:[{type:"Moon",value:"Blood Side",count:1,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.0013223140495867767,rank:1},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723899995022688257",owners:[{name:"kimjoe",address:"0xf5fd21c89d5e2206bd6184e88486b61fc5093894",imageUrl:"https://lh3.googleusercontent.com/-D-VSgURvUNRAndEaa5XaqH_Mlt1sab_0N8EyDQJ_mOkHodlK-PTTJP98leYgVjjl0UVPTkX-1zfI1bEkT8_7upJ8n-DU9FwMZTNAQ=s100"}],name:"#0107",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0107.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dead Side",count:6,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.006446280991735537,rank:2},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723897795999432705",owners:[{name:"NuKinds",address:"0x76fb8dc38f92f6ffdac11fb50c97b5768a501dae",imageUrl:"https://lh3.googleusercontent.com/9Xp2Y59wzAVQuv_h7JkLz3p-PEXSsS46xgCjEFK_gS2vewev61bEEjlon59_72SzBuovuceP01g_glCyV99nEDaRnldCh-01xc1mjg=s100"}],name:"#0105",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0105.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dead Side",count:6,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.006446280991735537,rank:2},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723885701371527169",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0094",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0094.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dead Side",count:6,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.0069421487603305776,rank:4},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723884601859899393",owners:[{name:"kimjoe",address:"0xf5fd21c89d5e2206bd6184e88486b61fc5093894",imageUrl:"https://lh3.googleusercontent.com/-D-VSgURvUNRAndEaa5XaqH_Mlt1sab_0N8EyDQJ_mOkHodlK-PTTJP98leYgVjjl0UVPTkX-1zfI1bEkT8_7upJ8n-DU9FwMZTNAQ=s100"}],name:"#0093",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0093.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dead Side",count:6,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.0069421487603305776,rank:4},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723842820418043905",owners:[{name:"ewjf29034r2j3rkofj02",address:"0x1e9f5a2a1c38deb432257bde75c77e27ec3628e7",imageUrl:"https://lh3.googleusercontent.com/xz9W5UiTA1hIF2XKhPPrlQAB0mvqJECOeu6Rqf1zXppkDuAYUF_-lSvJ1uJWj-80eswV2S72tzDUvWEwjuz4FroiSF1Oz9-nh4LrHg=s100"}],name:"#0057",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0057.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Last Quarter",count:2,total:110}],rarity:.007107438016528926,rank:6},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723895596976177153",owners:[{name:"Ky103",address:"0xf39d1b1f4bf44de424e4ebd350d1a29a89b0c1ae",imageUrl:"https://lh3.googleusercontent.com/AALDNuKOTom5se2D34IpwFH-Hoa7q6qaDymuMrId7Hwa4VaVz6mGd1MvSvBswqkW-4enbnrjQ241npbA_1md6kpIDeM6ooJbiGlJPQ=s100"}],name:"#0103",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0103.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dead Side",count:6,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.009421487603305785,rank:7},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723886800883154945",owners:[{name:null,address:"0x27fa91b2867718e66f5a0563115da0c7774a0cf3",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/23.png"}],name:"#0095",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0095.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dead Side",count:6,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.009421487603305785,rank:7},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723839521883160577",owners:[{name:null,address:"0xfeddf7bb35afc8d272f8f35e2a49b38b42d8a0fb",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/13.png"}],name:"#0056",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0056.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Last Quarter",count:2,total:110}],rarity:.009917355371900825,rank:9},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723888999906410497",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0097",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0097.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waxing Gibbous",count:4,total:110}],rarity:.014214876033057851,rank:10},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723869208697110529",owners:[{name:"e1e1e1",address:"0xcbc992e42acbb0b8a6e43b2f283ca4b3dbc6e1e1",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/26.png"}],name:"#0079",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0079.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waxing Gibbous",count:4,total:110}],rarity:.014214876033057851,rank:10},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723737267301777409",owners:[{name:"Boodraw1",address:"0x6598f8a8850d2bfe1930f5669ac32660333afcac",imageUrl:"https://lh3.googleusercontent.com/4VNy8zk66YzIhxUKFL095L1yMK28_4oLbegfoX6uND_U_38sqJd0rMvKu0C8RFyelRHT2x2CiLmXmtcl6jcwf3RmLrD9JCUUEiC2=s100"}],name:"#0018",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0018.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Half Moon",count:4,total:110}],rarity:.014214876033057851,rank:10},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723870308208738305",owners:[{name:"kimjoe",address:"0xf5fd21c89d5e2206bd6184e88486b61fc5093894",imageUrl:"https://lh3.googleusercontent.com/-D-VSgURvUNRAndEaa5XaqH_Mlt1sab_0N8EyDQJ_mOkHodlK-PTTJP98leYgVjjl0UVPTkX-1zfI1bEkT8_7upJ8n-DU9FwMZTNAQ=s100"}],name:"#0080",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0080.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waxing Gibbous",count:4,total:110}],rarity:.01983471074380165,rank:13},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723868109185482753",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0078",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0078.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waxing Gibbous",count:4,total:110}],rarity:.01983471074380165,rank:13},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723766954115727361",owners:[{name:"Ted_Chang",address:"0x27c2f5b20abc4c3d462f2046d98e9dc638cb6fed",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/21.png"}],name:"#0045",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0045.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Half Moon",count:4,total:110}],rarity:.01983471074380165,rank:13},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723729570720382977",owners:[{name:"19fc362",address:"0x39afc8529ffeffb37ffa2e7315cd3420e19fc362",imageUrl:"https://lh3.googleusercontent.com/LeWSSzxWgqwNcUy2DaaWyaTcX0mKwBdPPY0MHfGP-K4AqvvafUYAe_oLiTdifFGOVEvWKP8lr6jjR5RIGVDVrhpLF3nT0QkFhldDbhs=s100"}],name:"#0011",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0011.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Half Moon",count:4,total:110}],rarity:.01983471074380165,rank:13},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723718575604105217",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0002",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0002.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Half Moon",count:4,total:110}],rarity:.01983471074380165,rank:13},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723846118952927233",owners:[{name:"TBLinnu",address:"0xb47a1de1d48ca4b65df6301782c3f3f879f4527a",imageUrl:"https://lh3.googleusercontent.com/TscWRALi2q7qllqPrHizuXUEI3yLB9LTsajF99Xq13PgcfDgYmnsaWUSaY-xeEPn4MNV5QivI4PXrsGy5aWOxWM_syKJF8VHvv2a0Q=s100"}],name:"#0060",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0060.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Full Moon",count:12,total:110}],rarity:.042644628099173555,rank:18},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723773551185494017",owners:[{name:"LAZYYmfer",address:"0x0374b8b9b515dc83c4bc8b4706fdab15dfcd599e",imageUrl:"https://lh3.googleusercontent.com/KC6t1b0F5p_LLV9nRihObwAfNmnZzltU2Sapm9DaAArUD01t6sqcWd64Y1qeiRz7AkfmaEK1-ss86yfDQGeej4XfRa9sLjzzbQl6Aw=s100"}],name:"#0051",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0051.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Full Moon",count:12,total:110}],rarity:.042644628099173555,rank:18},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723763655580844033",owners:[{name:"h0neybad9er",address:"0x26a22514d3ac0b05e2f4f04df96ef302ba434cbe",imageUrl:"https://lh3.googleusercontent.com/WQqdV_xjEGiLg8YYXei1yvVgFshIj5VreguzbD_VrYqEPx-sCUOHw5XxUBULZsb8kBYJ2UECrb1AGAn-ROnkj6iDLssNw1Dp2BV5=s100"}],name:"#0042",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0042.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"New Moon",count:12,total:110}],rarity:.042644628099173555,rank:18},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723759257534332929",owners:[{name:"koddang52",address:"0xdaf4d3a2f1bae963ee6c1df2e8185ef413b8928d",imageUrl:"https://lh3.googleusercontent.com/J3mQUH8123dD-AX68LabOvxDWIUiboZT5bKurL2Z-MZn96ObsR7NQer0v4bWOd2_fUtdNobze2EUPZvZ8H0ei-2BVdI4tzlg2CfX=s100"}],name:"#0038",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0038.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"New Moon",count:12,total:110}],rarity:.042644628099173555,rank:18},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723757058511077377",owners:[{name:"IlIIlIlIllIIIll",address:"0xa2d8041b6edcd696ec301d0f040185a3ea66ae6f",imageUrl:"https://lh3.googleusercontent.com/T6HGCDTGjhdUehOU4EwKTmQqAgZ6XfOZUoAtLYzYu4zK-_PEEe2qSmNrThwegZ27ImIHSF_zhEtid4k2DqLImUu0s_vjJdT0rjYEU1c"}],name:"#0036",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0036.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"New Moon",count:12,total:110}],rarity:.042644628099173555,rank:18},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723749361929682945",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0029",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0029.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"New Moon",count:12,total:110}],rarity:.042644628099173555,rank:18},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723747162906427393",owners:[{name:"e1e1e1",address:"0xcbc992e42acbb0b8a6e43b2f283ca4b3dbc6e1e1",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/26.png"}],name:"#0027",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0027.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"New Moon",count:12,total:110}],rarity:.042644628099173555,rank:18},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723739466325032961",owners:[{name:"leeyunsung",address:"0x4ebdd05348ff7299cb116e3dd61601154c784660",imageUrl:"https://lh3.googleusercontent.com/3B5f51gphBcjVtQlQLuCwFH-fVyy1g4DztMESAVJHJAUpvy84iWkEOo3ZAT8bl1SmFfmjfYsT3FPrIVI6Ki52RnC_70N-mByRL7z9A=s100"}],name:"#0020",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0020.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Full Moon",count:12,total:110}],rarity:.042644628099173555,rank:18},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723903293557571585",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0110",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0110.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.04619834710743802,rank:26},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723896696487804929",owners:[{name:null,address:"0xac614417fbd3c3f4dddd951ff6dc1f0207a6b513",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/11.png"}],name:"#0104",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0104.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.04619834710743802,rank:26},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723873606743621633",owners:[{name:"hashim999",address:"0xf9dbdb1e1f4607ba433f1c50ea469dbb0cd04ea0",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/22.png"}],name:"#0083",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0083.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.04619834710743802,rank:26},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723845019441299457",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0059",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0059.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.04619834710743802,rank:26},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723744963883171841",owners:[{name:"Hawoon",address:"0x64df7af696e0977771a0e1e1b1a8dd22ded3cf4b",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/2.png"}],name:"#0025",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0025.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.04619834710743802,rank:26},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723894497464549377",owners:[{name:"GMGM",address:"0x7ee93e58f1784f23956de508ed0ec33ec8be9701",imageUrl:"https://lh3.googleusercontent.com/wr9HeO7sbgNDKBq-ATB5HjvFjV1rDUsj7IqVBvH5-ZrdPsJaa1nXyH5M0oR7l0wUcovKJGK_3XiUCknbLqzjnqlWDu5RY0mLKJ8S=s100"}],name:"#0102",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0102.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.04975206611570248,rank:31},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723890099418038273",owners:[{name:"ddungddang",address:"0xc9a9dc3765eb9214680a295e7766700c51583c7c",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/16.png"}],name:"#0098",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0098.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.04975206611570248,rank:31},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723882402836643841",owners:[{name:"GMGM",address:"0x7ee93e58f1784f23956de508ed0ec33ec8be9701",imageUrl:"https://lh3.googleusercontent.com/KSdBgqGuNgdf4CIkzsG_cOkj3K8aYM7q-slItA9V_wylt3D6kBWIp3FmvGXFsgK8xamHzjlI1GZqk69yN1Fl6eP96ioXPCt2_1SDGnM=s100"}],name:"#0091",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0091.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.04975206611570248,rank:31},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723861512115716097",owners:[{name:null,address:"0x3309d99909b76d660716f18ecb7e3c2e3e33b690",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/8.png"}],name:"#0072",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0072.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.04975206611570248,rank:31},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723857114069204993",owners:[{name:null,address:"0xfa75a6cecbb49256ba948bfcbaf72f1193a60b67",imageUrl:"https://lh3.googleusercontent.com/2llVCKCHuElmevwihQj9DwryDAK9E6VQOUX7ARUP8rxDwOdo7fbsv0DH9cwHa_l8xDsVN43VACg2BSP3MidNXUnFyDUqqaOytM_EkUo=s100"}],name:"#0069",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0069.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.04975206611570248,rank:31},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723856014557577217",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0068",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0068.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.04975206611570248,rank:31},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723838422371532801",owners:[{name:"Dogyun_99",address:"0x69af485141cb8bb7a6e7ad825be8a69edb697294",imageUrl:"https://lh3.googleusercontent.com/9lVMfDNwJs1v60R-PteSQOkqUPkODo_oGYwWIyN_IWhI2--SC8ujLRq8D--OZzs21YAo5LEd0jQm8fxsI_cd2GxB9J9Onj4SXUmQnc4=s100"}],name:"#0055",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0055.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.04975206611570248,rank:31},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723762556069216257",owners:[{name:"Cochang",address:"0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",imageUrl:"https://lh3.googleusercontent.com/7UmKvjA63sgQRlY_4vQlTyaI2SLq7P7vnt4rqWxlAYMT12_8HJ7IJWzKmpqiXY4vAoc93ZmLx9FfNStK49plxBVW-3hlqyTFKFO_7Q"}],name:"#0041",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0041.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.04975206611570248,rank:31},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723750461441310721",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0030",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0030.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.04975206611570248,rank:31},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723743864371544065",owners:[{name:"tigerr",address:"0xfc1ab1ee5b163879a850477fbfeb35eaec52abc8",imageUrl:"https://lh3.googleusercontent.com/8aV1xf5UWlZVj-FX5bhLZdFOeZjx-bU1FVNm72X356UDzPMPDtC7HaI54gDQy0_o_cztSSXcyWKecjbTTwGogcmQN0ciHCAeskJJJ90=s100"}],name:"#0024",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0024.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.04975206611570248,rank:31},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723728471208755201",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0010",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0010.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.04975206611570248,rank:31},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723902194045943809",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0109",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0109.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.056859504132231405,rank:42},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723901094534316033",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0108",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0108.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.056859504132231405,rank:42},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723875805766877185",owners:[{name:"bongsanjee33",address:"0x21159b098768cdc4e7fbe9859835d8b8f527f370",imageUrl:"https://lh3.googleusercontent.com/2VYhG0BmNNwgFRzV8Xcd57orQyY6diXrdhH5MXoFsyCB0n4Md7vJeQG6Rb1H7wqtXgV4Cl2rr_rvtfvhk4VS3ISSB0gIuFfLcKFNww=s100"}],name:"#0085",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0085.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.056859504132231405,rank:42},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723771352162238465",owners:[{name:"byungheon.eth",address:"0x6cbb8ba9e93a295f6fa0f8eca0000ea9db083059",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/33.png"}],name:"#0049",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0049.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.056859504132231405,rank:42},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723754859487821825",owners:[{name:"eqrfeqE",address:"0x42dc5c61d7392d74307357bdc0be178fa53bd922",imageUrl:"https://lh3.googleusercontent.com/qHKz87Z13VQdNXFJp8gvFSZXgD_wztQrb3eKSYA2y5KtqY3p0kjwfU-N0WiGV9Q4f5No_B0zMJDG3nSGIbyD7073O6-xK_0PB1yXwQ=s100"}],name:"#0034",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0034.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.056859504132231405,rank:42},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723742764859916289",owners:[{name:"wisekim",address:"0x5cf6e510e0c123e1e839376f8ea1900bb9b9a6c1",imageUrl:"https://lh3.googleusercontent.com/2Ux6XbwuuVbHNJDT92Btfo3snImqyAWK5JEVkB9kabqvgOoP95efLT6h5wZygfzoToeCRF0qLkDgycwNUdmNpe0DdhDZMv8_dlUt9v4=s100"}],name:"#0023",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0023.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.056859504132231405,rank:42},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723740565836660737",owners:[{name:"GaryKwon",address:"0xc7933f7df4de83c76b39982dfa99cc356e45c9bd",imageUrl:"https://lh3.googleusercontent.com/OZXEaoWBPTGhyOX4X0kL6X3CdNZ5YfvgiA4lfOH8KLTLzmm8-G7tQKL7NGrIKZddf-U_Az67ilvxPLx2_fv6ZnMoJbpUcbIXaUuWP9I"}],name:"#0021",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0021.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.056859504132231405,rank:42},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723724073162244097",owners:[{name:"Level19_Ryan",address:"0xf0839f77d88a93e74b5aca6946b89f110de750cf",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/28.png"}],name:"#0006",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0006.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.056859504132231405,rank:42},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723879104301760513",owners:[{name:"bongsanjee33",address:"0x21159b098768cdc4e7fbe9859835d8b8f527f370",imageUrl:"https://lh3.googleusercontent.com/2VYhG0BmNNwgFRzV8Xcd57orQyY6diXrdhH5MXoFsyCB0n4Md7vJeQG6Rb1H7wqtXgV4Cl2rr_rvtfvhk4VS3ISSB0gIuFfLcKFNww=s100"}],name:"#0088",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

one more thing...

Ujin x FINGER PRINCESS
"Thank you to everyone who wished me a happy birthday. Have a nice weekend! \u{1F382}\u{1F60B}\u{1F497}"

https://opensea.io/collection/finger-princess`,imageFile:"0088.gif",animationFile:"0088.mp4",properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"New Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723854915045949441",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0067",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0067.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"New Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723851616511066113",owners:[{name:"CryptoQueeen",address:"0x0934c94a7e3b3fb7967f8c71e060117605ff8be6",imageUrl:"https://lh3.googleusercontent.com/2V5BdwpY7zvoIrh0868OyPouO0X436o-HBjcRUWMCjsPfALMePVpAWW0NtRnllZoR3_z66lZbWvHXppnsURtFpbsSZ4rzWUB_QKbziQ=s100"}],name:"#0064",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0064.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Full Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723847218464555009",owners:[{name:"rapper111.eth",address:"0x202c44ef498d109352c76a192e86fd2e4c137022",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/33.png"}],name:"#0061",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0061.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Full Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723776849720377345",owners:[{name:"spikespiegell",address:"0xc7b900f7c9b1dd40c9d2de6c739d5127c85b298d",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/21.png"}],name:"#0054",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0054.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"New Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723774650697121793",owners:[{name:"Ryot_eth",address:"0x4861babe0c26866d4f1f8c64461827967cdd8fb1",imageUrl:"https://lh3.googleusercontent.com/Yf7lrvDBCT5DCe2AZ_ZSNURpSTg-RBoOCYD3BhhT_QmnY7Rdy0DGhghO2hl_3ChcUppEnUA42e_O-fmMV0HijR6BYen1dbswDIO_vA=s100"}],name:"#0052",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0052.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Full Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723772451673866241",owners:[{name:"Cochang",address:"0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",imageUrl:"https://lh3.googleusercontent.com/7UmKvjA63sgQRlY_4vQlTyaI2SLq7P7vnt4rqWxlAYMT12_8HJ7IJWzKmpqiXY4vAoc93ZmLx9FfNStK49plxBVW-3hlqyTFKFO_7Q"}],name:"#0050",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0050.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Full Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723770252650610689",owners:[{name:"0x2faced",address:"0x2faceda28350549c7b4bac2a8404a6d8a7debe2b",imageUrl:"https://lh3.googleusercontent.com/RZOI4QIXG0iuamK_INvpuY1_q_aPXM5c0kvYmczpmX4acIJrrTlqYPSJ0qzXM0TAlVjI__Kn6mhKDPwoS0acS7qs4rOOS0vf8bJ3BLU"}],name:"#0048",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0048.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Full Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723769153138982913",owners:[{name:"yona_eth",address:"0x9f7096664a86d76400187dd75fe5081c2cb4d822",imageUrl:"https://lh3.googleusercontent.com/akfUlWqc_jFWKDVWAr_dCObeh5CowisY8XiltFP2qCXdrA-pZJCSZCugMFz1MEs7uEJguGQgiraxjXOtKA4hNjFZWAR6kEVhAlo8nQ=s100"}],name:"#0047",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0047.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Full Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723735068278521857",owners:[{name:null,address:"0x560fd42c50da294662d4f4fa24bd19e4f8012101",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/25.png"}],name:"#0016",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0016.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"New Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723733968766894081",owners:[{name:null,address:"0xf05d39d78c0f8946815701afa290c0d94b904a11",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/27.png"}],name:"#0015",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0015.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"New Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723727371697127425",owners:[{name:null,address:"0x3377eb1651657b62b2b09d9d9b6183a906eb95af",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/15.png"}],name:"#0009",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0009.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Full Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723726272185499649",owners:[{name:"spikespiegell",address:"0xc7b900f7c9b1dd40c9d2de6c739d5127c85b298d",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/21.png"}],name:"#0008",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0008.png",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Full Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723720774627360769",owners:[{name:"TBLinnu",address:"0xb47a1de1d48ca4b65df6301782c3f3f879f4527a",imageUrl:"https://lh3.googleusercontent.com/TscWRALi2q7qllqPrHizuXUEI3yLB9LTsajF99Xq13PgcfDgYmnsaWUSaY-xeEPn4MNV5QivI4PXrsGy5aWOxWM_syKJF8VHvv2a0Q=s100"}],name:"#0004",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0004.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"New Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723719675115732993",owners:[{name:"Goldfinney",address:"0x4053083ad6244e6281660e34e295e4dcd72d2cd4",imageUrl:"https://lh3.googleusercontent.com/aGvtwEx4ShGJz-S5vIkCqGeSXHMtNs7oQsSZXXH07Pga2SjSDqvLP2-U-494bF2t9HxHJTnBHvPYLaKBg0vpSVaTrRXE5NY7kqedxoc=s100"}],name:"#0003",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0003.png",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Full Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723717476092477441",owners:[{name:"0x2faced",address:"0x2faceda28350549c7b4bac2a8404a6d8a7debe2b",imageUrl:"https://lh3.googleusercontent.com/RZOI4QIXG0iuamK_INvpuY1_q_aPXM5c0kvYmczpmX4acIJrrTlqYPSJ0qzXM0TAlVjI__Kn6mhKDPwoS0acS7qs4rOOS0vf8bJ3BLU"}],name:"#0001",description:`\u201CShape of the moonlight reminds me of her silhouette.
Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken.
Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE  `,imageFile:"0001.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"New Moon",count:12,total:110}],rarity:.05950413223140495,rank:50},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723898895511060481",owners:[{name:"radishash.eth",address:"0xa3ca2baff1ae4a3927d4b6db2a2f8743f7e524ab",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/11.png"}],name:"#0106",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0106.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.06446280991735537,rank:66},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723872507231993857",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0082",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0082.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.06446280991735537,rank:66},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723843919929671681",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0058",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0058.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.06446280991735537,rank:66},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723765854604099585",owners:[{name:null,address:"0x33dad58201f62894576b61d582af9bcca8ca9ce9",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/17.png"}],name:"#0044",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0044.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.06446280991735537,rank:66},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723760357045960705",owners:[{name:"MiiHo",address:"0x6dbf6c38a27ea9bc0ebeb57d33a09a438db681f5",imageUrl:"https://lh3.googleusercontent.com/bqqQXwDtth3j6vW0cMQ0DCU_uytg0-fwKouNp3yzZqBPESUsgTBzPxHY2LY6IwTPIsZqGzzyIQ0k6P5ZLAYHx9BpuORbRUZNhKIN59c"}],name:"#0039",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0039.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.06446280991735537,rank:66},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723741665348288513",owners:[{name:"colinworld",address:"0x1903bc4488ee4def59af04a4df04afd342b03294",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/9.png"}],name:"#0022",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0022.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Third Quarter",count:13,total:110}],rarity:.06446280991735537,rank:66},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723887900394782721",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0096",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0096.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.06752066115702479,rank:72},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723864810650599425",owners:[{name:"bongsanjee33",address:"0x21159b098768cdc4e7fbe9859835d8b8f527f370",imageUrl:"https://lh3.googleusercontent.com/2VYhG0BmNNwgFRzV8Xcd57orQyY6diXrdhH5MXoFsyCB0n4Md7vJeQG6Rb1H7wqtXgV4Cl2rr_rvtfvhk4VS3ISSB0gIuFfLcKFNww=s100"}],name:"#0075",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0075.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.06752066115702479,rank:72},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723768053627355137",owners:[{name:"autumnchicaneko",address:"0x00000018988ff5723410b47209f7d891d88732d7",imageUrl:"https://lh3.googleusercontent.com/mgE6yNNGOGWgab5EdACr_a5Mpg2l5TlUJ_QICs-Pzk-MxWKlgTk9BZsUGCRNHwby7iPfr5UjnNbeGnq1o1djfhloxCdVKJ0bFs0R_Nc=s100"}],name:"#0046",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0046.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.06752066115702479,rank:72},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723764755092471809",owners:[{name:"jumanzi.eth",address:"0xbab608d14b0748013b9e64cc6637c6155612d422",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/14.png"}],name:"#0043",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0043.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.06752066115702479,rank:72},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723758158022705153",owners:[{name:"Goldfinney",address:"0x4053083ad6244e6281660e34e295e4dcd72d2cd4",imageUrl:"https://lh3.googleusercontent.com/aGvtwEx4ShGJz-S5vIkCqGeSXHMtNs7oQsSZXXH07Pga2SjSDqvLP2-U-494bF2t9HxHJTnBHvPYLaKBg0vpSVaTrRXE5NY7kqedxoc=s100"}],name:"#0037",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0037.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.06752066115702479,rank:72},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723748262418055169",owners:[{name:null,address:"0x33dad58201f62894576b61d582af9bcca8ca9ce9",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/17.png"}],name:"#0028",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0028.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.06752066115702479,rank:72},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723736167790149633",owners:[{name:"Hyukkkkkk",address:"0xf608aafd2b1ffbefb85df0f17877d30b71a8a761",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/6.png"}],name:"#0017",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0017.jpeg",animationFile:null,properties:[{type:"Moon",value:"Dark Side",count:43,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.06752066115702479,rank:72},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723893397952921601",owners:[{name:"GMGM",address:"0x7ee93e58f1784f23956de508ed0ec33ec8be9701",imageUrl:"https://lh3.googleusercontent.com/wr9HeO7sbgNDKBq-ATB5HjvFjV1rDUsj7IqVBvH5-ZrdPsJaa1nXyH5M0oR7l0wUcovKJGK_3XiUCknbLqzjnqlWDu5RY0mLKJ8S=s100"}],name:"#0101",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0101.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723892298441293825",owners:[{name:null,address:"0x33dad58201f62894576b61d582af9bcca8ca9ce9",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/17.png"}],name:"#0100",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0100.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723891198929666049",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0099",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0099.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723883502348271617",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0092",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0092.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723881303325016065",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0090",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0090.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723880203813388289",owners:[{name:"ddungddang",address:"0xc9a9dc3765eb9214680a295e7766700c51583c7c",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/16.png"}],name:"#0089",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0089.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723871407720366081",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0081",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0081.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723860412604088321",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0071",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0071.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723859313092460545",owners:[{name:"V_jpg",address:"0x67d555644fc6e7538a8817a55a32a178391d89bc",imageUrl:"https://lh3.googleusercontent.com/YZ_oDJwMexD59yjfqSUtMf0uMCVLeoQcLy-nhHh8b0jSg069y8bXPghSNgJ5PuVVSQHeQyt89kvy6Rk-W7D02whtaLyhFhhvyz_v=s100"}],name:"#0070",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0070.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723853815534321665",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0066",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0066.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723852716022693889",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0065",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0065.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723775750208749569",owners:[{name:"taeyeol.eth",address:"0x723b1bf840a677aab004cf8573d3189476824ec3",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/2.png"}],name:"#0053",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0053.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723752660464566273",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0032",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0032.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723751560952938497",owners:[{name:"a41-steve.eth",address:"0xc48109dec9c4eaa3385e934cd7e5e5bfbf5d95ed",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/30.png"}],name:"#0031",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0031.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Gibbous",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723746063394799617",owners:[{name:"Cochang",address:"0x5fe9cfa5cfecdc333eb102d219b4e77eacde9828",imageUrl:"https://lh3.googleusercontent.com/7UmKvjA63sgQRlY_4vQlTyaI2SLq7P7vnt4rqWxlAYMT12_8HJ7IJWzKmpqiXY4vAoc93ZmLx9FfNStK49plxBVW-3hlqyTFKFO_7Q"}],name:"#0026",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0026.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waxing Crescent",count:14,total:110}],rarity:.06942148760330577,rank:79},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723878004790132737",owners:[{name:"RODNEYCOOKIEDOG",address:"0xe1b17ee25a4271256a126b2388d3ff29459b8618",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/12.png"}],name:"#0087",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0087.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.0793388429752066,rank:94},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723874706255249409",owners:[{name:"bongsanjee33",address:"0x21159b098768cdc4e7fbe9859835d8b8f527f370",imageUrl:"https://lh3.googleusercontent.com/2VYhG0BmNNwgFRzV8Xcd57orQyY6diXrdhH5MXoFsyCB0n4Md7vJeQG6Rb1H7wqtXgV4Cl2rr_rvtfvhk4VS3ISSB0gIuFfLcKFNww=s100"}],name:"#0084",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0084.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.0793388429752066,rank:94},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723850516999438337",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0063",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0063.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.0793388429752066,rank:94},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723849417487810561",owners:[{name:"Lastwish_",address:"0x1c3dba6ca7febcbd913ec72e0ef97b5f7abbed82",imageUrl:"https://lh3.googleusercontent.com/_bx1RnL9l837UysjZ8BH_ylCv_XG8c9dEmBPlAgkZYZWMy3SQMNx4aNHse8dBjczt3rDZfjP5LfCOUBmo5_VFSj3nNITB_fnhePN"}],name:"#0062",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0062.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.0793388429752066,rank:94},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723753759976194049",owners:[{name:"SUPERELLIPSE",address:"0xfd4868b2a1af80073556d6fb7565c33e6377de98",imageUrl:"https://lh3.googleusercontent.com/1bBurcaMSM9i_QgSY2fwZLYxMuru5FCX6TCEb7MdqpGVjyjot7l4Fbn8ExiYMCSpCm2mHiRYP72bipwRDG1n3KHf3zs2_ND2PDIw8A=s100"}],name:"#0033",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0033.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.0793388429752066,rank:94},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723730670232010753",owners:[{name:"gamja58",address:"0xe6a917efb682466df3804d0471c9d98b2cefd469",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/28.png"}],name:"#0012",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0012.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.0793388429752066,rank:94},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723721874138988545",owners:[{name:null,address:"0xe401477f3acc0b021cd6c7e8fd2cd44a10c5f369",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/18.png"}],name:"#0005",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0005.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"Waning Crescent",count:16,total:110}],rarity:.0793388429752066,rank:94},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723867009673854977",owners:[{name:"cgs21",address:"0xb94179f79664908b1c94518885b0e76cef4e0ca2",imageUrl:"https://lh3.googleusercontent.com/Tmfr6GyLAiOeb1iZJFanv3yoOuRWqgbd7dWMf-HNiZJPBh0-6STeQza86USh7DZtaXrBsWauJUW2RiPPY4OYPSaDqHYpo6sla1tYKA"}],name:"#0077",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0077.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.09421487603305785,rank:101},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723865910162227201",owners:[{name:"gohgoon_nft",address:"0xeb9aa66d8c651e829ef010a2b34a0c76d2878ab8",imageUrl:"https://lh3.googleusercontent.com/r3JsiL8EDOJs5rlZzbn5_TTSrzTv3punVDuI1lQsWOZ5nkSxLyf0tb7foL1L6-ytFscKeIIoQFVNuSLcmxvMiirmfWpicqZ2nbYocg=s100"}],name:"#0076",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0076.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.09421487603305785,rank:101},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723863711138971649",owners:[{name:"bongsanjee33",address:"0x21159b098768cdc4e7fbe9859835d8b8f527f370",imageUrl:"https://lh3.googleusercontent.com/2VYhG0BmNNwgFRzV8Xcd57orQyY6diXrdhH5MXoFsyCB0n4Md7vJeQG6Rb1H7wqtXgV4Cl2rr_rvtfvhk4VS3ISSB0gIuFfLcKFNww=s100"}],name:"#0074",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0074.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.09421487603305785,rank:101},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723862611627343873",owners:[{name:null,address:"0xb3b831c64dd2d0f4423e3900855bbb5f97336e5d",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/31.png"}],name:"#0073",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE`,imageFile:"0073.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.09421487603305785,rank:101},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723761456557588481",owners:[{name:null,address:"0x33dad58201f62894576b61d582af9bcca8ca9ce9",imageUrl:"https://storage.googleapis.com/opensea-static/opensea-profile/17.png"}],name:"#0040",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0040.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.09421487603305785,rank:101},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723755958999449601",owners:[{name:"Boodraw1",address:"0x6598f8a8850d2bfe1930f5669ac32660333afcac",imageUrl:"https://lh3.googleusercontent.com/4VNy8zk66YzIhxUKFL095L1yMK28_4oLbegfoX6uND_U_38sqJd0rMvKu0C8RFyelRHT2x2CiLmXmtcl6jcwf3RmLrD9JCUUEiC2=s100"}],name:"#0035",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0035.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.09421487603305785,rank:101},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723738366813405185",owners:[{name:"workforkimchi",address:"0xe4d86e7971e3280d3cc4967cfc6a8210d1158293",imageUrl:"https://lh3.googleusercontent.com/fUDAXKsYlHX9Jn6-67GEvvfU7hmCxQHH0RZevE9_czSBQPhwq3yls49vVMvN1gQckfv4tWKY_fZeoZ2T2Jo-99QnsJMWqQorKAI9=s100"}],name:"#0019",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0019.png",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.09421487603305785,rank:101},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723732869255266305",owners:[{name:"Boodraw1",address:"0x6598f8a8850d2bfe1930f5669ac32660333afcac",imageUrl:"https://lh3.googleusercontent.com/4VNy8zk66YzIhxUKFL095L1yMK28_4oLbegfoX6uND_U_38sqJd0rMvKu0C8RFyelRHT2x2CiLmXmtcl6jcwf3RmLrD9JCUUEiC2=s100"}],name:"#0014",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0014.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.09421487603305785,rank:101},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723731769743638529",owners:[{name:"bivibig",address:"0x16fb900dfe2edff25ea4ae02b38a843590340748",imageUrl:"https://lh3.googleusercontent.com/_hasbiZ2uvmQbWaOslEb4F0qsWq7zv1fooZApAww03WyaxVRbOU_98vjteIjUg2LcFcX4l3nW4u7Ho8LWaOwg3Vk9G9HN8ELYiP4=s100"}],name:"#0013",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 2,242 pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0013.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.09421487603305785,rank:101},{contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",tokenId:"46965151181709873022127412813581259762625831679601743551961723725172673871873",owners:[{name:"Perrypak",address:"0xa28640848572f3b95dcfe2290e718c5943ad38d9",imageUrl:"https://lh3.googleusercontent.com/CwiYh0LGuI2NvZRXehsngr2_xbbcg5F1d-YV5XNnJtQ-KiKXA6bQt0okg2hc3vjSlZvN-UNC8q5BB5O5u7urSJv_XbHrY1AsW1A29AM=s100"}],name:"#0007",description:`\u201CShape of the moonlight reminds me of her silhouette. Her beauty that circles from dark to bright.\u201D

\u{1F319}

Ujin is 1/1 selfie collection of 1k pieces.

The phases of the moon were classified based on the date the photo was taken. Light on the front and dark on the back. Contrast of two emotional lines.

All pictures are taken herself, Ujin \u{1F9F8}\u2728

Published in 2021 by L D H \xAE

https://ujin.one/`,imageFile:"0007.jpeg",animationFile:null,properties:[{type:"Moon",value:"Bright Side",count:60,total:110},{type:"Phases of the Moon",value:"First Quarter",count:19,total:110}],rarity:.09421487603305785,rank:101}];const cr={class:"py-4"},hr={class:"container mx-auto font-roboto space-y-2 px-2"},fr={class:"flex justify-between items-center"},dr=O("h2",{class:"text-xl font-press"},[Us("UJIN"),O("span",{class:"text-purple-400 pl-2"},"RADER")],-1),ur=O("option",{value:"name_asc"},"Name",-1),pr=O("option",{value:"name_desc"},"Recently Created",-1),mr=O("option",{value:"rank_asc"},"Rank: Low to High",-1),gr=O("option",{value:"rank_desc"},"Rank: High to Low",-1),br=[ur,pr,mr,gr],kr={class:"grid grid-cols-2 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 auto-cols-fr gap-x-4 gap-y-6"},yr=["href"],wr={class:"rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"},jr={class:"overflow-hidden aspect-square"},_r=["src"],xr={class:"px-4 pt-2 pb-4 dark:bg-gray-900"},Ur={class:"flex justify-between items-center"},vr={class:"text-purple-400 font-extrabold"},Mr={class:"font-extrabold"},Sr={class:"space-y-1"},Lr={class:"text-xs text-gray-400"},Fr={class:"flex justify-between items-center"},Pr={class:"text-sm"},Hr={class:"text-xs"},Ar=Xi({setup(e){const t=ji("name_asc"),n="./",o=lr,s=Ss(()=>t.value==="name_asc"?o.sort((a,l)=>a.name.localeCompare(l.name)):t.value==="name_desc"?o.sort((a,l)=>l.name.localeCompare(a.name)):t.value==="rank_asc"?o.sort((a,l)=>a.rank-l.rank):t.value==="rank_desc"?o.sort((a,l)=>l.rank-a.rank):o);function i(a){return`${(a*100).toFixed(2)}%`}return(a,l)=>(ht(),ft("div",cr,[O("div",hr,[O("div",fr,[dr,O("div",null,[ua(O("select",{"onUpdate:modelValue":l[0]||(l[0]=c=>t.value=c),class:"border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-600"},br,512),[[or,t.value]])])]),O("div",kr,[(ht(!0),ft(he,null,go(dn(s),c=>(ht(),ft("a",{key:c.id,target:"_blank",href:`https://opensea.io/assets/${c.contractAddress}/${c.tokenId}`},[O("div",wr,[O("div",jr,[O("img",{src:`${dn(n)}${c.imageFile}`,class:"block object-cover w-full h-full"},null,8,_r)]),O("div",xr,[O("div",Ur,[O("div",vr,"Rank"+ct(c.rank),1),O("div",Mr,ct(c.name),1)]),O("div",null,[O("div",Sr,[(ht(!0),ft(he,null,go(c.properties,f=>(ht(),ft("div",{key:f.type},[O("div",Lr,ct(f.type),1),O("div",Fr,[O("div",Pr,ct(f.value),1),O("div",Hr,ct(i(f.count/f.total)),1)])]))),128))])])])])],8,yr))),128))])])]))}});ar(Ar).mount("#app");
