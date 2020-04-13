import React, { Component } from 'react'
import { AddressCard } from './ComponentStyles'


class Brewery extends Component {

    // state={
    //     likes: 0
    // }

    // handleLike = () => {
    //     let like = this.state.likes
    //     this.setState({
    //         likes: like + 1
    //     })
    // }

    render() {

        const {brewery} = this.props

        return (   
            <>
                <h3>{brewery.name}</h3>
                <h4>Type: {brewery.brewery_type} </h4>
                <AddressCard >
                    {brewery.street}
                    {' '}
                    {brewery.city}
                    {' '}
                    {brewery.state}

                </AddressCard>
                {/* {this.state.likes}
                <button onClick={this.handleLike}>Like</button> */}
            
            </>
        )
    }
}


export default Brewery