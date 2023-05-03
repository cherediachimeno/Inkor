/* 

let caja; // undefined. 
caja = null; 
caja = 10;
caja = "Xavier";
caja = true;

caja = null; // null es una decisión. Quiero que esa
// variable esté vacía. 

let esMayor = 5 > 3;
console.log(esMayor);

console.log(3 > 5);
console.log(5 >= 5);
*/
/*
let tiempo = prompt("¿Hace buen tiempo? Escribe si o no");

if (tiempo == "si") {
  alert("felicidades, puedes salir!!!!");
  let decision = prompt("¿Adónde quieres ir?");
  if (decision == "Hawai") {
    alert("genial, nos vamos a " + decision);
  } else if (decision == "Osaka") {
    alert("genial, nos vamos a " + decision);
  } else if (decision == "Paris") {
    alert("genial, nos vamos a " + decision);
  } else {
    alert("no es una opción... no sé dónde es eso...");
  }
} else {
  alert("lástima, no puedes salir");
}
*/

if (tiempo == "si") {
  alert("felicidades!!!, puedes salir");
} else if (tiempo == "sí") {
  alert("felicidades!!!, puedes salir");
} else if (tiempo == "SI") {
  alert("felicidades!!!, puedes salir");
} else if (tiempo == "SÍ") {
  alert("felicidades!!!, puedes salir");
} else {
  alert("lástima");
}

/*
if (tiempo == "si" || tiempo == "sí" || tiempo == "SI" || tiempo == "SÍ") {
  alert("felicidades!!!, puedes salir");
} else {
  alert("lástima");
}

let carnet = true;
let coche = true;

if (carnet == true && coche == true) {
} */

let nota = 8;

switch (nota) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("suspendiste");
    break;
  case 5:
  case 6:
    console.log("tienes aprobado");
    break;
  case 7:
  case 8:
    console.log("tienes notable");
  case 9:
  case 10:
    console.log("tienes excelente");
    break;
  default:
    console.log("no válido");
}
