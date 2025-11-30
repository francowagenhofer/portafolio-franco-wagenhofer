import { NeatGradient } from "@firecms/neat";
import { darkThemeConfig, lightThemeConfig } from "./backgrounds.js";
import { applyThemeColors } from "./colores.js";
import { proyectos } from "./proyectos.js";
import emailjs from "@emailjs/browser";
import "../css/main.css";

emailjs.init("uWi6YuvGoxMA-TSfo"); // Inicializar EmailJS

//****************************************************************************************************************************//
// VARIABLES GLOBALES

let currentTheme = "dark";
const gradientCanvas = document.getElementById("gradient");
const toggle = document.getElementById("theme-toggle");
const navbar = document.querySelector(".navbar");

//****************************************************************************************************************************//
// Tema: Gradiente + colores + íconos

// version 1 - no funciona el cambio de color en github
// let gradient;
// const savedTheme = localStorage.getItem("theme") || "dark";
// currentTheme = savedTheme;
// applyThemeColors(currentTheme);

// gradient = new NeatGradient({
//   ref: gradientCanvas,
//   ...(currentTheme === "dark" ? darkThemeConfig : lightThemeConfig),
// });

// toggle.checked = currentTheme === "dark";

// const githubIcon = document.querySelector('img[alt="GitHub"]');
// if (githubIcon) {
//   githubIcon.src =
//     currentTheme === "dark" ? "Iconos/GitHub_dark.svg" : "Iconos/github.svg";
// }

// // Cambiar tema con toggle
// function toggleTheme() {
//   currentTheme = toggle.checked ? "dark" : "light";

//   gradient.destroy();
//   gradient = new NeatGradient({
//     ref: gradientCanvas,
//     ...(currentTheme === "dark" ? darkThemeConfig : lightThemeConfig),
//   });

//   applyThemeColors(currentTheme);

//   if (githubIcon) {
//     githubIcon.src =
//       currentTheme === "dark" ? "Iconos/GitHub_dark.svg" : "Iconos/github.svg";
//   }

//   localStorage.setItem("theme", currentTheme);
// }

// toggle.addEventListener("change", toggleTheme);

// (function () {
//   const savedTheme = localStorage.getItem("theme") || "dark";
//   document.documentElement.setAttribute("data-theme", savedTheme);
// })();

// version 2
let gradient;
const githubIcons = document.querySelectorAll('[data-icon="github"]');

function updateGithubIcons(theme) {
  const src =
    theme === "dark"
      ? "Iconos/GitHub_dark.svg"
      : "Iconos/github.svg";

  githubIcons.forEach((img) => (img.src = src));
}

const savedTheme = localStorage.getItem("theme") || "dark";
currentTheme = savedTheme;

// Aplicar colores CSS
applyThemeColors(currentTheme);

// Aplicar íconos
updateGithubIcons(currentTheme);

// Marcar toggle
toggle.checked = currentTheme === "dark";

// Crear gradiente inicial
gradient = new NeatGradient({
  ref: gradientCanvas,
  ...(currentTheme === "dark" ? darkThemeConfig : lightThemeConfig),
});

if (window.innerWidth < 1300) {
  gradient.stop();
}

function toggleTheme() {
  currentTheme = toggle.checked ? "dark" : "light";

  // Regenerar gradiente
  gradient.destroy();
  gradient = new NeatGradient({
    ref: gradientCanvas,
    ...(currentTheme === "dark" ? darkThemeConfig : lightThemeConfig),
  });

  // Colores CSS
  applyThemeColors(currentTheme);

  // Cambiar íconos
  updateGithubIcons(currentTheme);

  // Guardar preferencia
  localStorage.setItem("theme", currentTheme);
}

toggle.addEventListener("change", toggleTheme);

//*****************************************************************************************//
// Navbar por hover (guarda última Y)
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

//*******************************************************************************************//
//*******************************************************************************************//
// # RENDERIZACION DE PROYECTOS - card y modal

const container = document.getElementById("projects-container");
const cardTemplate = document.getElementById("project-template");
const modalTemplate = document.getElementById("modal-template");

proyectos.forEach((p) => {
  // ---------------------------
  // CARD
  // ---------------------------
  const cardFragment = cardTemplate.content.cloneNode(true);
  const card = cardFragment.querySelector(".project-card");

  card.classList.remove("hidden");
  card.querySelector(".card-title").textContent = p.titulo;
  card.querySelector(".card-desc").textContent = p.descripcion;

  // iconos del proyecto
  const icons = card.querySelectorAll(".card-icons img");
  p.iconos.forEach((src, i) => {
    if (icons[i]) icons[i].src = src;
  });

  // botón de descarga
  const dl = card.querySelector(".card-download");

  if (p.boton.link) {
    dl.textContent = p.boton.texto;
    dl.href = p.boton.link;
  } else {
    dl.remove();
  }

  // botón abrir modal
  const btnModal = card.querySelector(".card-open");
  btnModal.dataset.id = p.id;

  container.appendChild(card);

  // ---------------------------
  // MODAL
  // ---------------------------
  const modalFrag = modalTemplate.content.cloneNode(true);
  const modal = modalFrag.querySelector(".project-modal");

  modal.id = p.id;

  modal.querySelector(".modal-title").textContent = p.titulo;

  // textos
  modal.querySelector(".modal-text").innerHTML = p.modalTexto;

  // tech list
  const techList = modal.querySelector(".tech-list");
  techList.innerHTML = "";
  p.techList.forEach((t) => {
    techList.innerHTML += `<li>${t}</li>`;
  });

  // methods list
  const methods = modal.querySelector(".methods-list");
  methods.innerHTML = "";
  p.methodsList.forEach((m) => {
    methods.innerHTML += `<li>${m}</li>`;
  });

  // links repos
  const linksContainer = modal.querySelector(".modal-links");

  p.repos.forEach((r) => {
    linksContainer.innerHTML += `
            <a class="btn-glow" href="${r.link}" target="_blank">${r.label}</a>
        `;
  });

  // descarga
  const modalDl = modal.querySelector(".modal-download");

  if (p.boton.link) {
    modalDl.textContent = p.boton.texto;
    modalDl.href = p.boton.link;
  } else {
    modalDl.remove();
  }

  // insertar modal

  document.body.appendChild(modal);
});
















//*****************************************************************************//
//*****************************************************************************//
//*****************************************************************************//
//*****************************************************************************//

// SCROLL

// Todas las secciones excepto el hero
const reveals = document.querySelectorAll(
  "section, article, .skill-card, .project-card, .contact-container"
);

reveals.forEach((el) => el.classList.add("reveal-item"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${i * 0.05}s`;
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((el) => observer.observe(el));

// ------------------------------
// REVEAL PARA EL HEADER
// ------------------------------

const hero = document.querySelector("#home");
const heroItems = [
  hero.querySelector(".blend-title"),
  hero.querySelector(".subtitle"),
  hero.querySelector(".hero-buttons"),
];

heroItems.forEach((el, i) => {
  el.classList.add("hero-reveal");
  el.style.transitionDelay = `${i * 0.1}s`;
  observer.observe(el);
});

// ------------------------------
//  DESVANECIMIENTO HEADER - falta arreglarlo - pierde el color el titulo
// ------------------------------

// const heroSection = document.getElementById("home");

// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;
//   const max = window.innerHeight * 0.35; // hasta donde desaparece
//   const t = Math.min(scrollY / max, 1); // de 0 a 1

//   // animación suave
//   const opacity = 1 - t;
//   const translate = -t * 40; // -40px suave

//   heroSection.style.opacity = opacity;
//   heroSection.style.transform = `translateY(${translate}px)`;
// });

//****************************************************************************************************************************//
//****************************************************************************************************************************//

// EFECTO CLICK EN BOTONES
document.querySelectorAll("button, .btn, .contact-btn-902").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("btn-click");

    // Lo quitamos cuando termina la animación, para poder repetirla
    setTimeout(() => btn.classList.remove("btn-click"), 250);
  });
});

//****************************************************************************************************************************//
//****************************************************************************************************************************//
// # ENVIO DE FOMLARIO Y CARTEL DE RESPUESTA

const form = document.getElementById("contactForm");
const alerta = document.getElementById("alertaGracias");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alerta.textContent = "Enviando tu mensaje...";
  alerta.className = "alerta show";

  emailjs.sendForm("service_fz2pgho", "template_l9yc0yb", this).then(
    () => {
      alerta.textContent =
        "¡Gracias por tu mensaje! Me comunicaré contigo pronto.";
      alerta.className = "alerta success show";
      form.reset();
    },
    (error) => {
      console.error("Error:", error);
      alerta.textContent = "Error al enviar el mensaje. Intenta nuevamente.";
      alerta.className = "alerta error show";
    }
  );

  setTimeout(() => {
    alerta.classList.remove("show");
  }, 6000);
});

//****************************************************************************************************************************//
//****************************************************************************************************************************//
// BOTON FOOTER

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// posicion del boton = al toggle navar
function alignBackToTop() {
  const navbar = document.querySelector(".navbar .container");
  const btn = document.getElementById("backToTop");

  if (!navbar || !btn) return;

  const rect = navbar.getBoundingClientRect();

  // distancia desde el borde derecho del contenido del navbar y el viewport
  const offset = window.innerWidth - rect.right;

  btn.style.right = offset + 8 + "px"; // 8px pequeño margen
}

window.addEventListener("resize", alignBackToTop);
window.addEventListener("DOMContentLoaded", alignBackToTop);

//****************************************************************************************************************************//
//****************************************************************************************************************************//
