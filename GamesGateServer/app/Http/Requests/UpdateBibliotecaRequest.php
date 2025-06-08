<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBibliotecaRequest extends FormRequest
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
            'quantidadeJogos' => 'integer',
            'user_id' => 'exists:users,id' .$id,
        ];
    }
    public function messages()
    {
        return [
            'quantidadeJogos.integer' => 'Quantidade de Jogs deve ser um número inteiro.',
            'user_id.exists' => 'O Usuário não existe.',
        ];
    }
}
