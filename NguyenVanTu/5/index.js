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
const registerController = require('./controllers/register')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const expressSession = require('express-session')
const authMiddleware = require('./middleware/authMiddleware')
const redirectIfAuthMiddleware = require('./middleware/redirectIfAuthMiddleware')
const redirectIfAuthmiddleware = require('./middleware/redirectIfAuthMiddleware')
const logoutController = require('./controllers/logout')

mongoose.connect('mongodb://localhost/BlogPost', {useNewUrlParser: true})

const app = express()

// const customMiddleWare = (req, res, next) => {
//     console.log('middle ware of new post called')
//     next()
// }

global.loggedIn = null

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload())
// app.use('/post/new', customMiddleWare)
app.use(expressSession({
    secret: 'reg and enc'
}))
app.use('*', (req, res, next)=>{
    loggedIn = req.session.userId
    next()
})

app.listen(4000, () => {
    console.log('app on port 4000')
})

app.get('/', homeController)

app.get('/contact', contactController)

app.get('/about', aboutController)

app.get('/post/new', authMiddleware, newPostController)

app.post('/post/store', authMiddleware, postStoreController)

app.get('/post/:id', postContentController)

app.get('/auth/register', redirectIfAuthmiddleware, registerController)

app.post('/user/store', redirectIfAuthMiddleware, storeUserController)

app.get('/auth/login', redirectIfAuthMiddleware, loginController)

app.post('/user/login', redirectIfAuthMiddleware,loginUserController)

app.get('/auth/logout', logoutController)

app.use(pageNotFoundController)
