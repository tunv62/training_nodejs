// const mongoose = require('mongoose')
// const BlogPost = require('./model/BlogPost');
// const { replaceOne } = require('./model/BlogPost');

// mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true });
// BlogPost.create({
//     title :'Đây là sách dạy học lập trình Node.js từ cơ bản ',
//     body :'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng dụng với Node.js thì đây là cuốn sách dành cho bạn'
// },(error,blogpost) => {
//     console.log(error,blogpost)
// })
// //lấy dữ liệu từ Mongodb

// BlogPost.find({},(error,blogpost)=>{
//     console.log(error,bloq)
// })

// BlogPost.find({},(error,blogpost)=>{
//     title : 'Đây là sách dạy học lập trình Node.js từ cơ bản'
// },(error,blogpost)=>{
//     console.log(error,blogpost)
// })

// BlogPost.find({},(error,blogpost)=>{
//     title :' Node.js'
// },(error,blogpost)=>{
//     console.log(error,blogpost)
// })

// //update document

// var id ="5f3a27ddc2d255411c68a936";
// BlogPost.findByIdAndUpdate(id,{
//     title : 'Uplated title'
// },(error,blogpost)=>{
//     console.log(rerror, blogpost)
// })

// // xoa
// var id = "5cb436980b33147489eadfbb";
// BlogPost.findByIdAndDelete(id, (error, blogspot) => {
//  console.log(error, blogspot)
// })