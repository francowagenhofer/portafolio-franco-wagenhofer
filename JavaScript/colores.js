// Configuracion de colores

export function applyThemeColors(theme) {
  const root = document.documentElement;

  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);

  if (theme === "light") {
    // --- Colores título ---
    root.style.setProperty("--blend-title-color", "rgba(55, 39, 19, 0.6)");

    // --- Navbar ---
    root.style.setProperty("--navbar-bg", "rgba(192, 165, 149, 0.16)");
    root.style.setProperty("--navbar-border", "rgba(77, 77, 77, 0.07)");

    root.style.setProperty("--navbar-link-hover", "#B77A14");
    root.style.setProperty("--navbar-link-hover", "#70573dff");
    
    // --- Links ---
    root.style.setProperty("--link-color", "#3C2F22");
    root.style.setProperty("--link-card-color", "#3C2F22cc");
    // rayaa hover
    root.style.setProperty("--link-hover-color", "#c28a11d5");
    root.style.setProperty("--link-hover-color", "#32271ca6");
    
   

    root.style.setProperty("--link-color", "#3C2F22");

    // Hover del texto (elegante, sutil)
    root.style.setProperty("--navbar-link-hover", "#a87c3eff");

    // Hover de la raya subrayada
    root.style.setProperty("--link-hover-color", "#bd955d60");

    // --- Toggle (interruptor) ---
    root.style.setProperty("--toggle-bg", "#6a5025a7");
    root.style.setProperty("--toggle-bg", "#584321a7");
    root.style.setProperty("--toggle-bg-hover", "#BFA47A");
    root.style.setProperty("--toggle-ball", "#F8F6F2");
    root.style.setProperty("--toggle-glow", "0 0 6px rgba(255, 230, 180, 0.45)");
    
    // links de contacto
    root.style.setProperty("--link-contacto", "#444");
    root.style.setProperty("--link-contacto-hover", "#111");
    root.style.setProperty("--link-contacto-bg-hover", "rgba(0, 0, 0, 0.05)");

    // links de contacto - sombra
    root.style.setProperty(
      "--contact-link-shadow",
      "0 1px 3px rgba(0,0,0,0.10)"
    );
    root.style.setProperty(
      "--contact-link-shadow-hover",
      "0 2px 6px rgba(0,0,0,0.16)"
    );

    // --- Boton principal - "descarga cv"
    root.style.setProperty("--btn-bg", "#bfa57add");
    root.style.setProperty("--btn-hover-bg", "#6a5025a7");

    // --- Botones secundarios - linkedin/github
    root.style.setProperty("--btn-secondary-bg", "transparent");
    root.style.setProperty("--btn-secondary-color", "#BFA47A");

    // --- Tarjetas/Proyectos - Background ---
    root.style.setProperty("--card-bg", "rgba(185, 174, 154, 0.23)");
    root.style.setProperty("--card-hover-bg", "rgba(238, 238, 238, 0.35)");

    // --- Tarjetas/Proyectos - Botones ---
    root.style.setProperty("--proyect-btn-color", "#23150688");
    root.style.setProperty("--proyect-btn-hover-color", "#bfa57a98");
    root.style.setProperty("--proyect-text-color", "#ffffffff");
    root.style.setProperty("--btn-vermas-text", "#231506c9");
    root.style.setProperty("--proyect-text-hover-color", "white");

    // --- Tarjetas Tecnologias
    root.style.setProperty(
      "--background-tecn-card",
      "rgba(185, 174, 154, 0.25)"
    );

    // --- Contacto - Background ---
    // root.style.setProperty("--section-bg", "rgba(250, 241, 231, 0.77)");
    root.style.setProperty("--section-bg", "rgba(185, 174, 154, 0.29)");

    // --- Contacto - Botones ---
    root.style.setProperty("--btn-form-bg", "#272219e4");
    root.style.setProperty("--btn-form-hover-bg", "#2a1f15b9");
    root.style.setProperty("--btn-form-text", "#fff");
    root.style.setProperty("--btn-form-hover-text", "#fff");

    // --- Modal ---
    root.style.setProperty("--fondo-modal", "rgba(0, 0, 0, 0.55)");
    root.style.setProperty("--modal-background", "#897f7d65");
    root.style.setProperty("--modal-bg", "#fffffff6");
    root.style.setProperty("--modal-text", "#3C2F22");
    root.style.setProperty("--flechas", "#3C2F22");

        // modal - contenedor listas
    root.style.setProperty("--modal-chip-bg ", "rgba(0,0,0,0.06)");
    root.style.setProperty("--modal-chip-border", "rgba(0,0,0,0.15)");

    // --- Texto general ---
    root.style.setProperty("--text-color", "#3C2F22");

    // --- Footer ---
    root.style.setProperty("--footer", "#2C241D");
    root.style.setProperty("--footer-hover", "#1A1612");
    root.style.setProperty("--footer-background", "rgba(185, 174, 154, 0.17)");
    root.style.setProperty("--footer-border", "rgba(215, 183, 154, 0.18)");
  } else {
    // titulo - h1
    root.style.setProperty("--blend-title-color", "rgb(202, 228, 233)");

    // navbar y fondo
    // root.style.setProperty("--navbar-bg", "rgba(16, 18, 21, 0.49)");
    root.style.setProperty("--navbar-bg", "rgba(12, 12, 14, 0.57)");
    root.style.setProperty("--navbar-text-color", "white");
    root.style.setProperty("--navbar-border", "rgba(168, 168, 168, 0.06)");
    
    // links-navar
    root.style.setProperty("--link-color", "#ffffffff");

    // Hover del texto
    root.style.setProperty("--navbar-link-hover", "#a5e0e9ff");
    root.style.setProperty("--navbar-link-hover", "#8fe6f4ff");

    // Hover de la raya subrayada
    root.style.setProperty("--link-hover-color", "#8fe7f4c2");

    
    // toggle apagado
    root.style.setProperty("--toggle-bg", "#4d58795a");
    root.style.setProperty("--toggle-bg-hover", "#5c678889");
    root.style.setProperty("--toggle-bg-hover", "#4c557089");
    root.style.setProperty("--toggle-ball", "#fff");
    // root.style.setProperty("--toggle-glow", "0 0 3px rgba(41, 64, 103, 0.13)");

    // links de contacto
    root.style.setProperty("--link-contacto", " #d6d6d6");
    root.style.setProperty("--link-contacto-hover", "#ffffff");
    root.style.setProperty(
      "--link-contacto-bg-hover",
      " rgba(255, 255, 255, 0.08)"
    );

    // links de contacto - sombra
    root.style.setProperty(
      "--contact-link-shadow",
      "0 1px 4px rgba(255,255,255,0.08)"
    );
    root.style.setProperty(
      "--contact-link-shadow-hover",
      "0 3px 8px rgba(255,255,255,0.12)"
    );

    // botones principal - descargar cv
    root.style.setProperty("--btn-bg", "#03a9f4");
    // root.style.setProperty("--btn-hover-bg", "#0288d1");

    // // botones secundario - linkedin
    root.style.setProperty("--btn-secondary-bg", "transparent");
    root.style.setProperty("--btn-secondary-color", "#03a9f4");
    // root.style.setProperty("--btn-secondary-color", "#57B4FF");

    // // botones formulario
    root.style.setProperty("--btn-form-bg", "#2B3C8D");
    root.style.setProperty("--btn-form-hover-bg", "#188efdb4");
    root.style.setProperty("--btn-form-hover-text", "#fff");

    // Tarjetas proyectos - fondo/background
    root.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.07)");
    root.style.setProperty("--card-hover-bg", "rgba(57, 54, 63, 0.15)");
    root.style.setProperty("--bg-color", "#020210");

    // Tarjetas proyectos - botones/btn
    root.style.setProperty("--proyect-btn-color", "rgba(255, 255, 255, 0.1)");
    root.style.setProperty("--proyect-btn-hover-color", "#17518fd9");
    root.style.setProperty("--proyect-text-color", "rgba(255, 255, 255, 1)");
    root.style.setProperty(
      "--proyect-text-hover-color",
      "rgba(255, 255, 255, 1)"
    );
    root.style.setProperty("--btn-vermas-text", "rgba(255, 255, 255, 1)");

    // --- Tarjetas Tecnologias
    root.style.setProperty(
      "--background-tecn-card",
      "rgba(255, 255, 255, 0.033)"
    );

    // modal color - background y texto
    root.style.setProperty("--fondo-modal", "transparent");
    root.style.setProperty("--modal-background", "#0d0e0f63");
    
    // root.style.setProperty("--modal-bg", "#0d0e0ef5");
    root.style.setProperty("--modal-bg", "#0d0e0efb");
    root.style.setProperty("--modal-bg", "#3a3f4eb0");

    root.style.setProperty("--modal-text", "#f9f9f9ff");
    root.style.setProperty("--flechas", "#f9f9f9ff");

    // modal - contenedor listas
    root.style.setProperty("--modal-chip-bg ", "rgba(255,255,255,0.08)");
    root.style.setProperty("--modal-chip-border", "rgba(255,255,255,0.15)");


    // texto
    root.style.setProperty("--text-color", "white");

    // Contenedor de Contacto
    root.style.setProperty("--section-bg", "rgba(0, 0, 0, 0.6)");

    //footer
    root.style.setProperty("--footer", "rgba(255, 255, 255, 0.82)");
    root.style.setProperty("--footer-hover", "rgba(255, 255, 255, 1)");
    root.style.setProperty("--footer-background", "rgba(0, 0, 0, 0.25)");
    root.style.setProperty("--footer-border", "rgba(255, 255, 255, 0.06)");
  }
}
