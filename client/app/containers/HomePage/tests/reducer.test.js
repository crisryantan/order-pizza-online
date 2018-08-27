import { fromJS } from 'immutable';
import { ingredients, doughTypes } from 'utils/tests/commondata';
import homePageReducer from '../reducer';

import {
  requestPageData,
  requestPageDataSuccess,
  requestPageDataError,
} from '../actions';

describe('homePageReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      ingredients: [],
      doughTypes: [],
      loading: false,
    });
  });

  it('returns the initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(state);
  });

  it('should handle the requestPageData action correctly', () => {
    const expectedResult = fromJS({
      ingredients: [],
      doughTypes: [],
      loading: true,
    });
    expect(homePageReducer(state, requestPageData())).toEqual(expectedResult);
  });

  it('should handle the requestPageDataSuccess action correctly', () => {
    const expectedResult = fromJS({
      ingredients,
      doughTypes,
      loading: false,
    });
    expect(
      homePageReducer(state, requestPageDataSuccess(ingredients, doughTypes)),
    ).toEqual(expectedResult);
  });

  it('should handle the requestPageDataError action correctly', () => {
    const error = 'something went wrong';
    const expectedResult = fromJS({
      ingredients: [],
      doughTypes: [],
      loading: false,
    });
    expect(homePageReducer(state, requestPageDataError(error))).toEqual(
      expectedResult,
    );
  });
});
