const http = require('http');
const fs = require('fs');

// status codes -------------> res.statusCode
// 200 ---> OK
// 301 ---> Resource Moved
// 404 ---> Not Found
// 500 ---> Internal Server Error

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let path = './views'
    switch (req.url) {
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            // Redirection
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        } else {
            res.end(data)
        }
    });
})

server.listen(5000, 'localhost', () => {
    console.log('Server listening at port 5000');
})