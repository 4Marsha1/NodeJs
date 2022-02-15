const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // setting header
    res.setHeader('Content-Type', 'text/html')

    // reading and sending html file
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        }
        else {
            // res.write(data);
            // res.end();
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('server listening at port 3000');
})