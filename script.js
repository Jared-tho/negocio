const btnTema = document.getElementById("theme-d");
const btnMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu-principal");

/* Modo oscuro */
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});

/* Menú hamburguesa */
function abrirMenu(abrir) {
  menu.classList.toggle("abierto", abrir);
  btnMenu.classList.toggle("abierto", abrir);
  btnMenu.setAttribute("aria-expanded", abrir);
  btnMenu.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
}

btnMenu.addEventListener("click", () => {
  abrirMenu(!menu.classList.contains("abierto"));
});

// Cerrar al tocar un enlace del menú
menu.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => abrirMenu(false));
});

// Cerrar con Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") abrirMenu(false);
});

// Cerrar al pasar a vista de escritorio
window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (e.matches) abrirMenu(false);
});