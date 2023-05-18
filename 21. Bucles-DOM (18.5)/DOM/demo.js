let eleccion = "";

function clicar() {
  eleccion = prompt("quieres gris o rojo?");
  switch (eleccion) {
    case "gris":
      document.getElementById("print").innerHTML += `
    <div class="caja" 
    onclick="this.style.backgroundColor = 'grey'">
    <p>caja</p></div>`;
      break;
    case "rojo":
      document.getElementById("print").innerHTML += `
        <div class="caja" 
        onclick="this.style.backgroundColor = 'red'">
        <p>caja</p></div>`;
  }
}
