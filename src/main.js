import iziToast from "izitoast";
import { fetchPhotos } from "./js/pixaby-api";
import { createGalleryCardTemplate } from "./js/render-function";
import SimpleLightbox from "simplelightbox";


const searchForm = document.querySelector(".js-search-form");
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
console.log(loader)
function showLoader() {
    loader.classList.remove('is-hidden');
}
function hideLoader() {
    loader.classList.add('is-hidden');
}

showLoader();
setTimeout(hideLoader, 2000);

function onSearch(event) {
    event.preventDefault();
    const searchedValue = searchForm.elements.user_query.value;
    
    if (searchedValue === "") {
        iziToast.warning({
            title: 'Caution',
            message: 'Input field must not be empty',
            position: 'topLeft',
        });
        return; // Перериваємо виконання функції, якщо поле порожнє
    }

    fetchPhotos(searchedValue).then(data => {
        console.log(data);
        if (!data.hits.length) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'bottomRight',
            });
            galleryEl.innerHTML = '';
        
            return;
        }
        const galleryCardsTemplate = data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');
        galleryEl.innerHTML = galleryCardsTemplate;
        console.log(galleryCardsTemplate);
    
        const light = new SimpleLightbox('.js-gallery a', {
            overlay: true,
            captionsData: 'alt',
            overlayOpacity: 0.8,
            captionDelay: 250,
            focus: true,
        })
        light.refresh();
        searchForm.reset();
        console.log(light);
    })
        .catch(err => {
            iziToast.error({
                title: 'Error',
                message: 'Illegal operation',
            });
        });
}
searchForm.addEventListener('submit', onSearch);    





   
   






