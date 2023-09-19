<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PruebaControlador extends Controller
{
    function mostrar(){
        return "vaya vaya, el controlador está ejecutando la función mostrar";
    }

    function vuelta(){
        return view('welcome');
    }

    function parametros($i){
        $valor = 50 + $i;
        return "El número elegido fue tras la suma fue de ". $valor;
    }

    function pruebas($id = null, $num = null){
        return $id + $num;
    }
}
