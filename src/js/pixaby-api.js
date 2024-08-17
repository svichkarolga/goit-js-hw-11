
const BASE_URL = 'https://pixabay.com/api';

export const fetchPhotos = searchedQuery => {

    const urlParams = new URLSearchParams({
        key: '45436198-db4764fd7ddf19e0d061d1cf8',
        q: searchedQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(
        `${BASE_URL}/?${urlParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
};
