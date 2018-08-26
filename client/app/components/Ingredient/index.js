/**
 *
 * Pagination
 *
 */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  border-bottom: 2px solid #000;
  border-top: 1px solid #000;
  padding: 1rem 0;
  margin-bottom: 5px;
  clear: both;
  overflow: hidden;

  img {
    float: left;
    width: 150px;
    margin-right: 1rem;
  }
`;

class Ingredient extends React.Component {
  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    const { Name, TypeName, Url } = this.props.details;
    return (
      <Wrapper>
        <img src={Url} alt={Name} />
        <h3>{Name}</h3>
        <p>Type: {TypeName}</p>
        <button>Add To Order</button>
      </Wrapper>
    );
  }
}

Ingredient.propTypes = {
  // details: PropTypes.object,
};

export default Ingredient;
