import{i as c}from"./assets/vendor-8e8cd629.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();function u(o){fetch(`https://pixabay.com/api/?key=45436198-db4764fd7ddf19e0d061d1cf8&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{console.log(e),e.hits.length||c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{console.log(e)})}function f(o,e){e.innerHTML=p(o)}const d=document.querySelector(".js-gallery");console.log(d);function p(o){return o.hits.map(({webformatURL:e,largeImageURL:i,tags:n,likes:r,views:t,comments:s,downloads:a})=>` <li class="gallery-card">
                <a class="gallery-link" href="${i}">
                <img class="gallery-img"
                src="${e}" 
                alt="${n}" />
            </li>
            <div class="wrapper">
                <ul class="img-content-wrapper">
					<li>Likes<span>${r}</span></li>
					<li>Views<span>${t}</span></li>
					<li>Comments<span>${s}</span></li>
					<li>Downloads<span>${a}</span></li>
                </ul>
            </div>`).join("")}console.log(f(data.hits[0]));const l=document.querySelector(".js-search-form");function m(o){o.preventDefault();const e=l.elements.user_query.value;if(e===""){alert("Поле для вводу не має бути пустим");return}u(e),l.reset()}l.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers.js.map
