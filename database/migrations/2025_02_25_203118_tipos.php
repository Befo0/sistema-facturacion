<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tipos', function (Blueprint $table) {
            $table->id();
            $table->string('nombreTipo', 50);
            $table->timestamps();
        });

        DB::table('tipos')->insert([
            ['nombreTipo' => 'Cupones'],
            ['nombreTipo' => 'Frutas'],
            ['nombreTipo' => 'Carnes'],
            ['nombreTipo' => 'Lacteos'],
            ['nombreTipo' => 'Panaderia'],
            ['nombreTipo' => 'Congelados'],
            ['nombreTipo' => 'Bebidas'],
            ['nombreTipo' => 'Conservas'],
            ['nombreTipo' => 'Snacks'],
            ['nombreTipo' => 'Limpieza'],
            ['nombreTipo' => 'Mascotas'],
            ['nombreTipo' => 'Belleza'],
            ['nombreTipo' => 'Organicos'],

        ]);

        Schema::table('productos', function (Blueprint $table) {
            $table->unsignedBigInteger('idTipo');
            $table->foreign('idTipo')->references('id')->on('tipos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
