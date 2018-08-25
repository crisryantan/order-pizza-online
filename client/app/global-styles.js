import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background: #d4d4d4;
  },

  body {
    font-family: 'Abhaya Libre', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Abhaya Libre', sans-serif;
  }

  p,
  label {
    font-family: 'Abhaya Libre', sans-serif;
    line-height: 1.5em;
  }
`;
