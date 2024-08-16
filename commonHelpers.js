import{i as c}from"./assets/vendor-8e8cd629.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();function d(t){fetch(`https://pixabay.com/api/?key=45436198-db4764fd7ddf19e0d061d1cf8&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{console.log(e),e.hits.length||c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{console.log(e)})}const n=document.querySelector(".js-gallery");console.log(n);const u=t=>` <li class="gallery-card">
                <a class="gallery-link" href="${t.largeImageURL}">
                    <img class="gallery-img"
                    src="${t.webformatURL}" 
                    data-source="${t.largeImageURL}"
                    alt="${t.tags}"
                    />
                </a>
                <div class="wrapper">
                    <ul class="img-content-wrapper">
					    <li>Likes<span>${t.likes}</span></li>
					    <li>Views<span>${t.views}</span></li>
					    <li>Comments<span>${t.comments}</span></li>
					    <li>Downloads<span>${t.downloads}</span></li>
                    </ul>
                </div>
            </li>`,m=data.hits.map(u).join("");n.insertAdjacentHTML("beforeend",m);const a=document.querySelector(".js-search-form");function f(t){t.preventDefault();const e=a.elements.user_query.value;if(e===""){alert("Поле для вводу не має бути пустим");return}d(e),a.reset()}a.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
