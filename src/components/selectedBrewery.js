
import React, { Component } from 'react'
import { connect } from 'react-redux'
import BreweryHome from './BreweryHome'



class SelectedBrewery extends Component {
    
    // renderBrewHome = ({selectedBrewery}) => {
    //     console.log("selected brewery props", this.props)
    //     return selectedBrewery ? (
    //         <BreweryHome brewery={selectedBrewery}/>
    //     ) : (
    //         <div><h1>Loading...</h1></div>
    //     )
    // }


    render(){     
        console.log(this.props.breweries.brewery)
        const brewery = this.props.breweries.brewery
        // debugger
        return(
            <>
                <BreweryHome brewery={brewery}/>
               {/* {this.renderBrewHome()}  */}
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