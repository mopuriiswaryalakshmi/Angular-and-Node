const fs = require('fs')
const path = require('path')
//There are two sets of reading methods: asynchronous (recommended) and synchronous. In most cases, developers should use async methods, such as fs.readFile because this methods won't block the event loop:
fs.readFile(path.join(__dirname, '/data/customers.csv'), {encoding: 'utf-8'}, function (error, data) {
  if (error) return console.error(error)
  console.log(data)
})