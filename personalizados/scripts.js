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

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const mensaje = document.getElementById("mensaje-formulario");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
  
      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });
  
        if (response.ok) {
          mensaje.textContent = "✅ ¡Tu pedido fue enviado exitosamente!";
          mensaje.classList.remove("mensaje-oculto");
          mensaje.classList.add("mensaje-visible");
          form.reset();
        } else {
          mensaje.textContent = "❌ Ocurrió un error. Intenta nuevamente.";
          mensaje.classList.remove("mensaje-oculto");
          mensaje.classList.add("mensaje-visible");
        }
      } catch (error) {
        mensaje.textContent = "⚠️ Error al enviar el formulario.";
        mensaje.classList.remove("mensaje-oculto");
        mensaje.classList.add("mensaje-visible");
      }
    });
  });
  