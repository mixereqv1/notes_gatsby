import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 80px 65px 0;
    font-family: 'Montserrat';
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
    font-size: 1.6rem;
  }
  
  p {
    font-size: 16px;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
