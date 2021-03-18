import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import HopCard from './HopCard'

const HopsList = (props) => {
    const hopsData = props.hops

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