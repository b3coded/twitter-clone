import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Muli', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100vw;
    min-height: 100vh;
    display: flex;
  }
  #root{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  button{
    cursor: pointer;
  }
`;
