import React from "react";
import Link from "next/link";

import Nav from "../nav";
import { Container } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Nav />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
