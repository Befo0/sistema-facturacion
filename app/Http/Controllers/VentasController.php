<?php

namespace App\Http\Controllers;

use App\Models\Detalles;
use App\Models\Ventas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class VentasController extends Controller
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
        return Inertia::render('Cajeros/Caja');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = $request->user();
        $data = $request->json()->all();

        $productos = $data['productos'];

        $venta = Ventas::create([
            'idSucursal' => $user->idSucursal,
            'idCajero' => $user->id,
            'fechaVenta' => now()->toDateTimeString(),
            'totalVenta' => $data['total'],

        ]);

        foreach ($productos as $producto) {
            Detalles::create([
                'idVenta' => $venta->id,
                'idProducto' => $producto['id'],
                'cantidad' => $producto['cantidadProductos']
            ]);
        };
    }

    /**
     * Display the specified resource.
     */
    public function show(Ventas $ventas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ventas $ventas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ventas $ventas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ventas $ventas)
    {
        //
    }
}
