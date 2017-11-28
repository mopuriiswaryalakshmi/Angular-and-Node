const http = require('http')
const port = 3000
//curl localhost:3000/transactions -iv
//iv --> more verbose
//npm i -g node-dev@latest --> run this in teminal
//node-dev server.js   --> start node by this command
//You can also use curl to get the response from the server in the terminal. To do so, keep the terminal / command prompt window open to keep the server running. In another tab or window of your terminal / command prompt, run the following curl request: curl http://localhost:3000 The curl request should return the header and content that is sent from the server.
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n')
}).listen(port)

console.log(`Server running at http://localhost:${port}/`)