import React, { useState, useEffect } from 'react'

import { getHops } from '../apis/hops'

const HopsList = (props) => {
    const [ hops, setHops ] = useState({})

    const fetchHops = () => {
        getHops()
            .then(hops => {
                console.log(hops)
                setHops(hops)
            })
    }

    useEffect(() => {
        fetchHops()
    }, [])
    
    return (
        <>
            <h1>List of hops</h1>
            <ul>
                {/* {hops.data.map(hop => {
                    <li>{hop.name}</li>
                })} */}
            </ul>
        </>
    )
}

export default HopsList