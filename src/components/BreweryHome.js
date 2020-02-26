import React,  { Component } from 'react'
import Map from './Map'
import Brewery from './Brewery'
import { SingleBrewery, MapCard, AddressCard } from './ComponentStyles'


const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY


class BreweryHome extends Component {


    render() {
        const { brewery } = this.props
        return (
            <>
                {/* <div className='thumbnail-container' >
                    <div className='thumbnail'>
                        <iframe src={brewery.website_url} frameBorder='0'></iframe>
                    </div>  
                </div> */}
                <SingleBrewery>
                    <Brewery brewery={brewery}/>
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
                            height: "80%", 
                            width: "98.7%",
                            borderRadius: ".3in",
                            borderStyle: "solid",
                            borderColor: "black"
                        }}/>}
                    />
                </MapCard>
            </>
        )
    }
}

export default BreweryHome