let carrito = [];

function agregarAlCarrito(nombre, precio, imagen) {
    const producto = { nombre, precio, imagen };
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
        li.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" style="width:50px; height:auto; margin-right:10px;">
            ${item.nombre} - $${item.precio.toLocaleString("es-CO")}
        `;
        lista.appendChild(li);
        total += item.precio;
    });

    totalTexto.innerHTML = `<strong>Total:</strong> $${total.toLocaleString("es-CO")}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const btnCarrito = document.getElementById("btn-carrito");
    const carritoContenido = document.getElementById("carrito-contenido");

    btnCarrito.addEventListener("click", () => {
        carritoContenido.style.display = carritoContenido.style.display === "none" ? "block" : "none";
    });
});
