<?php

namespace App\Http\Middleware;

use App\Models\Token;
use App\Exceptions\Api\AuthorizationException;
use App\Exceptions\Api\ExpiredTokenException;
use Closure;
use DateTimeImmutable;

class AccessTokenMiddleware
{
    const ACCESS_TOKEN_HEADER = 'x-access-token';
    const ACCESS_TOKEN_TYPE = 'access';

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$request->headers->has(self::ACCESS_TOKEN_HEADER))
        {
            throw new AuthorizationException;
        }

        $token = Token::where('token', $request->header(self::ACCESS_TOKEN_HEADER))
            ->where('type', self::ACCESS_TOKEN_TYPE)
            ->firstOrFail();

        $expirationDt = new DateTimeImmutable($token->expire_dt);
        $now = new DateTimeImmutable('now UTC');

        if ($expirationDt < $now)
        {
            throw new ExpiredTokenException;
        }

        $token->expire_dt = $expirationDt->modify('+2 weeks')->format('Y-m-d H:i:s');
        $token->save();

        $request->attributes->add(['authenticated_user' => $token->user]);

        return $next($request);
    }
}
