import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      margin:0;
      padding:0;
      outline:0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.colors.black};
      font-family: "Roboto", sans-serif;
    }

    .container {
      width:100%;
      max-width:1024px;
      margin:0 auto;
    }
`;
