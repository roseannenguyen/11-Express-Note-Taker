const express = require("express");
var app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

require("../assets/js/api.js")(app);