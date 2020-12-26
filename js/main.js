import images from "./gallery-items.js";
const gallery = document.querySelector('ul.js-gallery');
const lightbox = document.querySelector('lightbox');

const createImage = (image) => {
    let listGallery = `<li class="gallery__item"><img class="gallery__image" 
    src="${image.preview}" alt="${image.description}"/></li>`;
    return listGallery;
}
const items = images.map((image) => createImage(image)).join("");
gallery.insertAdjacentHTML('beforeend', items);
// console.log(gallery);
const openModal = () => {
    console.log(lightbox);
    lightbox.classList.add('is-open');
//    return lightbox.classList.add("is-open");
}
gallery.addEventListener('click', openModal());


