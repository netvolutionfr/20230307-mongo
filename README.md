# MongoDB Docker example

This is a simple example of how to run MongoDB in a Docker container.

A simple Express app is included to demonstrate how to connect to the MongoDB instance.

## Running the example

To run the example,
- copy the `.env.example` file to `.env` and edit the values as needed
- launch docker-compose:

```sh
docker-compose up -d
```

- run node server to launch the Express app:

```sh
npm start
```

- open http://localhost:3000 in your browser
- you can access the MongoDB instance via MongoExpress at http://localhost:8081 (depending on your configuration)
- to stop the containers, run:

```sh
docker-compose down
```

