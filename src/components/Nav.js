import React from 'react'
import '../app.css'
import { Link } from 'react-router-dom'



const Nav = () =>  {
     
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/login" className='nav-link'><button>Login</button></Link>
                <Link to="/signup" className='nav-link'><button>Signup</button></Link>
            </ul>
        </nav>
    )
        
}


export default Nav