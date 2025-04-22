// main.js - funcionalidades personalizadas

document.addEventListener("DOMContentLoaded", () => {
  console.log("Sitio cargado correctamente.");

  // Inicializar lightbox si Glightbox está cargado
  if (typeof GLightbox !== "undefined") {
    const lightbox = GLightbox({
      selector: '[data-lightbox="galeria"]',
      touchNavigation: true,
      loop: true
    });
  }
});

