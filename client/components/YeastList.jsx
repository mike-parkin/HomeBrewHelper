import React from 'react'
import { connect } from 'react-redux'

import YeastCard from './YeastCard'

const YeastList = (props) => {
    const yeastData = props.yeast

    return(
        <>
            <h1>I will show you some yeasty goodness</h1>
            {yeastData.map(yeast => {
                return (
                    <YeastCard yeast={yeast} />
                )
            })}
        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
        yeast: globalState.yeast
    }
}

export default connect(mapStateToProps)(YeastList)