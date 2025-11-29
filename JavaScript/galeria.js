import { proyectos } from "./proyectos.js";

const navbar = document.querySelector(".navbar");
let lastMouseY = window.innerHeight;

// ======================================================
// MODALES
// ======================================================

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".open-modal");
  if (!btn) return;

  const modal = document.getElementById(btn.dataset.id);
  if (!modal) return;

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  navbar.classList.remove("show");
});

// cerrar modal
function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add("hidden");
  document.body.classList.remove("modal-open");
  // updateNavbar(lastMouseY);
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
//     container.innerHTML = "";

//     const src = images[index];
//     const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

//     const el = isVideo ? document.createElement("video") : new Image();
//     el.loading = "lazy"; // 👈 clave para mejorar carga
//     el.src = src;

//     if (!isVideo) {
//       el.classList.add("gallery-image");
//       el.addEventListener("click", () => {
//         overlayImage.src = src;
//         overlay.classList.remove("hidden");
//       });
//     }

//     container.appendChild(prev);
//     container.appendChild(el);
//     container.appendChild(next);
//   };

//   prev.onclick = () => {
//     index = (index - 1 + images.length) % images.length;
//     update();
//   };

//   next.onclick = () => {
//     index = (index + 1) % images.length;
//     update();
//   };

//   document.addEventListener("click", (e) => {
//     const btn = e.target.closest(`[data-id="${modalId}"]`);
//     if (!btn) return;
//     index = 0;
//     update();
//   });

//   update();
// }


function setupGallery(modalId, images) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const container = modal.querySelector(".modal-gallery-slider");
  const prev = modal.querySelector(".gallery-prev");
  const next = modal.querySelector(".gallery-next");

  if (!container || !prev || !next) return;

  let index = 0;

  const update = () => {
    // borrar solo imágenes y videos, NO las flechas
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
  };

  prev.onclick = () => {
    index = (index - 1 + images.length) % images.length;
    update();
  };

  next.onclick = () => {
    index = (index + 1) % images.length;
    update();
  };

  // Cuando se abre ese modal, resetear galería
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".open-modal");
    if (!btn) return;
    if (btn.dataset.id !== modalId) return;
    index = 0;
    update();
  });

  // primer render
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
