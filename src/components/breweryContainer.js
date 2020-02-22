import React, { Component } from 'react'
import BreweriesList from './breweriesList'
import { connect } from 'react-redux'





class BreweryContainer extends Component {
    render() {
        return (
            <BreweriesList all={this.props.all}/>
        )
    }
}

const mapStateToProps = state => {
   return {
       all: state.breweries
   }
}

export default connect(mapStateToProps)(BreweryContainer) 