import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { SingleBrewery } from './ComponentStyles'

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
        console.log(this.state.isLoggedIn)
        return this.state.isLoggedIn ? 
        (
            <SingleBrewery>
                <h1>
                    Hey there {this.props.user.username}
                </h1>
            </SingleBrewery>

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