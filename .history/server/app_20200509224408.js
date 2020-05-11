const movies = require("./movies.json");
const PORT = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
const http = require("http");


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("ggg");
    res.end();
  }

  if (req.url === "/movies") {
    res.write(JSON.stringify(movies));
    res.end();
  }
});
server.listen(PORT);

console.log("Listening on port 3001");

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('movies', function (req, res, next) {
  res.write(JSON.stringify(movies));
    res.end();
})

app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 5000')
})
