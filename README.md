# Akela Interview Assignement

## General
- This excercise includes both client and server existing project (the server exists either in `NestJS` or `Express`, so you can choose the the one you're more familiar with), **each project will have its own `README.md` that explains how to run it**
- The assignement **deadline is 3 hours** from the time you were given it - **we will check only the code from the last commit that was pushed before the deadline**
- Before submitting - you must run `npm run format` for each project you edited so the code - **please notice that**
- Even thought the template is ready - you can feel free to refactor anything in the existing code - you're responsbile to the code quality.
- Your code quality is important as the amount of tasks you finish - the code should be convenient for other team members to add features / options in the future
- If something might be understood with more than one meaning - do whatever ytou think is true and explain it in a comment
- You can submit the assignement even if you haven't completed everything
- Please notice what is "must" and what is "optional" 
- The "optional" tasks are for you to prioritize, you should also know to explain what you prioritized one thing over the other

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