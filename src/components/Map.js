import React, { Component } from 'react';
import { MapInfoWindow } from './ComponentStyles'
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker, 
    InfoWindow } from 'react-google-maps'



class MyMap extends Component {

    state = {
        selectedBrewery: ''        
    }
    
    handleOnClick = () => {
        this.setState({
            selectedBrewery: this.props.brewery
        })
    }

    render() {
        const passedLat = parseFloat(this.props.defaultCenter.lat) || 37.780079
        const passedLng = parseFloat(this.props.defaultCenter.lng) || -122.420174
        const brewery = this.props.brewery
        return(
            <>
                <GoogleMap 
                    defaultZoom={13} 
                    defaultCenter={{
                        lat: passedLat,
                        lng: passedLng
                    }}    
                /> 
                <Marker
                    position={{
                        lat: passedLat, 
                        lng: passedLng
                    }}
                    onClick={e => this.handleOnClick(e)}
                />
                {this.state.selectedBrewery && (
                    <InfoWindow 
                        position={{
                            lat: passedLat,
                            lng: passedLng
                        }}
                        onCloseClick={() => {
                            this.setState({
                                selectedBrewery: ''
                            })
                        }}
                    >
                        <MapInfoWindow>
                            <h4>{brewery.name}</h4>
                            <h5>Tel: { brewery.phone }</h5>
                            <a href={brewery.website_url}>{brewery.website_url}</a>
                        </MapInfoWindow>
                    </InfoWindow>
                )}
                
            </>
        ) 
        
    }
}

const Map = withScriptjs(withGoogleMap(MyMap))

export default Map