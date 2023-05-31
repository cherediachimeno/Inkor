// VAMOS A UTILIZAR EXPRESS JS
const express = require("express"); // Importo las funcionalidades de express a una variable
// llamada express
const app = express(); // Ejecuto lo que importo.
let lista = [];

// GESTIÓN DE PETICIONES CON SUS RESPUESTAS

app.get("/", function (req, res) {
  res.send("<h1>Hola estamos en la ruta inicial</h1>");
});

app.get("/inkor", function (req, res) {
  res.send("<h2>Hello INKOR</h2>");
});

app.get("/contacto", function (req, res) {
  res.send("Hello CONTACT");
});

app.get("/contacto/:nombre", function (req, res) {
  let nombre = req.params.nombre;
  res.send(`Bienvenido ${nombre}, gracias por contactar`);
});

app.get("/contacto/:nombre/:apellido", function (req, res) {
  let nombre = req.params.nombre;
  let apellido = req.params.apellido;
  res.send(
    `<strong>Bienvenido ${nombre} ${apellido}</strong>, gracias por contactar`
  );
});

app.get("/calcular/:num1/:num2", function (req, res) {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  res.send(`<strong>Hemos sumado los números y nos da ${num1 + num2}`);
});

app.get("/array/:item", function (req, res) {
  let item = req.params.item;
  lista.push(item);
  res.send(`<h3>La lista contiene estos elementos: ${lista}</h3>`);
});

app.get("/:error", function (req, res) {
  let error = req.params.error;
  res.send(`<h1>ERROR 404. La ruta ${error} no existe`);
});

app.listen(3000);
