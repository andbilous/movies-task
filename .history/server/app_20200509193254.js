import movie

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("ggg");
    res.end();
  }

  if (req.url === "/movies") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
server.listen(3001);

console.log("Listening on port 3001");
