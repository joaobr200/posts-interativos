import React from "react";

import Layout from "../components/layout";
import TimelineSVG from "../assets/timeline.svg";
import { Index, Heading } from "../styles/pages/home";

function Home() {
  return (
    <Layout>
      <Index className="container">
        <div>
          <Heading>Tech Posts</Heading>
          <p>
            Tudo sobre javascript, typescript, teste automatizados e nodejs.
          </p>
        </div>
        <TimelineSVG />
      </Index>
    </Layout>
  );
}

export default Home;
