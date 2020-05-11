const movies = require("./movies.json");
const express = require("express");
const cors = require("cors");
const http = require("http");
const PORT = process.env.PORT || 5000;

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

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
