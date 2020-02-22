
import React, { Component } from 'react'
import { connect } from 'react-redux'
import  Brewery from './Brewery'




class BreweriesList extends Component {


    renderBrewery = (props) => {
        return props.all.breweriesArr.map(brewery => {
            return(
                <Brewery 
                    selectedBrewery={this.props.selectedBrewery}
                    handleOnClick={this.handleOnClick}
                    key={brewery.id} 
                    brewery={brewery}  
                />
            )
        })
    }

    render() {
        return (
            this.renderBrewery(this.props)
        )
    }

}
const mapStateToProps = state => {
    return {
        all: state.breweries
    }
}
const mapDispatchToProps = dispatch => {
    return ({
        selectedBrewery: (breweryObj) => dispatch({
            type: 'SELECTED_BREWERY', payload: breweryObj
        })
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesList)