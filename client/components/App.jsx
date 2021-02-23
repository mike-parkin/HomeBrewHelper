import React, { useEffect } from 'react'
import { HashRouter as Router } from 'react-dom'
import { connect } from 'react-redux'

import Home from './Home'
import Header from './Header'
import Nav from './Nav'

const App = (props) => {
    useEffect(() => {
        props.dispatch(fetchFruits())
    })

    return ( 
        <div className = "main" >
            <Router>
                <Header />
                <Nav />
                <div className = "page-content" >
                    <Route path = '/' exact component = { Home } /> 
                </div>
            </Router> 
        </div>
    )
}