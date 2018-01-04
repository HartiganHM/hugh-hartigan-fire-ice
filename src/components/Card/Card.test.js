import Card from './Card';
import React from 'react';
import { shallow } from 'enzyme';
import mockHousesData from '../../data/mockHousesData';

describe('Card tests', () => {
  it('Card should match the snapshot', () => {
    const mockHouseData = mockHousesData[0];
    const renderedCard = shallow(<Card houseData={mockHouseData}/>)

    expect(renderedCard).toMatchSnapshot();
  })
})