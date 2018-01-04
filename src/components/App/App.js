import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class App extends Component {
  componentDidMount() {
    console.log('hi');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Westeros</h2>
          <button
            onClick={() => {
              this.props.fakeAction();
              alert(this.props.fake);
            }}
          >
            {' '}
            FAKE ACTION
          </button>
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
    getHouseData: () => dispatch(actions.populateHouseData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};
