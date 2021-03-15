import React, { useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchHops } from '../actions/hops'

import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import BeerList from './BeerList'
import Grainslist from './GrainsList'
import HopsList from './HopsList'

const App = (props) => {

    useEffect(() => {
        props.dispatch(fetchHops())
    }, [])

    return ( 
        <div className="app" >
            <Header />
            <Router>
                <div className = "page-content" >
                    <Nav />
                    <div className='main-content'>
                        <Route path='/' exact component = { Home } /> 
                        <Route path='/Beerlist' component = { BeerList } />
                        <Route path='/grainslist' component = { Grainslist } />
                        <Route path='/hopslist' component= { HopsList } />
                    </div>
                </div>
            </Router> 
        </div>
    )
}

const mapStateToProps = (globalState) => {
    return {
        hops: globalState.hops
    }
}

export default connect(mapStateToProps)(App)