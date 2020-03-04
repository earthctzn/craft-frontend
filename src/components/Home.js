import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { WelcomeCard, MapCard} from './ComponentStyles'
import { fetchBreweriesByCity } from '../actions/breweryActions'
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
        this.revGeoCodeLocation = this.revGeoCodeLocation.bind(this)
    }

    UNSAFE_componentWillMount() {
        console.log(this.props.user)
        if(this.props.user) {
            this.setState({
                isLoggedIn: true
            })
        }
    }

    revGeoCodeLocation() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.lng}&sensor=false&key=${API_KEY}`)
        .then(res => res.json())
        .then(locData => this.props.fetchBreweriesByCity(locData.results[0].address_components[3].long_name))
        .catch(err => alert(err))
    }


    
    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.setLocation, this.handleLocationErrors);
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
        this.revGeoCodeLocation()
        
    }

    renderMap() {
        return this.state.lat && this.state.lng ?
        (
            <MapCard>  
                <Map 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`} 
                    loadingElement={<div style={{ height: "100%" }}/>}
                    containerElement={<div style={{ height: "100%" }}/>}
                    breweries={this.props.breweries}
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

    handleLocationErrors(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.")
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.")
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.")
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.")
              break;
            default:
              alert("An unknown error occurred.")
        }
    }

    renderWelcome() {
        return this.state.isLoggedIn ? 
        (  
            <>
                <WelcomeCard>
                    <h1>
                        Hey there {this.props.user.username}
                    </h1>
                    <button onClick={this.getLocation}>Breweries Near You</button>
                </WelcomeCard>
                {}
            </>
        )
        :
        (  
             <Redirect to="/" /> 
        ) 
    }

    loading = () => {
        if(this.props.loading ) {
          return (
            <h1>Loading...</h1>
          )
        }
    }

    render() {
        this.loading()
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
        user: state.users.user,
        breweries: state.breweries.breweriesArr,
        loading: state.breweries.loading
    }
}

export default connect(mapStateToProps, {fetchBreweriesByCity})(Home)