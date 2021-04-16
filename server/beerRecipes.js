const BeerRecipe = require('./model/beerRecipe')

const addBeer = (data) => {
    BeerRecipe.save(data)
        .then(res => {
            return res.status(200)
        })
        .catch(err => {
            return err
        })
}

module.exports = {
    addBeer
}