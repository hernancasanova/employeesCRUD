<?php

namespace App\Util;

use Closure;
use InvalidArgumentException;

/**
 * Helper Class to handle validations
 * @author Gustavo Delgado <gustavo@onecore.cl>
 */
trait ValidatorTrait
{
    /**
	 * Validate the given options against a set of fixed fields
	 *
	 * @param array $required  List of required fields
	 * @param array $input     Input data
	 * @return void
	 */
    public function required(array $required, array $input, Closure $exceptionHandler = null)
    {
        foreach ($required as $req)
        {
            if (!array_key_exists($req, $input) || $input[$req] === '' || $input[$req] === null || !isset($input[$req]))
            {
                if ($exceptionHandler)
                {
                    return $exceptionHandler($req);
                }

                throw new InvalidArgumentException('Required field ' . $req);
            }
        }
	}
}