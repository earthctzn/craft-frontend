import React, { Component } from 'react'
// import { Link, Router } from 'react-router-dom'
import { BreweryCard, AddressCard } from './componentStyles'

export default class Brewery extends Component {

    handleOnClick(e, brewery){
        e.preventDefault()
        
        
    }

    renderBrewery = () => {
        return this.props.breweries.breweriesArr.map(brewery => {
            return(
                // <Router>
                <BreweryCard key={brewery.id} onClick={e => this.handleOnClick(e, brewery)}>
                    <h3>{brewery.name}</h3>
                    <h4>Type: {brewery.brewery_type} </h4>
                        <AddressCard >
                            {brewery.street}
                            {brewery.city} 
                            {brewery.state}
                        </AddressCard>
                        <a href={brewery.website_url}>Visit our site</a>
                    {/* <Link to='/show'></Link> */}
                </BreweryCard>  
                // </Router>
            )
        })
    }

    render() {
        return (
            this.renderBrewery()
        )
    }
}

