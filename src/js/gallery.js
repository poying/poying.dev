import photos from './photos';

const elm = document.querySelector('#gallery .photos');

photos.forEach((photo) => {
  const img = document.createElement('img');
  img.classList.add('photo');
  img.setAttribute('src', photo.src);
  img.dataset.album = photo.album;
  elm.appendChild(img);
});
