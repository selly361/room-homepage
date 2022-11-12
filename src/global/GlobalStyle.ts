import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


*:focus,
*:active {
    -webkit-tap-highlight-color: transparent;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: 'League Spartan';
    font-style: normal;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;

}



input,
button {
    outline: none;
}

a {
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 15px;
    letter-spacing: -0.666667px;
    color: #FFFFFF;
}

h1 {
    font-weight: 600;
    font-size: 38px;
    line-height: 44px;
    letter-spacing: -2px;
    color: #000000;
}

h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
    letter-spacing: 5px;
    color: #000000;
}

p {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.333333px;
    color: #A0A0A0;
}

button,
svg {
    cursor: pointer;
}


a {
    text-decoration: none;
}


input, fieldset, button {
    border: unset;
    outline: unset;
}

`;
