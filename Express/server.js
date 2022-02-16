// 1. Raw Node Js Server 

const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>Server with Raw NodeJs</h2>');
    res.end();
})
server.listen(3000, () => {
    console.log('Raw NodeJS server listening at 3000');
})

// 2. Express Server 
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Express Server</h1>');
})
app.listen(3000)