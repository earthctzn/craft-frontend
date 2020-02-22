
import React, { Component } from 'react'
import { connect } from 'react-redux'
import  Brewery from './brewery'



class BreweriesList extends Component {

    render(){
        return(
            <div> 
                <Brewery breweries={this.props.all} /> 
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return {
        all: state.breweries
    }
}

export default connect(mapStateToProps)(BreweriesList)