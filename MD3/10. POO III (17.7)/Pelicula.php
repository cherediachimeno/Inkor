<?php

class Pelicula {

    protected $titulo;
    protected $categoria;
    protected $year;
    protected $nota;

    function __construct($titulo, $categoria, $year, $nota){
        $this->titulo = $titulo;
        $this->categoria = $categoria;
        $this->year = $year;
        $this->nota = $nota;
    }

    function getTitulo(){
        return $this->titulo;
    }

    function setTitulo($nuevoTitulo){
        $this->titulo = $nuevoTitulo;
    }

    function getCategoria(){
        return $this->categoria;
    }

    function setCategoria($nuevaCategoria){
        $this->categoria = $nuevaCategoria;
    }
    
    function getYear(){
        return $this->year;
    }

    function setYear($newYear){
        $this->year = $newYear;
    }

    function getNota(){
        return $this->nota;
    }

    function setNota($nueva){
        $this->nota = $nueva;
    }

}


?>