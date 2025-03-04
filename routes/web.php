<?php

use App\Http\Controllers\ProductosController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function (Request $request) {

    if ($request->user()->isAdmin()) {
        return Redirect::to(route('registro.productos'));
    }

    return Redirect::to();
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/productos', [ProductosController::class, 'create'])->name('registro.productos');
    Route::post('/guardar-productos', [ProductosController::class, 'store'])->name('productos.guardar');

    //api
    Route::get('/api/productos/{codigoBarra}', [ProductosController::class, 'productoRegistrado'])->name('api.producto');

    Route::get('/editar-productos', [ProductosController::class, 'edit'])->name('editar.productos');
    Route::patch('/editar-productos/{producto}', [ProductosController::class, 'update'])->name('actualizar.productos');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
