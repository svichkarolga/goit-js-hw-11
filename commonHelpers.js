import{i,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="https://pixabay.com/api",d=t=>{const o=new URLSearchParams({key:"45436198-db4764fd7ddf19e0d061d1cf8",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}/?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},f=t=>` <li class="gallery-card">
                <a class="gallery-link" href="${t.largeImageURL}">
                    <img class="gallery-img"
                    src="${t.webformatURL}" 
                    data-source="${t.largeImageURL}"
                    alt="${t.tags}"
                    />
                </a>
                <div class="wrapper">
                    <ul class="img-content-wrapper">
					    <li class="text-info">Likes<span class="number">${t.likes}</span></li>
					    <li class="text-info">Views<span class="number">${t.views}</span></li>
					    <li class="text-info">Comments<span class="number">${t.comments}</span></li>
					    <li class="text-info">Downloads<span class="number">${t.downloads}</span></li>
                    </ul>
                </div>
            </li>`,n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery");function g(t){t.preventDefault();const o=n.elements.user_query.value;d(o).then(s=>{if(console.log(s),o===""){i.warning({title:"Caution",message:"Input field must not be empty",position:"topLeft"});return}if(!s.hits.length){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),c.innerHTML="";return}const a=s.hits.map(r=>f(r)).join("");c.innerHTML=a,console.log(a);const e=new u(".js-gallery a",{overlay:!0,captionsData:"alt",overlayOpacity:.8,captionDelay:250,focus:!0});e.refresh(),n.reset(),console.log(e)}).catch(s=>{console.log(s)})}n.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
