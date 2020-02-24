import React, {Component} from 'react'
import '../app.css'
import { Link } from 'react-router-dom'



class Nav extends Component {


    render() {
        return (
            <nav>
                <ul className="nav-links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                    <Link to="/signup">
                        <li>Signup</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}
export default Nav