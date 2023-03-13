import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body{
  padding:10px;
font-family: ${(props) => props.theme.fonts.primary};
background-color:${(props) => props.theme.colors.mainNeutral};
}

ul,
li {
  list-style: none;
  padding-inline-start: 0px;
}

a {
  color: inherit;
  text-decoration: inherit;
}

button {
  border: none;
}

h1,h2,h3{margin:0}


`;
export default GlobalStyles;
