const express = require('express')
const request = require('superagent')

const apiKey = require('../../apiKey')

const router = express.Router()

const baseUrl = 'https://sandbox-api.brewerydb.com/v2/'



router.get('/', (req, res) => {
    request
        .get(baseUrl + 'fermentables/?key=' + apiKey)
        .then(fermnetables => {
            res.json(fermnetables)
        })
})


module.exports = router