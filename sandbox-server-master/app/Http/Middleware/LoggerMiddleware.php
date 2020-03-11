<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Log;

class LoggerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        $headers = array_map(function($header){ return $header[0]; }, $request->headers->all());

        Log::debug('LOG request', [
            'request' => $request->getContent(),
            'headers' => $headers,
        ]);

        return $next($request);
    }
}
