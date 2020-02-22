import React, { Component } from 'react';
import { connect } from 'react-redux'
import BreweryContainer from './components/breweryContainer';
import { fetchBreweries } from './actions/breweries'


class App extends Component {

  componentDidMount() { 
    this.props.fetchBreweries()
  }

  render(){
    return (
      <div className="App">
        <h1>Brewery Container</h1>
        <BreweryContainer all={this.props.breweries}/>
      </div>
    );
  }
}



// const mapDispatchToProps = dispatch => {
//   return {
//     fetchBreweries: () => dispatch(fetchBreweries())
//   }
// }

const mapStateToProps = state => {
  return {
    breweries: state.breweries
  }
}

export default connect(mapStateToProps, {fetchBreweries})(App);
