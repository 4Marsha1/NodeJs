const express = require('express');
const morgan = require('morgan');

const mongoose = require("mongoose");

// importing models
const Blog = require('./models/blog')

// -----------express app
const app = express();

// ---------- mongo db
const mongodbURI = 'mongodb+srv://4Marsha1:test1234@learningmongodb.8zdvz.mongodb.net/LearningMongoDB?retryWrites=true&w=majority';
mongoose.connect(mongodbURI)
    .then(() => {
        // -----Setting up the server
        app.listen(3000);
    })
    .catch((err) => console.log(err.message))

// ---------register view engine----------> ('view engine', nameOfViewEngine)
app.set('view engine', 'ejs');     // BY DEFAULT : will look for ./views folder
// app.set('views', 'myViews')     // Setting different folder for views

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


// ------ Interacting with DB

// ------ Saving Blog Document to database
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'Hello again again',
//         snippet: 'My third save',
//         body: 'testing connection to mongodb via mongoose'
//     })
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err.message);
//         })
// })

// ------ Getting all blogs from database
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then(result => res.send(result))
//         .catch(err => console.log(err))
// })

// ------ Getting Single Blog from database
// app.get('/single-blog', (req, res) => {
//     Blog.findById('620f5c1ffe27acfe69ceabd1')
//         .then(result => res.send(result))
//         .catch(err => console.log(err))
// })


// -------Routes ----------
app.get('/', (req, res) => {
    // const blogs = [
    //     { title: 'John Doe', snippet: 'Lorem ipsum dolor sit amet.' },
    //     { title: 'Mary Doe', snippet: 'Lorem ipsum dolor sit amet.' },
    //     { title: 'Jack Doe', snippet: 'Lorem ipsum dolor sit amet.' },
    // ]
    // res.render('index', { title: 'Home', blogs })
    res.redirect('/blogs')
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})

// -------- Blog Routes --------
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => console.log(err))
})

app.get('/create', (req, res) => {
    res.render('create', { title: 'Create Blog' })
})

// -------- 404 Page ----------
app.use((req, res) => {
    res.render('404', { title: '404 Not Found!' });
})