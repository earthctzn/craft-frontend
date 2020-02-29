import React, { Component } from 'react';
import { connect } from 'react-redux'
import { LoginCard } from './ComponentStyles'
import { ErrorComponent } from './ErrorComponent'
import { Redirect } from 'react-router-dom'

class LoginInput extends Component {
    state = {
        email: '',
        password: '',
        shouldRedirect: false
    }

    componentDidUpdate(prevProps) {
        if(this.props.user && !prevProps.user) {
           this.setState({
               shouldRedirect: true
           })
        }
    }

    renderErrors = () => {
        return this.props.errors.map(error => <ErrorComponent key={error} error={error} />)
     } 

    handleInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.LoginUser(this.state)
        this.setState({
            email: '',
            password: ''
        })
        this.props.clearErrors()        
    }

    LoginUser = async (user) => {

        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        headers.append('X-CSRF-Token', document.cookie.split('=')[1])
        const formData = { user: {
            email: user.email,
            password: user.password
        }};
        
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(formData)
        };
    
        try{
            const request = new Request('http://localhost:3000/api/v1/login', options)
            const response = await fetch(request);
            const userObj = await response.json()
            if (userObj.errors) {
                this.props.setErrors(userObj)
            }else {
                console.log(userObj)
                this.props.setUser(userObj)
            }
        } catch(data) {
            console.log(data)
        };
    
    };

    render() {
        return this.state.shouldRedirect ? 
         (<Redirect to="/home" /> ) 
         : 
         (
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
                        type="password" 
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

const mapStateToProps = state => {
    return {
        errors: state.users.formErrors,
        user: state.users.user
    }
} 

const mapDispatchToProps = dispatch => {
    return ({
        setUser: (userObj) => dispatch({
            type: 'SET_USER', payload: userObj
        }),
        setErrors: (errObj) => dispatch({
            type: 'ADD_ERRORS', payload: errObj
        }),
        clearErrors: () => dispatch({
            type: 'CLEAR_ERRORS'
        })
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginInput)