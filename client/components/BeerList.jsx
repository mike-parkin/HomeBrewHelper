import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchBeers } from '../actions/beers'

const BeerList = (props) => {
    const beers = props.beers

    useEffect(() => {
        props.dispatch(fetchBeers())
    }, [])

    return (
        <>
            <h1>here's a list of recipes for ya</h1>
            <ul>
                {beers.map(beer => {
                    return (
                        <li>{beer.name}</li>
                    )
                })}    
            </ul>

        </>
     )
}

const mapStateToProps = (globalState) => {
    return {
        beers: globalState.beers
    }
}

export default connect(mapStateToProps)(BeerList)