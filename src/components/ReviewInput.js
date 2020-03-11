import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReviewInput extends Component {
    state = {
        content: '',
        brewery: null,
        user_id: null
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            user_id: this.props.user.id,
            brewery: this.props.brewery
        })
    }

    handleOnChange = (e) => {
        this.setState({
            ...this.state,
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.content !== ''){
            this.props.revCreate(this.props.token, this.state) 
            this.setState({
                content: '',
                user_id: null,
                brewery: null
            })
        }

    }

    render() {
        return (
            <>
                <form onSubmit={e => this.handleSubmit(e) }>

                    <textarea
                        value={ this.state.content }
                        onChange={ e => this.handleOnChange(e) }
                    ></textarea>

                    <button 
                        type="submit" 
                    > Submit </button>
                    
                </form>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.users.user,
        brewery: state.breweries.brewery,
        token: state.tokens
    }
}

export default connect(mapStateToProps)(ReviewInput)