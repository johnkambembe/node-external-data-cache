
import http from "node:http" // importer http for creating a server with
import { json } from "node:stream/consumers";


const server = http.createServer();

server.on('request', handleReq)

const PORT = 3000;

/* 

function sendHtml(res, filepath) {

    fs.readFile(filepath, (err, data) => {
        if(err){
            console.log(err)
            res.end("NO FOUND")
        }
            res.setHeader("content-type", "text/html")
            res.end(data)

    })
}

*/

async function handleReq(req, res) {

    res.setHeader('Content-Type', 'application/json')
    
    if(req.url === "/api/posts") {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()

        res.end(JSON.stringify(data))
        
        return
    }

    if(req.url === "/api/posts/1") {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json()

        res.end(JSON.stringify(data))
        
        return
    }
    
}



server.listen(PORT, 'localhost', () => {
    console.log(`server is running on ${'http://localhost:3000'}`)
})