<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AgencyController;
use App\Http\Controllers\AozoraController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/welcome', function () {
//     return view('welcome');
// });

// Route::get('/welcome', function () {
//     return view('email.agency_email_send')
//                         ->with([
//                             'id' => '3',
//                             'status' => 'pending',
//                             'message' => 'afwefawefaweawef',
//                             'transaction_con' => 'awfeawefawefawefawe',
//                             'deposit_amount' => 'gawleiuhawlefiuawehlfiauwehf'
//                         ]);
// });

Route::get('/user/agency/accept/{id}', [AgencyController::class, 'accept']);
Route::get('/user/agency/reject/{id}', [AgencyController::class, 'reject']);

Route::get('/gift', 'App\Http\Controllers\GiftController@index')->name('gift');
Route::get('/gmo/auth', 'App\Http\Controllers\AozoraController@auth')->name('gmoauth');
Route::get('/gmo/dev', 'App\Http\Controllers\AozoraController@dev')->name('gmodev');
Route::get('/gmo/prod', 'App\Http\Controllers\AozoraController@prod')->name('gmoprod');
Route::get('/gmo/account', 'App\Http\Controllers\AozoraController@getaccount')->name('gmoaccount');
Route::get('/gmo/account/balance', 'App\Http\Controllers\AozoraController@getbalance')->name('gmobalance');
Route::get('/gmo/refresh', 'App\Http\Controllers\AozoraController@refresh')->name('gmorefresh');

