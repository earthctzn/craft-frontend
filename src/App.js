import React, { Component } from 'react';
import './app.css'
import { connect } from 'react-redux'
import BreweryContainer from './containers/BreweryContainer';
import LoginInput from './components/LoginInput';
import SignupInput from './components/SignupInput';
import { fetchBreweries } from './actions/breweryActions'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'
import SelectedBrewery from './components/SelectedBrewery';
import Nav from './components/Nav'


class App extends Component {

  componentDidMount() { 
    this.props.fetchBreweries()
  }

  loading = () => {
    if(this.props.loading === true) {
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
              <BreweryContainer />
            </Route>
            <Route path="/login" >
              <LoginInput />
            </Route>
            <Route path="/signup" >
              <SignupInput />
            </Route>
            <Route path="/selected-brewery" >
              <SelectedBrewery />
            </Route>

            
          </Switch>
        </div>
        
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loading: state.loading
  })
}

export default connect(mapStateToProps,{fetchBreweries})(App);
