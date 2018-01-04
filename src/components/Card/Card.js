import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render () {
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words } = this.props.houseData;

    return (
      <div className='Card'>
        {name}
      </div>
    )
  }
}

export default Card;