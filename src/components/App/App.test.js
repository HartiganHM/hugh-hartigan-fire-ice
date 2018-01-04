import { App, mapStateToProps, mapDispatchToProps } from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App tests', () => {
  it('Should match the snapshot', () => {
    const mockGetHousesData = jest.fn();
    const renderedApp = shallow(<App getHousesData={mockGetHousesData} />);
    expect(renderedApp).toBeDefined;
  });

  describe('mapDispatchToProps tests', () => {
    it('Should call dispatch when getHousesData is called', () => {

    });
  });
});
