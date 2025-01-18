const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const result = someAsyncOperation();

  if (result === 'success') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  } else {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error!');
  }
});

function someAsyncOperation() {
  // Simulate a random error
  return Math.random() < 0.5 ? 'success' : 'error';
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});