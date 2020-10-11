import React from "react";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

interface IThemeContext {
  theme: boolean;
  handleChangeTheme(): void;
}

const ThemeContext = React.createContext<IThemeContext>(null);

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<boolean>();

  function handleChangeTheme() {
    setTheme(!theme);
    const selectedThemeValue = localStorage.getItem("theme");
    localStorage.setItem("theme", !!!selectedThemeValue ? "dark" : "");
  }

  React.useEffect(() => {
    const selectedThemeValue = localStorage.getItem("theme");
    if (selectedThemeValue === "dark") {
      setTheme(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme ? dark : light}>
      <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export { ThemeContext, ThemeContextProvider };
