// scripts.js - Animaciones al hacer scroll

document.addEventListener("DOMContentLoaded", () => {
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
    revealOnScroll(); // Mostrar elementos que ya estén en pantalla
  });

  document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".formulario");
    const mensaje = document.getElementById("mensaje-formulario");
  
    if (formulario && mensaje) {
      formulario.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        const data = new FormData(formulario);
        const endpoint = formulario.action;
  
        try {
          const res = await fetch(endpoint, {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" }
          });
  
          if (res.ok) {
            mensaje.textContent = "✅ ¡Tu pedido fue enviado exitosamente!";
            mensaje.className = "mensaje-exito";
            formulario.reset();
          } else {
            throw new Error("Error en el envío");
          }
        } catch (err) {
          mensaje.textContent = "❌ Ocurrió un error. Intenta nuevamente.";
          mensaje.className = "mensaje-error";
        }
      });
    }
  });
  