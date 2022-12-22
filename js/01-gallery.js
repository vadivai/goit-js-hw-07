import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href = "${original}">
            <img
                class = "gallery__image"
                src = "${preview}"
                data-source = "${original}"
                alt = "${description}"
            />
        </a>
    </div>`;
}).join('');
}

galleryContainer.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    const instance = basicLightbox.create(
        `<img src = "${event.target.dataset.source}">`,
    );
    
    instance.show();
}

// console.log(galleryItems);
