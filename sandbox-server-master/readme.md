## Sandbox server

- `composer install`
- `copy .env.example to .env`
- replace database values with your local settings
- (optional if you already have a database)
	- generate migrations https://github.com/Xethron/migrations-generator
		- `php artisan migrate:generate`
	- generate models https://github.com/reliese/laravel
		- `php artisan vendor:publish --tag=reliese-models`
		- `php artisan config:clear`
		- `php artisan code:models`
- run locally `php artisan serve`
