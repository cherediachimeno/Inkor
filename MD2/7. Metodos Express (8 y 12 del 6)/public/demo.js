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
            <div class="card">
            <h3>${datos[i].especie}</h3>
            <h3>${datos[i].mundo}</h3>
            <img src="${datos[i].imagen}" alt="imagen" width=75%>
            </div>`;
      }
      document.getElementById("print").innerHTML = mostrarPersonajes;
    });
}

function editar() {
  // PRIMERO, GRABO INFORMACIÓN QUE EL USUARIO ME HA DADO
  let especie = document.getElementById("especieEditar").value;
  let mundo = document.getElementById("mundoEditar").value;
  let imagen = document.getElementById("imagenEditar").value;

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
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevo),
  });
  mostrar();
}

function borrar() {
  let especie = document.getElementById("especieBorrar").value;
  let nuevo = {
    especie: especie,
  };

  fetch("/especies", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(especie),
  });
  mostrar();
}

function buscarMundo() {
  let itemBuscar = document.getElementById("tipo").value;

  // CONVERTIMOS LO QUE EL USUARIO HA ESCRITO PRIMERO EN MINÚSCULA Y
  // DESPUÉS CONVERTIMOS LA PRIMERA LETRA EN MAYÚSCULA PARA QUE LA
  // COINCIDENCIA SEA REAL
  itemBuscar = itemBuscar.toLowerCase();

  // FETCH E IMPRESIÓN DE RESULTADOS
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
        if (datos[i].mundo == itemBuscar) {
          mostrarPersonajes += `
            <div class="card">
            <h3>${datos[i].especie}</h3>
            <h3>${datos[i].mundo}</h3>
            <img src="${datos[i].imagen}" alt="imagen" width=30%>
            </div>`;
        }
      }

      if (mostrarPersonajes == "") {
        mostrarPersonajes += `<p>No hay coincidencias</p>`;
      }

      document.getElementById("print").innerHTML = mostrarPersonajes;
    });
}

function buscarEspecie() {
  let itemBuscar = document.getElementById("itemBuscar").value;

  // CONVERTIMOS LO QUE EL USUARIO HA ESCRITO PRIMERO EN MINÚSCULA Y
  // DESPUÉS CONVERTIMOS LA PRIMERA LETRA EN MAYÚSCULA PARA QUE LA
  // COINCIDENCIA SEA REAL
  itemBuscar = itemBuscar.toLowerCase();
  let primera = itemBuscar.substring(0, 1);
  primera = primera.toUpperCase();
  let resto = itemBuscar.substring(1);
  let final = primera + resto;
  console.log(final);

  // FETCH E IMPRESIÓN DE RESULTADOS
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
        if (datos[i].especie == final) {
          mostrarPersonajes += `
              <div class="card">
              <h3>${datos[i].especie}</h3>
              <h3>${datos[i].mundo.toUpperCase()}</h3>
              <img src="${datos[i].imagen}" alt="imagen" width=30%>
              </div>`;
        }
      }

      if (mostrarPersonajes == "") {
        mostrarPersonajes += `<p>No hay coincidencias</p>`;
      }

      document.getElementById("print").innerHTML = mostrarPersonajes;
    });
}
