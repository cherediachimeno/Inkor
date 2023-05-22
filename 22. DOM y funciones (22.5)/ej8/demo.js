// declarar todas las variables al principio
let principal = document.getElementById("principal");
let nombre, apellidos, ciudad, dias, coste, numeroSemanas, carnet;

// preguntamos
let edad = parseInt(prompt("¿Qué edad tienes"));

// hilo conductor
condicional();
print();

let decision = prompt("quieres volver a realizar el programa?");
if (decision == "si") {
  condicional();
  print();
}

// funciones
function condicional() {
  if (edad < 18) {
    principal.innerHTML = `No eres mayor de edad y por tanto no puedes alquilar un coche`;
  } else if (edad >= 18) {
    carnet = prompt("¿Tienes carnet de conducir?");
    if (carnet !== "si") {
      principal.innerHTML = `No tienes carnet de conducir y por tanto no puedes alquiler un coche`;
    } else {
      nombre = prompt("Nombre");
      apellidos = prompt("Apellidos");
      ciudad = prompt("Ciudad");
      dias = parseInt(prompt("Días de alquiler"));
      coste = 0;

      if (dias % 7 === 0) {
        numeroSemanas = dias / 7;
        coste = numeroSemanas * 150;
      } else {
        coste = dias * 25;
      }
    }
  }
}

function print() {
  principal.innerHTML = `<p>Nombre: ${nombre}</p>
  <p>Apellidos: ${apellidos}</p>
  <p>Ciudad: ${ciudad}</p>
  <p>Días de alquiler: ${dias}</p>
  <p>Coste: ${coste} €</p>`;
}
