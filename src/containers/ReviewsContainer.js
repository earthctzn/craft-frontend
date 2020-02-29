import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from '../components/Review'


class ReviewsContainer extends Component {


    renderReview = () => {
       return this.props.reviews.reviewsArr.map(rev =>   <Review key={rev.id} review={rev}/>)
    }


    render() {
        return (
          this.renderReview()
        )
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviews
    }
}

export default connect(mapStateToProps)(ReviewsContainer) 