# Cards - Backend

## Run

### dde (recommended)
From inside the `backend/` directory you can run `dde exec` to run the docker container and open a shell on it. Inside this shell you can run `make install` to install all packages and deploy your database on the MariaDB database of dde.
After that, the application should be available under https://backend.cards.test.

### Locally
To run in development mode directly on your machine you need [symfony](https://symfony.com/download) installed for your command-line of choice.

From the terminal (inside the backend folder) use `symfony server:start` to run the symfony backend locally.
