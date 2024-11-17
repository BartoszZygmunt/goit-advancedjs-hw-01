// In this file, we will define the URLs for the gallery images.
// We will use these URLs in the next file to load the images.

// Define the URLs for the gallery images

// Tutaj wyszukiwanie selektorów po ID - nasz Trener mówi, że no takie nie bardzo profi ;)
// for (let i = 1; i <= 9; i++) {
//     const imgUrl = new URL(`../img/image${i}.png`, import.meta.url).href;
//     document.getElementById(`img${i}`).href = imgUrl;
// }

// Tutaj mam nadzieję, że już bardziej profesjonalnie ;)
// Pobierz wszystkie elementy <a> z klasą 'image-link'
const anchors = document.querySelectorAll('a.gallery-link');

anchors.forEach((anchor, index) => {
  const imgUrl = new URL(`../img/image${index + 1}.png`, import.meta.url).href;
  anchor.href = imgUrl;
});
