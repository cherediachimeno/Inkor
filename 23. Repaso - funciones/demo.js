// 4)Escribe una función que devuelva el resultado de sumar los dos parámetros que le pasamos.
// Pide al usuario 2 números. Usa esos 2 números como parámetros de la función y después asigna el valor que devuelve la función a una tercera variable.
// Finalmente, muestra el valor de la variable en la consola.
/*
let numero1, numero2, total;

function guardarDatos() {
  numero1 = Number(document.getElementById("num1").value);
  numero2 = Number(document.getElementById("num2").value);

  total = sumar(numero1, numero2);
  document.getElementById("print").innerHTML += `El resultado es ${total}`;
}

function sumar(num1, num2) {
  return num1 + num2;
}
*/
// 5. Escribe una función a la que le damos dos números y que devuelva true si el primer
//número es más grande que el segundo número y false en el caso contrario. Pide dos
//números al usuario, y pasalos a la función. Muestra en consola “El primer número es
//más grande” o “El primer número no es más grande”.

let numero1, numero2, comprobando;

function guardarDatos() {
  numero1 = Number(document.getElementById("num1").value);
  numero2 = Number(document.getElementById("num2").value);

  comprobando = comprobacion(numero1, numero2); // estaré grabando true o false

  if (comprobando) {
    document.getElementById(
      "print"
    ).innerHTML = `El primero, con valor ${numero1} es más grande que el segundo, de valor ${numero2}`;
  } else {
    document.getElementById(
      "print"
    ).innerHTML = `El primero NO es el más grande`;
  }
}

function comprobacion(x, y) {
  if (x > y) return true;
  else return false;
}
