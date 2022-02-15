const http = require('http');

// creating server----> (request, response)  
// fires when a request is made
const server = http.createServer((req, res) => {
    console.log('request made');
})

// Setting up/ starting the server -----> (port, host, function)
// sets up server at <port> and <host>
server.listen(3000, 'localhost', () => {
    console.log('Server listening to requests on port 3000');
})