mostrar();

function insertar() {
  // PRIMERO, GRABO INFORMACIÓN QUE EL USUARIO ME HA DADO
  let especie = document.getElementById("especie").value;
  let mundo = document.getElementById("mundo").value;
  let imagen = document.getElementById("imagen").value;

  // ENCAPSULO ESTA INFORMACIÓN EN UN OBJETO LITERAL
  let nuevo = {
    especie,
    mundo,
    imagen,
  };

  // VAMOS A MANDAR ESTA INFORMACIÓN AL SERVIDOR. NOSOTROS
  // ESTAMOS EN EL LADO DEL CLIENTE (FICHEROS ESTÁTICOS) Y
  // TENGO QUE MANDARLA AL SERVIDOR. ES DECIR, TENGO QUE
  // REALIZAR UNA PETICIÓN (UN REQUEST) Y EL SERVIDOR
  // ME TENDRÁ QUE DAR UNA RESPUESTA (RESPONSE)

  fetch("/especies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevo),
  });
  mostrar();
}

function mostrar() {
  fetch("/especies", {
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
            <h3>${datos[i].especie}</h3>
            <h3>${datos[i].mundo}</h3>
            <img src="${datos[i].imagen}" alt="imagen" width=30%>
                `;
      }
      document.getElementById("print").innerHTML = mostrarPersonajes;
    });
}
