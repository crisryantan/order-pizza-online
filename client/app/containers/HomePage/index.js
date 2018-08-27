/*
 * HomePage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { message } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Ingredient from 'components/Ingredient';
import DoughType from 'components/DoughType';
import Header from 'components/Header';
import Order from 'components/Order';
import { HighlightH1 } from 'components/CommonStyled';

import { requestPageData } from './actions';
import reducer from './reducer';
import saga from './saga';

import {
  makeSelectLoading,
  makeSelectIngredients,
  makeSelectDoughTypes,
} from './selectors';

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 95vh;
  padding: 20px;

  .child-wrapper {
    padding: 2rem;
    position: relative;
    background: #fff;
    transition: all 0.3s;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    flex: 1 1 360px;
    overflow-y: scroll;
  }
`;

const DoughWrapper = styled.div`
  border: 1rem double #1a1a1a;
  border-right: none;
`;

const MenuWrapper = styled.div`
  border: 1rem double #1a1a1a;
  border-right: none;

  .ingredient {
    margin-top: 20px;
  }
`;

const SummaryWrapper = styled.div`
  border: 1rem double #1a1a1a;
`;

const defaultState = {
  order: {},
  price: 0,
  dough: 'Thick Crust Pizza',
};

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  state = {
    ...defaultState,
  };

  componentWillMount() {
    this.props.requestData();
  }

  confirmCheckout = () => {
    if (!Object.keys(this.state.order).length) {
      return message.error('Please select atleast 1 ingredient for your pizza');
    }

    this.setState({ ...defaultState });
    return message.success(
      'Transaction successfully created, expect your order to arrive in 30min. or get it free!',
    );
  };

  setDoughType = dough => {
    this.setState({ dough });
  };

  addToOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order, price: this.state.price + 0.5 });
  };

  reducerOrder = key => {
    const order = { ...this.state.order };
    if (order[key] < 2) {
      delete order[key];
    } else {
      order[key] -= 1;
    }
    this.setState({ order, price: this.state.price - 0.5 });
  };

  render() {
    return (
      <div id="main">
        <MainWrapper>
          <DoughWrapper className="child-wrapper">
            <Header />
            <div>
              <ul>
                {this.props.doughTypes.map(doughType => (
                  <DoughType
                    key={doughType.Name}
                    setDoughType={this.setDoughType}
                    {...doughType}
                  />
                ))}
              </ul>
            </div>
          </DoughWrapper>
          <MenuWrapper className="child-wrapper">
            <HighlightH1>Ingredients</HighlightH1>
            <ul className="ingredient">
              {this.props.ingredients.map(ingredient => (
                <Ingredient
                  key={ingredient.Id}
                  addToOrder={this.addToOrder}
                  {...ingredient}
                />
              ))}
            </ul>
          </MenuWrapper>
          <SummaryWrapper className="child-wrapper">
            <Order
              addToOrder={this.addToOrder}
              reducerOrder={this.reducerOrder}
              confirmCheckout={this.confirmCheckout}
              ingredients={this.props.ingredients}
              {...this.state}
            />
          </SummaryWrapper>
        </MainWrapper>
      </div>
    );
  }
}

HomePage.propTypes = {
  requestData: PropTypes.func,
  ingredients: PropTypes.array,
  doughTypes: PropTypes.array,
};

export function mapDispatchToProps(dispatch) {
  return {
    requestData: () => dispatch(requestPageData()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  ingredients: makeSelectIngredients(),
  doughTypes: makeSelectDoughTypes(),
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
