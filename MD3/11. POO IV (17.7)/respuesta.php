<?php 

require_once("Telefono.php");
require_once("Android.php");
require_once("Iphone.php");

if(isset($_POST['enviar'])) {
    // RECOGIDA DE DATOS
    $phone = $_POST['phone'];
    $year = $_POST['year'];
    $procesador = "rápido";
    $pantalla = "grande";
    $esTactil = true;
    $color = "gris";
    $peso = "150gr";
    $telefonoElegido = "";

    // CREAR OBJETO A PARTIR DE ESOS DATOS
    
    switch ($phone){
        case "android": $telefonoElegido = new Android($procesador, $pantalla, $esTactil, $color, $peso, $year);
        break;
        case "iphone": $telefonoElegido = new Iphone($procesador, $pantalla, $esTactil, $color, $peso, $year);
        break;
    }

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Información recogida</title>
</head>
<body>
    <div>
    <h1>Datos almacenados en el objeto</h1>
        <ul>
            <li>Vamos a abrir el SO: <?=$telefonoElegido->gestionandoSO()?></li>
            <li>Año del dispositivo: <?=$telefonoElegido->getYear()?></li>
        </ul>
    </div>
</body>
</html>