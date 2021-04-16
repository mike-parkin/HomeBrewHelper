const express = require('express')
const router = express.Router()
const db = require('../beerRecipes')

router.post('/', (req, res) => {

})

router.get('/', (req, res) => {
    res.send('HI')
})


module.exports = router
