import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #d4d4d4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
  }

  p,
  label {
    font-family: 'Exo 2', sans-serif;
    line-height: 1.5em;
  }

  h1 {
    font-family: 'Exo 2', sans-serif;
    text-align: center;
    font-weight: normal;
    margin: 0;
  }

  h1 {
    font-size: 3rem;
    line-height: 0.7;
    display: flex;
    justify-content: center;
    font-family: 'Exo 2';
    color: #e01523;
    text-transform: uppercase;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }


`;
