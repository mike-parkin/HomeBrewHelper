const express = require('express')
const router = express.Router()
const passport = require('../passport')


router.post('/signin', (req, res, next) => {
    passport.authenticate('local-signin', (error, user, info) => {
        if (error) {
            return res.status(500).json({
                message: error || "Ooops, something happened",
            })
        }
        return res.json(user)
    })(req, res, next)
})

router.post('/signup', (req, res, next) => {
    passport.authenticate('local-signup', (error, user, info) => {
        if (error) {
            return res.status(500).json({
                message: error || "Ooops, something happened",
            })
        }
        return res.json(user)
    })(req, res, next)
})


module.exports = router