const mongoose = require('mongoose')
const mongoose_delete =require('mongoose-delete')

mongoose.connect('mongodb://localhost/BlogPost', {useNewUrlParser: true})

const testSchedule = mongoose.Schema({
    key1: { type: String},
    key2: { type: String}
})

testSchedule.plugin(mongoose_delete)

const test = mongoose.model('test', testSchedule)

module.exports = test