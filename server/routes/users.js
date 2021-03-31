const express = require('express')
const router = express.Router()
const passport = require('../passport')


router.post('/signin', (req, res, next) => {
    passport.authenticate('local-signin', (error, user, info) => {
        if (error) {
            return res.status(500).json({
                message: "Ooops, something happened",
                error: error.message || "internal server error"
            })
        }
        return res.json({
            message: "user is now authenticated"
        })
    })(req, res, next)
})

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/home',
    session: false
}))


module.exports = router