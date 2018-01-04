import Card from './Card';
import React from 'react';
import { shallow } from 'enzyme';

describe('Card tests', () => {
  it('Card should match the snapshot', () => {
    const renderedCard = shallow(<Card />)

    expect(renderedCard).toBeDefined;
  })
})