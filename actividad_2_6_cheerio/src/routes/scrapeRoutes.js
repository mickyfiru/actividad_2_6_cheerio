// routes/scrapeRoutes.js
const express = require("express");
const router = express.Router();
// Importamos el controlador que maneja la lógica del scraping
const { scrapeProductos } = require("../controllers/scrapeController");
// Definimos la ruta GET para el scraping de productos
router.get("/scrape", scrapeProductos);
// Exportamos el router para que pueda ser utilizado en el archivo principal de la aplicación
module.exports = router;
