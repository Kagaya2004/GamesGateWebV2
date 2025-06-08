<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDesenvolvedoraRequest extends FormRequest
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
            'nome' => 'string|max:255|unique:desenvolvedoras,nome,' . $id,
            'email' => 'email|max:255|unique:desenvolvedoras,email,' . $id,
            'password' => 'string|min:8|confirmed',
            'site' => 'string',
            'pais' => 'string',
            'descricao' => 'string',
        ];
    }
    public function messages()
    {
        return [
            'nome.string' => 'Nome deve ser uma string.',
            'nome.max' => 'Nome deve ter no máximo 255 caracteres.',
            'nome.unique' => 'Nome já está em uso.',
            'email.email' => 'Email deve ser um endereço de e-mail válido.',
            'email.max' => 'O campo email deve ter no máximo 255 caracteres.',
            'email.unique' => 'O campo email já está em uso.',
            'senha.string' => 'Senha deve ser uma string.',
            'senha.min' => 'Senha deve ter pelo menos 8 caracteres.',
            'senha.confirmed' => 'A confirmação da senha não corresponde.',
            'site.string' => 'Site deve ser uma string.',
            'pais.string' => 'País deve ser uma string.',
            'descricao.string' => 'Descrição deve ser uma string.',
        ];
    }
}
