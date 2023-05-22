//let decision = prompt("quieres sumar dos números?");
let num1, num2, total;
/*
if (decision == "si") {
  quieroSumar();
} */

let nombre = prompt("dime tu nombre");
saludar(nombre);

// funciones

function quieroSumar() {
  num1 = parseInt(prompt("dame el num1")); // 5
  num2 = parseInt(prompt("dame el num2")); // 3
  //sumar(num1, num2); // sumar(5,3);
  total = sumar(num1, num2); // me graba la suma
  alert("el total es de " + total);
}

function sumar(x, y) {
  alert("primera posicion " + x);
  alert("primera posicion " + y);
  return x + y;
}

function saludar(x) {
  document.getElementById("print").innerHTML += `Hola y bienvenido ${x}`;
}

/*let producto1 = 9.95;
let producto2 = 10.95;
let producto3 = 19.95;
let portes = 4.95;
let total, totalPortes;

// viene un cliente
// interacción con el cliente...

// cálculos varios...
total = producto1 + producto2;
calculoPortes();
imprimirPantalla();

// viene otro cliente
total = producto1 + producto2 + producto3;
calculoPortes();
imprimirPantalla();

// viene otro cliente
total = producto1;
calculoPortes();
imprimirPantalla();

// viene otro cliente
total = producto2 + producto3;
calculoPortes();
imprimirPantalla();

function calculoPortes() {
  totalPortes = total + portes;
}

function imprimirPantalla() {
  document.getElementById(
    "print"
  ).innerHTML += `El total es de ${totalPortes}</br>
      `;
}
*/
