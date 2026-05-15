const btnCargar = document.getElementById("btnCargar");
const resultado = document.getElementById("resultado");

btnCargar.addEventListener("click", async () => {
  resultado.innerHTML = "<p>Cargando productos...</p>";

  try {
    const response = await fetch("/scrape");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.mensaje || "Error al obtener productos");
    }

    resultado.innerHTML = "";

    data.data.forEach((producto) => {
      const card = document.createElement("article");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p class="precio">${producto.precio}</p>
        <span class="categoria">${producto.categoria}</span>
      `;

      resultado.appendChild(card);
    });
  } catch (error) {
    resultado.innerHTML = `
      <div class="error">
        <strong>Error:</strong> ${error.message}
      </div>
    `;
  }
});