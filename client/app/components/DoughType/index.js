import React, { PropTypes } from 'react';

import { IngredientWrapper } from '../CommonStyled';

function DoughType({ Name, TypeName, Url }) {
  return (
    <IngredientWrapper>
      <img src={Url} alt={Name} />
      <h4>{Name}</h4>
      <p>Type: {TypeName}</p>
      <button>Choose Dough</button>
    </IngredientWrapper>
  );
}

export default DoughType;
