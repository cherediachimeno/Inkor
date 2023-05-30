// EJERCICIO 6
/* Crea un módulo propio y declara una variable con tu nombre. Exporta esa variable,
crea una carpeta llamada “app” y mete el archivo index.js ahí. Importa el módulo y
muestra tu nombre por consola. */

const objetoImportado = require("../ejercicio6.js");
console.log(
  "hola " +
    objetoImportado.nombre +
    " bienvenido al curso de " +
    objetoImportado.curso
);
