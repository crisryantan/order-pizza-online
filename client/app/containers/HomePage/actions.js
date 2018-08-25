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

export function requestPageDataSuccess(ingredients) {
  return {
    type: REQUEST_DATA_SUCCESS,
    ingredients,
  };
}

export function requestPageDataError(error) {
  return {
    type: REQUEST_DATA_ERROR,
    error,
  };
}