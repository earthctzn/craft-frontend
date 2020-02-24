import React, { Component } from 'react'
import BreweriesList from '../components/BreweriesList'



class BreweryContainer extends Component {
    render() {
        return (
            <BreweriesList all={this.props.all}/>
        )
    }
}



export default BreweryContainer 