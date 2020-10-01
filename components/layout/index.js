import React from "react";
import Link from "next/link";

import { Container, Nav } from "./styles";

const layout = ({ children }) => {
  return (
    <Container>
      <Nav>
        <h1>Post Interativos</h1>
        <Link href="/#posts">
          <a>Ver posts</a>
        </Link>
      </Nav>
      <main>{children}</main>
    </Container>
  );
};

export default layout;
