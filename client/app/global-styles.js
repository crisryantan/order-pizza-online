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
    font-size: 3.5rem;
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

  button,
  input[type=submit] {
    text-transform: uppercase;
    background: none;
    border: 1px solid #000;
    font-family: 'Exo 2';
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    position: relative;
    z-index: 2;
  }
  button[disabled],
  input[type=submit][disabled] {
    color: #d12028;
    background: #fff;
    border-color: #d12028;
    -webkit-transform: rotate(-10deg) scale(2) translateX(50%) translateY(-50%);
            transform: rotate(-10deg) scale(2) translateX(50%) translateY(-50%);
  }
  button[disabled]:hover,
  input[type=submit][disabled]:hover {
    color: #d12028;
    cursor: not-allowed;
  }
  button[disabled]:after,
  input[type=submit][disabled]:after {
    display: none;
  }
  button:after,
  input[type=submit]:after {
    content: '';
    z-index: -1;
    display: block;
    background: #000;
    position: absolute;
    width: 100%;
    height: 0;
    left: 0;
    top: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  button:hover,
  input[type=submit]:hover,
  button:focus,
  input[type=submit]:focus {
    color: #fff;
    outline: 0;
  }
  button:hover:after,
  input[type=submit]:hover:after,
  button:focus:after,
  input[type=submit]:focus:after {
    height: 100%;
  }
`;
