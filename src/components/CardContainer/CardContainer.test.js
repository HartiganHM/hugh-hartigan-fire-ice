import { CardContainer } from './CardContainer';
import React from 'react';
import { shallow } from 'enzyme';
import housesData from '../../data/mockHousesData';

describe('CardContainer tests', () => {
  it('Should match the snapshot', () => {
    const mockHousesData = housesData;
    const renderedCardContainer = shallow(<CardContainer housesData={mockHousesData}/>);

    expect(renderedCardContainer).toMatchSnapshot();
  })
})