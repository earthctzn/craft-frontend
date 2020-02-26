import React, { Component } from 'react';
import { LoginCard } from './ComponentStyles'

class LoginInput extends Component {
    state = {
        email: '',
        password: ''
    }

    handleInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        // LoginUser(this.state)
        this.setState({
            email: '',
            password: ''
        })        
    }

    render() {
        return (
            <LoginCard >
                <h3>Login To See all breweries!</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        id='email'
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
                    <button type="submit" > Log In </button>
                </form>
            </LoginCard>
        )
    }
}

export default LoginInput