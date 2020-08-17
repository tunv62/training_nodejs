const mongoose = require('mongoose')
const BlogPost = require('../models/BlogPost')

mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: false})

BlogPost.create({
    title: 'this is title',
    body: 'this is bode, dmeo content',
}, (error, blogpost2)=>{
    console.log(error, blogpost2)
})
