
import React, { Component } from 'react'
import { connect } from 'react-redux'
import BreweryHome from './BreweryHome'



class SelectedBrewery extends Component {


    render(){
        console.log(this.props.breweries.breweriesArr)        
        const  brewery  = this.props.breweries.breweriesArr.find( brewery => brewery.id === this.props.match.params.id) 
        debugger
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