
import http from "node:http" // importer http for creating a server with

const server = http.createServer();

server.on('request', handleRequest)

const PORT = 3000;
function handleRequest(req, res) {
    
    res.setHeader('content-type', 'application/json')

    const data1 = {
                page : "home",
                user : "john kambembe",
                domain: "informatiquee"
            }
    const data2 = {
                page : "about",
                user : "john France",
                domain: "Anglais"
            }

    const data3 = {
                page : "Not found"
            }

    if(req.method === "GET") {

        switch(req.url) {
        case '/':
            res.end(JSON.stringify(data1));
            break;
        case '/about':
            res.end(JSON.stringify(data2));
            break;
        default :
            res.end(JSON.stringify(data3));
            res.statuscode(404)
            break;
        }

    } else {
        res.end('error method')
    }
    
    

}

server.listen(PORT, 'localhost', () => {
    console.log(`server is running on ${'http://localhost:3000'}`)
})