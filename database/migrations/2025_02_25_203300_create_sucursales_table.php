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
        Schema::create('sucursales', function (Blueprint $table) {
            $table->id();
            $table->string('nombreSucursal', 50);
            $table->timestamps();
        });

        DB::table('sucursales')->insert([
            ['nombreSucursal' => 'Santa Elena'],
            ['nombreSucursal' => 'Merliot'],
            ['nombreSucursal' => 'Escalon'],
        ]);

        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('idSucursal')->nullable();
            $table->foreign('idSucursal')->references('id')->on('sucursales');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sucursales');
    }
};
