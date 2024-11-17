// In this file, we will define the URLs for the gallery images.
// We will use these URLs in the next file to load the images.

// Define the URLs for the gallery images
const img1Url = new URL('../img/image1.png', import.meta.url).href;
document.getElementById('img1').href = img1Url;
