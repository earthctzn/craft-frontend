
import React, { Component } from 'react'
import { connect } from 'react-redux'
import  Brewery from './Brewery'
import { BreweryCard } from './ComponentStyles'
import { Redirect } from 'react-router-dom'



class BreweriesList extends Component {

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

    renderBrewery = (props) => {
        if (this.state.toSelectedBrewery === true) {
            return  <Redirect to='/selected-brewery'/>
        } 
        return props.all.breweriesArr.map(brewery => {
            return(
                <BreweryCard key={brewery.id} onClick={e => this.handleOnClick(e, brewery)} >
                    <Brewery
                        key={brewery.id}
                        brewery={brewery}
                        selectedBrewery={this.props.selectedBrewery}
                        handleOnClick={this.handleOnClick}
                    />
                </BreweryCard> 
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