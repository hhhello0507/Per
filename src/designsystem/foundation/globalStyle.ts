import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Wanted Sans Variable", "Wanted Sans", sans-serif !important;
    }

    button {
        border: none;
        cursor: pointer;
    }

    input {
        border: none;
        outline: none;
    }
    :root {
        --Neutral-50: #A4A4B0;
        --P50: #FF8529;
    }
`;