// Refactored my code with inspiration from the following video tutorial: https://youtu.be/-UiqzvUe360
// After refactoring the code, I was able to eliminate the 500 status error on lines 37 & 46 of the index.js page
// (corresponding to the fetch requests) that I was getting when I tried to post or delete a note.
// The 500 status error was likely caused by the fact that I had not written correctly the code for the createNotes() and deleteNotes() functions.
// Within the createNotes() and deleteNotes() function, I had attempted to assign unique ids to each note by using the index of the array. This was a failure.
// I also attempted to use the splice() method to remove the note with the given id property. This was a failure. 
// After failing to successfully resolve the issues with my createNotes() and deleteNotes() functions as well as the array
// both on my own and with the assistance of a tutor, I implemented the uuid npm package to generate unique ids for each note rather than using the index of the array.
// I reorganized the folders and some of the file locations to make the file paths cleaner.
// I added a new folder called "routes" and created two new files: html_routes.js and api_routes.js.
// I wanted to separate the routes from the server.js file so that the code would be easier to read and maintain.

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