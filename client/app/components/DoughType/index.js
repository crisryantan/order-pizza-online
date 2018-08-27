import React from 'react';
import PropTypes from 'prop-types';

import { IngredientWrapper, StyledButton } from '../CommonStyled';

function DoughType({ Name, TypeName, Url, description, setDoughType }) {
  return (
    <IngredientWrapper>
      <img src={Url} alt={Name} />
      <h4>{Name}</h4>
      <p>Type: {TypeName}</p>
      <p>{description}</p>
      <StyledButton onClick={() => setDoughType(Name)}>
        Choose Dough
      </StyledButton>
    </IngredientWrapper>
  );
}

DoughType.propTypes = {
  Name: PropTypes.string,
  TypeName: PropTypes.string,
  Url: PropTypes.string,
  description: PropTypes.string,
  setDoughType: PropTypes.func,
};

export default DoughType;
