<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductosRequest;
use App\Models\Productos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProductosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('viewAny', Productos::class);

        $tiposProductos = DB::table('tipos')->select('id', 'nombreTipo')->get();

        return Inertia::render('Administracion/RegistroProductos', [
            'tiposProductos' => $tiposProductos
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductosRequest $request)
    {
        Gate::authorize('create', Productos::class);

        $validated = $request->validated();

        Productos::create([
            'codigoBarra' => $validated['barcode'],
            'nombreProducto' => $validated['name'],
            'distribuidor' => $validated['distributor'],
            'precioProducto' => $validated['price'],
            'cantidadProductos' => $validated['quantity'],
            'idTipo' => $validated['type']
        ]);

        return Redirect::to(route('registro.productos'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Productos $productos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Productos $productos)
    {
        return Inertia::render('Administracion/ModificarProductos');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Productos $productos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Productos $productos)
    {
        //
    }
}
