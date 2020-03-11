<?php

namespace App\Exceptions\Api;

/**
 * Class to handle max constraint
 */
class MaxAllowedReachedException extends ApiException
{
    /**
     * Construct the exception.
     *
     */
    public function __construct(string $resource)
    {
        parent::__construct('Max allowed reached for ' . $resource, ApiException::MAX_ALLOWED_REACHED);
    }

    /**
     * {@inheritDoc}
     */
    public function getHttpStatusCode() : int
    {
        return 403;
    }
}
