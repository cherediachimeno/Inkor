mostrarDatos();

function insertar() {
  let nuevo = {
    nombre: document.getElementById("nombre").value,
    lore: document.getElementById("lore").value,
    sistema: document.getElementById("sistema").value,
    vida: document.getElementById("vida").value,
    img: document.getElementById("img").value,
  };

  fetch("/planetas", {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(nuevo),
  });
  location.reload();
}

function editar() {
  let nuevo = {
    nombre: document.getElementById("nombreEditar").value,
    lore: document.getElementById("loreEditar").value,
    sistema: document.getElementById("sistemaEditar").value,
    vida: document.getElementById("vidaEditar").value,
    img: document.getElementById("imgEditar").value,
  };

  fetch("/planetas", {
    method: "PUT",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(nuevo),
  });
  location.reload();
}

function borrar() {
  let nuevo = {
    nombre: document.getElementById("nombreBorrar").value,
  };

  fetch("/planetas", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(nuevo),
  });
  location.reload();
}

function mostrarDatos() {
  fetch("/planetas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let tabla = `
      <table border="2">
      <tr>
      <th colspan="6">PLANETAS</th>
      </tr>
      <tr>
          <th>NOMBRE</th>
          <th>LORE</th>
          <th>SISTEMA</th>
          <th>VIDA</th>
          <th>FOTO</th>
      </tr>`;
      for (let i = 0; i < data.length; i++) {
        tabla += `<tr>
          <th>${data[i].nombre}</th>
          <th>${data[i].lore}</th>
          <th>${data[i].sistema}</th>
          <th>${data[i].vida}</th>
          <th><img src="${data[i].img}" alt="planeta" width="100" height="100"></th>
          `;
      }
      tabla += `</table>`;
      document.getElementById("mostrarPlanetas").innerHTML = tabla;
    });
}
