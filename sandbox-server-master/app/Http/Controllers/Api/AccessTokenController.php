<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Exceptions\Api\AuthorizationException;
use App\Exceptions\Api\ResourceNotFoundException;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class to handle access token requests
 */
class AccessTokenController extends ApiController
{
    /**
     * Exchange an access token for the related credentials
     *
     * @return Response
     */
    public function postCollection(Request $request) : Response
    {
        $this->verify($request, [
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::authenticate($request->get('username'), $request->get('password'));

        return $this->respond([
            'access_token' => $user->refreshAccessToken()->token,
            'user' => [
                'uuid' => $user->uuid,
            ],
        ]);
    }

    /**
     * Delete (expire) the given token
     *
     * @return Response
     */
    public function deleteResource(Request $request, $hash) : Response
    {
        $user = $request->get('authenticated_user');

        $token = $user->getTokenByHash($hash);

        if (!$token)
        {
            throw new ResourceNotFoundException('User token ' . $hash);
        }

        if ($token->user_id !== $user->id)
        {
            throw new AuthorizationException;
        }

        $user->expireTokens();

        return $this->respond([]);
    }
}
