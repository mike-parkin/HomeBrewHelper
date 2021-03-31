const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const passport = require('./passport')
const beerRoutes = require('./routes/beers')
const hopRoutes = require('./routes/hops')
const fermentableRoutes = require('./routes/fermentables')
const yeastRoutes = require('./routes/yeast')
const userRoutes = require('./routes/users')

const server = express()
mongoose.connect('mongodb://localhost/authentification-expample', {useNewUrlParser: true})

// middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(passport.initialize())
// server.use(passport.session())

server.use('/api/v1/beers', beerRoutes)
server.use('/api/v1/hops', hopRoutes)
server.use('/api/v1/fermentables', fermentableRoutes)
server.use('/api/v1/yeast', yeastRoutes)
server.use('/api/v1/authentication', userRoutes)

module.exports = server