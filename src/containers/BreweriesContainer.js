
import React, { Component } from 'react'
import { connect } from 'react-redux'
import  Brewery from '../components/Brewery'
import { BreweryCard } from '../components/ComponentStyles'
import { Redirect } from 'react-router-dom'



class BreweriesContainer extends Component {

    state = {
        toSelectedBrewery: false,
        id: ''
    }

    handleOnClick(e, brewery){
        e.preventDefault()
        this.props.selectedBrewery(brewery);
        this.setState({
            toSelectedBrewery: true,
            id: brewery.id
        })  
    }

    renderBrewery = (props) => {

        let id = this.state.id

        if (this.state.toSelectedBrewery) {
            return  <Redirect to={`/breweries/${id}`}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesContainer)


