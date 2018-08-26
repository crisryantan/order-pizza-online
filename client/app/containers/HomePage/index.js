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
import Ingredient from 'components/Ingredient';

import { requestPageData } from './actions';
import reducer from './reducer';
import saga from './saga';

import { makeSelectLoading, makeSelectIngredients } from './selectors';

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
  padding: 20px;

  > div {
    border: 1rem double #1a1a1a;
    padding: 2rem;
    position: relative;
    background: #fff;
    transition: all 0.3s;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    flex: 1 1 360px;
  }
`;

const DoughWrapper = styled.div`
  border-right: none;
`;

const MenuWrapper = styled.div`
  overflow-y: scroll;
  border-right: none;
`;

const SummaryWrapper = styled.div`
  border-right: none;
`;

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  state = {
    order: {},
    price: 0,
  };

  componentWillMount() {
    this.props.requestData();
  }

  render() {
    return (
      <div id="main">
        <MainWrapper>
          <DoughWrapper>
            <h5>Pizza University</h5>
          </DoughWrapper>
          <MenuWrapper>
            <ul className="ingredient">
              {this.props.ingredients.map(ingredient => (
                <Ingredient key={ingredient.Id} details={ingredient} />
              ))}
            </ul>
          </MenuWrapper>
          <SummaryWrapper>
            <p>Order Summary</p>
          </SummaryWrapper>
        </MainWrapper>
      </div>
    );
  }
}

HomePage.propTypes = {
  requestData: PropTypes.func,
  ingredients: PropTypes.array,
};

export function mapDispatchToProps(dispatch) {
  return {
    requestData: () => dispatch(requestPageData()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  ingredients: makeSelectIngredients(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'homepage', reducer });
const withSaga = injectSaga({ key: 'homepage', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga,
)(HomePage);
