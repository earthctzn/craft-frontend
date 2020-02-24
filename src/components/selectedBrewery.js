
import React, { Component } from 'react'
import { connect } from 'react-redux'
import BreweryHome from './BreweryHome'



class SelectedBrewery extends Component {


    renderBrewery = () => {
        const { brewery } = this.props
        return(
            <>
                <BreweryHome brewery={brewery}/>
            </>
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