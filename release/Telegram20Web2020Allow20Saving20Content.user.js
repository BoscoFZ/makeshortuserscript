// ==UserScript==
// @name         Telegram Web Media Downloader — Save Restricted Photos & Videos (Batch) + Copy Text
// @name:ru      Telegram Web: медиа-загрузчик — фото/видео из защищённых чатов (пакетно) + копирование текста
// @name:de      Telegram Web Medien-Downloader — geschützte Fotos & Videos speichern (Batch) + Text
// @name:es      Telegram Web: descargar fotos y vídeos restringidos (por lotes) + copiar texto
// @name:fr      Telegram Web: téléchargeur de médias — photos & vidéos restreintes (lot) + copier le texte
// @name:it      Telegram Web: download media — foto e video con restrizioni (batch) + copia testo
// @name:pl      Telegram Web: pobieranie mediów — z zastrzeżonych czatów (zbiorowo) + kopiowanie tekstu
// @name:pt-BR   Telegram Web: baixar mídia — salvar fotos e vídeos restritos (em lote) + copiar texto
// @name:tr      Telegram Web medya indirici — kısıtlı fotoğraf ve videoları kaydet (toplu) ve metni kopyala
// @name:id      Pengunduh media Telegram Web — simpan foto & video terbatas (massal) + salin teks
// @name:zh-CN   Telegram 网页版媒体下载器 — 保存受限聊天的图片和视频（单个 + 批量）并复制文字
// @name:zh-TW   Telegram 網頁版媒體下載器 — 儲存受限聊天的相片與影片（單一 + 批次）並複製文字
// @name:ja      Telegram Web メディアダウンローダー — 制限付きチャットの写真・動画を保存（単体＋一括）＆テキストコピー
// @name:ko      Telegram 웹 미디어 다운로더 — 제한된 채팅의 사진·동영상 저장(개별 + 일괄) 및 텍스트 복사
// @name:vi      Trình tải media Telegram Web — lưu ảnh & video bị hạn chế (hàng loạt) + sao chép văn bản
// @name:th      ตัวดาวน์โหลดสื่อ Telegram เว็บ — บันทึกรูปและวิดีโอจากแชทที่จำกัด (เป็นชุด) + คัดลอกข้อความ
// @namespace    c0d3r
// @license      MIT
// @version      1.0
// @description       Download photos and videos from Telegram Web, one by one or in batches — even in restricted "no-forwards" chats. Also re-enables copying text from protected messages.
// @description:ru    Скачивайте фото и видео из Telegram Web — по одному или пакетно — даже в защищённых чатах с запретом пересылки. Также возвращает копирование текста из защищённых сообщений.
// @description:de    Lade Fotos und Videos aus Telegram Web herunter – einzeln oder als ganze Auswahl – auch in eingeschränkten Chats ohne Weiterleitung. Aktiviert außerdem das Kopieren von Text aus geschützten Nachrichten.
// @description:es    Descarga fotos y vídeos de Telegram Web, de uno en uno o por lotes, incluso en chats restringidos sin reenvío. También vuelve a habilitar copiar texto de mensajes protegidos.
// @description:fr    Téléchargez les photos et vidéos de Telegram Web, une par une ou par lots entiers, même dans les conversations restreintes sans transfert. Réactive aussi la copie du texte des messages protégés.
// @description:it    Scarica foto e video da Telegram Web, uno alla volta o in blocco, anche nelle chat con restrizioni e inoltro disabilitato. Riabilita anche la copia del testo dai messaggi protetti.
// @description:pl    Pobieraj zdjęcia i filmy z Telegram Web — pojedynczo lub całymi zaznaczeniami — nawet na zastrzeżonych czatach z blokadą przesyłania dalej. Przywraca też kopiowanie tekstu z chronionych wiadomości.
// @description:pt-BR Baixe fotos e vídeos do Telegram Web, um a um ou em lotes inteiros, mesmo em conversas restritas sem encaminhamento. Também reativa a cópia de texto de mensagens protegidas.
// @description:tr    Telegram Web'den fotoğraf ve videoları tek tek veya toplu olarak indirin; iletime kapalı kısıtlı sohbetlerde bile. Ayrıca korumalı mesajlardaki metni kopyalamayı yeniden etkinleştirir.
// @description:id    Unduh foto dan video dari Telegram Web, satu per satu atau sekaligus, bahkan di obrolan terbatas tanpa teruskan. Juga mengaktifkan kembali penyalinan teks dari pesan yang dilindungi.
// @description:zh-CN 从 Telegram 网页版下载图片和视频，可单个或整批保存，即使在禁止转发的受限聊天中也能使用。同时恢复复制受保护消息中的文字。
// @description:zh-TW 從 Telegram 網頁版下載相片與影片，可單一或整批儲存，即使在禁止轉發的受限聊天中也能使用。同時恢復複製受保護訊息中的文字。
// @description:ja    Telegram Web の写真や動画を1件ずつ、または選択範囲ごと一括でダウンロード。転送禁止の制限付きチャットでも保存できます。保護されたメッセージのテキストコピーも復活させます。
// @description:ko    Telegram 웹에서 사진과 동영상을 하나씩 또는 선택 항목 전체를 한 번에 다운로드하세요. 전달 금지된 제한 채팅에서도 저장할 수 있습니다. 보호된 메시지의 텍스트 복사도 다시 활성화합니다.
// @description:vi    Tải ảnh và video từ Telegram Web, từng tệp hoặc cả nhóm đã chọn, ngay cả trong cuộc trò chuyện bị hạn chế cấm chuyển tiếp. Đồng thời bật lại việc sao chép văn bản từ tin nhắn được bảo vệ.
// @description:th    ดาวน์โหลดรูปภาพและวิดีโอจาก Telegram เว็บ ทีละไฟล์หรือทั้งชุดที่เลือก แม้ในแชทที่จำกัดและห้ามส่งต่อ อีกทั้งยังเปิดให้คัดลอกข้อความจากข้อความที่ป้องกันไว้ได้อีกครั้ง
// @author       copyMister
// @match        https://web.telegram.org/*
// @match        https://webk.telegram.org/*
// @match        https://webz.telegram.org/*
// @icon         https://web.telegram.org/k/assets/img/favicon.ico
// @grant        none
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Telegram20Web2020Allow20Saving20Content.user.js
// @updateURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Telegram20Web2020Allow20Saving20Content.meta.js
// ==/UserScript==
!function(){"use strict";if(!("webk.telegram.org"===location.hostname||location.pathname.startsWith("/k/")))return void location.replace("https://web.telegram.org/k/"+location.hash);const e="undefined"!=typeof unsafeWindow?unsafeWindow:window,t=e=>new Promise(t=>setTimeout(t,e)),n=e=>e&&e.media&&(e.media.document||e.media.photo),o=(t,n)=>e.mtprotoMessagePort?.getMessageByPeer(t,+n);async function a(t){const o=n(t),a=e.appDownloadManager;a?o&&await a.downloadToDisc({media:o}):console.warn("[tg-save] appDownloadManager missing — WebK internals changed?")}let s=null;function c(e){const t=e.querySelector(".btn-menu-item");if(!s||!t||e.querySelector("#nk-tg-down"))return;const{peerId:n,mid:c}=s;t.insertAdjacentHTML("beforebegin",'<div class="btn-menu-item rp-overflow" id="nk-tg-down"><span class="btn-menu-item-icon" style="font-size:1rem">📥</span><span class="btn-menu-item-text">Download</span></div>'),e.querySelector("#nk-tg-down").addEventListener("click",()=>a(o(n,c)).catch(e=>console.warn("[tg-save] download failed",e)))}function d(e){const t=e.querySelector(".selection-container");t&&!t.querySelector("#nk-tg-batch")&&(t.insertAdjacentHTML("beforeend",'<button id="nk-tg-batch" class="btn-primary btn-transparent text-bold" title="Download selected media" style="cursor:pointer;width:auto;"><span style="font-size:1rem;margin:0 .4rem .2rem 0;">📥</span> <span class="nk-txt">D/L</span></button>'),t.querySelector("#nk-tg-batch").addEventListener("click",r))}async function r(){const o=e.appImManager?.chat?.selection,s=document.querySelector("#nk-tg-batch .nk-txt"),c=(await(o?.getSelectedMessages())||[]).filter(n);if(!c.length)return s.textContent="N/A",await t(1500),void(s.textContent="D/L");const d=document.getElementById("nk-tg-batch");d.disabled=!0,d.style.opacity=.6;for(let e=0;e<c.length;e++){s.textContent=e+1+"/"+c.length;try{await a(c[e])}catch(e){console.warn("[tg-save] batch item failed",e)}e<c.length-1&&await t(1e3)}d.disabled=!1,d.style.opacity=1,s.textContent="D/L",o?.cancelSelection()}document.addEventListener("mouseup",e=>{if(s=null,2!==e.button)return;const t=e.target.closest("[data-mid]");t&&t.closest(".no-forwards")&&n(o(t.dataset.peerId,t.dataset.mid))&&(s={peerId:t.dataset.peerId,mid:t.dataset.mid})}),document.addEventListener("copy",e=>{const t=getSelection()?.anchorNode,n=t&&(1===t.nodeType?t:t.parentElement);n?.closest(".no-forwards")&&e.stopImmediatePropagation()},!0);const i=document.createElement("style");i.textContent=".bubble.no-forwards,.bubble.no-forwards *{-webkit-user-select:text!important;user-select:text!important}",(document.head||document.documentElement).appendChild(i);const l=new MutationObserver(e=>{for(const t of e)for(const e of t.addedNodes)1===e.nodeType&&("bubble-contextmenu"===e.id?c(e):e.classList.contains("selection-wrapper")&&d(e))}),m=()=>l.observe(document.body,{childList:!0,subtree:!0});document.body?m():document.addEventListener("DOMContentLoaded",m,{once:!0})}();