<?php

namespace App\Http\Requests\User\Register;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|required_with:password_confirm|same:password_confirm',
//            'password' => 'required|string|confirmed', <- if the confirm field has name "password_confirmation"
            'password_confirm' => 'required|string',
        ];
    }
}
