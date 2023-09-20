<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PruebaControlador;
use App\Http\Controllers\Nuevo;
use App\Http\Controllers\Orquestrador;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


/*
Route::get('/', function () {
    return view('welcome');
});*/

Route::get('/', [Orquestrador::class,'devolverWelcome']);

//Route::view('/about', 'sobrenosotros', ['email' => 'animalia@yahoo.es', 'fundadora' => 'Neus Gonzalez']);
Route::get('/about', [Orquestrador::class,'devolverAbout']);
Route::get('/suerte/{id}', [Orquestrador::class,'mostrarSuerte']);


/* PARA EVITAR ESTO:
Route::get('/home', [Orquestrador::class,'home']);
Route::get('/home/usuarios', [Orquestrador::class,'usuarios']);
Route::get('/home/usuarios/editar', [Orquestrador::class,'editar']);
Route::get('/home/usuarios/borrar', [Orquestrador::class,'borrar']);
*/

// CREAMOS UN HOME Y ORGANIZAMOS CON PREFIX. 
Route::get('/home', [Orquestrador::class,'home']);

Route::prefix('home/usuarios')->group(function(){

    // ADEMÁS, LES DOY NOMBRE. TODAS ELLAS CAEN BAJO EL NOMBRE USUARIOS. DE MANERA QUE SERIA
    // USUARIOS.USERS; USUARIOS.EDIT; USUARIOS.DELETE

    Route::name('usuarios.')->group(function(){

  

        Route::get('/', [Orquestrador::class,'usuarios'])->name('users');
        Route::get('/editar', [Orquestrador::class,'editar'])->name('edit');
        Route::get('/borrar', [Orquestrador::class,'borrar'])->name('delete');
    
});

});





/*
Route::get('/suerte/{id}', [PruebaControlador::class,'numSuerte']);
Route::get('/comprando', [Nuevo::class,'estoEsNuevo']);

/* CÓDIGO DE CLASE EN SUCIO
Route::get('/hola', function (Request $request) {
    return "Hola".$request->get('variable');
});*/


//Route::get('/', [PruebaControlador::class,'mostrar']);
/*
Route::get('/controladores/{id}', [PruebaControlador::class,'parametros']);
Route::get('/pruebas/{id?}/{num?}', [PruebaControlador::class,'pruebas']);
Route::get('/volver', [PruebaControlador::class,'vuelta']);
Route::view('/about', 'hola', ['persona' => 'Mila', 'padre' => 'Fran']); */
