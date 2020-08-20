const BlogPost = require('../models/BlogPost')

module.exports = (req, res) => {
    BlogPost.findById(req.params.id, function(err, detailPost){
        res.render('post', {
            detailPost
        })
    })
}