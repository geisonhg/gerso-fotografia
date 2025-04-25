// scripts.js - Animaciones y funcionalidades del sitio

document.addEventListener("DOMContentLoaded", () => {
  // Animaciones al hacer scroll
  const revealElements = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    revealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) {
        el.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Mostrar sección de detalle al hacer clic en cualquier producto
  const productos = [
    { linkId: "mug-personalizado", sectionId: "detalle-mugs" },
    { linkId: "retablo-personalizado", sectionId: "detalle-retablos" },
    { linkId: "cuadro-personalizado", sectionId: "detalle-cuadros" },
    { linkId: "book-personalizado", sectionId: "detalle-books" }
  ];

  productos.forEach(({ linkId, sectionId }) => {
    const link = document.getElementById(linkId);
    const section = document.getElementById(sectionId);

    if (link && section) {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        // Ocultar todas las secciones de detalle primero
        document.querySelectorAll(".detalle-producto").forEach(s => s.classList.add("oculto"));

        // Mostrar la sección seleccionada
        section.classList.remove("oculto");
        section.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  // Botón para volver arriba
  const btnScrollTop = document.createElement("button");
  btnScrollTop.innerText = "↑ Volver arriba";
  btnScrollTop.className = "btn-scroll-top";
  btnScrollTop.style.display = "none";
  document.body.appendChild(btnScrollTop);

  btnScrollTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    btnScrollTop.style.display = window.scrollY > 600 ? "block" : "none";
  });

  const comoSection = document.getElementById("como");
  if (comoSection) {
    comoSection.classList.add("seccion-como");
  }

});

