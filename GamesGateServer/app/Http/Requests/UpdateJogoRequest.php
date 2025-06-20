<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateJogoRequest extends FormRequest
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
        $id = $this->route('id');
        return [
            'nome' => 'string|max:255|unique:jogos,nome' .$id,
            'desenvolvedora_id' => 'integer|exists:desenvolvedoras,id',
            'dataLancamento' => 'date|date_format:Y-m-d',
        ];
    }

    public function messages(): array
    {
        return [
            'nome.string' => 'Nome deve ser uma string.',
            'nome.max' => 'Nome deve ter no máximo 255 caracteres.',
            'nome.unique' => 'Nome já está em uso',
            'desenvolvedora_id.exists' => 'A Desenvolvedora não existe.',
            'dataLancamento.date' => 'Data de Lançamento deve ser uma data válida.',
            'dataLancamento.date_format' => 'Data de Lançamento deve estar no formato Y-m-d.',
        ];
    }
}
