<?php

namespace App\Exceptions\Api;

/**
 * Class to handle invalid parameter exceptions
 */
class InvalidParametersException extends ApiException
{
    /**
     * @var array List of errors by [key => error description, ...]
     */
    protected $errors = [];

    /**
     * Construct the exception.
     *
     * @param string   $errors   List of parameter errors
     */
    public function __construct(array $errors)
    {
        $this->errors = $errors;

        parent::__construct('Invalid parameter(s)', ApiException::INVALID_PARAMETER);
    }

    /**
     * Get the error list
     *
     * @return array
     */
    public function getErrors() : array
    {
        return $this->errors;
    }

    /**
     * {@inheritDoc}
     */
    public function getHttpStatusCode() : int
    {
        return 400;
    }
}
