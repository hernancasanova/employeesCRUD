<?php

namespace App\Repository;

use App\Models\User;

/**
 * Class to handle Users
 * @author Gustavo Delgado <gustavo@onecore.cl>
 */
class UserRepository
{
    /**
     * Creates a new user
     *
     * @param array $data  User data
     * @return User
     */
    public static function add(array $data) : User
    {
        return User::create($data + ['created_at' => gmdate('Y-m-d H:i:s')]);
    }

    /**
     * Updates an user
     *
     * @param integer $userId   User id
     * @param array   $data     User data
     * @return User
     */
    public static function update(int $userId, array $data) : User
    {
        User::where('id', $userId)->firstOrFail()->update($data + ['updated_at' => gmdate('Y-m-d H:i:s')]);

        return User::where('id', $userId)->firstOrFail();
    }

    /**
     * Delete an existing user
     *
     * @param integer $userId
     * @return void
     */
    public static function delete(int $userId)
    {
        User::where('id', $userId)->firstOrFail()->delete();
    }

    /**
     * Get an existing user
     *
     * @param integer $userId
     * @return void
     */
    public static function get(int $userId)
    {
        return User::where('id', $userId)->firstOrFail();
    }
}