// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export { createGalleryCardTemplate };

function createGalleryCardTemplate(data, tagToInsert) {
     tagToInsert.innerHTML = markup(data);
}
const galleryEl = document.querySelector('.js-gallery');
console.log(galleryEl);

function markup(data) {
    return data.hits
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads
        }) =>
            ` <li class="gallery-card">
                <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-img"
                src="${webformatURL}" 
                alt="${tags}" />
            </li>
            <div class="wrapper">
                <ul class="img-content-wrapper">
					<li>Likes<span>${likes}</span></li>
					<li>Views<span>${views}</span></li>
					<li>Comments<span>${comments}</span></li>
					<li>Downloads<span>${downloads}</span></li>
                </ul>
            </div>`
        ).join('');
};


console.log(createGalleryCardTemplate(data.hits[0]));



