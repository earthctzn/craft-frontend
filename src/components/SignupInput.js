import React, { Component } from 'react';
import { LoginCard } from './ComponentStyles'
import { connect } from 'react-redux'
import { ErrorComponent } from './ErrorComponent';
import { Redirect } from 'react-router-dom'
import { setErrors, setUser, clearErrors} from '../actions/userActions'



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
        this.signupUser(this.props.token, this.state)
        this.setState({
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        })
        this.props.clearErrors()

    }
    signupUser =  async (token, user) => {
   
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        headers.append('Accepts', 'application/json')
        headers.append('X-CSRF-Token', token)
    
        
        const formData = {user: {
            username: user.username,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation 
        }};
    
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(formData),
            credentials: 'include'
        };
    
        try{
            const response = await fetch('https://craft-brew-backend.herokuapp.com/api/v1/signup', options)
            const dataObj = await response.json();
            if (dataObj.errors){
                this.props.setErrors(dataObj)
            }else{
                this.props.setUser(dataObj)
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
        user: state.users.user,
        token: state.tokens
    }
} 


export default connect(mapStateToProps, { setUser, setErrors, clearErrors })(SignupInput)