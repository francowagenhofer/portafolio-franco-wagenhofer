//****************************************************************************************************************************//
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
// Navbar (muestra al mover mouse arriba)
document.addEventListener("mousemove", (e) => {
  const triggerZone = window.innerHeight * 0.25;
  // const triggerZone = window.innerHeight * 0.20;
  navbar.classList.toggle("show", e.clientY < triggerZone);
});

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
// Modales de proyectos (abrir/cerrar)
document.querySelectorAll(".open-modal").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = document.getElementById(btn.dataset.id);
    modal.classList.remove("hidden");
  });
});

document.querySelectorAll(".close-modal").forEach((close) => {
  close.addEventListener("click", () => {
    close.closest(".project-modal").classList.add("hidden");
  });
});

window.addEventListener("click", (e) => {
  document.querySelectorAll(".project-modal").forEach((modal) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
});

//****************************************************************************************************************************//
// Galerías reutilizables para cada proyecto
function setupGallery(modalId, images) {
  const modal = document.getElementById(modalId);
  const imageElement = modal.querySelector(".gallery-image");
  const prevBtn = modal.querySelector(".gallery-prev");
  const nextBtn = modal.querySelector(".gallery-next");

  if (!imageElement || !prevBtn || !nextBtn || !modal) return;

  let currentIndex = 0;

  const updateImage = () => {
    imageElement.src = images[currentIndex];
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
setupGallery("modal1", [
  "Imagenes/CatalogoWeb/CatalogoWeb.png",
  "Imagenes/CatalogoWeb/CatalogoWeb_Lista.png",
  "Imagenes/CatalogoWeb/CatalogoWeb_Articulo.png",
]);

setupGallery("modal2", [
  "Imagenes/WebBook/index.jpg",
  "Imagenes/WebBook/default.jpg",
  "Imagenes/WebBook/tapa.jpg",
  "Imagenes/WebBook/tapa2.jpg",
]);

setupGallery("modal3", [
  "Imagenes/1.jpg",
  "Imagenes/3.jpg",
]);

//****************************************************************************************************************************//
// Imagen ampliada al hacer clic 
const overlay = document.getElementById("image-overlay");
const overlayImage = document.getElementById("overlay-image");
const closeOverlay = document.getElementById("close-overlay");

// Abrir imagen al hacer clic
document.querySelectorAll(".gallery-image").forEach((img) => {
  img.addEventListener("click", () => {
    overlayImage.src = img.src;
    overlay.classList.remove("hidden");
  });
});

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
//****************************************************************************************************************************//
//****************************************************************************************************************************//