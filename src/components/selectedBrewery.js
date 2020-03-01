
import React, { Component } from 'react'
import { connect } from 'react-redux'
import BreweryHome from './BreweryHome'



class SelectedBrewery extends Component {
    
    render(){    
        const brewery = this.props.breweries.brewery
        // debugger
        return(
            <>
                <BreweryHome brewery={brewery}/>
            </>
        )   
    }

}


const mapStateToProps = state => {
    return {
        breweries: state.breweries
    }
}

export default connect(mapStateToProps)(SelectedBrewery)