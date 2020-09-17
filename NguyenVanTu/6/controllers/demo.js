// const mongoose_delete = require('mongoose-delete')
const test = require('../models/test')
const objectId = require('mongoose').Types.objectId

// mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true})

// test.create([{ key1: 'value1', key2: 'value1'},
//             { key1: 'value2', key2: 'value2'}], function(err){
//                 console.log(err)
//             })
var id = "5f51ba8935e17919185988b2"
// test.findById(id, function(err, result){
//     if(err) console.log(err)
//     else {
//         result.delete(function(err, re){
//             console.log(err)
//             console.log(re)
//         })
//     }
// })
// test.find({}, function(err, result){
//     if(err) console.log(err)
//     else {
//         console.log(result)
//     }
// })
test.findOneAndUpdate({_id: id}, {key2: 'update'}, function(err){
    console.log(err)
})