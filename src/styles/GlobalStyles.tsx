import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
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

body{
  font-family:var(--primary-font);
  background-color:var(--background-color)
}

:root {
  --color-primary: #ffffff;
  --color-secondary: #ddc916;
  --color-tertiary: #262627;
  --background-color: #565656;

  --primary-font: "Nunito Sans";
  --secondary-font: "Exo 2";
  background-color: var(--background-color);
}

a {
  color: inherit;
  text-decoration: inherit;
}

button {
  border: none;
}

`;
export default GlobalStyles;
