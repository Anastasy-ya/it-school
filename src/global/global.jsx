import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  

  ${'' /* * {
    border: 0.5px solid red;
  } */}

  /*плавная прокрутка*/
  /* html {
    scroll-behavior: smooth;
  } */

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    }

  .page {
    width: 100vw;
    height: 100vh;
    background-color: rgba(217, 217, 217, 1);
    min-width: 300px;
  }

  .content {
    overflow: hidden;
  }

  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  article,
  button,
  input,
  label,
  li,
  span,
  pre,
  legend,
  select {
    margin: 0;
    padding: 0;
    font-optical-sizing: auto;
    font-style: normal;
    font-family: 'Montserrat', 'Helvetica Neue', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
    sans-serif;
    color: white;
  }

  input:focus, select:focus {
    outline: none;
  }

  input:invalid {
  color: red;
}

  /*стилизация кнопок при наведении*/
  button:enabled { /*до модификации*/
    transition: all 0.5s linear;
    cursor: pointer;
  }

  button:enabled:hover { /*по наведению*/
    opacity: 0.8;
  }

  button:disabled { /*не активна*/
    background-color: gray;
    color: white;
  }

  /*стилизация линков при наведении*/
  :any-link:hover {
    font-weight: 500;
    cursor: pointer;
  }

  :any-link {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;