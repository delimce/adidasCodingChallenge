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

## Solution & Architecture
![bff_subs_diagram](https://user-images.githubusercontent.com/1078276/207610856-52756121-e575-42ff-86bf-4e1794009047.svg)

I thought that the best way to solve this challenge was to create a microservices architecture based in a BFF (Backend for frontend) pattern. This way, the application can be scaled independently and the services can be deployed in different environments. The architecture is composed by 2 microservices and 1 BFF component as a simple interface between the frontend and microservices.



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