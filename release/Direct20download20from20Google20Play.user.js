// ==UserScript==
// @name         Direct download from Google Play
// @name:it      Download diretto dal Google Play Store
// @namespace    StephenP
// @version      3.5.0
// @description  Adds APK-DL, APKPure, APKCombo, APKPremier, APKMirror and Evozi download buttons to Google Play Store when browsing apps.
// @description:it  Aggiunge i tasti di download di APK-DL, APKPure, APKCombo, APKPremier, APKMirror e Evozi al Google Play Store quando si naviga tra le applicazioni.
// @author       StephenP
// @icon      data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEV2ZXLgIkzxMUf6OkN9f5v7ZTAOpP8OxP4myPsU1LkU1P4k4oAr3vwk7H1U41v+ziz92jIMI6b6AAAAAXRSTlMAQObYZgAAAKtJREFUOMul0ssSgyAMQNGAtCgv/f+vLcVCSCLiTLPL3MPAAoAn4/0EbP6eWDsRaxEx3gG7xe+MAIo4ABPhiIjXoBeCOCEiB0IkDphI+3EwQETaM+iIYyL3AhpxVKT3OSgCEeaFACgowiyLBE241WgE7ZEBhdFaVwA9CNi1vgQB+wCE1kcg1A4DQO6n5uxKleMgO/x6nrKKDrXX/eINpstV9D+G9SLIruCP+QAbnhEp2bGFogAAAABJRU5ErkJggg==
// @match        https://play.google.com/*
// @match        http://play.google.com/*
// @match        http://apkfind.com/store/captcha?app=*
// @grant        GM.xmlHttpRequest
// @grant        GM.getValue
// @grant        GM.setValue
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @connect      self
// @connect      apkpure.com
// @connect      apkfind.com
// @connect      apk-cloud.com
// @connect      winudf.com
// @connect      apkcombo.com
// @connect      down-apk.com
// @connect      play.googleapis.com
// @connect      gvt1.com
// @connect      apkpremier.com
// @connect      web-api.aptoide.com
// @connect      apk.support
// @contributionURL https://buymeacoffee.com/stephenp_greasyfork
// @downloadURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Direct20download20from20Google20Play.user.js
// @updateURL https://raw.githubusercontent.com/BoscoFZ/makeshortuserscript/release/release/Direct20download20from20Google20Play.meta.js
// ==/UserScript==
var ui,wlButton,pageURL,title,appCwiz,useGS,done=[0];function starter(){if(!0===document.location.href.includes("apkfind"))setInterval(unredirect,100);else try{window.location.href.toString();if(ui=checkUI(),pageURL=location.href,ui>0){title=document.getElementById("main-title").innerHTML;var e=document.createElement("style");e.textContent='.ddlButton:visited{color: white;} .ddlButton:hover{opacity: 0.8;} .ddlButton:active{opacity: 0.6;} .ddlButton{font-family: "Google Sans",Roboto,Arial,sans-serif; line-height: 3rem; font-size: 1rem; font-weight: 500; height: 44px; margin-right: 0.5em; min-height: 44px; min-width: 200px; padding: 10px 16px; border-radius: 0.5em; color: white; position: relative; z-index: 0;}',document.body.appendChild(e)}(pageURL.includes("details?id=")||pageURL.includes("/store/search?q="))&&addButtons(),setInterval(checkReload,2e3)}catch(e){console.log("main(): "+e)}}function unredirect(){var e=document.body.children.length-1;parseInt(document.body.children[e].style.zIndex,10)>2&&(""==document.body.children[e].id?(document.body.children[e].style.zIndex="1",document.body.children[e-1].style.zIndex="-1000"):document.body.children[e].style.zIndex="-1000")}function waitForRemovingButtons(){if(pageURL!=location.href||!1===isButtonVisible()){if(title=document.getElementById("main-title").innerHTML,pageURL=location.href,wlButton=null,location.href.includes("details?id=")||location.href.includes("/store/search?q=")){if(ui>0&&document.getElementsByClassName("ddlButton").length>0)try{removePreviousCwiz()}catch(e){console.log(e+"; I was probably just trying to remove buttons that weren't there...")}addButtons()}}else setTimeout(waitForRemovingButtons,1e3)}function checkReload(){pageURL==location.href&&!1!==isButtonVisible()||waitForRemovingButtons()}function isButtonVisible(){var e=document.getElementsByClassName("ddlButton");if(e.length>0){for(var t=0;t<e.length;t++)if(null!=e[t].offsetParent)return!0;return!1}return!document.location.href.includes("play.google.com/store/apps/details")||(console.log("apppage//"+!1),!1)}function addButtons(){var e=-1,t=null;if(ui>0){for(t=get2022UIButtons();"C-WIZ"!=t.tagName;)t=t.parentNode;try{e=t.querySelector("meta[itemprop=price]").content}catch(t){console.error("Price not found. Maybe the app is already installed or not officially available?"),e=0}var o;o=t.parentNode;do{"C-WIZ"==o.tagName&&(appCwiz=o),o=o.parentNode}while("BODY"!=o.tagName)}else{document.getElementById("search-section").lastChild.remove();let e=document.getElementById("search-section"),t=document.createElement("SPAN");t.style="margin-top: 32px; float: left",t.textContent="or ",e.appendChild(t);let o=document.createElement("SPAN"),n=document.createElement("A");n.style="background-color: #FF8B14; font-weight: bold; text-decoration: none; padding: 1em; margin: 17px; float: left; color: white; cursor: pointer;",n.textContent="Search on APKMirror",n.className="rounded",n.id="apkMirrorBtn";let r="https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s="+location.search.match(/id=(.*)/)[1].split("&",1);n.addEventListener("click",(function(){window.open(r)})),o.appendChild(n),e.appendChild(o);let l=document.createElement("DIV");l.style="clear:both",e.appendChild(l),GM.xmlHttpRequest({method:"GET",url:"https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s="+location.search.match(/id=(.*)/)[1].split("&",1),timeout:5e3,onload:function(e){if((new DOMParser).parseFromString(e.responseText,"text/html").getElementById("content").getElementsByClassName("appRow").length>0)n.textContent="Available on APKMirror";else{let e=n.cloneNode(!0);e.textContent="Not available on APKMirror",e.style.backgroundColor="#CCCCCC",e.style.cursor="not-allowed",n.parentNode.replaceChild(e,n)}}})}if(0==e){var n,r;if(location.href.includes("details?id="))r=location.search.match(/id=(.*)/)[1].split("&",1);else if(location.href.includes("/store/search?q=")){let e=t.querySelector('[data-item-id^="%.@."]').getAttribute("data-item-id");r=e.match(/%\.@\.".+"/)[0].replace('%.@."',"").replace('"',"")}var l="https://d.apkpure.com/b/APK/"+r+"?version=latest",i="https://apps.evozi.com/apk-downloader/?id="+r,a="http://apkfind.com/store/download?id="+r,d="https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s="+r,s="https://apkcombo.com/genericApp/"+r+"/download/apk",c="https://apkpremier.com/download/"+r.toString().replace(/[.]/g,"-"),u="https://web-api.aptoide.com/search?query="+r,p="https://apk.support/download-app/"+r;wlButton=document.createDocumentFragment();var m;n=t.parentNode,m="ddlButton";let e=document.createElement("span");e.id="apkdlbutton";let o=document.createElement("A");o.style.backgroundColor="#009688",o.className=m,o.textContent="APK-DL",e.appendChild(o);let f=document.createElement("span");f.id="apkpurebutton";let h=document.createElement("A");h.style.backgroundColor="#24cd77",h.className=m,h.textContent="APKPure",f.appendChild(h);let g=document.createElement("span");g.id="apkcombobutton";let C=document.createElement("A");C.style.backgroundColor="#00875f",C.className=m,C.textContent="APKCombo",C.href=s,g.appendChild(C);let b=document.createElement("span");b.id="apkpremierbutton";let w=document.createElement("A");w.style.backgroundColor="#3740ff",w.className=m,w.textContent="APKPremier",b.appendChild(w);let y=document.createElement("span"),k=document.createElement("A");k.addEventListener("click",(function(){window.open(i)})),k.style.backgroundColor="#286090",k.className=m,k.textContent="Evozi",y.appendChild(k);let E=document.createElement("span"),x=document.createElement("A");x.addEventListener("click",(function(){window.open(d)})),x.style.backgroundColor="#FF8B14",x.className=m,x.textContent="APKMirror",E.appendChild(x);let v=document.createElement("span");v.id="aptoidebutton";let B=document.createElement("A");B.style.backgroundColor="#fe6446",B.className=m,B.textContent="Aptoide",v.appendChild(B);let A=document.createElement("span");A.id="apksupportbutton";let R=document.createElement("A");R.style.backgroundColor="#3740ff",R.className=m,R.textContent="APKSupport",R.href=p,A.appendChild(R),n.appendChild(e),n.appendChild(f),n.appendChild(g),n.appendChild(document.createElement("BR")),n.appendChild(b),n.appendChild(y),n.appendChild(E),n.appendChild(v),n.appendChild(A),n.appendChild(wlButton),document.getElementById("apkdlbutton").onclick=function(){ddl(this,a,r)},document.getElementById("apkpurebutton").onclick=function(){ddl(this,l,r)},document.getElementById("apkcombobutton").onclick=function(){return ddl(this,s,r),!1},document.getElementById("apkpremierbutton").onclick=function(){ddl(this,c,r)},document.getElementById("aptoidebutton").onclick=function(){ddl(this,u,r)},document.getElementById("apksupportbutton").onclick=function(){return ddl(this,p,r),!1}}}function openLink(e){window.open(e.replace("http://","https://"),"_self")}function ddlFinalApk(e,t,o){return""!=e?(done[o]=0,GM.xmlHttpRequest({method:"GET",url:e,timeout:5e3,ontimeout:function(e){0==done[o]?t.firstChild.textContent="Retry":done[o]=0},onprogress:function(n){(n.finalUrl.includes("winudf.com")||n.finalUrl.includes("down-apk.com")||n.finalUrl.includes("/play-apps-download-default/"))&&0==done[o]&&(console.log("downloading file n."+o),done[o]=1,e.includes("apkpure")||e.includes("apkpremier")?(window.open(n.finalUrl,"_self"),t.onclick=function(){openLink(n.finalUrl)},t.firstChild.textContent="Ready!"):(window.open(n.finalUrl,o),t.firstChild.textContent="APKCombo"))},onload:function(e){0==done[o]?t.firstChild.textContent="Retry":done[o]=0},onerror:function(){buttonError(t,"Offline!")}}),0):(buttonError(t,"Failed!"),-1)}function ddl(e,t,o){if(e.firstChild.textContent="Loading...",t.includes("apkfind"))try{GM.xmlHttpRequest({method:"GET",url:t,onload:function(t){if(console.log(t),t.finalUrl.includes("/captcha?"))e.firstChild.addEventListener("click",(function(){window.open(t.finalUrl)})),e.firstChild.textContent="CAPTCHA",e.onclick=null;else if(t.finalUrl.includes("app/removed"))buttonError(e,"Removed!");else try{var o="http:"+(new DOMParser).parseFromString(t.response,"text/html").getElementsByClassName("mdl-button")[0].getAttribute("href");e.firstChild.textContent="Ready!",openLink(o),e.onclick=function(){openLink(o)}}catch(t){buttonError(e,"Failed!"),console.log(t)}},onerror:function(){buttonError(e,"Offline!")}})}catch(t){buttonError(e,"Failed!"),console.log(t)}else if(t.includes("apkpure")){if(-1==ddlFinalApk(t,e,0))try{GM.xmlHttpRequest({method:"GET",url:t,onload:function(o){switch(o.status){case 410:buttonError(e,"Removed!");break;case 404:buttonError(e,"Not found!");break;default:var n=o.responseText.substr(o.responseText.indexOf("https://download.apkpure.com/b/"),o.responseText.length-1);n=n.substr(0,n.indexOf('"')),console.log(t),e.firstChild.textContent="Wait...",ddlFinalApk(n,e,0)}},onerror:function(){buttonError(e,"Offline!")}})}catch(t){buttonError(e,"Failed!"),console.log(t)}}else if(t.includes("apkcombo"))try{var n;GM.xmlHttpRequest({method:"POST",url:"https://apkcombo.com/checkin",headers:{Referer:t,Origin:"https://apkcombo.com"},onload:function(o){n=o.responseText,GM.xmlHttpRequest({method:"GET",url:t,onload:function(o){switch(o.status){case 410:buttonError(e,"Removed!");break;case 404:buttonError(e,"Not found!");break;default:try{var r,l=(new DOMParser).parseFromString(o.responseText,"text/html").getElementsByClassName("file-list")[0];if(void 0!==l){var i=l.getElementsByTagName("a");for(r=0;r<i.length;r++){let t=i[r].getAttribute("href");if(t.startsWith("/r2?u="))try{window.open(decodeURIComponent(t).split("?u=")[1])}catch(t){console.log(t),buttonError(e,"Error!")}else window.open(t+"&"+n)}e.firstChild.textContent="APKCombo"}else{var a=o.responseText.indexOf("/dl?token=")+4,d=o.responseText.indexOf('"',a),s=o.responseText.substring(a,d);t=o.finalUrl,GM.xmlHttpRequest({method:"POST",url:t.replace("/download/apk","/dl")+"?"+s,onload:function(o){var i=(new DOMParser).parseFromString(o.responseText,"text/html");if(null!==(l=i.getElementsByClassName("file-list")[0])){var a=l.getElementsByTagName("a");for(r=0;r<a.length;r++)window.open(a[r].getAttribute("href")+"&"+n);e.firstChild.textContent="APKCombo"}else e.firstChild.addEventListener("click",(function(){window.open(t)})),e.firstChild.textContent="New tab >",e.onclick=null},onerror:function(t){buttonError(e,"Error!")}})}}catch(e){console.log(e)}}},onerror:function(){buttonError(e,"Offline!")}})}})}catch(t){buttonError(e,"Failed!"),console.log(t)}else if(t.includes("apkpremier"))try{GM.xmlHttpRequest({method:"POST",url:t,data:"cmd=apk&gc=0",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(o){switch(o.status){case 410:buttonError(e,"Removed!");break;case 404:buttonError(e,"Not found!");break;default:let n=(new DOMParser).parseFromString(o.responseText,"text/html").getElementsByClassName("bdlinks");if("error capchar"==o.responseText)e.firstChild.addEventListener("click",(function(){window.open(t)})),e.firstChild.textContent="CAPTCHA",e.onclick=null;else if(n.length>0){for(let e of n)window.open(e.firstElementChild.getAttribute("href"),"_self");e.firstChild.textContent="Ready!"}else e.firstChild.textContent="Failed!"}},onerror:function(){buttonError(e,"Offline!")}})}catch(t){buttonError(e,"Failed!"),console.log(t)}else if(t.includes("aptoide"))try{GM.xmlHttpRequest({method:"GET",url:t,headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(o){switch(o.status){case 410:buttonError(e,"Removed!");break;case 404:buttonError(e,"Not found!");break;default:let n=JSON.parse(o.responseXML);if(n.datalist.total>0){let o=t.split("?query=")[1];for(let t of n.datalist.list)if(t.package===o){if(t.aab)for(let e of t.aab.splits)window.open(e.path);t.obb&&window.open(t.obb.main.path),openLink(n.datalist.list[0].file.path),e.firstChild.textContent="Ready!"}"Ready!"!=e.firstChild.textContent&&buttonError(e,"Not found!")}else e.firstChild.textContent="Failed!"}},onerror:function(){buttonError(e,"Offline!")}})}catch(t){buttonError(e,"Failed!"),console.log(t)}else if(t.includes("apk.support"))try{GM.xmlHttpRequest({method:"POST",url:t,data:"cmd=csapk&pkg="+o+"&arch=default&tbi=default&device_id=&model=default&language=en&dpi=480&av=default",headers:{Referer:t,Origin:"https://apk.support","Content-Type":"application/x-www-form-urlencoded"},onload:function(t){if(t.responseXML){let o=t.responseXML.querySelectorAll("[href*='.androidcontents.com/']");if(0==o.length&&(o=t.responseXML.querySelectorAll("[href*='.googleapis.com/download/']")),o.length>0){e.firstChild.textContent="Ready!";for(let e of o)window.open(e)}else buttonError(e,"Not found!")}},onerror:function(t){buttonError(e,"Error!")}})}catch(e){console.log(e)}}function get2022UIButtons(){var e=[];if(0==(e=document.querySelectorAll('[data-item-id^="%.@."]')).length){e=document.querySelectorAll('[data-p^="%.@.["]');for(let t of e)if(t.querySelector("[fill-rule=evenodd]")&&t.getAttribute("data-p").includes('",7]]'))return t}return console.log("Install buttons:"),console.log(e),e[0]}function checkUI(){var e=0;try{e=document.getElementsByTagName("header").length>0?5:0}catch(e){console.error('The user interface of Google Play Store was not recognized by "Direct Download from Google Play" script. This might result in unexpected behaviour of the page. Please report the error to the author on Greasyfork. Error: '+e)}return console.log("PLAY STORE INTERFACE: "+e),e}function removePreviousCwiz(){appCwiz.parentNode.removeChild(appCwiz)}function buttonError(e,t){e.firstChild.textContent=t,e.firstChild.style.backgroundColor="#CCCCCC",e.onclick=null}async function setUseGS(e){useGS=e,GM.setValue("useGS",e)}!async function(){useGS=await GM.getValue("useGS",!1),starter()}();