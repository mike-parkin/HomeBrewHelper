const Strategy = require('passport-local').Strategy
const User = require('../model/user')
const bcrypt = require('bcrypt')

const salt = bcrypt.genSaltSync(10)

const signUpStrategy = new Strategy({passReqToCallback: true, usernameField: 'email' }, (req, email, password, done) => {    
    User.findOne({ email }).lean().exec((err, user) => {
        if(err) {
            return done(err, null)
        }
        if(user) {
            return done('User already exists', user)
        }

        const encryptedPassword = bcrypt.hashSync(password, salt)
        let newUser = new User({
            username: req.body.username,
            email,
            password: encryptedPassword
        })

        newUser.save((error, inserted) => {
            if (error) {
                return done(error, null)
            }
            // delete inserted.password
            return done(null, inserted)
        })
    })
})

module.exports = signUpStrategy