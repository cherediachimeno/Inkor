<?php

// PRIMERO, CREAREMOS LA TEORIZACIÓN DE UN COCHE.
// ES DECIR, CREAMOS LA CLASE COCHE CON SUS CARACTERÍSTICAS
// Y SUS FUNCIONALIDADES
class Coche {
// UNA CLASE TIENE DOS MIEMBROS FUNDAMENTALES
// POR UN LADO, SUS PROPIEDADES/ATRIBUTOS
// Y POR EL OTRO, SUS MÉTODOS/FUNCIONES

// 1º PROPIEDADES-ATRIBUTOS

    protected $marca;
    protected $modelo;
    protected $velocidadMaxima;
    protected $anyo;
    protected $tipoCombustible;

    protected $velocidadActual;
    protected $combustible;
    protected $numKm;

// 2º FUNCIONES-MÉTODOS

// 2.1 MÉTODO INICIAL (CONSTRUCTOR)

function __construct($marca, $modelo, $velocidadMaxima, $anyo, $tipoCombustible){
    $this->marca = $marca;
    $this->modelo = $modelo;
    $this->velocidadMaxima = $velocidadMaxima;
    $this->anyo = $anyo;
    $this->tipoCombustible = $tipoCombustible;

    $this->velocidadActual = 0;
    $this->combustible = 100;
    $this->numKm = 5;
    $this->imprimirInfo();
}

// 2.2 MÉTODOS Y FUNCIONES DE NUESTRA CLASE

function encender(){
    print "Encendiendo tu " . $this->modelo;
    print "<hr/>";
    print "COMBUSTIBLE ACTUAL:";
    print $this->combustible;
    print "<hr/>";
    $this->comprobarDeposito();
}

function acelerar(){
    print "Acelerando";
    print "<hr/>";
    $this->combustible = $this->combustible - 30;
    print "COMBUSTIBLE ACTUAL:";
    print "<hr/>";
    print $this->combustible;
    print "<hr/>";
    $this->comprobarDeposito();
}

function comprobarDeposito(){

    if ($this->combustible <= 0){
        print "Te quedaste sin combustible";
        print "<hr/>";
    } elseif ($this->combustible <= 20){
        print "OJO GASOLINA";
        print "<hr/>";
    }
}

function imprimirInfo(){
    echo "<div class='ficha'>
    <p><strong>Compraste este vehículo</strong></p>
    <hr/>
    <p>Modelo: ' .$this->modelo .'</p>
    <hr/>
    <p>Combustible: ' .$this->tipoCombustible .</p>
    <hr/>
    <p>Año: ' .$this->anyo . </p>
    </div>";
}

}
// VOY A CREAR UN OBJETO

if(isset($_REQUEST['enviar'])){

    // SELECCIÓN DE INFORMACIÓN A TRAVÉS DEL FORM
    $modelo = $_REQUEST['modelo'];

    if ($modelo == "Jeep")
    $Jeep = new Coche("Jeep", $modelo, 220, 2022, "gasolina");

    //$RenaultClio = new Coche("Clio", "Renault", 180, 2017, "gasolina");
    /*
    $Jeep->encender();
    $Jeep->acelerar();
    $Jeep->acelerar();
    $Jeep->acelerar();
    $Jeep->acelerar(); */
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .ficha {
            border: 2px black solid;
            height: 250px;
            width: 200px;
            background-color: gainsboro;
            margin: 5px;
        }
        </style>
</head>
<body>
<form action="#">
        <label for="modelo">Dime el modelo de Jeep que quieres</label>
        <input type="text" placeholder="modelo jeep" name="modelo">
        <br>
        <input type="submit" name="enviar">
        <input type="reset">
    </form>
</body>
</html>