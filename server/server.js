const express = require('express')
const path = require('path')

const beerRoutes = require('./routes/beers')
const hopRoutes = require('./routes/hops')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/beers', beerRoutes)
server.use('/api/v1/hops', hopRoutes)

module.exports = server