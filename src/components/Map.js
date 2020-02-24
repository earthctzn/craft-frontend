import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'



class MyMap extends Component {

    render() {
        console.log(typeof this.props.defaultCenter.lat)
        return(
           <GoogleMap 
                defaultZoom={10} 
                defaultCenter={{lat: parseFloat(this.props.defaultCenter.lat), lng: parseFloat(this.props.defaultCenter.lng) }}    
            /> 
        ) 
        
    }
}

const Map = withScriptjs(withGoogleMap(MyMap))

export default Map