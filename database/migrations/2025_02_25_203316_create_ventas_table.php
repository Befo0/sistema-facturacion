<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ventas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idSucursal');
            $table->unsignedBigInteger('idCajero');
            $table->dateTime('fechaVenta');
            $table->decimal('totalVenta');
            $table->timestamps();

            $table->foreign('idSucursal')->references('id')->on('sucursales');
            $table->foreign('idCajero')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ventas');
    }
};
