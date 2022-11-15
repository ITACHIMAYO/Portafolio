const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navMenu");
const verProyecto =document.querySelector('#verPro');

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
