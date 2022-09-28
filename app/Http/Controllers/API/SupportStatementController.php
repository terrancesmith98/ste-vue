<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\SupportStatement;
use Illuminate\Http\Request;

class SupportStatementController extends Controller
{
    public function index()
    {
        return SupportStatement::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([]);

        $statement = new SupportStatement();
        $statement->review = $data["review"];
        $statement->signature = $data["signature"];

        $statement->save();

        return $statement;
    }
}