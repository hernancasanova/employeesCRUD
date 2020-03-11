<?php

namespace App\Http\Controllers\API;

//use App\Models\Employee;
use App\Models\Employee;
use App\Repository\EmployeeRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class EmployeeController extends ApiController
{
     /**
     * Create an user
     *
     * @return Response
     */
    public function postCollection(Request $request) : Response
    {
        $this->verify($request, [
            'first_name' => 'required|string',
            'email' => 'required|string',
        ]);

        $employee = EmployeeRepository::add($request->all());

        return $this->respond([
            'data' => [
                'employee' => $employee->toArray(),
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
        $employee = Employee::orderBy('first_name', 'asc')->get();

        return $this->respond([
            'data' => [
                'employees' => $employee->toArray(),
            ],
        ]);
    }

    /**
     * Update an user
     *
     * @return Response
     */
    public function patchResource(Request $request, $employeeId) : Response
    {
        $this->verify($request, [
            'first_name' => 'string',
            'email' => 'string',
        ]);

        $employee = EmployeeRepository::update($employeeId, $request->all());

        return $this->respond([
            'data' => [
                'employee' => $employee->toArray(),
            ],
        ]);
    }

    /**
     * Delete an user
     *
     * @return Response
     */
    public function deleteResource(Request $request, $employeeId) : Response
    {
        EmployeeRepository::delete($employeeId);

        return $this->respond([
            'data' => [],
        ]);
    }

    /**
     * Get an user
     *
     * @return Response
     */
    public function getResource(Request $request, $employeeId) : Response
    {
        return $this->respond([
            'data' => [
                'employee' => EmployeeRepository::get($employeeId)->toArray(),
            ],
        ]);
    }
}
