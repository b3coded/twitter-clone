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
    display: grid;
    flex-direction: column;
  }
  #root{
    flex: 1;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.background}
  }
  button{
    cursor: pointer;
  }
`;
