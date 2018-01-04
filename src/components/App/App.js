import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropTypes, { shape, func, string } from 'prop-types';
import CardContainer from '../CardContainer/CardContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getHousesData();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Westeros</h2>
          <CardContainer />
        </div>
        <div className="Display-info" />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    houses: store.houses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHousesData: () => dispatch(actions.populateHouseData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};
