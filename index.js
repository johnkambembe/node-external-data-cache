
import http from "node:http" // importer http for creating a server with

const server = http.createServer();

server.on('request', handleRequest)

const PORT = 3000;
function handleRequest(req, res) {
    
    res.setHeader('content-type', 'application/json')

    const user1 = {
                user : "1",
                name : "john kambembe",
                domain: "informatiquee"
            }
    const user2 = {
                user : "2",
                name : "john France",
                domain: "Anglais"
            }

    const users = [
            {
                user : "1",
                name : "john kambembe",
                domain: "informatiquee"
            },
            {
                user : "2",
                name : "john France",
                domain: "Anglais"
            }

    ]

    if(req.url === "/api/users" && req.method === "GET") {

        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(users))
        res.end()
    }  else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
        
        res.setHeader('Content-Type', 'application/json')
        const id = req.url.split('/')[3];

        // lol i'll get back here so soon i'm going to learn at nodejs docs, how to send user1 and user lol
        
}

}

server.listen(PORT, 'localhost', () => {
    console.log(`server is running on ${'http://localhost:3000'}`)
})