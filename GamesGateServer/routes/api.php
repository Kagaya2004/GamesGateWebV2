<?php

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\JogoController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\GeneroDoJogoController;
use App\Http\Controllers\JogoNaBibliotecaController;
use App\Http\Controllers\BibliotecaController;
use App\Http\Controllers\DesenvolvedoraController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AnaliseController;
use App\Http\Controllers\AvaliacaoController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/loginUsuario', [LoginController::class, 'loginUsuario']);
Route::post('/loginDesenvolvedora', [LoginController::class, 'loginDesenvolvedora']);

Route::prefix('analise')->group(function () {
    Route::get('/index', [AnaliseController::class, 'index']);
    Route::get('/show/{id}', [AnaliseController::class, 'show']);
    Route::post('/store', [AnaliseController::class, 'store']);
    Route::put('/update/{id}',   [AnaliseController::class, 'update']);
    Route::delete('/destroy/{id}', [AnaliseController::class, 'destroy']);
});

Route::prefix('avaliacao')->group(function () {
    Route::get('/index', [AvaliacaoController::class, 'index']);
    Route::get('/show/{id}', [AvaliacaoController::class, 'show']);
    Route::post('/store', [AvaliacaoController::class, 'store']);
    Route::put('/update/{id}',   [AvaliacaoController::class, 'update']);
    Route::delete('/destroy/{id}', [AvaliacaoController::class, 'destroy']);
});

Route::prefix('biblioteca')->group(function () {
    Route::get('/index', [BibliotecaController::class, 'index']);
    Route::get('/show/{id}', [BibliotecaController::class, 'show']);
    Route::post('/store', [BibliotecaController::class, 'store']);
    Route::put('/update/{id}',   [BibliotecaController::class, 'update']);
    Route::delete('/destroy/{id}', [BibliotecaController::class, 'destroy']);
});

Route::prefix('desenvolvedora')->group(function () {
    Route::get('/index', [DesenvolvedoraController::class, 'index']);
    Route::get('/show/{id}', [DesenvolvedoraController::class, 'show']);
    Route::post('/store', [DesenvolvedoraController::class, 'store']);
    Route::put('/update/{id}',   [DesenvolvedoraController::class, 'update']);
    Route::delete('/destroy/{id}', [DesenvolvedoraController::class, 'destroy']);
});

Route::prefix('genero')->group(function () {
    Route::get('/index', [GeneroController::class, 'index']);
    Route::get('/show/{id}', [GeneroController::class, 'show']);
    Route::post('/store', [GeneroController::class, 'store']);
    Route::put('/update/{id}', [GeneroController::class, 'update']);
    Route::delete('/destroy/{id}', [GeneroController::class, 'destroy']);
});

Route::prefix('generodojogo')->group(function () {
    Route::get('/index', [GeneroDoJogoController::class, 'index']);
    Route::get('/show/{id}', [GeneroDoJogoController::class, 'show']);
    Route::post('/store', [GeneroDoJogoController::class, 'store']);
    Route::put('/update/{id}',   [GeneroDoJogoController::class, 'update']);
    Route::delete('/destroy/{id}', [GeneroDoJogoController::class, 'destroy']);
});

Route::prefix('jogo')->group(function () {
    Route::get('/index', [JogoController::class, 'index']);
    Route::get('/show/{id}', [JogoController::class, 'show']);
    Route::post('/store', [JogoController::class, 'store']);
    Route::put('/update/{id}',   [JogoController::class, 'update']);
    Route::delete('/destroy/{id}', [JogoController::class, 'destroy']);
});

Route::prefix('jogonabiblioteca')->group(function () {
    Route::get('/index', [JogoNaBibliotecaController::class, 'index']);
    Route::get('/show/{id}', [JogoNaBibliotecaController::class, 'show']);
    Route::post('/store', [JogoNaBibliotecaController::class, 'store']);
    Route::put('/update/{id}',   [JogoNaBibliotecaController::class, 'update']);

    Route::delete('/destroy/{id}', [JogoNaBibliotecaController::class, 'destroy']);
});

Route::prefix('user')->group(function () {
    Route::get('/index', [UserController::class, 'index']);
    Route::get('/show/{id}', [UserController::class, 'show']);
    Route::post('/store', [UserController::class, 'store']);
    Route::put('/update/{id}', [UserController::class, 'update']);
    Route::delete('/destroy/{id}', [UserController::class, 'destroy']);
});