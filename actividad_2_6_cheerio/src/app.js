// app.js - Configuración del servidor Express y rutas.
const express = require("express");
const scrapeRoutes = require("./routes/scrapeRoutes");
// Creamos una instancia de Express para configurar nuestro servidor.
const app = express();
const PORT = 3000;
// Middleware para parsear JSON en las solicitudes entrantes
app.use(express.json());
// Ruta raíz para verificar que la API está funcionando correctamente.
app.get("/", (req, res) => {
  res.json({
    mensaje: "API Cheerio funcionando correctamente",
    endpoint: "/scrape"
  });
});
// Usamos las rutas de scraping definidas en scrapeRoutes.
app.use("/", scrapeRoutes);
// Middleware para manejar rutas no encontradas y errores generales.
app.use((req, res) => {
  res.status(404).json({
    ok: false,
    mensaje: "Ruta no encontrada"
  });
});
// Middleware para manejar errores lanzados desde los controladores o servicios.
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    ok: false,
    mensaje: err.message || "Error interno del servidor"
  });
});
// Iniciamos el servidor en el puerto definido y mostramos un mensaje en la consola.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
