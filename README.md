# TriLife
TriLife is a time budgetting application, much like a budgeting appplication, that is based on Maslow's Hierarchy of Needs for Human Development. Users are able to input their free time for a week and the application will stratify the hours into percentages using Maslow's pyramid as a loose outline.

A calendar is available for users to  to block off days and time for whatever activity or goal they want to devote some time into accomplishing.

## Technologies Used
- [x] Mongo, Express, React, NodeJS (MERN), PassportJS, Bulma, and React-Transitions for calendar animations


## How to Run
To run TriLife you will need [Bash](https://git-scm.com/downloads/), [Node](https://nodejs.org/en/), [npm](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm), [Mongo](https://docs.mongodb.com/manual/installation/), and [React](https://reactjs.org/docs/getting-started.html) .

1. In Bash, to clone the repo type `git clone repo-link-here` to download TriLife.

2. Then, type `cd directory-of-TriLife-foleder; npm install (or yarn)` to download the required packages.


3. In a separate Bash window, type `mongod` and leave it open.

4. In Bash, type `yarn start` to start the server and open up the application.

## Demo

First, users should login or create a loging to be able to save their input.

![User: Login/Register](client/src/Images/login.png)

Logging in brings users to the Home page, where users can learn about the application, add their free time, or view their calendar

![User: Home Page](./client/src/Images/home.png)

In the add time screen users can input their free time and can add notes describing the activities they want to accomplish and hours they want to devote to them.

![User: Add Time](./client/src/Images/addtime.png)

Once free time has been entered, it is stratified into each category and saved into a mongo db. Clicking the link beneath the submit button will bring the user to the calendar page along with their input.

![User: Added Time](./client/src/Images/added.png)

On the same page clicking (!) will open up a modal displaying users notes.

![User: Modal](./client/src/Images/added_modal.png)

The calendar page displays the saved user input and allows users to add activities to their calendar by clicking on the add button. Users can also delete items by clicking the 'X' on the button.

![User: Add Time](./client/src/Images/calendar.png)
