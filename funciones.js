var mostrarMenu = false;

document.addEventListener("click", (e) => {
  alert(e.target);
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
});

function ocultarMenu() {
  mostrarMenu = false;
  document.getElementById("menu").style.display = "none";
  document.getElementById("productos").style.paddingTop = "0px";
  document.getElementById("segundoi").style.display = "flex";
}

window.addEventListener("scroll", () => {
  alert("Scroll detectado");
  if (mostrarMenu && screen.width <= 768) {
    // Si el ancho de la pantalla es mayor a 768px y el menú está visible, ocultarlo
    ocultarMenu();
    alert("El menú se ha ocultado al hacer scroll");
  }
});
