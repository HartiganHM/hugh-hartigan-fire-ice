import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropTypes from 'prop-types';

export class CardContainer extends Component {
  render() {
    return (
      <div className='CardContainer'>
        <img src={require('./wolf.gif')} />
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