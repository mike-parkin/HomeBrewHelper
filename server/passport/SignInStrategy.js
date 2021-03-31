const Strategy = require('passport-local').Strategy


const loginStrategy = new Strategy(function(username, password, done) {
    const user = username;
    console.log(user)
    done('validation failed', null)
})

module.exports = loginStrategy

