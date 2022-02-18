const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

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
app.use('/blogs', blogRoutes)

app.use((req, res) => {
    res.render('404', { title: '404 Page Not Found' })
})