const mongoose = require('mongoose')

const accSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    accept: {
        type: String,
        default: false
    },
    token: String,
    expire: Date
})

const account = mongoose.model('account', accSchema)
module.exports = account