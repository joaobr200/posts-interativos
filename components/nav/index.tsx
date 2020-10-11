import React from "react";
import Link from "next/link";

import Switch from "../switch";
import { Container } from "./styles";

const Nav: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Link href="/">
          <h1>Tech Posts</h1>
        </Link>
        <Switch />
      </div>
    </Container>
  );
};

export default Nav;
