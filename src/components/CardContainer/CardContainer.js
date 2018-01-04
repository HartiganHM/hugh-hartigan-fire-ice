import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../App/App.css'

export class CardContainer extends Component {
  render() {
    return (
      <div className='CardContainer'>
        <img id='wolf' src={require('./wolf.gif')} />
      </div>
    )
  }
}

export const mapStateToProps = store => {
  return {
    housesData: store.housesData
  }
}

export default connect(mapStateToProps, null)(CardContainer);