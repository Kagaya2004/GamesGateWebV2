<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDesenvolvedoraRequest extends FormRequest
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
            'nome'=>'required|string|max:255|unique:desenvolvedoras,nome',
            'email'=>'required|email|string|max:255|unique:desenvolvedoras,email',
            'senha'=>'sometimes|required|string|min:6',
            'descricao'=>'sometimes|nullable|string',
            'site' => 'sometimes|nullable|string',
            'pais' => 'sometimes|nullable|string',
        ];
    }

    public function messages()
    {
        return [
            'nome.required' => 'Nome obrigatório.',
            'nome.string' => 'Nome deve ser uma string.',
            'nome.max' => 'Nome não pode ter mais de 255 caracteres.',
            'descricao.required' => 'Descrição obrigatório.',
            'descricao.string' => 'Descrição deve ser uma string.',
            'email.required' => 'Email obrigatório.',
            'email.email' => 'Email deve ter um endereço válido.',
            'email.max' => 'Email não pode ter mais de 255 caracteres',
            'pais.required' => 'Pais obrigatório.',
            'pais.string' => 'Pais deve ser uma string.',
            'site.required' => 'Site obrigatório.',
            'site.string' => 'Site deve ser uma string.',
            'senha.required' => 'Senha obrigatória.',
            'senha.string' => 'Senha deve ser uma string.',
        ];
    }
}
