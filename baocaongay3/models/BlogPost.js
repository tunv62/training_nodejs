const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title : String,
    body: String
}) 
//truy cap vao csdl bang ham model
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost