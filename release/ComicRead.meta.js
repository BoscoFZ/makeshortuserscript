// ==UserScript==
// @name            ComicRead
// @name:en         ComicRead
// @name:ru         ComicRead
// @namespace       ComicRead
// @version         12.11.0
// @description     为漫画站增加双页阅读、翻译等优化体验的增强功能。百合会（记录阅读历史、自动签到等）、百合会新站、E-Hentai（关联外站、快捷收藏、标签染色、识别广告页等）、nhentai（彻底屏蔽漫画、无限滚动）、Yurifans（自动签到）、拷贝漫画(copymanga)（显示最后阅读记录、解锁隐藏漫画）、再漫画、漫画柜(manhuagui)、动漫屋(dm5)、mangabz、komiic、無限動漫、绅士漫画(wnacg)、禁漫天堂、NoyAcg、熱辣漫畫、hanime1、hitomi、hdoujin、SchaleNetwork、nude-moon、HentaiZap、IMHentai、HentaiEra、HentaiEnvy、MangaDex、welovemanga、kisslove(klz9)、Pawchive、kemono、nekohouse、Pixiv、微博、明日方舟泰拉记事社、Postimages、ニコニコ漫画、最前線、芸能ヌード、Tachidesk、LANraragi
// @description:en  Add dual-page reading, translation and other enhancements to comic sites. E-Hentai (Associate nhentai, Quick favorite, Colorize tags, Floating tag list, etc.) | nhentai (Totally block comics, Auto page turning) | hitomi | hdoujin | SchaleNetwork | nude-moon | HentaiZap | IMHentai | HentaiEra | HentaiEnvy | Pawchive | kemono | nekohouse | MangaDex | welovemanga | kisslove(klz9)
// @description:ru  Добавляет расширенные функции для удобства на сайт, такие как двухстраничный режим и перевод.
// @author          hymbz
// @license         AGPL-3.0-or-later
// @noframes
// @match           *://*/*
// @connect         yamibo.com
// @connect         exhentai.org
// @connect         e-hentai.org
// @connect         hath.network
// @connect         nhentai.net
// @connect         gold-usergeneratedcontent.net
// @connect         hypergryph.com
// @connect         mangabz.com
// @connect         schale.network
// @connect         touhou.ai
// @connect         jsdelivr.net
// @connect         npmmirror.com
// @connect         self
// @connect         127.0.0.1
// @connect         *
// @connect         mapi.elfgjfghkk.club
// @connect         api.2024manga.com
// @connect         mapi.fgjfghkk.club
// @connect         mapi.hotmangasg.com
// @connect         mapi.fgjfghkkcenter.club
// @connect         www.manga2026.xyz
// @connect         mapi.hotmangasf.com
// @connect         mapi.hotmangasd.com
// @connect         www.manga2025.com
// @connect         api.manga2025.com
// @connect         m.manga2025.com
// @connect         api.copy4000.com
// @connect         api.2026copy.com
// @connect         api.mangacopy.com
// @connect         api.copy3000.com
// @connect         mapi.copy20.com
// @grant           GM_addElement
// @grant           GM_getResourceText
// @grant           GM_xmlhttpRequest
// @grant           GM.addValueChangeListener
// @grant           GM.removeValueChangeListener
// @grant           GM.getResourceText
// @grant           GM.getValue
// @grant           GM.setValue
// @grant           GM.listValues
// @grant           GM.deleteValue
// @grant           GM.registerMenuCommand
// @grant           GM.unregisterMenuCommand
// @grant           unsafeWindow
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUxpcWB9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i////198il17idng49DY3PT297/K0MTP1M3X27rHzaCxupmstbTByK69xOfr7bfFy3WOmqi4wPz9/X+XomSBjqW1vZOmsN/l6GmFkomeqe7x8vn6+kv+1vUAAAAOdFJOUwDsAoYli9zV+lIqAZEDwV05SQAAAUZJREFUOMuFk+eWgjAUhGPBiLohjZACUqTp+z/gJkqJy4rzg3Nn+MjhwB0AANjv4BEtdITBHjhtQ4g+CIZbC4Qb9FGb0J4P0YrgCezQqgIA14EDGN8fYz+f3BGMASFkTJ+GDAYMUSONzrFL7SVvjNQIz4B9VERRmV0rbJWbrIwidnsd6ACMlEoip3uad3X2HJmqb3gCkkJELwk5DExRDxA6HnKaDEPSsBnAsZoANgJaoAkg12IJqBiPACImXQKF9IDULIHUkOk7kDpeAMykHqCEWACy8ACdSM7LGSg5F3HtAU1rrkaK9uGAshXS2lZ5QH/nVhmlD8rKlmbO3ZsZwLe8qnpdxJRnLaci1X1V5R32fjd5CndVkfYdGpy3D+htU952C/ypzPtdt3JflzZYBy7fi/O1euvl/XH1Pp+Cw3/1P1xOZwB+AWMcP/iw0AlKAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGl0cGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC
// @resource        solid-js https://registry.npmmirror.com/solid-js/1.9.8/files/dist/solid.cjs
// @resource        fflate https://registry.npmmirror.com/fflate/0.8.2/files/umd/index.js
// @resource        jsqr https://registry.npmmirror.com/jsqr/1.4.0/files/dist/jsQR.js
// @resource        comlink https://registry.npmmirror.com/comlink/4.4.2/files/dist/umd/comlink.min.js
// @resource        solid-js|store https://registry.npmmirror.com/solid-js/1.9.8/files/store/dist/store.cjs
// @resource        solid-js|web https://registry.npmmirror.com/solid-js/1.9.8/files/web/dist/web.cjs
// @resource        _tensorflow|tfjs https://registry.npmmirror.com/@tensorflow/tfjs/4.22.0/files/dist/tf.min.js
// @resource        _tensorflow|tfjs-backend-webgpu https://registry.npmmirror.com/@tensorflow/tfjs-backend-webgpu/4.22.0/files/dist/tf-backend-webgpu.js
// @supportURL      https://github.com/hymbz/ComicReadScript/issues
// @downloadURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/ComicRead.user.js
// @updateURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/ComicRead.meta.js
// ==/UserScript==
