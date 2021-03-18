import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getHops } from '../apis/hops'

import HopCard from './HopCard'

const HopsList = (props) => {
    const hopsData = props.hops
     console.log(hopsData)
    return (
        <>
            <h1>List of hops</h1>
            <ul>
                {hopsData.map(hop => {
                    return(
                        <li key={hop.id}>
                            <HopCard hop={hop} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
        hops: globalState.hops
    }
}

export default connect(mapStateToProps)(HopsList)