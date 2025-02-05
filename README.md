# Akela Interview Assignement

## Itai Mizlish- Review

Hi, I'll just list the things I have accomplished at the time given to me:

1. I have fixed a small routing bug that took the user to protected display for a second and then routing out to "/login"
2. I have added a new route to the app, "/create" which is a protected route
3. I created the server for the tasks connecting it to a mongoDB thus protecting the data.
4. I have managed the frontend with a routing system and for each route a different request to the DB
5. Built the nestjs with future in dev applications such as updates, deletions, and finding specific tasks.
6. Built a hook for fetching the data and manipulating it to match my requirements due to lack of time

Hope You'll find it suitable enough for your needs :)

## General

- This excercise includes both client and server existing project (the server exists either in `NestJS` or `Express`, so you can choose the the one you're more familiar with), **each project will have its own `README.md` that explains how to run it**
- The assignement **deadline is 4 hours** from the time you were given it - **we will check only the code from the last commit that was pushed before the deadline**

## Before starting

Please fork this project into your own project and work on it (clone it and push to it), if you're not familiar with fork / clone you can do one of those things:

- follow https://docs.gitlab.com/ee/user/project/repository/forking_workflow.html for fork and https://docs.gitlab.com/ee/user/project/repository/#clone-a-repository for clone
- download the project as a zip - https://docs.gitlab.com/ee/user/project/repository/#download-the-code-in-a-repository

**Note:** You might not be able to commit or push because of the following message:

```
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address
```

If it happens, please run in the cmd / Git bash the following commands:

```
git config --global user.email "<your_mail_in_gitlab>"
git config --global user.name "<your name>"
```

After that, try again.

## Before submitting

You must run `npm run format` for each project you edited so the code - **please notice that**

## How to submit

Push your code (after `format`) to your forked repository to the `master` branch (if you're not familiar git or downloaded the project as a zio - you can upload the project to a drive and share it with us)

## Instructions

- Even thought the template is ready - you can feel free to refactor anything in the existing code - you're responsbile to the code quality.
- Your code quality is important as the amount of tasks you finish - the code should be convenient for other team members to add features / options in the future
- If something might be understood with more than one meaning - do whatever ytou think is true and explain it in a comment
- You can submit the assignement even if you haven't completed everything
- Please notice what is "must" and what is "optional"
- The "optional" tasks are for you to prioritize, you should also know to explain what you prioritized one thing over the other
- Please refer to the `README.md` inside each project that you edit
- **We already put in the server side two user for you to use in the login:**
  - **Username: elad, password: 1234**
  - **Username: ariel, password: 5678**

## The assignement

The assignement is a task management product (you can think of it as a small Trello).
The product has two screens - login and board. The login screen was implemented, the board screen is currently empty (**you can still make changes to the login screen if needed**).
What you need to do:

1. Must - implement a boars with the following states - ready, active and done, that displays the user' tasks in the relevant state. The user should be able to create tasks and change the state after it was created.
2. Optional - implement drag & drop of tasks between states.
3. Optional - let the user to delete an existing task.
4. Optional - let the user to edit an existing task.
5. Optional - refactor the login to be more secured
6. Optional - refactor the other server requests to be more secured
7. Optional - bug - if the internet connection is slow in the login the user sees the screen like it freezes, fix this bug
"# akela" 
