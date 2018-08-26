import React, { PropTypes } from 'react';
import { IngredientWrapper } from '../CommonStyled';

function Ingredient({ Name, TypeName, Url, addToOrder }) {
  return (
    <IngredientWrapper>
      <img src={Url} alt={Name} />
      <h4>{Name}</h4>
      <p>Type: {TypeName}</p>
      <button onClick={() => addToOrder(Name)}>Choose Dough</button>
    </IngredientWrapper>
  );
}

export default Ingredient;
