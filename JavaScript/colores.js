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
    root.style.setProperty("--navbar-text-color", "#3C2F22"); 

    // --- Toggle (interruptor) ---
    root.style.setProperty("--toggle-bg", "#BFA47A"); 
    root.style.setProperty("--toggle-bg", "#6a5025a7"); 
    root.style.setProperty("--toggle-ball", "#F8F6F2"); 

    // --- Links ---
    root.style.setProperty("--link-card-color", "#3C2F22cc"); 
    root.style.setProperty("--link-color", "#3C2F22"); 
    root.style.setProperty("--link-hover-color", "#c28a11d5"); 

    // --- Boton principal - "descarga cv"   
    root.style.setProperty("--btn-bg", "#bfa57add"); 
    root.style.setProperty("--btn-hover-bg", "#6a5025a7"); 
  
    // --- Botones secundarios - linkedin/github
    root.style.setProperty("--btn-secondary-bg", "transparent");
    root.style.setProperty("--btn-secondary-color", "#BFA47A"); 
    
    // --- Tarjetas/Proyectos - Background ---
    // root.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.35)"); 
    // root.style.setProperty("--card-hover-bg", "rgba(255, 255, 255, 0.35)");
    root.style.setProperty("--card-bg", "rgba(185, 174, 154, 0.3)"); 
    root.style.setProperty("--card-bg", "rgba(185, 174, 154, 0.23)"); 
    root.style.setProperty("--card-hover-bg", "rgba(238, 238, 238, 0.35)"); 

    // --- Tarjetas/Proyectos - Botones ---
    root.style.setProperty("--proyect-btn-color", "#23150688"); 
    root.style.setProperty("--proyect-btn-hover-color", "#bfa57a98"); 
    root.style.setProperty("--proyect-text-color", "#ffffffff"); 
    root.style.setProperty("--btn-vermas-text", "#231506c9");
    root.style.setProperty("--proyect-text-hover-color", "white");
    
    // --- Tarjetas Tecnologias
    root.style.setProperty("--background-tecn-card", "rgba(185, 174, 154, 0.25)");

    // --- Contacto - Background ---
    // root.style.setProperty("--section-bg", "rgba(250, 241, 231, 0.77)"); 
    root.style.setProperty("--section-bg", "rgba(185, 174, 154, 0.29)"); 

    // --- Contacto - Botones ---
    root.style.setProperty("--btn-form-bg", "#272219e4"); 
    root.style.setProperty("--btn-form-hover-bg", "#2a1f15b9"); 
    root.style.setProperty("--btn-form-text", "#fff");
    root.style.setProperty("--btn-form-hover-text", "#fff");

    // --- Modal ---
    root.style.setProperty("--modal-background", "#897f7d65");
    root.style.setProperty("--modal-bg", "#fffffff6");
    root.style.setProperty("--modal-text", "#3C2F22");
    root.style.setProperty("--flechas", "#3C2F22");

    // --- Texto general ---
    root.style.setProperty("--text-color", "#3C2F22");

    // --- Footer ---
    root.style.setProperty("--footer", "#2C241D");  
    root.style.setProperty("--footer-background", "rgba(185, 174, 154, 0.17)");



  } else {
    // titulo - h1
    root.style.setProperty("--blend-title-color", "rgb(202, 228, 233)");

    // navbar y fondo
    root.style.setProperty("--navbar-bg", "rgba(16, 18, 21, 0.65)");
    root.style.setProperty("--navbar-bg", "rgba(16, 18, 21, 0.49)");
    root.style.setProperty("--navbar-text-color", "white");

    // toggle apagado
    // root.style.setProperty("--toggle-bg", "#0040ff75");
    root.style.setProperty("--toggle-bg", "#4d5c894b");
    // root.style.setProperty("--toggle-ball", "#9EC8FF"); 
    root.style.setProperty("--toggle-ball", "#fff");

    // links
    root.style.setProperty("--link-color", "white");
    root.style.setProperty("--link-hover-color", "#57B4FF");
    root.style.setProperty("--link-hover-color", "#82c3f8bf");

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
    root.style.setProperty("--btn-form-bg", "#003489e2");
    root.style.setProperty("--btn-form-bg", "#004c89bf");
    root.style.setProperty("--btn-form-bg", "#2B3C8D");
    root.style.setProperty("--btn-form-hover-bg", "#188efdb4");
    root.style.setProperty("--btn-form-hover-text", "#fff");

    // Tarjetas proyectos - fondo/background
    root.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.07)");
    root.style.setProperty("--card-hover-bg", "rgba(57, 54, 63, 0.15)");
    root.style.setProperty("--bg-color", "#020210");

    // Tarjetas proyectos - botones/btn
    root.style.setProperty("--proyect-btn-color", "rgba(255, 255, 255, 0.1)");
    // root.style.setProperty("--proyect-btn-hover-color", "#17518fca");
    root.style.setProperty("--proyect-btn-hover-color", "#17518fd9");
    root.style.setProperty("--proyect-text-color", "rgba(255, 255, 255, 1)");
    root.style.setProperty("--proyect-text-hover-color", "rgba(255, 255, 255, 1)");
    root.style.setProperty("--btn-vermas-text", "rgba(255, 255, 255, 1)");

    // --- Tarjetas Tecnologias
    root.style.setProperty("--background-tecn-card", "rgba(255, 255, 255, 0.033)");

    // modal color - background y texto
    root.style.setProperty("--modal-background", "#0d0e0f63");
    // root.style.setProperty("--modal-bg", "#0d0e0ef5");
    root.style.setProperty("--modal-bg", "#0d0e0efb");
    root.style.setProperty("--modal-text", "#f9f9f9ff");
    root.style.setProperty("--flechas", "#f9f9f9ff");

    // texto
    root.style.setProperty("--text-color", "white");

    // Contenedor de Contacto
    root.style.setProperty("--section-bg", "rgba(0, 0, 0, 0.6)");

    //footer
    root.style.setProperty("--footer", "rgba(255, 255, 255, 0.85)");
    root.style.setProperty("--footer-background", "rgba(0, 0, 0, 0.25)");
  }
}
