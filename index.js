
import http from "node:http" // importer http for creating a server with

const server = http.createServer();

server.on('request', handleRequest)

const PORT = 3000;
function handleRequest(req, res) {
    res.end('hello world')
}

server.listen(PORT, 'localhost', () => {
    console.log(`server is running on ${'http://localhost:3000'}`)
})