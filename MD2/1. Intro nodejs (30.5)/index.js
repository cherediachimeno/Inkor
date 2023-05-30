// IMPORTAMOS código externo
const funcionSumar = require("./funciones/sumar.js"); // hay una función que suma
const funcionRestar = require("./funciones/restar.js"); // hay una función que resta
const funcionesVarias = require("./funciones/funciones.js");
const variablesVarias = require("./variables/variables.js"); // hay un objeto literal con variables que me he traido

console.log(variablesVarias);

console.log(
  "el resultado de dividir 2 y 2 es " + funcionesVarias.dividir(2, 2)
);

let num = 1;
console.log(funcionSumar(2, 2));
console.log(funcionRestar(5, 5));
console.log(variablesVarias.nombre);
console.log(variablesVarias.numeroSuerte);
console.log(variablesVarias["jairo"]);
