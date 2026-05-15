const { obtenerProductosDesdeHTML } = require("../services/scrapeService");
// Controlador para manejar la ruta de scraping de productos.
function scrapeProductos(req, res, next) {
  try {
    const productos = obtenerProductosDesdeHTML();
    // Respondemos con un JSON que contiene el resultado del scraping
    res.status(200).json({
      ok: true,
      total: productos.length,
      data: productos
    });
  } catch (error) {
    next(error);
  }
}
// Exportamos el controlador para que pueda ser utilizado en las rutas
module.exports = {
  scrapeProductos
};
