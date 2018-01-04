import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render () {
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words } = this.props.houseData;
    const listOfTitles = titles.map(title => <div>Title: {title}</div>)

    return (
      <div className='Card'>
        <h2>{name}</h2>
        <span>Founded: {founded || 'N/A'}</span>
        {listOfTitles}
      </div>
    )
  }
}

export default Card;