let personajeElegido;

function cargarPersonaje() {
  personajeElegido = document.getElementById("personaje").value;
  personajeElegido = personajeElegido.toLowerCase();

  fetch("https://rickandmortyapi.com/api/character/?name=" + personajeElegido)
    .then(function cogerRespuesta(respuesta) {
      return respuesta.json();
    })
    .then(function cogerData(data) {
      imprimirFicha(data);
    });
}

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
