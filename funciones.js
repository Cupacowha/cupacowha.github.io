var mostrarMenu = false;

document.addEventListener("click", (e) => {
  alert(e.target);
  if (e.target.id === "icono") {
    mostrarMenu = !mostrarMenu;

    if (mostrarMenu) {
      document.getElementById("menu").style.display = "flex";
      document.getElementById("productos").style.paddingTop = "230px";
    }
  }

  if (e.target.id === "menugrande") {
    ocultarMenu();
  }
});

function ocultarMenu() {
  mostrarMenu = false;
  document.getElementById("menu").style.display = "none";
  document.getElementById("productos").style.paddingTop = "0px";
}

window.addEventListener("scroll", () => {
  if (screen.width > 768 && mostrarMenu) {
    // Si el ancho de la pantalla es mayor a 768px y el menú está visible, ocultarlo
    ocultarMenu();
  }
});
