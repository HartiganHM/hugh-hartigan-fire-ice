import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../../actions';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../App/App.css';

export class CardContainer extends Component {
  render() {
    const { housesData } = this.props;
    const cards = housesData.map((house, index) => (
      <Card key={index} houseData={house} />
    ));
    const loadingImage = <img id="wolf" src={require('./wolf.gif')} />;
    return (
      <div className="Container">
        {housesData.length ? cards : loadingImage}
      </div>
    );
  }
}

export const mapStateToProps = store => {
  return {
    housesData: store.housesData
  };
};

export default connect(mapStateToProps, null)(CardContainer);

CardContainer.propTypes = {
  housesData: PropTypes.array
};
