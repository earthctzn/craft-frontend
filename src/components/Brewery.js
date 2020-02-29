import React, { Component } from 'react'
import { AddressCard } from './ComponentStyles'
import Review from './Review'

class Brewery extends Component {

    render() {

        const {brewery} = this.props

        return (   
            <>
                <h3>{brewery.name}</h3>
                <h4>Type: {brewery.brewery_type} </h4>
                <AddressCard >
                    {brewery.street}
                    {' '}
                    {brewery.city}
                    {' '}
                    {brewery.state}
                </AddressCard>
                {this.props.review ? <Review review={this.props.review}/> : null }
            </>
        )
    }
}


export default Brewery