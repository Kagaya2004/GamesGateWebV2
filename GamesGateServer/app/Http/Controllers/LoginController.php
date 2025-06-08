<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Desenvolvedora;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function loginUsuario(Request $request){
        $email = $request->email;
        $password = $request->password;
        $user = User::where('email', $email )->first();

        if (!$user){
            return response()->json([
                'message'=>'Email não encontrado',
            ]);
        }

        if (!Hash::check($password, $user->password)){
            return response()->json([
                'message'=>'Senha do usuário inválida',
            ]);
        }

        $token = $user->createToken($user->name)->plainTextToken();

        return response()->json([
            'email'=>$email,
            'token'=>$token,
        ]);
    }

    public function loginDesenvolvedora(Request $request){
        $email = $request->email;
        $password = $request->password;
        $user = User::where('email', $email )->first();

        if (!$user){
            return response()->json([
                'message'=>'Email não encontrado',
            ]);
        }

        if (!Hash::check($password, $user->password)){
            return response()->json([
                'message'=>'Senha do usuário inválida',
            ]);
        }

        $token = $user->createToken($user->name)->plainTextToken();

        return response()->json([
            'email'=>$email,
            'token'=>$token,
        ]);
    }
}