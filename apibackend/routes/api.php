<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|----------------------------------
----------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

 Route::post('/register', [AuthController::class,'register']);
 Route::post('/login', [AuthController::class,'login']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class,'me']);
    Route::post('/logout', [AuthController::class,'logout']);
    Route::post('/upload/{id}', [AuthController::class,'upload']);

});

Route::get('/getimage/{id}', [AuthController::class,'getimage']);

Route::controller(CommentController::class)->group(function () {
    Route::get('comment/index', 'index');
    Route::post('comment/create', 'create');
    Route::post('comment/show', 'show');
    Route::post('comment/update', 'update');
});
Route::controller(LikeController::class)->group(function () {
    Route::post('like/show', 'show');
    Route::post('like/update', 'update');
});
Route::post('/like/create', [LikeController::class,'create']);
Route::get('/like/index', [LikeController::class,'index']);




Route::get('/post/index', [PostController::class,'index']);
Route::post('/post/create', [PostController::class,'create']);
Route::get('/post/show/{id}', [PostController::class,'show']);
Route::put('/post/update/{id}', [PostController::class,'update']);
Route::delete('/post/destroy/{id}', [PostController::class,'destroy']);


 
 

 
