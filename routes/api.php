<?php

//use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
/** 
**Basic Routes for a RESTful service: 
**Route::get($uri, $callback); 
**Route::post($uri, $callback); 
**Route::put($uri, $callback); 
**Route::delete($uri, $callback); 
** 
*/
Route::get('products', [ProductsController::class, 'index']);
Route::get('products/{product}', [ProductsController::class, 'show']);
Route::post('products',[ProductsController::class, 'store']);
Route::put('products/{product}',[ProductsController::class, 'update']);
Route::delete('products/{product}', [ProductsController::class, 'delete']);
