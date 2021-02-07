var path = require("path");
var fs = require("fs");
var { v4: uuidv4 } = require('uuid');


function getNotes() {
    var storedNotes = require("../db/db.json");
    return storedNotes
}

module.exports = app => {

    app.get("/api/notes", function (req, res) {
        var storedNotes = getNotes()
        res.json(storedNotes)

    });

    app.post("/api/notes", function (req, res) {

        var storedNotes = getNotes()

        var uuid = uuidv4()
        req.body.id = uuid

        storedNotes.push(req.body);

        fs.writeFileSync("./db/db.json", JSON.stringify(storedNotes), (err) => {
            if (err) throw err;
        });

        res.json(req.body)

    });

    app.delete("/api/notes/:id", function (req, res) {
   
        var getID = req.params.id
        var emptyNote = []

        var getNotes = path.join(__dirname, "./db/db.json");

        getNotes = getNotes.slice(selectedNote => {
            return selectedNote.id != getID;
        })

        for (selectedNote of getNotes) {
            selectedNote.id = getID.toString();
            emptyNote++;
        }

        fs.writeFileSync("./db/db.json", JSON.stringify(getNotes));
        res.json(getNotes);
    }
    
    )};