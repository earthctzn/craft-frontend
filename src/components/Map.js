import React, { Component } from 'react';
import { InfoWindowContent } from './ComponentStyles'
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker, 
    InfoWindow 
} from 'react-google-maps'



class MyMap extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showInfoWindow: true,
            breweries: null,
            brewery: null     
        }
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    renderMarker = (passedLat, passedLng) => {
        return this.props.brewery ?
        (  
            <Marker
                position={{
                    lat: passedLat, 
                    lng: passedLng
                }}
                onClick={this.handleOnClick}
            />
        )
        :
        (  this.props.breweries.map(brewery => {
                return(
                    <div key={Math.random()}>
                        <Marker
                            key={Math.random()}
                            position={{
                                lat: parseFloat(brewery.latitude), 
                                lng: parseFloat(brewery.longitude) 
                            }}
                            onClick={()=> this.setState({ 
                                brewery: brewery
                            })}
                            
                        />   
                    </div>
                )

            })  
        )
    }
    
    handleOnClick = () => {
        this.setState({
            showInfoWindow: true,
            brewery: this.props.brewery
        })
    }

    render() {
        const passedLat = parseFloat(this.props.defaultCenter.lat) || 37.780079
        const passedLng = parseFloat(this.props.defaultCenter.lng) || -122.420174
        const brewery = this.state.brewery
        return(
            <>
                <GoogleMap 
                    defaultZoom={13} 
                    defaultCenter={{
                        lat: passedLat,
                        lng: passedLng
                    }}    
                />
                
                {this.renderMarker(passedLat, passedLng)}
                {this.state.brewery && (
                    <InfoWindow 
                        key={Math.random()}
                        position={{
                            lat: parseFloat(brewery.latitude),
                            lng: parseFloat(brewery.longitude) 
                        }}
                        onCloseClick={() => {
                            this.setState({
                                brewery: null
                            })
                        }}
                    >
                        <InfoWindowContent key={Math.random()}>
                            <h4>{brewery.name}</h4>
                            <p>{brewery.street}{" "}{ brewery.city}{" "}{brewery.state}{" "}</p>
                            <h5>Tel: { brewery.phone }</h5>
                            <a href={brewery.website_url}>{brewery.website_url}</a>
                        </InfoWindowContent>
                    </InfoWindow> 
                )} 
                
            </>
        ) 
        
    }
}

const Map = withScriptjs(withGoogleMap(MyMap))


export default Map