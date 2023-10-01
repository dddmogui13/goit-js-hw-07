import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

const createGalleryItem = ({ original, preview, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
`;

const galleryMarkup = galleryItems.map(createGalleryItem).join(' ');

list.insertAdjacentHTML('afterbegin', galleryMarkup);

list.addEventListener('click', handleImageClick);

function handleImageClick(event) {
  event.preventDefault();

  const { target } = event;

  if (target.classList.contains('gallery__image')) {
    const { source, description } = target.dataset;

    const instance = basicLightbox.create(`
      <div class="modal">
        <img
          class="gallery__image"
          src="${source}"
          alt="${description}"
        />
      </div>
    `, {
      onShow: () => {
        document.addEventListener('keydown', handleKeyPress);
      },
      onClose: () => {
        document.removeEventListener('keydown', handleKeyPress);
      },
    });

    instance.show();
  }
}

function handleKeyPress(event) {
  if (event.code === 'Escape') {
    basicLightbox.close();
  }
}