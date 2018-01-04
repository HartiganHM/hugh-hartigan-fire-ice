import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      name,
      founded,
      seats,
      titles,
      coatOfArms,
      ancestralWeapons,
      words
    } = this.props.houseData;

    const listOfTitles = titles.map(title => <div>Title: {title}</div>);

    const listOfWeapons = ancestralWeapons.map(weapon => (
      <div>Weapon: {weapon}</div>
    ));

    const listOfSeats = seats.map(seat => <div>Seat: {seat}</div>);

    return (
      <div className="Card">
        <h2>{name}</h2>
        <div>Founded: {founded || 'N/A'}</div>
        <div>Words {words || 'N/A'}</div>
        {listOfTitles}
        {listOfSeats}
        <div>Coat of Arms: {coatOfArms}</div>
        {listOfWeapons}
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  houseData: PropTypes.object
};
