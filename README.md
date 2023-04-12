# Express.js: Note Taker

# Table of Contents
* [Description](#description)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Built With](#built-with)
* [Mock-Up](#mock-up)
* [Getting Started](#getting-started)
* [What I learned](#what-i-learned)
* [Contributions](#contributions)
* [Questions](#questions)
* [License](#license)

## Description

The task is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. The goal is to build the back end, connect the two, and then deploy the entire application to Heroku.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Installation

### The following steps are required to install and use this application:

Install Heroku CLI

```bash
brew install heroku
```

```bash
heroku --version
```

Declare Application Dependencies

```bash
npm init -y
```

```bash
npm install express
```

Specify Version of Node

```bash
node --version
```

Build the Application and Run it Locally

```bash
npm install
```

```bash
npm i uuid@3.4.0
```

```bash
heroku local web --port 3001
```

Deploy Application to Heroku

```bash
git add .
git commit -m "commit message"
heroku login
heroku create
git push heroku main
heroku open
```

## Usage

### The following steps are required to use this application:
1. Click to open the deployed application link: https://rocky-temple-86864.herokuapp.com/
2. Click "Get Started" to open the note taker.
3. Enter text into the 'title' and 'text' fields
4. Click the save icon (top right) to save the note.
5. Click the + icon (top right) to add another note.
6. Additional: Click the trash icon to delete saved notes.

## Built With
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Heroku](https://www.heroku.com/)
* [npm](https://www.npmjs.com/)
* [JSON](https://www.json.org/json-en.html)
* [UUID](https://www.npmjs.com/package/uuid)
* [Visual Studio Code](https://code.visualstudio.com/)

## Mock-Up

The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/11-express-homework-demo-02.png)

Link to the Deployed Application: https://rocky-temple-86864.herokuapp.com/

## Getting Started

On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

## What I Learned

* I learned how create api routes and html routes.
* I learned direct deployment to Heroku from the integrated terminal command line interface.

### Further Reflections from troubleshooting this application:
* I refactored my entire code with inspiration from the following video tutorial by Thomas Calle: https://youtu.be/-UiqzvUe360
* After refactoring the code, I was able to eliminate the 500 status error on lines 37 & 46 of the index.js page (corresponding to the fetch requests) that I was getting when I tried to post or delete a note.
* The 500 status error was likely caused by the fact that I had not written correctly the code for the createNotes() and deleteNotes() functions.
* Within the createNotes() and deleteNotes() function, I had attempted to assign unique ids to each note by using the index of the array. This was a failure.
* I also attempted to use the array splice() method to remove the note with the given id property. This was a failure. 
* After failing to successfully resolve the issues with my createNotes() and deleteNotes() functions as well as the array both on my own and with the assistance of a tutor, I implemented the uuid npm package to generate unique ids for each note rather than using the index of the array.
* I reorganized the folders and some of the file locations to make the file paths cleaner.
* I added a new folder called "routes" and created two new files: html_routes.js and api_routes.js.
* I wanted to separate the api and html routes from the server.js file so that the code would be easier to read and maintain.

## Contributions
### Credits and Helpful Resources Used to Create this Application

* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Heroku](https://www.heroku.com/)
* [npm](https://www.npmjs.com/)
* [UUID](https://www.npmjs.com/package/uuid)
* [Express JS Crash Course](https://youtu.be/L72fhGm1tfE)
* [Express JS Note Taker Video Tutorial](https://youtu.be/-UiqzvUe360)
* [What is process.env.PORT in Node.js?](https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js)
* [Installation of Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
* [How to Deploy a Node.js App to Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
* [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## Bonus

You haven’t learned how to handle DELETE requests, but this application offers that functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## Questions

For any inquiries, please contact me at kaitlynatif90@hotmail.com

## License

MIT License

Copyright (c) [2023] [Kaitlyn Atif]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.