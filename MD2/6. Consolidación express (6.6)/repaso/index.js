// Usamos express

const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("bienvenido a la ruta raíz");
});

app.get("/probando", (req, res) => {
  res.send("la prueba ha sido un éxito");
});

app.get("/probando/:name/:surname", (req, res) => {
  let nombre = req.params.name;
  let apellido = req.params.surname;
  res.send(
    "la prueba ha sido un éxito, enhorabuena " + nombre + " " + apellido
  );
});

app.get("/query", (req, res) => {
  let nombre = req.query.nom;
  let apellido = req.query.cognom;

  res.send(`<h1>Encantado de volver a verte ${nombre} ${apellido}`);
});

app.listen(3000);
