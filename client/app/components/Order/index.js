/**
 *
 * Order
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'antd';

import { formatPrice } from 'utils/helpers';
import { StyledButton } from '../CommonStyled';

const StyledLi = styled.li`
  border-bottom: 1px solid #000;
  padding: 2rem 0;
  display: flex;
  font-size: 1.4rem;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;

  .count {
    position: relative;
    overflow: hidden;
    float: left;
    margin-right: 5px;
  }

  .count span {
    display: inline-block;
  }
`;

const StyledUl = styled.ul`
  margin: 20px 0px;
  padding: 0;
`;

const Total = styled.div`
  padding: 0;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-top: 20px;
`;

const ActionBtn = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  :hover {
    color: #d12028;
  }
`;

const CheckoutBtn = styled(StyledButton)`
  float: right;
`;

/* eslint-disable react/prefer-stateless-function */
class Order extends React.PureComponent {
  renderOrder = key => {
    const ingredient = this.props.ingredients.find(item => item.Name === key);
    const count = this.props.order[key];

    return (
      <StyledLi key={key}>
        <span>
          <span>{count} </span>
          {ingredient.Name} {formatPrice(count * 0.5)}
          <ActionBtn onClick={() => this.props.addToOrder(key)}>
            <Icon type="plus" />
          </ActionBtn>
          <ActionBtn onClick={() => this.props.reducerOrder(key)}>
            <Icon type="minus" />
          </ActionBtn>
        </span>
      </StyledLi>
    );
  };

  render() {
    const { price, order, dough, confirmCheckout } = this.props;
    const orderIds = Object.keys(order);

    return (
      <div>
        <h1>Order Summary</h1>
        <StyledUl>
          <StyledLi>Dough Type: {dough}</StyledLi>
          {orderIds.map(this.renderOrder)}
        </StyledUl>
        <Total>
          Total:
          <strong> {formatPrice(price)}</strong>
          <CheckoutBtn onClick={confirmCheckout}>Checkout</CheckoutBtn>
        </Total>
      </div>
    );
  }
}

Order.propTypes = {
  ingredients: PropTypes.array,
  order: PropTypes.object,
  reducerOrder: PropTypes.func,
  addToOrder: PropTypes.func,
  confirmCheckout: PropTypes.func,
  price: PropTypes.number,
  dough: PropTypes.string,
};

export default Order;
