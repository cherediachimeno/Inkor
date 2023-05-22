let principal = document.getElementById("principal");

let edad = parseInt(prompt("¿Qué edad tienes"));

if (edad < 18) {
  principal.innerHTML = `No eres mayor de edad y por tanto no puedes alquilar un coche`;
} else if (edad >= 18) {
  let carnet = prompt("¿Tienes carnet de conducir?");
  if (carnet !== "si") {
    principal.innerHTML = `No tienes carnet de conducir y por tanto no puedes alquiler un coche`;
  } else {
    let nombre = prompt("Nombre");
    let apellidos = prompt("Apellidos");
    let ciudad = prompt("Ciudad");
    let dias = parseInt(prompt("Días de alquiler"));
    let coste = 0;

    if (dias % 7 === 0) {
      let numeroSemanas = dias / 7;
      coste = numeroSemanas * 150;
    } else {
      coste = dias * 25;
    }

    principal.innerHTML = `<p>Nombre: ${nombre}</p>
        <p>Apellidos: ${apellidos}</p>
        <p>Ciudad: ${ciudad}</p>
        <p>Días de alquiler: ${dias}</p>
        <p>Coste: ${coste} €</p>`;
  }
}
