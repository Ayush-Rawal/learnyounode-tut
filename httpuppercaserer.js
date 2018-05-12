const http = require("http")
const map = require("through2-map")

const server = http.createServer((req, res) => {
    res.writeHead(201, { 'content-type': 'text/plain' })
    let body = ''
    req.pipe(map( (chunk) => {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})

server.listen(process.argv[2])