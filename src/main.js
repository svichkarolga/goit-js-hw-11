// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { performSearch } from "./js/pixaby-api";
import { createGalleryCard } from "./js/render-function";


const searchForm = document.querySelector(".js-search-form");
// const galleryEl = document.querySelector('.js-gallery');


function onSearch(event) {
    event.preventDefault();
  
    const searchedValue = searchForm.elements.user_query.value;
    // console.dir(searchedValue);
    if (searchedValue  === "") {
        alert(`Поле для вводу не має бути пустим`); 
        return; // Перериваємо виконання функції, якщо поле порожнє
    }
    // Якщо поле не порожнє, виконуємо пошук
    performSearch(searchedValue );
     searchForm.reset(); // Очищаємо форму після відправки запиту
}

searchForm.addEventListener('submit', onSearch);



