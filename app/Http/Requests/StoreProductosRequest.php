<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductosRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|min:5|max:50',
            'type' => 'required|integer|min:1',
            'barcode' => 'required|min:20|max:20',
            'quantity' => 'required|integer',
            'price' => 'required|integer',
            'distributor' => 'required|min:5|max:50'
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El nombre del producto es requerido',
            'name.min' => 'El nombre debe de ser de al menos :min caracteres',
            'name.nax' => 'El nombre debe de ser de al menos :maz caracteres',
            'type.min' => 'Debes de elegir un tipo',
            'barcode.required' => 'El codigo de barras es requerido',
            'barcode.min' => 'El codigo de barra debe de ser de al menos :min caracters',
            'barcode.max' => 'El codigo de barra debe de ser de 20 caracteres',
            'distributor.required' => 'El distribuidor del producto es requerido',
            'distributor.min' => 'El nombre del distribuidor debe de ser de al menos :min caracteres',
            'distributor.max' => 'El nombre del distribuidor debe de ser de maximo :max caracteres',
        ];
    }
}
