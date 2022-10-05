import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

  html {
    overflow: scroll;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", "Source Serif Pro", sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${(props: any) => props.theme.colors.black};
    overflow-x: hidden;
    color: ${(props: any) => props.theme.colors.lightGrey};
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  input,
  button,
  a {
    color: ${(props: any) => props.theme.colors.lightGrey};
  }
`;

export default GlobalStyle;
export { GlobalStyle };
