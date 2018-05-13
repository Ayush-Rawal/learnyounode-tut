const http = require("http")
const url = require("url")

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' })
    const {query, pathname} = url.parse(req.url, true)
    if (pathname === '/api/parsetime') {
        let date = new Date(query.iso)
        res.end(JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }))
    } else if (pathname === '/api/unixtime') {
        let date = new Date(query.iso)
        res.end(JSON.stringify({
            "unixtime": date.getTime()
        }))
    }
    res.end()
})

server.listen(Number(process.argv[2]))