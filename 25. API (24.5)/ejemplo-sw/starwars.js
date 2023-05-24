let listaPlanetas = [];
let habitantes;

// FETCH GENERAL
// ME GUARDA NOMBRE PARA EL FORM Y TODA LA INFORMACIÓN EN UN ARRAY LLAMADO listaPlanetas
fetch("https://swapi.dev/api/planets/")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerDatos(data) {
    for (let i = 0; i < data.results.length; i++) {
      listaPlanetas[i] = data.results[i];
      document.getElementById(
        "seleccionPlaneta"
      ).innerHTML += `<option value=${i}>${data.results[i].name}</option>
                `;
    }
  });

// FUNCIÓN QUE BUSCA ESOS PLANETAS EN EL ARRAY Y ME LLAMA A TRES FUNCIONES: UNA PARA MOSTRAR INFO
// OTRA PARA VER SI HAY RESIDENTES E IMPRIMIR FICHAS DE ELLOS; Y OTRA CON LOS DATOS DE LAS PELIS.

function buscarPlaneta() {
  let seleccion = document.getElementById("seleccionPlaneta").value;
  let planeta = listaPlanetas[seleccion];
  mostrarInfo(planeta);
  residents(planeta);
  datosPeliculas(planeta);
}

// MOSTRAR-INFO: MUESTRA INFORMACIÓN GENERAL DEL PLANETA
function mostrarInfo(infoPlaneta) {
  document.getElementById("datosPlaneta").innerHTML = `
    <h3>Datos del planeta</h3>
    <p><b>Nombre:</b> ${infoPlaneta.name}</p>
    <p><b>Rotación:</b> ${infoPlaneta.rotation_period}</p>
    <p><b>Periodo Orbital:</b> ${infoPlaneta.orbital_period}</p>
    <p><b>Diámetro:</b> ${infoPlaneta.diameter}</p>
    <p><b>Clima:</b> ${infoPlaneta.climate}</p>
    <p><b>Gravedad:</b> ${infoPlaneta.gravity}</p>
    <p><b>Terreno:</b> ${infoPlaneta.terrain}</p>
    <p><b>Superfície del agua:</b> ${infoPlaneta.surface_water}</p>`;

  if (infoPlaneta.population != "unknown") {
    document.getElementById("datosPlaneta").innerHTML += `
        <p><b>Población:</b> ${infoPlaneta.population}</p>`;
  } else {
    document.getElementById("datosPlaneta").innerHTML += `
        <p><b>Población:</b> Desconocido</p>`;
  }
}

function residents(datosPlaneta) {
  let residentes = datosPlaneta.residents;

  if (residentes.length == 0) {
    document.getElementById("print").innerHTML = `
        <h5>No residen personajes en este planeta</h5>`;
  } else {
    document.getElementById("print").innerHTML = `
        <h3>Datos de los personajes en ${datosPlaneta.name}</h3>
        `;
    document.getElementById(
      "print"
    ).innerHTML += `<ul id="listaResidents"></ul>`;

    for (let i = 0; i < residentes.length; i++) {
      fetch(residentes[i])
        .then(function cogerRespuesta(respuesta) {
          return respuesta.json();
        })
        .then(function cogerDatos(data) {
          document.getElementById("listaResidents").innerHTML += `
                    <div class="residentsModulos">
                    <li>Nombre: ${data.name}</li>
                    <li>Altura: ${data.height}</li>
                    <li>Peso: ${data.mass}</li>
                    <li>Género: ${data.gender}</li>
                    </div>
                `;
        });
    }
  }
}

function datosPeliculas(datosPlaneta) {
  let peliculas = datosPlaneta.films;

  if (peliculas.length == 0) {
    document.getElementById("films").innerHTML = `
        <h5>No hay peliculas</h5>`;
  } else {
    document.getElementById("films").innerHTML = `
        <h3>Datos de las películas en ${datosPlaneta.name}</h3>
        `;
    document.getElementById("films").innerHTML += `<ul id="listaFilms"></ul>`;

    for (let i = 0; i < peliculas.length; i++) {
      fetch(peliculas[i])
        .then(function cogerRespuesta(respuesta) {
          return respuesta.json();
        })
        .then(function cogerDatos(data) {
          document.getElementById("listaFilms").innerHTML += `
                    <li style="list-style-type:none;">
                    <img style="width:25px" src="img/iconMovie.png" alt="pelicula">
                    <strong>Nombre:</strong> ${data.title}</li>
                    <li><strong>Episodio:</strong> ${data.episode_id}</li>
                    <li><strong>Apertura:</strong> ${data.opening_crawl}</li>
                    <li><strong>Director:</strong> ${data.director}</li>
                    <li><strong>Productor:</strong> ${data.producer}</li>
                    <li><strong>Lanzamiento:</strong> ${data.release_date}</li>
                    <br>
                `;
        });
    }
  }
}
