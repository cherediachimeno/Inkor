<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return view('bienvenido');
});

/*
Route::get('/about', function () {
    return view('nosotros');
}); */

Route::view('/about', 'nosotros', ['empresa' => 'INKOR']);



Route::get('/login', function () {
    return "Hello World from login";
});

