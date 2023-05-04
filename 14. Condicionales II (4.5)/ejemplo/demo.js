// EJEMPLO 1. Pide la edad al usuario y en base
// a esa edad, realiza una acción concreta.

// let edad = parseInt(prompt("dime tu edad"));

/* 
if (edad >= 18) {
  alert("enhorabuena tienes 18 o más");
  location.href = "web.html";
} else {
  alert("una pena: no eres mayor");
  location.href = "quepena.html";
}*/
/*

if (edad >= 18) alert("enhorabuena tienes 18 o más");
else alert("una pena: no eres mayor"); */
// EJEMPLO 2

// Crea un buscador que pregunte a quién quieres buscar, y dependiendo de la respuesta,
// mostrar esa info por console.log

/* 
let buscador = prompt("¿Sobre quién quieres buscar información?"); // JAVIER
// let nombre = buscador.toLocaleLowerCase(); // JAVIER -> javier

let nombre = buscador.toLowerCase().trim();

switch (nombre) {
  case "javier":
    console.log("Se trata de Javier, estudiante muy atento a las clases");
    break;
  case "mila":
    console.log("Se trata de Mila, estudiante muy atenta a las clases");
    break;
  case "maria":
    console.log("Se trata de Maria, estudiante muy atenta a las clases");
    break;
  case "raquel":
    console.log("Se trata de Raquel, estudiante muy atenta a las clases");
    break;
  default:
    console.log("no se encontraron resultados");
} */

// EJEMPLO 3 - Haz el ejemplo anterior con if else.

let buscador = prompt("¿Sobre quién quieres buscar información?"); // JAVIER
// let nombre = buscador.toLocaleLowerCase(); // JAVIER -> javier
let nombre = buscador.toLowerCase().trim();

if (nombre === "javier") {
  console.log("Se trata de Javier, estudiante muy atento a las clases");
} else if (nombre === "mila") {
  console.log("Se trata de Mila, estudiante muy atenta a las clases");
} else if (nombre === "maria") {
  console.log("Se trata de Maria, estudiante muy atenta a las clases");
} else if (nombre === "raquel") {
  console.log(
    "Se trata de Raquel, estudiante muy atenta a las clases, aunque ayer no fue el caso"
  );
} else {
  console.log("no se encontraron resultados");
}

switch (nombre) {
  case "javier":
    console.log("Se trata de Javier, estudiante muy atento a las clases");
    break;
  case "mila":
    console.log("Se trata de Mila, estudiante muy atenta a las clases");
    break;
  case "maria":
    console.log("Se trata de Maria, estudiante muy atenta a las clases");
    break;
  case "raquel":
    console.log("Se trata de Raquel, estudiante muy atenta a las clases");
    break;
  default:
    console.log("no se encontraron resultados");
}
