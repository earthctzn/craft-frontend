import React, { Component } from 'react';
import './app.css'
import { connect } from 'react-redux'
import BreweryContainer from './components/breweryContainer';
import { fetchBreweries } from './actions/breweryActions'


class App extends Component {

  componentDidMount() { 
    this.props.fetchBreweries()
  }

  render(){
    return (
      <div className="App">
        <BreweryContainer all={this.props.breweries}/>
      </div>
    );
  }
}




const mapStateToProps = state => {
  return {
    breweries: state.breweries
  }
}

export default connect(mapStateToProps, {fetchBreweries})(App);
