# Installation

## Standalone setup
If you want run app only (external database) make sure setup all fields in your .env file and next run these commands:
```
npm install
npm run build
npm start
```
## All In One setup
If you want to run the app with the database in a container, make sure you set all of the following fields in your docker-compose.yml file
> - DB\_HOST=postgresql
> - BD\_PORT='5432'
> - BD\_USER='user'
> - BD\_PASS='user123'
> - BD\_NAME='imaginamos'
> - PORT=3000
> - JWT_SECRET='aVerySecretKey:)'

and then run these commands:
```
docker-compose up
```

## Running tests
To run test make sure set all fields in your .env file, if you are running the app with a container make sure set all fieds in your docker-compose.yml file same as your .env file, and run these commands
```
npm run test
```
## Build app
To build the app run these commands
```
npm run test
```
and check *./dist* folder

# Let's play with API

To play with the API you have to create customer, technicians and services, next each customer can loggin for get a token. With the token, each client can create orders that will be assigned to a random technician.

To a technician check her assigned orders, he have to loggin for to get a token.

End points list:
- POST /api/v1/technician Register a Technician
- POST /api/v1/customer Register a customer
- POST /api/v1/service Register a service
- POST /api/v1/auth/customer Customer Loggin
- POST /api/v1/auth/technician Technician Loggin
- POST /api/v1/order Register new Order
- GET /api/v1/order Get order assign to current technician

For more information about end points and how to use, you can run the APP and visit in your browser *https://www.postman.com/arnolcas/workspace/customer-services-example* to check API Documentation or run APP in Standalone mode and visit *http://localhost:3000/docs/*




