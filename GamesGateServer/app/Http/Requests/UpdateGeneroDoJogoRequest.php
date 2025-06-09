<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateGeneroDoJogoRequest extends FormRequest
{
    /**
     * Determine if the genero is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'genero_id' => 'integer|exists:generos,id',
            'jogo_id' => 'integer|exists:jogos,id',
        ];
    }
    public function messages()
    {
        return [
            'genero_id.exists' => 'O Gênero informado não existe.',
            'jogo_id.exists' => 'O Jogo informado não existe.',
        ];
    }
}