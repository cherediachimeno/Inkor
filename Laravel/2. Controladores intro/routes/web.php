<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PruebaControlador;

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

Route::get('/', function () {
    return view('welcome');
});
/*
Route::get('/hola', function (Request $request) {
    return "Hola".$request->get('variable');
});*/


Route::get('/', [PruebaControlador::class,'mostrar']);
Route::get('/controladores/{id}', [PruebaControlador::class,'parametros']);
Route::get('/pruebas/{id?}/{num?}', [PruebaControlador::class,'pruebas']);
Route::get('/volver', [PruebaControlador::class,'vuelta']);
Route::view('/about', 'hola', ['persona' => 'Mila', 'padre' => 'Fran']);