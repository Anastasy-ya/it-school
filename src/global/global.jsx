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
  pre {
    margin: 0;
    padding: 0;
    font-optical-sizing: auto;
    font-style: normal;
    font-family: 'Montserrat', 'Helvetica Neue', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
    sans-serif;
    color: white;
  }

  /*стили автозаполнения*/
  :-webkit-autofill,
  :-webkit-autofill:hover, 
  :-webkit-autofill:focus {
    border-bottom: 2px solid var(--blue); /*TODO поменять цвет*/
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px var(--main-background) inset;
    transition: background-color 5000s ease-in-out 0.2s;
  }

  input:focus {
    border-bottom: 2px solid var(--blue);  /*TODO поменять цвет*/
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
    color: var(--middle-grey); /*TODO поменять цвет*/
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
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;