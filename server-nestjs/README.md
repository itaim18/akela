# Server side - NestJS

## Setup
Run in this folder in the cmd / terminal `npm install` and make sure a `node_modules` folder is created.

## How to run it
Enter this project folder in the cmd / terminal and run `npm run start:dev`. This project should also have hot-reloading.

## How to format the code
Run in this folder in the cmd / terminal `npm run format`.

## Instructions
- The project has currently two modules - auth for the login (which has some basic implementation) and tasks which includes empty controller, service and dal
- Since we don't have DB in this assignement - you can use "mocks" - there is already one called `USERS` that includes the users (you can add some more if you wish), and an empty one called `TASKS` for storing the tasks (of course not permanent - only for runtime). The mocks are located under the relevant module
- Notice that you should implement the model `Task`.
- Notice that are empty router, controller, service and dal for the tasks for you to add what you need in them 
- There are some implemented errors, filters and other things that you can use if you wish 

