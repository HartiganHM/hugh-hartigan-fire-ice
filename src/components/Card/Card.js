import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css'

class Card extends Component {
  toggleClass = (display) => {
    return display = true;
  }

  render() {
    const {
      name,
      founded,
      seats,
      titles,
      coatOfArms,
      ancestralWeapons,
      words,
      swornMembers
    } = this.props.houseData;

    const listOfTitles = titles.map((title, index) => (
      <div key={index}>Title: {title}</div>
    ));

    const listOfWeapons = ancestralWeapons.map((weapon, index) => (
      <div key={index}>Weapon: {weapon}</div>
    ));

    const listOfSeats = seats.map((seat, index) => (
      <div key={index}>Seat: {seat}</div>
    ));

    const listOfMembers = swornMembers.map((member, index) => (
      <div key={index}>Sworn Member: {member}</div>
    ));

    let display = false;

    return (
      <div className="Card" onClick={(display) => this.toggleClass(display)}>
        <h2>{name}</h2>
        <div>Founded: {founded || 'N/A'}</div>
        <div>Words {words || 'N/A'}</div>
        {listOfTitles}
        {listOfSeats}
        <div>Coat of Arms: {coatOfArms}</div>
        {listOfWeapons}
        <div>{display && listOfMembers}</div>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  houseData: PropTypes.object
};
