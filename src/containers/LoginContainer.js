import React from 'react'
import { loginUser } from '../actions/loginActions'
import LoginInput from '../components/LoginInput'
import { connect } from 'react-redux'

class LoginContainer extends React.Component {


    submitHandler = async (token, user) => {
       await this.props.loginUser(token, user)
    }
    
    render() {
        return (
            <div>
                <LoginInput handleSubmit={this.submitHandler} />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    loginUser: (csrf_token, user) =>  {dispatch(loginUser(csrf_token, user))}
})
export default connect(null, mapDispatchToProps)(LoginContainer)