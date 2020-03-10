import React, { Component } from 'react'
import '../app.css'
import { Link } from 'react-router-dom'



class Nav extends Component  {

    // Commented out code is Facebook login for later.

     
    render() {
        return (
            <nav>
                <ul className="nav-links">
                    <Link to="/login" className='nav-link'><button>Login</button></Link>
                    <Link to="/signup" className='nav-link'><button>Signup</button></Link>
                    {/* <a href='http://localhost:3000/api/v1/auth/facebook/redirect'>Login with Facebook</a> */}
                </ul>
            </nav>
        )
    }
        
}


export default Nav
 
