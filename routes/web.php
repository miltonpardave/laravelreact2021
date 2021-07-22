<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

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
    return view('welcome');
});

Route::resource('/alumno', Controllers\AlumnoController::class);
Route::get('/alumnolista', [Controllers\AlumnoController::class, 'Listar']);
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::resource('/curso', Controllers\CursoController::class);
//Route::get('/curso', [Controllers\CursoController::class, 'index'] );
Route::get('/cursolista', [Controllers\CursoController::class, 'Listar']);

//Route::get('/docente', [Controllers\DocenteController::class, 'index' ] );
Route::resource('/docente', Controllers\DocenteController::class );
Route::get('/docentelista', [Controllers\DocenteController::class, 'Listar']);
