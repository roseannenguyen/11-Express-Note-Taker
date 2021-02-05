const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require('uuid');


var tableData = require("./db/db.json");

app.get("/api/notes", function (req, res) {
    res.json(tableData);
});

app.post("/api/notes", function (req, res) {

        tableData.push(req.body);
        res.json(true);

});


app.delete("/api/notes/:id", function (req, res) {

    tableData.push(req.body);
    res.json(true);

});