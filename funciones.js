let carrito = [];

function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    mostrarResumenCarrito();
}

function mostrarResumenCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalTexto = document.getElementById("total-carrito");
    lista.innerHTML = "";

    let total = 0;
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio.toLocaleString("es-CO")}`;
        lista.appendChild(li);
        total += item.precio;
    });

    totalTexto.innerHTML = `<strong>Total:</strong> $${total.toLocaleString("es-CO")}`;
}

// Mostrar/ocultar carrito al hacer clic en el botón
document.addEventListener("DOMContentLoaded", () => {
    const btnCarrito = document.getElementById("btn-carrito");
    const carritoContenido = document.getElementById("carrito-contenido");

    btnCarrito.addEventListener("click", () => {
        if (carritoContenido.style.display === "none") {
            carritoContenido.style.display = "block";
        } else {
            carritoContenido.style.display = "none";
        }
    });
});
