// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

export { performSearch };
    
function performSearch(searchedValue) {

    fetch(
          `https://pixabay.com/api/?key=45436198-db4764fd7ddf19e0d061d1cf8&q=${searchedValue}&image_type=photo&orientation=horizontal&safesearch=true`
    )
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // console.log(createGalleryCardTemplate(data.hits[0]));
            if (!data.hits.length) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
        })
        .catch(err => {
            console.log(err);
        });


};