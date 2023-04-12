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
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// Defines the get request to this route's path '/api/notes'
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(dbJson);
    });

// Defines the post request to this route's path '/api/notes'
// I used the uuid npm package to generate unique ids for each note rather than using the index of the array.
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
    });

// Defines the delete request to this route's path '/api/notes/:id'
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync("db/db.json", "utf8");
    const dataJSON = JSON.parse(data);
    const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync("db/db.json", JSON.stringify(newNotes));
    res.json("Note deleted!");
    });

module.exports = router;