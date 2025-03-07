<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('estado', function (Blueprint $table) {
            $table->id();
            $table->string('nombreEstado', 50);
            $table->timestamps();
        });

        DB::table('estado')->insert([
            ['nombreEstado' => 'Inactivo'],
            ['nombreEstado' => 'Activo'],
            ['nombreEstado' => 'Usado'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
