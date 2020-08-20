import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from '../components/Review'
import { Redirect, Link } from 'react-router-dom'
import { SingleBrewery } from '../components/ComponentStyles'
import Brewery from '../components/Brewery'


class ReviewsContainer extends Component {

    renderReviews = () => {
       return this.props.brewery.reviews.map(rev => <Review key={Math.random()} review={rev}  /> )
    }

    render() {
        
        return this.props.isLoggedIn ? 
        (
            <SingleBrewery>
                <Brewery brewery={this.props.brewery} />
                <Link to="/breweries/id"><button>Back</button></Link>
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
        user: state.users.user,
        isLoggedIn: state.users.loggedIn 
    }
}


export default connect(mapStateToProps)(ReviewsContainer) 