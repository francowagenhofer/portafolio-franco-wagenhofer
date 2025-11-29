const base = import.meta.env.BASE_URL;

export const proyectos = [
  {
    id: "modal3",
    titulo: "Gestor Pyme",
    descripcion:
      "App de escritorio en C# .NET para gestión integral de una pyme.",
    iconos: [
      `${base}Public/Iconos/csharp.svg`,
      `${base}Public/Iconos/dotnet2.svg`,
      `${base}Public/Iconos/sql-server.svg`,
      `${base}Public/Iconos/sqlite-color.svg`,
    ],
    boton: {
      texto: "Descargar app",
      link: "https://github.com/francowagenhofer/Gestion-Pyme-SQLite/releases/download/v1.0.0/AppGestionPyme_Portable.zip",
    },
    modalTexto: `
            <p><strong>App C# .NET para gestión de PYME.</strong> Inicialmente desarrollada como app de consola, 
            evolucionó a una versión con interfaz gráfica (WinForms) para cubrir las necesidades de una empresa. 
            Permite gestionar datos de empleados, proyectos, salarios y más, con todas las funcionalidades CRUD implementadas.</p>
            <p><strong>Versiones independientes:</strong><br>
            • SQLite: portable, ejecutable directo tras descargar (no requiere instalación).<br>
            • SQL Server: completa con multiusuario, procedimientos almacenados, interfaz de consola y WinForms.</p>
        `,
    techList: [
      "<strong>Backend:</strong> C#",
      "<strong>Frontend:</strong> Windows Forms",
      "<strong>Base de datos:</strong> SQL Server / SQLite",
      "<strong>IDE:</strong> Visual Studio",
    ],
    methodsList: [
      "<strong>Lógica:</strong> POO",
      "<strong>Arquitectura:</strong> Capas (dominio, negocio, UI)",
      "<strong>Consultas:</strong> T-SQL, join",
      "<strong>Gestión:</strong> CRUD con validaciones",
    ],
    repos: [
      {
        label: "SQLite",
        link: "https://github.com/francowagenhofer/Gestion-Pyme-SQLite.git",
      },
      {
        label: "SQL Server",
        link: "https://github.com/francowagenhofer/app-gestion-empleados-csharp.git",
      },
    ],
    imagenes: [
      `${base}Imagenes/GestorEmpleados/MenuEscritorio.webp`,
      `${base}Imagenes/GestorEmpleados/GestionOperaciones.webp`,
      `${base}Imagenes/GestorEmpleados/MenuConsola.webp`,
      `${base}Imagenes/GestorEmpleados/GestionEmpleadosDB.webp`,
    ],
  },
  {
    id: "modal1",
    titulo: "Catálogo Web",
    descripcion:
      "App web en C# con .NET para gestión de catálogo de artículos.",
    iconos: [
      `${base}Public/Iconos/csharp.svg`,
      `${base}Public/Iconos/dotnet2.svg`,
      `${base}Public/Iconos/bootstrap.svg`,
      `${base}Public/Iconos/sql-server.svg`,
    ],
    boton: {
      texto: "Sitio Web",
      link: "http://webcatalog.somee.com/",
    },
    modalTexto: `
            <p><strong>App web en C# con ASP.NET Web Forms para gestión de artículos.</strong> 
            Permite administrar productos con CRUD completo, filtrar por categorías y gestionar usuarios con roles.</p>

            <p><strong>Objetivo del proyecto:</strong> Simular escenarios reales de inventario, aplicando arquitectura en capas,
            seguridad básica, patrones de diseño y usabilidad.</p>
        `,
    techList: [
      "<strong>Frontend:</strong> Bootstrap",
      "<strong>Backend:</strong> C#, ASP.NET Web Forms",
      "<strong>Base de datos:</strong> SQL Server",
      "<strong>IDE:</strong> Visual Studio",
      "<strong>Host:</strong> Somee",
    ],
    methodsList: [
      "<strong>Lógica:</strong> POO",
      "<strong>Arquitectura:</strong> Capas (dominio, negocio, UI)",
      "<strong>Gestión:</strong> CRUD con validaciones",
      "<strong>Consultas:</strong> T-SQL y joins",
      "<strong>Seguridad:</strong> Roles y login",
    ],
    repos: [
      {
        label: "Repositorio",
        link: "https://github.com/francowagenhofer/tp-final-nivel3-Wagenhofer-Franco.git",
      },
    ],
    imagenes: [
      `${base}Imagenes/CatalogoWeb/CatalogoWeb.webp`,
      `${base}Imagenes/CatalogoWeb/CatalogoWeb_Lista.webp`,
      `${base}Imagenes/CatalogoWeb/CatalogoWeb_Articulo.webp`,
      `${base}Imagenes/CatalogoWeb/CatalogoWebDB.webp`,
    ],
  },

  {
    id: "modal2",
    titulo: "WebBook",
    descripcion: "Próximamente - App web para una biblioteca personalizada.",
    iconos: [
      `${base}Public/Iconos/csharp.svg`,
      `${base}Public/Iconos/dotnet2.svg`,
      `${base}Public/Iconos/angular.svg`,
      `${base}Public/Iconos/sql-server.svg`,
    ],
    boton: {
      texto: "boton para redirigir o descargar..",
    },
    modalTexto: `
      <p><strong>En desarrollo...</strong> WebBook es un proyecto personal para explorar y organizar libros, autores y géneros. 
      Permitirá perfiles, favoritos, reseñas y más.</p>

      <p>Planteado como práctica integral fullstack con <strong>Angular</strong>, 
      <strong>ASP.NET Core Web API</strong> y <strong>SQL Server</strong>.</p>
    `,
    techList: [
      "<strong>Frontend:</strong> Angular",
      "<strong>Backend:</strong> ASP.NET Core Web API",
      "<strong>Lenguaje:</strong> TypeScript / C#",
      "<strong>Base de datos:</strong> SQL Server",
    ],
    methodsList: [
      "<strong>API:</strong> REST + JWT",
      "<strong>Datos:</strong> EF Core",
      "<strong>UI:</strong> Reactive Forms",
      "<strong>Filtros:</strong> Query Params",
    ],
    repos: [
      {
        label: "Repositorio",
        link: "", 
      },
    ],
    imagenes: [
      `${base}Imagenes/WebBook/default.webp`,
      `${base}Imagenes/WebBook/tapa.webp`,
    ],
  },
];
