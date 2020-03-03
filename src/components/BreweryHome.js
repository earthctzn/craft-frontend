import React,  { Component } from 'react'
import Map from './Map'
import Brewery from './Brewery'
import { SingleBrewery, MapCard } from './ComponentStyles'
import ReviewInput from './ReviewInput'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
 

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY


class BreweryHome extends Component {
    constructor(props){
        super(props)   
        this.state= {
            showRevInput: false,
            isLoggedIn: false
        }
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    
    UNSAFE_componentWillMount() {
        if(this.props.user) {
            this.setState({
                isLoggedIn: true
            })
        }
    }

    handleOnClick = () => {
        this.setState({
            showRevInput: true
        })
    }

    renderReviews = () => {
        this.props.reviews.reviewsArr.map( review => {
           return (
                <blockquote key={review.id}>
                    {review.content}
                        - {review.user.username}
                </blockquote>
            ) 
        })
    }

    render() {
        const { brewery } = this.props
        console.log(this.state)
        return this.state.isLoggedIn ? 
        (
            <>
                <SingleBrewery>
                    <Brewery brewery={brewery} />
                    {this.state.showRevInput ? <ReviewInput brewery={brewery} /> : null}
                    {!this.state.showRevInput ? <button onClick={this.handleOnClick} > Leave a Review </button> : null }
                    <span>Latest Reviews</span>
                    {this.props.review ? <h3>{this.props.review.content} - by: {this.props.review.user.username}</h3> : null }
                </SingleBrewery>
                
                <MapCard>  
                    <Map 
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`} 
                        loadingElement={<div style={{ height: "100%" }}/>}
                        containerElement={<div style={{ height: "100%" }}/>}
                        brewery={brewery}
                        defaultCenter={{
                            lat: `${ brewery.latitude}`, 
                            lng: `${ brewery.longitude}`
                        }} 
                        mapElement={<div style={{ 
                            height: "100%", 
                            width: "100%",
                            borderRadius: ".3in",
                            borderStyle: "solid",
                            borderColor: "black"
                        }}/>}
                    />
                </MapCard>
            </>
        )
        :
        (
            <Redirect to='/' />
        )
           
    }
}

const mapStateToProps = state => {
    return {
        user: state.users.user,
        review: state.reviews.review
    }
}

export default connect(mapStateToProps)(BreweryHome)