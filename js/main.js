// Menú móvil
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");

mobileMenuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  const icon = mobileMenuBtn.querySelector("i");
  if (mainNav.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Cerrar menú al hacer clic en un enlace (en móviles)
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      mainNav.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
});

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Selector de idioma
const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");

if (langBtn && langDropdown) {
  langBtn.addEventListener("click", () => {
    langDropdown.classList.toggle("show");
  });

  // Cerrar dropdown al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
      langDropdown.classList.remove("show");
    }
  });

  // Cambiar idioma
  langDropdown.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = link.getAttribute("data-lang");
      changeLanguage(lang);
      langBtn.innerHTML = `<i class="fas fa-globe"></i> ${link.textContent
        .substring(0, 3)
        .toUpperCase()}`;
      langDropdown.classList.remove("show");
    });
  });
}

function changeLanguage(lang) {
  console.log(`Cambiando idioma a: ${lang}`);
  // Aquí iría la lógica real de cambio de idioma
}
