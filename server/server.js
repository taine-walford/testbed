const path = require('path')
const express = require('express')
const app = express()
const port = 3000

const server = express()
server.use(express.static(path.join(__dirname, '/src')))

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server |', port)
})

module.exports = {
  server, app, path
}
