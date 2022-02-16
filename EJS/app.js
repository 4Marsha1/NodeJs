const express = require('express');
const morgan = require('morgan')
// -----------express app
const app = express();

// ---------register view engine----------> ('view engine', nameOfViewEngine)
app.set('view engine', 'ejs');     // BY DEFAULT : will look for ./views folder
// app.set('views', 'myViews')     // Setting different folder for views

// -----Setting up the server
app.listen(3000);

// -------middlewares---------

// 1. --Custom made middlewares -----
// app.use((req, res, next) => {
//     console.log('Middleware ---');
//     console.log('Host: ', req.hostname);
//     console.log('Path: ', req.url);
//     console.log('Method: ', req.method);
//     next();
// })

// 2. --3rd party middlewares ---------
app.use(morgan('dev'))

// 3. --express middlewares ---------
app.use(express.static('public'))

// -------Routes ----------
app.get('/', (req, res) => {
    const blogs = [
        { title: 'John Doe', snippet: 'Lorem ipsum dolor sit amet.' },
        { title: 'Mary Doe', snippet: 'Lorem ipsum dolor sit amet.' },
        { title: 'Jack Doe', snippet: 'Lorem ipsum dolor sit amet.' },
    ]
    res.render('index', { title: 'Home', blogs })
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})
app.get('/blog/create', (req, res) => {
    res.render('create', { title: 'Create Blog' })
})

// -------- 404 Page ----------
app.use((req, res) => {
    res.render('404', { title: '404 Not Found!' });
})