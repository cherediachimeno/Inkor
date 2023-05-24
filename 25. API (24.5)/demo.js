// UTILIZANDO LA API DE RICK AND MORTY, VOY A MOSTRAR TODOS LOS PERSONAJES
// IMPRIMIRÉ CADA UNO DE ELLOS EN UN DIV CON LA FOTO Y LOS NOMBRES

// PRIMER PASO: LLAMAR A LA API Y RECOGER ESTA INFORMACIÓN EN UNA VARIABLE LLAMADA RESPUESTA
// SEGUNDO PASO: COMO SABEMOS, LA INFO ESTÁ EN JSON Y NO ME SIRVE PARA JS. TENGO QUE TRADUCIRLA.
// TERCER PASO: LA TRADUCCIÓN TARDA (USAMOS THEN) Y GRABAMOS LO TRADUCIDO EN DATA

fetch("https://rickandmortyapi.com/api/character")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    for (let i = 0; i < data.results.length; i++) {
      document.getElementById("print").innerHTML += `
      <div class="ficha">
      <h1>${data.results[i].name}</h1>
      <img src="${data.results[i].image}">
      <p>${data.results[i].species}</p>
        `;
    }
  });

fetch("https://rickandmortyapi.com/api/character?page=2")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    for (let i = 0; i < data.results.length; i++) {
      document.getElementById("print").innerHTML += `
      <div class="ficha">
      <h1>${data.results[i].name}</h1>
      <img src="${data.results[i].image}">
      <p>${data.results[i].species}</p>
        `;
    }
  });

fetch("https://rickandmortyapi.com/api/character?page=3")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    for (let i = 0; i < data.results.length; i++) {
      document.getElementById("print").innerHTML += `
      <div class="ficha">
      <h1>${data.results[i].name}</h1>
      <img src="${data.results[i].image}">
      <p>${data.results[i].species}</p>
        `;
    }
  });

fetch("https://rickandmortyapi.com/api/character?page=4")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    for (let i = 0; i < data.results.length; i++) {
      document.getElementById("print").innerHTML += `
    <div class="ficha">
    <h1>${data.results[i].name}</h1>
    <img src="${data.results[i].image}">
    <p>${data.results[i].species}</p>
      `;
    }
  });

fetch("https://rickandmortyapi.com/api/character?page=5")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerData(data) {
    for (let i = 0; i < data.results.length; i++) {
      document.getElementById("print").innerHTML += `
      <div class="ficha">
      <h1>${data.results[i].name}</h1>
      <img src="${data.results[i].image}">
      <p>${data.results[i].species}</p>
        `;
    }
  });
