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
            display: false,
            showReviews: false,
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

    handleOnClick = (e) => {
        e.preventDefault()
       if (e.target.name === 'rev-inpput') {
            this.setState({
                display: true
            })
        }else {
            this.setState({
                showReviews: true
            })
            
        }

    }

     

    render() {

        const { brewery } = this.props
        return this.state.isLoggedIn ? 
        (
            <>
                <SingleBrewery>
                    <Brewery brewery={brewery} />
                    {this.state.display ? <ReviewInput brewery={brewery} /> : null}
                    {!this.state.display ? <button name='rev-input' onClick={this.handleOnClick} > Leave a Review </button> : null }
                    {' '}
                    {this.state.showReviews ? <Redirect to={`/breweries/${this.props.brewery.id}/reviews`} /> : null}
                    {!this.state.showReviews ? <button name='rev-container' onClick={this.handleOnClick} > Latest Reviews </button> : null }
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