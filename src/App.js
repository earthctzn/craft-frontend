import React, { Component } from 'react';
import './app.css'
import { connect } from 'react-redux'
import BreweryContainer from './components/BreweryContainer';
import { fetchBreweries } from './actions/breweryActions'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'
import SelectedBrewery from './components/selectedBrewery';
import Nav from './components/Nav'


class App extends Component {

  componentDidMount() { 
    this.props.fetchBreweries()
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
            <Route path="/selected-brewery" >
              {console.log(this.props)}
              <SelectedBrewery/>
            </Route>
            
          </Switch>
        </div>
        
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    brewery: state.brewery
  })
}

export default connect(mapStateToProps,{fetchBreweries})(App);
