const express = require('express');
const fs = require('fs');
const path = require('path');

// Reads JavaScript file, executes it, and returns the exported JSON objects.
const notes = require("./Develop/db/db.json");

// Set the Port
const PORT = process.env.PORT || 3001;

// Creates an express server.
const app = express();

app.use(express.static('Develop/public'));

app.get("/api/notes", (res) => {
    res.json(notes.slice(1));
});

// This parses string or array.
app.use(express.urlencoded({extended: true}));

// This parses JSON data.
app.use(express.json());

app.get("/index", (res) => {
    res.sendFile(path.join(dirname, "./Develop/public/index.html"));
});

app.get("/notes", (res) => {
    res.sendFile(path.join(dirname, "./Develop/public/notes.html"));
});

app.get("*", (res) => {
    res.sendFile(path.join(dirname, "./Develop/public/index.html"));
});

// This function allows the user to save new notes.
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
        path.join(dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
}

// Post method connects user input to the back-end.  
app.post("/api/notes", (req, res) => {
    const newNote = createNotes(req.body, notes);
    res.json(newNote);
});

// This function allows the user to delete existing notes.
function deleteNotes(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(dirname, './db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );

            break;
        }
    }
}

// Delete method allows the user to delete saved notes.
app.delete('/api/notes/:id', (req, res) => {
    deleteNotes(req.params.id, notesData);
    res.json(true);
});

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));