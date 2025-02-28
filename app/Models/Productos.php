<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{

    protected $fillable = [
        'codigoBarra',
        'nombreProducto',
        'distribuidor',
        'precioProducto',
        'cantidadProductos',
        'idTipo'
    ];
    //
}
