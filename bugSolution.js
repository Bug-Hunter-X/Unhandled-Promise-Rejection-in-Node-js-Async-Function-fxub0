const http = require('http');

const server = http.createServer((req, res) => {
  // Use async/await for cleaner error handling
  (async () => {
    try {
      const result = await someAsyncOperation();
      if (result === 'success') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Success!');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error!');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  })();
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a random error
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('success');
      } else {
        reject(new Error('Simulated error'));
      }
    }, 100);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});