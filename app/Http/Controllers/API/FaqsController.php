<?php

namespace App\Http\Controllers\API;

use App\Models\Faq;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FaqsController extends Controller
{
    public function index()
    {
        return Faq::all();
    }
}