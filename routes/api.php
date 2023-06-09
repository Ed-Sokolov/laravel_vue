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

Route::group(['namespace' => 'User'], function () {
    Route::group(['namespace' => 'Register', 'prefix' => 'auth'], function () {
        Route::post('register', 'StoreController')->name('auth.register.store');
    });
});

Route::group(['namespace' => 'Post', 'prefix' => 'posts'], function () {
    Route::get('', 'IndexController')->name('posts.index');
    Route::post('', 'StoreController')->name('posts.store');
    Route::get('/{post}', 'ShowController')->name('posts.show');
    Route::patch('/{post}', 'UpdateController')->name('posts.update');
    Route::delete('/{post}', 'DestroyController')->name('posts.destroy');
});
