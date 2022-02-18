const express = require('express');
const { render } = require('express/lib/response');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

const mongodbURI = 'mongodb+srv://4Marsha1:test1234@learningmongodb.8zdvz.mongodb.net/LearningMongoDB?retryWrites=true&w=majority';
mongoose.connect(mongodbURI)
    .then(() => {
        console.log('connected to db successfully');
        app.listen(3000);
    })
    .catch(err => console.log(err))

app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }))

// Routes ---------
app.get('/', (req, res) => {
    res.redirect('/blogs')
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

// blogs routes ----
// get all blogs
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch(err => console.log(err.message))
})
// get single blog
app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { title: 'Blog Details', blog: result })
        })
        .catch(err => console.log(err))
})
// delete blog
app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' })
        })
        .catch(err => console.log(err))
})

// create blog
app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then(result => res.redirect('/blogs'))
        .catch(err => console.log(err))
})

app.get('/createblog', (req, res) => {
    res.render('create', { title: 'Create Blog' })
})

app.use((req, res) => {
    res.render('404', { title: '404 Page Not Found' })
})