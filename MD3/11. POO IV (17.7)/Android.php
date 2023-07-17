<?php

require_once("Telefono.php");

class Android extends Telefono{

    // AQUÍ ESTÁ TODO EL CÓDIGO DE TELÉFONO: ES DECIR, PROPIEDADES Y FUNCIONES, INCLUSO EL CONSTRUCTOR
    // VOY AHORA A AÑADIR ELEMENTOS NUEVOS
    protected $versionAndroid;

    function getYear(){
        parent::getYear();
        return 'pues vaya gracia el Android que se me ha bloqueado';
    }
    
    function gestionandoSO(){
        return 'gestionando Android';
    }

    function usarBotones(){
        return 'usando botones';
    }

}


?>