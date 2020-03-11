<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Exceptions\Api\InvalidParametersException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Validator;

class ApiController extends Controller
{
    /**
     * Verify if the given request compliance the template rule
     *
     * @param Request $request   Request to check
     * @param array   $template  Template of rules
     * @return void
     */
    public function verify(Request $request, array $template)
    {
        $validator = Validator::make($request->all(), $template);

        if ($validator->fails())
        {
            $errors = [];

            foreach ($validator->errors()->toArray() as $key => $details)
            {
                $errors[$key] = implode('. ', $details);
            }

            throw new InvalidParametersException($errors);
        }
    }

    /**
     * Decorate data as a JSON response
     *
     * @param array   $data  Data to respond
     * @param integer $code  HTTP status Code
     * @return JsonResponse
     */
    public function respond(array $data, int $code = 200) : JsonResponse
    {
        return new JsonResponse($data, $code);
    }
}
