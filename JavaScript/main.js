
import { NeatGradient } from "@firecms/neat";
import { darkThemeConfig, lightThemeConfig } from "./backgrounds.js";
import { applyThemeColors } from "./colores.js";

//****************************************************************************************************************************//

// Variables globales
let currentTheme = "dark";
const gradientCanvas = document.getElementById("gradient");
const toggle = document.getElementById("theme-toggle");
const navbar = document.querySelector(".navbar");

//****************************************************************************************************************************//

// Tema: Gradiente + colores + íconos
let gradient;
const savedTheme = localStorage.getItem("theme") || "dark";
currentTheme = savedTheme;
applyThemeColors(currentTheme);

gradient = new NeatGradient({
  ref: gradientCanvas,
  ...(currentTheme === "dark" ? darkThemeConfig : lightThemeConfig),
});

toggle.checked = currentTheme === "dark";

const githubIcon = document.querySelector('img[alt="GitHub"]');
if (githubIcon) {
  githubIcon.src =
    currentTheme === "dark" ? "Iconos/GitHub_dark.svg" : "Iconos/github.svg";
}

// Cambiar tema con toggle
function toggleTheme() {
  currentTheme = toggle.checked ? "dark" : "light";

  gradient.destroy();
  gradient = new NeatGradient({
    ref: gradientCanvas,
    ...(currentTheme === "dark" ? darkThemeConfig : lightThemeConfig),
  });

  applyThemeColors(currentTheme);

  if (githubIcon) {
    githubIcon.src =
      currentTheme === "dark" ? "Iconos/GitHub_dark.svg" : "Iconos/github.svg";
  }

  localStorage.setItem("theme", currentTheme);
}
toggle.addEventListener("change", toggleTheme);

//****************************************************************************************************************************//
// ===== Navbar por hover (guarda última Y) =====
let lastMouseY = window.innerHeight; // empieza oculto
function updateNavbar(y) {
  const triggerZone = window.innerHeight * 0.25;
  navbar.classList.toggle("show", y < triggerZone);
}

document.addEventListener("mousemove", (e) => {
  lastMouseY = e.clientY;
  if (!document.body.classList.contains("modal-open")) {
    updateNavbar(lastMouseY);
  }
});

// ===== Utilidad para cerrar modal =====
function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add("hidden");
  document.body.classList.remove("modal-open");
  updateNavbar(lastMouseY); // re-evalúa navbar con la última Y real
}

// ===== Abrir modal =====
document.querySelectorAll(".open-modal").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = document.getElementById(btn.dataset.id);
    modal?.classList.remove("hidden");
    document.body.classList.add("modal-open");
    navbar.classList.remove("show"); // esconder mientras el modal está abierto
  });
});

// Cerrar por botón X 
document.querySelectorAll(".close-modal").forEach((close) => {
  close.addEventListener("click", () => {
    closeModal(close.closest(".project-modal"));
  });
});

// Cerrar clic en overlay 
window.addEventListener("click", (e) => {
  const modal = e.target.classList?.contains("project-modal") ? e.target : null;
  if (modal) closeModal(modal);
});

// Cerrar con ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const openModal = document.querySelector(".project-modal:not(.hidden)");
    if (openModal) closeModal(openModal);
  }
});


//****************************************************************************************************************************//
// Galerías reutilizables para cada proyecto
function setupGallery(modalId, images) {
  const modal = document.getElementById(modalId);

  const galleryContainer = modal.querySelector(".modal-gallery-slider");
  const prevBtn = modal.querySelector(".gallery-prev");
  const nextBtn = modal.querySelector(".gallery-next");

  if (!galleryContainer || !prevBtn || !nextBtn || !modal) return;

  let currentIndex = 0;

  // const updateImage = () => {
  //   imageElement.src = images[currentIndex];
  // };

  const updateImage = () => {
    galleryContainer.innerHTML = ""; // Limpiar el contenido actual

    const currentSrc = images[currentIndex];
    const isVideo = currentSrc.endsWith(".mp4") || currentSrc.endsWith(".webm");

    if (isVideo) {
      const video = document.createElement("video");
      video.src = currentSrc;
      video.controls = true;
      video.classList.add("gallery-image");
      video.style.maxHeight = "250px";
      video.style.borderRadius = "0.5rem";
      galleryContainer.appendChild(prevBtn);
      galleryContainer.appendChild(video);
      galleryContainer.appendChild(nextBtn);
    } else {
      const img = document.createElement("img");
      img.src = currentSrc;
      img.alt = "Captura del proyecto";
      img.classList.add("gallery-image");

      img.addEventListener("click", () => {
        overlayImage.src = img.src;
        overlay.classList.remove("hidden");
      });

      galleryContainer.appendChild(prevBtn);
      galleryContainer.appendChild(img);
      galleryContainer.appendChild(nextBtn);
    }
  };

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  const openModalBtn = document.querySelector(`[data-id="${modalId}"]`);
  if (openModalBtn) {
    openModalBtn.addEventListener("click", () => {
      currentIndex = 0;
      updateImage();
    });
  }

  updateImage();
}

//****************************************************************************************************************************//
// Fotos de cada modal-galería

// vite local
// setupGallery("modal3", [
//   "Imagenes/GestorEmpleados/MenuEscritorio.png",
//   "Imagenes/GestorEmpleados/GestionOperaciones.png",
//   "Imagenes/GestorEmpleados/MenuConsola.png",
//   "Imagenes/GestorEmpleados/GestionEmpleadosDB.png",
// ]);

// setupGallery("modal1", [
//   "Imagenes/CatalogoWeb/CatalogoWeb.png",
//   "Imagenes/CatalogoWeb/CatalogoWeb_Lista.png",
//   "Imagenes/CatalogoWeb/CatalogoWeb_Articulo.png",
//   "Imagenes/CatalogoWeb/CatalogoWebDB.png",
// ]);

// setupGallery("modal2", [
//   "Imagenes/WebBook/index.jpg",
//   "Imagenes/WebBook/tapa.jpg",
// ]);

// vite externo
const base = import.meta.env.BASE_URL;

setupGallery("modal3", [
  `${base}Imagenes/GestorEmpleados/MenuEscritorio.png`,
  `${base}Imagenes/GestorEmpleados/GestionOperaciones.png`,
  `${base}Imagenes/GestorEmpleados/MenuConsola.png`,
  `${base}Imagenes/GestorEmpleados/GestionEmpleadosDB.png`,
]);

setupGallery("modal1", [
  `${base}Imagenes/CatalogoWeb/CatalogoWeb.png`,
  `${base}Imagenes/CatalogoWeb/CatalogoWeb_Lista.png`,
  `${base}Imagenes/CatalogoWeb/CatalogoWeb_Articulo.png`,
  `${base}Imagenes/CatalogoWeb/CatalogoWebDB.png`,
]);

setupGallery("modal2", [
  `${base}Imagenes/WebBook/index.jpg`,
  `${base}Imagenes/WebBook/tapa.jpg`,
]);


//****************************************************************************************************************************//
// Imagen ampliada al hacer clic
const overlay = document.getElementById("image-overlay");
const overlayImage = document.getElementById("overlay-image");
const closeOverlay = document.getElementById("close-overlay");

// // Abrir imagen al hacer clic
// document.querySelectorAll(".gallery-image").forEach((img) => {
//   img.addEventListener("click", () => {
//     overlayImage.src = img.src;
//     overlay.classList.remove("hidden");
//   });
// });

// Cerrar overlay
closeOverlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

// Cerrar al hacer clic fuera de la imagen
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.add("hidden");
  }
});

//****************************************************************************************************************************//
// # ENVIO DE FOMLARIO Y CARTEL DE RESPUESTA

const form = document.getElementById("contactForm");
const alerta = document.getElementById("alertaGracias");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // evitar que recargue la página

  alerta.textContent = "Enviando tu mensaje...";
  alerta.className = "alerta show";

  emailjs.sendForm("service_fz2pgho", "template_l9yc0yb", this)
    .then(() => {
      alerta.textContent = "¡Gracias por tu mensaje! Me comunicaré contigo pronto.";
      alerta.className = "alerta success show";
      form.reset();
    }, (error) => {
      console.error("Error:", error);
      alerta.textContent = "Error al enviar el mensaje. Intenta nuevamente.";
      alerta.className = "alerta error show";
    });

  // Ocultar el mensaje después de 6 segundos
  setTimeout(() => {
    alerta.classList.remove("show");
  }, 6000);
});



//****************************************************************************************************************************//
// # SIMULACION PARA PROBAR ENVIO DE FORMULARIO
// const form = document.getElementById("contactForm");
// const alerta = document.getElementById("alertaGracias");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   // Simulamos que se está enviando...
//   alerta.textContent = "Enviando...";
//   alerta.className = "alerta show";

//   // Simulación de espera de red
//   setTimeout(() => {
//     // Simular éxito o error
//     const exito = true; // Cambialo a false para simular error
//     // const exito = false; // Cambialo a false para simular error

//     if (exito) {
//       alerta.textContent =
//         "¡Gracias por tu mensaje! Me comunicaré contigo pronto.";
//       alerta.className = "alerta success show";
//       form.reset();
//     } else {
//       alerta.textContent = "Error al enviar el mensaje. Intenta nuevamente.";
//       alerta.className = "alerta error show";
//     }

//     // Ocultar después de unos segundos
//     setTimeout(() => {
//       alerta.classList.remove("show");
//     }, 6000);
//   }, 2000); // Simula 2 segundo de espera
// });
//****************************************************************************************************************************//