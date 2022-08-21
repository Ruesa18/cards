#!/bin/sh

bin/console doctrine:database:create 
bin/console doctrine:migrations:migrate
