import { createGlobalStyle } from "styled-components";
import HelveticaNeueBold from "../assets/fonts/HelveticaNeue-Bold.woff";
import HelveticaNeueThin from "../assets/fonts/HelveticaNeue-Thin.woff";
import HelveticaNeueLight from "../assets/fonts/HelveticaNeue-Light.woff";
import HelveticaNeueRegular from "../assets/fonts/HelveticaNeue-Regular.woff";
import HelveticaNeueMedium from "../assets/fonts/HelveticaNeue-Medium.woff";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Helvetica Neue';
    src: url('../assets/fonts/HelveticaNeue-Ultralight.woff') format('woff');
    font-weight: 100;
    font-style: normal;
}
    
@font-face {
    font-family: 'Helvetica Neue';
    src: url(${HelveticaNeueThin}) format('woff');
    font-weight: 200;
    font-style: normal;
}
 
@font-face {
    font-family: 'Helvetica Neue';
    src: url(${HelveticaNeueLight}) format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Helvetica Neue';
    src: url(${HelveticaNeueRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
}
   
@font-face {
    font-family: 'HelveticaNeue';
    src: url(${HelveticaNeueMedium}) format('woff');
    font-weight: 600;
    font-style: normal;
}
   
@font-face {
    font-family: 'Helvetica Neue';
    src: url(${HelveticaNeueBold}) format('woff');
    font-weight: 700;
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica Neue", sans-serif;
}

body {
    color: rgb(255, 255, 255);
    font-size: 16px;
    background-color: rgba(8, 8, 8, 1);
}

button {
    border: none;
    cursor: pointer;
}

p {
    line-height: 24px;
}

h1,h2,h3,h4,h5,h6 {
    line-height: 36px;
}

a {
    color: rgb(216, 56, 58);
    text-decoration: none;
}
`;

export default GlobalStyles;
