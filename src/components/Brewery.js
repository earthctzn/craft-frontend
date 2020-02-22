import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { BreweryCard, AddressCard } from './ComponentStyles'
import { Redirect } from 'react-router-dom'

class Brewery extends Component {

    state = {
        toSelectedBrewery: false
    }

    handleOnClick(e, brewery){
        e.preventDefault()
        this.props.selectedBrewery(brewery);
        this.setState({
            toSelectedBrewery: true
        })  
    }
    componentWillUnmount = () => {
        this.setState({
            toSelectedBrewery: false
        });
    }

    render() {
        if (this.state.toSelectedBrewery === true) {
            

          return  <Redirect to='/selected-brewery'/>
        } 
        const {brewery} = this.props

        return (   
            <BreweryCard key={brewery.id} onClick={e => this.handleOnClick(e, brewery)} >
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
            </BreweryCard> 
        )
    }
}




export default Brewery