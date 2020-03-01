import React from 'react'
import '../app.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



const UserNav = (props) =>  {
     
    return (
        <nav>
            <ul className="nav-links">
                <button>{props.user.username}</button>
                <Link to="/home" className='nav-link'><button>Home</button></Link>
                <Link to="/breweries" className='nav-link'><button>Breweries</button></Link>
                <Link to="/logout" className='nav-link'><button>logout</button></Link>
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