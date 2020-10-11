import React from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { FaMoon, FaSun } from "react-icons/fa";
import { Container, Circle } from "./styles";

const Switch: React.FC = () => {
  const { handleChangeTheme, theme } = React.useContext(ThemeContext);
  return (
    <Container onClick={handleChangeTheme}>
      <FaSun color="yellow" />
      <FaMoon color="#fff" />
      <Circle checked={theme} className={theme ? "checked" : "unchecked"} />
    </Container>
  );
};

export default Switch;
