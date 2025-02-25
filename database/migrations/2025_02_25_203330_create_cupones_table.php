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
        Schema::create('cupones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idProducto');
            $table->unsignedBigInteger('idEstado');
            $table->dateTime('fechaVencimiento');
            $table->timestamps();

            $table->foreign('idProducto')->references('id')->on('productos');
            $table->foreign('idEstado')->references('id')->on('estado');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cupones');
    }
};
