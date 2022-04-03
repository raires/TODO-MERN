<div align="center">

# Node JS TODO API

</div>

## Install dependencies

```bash
npm install
```

## MongoDB, .env and nodemon config

The file "nodemon.dev.json" has to be renamed to "nodemon.json" and inside it the connection to the MongoDB has to be changed.

The file ".env.dev" has to be renamed to ".env" and inside it the connection to the MongoDB has to be changed as well (same as above).

## Run the application

```bash
npm run start
```

## Check the DB connection and the API returns

GET http://localhost:5000/api/todos/
GET http://localhost:5000/api/todos/<:id>
POST http://localhost:5000/api/todos/
PATCH http://localhost:5000/api/todos/<:id>
DELETE http://localhost:5000/api/todos/<:id>