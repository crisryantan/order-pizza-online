import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { getRequest } from 'utils/request';

import { REQUEST_DATA } from './constants';
import { requestPageDataSuccess, requestPageDataError } from './actions';

export function* requestPageData() {
  try {
    const { data: ingredients } = yield call(getRequest, '/ingredients');
    console.log(ingredients)
    yield put(requestPageDataSuccess(ingredients || []));
  } catch (error) {
    console.log(error)
    message.error('Something went wrong, please try again.');
    yield put(requestPageDataError(error));
  }
}

export default function* appFlowSaga() {
  yield takeLatest(REQUEST_DATA, requestPageData);
}