const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/test_my_database', {useNewUrlParser: true})
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// app.listen = function listen() {
//     var server = http.createServer(this);
//     return server.listen.apply(server, arguments);
//   };
  
app.listen(4000, () => {
    console.log('app on port 4000')
})

app.get('/', (req, res)=>{
    BlogPost.find({}, function(err, posts){
        console.log(posts)
        res.render('index', {
            blogposts: posts
        })
    })
})

app.get('/contact', (req, res)=>{
    res.render('contact')
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/post', (req, res)=>{
    res.render('post')
})

app.get('/post/new', (req, res)=>{
    res.render('create')
})

// app.post('/posts/store', (req, res)=>{
//     BlogPost.create(req.body, (error, blogposts)=>{
//         res.redirect('/')
//     })
// })
// app.get('/post/:id', (req, res)=>{
//     BlogPost.findById(req.params.id, function(err, detailPost){
//         res.render('/post', {
//             detailPost
//         })
//     })
// })
// app.get('*', function(req, res){
//     res.header(404)
//     res.render('error')
// })
