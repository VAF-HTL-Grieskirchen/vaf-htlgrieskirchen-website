import GLightbox from 'glightbox/dist/js/glightbox.js';

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    scrollLock: false,
  });
});
