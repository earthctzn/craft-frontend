import React, { Component } from 'react';

class LoginInput extends Component {
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

    

    render() {
        return (
            <LoginCard >
                <form ></form>
            </LoginCard>
        )
    }
}

export default LoginInput