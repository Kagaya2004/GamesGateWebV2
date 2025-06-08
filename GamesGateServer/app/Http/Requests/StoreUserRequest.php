<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'nome'=>'required|string|max:255',
            'apelido'=>'sometimes|required|string|max:255|unique:users,apelido',
            'email'=>'required|email|string|max:255|unique:users,email',
            'dataNascimento'=>'sometimes|nullable|date',
            'senha'=>'sometimes|required|string|min:6',
            'descricao'=>'sometimes|nullable|string',
            'status' => 'sometimes|nullable|string',
        ];
    }
    public function messages()
    {
        return [
            'nome.required' => 'Nome obrigatório.',
            'nome.string' => 'Nome deve ser uma string.',
            'nome.max' => 'Nome não pode ter mais de 255 caracteres.',
            'apelido.required' => 'Apelido obrigatório.',
            'apelido.string' => 'Apelido deve ser uma string.',
            'apelido.max' => 'Apelido não pode ter mais de 255 caracteres.',
            'email.required' => 'Email obrigatório.',
            'email.email' => 'Email deve ter um endereço válido.',
            'email.string' => 'Email deve ser uma string.',
            'email.max' => 'Email não pode ter mais de 255 caracteres.',
            'dataNascimento.date' => 'Data de Nascimento deve ser uma data válida.',
            'senha.required' => 'Senha obrigatória.',
            'senha.string' => 'Senha deve ser uma string.',
            'senha.min' => 'Senha deve ter pelo menos 6 caracteres.',
            'descricao.string' => 'Descrição deve ser uma string.',
            'status.string' => 'Status deve ser uma string.'
        ];
    }
}