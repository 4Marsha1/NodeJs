const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log(req.url);

    // lodash package -----
    const num = _.random(0, 100);
    console.log(num);
    const greet = _.once(() => console.log('hello'));
    greet();
    greet();
    greet();

    res.setHeader("Content-Type", 'text/plain');
    res.write("Hello")
    res.end();
})

server.listen(3000, () => {
    console.log('Server listening at port 3000');
})