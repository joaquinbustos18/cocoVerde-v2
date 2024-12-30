const iconoAbrir = document.getElementById("iconoAbrir");
const iconoCerrar = document.getElementById("iconoCerrar");
const navLinks = document.getElementById("nav-links");

// Muestra el menú móvil al hacer clic en el icono de abrir
iconoAbrir.addEventListener("click", () => {
  navLinks.classList.add("mostrar");
  iconoAbrir.style.display = "none";
  iconoCerrar.style.display = "block";
});

// Oculta el menú móvil al hacer clic en el icono de cerrar
iconoCerrar.addEventListener("click", () => {
  navLinks.classList.remove("mostrar");
  iconoAbrir.style.display = "block";
  iconoCerrar.style.display = "none";
});
