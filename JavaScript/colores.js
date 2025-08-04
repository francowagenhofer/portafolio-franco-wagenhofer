// Configuracion de colores

export function applyThemeColors(theme) {
  const root = document.documentElement;

  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);

  if (theme === "light") {
    // --- Colores título ---
    root.style.setProperty("--blend-title-color", "rgba(69, 24, 0, 0.52)"); // #45180084

    // --- Navbar ---
    root.style.setProperty("--navbar-bg", "rgba(255, 230, 238, 0.18)");
    root.style.setProperty("--navbar-text-color", "#5A2A1F");

    // --- Secciones ---
    root.style.setProperty("--section-bg", "rgba(255, 239, 208, 0.9)");

    // --- Toggle (interruptor) ---
    root.style.setProperty("--toggle-bg", "#da7522ab");
    root.style.setProperty("--toggle-ball", "#FFEFD0");

    // --- Links ---
    root.style.setProperty("--link-card-color", "#451800c4");
    // root.style.setProperty("--link-color", "#451800b7");
    root.style.setProperty("--link-color", "#451800ed");
    root.style.setProperty("--link-hover-color", "#FF9E3D");

    // --- Botones principales ---
    root.style.setProperty("--btn-bg", "#DA7422");
    root.style.setProperty("--btn-hover-bg", "#B3541A");

    // --- Botones secundarios ---
    root.style.setProperty("--btn-secondary-bg", "transparent");
    root.style.setProperty("--btn-secondary-color", "#DA7422");

    // --- Botones de formulario ---
    root.style.setProperty("--btn-form-bg", "#E9C785");
    root.style.setProperty("--btn-form-hover-bg", "#CDA45B");
    root.style.setProperty("--btn-form-hover-text", "#fff");

    //  // Tarjetas proyectos - fondo/background
    root.style.setProperty("--card-bg", "rgba(255, 245, 238, 0.5)");
    root.style.setProperty("--card-hover-bg", "rgba(255, 255, 255, 0.69)");
    // root.style.setProperty("--card-bg", "rgba(255, 239, 208, 0.95)");
    // root.style.setProperty("--card-hover-bg", "rgba(255, 255, 255, 0.7)");

    // Tarjetas proyectos - botones/btn
    root.style.setProperty("--proyect-btn-color", " #da902271");
    root.style.setProperty("--proyect-btn-hover-color", "#b34500db");
    root.style.setProperty("--proyect-text-color", "rgb(76, 20, 8)");
    root.style.setProperty("--proyect-text-hover-color", "white");

    // modal
    // root.style.setProperty("--modal-bg", "white");
    root.style.setProperty("--modal-bg", "#ffffffd6");
    root.style.setProperty("--modal-text", "#5A2A1F");

    // --- Texto general --
    root.style.setProperty("--text-color", "#5A2A1F");

    // --- Texto general --
    root.style.setProperty("--footer", "#310f07ff");
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

    // Tarjetas proyectos - fondo/background
    root.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.1)");
    // root.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.05)");
    root.style.setProperty("--card-hover-bg", "rgba(255, 255, 255, 0.2)");
    // root.style.setProperty("--card-hover-bg", "rgba(255, 255, 255, 0.1)");
    root.style.setProperty("--bg-color", "#020210");
    // root.style.setProperty("--bg-color", "#0A0A1A");

    // Tarjetas proyectos - botones/btn
    // root.style.setProperty("--proyect-btn-color", "#4d5c8969");
    root.style.setProperty("--proyect-btn-color", "#4d5c898f");
    root.style.setProperty("--proyect-btn-hover-color", "#0057b3db");
    root.style.setProperty("--proyect-text-color", "rgba(255, 255, 255, 1)");
    root.style.setProperty(
      "--proyect-text-hover-color",
      "rgba(255, 255, 255, 1)"
    );

    // modal color - background y texto
    root.style.setProperty("--modal-bg", "rgba(30, 30, 50, 0.95)");
    // root.style.setProperty("--modal-bg", "#1e1e2f");
    // root.style.setProperty("--modal-bg", "#12181f");
    root.style.setProperty("--modal-text", "#e0e6f1");
    // root.style.setProperty("--modal-text", "#f2f2f2");
    // root.style.setProperty("--modal-text", "#d6f3ff");

    // texto
    root.style.setProperty("--text-color", "white");
    // root.style.setProperty("--text-color", "#f0f0f0");

    //footer
    root.style.setProperty("--footer", "rgba(255, 255, 255, 0.5)");

  }
}
