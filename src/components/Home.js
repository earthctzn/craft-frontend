import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <div>
                <h1>This is the home page</h1>
                <Link to="/breweries" > <button>Breweries</button></Link>
                <Link to="/breweries/:id/review"></Link>

            </div>
        )
    }
}

export default Home