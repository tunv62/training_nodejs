const BlogPost = require('../models/BlogPost')

module.exports = (req, res) => {
    BlogPost.find({}, function (err, posts){
        console.log(req.session)
        res.render('index', {
            blogposts: posts
        })
    })
}