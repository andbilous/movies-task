const movies = require("./movies.json");
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
server.listen(3001);

console.log("Listening on port 3001");
