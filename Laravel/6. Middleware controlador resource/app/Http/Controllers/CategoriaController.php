<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoriaController extends Controller
    
{
    /**
     * Display a listing of the resource.
     */

    public function __construct(){
        $this->middleware('product_token');
   
    }


    public function index()
    {
        $youtuber = "Jairo";
        $viajera = "Mila";

        return view ('index', compact('youtuber', 'viajera'));

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $value = 1;
        return 'creando cosas';
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
