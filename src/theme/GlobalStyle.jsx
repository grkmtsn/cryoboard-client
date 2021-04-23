import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Nunito', sans-serif;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
