<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
   
    public function index()
    {
        //$data = Post::join("users","users.id","=","posts.id")->get();
        

        return response()->json(Post::with('user')->get());
    }

    public function create(Request $request)
    {
        $post = Post::create($request->all());
        return response()->json($post, Response::HTTP_CREATED);
    }   

   
    public function show($id)
    {
        return response()->json(Post::find($id));
    }
   
     
    public function update($id, Request $request)
    {
        $post = Post::findOrFail($id);
        $post->update($request->all());

        return response()->json($post, Response::HTTP_OK);

    }

    public function destroy($id)
    {
        Post::findOrFail($id)->delete();
        return response("Post has been deleted...", Response::HTTP_OK);
    }
}
