<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
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
            'nome' => 'string|max:255',
            'apelido' => 'string|max:255|unique:users,apelido,' . $id,
            'dataNascimento' => 'date|date_format:Y-m-d',
            'email' => 'email|max:255|unique:users,email,' . $id,
            'senha' => 'string|min:8|confirmed',
            'descricao'=>'nullable|string',
            'status' => 'nullable|string',
        ];
    }
    public function messages(): array
    {
        return [
            'nome.string' => 'Nome deve ser uma string.',
            'nome.max' => 'Nome deve ter no máximo 255 caracteres.',
            'apelido.string' => 'Apelido deve ser uma string.',
            'apelido.max' => 'Apelido deve ter no máximo 255 caracteres.',
            'apelido.unique' => 'Apelido já está em uso.',
            'dataNascimento.date' => 'Data de Nascimento deve ser uma data válida.',
            'dataNascimento.date_format' => 'Data de Nascimento deve estar no formato Y-m-d.',
            'email.email' => 'Email deve ser um endereço de e-mail válido.',
            'email.max' => 'Email deve ter no máximo 255 caracteres.',
            'email.unique' => 'Email já está em uso.',
            'senha.string' => 'Senha deve ser uma string.',
            'senha.min' => 'Senha deve ter pelo menos 8 caracteres.',
            'senha.confirmed' => 'A confirmação da senha não corresponde.',
            'descricao.string' => 'Descrição deve ser uma string.',
            'status.string' => 'Status deve ser uma string.',
        ];
    }
}
