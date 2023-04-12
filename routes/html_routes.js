// Refactored my code with inspiration from the following video tutorial: https://youtu.be/-UiqzvUe360
// After refactoring the code, I was able to eliminate the 500 status error on lines 37 & 46 of the index.js page
// (corresponding to the fetch requests) that I was getting when I tried to post or delete a note.
// I reorganized the folders and some of the file locations.
// I added a new folder called "routes" and created two new files: html_routes.js and api_routes.js.
// I wanted to separate the routes from the server.js file so that the code would be easier to read and maintain.
// I also implemented the uuid npm package to generate unique ids for each note rather than using the index of the array.

// Install Dependencies
// Router is a mini express app that only handles routes
const router = require('express').Router();
const path = require('path');

// Defines the route that sends index.html as a response
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// Defines the route that sends notes.html as a response
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;