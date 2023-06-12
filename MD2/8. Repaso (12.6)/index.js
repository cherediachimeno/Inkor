const lista = require("./objeto.js"); // importo el array del archivo array.js

// levanto el servidor
const express = require("express");
const app = express();
// elementos estáticos
app.use(express.static("public"));
// posibilidad de traducción con json y posibilidad de mandar vía el body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/lista", (req, res) => {
  res.send(lista);
});

app.get("/contacto/:nombre", (req, res) => {
  let variable = req.params.nombre;
  res.send(
    `<h1>Gracias por acceder a los contactos y bienvenido ${variable}</h1>`
  );
});

app.get("/contacto", (req, res) => {
  let variable = req.query.name;
  res.send(`<h1>Utilizamos query... el valor recogido es ${variable}</h1>`);
});

app.post("/anyadir", (req, res) => {
  let objeto = {
    nombre: req.body.nombre,
    profesion: req.body.profesion,
    juego: req.body.juego,
  };

  lista.push(objeto);
  res.send(lista);
});

app.listen(4000);
