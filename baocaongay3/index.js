const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')
app.set('view engine', 'ejs')


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw());

const fileUpload = require('express-fileupload')
app.use(fileUpload())

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true })

const BlogPost = require('./models/BlogPost.js')




//Đăng ký thư mục public.....
app.use(express.static('public'))

//Tao server
app.listen(4000, () => {
    console.log('OK. App listening on port 4000')
})


app.get('/', (request, response) => {
    BlogPost.find({}, function (error, posts) {
        console.log(posts);
        response.render('index', {
            blogposts: posts
        });
    })
})

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})


app.get('/post/:id', (req, res) => {
    BlogPost.findById(req.params.id, function(error, detailPost){
        res.render('post', {
            detailPost
        })
    })
    
})
// app.get('/post', (req, res) => {
//     res.render('post');

const newPostController = require('./controllers/newPost')
app.get('/posts/new',newPostController)

app.post('/posts/store', function (req, res) {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/upload', image.name), function (error) {
        BlogPost.create({ ...req.body,image: '/upload/' + image.name}, (error, blogpost) => {
            res.redirect('/')
        })
    })
   })
   //
const customMiddleWare = (req, res, next) => {
    console.log('Custom middle ware called')
    next()
}
app.use(customMiddleWare)


const validateMiddleWare = (req, res, next) => {
    if (req.files == null || req.body.title == null || req.body.title == null
   ) {
    return res.redirect('/posts/new')
    }
    next()
   }
   app.use('/posts/new',validateMiddleWare)