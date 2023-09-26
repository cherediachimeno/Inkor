<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Magnemite extends Controller
{
    function mostrarView(){
        return view('welcome');
    }

    function mostrarPokemon($id){
        $data = array(
            'number'=>$id,
            'suerte'=>rand()
            );

        return view('pokemon')->with($data);
    }

    function mostrarListado(){
        return "aquí el listado... gracias por conectarte";
    }
    function sintoken(){
        return "no tienes acceso al listado";
    }
    function check(){
        dd('You are in Controller Method');
    }
}

