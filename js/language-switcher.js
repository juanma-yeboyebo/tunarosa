document.addEventListener("DOMContentLoaded", function () {
  const langBtn = document.getElementById("lang-btn");
  const langDropdown = document.querySelector(".lang-dropdown");
  const currentYear = document.getElementById("current-year");

  // Actualizar año automáticamente
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Mostrar/ocultar dropdown de idiomas
  langBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    langDropdown.style.display =
      langDropdown.style.display === "block" ? "none" : "block";
  });

  // Cerrar dropdown al hacer clic fuera
  document.addEventListener("click", function () {
    langDropdown.style.display = "none";
  });

  // Traducciones (ejemplo básico)
  const translations = {
    es: {
      welcome: "Bienvenid@ a Tuna Rosa",
      join: "Cómo unirse",
      songs: "Canciones",
      // ... más traducciones
    },
    en: {
      welcome: "Welcome to Tuna Rosa",
      join: "How to join",
      songs: "Songs",
      // ... más traducciones
    },
    // Añadir más idiomas...
  };

  // Cambiar idioma
  document.querySelectorAll(".lang-dropdown a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.getAttribute("data-lang");
      changeLanguage(lang);
      langBtn.innerHTML = `<i class="fas fa-globe"></i> ${this.textContent
        .substring(0, 3)
        .toUpperCase()}`;
      langDropdown.style.display = "none";
    });
  });

  function changeLanguage(lang) {
    // Aquí implementarías el cambio real de contenido
    console.log(`Cambiando a idioma: ${lang}`);
    // En una implementación real, cargarías archivos JSON o harías peticiones
  }

  // Cargar galería de fotos (ejemplo)
  const galleryGrid = document.querySelector(".gallery-grid");
  if (galleryGrid && galleryGrid.classList.contains("gallery-placeholder")) {
    // Aquí podrías cargar fotos desde una API
    setTimeout(() => {
      galleryGrid.innerHTML = `
                <div class="gallery-item">
                    <img src="images/actuaciones/1.jpg" alt="Actuación 1">
                    <p>Concierto Día del Orgullo 2024</p>
                </div>
                <div class="gallery-item">
                    <img src="images/actuaciones/2.jpg" alt="Actuación 2">
                    <p>Festival Universitario</p>
                </div>
                <div class="gallery-item">
                    <img src="images/actuaciones/3.jpg" alt="Actuación 3">
                    <p>Actuación benéfica</p>
                </div>
            `;
    }, 1000);
  }
});
