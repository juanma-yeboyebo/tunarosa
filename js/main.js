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
