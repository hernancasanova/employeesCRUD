<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 27 Nov 2018 12:01:43 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class User
 * 
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string $remember_token
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 *
 * @package App\Models
 */
class Employee extends Eloquent
{
	protected $hidden = [
		//'password',
		//'remember_token'
	];

	protected $fillable = [
		'first_name',
		'last_name',
		'email',
		'position',
		'address',
		//'password',
		//'remember_token'
	];
}
