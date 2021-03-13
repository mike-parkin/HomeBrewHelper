import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    
    
    return (
        <div className="nav">
            <Link to='/beerlist'>Beer Recipes</Link>
            <Link to='/grainslist'>Grains</Link>
        </div>
    )
}



export default Nav