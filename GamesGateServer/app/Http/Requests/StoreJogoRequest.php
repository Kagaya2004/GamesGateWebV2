<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJogoRequest extends FormRequest
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
            'nome' => 'required|string|max:255|unique:jogos,nome',
            'descricao' => 'required|string',
            'dataLancamento' => 'required|date',
            'desenvolvedora_id' => 'required|integer|exists:desenvolvedoras,id',
        ];
    }
    public function messages()
    {
        return [
            'nome.required' => 'Nome obrigatório.',
            'nome.string' => 'Nome deve ser uma string.',
            'nome.max' => 'Nome não pode ter mais de 255 caracteres.',
            'descricao.required' => 'Descrição obrigatória.',
            'descricao.string' => 'Descrição deve ser uma string.',
            'dataLancamento.date' => 'Data de Lançamento deve ser uma data válida.',
            'desenvolvedora_id.required' => 'ID da Desenvolvedora obrigatório.',
            'desenvolvedora_id.integer' => 'ID da Desenvolvedora deve ser um número inteiro.',
            'desenvolvedora_id.exists' => 'Desenvolvedora informada não existe.',
        ];
    }
}
