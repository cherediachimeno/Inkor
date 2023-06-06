const express = require("express");
const app = express();
app.use(express.static("public"));
const animales = require("./animales"); // array de objetos importado

app.get("/animales", (req, res) => {
  let html = `<ul>`;
  for (let i = 0; i < animales.length; i++) {
    html += `
    <li>Nombre: <strong>${animales[i].nombre}</strong></li>
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

app.get("/sumar-animal", (req, res) => {
  /*let nom = req.query.nombre;
  let edat = req.query.edad;
  let tipus = req.query.tipo;*/

  let objetoLiteral = {
    nombre: req.query.nombre,
    edad: req.query.edad,
    tipo: req.query.tipo,
  };

  animales.push(objetoLiteral);
  console.log(animales);
  res.send(
    "<h3>Animal añadido correctamente, ve a la ruta animales para comprobarlo"
  );
});

app.listen(3000);
