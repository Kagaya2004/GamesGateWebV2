<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAvaliacaoRequest extends FormRequest
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
            'descricao' => 'required|string',
            'analise_id' => 'exists:analise,id',
        ];
    }
    public function messages()
    {
        return [
            'descricao.required' => 'Descrição obrigatório.',
            'descricao.string' => 'Descrição deve ser uma string.',
            'analise_id.required' => 'ID da Análise é obrigatório.',
            'analise_id.integer' => 'ID da Análise deve ser um número inteiro.',
            'analise_id.exists' => 'A Análise informada não existe.',
        ];
    }
}
