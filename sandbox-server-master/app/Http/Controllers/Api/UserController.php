<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Repository\UserRepository;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class to handle access token requests
 */
class UserController extends ApiController
{
    /**
     * Create an user
     *
     * @return Response
     */
    public function postCollection(Request $request) : Response
    {
        $this->verify($request, [
            'name' => 'required|string',
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = UserRepository::add($request->all());

        return $this->respond([
            'data' => [
                'user' => $user->toArray(),
            ],
        ]);
    }

    /**
     * List users
     *
     * @return Response
     */
    public function getCollection(Request $request) : Response
    {
        $users = User::orderBy('name', 'asc')->get();

        return $this->respond([
            'data' => [
                'users' => $users->toArray(),
            ],
        ]);
    }

    /**
     * Update an user
     *
     * @return Response
     */
    public function patchResource(Request $request, $userId) : Response
    {
        $this->verify($request, [
            'name' => 'string',
            'email' => 'string',
            'password' => 'string',
        ]);

        $user = UserRepository::update($userId, $request->all());

        return $this->respond([
            'data' => [
                'user' => $user->toArray(),
            ],
        ]);
    }

    /**
     * Delete an user
     *
     * @return Response
     */
    public function deleteResource(Request $request, $userId) : Response
    {
        UserRepository::delete($userId);

        return $this->respond([
            'data' => [],
        ]);
    }

    /**
     * Get an user
     *
     * @return Response
     */
    public function getResource(Request $request, $userId) : Response
    {
        return $this->respond([
            'data' => [
                'user' => UserRepository::get($userId)->toArray(),
            ],
        ]);
    }
}
