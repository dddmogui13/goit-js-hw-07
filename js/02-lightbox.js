import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

const textImg = galleryItems
    .map(
        (obj) =>
            `<li class="gallery__item">
               <a class="gallery__link" href="${obj.original}">
                  <img class="gallery__image" src="${obj.preview}" alt="${obj.description}" />
               </a>
            </li>`
    )
    .join(" ");

list.insertAdjacentHTML("afterbegin", textImg);

const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

 