const express = require('express');
const app = express();

app.listen(3000);

// Routing -------------
app.get('/', (req, res) => {
    // res.send('<h2>Home Page</h2>')
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    // res.send('<h2>About Page</h2>')
    res.sendFile('./views/about.html', { root: __dirname })
})

// Redirects ----------------
app.get('/about-me', (req, res) => {
    res.redirect('/about');
})

// 404 Page ---------------
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})