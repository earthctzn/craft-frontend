import React, {Component} from 'react'
import '../app.css'
import { Link } from 'react-router-dom'



class Nav extends Component {


    render() {
        return (
            <nav>
                <ul className="nav-links">
                    <Link to="/" className='nav-link'>
                        <li>Home</li>
                    </Link>
                    <Link to="/login" className='nav-link'>
                        <li>Login</li>
                    </Link>
                    <Link to="/signup" className='nav-link'>
                        <li>Signup</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}
export default Nav