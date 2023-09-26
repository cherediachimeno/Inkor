<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class product_token
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->type != 2) {
            return response()->json('Please enter valid type');
        }
        return response()->json('OK. You are here');
           //return response()->view('welcome');}
            //return redirect(action ([CategoriaController::class, 'index']));}
    }
}
