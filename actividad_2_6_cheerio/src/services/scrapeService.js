const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
// Función para obtener productos desde un archivo HTML utilizando Cheerio.
function obtenerProductosDesdeHTML() {
  const filePath = path.join(__dirname, "../../data/productos.html");
  // Verificamos si el archivo existe antes de intentar leerlo.
  if (!fs.existsSync(filePath)) {
    const error = new Error("Archivo HTML no encontrado");
    error.status = 404;
    throw error;
  }
  // Leemos el contenido del archivo HTML.
  const html = fs.readFileSync(filePath, "utf-8");

  if (!html.trim()) {
    const error = new Error("El HTML está vacío");
    error.status = 400;
    throw error;
  }
  // Cargamos el HTML en Cheerio para poder manipularlo.
  const $ = cheerio.load(html);
  const productos = [];
  // Utilizamos selectores de Cheerio para extraer la información de los productos.
  $(".producto").each((index, element) => {
    const nombre = $(element).find(".nombre").text().trim();
    const precio = $(element).find(".precio").text().trim();
    const categoria = $(element).find(".categoria").text().trim();
   // Validamos que los campos no estén vacíos antes de agregar el producto al array
    productos.push({
      nombre,
      precio,
      categoria
    });
  });
  // Si no se encontraron productos, lanzamos un error para informar al cliente.
  if (productos.length === 0) {
    const error = new Error("No se encontraron productos con los selectores definidos");
    error.status = 404;
    throw error;
  }

  return productos;
}

module.exports = {
  obtenerProductosDesdeHTML
};
