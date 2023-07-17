<?php

require_once("Telefono.php");

class Iphone extends Telefono {

    // AQUÍ ESTÁ TODO EL CÓDIGO DE TELÉFONO: ES DECIR, PROPIEDADES Y FUNCIONES, INCLUSO EL CONSTRUCTOR
    // VOY AHORA A AÑADIR ELEMENTOS NUEVOS
    protected $versionIphone;

    function gestionandoSO(){
        return 'gestionando Iphone';
    }

    function usarBotones(){
        return 'usando botones';
    }

}


?>