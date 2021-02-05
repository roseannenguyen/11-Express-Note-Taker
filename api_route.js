var path = require("path");
var fs = require("fs");
var { v1: uuidv1 } = require('uuid');

var storedNotes = require("./db/db.json");

function makeJSON() {

}

module.exports = app => {

    app.get("/api/notes", function (req, res) {
        res.json(storedNotes);
    });

    app.post("/api/notes", function (req, res) {

        var data = path.join(__dirname, storedNotes)

        storedNotes.push(req.body);
        res.json(true)
        return console.log("Your note has been saved!")

    });

    app.delete("/api/notes/:id", function (req, res) {

        storedNotes.push(req.body);
        res.json(true);

    });
};