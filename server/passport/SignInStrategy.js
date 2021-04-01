const Strategy = require('passport-local').Strategy
const User = require('../model/user')
const bcrypt = require('bcrypt')

const salt = bcrypt.genSaltSync(10)

const loginStrategy = new Strategy({ 
    passReqToCallback: true, usernameField: 'email'
 }, (req, email, password, done) => {
    User.findOne({ email }).lean().exec((err, user) => {
        if (err) {
            return done(err, null)
        }
        if(!user) {
            return done ('No user found', null)
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password)

        if (!isPasswordValid) {
            console.log('invalid pword')
            return done("Email or password is not valid", null)
        }

        return done(null, user)
    })
})

module.exports = loginStrategy

