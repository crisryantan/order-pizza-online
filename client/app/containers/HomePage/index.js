/*
 * HomePage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { requestPageData } from './actions';
import reducer from './reducer';
import saga from './saga';

import {
  makeSelectLoading,
  makeSelectIngredients,
} from './selectors';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
  padding: 20px;

  div {
    border: 1rem double #1a1a1a;
    padding: 2rem;
    position: relative;
    background: #fff;
    transition: all .3s;
    box-shadow: 0 5px 5px rgba(0,0,0,.1);
    flex: 1 1 256px;
  }

  *:first-child, *:nth-child(2) {
    border-right: none;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {

  componentWillMount() {
    this.props.requestData();
  }

  render() {
    return (
      <div id="main">
        <Wrapper>
          <div>
            <p>Dough Type</p>
          </div>
          <div>
            <p>Ingredients</p>
          </div>
          <div>
            <p>Order Summary</p>
          </div>
        </Wrapper>
      </div>
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