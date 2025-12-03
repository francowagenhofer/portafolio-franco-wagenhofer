import { proyectos } from "./proyectos.js";

const navbar = document.querySelector(".navbar");
let lastMouseY = window.innerHeight;

// ======================================================
// MODALES
// ======================================================

// document.addEventListener("click", (e) => {
//   const btn = e.target.closest(".open-modal");
//   if (!btn) return;

//   const modal = document.getElementById(btn.dataset.id);
//   if (!modal) return;

//   modal.classList.remove("hidden");
//   document.body.classList.add("modal-open");
//   navbar.classList.remove("show");
// });

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".open-modal");
  if (!btn) return;

  const modal = document.getElementById(btn.dataset.id);
  if (!modal) return;

  const content = modal.querySelector(".modal-content");

  // Reset de clases antes de abrir
  content.classList.remove("modal-animate-out");
  content.classList.remove("modal-animate-in");

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  navbar.classList.remove("show");

  // Forzar reflow → permite reproducir animación siempre
  void content.offsetWidth;

  // Animación de entrada
  content.classList.add("modal-animate-in");
});

function closeModal(modalEl) {
  if (!modalEl) return;

  const content = modalEl.querySelector(".modal-content");

  // Reset previo
  content.classList.remove("modal-animate-in");
  content.classList.remove("modal-animate-out");

  // Forzar reflow para poder animar la salida
  void content.offsetWidth;

  // Animación salida
  content.classList.add("modal-animate-out");

  content.addEventListener(
    "animationend",
    () => {
      modalEl.classList.add("hidden");
      document.body.classList.remove("modal-open");
    },
    { once: true }
  );
}

document.addEventListener("click", (e) => {
  // const btn = e.target.closest(".close-modal");
  const btn = e.target.closest(".close-modal") || e.target.closest(".modal-close-top");
  if (!btn) return;

  const modal = btn.closest(".project-modal");
  closeModal(modal);
});





// NUEVO
// Navegación entre PROYECTOS desde el modal
document.addEventListener("click", (e) => {
  const modal = e.target.closest(".project-modal");
  if (!modal) return;

  const modalId = modal.id;

  if (e.target.closest(".next-project")) {
    navigateProject(modalId, "next");
  }

  if (e.target.closest(".prev-project")) {
    navigateProject(modalId, "prev");
  }
});

// NUEVO
function navigateProject(currentModalId, direction) {
  const currentIndex = proyectos.findIndex((p) => p.id === currentModalId);
  if (currentIndex === -1) return;

  let nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

  // loop circular
  if (nextIndex < 0) nextIndex = proyectos.length - 1;
  if (nextIndex >= proyectos.length) nextIndex = 0;

  const nextId = proyectos[nextIndex].id;

  const currentModal = document.getElementById(currentModalId);
  const nextModal = document.getElementById(nextId);

  // cerrar actual
  closeModal(currentModal);

  // esperar fin de animación de salida
  setTimeout(() => {
    nextModal.classList.remove("hidden");
    document.body.classList.add("modal-open");

    const content = nextModal.querySelector(".modal-content");
    content.classList.remove("modal-animate-out");

    // reflow para reiniciar animación
    void content.offsetWidth;
    content.classList.add("modal-animate-in");

    // reiniciar galería interna
    setupGallery(nextId, proyectos[nextIndex].imagenes);
  }, 180);
}











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

// NUEVO
// Navegación con flechas del TECLADO
window.addEventListener("keydown", (e) => {
  const modal = document.querySelector(".project-modal:not(.hidden)");
  if (!modal) return;

  if (e.key === "ArrowRight") {
    navigateProject(modal.id, "next");
  }

  if (e.key === "ArrowLeft") {
    navigateProject(modal.id, "prev");
  }
});



// ======================================================
// GALERÍA REUTILIZABLE
// ======================================================

function setupGallery(modalId, images) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const container = modal.querySelector(".modal-gallery-slider");
  const prev = modal.querySelector(".gallery-prev");
  const next = modal.querySelector(".gallery-next");
  const dotsContainer = modal.querySelector(".gallery-dots");

  if (!container || !prev || !next || !dotsContainer) return;

  let index = 0;
  let currentSlide = null;

  // ----- DOTS -----
  dotsContainer.innerHTML = "";
  images.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("gallery-dot");

    dot.addEventListener("click", () => {
      if (i === index) return;

      const direction = i > index ? "next" : "prev";
      index = i;
      showSlide(direction);
    });

    dotsContainer.appendChild(dot);
  });

  const updateDots = () => {
    dotsContainer.querySelectorAll(".gallery-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  };

  // ----- CREAR Y ANIMAR SLIDE -----
  function createSlide(src) {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

    let el;
    if (isVideo) {
      el = document.createElement("video");
      el.src = src;
      el.controls = true;
    } else {
      el = document.createElement("img");
      el.src = src;
      el.loading = "lazy";

      el.addEventListener("click", () => {
        overlayImage.src = src;
        overlay.classList.remove("hidden");
      });
    }

    slide.appendChild(el);
    return slide;
  }

  // function showSlide(direction = "next") {
  //   const src = images[index];
  //   const newSlide = createSlide(src);

  //   newSlide.classList.add(direction === "next" ? "from-right" : "from-left");

  //   container.appendChild(newSlide);

  //   requestAnimationFrame(() => {
  //     if (currentSlide) {
  //       currentSlide.classList.add(
  //         direction === "next" ? "to-left" : "to-right"
  //       );

  //       currentSlide.addEventListener(
  //         "transitionend",
  //         () => currentSlide.remove(),
  //         { once: true }
  //       );
  //     }

  //     newSlide.classList.remove("from-right", "from-left");
  //     newSlide.classList.add("is-active");
  //     currentSlide = newSlide;
  //   });

  //   updateDots();
  // }

  function showSlide(direction = "next") {
    const src = images[index];
    const newSlide = createSlide(src);

    // 🔥 LIMPIEZA CORRECTA
    if (currentSlide) {
      container.querySelectorAll(".slide").forEach((s) => {
        if (s !== currentSlide) s.remove();
      });
    }

    // Animación de entrada
    newSlide.classList.add(direction === "next" ? "from-right" : "from-left");
    container.appendChild(newSlide);

    requestAnimationFrame(() => {
      if (currentSlide) {
        currentSlide.classList.add(
          direction === "next" ? "to-left" : "to-right"
        );

        currentSlide.addEventListener(
          "transitionend",
          (e) => {
            // ignoramos el transitionend que dispara opacity
            if (e.propertyName !== "transform") return;
            currentSlide?.remove();
          },
          { once: true }
        );
      }

      newSlide.classList.remove("from-right", "from-left");
      newSlide.classList.add("is-active");
      currentSlide = newSlide;
    });

    updateDots();
  }

  // ----- CONTROLES PREV / NEXT -----
  prev.type = "button";
  next.type = "button";

  prev.addEventListener("click", (e) => {
    e.preventDefault();
    index = (index - 1 + images.length) % images.length;
    showSlide("prev");
  });

  next.addEventListener("click", (e) => {
    e.preventDefault();
    index = (index + 1) % images.length;
    showSlide("next");
  });

  // Al abrir el modal, siempre arrancamos desde la primera imagen
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".open-modal");
    if (!btn) return;
    if (btn.dataset.id !== modalId) return;

    index = 0;
    showSlide("next");
  });

  // Inicializa por si acaso
  showSlide("next");
}

// ======================================================
// IMÁGENES POR PROYECTO (automático)
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  proyectos.forEach((p) => setupGallery(p.id, p.imagenes));
});

// ======================================================
// OVERLAY (zoom)
// ======================================================

const overlay = document.getElementById("image-overlay");
const overlayImage = document.getElementById("overlay-image");
const closeOverlay = document.getElementById("close-overlay");

closeOverlay.addEventListener("click", () => overlay.classList.add("hidden"));
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.classList.add("hidden");
});
