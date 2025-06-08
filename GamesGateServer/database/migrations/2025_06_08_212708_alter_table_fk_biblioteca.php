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
        Schema::table('bibliotecas', function(Blueprint $table){
            $table->foreignId('user_id')
                ->contrained('users')
                ->onDelete('cascade');
            $table->foreignId('jogo_id')
                ->contrained('jogos')
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
