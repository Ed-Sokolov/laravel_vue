<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::group(['namespace' => 'Post', 'prefix' => 'posts', 'middleware' => 'jwt.auth'], function () {
    Route::get('', 'IndexController');
    Route::post('', 'StoreController');
    Route::get('/{post}', 'ShowController');
    Route::patch('/{post}', 'UpdateController');
    Route::delete('/{post}', 'DestroyController');
});

Route::group(['namespace' => 'User'], function () {
    Route::group(['namespace' => 'Register', 'prefix' => 'auth'], function () {
        Route::post('register', 'StoreController');
    });
});


