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
import DoughType from 'components/DoughType';
import Header from 'components/Header';

import { requestPageData } from './actions';
import reducer from './reducer';
import saga from './saga';

import { makeSelectLoading, makeSelectIngredients } from './selectors';

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 95vh;
  padding: 20px;

  .direct-child {
    padding: 2rem;
    position: relative;
    background: #fff;
    transition: all 0.3s;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    flex: 1 1 360px;
  }
`;

const DoughWrapper = styled.div`
  border: 1rem double #1a1a1a;
  border-right: none;
`;

const MenuWrapper = styled.div`
  overflow-y: scroll;
  border: 1rem double #1a1a1a;
  border-right: none;
`;

const SummaryWrapper = styled.div`
  border: 1rem double #1a1a1a;
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
          <DoughWrapper className="direct-child">
            <Header />
            <div>
              <ul>
                <DoughType
                  Url="http://www.bayesianstats.com/wp-content/uploads/thick-pizza-dough-dinner-pinterest-thick-crust-pizza.jpg"
                  Name="Thick"
                  TypeName="Dough"
                />

                <DoughType
                  Url="https://qph.fs.quoracdn.net/main-qimg-77f4a0066abb763b57221734888ad665-c"
                  Name="Thin"
                  TypeName="Dough"
                />
              </ul>
            </div>
          </DoughWrapper>
          <MenuWrapper className="direct-child">
            <ul className="ingredient">
              {this.props.ingredients.map(ingredient => (
                <Ingredient key={ingredient.Id} {...ingredient} />
              ))}
            </ul>
          </MenuWrapper>
          <SummaryWrapper className="direct-child">
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
