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

        fs.writeFile("./db/db.json", JSON.stringify(storedNotes), (err) => {
            if (err) throw err;
        });

        res.json(req.body)

    });

    app.delete("/api/notes/:id", function (req, res) {
        
        req.body.id = uuid
        
        storedNotes.length = 0

        storedNotes.delete(req.body);


    })
}