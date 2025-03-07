const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const {url, method} = req;
  console.log(url, method);

  res.setHeader('Content-Type', 'text/html');
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enterg Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
    res.write('</html>');
  } else if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');

    // res.write('<html>');
    // res.write('<head><title>My first page</title></head>');
    // res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    // res.write('</html>');
  }

  return res.end();
});

server.listen(3000);
