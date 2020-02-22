import React, {Component} from 'react'
import '../app.css'
class Nav extends Component {


    render() {
        return (
            <nav>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>Breweries</li>
                </ul>
            </nav>
        )
    }
}
export default Nav