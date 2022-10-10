<?php

use App\Http\Controllers\API\FaqsController;
use App\Http\Controllers\API\HeroSpotlightController;
use App\Http\Controllers\API\MacMemberController;
use App\Http\Controllers\API\SupportStatementController;
use App\Http\Controllers\API\TeamMemberController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/team-members', [TeamMemberController::class, 'index']);
Route::post('/team-member/store', [TeamMemberController::class, 'store']);
Route::get('/mac-members', [MacMemberController::class, 'index']);
Route::get('/hero-spotlights', [HeroSpotlightController::class, 'index']);
Route::get('/support-statements', [SupportStatementController::class, 'index']);
Route::post('/support-statement/store', [SupportStatementController::class, 'store']);
Route::get('/faqs', [FaqsController::class, 'index']);