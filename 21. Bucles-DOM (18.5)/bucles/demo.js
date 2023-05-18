/*11. Escribe un programa que muestre el número entero positivo que el usuario introduzca
pero al revés (si introduce 1478 que muestre 8741), hasta que el usuario introduzca 0. Si
introduce 0 la primera vez, debería mostrarlo al revés (es decir, mostrar 0) y acabar el
programa. */

let num;

do {
  let numeroCompleto = "";
  num = prompt("dame un número de al menos dos digitos"); // 166

  for (let i = num.length - 1; i >= 0; i--) {
    numeroCompleto += num.charAt(i);
  }

  alert(numeroCompleto);
} while (num != "0");
