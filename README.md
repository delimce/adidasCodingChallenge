# adidas coding challenge
Nodejs backend challenge for a job application


## Preface
    This application is conformed by 3 microservices in order to provide a complete solution for the challenge.
    Subscription service: that allows to create, retrieve, list and cancel adidas newsletter subscriptions. 
    Email service: to send welcome emails to the users that have subscribed to the newsletter.
    Public services: to provide a public API to the frontend application.

## Stack used
- Nodejs (v16.13.0)
- Express
- Typescript
- Mysql
- Jest (testing)
- Sqlite (testing)
- Docker
- Docker-compose


## Installation

## CD/CI proposal diagram


## Microservices

### 1. subscription service
Service created as a Rest Api to manage subscriptions the host is:

    http://localhost:8080/v1/subscription

Swagger definitions for services can be found in the following path:

    http://localhost:8080/v1/swagger/

You can also launch the unit tests for this service with the following command:

    npm run test

### 2. email service
Service created as a Rest Api to send emails to the users that have subscribed to the newsletter. The host is:

    http://localhost:8084/v1/email

Swagger definitions for services can be found in the following path:
    
    http://localhost:8084/v1/swagger/



## CI/CD pipeline
The CI/CD pipeline could be implemented using a tool like Jenkins or Github Actions. The pipeline would be composed by the following steps:

![adidas_cicd](https://user-images.githubusercontent.com/1078276/204743121-dfcfa3ab-f2dd-494e-98cf-687ce6b87dc9.png)