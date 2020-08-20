const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {
    const {username, password} = req.body
    User.findOne({username: username}, (err, us) => {
        if(us){
            bcrypt.compare(password, us.password, (error, same) => {
                if(same){
                    req.session.userId = us._id
                    res.redirect('/')
                }
                else res.redirect('/auth/login')
            })
        }
        else res.redirect('/auth/login')
    })
}

