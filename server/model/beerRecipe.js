const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BeerRecipeSchema = new Schema({
    beer_name: String,
    abv: Number,
    OG: Number,
    FG: Number,
    grains: String,
    hop_additions: String,
    yeast: String,
    mash_time: String,
    boil_time: String,
    other_instructions: String,
    username: String
})

const BeerRecipe = mongoose.model('BeerRecipe', BeerRecipeSchema)

module.export = BeerRecipe