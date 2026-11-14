// ==UserScript==
// @name                Pixiv Previewer
// @name:ja             Pixiv Previewer
// @name:ru             Pixiv Previewer
// @name:zh-CN          Pixiv Previewer
// @name:zh-TW          Pixiv Previewer
// @namespace           https://github.com/Ocrosoft/PixivPreviewer
// @version             3.9.0
// @description         Display preview images (support single image, multiple images, moving images); Download animation(.gif); Sorting the search page by favorite count(and display it).
// @description:zh-CN   显示预览图（支持单图，多图，动图）；动图 GIF 下载；搜索页按热门度（收藏数）排序并显示收藏数。
// @description:ja      プレビュー画像の表示（単一画像、複数画像、動画のサポート）; アニメーションのダウンロード（.gif）; お気に入りの数で検索ページをソートします（そして表示します）。
// @description:zh-TW   顯示預覽圖像（支持單幅圖像，多幅圖像，運動圖像）； 下載動畫（.gif）; 按收藏夾數對搜索頁進行排序（並顯示）。
// @description:ru      Отображение превью изображений (поддержка одиночных, множественных и анимированных изображений); Скачивание анимаций (.gif); Сортировка страницы поиска по количеству добавлений в закладки (с отображением количества).
// @author              Ocrosoft
// @match               *://www.pixiv.net/*
// @grant               unsafeWindow
// @grant               GM.xmlHttpRequest
// @grant               GM_xmlhttpRequest
// @license             GPLv3
// @icon                https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=32&url=https://www.pixiv.net
// @icon64              https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=64&url=https://www.pixiv.net
// @require             https://update.greasyfork.org/scripts/515994/1478507/gh_2215_make_GM_xhr_more_parallel_again.js
// @require             https://openuserjs.org/src/libs/sizzle/GM_config.js
// @require             https://greasyfork.org/scripts/2963-gif-js/code/gifjs.js?version=8596
// @downloadURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Pixiv20Previewer.user.js
// @updateURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Pixiv20Previewer.meta.js
// ==/UserScript==
