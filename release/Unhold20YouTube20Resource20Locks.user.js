// ==UserScript==
// @name                Unhold YouTube Resource Locks
// @name:en             Unhold YouTube Resource Locks
// @name:ja             Unhold YouTube Resource Locks
// @name:zh-TW          Unhold YouTube Resource Locks
// @name:zh-CN          Unhold YouTube Resource Locks
// @namespace           http://tampermonkey.net/
// @version             2026.05.09.0
// @license             MIT License
// @description         Release YouTube's used IndexDBs & Disable WebLock to make background tabs able to sleep
// @description:en      Release YouTube's used IndexDBs & Disable WebLock to make background tabs able to sleep
// @description:ja      YouTube の 使用済みIndexDB を解放し、WebLock を無効にして、バックグラウンドページを休止状態になるように
// @description:zh-TW   釋放 YouTube 用過的 IndexDBs 並禁用 WebLock 讓後台頁面能進入休眠
// @description:zh-CN   释放 YouTube 用过的 IndexDBs 并禁用 WebLock 让后台页面能进入休眠
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @exclude             https://www.youtube.com/live_chat*
// @exclude             https://www.youtube.com/live_chat_replay*
// @match               https://music.youtube.com/*
// @match               https://m.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-unlock-indexedDB.png
// @supportURL          https://github.com/cyfung1031/userscript-supports

// @compatible          edge
// @compatible          chrome
// @compatible          firefox
// @compatible          opera

// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Unhold20YouTube20Resource20Locks.user.js
// @updateURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Unhold20YouTube20Resource20Locks.meta.js
// ==/UserScript==
!function(e){"use strict";const t=(async()=>{})().constructor,n=[];let o=0;const c=new Set,s="function"==typeof WeakRef?e=>e?new WeakRef(e):null:e=>e||null,r=e=>e&&e.deref?e.deref():e;!function(i,l){let u;try{u=document.documentElement.getRootNode().defaultView}catch(f){}const a=u||e;"function"==typeof(((a||0).navigator||0).locks||0).request&&(a.navigator.locks.query=function(){return i.log(arguments),new t(e=>{})},a.navigator.locks.request=function(){return i.log(arguments),new t(e=>{})});const d="IDBFactory"===(((a||0).indexedDB||0).constructor||0).name;if(d){const m=Symbol(),g=Symbol(),h=Symbol(),p=new WeakMap;let y=0;const w=[];let v=0;const b=e=>{w.push(e)};async function D(){if(o){o=0;for(const e of[...c.values()])try{let t=e.result,n=t.name;t.close(),t=null,y--,b({databaseId:n,action:"close",time:Date.now()})}catch(e){}c.clear();for(const e of n){let[t,n,o,c]=e;e.length=0;let s=r(t);t=null,s&&(s.close(),s=null),y--,b({databaseId:n,action:"close",time:Date.now()})}n.length=0,0===y&&w.length>0&&(v>0&&(clearTimeout(v),v=0),v=setTimeout(()=>{if(v=0,0===y&&w.length>0){let e=[...w];w.length=0,e.sort((e,t)=>e.databaseId.localeCompare(t.databaseId)||e.time-t.time),l.dir(e)}},300))}}function I(e,t,c,r){o>0&&clearTimeout(o),n.push([s(e),t,c,r]),o=setTimeout(D,18e3)}function k(e,t,o){return function(s){e.call(this,arguments);const r=(s||0).target;c.delete(r)&&(I(r.result,t,o,s.type),i.log("releaseOnIdle",n.length,t))}}function T(e){return function(t,n,...o){if(2===arguments.length&&("error"===t||"success"===t)){let o=p.get(n);return o||(o=k(n,e,t),p.set(n,o)),this[m](t,o)}return this[m](t,n,...o)}}function B(){return function(e,t=void 0){const n=this[h](e,t);return n[m]=n.addEventListener,n.addEventListener=T(e),n[g]=n.removeEventListener,n.removeEventListener=function(e,t){if(2===arguments.length&&("error"===e||"success"===e)){const n=p.get(t);return this[g](e,n||t)}return this[g](...arguments)},y++,c.add(n),o>0&&clearTimeout(o),o=setTimeout(D,18e3),b({databaseId:e,action:"open",time:Date.now()}),n}}a.indexedDB.constructor.prototype[h]=a.indexedDB.constructor.prototype.open,a.indexedDB.constructor.prototype.open=B()}}(Object.assign({},console,{log:function(){}}),console)}(this instanceof Window?this:self instanceof Window?self:window);