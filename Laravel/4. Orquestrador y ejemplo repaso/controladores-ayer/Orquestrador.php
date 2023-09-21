<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Orquestrador extends Controller
{
    function devolverWelcome(){
        return view('welcome');
    }

    function devolverAbout(){
        $data = array(
            'fundador'=>'Alejandro Medina',
            'empresa'=>'Nintendo 64 forever',
            'juego'=>'Mortal Kombat en la Switch'
            );
            return view('sobrenosotros')->with($data);
        //return view('sobrenosotros')->with('fundador','Alejandro Medina');
    }

    function mostrarSuerte($i){
        $aleatorio = rand(1, 9);
        $calculo = $i * $aleatorio;
        return view('suerte')->with('numSuerte', $calculo);
    }

    function home(){
        return view('welcome');
    }

    function usuarios(){
        return view('usuarios');
    }

    function editar(){
        return view('editar');
    }


    function borrar(){
        return view('borrar');
    }



}
