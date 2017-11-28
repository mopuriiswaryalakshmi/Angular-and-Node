const http = require('http')
const port = 3000
http.createServer((request, response) => {
  console.log(request.headers)
  console.log(request.method)
  console.log(request.url)
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World\n')
}).listen(port)
//Some examples include headers, URL, HTTP method names and of course the request body (payload). Here's the list of main properties:

//request.headers: Information about incoming requests headers such as Connection, Host, Authorization, etc (see list here)
//request.method: Information about the incoming requests methods such as GET, POST, PUT, DELETE, OPTIONS, HEAD, etc.
//request.url: Information about the incoming request URL, such as /accounts, /users, /messages, etc.
//All values are accessible in the request handler callback. For example, you can print the values like this: