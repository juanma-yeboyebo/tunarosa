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

// Selector de idioma: la lógica real vive en language-switcher.js

// Slider de instrumentos
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".instruments-slider");
  const leftBtn = document.querySelector(".slider-nav-left");
  const rightBtn = document.querySelector(".slider-nav-right");
  const dotsContainer = document.querySelector(".slider-dots");

  if (!slider || !leftBtn || !rightBtn) return;

  const cards = slider.querySelectorAll(".instrument-card");

  // Función para obtener el ancho de la tarjeta dinámicamente
  function getCardWidth() {
    if (cards.length > 0) {
      const cardRect = cards[0].getBoundingClientRect();
      const gap = parseInt(getComputedStyle(slider).gap) || 20;
      return cardRect.width + gap;
    }
    return 320 + 25; // fallback
  }

  // Crear indicadores de puntos
  cards.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("slider-dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      const cardWidth = getCardWidth();
      slider.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".slider-dot");

  // Actualizar puntos activos según scroll
  slider.addEventListener("scroll", () => {
    const cardWidth = getCardWidth();
    const scrollPosition = slider.scrollLeft;
    const currentIndex = Math.round(scrollPosition / cardWidth);

    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  });

  // Navegación con botones
  leftBtn.addEventListener("click", () => {
    const cardWidth = getCardWidth();
    slider.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", () => {
    const cardWidth = getCardWidth();
    slider.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  });

  // Soporte para arrastre en escritorio
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.style.cursor = "grabbing";
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });

  // Cursor de arrastre
  slider.style.cursor = "grab";
});

// Oculta la extensión .html en la URL una vez cargada la página
// (solo cambia la barra de direcciones, no la navegación real)
if (typeof history.replaceState === "function") {
  const cleanPath = window.location.pathname
    .replace(/index\.html$/, "")
    .replace(/\.html$/, "");
  const cleanUrl = `${cleanPath}${window.location.search}${window.location.hash}`;
  if (
    cleanUrl !==
    window.location.pathname + window.location.search + window.location.hash
  ) {
    history.replaceState(null, "", cleanUrl);
  }
}
