<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJogoNaBibliotecaRequest extends FormRequest
{
    /**
     * Determine if the biblioteca is authorized to make this request.
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
            'biblioteca_id' => 'required|integer|exists:biblioteca,id',
            'jogo_id' => 'required|integer|exists:jogo,id',
        ];
    }
    public function messages()
    {
        return [
            'genero_id.required' => 'ID do Bibilioteca obrigatório.',
            'genero_id.integer' => 'ID do Bibilioteca deve ser um número inteiro.',
            'genero_id.exists' => 'O Bibilioteca informada não existe.',
            'jogo_id.required' => 'ID do Jogo é obrigatório.',
            'jogo_id.integer' => 'ID do Jogo deve ser um número inteiro.',
            'jogo_id.exists' => 'O Jogo informado não existe.',
        ];
    }
}