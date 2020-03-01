import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { WelcomeCard } from './ComponentStyles'

class Home extends Component {
    state = {
        isLoggedIn: false
    }

    componentWillMount() {
        if(this.props.user) {
            this.setState({
                isLoggedIn: true
            })
        }
    }
    render() {
        // debugger
        console.log(this.state.isLoggedIn)
        return this.state.isLoggedIn ? 
        (
            <WelcomeCard>
                
                <h1>
                    Hey there {this.props.user.username}
                </h1>
            </WelcomeCard>

        )
        :
        (<Redirect to="/" /> ) 
        
    }
}

const mapStateToProps = state => {
    return {
        user: state.users.user
    }
}

export default connect(mapStateToProps)(Home)