import { App, mapDispatchToProps } from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App tests', () => {
  it('Should match the snapshot', () => {
    const mockGetHousesData = jest.fn();
    const renderedApp = shallow(<App getHousesData={mockGetHousesData} />);
    expect(renderedApp).toMatchSnapshot();
  });

  describe('mapDispatchToProps tests', () => {
    it('Should call dispatch when getHousesData is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.getHousesData();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
