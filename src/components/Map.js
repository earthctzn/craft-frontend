import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'



class MyMap extends Component {

    render() {
        const passedLat = parseFloat(this.props.defaultCenter.lat) || 37.780079
        const passedLng = parseFloat(this.props.defaultCenter.lng) || -122.420174 
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
                    position={{lat: passedLat, lng: passedLng}}
                />
            </>
        ) 
        
    }
}

const Map = withScriptjs(withGoogleMap(MyMap))

export default Map