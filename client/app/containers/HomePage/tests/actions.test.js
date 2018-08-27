import {
  requestPageData,
  requestPageDataSuccess,
  requestPageDataError,
} from '../actions';

import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_ERROR,
} from '../constants';

describe('HomePage actions', () => {
  describe('requestPageData', () => {
    it('has a type of REQUEST_DATA', () => {
      const expected = {
        type: REQUEST_DATA,
      };

      expect(requestPageData()).toEqual(expected);
    });
  });

  describe('requestPageData', () => {
    it('has a type of REQUEST_DATA_SUCCESS', () => {
      const ingredients = [];
      const doughTypes = [];
      const expected = {
        type: REQUEST_DATA_SUCCESS,
        ingredients,
        doughTypes,
      };
      expect(requestPageDataSuccess(ingredients, doughTypes)).toEqual(expected);
    });
  });

  describe('requestPageData', () => {
    it('has a type of REQUEST_DATA_ERROR', () => {
      const error = 'something went wrong.';
      const expected = {
        type: REQUEST_DATA_ERROR,
        error,
      };
      expect(requestPageDataError(error)).toEqual(expected);
    });
  });
});
