<?php

require_once("Maquina.php");

abstract class Telefono implements Maquina { 

    protected $procesador;
    protected $pantalla;
    protected $esTactil;
    protected $color;
    protected $peso;
    protected $anyo;

    function __construct($procesador, $pantalla, $esTactil, $color, $peso, $anyo){
        $this->procesador = $procesador;
        $this->pantalla = $pantalla;
        $this->esTactil = $esTactil;
        $this->color = $color;
        $this->peso = $peso;
        $this->anyo = $anyo;
    }

    function getYear(){
        echo $this->anyo;
    }

    function getProcesador(){
        return $this->procesador;
    }

    function llamar(){
        return 'llamando';
    }

    function apagar(){
        return 'apagando';
    }

    function mandarMensaje(){
        return 'mandando mensaje';
    }

    function encender() {
        return 'encendiendo';
    }

    function cargarBateria() {
        return 'cargando';
    }

    abstract function usarBotones();

}


?>