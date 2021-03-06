import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      display: false
    };
  }

  toggleClass = () => {
    const display = this.state.display === false ? true : false;
    this.setState({ display });
  };

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
      <div className='members' key={index}>Sworn Member: {member}</div>
    ));

    return (
      <div className="Card" onClick={() => this.toggleClass()}>
        <h2>{name}</h2>
        <div>Founded: {founded || 'N/A'}</div>
        <div>Words {words || 'N/A'}</div>
        {listOfTitles}
        {listOfSeats}
        <div>Coat of Arms: {coatOfArms}</div>
        {listOfWeapons}
        <div>{this.state.display && listOfMembers}</div>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  houseData: PropTypes.object
};
