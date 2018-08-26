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
  font-family: Arial;
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
