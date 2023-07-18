<?php
// PRIMERA PARTE: importación e inicio de la sesión

require("Tamagochi.php"); // importamos la clase
session_start(); // iniciamos sesión

// SEGUNDA PARTE: condicionales varios.

if(isset($_SESSION['tamagochi'])){   // si la sesión ya está iniciada, guardame en una variable tamagochi, lo que estoy
// transportando con la sesión (es decir, el objeto tamagochi)
    $tamagochi = $_SESSION['tamagochi'];
}

// Recogida de datos
$tipoComida = "";

if(isset($_POST['tamagochi']) ){
    $tipoComida = $_POST['comida'];
}

if(isset($_POST['enviar'])){
    $tipoComida = $_POST['comida'];
}

// Si la vida del tamagochi es menor o igual a 0, borramos
// tamagochi igualándolo a null. 
if ($tamagochi->vida <= 0){
    $tamagochi = null;
}

// Si el objeto se ha borrado, es null, entonces se crea uno nuevo
if ($tamagochi == null){
    $tamagochi = new Tamagochi("Alejandro", "gamer");
}

// una vez el código ha llegado aquí, guárdame el objeto
// tamagochi en la sesión tamagochi
$_SESSION['tamagochi'] = $tamagochi;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interacción</title>
</head>

<body>
    <div>
        <h1>Respuesta a la interacción:</h1>
        <?= $tamagochi->comer($tipoComida); ?>
        </br>
        <?= $tamagochi->comprobarSalud(); ?>
    </div>
    <h2>Qué más quieres hacer?</h2>
    <form method="post" action="#">
    <label for="comida">¿Qué le das de comer?:</label>
        <select name="comida" id="comida">
            <option value="berenjena">Berenjena</option>
            <option value="donut">Donut</option>
            <option value="fideos">Fideos</option>
            <option value="platano">platano</option>
            <option value="nada">nada</option>
        </select>
        </br>
    <input class="btn btn-primary" type="submit" name="tamagochi">
    </form>
</body>
</html>