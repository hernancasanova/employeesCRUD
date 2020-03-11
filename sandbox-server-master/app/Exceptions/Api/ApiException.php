<?php

namespace App\Exceptions\Api;

use Exception;

/**
 * Class to group API specific exceptions
 */
abstract class ApiException extends Exception
{
    const INTERNAL_ERROR = 1;
    const COLLECTION_NOT_FOUND = 2;
    const RESOURCE_NOT_FOUND = 3;
    const INVALID_PARAMETER = 4;
    const AUTH_FAILURE = 5;
    const AUTHORIZATION_INVALID = 6;
    const TOKEN_INVALID = 7;
    const TOKEN_EXPIRED = 8;
    const RESOURCE_ALREADY_EXISTS = 9;
    const MAX_ALLOWED_REACHED = 10;
    const RESOURCE_ALREADY_DELETED = 11;
    const NOT_OWNER_ENTITY = 12;

    /**
     * Get status code
     *
     * @return int
     */
    public function getHttpStatusCode() : int
    {
        return 500;
    }
}
