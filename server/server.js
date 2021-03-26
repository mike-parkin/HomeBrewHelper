const express = require('express')
const path = require('path')

const beerRoutes = require('./routes/beers')
const hopRoutes = require('./routes/hops')
const fermentableRoutes = require('./routes/fermentables')
const yeastRoutes = require('./routes/yeast')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/beers', beerRoutes)
server.use('/api/v1/hops', hopRoutes)
server.use('/api/v1/fermentables', fermentableRoutes)
server.use('/api/v1/yeast', yeastRoutes)

module.exports = server