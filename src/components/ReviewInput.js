import React, { Component } from 'react'

class ReviewInput extends Component {
    state = {
        revContent: '',
        brewery: null
    }

    handleOnChange = (e) => {
        this.setState({
            revContent: e.target.value,
            brewery: this.props.brewery
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //call to submit action here
        //need a POST fetch action to the api/v1/reviews/create route.
        this.setState({
            revContent: '',
            brewry: null
        })
    }

    

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <textarea
                    value={ this.state.revContent }
                    onChange={ e => this.handleOnChange(e) }
                ></textarea>
                <button type="submit"> Submit </button>
            </form>
        )
    }
}

export default ReviewInput