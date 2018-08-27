import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

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
