let num1, num2, suma, resta, multi, division, resto;

function calcular() {
  // Primero, grabaré datos del usuario
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);

  // Después, mostrar en el html los diferentes cálculos
  document.getElementById("print").innerHTML += ` 
    <h1>Resultados de los cálculos</h1>
    <h3>Numeros seleccionados: ${num1} y ${num2} </h3>
    <ul>
        <li>Suma: ${num1 + num2} </li>
        <li>Resta: ${num1 - num2} </li>
        <li>Multiplicación: ${num1 * num2} </li>
        <li>División: ${num1 / num2} </li>
        <li>Resto: ${num1 % num2} </li>
    </ul>
    `;
}
