# Cards - Frontend

## Run

### dde (recommended)
From inside the `frontend/` directory you can run `dde exec` to run the docker container and open a shell on it. Inside this shell you can run `make dev` to install all packages and build the website.
After that, the application should be available under https://cards.test.

### Locally
You can of course run `make install` to install all packages. After that you will only have to run `npm run start` for example to get the frontend to work.
This will watch your files and automatically update the website accordingly.
