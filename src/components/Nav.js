import React, { Component } from 'react'
import '../app.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fbUser } from '../actions/loginActions';



class Nav extends Component  {

    // Commented out code is Facebook login for later.
    handleClick = (event) => {
        event.preventDefault()
        this.props.fbUser(this.props.csrf_token)
    }
     
    render() {
        return (
            <nav>
                <ul className="nav-links">
                    <Link to="/login" className='nav-link'><button>Login</button></Link>
                    <Link to="/signup" className='nav-link'><button>Signup</button></Link>
                    {/* <button onClick={e => this.handleClick(e)} >Login with Facebook</button> */}
                </ul>
            </nav>
        )
    }
        
}

const mapStateToProps = state => {
    return {
        csrf_token: state.tokens
    }
}

export default connect(mapStateToProps, {fbUser})(Nav)
 
