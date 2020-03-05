import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from '../components/Review'
import { Redirect } from 'react-router-dom'
import { SingleBrewery } from '../components/ComponentStyles'
import Brewery from '../components/Brewery'



class ReviewsContainer extends Component {
    state={
        isLoggedIn: false
    }

    UNSAFE_componentWillMount() {
        if (this.props.user) {
            this.setState({
                isLoggedIn: true
            })
        }
    }

    loading = () => {
        if(this.props.reviews.loading) {
          return (
            <h1>Loading...</h1>
          )
        }
    }

    renderReviews = () => {
       return this.props.brewery.reviews.map(rev =>   <Review key={Math.random()} review={rev}  />)
    }


    render() {
        
        return this.state.isLoggedIn ? 
        (
            <SingleBrewery>
                <Brewery brewery={this.props.brewery} />
                {this.renderReviews()}
            </SingleBrewery>
            
        )
        :
        (            
            <Redirect to="/" />
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.users.user  
    }
}


export default connect(mapStateToProps)(ReviewsContainer) 