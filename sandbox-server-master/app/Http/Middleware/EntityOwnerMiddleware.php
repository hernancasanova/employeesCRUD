<?php

namespace App\Http\Middleware;

use App\Exceptions\Api\NotOwnerEntityException;
use Closure;

class EntityOwnerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$request->get('authenticated_user')->ownEntity($request->route('entity_id')))
        {
            throw new NotOwnerEntityException;
        }

        return $next($request);
    }
}
