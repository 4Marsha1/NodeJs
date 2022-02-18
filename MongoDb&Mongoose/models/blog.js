const mongoose = require('mongoose');

// 1. ---------------------- Defining Schema -----------------

// Convention ---------> Capital
const Schema = mongoose.Schema;

// Convention --------> camelCase
const blogSchema = new Schema({
    // title : String
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// 2. ------------------------- Defining Model -----------------

// Convention --------> Capital
// .model(THIS)---------> Should be singular of the collections name
// if collections name == BLOGS, then THIS should be BLOG
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;