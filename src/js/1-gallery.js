import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '/css/styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
  });
});
