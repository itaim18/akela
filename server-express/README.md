# Server side - Express

## Setup
Run in this folder in the cmd / terminal `npm install` and make sure a `node_modules` folder is created.

## How to run it
Enter this project folder in the cmd / terminal and run `npm run dev`. This project should also have hot-reloading.

## How to format the code
Run in this folder in the cmd / terminal `npm run format`.

## Instructions
- The project has the following layers:
    - Controller - for handling the api requests
    - Service - for BL (buisseness logic)
    - Dal - data access layer **that in reality should be the one that responsibles for the DB, we won't use db in this assignement, will be explained later**
- Since we don't have DB in this assignement - you can use "mocks" - there is already one called `USERS` that includes the users (you can add some more if you wish), and an empty one called `TASKS` for storing the tasks (of course not permanent - only for runtime).
- Notice that you should implement the model `Task`.
- Notice that there are a controller, service and dal for the login with some implementation
- Notice that there are empty router, controller, service and dal for the tasks for you to add what you need in them 
- There are some implemented errors, middlewares and other things that you can use if you wish 
