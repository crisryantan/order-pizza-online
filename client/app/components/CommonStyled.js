import styled from 'styled-components';

export const IngredientWrapper = styled.li`
  border-bottom: 2px solid #000;
  border-top: 1px solid #000;
  padding: 1rem 0;
  margin-bottom: 5px;
  clear: both;
  overflow: hidden;
  display: block;
  font-size: 13px;

  img {
    float: left;
    width: 150px;
    margin-right: 1rem;
  }
`;

export const HighlightH1 = styled.h1`
  font-family: 'Exo 2', sans-serif;
  text-align: center;
  font-weight: normal;
  margin: 0;
  font-size: 3rem;
  line-height: 0.7;
  display: flex;
  justify-content: center;
  color: #e01523;
  text-transform: uppercase;
`;

export const StyledButton = styled.button`
  text-transform: uppercase;
  background: none;
  border: 1px solid #000;
  font-family: 'Exo 2', sans-serif;
  transition: all 0.2s;
  position: relative;
  z-index: 2;

  :after {
    content: '';
    z-index: -1;
    display: block;
    background: #000;
    position: absolute;
    width: 100%;
    height: 0;
    left: 0;
    top: 0;
    transition: all 0.2s;
  }

  :hover,
  :focus {
    color: #fff;
    outline: 0;
  }

  :hover:after,
  :focus:after {
    height: 100%;
  }
`;
