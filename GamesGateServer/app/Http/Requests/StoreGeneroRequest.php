<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGeneroRequest extends FormRequest
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
            'nome' => 'required|string|max:255|unique:generos,nome',
            'descricao' => 'required|string:',
        ];
    }
    function messages()
    {
        return [
            'nome.required' => 'Nome obrigatório.',
            'nome.string' => 'Nome deve ser uma string.',
            'nome.max' => 'Nome não pode ter mais de 255 caracteres.',
        ];
    }
}