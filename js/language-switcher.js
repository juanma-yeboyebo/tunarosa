document.addEventListener("DOMContentLoaded", function () {
  // Traducciones compartidas (inyectadas por translations.js)
  const translations = window.TUNA_TRANSLATIONS || {};
  if (Object.keys(translations).length === 0) {
    console.warn(
      "TUNA_TRANSLATIONS está vacío; revisa la carga de translations.js",
    );
  }

  // Obtener idioma guardado o usar español por defecto
  let currentLang = localStorage.getItem("tunaRosaLang") || "es";

  // Elementos del DOM
  const langBtn = document.getElementById("langBtn");
  const langDropdown = document.getElementById("langDropdown");

  // Inicializar
  // Aplicar idioma guardado al cargar (incluso si la página no tiene selector)
  changeLanguage(currentLang);

  if (langBtn && langDropdown) {
    // Actualizar botón con idioma actual
    updateLangButton(currentLang);

    // Toggle dropdown
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      langDropdown.classList.toggle("show");
    });

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener("click", function () {
      langDropdown.classList.remove("show");
    });

    // Cambiar idioma al hacer clic en opción
    document.querySelectorAll(".lang-dropdown a").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const lang = this.getAttribute("data-lang");
        changeLanguage(lang);
        updateLangButton(lang);
        langDropdown.classList.remove("show");

        // Guardar preferencia
        localStorage.setItem("tunaRosaLang", lang);
      });
    });
  }

  function updateLangButton(lang) {
    const langNames = {
      es: "ES",
      cat: "CAT",
      gal: "GAL",
      eus: "EUS",
      pt: "PT",
      en: "EN",
      fr: "FR",
    };

    if (langBtn) {
      langBtn.innerHTML = `<i class="fas fa-globe"></i> ${
        langNames[lang] || "ES"
      }`;
    }
  }

  function changeLanguage(lang) {
    if (!translations[lang]) {
      console.warn(`Idioma ${lang} no encontrado, usando español`);
      lang = "es";
    }

    const t = translations[lang];
    currentLang = lang;

    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;

    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (t[key]) {
        element.textContent = t[key];
      }
    });

    // Actualizar elementos con data-i18n-html (para contenido HTML)
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.getAttribute("data-i18n-html");
      if (t[key]) {
        element.innerHTML = t[key];
      }
    });

    // Actualizar atributos traducibles (accesibilidad y textos auxiliares)
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria-label");
      if (t[key]) {
        element.setAttribute("aria-label", t[key]);
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const key = element.getAttribute("data-i18n-alt");
      if (t[key]) {
        element.setAttribute("alt", t[key]);
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      const key = element.getAttribute("data-i18n-title");
      if (t[key]) {
        element.setAttribute("title", t[key]);
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (t[key]) {
        element.setAttribute("placeholder", t[key]);
      }
    });

    // Actualizar metadatos SEO visibles para el idioma activo
    const titleElement = document.querySelector("[data-i18n-document-title]");
    if (titleElement) {
      const key = titleElement.getAttribute("data-i18n-document-title");
      if (t[key]) {
        document.title = t[key];
      }
    }

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      const key = element.getAttribute("data-i18n-content");
      if (t[key]) {
        element.setAttribute("content", t[key]);
      }
    });
  }

  // Exportar función para uso externo si es necesario
  window.tunaRosaChangeLang = changeLanguage;
});
