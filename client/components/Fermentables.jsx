import React from 'react'
import { connect } from 'react-redux'

import FermentableCard from './FermentableCard'

const Fermentables = (props) => {
    const fermData = props.fermentables

    return (
        <>
            <h1>All ya grains and fermentbales</h1>
            <ul>
                {fermData.map(fermentable => {
                    return (
                        <li key={fermentable.id}>
                            <FermentableCard fermentable={fermentable} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
        fermentables: globalState.fermentables
    }
}

export default connect(mapStateToProps)(Fermentables)