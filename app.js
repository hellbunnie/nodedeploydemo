"use strict";

var express = require("express");
var port = process.env.PORT || 8081;

var app = express();

app.get("/", function (req, res) {
    res.send("Wow, I deployed a node app!!");
});


app.listen(port);

console.log("Server running on http://localhost:"+port);
