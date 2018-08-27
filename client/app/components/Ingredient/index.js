import React from 'react';
import PropTypes from 'prop-types';
import { IngredientWrapper, StyledButton } from '../CommonStyled';

function Ingredient({ Name, TypeName, Url, addToOrder }) {
  return (
    <IngredientWrapper>
      <img src={Url} alt={Name} />
      <h4>{Name}</h4>
      <p>Type: {TypeName}</p>
      <StyledButton onClick={() => addToOrder(Name)}>Add to order</StyledButton>
    </IngredientWrapper>
  );
}

Ingredient.propTypes = {
  Name: PropTypes.string,
  TypeName: PropTypes.string,
  Url: PropTypes.string,
  addToOrder: PropTypes.func,
};

export default Ingredient;
