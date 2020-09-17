const blogPost = require('../models/BlogPost')

module.exports = (req, res) => {
    blogPost.find({}, function(err, data){
        res.render('album', {
            post: data
        })
    })
}