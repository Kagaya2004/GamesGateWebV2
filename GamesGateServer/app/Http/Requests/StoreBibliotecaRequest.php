<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBibliotecaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
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
            'quantidadeJogos' => 'required|integer',
            'user_id' => 'required|integer|exists:users,id',
        ];
    }
    public function messages()
    {
        return [
            'user_id.required' => 'ID do Usuário obrigatório.',
            'user_id.integer' => 'ID do Usuário deve ser um número inteiro.',
            'user_id.exists' => 'Usuário não existe.',
            'quantidadeJogos.integer' => 'Quantidade de Jogos deve ser um número inteiro.',
        ];
    }
}
