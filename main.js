import { NeatGradient } from "@firecms/neat";

// Variables globales
let currentTheme = "dark"; // tema inicial
const gradientCanvas = document.getElementById("gradient");
// const themeToggleBtn = document.getElementById("theme-toggle-btn"); // boton
const toggle = document.getElementById("theme-toggle"); // toggle

const navbar = document.querySelector(".navbar");

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
// # Configuraciones para los temas claro y oscuro
const darkThemeConfig = {
  colors: [
    { color: "#552626", enabled: true },
    { color: "#03162D", enabled: true },
    { color: "#002027", enabled: true },
    { color: "#020210", enabled: true },
    { color: "#02152A", enabled: true },
  ],
  speed: 1.5,
  horizontalPressure: 3,
  verticalPressure: 5,
  waveFrequencyX: 1,
  waveFrequencyY: 3,
  waveAmplitude: 12,
  shadows: 0,
  highlights: 2,
  colorBrightness: 1,
  colorSaturation: 6,
  wireframe: false,
  colorBlending: 7,
  backgroundColor: "#003FFF",
  backgroundAlpha: 1,
  grainScale: 2,
  grainSparsity: 0,
  grainIntensity: 0.2,
  grainSpeed: 1,
  resolution: 1,
  yOffset: 0,
};

const lightThemeConfig = {
  colors: [
    { color: "#FFF9E6", enabled: true }, // Amarillo manteca muy suave
    { color: "#FFECC2", enabled: true }, // Amarillo pastel claro
    { color: "#FFD8A8", enabled: true }, // Melocotón claro pastel
    { color: "#FFC284", enabled: true }, // Naranja pastel suave
    { color: "#FFEFD0", enabled: true }, // Amarillo claro cremoso
  ],
  speed: 1.5,
  horizontalPressure: 3,
  verticalPressure: 5,
  waveFrequencyX: 1,
  waveFrequencyY: 3,
  waveAmplitude: 12,
  shadows: 0,
  highlights: 2,
  colorBrightness: 1,
  colorSaturation: 6,
  wireframe: false,
  colorBlending: 7,
  backgroundColor: "#FFF",
  backgroundAlpha: 1,
  grainScale: 2,
  grainSparsity: 0,
  grainIntensity: 0.2,
  grainSpeed: 1,
  resolution: 1,
  yOffset: 0,
};

//****************************************************************************************************************************//
// # Aplicacion de colores
function applyThemeColors(theme) {
  const root = document.documentElement;

  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);

  if (theme === "light") {

    // titulo - h1
    // root.style.setProperty("--blend-title-color", "#2f6d66cc");
    // root.style.setProperty("--blend-title-color", "#5eecdbcc"); //con screen puede ir
    // root.style.setProperty("--blend-title-color", "#03030299"); 
    // root.style.setProperty("--blend-title-color", "#96663ebf");
    // root.style.setProperty("--blend-title-color", "#5d523cff"); // difference o exclusion 
    // root.style.setProperty("--blend-title-color", "#7c6121ff"); // difference o exclusion 
    root.style.setProperty("--blend-title-color", "#45180084"); // multiply

    // navbar y fondo
    // root.style.setProperty("--navbar-bg", "rgba(255, 249, 230, 0.85)");
    root.style.setProperty("--navbar-bg", "rgba(255, 230, 238, 0.18)");
    root.style.setProperty("--navbar-text-color", "#5A2A1F");
    root.style.setProperty("--section-bg", "rgba(255, 239, 208, 0.9)");
    
    // toggle encendido 
    root.style.setProperty("--toggle-bg", "#da7522ab"); // fondo del toggle encendido (sol)
    root.style.setProperty("--toggle-ball", "#FFEFD0"); // bolita clara

    // links
    root.style.setProperty("--link-color", "#B36B1A"); // más intenso
    root.style.setProperty("--link-hover-color", "#FF9E3D"); // cálido sin romper
    root.style.setProperty("--link-card-color", "#9E4A1A"); // para destacados
    
    // botones principales - descargar cv y linkedin
    root.style.setProperty("--btn-bg", "#f19646ff");
    root.style.setProperty("--btn-hover-bg", "#DA7422"); 

    root.style.setProperty("--btn-secondary-bg", "transparent");
    root.style.setProperty("--btn-secondary-color", "#DA7422");
    // root.style.setProperty("--btn-secondary-bg", "#5a2a1f18");

    
    // botones secundarios / formularios
    root.style.setProperty("--btn-form-bg", "#E9C785");
    root.style.setProperty("--btn-form-hover-bg", "#CDA45B");
    root.style.setProperty("--btn-form-hover-text", "#fff");
    
    // tarjetas
    // root.style.setProperty("--card-bg", "rgba(255, 239, 208, 0.95)");
    // root.style.setProperty("--card-hover-bg", "rgba(255, 255, 255, 0.7)");
    root.style.setProperty("--card-bg", "rgba(255, 245, 238, 0.5)");
    root.style.setProperty("--card-hover-bg", "rgba(255, 255, 255, 0.69)");
    


    // fondo general
    root.style.setProperty("--bg-color", "#FFF9E6");

    // texto
    // root.style.setProperty("--text-color", "#5A2A1F");
    root.style.setProperty("--text-color", "#692f00e3");
    
    // footer
    root.style.setProperty("--footer", "#472204e3");
    
  } else {
     
    // titulo - h1
    root.style.setProperty("--blend-title-color", "rgb(202, 228, 233)"); 
    
    // navbar y fondo
    root.style.setProperty("--navbar-bg", "rgba(0, 0, 0, 0.5)");
    // root.style.setProperty("--navbar-bg", "rgba(12, 12, 20, 0.65)");
    root.style.setProperty("--navbar-text-color", "white");
    // root.style.setProperty("--navbar-text-color", "#f0f0f0");
    root.style.setProperty("--section-bg", "rgba(0, 0, 0, 0.6)");
    // root.style.setProperty("--section-bg", "rgba(10, 10, 20, 0.7)");
    
    // toggle apagado 
    // root.style.setProperty("--toggle-bg", "#0040ff75");
    root.style.setProperty("--toggle-bg", "#4d5c894b");
    // root.style.setProperty("--toggle-ball", "#fff");
    root.style.setProperty("--toggle-ball", "#fff5eedd");
    
    // links
    root.style.setProperty("--link-color", "white");
    root.style.setProperty("--link-hover-color", "#57B4FF");
    // root.style.setProperty("--link-hover-color", "#03a9f4");
    root.style.setProperty("--link-card-color", "#03a9f4");
    // root.style.setProperty("--link-card-color", "#80C4FF");
    
    // botones principal - descargar cv
    root.style.setProperty("--btn-bg", "#03a9f4");
    // root.style.setProperty("--btn-bg", "#3792E3");
    root.style.setProperty("--btn-hover-bg", "#0288d1");
    // root.style.setProperty("--btn-hover-bg", "#2277C9");
    
    // // botones secundario - linkedin
    root.style.setProperty("--btn-secondary-bg", "transparent");
    root.style.setProperty("--btn-secondary-color", "#03a9f4");
    // root.style.setProperty("--btn-secondary-color", "#57B4FF");
    
    // // botones formulario
    root.style.setProperty("--btn-form-bg", "#3568ffba");
    // root.style.setProperty("--btn-form-bg", "#2B3C8D");
    root.style.setProperty("--btn-form-hover-bg", "#188efde6");
    // root.style.setProperty("--btn-form-hover-bg", "#3C5FE0");
    root.style.setProperty("--btn-form-hover-text", "#fff");
    
    // // tarjetas y fondo
    root.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.1)");
    // root.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.05)");
    root.style.setProperty("--card-hover-bg", "rgba(255, 255, 255, 0.2)");
    // root.style.setProperty("--card-hover-bg", "rgba(255, 255, 255, 0.1)");
    root.style.setProperty("--bg-color", "#020210");
    // root.style.setProperty("--bg-color", "#0A0A1A");
    
    // // texto
    root.style.setProperty("--text-color", "white");
    // root.style.setProperty("--text-color", "#f0f0f0");
    
    //footer
    root.style.setProperty("--footer", "rgba(255, 255, 255, 0.5)");

  }
}




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

// themeToggleBtn.textContent = currentTheme === "dark" ? "🌙" : "☀️";
toggle.checked = currentTheme === "dark";

// Icono de GitHub correcto al cargar
const githubIcon = document.querySelector('img[alt="GitHub"]');
if (githubIcon) {
  githubIcon.src =
    currentTheme === "dark" ? "Iconos/GitHub_dark.svg" : "Iconos/github.svg";
}

//****************************************************************************************************************************//
// # Cambio de theme/tema - colores
// function toggleTheme() {
//   const githubIcon = document.querySelector('img[alt="GitHub"]');

//   if (currentTheme === "dark") {
//     currentTheme = "light";
//     gradient.destroy();
//     gradient = new NeatGradient({
//       ref: gradientCanvas,
//       ...lightThemeConfig,
//     });
//     themeToggleBtn.textContent = "☀️";
//     applyThemeColors("light");

//     // Cambiar ícono para tema claro
//     if (githubIcon) {
//       githubIcon.src = "Iconos/github.svg";
//     }
//   } else {
//     currentTheme = "dark";
//     gradient.destroy();
//     gradient = new NeatGradient({
//       ref: gradientCanvas,
//       ...darkThemeConfig,
//     });
//     themeToggleBtn.textContent = "🌙";
//     applyThemeColors("dark");

//     if (githubIcon) {
//       githubIcon.src = "Iconos/GitHub_dark.svg";
//     }
//   }

//   localStorage.setItem("theme", currentTheme); // Guarda el tema actual
// }

// Click al botón para alternar tema
// themeToggleBtn.addEventListener("click", toggleTheme);

//****************************************************************************************************************************//

function toggleTheme() {
  const githubIcon = document.querySelector('img[alt="GitHub"]');
  
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
  
  localStorage.setItem("theme", currentTheme); // Guarda el tema actual
}

// Evento para el toggle
toggle.addEventListener("change", toggleTheme);

//****************************************************************************************************************************//