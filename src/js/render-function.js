// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



const galleryEl = document.querySelector('.js-gallery');
console.log(galleryEl);

export const createGalleryCard = (pictureInfo) => {
    return ` <li class="gallery-card">
                <a class="gallery-link" href="${pictureInfo.largeImageURL}">
                    <img class="gallery-img"
                    src="${pictureInfo.webformatURL}" 
                    data-source="${pictureInfo.largeImageURL}"
                    alt="${pictureInfo.tags}"
                    />
                </a>
                <div class="wrapper">
                    <ul class="img-content-wrapper">
					    <li>Likes<span>${pictureInfo.likes}</span></li>
					    <li>Views<span>${pictureInfo.views}</span></li>
					    <li>Comments<span>${pictureInfo.comments}</span></li>
					    <li>Downloads<span>${pictureInfo.downloads}</span></li>
                    </ul>
                </div>
            </li>`
};

export const renderGallery = (data) => {
    galleryEl.innerHTML = "";
}

const galleryCardsTemplate = data.hits.map(createGalleryCard).join('');
galleryEl.insertAdjacentHTML("beforeend", galleryCardsTemplate);
    
//  galleryEl.insertAdjacentHTML("beforeend", createGalleryCard);



//  data.hits
//         .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads}) ).join('');=>

