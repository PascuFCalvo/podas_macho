const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

// Servir archivos estáticos
app.use(express.static("."));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Ruta de servicios
app.get("/servicios", (req, res) => {
  res.sendFile(path.join(__dirname, "servicios.html"));
});

// Rutas en inglés
app.get("/en", (req, res) => {
  res.sendFile(path.join(__dirname, "index-en.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "servicios-en.html"));
});

app.get("/index-en", (req, res) => {
  res.sendFile(path.join(__dirname, "index-en.html"));
});

app.get("/servicios-en", (req, res) => {
  res.sendFile(path.join(__dirname, "servicios-en.html"));
});

// Manejo de rutas para SPA (todas las rutas devuelven index.html)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(
    `🌿 Servidor de Podas Macho corriendo en http://localhost:${PORT}`
  );
  console.log(`📱 Presiona Ctrl+C para detener el servidor`);
});

module.exports = app;
