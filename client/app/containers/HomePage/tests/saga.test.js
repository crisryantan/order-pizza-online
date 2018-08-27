import { takeLatest } from 'redux-saga/effects';
import { REQUEST_DATA } from '../constants';
import homepageSaga, { requestPageData as requestPageDataSaga } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('homepageSaga', () => {
  const homepageSagaTest = homepageSaga();

  it('should start a task to watch for the requestPageData action', () => {
    const expected = takeLatest(REQUEST_DATA, requestPageDataSaga);
    const actual = homepageSagaTest.next().value;

    expect(actual).toEqual(expected);
  });
});
