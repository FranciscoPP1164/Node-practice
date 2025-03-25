const http = require('http');

const server = http.createServer((req, res) => {
  const {url, method} = req;

  if (url === '/' && method === 'GET') {
    res.write('<html>');
    res.write('<head><title>Pratice-1|Node.js</title></head>');
    res.write('<body>');
    res.write('<h1>Hello from my first practice of Node.js</h1>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Guardar</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/users' && method === 'GET') {
    res.write('<html>');
    res.write('<head><title>Pratice-1|Node.js</title></head>');
    res.write('<body>');
    res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/users');
    return res.end();
  }
});

server.listen(3000);
