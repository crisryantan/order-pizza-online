/*
 * HomePage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { requestPageData } from './actions';
import reducer from './reducer';
import saga from './saga';

import {
  makeSelectLoading,
  makeSelectIngredients,
} from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {

  componentWillMount() {
    this.props.requestData();
  }

  render() {
    return (
      <h1>
        sup
      </h1>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    requestData: () => dispatch(requestPageData()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  ingredients: makeSelectIngredients()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'homepage', reducer });
const withSaga = injectSaga({ key: 'homepage', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga
)(HomePage);