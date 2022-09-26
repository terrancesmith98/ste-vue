<?php

namespace App\Http\Controllers\API;

use App\Models\MacMember;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MacMemberController extends Controller
{
    public function index()
    {
        return MacMember::all();
    }
}