
import http from "node:http" // importer http for creating a server with

const server = http.createServer();

server.on('request', handleRequest)

const PORT = 3000;
function handleRequest(req, res) {
    
    res.setHeader('content-type', 'text/plain')

    switch(req.url) {
        case '/':
            res.end('1');
            break;
        case '/about':
            res.end('2about');
            break;
        default :
            res.end('404');
            break;
    }

}

server.listen(PORT, 'localhost', () => {
    console.log(`server is running on ${'http://localhost:3000'}`)
})