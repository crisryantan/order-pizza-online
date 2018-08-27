/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  margin: 30px 0px;

  h1 .mixmatch {
    display: flex;
    font-size: 2rem;
    color: #f5a623;
    justify-content: center;
    align-items: center;
    background: url(https://images.vexels.com/media/users/3/131779/isolated/preview/3d4929d289ad98ad71637d5c257d2f08-pizza-logo-1-by-vexels.png)
      center no-repeat;
    background-size: cover;
    padding: 0.2rem 2rem;
  }

  .mix,
  .match {
    position: relative;
  }

  .mix {
    top: -2.2rem;
    right: -3rem;
  }

  .match {
    bottom: -2.1rem;
    left: -1.4rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>
        Pizza
        <span className="mixmatch">
          <span className="mix">Mix</span>
          <span className="match">Match</span>
        </span>
        University
      </h1>
    </StyledHeader>
  );
}

Header.propTypes = {};

export default Header;
