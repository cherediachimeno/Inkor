// Ejercicio 10.
// Crea un módulo con una función.
// -> esa función se llamará esPar() y devolverá true en caso de que
//    el número sea par y false en caso contrario
// -> En el index.js, genera un número aleatorio, llama a la función esPar()
// y muestra el resultado de la función

// Guardo número aleatorio en variable
let random = Math.floor(Math.random() * 100);

// Guardo función en variable numeroPar
let calcularPar = require("./espar.js");

console.log(calcularPar(random));

console.log(
  `El número aleatorio ${random}, al pasarlo por la función, nos da ${calcularPar(
    random
  )}`
);
