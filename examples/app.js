const http = require('http');

const port = 1337;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    return res.end(JSON.stringify({ok: true}));
  }

  res.statusCode = 404;
  return res.end(JSON.stringify({ok: false}));
});

server.listen(port, err => {
  if (err) console.log('error', err);

  console.log(`server started at localhost:${port}`);
});
