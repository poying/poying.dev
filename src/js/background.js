import * as loading from './loading';
import photos, {complete} from './photos';

const background = document.createElement('div');
let photoIndex = Math.floor(Math.random() * photos.length) + 1;

background.setAttribute('id', 'page-background');
document.body.appendChild(background);

const nextPhoto = () => {
  const photo = photos[photoIndex];
  photoIndex = photos.length === photoIndex + 1 ? 0 : photoIndex + 1;
  return photo;
};

const updateBackground = () => {
  const photo = nextPhoto();
  const prevPhotoElm = background.querySelector('.photo');
  const photoElm = document.createElement('img');
  photoElm.classList.add('photo');
  photoElm.setAttribute('data-background', photo.src);
  if (prevPhotoElm) {
    prevPhotoElm.addEventListener('transitionend', () => prevPhotoElm.remove());
    prevPhotoElm.classList.remove('show');
  }
  background.appendChild(photoElm);
  photoElm.setAttribute('style', `background-image: url(${photo.src})`);
  setTimeout(() => photoElm.classList.add('show'), 100);
  setTimeout(updateBackground, 10000);
};

loading.start();
complete
    .then(() => {
      loading.finish();
      updateBackground();
    })
    .catch((err) => alert(err.message));
