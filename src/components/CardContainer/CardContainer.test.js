import { CardContainer, mapStateToProps } from './CardContainer';
import React from 'react';
import { shallow } from 'enzyme';
import housesData from '../../data/mockHousesData';

describe('CardContainer tests', () => {
  it('Should match the snapshot', () => {
    const mockHousesData = housesData;
    const renderedCardContainer = shallow(
      <CardContainer housesData={mockHousesData} />
    );

    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('Should show a loading image if housesData is empty', () => {
    const mockHousesData = [];
    const renderedCardContainer = shallow(
      <CardContainer housesData={mockHousesData} />
    );
    const expected = 1;

    expect(renderedCardContainer.find('#wolf').length).toEqual(expected);
  });

  it('Should render Cards if housesData has content', () => {
    const mockHousesData = housesData;
    const renderedCardContainer = shallow(
      <CardContainer housesData={mockHousesData} />
    );
    const expected = mockHousesData.length;

    expect(renderedCardContainer.find('Card').length).toEqual(expected);
  });

  describe('mapStateToProps tests', () => {
    it('Should pull housesData from the store', () => {
      const mockStore = {
        housesData: housesData
      };
      const result = mapStateToProps(mockStore);

      expect(result.housesData).toEqual(mockStore.housesData);
    });
  });
});
