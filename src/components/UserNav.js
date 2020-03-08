import React, { Component } from 'react'
import '../app.css'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { logOutUser } from '../actions/userActions'
import { getToken } from '../actions/loginActions'



class UserNav extends Component{

    
    handleOnclick = () => {
        this.props.logOutUser(this.props.token)
        
        
    }

    render() {
        return this.props.isLoggedIn ?
        (
            <nav>
                <ul className="nav-links">
                    <button>{this.props.user.username}</button>
                    <Link to="/home" className='nav-link'><button>Home</button></Link>
                    <Link to="/breweries" className='nav-link'><button>Breweries</button></Link>
                    <button onClick={this.handleOnclick}>logout</button>
                </ul>
            </nav>
        )
        :
        (
            <Redirect to="/" />
        )
    }
        
}

const mapStateToProps = state => {
    return {
        user: state.users.user,
        token: state.tokens,
        isLoggedIn: state.users.loggedIn
    }
}

export default connect(mapStateToProps, { logOutUser, getToken })(UserNav)