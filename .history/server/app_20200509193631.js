const movies = require("./movies");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("ggg");
    res.end();
  }

  if (req.url === "/movies") {
    res.write(movies));
    res.end();
  }
});
server.listen(3001);

console.log("Listening on port 3001");
