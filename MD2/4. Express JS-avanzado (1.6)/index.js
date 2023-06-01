const express = require("express");
const app = express();

app.use(express.static("public")); // los archivos estáticos estarán en public

// DATOS POR PARÁMETRO DE RUTA (USANDO DOS PUNTOS EN LA RUTA Y GUARDÁNDOLO CON REQ.PARAMS)

app.get("/parametro/:persona", (req, res) => {
  let persona = req.params.persona;
  res.send(`<h1>Hello ${persona}!! We're in contact page</h1>`);
});

// DATOS POR PARÁMETRO DE QUERY.
/*
app.get("/query", (req, res) => {
  let nombre = req.query.nombre;
  let apellido = req.query.apellido;
  let email = req.query.email;

  res.send(
    `<h1>Encantado de volver a verte ${nombre} ${apellido}, te mandé un mail a ${email}`
  );
});*/

app.get("/hawai", (req, res) => {
  let nombre = req.query.nombre;
  let apellido = req.query.apellido;
  let email = req.query.mail;

  if (nombre == undefined || apellido == undefined || email == undefined) {
    res.sendFile(__dirname + "/public/formulario.html");
  } else {
    res.send(
      `<h1>Estamos en Hawai, bienvenido ${nombre} ${apellido}, este es tu mail: ${email} </h1>
      <img src="https://elviajerofeliz.com/wp-content/uploads/2017/07/que-ver-en-hawaii.jpg" alt="">`
    );
  }
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/formulario.html");
});

app.listen(3000);
