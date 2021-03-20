import React from 'react'

const HopCard = (props) => {
    const hop = props.hop
    return (
        <div className="hop card">
            <h3>{hop.name}</h3>
            <p>
                Country of origin: {hop.countryOfOrigin}
            </p>
            <p className='hop-desc'>
                Description: {hop.description}
            </p>
        </div>
    )
} 

export default HopCard