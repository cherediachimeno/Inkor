let fotos = [
  "https://static.wikia.nocookie.net/swse/images/6/6e/Human.png",
  "https://static.wikia.nocookie.net/aliens/images/2/2b/B1.png",
  "https://static.wikia.nocookie.net/starwars/images/1/1e/Chewbacca-Fathead.png",
  "",
  "",
  "",
  "",
];

fetch("https://swapi.dev/api/species/")
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
        <img src="${fotos[i]}" alt="">
        <p>${data.results[i].language}</p>
          `;
  }
}
