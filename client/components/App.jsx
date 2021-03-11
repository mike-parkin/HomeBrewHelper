import React, { useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import BeerList from './BeerList'

const App = (props) => {
   
    return ( 
        <div className = "app" >
            <Router>
                <Header />
                <Nav />
                <div className = "page-content" >
                    <Route path = '/' exact component = { Home } /> 
                    <Route path = '/Beerlist' component = { BeerList } />
                </div>
            </Router> 
        </div>
    )
}

export default connect()(App)