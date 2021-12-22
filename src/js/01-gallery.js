// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { galleryItems } from './gallery-items';


// const galleryRef = document.querySelector('.gallery');

// const galleryMarkup = galleryItems
// .map(({preview, original, description}) => `<div class="gallery__item" >
// <a class="gallery__link" href="${original}">
// <img
// class="gallery__image"
// src="${preview}"
// alt="${description}"
// />
// </a></div>`).join('');

// galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);


// new SimpleLightbox('.gallery a', {
//   captionsData: `alt`,
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });

// console.log(galleryItems);



import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const arrayEl = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`,
  '',
);
galleryEl.insertAdjacentHTML('afterbegin', arrayEl);

const optionsForModal = {
  captionsData: 'alt',
  captionDelay: 250,
};

new SimpleLightbox('.gallery__link', optionsForModal);