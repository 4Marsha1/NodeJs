const http = require('http');

// req ----> object that contains details about and from where request is made.
// res ----> the response that server gives, based on the request made to it.

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type

    // 1. TYPE 1 --------> Plain text
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('This is fetched from server as a response');
    // res.end();

    // 2. TYPE 2 --------> HTML
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<h1>This is HTML fetched from server as a response</h1>');
    // res.write('<h3>Second HTML fetched from server as a response</h3>');
    // res.end();

    // 3. TYPE 3 -------> JSON
    res.setHeader('Content-Type', 'application/json')
    const obj = {
        id: 1,
        name: 'Abhishek'
    }
    res.write(JSON.stringify(obj));
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log("server listening at port 3000");
})