<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CommentController extends Controller
{

    public function index()
    {
        return response()->json(Comment::all());
    }

    public function create(Request $request)
    {
        $comment = Comment::create($request->all());
        return response()->json($comment, Response::HTTP_CREATED);
    }

 

    public function show($id)
    {
        return response()->json(Comment::find($id));
    }

 
    public function update($id, Request $request)
    {
        $comment = Comment::findOrFail($id);
        $comment = update($request->all());

        return response()->json($comment, Response::HTTP_OK);
    }

    public function destroy($id)
    {
        Comment::findOrFail($id)->delete();
        return response("Post has been deleted...", Response::HTTP_OK);
    }
}
