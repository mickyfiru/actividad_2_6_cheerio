const express = require("express");
const scrapeRoutes = require("./routes/scrapeRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensaje: "API Cheerio funcionando correctamente",
    endpoint: "/scrape"
  });
});

app.use("/", scrapeRoutes);

app.use((req, res) => {
  res.status(404).json({
    ok: false,
    mensaje: "Ruta no encontrada"
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    ok: false,
    mensaje: err.message || "Error interno del servidor"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
