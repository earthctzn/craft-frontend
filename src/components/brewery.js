import React, { Component } from 'react'

export default class Brewery extends Component {

    renderBrewery = () => {
        return this.props.breweries.breweriesArr.map(brewery => {
            return(
                <div>
                    <h1>{brewery.name}</h1>
                    <p>{brewery.type}</p>
                    <a href={brewery.website_url}>Visit our site.</a>
                </div>
            )
        })
    }

    render() {
        return (
            this.renderBrewery()
        )
    }
}

