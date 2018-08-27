import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_ERROR,
} from './constants';

export function requestPageData() {
  return {
    type: REQUEST_DATA,
  };
}

export function requestPageDataSuccess(ingredients, doughTypes) {
  return {
    type: REQUEST_DATA_SUCCESS,
    ingredients,
    doughTypes,
  };
}

export function requestPageDataError(error) {
  return {
    type: REQUEST_DATA_ERROR,
    error,
  };
}
