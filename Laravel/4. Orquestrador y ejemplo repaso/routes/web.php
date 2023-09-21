<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Magnemite;

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

Route::get('/', [Magnemite::class,'mostrarView'])->name('base');
Route::get('/pokemon/{id}', [Magnemite::class,'mostrarPokemon'])->name('pokeball');
