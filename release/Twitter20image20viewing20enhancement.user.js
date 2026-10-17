// ==UserScript==
// @name         Twitter image viewing enhancement
// @name:zh-CN   Twitter 图片查看增强
// @name:zh-TW   Twitter 圖像查看增強
// @icon         https://twitter.com/favicon.ico
// @namespace    https://moe.best/
// @version      1.6.1
// @description        Make Twitter photo viewing more humane
// @description:zh-CN  让推特图片浏览更加人性化
// @description:zh-TW  讓 Twitter 照片瀏覽更人性化
// @author       Jindai Kirin
// @include      https://x.com/*
// @include      https://twitter.com/*
// @license      MIT
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @run-at       document-end
// @downloadURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Twitter20image20viewing20enhancement.user.js
// @updateURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Twitter20image20viewing20enhancement.meta.js
// ==/UserScript==
(async()=>{"use strict";const e=(e=0)=>new Promise(t=>setTimeout(t,e));let t=GM_getValue("enableDragToSwitch",!1);GM_registerMenuCommand("Drag to switch images",()=>{t=confirm(`Do you want to enable drag to switch images?\nCurrent: ${t?"Enabled":"Disabled"}\n\nPlease refresh to take effect after modification.`),GM_setValue("enableDragToSwitch",t)}),t&&GM_addStyle("img{-webkit-user-drag:none}");const n={},i=e=>{const t=(e||"").split(",");3===t.length&&(n.close=t[0],n.prev=t[1],n.next=t[2])};if(i(GM_getValue("labels_v1","")),GM_registerMenuCommand("Set aria-label",()=>{let e,t,n=!1;do{const i=GM_getValue("labels_v1","");if(e=prompt("Please input the aria-label of Close, Previous, Next button and join them by commas(,). Submit an empty string will disable it."+(n?"\n\nINPUT ERROR":""),e||i),null===e)return;if(e=e.trim(),0===e.length)return void GM_setValue("labels_v1","");t=e.split(",").map(e=>e.trim()),n=3!==t.length}while(n);const o=t.join(",");i(o),GM_setValue("labels_v1",o)}),!Object.values(n).length)try{const t={af8fa2ad:"close",af8fa2ae:"close",c4d53ba2:"prev",d70740d9:"next",d70740da:"next"},i=[...document.querySelectorAll("script")],o=i.find(e=>e.src.includes("/i18n/"))?.src;if(!o)throw new Error("i18n script not found");const a=o.match(/\/(i18n\/[^.]+)/)?.[1];if(!a)throw new Error("i18n key not found");const r=i.find(e=>e.textContent.includes("window.__SCRIPTS_LOADED__"))?.textContent;if(!r)throw new Error("init script not found");const s=Number(r.match(new RegExp(`(\\d+):"${a}"`))?.[1]);if(!s)throw new Error("i18n module id not found");const l=await(async()=>{for(let t=0;t<100;t++){const t=webpackChunk_twitter_responsive_web.find(([[e]])=>e===s);if(t)return t;await e(100)}throw new Error("i18n module not found")})();Object.values(l[1]).forEach(e=>{if(!(e.length<3))try{e(void 0,void 0,()=>({_register:()=>(e,i)=>{e in t&&(n[t[e]]=i)}}))}catch(e){}})}catch(e){console.error(e)}const o=e=>{const t=(i=n[e],document.querySelector(`[aria-label="${i}"]`));var i;return!!t&&(t.click(),!0)},a=()=>o("close"),r=()=>o("prev"),s=()=>o("next"),l=e=>"IMG"==e.tagName&&e.baseURI.includes("/photo/");if(window.addEventListener("wheel",({deltaY:e,target:t})=>{(l(t)||"swipe-to-dismiss"===t.dataset.testid)&&(e<0?r():e>0&&s())},{capture:!0,passive:!0}),t){let e=0,t=0;window.addEventListener("mousedown",({clientX:n,clientY:i})=>{e=n,t=i},{capture:!0,passive:!0}),window.addEventListener("mouseup",({button:n,clientX:i,clientY:o,target:c})=>{if(0!==n||!l(c))return;const[d,u]=[i-e,o-t].map(Math.abs),w=i-e;d<=10&&u<=10&&a(),u<=d&&(w>0?r():w<0&&s())},{capture:!0,passive:!0})}else document.addEventListener("click",e=>{l(e.target)&&(a(),e.stopPropagation())},{capture:!0,passive:!0})})();