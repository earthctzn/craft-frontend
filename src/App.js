
import React, { Component } from 'react';
import './app.css'

//Store and Dispatch access
import { connect } from 'react-redux';

//Containers
import BreweriesContainer from './containers/BreweriesContainer';
import ReviewsContainer from './containers/ReviewsContainer';
import LoginContainer from './containers/LoginContainer';

//Components
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Home from './components/Home';
import SelectedBrewery from './components/SelectedBrewery';
import UserNav from './components/UserNav';
import SignupInput from './components/SignupInput';

//Actions
import { fetchBreweries } from './actions/breweryActions';
import { fetchReviews } from './actions/reviewActions';
import { getToken } from './actions/loginActions';
import { getUser } from './actions/userActions';

//Routing
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';



class App extends Component {
  

  componentDidMount() {
    this.props.getUser()
    this.props.getToken()
    this.props.fetchBreweries()
    this.props.fetchReviews()
    
  }

  loading = () => {
    if(this.props.store.breweries.loading || this.props.store.reviews.loading) {
      return (
        <h1>Loading...</h1>
      )
    }
  }

  render(){
    this.loading()
    return (
      <Router>
        <div className="App">          
          {this.props.user ? <UserNav/> : <Nav /> }
          <Switch>

            <Route exact path="/">
              <Welcome user={this.props.user} />
            </Route>

            <Route path="/breweries/:id/reviews" >
              <ReviewsContainer brewery={this.props.store.breweries.brewery} />
            </Route>

            <Route path="/breweries/:id">
              <SelectedBrewery />
            </Route>

            <Route path="/breweries" >
              <BreweriesContainer brewery={this.props.store.breweries.brewery} />
            </Route>

            <Route path="/login" >
              <LoginContainer />
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


export default connect(
  mapStateToProps, { fetchBreweries, fetchReviews, getToken, getUser })(App);
