const mongoose = require('mongoose')
const BlogPost = require('../models/BlogPost')

mongoose.connect('mongodb://localhost/test_my_database', {useNewUrlParser: true})

var id = '5f3a2897e4724529e4103480'
BlogPost.findByIdAndDelete(id, (err, blog)=>{
    console.log(err, blog)
})