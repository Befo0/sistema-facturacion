<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ventas extends Model
{
    protected $fillable = [
        'idSucursal',
        'idCajero',
        'fechaVenta',
        'totalVenta',
    ];
}
