import images from "./gallery-items.js";
const gallery = document.querySelector('ul.js-gallery');
const lightbox = document.querySelector('lightbox');

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
    linkRef.appendChild(picture);
    listRef.appendChild(linkRef);
    return listRef;
}
const items = images.map(image => createImage(image));
gallery.append(...items);
console.log(gallery);


// gallery.addEventListener('click', openModal());


