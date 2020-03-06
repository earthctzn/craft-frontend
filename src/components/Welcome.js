import React, {Component } from 'react'
import { WelcomeCard } from './ComponentStyles'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

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
                <h2>Login or Signup to start!</h2>
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