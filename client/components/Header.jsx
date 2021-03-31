import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return ( 
        <div className="header" >
            <Link to='/'>
                <h1 className='title'>Drink all the beers</h1>
            </Link>
        </div>
    )

}

export default Header