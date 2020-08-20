import React, {Component } from 'react'
import { WelcomeCard } from './ComponentStyles'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Welcome extends Component {

    render() {
        return this.props.loggedIn ?
        (
            <Redirect to="/home" />

        )
        :
        (
            <WelcomeCard>
                <h1>Craft</h1>
                <h2><Link to="/login" className='nav-link'><button>Login</button></Link> or <Link to="/signup" className='nav-link'><button>Signup</button></Link> to start!</h2>
            </WelcomeCard>
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedIn: state.users.loggedIn
    }
}

export default connect(mapStateToProps)(Welcome)