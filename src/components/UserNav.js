import React from 'react'
import '../app.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SingleBrewery } from './ComponentStyles'

const handleOnclick = () => {
    fetch('http://localhost:3000/api/v1/logout', {
        method: 'DELETE',
        credentials: 'include'
    })
    .then(res => res.json())
    .then(data => renderLogout(data))
}

const renderLogout = (data) => {
    return <SingleBrewery><h1>{data}</h1></SingleBrewery>
}
const UserNav = (props) =>  {


     
    return (
        <nav>
            <ul className="nav-links">
                <button>{props.user.username}</button>
                <Link to="/home" className='nav-link'><button>Home</button></Link>
                <Link to="/breweries" className='nav-link'><button>Breweries</button></Link>
                <button onClick={handleOnclick}>logout</button>
            </ul>
        </nav>
    )
        
}

const mapStateToProps = state => {
    return {
        user: state.users.user
    }
}

export default connect(mapStateToProps)(UserNav)