import React, { Component } from 'react';
import './app.css'
import { connect } from 'react-redux'
import BreweriesContainer from './containers/BreweriesContainer';
// import Review from './components/Review'
import LoginInput from './components/LoginInput';
import Welcome from './components/Welcome';
import ReviewsContainer from './containers/ReviewsContainer'
import SelectedBrewery from './components/SelectedBrewery';
import Nav from './components/Nav'
// import userNav from './components/userNav'
import SignupInput from './components/SignupInput';
import { fetchBreweries } from './actions/breweryActions'
import { fetchReviews } from './actions/reviewActions'
import Home from './components/Home'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'



class App extends Component {
  

  componentDidMount() { 
    // fetch('http://localhost:3000/api/v1/cookiefy')
    this.props.fetchBreweries()
    this.props.fetchReviews()
  }

  loading = () => {
    if(this.props.loading) {
      return (
        <h1>Loading...</h1>
      )
    }
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/selected-brewery" >
              <SelectedBrewery />
            </Route>
            <Route path="/breweries/:id/reviews" >
              <ReviewsContainer />
            </Route>
            <Route path="/breweries/:id" render={props => (
              <SelectedBrewery {...props} />
            )}/>
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
    loading: state.loading,
    user: state.users
  })
}

export default connect(mapStateToProps,{fetchBreweries, fetchReviews})(App);
