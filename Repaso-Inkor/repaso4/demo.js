// Crea un  bucle que te diga feliz cumpleaños tantas veces como años tienes
/*
let edad = parseInt(prompt("cuantos años tienes"));

for (let i = 0; i < edad; i++) {
  console.log("feliz cumpleaños, vas por la vuelta " + i);
}

/*

alert("tienes " + edad);

if (edad >= 18) {
  alert("mayor de edad");
} */

// bucle que cuando cumplas 20 te diga, ya cumpliste 20, vete de casa
/*
let edad = 5;

while (edad <= 20) {
  console.log(
    "feliz cumpleaños, estamos contentos de tenerte. Ahora tienes " + edad
  );
  edad++;
}

if (edad >= 20) {
  console.log("vete de casa");
}
*/

let coches = ["Fiat", "Ferrari", "Opel", "Mercedes", "Renault"];
// i sea menor a 5
for (let i = 0; i < coches.length; i++) {
  if (coches[i] == "Opel" || coches[i] == "Renault") {
    document.getElementById(
      "print"
    ).innerHTML += `<strong><p>${coches[i]}</p></strong>`;
  } else {
    document.getElementById("print").innerHTML += `<p>${coches[i]}</p>`;
  }
}
