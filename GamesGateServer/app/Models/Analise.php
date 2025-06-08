<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Analise extends Model
{
    // Conecta com outros modelos
    public function User()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function Jogo()
    {
        return $this->belongsTo(Jogo::class, 'jogo_id');
    }
    
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'titulo',
        'curtidas',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        "created_at",
        "updated_at",
        "deleted_at",
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];
}
