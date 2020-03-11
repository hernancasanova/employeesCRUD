<?php

namespace App\Repository;

//use App\Models\Employee;
use App\Models\Employee;

/**
 * Class to handle Users
 * @author Gustavo Delgado <gustavo@onecore.cl>
 */
class EmployeeRepository
{
    /**
     * Creates a new user
     *
     * @param array $data  User data
     * @return User
     */
    public static function add(array $data) : Employee
    {
        return Employee::create($data + ['created_at' => gmdate('Y-m-d H:i:s')]);
    }

    /**
     * Updates an user
     *
     * @param integer $userId   User id
     * @param array   $data     User data
     * @return User
     */
    public static function update(int $employeeId, array $data) : Employee
    {
        Employee::where('id', $employeeId)->firstOrFail()->update($data + ['updated_at' => gmdate('Y-m-d H:i:s')]);

        return Employee::where('id', $employeeId)->firstOrFail();
    }

    /**
     * Delete an existing user
     *
     * @param integer $userId
     * @return void
     */
    public static function delete(int $employeeId)
    {
        Employee::where('id', $employeeId)->firstOrFail()->delete();
    }

    /**
     * Get an existing user
     *
     * @param integer $userId
     * @return void
     */
    public static function get(int $employeeId)
    {
        return Employee::where('id', $employeeId)->firstOrFail();
    }
}