
import http from "node:http" // importer http for creating a server with
import fs from "fs"

const server = http.createServer();

server.on('request', handleRequest)

const PORT = 3000;

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
function handleRequest(req, res) {

    if(req.url === "/") {
        sendHtml(res, "./pages/home.html")
        return
    }
    
    if(req.url === "/about") {
        sendHtml(res, "./pages/about.html")
        return
    }

    res.setHeader("content-type", "text/plain")
    res.end("No found")

}

server.listen(PORT, 'localhost', () => {
    console.log(`server is running on ${'http://localhost:3000'}`)
})