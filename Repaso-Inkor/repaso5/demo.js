// EJERCICIO 1
/*
let num1 = parseInt(prompt("dame el num1"));
let num2 = parseInt(prompt("dame el num1"));
let num3 = parseInt(prompt("dame el num1"));

let suma = num1 + num2 + num3;
alert("El resultado de sumar todo es " + suma); */

// EJERCICIO 1 PERO SOLO PIDIENDO NÚMERO DE 3 DÍGITOS
/*
let numero = prompt("dame numero de 3 dígitos");
let num1 = parseInt(numero.substring(0, 1));
let num2 = parseInt(numero.substring(1, 2));
let num3 = parseInt(numero.substring(2, 3));

let suma = num1 + num2 + num3;
alert("El resultado de sumar todo es " + suma);*/
/*
let helados = parseInt(prompt("cuántos helados quieres"));
let coste = 2;
let total;

if (helados >= 10) {
  total = helados * coste;
  alert(
    "el total es " +
      total +
      " y te llevas esta cantidad de helados " +
      helados +
      " más uno de regalo"
  );
} else {
  total = helados * coste;
  alert(
    "este es el total: " +
      total +
      " y te llevas estos helados (sin regalo) " +
      helados
  );
}*/

// EJERCICIO - SELECCIÓN
/*

let seleccion = prompt("qué deseas tomar?");

switch (seleccion) {
  case "cafe":
  case "café":
    alert("aquí tienes un café");
    break;
  case "agua":
  case "un agua":
    alert("aquí tienes un aguita");
    break;
  case "nada":
    alert("nada xD");
    break;
  default:
    alert("¿hablas español?");
}
*/

// ALQUILER COCHES

let edad = Number(prompt("qué edad tienes"));
let carnet, total;
let costeDia = 25;
let pintar = document.getElementById("print");

if (edad >= 18) {
  carnet = prompt("tienes carnet?");
  carnet = carnet.toLowerCase();

  if (carnet == "sí" || carnet == "si") {
    let nombreCompleto = prompt("dime nombre");
    let fecha = prompt("dime fecha");
    let dias = parseInt(prompt("dime dias"));

    if (dias == 7) {
      total = 150;
      pintar.innerHTML += `Hola ${nombreCompleto}, recogerás el vehiculo el día ${fecha}. Este es el cálculo. Una semana: total 150`;
    } else if (dias > 7) {
      dias = dias - 7;
      total = 150 + dias * costeDia;
      pintar.innerHTML += `Hola ${nombreCompleto}, recogerás el vehiculo el día ${fecha}.  ¿Más de una semana? Muy bien, 150 por semana más 25 por dia... total: ${total}`;
    } else {
      total = dias * costeDia;
      pintar.innerHTML += `Hola ${nombreCompleto}, recogerás el vehiculo el día ${fecha}. Pocos dias... total ${total}`;
    }
  } else {
    pintar.innerHTML += `<p>Lamentablemente, sin carnet poco podemos hacer</p>`;
  }
} else {
  pintarTodo.innerHTML += `<p>Lo lamentamos pero siendo menor de edad no podemos ofrecerte <b>ningún</b> tipo de servicio</p>`;
}
