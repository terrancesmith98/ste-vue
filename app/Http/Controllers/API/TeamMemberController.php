<?php

namespace App\Http\Controllers\API;

use App\Models\TeamMember;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TeamMemberController extends Controller
{
    public function index()
    {
        return TeamMember::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'title' => 'required',
            // 'bio', 'required',
            // 'image', 'required'
        ]);


        $member = TeamMember::make();
        $member->first_name = $data['first_name'];
        $member->last_name = $data['last_name'];
        $member->title = $data['title'];
        $member->bio = $request['bio'];
        $member->image = $request['image'];

        $member->save();

        return $member;
    }
}