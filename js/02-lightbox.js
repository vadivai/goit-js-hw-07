import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup)

function createGalleryItemsMarkup(galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href = "${original}">
                <img
                    class = "gallery__image"
                    src = "${preview}"
                    data-source = "${original}"
                    alt = "${description}"
                />
            </a>`;
}).join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsDelay: 10250,
    captionsData: 'alt',
    // overlay: true,
});