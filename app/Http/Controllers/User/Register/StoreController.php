<?php

namespace App\Http\Controllers\User\Register;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\Register\StoreRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();

        $data['password'] = Hash::make($data['password']);

        $user = User::create($data);

        $token = auth()->tokenById($user->id);

        return response(['access_token' => $token]);
    }
}
