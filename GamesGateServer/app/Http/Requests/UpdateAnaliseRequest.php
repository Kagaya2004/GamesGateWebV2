<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAnaliseRequest extends FormRequest
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
            'user_id' => 'exists:users,id',
            'jogo_id' => 'exists:jogos,id'
        ];
    }
    public function messages()
    {
        return [
            'user_id.exists' => 'O usuário não existe.',
            'jogo_id.exists' => 'O jogo não existe.'
        ];
    }
}
