const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  let path = './views';

  switch (req.url) {
    case '/':
      path += '/index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += '/about.html';
      res.statusCode = 200;
      break;
    default:
      path += '/404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, function (error, html) {
    if (error) {
      res.statusCode = 500;
      res.end();
      throw error;
    }
    res.end(html);
  });
});

server.listen(3000, 'localhost', (req, res) => {
  console.log('listen for request on port 3000');
});
