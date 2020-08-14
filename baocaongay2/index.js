

// const express = require('express')
// const app =  express()
// app.use(express.static('public'))
// //tra ve resource cho client
// const path = require('path')

// app.listen(3000,() =>{
//     console.log("app lis on port 3000")
// })


// //tra ve file html

// app.get("/about",(req,res)=>{
//     res.senFile(path,resolve(__dirname,'about.html'))
// })
// app.get("/contact",(req,res)=>{
//     res.senFile(path,resolve(__dirname,'contact.html'))
// })
// app.get("/",(req,res)=>{
//     res.senFile(path,resolve(__dirname,'pages/index.html'))
// })
// app.get('*',function(req,res){
//     res.header(404)
//     res.send('page not fount')
// })
const express = require('express')
const app = new express()
const path = require('path')
const ejs =require('ejs')
app.set('view engine','ejs')

//Đăng ký thư mục public.
app.use(express.static('public'))

app.listen(4000, () => {
    console.log('App listening on port 4000')
})


app.get('/', (request, response) =>{
    response.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/post',(req,res)=>{
    res.render('post')
})