// ==UserScript==
// @name                Disable YouTube Music AutoPause
// @name:en             Disable YouTube Music AutoPause
// @name:ja             Disable YouTube Music AutoPause
// @name:zh-TW          Disable YouTube Music AutoPause
// @name:zh-CN          Disable YouTube Music AutoPause
// @namespace           http://tampermonkey.net/
// @version             2025.07.07.002
// @license             MIT License
// @description         "Video paused. Continue watching?" and "Still watching? Video will pause soon" will not appear anymore.
// @description:en      "Video paused. Continue watching?" and "Still watching? Video will pause soon" will not appear anymore.
// @description:ja      「動画が一時停止されました。続きを視聴しますか？」と「視聴を続けていますか？動画がまもなく一時停止されます」は二度と起こりません。
// @description:zh-TW   「影片已暫停，要繼續觀賞嗎？」和「你還在螢幕前嗎？影片即將暫停播放」不再顯示。
// @description:zh-CN   「视频已暂停。是否继续观看？」和「仍在观看？视频即将暂停」不再显示。
// @author              CY Fung
// @match               https://music.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/disable-youtube-autopause.svg
// @supportURL          https://github.com/cyfung1031/userscript-supports
// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Disable20YouTube20Music20AutoPause.user.js
// @updateURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Disable20YouTube20Music20AutoPause.meta.js
// ==/UserScript==
!function(){"use strict";const e=(async()=>{})().constructor,t=new WeakMap,o=new WeakMap,n=new WeakMap,a="YouTube Music";let r=0;const s=e=>e?e.polymerController||e.inst||e||0:e||0;function c(...e){Date.now()<r||(r=Date.now()+280,console.log(...e))}function l(t,o,n,a,r,s,c){Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get(){e.resolve(new Date).then(r).catch(console.warn);return 2===n?`${a}`:a},set(t){let o=c.get(this);return e.resolve([o,t,new Date]).then(s).catch(console.warn),c.set(this,t),!0}})}function i(e){if(!e||t.has(e))return;const r=e.playbackPauseDelayMs,s=e.promptDelaySec,i=e.lactThresholdMs,y=Math.floor(.1*Number.MAX_SAFE_INTEGER),p=Math.floor(y/1e3);if("playbackPauseDelayMs"in e&&r>=0&&r<4*y){t.set(e,r);const o="string"==typeof r?2:+("number"==typeof r);o>=1&&l(e,"playbackPauseDelayMs",o,5*y,e=>{c(`${a} is trying to pause video...`,e.toLocaleTimeString())},e=>{const[t,o,n]=e;console.log(`${a} is trying to change value 'playbackPauseDelayMs' from ${t} to ${o} ...`,n.toLocaleTimeString())},t),"number"!=typeof(e.showPausedActions||0).length||e.tvTyh||(e.tvTyh=[],function(e,t,o){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get(){const e=this[o];return(e||0).length>=1&&(e.length=0),e},set:e=>!0})}(e,"showPausedActions","tvTyh"))}if("promptDelaySec"in e&&s>=0&&s<4*p){o.set(e,s);const t="string"==typeof s?2:+("number"==typeof s);t>=1&&l(e,"promptDelaySec",t,5*p,e=>{c(`${a} is trying to pause video...`,e.toLocaleTimeString())},e=>{const[t,o,n]=e;console.log(`${a} is trying to change value 'promptDelaySec' from ${t} to ${o} ...`,n.toLocaleTimeString())},o)}if("lactThresholdMs"in e&&i>=0&&i<4*y){n.set(e,i);const t="string"==typeof i?2:+("number"==typeof i);t>=1&&l(e,"lactThresholdMs",t,5*y,e=>{},e=>{const[t,o,n]=e;console.log(`${a} is trying to change value 'lactThresholdMs' from ${t} to ${o} ...`,n.toLocaleTimeString())},n)}}let y=Symbol(),p=0;function u(e){if(1==e||3==e){const e=p=1+(1073741823&p);requestAnimationFrame(()=>{e===p&&h()})}}let f=!1,g=!1;function h(){const e=new Set,t=document.querySelector("#player")||0;try{const o=t&&(s(t).__data||t.__data||0),n=o.playerResponse_||o.playerResponse;n&&e.add(n.messages)}catch(e){}const o=t&&(s(t).playerApi_||t.playerApi_||s(t).playerApi||t.playerApi||0);if(o&&"function"==typeof o.getPlayerResponse)try{const t=o.getPlayerResponse();t&&e.add(t.messages)}catch(e){}const n=document.querySelector("#movie_player")||0,a=n&&(s(n).getPlayerResponse?s(n):n);if(a&&"function"==typeof a.getPlayerResponse)try{const t=a.getPlayerResponse();t&&e.add(t.messages)}catch(e){}const r=new Set;for(const t of e)if(t&&t.length>0)for(const e of t)if(e.youThereRenderer){f||(f=!0,console.log("Detected message.youThereRenderer"));let t=null;try{t=e.youThereRenderer.configData.youThereData}catch(e){}t&&r.add(t),t=null;break}if(r.size>0){g||(g=!0,console.log("Detected youThereData"));for(const e of r)i(e);r.clear()}}let d=0;function m(){h();const e=document.querySelector("#player")||0,t=s(e).playerApi_||e.playerApi_||s(e).playerApi||e.playerApi||0;"object"==typeof t&&(void 0===t[y]&&"function"==typeof t.getPlayerState&&(t[y]=t.getPlayerState,t.getPlayerState=function(){let e=this[y](...arguments);if(1==e||3==e)try{h()}catch(e){}return e}),"removeEventListener"in t&&"addEventListener"in t&&(t.removeEventListener("onStateChange",u,!1),t.addEventListener("onStateChange",u,!1)))}document.addEventListener("canplay",function(t){"VIDEO"==t.target.nodeName&&t.target.closest("#player")&&async function(){r=Date.now()+3400;const t=d=1+(1073741823&d);await e.resolve(0),t===d&&(m(),await new e(e=>setTimeout(e,3200)),t===d&&(m(),await new e(e=>setTimeout(e,5400)),t===d&&m()))}()},!0)}();