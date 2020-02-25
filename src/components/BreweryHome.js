import React,  { Component } from 'react'
import Map from './Map'
import { BreweryCard, MapCard, AddressCard } from './ComponentStyles'


const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY


class BreweryHome extends Component {


    render() {
        const { brewery } = this.props
        return (
            <>
                <div className='thumbnail-container' >
                    <div className='thumbnail'>
                        <iframe src={brewery.website_url} frameBorder='0'></iframe>
                    </div>  
                </div>
                {/* <BreweryCard>
                    <h3>{brewery.name}</h3>
                    <h4>Type: {brewery.brewery_type} </h4>
                    <AddressCard >
                        {brewery.street}
                        {' '}
                        {brewery.city}
                        {' '}
                        {brewery.state}
                    </AddressCard>
                    <a href={brewery.website_url}>Visit our site</a>
                </BreweryCard> */}
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
                            borderColor: "black",
                        }}/>}
                    />
                </MapCard>
            </>
        )
    }
}

export default BreweryHome