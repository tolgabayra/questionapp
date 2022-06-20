<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //

    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users|max:255',
            'password' => 'required|min:5',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json([
                'error' => $errors
            ], 400);
        }

        if ($validator->passes()) {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);
            $token = $user->createToken('auth_token')->plainTextToken;
        
            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
            ]);
        }

    }


    public function upload($id,Request $request){
        $validator = Validator::make($request->all(), 
        [ 
        'file' => 'required|mimes:png,jpg,jpeg|max:2048',
       ]);   

       if ($validator->fails()) {          
        return response()->json(['error'=>$validator->errors()], 401);                        
     }  


     if ($file = $request->file('file')) {
             
        //store file into document folder
        $path = $request->file->store('public/images');
        $name = $file->getClientOriginalName();

        //store your file into database
        $save = User::findOrFail($id);
        $save->image= $path;

        $save->update($request->all());
       

        return response()->json([
            "success" => true,
            "message" => "image successfully uploaded",
            "file" => $save
        ]);

    }
          

    }




public function login(Request $request)
{
    if (!Auth::attempt($request->only('email', 'password'))) {
        return response()->json([
            'message' => 'Invalid login details'
        ], 401);
    }
    $user = User::where('email', $request['email'])->firstOrFail();
    $token = $user->createToken('auth_token')->plainTextToken;
    return response()->json([
        'access_token' => $token,
        'user_id'=> $user->id,
        'token_type' => 'Bearer',
    ]);
}

public function logout(){
    auth()->user()->tokens()->delete();
    return [
        'message' => "User logged out!"
    ];
}

public function me(Request $request)
{
    return $request->user();
}

public function getimage($id){
    $user = User::findOrFail($id);
    
    return response($user->image)->header('Context-Type','image/png');




}


}

