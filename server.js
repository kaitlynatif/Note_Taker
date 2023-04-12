// // Install Dependencies
// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// // Reads JavaScript file, executes it, and returns the exported JSON objects.
// // const notes = require("./db/db.json");

// // Sets the Port
// const PORT = process.env.PORT || 3001;

// // Creates an express server.
// const app = express();

// // This allows the user to access the public folder.
// app.use(express.static('public'));

// // This reads the db.json file and returns all saved notes as JSON.
// app.get('/api/notes', (req, res) => {
//     const notes = require("./db/db.json");
//     return res.json(notes);
// });

// // Middleware for parsing application/json and urlencoded data
// // Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/15-Ins_Body-Parsing/server.js:
// app.use(express.urlencoded({extended: true}));

// // This parses JSON data.
// // Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/15-Ins_Body-Parsing/server.js:
// app.use(express.json());

// // This returns the notes.html file.
// // This is the route that the user will see when they click on the "Get Started" button.
// // Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/03-Ins_API-HTML-Routes/server.js:
// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
// });

// // This function allows the user to save new notes.
// // Creates a new note in an array and writes it to the db.json file.
// // Code snippet from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// function createNotes(body) {
//     const notes = require("./db/db.json");
//     if (!notes) notes = [];
//     body.id = notes.length;
//     notes.push (body);
//     console.log("notes: ", notes)
//     fs.writeFileSync(
//         path.join(__dirname, './db/db.json'),
//         JSON.stringify(notes, null, 2)
//     );
//     return body;
// }

// // Post method connects user input to the back-end.
// // This receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client.
// // Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/15-Ins_Body-Parsing/server.js:
// app.post('/api/notes', (req, res) => {
//     const newNote = createNotes(req.body);
//     res.json(newNote);
// });

// // This function allows the user to delete existing notes from the db.json file.
// // Loop through the notes array and remove the note with the given id property.
// // Code snippet from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// // Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/05-Ins_Query-Params/server.js:
// function deleteNotes(id, notesArray) {
//     notesArray = notesArray.filter(note => note.id != id);
//     console.log("notesArray: ", notesArray)
//             fs.writeFileSync(
//                 path.join(__dirname, './db/db.json'),
//                 JSON.stringify(notesArray, null, 2)
//             );
// }

// // Delete method allows the user to delete saved notes.
// // This receives a query parameter containing the id of a note to delete.
// // Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/23-Ins_Custom-Middleware/server.js:
// app.delete('/api/notes/:id', (req, res) => {
//     const notes = require("./db/db.json");
//     deleteNotes(req.params.id, notes);
//     res.json(true);
// });

// // This returns the index.html file.
// // Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/03-Ins_API-HTML-Routes/server.js:
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// // Start the server on the port
// app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


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
const express = require('express');
const html_routes = require('./routes/html_routes');
const api_routes = require('./routes/api_routes');
const PORT = process.env.PORT || 3001;
// Sets up the Express App
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)

app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}`);
});