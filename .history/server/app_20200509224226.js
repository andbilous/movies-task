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


