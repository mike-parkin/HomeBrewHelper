import React, { useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import BeerList from './BeerList'
import Grainslist from './GrainsList'

const App = (props) => {
   
    return ( 
        <div className="app" >
            <Header />
            <Router>
                <div className = "page-content" >
                    <Nav />
                    <div className='main-content'>
                        <Route path ='/' exact component = { Home } /> 
                        <Route path ='/Beerlist' component = { BeerList } />
                        <Route path ='/grainslist' component = { Grainslist } />
                    </div>
                </div>
            </Router> 
        </div>
    )
}

export default connect()(App)