import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

 
gallery.addEventListener('click', onGalleryItemClick);

 
function onGalleryItemClick(event) {
    event.preventDefault();  
 
    if (event.target.tagName === 'IMG') {
         
        const largeImageUrl = event.target.dataset.source;

        // Відкрийте модальне вікно з великим зображенням
        const instance = basicLightbox.create(`
            <img src="${largeImageUrl}" width="800" height="600">
        `);

        instance.show();
    }
}