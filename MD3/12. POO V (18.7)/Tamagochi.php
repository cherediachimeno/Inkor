<?php

require_once("Criatura.php");

class Tamagochi extends Criatura {
    /*
    protected $nombre;
    protected $especie;
    public $vida; */
    protected $felicidad;
    protected $hambre;
    protected $cansancio;

    function __construct($nombre, $especie){
        $this->nombre = $nombre;
        $this->especie = $especie;
        $this->vida = 100;
        $this->felicidad = 50;
        $this->hambre = 50;
        $this->cansancio = 0;
    }

    function comer($tipoComida){
        switch($tipoComida){
            case "berenjena":
                $this->hambre -= 30;
                break;
            case "fideos":
                $this->hambre -= 50;
                $this->felicidad += 5;
                break;
            case "donut":
                $this->hambre -= 20;
                $this->felicidad += 20;
                $this->vida -= 40;
                break;
            case "platano":
                $this->hambre -= 30;
                break;
            case "nada":
                $this->hambre += 30;
                $this->felicidad -= 20;
                break;
        }

        if ($this->hambre < 0){
            $this->hambre = 0;
        }

        if ($tipoComida == "nada") {
            return "El ". $this->nombre . " no come nada, tiene hambre... </br> De hecho
            el hambre del tamagochi es de... " . $this->hambre;
        } else {
            return 'El '. $this->nombre . ' está comiendo ' . $tipoComida . "
        </br>
        El hambre del tamagochi es de... " . $this->hambre . "
        </br>
        La felicidad del tamagochi es de...". $this->felicidad . "
        </br>";
        }

    }

    function comprobarSalud()

    {
        if ($this->vida <= 0) {
            return 'Es la muerte. 
            <form action="form.php">
            <label for="resucitar">¿Lo resucitamos?:</label>
            <select name="resucitar" id="resucitar">
                <option value="si">Sí</option>
            </select>
            </br>
        <input class="btn btn-primary" type="submit" name="resucitar">
        </form>
            ';

        } else {
            return 'La salud del Tamagochi es de '. $this->vida;
        }
    }

}

?>