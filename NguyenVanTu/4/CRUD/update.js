const mongoose = require('mongoose')
const BlogPost = require('../models/BlogPost')

mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true})

var id = '5f3a2897e4724529e4103480'
BlogPost.findByIdAndUpdate(id, {
    title: 'title was updated'
}, (err, blogpost)=>{
    console.log(err, blogpost)
})