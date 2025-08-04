import { NeatGradient } from "@firecms/neat";
import { darkThemeConfig, lightThemeConfig } from "./backgrounds.js";
import { applyThemeColors } from "./colores.js";

// Variables globales
let currentTheme = "dark"; // tema inicial
const gradientCanvas = document.getElementById("gradient");
const toggle = document.getElementById("theme-toggle"); // toggle
const navbar = document.querySelector(".navbar");

//****************************************************************************************************************************//
// Navbar
// navbar.classList.add("show"); Mostrar navbar de entrada (si quieres que aparezca siempre)

document.addEventListener("mousemove", (e) => {
  const triggerZone = window.innerHeight * 0.25;
  
  if (e.clientY < triggerZone) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }
});

//****************************************************************************************************************************//
let gradient;

const savedTheme = localStorage.getItem("theme") || "dark";
currentTheme = savedTheme;
applyThemeColors(currentTheme);

// Asegurarse de que el gradiente coincida con el tema guardado
gradient = new NeatGradient({
  ref: gradientCanvas,
  ...(currentTheme === "dark" ? darkThemeConfig : lightThemeConfig),
});

toggle.checked = currentTheme === "dark";

// Icono de GitHub correcto al cargar
const githubIcon = document.querySelector('img[alt="GitHub"]');
if (githubIcon) {
  githubIcon.src =
    currentTheme === "dark" ? "Iconos/GitHub_dark.svg" : "Iconos/github.svg";
}

//****************************************************************************************************************************//
// Toggle - cambio tema claro/oscuro

function toggleTheme() {
  const githubIcon = document.querySelector('img[alt="GitHub"]');

  currentTheme = toggle.checked ? "dark" : "light";

  gradient.destroy();
  gradient = new NeatGradient({
    ref: gradientCanvas,
    ...(currentTheme === "dark" ? darkThemeConfig : lightThemeConfig),
  });

  applyThemeColors(currentTheme); // funcion que aplica los colores sgun el theme 

  if (githubIcon) {
    githubIcon.src =
      currentTheme === "dark" ? "Iconos/GitHub_dark.svg" : "Iconos/github.svg";
  }

  localStorage.setItem("theme", currentTheme); // Guarda el tema actual
}

// Evento para el toggle
toggle.addEventListener("change", toggleTheme);

//****************************************************************************************************************************//
// Proyectos - Modal

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
