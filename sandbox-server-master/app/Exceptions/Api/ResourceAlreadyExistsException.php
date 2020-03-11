<?php

namespace App\Exceptions\Api;

/**
 * Class to handle duplicated resources
 */
class ResourceAlreadyExistsException extends ApiException
{
    /**
     * Construct the exception.
     *
     * @param string   $resource   Resource identifier
     */
    public function __construct(string $resource)
    {
        parent::__construct('Resource already exists for ' . $resource, ApiException::RESOURCE_ALREADY_EXISTS);
    }

    /**
     * {@inheritDoc}
     */
    public function getHttpStatusCode() : int
    {
        return 409;
    }
}
