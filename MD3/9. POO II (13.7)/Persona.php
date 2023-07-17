<?php

class Persona {

    protected $nombre;
    protected $apellido;
    protected $estaTrabajando;
    protected $estaEstudiando;
    protected $anyos;
    protected $tramoSalarial;

function __construct($nombre, $apellido, $estaTrabajando, $estaEstudiando, $anyos, $tramoSalarial){
    $this->nombre = $nombre;
    $this->apellido = $apellido;
    $this->estaTrabajando = $estaTrabajando;
    $this->estaEstudiando = $estaEstudiando;
    $this->anyos = $anyos;
    $this->tramoSalarial = $tramoSalarial;
}

function getNombre(){
    return $this->nombre;
}

function getApellido(){
    return $this->apellido;
}

function getTrabajo(){
    return $this->estaTrabajando;
}

function getEstudiando(){
    return $this->estaEstudiando;
}

function getTramo(){
    return $this->tramoSalarial;
}

function setNombre($nombre) {
    $this->nombre = $nombre;
}

function subirTramo(){
    $this->tramoSalarial += 1;
}

}


if(isset($_REQUEST['enviar'])){

    $tramo = $_REQUEST['tramo'];
    $Vicente = new Persona("Vicente", "Aparicio", true, true, 30, $tramo);
    echo $Vicente->getNombre();
    $Vicente->setNombre("Carlos");
    echo $Vicente->getNombre();
    $Vicente->subirTramo();
    $Vicente->subirTramo();
    $Vicente->subirTramo();
    echo $Vicente->getTramo();

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
        <label for="modelo">Dime el tramo salarial de Vicente</label>
        <input type="number" placeholder="tramo" name="tramo">
        <br>
        <input type="submit" name="enviar">
        <input type="reset">
    </form>
</body>
</html>