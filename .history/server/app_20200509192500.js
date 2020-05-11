const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("ggg");
    res.end();
  }

  if(req.url ==='/api/movies') {
    res.write(JSON.stringify([1,2,3]));
    res.end()
  }
});
