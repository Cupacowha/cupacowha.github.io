let mostrarMenu = false;

document.addEventListener("click", (e) => {
  const menu = document.getElementById("menu");

  if (e.target.id === "icono") {
    mostrarMenu = !mostrarMenu;

    if (mostrarMenu) {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  }
});
