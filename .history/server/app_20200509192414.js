const http = require("http");

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.write('ggg');
    res.sendDate()
  }
});