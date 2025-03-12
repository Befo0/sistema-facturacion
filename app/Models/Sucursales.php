<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sucursales extends Model
{
    public function User(): HasMany
    {
        return $this->hasMany(User::class, 'idSucursal');
    }
}
