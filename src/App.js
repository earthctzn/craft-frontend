// import React, { Component } from 'react';
// import './app.css'
// import { connect } from 'react-redux'

// //Containers
// import BreweriesContainer from './containers/BreweriesContainer';
// import ReviewsContainer from './containers/ReviewsContainer'

// //Components
// import Nav from './components/Nav'
// import Welcome from './components/Welcome';
// import Home from './components/Home'
// import LoginInput from './components/LoginInput';
// import SelectedBrewery from './components/SelectedBrewery';
// import UserNav from './components/UserNav'
// import SignupInput from './components/SignupInput';

// //Actions
// import { fetchBreweries } from './actions/breweryActions'
// import { fetchReviews } from './actions/reviewActions'

// import { 
//   BrowserRouter as Router, 
//   Switch, 
//   Route
// } from 'react-router-dom'



// class App extends Component {
  

//   componentDidMount() {
//     this.loading()
//     // fetch('http://localhost:3000/api/v1/cookiefy')
//     this.props.fetchBreweries()
//     this.props.fetchReviews()
//     console.log(this.props.store)
    
//   }

//   loading = () => {
//     if(this.props.store.breweries.loading || this.props.store.reviews.loading) {

import React, { Component } from 'react';
import './app.css'
import { connect } from 'react-redux'

//Containers
import BreweriesContainer from './containers/BreweriesContainer';
import ReviewsContainer from './containers/ReviewsContainer'

//Components
import Nav from './components/Nav'
import Welcome from './components/Welcome';
import Home from './components/Home'
import LoginInput from './components/LoginInput';
import SelectedBrewery from './components/SelectedBrewery';
import UserNav from './components/UserNav'
import SignupInput from './components/SignupInput';

//Actions
import { fetchBreweries } from './actions/breweryActions'
import { fetchReviews } from './actions/reviewActions'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'



class App extends Component {
  

  componentDidMount() {
    this.loading()
    // fetch('http://localhost:3000/api/v1/cookiefy')
    this.props.fetchBreweries()
    this.props.fetchReviews()
    console.log(this.props.store)
    
  }

  loading = () => {
    if(this.props.store.breweries.loading || this.props.store.reviews.loading) {
      return (
        <h1>Loading...</h1>
      )
    }
  }

  render(){
    return (
      <Router>
        <div className="App">          
          {this.props.user ? <UserNav/> : <Nav /> }
          <Switch>

            <Route exact path="/">
              <Welcome />
            </Route>

            <Route path="/breweries/:id/reviews" >
              <ReviewsContainer />
            </Route>

            <Route path="/breweries/:id">
              <SelectedBrewery />
            </Route>

            <Route path="/breweries" >
              <BreweriesContainer />
            </Route>

            <Route path="/login" >
              <LoginInput />
            </Route>

            <Route path="/signup" >
              <SignupInput />
            </Route>

            <Route path="/home" >
              <Home />
            </Route>

            
          </Switch>
        </div>
        
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    store: state,
    user: state.users.user
  })
}

export default connect(mapStateToProps,{fetchBreweries, fetchReviews})(App);
