// EJERCICIO 1
/*Escribe un programa que pregunte al usuario su edad. 
Mostrar en pantalla “Feliz Cumpleaños” repetido tantas veces como años tenga.*/
/*
let edad = Number(prompt("dime tu edad"));

/*

for (let i = 1; i < edad; i++) {
  if (i == 1) console.log("feliz cumpleaños. Cumples " + i + " año");
  else console.log("feliz cumpleaños. Cumples " + i + " años");

  if (i == 18) console.log("muy bien, son 18: deja el Zelda y a trabajar");
  if (i == 20) console.log("muy bien, ya son 20");
  if (i == 30) console.log("muy bien, ya son 30");
}
 */
/*

for (let i = 1; i < edad; i++) {
  if (i == 1) {
    document.getElementById("print").innerHTML += `
    <p>Feliz cumpleaños. Cumples ${i} año</p>
    `;
  } else {
    document.getElementById("print").innerHTML += `
    <p>Feliz cumpleaños. Cumples ${i} años</p>
    `;
  }
}

let caja = 30;
caja = 35;
caja = true;
console.log(caja);

let box = 30;
box += "Hola";
box += true;
console.log(box);*/

// EJERCICIO 2
/*
Crear un programa que muestre el valor de sumar todos los números 
desde 1 hasta el número que introduzca el usuario. 
Por ejemplo si introduce el 8 debería mostrar 36 (1 +
2+ 3+ 4+ 5+ 6+ 7+ 8).*/
/*
let num = Number(prompt("dime un número"));
let calculo = 0;

for (let i = 0; i <= num; i++) {
  console.log("vamos por la vuelta " + i);
  calculo += i;
}

console.log(calculo);
*/

/* Mostrar en pantalla los números del 10 al 20 
(incluidos los dos) con una línea vacía entre
ellos. */
/* 
let lineaVacia = "   ";

for (let i = 10; i <= 20; i++) {
  /* console.log(i);
  console.log(lineaVacia); 
  document.write(i, "<hr>");
}*/

/* Escribe un programa que pida valores.    // HECHO 
Si introduce un valor negativo, mostrar un mensaje diciendo que se ignoran los valores negativos.
Seguir pidiendo hasta que el usuario introduzca un 0, // HECHO
entonces mostrar la suma de los valores introducidos. */
let num;
let sumas = 0;

do {
  num = Number(prompt("dime un número"));

  if (num < 0) {
    alert("se ignoran los valores negativos");
  } else {
    sumas += num;
  }
} while (num != 0);

alert("el total es " + sumas);
