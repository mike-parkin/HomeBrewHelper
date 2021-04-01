import React from 'react'

const YeastCard = (props) => {
    const yeast = props.yeast
    return (
        <div className='yeast card'>
            <h3>{yeast.name}</h3>
            <p>
                Description: {yeast.description}
            </p>
        </div>
    )

}

export default YeastCard