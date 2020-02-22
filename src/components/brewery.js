import React, { Component } from 'react'
// import { Link, Router } from 'react-router-dom'
import { BreweryCard } from './componentStyles'

export default class Brewery extends Component {

    renderBrewery = () => {
        return this.props.breweries.breweriesArr.map(brewery => {
            return(
                // <Router>
                    <BreweryCard key={brewery.id}>
                        <h3>{brewery.name}</h3>
                        <p>{brewery.type}</p>
                        <a href={brewery.website_url}>Visit our site.</a>
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

