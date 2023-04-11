// Install Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

// Reads JavaScript file, executes it, and returns the exported JSON objects.
const notes = require("./Develop/db/db.json");

// Sets the Port
const PORT = process.env.PORT || 3001;

// Creates an express server.
const app = express();

// This allows the user to access the public folder.
app.use(express.static('Develop/public'));

// This reads the db.json file and returns all saved notes as JSON.
app.get('/api/notes', (__req, res) => {
    res.json(notes.slice(1));
});

// Middleware for parsing application/json and urlencoded data
// Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/15-Ins_Body-Parsing/server.js:
app.use(express.urlencoded({extended: true}));

// This parses JSON data.
// Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/15-Ins_Body-Parsing/server.js:
app.use(express.json());

// This returns the notes.html file.
// This is the route that the user will see when they click on the "Get Started" button.
// Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/03-Ins_API-HTML-Routes/server.js:
app.get('/notes', (__req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

// This returns the index.html file.
// Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/03-Ins_API-HTML-Routes/server.js:
app.get('*', (__req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

// This function allows the user to save new notes.
// Creates a new note in an array and writes it to the db.json file.
// Code snippet from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
function createNotes(body, notesArray) {
    const newNote = body;
    if (!Array.isArray(notesArray))
        notesArray = [];
    
    if (notesArray.length === 0)
        notesArray.push(0);

    body.id = notesArray[0];
    notesArray[0]++;

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
}

// Post method connects user input to the back-end.
// This receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client.
// Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/15-Ins_Body-Parsing/server.js:
app.post('/api/notes', (__req, res) => {
    const newNote = createNotes(req.body, notes);
    res.json(newNote);
});

// This function allows the user to delete existing notes from the db.json file.
// Loop through the notes array and remove the note with the given id property.
// Code snippet from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/05-Ins_Query-Params/server.js:
function deleteNotes(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, './db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );

            break;
        }
    }
}

// Delete method allows the user to delete saved notes.
// This receives a query parameter containing the id of a note to delete.
// Code snippet from GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/23-Ins_Custom-Middleware/server.js:
app.delete('/api/notes/:id', (__req, res) => {
    deleteNotes(req.params.id, notes);
    res.json(true);
});

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));