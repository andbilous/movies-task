const movies = require("./movies.json");

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
