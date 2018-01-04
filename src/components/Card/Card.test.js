import Card from './Card';
import React from 'react';
import { shallow } from 'enzyme';
import mockHousesData from '../../data/mockHousesData';
import { read } from 'fs';

describe('Card tests', () => {
  it('Card should match the snapshot', () => {
    const mockHouseData = mockHousesData[0];
    const renderedCard = shallow(<Card houseData={mockHouseData} />);

    expect(renderedCard).toMatchSnapshot();
  });

  it('Card should not display sworn members by default', () => {
    const mockHouseData = mockHousesData[0];
    const renderedCard = shallow(<Card houseData={mockHouseData} />);
    const expected = 0;

    expect(renderedCard.find('.members').length).toEqual(expected);
  });

  it('Card should display a list of members on click', () => {
    const mockHouseData = mockHousesData[0];
    const renderedCard = shallow(<Card houseData={mockHouseData} />);
    const expected = mockHouseData.swornMembers.length;

    renderedCard.simulate('click');
    expect(renderedCard.find('.members').length).toEqual(8);
  });
});
