<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAnaliseRequest extends FormRequest
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
            'user_id' => 'required|integer|exists:users,id',
            'jogo_id' => 'required|integer|exists:jogos,id',
        ];
    }
    public function messages()
    {
        return [
            'user_id.required' => 'ID do Usuário obrigatório.',
            'user_id.integer' => 'ID do Usuário deve ser um número inteiro.',
            'user_id.exists' => 'O Usuário informado não existe.',
            'jogo_id.required' => 'ID do Jogo é obrigatório.',
            'jogo_id.integer' => 'ID do Jogo deve ser um número inteiro.',
            'jogo_id.exists' => 'O Jogo informado não existe.',
        ];
    }
}
