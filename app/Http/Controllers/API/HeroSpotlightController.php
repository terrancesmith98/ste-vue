<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\HeroSpotlight;
use Illuminate\Http\Request;

class HeroSpotlightController extends Controller
{
    public function index()
    {
        return HeroSpotlight::all();
    }
}