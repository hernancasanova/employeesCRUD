<?php

namespace App\Exceptions\Api;

/**
 * Class to handle not owner entity errors
 */
class NotOwnerEntityException extends AuthorizationException
{
    /**
     * Construct the exception.
     *
     */
    public function __construct()
    {
        parent::__construct('User not allowed to modify entity context', ApiException::NOT_OWNER_ENTITY);
    }
}
