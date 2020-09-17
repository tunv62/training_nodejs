require('dotenv').config()
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

//demo
const account = require('./models/account')
const nodemailer = require('nodemailer')

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true})

const app = express()

global.loggedIn = null

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload())
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 5 * 60 * 1000
    }
}))
app.use('*', (req, res, next)=>{
    loggedIn = req.session.userId
    next()
})

app.listen(process.env.PORT || 4000, () => {
    console.log('server listen on port 4000')
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

// app.delete('/post/delete/:id', (req, res)={

// })
app.get('/confirm', (req, res)=>{

})

app.get('/demomail', (req, res)=>{
    var transporter =  nodemailer.createTransport({ // config mail server
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'shortenlink.12@gmail.com', //Tài khoản gmail vừa tạo
            pass: 'demosendMailer121' //Mật khẩu tài khoản gmail vừa tạo
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });
    var content = '';
    content += `
        <div style="padding: 10px; background-color: #003375">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
                <span style="color: black">Đây là mail test</span>
            </div>
        </div>
    `;
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'NQH-Test nodemailer',
        to: 'demo.sendmail.11.000@gmail.com',
        subject: 'Test Nodemailer',
        //text: 'Your text is here',//Thường thi mình không dùng cái này thay vào đó mình sử dụng html để dễ edit hơn
        html: content //Nội dung html mình đã tạo trên kia :))
    }
    transporter.sendMail(mainOptions, function(err, info){
        if (err) {
            console.log(err)
            console.log('-----error------')
            res.render('index')
            res.end()
        } else {
            console.log('Message sent: ' +  info.response)
            res.render('confirm')
        }
    });
})

app.use(pageNotFoundController)
