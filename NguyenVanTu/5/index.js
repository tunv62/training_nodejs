const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const contactController = require('./controllers/contact')
const aboutController = require('./controllers/about')
const postStoreController = require('./controllers/postStore')
const postContentController = require('./controllers/postContent')
const pageNotFoundController = require('./controllers/pageNotFound')

mongoose.connect('mongodb://localhost/BlogPost', {useNewUrlParser: true})

const app = express()

const customMiddleWare = (req, res, next) => {
    console.log('middle ware of new post called')
    next()
}

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload())
app.use('/post/new', customMiddleWare)

app.listen(4000, () => {
    console.log('app on port 4000')
})

app.get('/', homeController)

app.get('/contact', contactController)

app.get('/about', aboutController)

app.get('/post/new', newPostController)

app.post('/post/store', postStoreController)

app.get('/post/:id', postContentController)

app.get('*', pageNotFoundController)
