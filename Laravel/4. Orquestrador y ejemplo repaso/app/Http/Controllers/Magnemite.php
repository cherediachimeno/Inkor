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
            'num'=>$id,
            'suerte'=>rand()
            );

        return view('pokemon')->with($data);
    }
}
