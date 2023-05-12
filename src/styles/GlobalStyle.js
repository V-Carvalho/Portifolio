import { createGlobalStyle } from "styled-components";

//TODO: importar use theme aqui

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;    
    font-family: "Montserrat", sans-serif;    
  }
  
  body {
    font-family: monospace;
    background-color: ${(props) => props.theme.primaryColor};
  }
    
  #root {
    display: flex;
    flex-direction: row;
  }
`;