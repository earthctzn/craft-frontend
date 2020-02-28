import React from 'react'
import '../app.css'
import { Link } from 'react-router-dom'



const Nav = () =>  {
     
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/home" className='nav-link'><li>Home</li></Link>
                <Link to="/login" className='nav-link'><li>Login</li></Link>
                <Link to="/signup" className='nav-link'><li>Signup</li></Link>
                <Link to="/logout" className='nav-link'><li>logout</li></Link>
            </ul>
        </nav>
    )
        
}


export default Nav