import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    
    
    return (
        <div className="nav">
            <div className='nav-link'>
                <Link to='/beerlist'>Beer Recipes</Link>
            </div>
            <div className='nav-link'>
                <Link to='/fermentables'>Grains/Fermentables</Link>
            </div>
            <div className='nav-link'>
                <Link to='/hopslist'>Hops</Link>
            </div>
            <div className='nav-link'>
                <Link to='/yeast'>Yeast</Link>
            </div>
        </div>
    )
}



export default Nav