import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Muli', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    transition: .3s, .2s;
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
  ul{
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    list-style: none;
  }
  h1, h2, h3, h4,h5,h6{
    margin: 0.25rem 0.25rem 0.25rem 0 ;
  }
  p{
    text-align: justify;
    margin-bottom: .5rem;
  }
`;
