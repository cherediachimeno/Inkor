// Usamos express

const express = require("express");
const app = express();
app.use(express.static("public"));

const array = require("./array");

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
  let nombre = req.query.name;
  let apellido = req.query.surname;
  let curso = req.query.course;
  let mail = req.query.mail;
  let direccion = req.query.address;

  res.send(`<h1>Encantado de volver a verte ${nombre} ${apellido}. 
  Aquí te dejo el resto de información aportada</h1>
  <ul>
    <li>Curso: ${curso}</li> 
    <li>Mail: ${mail}</li> 
    <li>Dirección: ${direccion}</li> 
  </ul>`);
});

app.get("/todo", (req, res) => {
  let html = `<div style='display: flex; flex-wrap: wrap'>`;

  for (let i = 0; i < array.length; i++) {
    html += `
    <div style='border: 2px black solid; margin: 5px; width: 30%'> 
    <ul>
    <li>
    <strong>Título</strong>: ${array[i].nombre}
    </li>
    <li>
    Plataforma: ${array[i].plataforma}
    </li>
    <li>
    Nota: ${array[i].nota}
    </li></div>`;
  }
  html += `</div>`;
  res.send(html);
});

app.get("/sumar-juego", (req, res) => {
  let titulo = req.query.titulo;
  let plataforma = req.query.plataforma;
  let nota = req.query.nota;

  let objeto = { nombre: titulo, plataforma: plataforma, nota: nota };
  array.push(objeto);
  res.send("<h3>Juego guardado, vuelve a la ruta /todo");
});

app.listen(3000);
