install:
	composer install
	make db

db:
	php bin/console doctrine:database:drop --if-exists --force
	php bin/console doctrine:database:create
	bin/console doctrine:schema:update --force
	bin/console doctrine:fixtures:load -n -vvv
	bin/console doctrine:schema:validate

