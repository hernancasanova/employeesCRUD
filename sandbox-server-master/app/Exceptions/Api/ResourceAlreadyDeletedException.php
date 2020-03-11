<?php

namespace App\Exceptions\Api;

/**
 * Class to handle duplicated resources
 */
class ResourceAlreadyDeletedException extends ApiException
{
    /**
     * Construct the exception.
     *
     * @param string   $resource   Resource identifier
     */
    public function __construct(string $resource)
    {
        parent::__construct('Resource already deleted for ' . $resource, ApiException::RESOURCE_ALREADY_DELETED);
    }

    /**
     * {@inheritDoc}
     */
    public function getHttpStatusCode() : int
    {
        return 409;
    }
}
