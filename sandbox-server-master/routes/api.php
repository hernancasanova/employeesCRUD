<?php

Route::get('/user', 'Api\UserController@getCollection');
Route::post('/user', 'Api\UserController@postCollection');
Route::patch('/user/{user_id}', 'Api\UserController@patchResource');
Route::delete('/user/{user_id}', 'Api\UserController@deleteResource');
Route::get('/user/{user_id}', 'Api\UserController@getResource');


Route::get('/employee', 'Api\EmployeeController@getCollection');
Route::post('/employee', 'Api\EmployeeController@postCollection');
Route::patch('/employee/{employee_id}', 'Api\EmployeeController@patchResource');
Route::delete('/employee/{employee_id}', 'Api\EmployeeController@deleteResource');
Route::get('/employee/{employee_id}', 'Api\EmployeeController@getResource');

