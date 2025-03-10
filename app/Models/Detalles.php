<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Detalles extends Model
{
    protected $fillable = [
        'idVenta',
        'idProducto',
        'cantidad'
    ];
}
