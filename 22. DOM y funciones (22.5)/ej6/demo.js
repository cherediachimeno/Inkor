let operacion;

function decidir() {
  // Primero, grabaré datos del usuario

  operacion = document.getElementById("operacion").value;

  // Después, mostrar form para incluir números
  document.getElementById("print").innerHTML += ` 
    <form action="#">
    <label for="num1">Dame número 1</label>
    <br>
    <input type="number" name="num1" id="num1">
    <br>
    <label for="num2">Dame número 2</label>
    <br>
    <input type="number" name="num2" id="num2">
    </form>
    <button onclick="calcular()">${operacion}</button>
    `;
}

function calcular() {
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);

  switch (operacion) {
    case "SUMAR":
      document.getElementById("print").innerHTML += `
        <p>Suma: ${num1 + num2} </p>`;
      break;
    case "RESTAR":
      document.getElementById("print").innerHTML += `
      <p>Resta: ${num1 - num2} </p>`;
      break;
    case "MULTIPLICAR":
      document.getElementById("print").innerHTML += `
    <p>Multiplicación: ${num1 * num2} </p>`;
      break;
    case "DIVIDIR":
      document.getElementById("print").innerHTML += `
    <p>División: ${num1 / num2} </p>`;
      break;
  }
}
