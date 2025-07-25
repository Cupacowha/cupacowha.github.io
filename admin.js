const url =
  "https://script.google.com/macros/s/AKfycbwo6-e7SqisygUIP_pbt2mur5qPu-6XXG1tLLyrv4zFl3zw-Nn2q8hGTg66IOl0bZk0/exec";

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
