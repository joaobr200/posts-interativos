import "styled-components";
import { DefaultTheme } from "styled-components";

interface Theme {
  background: string;
  shadow: string;
  colors: {
    black: string;
    primary: string;
    secundary: string;
    bg: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
