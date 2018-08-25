/*
 *
 * SpaceMissions reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_ERROR,
} from './constants';

const initialState = fromJS({
  ingredients: [],
  loading: false,
});

function spaceMissionsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return state.set('loading', true);

    case REQUEST_DATA_SUCCESS:
      return state
        .set('loading', false)
        .set('ingredients', fromJS(action.ingredients))

    case REQUEST_DATA_ERROR:
      return state.set('loading', false);

    default:
      return state;
  }
}

export default spaceMissionsReducer;