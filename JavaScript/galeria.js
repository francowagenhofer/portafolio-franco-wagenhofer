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


// cerrar modal
// function closeModal(modalEl) {
//   if (!modalEl) return;
//   modalEl.classList.add("hidden");
//   document.body.classList.remove("modal-open");
//   // updateNavbar(lastMouseY);
// }


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


// Cerrar por botón X
// document.querySelectorAll(".close-modal").forEach((close) => {
//   close.addEventListener("click", () => {
//     closeModal(close.closest(".project-modal"));
//   });
// });

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".close-modal");
  if (!btn) return;

  const modal = btn.closest(".project-modal");
  closeModal(modal);
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

// ======================================================
// GALERÍA REUTILIZABLE
// ======================================================

// function setupGallery(modalId, images) {
//   const modal = document.getElementById(modalId);
//   if (!modal) return;

//   const container = modal.querySelector(".modal-gallery-slider");
//   const prev = modal.querySelector(".gallery-prev");
//   const next = modal.querySelector(".gallery-next");

//   if (!container || !prev || !next) return;

//   let index = 0;

//   const update = () => {
//     // borrar solo imágenes y videos, NO las flechas
//     container.querySelectorAll("img, video").forEach(el => el.remove());

//     const src = images[index];
//     const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

//     let el;
//     if (isVideo) {
//       el = document.createElement("video");
//       el.src = src;
//       el.controls = true;
//     } else {
//       el = new Image();
//       el.loading = "lazy";
//       el.src = src;
//       el.classList.add("gallery-image");
//       el.addEventListener("click", () => {
//         overlayImage.src = src;
//         overlay.classList.remove("hidden");
//       });
//     }

//     container.appendChild(el);
//   };

//   prev.onclick = () => {
//     index = (index - 1 + images.length) % images.length;
//     update();
//   };

//   next.onclick = () => {
//     index = (index + 1) % images.length;
//     update();
//   };

//   // Cuando se abre ese modal, resetear galería
//   document.addEventListener("click", (e) => {
//     const btn = e.target.closest(".open-modal");
//     if (!btn) return;
//     if (btn.dataset.id !== modalId) return;
//     index = 0;
//     update();
//   });

//   // primer render
//   update();
// }


function setupGallery(modalId, images) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const container = modal.querySelector(".modal-gallery-slider");
    const prev = modal.querySelector(".gallery-prev");
    const next = modal.querySelector(".gallery-next");
    const dotsContainer = modal.querySelector(".gallery-dots");

    if (!container || !prev || !next || !dotsContainer) return;

    let index = 0;

    // Crear los dots
    dotsContainer.innerHTML = "";
    images.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.classList.add("gallery-dot");
        dot.addEventListener("click", () => {
            index = i;
            update();
        });
        dotsContainer.appendChild(dot);
    });

    const updateDots = () => {
        dotsContainer.querySelectorAll(".gallery-dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    };

    const update = () => {
        // borrar solo imágenes y videos
        container.querySelectorAll("img, video").forEach(el => el.remove());

        const src = images[index];
        const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");
        let el;

        if (isVideo) {
            el = document.createElement("video");
            el.src = src;
            el.controls = true;
        } else {
            el = new Image();
            el.loading = "lazy";
            el.src = src;
            el.classList.add("gallery-image");
            el.addEventListener("click", () => {
                overlayImage.src = src;
                overlay.classList.remove("hidden");
            });
        }

        container.appendChild(el);
        updateDots();
    };

    prev.onclick = () => {
        index = (index - 1 + images.length) % images.length;
        update();
    };

    next.onclick = () => {
        index = (index + 1) % images.length;
        update();
    };

    // Cuando se abre el modal
    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".open-modal");
        if (!btn) return;
        if (btn.dataset.id !== modalId) return;

        index = 0;
        update();
    });

    update();
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
