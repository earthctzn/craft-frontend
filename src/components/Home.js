import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { WelcomeCard, MapCard} from './ComponentStyles'
import { fetchBreweries } from '../actions/breweryActions'
import Map from './Map'


const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            lat: null,
            lng: null
        }
        this.getLocation = this.getLocation.bind(this)
        this.setLocation = this.setLocation.bind(this)
    }

    UNSAFE_componentWillMount() {
        if(this.props.user) {
            this.setState({
                isLoggedIn: true
            })
        }
    }


    
    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.setLocation);
        } else { 
          alert("Geolocation is not supported by this browser.");
        }
    }

    setLocation(position) {
        console.log(position.coords.longitude)
        this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        })
    }

    renderMap() {
        return this.state.lat && this.state.lng ?
        (
            <MapCard>  
                <Map 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`} 
                    loadingElement={<div style={{ height: "100%" }}/>}
                    containerElement={<div style={{ height: "100%" }}/>}
                    
                    defaultCenter={{
                        lat: `${this.state.lat}` || 37.780079,
                        lng: `${this.state.lng}` || -122.420174
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
        )
        :
        (null)
    }

    renderWelcome() {
        return this.state.isLoggedIn ? 
        (
        <WelcomeCard>
            <h1>
                Hey there {this.props.user.username}
            </h1>
            <button onClick={this.getLocation}>Breweries Near You</button>
        </WelcomeCard>
        )
        :
        (<Redirect to="/" /> ) 
    }

    render() {
        return(
            <React.Fragment>
                {this.renderWelcome()}
                {this.renderMap()}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.users.user
    }
}

export default connect(mapStateToProps, {fetchBreweries})(Home)