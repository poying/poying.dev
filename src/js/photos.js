const images = document.querySelectorAll('#gallery-sources .photo');

const photos = [].map.call(images, (image) => ({
  album: image.dataset.album,
  src: image.getAttribute('src'),
}));

const imagesComplete = [].map.call(images, (image) => {
  if (image.complete) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    image.addEventListener('load', () => {
      resolve();
    });
    image.addEventListener('error', () => {
      reject(new Error(`Failed to load image: ${image.getAttribute('src')}`));
    });
  });
});

export const complete = Promise.all(imagesComplete);

export default photos;
