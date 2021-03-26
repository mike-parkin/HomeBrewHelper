import React, { useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchHops } from '../actions/hops'
import { fetchFermentables } from '../actions/fermentables'
import { fetchYeast } from '../actions/yeast'

import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import BeerList from './BeerList'
import Fermentables from './Fermentables'
import HopsList from './HopsList'
import YeastList from './YeastList'

const App = (props) => {

    useEffect(() => {
        props.dispatch(fetchHops())
        props.dispatch(fetchFermentables())
        props.dispatch(fetchYeast())
    }, [])

    return ( 
        <div className="app" >
            <Header />
            <Router>
                <div className = "page-content" >
                    <Nav />
                    <div className='main-content'>
                        <Route path='/' exact component={ Home } /> 
                        <Route path='/beerlist' component={ BeerList } />
                        <Route path='/fermentables' component={ Fermentables } />
                        <Route path='/hopslist' component={ HopsList } />
                        <Route path='/yeast' component={ YeastList } />
                    </div>
                </div>
            </Router> 
        </div>
    )
}

const mapStateToProps = (globalState) => {
    return {
        hops: globalState.hops,
        fermentables: globalState.fermentables,
        yeast: globalState.yeast
    }
}

export default connect(mapStateToProps)(App)