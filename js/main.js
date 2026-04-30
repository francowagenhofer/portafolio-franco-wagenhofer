
    /* ═══════════════════════════════
       i18n — translations
    ═══════════════════════════════ */
    const T = {
      es: {
        "nav.projects":"Proyectos","nav.skills":"Tecnologías","nav.about":"Sobre mí","nav.contact":"Contacto","nav.cv":"Descargar CV",
        "hero.tag":"Desarrollador .NET · Buenos Aires, Argentina",
        "hero.desc":"Desarrollo aplicaciones web, de escritorio y soluciones de manejo de datos con C# .NET y SQL Server. Formado en la UTN, orientado a código limpio y soluciones reales.",
        "hero.cta":"Ver proyectos",
        "projects.title":"Proyectos\ndestacados",
        "projects.desc":"Descripción breve del proyecto. Qué problema resuelve, qué tecnologías usaste y cuál fue tu rol en el desarrollo.",
        "projects.demo":"Ver demo","projects.code":"Ver código",
        "skills.title":"Tecnologías\n& herramientas",
        "skills.backend":"Backend","skills.frontend":"Frontend","skills.tools":"Herramientas",
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
        "contact.email":"Correo electrónico",
        "contact.message":"Mensaje","contact.messagePh":"Contame sobre tu proyecto o consulta…",
        "contact.send":"Enviar mensaje",
        "footer.role":"Desarrollador .NET · Buenos Aires",
      },
      en: {
        "nav.projects":"Projects","nav.skills":"Skills","nav.about":"About","nav.contact":"Contact","nav.cv":"Download CV",
        "hero.tag":".NET Developer · Buenos Aires, Argentina",
        "hero.desc":"I build web apps, desktop applications and data solutions using C# .NET and SQL Server. Trained at UTN, focused on clean code and real-world results.",
        "hero.cta":"View projects",
        "projects.title":"Featured\nprojects",
        "projects.desc":"Brief project description. What problem it solves, which technologies were used and what your role was in the development.",
        "projects.demo":"Live demo","projects.code":"View code",
        "skills.title":"Technologies\n& tools",
        "skills.backend":"Backend","skills.frontend":"Frontend","skills.tools":"Tools",
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
        "contact.email":"Email address",
        "contact.message":"Message","contact.messagePh":"Tell me about your project or inquiry…",
        "contact.send":"Send message",
        "footer.role":".NET Developer · Buenos Aires",
      }
    };

    let lang  = localStorage.getItem('fw-lang')  || 'es';
    let theme = localStorage.getItem('fw-theme') || 'light';

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

    function setTheme(t) {
      theme = t;
      localStorage.setItem('fw-theme', t);
      document.documentElement.setAttribute('data-theme', t);
      const dark = t === 'dark';
      document.getElementById('icon-moon').style.display = dark ? 'none'  : 'block';
      document.getElementById('icon-sun' ).style.display = dark ? 'block' : 'none';
    }

    // Boot
    setTheme(theme);
    setLang(lang);

    document.getElementById('lang-btn' ).addEventListener('click', () => setLang(lang   === 'es' ? 'en' : 'es'));
    document.getElementById('theme-btn').addEventListener('click', () => setTheme(theme === 'light' ? 'dark' : 'light'));

    /* ── Navbar scroll border ── */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    /* ── Scroll reveal ── */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
