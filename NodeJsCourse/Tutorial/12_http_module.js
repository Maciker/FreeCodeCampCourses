const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
    } else if(req.url === '/about') {
        res.end('Welcome to the about page')
    } else {
        res.write(`<h1>OOOPS</h1>
        <p>We can't find this page</p>
        <a href="/">Back Home</a>`)
    }
})

server.listen(5000)