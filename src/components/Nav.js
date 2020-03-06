import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../app.css'
import { Link } from 'react-router-dom'
// import { loginWithFaceBook } from '../actions/userActions'



class Nav extends Component  {

    // Commented out code is Facebook login for later.

    // handleClick = () => {
    //     this.props.loginWithFaceBook(this.props.token)
    // }
     
    render() {
        return (
            <nav>
                <ul className="nav-links">
                    <Link to="/login" className='nav-link'><button>Login</button></Link>
                    <Link to="/signup" className='nav-link'><button>Signup</button></Link>
                    {/* <button onClick={this.handleClick}>Login With Facebook</button> */}
                    {/* <a href='http://localhost:3000/api/v1/auth/facebook/callback'>try this</a> */}
                </ul>
            </nav>
        )
    }
        
}

// const mapStateToProps = state => {
//    return {
//        token: state.tokens
//    } 
// }

export default Nav
//  connect( mapStateToProps, {loginWithFaceBook })( Nav )   
