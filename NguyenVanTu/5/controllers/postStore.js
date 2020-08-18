const path = require('path')
const BlogPost = require('../models/BlogPost')

module.exports = (req, res) => {
    let img = req.files.img
    img.mv(path.resolve(__dirname, '../public/upload/', img.name), function(err){
        BlogPost.create({
            ...req.body,
            pathImage: '/upload/' + img.name
        }, function(error){
            res.redirect('/')
        })
    })
}