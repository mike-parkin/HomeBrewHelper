const Strategy = require('passport-local').Strategy
const User = require('../model/user')

const signUpStrategy = new Strategy(function(username, password, done) {
    
})

module.exports = signUpStrategy