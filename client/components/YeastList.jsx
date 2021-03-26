import React from 'react'
import { connect } from 'react-redux'

const YeastList = (props) => {
    const yeastData = props.yeast

    console.log(yeastData)

    return(
        <>
            <h1>I will show you some yeasty goodness</h1>
            {yeastData.map(yeast => {
                <p>{yeast.name}</p>
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