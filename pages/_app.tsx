import React from "react";
import { ThemeContextProvider } from "../context/ThemeContext";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeContextProvider>
  );
}

export default MyApp;
