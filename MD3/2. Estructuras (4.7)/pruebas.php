<?php

function saludar($parametro){
    echo "Buenos días " .$parametro . " recuerda no grabar vídeos de youtube en clase<br>";
}

saludar("Jairo");
$stringReturned = detenerGrafitero();
echo $stringReturned;


function detenerGrafitero(){
    echo "el grafitero pinta el tren";
    $detencion = "sí";
    $multa = 6000;
    $edad = 19;
    if ($edad < 18){
        return "¿El grafitero ha sido detenido? " . $detencion . " y se lleva
        una multa de " . $multa . " que pagarán sus
        padres porque es menor.";
    } else {
    return "¿El grafitero ha sido detenido? " . $detencion . " y se lleva
    una multa de " . $multa . " que pagará el mismo delincuente y si no puede, se le embargarán las cuentas.";  }
}
/*
$marks = 60;
  
$res = match (true) {
    $marks < 33 => 'Fail',
    $marks < 45 => 'Third Division',
    $marks < 60 => 'Second Division',
    $marks < 75 => 'First Division',
    $marks <= 100 => 'Distinction'
};

echo $res;*/

  ?>