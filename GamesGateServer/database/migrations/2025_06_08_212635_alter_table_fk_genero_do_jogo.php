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
        Schema::table('generos_do_jogo', function(Blueprint $table){
            $table->foreignId('jogo_id')
                ->contrained('jogos')
                ->onDelete('cascade');
            $table->foreignId('genero_id')
                ->contrained('generos')
                ->onDelete('cascade');
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
