<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductosRequest;
use App\Models\Productos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ProductosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
    }

    /**
     * Api for getting the products
     */
    public function productoRegistrado(string $codigoBarra)
    {

        $validator = Validator::make(['codigoBarra' => $codigoBarra], [
            'codigoBarra' => 'required|string|min:20|max:20'
        ], $messages = [
            'required' => 'El codigo de barras es requerido',
            'min' => 'El codigo de barras debe de ser de :min caracteres',
            'max' => 'El codigo de barras debe de ser de :max caracteres',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        $codigoBarra = $validator->validate()['codigoBarra'];

        Gate::authorize('viewAny', Productos::class);

        $producto = [];

        if (strlen($codigoBarra) > 0) {
            $producto = Productos::select('nombreProducto', 'distribuidor', 'codigoBarra', 'precioProducto', 'cantidadProductos', 'idTipo')->where('codigoBarra', '=', $codigoBarra)->get();
        }

        return $producto;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        Gate::authorize('viewAny', Productos::class);

        $producto = [];


        return Inertia::render('Administracion/RegistroProductos', [
            'productoRegistrado' => $producto
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
     * Show the table of all the products
     */
    public function edit(Request $request)
    {
        Gate::authorize('viewAny', Productos::class);

        $productos = Productos::select('nombreProducto', 'distribuidor', 'precioProducto', 'cantidadProductos');

        $contadorCategorias = DB::table('tipos')->count();

        if (strlen($request->tipoProducto) > 0 && $request->tipoProducto > 0 && $request->tipoProducto <= $contadorCategorias) {
            $productos = $productos->where('idTipo', $request->tipoProducto);
        }

        $productos = $productos->paginate(5);

        return Inertia::render('Administracion/ModificarProductos', [
            'productosPaginacion' => $productos
        ]);
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
