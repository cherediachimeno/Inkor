mostrar();

function insertar() {
  let nombre = document.getElementById("nombre").value;
  let profesion = document.getElementById("profesion").value;
  let juego = document.getElementById("juego").value;

  // ENCAPSULO ESTA INFORMACIÓN EN UN OBJETO LITERAL
  let nuevo = {
    nombre,
    profesion,
    juego,
  };

  // VAMOS A MANDAR ESTA INFORMACIÓN AL SERVIDOR. NOSOTROS
  // ESTAMOS EN EL LADO DEL CLIENTE (FICHEROS ESTÁTICOS) Y
  // TENGO QUE MANDARLA AL SERVIDOR. ES DECIR, TENGO QUE
  // REALIZAR UNA PETICIÓN (UN REQUEST) Y EL SERVIDOR
  // ME TENDRÁ QUE DAR UNA RESPUESTA (RESPONSE)

  fetch("/anyadir", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevo),
  });
}

function mostrar() {
  fetch("/lista", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      let mostrarPersonajes = "";
      for (let i = 0; i < datos.length; i++) {
        mostrarPersonajes += `
              <div class="card">
              <h3>${datos[i].nombre}</h3>
              <h5>${datos[i].profesion}</h5>
              <h5>${datos[i].juegoPreferido}</h5>
              </div>`;
      }
      document.getElementById("print").innerHTML = mostrarPersonajes;
    });
}
