<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateJogoNaBibliotecaRequest extends FormRequest
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
            'biblioteca_id' => 'required|integer|exists:bibliotecas,id',
            'jogo_id' => 'required|integer|exists:jogos,id',
        ];
    }
    public function messages()
    {
        return [
            'biblioteca_id.exists' => 'A Biblioteca informada não existe.',
            'jogo_id.exists' => 'O Jogo informado não existe.',
        ];
    }
}