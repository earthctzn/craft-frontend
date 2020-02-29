import React from 'react'
import '../app.css'
import { Link } from 'react-router-dom'



const UserNav = () =>  {
     
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/home" className='nav-link'><li>Home</li></Link>
                <Link to="/breweries" className='nav-link'><li>Breweries</li></Link>
                <Link to="/logout" className='nav-link'><li>logout</li></Link>
            </ul>
        </nav>
    )
        
}


export default UserNav