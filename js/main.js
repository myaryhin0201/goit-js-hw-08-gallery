import images from "./gallery-items.js";
const gallery = document.querySelector('ul.js-gallery');
const lightbox = document.querySelector('div.lightbox');
const lightImage = document.querySelector('.lightbox__image');
const btnClose = document.querySelector('button[data-action="close-lightbox"]');
const lightOverlay = document.querySelector('.lightbox__overlay');
let i = 0;
let activeIndex = 0;
const createImage = (image) => {
    const listRef = document.createElement('li');
    const linkRef = document.createElement('a');
    linkRef.classList.add('gallery__link');
    linkRef.setAttribute('href', image.original);
    const picture = document.createElement('img');
    picture.classList.add('gallery__image');
    picture.setAttribute('src', image.preview);
    picture.setAttribute('alt', image.description);
    picture.setAttribute('data-source', image.original);
    picture.setAttribute('data-index', i);
    linkRef.appendChild(picture);
    listRef.appendChild(linkRef);
    i += 1;
    return listRef;
}
const onArrowRight = (event) => {
    if (event.key === 'ArrowRight') {
       activeIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        lightImage.src = images[activeIndex].original;
        console.log(activeIndex);
    }
}
const onArrowLeft = (event) => {
    if (event.key === 'ArrowLeft') {
        activeIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        lightImage.src = images[activeIndex].original;
        console.log(activeIndex);
    }
}
const onEscape = (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
}
const openModal = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    } 
    lightbox.classList.add('is-open');
    const selectTarget = event.target;
    activeIndex = Number(selectTarget.dataset.index);
    setLargeImgAttr(selectTarget);
    gallery.removeEventListener('click', openModal);
    window.addEventListener("keydown", onEscape);
    window.addEventListener("keydown", onArrowLeft);
    window.addEventListener("keydown", onArrowRight);
    btnClose.addEventListener('click', closeModal);
    lightOverlay.addEventListener('click', closeModal);
}
const setLargeImgAttr = (selectTarget) => {
    lightImage.setAttribute('src', selectTarget.dataset.source);
    lightImage.setAttribute('alt', selectTarget.alt);
}
const closeModal = () => {
    lightbox.classList.remove('is-open');
    lightImage.setAttribute('src', '');
    lightImage.setAttribute('alt', '');
    gallery.addEventListener('click', openModal);
    window.removeEventListener("keydown", onEscape);
    window.removeEventListener("keydown", onArrowLeft);
    window.removeEventListener("keydown", onArrowRight);
    btnClose.removeEventListener('click', closeModal);
    lightOverlay.removeEventListener('click', closeModal);
}
const galleryItems = images.map(image => createImage(image));
gallery.append(...galleryItems);
gallery.addEventListener('click', openModal);






