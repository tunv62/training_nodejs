const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    author: String,
    datePosted: {
        type: Date,
        default: new Date()
    },
    pathImage: String
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)
module.exports = BlogPost