const express = require("express");
const app = express();

// EJERCICIO 4

/*Crea una aplicación express con un index.js y un archivo .js aparte en el que tendrás
una función saludarEnExpress que devuelva un string. Importa este módulo en el
index.js y crea una ruta para que cada vez que se haga una petición get a esa ruta,
se muestre el string que nos devuelve la función.*/
/*
const saludo = require("./funcion.js");

app.get("/:nombre", (req, res) => {
  let nombre = req.params.nombre;
  res.send(`
  <div style="color: red; border: 2px solid black">
  <h1>${saludo(nombre)}</h1>
  </div>
  `);
});*/

/* 5. Define un objeto con las propiedades siguientes: nombre, apellidos y edad. 
El objeto estará fuera de las rutas para que sea accesible por todas ellas. 
Crea una aplicación en la que se pueda modificar cualquiera de las propiedades de ese 
objeto utilizando peticiones de tipo get. 
Crea una ruta para cambiar el nombre, otra ruta para el apellido y otra ruta para la edad.*/

const objeto = require("./objeto.js");

app.get("/nombre/:parametro", (req, res) => {
  objeto.nombre = req.params.parametro;
  res.send(objeto);
});

app.get("/apellido/:parametro", (req, res) => {
  objeto["apellido"] = req.params.parametro;
  res.send(objeto);
});

app.get("/edad/:parametro", (req, res) => {
  objeto.edad = req.params.parametro;
  res.send(objeto);
});

app.get("/mail/:parametro", (req, res) => {
  objeto.mail = req.params.parametro;
  res.send(objeto);
});
app.listen(3000);
