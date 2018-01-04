import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render () {
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words } = this.props.houseData;
    const listOfTitles = titles.map(title => <div>Title: {title}</div>)

    return (
      <div className='Card'>
        <h2>{name}</h2>
        <div>Founded: {founded || 'N/A'}</div>
        <div>Words {words || 'N/A'}</div>
        {listOfTitles}
        <div>Coat of Arms: {coatOfArms}</div>
      </div>
    )
  }
}

export default Card;