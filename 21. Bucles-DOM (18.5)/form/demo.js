let datosUsuario = "";

function cargarFoto() {
  // Primero, grabaré datos del usuario
  datosUsuario = document.getElementById("enlaceFoto").value;
  // Después, mostrar en el html la foto que ha cargado
  document.getElementById("print").innerHTML += `  
  <img class="foto" src="${datosUsuario}" 
  alt="foto subida por el usuario">`;
}

// Pide un dato al usuario y imprimelo por pantalla

function mostrarTemperatura() {
  datosUsuario = document.getElementById("temperatura").value;
  document.getElementById(
    "print"
  ).innerHTML = `<p>Temperatura: ${datosUsuario} </p>`;
}

function mostrar() {
  datosUsuario = document.getElementById("edad").value;

  if (datosUsuario >= 18) {
    document.getElementById("print").innerHTML = `  
    <img class="foto" src="https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/12/re4tyrant.jpg" 
    alt="foto violenta">`;
  } else {
    document.getElementById("print").innerHTML = `  
    <img class="foto" src="https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg" 
    alt="foto violenta">`;
  }
}
