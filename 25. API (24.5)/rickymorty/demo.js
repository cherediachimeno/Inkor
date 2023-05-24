// UTILIZANDO LA API DE RICK AND MORTY, VOY A MOSTRAR TODOS LOS PERSONAJES
// IMPRIMIRÉ CADA UNO DE ELLOS EN UN DIV CON LA FOTO Y LOS NOMBRES

// PRIMER PASO: LLAMAR A LA API Y RECOGER ESTA INFORMACIÓN EN UNA VARIABLE LLAMADA RESPUESTA
// SEGUNDO PASO: COMO SABEMOS, LA INFO ESTÁ EN JSON Y NO ME SIRVE PARA JS. TENGO QUE TRADUCIRLA.
// TERCER PASO: LA TRADUCCIÓN TARDA (USAMOS THEN) Y GRABAMOS LO TRADUCIDO EN DATA

let fetchPersonajes = "https://rickandmortyapi.com/api/character";

fetch(fetchPersonajes)
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    imprimirFicha(data);
  });

fetch(fetchPersonajes + "?page=2")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    imprimirFicha(data);
  });

fetch(fetchPersonajes + "?page=3")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    imprimirFicha(data);
  });

fetch(fetchPersonajes + "?page=4")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    imprimirFicha(data);
  });

fetch(fetchPersonajes + "?page=5")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    imprimirFicha(data);
  });

fetch(fetchPersonajes + "?page=6")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    imprimirFicha(data);
  });

fetch(fetchPersonajes + "?page=7")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    imprimirFicha(data);
  });

let pregunta = parseInt(prompt("dime qué página quieres mostrar ahora"));

fetch(fetchPersonajes + "?page=" + pregunta)
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    imprimirFicha(data);
  });

function imprimirFicha(data) {
  for (let i = 0; i < data.results.length; i++) {
    document.getElementById("print").innerHTML += `
        <div class="ficha">
        <h1>${data.results[i].name}</h1>
        <img src="${data.results[i].image}">
        <p>${data.results[i].species}</p>
          `;
  }
}
