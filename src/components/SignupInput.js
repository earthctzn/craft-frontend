import React, { Component } from 'react';
import { LoginCard } from './ComponentStyles'
import { connect } from 'react-redux'
import { ErrorComponent } from './ErrorComponent';
import { Redirect } from 'react-router-dom'



class SignupInput extends Component {

    constructor(props) {
        super(props)
            this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            shouldRedirect: false
        }
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
        this.signupUser(this.state)
        this.setState({
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        })
        this.props.clearErrors()

    }
    signupUser =  async (user) => {
   
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        headers.append('Accepts', 'application/json')
        headers.append('X-CSRF-Token', document.cookie.split('=')[1])
    
        
        const formData = {user: {
            username: user.username,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation 
        }};
    
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(formData)
        };
    
        try{
            const response = await fetch('http://localhost:3000/api/v1/signup', options, {withCredentials: true})
            const dataObj = await response.json();
            if (dataObj.errors){
                this.props.setErrors(dataObj)
            }else{
                this.props.setUser(dataObj)
            }
        } catch(data) {
            return {errors: data}
        };
        
    };

    render() {
        return this.state.shouldRedirect ? 
         (<Redirect to="/home" /> ) 
         : 
         (
            <>
                <LoginCard >
                    <h3>Signup below:</h3>
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
                            type="password" 
                            placeholder="password"
                            value={this.state.password}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <input
                            id="password_confirmation"
                            type="password" 
                            placeholder="password confirmation"
                            value={this.state.password_confirmation}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button type="submit"> Sign Up </button>
                    </form>
                </LoginCard>
                <div>
                  {this.renderErrors()}  
                </div>
                
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupInput)