(()=>{var e={2859:()=>{const e=document.querySelector(".artworks__examples");[{title:"Vaporart",studio:"by weidner art",result:2.45,likes:"50K",img:"./images/ArtWorks1.png"},{title:"The Angel",studio:"by visual 3d",result:4.85,likes:"30K",img:"./images/ArtWorks2.png"},{title:"Aesthetic",studio:"by itvrn",result:1.98,likes:"20K",img:"./images/ArtWorks3.png"},{title:"Wadafox",studio:"by wonder art ",result:5.11,likes:"90K",img:"./images/ArtWorks4.png"}].map((t=>{const n=`\n    <div class="artworks__example example element-animation">\n    <div class="example__content">\n       <div class="example__img">\n          <img src=${t.img} alt="${t.title}">\n       </div>\n       <div class="example__title-block">\n          <h3 class="example__title">${t.title}</h3>\n          <div class="example__result">\n             <p class="example__result-text">${t.result} ETH</p>\n\n          </div>\n       </div>\n       <p class="example__studio">${t.studio}</p>\n       <div class="example__likes">\n          <img src="./images/heart.svg" alt="likes" class="example__likes-img">\n          <p class="example__likes-text">${t.likes}</p>\n          \n       </div>\n       <p class="example__available">1 of 1 available</p>\n    </div>\n    </div>\n`;e.innerHTML+=n}))},5784:()=>{const e=document.querySelector(".search-info__burger-menu"),t=(document.querySelector(".search-info"),document.querySelector(".adaptive-menu")),n=document.querySelector(".search-info__burger-menu-cross"),l=document.querySelectorAll(".adaptive-menu__link");document.documentElement.clientWidth<=1200&&(e.addEventListener("click",(()=>{e.style.display="none",n.style.display="block",t.style.display="block",document.querySelector("main").style.display="none",document.querySelector("footer").style.display="none"})),n.addEventListener("click",(()=>{t.style.display="none",e.style.display="block",n.style.display="none",document.querySelector("main").style.display="block",document.querySelector("footer").style.display="block"})),l.forEach((l=>{l.addEventListener("click",(()=>{t.style.display="none",e.style.display="block",n.style.display="none",document.querySelector("main").style.display="block",document.querySelector("footer").style.display="block"}))})))},790:()=>{let e=document.querySelector(".collection__items");[{name:"Abstract",quantity:24,img1:"./images/abstract1.png",img2:"./images/abstract2.png",img3:"./images/abstract3.png",img4:"./images/abstract4.png"},{name:"Game",quantity:27,img1:"./images/game1.png",img2:"./images/game2.png",img3:"./images/game3.png",img4:"./images/game4.png"},{name:"3D",quantity:13,img1:"./images/3D1.png",img2:"./images/3D2.png",img3:"./images/3D3.png",img4:"./images/3D4.png"},{name:"Modern Atr",quantity:8,img1:"./images/ModernArt1.png",img2:"./images/ModernArt2.png",img3:"./images/ModernArt3.png",img4:"./images/ModernArt4.png"},{name:"Watercolor",quantity:4,img1:"./images/Watercolor1.png",img2:"./images/Watercolor2.png",img3:"./images/Watercolor3.png",img4:"./images/Watercolor4.png"},{name:"Graffiti",quantity:10,img1:"./images/Graffiti1.png",img2:"./images/Graffiti2.png",img3:"./images/Graffiti3.png",img4:"./images/Graffiti4.png"}].map((t=>{let n=`\n  <div class="collection__item element-animation">\n  <div class="collection__images">\n     <img src=${t.img1} alt="${t.name} photo" class="collection__img">\n     <img src=${t.img2} alt="${t.name} photo" class="collection__img">\n     <img src=${t.img3} alt="${t.name} photo" class="collection__img">\n     <img src=${t.img4} alt="${t.name} photo" class="collection__img">\n  </div>\n  <div class="collection__info">\n     <p class="collection__genre">${t.name}</p>\n     <div class="collection__quantity">\n        <p class="collection__quantity-text">${t.quantity} items</p>\n     </div>\n  </div>\n</div>\n  `;e.innerHTML+=n}))},5095:()=>{document.querySelector(".auction__timer");const e=document.querySelector(".auction__hours-n"),t=document.querySelector(".auction__mins-n"),n=document.querySelector(".auction__secs-n");let l=82399;0!==localStorage.length&&(l=localStorage.getItem("time")),setInterval((function(){let i=Math.floor(l/3600);i=i<10?"0"+i:i;let s=Math.floor(l/60)-60*i;s=s<10?"0"+s:s;let a=l%60;a=a<10?"0"+a:a,e.innerHTML=`${i}`,t.innerHTML=`${s}`,n.innerHTML=`${a}`,l--,localStorage.setItem("time",l),(0===l||l<=0)&&(localStorage.clear(),location.reload())}),1e3)},6272:()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".element-animation");document.documentElement.clientWidth>1e3?function(){function e(e){e.forEach((e=>{e.isIntersecting&&e.target.classList.add("element-show")}))}let t=new IntersectionObserver(e,{threshold:[.4]}),n=document.querySelectorAll(".element-animation");for(let e of n)t.observe(e)}():(e.forEach((e=>{e.classList.add("element-show")})),console.log("no animation"))}))},6536:()=>{const e=document.querySelector(".seller__select"),t=document.querySelector(".seller__list"),n=document.querySelectorAll(".seller__point"),l=document.querySelector(".arrowBottom"),i=document.querySelector(".arrowTop");let s=!1;e.addEventListener("click",(()=>{s=!s,s?(i.style.display="block",l.style.display="none",t.classList.remove("seller__list-hide"),t.style.cursor="pointer",t.style.zIndex=2):(i.style.display="none",l.style.display="block",t.classList.add("seller__list-hide"),t.style.cursor="default",t.style.zIndex=-1)})),n.forEach((e=>{e.addEventListener("click",(e=>{const n=e.target.outerText;document.querySelector(".seller__text").innerText=n,t.classList.add("seller__list-hide")}))}))},7254:()=>{const e=[{name:"Jorg George",avatar:"./images/seller1.png",result:885.6,unit:"Eth"},{name:"Maria Stanton",avatar:"./images/seller3.png",result:100.1,unit:"Eth"},{name:"Kaiya Berti",avatar:"./images/seller5.png",result:500.2,unit:"Eth"},{name:"Ben Gurgan",avatar:"./images/seller7.png",result:100,unit:"Eth"},{name:"Anna Enabel",avatar:"./images/seller2.png",result:45.6,unit:"Eth"},{name:"Zain Berty",avatar:"./images/seller4.png",result:42.4,unit:"Eth"},{name:"Jordyn Nis",avatar:"./images/seller6.png",result:885.6,unit:"Eth"},{name:"Dav Nicon",avatar:"./images/seller8.png",result:495.5,unit:"Eth"}],t=e.slice(0);r(t,0,2);const n=e.slice(0);r(n,4,0);const l=e.slice(0);r(l,1,6);const i=document.querySelector(".seller__list"),s=document.querySelector(".seller__items");function a(){document.querySelectorAll(".seller__item").forEach((e=>{e.classList.add("element-show")}))}function r(e,t,n){e[t]=e.splice(n,1,e[t])[0]}function o(e){e.map((e=>{let t=`\n    <div class="seller__item element-animation">\n      <div class="seller__item-content">\n        <div class="seller__img">\n            <img src="${e.avatar}" alt="user-ava">\n        </div>\n        <div class="seller__info">\n            <h5 class="seller__name">${e.name}</h5>\n            <p class="seller__result">${e.result} <span class="seller__result-focus">${e.unit}</span></p>\n            <div class="seller__connection">\n              <div class="seller__social">\n                  <img src="./images/social.svg" alt="social-network icon">\n              </div>\n              <div class="seller__tg">\n                  <img src="./images/tg.svg" alt="telegram icon">\n              </div>\n            </div>\n        </div>\n      </div>\n                    </div>\n    `;s.innerHTML+=t}))}document.addEventListener("DOMContentLoaded",o(e)),i.addEventListener("click",(i=>{"Today"===i.target.innerHTML?(s.innerHTML="",o(e),a()):"Yesterday"===i.target.innerHTML?(s.innerHTML="",o(t),a()):"Last week"===i.target.innerHTML?(s.innerHTML="",o(n),a()):"Last month"===i.target.innerHTML&&(s.innerHTML="",o(l),a())}))}},t={};function n(l){var i=t[l];if(void 0!==i)return i.exports;var s=t[l]={exports:{}};return e[l](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var l=t.getElementsByTagName("script");l.length&&(e=l[l.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n(6536),n(7254),n(790),n(2859),n(5095),n(6272),n(5784)})()})();
