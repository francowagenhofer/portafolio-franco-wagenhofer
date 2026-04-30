/* ═══════════════════════════════════════════════════
   DATOS DE PROYECTOS
   Editá este objeto para actualizar todo el modal.
═══════════════════════════════════════════════════ */
const PROJECTS = [
  {
    id: 0,
    type: { es: "App web · MVC", en: "Web App · MVC" },
    name: ".MovieApp",
    desc: {
      es: `<p><strong>App web ASP.NET MVC</strong> para gestión completa de películas. Catálogo con CRUD, sistema de reviews con calificaciones de 1–5 estrellas, favoritos por usuario y autenticación con roles diferenciados (admin/usuario).</p>
           <p><strong>Problema que resuelve:</strong> centralizar la gestión de un catálogo de contenido con experiencia de usuario moderna, seguridad por roles y datos persistentes en SQL Server.</p>`,
      en: `<p><strong>ASP.NET MVC web app</strong> for full movie management. Catalog with CRUD, review system with 1–5 star ratings, per-user favorites and role-based authentication (admin/user).</p>
           <p><strong>Problem it solves:</strong> centralize content catalog management with modern UX, role-based security and SQL Server persistence.</p>`
    },
    techs: ["C#", ".NET 9", "ASP.NET MVC", "Entity Framework Core", "SQL Server", "ASP.NET Identity", "Bootstrap", "Razor Views"],
    details: {
      es: [
        { label: "Rol", value: "Desarrollador full-stack" },
        { label: "Arquitectura", value: "MVC · separación de responsabilidades" },
        { label: "Autenticación", value: "ASP.NET Identity · roles" },
        { label: "IDE", value: "Visual Studio 2022" },
      ],
      en: [
        { label: "Role", value: "Full-stack developer" },
        { label: "Architecture", value: "MVC · separation of concerns" },
        { label: "Authentication", value: "ASP.NET Identity · roles" },
        { label: "IDE", value: "Visual Studio 2022" },
      ]
    },
    links: {
      es: [{ label: "Ver repositorio", href: "https://github.com/francowagenhofer/movieapp-mvc-dotnet", primary: true }],
      en: [{ label: "View repository", href: "https://github.com/francowagenhofer/movieapp-mvc-dotnet", primary: true }]
    },
    images: [
      "Imagenes/MovieApp/home.webp",
      "Imagenes/MovieApp/movie.webp",
      "Imagenes/MovieApp/favoritos.webp",
      "Imagenes/MovieApp/reseñas.webp",
      "Imagenes/MovieApp/admin.webp",
    ]
  },
  {
    id: 1,
    type: { es: "App web · Web Forms", en: "Web App · Web Forms" },
    name: "CatálogoWeb",
    desc: {
      es: `<p><strong>App web en C# con ASP.NET Web Forms</strong> para gestión de artículos. CRUD completo, filtros por categoría/marca, búsqueda dinámica, gestión de usuarios con autenticación y roles.</p>
           <p><strong>Problema que resuelve:</strong> simular un sistema de inventario real con arquitectura en capas, seguridad mediante roles y buenas prácticas de usabilidad. <strong>Proyecto deployado y accesible online.</strong></p>`,
      en: `<p><strong>C# web app with ASP.NET Web Forms</strong> for product management. Full CRUD, category/brand filters, dynamic search, user management with authentication and roles.</p>
           <p><strong>Problem it solves:</strong> simulate a real inventory system with layered architecture, role-based security and usability best practices. <strong>Project deployed and accessible online.</strong></p>`
    },
    techs: ["C#", "ASP.NET Web Forms", "SQL Server", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
    details: {
      es: [
        { label: "Rol", value: "Desarrollador full-stack" },
        { label: "Arquitectura", value: "Capas (dominio, negocio, UI)" },
        { label: "Deploy", value: "Somee (online)" },
        { label: "Seguridad", value: "Sistema de roles y login" },
      ],
      en: [
        { label: "Role", value: "Full-stack developer" },
        { label: "Architecture", value: "Layers (domain, business, UI)" },
        { label: "Deploy", value: "Somee (online)" },
        { label: "Security", value: "Role system and login" },
      ]
    },
    links: {
      es: [
        { label: "Sitio web", href: "http://webcatalog.somee.com/", primary: true },
        { label: "Repositorio", href: "https://github.com/francowagenhofer/tp-final-nivel3-Wagenhofer-Franco.git", primary: false }
      ],
      en: [
        { label: "Website", href: "http://webcatalog.somee.com/", primary: true },
        { label: "Repository", href: "https://github.com/francowagenhofer/tp-final-nivel3-Wagenhofer-Franco.git", primary: false }
      ]
    },
    images: [
      "Imagenes/CatalogoWeb/CatalogoWeb.webp",
      "Imagenes/CatalogoWeb/CatalogoWeb_Lista.webp",
      "Imagenes/CatalogoWeb/CatalogoWeb_Articulo.webp",
      "Imagenes/CatalogoWeb/CatalogoWebDB.webp",
    ]
  },
  {
    id: 2,
    type: { es: "App escritorio · WinForms", en: "Desktop App · WinForms" },
    name: "Gestor Pyme",
    desc: {
      es: `<p><strong>App C# .NET para gestión de PYME.</strong> Comenzó como consola y evolucionó a WinForms. Gestiona empleados, proyectos y salarios con CRUD completo.</p>
           <p><strong>Dos versiones independientes:</strong> SQLite (portable, sin instalación) y SQL Server (multiusuario, procedimientos almacenados, consola + WinForms).</p>`,
      en: `<p><strong>C# .NET app for SME management.</strong> Started as a console app, evolved to WinForms. Manages employees, projects and salaries with full CRUD.</p>
           <p><strong>Two independent versions:</strong> SQLite (portable, no install needed) and SQL Server (multiuser, stored procedures, console + WinForms).</p>`
    },
    techs: ["C#", ".NET", "WinForms", "SQL Server", "SQLite", "Stored Procedures"],
    details: {
      es: [
        { label: "Rol", value: "Desarrollador full-stack" },
        { label: "Arquitectura", value: "Capas (dominio, negocio, UI)" },
        { label: "Versiones", value: "SQLite · SQL Server" },
        { label: "Distribución", value: "Portable · sin instalación" },
      ],
      en: [
        { label: "Role", value: "Full-stack developer" },
        { label: "Architecture", value: "Layers (domain, business, UI)" },
        { label: "Versions", value: "SQLite · SQL Server" },
        { label: "Distribution", value: "Portable · no install" },
      ]
    },
    links: {
      es: [
        { label: "Descargar app", href: "https://github.com/francowagenhofer/Gestion-Pyme-SQLite/releases/download/v1.0.0/AppGestionPyme_Portable.zip", primary: true },
        { label: "SQLite repo", href: "https://github.com/francowagenhofer/Gestion-Pyme-SQLite.git", primary: false },
        { label: "SQL Server repo", href: "https://github.com/francowagenhofer/app-gestion-empleados-csharp.git", primary: false }
      ],
      en: [
        { label: "Download app", href: "https://github.com/francowagenhofer/Gestion-Pyme-SQLite/releases/download/v1.0.0/AppGestionPyme_Portable.zip", primary: true },
        { label: "SQLite repo", href: "https://github.com/francowagenhofer/Gestion-Pyme-SQLite.git", primary: false },
        { label: "SQL Server repo", href: "https://github.com/francowagenhofer/app-gestion-empleados-csharp.git", primary: false }
      ]
    },
    images: [
      "Imagenes/GestorEmpleados/MenuEscritorio.webp",
      "Imagenes/GestorEmpleados/GestionOperaciones.webp",
      "Imagenes/GestorEmpleados/MenuConsola.webp",
      "Imagenes/GestorEmpleados/GestionEmpleadosDB.webp",
    ]
  }
];

/* ═══════════════════════════════════════════════════
   i18n
═══════════════════════════════════════════════════ */
const T = {
  es: {
    "nav.projects":"Proyectos","nav.skills":"Tecnologías","nav.about":"Sobre mí","nav.contact":"Contacto","nav.cv":"Descargar CV",
    "hero.tag":"Desarrollador .NET · Buenos Aires, Argentina",
    "hero.desc":"Desarrollo aplicaciones web, de escritorio y soluciones de manejo de datos con C# .NET y SQL Server. Formado en la UTN, orientado a código limpio y soluciones reales.",
    "hero.ctaContact":"Contactarme","hero.ctaCV":"Descargar CV","hero.ctaProjects":"Ver proyectos",
    "hero.stat1Label":"Especialidad","hero.stat2Label":"Formación","hero.stat3Label":"Stack principal",
    "hero.stat4Label":"Disponibilidad","hero.stat5Label":"Ubicación",
    "projects.title":"Proyectos\ndestacados",
    "projects.p1.type":"App web","projects.p2.type":"App web","projects.p3.type":"App escritorio",
    "projects.p1.desc":"Catálogo de películas con sistema de reseñas, favoritos, calificaciones y autenticación por roles.",
    "projects.p2.desc":"Plataforma para administrar y filtrar productos con control de acceso y roles diferenciados. Deployada online.",
    "projects.p3.desc":"Gestión integral de empleados, proyectos y sueldos para PyMEs. Versiones SQLite y SQL Server disponibles.",
    "projects.p4.desc":"Nuevo proyecto en desarrollo. Próximamente con todos los detalles.",
    "projects.demo":"Ver demo","projects.code":"Ver código","projects.download":"Descargar app","projects.viewDetail":"Ver detalle",
    "skills.title":"Tecnologías\n& herramientas",
    "skills.backend":"Backend","skills.frontend":"Frontend","skills.databases":"Base de datos","skills.tools":"Herramientas",
    "about.title":"Sobre\nmí",
    "about.p1":"Soy desarrollador .NET formado en la Tecnicatura Universitaria en Programación de la UTN, con práctica constante en proyectos reales usando C#, .NET y SQL Server.",
    "about.p2":"Me apasiona construir software que resuelva problemas concretos — desde aplicaciones de escritorio hasta soluciones web y manejo de datos. Trabajo con foco en código limpio, legible y mantenible.",
    "about.p3":"Busco seguir creciendo profesionalmente, ampliar mis capacidades técnicas y aportar valor real en cada proyecto que enfrento.",
    "about.education.label":"Formación","about.education.value":"Tec. Universitaria en Programación · UTN",
    "about.specialty.label":"Especialidad","about.specialty.value":"Aplicaciones web, desktop y datos (.NET)",
    "about.location.label":"Ubicación","about.location.value":"Buenos Aires, Argentina",
    "about.languages.label":"Idiomas","about.languages.value":"Español · Inglés técnico",
    "about.availability.label":"Disponibilidad","about.availability.value":"Abierto a oportunidades",
    "contact.title":"Hablemos","contact.heading":"¿Tenés un proyecto\no propuesta?",
    "contact.sub":"Estoy disponible para trabajo freelance, relación de dependencia o colaboración en proyectos. Escribime y hablamos.",
    "contact.name":"Nombre","contact.namePh":"Tu nombre",
    "contact.email":"Correo electrónico","contact.message":"Mensaje","contact.messagePh":"Contame sobre tu proyecto o consulta…",
    "contact.send":"Enviar mensaje",
    "modal.description":"Descripción","modal.technologies":"Tecnologías","modal.details":"Detalles",
    "modal.prev":"Anterior","modal.next":"Siguiente",
    "footer.role":"Desarrollador .NET · Buenos Aires",
  },
  en: {
    "nav.projects":"Projects","nav.skills":"Skills","nav.about":"About","nav.contact":"Contact","nav.cv":"Download CV",
    "hero.tag":".NET Developer · Buenos Aires, Argentina",
    "hero.desc":"I build web apps, desktop applications and data solutions using C# .NET and SQL Server. Trained at UTN, focused on clean code and real-world results.",
    "hero.ctaContact":"Contact me","hero.ctaCV":"Download CV","hero.ctaProjects":"View projects",
    "hero.stat1Label":"Specialty","hero.stat2Label":"Education","hero.stat3Label":"Main stack",
    "hero.stat4Label":"Availability","hero.stat5Label":"Location",
    "projects.title":"Featured\nprojects",
    "projects.p1.type":"Web app","projects.p2.type":"Web app","projects.p3.type":"Desktop app",
    "projects.p1.desc":"Movie catalog with review system, favorites, ratings and role-based authentication.",
    "projects.p2.desc":"Platform to manage and filter products with access control and roles. Deployed online.",
    "projects.p3.desc":"Comprehensive management of employees, projects and salaries for SMEs. SQLite and SQL Server versions available.",
    "projects.p4.desc":"New project in development. Details coming soon.",
    "projects.demo":"Live demo","projects.code":"View code","projects.download":"Download app","projects.viewDetail":"View detail",
    "skills.title":"Technologies\n& tools",
    "skills.backend":"Backend","skills.frontend":"Frontend","skills.databases":"Databases","skills.tools":"Tools",
    "about.title":"About\nme",
    "about.p1":"I'm a .NET developer trained at UTN's University Technical Degree in Programming, with ongoing practice building real-world projects in C#, .NET and SQL Server.",
    "about.p2":"I'm passionate about crafting software that solves concrete problems — from desktop apps to web solutions and data management. I focus on clean, readable and maintainable code.",
    "about.p3":"I'm looking to keep growing professionally, expand my technical capabilities and bring real value to every challenge I take on.",
    "about.education.label":"Education","about.education.value":"Univ. Tech. Degree in Programming · UTN",
    "about.specialty.label":"Specialty","about.specialty.value":"Web, desktop & data apps (.NET)",
    "about.location.label":"Location","about.location.value":"Buenos Aires, Argentina",
    "about.languages.label":"Languages","about.languages.value":"Spanish (native) · Technical English",
    "about.availability.label":"Availability","about.availability.value":"Open to opportunities",
    "contact.title":"Let's talk","contact.heading":"Have a project\nor proposal?",
    "contact.sub":"Available for freelance work, full-time roles or project collaboration. Reach out and let's chat.",
    "contact.name":"Name","contact.namePh":"Your name",
    "contact.email":"Email address","contact.message":"Message","contact.messagePh":"Tell me about your project or inquiry…",
    "contact.send":"Send message",
    "modal.description":"Description","modal.technologies":"Technologies","modal.details":"Details",
    "modal.prev":"Previous","modal.next":"Next",
    "footer.role":".NET Developer · Buenos Aires",
  }
};

/* ═══════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════ */
let lang  = localStorage.getItem('fw-lang')  || 'es';
let theme = localStorage.getItem('fw-theme') || 'light';
let modalIndex = 0;
let galleryIndex = 0;

/* ═══════════════════════════════════════════════════
   i18n APPLY
═══════════════════════════════════════════════════ */
function setLang(l) {
  lang = l;
  localStorage.setItem('fw-lang', l);
  document.documentElement.setAttribute('lang', l);
  document.getElementById('lang-label').textContent = l === 'es' ? 'EN' : 'ES';
  const t = T[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.getAttribute('data-i18n')];
    if (v !== undefined) el.innerHTML = v.replace(/\n/g, '<br>');
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t[el.getAttribute('data-i18n-ph')];
    if (v !== undefined) el.placeholder = v;
  });
  document.title = l === 'es'
    ? 'Franco Wagenhöfer — Desarrollador .NET'
    : 'Franco Wagenhöfer — .NET Developer';
}

/* ═══════════════════════════════════════════════════
   THEME
═══════════════════════════════════════════════════ */
function setTheme(t) {
  theme = t;
  localStorage.setItem('fw-theme', t);
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('icon-moon').style.display = t === 'dark' ? 'none'  : 'block';
  document.getElementById('icon-sun' ).style.display = t === 'dark' ? 'block' : 'none';
}

/* ═══════════════════════════════════════════════════
   MODAL — galería + info
═══════════════════════════════════════════════════ */
const overlay    = document.getElementById('project-modal-overlay');
const modalImg   = document.getElementById('modal-gallery-img');
const thumbsCont = document.getElementById('modal-gallery-thumbs');

function renderGallery(images) {
  thumbsCont.innerHTML = '';
  galleryIndex = 0;

  if (!images || images.length === 0) {
    modalImg.src = '';
    return;
  }

  modalImg.src = images[0];
  modalImg.alt = '';

  images.forEach((src, i) => {
    const th = document.createElement('div');
    th.className = 'gallery-thumb' + (i === 0 ? ' active' : '');
    const img = document.createElement('img');
    img.src = src; img.alt = '';
    th.appendChild(img);
    th.addEventListener('click', () => setGalleryIndex(i, images));
    thumbsCont.appendChild(th);
  });
}

function setGalleryIndex(i, images) {
  if (!images || i < 0 || i >= images.length) return;
  galleryIndex = i;

  modalImg.classList.add('fade-out');
  setTimeout(() => {
    modalImg.src = images[i];
    modalImg.classList.remove('fade-out');
  }, 150);

  thumbsCont.querySelectorAll('.gallery-thumb').forEach((t, idx) => {
    t.classList.toggle('active', idx === i);
  });
}

function openModal(projectIdx) {
  const p = PROJECTS[projectIdx];
  if (!p) return;
  modalIndex = projectIdx;

  // tipo + título
  document.getElementById('modal-type').textContent  = p.type[lang];
  document.getElementById('modal-title').textContent = p.name;

  // descripción
  document.getElementById('modal-desc').innerHTML = p.desc[lang];

  // chips de tecnologías
  const techsCont = document.getElementById('modal-techs');
  techsCont.innerHTML = p.techs.map(t => `<span class="modal-chip">${t}</span>`).join('');

  // detalles
  const detailsCont = document.getElementById('modal-details');
  detailsCont.innerHTML = (p.details[lang] || []).map(d =>
    `<div class="modal-detail-item">
       <div class="modal-detail-label">${d.label}</div>
       <div class="modal-detail-value">${d.value}</div>
     </div>`
  ).join('');

  // links
  const linksCont = document.getElementById('modal-links');
  linksCont.innerHTML = (p.links[lang] || []).map(l =>
    `<a href="${l.href}" target="_blank" rel="noopener noreferrer"
        class="${l.primary ? 'modal-btn-fill' : 'modal-btn-outline'}">${l.label}</a>`
  ).join('');

  // galería
  renderGallery(p.images);

  // contador
  document.getElementById('modal-counter').textContent =
    `${projectIdx + 1} / ${PROJECTS.length}`;

  // abrir overlay
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function navigateModal(dir) {
  let next = modalIndex + dir;
  if (next < 0) next = PROJECTS.length - 1;
  if (next >= PROJECTS.length) next = 0;
  openModal(next);
}

// abrir con botón "Ver detalle" o overlay hover btn
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-open]');
  if (!btn) return;
  const idx = parseInt(btn.dataset.open, 10);
  if (!isNaN(idx) && PROJECTS[idx]) openModal(idx);
});

// cerrar
document.getElementById('modal-close').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

// flechas galería
document.getElementById('gallery-prev').addEventListener('click', e => {
  e.stopPropagation();
  const imgs = PROJECTS[modalIndex].images;
  setGalleryIndex((galleryIndex - 1 + imgs.length) % imgs.length, imgs);
});
document.getElementById('gallery-next').addEventListener('click', e => {
  e.stopPropagation();
  const imgs = PROJECTS[modalIndex].images;
  setGalleryIndex((galleryIndex + 1) % imgs.length, imgs);
});

// nav entre proyectos
document.getElementById('modal-prev').addEventListener('click', () => navigateModal(-1));
document.getElementById('modal-next').addEventListener('click', () => navigateModal(1));

// teclado
window.addEventListener('keydown', e => {
  if (!overlay.classList.contains('open')) return;
  if (e.key === 'Escape')      closeModal();
  if (e.key === 'ArrowRight')  setGalleryIndex((galleryIndex + 1) % PROJECTS[modalIndex].images.length, PROJECTS[modalIndex].images);
  if (e.key === 'ArrowLeft')   setGalleryIndex((galleryIndex - 1 + PROJECTS[modalIndex].images.length) % PROJECTS[modalIndex].images.length, PROJECTS[modalIndex].images);
});

/* ═══════════════════════════════════════════════════
   NAV SCROLL
═══════════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ═══════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════ */
setTheme(theme);
setLang(lang);

document.getElementById('lang-btn' ).addEventListener('click', () => setLang(lang   === 'es' ? 'en' : 'es'));
document.getElementById('theme-btn').addEventListener('click', () => setTheme(theme === 'light' ? 'dark' : 'light'));

