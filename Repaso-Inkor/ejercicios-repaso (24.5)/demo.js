// EJERCICIO 1
// Crea un array y asígnale 10 valores diferentes.
// Mostrar los 10 valores por pantalla.
// Ahora añade dos valores más, uno por delante y otro por detrás.
/*
let lista = [5, 5, 6, 4, 8, 6, 7, 7, 10, 10];
let numero;
/* alert(lista);
console.log(lista); */

// EJEMPLO USANDO BUCLE
/*
for (let i = 0; i < 4; i++) {
  if (i == 0 || i == 1) {
    numero = Number(prompt("dime un número y lo añado detrás"));
    lista.push(numero);
  } else if (i == 2 || i == 3) {
    numero = Number(prompt("dime un número y lo añado DELANTE"));
    lista.unshift(numero);
  }
}

document.getElementById("print").innerHTML += `
<p>El array es ${lista}</p>`;

// MÉTODO TRADICIONAL SIN BUCLE
/*

let num1 = Number(prompt("dime un número y lo añado delante"));
let num2 = Number(prompt("dime un número y lo añado también delante"));
let num3 = Number(prompt("dime un número y lo añado detrás"));
let num4 = Number(prompt("dime un número y lo añado también detrás"));

lista.unshift(num1);
lista.unshift(num2);
lista.push(num3);
lista.push(num4);

document.getElementById("print").innerHTML += `
<p>El array es ${lista}</p>`;
*/

// EJERCICIO 2

/*
2. Crea un objeto literal de algo que te guste
a. Debe tener como mínimo 10 clave-valor.
b. Imprime al menos tres claves-valor.
c. Ahora, utilizando una de las 10 clave-valor creadas, añade un objeto
literal anidado e imprimir por pantalla todo el contenido.*/

let trenes = {
  modelo: "UT447",
  velocidad: 120,
  coches: 3,
  esElectrico: true,
  esDiesel: false,
  esVapor: false,
  capacidad: 350,
  líneas: "R1, R2, R4",
  servicio: {
    habitual: "cercanías",
    excepcional: "regional",
  },
  tieneLavabo: true,
};

/*
document.getElementById("print").innerHTML += `
<p>Imprimo tres características del modelo ${trenes.modelo}</p>
<ul>
    <li>Velocidad máxima: ${trenes["velocidad"]}</li>
    <li>Es eléctrico: ${trenes.esElectrico}</li>
    <li>Servicios habituales: ${trenes.servicio.habitual}</li>
    <li>Servicios no-habituales: ${trenes.servicio.excepcional}</li>
</ul>`;
*/

// EJERCICIO 3

// Crea un bucle que recorra tanto el array como el
// objeto literal.
//a. Imprime los datos por consola.
//b. Ahora vamos más allá e intenta imprimir estos datos utilizando el DOM.

let juegos = ["Zelda", "Metal Gear", "Resident Evil", "Crash Bandicot"];

for (let i = 0; i < juegos.length; i++) {
  document.getElementById("print").innerHTML += `
    <strong><p>${juegos[i]}</p></strong>`;
}

for (let key in trenes) {
  if (key == "servicio") {
    document.getElementById("print").innerHTML += `
        <strong><p>${key} habitual: ${trenes.servicio.habitual}</p></strong>
        <strong><p>${key} excepcional: ${trenes.servicio.excepcional}</p></strong>`;
  } else if (trenes[key] == true) {
    document.getElementById("print").innerHTML += `
    <strong><p>${key}: SÍ </p></strong>`;
  } else if (trenes[key] == false) {
    document.getElementById("print").innerHTML += `
    <strong><p>${key}: NO </p></strong>`;
  } else {
    document.getElementById("print").innerHTML += `
    <strong><p>${key}: ${trenes[key]}</p></strong>`;
  }
}
