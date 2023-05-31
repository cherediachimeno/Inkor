//EJERCICIO 11
// 1º Escribe un módulo con una función que reciba un array de números y los
// muestre en pantalla desde la primera posición a la última.
// 2º Escribe otro módulo con una función que reciba un array de números y los muestre
// desde la última posición hasta la primera.
// 3º Crea un array y pásalo a dichas funciones.

let ordenado = require("./ordenado.js");
let inverso = require("./inverso.js");

let array = [5, 6, 7, 8, 9, 10];
console.log("el array es " + array);
console.log("********** ARRAY ORDENADO ********** ");
ordenado(array);
console.log("********** ARRAY INVERSO ********** ");
inverso(array);
