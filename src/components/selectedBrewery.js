
import React, { Component } from 'react'
import { connect } from 'react-redux'
import  Brewery from './Brewery'



class SelectedBrewery extends Component {


    renderBrewery = () => {
        return(
           <Brewery brewery={this.props.brewery} />
        )
    }

    render() {
        return (
            this.renderBrewery()
        )
    }

}
const mapStateToProps = state => {
    return {
        brewery: state.breweries.brewery
    }
}

export default connect(mapStateToProps)(SelectedBrewery)