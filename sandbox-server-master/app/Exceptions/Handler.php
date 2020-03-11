<?php

namespace App\Exceptions;

use App\Exceptions\Api\ApiException;
use App\Exceptions\Api\InvalidParametersException;
use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if ($exception instanceof ApiException)
        {
            $data = [
                'error' => true,
                'code' => $exception->getCode(),
                'message' => $exception->getMessage(),
                'details' => null,
            ];

            if ($exception instanceof InvalidParametersException)
            {
                $data['details'] = $exception->getErrors();
            }

            return new JsonResponse($data, $exception->getHttpStatusCode());
        }

        if ($exception instanceof ModelNotFoundException)
        {
            if (strpos($request->path(), 'api/') >= 0)
            {
                $modelName = str_replace("App\\Models\\", "", $exception->getModel());

                return new JsonResponse([
                    'error' => true,
                    'code' => ApiException::RESOURCE_NOT_FOUND,
                    'message' => 'Related ' . $modelName . ' it\'s not a valid resource',
                    'details' => null,
                ], 404);
            }
        }

        return parent::render($request, $exception);
    }
}
