import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; /* so that 1rem = 10px */
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 56.25%; /* 1rem = 9px */
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 50%; /* 1rem = 8px */
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 43.75%; /* 1rem = 7px */
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Nunito', sans-serif;
    line-height: 1.5;
  }

  a,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
