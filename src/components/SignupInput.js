import React, { Component } from 'react';
import { LoginCard } from './ComponentStyles'

class SignupInput extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    handleInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        // this.signuUpUser(this.state)
        this.setState({
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        })
    }

    render() {
        return (
            <LoginCard >
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        id='username'
                        type="text" 
                        placeholder="username"
                        value={this.state.username}
                        onChange={e => this.handleInputChange(e)}
                    >
                    </input>
                    <input 
                        id="email"
                        type="text" 
                        placeholder="email"
                        value={this.state.email}
                        onChange={e => this.handleInputChange(e)}
                    >
                    </input>
                    <input 
                        id="password"
                        type="text" 
                        placeholder="password"
                        value={this.state.password}
                        onChange={e => this.handleInputChange(e)}
                    >
                    </input>
                    <input
                        id="password_confirmation"
                        type="text" 
                        placeholder="password confirmation"
                        value={this.state.password_confirmation}
                        onChange={e => this.handleInputChange(e)}
                    >
                    </input>
                    <button type="submit"> Sign Up </button>
                </form>
            </LoginCard>
        )
    }
}

export default SignupInput