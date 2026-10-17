// ==UserScript==
// @name                Disable YouTube AutoPause
// @name:en             Disable YouTube AutoPause
// @name:ja             Disable YouTube AutoPause
// @name:zh-TW          Disable YouTube AutoPause
// @name:zh-CN          Disable YouTube AutoPause
// @namespace           http://tampermonkey.net/
// @version             2025.07.08.001
// @license             MIT License
// @description         "Video paused. Continue watching?" and "Still watching? Video will pause soon" will not appear anymore.
// @description:en      "Video paused. Continue watching?" and "Still watching? Video will pause soon" will not appear anymore.
// @description:ja      「動画が一時停止されました。続きを視聴しますか？」と「視聴を続けていますか？動画がまもなく一時停止されます」は二度と起こりません。
// @description:zh-TW   「影片已暫停，要繼續觀賞嗎？」和「你還在螢幕前嗎？影片即將暫停播放」不再顯示。
// @description:zh-CN   「视频已暂停。是否继续观看？」和「仍在观看？视频即将暂停」不再显示。
// @author              CY Fung
// @match               https://www.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/disable-youtube-autopause.svg
// @supportURL          https://github.com/cyfung1031/userscript-supports
// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Disable20YouTube20AutoPause.user.js
// @updateURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Disable20YouTube20AutoPause.meta.js
// ==/UserScript==
!function(){"use strict";const e=(async()=>{})().constructor,t=new WeakMap,o=new WeakMap,n=new WeakMap,a="YouTube";let r=0;const s=e=>e?e.polymerController||e.inst||e||0:e||0;function c(...e){Date.now()<r||(r=Date.now()+280,console.log(...e))}function l(t,o,n,a,r,s,c){Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get(){e.resolve(new Date).then(r).catch(console.warn);return 2===n?`${a}`:a},set(t){const o=c.get(this);return e.resolve([o,t,new Date]).then(s).catch(console.warn),c.set(this,t),!0}})}function y(e){if(!e||t.has(e))return;const r=e.playbackPauseDelayMs,s=e.promptDelaySec,y=e.lactThresholdMs,i=Math.floor(.1*Number.MAX_SAFE_INTEGER),u=Math.floor(i/1e3);if("playbackPauseDelayMs"in e&&r>=0&&r<4*i){t.set(e,r);const o="string"==typeof r?2:+("number"==typeof r);o>=1&&l(e,"playbackPauseDelayMs",o,5*i,e=>{c(`${a} is trying to pause video...`,e.toLocaleTimeString())},e=>{const[t,o,n]=e;console.log(`${a} is trying to change value 'playbackPauseDelayMs' from ${t} to ${o} ...`,n.toLocaleTimeString())},t),"number"!=typeof(e.showPausedActions||0).length||e.tvTyh||(e.tvTyh=[],function(e,t,o){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get(){const e=this[o];return(e||0).length>=1&&(e.length=0),e},set:e=>!0})}(e,"showPausedActions","tvTyh"))}if("promptDelaySec"in e&&s>=0&&s<4*u){o.set(e,s);const t="string"==typeof s?2:+("number"==typeof s);t>=1&&l(e,"promptDelaySec",t,5*u,e=>{c(`${a} is trying to pause video...`,e.toLocaleTimeString())},e=>{const[t,o,n]=e;console.log(`${a} is trying to change value 'promptDelaySec' from ${t} to ${o} ...`,n.toLocaleTimeString())},o)}if("lactThresholdMs"in e&&y>=0&&y<4*i){n.set(e,y);const t="string"==typeof y?2:+("number"==typeof y);t>=1&&l(e,"lactThresholdMs",t,5*i,e=>{},e=>{const[t,o,n]=e;console.log(`${a} is trying to change value 'lactThresholdMs' from ${t} to ${o} ...`,n.toLocaleTimeString())},n)}}let i=!1,u=!1;function h(){1===arguments.length&&(r=Date.now()+3400),e.resolve(0).then(()=>{!function(){const e=new Set,t=document.querySelector("#page-manager")||0;try{const o=(t&&(s(t).data||t.data||s(t).__data||t.__data||0)).playerResponse;o&&e.add(o.messages)}catch(e){}const o=document.querySelector("#ytd-player")||0,n=o&&(s(o).player_||o.player_||s(o).player||o.player||0);if(n&&"function"==typeof n.getPlayerResponse)try{const t=n.getPlayerResponse();t&&e.add(t.messages)}catch(e){}const a=document.querySelector("#movie_player")||0,r=a&&(s(a).getPlayerResponse?s(a):a);if(r&&"function"==typeof r.getPlayerResponse)try{const t=r.getPlayerResponse();t&&e.add(t.messages)}catch(e){}const c=new Set;for(const t of e)if(t&&t.length>0)for(const e of t)if(e.youThereRenderer){i||(i=!0,console.log("Detected message.youThereRenderer"));let t=null;try{t=e.youThereRenderer.configData.youThereData}catch(e){}t&&c.add(t),t=null;break}if(c.size>0){u||(u=!0,console.log("Detected youThereData"));for(const e of c)y(e);c.clear()}}();const e=document.querySelector("ytd-watch-flexy")||0,t=s(e);if(t){const o=(t.youThereManager_||e.youThereManager_||0||0).youThereData_||0;o&&y(o);const n=t.youthereDataChanged_;"function"!=typeof n||n.lq2S7||(console.log("detected ytdFlexyCnt.youthereDataChanged_"),t.youthereDataChanged_=function(e){return function(){console.log("youthereDataChanged_()");const t=e.apply(this,arguments);return h(),t}}(n),t.youthereDataChanged_.lq2S7=1)}}).catch(console.warn)}document.addEventListener("yt-page-data-updated",h,!1),document.addEventListener("yt-navigate-finish",h,!1),document.addEventListener("spfdone",h,!1)}();