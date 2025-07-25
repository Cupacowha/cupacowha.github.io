var mostrarMenu = false;

document.addEventListener("click", (e) => {
  if (e.target.id === "icono") {
    mostrarMenu = !mostrarMenu;

    if (mostrarMenu) {
      document.getElementById("menu").style.display = "flex";
      document.getElementById("productos").style.paddingTop = "230px";
      document.getElementById("segundoi").style.display = "none";
    }
  }

  if (e.target.id === "menugrande") {
    ocultarMenu();
  }

  if (e.target.id === "tercero") {
    ocultarMenu();
  }
});

function ocultarMenu() {
  mostrarMenu = false;
  document.getElementById("menu").style.display = "none";
  document.getElementById("productos").style.paddingTop = "0px";
  document.getElementById("segundoi").style.display = "flex";
}

window.addEventListener("scroll", () => {
  if (mostrarMenu && window.innerWidth <= 768) {
    // Si el ancho de la pantalla es mayor a 768px y el menú está visible, ocultarlo
    ocultarMenu();
  }
});
