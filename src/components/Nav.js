import React, {Component} from 'react'
import '../app.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class Nav extends Component {


    render() {
        
        return (
            <nav>
                <ul className="nav-links">
                    {this.props.user ? <Link to="/home" className='nav-link'><li>Home</li></Link> : null}
                    <Link to="/login" className='nav-link'><li>Login</li></Link>
                    <Link to="/signup" className='nav-link'><li>Signup</li></Link>
                    <Link to="/logout" className='nav-link'><li>logout</li></Link>
                </ul>
            </nav>
        )
        
    }
}

const mapStateToProps = state => {
    return {
       user: state.users 
    }
    
}
export default connect(mapStateToProps)(Nav)