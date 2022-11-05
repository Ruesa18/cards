install:
	composer install
	make db

db:
	bin/console doctrine:database:create --if-not-exists -n
	bin/console doctrine:schema:drop --full-database --force
	bin/console doctrine:schema:update --force
	bin/console doctrine:fixtures:load -n --append

	bin/console doctrine:schema:validate

