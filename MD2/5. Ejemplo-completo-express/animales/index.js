const express = require("express");
const app = express();
app.use(express.static("public"));
const animales = require("./animales");

app.get("/animales", (req, res) => {
  let html = `<ul>`;
  for (let i = 0; i < animales.length; i++) {
    html += `
    <li>Nombre: ${animales[i].nombre}</li>
    <li>Edad: ${animales[i].edad}</li>
    <li>Tipo: ${animales[i].tipo}</li>
    <br>
    `;
  }

  html += `</ul>`;
  res.send(html);
});

// falta diseñar ruta sumar-animal que me selecciona la información que me viene por el query a partir
// del formulario

app.listen(3000);
