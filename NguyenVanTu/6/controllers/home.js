const BlogPost = require('../models/BlogPost')

module.exports = (req, res) => {
    console.log(req.session.userId)
    // console.log(req.session)
    // console.log(req.sessionID)
    BlogPost.find({}, function (err, posts){
        res.render('index', {
            blogposts: posts
        })
    })
}