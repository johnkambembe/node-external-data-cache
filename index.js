
import http from "node:http" // importer http for creating a server with
import fs from "fs"

const server = http.createServer();

server.on('request', handleRequest)

const PORT = 3000;
function handleRequest(req, res) {
    if(req.url === "/" && req.method === "GET") {
        fs.readFile("./pages/home.html", (err, data) => {
            if(err) {
                console.log(err)
            }

            res.end(data)
        })
    }

    if(req.url === "/about" && req.method === "GET") {
        fs.readFile("./pages/about.html", (err, data) => {
            if(err) {
                console.log(err)
            }

            res.end(data)
        })
    }


}

server.listen(PORT, 'localhost', () => {
    console.log(`server is running on ${'http://localhost:3000'}`)
})