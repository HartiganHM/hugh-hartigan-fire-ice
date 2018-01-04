import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropTypes from 'prop-types';

class CardContainer extends Component {
  render() {
    return (
      <div className='CardContainer'>
        I'm a CardContainer!
      </div>
    )
  }
}

export default CardContainer;