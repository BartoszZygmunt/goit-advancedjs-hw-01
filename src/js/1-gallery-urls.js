// In this file, we will define the URLs for the gallery images.
// We will use these URLs in the next file to load the images.

// Define the URLs for the gallery images
for (let i = 1; i <= 9; i++) {
    const imgUrl = new URL(`../img/image${i}.png`, import.meta.url).href;
    document.getElementById(`img${i}`).href = imgUrl;
}
