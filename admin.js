const url =
  "https://script.google.com/macros/s/AKfycbxYxaYXdickXIPwTjIk_Z8uAjqEOFe9UAdvNfyWz148wZGRBPsxduFymOXG6J3fOD75/exec";

addEventListener("click", (e) => {
  if (e.target.type === "submit") {
    e.preventDefault();
    const user = document.getElementById("nombre").value;
    const contrasena = document.getElementById("password").value;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ action: "registrar" }), // sin datos
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("👀 Usuarios en el sheet:", data);
        alert("Hay " + data.length + " usuarios registrados.");
      });
  }
});
