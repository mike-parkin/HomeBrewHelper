import React from 'react'

const FermentableCard = (props) => {
    const ferm = props.fermentable
    return (
        <div className="fermentable card">
            <h3>{ferm.name}</h3>
            <p>
                Description: {ferm.description}
            </p>
        </div>
    )
}

export default FermentableCard