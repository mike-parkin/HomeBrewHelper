const express = require('express')

const db = require('../db/beers')

const router = express.Router()

router.get('/', (req, res) => {
    db.getBeers()
        .then(beers => {
            return res.json(beers)
        })
})

router.get('/recipe/:id', (req, res) => {
    db.getRecipeGrains(req.params.id)
        .then(recipe => {
            db.getRecipeHops(recipe)
                .then(recipe => {
                    db.getRecipeYeasts(recipe[0])
                        .then(recipe => {
                            console.log('hi', recipe[0][0])
                            res.json(recipe[0][0])
                        })
                })
        })
})


module.exports = router