import * as basicLightbox from 'basiclightbox';
import icons from '../images/icons.svg';

export function getTrailer(key) {
  const youtubeTrailer = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1"  frameborder="0"
     allow="gyroscope;"  allowfullscreen></iframe>
`);
  return youtubeTrailer;
}

export function addCloseBtn(trailerInstance) {
  const basicLightboxRef = document.querySelector(
    '.basicLightbox__placeholder'
  );
  basicLightboxRef.insertAdjacentHTML(
    'afterbegin',
    `<svg class="icon-close" width="35px" height="35px">
          <use href="${icons}#icon-close"></use>
        </svg>`
  );
  document
    .querySelector('.icon-close')
    .addEventListener('click', () => trailerInstance.close());
}
