const express = require('express')
const request = require('superagent')

const apiKey = require('../../apiKey')

const router = express.Router()

const baseUrl = 'https://sandbox-api.brewerydb.com/v2/'

router.get('/', (req, res) => {
    request
        .get(baseUrl + 'yeasts/?key=' + apiKey)
        .then(yeasts => {
            res.json(yeasts)
        })
})

module.exports = router