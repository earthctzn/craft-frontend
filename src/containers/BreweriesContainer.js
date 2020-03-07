
import React, { Component } from 'react'
import { connect } from 'react-redux'
import  Brewery from '../components/Brewery'
import { BreweryCard, BreweriesGrid, CardContent} from '../components/ComponentStyles'
import { Redirect } from 'react-router-dom'
import { fetchSelectedBrewery } from '../actions/breweryActions'




class BreweriesContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            toSelectedBrewery: false,
            id: ''
        }
    }


    handleOnClick(e, brewery){
        e.preventDefault()
        this.props.fetchSelectedBrewery( this.props.token, brewery)

    }

    componentDidUpdate() {
        if(Object.keys(this.props.selectedBrew).length > 0){
            this.setState({
                toSelectedBrewery: true,
                id: this.props.selectedBrew.id
            })
        }
    }

    renderBrewery = (props) => {

        let id = this.state.id

        if (this.state.toSelectedBrewery) {
            return  <Redirect to={`/breweries/${id}`}/>
        } 
        return props.all.breweriesArr.map(brewery => {
            return(
                <BreweryCard key={brewery.id} onClick={e => this.handleOnClick(e, brewery)} >
                   <CardContent>
                    <Brewery
                            key={brewery.id}
                            brewery={brewery}
                            handleOnClick={this.handleOnClick}
                        />
                   </CardContent>
                </BreweryCard> 
            )
        })
    }

    render() {
        return this.props.isLoggedIn ?
        (
            <BreweriesGrid>
                {this.renderBrewery(this.props)}
            </BreweriesGrid>
            
        )
        :
        (
            <Redirect to='/' />
        )
    }

}



const mapStateToProps = state => {
    return {
        all: state.breweries,
        user: state.users.user,
        token: state.tokens,
        selectedBrew: state.breweries.brewery,
        isLoggedIn: state.users.loggedIn
    }
}


export default connect(mapStateToProps, { fetchSelectedBrewery })(BreweriesContainer)


