import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from '../components/Review'
import { Redirect } from 'react-router-dom'



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
       return this.props.reviews.reviewsArr.map(rev =>   <Review key={Math.random()} review={rev}  />)
    }


    render() {
        
        return this.state.isLoggedIn ? 
        (
            this.renderReviews()
        )
        :
        (            
            <Redirect to="/" />
        )
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviews,
        user: state.users.user,
        
    }
}


export default connect(mapStateToProps)(ReviewsContainer) 