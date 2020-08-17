const express = require('express')
const app = new express()
const path = require('path')

const mongoose = require('mongoose');
mongoose.connect('mongodb://locahost/team1', {useNewUrlParser:true})


const ejs = require('ejs')
const { response } = require('express')
app.set('view engine','ejs')
app.use(express.static('public'))


app.listen(4000,() => {
    console.log('App listening on port 4000')


})
app.get('/',(request,response)=>{
    response.render('index')
})
app.get('/about',(req,res)=>{
    response.render('about');
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/post', (req,res) =>{
    res.render('post')
})

app.get('/posts/new' ,(req,res)=>{
    res.render('create')
})