const { createServer } = require('http')
const shipments = require('./shipments.json')

const HOST = '127.0.0.1'
const PORT = 8080
const API = '/api/shipments'
const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive'
}

const server = createServer((req, res) => {

  if (req.url.trim() === API) {
    res.writeHead(200, HEADERS)
    res.end(JSON.stringify(shipments))
  }
})

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})