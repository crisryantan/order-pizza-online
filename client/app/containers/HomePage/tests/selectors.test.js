import { fromJS } from 'immutable';

import {
  selectHomepage,
  makeSelectLoading,
  makeSelectIngredients,
  makeSelectDoughTypes,
} from '../selectors';

describe('selectHomepage', () => {
  it('should select the homePage state', () => {
    const homePageState = fromJS({});
    const mockedState = fromJS({
      homepage: homePageState,
    });
    expect(selectHomepage(mockedState)).toEqual(homePageState);
  });
});

describe('makeSelectIngredients', () => {
  const selector = makeSelectIngredients();
  it('should select the items state', () => {
    const ingredients = [];
    const mockedState = fromJS({
      homepage: {
        ingredients,
      },
    });
    expect(selector(mockedState)).toEqual([]);
  });
});

describe('makeSelectDoughTypes', () => {
  const selector = makeSelectDoughTypes();
  it('should select the items state', () => {
    const doughTypes = [];
    const mockedState = fromJS({
      homepage: {
        doughTypes,
      },
    });
    expect(selector(mockedState)).toEqual([]);
  });
});

describe('makeSelectLoading', () => {
  const selector = makeSelectLoading();
  it('should select the fetching state', () => {
    const loading = true;
    const mockedState = fromJS({
      homepage: {
        loading,
      },
    });
    expect(selector(mockedState)).toEqual(loading);
  });
});
