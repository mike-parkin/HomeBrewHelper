const passport = require("passport")

// const localStrategy = require('./LocalStrategy')
const signInStrategy = require('./SignInStrategy')
const signUpStrategy = require('./SignUpStrategy')

passport.use('local-signin', signInStrategy)
passport.use('local-signup', signUpStrategy)

module.exports = passport