<?php

// CONDICIONAL QUE SE ACTIVA SI EL BOTÓN ENVIAR MANDA UNA PETICIÓN (ES DECIR, HEMOS CLICADO EN ÉL)
if(isset($_REQUEST['enviar'])){

    // SELECCIÓN DE INFORMACIÓN A TRAVÉS DEL FORM
    $noches = $_REQUEST['numNoches'];
    $ciudad = $_REQUEST['ciudad'];
    $alquiler = $_REQUEST['alquiler'];
    $costeAlquiler = 0;

    // PROCESO DE INFORMACIÓN A TRAVÉS DE FUNCIONES
    $precioHotel = coste_hotel($noches);
    $precioViaje = coste_avion($ciudad);

    if ($alquiler == "si") {
        $costeAlquiler = coste_coche($noches);
    } 

    // GENERADOR DE RESPUESTA A LA PETICIÓN FORMULADA
    if ($noches > 5) {
        echo "El número de noches seleccionado es de $noches y por tanto el precio, con bonificación se hospeda más de 5 noches, es de $precioHotel<br>";
        echo "Y los gastos del avión hacia $ciudad es de $precioViaje<br>";
        if ($costeAlquiler != 0) {
            echo "Por tanto, gastos hotel+viaje son de " . ($precioHotel+$precioViaje) . "<br>";
            echo "En resumen, como alquila un coche, el precio final es de " . ($precioHotel+$precioViaje+$costeAlquiler) . "<br>";
        } else {
            echo "En resumen, el precio final es de " . ($precioHotel+$precioViaje) . "<br>";
        }
    } else {
         echo "El número de noches seleccionado es de $noches y por tanto el precio total es de $precioHotel<br>";
         echo "Y los gastos del avión hacia $ciudad es de $precioViaje<br>";
         if ($costeAlquiler != 0) {
            echo "Por tanto, gastos hotel+viaje son de " . ($precioHotel+$precioViaje) . "<br>";
            echo "En resumen, como alquila un coche, el precio final es de " . ($precioHotel+$precioViaje+$costeAlquiler) . "<br>";
        } else {
            echo "En resumen, el precio final es de " . ($precioHotel+$precioViaje) . "<br>";
        }
    }
}

// FUNCIONES

function coste_hotel($n){
    $precioNoche = 140;

    // OFERTA EN CASO DE SELECCIONAR MÁS DE 5 NOCHES
    if ($n > 5) { 
        $precioNoche = 125;
    } 

    $coste = $n * $precioNoche;
    return $coste;
}

function coste_avion($c){
  $coste_viaje = 0;
    switch ($c){
        case "Osaka": $coste_viaje = 800;
        break;
        case "Berlin": $coste_viaje = 360;
        break;
        case "Paris": $coste_viaje = 350;
        break;
        case "NY": $coste_viaje = 750;
        break;
    }

    return $coste_viaje;
}

function coste_coche($n){
    // El alquiler son 40 euros el dia
    // Oferta única de un descuento de 100 euros si alquilas más de 7 noches
    // Si alquilas más de 5, entonces 50 euros de descuento
    $coste = $n * 40;

    if ($n > 7){
        $coste = $coste - 100;
    } elseif ($n >= 5) {
        $coste = $coste - 50;
    }

    return $coste;

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Buking.com</h1>
    <br>
    <form action="#">
        <label for="noches">Número de noches:</label>
        <input type="number" placeholder="Número noches" name="numNoches">
        <br>
        <label for="ciudad">Ciudad destino (coste del vuelo):</label>
        <select name="ciudad" id="ciudad">
            <option value="Osaka">Osaka</option>
            <option value="Berlin">Berlín</option>
            <option value="Paris">París</option>
            <option value="NY">Nueva York</option>
        </select>
        <br>
        <label for="alquiler">¿Quiere alquilar un coche durante su estancia?</label>
        <select name="alquiler" id="alquiler">
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select>
        <br>
        <input type="submit" name="enviar">
        <input type="reset">
    </form>
</body>
</html>